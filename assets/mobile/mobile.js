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

    /* ---------- Section 2: Đa dạng bài tập ---------- */
    const s2=h('section','m-sec m-s2');
    s2.append(reveal(h('h2','m-h2',text(2750))),reveal(cta(),1));
    const photos=[ // same photographs and order as landing.js (alternating women/men, Pliability capture)
      ['rowing','Nữ vận động viên tập máy chèo','50% 38%'],['male-seated-fold','Nam vận động viên giãn cơ đùi sau','50% 50%'],
      ['barbell-squat','Nữ vận động viên tập squat với thanh tạ','50% 36%'],['male-runner','Nam vận động viên chạy trên đường tập cạnh cây xanh','50% 48%'],
      ['stability-ball','Nữ vận động viên tập kiểm soát cơ thể với bóng','50% 42%'],['male-tennis','Nam vận động viên tập tennis ngoài trời','50% 40%']];
    const angles=[-47.5,-28.5,-9.5,9.5,28.5,47.5];
    const fan=h('div','m-fan');
    photos.forEach(([file,alt,pos],i)=>{
      const a=angles[i]*Math.PI/180,slot=h('div','m-fan-slot');
      // Desktop geometry (centre 960/1550, radius 1260, cards 320×480) in % of a 1920×1000 frame.
      slot.style.left=`${(960+Math.sin(a)*1260)/1920*100}%`;slot.style.top=`${(1550-Math.cos(a)*1260)/1000*100}%`;
      const card=h('div','fan-card play');card.style.setProperty('--i',i);card.style.setProperty('--r',angles[i]+'deg');
      const img=h('img');img.src=`assets/photography/${file}.jpg`;img.alt=alt;img.style.objectPosition=pos;img.loading='lazy';
      card.append(img);slot.append(card);fan.append(slot);
    });
    s2.append(fan,reveal(h('p','m-copy m-center',text(2763))));
    // Desktop renders the 3D phone with this workout screen; mobile shows it in the dev-dopafit-app phone frame.
    const phoneBox=reveal(h('div','m-phone-peek','<div class="m-phone m-phone-s2"><div class="m-screen"><img class="is-on" src="assets/phone/workout-screen.webp" alt="Màn hình buổi tập Dopafit" loading="lazy"></div></div>'));s2.append(phoneBox);
    page.append(s2);

    /* ---------- Section 3: Theo dõi nghiêm túc (5 features, pinned phone) ---------- */
    const featureIDs=[2776,2790,2786,2782,2778];
    const screens=['21-lich-thang','01-buoi-tap','04-the-trang','03-dung-cu','10-loc-nguc'];
    const s3=h('section','m-sec m-track');
    s3.append(reveal(h('h2','m-h2',text(2851))));
    const trackScroll=h('div','m-track-scroll');trackScroll.style.setProperty('--n',featureIDs.length);
    const sticky=h('div','m-track-sticky');
    const phone=h('div','m-phone'),screen=h('div','m-screen');
    screens.forEach((s,i)=>{const img=h('img');img.src=`assets/app-captures-2026-11-16/${s}.webp`;img.alt=clean(q(featureIDs[i]).textContent);img.loading='lazy';if(!i)img.classList.add('is-on');screen.append(img);});
    phone.append(screen);
    const steps=h('ol','m-steps');
    featureIDs.forEach((id,i)=>{const li=h('li','',`<span class="m-bar"><i></i></span><span class="m-step-n">${i+1}</span><span>${clean(q(id).textContent)}</span>`);if(!i)li.classList.add('is-on');steps.append(li);});
    sticky.append(phone,steps);trackScroll.append(sticky);s3.append(trackScroll);
    page.append(s3);

    /* ---------- Section 4: Làm thế nào để tập nghiêm túc? (Skydive tools orbit, mobile) ---------- */
    const UI=window.DopafitOrbitUI;
    const s4=h('section','m-sec m-orbit');
    s4.append(reveal(h('h2','m-h2','<span>Làm thế nào để </span><span>tập nghiêm túc?</span>')));
    const orbitWrap=h('div','m-orbit-wrap');
    const orbitIDs=[2856,2764,2871,2875,2878,2881]; // ring first: the figure stands in front of the ring
    const orbitNodes=orbitIDs.map(q);
    const ringBox=visual(q(2857),canvas),ringRight=visual(q(2858),canvas);
    const or={x:ringBox.x-70,y:visual(q(2764),canvas).y-10,w:ringBox.w+ringRight.w+140,h:0};or.h=ringBox.y+ringBox.h+60-or.y;
    const orbitClone=compose(orbitNodes,or);
    const orbitSticky=h('div','m-orbit-sticky');orbitSticky.append(orbitClone);
    const cq=id=>orbitClone.querySelector(`[data-node-id="147:${id}"]`);
    for(let id=2859;id<=2870;id++)cq(id)?.remove();
    const cBody=cq(2764),cActive=cq(2768);cActive?.classList.add('orbit-body-active');
    if(cBody){const scan=h('span','ui-body-scan');scan.setAttribute('aria-hidden','true');cBody.append(scan);}
    const dots=[2871,2875,2878,2881].map(cq);dots.forEach(d=>d?.classList.add('orbit-dot'));
    const panels=h('div','m-orbit-panels');
    function uiBox(kind,{cropTop,cropHeight,width,focus}={}){
      const [w,ht]=kind==='set'||kind==='goal'?[738,1568]:kind==='rest'?[550,328]:[640,1391];
      const top=cropTop||0,hh=cropHeight||ht-top;
      const box=h('div',`m-ui m-ui-${kind}`);box.style.aspectRatio=`${w} / ${hh}`;if(width)box.style.width=width;
      const a=UI.art(kind,{focus});box.append(a);
      // Scale from the art's top-left, then shift the crop window by the scaled amount.
      const f=()=>{if(box.clientWidth){const k=box.clientWidth/w;a.style.scale=String(k);a.style.top=`${-top*k}px`;}};requestAnimationFrame(f);new ResizeObserver(f).observe(box);
      return {box,art:a};
    }
    const tools=[];
    function panel(captionID,build,motions){
      const p=h('article','m-tool');p.append(h('p','m-copy',text(captionID)));
      const stage=h('div','m-tool-ui');build(stage);p.append(stage);panels.append(p);tools.push({el:p,motions});
    }
    // Same order as desktop: video → body map → set log + rest → weekly goal.
    panel(2913,stage=>{
      const fig=h('figure','m-clip');const v=h('video');v.src='assets/landing/row.9c406ddc16.mp4';v.poster='assets/landing/row-poster.93205a615a.jpg';
      v.muted=true;v.loop=true;v.playsInline=true;v.preload='none';v.setAttribute('aria-label','Video hướng dẫn bài tập');
      fig.append(v,h('figcaption','','<b>Video hướng dẫn</b><span>Tự động phát lại</span>'));stage.append(fig);
    },[on=>{const v=panels.querySelector('.m-clip video');if(on&&!reduced)v.play().catch(()=>{});else v.pause();}]);
    let rec,setU,restU,goalU;
    panel(2910,stage=>{rec=uiBox('recovery',{cropHeight:1060,focus:true});rec.box.classList.add('m-ui-phone');stage.append(rec.box);},[]);
    tools[1].motions.push(UI.motion.recovery(rec.art));
    panel(2911,stage=>{setU=uiBox('set',{cropTop:821,cropHeight:747});restU=uiBox('rest');stage.append(setU.box,restU.box);},[]);
    tools[2].motions.push(UI.motion.set(setU.art),UI.motion.rest(restU.art));
    panel(2912,stage=>{goalU=uiBox('goal',{cropTop:375,cropHeight:978});stage.append(goalU.box);},[]);
    const goalPlay=UI.motion.goal(goalU.art);goalPlay(false);tools[3].motions.push(goalPlay);
    const together=h('div','m-orbit-together');
    orbitWrap.append(orbitSticky,panels,together);s4.append(orbitWrap);
    page.append(s4);

    /* ---------- Section 5: Tập ở đâu, làm gì cũng được ---------- */
    const s5=h('section','m-sec m-places');
    s5.append(reveal(h('h2','m-h2',text(2853))));
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
    const imgs=[...screen.querySelectorAll('img')],stepEls=[...steps.children];
    let active=-1,tool=-2,frame=0;
    function onScroll(){frame=0;
      const vh=innerHeight;
      // Section 3: progress through the pinned block picks the feature (dev .stage-steps bars fill per step).
      const tr=trackScroll.getBoundingClientRect(),span=tr.height-vh,p=span>0?Math.min(1,Math.max(0,-tr.top/span)):0;
      const pos=p*featureIDs.length,idx=Math.min(featureIDs.length-1,Math.floor(pos));
      stepEls.forEach((li,i)=>li.style.setProperty('--fill',String(Math.min(1,Math.max(0,pos-i)))));
      if(idx!==active){active=idx;imgs.forEach((im,i)=>im.classList.toggle('is-on',i===idx));stepEls.forEach((li,i)=>li.classList.toggle('is-on',i===idx));}
      // Section 4: the tool whose panel crosses the reading line is active; after the last one, the together state.
      const line=vh*.62;let t=-1;
      tools.forEach((x,i)=>{const r=x.el.getBoundingClientRect();if(r.top<line)t=i;});
      const tg=together.getBoundingClientRect();
      const multi=tg.top<vh*.7;
      const state=multi?4:t;
      if(state!==tool){
        tool=state;
        dots.forEach((d,i)=>{if(!d)return;const revealed=multi||i<=Math.max(t,-1)&&t>=0,isActive=!multi&&i===t;
          d.style.setProperty('--dotscale',String(revealed?(multi?1.35:isActive?1.17:1):.2));d.style.opacity=String(revealed?(isActive||multi?1:.35):0);d.dataset.lifted=String(isActive);});
        tools.forEach((x,i)=>{const on=!multi&&i===t;x.el.classList.toggle('is-active',on);x.motions.forEach(m=>m(on));});
        if(cActive)cActive.dataset.on=String(multi);
      }
    }
    // Ring appears as the orbit pins.
    const ring=orbitClone.querySelector('[data-node-id="147:2856"]');ring?.classList.add('orbit-ring');
    new IntersectionObserver(([e])=>{if(ring)ring.dataset.live=String(e.isIntersecting||reduced);},{threshold:.4}).observe(orbitSticky);
    const req=()=>{if(!frame)frame=requestAnimationFrame(onScroll);};
    addEventListener('scroll',req,{passive:true});addEventListener('resize',req,{passive:true});
    window.DopafitScroll?.lenis?.on('scroll',req);
    onScroll();
  }
  window.DopafitMobileLanding={mount};
})();
