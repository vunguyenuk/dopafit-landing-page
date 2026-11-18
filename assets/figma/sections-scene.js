/* Lower sections, user requests 2026-11-18.
   1) "Tập ở đâu, làm gì cũng được, miễn là có tập" — three feature cards (147:2919–2921 backgrounds + 147:2923/2927/2933):
     - preserve the Figma row's1568px span and enlarge its cards to leave24 screen px gaps,
     - restore centre-out scroll spread, with opaque faces and delayed side copy to avoid heading overlap,
     - the Figma glass gradient reflects light across the card face, without a duplicate below,
     - green checks belong to the middle card's three guidance points.
   Spread reuses the existing6° /30px /.94 values, manually estimated originally.
   The user's final request restores centre-out motion. See lower-section provenance.
   2) "Deeply integrates with" — pinned: the section holds while the glow (147:3138) travels from the top logo
      down to Apple Health, then the page continues.
   3) "Bạn bỏ bao nhiêu buổi tập rồi?" — calendar + heading + button fitted to the same 1240px column.
   4) FAQ — rebuilt in the style of pliability-com-2026-11-17T08-19-26-053Z ("Frequently asked questions."):
      regular-weight heading + grey support line with underlined link on the left; grey questions, outlined round
      plus buttons (1px rgb(58,58,60) on black) and 1px rgb(58,58,60) row rules on the right; answers fade/expand.
      Pliability sizes (1440px page) × 1.333 for the 1920px canvas, row pitch reduced to fit above the footer. */
(() => {
  'use strict';
  const q=id=>document.querySelector(`[data-node-id="147:${id}"]`);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches||new URLSearchParams(location.search).get('motion')==='off';
  const canvas=document.getElementById('design-canvas');
  if(!canvas)return;

  // Correct card: the three green checks describe the middle guidance card.
  const tips=q(2932);
  if(tips){
    const labels=tips.textContent.replace(/\u00a0/g,' ').trim().split(/\s*-\s*/);
    tips.classList.add('places-tips');tips.replaceChildren();
    labels.forEach((label,i)=>{const item=document.createElement('span');item.className='places-tip';item.style.setProperty('--i',i);item.innerHTML='<span class="places-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="#0b1203" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12.5l4 4 8-9"/></svg></span>';item.append(document.createTextNode(label));tips.append(item);});
  }
  // Localize the original vector progress caption without altering its values.
  const calendarCount=q(2944);
  if(calendarCount){calendarCount.classList.add('calendar-count');calendarCount.style.maskImage='none';calendarCount.replaceChildren();calendarCount.innerHTML='<span>18</span><small>trên</small><span>31</span>';}
  const muscle=q(2935);if(muscle){const label=document.createElement('span');label.className='places-muscle-label';label.textContent='Nhóm cơ';muscle.append(label);}
  if(window.DopafitMobile)return;

  const offsetTo=n=>{let x=0,y=0,e=n;while(e&&e!==canvas){x+=e.offsetLeft;y+=e.offsetTop;e=e.offsetParent;}return {x,y};};
  const pairs=[[2919,2923],[2920,2927],[2921,2933]].map(([b,c])=>[q(b),q(c)]);
  if(pairs.some(([b,c])=>!b||!c))return;
  const row=document.createElement('div');row.className='places-row';
  pairs[0][0].before(row);
  // Measure all three first: moving a card out of its flex row (147:2922) reflows the others.
  const boxes=pairs.map(([bg,card])=>({bx:bg.offsetLeft,by:bg.offsetTop,bw:bg.offsetWidth,bh:bg.offsetHeight,c:offsetTo(card),cw:card.offsetWidth,chh:card.offsetHeight}));
  const groups=pairs.map(([bg,card],i)=>{
    const g=document.createElement('div');g.className='places-card';
    const {bx,by,bw,bh,c,cw,chh}=boxes[i];
    Object.assign(g.style,{left:`${bx}px`,top:`${by}px`,width:`${bw}px`,height:`${bh}px`});
    Object.assign(bg.style,{left:'0px',top:'0px',right:'auto',bottom:'auto'});
    Object.assign(card.style,{position:'absolute',left:`${c.x-bx}px`,top:`${c.y-by}px`,width:`${cw}px`,height:`${chh}px`,flex:'none',margin:'0'});
    const surface=document.createElement('div');surface.className='places-surface';surface.append(bg,card);
    const light=document.createElement('span');light.className='places-glass-light';light.setAttribute('aria-hidden','true');
    light.style.backgroundImage=bg.style.backgroundImage;surface.append(light);g.append(surface);row.append(g);
    const reflect=window.DopafitCardReflection?.mount(surface,i-1);
    return {g,surface,bg,reflect,cx:bx+bw/2,top:by,width:bw,height:bh};
  });
  // Same Figma1568-design-pixel row; enlarge cards to leave exactly24 screen px.
  const rowTop=groups[0].top,anchor=document.createElement('span');
  anchor.className='places-scroll-anchor';anchor.style.top=`${rowTop}px`;row.append(anchor);
  let centre=960,last=-1,frame=0,lastGlass='';
  function fitCards(){
    const scale=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--design-scale'))||1;
    // User 2026-11-18: cards a little smaller than the Figma 1568px row (now 1380px, still centred; estimate).
    const ROW=1380,gap=24/scale,width=(ROW-gap*2)/3;
    groups.forEach((g,i)=>{const x=960-ROW/2+i*(width+gap),size=width/g.width;g.cx=x+width/2;Object.assign(g.g.style,{left:`${x}px`,top:`${rowTop}px`,width:`${width}px`,height:`${g.height*size}px`});g.surface.style.scale=String(size);});
    last=-1;
  }
  fitCards();
  const smooth=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};
  function render(){
    frame=0;
    const top=anchor.getBoundingClientRect().top,vh=innerHeight,heading=q(2853).getBoundingClientRect();
    const visible=heading.top<vh*.85&&top<vh*.95;
    const e=reduced?1:visible?smooth((vh*.95-top)/(vh*.60)):0;
    // User request 2026-11-18: the glass light keeps moving while the cards scroll through the viewport
    // (it used to stop once the cards had opened), and no reflected studio windows.
    const pass=Math.max(0,Math.min(1,(vh-top)/(vh+groups[0].g.getBoundingClientRect().height)));
    const gx=`${Math.round((5+pass*90)*10)/10}%`;
    if(gx!==lastGlass){lastGlass=gx;groups.forEach(g=>g.g.style.setProperty('--glass-x',gx));}
    const k=Math.round(e*1000)/1000;
    if(k===last)return;last=k;
    groups.forEach((g,i)=>{
      const side=i-1,t=1-k;
      g.g.style.transform=side?`translateX(${(centre-g.cx)*t}px) rotate(${side*6*t}deg) scale(${.94+.06*k})`:`translateY(${30*t}px)`;
      // Opaque card faces occlude the stack. Side copy appears after separation,
      // so the original centre-out motion never layers three headings together.
      g.surface.children[1].style.opacity=String(side?smooth((k-.75)/.25):1);
      // Existing Figma light band above the actual artwork, not hidden behind opaque images.
      // Same260% sweep as dev index.html h2 em / @keyframes sheen.
      g.reflect?.(k);
    });
    row.dataset.progress=String(k);row.classList.toggle('is-open',k>=.98);
  }
  addEventListener('resize',()=>{fitCards();req();},{passive:true});
  addEventListener('dopafit:typography',()=>{fitCards();req();});
  // 2) Integrations: pinned scroll scene. The section holds in the viewport while the glow (147:3138) travels
  //    from the WHOOP logo down to Apple Health; only then does the page continue. landing.js calls map() after
  //    the orbit hold, the same hold technique as orbit-scene.js (canvas held + spacer for the extra scroll).
  const glow=q(3138),topLogo=q(3153),intHead=q(3199);
  const glowTravel=glow&&topLogo?Math.max(0,glow.offsetTop+glow.offsetHeight/2-(topLogo.offsetTop+topLogo.offsetHeight/2)):0;
  if(glow)glow.classList.add('integrations-glow');
  const PIN_VH=1.1; // scroll budget for the glow, in viewport heights (estimate)
  let lastGlow=-1,pinSpacer=null,lastSpacer=-1;
  function renderGlow(p){
    if(!glow)return;
    const k=Math.round((reduced?1:smooth(p))*1000)/1000;if(k===lastGlow)return;lastGlow=k;
    glow.style.translate=`0 ${-glowTravel*(1-k)}px`;
  }
  const pin={shift:0,progress:0,map(y,h,scale){
    if(!glow||!intHead)return {y,shift:0};
    const top=offsetTo(intHead).y-90,bottom=offsetTo(glow).y+glow.offsetHeight;
    const pinStart=(top+bottom)/2-h/2,length=h*PIN_VH;
    const shift=Math.max(0,Math.min(length,y-pinStart));
    this.shift=shift;this.progress=length?shift/length:0;
    const orbit=window.DopafitOrbitSceneState?.shift||0,total=orbit+shift;
    canvas.style.transform=total?`translateY(${total}px)`:'';
    if(!pinSpacer){pinSpacer=document.createElement('div');pinSpacer.className='section-pin-spacer';pinSpacer.setAttribute('aria-hidden','true');canvas.after(pinSpacer);}
    const px=Math.round(length*scale);
    if(px!==lastSpacer){lastSpacer=px;pinSpacer.style.height=`${px}px`;window.DopafitScroll?.lenis?.resize();}
    renderGlow(this.progress);
    return {y:y-shift,shift};
  }};
  window.DopafitSectionPins=pin;
  renderGlow(0);

  // 3) Calendar section into the 1240px column.
  const calendarImage=q(2994);
  if(calendarImage){const at=offsetTo(calendarImage);q(2991).before(calendarImage);Object.assign(calendarImage.style,{left:`${at.x}px`,top:`${at.y}px`,width:'807px',height:'538px'});}
  const calNodes=[q(2937),calendarImage,q(2854),q(2991)].filter(Boolean); // 147:2937 holds the calendar image 147:2994
  if(calNodes.length===4){
    const wrap=document.createElement('div');wrap.className='section-fit';
    calNodes[0].before(wrap);calNodes.forEach(n=>wrap.append(n));
    const rects=[...wrap.querySelectorAll('*')].map(n=>({l:offsetTo(n).x,w:n.offsetWidth})).filter(r=>r.w>0);
    const l=Math.min(...rects.map(r=>r.l)),rgt=Math.max(...rects.map(r=>r.l+r.w)),top=q(2994)?offsetTo(q(2994)).y:offsetTo(calNodes[1]).y;
    const s=Math.min(1,1240/(rgt-l)),m=(l+rgt)/2;
    wrap.style.transformOrigin=`${m}px ${top}px`;wrap.style.transform=`translateX(${960-m}px) scale(${s})`;
    window.DopafitLowerMotion?.mountCalendar(q(2994));
  }

  const req=()=>{if(!frame)frame=requestAnimationFrame(render);};
  addEventListener('scroll',req,{passive:true});addEventListener('resize',req,{passive:true});
  window.addEventListener('dopafit:scroll',req);
  render();

  // 4) FAQ (desktop canvas). Built after landing.js has attached the answers.
  document.addEventListener('DOMContentLoaded',()=>{
    const sec=q(2795),footer=[q(2995),q(2874)].filter(Boolean);
    if(!sec)return;
    const qIDs=[2796,2800,2804,2808,2812,2816];
    const items=qIDs.map(id=>{const row=q(id);return {q:row?.querySelector('p')?.textContent.replace(/\s+/g,' ').trim()||'',a:row?.querySelector('.faq-answer')?.textContent||''};});
    const head=[...q(2823).querySelectorAll('p')].map(p=>p.textContent.trim()).join(' ');
    const wrap=document.createElement('div');wrap.className='faq-pl';
    wrap.innerHTML=`<div class="faq-pl-left"><h2>${head}</h2><p>Bạn chưa tìm thấy câu trả lời? Xem <a href="mailto:support@dopafit.app">trang hỗ trợ</a> hoặc gửi email đến support@dopafit.app.</p></div>
      <div class="faq-pl-list">${items.map((it,i)=>`<div class="faq-pl-item"><button type="button" class="faq-pl-q" aria-expanded="false" aria-controls="faq-pl-a${i}"><span>${it.q}</span><i aria-hidden="true"></i></button><div class="faq-pl-a" id="faq-pl-a${i}" role="region"><p>${it.a}</p></div></div>`).join('')}</div>`;
    [...sec.children].forEach(c=>c.classList.add('faq-figma-hidden'));
    sec.classList.add('faq-pl-host');sec.append(wrap);
    const footerTop=Math.min(...footer.map(n=>n.offsetTop)),baseCanvas=canvas.offsetHeight;
    function fitFooter(){
      const bottom=sec.offsetTop+wrap.offsetHeight+48,delta=Math.max(0,bottom-footerTop);
      footer.forEach(n=>n.style.translate=`0 ${delta}px`);
      canvas.style.height=`${baseCanvas+delta}px`;
      window.DopafitScroll?.lenis?.resize();
    }
    wrap.querySelectorAll('.faq-pl-q').forEach(btn=>btn.addEventListener('click',()=>{
      const open=btn.getAttribute('aria-expanded')==='true';
      wrap.querySelectorAll('.faq-pl-q').forEach(b=>{b.setAttribute('aria-expanded','false');b.parentElement.classList.remove('is-open');});
      if(!open){btn.setAttribute('aria-expanded','true');btn.parentElement.classList.add('is-open');}
      // Follow the height transition so the footer moves with the list.
      const t0=performance.now();const step=()=>{fitFooter();if(performance.now()-t0<520)requestAnimationFrame(step);};step();
    }));
    fitFooter();
    addEventListener('dopafit:typography',fitFooter);
  });
})();
