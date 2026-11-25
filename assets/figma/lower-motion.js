/* User-requested Blender calendar rebuild. Mesh and baked flexible-sheet clips:
   scripts/build-calendar.py -> assets/calendar/dopafit-calendar.blend/.glb.
   Scroll controls the shared clip time in both directions; no autonomous loop. */
(() => {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches||new URLSearchParams(location.search).get('motion')==='off';
  const controls=new Set();let frame=0;
  const clamp=n=>Math.max(0,Math.min(1,n));
  function mountCalendar(host){
    if(!host||host.dataset.calendarMounted)return;
    host.dataset.calendarMounted='true';host.classList.add('calendar-art');
    host.setAttribute('role','img');host.setAttribute('aria-label','3D workout calendar for 2025 with scroll-driven page turns');
    const poster=host.querySelector('img');if(poster){poster.src='assets/figma/0ddab.webp';poster.alt='Workout calendar for January 2025';}
    let renderModel,last=-1;
    function update(){
      const box=host.getBoundingClientRect(),vh=innerHeight;
      const p=reduced?1:clamp((vh*.85-box.top)/(box.height*.8+vh*.20));
      const k=Math.round(p*1000)/1000;if(k===last)return;last=k;
      host.dataset.progress=String(k);renderModel?.(k);
    }
    const observer=new IntersectionObserver(entries=>{
      if(!entries.some(e=>e.isIntersecting))return;observer.disconnect();
      import('./calendar-renderer.js?v=peel-1').then(m=>m.mountCalendar3D(host)).then(render=>{
        renderModel=render;renderModel(last<0?0:last);
      }).catch(error=>{host.dataset.modelError=error.message;console.warn('Calendar retains its supplied artwork:',error);});
    },{rootMargin:'500px'});
    observer.observe(host);controls.add(update);update();return update;
  }
  function request(){if(!frame)frame=requestAnimationFrame(()=>{frame=0;controls.forEach(update=>update());});}
  addEventListener('scroll',request,{passive:true});addEventListener('resize',request,{passive:true});addEventListener('dopafit:scroll',request);
  window.DopafitLowerMotion={mountCalendar};
})();
