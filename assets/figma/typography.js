/* Same-level H2s share one physical font size; nav/footer use14–16px after zoom.
   Source coordinates and typeface remain. Refresh the existing Chande adapter,
   rather than replace its captured title effect. */
(() => {
  const q=id=>document.querySelector(`[data-node-id="147:${id}"]`);
  let frame=0,last='';
  function apply(){
    frame=0;
    if(window.DopafitMobile)return;
    const target=Math.min(64,Math.max(40,innerWidth*.04445));
    function size(node,px){
      if(!node)return;const scale=node.getBoundingClientRect().width/node.offsetWidth;
      if(!scale||!Number.isFinite(scale))return;
      node.style.fontSize=`${px/scale}px`;
    }
    const heads=[2750,2851,2852,2853,2854].map(q).filter(Boolean);
    heads.forEach(node=>{node.classList.add('section-heading');node.setAttribute('role','heading');node.setAttribute('aria-level','2');size(node,node===q(2851)?78.194*innerWidth/1920:target);});
    [2827,2828,2829].forEach(id=>size(q(id),15));
    [2751,2847,2991].forEach(id=>{const button=q(id),node=button?.querySelector('p');if(!button||!node)return;const scale=button.getBoundingClientRect().width/button.offsetWidth;button.style.width=`${140/scale}px`;button.style.height=`${40/scale}px`;const copy=node.parentElement;Object.assign(copy.style,{position:'absolute',inset:'0',width:'100%',height:'100%',transform:'none',display:'flex',alignItems:'center',justifyContent:'center'});size(node,15);node.style.lineHeight='1.3';node.style.whiteSpace='nowrap';});
    [3013,3015,3020,3024].forEach(id=>size(q(id),16));
    [3014,3019,3023].forEach(id=>size(q(id),14));
    [3027,3028].forEach(id=>{const node=q(id);size(node,14);const scale=node.getBoundingClientRect().width/node.offsetWidth;node.style.top=`${185/scale}px`;if(id===3028)node.style.width=`${340/scale}px`;});
    const calendar=q(2854),button=q(2991);
    if(calendar&&button){const scale=calendar.getBoundingClientRect().width/calendar.offsetWidth;button.style.top=`${calendar.offsetTop+calendar.offsetHeight+32/scale}px`;button.style.left=`${calendar.offsetLeft+button.offsetWidth/2}px`;}
    const key=[innerWidth,innerHeight,target,...heads.map(n=>n.offsetHeight)].join(':');
    if(key!==last){last=key;window.dispatchEvent(new Event('dopafit:typography'));window.CHANDE_TITLEFX?.refresh();window.dispatchEvent(new Event('scroll'));}
  }
  const request=()=>{if(!frame)frame=requestAnimationFrame(apply);};
  addEventListener('DOMContentLoaded',request);addEventListener('resize',request,{passive:true});document.fonts.ready.then(request);
})();
