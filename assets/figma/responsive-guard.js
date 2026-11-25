/* Keep the two existing source builds (desktop canvas / compact single column).
   Audit 2026-11-25: one owner for breakpoint changes, with semantic restoration
   instead of retaining a pixel offset from a different-length document. */
(() => {
  'use strict';
  const mq=window.DopafitCompactQuery||matchMedia('(max-width:1100px)');
  const KEY='dopafit-responsive-position',clamp=x=>Math.max(0,Math.min(1,x));
  const q=id=>document.querySelector(`[data-node-id="147:${id}"]`);
  const definitions=[
    ['intro','#dopafit-intro','#dopafit-intro'],['hero','#skydive-hero-scene','#skydive-hero-scene'],
    ['exercises','.m-s2','[data-node-id="147:2750"]'],['tracking','.m-track','[data-node-id="147:2851"]'],
    ['orbit','.m-orbit','[data-node-id="147:2852"]'],['places','.m-places','[data-node-id="147:2853"]'],
    ['reviews','.community-reviews','.community-reviews'],['integrations','.m-integrations','[data-node-id="147:3198"]'],
    ['calendar','.m-missed','[data-node-id="147:2854"]'],['faq','.m-faq','.faq-pl'],['footer','.m-footer','[data-node-id="147:2995"]']
  ];
  const anchors=()=>definitions.map(([key,mobile,desktop])=>({key,node:document.querySelector(window.DopafitMobile?mobile:desktop)})).filter(x=>x.node);
  const faqState=()=>window.DopafitMobile?[...document.querySelectorAll('.m-faq-item')].map(n=>n.open):[...document.querySelectorAll('.faq-pl-q')].map(n=>n.getAttribute('aria-expanded')==='true');
  function capture(){
    const list=anchors();let current=list[0];
    list.forEach(x=>{if(x.node.getBoundingClientRect().top<=innerHeight*.35)current=x;});
    if(!current)return null;
    const r=current.node.getBoundingClientRect(),state={section:current.key,top:r.top/innerHeight,faq:faqState(),dialog:document.querySelector('#download-dialog')?.open,at:Date.now()};
    if(['intro','hero'].includes(current.key))state.progress=clamp(-r.top/Math.max(1,current.node.offsetHeight-innerHeight));
    if(current.key==='tracking')state.feature=window.DopafitMobile?Math.min(3,Math.floor(Number(document.querySelector('.m-track-scroll')?.dataset.progress||0)*4)):Number(document.querySelector('.tracking-copy')?.dataset.activeFeature||0);
    if(current.key==='orbit')state.tool=window.DopafitMobile?Number(document.querySelector('.m-orbit-wrap')?.dataset.toolPosition||0):(Number(window.DopafitOrbitSceneState?.progress||0)*4.32-.12)/.62;
    return state;
  }
  let snapshot=null,frame=0,reloading=false;
  const sample=()=>{frame=0;if(!reloading)snapshot=capture();};
  addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(sample);},{passive:true});
  mq.addEventListener('change',()=>{
    if(mq.matches===!!window.DopafitMobile)return;
    const now=capture(),state={...(snapshot||now),faq:faqState(),dialog:now?.dialog,at:Date.now()};
    try{sessionStorage.setItem(KEY,JSON.stringify(state));}catch{}
    if(reloading)return;reloading=true;location.reload();
  });
  const next=()=>new Promise(r=>requestAnimationFrame(r));
  const jump=y=>window.dopafitJump?window.dopafitJump(y):scrollTo(0,y);
  async function restore(){
    let state;try{state=JSON.parse(sessionStorage.getItem(KEY)||'null');sessionStorage.removeItem(KEY);}catch{}
    if(!state||Date.now()-state.at>30000){sample();return;}
    await document.fonts.ready;await next();await next();
    state.faq?.forEach((open,i)=>{
      if(window.DopafitMobile){const n=document.querySelectorAll('.m-faq-item')[i];if(n)n.open=open;}
      else {const n=document.querySelectorAll('.faq-pl-q')[i];if(n&&(n.getAttribute('aria-expanded')==='true')!==open)n.click();}
    });
    // Wait for source FAQ grid transitions and measured clone sizes to settle.
    await new Promise(r=>setTimeout(r,450));
    const anchor=anchors().find(x=>x.key===state.section)?.node;
    if(anchor){
      if(state.section==='orbit'&&!window.DopafitMobile){
        const target=clamp((.12+.62*Math.max(0,state.tool))/4.32);
        let lo=0,hi=document.documentElement.scrollHeight-innerHeight;
        for(let i=0;i<17;i++){const y=(lo+hi)/2;jump(y);await next();await next();if((window.DopafitOrbitSceneState?.progress||0)<target)lo=y;else hi=y;}
      }else if(state.section==='orbit'){
        const n=document.querySelector('.m-orbit-wrap');jump(scrollY+n.getBoundingClientRect().top+innerHeight*(.35+.8*Math.max(0,state.tool)));
      }else if(state.section==='tracking'&&window.DopafitMobile){
        const n=document.querySelector('.m-track-scroll');jump(scrollY+n.getBoundingClientRect().top+(n.offsetHeight-innerHeight)*((state.feature+.35)/4));
      }else if(['intro','hero'].includes(state.section)){
        jump(scrollY+anchor.getBoundingClientRect().top+state.progress*(anchor.offsetHeight-innerHeight));
      }else{
        for(let i=0;i<18;i++){const delta=anchor.getBoundingClientRect().top-state.top*innerHeight;if(Math.abs(delta)<1)break;jump(scrollY+delta);await next();await next();}
        if(state.section==='tracking')document.querySelectorAll('.feature-tab').forEach(n=>{if(n.getAttribute('aria-label')===window.DopafitContent.features[state.feature])n.click();});
      }
    }
    if(state.dialog)document.querySelector('#download-dialog')?.showModal();
    document.documentElement.dataset.responsiveRestore=state.section;sample();
  }
  window.DopafitResponsive={capture};
  if(document.readyState==='complete')restore();else addEventListener('load',restore,{once:true});

  // Retain the existing desktop phone/title guard above the compact breakpoint.
  if(window.DopafitMobile)return;
  const GAP=32;let base=null,fitFrame=0;
  function fit(){
    fitFrame=0;const title=q(2851),phone=q(2771);
    if(!title||!phone||!phone.classList.contains('phone-docked'))return;
    if(base===null)base=title.style.width||'';
    const before=title.style.width;title.style.width=base;
    const t=title.getBoundingClientRect(),p=phone.getBoundingClientRect(),k=t.width/title.offsetWidth||1,room=p.left-GAP-t.left;
    if(t.right>p.left-GAP&&room>120)title.style.width=`${(room/k).toFixed(1)}px`;
    if(title.style.width!==before)dispatchEvent(new Event('dopafit:typography'));
  }
  const req=()=>{if(!fitFrame)fitFrame=requestAnimationFrame(fit);};
  addEventListener('resize',req,{passive:true});addEventListener('load',req);
  const phone=q(2771);if(phone)new MutationObserver(req).observe(phone,{attributes:true,attributeFilter:['class']});req();
})();
