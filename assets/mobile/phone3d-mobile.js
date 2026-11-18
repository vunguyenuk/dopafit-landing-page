/* 3D phone for the phone page (≤600px), section "Đa dạng bài tập…" (user 2026-11-18: this is the 3D phone, as on
   desktop). Same model, same screen shader and same model repairs as assets/figma/phone.js (desktop), rendered into
   the .m-phone-peek box that mobile.js builds. The rise follows the --rise value mobile.js writes while the block
   scrolls up (0 → 1): the phone comes up from below and turns from a slight angle to face the viewer, the same
   "vertical rise, yaw through frontal, then settle" as the desktop motion. Lift distance, start angle and framing
   are estimates. The flat phone picture stays as the fallback until the first 3D frame is drawn. */
import * as THREE from '../vendor/three.module.js';
import { GLTFLoader } from '../vendor/GLTFLoader.js';
import { createPhoneScreen } from '../phone/screen-ui.js';

if(window.DopafitMobile){
  const START_YAW=THREE.MathUtils.degToRad(-28),LIFT=.55; // fraction of the phone height
  const waitFor=(sel,cb,n=0)=>{const el=document.querySelector(sel);if(el)cb(el);else if(n<400)requestAnimationFrame(()=>waitFor(sel,cb,n+1));};
  waitFor('.m-phone-peek',peek=>{
    let renderer;
    try{
      renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
    }catch(e){return;}
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000,0);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
    const cv=renderer.domElement;cv.className='m-phone3d';cv.setAttribute('aria-hidden','true');peek.append(cv);
    const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(24,1,.01,30);
    scene.add(new THREE.HemisphereLight(0xffffff,0x66704a,3));
    [[3,4,5,4],[-3,1,3,3],[0,-3,-3,2]].forEach(([x,y,z,i])=>{const l=new THREE.DirectionalLight(0xffffff,i);l.position.set(x,y,z);scene.add(l);});
    let model,screen,size=null,visible=true,last='',phoneH=2,phoneW=1;
    const rise=()=>parseFloat(peek.style.getPropertyValue('--rise'))||0;
    function resize(){
      const w=peek.clientWidth,h=peek.clientHeight;if(!w||!h)return;
      size=[w,h];renderer.setSize(w,h,false);camera.aspect=w/h;
      // Frame the phone so its width fills ~86% of the box; the box shows the upper part of the phone.
      const dist=(phoneW/.86)/2/Math.tan(THREE.MathUtils.degToRad(camera.fov/2))/camera.aspect;
      camera.position.set(0,0,dist);camera.updateProjectionMatrix();last='';draw();
    }
    function draw(){
      if(!model||!screen||!size||!visible)return;
      const r=rise(),key=`${r}|${screen.version}|${size}`;if(key===last)return;last=key;
      const e=1-Math.pow(1-r,3);
      // Top of the phone sits ~6% below the top of the box when risen.
      const viewH=2*camera.position.z*Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
      const yTop=viewH/2-viewH*.06;
      model.position.y=yTop-phoneH/2-(1-e)*LIFT*phoneH;
      model.rotation.set(0,Math.PI+START_YAW*(1-e),0);
      screen.update(1,0);
      renderer.render(scene,camera);
      if(!peek.classList.contains('has-3d'))peek.classList.add('has-3d');
    }
    new ResizeObserver(resize).observe(peek);
    new IntersectionObserver(([en])=>{visible=en.isIntersecting;if(visible){last='';draw();}},{rootMargin:'200px'}).observe(peek);
    new MutationObserver(draw).observe(peek,{attributes:true,attributeFilter:['style']});
    const img=new Image();img.src='assets/phone/recordings/journey.webp';const noFeature=new Image();
    Promise.all([new GLTFLoader().loadAsync('assets/phone/dopafit-phone.glb'),img.decode()]).then(([g])=>{
      const root=g.scene;const box=new THREE.Box3().setFromObject(root),c=box.getCenter(new THREE.Vector3()),s=box.getSize(new THREE.Vector3());
      root.position.sub(c);model=new THREE.Group();model.add(root);scene.add(model);phoneH=s.y;phoneW=Math.max(s.x,s.z);
      screen=createPhoneScreen(img,noFeature,draw);
      const island=['17ProMax_Black2.003','17ProMax_2112.002','17ProMax_Lens2.002'];
      root.traverse(o=>{if(!o.isMesh)return;o.frustumCulled=false;
        const fix=m=>{if(island.includes(m.name))return new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,toneMapped:false});
          if(m.name==='Dopafit_Workout_Screen')return screen.material;return m;};
        o.material=Array.isArray(o.material)?o.material.map(fix):fix(o.material);});
      // Same opaque capsule as phone.js over the camera island.
      const sh=new THREE.Shape(),r=.041,hw=.1125;
      sh.moveTo(-hw+r,r);sh.lineTo(hw-r,r);sh.absarc(hw-r,0,r,Math.PI/2,-Math.PI/2,true);sh.lineTo(-hw+r,-r);sh.absarc(-hw+r,0,r,-Math.PI/2,-Math.PI*1.5,true);sh.closePath();
      const cap=new THREE.Mesh(new THREE.ShapeGeometry(sh,32),new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,toneMapped:false}));
      cap.position.set(.002,.908,-.088);root.add(cap);
      resize();
    }).catch(()=>{renderer.dispose();cv.remove();});
  });
}
