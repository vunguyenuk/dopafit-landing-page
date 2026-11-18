/* Native UI holds + supplied dev setStep/focus pattern.
   Sources: _reference/focus-views.json and _reference/dev-interaction-pacing.json. */
(() => {
  function mount(requestRender){
    const views=window.DopafitJourney.focusViews;
    const videos=views.map(view=>{
      const video=document.createElement('video');
      video.src=view.src;video.muted=true;video.playsInline=true;video.preload='metadata';
      video.setAttribute('aria-hidden','true');video.disablePictureInPicture=true;
      return video;
    });
    const warmed=new Set();
    let active=0,requested=0,loading=-1,near=false,current,previous,blend=1,token=0,frame=0;
    let transition,flashFrame=0;
    function publish(){
      if(!current)return;
      window.dispatchEvent(new CustomEvent('dopafit:recording-frame',{
        detail:{video:current,previousVideo:previous||current,blend}
      }));
      requestRender();
    }
    function warm(index){
      if(warmed.has(index))return;
      warmed.add(index);videos[index].preload='auto';videos[index].load();
    }
    function setStep(index){
      // dev index.html setStep: unchanged state returns; then set the active screen.
      if(current===videos[index])return;
      previous=current;current=videos[index];active=index;
      transition?.cancel();if(frame)cancelAnimationFrame(frame);frame=0;
      if(!previous){blend=1;publish();return;}
      // Exact source .screen img opacity .5s ease, sampled by the browser's
      // animation engine and applied to the two native video textures.
      transition=new Animation(new KeyframeEffect(null,[{opacity:0},{opacity:1}],{
        duration:500,easing:'ease',fill:'both'
      }),document.timeline);
      blend=0;transition.play();
      const tick=()=>{
        blend=transition.effect.getComputedTiming().progress??0;
        if(transition.playState==='finished')blend=1;
        publish();
        if(blend<1)frame=requestAnimationFrame(tick);
        else{frame=0;previous=undefined;transition.cancel();transition=undefined;}
      };
      tick();
    }
    function choose(index){
      requested=index;
      if(loading===index&&videos[index].readyState<2)return;
      loading=index;const request=++token;
      const video=videos[index];
      if(video.readyState>=2){setStep(index);return;}
      warm(index);
      // Keep the last valid native screen while decoding the next, never clear it.
      video.addEventListener('loadeddata',()=>{
        if(request===token&&near){loading=-1;setStep(index);}
      },{once:true});
    }
    function update(feature){
      if(feature!==requested){choose(feature);return;}
      if(near&&!current)choose(feature);
    }
    function select(feature){choose(feature);}
    function setVisible(value){
      if(value&&!near){near=true;choose(requested);return;}
      near=value;
    }
    function tap(uv){
      // Focus-only presentation: no scroll locks, menus or hidden input gates.
      // Retain the accepted 650ms touch feedback without changing native UI pixels.
      if(!current||!uv||uv.x<0||uv.x>1||uv.y<0||uv.y>1)return false;
      if(flashFrame)cancelAnimationFrame(flashFrame);
      const start=performance.now();
      const tick=()=>{
        const phase=Math.min(1,(performance.now()-start)/650);
        window.dispatchEvent(new CustomEvent('dopafit:recording-touch',{
          detail:{point:[uv.x,uv.y],strength:Math.pow(1-phase,1.5),radius:.014+.012*phase}
        }));
        flashFrame=phase<1?requestAnimationFrame(tick):0;
      };
      tick();return true;
    }
    return {update,select,setVisible,tap,
      get active(){return active;},get focus(){return current?views[active]:undefined;},
      get videos(){return videos;},
      get state(){return {feature:active,requestedFeature:requested,playing:blend<1,
        phase:!current?'loading':blend<1?'transition':'hold',blend,mode:'focus-only'};}
    };
  }
  window.DopafitRecording={mount};
})();
