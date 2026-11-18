/* "Làm thế nào để tập nghiêm túc?" — Skydive "Real work happens in real tools" scene.
   Source: skydive-com-2026-11-17T07-40-36-989Z/assets/main-goXeaETJ.js
     - SH() reveal schedule: TEt=.025, REt=.435, mKe=tools+1, multi when p > TEt+REt
     - Exe dot states: revealed ? (multi ? 1.35 : active ? 1.17 : 1) : .2; opacity revealed ? (other tool active ? .35 : 1) : 0
     - mps() side panel: opacity .45s ease, translate .55s cubic-bezier(.22,.61,.36,1), ±14px from the orbit side
     - dashed ring: opacity .8s once live (p > .01); centre crossfade .5s
     - section h-[840vh] with a sticky h-screen stage centred in the viewport
   Source CSS: .orbit-dot{transition:opacity .45s,--dotscale .6s cubic-bezier(.3,1.4,.5,1)}
   Dopafit adaptations (estimated, review): 4 Figma dots instead of 7 tools; 14px offset scaled
   by the ring radius ratio (262/150); multi-phase orbit rotation omitted so each dot stays next to
   its Figma caption; travel shortened (no asker bubbles) — see TRAVEL_VH below. */
(() => {
  'use strict';
  const TEt=.025,REt=.435,LIVE=.01;
  const RING={x:969,y:7118,radius:262};
  const OFFSET=14*RING.radius/150; // source 14px × ring-size ratio
  // User request 2026-11-18: the active tool's UI is shown larger (back to the Figma size in the together state).
  const TOOL_SCALE=1.65;
  // User request: the video guide sits on top of the recovery phone's clipped bottom (Figma position), no lime ring.
  // User request: close the empty band above the heading. The stage is drawn LIFT px higher, and after the hold it
  // trails the page at half speed until it is back in place, so the next section closes the same distance.
  const HEADING_GAP=200;
  // User request: a slightly bigger centre (figure, ring, dots; captions follow their dots) and the
  // surrounding cards pushed outward for breathing room, as far as the visible stage width allows.
  const CENTER_SCALE=1.30,SIDE_SHIFT=150;
  // User request 2026-11-18: slower reveal. Scroll budget in viewport heights: each of the 5 SH slots
  // (4 tools + the source's trailing "all revealed" slot) gets SLOT_VH, then MULTI_VH for the together state.
  // Scroll is mapped piecewise onto the source progress p so SH() thresholds stay as in Skydive.
  const LEAD_VH=.12,SLOT_VH=.62,MULTI_VH=1.1,MOBILE=900/840; // source: h-[840vh], max-[600px]:h-[900vh]
  // Counter-clockwise from the right, matching Skydive's asana → github → figma → … order.
  const TOOLS=[
    {dot:2871,panels:[2892,2913]},       // video guide
    {dot:2875,panels:[2898,2884,2910]},  // body map
    {dot:2878,panels:[2914,2915,2911]},  // set log + rest timer
    {dot:2881,panels:[2916,2912]}        // weekly goal / streak
  ];
  const STAGE_IDS=[2852,2764,2856,...TOOLS.flatMap(t=>[t.dot,...t.panels])];
  const mKe=TOOLS.length+1,jxe=TEt+REt;
  function SH(t){
    const e=(t-TEt)/REt,n=e<0?-1:Math.min(Math.floor(e*mKe),mKe),multi=t>jxe;
    const active=!multi&&n>=0&&n<TOOLS.length?n:-1;
    return {live:t>LIVE,revealedSeq:n,multi,active};
  }
  const clamp=x=>Math.max(0,Math.min(1,x));

  function mount({canvas,q,reduced}){
    const nodes=STAGE_IDS.map(q);
    const first=nodes.reduce((a,b)=>a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_PRECEDING?b:a);
    const stage=document.createElement('div');stage.className='orbit-stage';
    const curtain=document.createElement('div');curtain.className='orbit-curtain';curtain.setAttribute('aria-hidden','true');
    first.before(curtain,stage);
    // Keep the original paint order inside the stage.
    nodes.slice().sort((a,b)=>a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1).forEach(n=>stage.append(n));
    const ring=q(2856),bodyActive=q(2768),heading=q(2852),body=q(2764);
    // User request: no small tick dots on the ring; the figure stands in front of the ring.
    for(let id=2859;id<=2870;id++)q(id)?.classList.add('orbit-tick-hidden');
    body.before(ring);
    [q(2892),q(2913)].forEach(n=>n.style.zIndex='2');
    const prev=q(2794),prevBottom=prev?prev.offsetTop+prev.offsetHeight:0;let lift=0,lastLift=null;
    ring.classList.add('orbit-ring');bodyActive.classList.add('orbit-body-active');
    // User request 10:03: remove the half-hidden second device (147:2884) and the Figma scan overlay
    // (147:2908/2909, wider than the phone); the scan now runs inside the recovery screen (orbit-ui.js).
    [2884,2908,2909].forEach(id=>q(id)?.classList.add('orbit-removed'));
    // Move the video icon18° clockwise on the same circle. Its caption/video
    // follow; preserve the recovery card's former lower edge above that group.
    const videoDot=q(2871),vx=videoDot.offsetLeft+videoDot.offsetWidth/2-RING.x,vy=videoDot.offsetTop+videoDot.offsetHeight/2-RING.y;
    const recoveryCeiling=RING.y+vy*CENTER_SCALE-q(2913).offsetHeight/2-24;
    const videoAngle=Math.atan2(vy,vx)+Math.PI/10,videoRadius=Math.hypot(vx,vy);
    Object.assign(videoDot.style,{left:`${RING.x+Math.cos(videoAngle)*videoRadius-videoDot.offsetWidth/2}px`,top:`${RING.y+Math.sin(videoAngle)*videoRadius-videoDot.offsetHeight/2}px`});
    // Captions sit just outside their dot at one fixed gap, never across the ring.
    const CAPTION_GAP=28,DOT_R=34*1.35,placed={};
    [[2871,2913],[2875,2910],[2878,2911],[2881,2912]].forEach(([dotId,capId])=>{
      const dot=q(dotId),cap=q(capId);
      const cx=RING.x+(dot.offsetLeft+dot.offsetWidth/2-RING.x)*CENTER_SCALE,cy=RING.y+(dot.offsetTop+dot.offsetHeight/2-RING.y)*CENTER_SCALE;
      const len=Math.hypot(cx-RING.x,cy-RING.y),ux=(cx-RING.x)/len,uy=(cy-RING.y)/len,w=cap.offsetWidth,ch=cap.offsetHeight;
      let left,top;
      if(Math.abs(ux)>.85){left=ux>0?cx+DOT_R+CAPTION_GAP:cx-DOT_R-CAPTION_GAP-w;top=cy-ch/2;}
      else{const px=cx+ux*(DOT_R+CAPTION_GAP),py=cy+uy*(DOT_R+CAPTION_GAP);left=ux<0?px-w:px;top=uy<0?py-ch:py;}
      Object.assign(cap.style,{left:`${left}px`,top:`${top}px`,right:'auto',bottom:'auto',margin:'0'});
      placed[capId]={left,top,bottom:top+ch};
    });
    // The video guide sits under its caption (next to its dot); the recovery phone moves up to make room.
    const videoCard=q(2892),vc=placed[2913];
    // User requested a larger guide instead of the spare space around the414px figure.
    const guideWidth=520;
    Object.assign(videoCard.style,{width:`${guideWidth}px`,height:'350px',left:`${Math.min(vc.left,1920-24-guideWidth)}px`,top:`${vc.bottom+24}px`,right:'auto',bottom:'auto'});
    const recoveryPhone=q(2899),phoneLift=recoveryPhone.offsetTop+recoveryPhone.offsetHeight-Math.min(vc.top-24,recoveryCeiling);
    if(phoneLift>0)recoveryPhone.style.top=`${recoveryPhone.offsetTop-phoneLift}px`;
    const tools=TOOLS.map(t=>{
      const dot=q(t.dot);dot.classList.add('orbit-dot');
      // Figma wrappers such as 147:2898 are display:contents and ignore opacity: animate their children.
      const panels=t.panels.map(q).flatMap(n=>getComputedStyle(n).display==='contents'?[...n.children]:[n]).filter(n=>getComputedStyle(n).display!=='none');
      const cx=dot.offsetLeft+dot.offsetWidth/2;
      const side=cx<RING.x?'left':'right';
      panels.forEach(p=>{p.classList.add('orbit-panel');p.dataset.side=side;p.style.setProperty('--orbit-offset',`${side==='left'?OFFSET:-OFFSET}px`);});
      // Captions keep their size next to the dot; only the UI cards grow.
      const zoomed=panels.filter(p=>p.tagName!=='P');
      const box={left:Math.min(...zoomed.map(p=>p.offsetLeft)),top:Math.min(...zoomed.map(p=>p.offsetTop)),
        right:Math.max(...zoomed.map(p=>p.offsetLeft+p.offsetWidth)),bottom:Math.max(...zoomed.map(p=>p.offsetTop+p.offsetHeight))};
      const captions=panels.filter(p=>!zoomed.includes(p));
      return {dot,panels,zoomed,captions,side,box,scale:1,noShift:t.dot===2871};
    });
    // Bigger centre around the ring centre; dots and their captions move out radially with it.
    [body,...[...ring.children]].forEach(n=>{n.style.transformOrigin=`${RING.x-n.offsetLeft}px ${RING.y-n.offsetTop}px`;n.style.scale=String(CENTER_SCALE);});
    tools.forEach(t=>{
      const dx=(t.dot.offsetLeft+t.dot.offsetWidth/2-RING.x)*(CENTER_SCALE-1),dy=(t.dot.offsetTop+t.dot.offsetHeight/2-RING.y)*(CENTER_SCALE-1);
      t.dot.style.translate=`${dx}px ${dy}px`;
    });
    // Grow each tool's UI outward from its inner edge, kept inside the visible stage window.
    function placeZoom(fit,h){
      const half=h/2/fit,margin=24/fit,wt=center-half+margin,wb=center+half-margin,wl=960-960/fit+margin,wr=960+960/fit-margin;
      const lefts=tools.filter(t=>t.side==='left'&&!t.noShift),rights=tools.filter(t=>t.side==='right'&&!t.noShift);
      const D=Math.max(0,Math.min(SIDE_SHIFT,Math.min(...lefts.map(t=>t.box.left))-wl,wr-Math.max(...rights.map(t=>t.box.right))));
      tools.forEach(t=>{
        const captionEdge=t.side==='left'?Math.min(...t.captions.map(p=>p.offsetLeft)):Math.max(...t.captions.map(p=>p.offsetLeft+p.offsetWidth));
        let d=t.noShift?0:t.side==='left'?Math.min(-D,captionEdge-32-t.box.right):Math.max(D,captionEdge+32-t.box.left);
        // Responsive (Claude 2026-11-18): never push a panel past the visible window edge (tablet widths cut it off).
        if(!t.noShift)d=t.side==='left'?Math.max(d,wl-t.box.left):Math.min(d,wr-t.box.right);
        t.zoomed.forEach(p=>p.style.setProperty('--ox',`${d}px`));
        const left=t.box.left+d,right=t.box.right+d,{top,bottom}=t.box,oxs=t.side==='left'?right:left,ox=oxs-d;
        let S=Math.min(TOOL_SCALE,(wb-wt)/(bottom-top));
        S=Math.min(S,t.side==='left'?(oxs-wl)/(oxs-left):(wr-oxs)/(right-oxs));
        S=Math.max(1,S);
        // Responsive (Claude 2026-11-18): on narrow windows a panel held at the screen edge would cover its caption;
        // shrink it (growing from its outer edge) so it ends 32px before the caption.
        let outer=false;
        if(!t.noShift){
          const room=t.side==='left'?(captionEdge-32)-left:right-(captionEdge+32);
          if(room>0&&room<right-left){S=room/(right-left);outer=true;}
        }
        // The video guide grows down from under its caption: limit its zoom to the room below, so the window clamp
        // never moves its origin down and makes it grow up over the caption (Claude 2026-11-18).
        if(t.noShift)S=Math.max(1,Math.min(S,(wb-top)/(bottom-top)));
        let oy=t.noShift?top:t.dot===q(2875)?bottom:(top+bottom)/2; // body-map grows upward, clear of the video caption below
        if(S>1){const lo=(bottom*S-wb)/(S-1),hi=(top*S-wt)/(S-1);oy=Math.min(hi,Math.max(lo,oy));}
        t.scale=S;
        const oxo=outer?(t.side==='left'?t.box.left:t.box.right):ox;
        t.zoomed.forEach(p=>p.style.transformOrigin=`${oxo-p.offsetLeft}px ${oy-p.offsetTop}px`);
      });
      lastState='';
    }
    const spacer=document.createElement('div');spacer.className='orbit-scroll-spacer';spacer.setAttribute('aria-hidden','true');
    canvas.after(spacer);

    // Stage bounds from the Figma geometry (heading top → lowest card).
    const top=heading.offsetTop,bottom=Math.max(...nodes.map(n=>n.offsetTop+n.offsetHeight));
    const center=(top+bottom)/2,height=bottom-top;
    stage.style.transformOrigin=`960px ${center}px`;

    let lastH=-1,shift=0,length=0,progress=0,lastState='',lastFit=-1,lastSpacer=-1,lastCurtain='';
    if(reduced){document.documentElement.classList.add('orbit-reduced');return {map:y=>({y,shift:0}),get shift(){return 0;}};}

    function apply(s){
      const key=JSON.stringify(s);
      if(key===lastState)return;lastState=key;
      ring.dataset.live=String(s.live);
      bodyActive.dataset.on=String(s.multi);
      tools.forEach((t,i)=>{
        const revealed=s.revealedSeq>=i||s.multi,isActive=s.active===i;
        const dim=revealed&&s.active!==-1&&!isActive;
        t.dot.style.setProperty('--dotscale',String(revealed?(s.multi?1.35:isActive?1.17:1):.2));
        t.dot.style.opacity=String(revealed?(dim?.35:1):0);
        t.dot.dataset.lifted=String(isActive);
        // Source: only the active tool's panel is shown; the together state shows all of them,
        // staggered like the source's morphIndex*55ms.
        const show=isActive||s.multi;
        t.panels.forEach(p=>{p.dataset.show=String(show);p.style.transitionDelay=s.multi?`${i*55}ms`:'0ms';p.style.setProperty('--panel-scale',String(t.zoomed.includes(p)?isActive?t.scale:s.multi?Math.min(1.12,t.scale):1:1));});
      });
    }

    // y: design-px scroll position after earlier pinned scenes. Returns y with this scene's hold removed.
    function map(y,h,scale){
      const fit=Math.min(1,h*.94/height);
      if(fit!==lastFit||h!==lastH){lastFit=fit;lastH=h;stage.style.scale=String(fit);placeZoom(fit,h);
        const headingTop=center-(center-top)*fit;lift=Math.max(0,headingTop-prevBottom-HEADING_GAP);}
      const k=innerWidth<=600?MOBILE:1,toolLen=h*k*(LEAD_VH+SLOT_VH*mKe),multiLen=h*k*MULTI_VH;
      length=toolLen+multiLen;
      const pinStart=center-lift-h/2;
      shift=Math.max(0,Math.min(length,y-pinStart));
      const after=Math.max(0,y-pinStart-length),trail=lift?Math.min(1,after/(2*lift)):1;
      const stageLift=Math.round(-lift*(1-trail)*10)/10;
      if(stageLift!==lastLift){lastLift=stageLift;stage.style.translate=`0 ${stageLift}px`;}
      const p=shift<toolLen?shift/toolLen*jxe:jxe+(shift-toolLen)/multiLen*(1-jxe);progress=shift/length;
      canvas.style.transform=shift?`translateY(${shift}px)`:'';
      const spacerPx=Math.round(length*scale);
      if(spacerPx!==lastSpacer){lastSpacer=spacerPx;spacer.style.height=`${spacerPx}px`;window.DopafitScroll?.lenis?.resize();}
      // Like the sticky h-screen stage, nothing else shows while held (matters on tall phones).
      const cover=shift>0&&shift<length?Math.min(clamp(p/.04),clamp((1-p)/.04)):0;
      const curtainKey=`${pinStart.toFixed(1)}:${h.toFixed(1)}:${cover.toFixed(3)}`;
      if(curtainKey!==lastCurtain){lastCurtain=curtainKey;curtain.style.top=`${pinStart}px`;curtain.style.height=`${h}px`;curtain.style.opacity=String(cover);}
      apply(SH(p));
      return {y:y-shift,shift,progress:p};
    }
    return {map,get shift(){return shift;},get progress(){return progress;}};
  }
  window.DopafitOrbitScene={mount,SH};
})();
