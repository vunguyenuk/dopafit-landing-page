/* User-requested comparison: swap orbit sides + clockwise ring as one reversible option. */
(() => {
  'use strict';
  const KEY='dopafit-orbit-team-layout';
  let enabled=true;
  try{const saved=localStorage.getItem(KEY);if(saved!==null)enabled=saved==='on';}catch{}
  const controls=new Set();
  const sync=()=>{
    document.documentElement.dataset.orbitVariant=enabled?'team':'original';
    controls.forEach(button=>button.setAttribute('aria-checked',String(enabled)));
  };
  function set(value){
    value=Boolean(value);if(value===enabled)return;
    enabled=value;try{localStorage.setItem(KEY,enabled?'on':'off');}catch{}
    sync();window.dispatchEvent(new CustomEvent('dopafit:orbit-variant',{detail:{enabled}}));
    window.dispatchEvent(new Event('scroll'));
  }
  function mount(parent){
    const button=document.createElement('button');button.type='button';button.className='orbit-layout-toggle';
    button.setAttribute('role','switch');button.setAttribute('aria-label','Đổi bên nội dung và chạy vòng theo chiều kim đồng hồ');
    button.innerHTML='<span>Đổi bên nội dung</span><span class="orbit-toggle-track" aria-hidden="true"><i></i></span>';
    button.addEventListener('click',()=>set(!enabled));controls.add(button);parent.append(button);sync();return button;
  }
  window.DopafitOrbitVariant={get enabled(){return enabled;},set,mount};sync();
})();
