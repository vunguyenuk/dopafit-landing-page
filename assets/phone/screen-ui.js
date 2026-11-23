import * as THREE from '../vendor/three.module.js';

// Horizontal slices from the existing 710 × 1534 workout screenshot.
const workoutSections=[
  [98,192,.05,.20],       // Plan heading
  [192,420,.13,.31],      // Weekly schedule
  [420,662,.23,.42],      // Missed workout
  [662,924,.33,.53],      // Session heading, filters and recovery note
  [924,1077,.44,.64],     // First exercise
  [1077,1228,.52,.72],    // Second exercise
  [1228,1269,.60,.79],    // Next exercise, partly visible in the source
  [1269,1368,.66,.88],    // Workout actions
  [1368,1494,.77,1]      // Bottom navigation
];

export function createPhoneScreen(workout,featureImage,redraw,{connectRecording=true}={}){
  const {naturalWidth:width,naturalHeight:height}=workout;
  function makeTexture(image){
    const texture=new THREE.Texture(image);
    texture.flipY=false;
    texture.colorSpace=THREE.SRGBColorSpace;
    texture.generateMipmaps=false;
    texture.minFilter=THREE.LinearFilter;
    texture.needsUpdate=true;
    return texture;
  }
  const workoutTexture=makeTexture(workout);
  let featureReady=false,version=0,staticTexture;
  let recordingVideo;
  const recordingTextures=new Map();
  function videoTexture(video){
    let texture=recordingTextures.get(video);
    if(!texture){
      texture=new THREE.VideoTexture(video);texture.flipY=false;
      texture.colorSpace=THREE.SRGBColorSpace;texture.generateMipmaps=false;
      texture.minFilter=THREE.LinearFilter;recordingTextures.set(video,texture);
    }
    texture.needsUpdate=true;return texture;
  }
  function showRecording(video,previousVideo=video,blend=1){
    if(video.readyState<2)return;
    recordingVideo=video;
    material.uniforms.featureMap.value=videoTexture(video);
    material.uniforms.previousFeatureMap.value=videoTexture(previousVideo);
    material.uniforms.featureMix.value=blend;
    material.uniforms.recordedVideo.value=true;
    featureReady=true;version++;redraw();
  }
  if(connectRecording)window.addEventListener('dopafit:recording-frame',({detail:{video,previousVideo,blend}})=>showRecording(video,previousVideo,blend));
  function captureFeature(){
    if(recordingVideo||!featureImage.naturalWidth)return;
    let bitmap=featureImage;
    if(featureImage.naturalWidth===738&&featureImage.naturalHeight===1568){
      bitmap=document.createElement('canvas');
      bitmap.width=width;
      bitmap.height=height;
      bitmap.getContext('2d',{alpha:false}).drawImage(featureImage,14,17,width,height,0,0,width,height);
    }
    staticTexture?.dispose();
    staticTexture=makeTexture(bitmap);
    material.uniforms.featureMap.value=staticTexture;
    featureReady=true;
    version++;
    redraw();
  }
  featureImage.addEventListener('load',captureFeature);

  const sectionLookup=workoutSections.map(([top,bottom,start,end])=>
    `if (row < ${bottom}.0) return vec4(${top}.0,${bottom}.0,${start.toFixed(2)},${end.toFixed(2)});`
  ).join('\n');
  const material=new THREE.ShaderMaterial({
    side:THREE.DoubleSide,
    toneMapped:false,
    uniforms:{
      screenMap:{value:workoutTexture},
      featureMap:{value:workoutTexture},
      previousFeatureMap:{value:workoutTexture},
      featureMix:{value:1},
      recordedVideo:{value:false},
      screenSize:{value:new THREE.Vector2(width,height)},
      riseProgress:{value:1},
      featureBlend:{value:0},
      reflectionStrength:{value:1},
      touchPoint:{value:new THREE.Vector2()},
      touchStrength:{value:0},
      touchRadius:{value:.014}
    },
    vertexShader:`
      varying vec2 vScreenUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      void main() {
        vScreenUv=uv;
        vec4 worldPosition=modelMatrix*vec4(position,1.0);
        vWorldPosition=worldPosition.xyz;
        vWorldNormal=mat3(modelMatrix)*normal;
        gl_Position=projectionMatrix*viewMatrix*worldPosition;
      }`,
    fragmentShader:`
      uniform sampler2D screenMap;
      uniform sampler2D featureMap;
      uniform sampler2D previousFeatureMap;
      uniform float featureMix;
      uniform bool recordedVideo;
      uniform vec2 screenSize;
      uniform float riseProgress;
      uniform float featureBlend;
      uniform float reflectionStrength;
      uniform vec2 touchPoint;
      uniform float touchStrength;
      uniform float touchRadius;
      varying vec2 vScreenUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      vec4 sectionAt(float row) {
        ${sectionLookup}
        return vec4(0.0);
      }
      float reflectedWindow(vec2 direction,vec2 center,vec2 extent) {
        vec2 pane=direction-center;
        vec2 edge=1.0-smoothstep(extent-0.014,extent+0.014,abs(pane));
        float frame=smoothstep(0.005,0.014,abs(pane.x))*smoothstep(0.004,0.010,abs(pane.y));
        return edge.x*edge.y*mix(0.12,1.0,frame);
      }
      void main() {
        vec3 display=texture2D(screenMap,vScreenUv).rgb;
        vec2 pixel=vScreenUv*screenSize;
        if (riseProgress<1.0 && pixel.x>10.0 && pixel.x<screenSize.x-10.0 && pixel.y>=98.0 && pixel.y<1494.0) {
          vec4 section=sectionAt(pixel.y);
          float visible=smoothstep(section.z,section.w,riseProgress);
          float edge=mix(section.x-5.0,section.y+5.0,visible);
          // Reveal each block with a narrow feather while keeping its revealed text at full contrast.
          display=mix(vec3(0.00518),display,1.0-smoothstep(edge-4.0,edge+4.0,pixel.y));
        }
        if (featureBlend>0.0) {
          vec3 app=mix(texture2D(previousFeatureMap,vScreenUv).rgb,texture2D(featureMap,vScreenUv).rgb,featureMix);
          if(recordedVideo)app=sRGBTransferEOTF(vec4(app,1.0)).rgb;
          display=mix(display,app,featureBlend);
        }
        // A touch indicator explains the captured action; the app pixels remain native footage.
        vec2 touchDelta=(vScreenUv-touchPoint)*vec2(screenSize.x/screenSize.y,1.0);
        float touchDistance=length(touchDelta);
        float ring=1.0-smoothstep(.0007,.0022,abs(touchDistance-touchRadius));
        float halo=exp(-pow((touchDistance-touchRadius)/.009,2.0));
        float center=exp(-pow(touchDistance/(touchRadius*.65),2.0));
        vec3 lime=sRGBTransferEOTF(vec4(.722,.949,.290,1.0)).rgb;
        display=mix(display,lime,touchStrength*(halo*.34+center*.10));
        display=mix(display,mix(lime,vec3(1.0),.30),ring*touchStrength);
        vec3 normal=normalize(vWorldNormal)*(gl_FrontFacing ? 1.0 : -1.0);
        vec3 viewDirection=normalize(cameraPosition-vWorldPosition);
        vec3 reflected=reflect(-viewDirection,normal);
        float grazing=1.0-max(0.0,dot(viewDirection,normal));
        // Sample fixed studio windows with the mirror ray as the screen turns.
        vec2 direction=vec2(atan(reflected.x,reflected.z),asin(clamp(reflected.y,-1.0,1.0)));
        float left=reflectedWindow(direction,vec2(-0.86,-0.13),vec2(0.19,0.11));
        float front=reflectedWindow(direction,vec2(0.11,0.07),vec2(0.11,0.083));
        float right=reflectedWindow(direction,vec2(0.91,0.044),vec2(0.21,0.12));
        float reflection=(0.19*max(max(left,front),right)+0.006*pow(grazing,3.0))*reflectionStrength;
        gl_FragColor=vec4(display+(1.0-display)*vec3(0.90,0.95,1.0)*reflection,1.0);
        #include <colorspace_fragment>
      }`
  });

  if(connectRecording)window.addEventListener('dopafit:recording-touch',({detail:{point,strength,radius}})=>{
    material.uniforms.touchPoint.value.set(...point);
    material.uniforms.touchStrength.value=strength;
    material.uniforms.touchRadius.value=radius;
    version++;redraw();
  });
  function update(rise,dock){
    material.uniforms.riseProgress.value=rise;
    material.uniforms.featureBlend.value=featureReady?THREE.MathUtils.smoothstep(dock,.20,.45):0;
    material.uniforms.reflectionStrength.value=1-.72*dock;
  }
  if(featureImage.complete)captureFeature();
  const player=connectRecording?window.DopafitAppRecording:null;
  const currentVideo=player?.videos[player.active];
  if(currentVideo?.readyState>=2)showRecording(currentVideo);
  return {material,update,get version(){return version;}};
}
