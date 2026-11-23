/* Supplied Excercises clips, same fan slots/keyframes. Decode only visible cards. */
(() => {
 const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches||new URLSearchParams(location.search).get('motion')==='off',visible=new Set();
 function sync(v){if(visible.has(v)&&!document.hidden&&!reduced)v.play().catch(()=>{});else v.pause();}
 const observer=new IntersectionObserver(es=>es.forEach(e=>{e.isIntersecting?visible.add(e.target):visible.delete(e.target);sync(e.target);}),{threshold:.05});
 document.addEventListener('visibilitychange',()=>visible.forEach(sync));
 window.DopafitFanVideo={create(i){const v=document.createElement('video');v.src=`assets/exercises/fan/${i+1}.mp4`;v.poster=`assets/exercises/fan/${i+1}.png`;v.setAttribute('aria-label',window.DopafitContent.fan[i]);v.muted=true;v.loop=true;v.playsInline=true;v.preload='none';observer.observe(v);return v;}};
})();
