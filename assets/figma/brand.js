/* Dopafit brand mark in the header and footer (user request 2026-11-18).
   The animation is reused from dev-dopafit-app-2026-11-17T08-35-45-069Z/index.html (".arrive", the app intro's
   arrival): the two speed slabs shoot in from the left, the impact pushes the D and lights it, three streaks run
   out behind; then the loader's light sweep (".mark-wrap::after", same mask) crosses the mark. Path data, timings
   and easings are copied from that file. The header plays it on load, the footer when it scrolls into view;
   both replay on hover/focus.
   Header: lifted out of the hero so it stays at the top while the page scrolls; once the page has moved it gets a
   glass bar with the same mirror reflection as the "Tập ở đâu…" cards (sections.css .places-card). */
(() => {
  'use strict';
  const q=id=>document.querySelector(`[data-node-id="147:${id}"]`);
  const MARK=`<span class="dp-mark" aria-hidden="true"><svg class="dp-mark-svg" viewBox="46.115 82.96 194 123.196" aria-hidden="true"><path class="d" d="M91.9254 83.1714C95.5708 83.139 99.2173 83.1657 102.863 83.1544C113.772 83.1256 124.682 83.1384 135.591 83.1471C145.783 83.1548 155.974 83.1214 166.166 83.1264C172.792 83.1294 179.419 83.1505 186.045 83.1192C193.55 83.0863 201.199 83.433 208.337 86.2042C208.679 86.333 209.021 86.4618 209.373 86.5945C220.822 91.0826 230.275 99.6064 235.476 111.624C237.411 116.224 238.448 121.003 239.453 125.848C240.517 132.348 239.656 138.922 238.375 145.327C235.805 157.712 229.171 169.038 221.308 178.299C220.626 179.104 219.965 179.924 219.307 180.753C209.331 193.089 194.466 201.581 178.709 205.059C174.306 205.952 169.833 205.942 165.37 205.955C147.029 206.045 128.688 206.066 110.347 206.117C109.212 205.881 109.212 205.881 108.364 204.977C107.639 203.681 107.541 203.179 107.802 201.681C121.208 169.617 123.5 171.723 164.469 171.733C167.386 171.717 170.304 171.7 173.22 171.723C196.027 171.463 221.308 119.709 191.144 119.709C175.671 119.709 145.542 118.991 132.174 118.995C128.519 118.993 124.863 118.951 121.208 118.98C116.765 118.93 113.044 116.895 109.872 113.576C108.582 112.099 107.406 110.525 106.23 108.94C105.031 107.335 103.773 105.785 102.521 104.228C99.9126 100.984 97.383 97.6766 94.6953 94.5088C93.2201 92.7686 91.8318 90.9676 90.466 89.126C89.8408 88.2698 89.8408 88.2698 89.1223 87.5167C88.9197 84.7515 88.9197 84.7515 89.5498 83.8514C90.382 83.1448 90.874 83.1728 91.9254 83.1714Z"></path><path class="near" d="M97.609 133.21C98.4719 131.011 98.9034 129.912 99.632 129.103C100.276 128.388 101.082 127.838 101.983 127.5C103.002 127.117 104.183 127.117 106.546 127.117H115.92C120.641 127.117 123.002 127.117 124.505 128.11C125.821 128.978 126.741 130.328 127.069 131.869C127.444 133.632 126.581 135.829 124.857 140.224L101.391 200.024C100.528 202.223 100.097 203.323 99.368 204.132C98.7243 204.847 97.9181 205.396 97.0174 205.735C95.9979 206.117 94.8167 206.117 92.4544 206.117H83.0797C78.3587 206.117 75.9982 206.117 74.4945 205.125C73.1795 204.257 72.2587 202.906 71.931 201.365C71.5564 199.603 72.4186 197.405 74.1432 193.01L97.609 133.21Z"></path><path class="far" d="M66.5373 145.186C67.1116 143.718 67.3988 142.983 67.8845 142.443C68.3137 141.966 68.8515 141.599 69.4525 141.373C70.1327 141.117 70.9209 141.117 72.4975 141.117H77.9335C81.0777 141.117 82.6497 141.117 83.6518 141.778C84.5282 142.356 85.1422 143.256 85.3613 144.282C85.6118 145.456 85.0391 146.92 83.8938 149.849L72.0809 180.049C71.5065 181.517 71.2194 182.251 70.7336 182.791C70.3044 183.269 69.7667 183.636 69.1657 183.862C68.4855 184.117 67.6972 184.117 66.1206 184.117H60.6847C57.5405 184.117 55.9684 184.117 54.9664 183.456C54.09 182.878 53.476 181.979 53.2569 180.952C53.0064 179.778 53.5791 178.314 54.7244 175.386L66.5373 145.186Z"></path></svg><span class="burst"><i style="--y:38%;--w:60%"></i><i style="--y:52%;--w:90%"></i><i style="--y:66%;--w:50%"></i></span></span>`;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.style.setProperty('--dp-mark-mask',`url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2246.115 82.96 194 123.196%22%3E%3Cg fill=%22%23000%22%3E%3Cpath d=%22M91.9254 83.1714C95.5708 83.139 99.2173 83.1657 102.863 83.1544C113.772 83.1256 124.682 83.1384 135.591 83.1471C145.783 83.1548 155.974 83.1214 166.166 83.1264C172.792 83.1294 179.419 83.1505 186.045 83.1192C193.55 83.0863 201.199 83.433 208.337 86.2042C208.679 86.333 209.021 86.4618 209.373 86.5945C220.822 91.0826 230.275 99.6064 235.476 111.624C237.411 116.224 238.448 121.003 239.453 125.848C240.517 132.348 239.656 138.922 238.375 145.327C235.805 157.712 229.171 169.038 221.308 178.299C220.626 179.104 219.965 179.924 219.307 180.753C209.331 193.089 194.466 201.581 178.709 205.059C174.306 205.952 169.833 205.942 165.37 205.955C147.029 206.045 128.688 206.066 110.347 206.117C109.212 205.881 109.212 205.881 108.364 204.977C107.639 203.681 107.541 203.179 107.802 201.681C121.208 169.617 123.5 171.723 164.469 171.733C167.386 171.717 170.304 171.7 173.22 171.723C196.027 171.463 221.308 119.709 191.144 119.709C175.671 119.709 145.542 118.991 132.174 118.995C128.519 118.993 124.863 118.951 121.208 118.98C116.765 118.93 113.044 116.895 109.872 113.576C108.582 112.099 107.406 110.525 106.23 108.94C105.031 107.335 103.773 105.785 102.521 104.228C99.9126 100.984 97.383 97.6766 94.6953 94.5088C93.2201 92.7686 91.8318 90.9676 90.466 89.126C89.8408 88.2698 89.8408 88.2698 89.1223 87.5167C88.9197 84.7515 88.9197 84.7515 89.5498 83.8514C90.382 83.1448 90.874 83.1728 91.9254 83.1714Z%22/%3E%3Cpath d=%22M97.609 133.21C98.4719 131.011 98.9034 129.912 99.632 129.103C100.276 128.388 101.082 127.838 101.983 127.5C103.002 127.117 104.183 127.117 106.546 127.117H115.92C120.641 127.117 123.002 127.117 124.505 128.11C125.821 128.978 126.741 130.328 127.069 131.869C127.444 133.632 126.581 135.829 124.857 140.224L101.391 200.024C100.528 202.223 100.097 203.323 99.368 204.132C98.7243 204.847 97.9181 205.396 97.0174 205.735C95.9979 206.117 94.8167 206.117 92.4544 206.117H83.0797C78.3587 206.117 75.9982 206.117 74.4945 205.125C73.1795 204.257 72.2587 202.906 71.931 201.365C71.5564 199.603 72.4186 197.405 74.1432 193.01L97.609 133.21Z%22/%3E%3Cpath d=%22M66.5373 145.186C67.1116 143.718 67.3988 142.983 67.8845 142.443C68.3137 141.966 68.8515 141.599 69.4525 141.373C70.1327 141.117 70.9209 141.117 72.4975 141.117H77.9335C81.0777 141.117 82.6497 141.117 83.6518 141.778C84.5282 142.356 85.1422 143.256 85.3613 144.282C85.6118 145.456 85.0391 146.92 83.8938 149.849L72.0809 180.049C71.5065 181.517 71.2194 182.251 70.7336 182.791C70.3044 183.269 69.7667 183.636 69.1657 183.862C68.4855 184.117 67.6972 184.117 66.1206 184.117H60.6847C57.5405 184.117 55.9684 184.117 54.9664 183.456C54.09 182.878 53.476 181.979 53.2569 180.952C53.0064 179.778 53.5791 178.314 54.7244 175.386L66.5373 145.186Z%22/%3E%3C/g%3E%3C/svg%3E")`);

  function play(mark){
    if(reduced)return;
    mark.classList.remove('is-in');void mark.offsetWidth;mark.classList.add('is-in');
  }
  function brand(link,wordHTML){
    if(!link||link.querySelector('.dp-mark'))return null;
    link.classList.add('dp-brand');
    link.innerHTML=MARK+`<span class="dp-word">${wordHTML}</span>`;
    const mark=link.querySelector('.dp-mark');
    ['pointerenter','focus'].forEach(t=>link.addEventListener(t,()=>{if(!mark.classList.contains('is-playing'))play(mark);}));
    mark.addEventListener('animationstart',()=>mark.classList.add('is-playing'));
    mark.addEventListener('animationend',e=>{if(e.animationName==='dp-sweep')mark.classList.remove('is-playing');});
    return mark;
  }

  brand(q(2830),'OPAFIT');
  brand(q(2997),'OPAFIT');
  // Header marks (desktop 147:2830 and its mobile clone) play shortly after load; every other mark (footer,
  // mobile footer clone) plays once when fully in view.
  const start=()=>{
    const isHead=m=>!!m.closest('[data-node-id="147:2825"],.m-header');
    const seen=new WeakSet();
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){play(e.target);io.unobserve(e.target);}}),{threshold:.5,rootMargin:'0px 0px -12% 0px'});
    // Every mark is registered once: header marks play shortly after load, the rest once fully in view. Marks
    // cloned later (mobile page) arrive through the observer below with copied classes, so they are reset first.
    const register=m=>{
      if(seen.has(m))return;seen.add(m);
      m.classList.remove('is-in','is-playing');
      if(reduced)return;
      m.classList.add('is-armed');
      if(isHead(m))setTimeout(()=>play(m),650);else io.observe(m);
      const link=m.closest('.m-logo,.m-footer-logo');if(link)link.addEventListener('pointerenter',()=>play(m));
    };
    document.querySelectorAll('.dp-mark').forEach(register);
    new MutationObserver(list=>{for(const r of list)for(const n of r.addedNodes){if(n.nodeType!==1)continue;
      if(n.classList.contains('dp-mark'))register(n);else if(n.firstElementChild)n.querySelectorAll('.dp-mark').forEach(register);}})
      .observe(document.body,{childList:true,subtree:true});
  };
  addEventListener('load',start,{once:true});
  // Sticky header: the header host is lifted out of the hero and fixed to the top on both layouts
  // (desktop canvas header 147:2825, mobile .m-header built by mobile.js inside the same host).
  const fix=()=>{
    const host=document.querySelector('.skydive-header-canvas');if(!host)return requestAnimationFrame(fix);
    host.classList.add('dp-header-fixed');document.body.append(host);
    let stuck=null,hidden=null;
    // User choice 2026-11-18: the bar stays at the top, but slides away while a section heading is underneath it
    // (e.g. the pinned orbit heading; on mobile also the sticky orbit figure), so it never covers a title.
    const headIds=[2750,2851,2852,2853,2854,3198];
    const titles=()=>window.DopafitMobile?[...document.querySelectorAll('.m-h2,.m-int-title,.m-orbit-sticky')]:[...headIds.map(q),document.querySelector('.faq-pl-left h2')].filter(Boolean);
    let list=null,limit=120;
    const update=()=>{
      const bar=window.DopafitMobile?host.querySelector('.m-header'):q(2825);if(!bar)return;
      const s=scrollY>40;if(s!==stuck||!bar.classList.contains('dp-bar')){stuck=s;bar.classList.add('dp-bar');bar.classList.toggle('dp-stuck',s);}
      // glass light position: one full sweep per ~1.6 screens of scrolling, back and forth
      const t=(scrollY/(innerHeight*1.6))%2,f=t<1?t:2-t;bar.style.setProperty('--dp-sheen',`${(100-f*100).toFixed(1)}%`);
      if(!list||!list.length)list=titles();
      if(!hidden)limit=bar.getBoundingClientRect().bottom+12; // measured while the bar is in place
      const covered=s&&list.some(t=>{const r=t.getBoundingClientRect();return r.height&&r.top<limit&&r.bottom>0;});
      if(covered!==hidden){hidden=covered;host.classList.toggle('dp-header-away',covered);}
    };
    let raf=0;const tick=()=>{raf=0;update();};
    addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(tick);},{passive:true});update();setTimeout(update,400);
  };
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fix):fix();
})();
