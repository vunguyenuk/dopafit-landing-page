/* Extracted from the user's local Skydive capture. Do not replace these source blocks
with newly invented animation. Only the DOM/native-sticky adapter is project-specific.
The original circular headline entrance is omitted as requested; the original messy
reference layout, floating, outward scatter, easing and character lighting are reused. */
(() => {
'use strict';
const uus=90;function PM(t,e){return Math.min(t,e)<560||t<640}function _Et(t,e){return t<1280||PM(t,e)?14:16}const dus=1.045,fus=.83;function pus(t){return t>=1280?64:t>=600?24:16}function wEt(t,e){return Math.max(44,Math.min(e?66:82,t*.27))}function hus(t){const e=pus(t),n=s=>(t/2-e-wEt(s,!0)*fus/2)/dus;return n(n(t/2))}function kxe(t,e){const n=PM(t,e),s=Math.max(e/2-uus-30,150);return Math.min(n?hus(t):Math.min(t,e)*.345,s)}function zGe(t,e){return wEt(kxe(t,e),PM(t,e))}function mus({index:t,count:e,seconds:n,radius:s}){const r=n*.085,i=1+.035*Math.sin(n*1.35),a=.01*Math.sin(n*.45);return{angle:t/e*Math.PI*2-Math.PI/2+r,radius:s*(i+a)}}const gus=[{nx:.0717,ny:.1257,ns:.1426,opacity:1},{nx:.8211,ny:.167,ns:.1296,opacity:.95},{nx:.6424,ny:.2278,ns:.0942,opacity:.8},{nx:.3283,ny:.2346,ns:.0824,opacity:.8},{nx:.484,ny:.2828,ns:.0589,opacity:.4},{nx:.9347,ny:.4411,ns:.1296,opacity:1},{nx:.1235,ny:.4997,ns:.1154,opacity:.8},{nx:.2215,ny:.7133,ns:.0933,opacity:.8},{nx:.7097,ny:.6811,ns:.0942,opacity:.8},{nx:.434,ny:.725,ns:.0589,opacity:.4},{nx:.8343,ny:.7614,ns:.1296,opacity:.95},{nx:.5672,ny:.7779,ns:.0824,opacity:.6},{nx:.3503,ny:.827,ns:.0896,opacity:.6},{nx:.0503,ny:.8981,ns:.1296,opacity:1},{nx:.6815,ny:.9414,ns:.1296,opacity:1},{nx:.3017,ny:.6741,ns:.0589,opacity:.4}],xus=56,bus=[{nx:.1103,ny:.1256,ns:.0829,opacity:1},{nx:.85,ny:.1552,ns:.0758,opacity:.95},{nx:.6423,ny:.2186,ns:.0557,opacity:.8},{nx:.3282,ny:.2352,ns:.0486,opacity:.8},{nx:1.02,ny:.4194,ns:.0758,opacity:1},{nx:-.02,ny:.5006,ns:.0675,opacity:.8},{nx:.2205,ny:.7239,ns:.0545,opacity:.8},{nx:.9372,ny:.7506,ns:.0841,opacity:.95},{nx:.35,ny:.8299,ns:.0533,opacity:.6},{nx:.641,ny:.817,ns:.0509,opacity:.6},{nx:.0654,ny:.8749,ns:.0818,opacity:1},{nx:.8051,ny:.9188,ns:.0794,opacity:1},{nx:.4833,ny:.2938,ns:.0355,opacity:.3},{nx:.8731,ny:.282,ns:.0427,opacity:.4},{nx:.6038,ny:.7103,ns:.0344,opacity:.4},{nx:.4372,ny:.731,ns:.0355,opacity:.4}];function yus(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function vus({width:t,height:e,count:n}){const s=PM(t,e),r=s?bus:gus,i=s?e:Math.min(e,t/1.6),a=s?xus:100;return Array.from({length:n},(l,c)=>{const u=r[c%r.length];if(!u)throw new Error("REF_LAYOUT is empty");const d=yus(c+100),f=Math.round(u.ns*i);return{x:u.nx*t,y:Math.max(a+f/2,u.ny*e),size:f,opacity:u.opacity,start:.03+.3*d,bob:d*Math.PI*2}})}function T2(t){return Math.min(1,Math.max(0,t))}function $I(t){return t*t*(3-2*t)}function _us(t){return t*t*t*(t*(t*6-15)+10)}function wus(t){return 1+(1.1+1)*Math.pow(t-1,3)+1.1*Math.pow(t-1,2)}
const Eoe={wide:{meltEnd:.4,enterAt:.26,enterSpan:.12,writeAt:.26,writeSpan:.26,exitAt:.56,exitSpan:.1},narrow:{meltEnd:.28,enterAt:.26,enterSpan:.08,writeAt:.29,writeSpan:.26,exitAt:.57,exitSpan:.09}},Aus=.72,qGe={x:190,y:175},Ius=44,Tus=950,Rus=1650,$us=300,Ous=1150,Pus=620,HGe="cubic-bezier(0.22, 1, 0.36, 1)",VGe=640,Mus=.2,Lus=88;

/* Card motion modelled on the user's Framer "CMS Spatial Gallery" capture (cmsspatialgallery-framer-website-…,
   shared-lib: layout "Field", its default settings): the frames sit on a 3D sphere shell (golden-angle points) that
   keeps spinning (5°/s, plus a little spin with scroll like its "Scroll Spin"), projected with its lens 2.2
   perspective; back frames fade (fog .45) and sit behind; each frame turns a little with its side of the sphere
   (card turn 12°); a 6px float; frames arrive in a spiral from the centre on load (Spiral entrance, 1.6s, wave 1.1s).
   Dopafit additions (user 2026-11-18): before the text there is no room needed, so the sphere stays small and bunched;
   as the text comes in, the sphere grows and every frame whose projected spot would fall on the text box (grown by
   its own half size + 20px) is pushed out to the edge of that box, so the text is never covered; on exit the frames
   fly outward and fade as before. Sizes/radii for this hero are estimates. */
function sourceCardFrame({width:qe,height:We,index:bt,count:m,seconds:Ze,phase:lt,visibility:Ve,target:Ct,text}){
const Xe=qe/2,Qe=We/2,narrow=PM(qe,We),ht=narrow?Eoe.narrow:Eoe.wide;
// golden-angle point on the unit sphere
const gy=1-2*(bt+.5)/m,gr=Math.sqrt(1-gy*gy),gp=bt*2.39996323;let fx=Math.cos(gp)*gr,fy=gy,fz=Math.sin(gp)*gr;
// spin about the vertical axis (time + scroll), with a fixed forward tilt
const spin=Ze*5*Math.PI/180+lt*2.2,cs=Math.cos(spin),sn=Math.sin(spin);[fx,fz]=[fx*cs+fz*sn,-fx*sn+fz*cs];
const tl=-.22,ct=Math.cos(tl),stl=Math.sin(tl);[fy,fz]=[fy*ct-fz*stl,fy*stl+fz*ct];
// sphere radius: bunched before the text, opened once the text needs the room
const open=$I(T2((lt-.18)/(ht.enterAt-.18))),exit=_us(T2((lt-.42)/.3));
const minS=Math.min(qe,We),R0=minS*(narrow?.2:.17),R1=text?Math.max(text.w*.5,text.h*.75)+(narrow?40:70):minS*.38;
const R=R0+(R1-R0)*open;
// spiral arrival on load
const arr=1-Math.pow(1-T2((Ze-bt/m*1.1)/1.6),4.2);
const cam=R*2.2,k=cam/Math.max(cam-fz*R,cam*.3);
// keep the opened sphere on screen: an oval no wider/taller than the viewport allows (header ~90px on top)
const Rx=Math.min(R,qe/2-34),Ry=Math.min(R,We/2-(narrow?96:110));
let sx=fx*Rx*k*arr,sy=fy*Ry*k*arr;
if(arr<1){const sa=(1-arr)*Math.PI*1.2,c2=Math.cos(sa),s2=Math.sin(sa);[sx,sy]=[sx*c2-sy*s2,sx*s2+sy*c2];}
const base=(narrow?58:92)*(.88+.24*((bt*37%11)/10)),size=base*k*(1+exit*1.2);
// keep clear of the text
if(text&&open>0){const hw=size*.83/2,hh=size/2,a=text.w/2+hw+20,bb=text.h/2+hh+20+(sy>0?36:0);
  const q=Math.max(Math.abs(sx)/a,Math.abs(sy)/bb);
  if(q<1){let dx=sx,dy=sy;if(Math.abs(dx)<1&&Math.abs(dy)<1)dy=fy<0?-1:1;
    const f=Math.min(Math.abs(dx)>.5?a/Math.abs(dx):Infinity,Math.abs(dy)>.5?bb/Math.abs(dy):Infinity);
    sx+=(dx*f-sx)*open;sy+=(dy*f-sy)*open;}}
const fly=1+2.6*exit*exit,drift=Math.sin(Ze*.6+Ct.bob)*6*(1-exit);
const depth=(fz+1)/2,fog=.55+.45*depth;
return {x:Xe+sx*fly,y:Qe+sy*fly+drift,size:Math.max(18,size),opacity:fog*arr,z:Math.round(fz*100),
  turnY:-fx*12*(1-exit),turnX:fy*7*(1-exit)};
}
function sourceTextReveal(lt,ht,z,state){let J=state.last;
const tt=Math.round(T2((lt-ht.writeAt)/ht.writeSpan)*z.length);tt!==J&&(J=tt,z.forEach((bt,pt)=>{bt.dataset.on=pt<tt?"true":"false"}));state.last=J;
}

function mount({cards,copy,header,reduced}){
  const main=document.getElementById('landing'),scene=document.createElement('section'),viewport=document.createElement('div'),headerCanvas=document.createElement('div');
  scene.id='skydive-hero-scene';scene.setAttribute('aria-label','Dopafit — những khó khăn khi tự tập gym');viewport.className='skydive-hero-viewport';headerCanvas.className='skydive-header-canvas';
  main.before(scene);scene.append(viewport);viewport.append(cards,copy,headerCanvas);headerCanvas.append(header);cards.classList.add('skydive-source-cards');copy.classList.add('skydive-source-copy');
  document.documentElement.classList.add('skydive-source-mounted');
  const P=[...cards.children],state={last:-1};let textBox=null;
  P.forEach(el=>{el.classList.add('skydive-source-card');el.style.cssText='';const img=el.querySelector('img');img.loading='lazy';img.decoding='async';});
  // These real photos belong to the next scene, after the 240svh intro. Warm
  // them before entry without competing with the visible phone's startup.
  const photosNear=new IntersectionObserver(entries=>{
    if(!entries.some(entry=>entry.isIntersecting))return;
    photosNear.disconnect();
    P.forEach(el=>{const img=el.querySelector('img');img.loading='eager';if(img.dataset.src){img.src=img.dataset.src;delete img.dataset.src;}});
  },{rootMargin:'800px'});
  photosNear.observe(scene);
  const text=copy.textContent.trim();copy.setAttribute('aria-label',text);copy.textContent='';
  const painLines=JSON.parse(copy.dataset.lines||'[]');
  copy.classList.add('pain-copy');copy.classList.toggle('pain-static',reduced);
  const graphemes=typeof Intl.Segmenter==='function'?new Intl.Segmenter('vi',{granularity:'grapheme'}):null;
  painLines.forEach(line=>{
    const row=document.createElement('span'),label=document.createElement('span'),readable=document.createElement('span'),visual=document.createElement('span');row.className='pain-line';
    readable.className='pain-readable';readable.textContent=line;visual.className='pain-sentence';visual.setAttribute('aria-hidden','true');
    // Keep words intact when wrapping Vietnamese; animate complete graphemes,
    // never split a tone mark from its letter. The original sentence stays accessible.
    line.split(/(\s+)/).forEach(word=>{
      if(!word.trim()){visual.append(document.createTextNode(word));return;}
      const group=document.createElement('span');group.className='pain-word';
      const chars=graphemes?[...graphemes.segment(word)].map(x=>x.segment):Array.from(word.normalize('NFC'));
      chars.forEach(char=>{const glyph=document.createElement('span');glyph.className='pain-glyph';glyph.textContent=char;glyph.dataset.glyph=char;group.append(glyph);});visual.append(group);
    });
    label.append(readable,visual);row.append(label);copy.append(row);
  });
  const z=[...copy.querySelectorAll('.pain-line>span')],glyphs=z.map(line=>[...line.querySelectorAll('.pain-glyph')]),glyphFrames=new WeakMap(),glyphWidths=new WeakMap();
  // User 2026-11-23: more time to read each sentence. Stretch only the existing
  // reading interval; photo entrance, complete source exit and handoff keep their travel.
  // Same captured Bayer ramp as the heading below; higher contrast on this smaller type.
  // Only the highlight texture changes; the accepted sentence clock stays.
  const pixelRamp=window.DopafitChandePixelRamp?.(32,'#b8f24a');
  const finalRamp=window.DopafitChandePixelRamp?.(32,'#ffffff');
  if(pixelRamp&&finalRamp&&!reduced){
    copy.style.setProperty('--pain-pixel-ramp',pixelRamp);
    copy.style.setProperty('--pain-final-ramp',finalRamp);
  }
  const extraReadVH=reduced?0:z.length*.8;
  if(extraReadVH)scene.style.height=`${300+extraReadVH*100}svh`;
  let raf=0,start=null,Q=[],lastWidth=0,lastHeight=0;
  // Keep Xus's complete 300vh stage / 100vh sticky travel, plus the requested read-only extension.
  // The requested excerpt starts after Dus's headline fade-out (.18),
  // rather than its circular headline entrance. Its original exit finishes before the sticky scene releases.
  function draw(now){
    if(document.hidden){raf=requestAnimationFrame(draw);return;}
    start??=now;
    const width=viewport.clientWidth,height=viewport.clientHeight,ht=PM(width,height)?Eoe.narrow:Eoe.wide;
    if(lastWidth!==width||lastHeight!==height||!textBox){
      Q=vus({width,height,count:P.length});lastWidth=width;lastHeight=height;
      glyphs.flat().forEach(glyph=>glyphWidths.set(glyph,glyph.offsetWidth));
      // Retain the accepted four-row photo exclusion envelope even though only
      // one sentence is now displayed. The surrounding photo layout is unchanged.
      const oldRow=parseFloat(getComputedStyle(copy).fontSize)*(width<=600?3.1:1.9);
      textBox={w:copy.offsetWidth,h:z.reduce((sum,line)=>sum+Math.max(oldRow,line.offsetHeight),0)};
    }
    const travel=scene.offsetHeight-height,baseTravel=travel-extraReadVH*height;
    const rawScroll=-scene.getBoundingClientRect().top;
    const readStart=ht.enterAt+ht.enterSpan*.75,readEnd=ht.exitAt-.02;
    const startScroll=baseTravel*.75*(readStart-.18)/(ht.exitAt+ht.exitSpan-.18);
    const endScroll=baseTravel*.75*(readEnd-.18)/(ht.exitAt+ht.exitSpan-.18);
    const extraScroll=extraReadVH*height;
    const sourceScroll=rawScroll<=startScroll?rawScroll:rawScroll<endScroll+extraScroll?
      startScroll+(rawScroll-startScroll)*(endScroll-startScroll)/(endScroll-startScroll+extraScroll):rawScroll-extraScroll;
    const sceneProgress=baseTravel>0?T2(sourceScroll/baseTravel):1;
    if(!heroOnScreen&&sceneProgress>=1&&lastHandoff===1&&scene.dataset.complete==='true'){raf=0;return;}
    if(!heroOnScreen&&sceneProgress<=0&&lastHandoff===0&&scene.dataset.phase==='scatter'){raf=0;return;}
    // .18 is the source headline's fade-out boundary. Start this excerpt there.
    const excerptStart=.18;
    // End at the original fade completion; no empty scroll tail.
    const excerptEnd=ht.exitAt+ht.exitSpan;
    // Reserve the final quarter of the sticky travel for the gentle handoff.
    const heroProgress=T2(sceneProgress/.75);
    const handoff=$I(T2((sceneProgress-.75)/.15));
    const lt=reduced?ht.exitAt:excerptStart+heroProgress*(excerptEnd-excerptStart);
    const st=$I(T2((lt-ht.enterAt)/ht.enterSpan)),ut=$I(T2((lt-ht.exitAt)/ht.exitSpan)),Ve=st*(1-ut);
    const cardPhase=lt;
    viewport.style.setProperty('--hero-cover',String(reduced?1:1-ut));
    headerCanvas.style.opacity=String(reduced?1:1-ut);
    // Section 2 enters from the lower viewport after the source exit completes.
    // A short 48px source-eased lift supplements ordinary 1:1 document scrolling.
    // Mobile perf: write the handoff only when it changes; once complete, release the
    // full-page compositor layer instead of keeping a 10k-px tall layer alive.
    const handoffKey=reduced?1:Math.round(handoff*1000)/1000;
    if(handoffKey!==lastHandoff){
      lastHandoff=handoffKey;
      if(handoffKey>=1){main.style.opacity='';main.style.translate='';main.classList.add('hero-handoff-done');}
      else{main.classList.remove('hero-handoff-done');main.style.opacity=String(handoffKey);main.style.translate=`0 ${(1-handoffKey)*48}px`;}
    }
    scene.dataset.handoff=String(reduced?1:handoff);
    P.forEach((el,index)=>{
      const f=sourceCardFrame({width,height,index,count:P.length,seconds:reduced?0:(now-start)/1000,phase:cardPhase,visibility:Ve,target:Q[index],text:textBox});
      el.style.setProperty('--s',`${f.size}px`);
      // Preserve source position/depth, while keeping pain-point photographs upright as required.
      el.style.transform=`translate(${f.x}px, ${f.y}px) translate(-50%, -50%) scale(var(--hs, 1))`;el.style.zIndex=String(1000+f.z);
      el.style.opacity=String(reduced?.75:f.opacity*(1-ut));
    });
    copy.style.opacity=String(reduced?1:Ve);
    // The supplied clip replaces one centred phrase with the next. Keep the
    // captured Skydive reading interval, but remove the simultaneous four-row view.
    const writeStart=ht.enterAt+ht.enterSpan*.75,writeEnd=ht.exitAt-.02;
    const readProgress=T2((lt-writeStart)/Math.max(.01,writeEnd-writeStart));
    const sequence=readProgress*(z.length-1+.58);
    copy.style.transform=`translate(-50%, -50%) translateY(${reduced?0:(1-st)*34-ut*44}px)`;
    const waveKey=reduced?'reduced':lt.toFixed(5);
    if(state.waveKey!==waveKey){
      state.waveKey=waveKey;
      glyphs.forEach((letters,i)=>{
        const local=sequence-i;let visible=reduced;
        letters.forEach((glyph,j)=>{
          const at=letters.length>1?j/(letters.length-1):0;
          const entry=reduced?1:$I(T2((local-at*.22)/.18));
          const leaving=reduced?0:$I(T2((local-.72-at*.24)/.20));
          const alpha=entry*(1-leaving),light=4*entry*(1-entry)*(1-leaving);
          if(alpha>.001)visible=true;
          // Captured Chande build/paint: white→accent and accent→base ramps
          // move together, rather than stamping one fixed Bayer density on every letter.
          const band=width<=600?48:64,dpr=devicePixelRatio||1;
          const sweep=Math.round((-2*band+entry*((glyphWidths.get(glyph)||0)+2*band))*dpr)/dpr;
          const rgb=[255-71*light,255-13*light,255-181*light].map(Math.round);
          const style=`--pixel-x:${sweep}px;--pixel-light:${Math.min(1,light*2).toFixed(3)};opacity:${Math.max(alpha,light).toFixed(3)};color:rgb(${rgb.join(',')});transform:scale(${(1+.14*light).toFixed(3)});text-shadow:none`;
          if(glyphFrames.get(glyph)!==style){glyph.style.cssText=style;glyphFrames.set(glyph,style);}
        });
        const line=z[i];line.parentElement.dataset.visible=String(visible);
        line.parentElement.dataset.active=String(reduced||Math.min(z.length-1,Math.floor(sequence))===i);
      });
      scene.dataset.sentence=String(Math.min(z.length-1,Math.floor(sequence)));
    }
    scene.dataset.phase=lt<ht.enterAt?'scatter':lt<ht.enterAt+ht.enterSpan?'reveal':lt<ht.exitAt?'read':lt<ht.exitAt+ht.exitSpan?'exit':'complete';
    scene.dataset.complete=String(reduced||sceneProgress>=1);
    // Pause the floating loop while the hero is scrolled away; the final frame above
    // has already written the completed exit state.
    raf=heroOnScreen?requestAnimationFrame(draw):0;
  }
  let heroOnScreen=true,lastHandoff=-1;
  new IntersectionObserver(([entry])=>{
    heroOnScreen=entry.isIntersecting;
    // Even a jump past the scene must commit its final handoff once.
    if(!raf)raf=requestAnimationFrame(draw);
  },{rootMargin:'25% 0px'}).observe(scene);
  const remeasureText=()=>{textBox=null;state.waveKey='';if(!raf)raf=requestAnimationFrame(draw);};
  document.fonts.ready.then(remeasureText);
  addEventListener('dopafit:typography',remeasureText);
  addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(draw);},{passive:true});
  raf=requestAnimationFrame(draw);
  return {scene,viewport,destroy(){cancelAnimationFrame(raf);}};
}
window.DopafitSkydiveHero={mount};
})();
