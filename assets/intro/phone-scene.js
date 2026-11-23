import * as THREE from '../vendor/three.module.js';
import {GLTFLoader} from '../vendor/GLTFLoader.js';
import {createIntroExerciseScreen} from './exercise-screen.js?v=20261123-lossless';
import {createIPhoneGlass} from './iphone-glass.js?v=reflection-4';

export async function mountIntroPhone(host){
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.setClearColor(0x000000,0);
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(27,624/352,.01,30);
  camera.position.z=5.1;
  // Reuse the existing phone's lighting and screen glass, independently of its UI timeline.
  scene.add(new THREE.HemisphereLight(0xffffff,0x66704a,3));
  [[3,4,5,4],[-3,1,3,3],[0,-3,-3,2]].forEach(([x,y,z,i])=>{const light=new THREE.DirectionalLight(0xffffff,i);light.position.set(x,y,z);scene.add(light);});
  const loader=new GLTFLoader();
  let phone,track;
  try{[phone,track]=await Promise.all([loader.loadAsync('assets/phone/dopafit-phone.glb'),loader.loadAsync('assets/intro/phone-motion.glb?v=framing-3')]);}
  catch(error){renderer.dispose();throw error;}
  const model=phone.scene;
  const center=new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());model.position.sub(center);
  const root=track.scene.getObjectByName('Intro_Reference_Phone');
  if(!root||!track.animations.length){renderer.dispose();throw new Error('Blender phone track missing');}
  root.add(model);scene.add(track.scene);
  let visible=true,lost=false,clock=0,lastClock=-1,lastScreen=-1,lastSize='',ready=false,frame=0,measured=null;
  const screen=await createIntroExerciseScreen(host,()=>request());
  const syncVideo=()=>screen.setActive(visible&&!lost&&clock<2.667);
  const coat=createIPhoneGlass(renderer,scene),glassLayers=[];
  // Exact repairs already used in assets/figma/phone.js; no geometry replacement.
  const islandMaterials=['17ProMax_Black2.003','17ProMax_2112.002','17ProMax_Lens2.002'];
  model.traverse(o=>{if(!o.isMesh)return;o.frustumCulled=false;
    const repair=m=>{
      if(islandMaterials.includes(m.name))return new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,toneMapped:false});
      if(m.name==='Dopafit_Workout_Screen'){glassLayers.push([o,coat(o)]);return screen.material;}
      if(m.name==='Material.001'&&m.map){
        o.geometry=o.geometry.clone();o.geometry.computeBoundingBox();
        const {min,max}=o.geometry.boundingBox,p=o.geometry.attributes.position,uv=o.geometry.attributes.uv;
        for(let i=0;i<uv.count;i++)uv.setXY(i,.09+.82*(p.getX(i)-min.x)/(max.x-min.x),.08+.84*(p.getY(i)-min.y)/(max.y-min.y));uv.needsUpdate=true;
      }return m;
    };o.material=Array.isArray(o.material)?o.material.map(repair):repair(o.material);
  });
  glassLayers.forEach(([source,glass])=>source.parent.add(glass));
  host.dataset.glass='physical';
  const shape=new THREE.Shape(),r=.041,half=.1125;
  shape.moveTo(-half+r,r);shape.lineTo(half-r,r);shape.absarc(half-r,0,r,Math.PI/2,-Math.PI/2,true);shape.lineTo(-half+r,-r);shape.absarc(-half+r,0,r,-Math.PI/2,-Math.PI*1.5,true);shape.closePath();
  const island=new THREE.Mesh(new THREE.ShapeGeometry(shape,32),new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,toneMapped:false}));island.position.set(.002,.908,-.088);model.add(island);
  const mixer=new THREE.AnimationMixer(track.scene),actions=track.animations.map(clip=>{const a=mixer.clipAction(clip);a.setLoop(THREE.LoopOnce,1);a.clampWhenFinished=true;a.play();return a;});
  host.append(renderer.domElement);
  function draw(){
    frame=0;if(!visible||lost)return;
    const box=measured||(measured=host.getBoundingClientRect()),dpr=Math.min(devicePixelRatio||1,2);
    const key=[Math.round(box.width),Math.round(box.height),dpr].join(':');
    if(!box.width||!box.height)return;
    if(key===lastSize&&lastClock===clock&&lastScreen===screen.version&&ready)return;
    if(key!==lastSize){
      lastSize=key;renderer.setPixelRatio(dpr);renderer.setSize(box.width,box.height*2,false);
      // Extend the existing reference camera downward without reframing/scaling
      // the phone. The old 352px source crop cut the lower screen off mid-device.
      camera.setViewOffset(box.width,box.height,0,0,box.width,box.height*2);
    }
    if(lastClock!==clock){
      actions.forEach(a=>{a.reset();a.play();});mixer.setTime(clock);
      host.dataset.reflectionOffset=coat.update(clock/3).toFixed(6);
    }
    lastClock=clock;lastScreen=screen.version;renderer.render(scene,camera);
    ready=true;host.dataset.ready='true';host.dataset.sample=clock.toFixed(4);
    host.dataset.renders=String(Number(host.dataset.renders||0)+1);
    // Small pose diagnostics support reference-frame validation without a second clock.
    host.dataset.pose=JSON.stringify({position:root.position.toArray(),quaternion:root.quaternion.toArray(),scale:root.scale.x});
  }
  function request(){if(!frame)frame=requestAnimationFrame(draw);}
  new ResizeObserver(()=>{measured=host.getBoundingClientRect();lastSize='';request();}).observe(host);
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;syncVideo();if(visible)request();}).observe(host);
  renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;ready=false;host.dataset.ready='false';syncVideo();});
  renderer.domElement.addEventListener('webglcontextrestored',()=>{lost=false;lastSize='';syncVideo();request();});
  syncVideo();
  return seconds=>{clock=Math.max(0,Math.min(3,seconds));syncVideo();request();};
}
