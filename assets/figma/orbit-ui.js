/* Live app UI for the "How do you train seriously?" panels.
   Replaces the four screenshot images (147:2914 set log, 147:2915 rest timer, 147:2917 weekly set goal,
   147:2902 recovery screen) with HTML drawn in the screenshot's own pixel grid, so geometry matches Figma.
   Values/text are copied from those screenshots. Colours: DopafitRebuild/Design.swift
   (background #101010, card #1e1e1e, raised #292929, muted #a6a6a6, lime .71/.96/.24, blue .28/.73/.94,
   push .98/.82/.13, pull .86/.12/.34, legs .27/.64/.61).
   Motion reused from dev-dopafit-app-2026-11-17T08-35-45-069Z/index.html:
     - .set-row done/now states (ghi set)            - rest timer tick(): 34s → 0, restarts, lime at 0
     - .ring .prog ringIn (dashoffset from full)     - .reveal rows, staggered by --d
     - .focus box: left/top/width/height .6s var(--ease-out)  - band .scan line + activate (body scan) */
(() => {
  'use strict';
  const q=id=>document.querySelector(`[data-node-id="147:${id}"]`);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches||new URLSearchParams(location.search).get('motion')==='off';

  // Swap an <img> for a live screen that keeps the img's Figma class (same box), drawn at natural px.
  function screen(img,width,height,html){
    const el=document.createElement('div');
    el.className=`${img.className} ui-screen`;el.setAttribute('role','img');el.setAttribute('aria-label',img.alt||'');
    const art=document.createElement('div');art.className='ui-art';art.style.width=`${width}px`;art.style.height=`${height}px`;art.innerHTML=html;
    el.append(art);img.replaceWith(el);
    const fit=()=>{if(el.offsetWidth)art.style.scale=String(el.offsetWidth/width);};
    fit();new ResizeObserver(fit).observe(el);
    return el;
  }
  const icon={
    play:'<svg viewBox="0 0 24 24"><path d="M7 4.5v15l12-7.5z" fill="currentColor"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2.5h6"/></svg>',
    chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/></svg>',
    plates:'<svg viewBox="0 0 28 16" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="7" cy="8" r="5"/><circle cx="21" cy="8" r="5"/></svg>',
    swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h15l-4-4M20 16H5l4 4"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12.5l4 4 8-9"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15l7-7 7 7"/></svg>',
    refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4"/></svg>',
    hex:'<svg viewBox="0 0 44 48"><path d="M22 2.5l17.5 10v23L22 45.5 4.5 35.5v-23z" fill="var(--hex-fill,none)" stroke="var(--hex-stroke,#fff)" stroke-width="2.6" stroke-linejoin="round"/></svg>'
  };


  /* ---------- Templates, in each screenshot's own pixel grid ---------- */
  // 147:2914 Log set — screenshot 371b7.webp, 738×1568; visible y 821–1568
  const setTpl=()=>`
    <div class="ui-phone ui-set" style="top:0;height:1540px">
      <p class="ui-set-title" style="left:41px;top:836px">EZ-bar<br>curl</p>
      <span class="ui-pill" style="left:516px;top:860px;width:179px;height:57px">${icon.play}Guide</span>
      <div class="ui-chips" style="top:977px">
        <span style="left:41px;width:178px">${icon.clock}Rest off</span>
        <span style="left:233px;width:166px">${icon.chart}History</span>
        <span style="left:413px;width:231px">${icon.plates}Plate calculator</span>
        <span style="left:657px;width:120px">${icon.swap}</span>
      </div>
      <div class="ui-set-row" data-row="1" data-state="now" style="top:1077px">
        <span class="ui-badge">${icon.hex}<b>1</b><i>${icon.check}</i></span>
        <span class="ui-field" style="left:105px"><small>Reps</small><b>12</b></span>
        <span class="ui-field" style="left:411px"><small>Weight (kg)</small><b>12.5</b></span>
      </div>
      <p class="ui-note" style="left:411px;top:1184px;width:286px">Includes bar</p>
      <div class="ui-set-row" data-row="2" data-state="next" style="top:1244px">
        <span class="ui-badge">${icon.hex}<b>2</b><i>${icon.check}</i></span>
        <span class="ui-field" style="left:105px"><small>Reps</small><b>12</b></span>
        <span class="ui-field" style="left:411px"><small>Weight (kg)</small><b>12.5</b></span>
      </div>
      <span class="ui-btn" style="left:41px;top:1394px;width:320px">Log all</span>
      <span class="ui-btn ui-btn-lime" style="left:376px;top:1394px;width:320px">Log set</span>
    </div>`;
  // 147:2915 Rest — screenshot ade23.webp, 550×328
  const restTpl=()=>`
    <div class="ui-rest-frame"></div>
    <div class="ui-rest">
      <span class="ui-rest-label">Rest</span>
      <span class="ui-rest-close">${icon.close}</span>
      <span class="ui-rest-step" style="left:64px">−10 s</span>
      <span class="ui-rest-time">0:34</span>
      <span class="ui-rest-step" style="left:431px">+10 s</span>
      <span class="ui-rest-pause"><i></i><i></i></span>
    </div>`;
  // 147:2917 Mục tiêu hiệp tuần — screenshot acd11.webp, 738×1568; visible y 375–1353
  const groups=[
    {name:'Push muscles',total:27,color:'var(--ui-push)'},
    {name:'Pull muscles',total:14,color:'var(--ui-pull)'},
    {name:'Legs',total:24,color:'var(--ui-legs)'}
  ];
  const all=groups.reduce((s,g)=>s+g.total,0),R=160,C=2*Math.PI*R,gap=10;
  let start=0;
  const arcs=groups.map((g,i)=>{
    const len=C*g.total/all-gap,off=start;start+=C*g.total/all;
    return `<circle class="ui-arc" style="--d:${i};--len:${len.toFixed(2)};--c:${C.toFixed(2)};stroke:${g.color}" cx="369" cy="684" r="${R}" stroke-dasharray="${len.toFixed(2)} ${C.toFixed(2)}" stroke-dashoffset="${(-off-gap/2).toFixed(2)}"/>`;
  }).join('');
  // Figma 211:1679 is a before/after reference of ONE native scroll view.
  // Crop its original pixels into one continuous surface, with fixed status/nav.
  // Source coordinates and join: _reference/content-2026-11-23/STRENGTH-SCROLL.md.
  // Figma211:1679 supplies every value and the chart. Live text/vector icons
  // replace the damaged screenshot bezel, clipped tab sprites and blurred labels.
  const strengthSVG=path=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  const strengthIcons={
    weights:strengthSVG('<path d="M2 9v6m4-9v12m12-12v12m4-9v6M6 12h12"/>'),
    body:strengthSVG('<circle cx="12" cy="4" r="2"/><path d="M8 9l4-2 4 2 2 5M8 9l-2 5m6-7v8m0 0l-4 7m4-7l4 7"/>'),
    target:strengthSVG('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
    journal:strengthSVG('<rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 3v4m8-4v4M4 10h16m-11 4h1m4 0h1m-6 3h1m4 0h1"/>'),
    shirt:strengthSVG('<path d="M8 3l-6 4 3 5 3-2v11h8V10l3 2 3-5-6-4c-1 4-7 4-8 0z"/>'),
    ruler:strengthSVG('<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7v4m4-4v3m4-3v4m4-4v3"/>'),
    health:strengthSVG('<path d="M12 21S2 15 2 8a5 5 0 0 1 10-1A5 5 0 0 1 22 8c0 7-10 13-10 13z"/>')
  };
  const goalTpl=()=>`<div class="ui-strength-phone ui-strength-live" role="img" aria-label="Total strength and body composition; original example values">
    <div class="strength-status"><b>1:33</b><span>${strengthSVG('<path d="M2 8a15 15 0 0 1 20 0M6 12a9 9 0 0 1 12 0m-8 4a3 3 0 0 1 4 0"/><circle cx="12" cy="19" r=".5"/>')}<svg viewBox="0 0 30 16"><rect x="1" y="1" width="25" height="14" rx="4" fill="currentColor"/><path d="M28 5v6" stroke="currentColor" stroke-width="2"/></svg></span></div>
    <div class="ui-strength-viewport" tabindex="0" aria-label="Total strength screen">
      <div class="ui-strength-scroll">
        <div class="strength-tabs"><span>Results</span><span>Recovery</span></div>
        <h3 class="strength-section">Total strength <span>ⓘ</span></h3>
        <div class="strength-score"><b>722</b><span aria-hidden="true">${'<i></i>'.repeat(10)}</span></div>
        ${[['Push','17'],['Pull','303'],['Legs','1,708']].map(([name,value])=>`<div class="strength-group"><span>${name}</span><div><b>${value}</b><small>dSTRENGTH</small></div><i>${icon.chevron}</i></div>`).join('')}
        <h3 class="strength-section">Strength tests <span>ⓘ</span></h3>
        <div class="strength-test"><small>CABLE ROW</small><span>Estimated 1RM</span><b>47.5 <small>kg per rep</small></b><div class="strength-chart" aria-label="Original cable row chart, July20 to October28"></div></div>
        <div class="strength-pages" aria-hidden="true"><i></i><i></i><i></i></div>
        <h3 class="strength-section">Body composition</h3>
        <div class="strength-health"><header>${strengthIcons.journal}<span>Connect Apple Health?</span>${icon.close}</header><p>Save your completed workouts<br>and other activity to Apple Health.</p><div class="strength-sync">${strengthIcons.health}<span>Sync with Apple Health</span></div><div class="strength-learn">Learn more</div></div>
        <div class="strength-metrics-live">${[[strengthIcons.shirt,'1/7','Composition<br>metrics'],[strengthIcons.ruler,'0/7','Body<br>measurements']].map(([icon,count,label])=>`<div><header>${icon}<small>${count} ›</small></header><span>${label}</span></div>`).join('')}</div>
      </div>
    </div>
    <div class="ui-strength-nav" aria-label="App navigation">${[['weights','Workouts'],['body','Body'],['target','Goals'],['journal','Journal']].map(([key,label])=>`<span>${strengthIcons[key]}${label}</span>`).join('')}</div>
    <div class="strength-home-indicator"></div>
  </div>`;
  function setStrengthProgress(value){
    const p=reduced?0:Math.max(0,Math.min(1,value)),eased=p*p*(3-2*p);
    document.querySelectorAll('.ui-strength-phone').forEach(phone=>{
      if(phone.dataset.scrollProgress===p.toFixed(5))return;
      phone.dataset.scrollProgress=p.toFixed(5);
      const viewport=phone.querySelector('.ui-strength-viewport'),content=phone.querySelector('.ui-strength-scroll');
      const distance=Math.max(0,content.scrollHeight-viewport.clientHeight);
      phone.style.setProperty('--strength-scroll',`${(-distance*eased).toFixed(3)}px`);
    });
  }
  // 147:2902 Recovery — screenshot cc57f.png, 640×1391. withFocus adds the dev .focus box (mobile; desktop uses Figma's).
  const recTpl=(withFocus)=>`
    <div class="ui-recovery">
      <span class="ui-status-time">9:41</span>
      <span class="ui-status-icons"><svg viewBox="0 0 120 30"><g fill="#fff"><rect x="0" y="18" width="6" height="8" rx="1.5"/><rect x="9" y="13" width="6" height="13" rx="1.5"/><rect x="18" y="8" width="6" height="18" rx="1.5"/><rect x="27" y="3" width="6" height="23" rx="1.5"/></g><path d="M50 12a17 17 0 0 1 24 0M54 17a11 11 0 0 1 16 0M58.5 22a5 5 0 0 1 7 0" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round"/><rect x="82" y="5" width="32" height="19" rx="6" fill="#4cd964"/><rect x="116" y="11" width="3" height="7" rx="1.5" fill="#4cd964"/><path d="M99 7l-5 8h5l-2 7 6-9h-5z" fill="#0b2a0b"/></svg></span>
      <div class="ui-seg"><span>Results</span><span class="is-on">Recovery</span></div>
      <div class="ui-stat" style="left:58px"><b>1</b><small>DAYS SINCE<br>YOUR LAST WORKOUT</small></div>
      <div class="ui-stat" style="left:337px;width:270px"><b>2</b><small>MUSCLE GROUPS RECOVERED</small><span class="ui-up">${icon.up}</span></div>
      <img class="ui-recovery-body" src="assets/orbit-ui/recovery-body.webp" alt="">
      <span class="ui-refresh">${icon.refresh}</span>
      <p class="ui-legend"><span><i style="background:#ff6a2b"></i>Needs rest</span><span><i style="background:#d8693e"></i>Recovering</span><span><i style="background:#5a5a5a"></i>Recovered</span></p>
      <p class="ui-legend ui-legend-2"><span><i class="ring"></i>In today’s workout</span></p>
      <span class="ui-see-all">View all muscles ${icon.chevron}</span>
      <span class="ui-scan" aria-hidden="true"><i></i></span>
      ${withFocus?'<span class="ui-focus" data-step="stats"></span>':''}
    </div>`;

  const SIZES={set:[738,1568],rest:[550,328],goal:[390,844],recovery:[640,1391]};
  function art(kind,opts={}){
    const [width,height]=SIZES[kind];
    const el=document.createElement('div');el.className='ui-art';el.style.width=`${width}px`;el.style.height=`${height}px`;
    el.innerHTML=kind==='set'?setTpl():kind==='rest'?restTpl():kind==='goal'?goalTpl():recTpl(opts.focus);
    return el;
  }
  // Swap an <img> for a live screen that keeps the img's Figma class (same box), drawn at natural px.
  function screen(img,kind){
    const el=document.createElement('div');
    el.className=`${img.className} ui-screen`;el.setAttribute('role','img');el.setAttribute('aria-label',img.alt||'');
    const a=art(kind),width=SIZES[kind][0];el.append(a);img.replaceWith(el);
    const fit=()=>{if(el.offsetWidth)a.style.scale=String(el.offsetWidth/width);};
    fit();new ResizeObserver(fit).observe(el);
    return el;
  }

  /* ---------- Motion factories: each returns play(on) ---------- */
  function timerBag(){const t=new Map();return (key,ms,fn)=>{clearTimeout(t.get(key));t.set(key,setTimeout(fn,ms));};}
  // Log set → row 1 done, row 2 becomes the set in progress (dev .set-row.done/.now).
  function setMotion(root){
    const later=timerBag(),rows=[...root.querySelectorAll('.ui-set-row')],btn=root.querySelector('.ui-btn-lime');
    const reset=()=>{rows[0].dataset.state='now';rows[1].dataset.state='next';btn.classList.remove('is-press');};
    return on=>{
      if(reduced)return;
      if(!on){later('a',500,reset);return;}
      reset();
      later('a',750,()=>{btn.classList.add('is-press');later('b',180,()=>{btn.classList.remove('is-press');rows[0].dataset.state='done';rows[1].dataset.state='now';});});
    };
  }
  // dev tick(): counts 34 → 0 while the card is showing, then starts again.
  function restMotion(root){
    const text=root.querySelector('.ui-rest-time');let left=34,timer=0;
    const paint=()=>{text.textContent=Math.floor(left/60)+':'+String(left%60).padStart(2,'0');text.classList.toggle('is-done',left===0);};
    return on=>{clearInterval(timer);if(on&&!reduced)timer=setInterval(()=>{left=left===0?34:left-1;paint();},1000);};
  }
  // dev ringIn + staggered .reveal rows each time the panel arrives.
  function goalMotion(root){
    if(!reduced)root.classList.add('is-armed');
    return on=>root.classList.toggle('is-in',on||reduced);
  }
  // dev .focus: stats step, then the body-map step (mobile instance).
  // Then the scan sweeps the focused body (Figma 147:2909 gradient + 147:2908 line, kept inside the screen).
  function recoveryMotion(root,setStep){
    const later=timerBag(),focus=root.querySelector('.ui-focus');
    const step=setStep||(s=>{if(focus)focus.dataset.step=s;});
    return on=>{
      if(reduced){step('body');root.classList.add('is-scanning');return;}
      if(!on){later('a',500,()=>{step('stats');root.classList.remove('is-scanning');});return;}
      root.classList.remove('is-scanning');step('stats');
      later('a',700,()=>{step('body');later('b',600,()=>root.classList.add('is-scanning'));});
    };
  }
  window.DopafitOrbitUI={art,setStrengthProgress,motion:{set:setMotion,rest:restMotion,goal:goalMotion,recovery:recoveryMotion}};
  if(window.DopafitMobile)return; // the mobile page builds its own instances (assets/mobile/mobile.js)

  /* ---------- Desktop: replace the four screenshots, driven by orbit-scene.js data-show ---------- */
  const setLog=q(2914),rest=q(2915);
  const setScreen=screen(setLog.querySelector('img'),'set');
  const restScreen=screen(rest.querySelector('img'),'rest');restScreen.classList.add('ui-rest-screen');
  const goalScreen=screen(q(2917).querySelector('img'),'goal');
  const recoveryScreen=screen(q(2902).querySelector('img'),'recovery');
  const shown=el=>el.dataset.show==='true';
  function watch(el,fn){new MutationObserver(()=>fn(shown(el))).observe(el,{attributes:true,attributeFilter:['data-show']});}
  const later=timerBag();
  watch(setLog,setMotion(setScreen));
  watch(rest,restMotion(restScreen));
  const goalPlay=goalMotion(goalScreen);goalPlay(false);watch(q(2916),goalPlay);
  // Recovery: dev .focus (Figma 147:2904/2905) moves from the stats step to the body-map step, then the scan sweeps.
  const border=q(2904),glow=q(2905),recoveryPanel=q(2899);
  if(border&&glow&&recoveryPanel){
    const STEPS={stats:{top:104,height:125},body:{top:228.26,height:429.04}}; // design px in the screen
    border.classList.add('ui-focus-move');glow.classList.add('ui-focus-move');
    const go=k=>{const {top,height}=STEPS[k];border.style.top=`${top}px`;border.style.height=`${height}px`;glow.style.height=`${height}px`;};
    const play=recoveryMotion(recoveryScreen.firstElementChild,go);play(false);watch(recoveryPanel,play);
  }

  // Centre body: dev band "activate" — a lime scan line climbs the body, switching the muscles on.
  const body=q(2764);
  if(body){const scan=document.createElement('span');scan.className='ui-body-scan';scan.setAttribute('aria-hidden','true');body.append(scan);}
})();
