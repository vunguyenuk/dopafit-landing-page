/* 3D phone for the phone page (≤600px). User 2026-11-18: use the web's phone and its whole motion — rise, turn,
   then move down into "Theo dõi nghiêm túc…". Carried over from the desktop (assets/figma/phone.js for the render,
   assets/figma/landing.js dockPhone() for the path):
     1. rise  — in section 2, DopafitPhoneMotion.sample(progress): up from below, yaw 89° → -28°, eye level;
     2. turn  — the phone holds near the middle of the screen, shrinks to fit and turns 180° (shows its back);
     3. dock  — it travels down and shrinks onto the tracking section's phone slot, turning to face front, and the
                screen crossfades to the tracking screens (screen-ui.js featureBlend, as desktop).
   After docking it sits on that slot (the slot is sticky), so the tracking steps switch its screen; the flat phone
   pictures there are hidden while the 3D phone is up. Same model repairs, camera, lights and shader as desktop.
   Scroll lengths (rise .6 screen, turn .65 screen, dock = the rest until the tracking stage pins) are estimates that
   follow the desktop proportions. Flat pictures stay as the fallback (no WebGL, model not loaded, reduced motion). */
import * as THREE from '../vendor/three.module.js';
import { GLTFLoader } from '../vendor/GLTFLoader.js';
import { createPhoneScreen } from '../phone/screen-ui.js';

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches||new URLSearchParams(location.search).get('motion')==='off';
if(window.DopafitMobile&&window.DopafitPhoneMotion&&!reduced){
  const motion=window.DopafitPhoneMotion;
  const clamp=v=>Math.max(0,Math.min(1,v)),smooth=t=>t*t*(3-2*t),range=(v,a,b)=>clamp((v-a)/(b-a)),lerp=(a,b,t)=>a+(b-a)*t;
  const waitFor=(sel,cb,n=0)=>{const el=document.querySelector(sel);if(el)cb(el);else if(n<400)requestAnimationFrame(()=>waitFor(sel,cb,n+1));};
  waitFor('.m-track .m-phone',()=>{
    const peek=document.querySelector('.m-phone-peek'),track=document.querySelector('.m-track-scroll'),slot=document.querySelector('.m-track .m-phone');
    if(!peek||!track||!slot)return;
    const start=()=>{
    let renderer;
    try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:false,powerPreference:'low-power'});}catch(e){return;}
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.setClearColor(0x000000,0);
    renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
    const host=document.createElement('div');host.className='m-phone3d';host.setAttribute('aria-hidden','true');
    host.append(renderer.domElement);document.body.append(host);
    const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(motion.cameraFov,1,.01,30);
    const cameraDistance=motion.cameraDistance;camera.position.z=cameraDistance;
    const focalScale=.5/Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
    scene.add(new THREE.HemisphereLight(0xffffff,0x66704a,3));
    [[3,4,5,4],[-3,1,3,3],[0,-3,-3,2]].forEach(([x,y,z,i])=>{const l=new THREE.DirectionalLight(0xffffff,i);l.position.set(x,y,z);scene.add(l);});
    let model,screen,W=0,H=0,last='',frame=0;
    const endPose=motion.sample(1);

    function size(){
      const w=peek.clientWidth,h=peek.clientHeight;if(!w||!h)return;
      if(w!==W||h!==H){W=w;H=h;host.style.width=`${W}px`;host.style.height=`${H}px`;renderer.setSize(W,H,false);camera.aspect=W/H;camera.updateProjectionMatrix();last='';}
      req();
    }
    function render(){
      frame=0;if(!model||!screen||!W)return;
      const vh=innerHeight,pr=peek.getBoundingClientRect(),tr=track.getBoundingClientRect();
      const {width:bodyW,topInset}=motion.frontalBounds(H),bodyH=H-2*topInset;
      const rise=clamp((vh-pr.top)/(vh*.6));
      const u=vh*.4-pr.top; // scroll since the rise ended
      const TURN=vh*.65;
      // The tracking slot when its stage is pinned (sticky top 0): offset inside the sticky stage.
      const sr=slot.getBoundingClientRect(),stage=slot.parentElement.getBoundingClientRect();
      const pinned=tr.top<=0;
      const slotTop=pinned?sr.top:sr.top-stage.top,slotCx=sr.left+sr.width/2,slotCy=slotTop+sr.height/2,slotS=sr.width/bodyW;
      const peekCx=pr.left+pr.width/2;
      let cx,cy,s=1,yaw,eye,p=1,dock=0;
      if(rise<1){
        const pose=motion.sample(rise);p=rise;
        cx=peekCx+pose.x*W;cy=pr.top+H/2+pose.y*vh*.55;yaw=Math.PI-pose.yaw;eye=pose.eyeY;
      }else{
        const fit=Math.min(1,vh*.86/Math.hypot(bodyW,bodyH));
        const turn=clamp(u/TURN);
        const turnCy=lerp(pr.top+H/2,vh/2,range(turn,0,.2));
        const turnYaw=Math.PI-endPose.yaw+Math.PI*range(turn,.1,.9);
        const turnS=lerp(1,fit,smooth(turn));
        // Dock: from the end of the turn until the tracking stage pins.
        const along=u-TURN;
        dock=along<=0?0:pinned?1:clamp(along/(along+tr.top));
        const frontal=Math.PI+2*Math.PI*Math.round((turnYaw-Math.PI)/(2*Math.PI));
        yaw=lerp(turnYaw,frontal,range(dock,0,.65));
        eye=endPose.eyeY*(1-range(dock,.15,1));
        if(dock>=1&&pinned||tr.top<0){cx=slotCx;cy=sr.top+sr.height/2;s=slotS;dock=1;yaw=frontal;eye=0;}
        else{cx=lerp(peekCx,slotCx,range(dock,0,.68));cy=lerp(turnCy,slotCy,smooth(dock));s=lerp(turnS,slotS,smooth(dock));}
      }
      host.style.visibility=rise<=0||cy+H*s/2<-50?'hidden':'';
      host.style.transform=`translate(${cx-W/2}px,${cy-H/2}px) scale(${s})`;
      document.documentElement.classList.toggle('m-phone3d-docked',dock>=1);
      const key=[p,dock,yaw,eye,screen.version,W,H].map(v=>typeof v==='number'?v.toFixed(4):v).join('|');
      if(key===last)return;last=key;
      model.rotation.set(0,yaw,0);
      camera.position.y=eye;
      camera.setViewOffset(W,H,0,H*focalScale*eye/cameraDistance,W,H);
      screen.update(p,dock);
      renderer.render(scene,camera);
      if(!document.documentElement.classList.contains('m-phone3d-on'))document.documentElement.classList.add('m-phone3d-on');
    }
    function req(){if(!frame)frame=requestAnimationFrame(render);}
    addEventListener('scroll',req,{passive:true});addEventListener('resize',size);
    new ResizeObserver(size).observe(peek);new ResizeObserver(req).observe(slot);

    // Tracking screens: the step picture that mobile.js marks .is-on becomes the phone's feature screen.
    const feature=new Image();
    const current=()=>slot.querySelector('img.is-on')||slot.querySelector('img');
    const syncFeature=()=>{const im=current();if(im&&feature.src!==im.src)feature.src=im.src;};
    syncFeature();
    new MutationObserver(syncFeature).observe(slot,{subtree:true,attributes:true,attributeFilter:['class']});

    const workout=new Image();workout.src='assets/phone/recordings/journey.webp';
    Promise.all([new GLTFLoader().loadAsync('assets/phone/dopafit-phone.glb'),workout.decode()]).then(([g])=>{
      model=g.scene;scene.add(model);const box=new THREE.Box3().setFromObject(model);model.position.sub(box.getCenter(new THREE.Vector3()));
      screen=createPhoneScreen(workout,feature,req);
      const islandMaterials=['17ProMax_Black2.003','17ProMax_2112.002','17ProMax_Lens2.002'];
      model.traverse(o=>{if(!o.isMesh)return;o.frustumCulled=false;
        const repair=m=>{if(islandMaterials.includes(m.name))return new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,toneMapped:false});
          if(m.name==='Dopafit_Workout_Screen')return screen.material;
          if(m.name==='Material.001'&&m.map){ // rear flash UVs, as phone.js
            o.geometry=o.geometry.clone();o.geometry.computeBoundingBox();
            const {min,max}=o.geometry.boundingBox,pos=o.geometry.attributes.position,uv=o.geometry.attributes.uv;
            for(let i=0;i<uv.count;i++)uv.setXY(i,.09+.82*(pos.getX(i)-min.x)/(max.x-min.x),.08+.84*(pos.getY(i)-min.y)/(max.y-min.y));
            uv.needsUpdate=true;}
          return m;};
        o.material=Array.isArray(o.material)?o.material.map(repair):repair(o.material);});
      const sh=new THREE.Shape(),r=.041,hw=.1125;
      sh.moveTo(-hw+r,r);sh.lineTo(hw-r,r);sh.absarc(hw-r,0,r,Math.PI/2,-Math.PI/2,true);sh.lineTo(-hw+r,-r);sh.absarc(-hw+r,0,r,-Math.PI/2,-Math.PI*1.5,true);sh.closePath();
      const island=new THREE.Mesh(new THREE.ShapeGeometry(sh,32),new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,toneMapped:false}));
      island.position.set(.002,.908,-.088);model.add(island);
      size();
    }).catch(()=>{renderer.dispose();host.remove();});
    };
    const near=new IntersectionObserver(entries=>{
      if(!entries.some(entry=>entry.isIntersecting))return;
      near.disconnect();start();
    },{rootMargin:'1200px'});
    near.observe(peek);
  });
}
