const{spawn}=require('node:child_process');const fs=require('node:fs/promises');const assert=require('node:assert/strict');
const dir='/private/tmp/dopafit-hero-pixel-20261123',profile=dir+'/chrome-'+Date.now();
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
const sample=`(()=>{const root=innerWidth<=600?document.querySelector('.m-orbit'):document.querySelector('.orbit-stage'),svg=root.querySelector('.orbit-ring-svg');return {direction:svg.dataset.direction,live:svg.dataset.live,progress:+svg.dataset.progress,target:parseFloat(svg.querySelector('.orbit-ring-reveal').style.strokeDasharray),duration:getComputedStyle(svg.querySelector('.orbit-ring-reveal')).transitionDuration,dots:[2871,2875,2878,2881].map(id=>{const d=root.querySelector('[data-node-id="147:'+id+'"]');return {id,contact:+d.dataset.ringContact,reached:d.dataset.ringReached==='true',opacity:+d.style.opacity,active:d.dataset.lifted==='true',filter:getComputedStyle(d).filter}})}})()`;
function valid(r){if(r.live==='true')for(const d of r.dots)assert.equal(d.reached,r.progress+.0001>=d.contact);}
for(const [w,h] of [[1440,900],[390,844]]){
 await init(w,h);
 for(const variant of [true,false]){
  await evaluate('DopafitOrbitVariant.set('+variant+')');
  let a,b;
  if(w>600){await seek(.06);a=await evaluate('scrollY');await seek(.60);b=await evaluate('scrollY');}
  else {const info=await evaluate(`(()=>{const n=document.querySelector('.m-orbit-wrap');return {top:n.getBoundingClientRect().top+scrollY,vh:innerHeight}})()`);a=info.top+info.vh*(.35+.8*.4);b=info.top+info.vh*(.35+.8*3.4);}
  await evaluate('dopafitJump('+a+')');await wait(700);
  const settled=await evaluate(sample);valid(settled);
  const frames=await evaluate(`(async()=>{dopafitJump(${b});const result=[];for(const delay of [16,40,70,100,150,200]){await new Promise(r=>setTimeout(r,delay));result.push(${sample});}return result})()`);
  await shot('ring-'+w+'-'+variant);frames.forEach(valid);assert(frames.some(r=>r.dots.some(d=>d.active&&!d.reached)),'target icon must wait for actual arc');assert(frames.at(-1).dots.find(d=>d.active)?.reached,'target icon must light after contact');assert.equal(frames.at(-1).duration,'0.45s');
  const reverse=await evaluate(`(async()=>{dopafitJump(${a});const result=[];for(const delay of [16,80,150,300]){await new Promise(r=>setTimeout(r,delay));result.push(${sample});}return result})()`);reverse.forEach(valid);
  report.push({width:w,variant,settled,frames,reverse});
 }
}
assert.deepEqual(errors,[]);assert.deepEqual(badRequests,[]);await fs.writeFile('/Users/vunguyen/Desktop/dopafit-landing-page/_reference/orbit-ring-sync-2026-11-23/validation.json',JSON.stringify({report,errors,badRequests},null,2));console.log('PASS actual arc/icon contact synchronization, forward/reverse, both directions, desktop/mobile');ws.close();}
run().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>browser.kill());
