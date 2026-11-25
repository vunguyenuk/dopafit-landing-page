import * as THREE from '../vendor/three.module.js';
import {createPhoneScreen} from '../phone/screen-ui.js';

// Native UI: user's 2026-11-23 10.38.06 screenshot, cropped to its display.
// Only the exercise title, matching instructions and video/stills are replaced.
const width=768,height=1664,videoHeight=838;
export const exerciseTitle='Dumbbell hammer curl';
const instructions=[
  'Stand with your feet hip-width apart. Hold a dumbbell in each hand with your palms facing inward.',
  'Keep your elbows close to your sides and curl the weights toward your shoulders.',
  'Lower the weights slowly to the starting position. Keep your body steady throughout the movement.'
];
const loadImage=async src=>{const image=new Image();image.src=src;await image.decode();return image;};
function cover(ctx,image,x,y,w,h){
  const iw=image.videoWidth||image.naturalWidth,ih=image.videoHeight||image.naturalHeight;
  const scale=Math.max(w/iw,h/ih),sw=w/scale,sh=h/scale;
  ctx.drawImage(image,(iw-sw)/2,(ih-sh)/2,sw,sh,x,y,w,h);
}
export async function loadExerciseArtwork(){
  const [source,...stills]=await Promise.all(['assets/intro/exercise-screen.webp',...Array.from({length:3},(_,i)=>`assets/intro/exercise-thumb-${i}.jpg?v=hammer-1`)].map(loadImage));
  await document.fonts.ready;
  const overlay=document.createElement('canvas');overlay.width=width;overlay.height=height;
  const ctx=overlay.getContext('2d');ctx.drawImage(source,0,0);
  ctx.clearRect(0,0,width,videoHeight);
  // Preserve the actual status glyphs without baking their old grey video background.
  const status=document.createElement('canvas');status.width=620;status.height=64;
  const sc=status.getContext('2d');sc.drawImage(source,88,18,620,64,0,0,620,64);
  const pixels=sc.getImageData(0,0,620,64);
  for(let i=0;i<pixels.data.length;i+=4){
    const light=Math.min(pixels.data[i],pixels.data[i+1],pixels.data[i+2]);
    pixels.data[i+3]=Math.max(0,Math.min(255,(light-180)*3.4));
  }
  sc.putImageData(pixels,0,0);ctx.drawImage(status,88,18);
  const copyControl=(x,y,w,h,r)=>{ctx.save();ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.clip();ctx.drawImage(source,x,y,w,h,x,y,w,h);ctx.restore();};
  copyControl(645,30,58,38,11);
  copyControl(27,104,82,82,41);
  copyControl(674,762,82,44,16);
  [[22,445,78,114],[22,575,78,110],[22,704,78,110]].forEach(([x,y,w,h],i)=>{
    ctx.save();ctx.beginPath();ctx.roundRect(x,y,w,h,13);ctx.clip();cover(ctx,stills[i],x,y,w,h);ctx.restore();
    if(!i){ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.beginPath();ctx.roundRect(x,y,w,h,13);ctx.stroke();}
  });
  ctx.fillStyle='#000';ctx.fillRect(0,videoHeight,width,125);ctx.fillRect(0,1060,width,height-1060);
  ctx.fillStyle='#fff';ctx.font='600 44px "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText(exerciseTitle,28,910);
  // English labels in the original native segmented control (same geometry).
  ctx.fillStyle='#000';ctx.fillRect(0,963,width,100);
  ctx.fillStyle='#202023';ctx.beginPath();ctx.roundRect(28,974,712,66,33);ctx.fill();
  ctx.strokeStyle='#454548';ctx.lineWidth=2;ctx.stroke();
  ctx.fillStyle='#f1f1f4';ctx.beginPath();ctx.roundRect(36,982,230,50,25);ctx.fill();
  ctx.font='500 24px "SF Pro Display", -apple-system, sans-serif';ctx.textAlign='center';
  ['Instructions','Muscles','Equipment'].forEach((text,i)=>{ctx.fillStyle=i?'#aaa':'#111';ctx.fillText(text,151+i*237,1015);});
  ctx.textAlign='left';ctx.fillStyle='#fff';
  ctx.font='400 28px "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif';
  let baseline=1115;
  for(const paragraph of instructions){
    let line='';
    for(const word of paragraph.split(' ')){
      const next=line?`${line} ${word}`:word;
      if(line&&ctx.measureText(next).width>704){ctx.fillText(line,28,baseline);baseline+=47;line=word;}else line=next;
    }
    ctx.fillText(line,28,baseline);baseline+=69;
  }
  copyControl(38,1524,704,112,56);
  ctx.font='500 20px "SF Pro Display", -apple-system, sans-serif';ctx.textAlign='center';
  ['Workouts','Body','Goals','Journal'].forEach((text,i)=>{
    ctx.fillStyle=i?'#1a1a1a':'#3a3a3a';ctx.fillRect(51+i*172,1588,154,31);
    ctx.fillStyle=i?'#aaa':'#b8f24a';ctx.fillText(text,128+i*172,1610);
  });ctx.textAlign='left';
  const poster=document.createElement('canvas');poster.width=width;poster.height=height;
  const pc=poster.getContext('2d');cover(pc,stills[0],0,0,width,videoHeight);pc.drawImage(overlay,0,0);
  return {overlay,poster};
}

export async function createIntroExerciseScreen(host,redraw){
  const artwork=await loadExerciseArtwork();
  // Reuse the native display/video colour pipeline; glass is a separate physical layer.
  const fallback=await loadImage(artwork.poster.toDataURL('image/png'));
  const screen=createPhoneScreen(fallback,fallback,redraw,{connectRecording:false});screen.update(1,0);
  const material=screen.material,overlayTexture=new THREE.CanvasTexture(artwork.overlay);
  overlayTexture.flipY=false;overlayTexture.colorSpace=THREE.SRGBColorSpace;
  overlayTexture.generateMipmaps=false;overlayTexture.minFilter=THREE.LinearFilter;
  material.uniforms.screenMap.value=overlayTexture;
  const video=document.createElement('video');video.muted=true;video.loop=true;video.playsInline=true;video.preload='auto';
  video.src='assets/intro/hammer-curls.mp4';video.hidden=true;video.dataset.introExercise='hammer-curls';
  video.setAttribute('aria-hidden','true');host.append(video);
  const videoTexture=new THREE.VideoTexture(video);videoTexture.flipY=false;videoTexture.colorSpace=THREE.SRGBColorSpace;
  videoTexture.generateMipmaps=false;videoTexture.minFilter=THREE.LinearFilter;
  material.uniforms.exerciseMap={value:material.uniforms.featureMap.value};
  material.uniforms.exerciseIsVideo={value:false};
  // One video sample behind the source UI; no canvas upload on every exercise frame.
  material.fragmentShader='uniform sampler2D exerciseMap;\nuniform bool exerciseIsVideo;\n'+material.fragmentShader;
  material.fragmentShader=material.fragmentShader.replace('vec3 display=texture2D(screenMap,vScreenUv).rgb;',`
    vec4 ui=texture2D(screenMap,vScreenUv);
    vec2 exerciseUv=vec2((vScreenUv.x-.5)*${(width/videoHeight/(1280/720)).toFixed(8)}+.5,vScreenUv.y*${height/videoHeight});
    vec3 exercise=texture2D(exerciseMap,exerciseIsVideo?exerciseUv:vScreenUv).rgb;
    if(exerciseIsVideo)exercise=sRGBTransferEOTF(vec4(exercise,1.0)).rgb;
    vec3 display=mix(exercise,ui.rgb,ui.a);`);
  // The user's correction rejects the old painted window pattern entirely.
  // Keep that shared shader unchanged for the lower phones, but disable it here.
  material.uniforms.reflectionStrength.value=0;
  let active=false,frameId=0,version=0;
  function onFrame(){
    frameId=0;if(!active||video.paused)return;
    material.uniforms.exerciseMap.value=videoTexture;material.uniforms.exerciseIsVideo.value=true;
    host.dataset.exerciseTime=video.currentTime.toFixed(3);host.dataset.exerciseFrames=String(++version);redraw();
    frameId=video.requestVideoFrameCallback?video.requestVideoFrameCallback(onFrame):requestAnimationFrame(onFrame);
  }
  function sync(){
    const play=active&&!document.hidden;
    if(play){video.play().then(()=>{if(!frameId)onFrame();}).catch(()=>{host.dataset.exercisePlayback='poster';});}
    else{video.pause();if(frameId){video.cancelVideoFrameCallback?video.cancelVideoFrameCallback(frameId):cancelAnimationFrame(frameId);frameId=0;}}
  }
  document.addEventListener('visibilitychange',sync);
  video.addEventListener('loadeddata',()=>{if(active)sync();});
  video.addEventListener('error',()=>{host.dataset.exercisePlayback='poster';});
  return {material,get version(){return version;},setActive(value){if(active===value)return;active=value;sync();}};
}
