/* Responsive guard (Claude 2026-11-18). On tablet-sized desktop layouts (≈820–1100px wide) the enlarged phone
   (147:2771, docked) reaches into the "Theo dõi nghiêm túc…" title column (147:2851) and the title ran under it.
   When that happens the title column is narrowed to end 32px before the phone; the Chande title adapter re-reads
   the width on `dopafit:typography`. Wide screens are left exactly as they are. */
(() => {
  'use strict';
  if(window.DopafitMobile)return;
  const q=id=>document.querySelector(`[data-node-id="147:${id}"]`);
  const GAP=32;
  let base=null,frame=0;
  function fit(){
    frame=0;
    const title=q(2851),phone=q(2771);
    if(!title||!phone||!phone.classList.contains('phone-docked'))return;
    if(base===null)base=title.style.width||'';
    const before=title.style.width;
    title.style.width=base;
    const t=title.getBoundingClientRect(),p=phone.getBoundingClientRect();
    const k=t.width/title.offsetWidth||1;
    const room=p.left-GAP-t.left;
    if(t.right>p.left-GAP&&room>120)title.style.width=`${(room/k).toFixed(1)}px`;
    if(title.style.width!==before)dispatchEvent(new Event('dopafit:typography'));
  }
  const req=()=>{if(!frame)frame=requestAnimationFrame(fit);};
  addEventListener('resize',req,{passive:true});
  addEventListener('load',req);
  const watch=()=>{const phone=q(2771);if(!phone)return;new MutationObserver(req).observe(phone,{attributes:true,attributeFilter:['class']});req();};
  document.readyState==='loading'?addEventListener('DOMContentLoaded',watch):watch();
})();
