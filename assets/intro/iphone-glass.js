import * as THREE from '../vendor/three.module.js';

// Use Three r170's dielectric specular material over the existing display
// geometry. These are visual glass settings, not measured Apple material data.
export function createIPhoneGlass(renderer,scene){
  // A continuous, unframed studio light field: no window image, grid or UI overlay.
  const width=256,height=128,data=new Float32Array(width*height*4);
  const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    const theta=((x+.5)/width-.5)*Math.PI*2,phi=(y+.5)/height*Math.PI;
    // Match the bundled equirectUv(): v = asin(direction.y)/PI + .5.
    const yaw=Math.atan2(Math.cos(theta),Math.sin(theta)),elevation=phi-Math.PI/2;
    const rim=.45*Math.exp(-.5*((wrap(yaw-1.45)/.23)**2+((elevation-.25)/.75)**2));
    const light=.012+rim,i=(y*width+x)*4;
    data[i]=light*.96;data[i+1]=light*.98;data[i+2]=light;data[i+3]=1;
  }
  const environment=new THREE.DataTexture(data,width,height,THREE.RGBAFormat,THREE.FloatType);
  environment.mapping=THREE.EquirectangularReflectionMapping;environment.needsUpdate=true;
  const generator=new THREE.PMREMGenerator(renderer),filtered=generator.fromEquirectangular(environment);
  generator.dispose();environment.dispose();scene.environment=filtered.texture;
  // Exact source angle/stops: index.html, Figma 147:2919/2920/2921.
  // Same 160% background width and 5→95% scroll sweep as sections.css
  // .places-glass-light / sections-scene.js render(), applied to the coating UVs.
  const backgroundScale=1.6;
  const light=document.createElement('canvas');light.width=Math.round(768*backgroundScale);light.height=1664;
  const ctx=light.getContext('2d'),angle=125.99025157704725*Math.PI/180;
  const dx=Math.sin(angle),dy=-Math.cos(angle),length=Math.abs(light.width*dx)+Math.abs(light.height*dy);
  const gradient=ctx.createLinearGradient(light.width/2-dx*length/2,light.height/2-dy*length/2,light.width/2+dx*length/2,light.height/2+dy*length/2);
  gradient.addColorStop(.42,'rgba(255,255,255,0)');gradient.addColorStop(.50,'rgba(255,255,255,.11)');gradient.addColorStop(.58,'rgba(255,255,255,0)');
  ctx.fillStyle='#000';ctx.fillRect(0,0,light.width,light.height);ctx.fillStyle=gradient;ctx.fillRect(0,0,light.width,light.height);
  const lightMap=new THREE.CanvasTexture(light);lightMap.flipY=false;lightMap.colorSpace=THREE.SRGBColorSpace;
  lightMap.generateMipmaps=false;lightMap.minFilter=THREE.LinearFilter;
  lightMap.repeat.set(1/backgroundScale,1);
  const material=new THREE.MeshPhysicalMaterial({
    name:'Intro_iPhone_Display_Glass',color:0x000000,metalness:0,roughness:.045,
    ior:1.5,specularIntensity:1,
    envMap:filtered.texture,envMapIntensity:.15,emissive:0xffffff,emissiveMap:lightMap,emissiveIntensity:1.25,transparent:true,opacity:1,
    // Same screen blend used by sections.css .places-glass-light.
    blending:THREE.CustomBlending,blendSrc:THREE.OneFactor,blendDst:THREE.OneMinusSrcColorFactor,
    toneMapped:false,depthWrite:false,side:THREE.DoubleSide
  });
  const coat=source=>{
    const geometry=source.geometry.clone(),position=geometry.attributes.position,normal=geometry.attributes.normal;
    // The imported model's cover glass reaches z=-.08362, ahead of its display
    // (z=-.08277). The old .00035 lift left this moving coating underneath it.
    // Lift beyond the native cover while keeping depth testing/island occlusion.
    for(let i=0;i<position.count;i++){
      position.setXYZ(i,position.getX(i)+normal.getX(i)*.00235,position.getY(i)+normal.getY(i)*.00235,position.getZ(i)+normal.getZ(i)*.00235);
    }
    position.needsUpdate=true;
    const glass=new THREE.Mesh(geometry,material);glass.name='Intro_iPhone_Glass_Coating';
    glass.matrixAutoUpdate=false;glass.matrix.copy(source.matrix);glass.frustumCulled=false;
    glass.renderOrder=2;return glass;
  };
  coat.update=progress=>{
    // Complete the visible sweep before the reference phone drops out at 2.667s.
    // Front-load travel while the full display is in view; keep progressing
    // through its hold. This is scroll sampling, never a timed animation.
    const visible=Math.max(0,Math.min(1,progress*3/2.667));
    const pass=1-Math.pow(1-visible,3),position=(5+pass*90)/100;
    lightMap.offset.x=(1-1/backgroundScale)*position;
    lightMap.updateMatrix();
    return lightMap.offset.x;
  };
  coat.update(0);
  return coat;
}
