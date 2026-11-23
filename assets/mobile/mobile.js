/* Dopafit mobile layout (≤600px). The desktop page is a 1920px Figma canvas scaled to the viewport,
   which leaves 3–7px text on a phone. Below 600px this file builds a one-column page instead:
     - headings and copy are real text read from the Figma nodes (so copy stays in sync),
     - visual blocks are clones of the Figma nodes, scaled to the column width,
     - the app UI is the live HTML from assets/figma/orbit-ui.js.
   Section order and motion order follow the desktop page. Motion sources:
     - fan: the user-supplied Radial Card Fan keyframes in landing.css, triggered once when visible
     - reveals / phone screens / step bars: dev-dopafit-app (.reveal, .phone .screen img.is-on, .stage-steps .bar)
     - orbit: Skydive "Real work happens in real tools" mobile states (dot reveal/lift/dim, panels rise 18px)
   landing.js calls DopafitMobileLanding.mount() right after the hero and skips the desktop scenes. */
(() => {
  'use strict';
  const mq=matchMedia('(max-width: 600px)');
  window.DopafitMobile=mq.matches;
  // Crossing the breakpoint (rotation, window resize) swaps to the other page.
  mq.addEventListener('change',()=>location.reload());
  if(!window.DopafitMobile)return;
  document.documentElement.classList.add('is-mobile');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches||new URLSearchParams(location.search).get('motion')==='off';

  const h=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;};
  const clean=t=>t.replace(/\s+/g,' ').trim();

  function mount({q}){
    const canvas=document.getElementById('design-canvas');
    const text=id=>clean(q(id)?.textContent||'');
    const openDownload=()=>document.getElementById('download-dialog')?.showModal();

    // Clone Figma nodes at their own layout boxes (transforms kept) and show the design rect r, scaled to the column.
    const rootOf=n=>n.closest('.skydive-header-canvas')||canvas;
    function offsetTo(n,root){let x=0,y=0,e=n;while(e&&e!==root){x+=e.offsetLeft;y+=e.offsetTop;e=e.offsetParent;}return {x,y};}
    function visual(n,root){const b=n.getBoundingClientRect(),rb=root.getBoundingClientRect();return {x:b.left-rb.left,y:b.top-rb.top,w:b.width,h:b.height};}
    const expand=n=>getComputedStyle(n).display==='contents'?[...n.children].flatMap(expand):[n];
    function compose(list,r,{crop=1}={}){
      const nodes=list.flatMap(expand),root=rootOf(list[0]);
      r=r||visual(nodes[0],root);
      const box=h('div','m-clone');box.style.aspectRatio=`${r.w} / ${r.h*crop}`;
      const inner=h('div','m-clone-inner');inner.style.width=`${r.w}px`;inner.style.height=`${r.h}px`;
      nodes.forEach(n=>{
        // Pure translations (incl. ancestors' centring transforms) → place at the on-screen box, transform dropped.
        // Rotated/scaled nodes keep their own transform and are placed at their layout box.
        const cs=getComputedStyle(n),m=new DOMMatrix(cs.transform==='none'?undefined:cs.transform);
        const plain=m.a===1&&m.b===0&&m.c===0&&m.d===1&&cs.rotate==='none'&&cs.scale==='none';
        const v=visual(n,root),o=offsetTo(n,root),c=n.cloneNode(true);strip(c);
        const x=plain?v.x:o.x,y=plain?v.y:o.y;
        c.style.cssText+=`;position:absolute;left:${x-r.x}px;top:${y-r.y}px;right:auto;bottom:auto;width:${n.offsetWidth}px;height:${n.offsetHeight}px;margin:0${plain?';transform:none;translate:none':''}`;
        inner.append(c);
      });
      box.append(inner);fit(box,inner,r.w);return box;
    }
    const cloneBox=(n,o)=>compose([n],null,o);
    // Clones drop Figma text that the mobile page renders as real text.
    const hide=(box,ids)=>ids.forEach(id=>box.querySelector(`[data-node-id="147:${id}"]`)?.remove());
    function strip(c){c.removeAttribute('id');c.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));c.querySelectorAll('.phone-webgl,.faq-answer').forEach(e=>e.remove());}
    function fit(box,inner,w){const f=()=>{if(box.clientWidth)inner.style.scale=String(box.clientWidth/w);};requestAnimationFrame(f);new ResizeObserver(f).observe(box);}
    function unionRect(list){
      const nodes=list.flatMap(expand),root=rootOf(list[0]);
      const rs=nodes.flatMap(n=>[n,...n.querySelectorAll('*')]).map(n=>visual(n,root)).filter(r=>r.w>0&&r.h>0);
      const x=Math.min(...rs.map(r=>r.x)),y=Math.min(...rs.map(r=>r.y));
      return {x,y,w:Math.max(...rs.map(r=>r.x+r.w))-x,h:Math.max(...rs.map(r=>r.y+r.h))-y};
    }
    const cta=label=>{const b=h('button','m-cta',label||'Tải ứng dụng');b.type='button';b.addEventListener('click',openDownload);return b;};
    const reveal=(el,d=0)=>{el.classList.add('m-reveal');el.style.setProperty('--d',d);return el;};

    const page=h('div','m-page');page.id='m-landing';

    /* ---------- Header (inside the hero, so it fades out with the hero like the desktop header) ---------- */
    const headerHost=document.querySelector('.skydive-header-canvas');
    if(headerHost){
      const bar=h('div','m-header');
      const logo=h('a','m-logo');logo.href='#';logo.setAttribute('aria-label','Dopafit — trang đầu');logo.append(cloneBox(q(2830)));
      logo.addEventListener('click',e=>{e.preventDefault();scrollTo({top:0,behavior:reduced?'auto':'smooth'});});
      bar.append(logo,cta());headerHost.append(bar);
    }

    /* Two-line headings (user 2026-11-18: "Đa dạng bài tập…" and "Tập ở đâu…" in exactly 2 lines): the text is split
       at a chosen point, each line stays whole, and the size shrinks from the usual 32px only as far as needed for
       the longer line to fit the screen. */
    const twoLineHeads=[];
    function twoLines(t,at){
      const i=at(t);const el=h('h2','m-h2 m-h2-2l',i>0?`<span>${t.slice(0,i).trim()}</span><span>${t.slice(i).trim()}</span>`:t);
      twoLineHeads.push(el);return el;
    }
    function fitTwoLines(){twoLineHeads.forEach(el=>{el.style.fontSize='';const room=el.parentElement?.clientWidth-40,w=Math.max(...[...el.children].map(c=>c.scrollWidth));
      if(room>0&&w>room)el.style.fontSize=`${Math.floor(parseFloat(getComputedStyle(el).fontSize)*room/w)}px`;});}
    addEventListener('resize',fitTwoLines);document.fonts?.ready.then(fitTwoLines);requestAnimationFrame(fitTwoLines);

    /* ---------- Section 2: Đa dạng bài tập ---------- */
    const s2=h('section','m-sec m-s2');
    s2.append(reveal(twoLines(text(2750),t=>t.indexOf('và nhóm cơ'))),reveal(cta(),1));
    const photos=window.DopafitContent.fan.map((alt,i)=>[i+1,alt,'50% 50%']);
    const angles=[-47.5,-28.5,-9.5,9.5,28.5,47.5];
    const fan=h('div','m-fan');
    photos.forEach(([file,alt,pos],i)=>{
      const a=angles[i]*Math.PI/180,slot=h('div','m-fan-slot');
      // Desktop geometry (centre 960/1550, radius 1260, cards 320×480) in % of a 1920×1000 frame.
      slot.style.left=`${(960+Math.sin(a)*1260)/1920*100}%`;slot.style.top=`${(1550-Math.cos(a)*1260)/1000*100}%`;
      const card=h('div','fan-card play');card.style.setProperty('--i',i);card.style.setProperty('--r',angles[i]+'deg');
      const img=window.DopafitFanVideo.create(file-1);img.style.objectPosition=pos;
      card.append(img);slot.append(card);fan.append(slot);
    });
    s2.append(fan,reveal(h('p','m-copy m-center',text(2763))));
    // After the fan has opened, the cards keep sliding along the arc like the desktop fan (landing.js turnFan:
    // 360° per 50 s, cards wrap around the arc and fade at its ends), only while the fan is on screen.
    {
      const slots=[...fan.children],arc=(angles[1]-angles[0])*slots.length,edge=arc/2,fadeStart=angles.at(-1),perMs=360/50000;
      let rot=0,last=null,raf=0,opened=false,inView=false;
      const place=()=>slots.forEach((slot,i)=>{const ang=((angles[i]+rot+edge)%arc+arc)%arc-edge,r=ang*Math.PI/180;
        slot.style.left=`${(960+Math.sin(r)*1260)/1920*100}%`;slot.style.top=`${(1550-Math.cos(r)*1260)/1000*100}%`;
        slot.style.opacity=String(Math.max(0,Math.min(1,(edge-Math.abs(ang))/(edge-fadeStart))));
        slot.firstChild.style.setProperty('--r',`${ang}deg`);});
      const turn=t=>{rot=(rot+(t-(last??t))*perMs)%arc;last=t;place();raf=inView&&opened?requestAnimationFrame(turn):0;};
      const go=()=>{if(opened&&inView&&!raf&&!reduced){last=null;raf=requestAnimationFrame(turn);}};
      slots.at(-1).firstChild.addEventListener('animationend',()=>{opened=true;go();});
      new IntersectionObserver(([e])=>{inView=e.isIntersecting;go();}).observe(fan);
    }
    // Desktop renders the 3D phone with this workout screen; mobile shows it in the dev-dopafit-app phone frame.
    const phoneBox=(h('div','m-phone-peek','<div class="m-phone m-phone-s2"><div class="m-screen"><img class="is-on" src="assets/phone/workout-screen.webp" alt="Màn hình buổi tập Dopafit" loading="lazy"></div></div>'));s2.append(phoneBox);
    page.append(s2);

    /* ---------- Section 3: Theo dõi nghiêm túc (4 Figma features, pinned phone) ---------- */
    const featureIDs=[2776,2790,2786,2782];
    const screens=window.DopafitContent.screens;
    const s3=h('section','m-sec m-track');
    s3.append(reveal(h('h2','m-h2',text(2851))));
    const trackScroll=h('div','m-track-scroll');trackScroll.style.setProperty('--n',featureIDs.length);
    const sticky=h('div','m-track-sticky');
    const phone=h('div','m-phone'),screen=h('div','m-screen');
    screens.forEach((s,i)=>{const img=h('img');img.src=s;img.alt=clean(q(featureIDs[i]).textContent);img.loading='lazy';if(!i)img.classList.add('is-on');screen.append(img);});
    phone.append(screen);
    // Easier to follow on a phone (user 2026-11-18): a row of 4 progress bars on top (all steps visible at once),
    // the current step's text under it, then the phone showing that step.
    const bars=h('div','m-step-bars');featureIDs.forEach(()=>bars.append(h('span','m-bar','<i></i>')));
    const steps=h('ol','m-steps');
    featureIDs.forEach((id,i)=>{const li=h('li','',`<span class="m-step-n">${i+1}/${featureIDs.length}</span><span>${clean(q(id).textContent)}</span>`);if(!i)li.classList.add('is-on');steps.append(li);});
    sticky.append(bars,steps,phone);trackScroll.append(sticky);s3.append(trackScroll);
    s3.append(cta());page.append(s3);

    /* ---------- Section 4: Làm thế nào để tập nghiêm túc? (Skydive tools orbit, mobile) ---------- */
    const UI=window.DopafitOrbitUI;
    const s4=h('section','m-sec m-orbit');
    const orbitWrap=h('div','m-orbit-wrap');
    const orbitIDs=[2856,2764,2871,2875,2878,2881]; // ring first: the figure stands in front of the ring
    const orbitNodes=orbitIDs.map(q);
    const ringBox=visual(q(2857),canvas),ringRight=visual(q(2858),canvas);
    const or={x:ringBox.x-70,y:visual(q(2764),canvas).y-10,w:ringBox.w+ringRight.w+140,h:0};or.h=ringBox.y+ringBox.h+60-or.y;
    const orbitClone=compose(orbitNodes,or);
    // Skydive "Real work happens in real tools" mobile layout: ONE pinned full-height stage (sticky, h-screen) holding the
    // figure and only the active tool panel under it, scaled to fit, so short phones see the whole panel
    // (source: skydive-com …/assets/main-goXeaETJ.js, the tools-orbit section: sticky top-0 h-screen, orbit scaled
    // 0.7 from the top, the active tool card absolutely under the orbit). Claude 2026-11-18.
    const orbitSticky=h('div','m-orbit-sticky');const orbitFig=h('div','m-orbit-fig');orbitFig.append(orbitClone);
    // Feedback 2026-11-18 (title not sticky, top/bottom layout hard to follow): the section title rides in the pinned
    // stage. Each panel starts with a chip carrying the same icon as the lit dot on the ring, so the eye links the
    // icon up top with the app UI below (user: no progress bars).
    const orbitHead=h('div','m-orbit-head');
    orbitHead.append(h('h2','m-h2 m-orbit-title',text(2852)));
    window.DopafitOrbitVariant?.mount(orbitHead);
    orbitSticky.append(orbitHead,orbitFig);
    const FIG_AR=or.w/or.h;
    const cq=id=>orbitClone.querySelector(`[data-node-id="147:${id}"]`);
    for(let id=2859;id<=2870;id++)cq(id)?.remove();
    const cBody=cq(2764),cActive=cq(2768);cActive?.classList.add('orbit-body-active');
    if(cBody){const scan=h('span','ui-body-scan');scan.setAttribute('aria-hidden','true');cBody.append(scan);}
    const dots=[2871,2875,2878,2881].map(cq);dots.forEach(d=>d?.classList.add('orbit-dot'));
    // Mobile keeps the accepted single-panel flow; mirror only the icon positions
    // on its compact figure so the same reveal order travels clockwise.
    const originalDots=dots.map(n=>({n,left:parseFloat(n.style.left),width:parseFloat(n.style.width)}));
    const lh=cq(2857),rh=cq(2858),edge=n=>[parseFloat(n.style.left),parseFloat(n.style.width)],a=edge(lh),b=edge(rh),axis=(Math.min(a[0],b[0])+Math.max(a[0]+a[1],b[0]+b[1]))/2;
    const setOrbitVariant=enabled=>{
      s4.dataset.variant=enabled?'team':'original';
      originalDots.forEach(({n,left,width})=>n.style.setProperty('left',`${enabled?2*axis-left-width:left}px`,'important'));
    };
    if(window.DopafitOrbitVariant){setOrbitVariant(window.DopafitOrbitVariant.enabled);addEventListener('dopafit:orbit-variant',e=>setOrbitVariant(e.detail.enabled));}

    const panels=h('div','m-orbit-panels');
    function uiBox(kind,{cropTop,cropHeight,width,focus}={}){
      const [w,ht]=kind==='set'?[738,1568]:kind==='goal'?[390,844]:kind==='rest'?[550,328]:[640,1391];
      const top=cropTop||0,hh=cropHeight||ht-top;
      const box=h('div',`m-ui m-ui-${kind}`);box.style.aspectRatio=`${w} / ${hh}`;if(width)box.style.width=width;
      const a=UI.art(kind,{focus});box.append(a);
      // Scale from the art's top-left, then shift the crop window by the scaled amount.
      const f=()=>{if(box.clientWidth){const k=box.clientWidth/w;a.style.scale=String(k);a.style.top=`${-top*k}px`;}};requestAnimationFrame(f);new ResizeObserver(f).observe(box);
      return {box,art:a};
    }
    const tools=[];
    const CHIPS={2913:[2871,'Video hướng dẫn'],2910:[2875,'Bản đồ phục hồi'],2911:[2878,'Ghi hiệp & giờ nghỉ'],2912:[2881,'Sức mạnh tổng']};
    function panel(captionID,build,motions){
      const p=h('article','m-tool');
      const [dotID,label]=CHIPS[captionID]||[];const icon=dotID&&q(dotID)?.querySelector('img')?.getAttribute('src');
      if(label)p.append(h('span','m-tool-chip',`${icon?`<i><img src="${icon}" alt=""></i>`:''}<b>${label}</b>`));
      const [title,body]=window.DopafitContent.orbit[captionID];p.append(h('h3','m-tool-heading',title),h('p','m-copy',body));
      const stage=h('div','m-tool-ui');build(stage);p.append(stage);panels.append(p);tools.push({el:p,motions});
    }
    // Same order as desktop: video → body map → set log + rest → total strength.
    panel(2913,stage=>{
      const fig=h('figure','m-clip');const v=h('video');v.src='assets/landing/row.9c406ddc16.mp4';v.poster='assets/landing/row-poster.93205a615a.jpg';
      v.muted=true;v.loop=true;v.playsInline=true;v.preload='none';v.setAttribute('aria-label','Video hướng dẫn bài tập');
      fig.append(v,h('figcaption','','<b>Video hướng dẫn</b><span>Tự động phát lại</span>'));stage.append(fig);
    },[on=>{const v=panels.querySelector('.m-clip video');if(on&&!reduced)v.play().catch(()=>{});else v.pause();}]);
    let rec,setU,restU,goalU;
    panel(2910,stage=>{rec=uiBox('recovery',{cropHeight:1240,focus:true});rec.box.classList.add('m-ui-phone');stage.append(rec.box);},[]);
    tools[1].motions.push(UI.motion.recovery(rec.art));
    panel(2911,stage=>{setU=uiBox('set',{cropTop:741,cropHeight:827});restU=uiBox('rest');stage.append(setU.box,restU.box);},[]);
    tools[2].motions.push(UI.motion.set(setU.art),UI.motion.rest(restU.art));
    panel(2912,stage=>{goalU=uiBox('goal',{cropHeight:844});stage.append(goalU.box);},[]);
    const goalPlay=UI.motion.goal(goalU.art);goalPlay(false);tools[3].motions.push(goalPlay);
    orbitSticky.append(panels);orbitWrap.append(orbitSticky);s4.append(orbitWrap);
    // Scroll budget: a short lead-in, one slot per tool, then the "together" state (estimates, in viewport heights).
    const ORBIT_LEAD=.35,ORBIT_SLOT=.8,ORBIT_MULTI=.9;
    orbitWrap.style.height=`calc(100svh + ${((ORBIT_LEAD+ORBIT_SLOT*tools.length+ORBIT_MULTI)*100).toFixed(0)}svh)`;
    // Fit: figure takes at most ~36% of the stage height; each panel is scaled down (never up) to the room left.
    function fitOrbit(){
      const vh=orbitSticky.clientHeight||innerHeight,vw=innerWidth;
      // In the "together" state no panel shows, so the figure grows into the free room.
      const together=orbitSticky.classList.contains('is-together');
      const figW=together?Math.min(vw*.86,380,vh*.6*FIG_AR):Math.min(vw*.5,230,vh*(vh<720?(window.DopafitOrbitVariant ? .16 : .22):.28)*FIG_AR);orbitFig.style.width=`${figW}px`;
      if(together)return;
      const room=panels.clientHeight;
      // The caption keeps its reading size; only the app UI under it is scaled to the room that is left.
      tools.forEach(x=>{const ui=x.el.querySelector('.m-tool-ui');if(!ui)return;
        ui.style.scale='';const nat=ui.offsetHeight;
        // Reserve the actual chip + heading + copy, including the toggle above
        // the figure, before fitting each native app UI into the sticky viewport.
        const left=room-ui.offsetTop-8;
        ui.style.scale=String(nat>left&&left>0?Math.max(.1,left/nat):1);});
    }
    new ResizeObserver(fitOrbit).observe(orbitSticky);tools.forEach(x=>new ResizeObserver(fitOrbit).observe(x.el));
    page.append(s4);

    /* ---------- Section 5: Tập ở đâu, làm gì cũng được ---------- */
    const s5=h('section','m-sec m-places');
    // Two lines (user 2026-11-18): split after the comma before "miễn", each line kept whole.
    s5.append(reveal(twoLines(text(2853),t=>t.indexOf('mọi lúc'))));
    const rail=h('div','m-rail');
    [[2919,2923],[2920,2927],[2921,2933]].forEach(([bg,card],i)=>{
      const item=reveal(h('div','m-rail-item'),i);item.append(compose([q(bg),q(card)],visual(q(bg),canvas)));rail.append(item);window.DopafitCardReflection?.mount(item,i-1)?.(1);
    });
    s5.append(rail);page.append(s5);

    /* ---------- Section 6: integrations ---------- */
    const s6=h('section','m-sec m-integrations');
    const intNode=q(3125);
    // Crop to the heading and the three logos (the Figma frame also holds a 1440px line backdrop).
    s6.append(reveal(h('h2','m-int-title',`<span>${text(3199)}</span> <b>${text(3200)}</b> <span>${text(3201)}</span>`)));
    if(intNode)s6.append(reveal(compose([q(3124)],{x:700,y:visual(q(3199),canvas).y+60,w:520,h:visual(q(3194),canvas).y+visual(q(3194),canvas).h+90-(visual(q(3199),canvas).y+60)})));
    page.append(s6);

    /* ---------- Section 7: Bạn bỏ bao nhiêu buổi tập rồi? ---------- */
    const s7=h('section','m-sec m-missed');
    const cal=q(2937),calImg=q(2994);
    if(cal&&calImg){const visual=reveal(compose([cal,calImg],unionRect([calImg,cal])));s7.append(visual);window.DopafitLowerMotion?.mountCalendar(visual.querySelector('[data-node-id="147:2994"]'));}
    s7.append(reveal(h('h2','m-h2',text(2854)),1),reveal(cta(),2));
    page.append(s7);

    /* ---------- Section 8: FAQ ---------- */
    const s8=h('section','m-sec m-faq');
    s8.append(reveal(h('p','m-eyebrow',text(2822))),reveal(h('h2','m-h2 m-left',`${clean(q(2823).children[0].textContent)} <br>${clean(q(2823).children[1].textContent)}`)));
    const list=h('div','m-faq-list');
    const answers=[...document.querySelectorAll('.faq-answer')].map(a=>a.textContent);
    [2798,2802,2806,2810,2814,2818].forEach((id,i)=>{
      const item=h('details','m-faq-item');item.append(h('summary','',`<span>${text(id)}</span><i aria-hidden="true"></i>`),h('p','m-copy',answers[i]||''));
      list.append(reveal(item,i));
    });
    s8.append(list,reveal(h('p','m-copy m-muted',`Bạn chưa tìm thấy câu trả lời? Gửi email đến <a href="mailto:support@dopafit.app">support@dopafit.app</a>.`)));
    page.append(s8);

    /* ---------- Footer ---------- */
    const foot=h('footer','m-footer');
    const flogo=h('a','m-footer-logo');flogo.href='#';flogo.setAttribute('aria-label','Dopafit — trang đầu');flogo.append(cloneBox(q(2830)));
    flogo.addEventListener('click',e=>{e.preventDefault();scrollTo({top:0,behavior:reduced?'auto':'smooth'});}); // exact same mark/action as the header
    foot.append(flogo,h('p','m-copy m-muted',text(3013)));
    const cols=h('div','m-footer-cols');
    [['Sản phẩm',[3016,3017,3018]],['Hỗ trợ',[3021,3022]],['Pháp lý',[3025,3026]]].forEach(([title,ids])=>{
      const c=h('div','',`<p class="m-eyebrow">${title}</p>`);ids.forEach(id=>c.append(h('p','m-link',text(id))));cols.append(c);
    });
    foot.append(cols,h('p','m-fine',`${text(3027)} · ${text(3028)}`));
    // Keep the same real footer photograph, behind the existing mobile copy.
    // A native picture avoids shrinking a desktop screenshot (and its text).
    const banner=h('div','m-banner');banner.append(q(2874).querySelector('picture').cloneNode(true),q(2874).querySelector('.footer-motto').cloneNode(true));foot.prepend(banner);
    page.append(foot);

    canvas.before(page);
    document.documentElement.classList.add('m-ready');

    /* ---------- Motion ---------- */
    // dev .reveal: rise in once when ~15% visible.
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}}),{rootMargin:'0px 0px -12% 0px'});
    page.querySelectorAll('.m-reveal').forEach(el=>reduced?el.classList.add('is-in'):io.observe(el));
    // Radial Card Fan: trigger once when the fan is visible.
    new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){fan.classList.add('is-on');o.disconnect();}}),{threshold:.25}).observe(fan);
    if(reduced)fan.classList.add('is-on');

    // Scroll-driven parts read layout once per frame.
    const imgs=[...screen.querySelectorAll('img')],stepEls=[...steps.children],barEls=[...bars.children];
    let active=-1,tool=-2,frame=0;
    function onScroll(){frame=0;
      const vh=innerHeight;
      // Section 3: progress through the pinned block picks the feature (dev .stage-steps bars fill per step).
      const tr=trackScroll.getBoundingClientRect(),span=tr.height-vh,p=span>0?Math.min(1,Math.max(0,-tr.top/span)):0;
      const pos=p*featureIDs.length,idx=Math.min(featureIDs.length-1,Math.floor(pos));
      barEls.forEach((b,i)=>b.style.setProperty('--fill',String(Math.min(1,Math.max(0,pos-i)))));
      if(idx!==active){active=idx;imgs.forEach((im,i)=>im.classList.toggle('is-on',i===idx));stepEls.forEach((li,i)=>li.classList.toggle('is-on',i===idx));}
      // Section 2: the phone rises out of the fade as its block scrolls up (desktop: the 3D phone pushes up).
      {const r=phoneBox.getBoundingClientRect(),pr=Math.max(0,Math.min(1,(vh-r.top)/(vh*.6)));
        phoneBox.style.setProperty('--rise',pr.toFixed(3));}
      // Section 4: progress through the pinned stage picks the tool; after the last one, the together state.
      const orr=orbitWrap.getBoundingClientRect(),ospan=orr.height-vh,op=ospan>0?Math.max(0,-orr.top)/vh:0;
      const tPos=(op-ORBIT_LEAD)/ORBIT_SLOT;
      const multi=ospan>0&&tPos>=tools.length;
      UI.setStrengthProgress((tPos-3-.15)/.70);
      const scan=reduced?1:Math.min(1,Math.max(0,(op-ORBIT_LEAD-ORBIT_SLOT*tools.length)/(ORBIT_MULTI*.90)));
      cBody?.style.setProperty('--body-scan-inset',`${(1-scan)*100}%`);
      cBody?.style.setProperty('--body-scan-opacity',String(Math.min(Math.min(1,scan/.06),Math.min(1,(1-scan)/.10))));
      const t=tPos<0?-1:Math.min(tools.length-1,Math.floor(tPos));
      const state=multi?4:t;
      if(state!==tool){
        tool=state;
        dots.forEach((d,i)=>{if(!d)return;const revealed=multi||i<=Math.max(t,-1)&&t>=0,isActive=!multi&&i===t;
          d.style.setProperty('--dotscale',String(revealed?(multi?1.35:isActive?1.17:1):.2));d.style.opacity=String(revealed?(isActive||multi?1:.35):0);d.dataset.lifted=String(isActive);});
        tools.forEach((x,i)=>{const on=!multi&&i===t;x.el.classList.toggle('is-active',on);x.motions.forEach(m=>m(on));});
        if(cActive)cActive.dataset.on=String(multi);
        orbitSticky.classList.toggle('is-together',multi);fitOrbit();
      }
    }
    // Ring appears as the orbit pins.
    const ring=orbitClone.querySelector('[data-node-id="147:2856"]');ring?.classList.add('orbit-ring');
    new IntersectionObserver(([e])=>{if(ring)ring.dataset.live=String(e.isIntersecting||reduced);},{threshold:.4}).observe(orbitSticky);
    const req=()=>{if(!frame)frame=requestAnimationFrame(onScroll);};
    addEventListener('scroll',req,{passive:true});addEventListener('resize',req,{passive:true});
    window.DopafitScroll?.lenis?.on('scroll',req);
    fitOrbit();onScroll();
  }
  window.DopafitMobileLanding={mount};
})();
