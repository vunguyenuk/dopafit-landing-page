/* Section 3 adapts the captured Dropset action lists to Dopafit's Figma nodes.
   Live screen playback uses the actual Device Hub videos in device-hub-recordings.json. */
(() => {
  // One highlight per feature; user-requested shorter scroll presentation.
  const featureStepCounts=[1,1,1,1,1];
  function sourceValue(id,type,position){
    const groups=window.DopafitDropsetActions[id].continuousParameterGroups[0].continuousActionGroups;
    const keys=groups.flatMap(group=>group.actionItems
      .filter(item=>item.actionTypeId===type)
      .map(item=>[group.keyframe,item.config.value??item.config.yValue]));
    let before=keys[0],after=keys.at(-1);
    for(const key of keys){
      if(key[0]<=position)before=key;
      if(key[0]>=position){after=key;break;}
    }
    const amount=Math.max(0,Math.min(1,(position-before[0])/Math.max(1,after[0]-before[0])));
    return before[1]+(after[1]-before[1])*amount;
  }
  function mount({canvas,heading,phone,screen,copy,rows,reduced,requestRender}){
    const main=document.getElementById('landing');
    const labels=rows.map(row=>row.querySelector('p'));
    const rowTops=[];
    const frames=featureStepCounts.flatMap((count,feature)=>Array.from({length:count},()=>({feature})));
    const firstFrames=featureStepCounts.map((_,i)=>featureStepCounts.slice(0,i).reduce((sum,count)=>sum+count,0));
    const recording=reduced?null:window.DopafitRecording.mount(requestRender);
    window.DopafitAppRecording=recording;
    if(recording){
      const touch=document.createElement('span');
      touch.className='recording-touch';
      touch.setAttribute('aria-hidden','true');
      screen.append(touch);
      touch.style.width=`${screen.offsetHeight*.028}px`;
      window.addEventListener('dopafit:recording-touch',({detail:{point,strength,radius}})=>{
        touch.style.left=`${point[0]*100}%`;
        touch.style.top=`${point[1]*100}%`;
        touch.style.opacity=String(strength);
        touch.style.scale=String(radius/.014);
      });
      let displayedVideo;
      window.addEventListener('dopafit:recording-frame',({detail:{video,previousVideo,blend=1}})=>{
        video.style.opacity=String(blend);
        if(previousVideo&&previousVideo!==video)previousVideo.style.opacity=String(1-blend);
        if(displayedVideo===video){if(blend>=1&&previousVideo&&previousVideo!==video)previousVideo.remove();return;}
        if(displayedVideo&&displayedVideo!==previousVideo)displayedVideo.remove();
        displayedVideo=video;
        video.classList.add('recording-fallback-video');
        screen.append(video);
        screen.classList.add('recording-ready');
      });
      screen.addEventListener('pointerup',event=>{
        const box=screen.getBoundingClientRect();
        recording.tap({x:(event.clientX-box.left)/box.width,y:(event.clientY-box.top)/box.height});
      });
      screen.addEventListener('keydown',event=>{
        if(event.key==='Enter'||event.key===' '){
          event.preventDefault();
          recording.tap();
        }
      });
      window.addEventListener('dopafit:recording-control',({detail})=>{
        screen.tabIndex=detail.waiting?0:-1;
        screen.setAttribute('role',detail.waiting?'button':'img');
        screen.setAttribute('aria-label',detail.label||'Màn hình Dopafit quay từ Device Hub');
      });
    }
    let shift=0,sceneStart=0,stepSpan=1,documentBase=0,scale=1,lastActive=-1,lastFrame=-1;
    const viewport=document.createElement('div'),fixedFrame=document.createElement('div');
    viewport.className='tracking-fixed-viewport';
    fixedFrame.className='tracking-fixed-frame';
    viewport.append(fixedFrame);
    const slots=[heading,phone,screen,copy].map(node=>{
      const anchor=document.createComment('Tracking scene slot');
      node.before(anchor);
      return {node,anchor};
    });
    let pinned=false,lastMask='';
    if(!reduced)document.body.append(viewport);
    copy.classList.add('tracking-copy');
    const initialCopy=copy.getBoundingClientRect(),initialScale=initialCopy.width/1920;
    labels.forEach((label,i)=>{rowTops[i]=(label.getBoundingClientRect().top-initialCopy.top)/initialScale;});
    const rules=labels.map(label=>{
      label.classList.add('tracking-label');
      const rule=document.createElement('span');rule.className='_3-pointer-line tracking-rule';rule.setAttribute('aria-hidden','true');label.append(rule);return rule;
    });
    // The dev .focus border/shadow is clipped to the projected native screen.
    const focusClip=document.createElement('div'),focusBox=document.createElement('div');
    focusClip.className='tracking-focus-clip';focusBox.className='tracking-ui-focus';
    focusClip.setAttribute('aria-hidden','true');focusClip.append(focusBox);viewport.append(focusClip);
    function showFocus(focus){
      if(!focus){focusClip.style.opacity='0';focusBox.dataset.target='';return;}
      const [x0,y0,x1,y1]=focus.bounds;
      const corners=[[x0,y0],[x1,y0],[x1,y1],[x0,y1]].map(project);
      const edges=[[.5,.01],[.99,.5],[.5,.99],[.01,.5]].map(project);
      if(corners.some(p=>!p)||edges.some(p=>!p))return;
      const left=Math.min(...corners.map(p=>p.x)),top=Math.min(...corners.map(p=>p.y));
      const right=Math.max(...corners.map(p=>p.x)),bottom=Math.max(...corners.map(p=>p.y));
      const clipLeft=edges[3].x,clipTop=edges[0].y,clipRight=edges[1].x,clipBottom=edges[2].y;
      const width=clipRight-clipLeft;
      focusClip.style.clipPath=`inset(${clipTop}px ${viewport.clientWidth-clipRight}px ${viewport.clientHeight-clipBottom}px ${clipLeft}px round ${width*.138}px)`;
      const pad=7*width/310+1;
      // Keep all four border edges inside the native screen clip, including the
      // source padding, so a wide component cannot lose its right-hand stroke.
      const frameLeft=Math.max(left,clipLeft+pad),frameTop=Math.max(top,clipTop+pad);
      const frameRight=Math.min(right,clipRight-pad),frameBottom=Math.min(bottom,clipBottom-pad);
      focusBox.style.setProperty('--focus-scale',String(width/310));
      focusBox.style.setProperty('--fx',`${frameLeft}px`);focusBox.style.setProperty('--fy',`${frameTop}px`);
      focusBox.style.setProperty('--fw',`${Math.max(0,frameRight-frameLeft)}px`);focusBox.style.setProperty('--fh',`${Math.max(0,frameBottom-frameTop)}px`);
      focusBox.dataset.target=focus.name;
    }
    // One complete source rule per caption, never a joined SVG extension.
    let labelTop=0,headingLift=0,entryLift=0,layoutKey='';
    let lastFocus,lastLayout,sortActive=-1,sortSlot=-1,sortingUntil=0,sortTimer=0;
    let focusUntil=0,focusTimer=0,presentedFocus;
    let displayOrder=featureStepCounts.map((_,i)=>i);
    let slotLayout,matchedSlot=2;
    let connectorAnimation,connectorFocus;
    function hideConnection(){
      connectorAnimation?.cancel();connectorAnimation=undefined;connectorFocus=undefined;
      focusClip.style.transition='none';focusClip.style.opacity='0';
      rules.forEach(rule=>delete rule.dataset.drawPhase);
    }
    function project(point){
      const target=window.DopafitPhoneScreen?.project(point);
      if(target)return target;
      if(document.getElementById('phone-webgl'))return null;
      const box=screen.getBoundingClientRect();
      return {x:box.left+point[0]*box.width,y:box.top+point[1]*box.height};
    }
    function connect(){
      const focus=pinned?recording?.focus:undefined;
      // The docked phone and caption geometry are stable. Only measure on an
      // annotation/viewport change, never again for every decoded video frame.
      if(focus===lastFocus&&layoutKey===lastLayout)return;
      function reset(reason){
        if(reason!=='inactive')hideConnection();
        rules.forEach(rule=>{
          rule.style.width='748px';rule.dataset.target='';rule.dataset.endpoint='';
          rule.dataset.reason=reason;
        });
        lastFocus=focus;lastLayout=layoutKey;
      }
      if(!focus){
        presentedFocus=undefined;focusUntil=0;clearTimeout(focusTimer);
        showFocus(null);reset(pinned?'navigation':'outside-scene');return;
      }
      if(focus!==presentedFocus){
        presentedFocus=focus;focusUntil=performance.now()+240;
        clearTimeout(focusTimer);
        focusTimer=setTimeout(()=>{lastLayout=undefined;requestRender();},260);
      }
      showFocus(focus);
      if(performance.now()<sortingUntil){reset('sorting');return;}
      if(performance.now()<focusUntil){reset('focus-transition');return;}
      const rule=rules[focus.feature],box=rule.getBoundingClientRect();
      const y=box.top+box.height/2;
      // End at the actual painted focus outline, not a point inside its UI.
      // Read after the source .24s transition settles; the same edge is used at
      // every viewport scale. Rounded corners are intersected horizontally.
      const outline=focusBox.getBoundingClientRect(),style=getComputedStyle(focusBox);
      if(y<outline.top||y>outline.bottom){reset('unmatched-height');return;}
      const topRadius=Math.min(parseFloat(style.borderTopLeftRadius)||0,outline.width/2,outline.height/2);
      const bottomRadius=Math.min(parseFloat(style.borderBottomLeftRadius)||0,outline.width/2,outline.height/2);
      let edgeX=outline.left;
      if(topRadius&&y<outline.top+topRadius){
        const dy=y-(outline.top+topRadius);
        edgeX+=topRadius-Math.sqrt(Math.max(0,topRadius*topRadius-dy*dy));
      }else if(bottomRadius&&y>outline.bottom-bottomRadius){
        const dy=y-(outline.bottom-bottomRadius);
        edgeX+=bottomRadius-Math.sqrt(Math.max(0,bottomRadius*bottomRadius-dy*dy));
      }
      if(edgeX<=box.left){reset('unmatched-height');return;}
      reset('inactive');
      // Round down to the browser's layout precision so the rule cannot enter
      // the frame due to fractional CSS zoom rounding.
      const width=Math.floor((edgeX-box.left)/scale*64)/64;
      rule.style.width=`${width}px`;
      rule.dataset.target=focus.name;rule.dataset.endpoint=JSON.stringify({x:edgeX,y});
      rule.dataset.reason='aligned';
      // User-requested order: draw the one horizontal rule, then illuminate
      // the supplied dev .focus border/shadow when the stroke reaches its edge.
      if(connectorFocus!==focus){
        hideConnection();connectorFocus=focus;rule.dataset.drawPhase='drawing';
        const animation=rule.animate([
          {clipPath:'inset(-32px 100% -32px 0)'},
          {clipPath:'inset(-32px 0% -32px 0)'}
        ],{duration:360,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'});
        connectorAnimation=animation;
        animation.finished.then(()=>{
          if(connectorAnimation!==animation||recording?.focus!==focus||!pinned||rule.dataset.reason!=='aligned')return;
          rule.dataset.drawPhase='complete';
          focusClip.style.transition='opacity .18s ease';focusClip.style.opacity='1';
        }).catch(()=>{});
      }
    }
    function clearConnection(){
      hideConnection();
      // Texture notifications arrive before the next layout RAF. Clear the old
      // connector now so it cannot point at a newly presented native screen.
      rules.forEach(rule=>{
        rule.style.width='748px';rule.dataset.target='';rule.dataset.endpoint='';
        rule.dataset.reason='pending-frame';
      });
      showFocus(null);lastLayout=undefined;
    }
    // Entry/resize can finish after the nominal .24s timer. Recheck the actual
    // settled rectangles, so a cached white divider cannot remain unmatched.
    const geometrySettled=()=>{lastLayout=undefined;slotLayout=undefined;requestRender();};
    focusBox.addEventListener('transitionend',geometrySettled);
    labels.forEach(label=>label.addEventListener('transitionend',geometrySettled));
    window.addEventListener('dopafit:recording-frame',()=>{
      if(recording?.focus!==lastFocus)clearConnection();
    });
    recording?.videos.forEach(video=>video.addEventListener('seeking',clearConnection));
    window.addEventListener('dopafit:scroll',connect);
    function endOfDock(h,liftEnd){
      const turnStart=Math.max(liftEnd,heading.offsetTop-h*1.38);
      return Math.max(turnStart+h*.28,screen.offsetTop-h*.23);
    }
    function mapScroll(physicalY,h,liftEnd,currentScale){
      scale=currentScale;
      sceneStart=endOfDock(h,liftEnd);
      stepSpan=h*.85;
      const length=frames.length*stepSpan;
      recording?.setVisible(physicalY>=sceneStart-h*1.4&&physicalY<=sceneStart+length+h*.2);
      shift=Math.max(0,Math.min(length,physicalY-sceneStart));
      documentBase=scrollY-physicalY*scale;
      canvas.style.translate=`0 ${shift}px`;
      const padding=`${length*scale}px`;
      if(main.style.paddingBottom!==padding){
        main.style.paddingBottom=padding;
        window.DopafitScroll?.lenis?.resize();
      }
      const shouldPin=physicalY>=sceneStart&&physicalY<=sceneStart+length;
      if(shouldPin!==pinned){
        pinned=shouldPin;
        slots.forEach(({node,anchor})=>pinned?fixedFrame.append(node):anchor.before(node));
        viewport.style.display=pinned?'block':'';
        window.dispatchEvent(new CustomEvent('dopafit:tracking-pin',{detail:{pinned}}));
      }
      fixedFrame.style.translate=`0 ${-sceneStart}px`;
      // Portrait phones see ~3.5x more of the 1920px canvas than desktop, so the next
      // section would sit frozen under the pinned scene. Fade it out below the scene.
      if(pinned){
        const sceneBottom=Math.max(screen.offsetTop+screen.offsetHeight,...labels.map(l=>l.offsetTop))-sceneStart;
        const cut=Math.round((sceneBottom+h*.06)*scale);
        const mask=cut<innerHeight-24?`linear-gradient(to bottom,transparent ${cut}px,#000 ${cut+Math.round(h*.05*scale)}px)`:'none';
        if(mask!==lastMask){lastMask=mask;viewport.style.setProperty('--tracking-mask',mask);}
      }
      return {y:physicalY-shift,travel:shift,length,sceneStart};
    }
    function render(travel,y,h){
      if(reduced)return;
      const position=Math.min(frames.length-.000001,travel/stepSpan);
      const index=Math.floor(position);
      const frame=frames[index];
      const featureStart=firstFrames[frame.feature];
      const featureLength=featureStepCounts[frame.feature];
      const recordingProgress=Math.max(0,Math.min(1,(travel/stepSpan-featureStart)/featureLength));
      recording?.update(frame.feature,recordingProgress);
      // Emphasis describes the native frame being shown, including a pending tap.
      const active=recording?.active??frame.feature;
      // Native video owns the current feature, not the scroll destination. Source
      // opacity values remain, but only the displayed feature is emphasized.
      const weights=featureStepCounts.map((_,i)=>i===active?1:0);
      headingLift=Math.max(0,Math.min(y,sceneStart)+h*.06-heading.offsetTop);
      heading.style.translate=`0 ${headingLift}px`;
      // Source Dropset pointer rows are 78px apart (309/387/465/543/621).
      // UI frames never change caption positions. Keep the source order and spacing.
      labelTop=heading.offsetTop+headingLift+heading.offsetHeight+128;
      const entry=100*Math.max(0,Math.min(1,(y+h-screen.offsetTop)/h));
      entryLift=sourceValue('a-55','TRANSFORM_MOVE',entry);
      const entryOpacity=sourceValue('a-55','STYLE_OPACITY',entry);
      // Keep the list slots fixed. Prefer the first row that crosses the actual
      // native component: high controls sort to the top, lower cards to a lower
      // existing row. Only reorder items; never move the heading/list container.
      let activeSlot=2;
      const focus=recording?.focus;
      const slotKey=[scale,sceneStart,labelTop,entryLift,active].join(':');
      if(pinned&&focus&&slotKey!==slotLayout){
        const top=project([focus.bounds[0],focus.bounds[1]]);
        const bottom=project([focus.bounds[2],focus.bounds[3]]);
        if(top&&bottom){
          const firstRuleY=fixedFrame.getBoundingClientRect().top+(labelTop+entryLift-18+.5)*scale;
          const match=featureStepCounts.findIndex((_,rank)=>{
            const y=firstRuleY+rank*78*scale;
            return y>=Math.min(top.y,bottom.y)&&y<=Math.max(top.y,bottom.y);
          });
          matchedSlot=match===-1?(Math.min(top.y,bottom.y)<firstRuleY?0:featureStepCounts.length-1):match;
          slotLayout=slotKey;
        }
      }
      if(pinned&&focus&&slotKey===slotLayout)activeSlot=matchedSlot;
      const order=featureStepCounts.map((_,i)=>i).filter(i=>i!==active);
      order.splice(activeSlot,0,active);
      if(pinned&&(active!==sortActive||activeSlot!==sortSlot)){
        sortActive=active;sortSlot=activeSlot;sortingUntil=performance.now()+240;
        clearTimeout(sortTimer);
        sortTimer=setTimeout(()=>{lastLayout=undefined;requestRender();},260);
      }
      if(pinned)displayOrder=order;
      labels.forEach((label,i)=>{
        const rank=displayOrder.indexOf(i);
        label.style.translate=`0 ${labelTop+rank*78-rowTops[i]+entryLift}px`;
        label.dataset.slot=String(rank);
        // Emphasize as soon as the matching native view starts appearing. Only
        // the connector waits for the .6s slot/focus geometry to settle.
        const emphasis=sourceValue('a-48','STYLE_OPACITY',40+weights[i]*8);
        label.style.opacity=String(emphasis*entryOpacity);
        label.setAttribute('aria-selected',String(i===active));
      });
      if(active!==lastActive){
        lastActive=active;
        copy.dataset.activeFeature=String(active);
        screen.querySelector('img').alt=labels[active].textContent.trim();
      }
      copy.dataset.frame=String(index);
      copy.dataset.sceneStart=String(sceneStart);
      copy.dataset.stepSpan=String(stepSpan);
      copy.dataset.order=displayOrder.join(',');
      copy.dataset.activeSlot=String(activeSlot);
      layoutKey=[pinned,scale,sceneStart,labelTop,entryLift,sortActive,sortSlot,performance.now()<sortingUntil].join(':');
      if(index!==lastFrame){
        lastFrame=index;
        screen.querySelector('img').alt=labels[active].textContent.trim();
      }
    }
    function jump(index){
      if(reduced)return false;
      recording?.select(index);
      const top=documentBase+(sceneStart+(firstFrames[index]+.35)*stepSpan)*scale;
      window.DopafitScroll.scrollTo(top);
      return true;
    }
    return {mapScroll,render,jump,get shift(){return shift;}};
  }
  window.DopafitTracking={mount,sourceValue};
})();
