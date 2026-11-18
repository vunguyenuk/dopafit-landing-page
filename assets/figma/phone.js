import * as THREE from '../vendor/three.module.js';
import { GLTFLoader } from '../vendor/GLTFLoader.js';
import { createPhoneScreen } from '../phone/screen-ui.js';
const host=document.getElementById('phone-webgl');
// The mobile page (≤600px) shows a static phone; skip the 6 MB model and WebGL there.
if(host&&!window.DopafitMobile){
  let renderer;
  try{
    renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:false,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.setClearColor(0x000000,0);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;host.append(renderer.domElement);
    const motion=window.DopafitPhoneMotion;
    const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(motion.cameraFov,1,.01,30);
    const cameraDistance=motion.cameraDistance;camera.position.z=cameraDistance;
    const focalScale=.5/Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
    scene.add(new THREE.HemisphereLight(0xffffff,0x66704a,3));
    [[3,4,5,4],[-3,1,3,3],[0,-3,-3,2]].forEach(([x,y,z,intensity])=>{const l=new THREE.DirectionalLight(0xffffff,intensity);l.position.set(x,y,z);scene.add(l);});
    const featureImage=document.querySelector('[data-node-id="147:2794"] img');
    let screenMesh;
    const raycaster=new THREE.Raycaster();
    const pointer=new THREE.Vector2();
    let model,screen,visible=false,pinned=false,progress=1,dock=0,turn=0,width=0,height=0,lastDraw;
    let ready=false,contextLost=false;
    function setReady(ready){
      if(ready===host.parentElement.classList.contains('phone-ready'))return;
      host.parentElement.classList.toggle('phone-ready',ready);
      window.dispatchEvent(new Event('dopafit:phone-ready'));
    }
    function draw(){
      if(!model||!screen||contextLost||(!visible&&!pinned)||!width||!height)return;
      const state=[progress,dock,turn,width,height,screen.version];
      if(lastDraw&&state.every((value,i)=>value===lastDraw[i]))return;
      lastDraw=state;
      const pose=motion.sample(progress);
      const facing=1-THREE.MathUtils.smoothstep(dock,.15,1);
      // Continue the rise's rotation about the upright model Y axis.
      const yaw=Math.PI-pose.yaw+THREE.MathUtils.degToRad(turn);
      // Finish facing forward as the half-turned phone moves into the right column.
      const frontalYaw=Math.PI+2*Math.PI*Math.round((yaw-Math.PI)/(2*Math.PI));
      const dockYaw=THREE.MathUtils.lerp(yaw,frontalYaw,THREE.MathUtils.smoothstep(dock,0,.65));
      model.rotation.set(0,dockYaw,0);
      // Keep the camera level while the phone crosses eye level. Shift the lens
      // to keep the model pivot in the same canvas slot as the perspective changes.
      const eyeY=pose.eyeY*facing;
      camera.position.y=eyeY;
      camera.setViewOffset(width,height,0,height*focalScale*eyeY/cameraDistance,width,height);
      screen.update(progress,dock);
      renderer.render(scene,camera);
      // Reveal WebGL only after the first completed draw, never just model load.
      if(!ready){ready=true;setReady(true);}
    }
    function activateScreen(event){
      if(dock<.999||!screenMesh)return;
      const box=renderer.domElement.getBoundingClientRect();
      pointer.set((event.clientX-box.left)/box.width*2-1,1-(event.clientY-box.top)/box.height*2);
      raycaster.setFromCamera(pointer,camera);
      const hit=raycaster.intersectObject(screenMesh,false)[0];
      if(hit?.uv)window.DopafitAppRecording?.tap(hit.uv);
    }
    const uvPoints=new Map();
    window.DopafitPhoneScreen={project(point){
      if(dock<.999||!screenMesh)return null;
      const key=point.join(',');
      let local=uvPoints.get(key);
      if(!local){
        const geometry=screenMesh.geometry,uv=geometry.attributes.uv,position=geometry.attributes.position,index=geometry.index;
        const a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3(),weights=new THREE.Vector3(),p=new THREE.Vector3(...point,0);
        const count=index?index.count:position.count;
        for(let i=0;i<count;i+=3){
          const ids=[0,1,2].map(j=>index?index.getX(i+j):i+j);
          a.set(uv.getX(ids[0]),uv.getY(ids[0]),0);b.set(uv.getX(ids[1]),uv.getY(ids[1]),0);c.set(uv.getX(ids[2]),uv.getY(ids[2]),0);
          if(THREE.Triangle.getBarycoord(p,a,b,c,weights)===null)continue;
          if(Math.min(weights.x,weights.y,weights.z)<-.00001)continue;
          local=new THREE.Vector3().fromBufferAttribute(position,ids[0]).multiplyScalar(weights.x)
            .addScaledVector(new THREE.Vector3().fromBufferAttribute(position,ids[1]),weights.y)
            .addScaledVector(new THREE.Vector3().fromBufferAttribute(position,ids[2]),weights.z);
          uvPoints.set(key,local);break;
        }
      }
      if(!local)return null;
      screenMesh.updateWorldMatrix(true,false);
      const projected=screenMesh.localToWorld(local.clone()).project(camera),box=renderer.domElement.getBoundingClientRect();
      return {x:box.left+(projected.x+1)*box.width/2,y:box.top+(1-projected.y)*box.height/2};
    }};
    host.addEventListener('pointerup',activateScreen);
    host.addEventListener('keydown',event=>{
      if(event.key==='Enter'||event.key===' '){
        event.preventDefault();
        window.DopafitAppRecording?.tap();
      }
    });
    window.addEventListener('dopafit:recording-control',({detail})=>{
      host.parentElement.classList.toggle('phone-interactive',detail.waiting);
      host.tabIndex=detail.waiting?0:-1;
      host.setAttribute('role',detail.waiting?'button':'img');
      host.setAttribute('aria-label',detail.waiting?detail.label:'Màn hình Dopafit quay từ Device Hub');
    });
    // The host lives inside the CSS-zoomed 1920px canvas: clientWidth is in design px.
    // Render at the on-screen size (design scale x DPR), not the unzoomed size, so a
    // 390px phone does not shade a ~25x larger buffer every frame.
    function size(){
      const nextWidth=host.clientWidth,nextHeight=host.clientHeight;
      if(!nextWidth||!nextHeight)return;
      const designScale=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--design-scale'))||1;
      const ratio=Math.max(.35,Math.min(devicePixelRatio,2)*Math.min(1,designScale));
      const resized=width!==nextWidth||height!==nextHeight||renderer.getPixelRatio()!==ratio;
      width=nextWidth;height=nextHeight;
      if(resized){
        if(renderer.getPixelRatio()!==ratio)renderer.setPixelRatio(ratio);
        renderer.setSize(width,height,false);lastDraw=undefined;
      }
      draw();
    }
    window.addEventListener('dopafit:tracking-pin',({detail})=>{
      pinned=detail.pinned;lastDraw=undefined;size();
      // Reparenting changes compositing/IntersectionObserver state asynchronously.
      requestAnimationFrame(()=>{lastDraw=undefined;size();});
    });
    window.addEventListener('resize',()=>requestAnimationFrame(size),{passive:true});
    new ResizeObserver(size).observe(host);
    new IntersectionObserver(es=>{visible=es[0].isIntersecting;if(visible){lastDraw=undefined;draw();}},{rootMargin:'300px'}).observe(host);
    window.addEventListener('dopafit:scroll',e=>{
      progress=e.detail.phoneProgress;
      dock=e.detail.phoneDock??0;
      turn=e.detail.phoneTurn??0;
      host.parentElement.classList.toggle('phone-docked',dock>=.999);
      draw();
    });
    renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();contextLost=true;ready=false;setReady(false);});
    renderer.domElement.addEventListener('webglcontextrestored',()=>{contextLost=false;lastDraw=undefined;size();});
    const workoutImage=new Image();
    workoutImage.src='assets/phone/recordings/journey.webp';
    Promise.all([new GLTFLoader().loadAsync('assets/phone/dopafit-phone.glb'),workoutImage.decode()]).then(([g])=>{
      model=g.scene;scene.add(model);const box=new THREE.Box3().setFromObject(model);const center=box.getCenter(new THREE.Vector3());model.position.sub(center);
      screen=createPhoneScreen(workoutImage,featureImage,draw);
      const islandMaterials=['17ProMax_Black2.003','17ProMax_2112.002','17ProMax_Lens2.002'];
      model.traverse(o=>{if(o.isMesh){o.frustumCulled=false;
        const repair=m=>{if(islandMaterials.includes(m.name)){return new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,toneMapped:false});}
          if(m.name==='Dopafit_Workout_Screen'){screenMesh=o;return screen.material;}
          // Rear flash UVs sample the orange corner of iphone_Flash_litht,
          // rather than its white diffuser. Remap only this circular mesh onto
          // the source diffuser, retaining its actual texture and material.
          if(m.name==='Material.001'&&m.map){
            o.geometry=o.geometry.clone();o.geometry.computeBoundingBox();
            const {min,max}=o.geometry.boundingBox,positions=o.geometry.attributes.position,uv=o.geometry.attributes.uv;
            for(let i=0;i<uv.count;i++)uv.setXY(i,
              .09+.82*(positions.getX(i)-min.x)/(max.x-min.x),
              .08+.84*(positions.getY(i)-min.y)/(max.y-min.y));
            uv.needsUpdate=true;
          }
          return m;};
        o.material=Array.isArray(o.material)?o.material.map(repair):repair(o.material);
      }});
      // One opaque capsule covers the model camera/glass assembly and the UI's baked island.
      const islandShape=new THREE.Shape(),r=.041,halfW=.1125;
      islandShape.moveTo(-halfW+r,r);islandShape.lineTo(halfW-r,r);islandShape.absarc(halfW-r,0,r,Math.PI/2,-Math.PI/2,true);islandShape.lineTo(-halfW+r,-r);islandShape.absarc(-halfW+r,0,r,-Math.PI/2,-Math.PI*1.5,true);islandShape.closePath();
      const island=new THREE.Mesh(new THREE.ShapeGeometry(islandShape,32),new THREE.MeshBasicMaterial({color:0x000000,side:THREE.DoubleSide,toneMapped:false}));
      island.name='Clean_Dynamic_Island';island.position.set(.002,.908,-.088);model.add(island);
      pinned=!!host.closest('.tracking-fixed-viewport');size();
    }).catch(err=>{console.warn('Phone model unavailable; showing supplied Figma mockup.',err);setReady(false);renderer.dispose();host.remove();});
  }catch(error){console.warn('WebGL unavailable; showing supplied Figma mockup.',error);renderer?.dispose();host.remove();}
}
