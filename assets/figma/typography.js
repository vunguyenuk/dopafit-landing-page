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
      node.style.setProperty('font-size',`${px/scale}px`,'important');
    }
    const heads=[2750,2851,2852,2853,2854].map(q).filter(Boolean);
    heads.forEach(node=>{node.classList.add('section-heading');node.setAttribute('role','heading');node.setAttribute('aria-level','2');size(node,target);});
    // Width is measured in physical CSS pixels, independently of the imported
    // 1920px canvas zoom. Keep headings readable on ultrawide displays.
    [[2750,1040,1240],[2851,760,883],[2852,1040,1200],[2853,960,1050],[2854,680,716]].forEach(([id,max,width])=>{
      const node=q(id);const scale=node.getBoundingClientRect().width/node.offsetWidth;
      node.style.setProperty('width',`${Math.min(width,max/scale)}px`,'important');
    });
    // Cap page copy at its accepted 1920px design size. App-screen text stays
    // attached to its device; scaling a device must also scale its own UI.
    const copyNodes=[q(2763),...[2910,2911,2912,2913,2924,2926,2929,2932,2934,2936].map(q),
      ...document.querySelectorAll('.feature-tab,.faq-pl-q,.faq-pl-a p,.faq-pl-left h2,.faq-pl-left>p,.content-download,.orbit-feature-title,.footer-motto,[data-node-id="147:3198"]')].filter(Boolean);
    copyNodes.forEach(node=>{
      const scale=node.getBoundingClientRect().width/node.offsetWidth;if(!scale)return;
      if(!node.dataset.typeCap)node.dataset.typeCap=String(parseFloat(getComputedStyle(node).fontSize));
      const cap=+node.dataset.typeCap;
      const orbitCopy=node.matches('[data-node-id="147:2910"],[data-node-id="147:2911"],[data-node-id="147:2912"],[data-node-id="147:2913"],.orbit-feature-title');
      if(orbitCopy){
        const body=16+2*Math.max(0,Math.min(1,(innerWidth-1440)/1120));
        size(node,body+(node.matches('.orbit-feature-title')?4:0));
      }else node.style.setProperty('font-size',`${cap/Math.max(1,innerWidth/1920)}px`,'important');
    });
    [2827,2828,2829].forEach(id=>size(q(id),15));
    [2751,2847,2991].forEach(id=>{const button=q(id),node=button?.querySelector('p');if(!button||!node)return;const scale=button.getBoundingClientRect().width/button.offsetWidth;button.style.width=`${140/scale}px`;button.style.height=`${40/scale}px`;const copy=node.parentElement;Object.assign(copy.style,{position:'absolute',inset:'0',width:'100%',height:'100%',transform:'none',display:'flex',alignItems:'center',justifyContent:'center'});size(node,15);node.style.lineHeight='1.3';node.style.whiteSpace='nowrap';});
    const exerciseHeading=q(2750),exerciseButton=q(2751);
    if(exerciseHeading&&exerciseButton){const headingBox=exerciseHeading.getBoundingClientRect(),parent=exerciseButton.offsetParent,parentBox=parent.getBoundingClientRect(),scale=parentBox.width/parent.offsetWidth;
      // Keep the CTA clear of the accepted fan tips on narrow desktop widths.
      const gap=innerWidth<=1280?20:36;
      exerciseButton.style.setProperty('top',`${(headingBox.bottom-parentBox.top+gap)/scale}px`,'important');
    }
    [3013,3015,3020,3024].forEach(id=>size(q(id),16));
    [3014,3019,3023].forEach(id=>size(q(id),14));
    [[3014,3015],[3019,3020],[3023,3024]].forEach(([labelId,listId])=>{
      const label=q(labelId),list=q(listId),scale=label.getBoundingClientRect().width/label.offsetWidth;
      list.style.top=`${label.offsetTop+label.offsetHeight+16/scale}px`;
    });
    const footerBottom=Math.max(...[3013,3016,3017,3018,3021,3022,3025,3026].map(id=>q(id).getBoundingClientRect().bottom));
    [3027,3028].forEach(id=>{
      const node=q(id);size(node,14);const scale=node.getBoundingClientRect().width/node.offsetWidth;
      // English copy is shorter, but the legal line still belongs below all
      // columns rather than sharing a baseline with the final privacy link.
      node.style.top=`${(footerBottom-node.offsetParent.getBoundingClientRect().top+32)/scale}px`;
      if(id===3028)node.style.width=`${340/scale}px`;
    });
    const calendar=q(2854),button=q(2991);
    if(calendar&&button){const scale=calendar.getBoundingClientRect().width/calendar.offsetWidth;button.style.top=`${calendar.offsetTop+calendar.offsetHeight+32/scale}px`;button.style.left=`${calendar.offsetLeft+button.offsetWidth/2}px`;}
    const key=[innerWidth,innerHeight,target,...heads.map(n=>n.offsetHeight),...[2910,2911,2912,2913].map(id=>Math.max(q(id)?.offsetHeight||0,q(id)?.scrollHeight||0))].join(':');
    if(key!==last){last=key;window.dispatchEvent(new Event('dopafit:typography'));window.CHANDE_TITLEFX?.refresh();window.dispatchEvent(new Event('scroll'));}
  }
  const request=()=>{if(!frame)frame=requestAnimationFrame(apply);};
  addEventListener('dopafit:orbit-fit',request);addEventListener('DOMContentLoaded',request);addEventListener('resize',request,{passive:true});document.fonts.ready.then(request);
})();
