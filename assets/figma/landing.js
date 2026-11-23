(() => {
  'use strict';
  const q=id=>document.querySelector(`[data-node-id="147:${id}"]`);
  const canvas=document.getElementById('design-canvas');
  [[2850,1],[2750,2],[2851,2],[2852,2],[2853,2],[2854,2],[2823,2]].forEach(([id,level])=>{q(id).setAttribute('role','heading');q(id).setAttribute('aria-level',String(level));});
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).get('motion')==='off';
  if(reduced)document.documentElement.classList.add('motion-off');
  let scale=1,frame=0,viewWidth=0,viewH=innerHeight;
  // iOS/Android toolbars change innerHeight while scrolling. Keep scroll maths on a stable
  // height and only re-measure on a real resize (width/orientation or a large change).
  function stableHeight(){if(innerWidth!==viewWidth||Math.abs(innerHeight-viewH)>160){viewWidth=innerWidth;viewH=innerHeight;}return viewH;}
  function resize(){stableHeight();scale=document.documentElement.clientWidth/1920;document.documentElement.style.setProperty('--design-scale',scale);requestRender();}
  function link(el,action,label){if(!el)return;el.tabIndex=0;el.setAttribute('role','button');if(label)el.setAttribute('aria-label',label);el.addEventListener('click',action);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();action();}});}
  const download=document.getElementById('download-dialog');
  [2751,2847,2991].forEach(id=>{const el=q(id);el.classList.add('download-link');link(el,()=>download.showModal(),'Tải ứng dụng');});
  download.querySelector('button').addEventListener('click',()=>download.close());
  download.addEventListener('click',e=>{if(e.target===download){const r=download.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)download.close();}});
  const scrollToNode=id=>{const el=q(id);if(el)window.DopafitScroll.scrollTo(el.getBoundingClientRect().top+scrollY-60);};
  [[2827,2851],[2828,3126],[2829,2795],[3016,2851],[3017,3126],[3018,2795]].forEach(([a,b])=>{q(a).classList.add('nav-link');link(q(a),()=>scrollToNode(b));});
  [2830,2997].forEach(id=>link(q(id),()=>window.DopafitScroll.scrollTo(0),'Dopafit — trang đầu'));
  [3021,3022].forEach(id=>link(q(id),()=>{location.href='mailto:support@dopafit.app';}));
  // FAQ retains the closed rows supplied in the Figma frame; answers open on demand.
  const answers=[
    'Dopafit giúp bạn biết hôm nay tập gì, xem video hướng dẫn và nhận biết nhóm cơ của từng bài. Bạn có thể chọn thời gian, dụng cụ và thể trạng cho buổi tập.',
    'Bạn có thể chọn dụng cụ và thời gian phù hợp với nơi tập của mình, kể cả khi tập tại nhà.',
    'Vui lòng liên hệ support@dopafit.app để biết thông tin lưu trữ và quản lý dữ liệu của phiên bản bạn đang dùng.',
    'Xem mục Apple Health trong ứng dụng để kiểm tra các tuỳ chọn kết nối hiện có.',
    'Bạn có thể xem các gói và mức giá hiện có ngay trong ứng dụng.',
    'Vui lòng liên hệ support@dopafit.app để biết phiên bản Android hiện có.'
  ];
  [2796,2800,2804,2808,2812,2816].forEach((id,i)=>{
    const el=q(id);el.classList.add('faq-item');el.setAttribute('aria-expanded','false');q(id+3).classList.add('faq-plus');
    const answer=document.createElement('p');answer.className='faq-answer';answer.id=`faq-answer-${i}`;answer.textContent=answers[i];answer.hidden=true;el.append(answer);el.setAttribute('aria-controls',answer.id);
    link(el,()=>{const open=el.getAttribute('aria-expanded')==='true';document.querySelectorAll('.faq-item').forEach(x=>{x.setAttribute('aria-expanded','false');x.querySelector('.faq-answer').hidden=true;});el.setAttribute('aria-expanded',String(!open));answer.hidden=open;let offset=0;[2796,2800,2804,2808,2812,2816].forEach(rowID=>{const row=q(rowID);const expanded=row.getAttribute('aria-expanded')==='true';const extra=expanded?row.querySelector('.faq-answer').scrollHeight:0;row.style.top=offset+'px';row.style.height=(73+extra)+'px';offset+=73+extra;});});
  });
  // Dropset's side navigation: each row controls the matching workout UI.
  const featureRows=[2776,2790,2786,2782];
  const featureScreen=q(2794),featureHeading=q(2851),featureCopy=q(2775),featureDivider=q(2855);
  const featureScreenImage=featureScreen.querySelector('img');
  featureScreenImage.src=window.DopafitContent.screens[0];
  featureScreenImage.alt=window.DopafitContent.features[0];
  featureRows.forEach((id,i)=>{const el=q(id).querySelector('p');el.classList.add('feature-tab');el.setAttribute('aria-selected',String(i===0));link(el,()=>{if(tracking.jump(i))return;featureRows.forEach(x=>q(x).querySelector('p').setAttribute('aria-selected',String(x===id)));featureScreenImage.src=window.DopafitContent.screens[i];featureScreenImage.alt=el.textContent.trim();},el.textContent.trim());});
  // The supplied Figma static assets are retained below the live 3D canvas as a graceful fallback.
  const phone=q(2771);const fallback=document.createElement('div');fallback.className='phone-fallback';while(phone.firstChild)fallback.append(phone.firstChild);phone.append(fallback);
  const live=document.createElement('div');live.className='phone-webgl';live.id='phone-webgl';live.setAttribute('role','img');live.setAttribute('aria-label','Điện thoại 3D từ kiosk hiển thị buổi tập Dopafit');phone.append(live);
  // Replace the video poster with the matching local exercise video, retaining its exact slot.
  const videoSlot=q(2894);const poster=videoSlot.querySelector('img');
  const video=document.createElement('video');video.src='assets/landing/row.9c406ddc16.mp4';video.poster=poster.src;video.muted=true;video.loop=true;video.playsInline=true;video.preload='none';video.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:inherit;';video.setAttribute('aria-label','Video hướng dẫn bài tập');poster.replaceWith(video);
  new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!reduced)video.play().catch(()=>{});else video.pause();}),{rootMargin:'150px'}).observe(video);
  // Alternating women/men, all photographs from the supplied Pliability capture.
  const photos=window.DopafitContent.fan.map((alt,i)=>({file:i+1,alt,position:'50% 50%'}));
  // Use the extracted Skydive driver. Its card transforms never rotate.
  const {scene:heroScene}=window.DopafitSkydiveHero.mount({cards:q(3029),copy:q(2850),header:q(2825),reduced});
  // ≤600px: one-column mobile page (assets/mobile/mobile.js) instead of the scaled 1920px canvas scenes.
  if(window.DopafitMobile){window.DopafitMobileLanding.mount({q});return;}
  const fanRoot=q(2755);fanRoot.classList.add('exercise-fan');fanRoot.replaceChildren();
  // User-supplied Radial Card Fan: preserve the Figma endpoints in outer slots,
  // then scrub their exact translate/rotate/scale keyframes on the photograph.
  const fanCenterX=960,fanCenterY=1550,fanRadius=1260;
  const targetAngles=[-47.5,-28.5,-9.5,9.5,28.5,47.5];
  const fanCards=photos.map((photo,i)=>{
    const angle=targetAngles[i]*Math.PI/180,slot=document.createElement('div');
    slot.className='fan-slot';slot.style.left=(fanCenterX+Math.sin(angle)*fanRadius)+'px';slot.style.top=(fanCenterY-Math.cos(angle)*fanRadius)+'px';
    const el=document.createElement('div');el.className='fan-card';
    el.style.setProperty('--i',i);el.style.setProperty('--r',targetAngles[i]+'deg');
    const img=window.DopafitFanVideo.create(photo.file-1);img.style.objectPosition=photo.position;
    el.append(img);slot.append(el);fanRoot.append(slot);return el;
  });
  const exerciseButton=q(2751),exerciseCaption=q(2763);
  const fanSlots=fanCards.map(card=>card.parentElement);
  const fanFirstSlotY=parseFloat(fanSlots[0].style.top);
  const phoneScrollStart=2700;let phoneScrollDistance=600;
  const phoneFraming=window.DopafitPhoneMotion.frontalBounds(phone.offsetHeight);
  const tracking=window.DopafitTracking.mount({
    canvas,heading:featureHeading,phone,screen:featureScreen,copy:featureCopy,
    rows:featureRows.map(q),reduced,requestRender
  });
  const fanAnimations=[];
  if(!reduced){
    exerciseButton.classList.add('exercise-reveal');
    exerciseCaption.classList.add('exercise-reveal');
    fanCards.forEach(card=>card.classList.add('play'));
    fanCards.forEach(card=>fanAnimations.push(card.getAnimations()[0]));
  }
  let fanStarted=reduced,fanComplete=reduced;
  function startFan(){
    if(fanStarted)return;
    fanStarted=true;fanAnimations.forEach(a=>{a.currentTime=0;a.play();});
    Promise.all(fanAnimations.map(a=>a.finished)).then(()=>{fanComplete=true;requestRender();}).catch(()=>{});
  }


  // Andfold's Image Rotate Wrapper loops from 0 to 360 degrees in 50s, linearly.
  const fanDegreesPerMs=360/50000;
  const fanArc=(targetAngles[1]-targetAngles[0])*fanSlots.length;
  const fanArcEdge=fanArc/2,fanFadeStart=targetAngles.at(-1);
  let fanRotation=0,fanFrame=0,lastFanTime,fanDirection=1,lastScrollY=scrollY;
  function positionFan(){
    fanSlots.forEach((slot,i)=>{
      // Wrap within the six Dopafit slots. Fade the wrapping card at the clipped sides.
      const angle=((targetAngles[i]+fanRotation+fanArcEdge)%fanArc+fanArc)%fanArc-fanArcEdge;
      const radians=angle*Math.PI/180;
      const x=fanCenterX+Math.sin(radians)*fanRadius-parseFloat(slot.style.left);
      const y=fanCenterY-Math.cos(radians)*fanRadius-parseFloat(slot.style.top);
      slot.style.transform=`translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle-targetAngles[i]}deg)`;
      slot.style.opacity=String(clamp((fanArcEdge-Math.abs(angle))/(fanArcEdge-fanFadeStart)));
    });
  }
  function turnFan(now){
    fanRotation=(fanRotation+(now-(lastFanTime??now))*fanDegreesPerMs*fanDirection)%fanArc;
    lastFanTime=now;
    positionFan();
    fanFrame=requestAnimationFrame(turnFan);
  }
  function updateFanLoop(opening,fanBox){
    if(scrollY!==lastScrollY)fanDirection=Math.sign(scrollY-lastScrollY);
    lastScrollY=scrollY;
    if(opening===1&&fanBox.top<innerHeight&&fanBox.bottom>0&&!document.hidden){
      if(!fanFrame)fanFrame=requestAnimationFrame(turnFan);
    }else{
      cancelAnimationFrame(fanFrame);
      fanFrame=0;
      lastFanTime=undefined;
    }
    if(opening===0&&fanRotation!==0){
      fanRotation=0;
      positionFan();
    }
  }
  if(!reduced)document.addEventListener('visibilitychange',()=>{
    lastFanTime=undefined;
    requestRender();
  });

  function reveal(el,amount){
    el.style.opacity=String(amount);
    el.style.visibility=amount===0?'hidden':'visible';
  }
  function updateExerciseEntry(viewportBottom,h,canvasTop){
    const midpoint=el=>{const {top,height}=el.getBoundingClientRect();return (top+height/2-canvasTop)/scale;};
    const fanBox=fanRoot.getBoundingClientRect();
    // Skydive releases the Section 2 handoff at 90% of the sticky travel.
    const heroTravel=heroScene.offsetHeight-heroScene.firstElementChild.clientHeight;
    const handoffEnd=(heroScene.getBoundingClientRect().top+heroTravel*.9+viewH-canvasTop+tracking.shift*scale)/scale;
    const buttonStart=Math.max(handoffEnd,midpoint(exerciseButton)),buttonSpan=Math.max(72,h*.06);
    const fanStart=Math.max(buttonStart+buttonSpan,(fanBox.top-canvasTop)/scale+fanFirstSlotY);
    const fanSpan=Math.max(300,h*.28);
    const captionStart=Math.max(fanStart+fanSpan,midpoint(exerciseCaption)),captionSpan=Math.max(90,h*.075);
    const opening=clamp((viewportBottom-fanStart)/fanSpan);
    reveal(exerciseButton,progress(viewportBottom,buttonStart,buttonSpan));
    // Use the existing viewport/hero handoff calculation, so the one-shot CSS
    // reveal cannot finish invisibly behind the preceding pinned hero.
    if(opening>0&&document.getElementById("landing").classList.contains("hero-handoff-done"))startFan();
    reveal(exerciseCaption,progress(viewportBottom,captionStart,captionSpan));
    updateFanLoop(fanComplete?1:0,fanBox);
    return Math.max(phoneScrollStart,captionStart+captionSpan);
  }
  // Section "Làm thế nào…": Skydive tools-orbit scene (assets/figma/orbit-scene.js).
  const orbitScene=window.DopafitOrbitScene.mount({canvas,q,reduced});window.DopafitOrbitSceneState=orbitScene;
  const stepNodes=[2923,2927,2933].map(q);
  q(2768).classList.add('body-active');
  function clamp(x){return Math.max(0,Math.min(1,x));}function smooth(x){x=clamp(x);return x*x*(3-2*x);}
  const progress=(y,start,span)=>smooth((y-start)/span);
  function dockPhone(y,h,liftEnd){
    const sourceTop=phone.offsetTop,screenTop=featureScreen.offsetTop,phoneHeight=phone.offsetHeight;
    const {width,topInset}=phoneFraming;
    const turnStart=Math.max(liftEnd,featureHeading.offsetTop-h*1.38);
    const end=Math.max(turnStart+h*.28,screenTop-h*.23);
    const turnSpan=Math.min(h*.65,(end-turnStart)*.60);
    const turnEnd=turnStart+turnSpan;
    // Both phases are sampled from scroll position, so either can stop or reverse in place.
    const turn=clamp((y-turnStart)/turnSpan),dock=clamp((y-turnEnd)/(end-turnEnd));
    const center=progress(turn,0,.20),sideward=progress(dock,0,.68),descent=smooth(dock);
    const turnDegrees=180*progress(turn,.10,.90);
    const pinnedInset=Math.min(h*.12,sourceTop+topInset-liftEnd);
    const sourceCenter=Math.max(sourceTop,y+pinnedInset-topInset)+phoneHeight/2;
    const bodyHeight=phoneHeight-2*topInset;
    const turnSize=Math.min(1,Math.min(h,1920)*.87/Math.hypot(width,bodyHeight));
    const originalDockSize=featureScreen.offsetWidth/width;
    const fullScreenFit=Math.min(1,h*.84/(bodyHeight*originalDockSize));
    const dockSize=originalDockSize*fullScreenFit;
    // Leave room below the turn on tall screens so the handoff still travels downward.
    const turnCenterY=Math.min(h/2,h*.14+bodyHeight*dockSize/2);
    const turnCenter=sourceCenter+(y+turnCenterY-sourceCenter)*center;
    // Fit through the whole existing turn, then settle directly to the final size.
    const fit=1+(turnSize-1)*smooth(turn);
    const size=fit+(dockSize-fit)*descent;
    // Wide/short windows put even the first fixed caption row below the native
    // settings controls. Keep the same docking path/size, but let its final
    // column sit lower so those controls can meet that row. .42h is the audited
    // lower settings anchor in the existing fitted front-phone presentation.
    const firstRuleY=h*.06+featureHeading.offsetHeight+128-18+.5;
    const leaderAlignment=Math.max(0,firstRuleY-h*.42);
    const targetCenter=Math.min(screenTop,y+h*.09)+bodyHeight*dockSize/2+leaderAlignment;
    const x=(featureScreen.offsetLeft+featureScreen.offsetWidth/2-phone.offsetLeft)*sideward;
    const height=turnCenter+(targetCenter-turnCenter)*descent;
    phone.style.translate=`${x}px ${height-sourceTop-phoneHeight/2}px`;
    phone.style.transform=`translateX(-50%) scale(${size})`;
    return {dock,turnDegrees};
  }
  // Scroll drives the Section 2 sequence, phone lift and orbit reveal.
  function render(){
    frame=0;
    const canvasTop=canvas.getBoundingClientRect().top;
    const vh=stableHeight(),physicalY=-(canvasTop-(tracking.shift+orbitScene.shift+(window.DopafitSectionPins?.shift||0))*scale)/scale,h=vh/scale;
    let y=-canvasTop/scale;
    let phoneProgress=1,phoneDock=0,phoneTurn=0;
    if(!reduced){
      // Desktop keeps 600; on tall portrait screens 600 design px is only ~120 physical px.
      phoneScrollDistance=Math.max(600,h*.42);
      const start=updateExerciseEntry(y+h,h,canvasTop);
      const mapped=tracking.mapScroll(physicalY,h,start+phoneScrollDistance-h,scale);
      y=mapped.y;
      phoneProgress=clamp((y+h-start)/phoneScrollDistance);
      const livePhone=phone.classList.contains('phone-ready');
      featureScreen.classList.toggle('phone-screen-replaced',livePhone);
      if(livePhone&&phoneProgress===1){
        const handoff=dockPhone(y,h,start+phoneScrollDistance-h);
        phoneDock=handoff.dock;
        phoneTurn=handoff.turnDegrees;
      }else{
        const pose=window.DopafitPhoneMotion.sample(phoneProgress),sourceTop=phone.offsetTop;
        // Account for document travel so the visible rise follows the video track.
        const endTop=vh-(start+phoneScrollDistance-sourceTop)*scale;
        const startTop=start>phoneScrollStart?vh:vh*.92;
        const baseTop=(sourceTop-y)*scale;
        const startBaseTop=vh-(start-sourceTop)*scale;
        const riseOffset=phoneProgress<=0?(startTop-startBaseTop)/scale:phoneProgress>=1?0:(endTop+(startTop-endTop)*pose.y-baseTop)/scale;
        phone.style.transform='';
        phone.style.translate=`${pose.x*phone.offsetWidth}px ${riseOffset}px`;
      }
      const copy=livePhone?progress(phoneDock,.20,.45):1;
      featureHeading.style.opacity='1';
      featureCopy.style.visibility=copy===0?'hidden':'';
      featureDivider.style.visibility='hidden';
      tracking.render(mapped.travel,y,h);
      phone.style.visibility=phoneProgress===0?'hidden':'';
      // Hold for the tools-orbit scene; everything after it reads the unheld position.
      y=orbitScene.map(y,h,scale).y;
      // Integrations pin (sections-scene.js) holds after the orbit scene.
      if(window.DopafitSectionPins)y=window.DopafitSectionPins.map(y,h,scale).y;
      // "Tập ở đâu" cards: entry now handled by sections-scene.js (fan-out from the middle card).
    }
    window.dispatchEvent(new CustomEvent('dopafit:scroll',{detail:{y,h,reduced,phoneProgress,phoneDock,phoneTurn}}));
  }
  function requestRender(){if(!frame)frame=requestAnimationFrame(render);}
  // Flush scene changes in the dev driver's current frame, after Lenis advances.
  window.DopafitScroll.flush=()=>{if(frame){cancelAnimationFrame(frame);render();}};
  window.DopafitScroll.lenis?.on('scroll',requestRender);
  window.addEventListener('dopafit:phone-ready',requestRender);
  window.addEventListener('scroll',requestRender,{passive:true});window.addEventListener('resize',resize,{passive:true});
  resize();render();document.fonts.ready.then(requestRender);
})();
