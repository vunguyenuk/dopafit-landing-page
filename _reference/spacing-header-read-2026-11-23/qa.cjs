const{spawn}=require('node:child_process');const fs=require('node:fs/promises');const assert=require('node:assert/strict');
const dir='/private/tmp/dopafit-spacing-header-read-20261123',profile=dir+'/chrome-'+Date.now();
const browser=spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',['--headless','--no-first-run','--no-default-browser-check','--hide-scrollbars','--disable-background-timer-throttling','--enable-unsafe-swiftshader','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'});
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function run(){let port;for(let i=0;i<100;i++){port=await fs.readFile(profile+'/DevToolsActivePort','utf8').catch(()=>null);if(port)break;await wait(100);}assert(port);const [target]=await fetch('http://127.0.0.1:'+parseInt(port)+'/json/list').then(r=>r.json());const ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise(r=>ws.addEventListener('open',r));let id=0;const pending=new Map(),errors=[],badRequests=[];
ws.addEventListener('message',({data})=>{const m=JSON.parse(data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text);if(m.method==='Network.responseReceived'&&m.params.response.status>=400&&!m.params.response.url.endsWith('/favicon.ico'))badRequests.push([m.params.response.status,m.params.response.url]);if(!m.id)return;const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);});
const send=(method,params={})=>new Promise((resolve,reject)=>{const k=++id;pending.set(k,{resolve,reject});ws.send(JSON.stringify({id:k,method,params}));});
async function evaluate(expression){const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;}
await send('Runtime.enable');await send('Page.enable');await send('Network.enable');
async function init(w,h,extra=''){await send('Page.navigate',{url:'about:blank'});await wait(150);await send('Emulation.setDeviceMetricsOverride',{width:w,height:h,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://127.0.0.1:8097/?intro-qa='+Date.now()+extra});for(let i=0;i<200;i++){try{if(await evaluate('document.readyState==="complete" && !!window.dopafitJump && !!document.querySelector("#skydive-hero-scene")'))break;}catch{}await wait(80);}await evaluate('document.fonts.ready');for(let i=0;i<200;i++){if(await evaluate(`!!document.querySelector('.intro-phone[data-ready="true"],.intro-phone[data-reduced="true"],.intro-phone[data-fallback]')`))break;await wait(60);}console.log('INIT',await evaluate(`({ready:document.querySelector('.intro-phone').dataset.ready,error:document.querySelector('.intro-phone').dataset.fallback,reduced:document.querySelector('.intro-phone').dataset.reduced})`));}
async function shot(name){const s=await send('Page.captureScreenshot',{format:'png'});await fs.writeFile(dir+'/'+name+'.png',Buffer.from(s.data,'base64'));}
async function jump(t){await evaluate(`(()=>{const s=document.querySelector('#dopafit-intro');dopafitJump(s.offsetTop+${t}/3*(s.offsetHeight-s.firstElementChild.clientHeight));})()`);await wait(200);}



async function seek(target){let lo=0,hi=await evaluate('document.documentElement.scrollHeight-innerHeight');for(let i=0;i<17;i++){const y=(lo+hi)/2;await evaluate(`dopafitJump(${y})`);await wait(85);const p=await evaluate('DopafitOrbitSceneState.progress');if(Math.abs(p-target)<.0005)break;if(p<target)lo=y;else hi=y;}await wait(900);}
const metrics=`(()=>{const mobile=innerWidth<=600,root=mobile?document.querySelector('.m-orbit'):document.querySelector('.orbit-stage');const q=id=>root.querySelector('[data-node-id="147:'+id+'"]'),r=n=>n?.getBoundingClientRect().toJSON();return {mode:DopafitOrbitVariant.enabled,p:window.DopafitOrbitSceneState?.progress,scrollY,body:r(q(2764)),toggle:r(root.querySelector('.orbit-layout-toggle')),font:getComputedStyle(root.querySelector('.orbit-layout-toggle')).fontSize,ring:root.querySelector('.orbit-ring-svg')?.dataset.direction,arc:root.querySelector('.orbit-ring-reveal')?.getAttribute('transform'),dots:[2871,2875,2878,2881].map(id=>({id,rect:r(q(id)),lifted:q(id).dataset.lifted})),panels:mobile?[...root.querySelectorAll('.m-tool')].map(n=>({text:n.querySelector('h3').textContent,rect:r(n),active:n.classList.contains('is-active')})):[2913,2910,2911,2912,2892,2899,2914,2915,2916].map(id=>({id,rect:r(q(id)),side:q(id)?.dataset.side,show:q(id)?.dataset.show})),overflow:document.documentElement.scrollWidth>innerWidth}})()`;

const report=[];
for(const [w,h] of [[1440,900],[1920,1080],[1024,768]]){
 await init(w,h);await evaluate('dopafitJump(120)');await wait(700);
 const header=await evaluate(`(()=>{const q=id=>document.querySelector('[data-node-id="147:'+id+'"]'),r=id=>q(id).getBoundingClientRect().toJSON();return {bar:r(2825),menu:r(2826),logo:r(2830),button:r(2847)}})()`);
 const cy=r=>r.top+r.height/2,cx=r=>r.left+r.width/2;
 assert(Math.abs(cx(header.bar)-cx(header.logo))<.1);for(const n of ['menu','logo','button'])assert(Math.abs(cy(header[n])-cy(header.bar))<.15,`header ${w} ${n}`);
 const pads=[header.button.top-header.bar.top,header.bar.right-header.button.right,header.bar.bottom-header.button.bottom];assert(pads.every(n=>Math.abs(n-12)<.15));await shot('header-'+w);
 await evaluate('DopafitOrbitVariant.set(true)');await seek(.87);const team=await evaluate(metrics);
 const part=id=>team.panels.find(n=>n.id===id).rect;
 assert(part(2916).top-part(2915).bottom>28,'distinct UI groups have breathing room');
 assert(team.body.top-team.toggle.bottom>=26,'figure clears heading/toggle');assert(!team.overflow);
 assert(team.panels.filter(n=>n.show==='true').every(n=>n.rect.left>=0&&n.rect.right<=w+.5&&n.rect.bottom<=h+.5));await shot('orbit-team-'+w);
 await evaluate('DopafitOrbitVariant.set(false)');await wait(900);const original=await evaluate(metrics);assert(original.panels.slice(0,2).every(n=>n.side==='right'));assert.equal(original.ring,'counterclockwise');assert(!original.overflow);await shot('orbit-original-'+w);
 report.push({w,h,header,pads,team,original});
}
// A complete sentence uses the same source glyph wave, with extra scroll only in the read interval.
for(const [w,h] of [[1440,900],[390,844]]){
 await init(w,h);
 const heroInfo=await evaluate(`(()=>{const n=document.querySelector('#skydive-hero-scene');return {top:n.offsetTop,height:n.offsetHeight,vh:n.firstElementChild.clientHeight}})()`);
 const narrow=Math.min(w,h)<560||w<640,start=narrow?.32:.35,end=narrow?.55:.54,exit=narrow?.57:.56,exitSpan=narrow?.09:.1;
 const base=heroInfo.vh*2,extra=heroInfo.vh*3.2,startScroll=base*.75*(start-.18)/(exit+exitSpan-.18),endScroll=base*.75*(end-.18)/(exit+exitSpan-.18);
 const yFor=seq=>heroInfo.top+startScroll+seq/3.58*(endScroll-startScroll+extra);
 const oldPerLine=(endScroll-startScroll)/3.58,newPerLine=(endScroll-startScroll+extra)/3.58;
 assert(newPerLine>oldPerLine*5);assert(Math.abs(heroInfo.height/heroInfo.vh-6.2)<.01);
 const samples=[];
 for(const i of [0,1,2,3,2,1,0]){
  await evaluate(`dopafitJump(${yFor(i+.55)})`);await wait(180);
  const state=await evaluate(`(()=>{const s=document.querySelector('#skydive-hero-scene');return {sentence:+s.dataset.sentence,phase:s.dataset.phase,lines:[...s.querySelectorAll('.pain-line')].map(n=>({visible:getComputedStyle(n).visibility,alpha:[...n.querySelectorAll('.pain-glyph')].map(g=>+getComputedStyle(g).opacity)}))}})()`);
  assert.equal(state.sentence,i);assert.equal(state.lines.filter(n=>n.visible==='visible').length,1);assert(state.lines[i].alpha.every(n=>n===1));samples.push(state);if(samples.length<=4)await shot('read-'+w+'-'+i);
 }
 await evaluate(`dopafitJump(${heroInfo.top+heroInfo.height-heroInfo.vh})`);await wait(250);
 const endState=await evaluate(`(()=>{const s=document.querySelector('#skydive-hero-scene');return {complete:s.dataset.complete,handoff:s.dataset.handoff,copy:+getComputedStyle(s.querySelector('.pain-copy')).opacity,photos:[...s.querySelectorAll('.skydive-source-card')].map(n=>+getComputedStyle(n).opacity),main:getComputedStyle(document.querySelector('#landing')).opacity}})()`);
 assert.equal(endState.complete,'true');assert.equal(endState.handoff,'1');assert.equal(endState.copy,0);assert(endState.photos.every(n=>n===0));assert.equal(endState.main,'1');await shot('read-handoff-'+w);
 report.push({w,h,heroInfo,oldPerLine,newPerLine,samples,endState});
}
assert.deepEqual(errors,[]);assert.deepEqual(badRequests,[]);await fs.writeFile(dir+'/validation.json',JSON.stringify({report,errors,badRequests},null,2));console.log('PASS spacing, both layouts, centered header/equal 12px edges, slower reading + reverse + completed handoff');ws.close();}
run().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>browser.kill());
