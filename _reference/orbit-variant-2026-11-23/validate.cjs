const{spawn}=require('node:child_process');const fs=require('node:fs/promises');const assert=require('node:assert/strict');
const dir='/private/tmp/dopafit-orbit-variant-2026-11-23',profile=dir+'/chrome-'+Date.now();
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



async function seek(target){let lo=7000,hi=18000;for(let i=0;i<17;i++){const y=(lo+hi)/2;await evaluate(`dopafitJump(${y})`);await wait(85);const p=await evaluate('DopafitOrbitSceneState.progress');if(Math.abs(p-target)<.0005)break;if(p<target)lo=y;else hi=y;}await wait(900);}
const metrics=`(()=>{const mobile=innerWidth<=600,root=mobile?document.querySelector('.m-orbit'):document.querySelector('.orbit-stage');const q=id=>root.querySelector('[data-node-id="147:'+id+'"]'),r=n=>n?.getBoundingClientRect().toJSON();return {mode:DopafitOrbitVariant.enabled,p:window.DopafitOrbitSceneState?.progress,scrollY,body:r(q(2764)),toggle:r(root.querySelector('.orbit-layout-toggle')),font:getComputedStyle(root.querySelector('.orbit-layout-toggle')).fontSize,ring:root.querySelector('.orbit-ring-svg')?.dataset.direction,arc:root.querySelector('.orbit-ring-reveal')?.getAttribute('transform'),dots:[2871,2875,2878,2881].map(id=>({id,rect:r(q(id)),lifted:q(id).dataset.lifted})),panels:mobile?[...root.querySelectorAll('.m-tool')].map(n=>({text:n.querySelector('h3').textContent,rect:r(n),active:n.classList.contains('is-active')})):[2913,2910,2911,2912,2892,2899,2914,2915,2916].map(id=>({id,rect:r(q(id)),side:q(id)?.dataset.side,show:q(id)?.dataset.show})),overflow:document.documentElement.scrollWidth>innerWidth}})()`;

const report=[];
async function checkDesktop(w,h){
 await init(w,h);await evaluate('DopafitOrbitVariant.set(false)');
 await seek(.87);const original=await evaluate(metrics);
 assert.equal(original.ring,'counterclockwise');assert(original.arc.includes('scale(1,-1)'));
 await evaluate('DopafitOrbitVariant.set(true)');await wait(1000);const team=await evaluate(metrics);
 assert.equal(team.ring,'clockwise');assert(!team.arc.includes('scale(1,-1)'));
 assert.equal(team.scrollY,original.scrollY);assert(Math.abs(team.p-original.p)<.00001);assert(!team.overflow);
 const cx=team.body.left+team.body.width/2;
 assert(team.dots.slice(0,2).every(x=>x.rect.left+x.rect.width/2<cx));
 assert(team.dots.slice(2).every(x=>x.rect.left+x.rect.width/2>cx));
 assert(team.panels.slice(0,2).every(x=>x.side==='left'));assert(team.panels.slice(2,4).every(x=>x.side==='right'));
 assert(team.toggle.height>=39&&team.toggle.top>=0&&team.toggle.bottom<h);
 assert(Math.abs(team.toggle.left+team.toggle.width/2-cx)<3);
 assert.equal(team.font,'14px');await shot('validated-team-'+w);
 await evaluate('DopafitOrbitVariant.set(false)');await wait(1000);const reverted=await evaluate(metrics);
 for(let i=0;i<original.panels.length;i++)for(const prop of ['x','y','width','height'])assert(Math.abs(original.panels[i].rect[prop]-reverted.panels[i].rect[prop])<.1,`revert ${w} ${i} ${prop}`);
 report.push({w,h,original,team,reverted});
}
await checkDesktop(1440,900);
// Real pointer toggle + keyboard switch, preserving the scroll scene.
let control=await evaluate(`document.querySelector('.orbit-stage .orbit-layout-toggle').getBoundingClientRect().toJSON()`);
for(const type of ['mousePressed','mouseReleased'])await send('Input.dispatchMouseEvent',{type,x:control.x+control.width/2,y:control.y+control.height/2,button:'left',clickCount:1});
await wait(300);assert(await evaluate('DopafitOrbitVariant.enabled'));
await send('Input.dispatchKeyEvent',{type:'keyDown',key:' ',code:'Space',windowsVirtualKeyCode:32});await send('Input.dispatchKeyEvent',{type:'keyUp',key:' ',code:'Space',windowsVirtualKeyCode:32});await wait(300);assert.equal(await evaluate('DopafitOrbitVariant.enabled'),false);
await init(1440,900);assert.equal(await evaluate('DopafitOrbitVariant.enabled'),false);await evaluate('DopafitOrbitVariant.set(true)');
const arcs=[];
for(const i of [0,1,2,3,2,1,0]){
 const target=(.025+.435*(i+.5)/5)/.46*3.22/4.32;await seek(target);
 const r=await evaluate(metrics),active=r.dots.find(x=>x.lifted==='true');assert.equal(active.id,[2871,2875,2878,2881][i]);
 const arc=await evaluate(`parseFloat(document.querySelector('.orbit-stage .orbit-ring-reveal').style.strokeDasharray)`);arcs.push({i,arc});
 assert(r.panels[i].show==='true');assert(!r.overflow);
}
assert(arcs[0].arc<arcs[1].arc&&arcs[1].arc<arcs[2].arc&&arcs[2].arc<arcs[3].arc);assert(Math.abs(arcs[0].arc-arcs[6].arc)<.001);report.push({arcs});
await checkDesktop(1024,768);
for(const [w,h] of [[390,844],[320,568]]){
 await init(w,h);await evaluate('DopafitOrbitVariant.set(true)');
 for(const i of [0,1,2,3]){
  await evaluate(`(()=>{const n=document.querySelector('.m-orbit-wrap');dopafitJump(n.getBoundingClientRect().top+scrollY+(.35+.8*(${i}+.5))*innerHeight)})()`);await wait(650);
  const r=await evaluate(metrics);assert.equal(r.ring,'clockwise');assert(!r.overflow);assert(r.panels[i].active);assert(r.toggle.height>=39&&r.toggle.bottom<h);
  const ui=await evaluate(`(()=>{const n=document.querySelectorAll('.m-orbit .m-tool')[${i}].querySelector('.m-tool-ui');return n.getBoundingClientRect().toJSON()})()`);
  assert(ui.bottom<=h+1,`mobile UI ${w} ${i} bottom ${ui.bottom}`);assert(ui.top>=0);report.push({w,h,i,ui,state:r});
  await shot('validated-mobile-'+w+'-'+i);
 }
 await evaluate('DopafitOrbitVariant.set(false)');await wait(400);assert.equal((await evaluate(metrics)).ring,'counterclockwise');
}
await init(1440,900,'&motion=off');await evaluate(`(()=>{const n=document.querySelector('.orbit-stage [data-node-id="147:2852"]');dopafitJump(n.getBoundingClientRect().top+scrollY-50)})()`);await wait(600);
await evaluate('DopafitOrbitVariant.set(true)');await wait(200);const reduced=await evaluate(metrics);assert(reduced.panels.slice(0,2).every(n=>n.side==='left'));assert(reduced.panels.slice(2,4).every(n=>n.side==='right'));await shot('validated-reduced');report.push({reduced});
assert.deepEqual(errors,[]);assert.deepEqual(badRequests,[]);
await fs.writeFile(dir+'/validation.json',JSON.stringify({report,errors,badRequests},null,2));console.log('PASS: swapped side geometry, clockwise ordered arcs + reverse, original exact restore, click/space, persistence, desktop/tablet, all mobile panels, reduced-motion option.');ws.close();}
run().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>browser.kill());
