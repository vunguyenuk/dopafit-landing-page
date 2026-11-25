const{spawn}=require('node:child_process');const fs=require('node:fs/promises');const assert=require('node:assert/strict');
const dir='/Users/vunguyen/Desktop/dopafit-landing-page/_reference/english-2026-11-25/qa',profile='/private/tmp/dopafit-en-final-'+Date.now();
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
for(const [w,h] of [[1440,900],[2560,1440],[390,844]]){
 await init(w,h);const end=await evaluate('document.documentElement.scrollHeight-innerHeight');
 for(let y=0;y<end;y+=h*.7){await evaluate('dopafitJump('+y+')');await wait(90);}
 await evaluate('dopafitJump(document.documentElement.scrollHeight-innerHeight)');await wait(800);await shot('final-footer-'+w);
 if(w>600){
 const m=await evaluate(`(()=>{const q=id=>document.querySelector('[data-node-id="147:'+id+'"]'),bottom=Math.max(...[3013,3016,3017,3018,3021,3022,3025,3026].map(id=>q(id).getBoundingClientRect().bottom));return {gap:q(3027).getBoundingClientRect().top-bottom,legalGap:q(3028).getBoundingClientRect().top-bottom,calendar:!!document.querySelector('.calendar-model-ready'),headers:[2750,2851,2852,2853,2854].map(id=>{const n=q(id);return {id,font:parseFloat(getComputedStyle(n).fontSize)*n.getBoundingClientRect().width/n.offsetWidth}})}})()`);assert(m.gap>=30);assert(m.legalGap>=30);assert(m.calendar);assert(m.headers.every(x=>x.font<=64.2));report.push({w,...m});
 // Forward + reverse retain the same source phone and four translated focus views.
 for(const i of [3,2,1,0]){await evaluate(`[...document.querySelectorAll('.feature-tab')].find(n=>n.getAttribute('aria-label')===DopafitContent.features[${i}]).click()`);for(let t=0;t<80;t++){if(await evaluate('window.DopafitAppRecording.focus.feature')===i)break;await wait(100);}assert.equal(await evaluate('window.DopafitAppRecording.focus.feature'),i);}
 const cardY=await evaluate(`document.querySelector('.places-row').getBoundingClientRect().top+scrollY-100`);await evaluate('dopafitJump('+cardY+')');await wait(600);await shot('final-cards-'+w);
 const reviewY=await evaluate(`document.querySelector('.community-reviews').getBoundingClientRect().top+scrollY-80`);await evaluate('dopafitJump('+reviewY+')');await wait(500);await shot('final-reviews-'+w);
 const calY=await evaluate(`document.querySelector('[data-node-id="147:2994"]').getBoundingClientRect().top+scrollY-150`);await evaluate('dopafitJump('+calY+')');await wait(1000);await shot('final-calendar-'+w);
 }else{report.push({w,overflow:await evaluate('document.documentElement.scrollWidth>innerWidth')});}
 await evaluate('dopafitJump(0)');await wait(700);assert.equal(await evaluate(`document.querySelector('[data-intro-exercise]').paused`),false);await shot('final-initial-'+w);
}
assert.deepEqual(errors,[]);assert.deepEqual(badRequests,[]);await fs.writeFile(dir+'/final-flow.json',JSON.stringify({report,errors,badRequests},null,2));console.log(JSON.stringify({report,errors,badRequests},null,2));ws.close();}
run().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>browser.kill());
