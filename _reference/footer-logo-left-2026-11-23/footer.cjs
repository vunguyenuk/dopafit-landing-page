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
for(const [w,h] of [[1440,900],[390,844]]){
 await init(w,h);
 for(const stage of ['mark','wordmark','complete']){
 const r=await evaluate(`(()=>{const f=innerWidth<=600?document.querySelector('.m-footer-logo .dp-brand'):document.querySelector('[data-node-id="147:2997"].dp-brand');const head=innerWidth<=600?document.querySelector('.m-header .dp-brand'):document.querySelector('[data-node-id="147:2830"].dp-brand');f.dataset.brandStage='${stage}';const m=f.querySelector('.dp-mark'),mr=m.getBoundingClientRect(),fr=f.getBoundingClientRect();return {w:innerWidth,stage:'${stage}',left:getComputedStyle(m).left,transform:getComputedStyle(m).transform,track:getComputedStyle(f.querySelector('.dp-wordmark-track')).animationName,headLeft:getComputedStyle(head.querySelector('.dp-mark')).left,footerLeft:fr.left,markLeft:mr.left}})()`);
 assert.equal(r.left,'0px');assert(!r.transform.includes('-17'));if(stage==='wordmark')assert.equal(r.track,'none');report.push(r);
 }
}
assert.deepEqual(errors,[]);assert.deepEqual(badRequests,[]);await fs.writeFile(dir+'/footer-validation.json',JSON.stringify({report,errors,badRequests},null,2));console.log('PASS footer D anchored left in all stages, desktop/mobile');ws.close();}
run().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>browser.kill());
