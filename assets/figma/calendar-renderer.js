import * as THREE from '../vendor/three.module.js';
import {GLTFLoader} from '../vendor/GLTFLoader.js';

// Render the actual Blender mesh/shape keys. Only the scroll controller owns time.
export async function mountCalendar3D(host){
  const layer=document.createElement('span');layer.className='calendar-webgl';host.append(layer);
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));renderer.setClearColor(0,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.toneMappingExposure=.9;layer.append(renderer.domElement);
  const scene=new THREE.Scene();
  // Extend the same camera window upward/left so a departing sheet stays visible;
  // the calendar body keeps exactly its original screen size and baseline.
  const camera=new THREE.OrthographicCamera(-8.8,4.4,7.0416,-2.934,.01,40);
  // Blender XY front maps to glTF X/-Z; Z depth maps to glTF Y.
  camera.position.set(0,13,3);camera.up.set(0,0,-1);camera.lookAt(0,0,-.15);
  scene.add(new THREE.HemisphereLight(0xffffff,0x181c26,1.1));
  for(const [x,y,z,power] of [[-4,8,-5,2.3],[4,6,-1,1.7],[0,4,5,.7]]){
    const light=new THREE.DirectionalLight(0xffffff,power);light.position.set(x,y,z);scene.add(light);
    if(x===-4){light.castShadow=true;light.shadow.mapSize.set(1024,1024);Object.assign(light.shadow.camera,{left:-5,right:5,top:8,bottom:-5,near:.1,far:30});light.shadow.bias=-.0005;light.shadow.normalBias=.015;}
  }
  // Broad studio lights reflected in the dark chrome, without obscuring the type.
  const map=document.createElement('canvas');map.width=512;map.height=256;
  const ctx=map.getContext('2d');ctx.fillStyle='#11151b';ctx.fillRect(0,0,512,256);
  ctx.fillStyle='#c3cedb';ctx.fillRect(60,24,35,160);ctx.fillStyle='#fff';ctx.fillRect(310,60,70,100);
  const texture=new THREE.CanvasTexture(map);texture.colorSpace=THREE.SRGBColorSpace;
  texture.mapping=THREE.EquirectangularReflectionMapping;
  const pmrem=new THREE.PMREMGenerator(renderer),environment=pmrem.fromEquirectangular(texture);
  scene.environment=environment.texture;texture.dispose();pmrem.dispose();
  const gltf=await new GLTFLoader().loadAsync(new URL('../calendar/dopafit-calendar.glb?v=20261118-peel-1',import.meta.url).href);
  const root=gltf.scene;scene.add(root);
  const fading=[];
  root.traverse(mesh=>{
    if(!mesh.isMesh)return;
    mesh.frustumCulled=false;mesh.castShadow=true;mesh.receiveShadow=true;
    if(mesh.name.startsWith('Page_')){
      mesh.material=mesh.material.clone();mesh.material.metalness=0;mesh.material.roughness=.72;
      // Keep the exact dark Vietnamese source texture legible under studio light.
      if(mesh.material.map){mesh.material.emissive.set(0xffffff);mesh.material.emissiveMap=mesh.material.map;mesh.material.emissiveIntensity=.12;}
      else{mesh.material.emissive.set(0x30343c);mesh.material.emissiveIntensity=.5;}
      const month=Number(mesh.name.split('_')[1]);
      if(month<3){mesh.material.transparent=true;fading.push({mesh,month});}
    }
  });
  const mixer=new THREE.AnimationMixer(root);
  const actions=gltf.animations.map(clip=>{const action=mixer.clipAction(clip);action.setLoop(THREE.LoopOnce,1);action.clampWhenFinished=true;action.play();return action;});
  let progress=0,visible=true,ready=false,frame=0,lastSize='',lastDrawn=-1;
  function draw(){
    frame=0;if(!visible)return;
    const box=host.getBoundingClientRect();if(!box.width||!box.height)return;
    const size=`${Math.round(box.width)}:${Math.round(box.height)}`;
    if(size!==lastSize){lastSize=size;renderer.setSize(box.width*1.5,box.height*1.7,false);lastDrawn=-1;}
    // Perf (Claude 2026-11-18): the scroll controller calls this on every scroll frame; skip identical frames.
    if(ready&&progress===lastDrawn)return;lastDrawn=progress;
    // Reset finished actions before sampling: scrolling back from the end must
    // unpause the baked clips and recover every prior curved pose exactly.
    actions.forEach(action=>{action.reset();action.play();});mixer.setTime(progress*4);
    fading.forEach(({mesh,month})=>{
      const t=THREE.MathUtils.clamp((progress*120-(month===1?0:50))/60,0,1);
      mesh.material.opacity=1-THREE.MathUtils.smoothstep(t,.92,1);mesh.visible=t<1;
    });
    renderer.render(scene,camera);
    if(!ready){ready=true;host.classList.add('calendar-model-ready');host.dataset.model='blender';}
  }
  const request=()=>{if(!frame)frame=requestAnimationFrame(draw);};
  new ResizeObserver(request).observe(host);
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)request();},{rootMargin:'100px'}).observe(host);
  renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();host.classList.remove('calendar-model-ready');});
  renderer.domElement.addEventListener('webglcontextrestored',()=>{ready=false;request();});
  return value=>{progress=value;request();};
}
