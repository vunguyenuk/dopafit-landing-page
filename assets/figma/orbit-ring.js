/* Orbit ring progress (user request 2026-11-18, "Làm thế nào để tập nghiêm túc?").
   The Figma ring (147:2857 + 147:2858, two half-circle vectors) is redrawn as an SVG on the same centre and radius:
     - a faint dashed track that fades in when the scene goes live,
     - a lit lime dashed arc whose dashes keep running, grown clockwise in the team variant (counter-clockwise in the accepted original) from the first icon up to
       whichever icon is active (the order the icons appear: video → body map → set log → weekly goal),
     - the whole circle turns solid lime in the "all together" state.
   It only reads the state orbit-scene.js already writes (ring[data-live], dot[data-lifted], body-active[data-on]),
   and the reversible side/direction option from orbit-variant.js. Mobile: the same on the cloned orbit (mobile.js writes the
   same attributes on its clone). Lead angle, dash sizes, glow and timings are design estimates. Icon light follows the actual animated arc, not its destination. */
(() => {
  'use strict';
  const DOTS=[2871,2875,2878,2881];
  const LEAD=28; // degrees of arc before the first icon
  const NS='http://www.w3.org/2000/svg';
  let uid=0;

  function mount(root){
    const q=id=>root.querySelector(`[data-node-id="147:${id}"]`);
    const halves=[q(2857),q(2858)],bodyActive=q(2768);
    const dots=DOTS.map(q);
    if(halves.some(h=>!h)||dots.some(d=>!d))return false;
    // Desktop: the Figma ring group 147:2856 (orbit-scene sets data-live on it). The mobile clone flattens that
    // group, so there the halves' own box hosts the SVG and "live" follows the sticky orbit being on screen.
    const ring=q(2856)||halves[0].parentElement;
    if(ring.querySelector('.orbit-ring-svg'))return true;
    if(!q(2856)){
      const sticky=root.querySelector('.m-orbit-sticky')||ring;
      new IntersectionObserver(([e])=>{ring.dataset.live=String(e.isIntersecting);},{threshold:.4}).observe(sticky);
    }else if(!ring.classList.contains('orbit-ring'))return false;

    const id=`orbit-ring-reveal-${uid++}`;
    const svg=document.createElementNS(NS,'svg');
    svg.setAttribute('class','orbit-ring-svg');svg.setAttribute('aria-hidden','true');
    const origin=document.createElement('span');origin.className='orbit-ring-origin';
    // Mobile clone: the body figure shares this box, so put the ring right after the Figma halves (under the body,
    // user 2026-11-18 "line đè lên body") instead of at the end, where it painted over the figure.
    if(q(2856))ring.append(origin,svg);else halves[1].after(origin,svg);
    ring.classList.add('has-ring-svg');
    let reveal=null,frac=null,contact=null,diameter=0,geoKey='';
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('motion-off');
    let target=0,followFrame=0;
    // Read the same CSS-interpolated mask that draws the arc. A dot is lit only
    // when the visible leading edge touches its circular boundary.
    function syncIcons(){
      const current=reveal?parseFloat(getComputedStyle(reveal).strokeDasharray)||0:0;
      if(frac&&diameter){
        contact=frac.map((f,i)=>Math.max(0,f-Math.asin(Math.min(.95,dots[i].getBoundingClientRect().width/diameter))/(2*Math.PI)));
        dots.forEach((dot,i)=>{dot.dataset.ringContact=String(contact[i]);});
      }
      dots.forEach((dot,i)=>{
        const reached=reduced||(ring.dataset.live==='true'&&contact&&current+.0001>=contact[i]);
        const value=String(Boolean(reached));
        if(dot.dataset.ringReached!==value)dot.dataset.ringReached=value;
      });
      svg.dataset.progress=String(current);
      return current;
    }
    function follow(){
      followFrame=0;
      const current=syncIcons();
      if(!document.hidden&&Math.abs(current-target)>.00001)followFrame=requestAnimationFrame(follow);
    }
    function followArc(){
      if(followFrame)cancelAnimationFrame(followFrame);
      syncIcons();
      if(!document.hidden)followFrame=requestAnimationFrame(follow);
    }
    dots.forEach(dot=>{dot.dataset.ringReached=String(reduced);});

    // Geometry in the ring's own coordinates, measured on screen so it works for the desktop canvas (orbit-scene
    // scales the halves and moves the icons) and for the mobile clone (scaled box): centre and radius from the two
    // Figma half-circles, icon angles from their on-screen centres.
    function measure(){
      const a=halves[0].getBoundingClientRect(),b=halves[1].getBoundingClientRect();
      if(!a.height)return false;
      const L=Math.min(a.left,b.left),T=Math.min(a.top,b.top),Rr=Math.max(a.right,b.right),B=Math.max(a.bottom,b.bottom);
      const k=a.height/(halves[0].offsetHeight*(parseFloat(halves[0].style.scale)||1));
      const o=origin.getBoundingClientRect();
      const sx=(L+Rr)/2,sy=(T+B)/2;
      const cx=(sx-o.left)/k,cy=(sy-o.top)/k,R=(B-T)/2/k;
      const clockwise=window.DopafitOrbitVariant?.enabled===true;
      const angle=d=>{const r=d.getBoundingClientRect();return Math.atan2(r.top+r.height/2-sy,r.left+r.width/2-sx)*180/Math.PI;};
      const ang=dots.map(angle);
      const key=[cx,cy,R,...ang].map(Math.round).join(',')+':'+clockwise;
      if(dots.some(d=>!d.getBoundingClientRect().width))return false;
      if(key===geoKey&&frac)return true;geoKey=key;
      const start=ang[0]+(clockwise?-LEAD:LEAD);
      frac=ang.map(x=>{let v=(clockwise?x-start:start-x)%360;if(v<0)v+=360;return v/360;});
      diameter=B-T;
      contact=frac.map((f,i)=>Math.max(0,f-Math.asin(Math.min(.95,dots[i].getBoundingClientRect().width/diameter))/(2*Math.PI)));
      dots.forEach((dot,i)=>{dot.dataset.ringContact=String(contact[i]);});
      svg.dataset.direction=clockwise?'clockwise':'counterclockwise';
      const pad=40,size=R*2+pad*2;
      svg.setAttribute('viewBox',`${-R-pad} ${-R-pad} ${size} ${size}`);
      Object.assign(svg.style,{left:`${cx-R-pad}px`,top:`${cy-R-pad}px`,width:`${size}px`,height:`${size}px`});
      const prev=reveal?getComputedStyle(reveal).strokeDasharray:'0 1';
      svg.innerHTML=`
        <defs><mask id="${id}" maskUnits="userSpaceOnUse" x="${-R-pad}" y="${-R-pad}" width="${size}" height="${size}">
          <circle class="orbit-ring-reveal" r="${R}" pathLength="1" transform="rotate(${start})${clockwise?'':' scale(1,-1)'}"/>
        </mask></defs>
        <circle class="orbit-ring-track" r="${R}"/>
        <g mask="url(#${id})"><circle class="orbit-ring-lit" r="${R}"/></g>
        <circle class="orbit-ring-full" r="${R}"/>`;
      reveal=svg.querySelector('.orbit-ring-reveal');
      if(prev){reveal.style.transition='none';reveal.style.strokeDasharray=prev;reveal.getBoundingClientRect();reveal.style.transition='';}
      last='';
      return true;
    }

    let last='';
    function update(){
      const live=ring.dataset.live==='true',multi=bodyActive?.dataset.on==='true';
      if(live&&!measure())return;
      const active=dots.findIndex(d=>d.dataset.lifted==='true');
      // last revealed icon (hidden icons are at opacity 0)
      let revealed=-1;dots.forEach((d,i)=>{if(parseFloat(d.style.opacity)>0)revealed=i;});
      const at=!frac?0:multi?1:active>=0?frac[active]:revealed>=0?frac[revealed]:live?.02:0;
      const key=`${live}|${multi}|${at}`;if(key===last)return;last=key;
      svg.dataset.live=String(live);svg.dataset.full=String(multi);
      if(reveal)reveal.style.strokeDasharray=`${at} 1`;
      target=at;followArc();
    }
    const mo=new MutationObserver(update);
    [ring,bodyActive,...dots].filter(Boolean).forEach(n=>mo.observe(n,{attributes:true,attributeFilter:['data-live','data-on','data-lifted','style']}));
    addEventListener('resize',()=>{geoKey='';update();},{passive:true});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(followFrame);followFrame=0;}else followArc();});
    addEventListener('dopafit:orbit-variant',()=>{geoKey='';requestAnimationFrame(update);});
    update();
    return true;
  }
  const findRoot=()=>window.DopafitMobile?document.querySelector('.m-orbit'):document;
  const tryMount=(n=0)=>{const root=findRoot();if(!(root&&mount(root))&&n<240)requestAnimationFrame(()=>tryMount(n+1));};
  document.readyState==='loading'?addEventListener('DOMContentLoaded',()=>tryMount()):tryMount();
})();
