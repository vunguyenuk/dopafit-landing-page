/* Starbucks.mp4, 1920 × 1920 at 30 fps. See _reference/PHONE-MOTION-AUDIT.md.
   Rows are source frame, measured top in pixels, estimated yaw in degrees,
   and a small horizontal centering adjustment as a fraction of the phone slot. */
(() => {
  const keys=[
    [45,1831,89,-.030],[48,1704,76,-.015],[51,1596,68,-.008],
    [54,1500,60,-.004],[57,1414,53,-.002],[60,1338,46,0],
    [66,1202,35,0],[72,1088,25,0],[81,942,13,0],[90,818,4,0],
    [105,660,-4,0],[120,541,-11,0],[144,412,-20,0],
    [168,340,-26,0],[192,312,-28,0]
  ];
  const [startFrame,startTop]=keys[0], [endFrame,endTop]=keys.at(-1);
  const referenceCenterY=960,referenceFrontWidth=1344;
  const phoneTop=1,phoneWidth=.9702,phoneDepth=.08367; // Bounds of the centered kiosk glTF.
  const cameraFov=27,cameraDistance=5.1;
  function frontalBounds(height){
    const projection=height/(2*Math.tan(cameraFov*Math.PI/360)*(cameraDistance-phoneDepth));
    return {width:phoneWidth*projection,topInset:height/2-phoneTop*projection};
  }
  function slope(i,col){
    if(i===0)return (keys[1][col]-keys[0][col])/(keys[1][0]-keys[0][0]);
    if(i===keys.length-1)return 0;
    const a=(keys[i][col]-keys[i-1][col])/(keys[i][0]-keys[i-1][0]);
    const b=(keys[i+1][col]-keys[i][col])/(keys[i+1][0]-keys[i][0]);
    return a*b<=0?0:2*a*b/(a+b);
  }
  function sample(progress){
    const p=Math.max(0,Math.min(1,progress));
    const frame=startFrame+(endFrame-startFrame)*p;
    let i=0;while(i<keys.length-2&&frame>keys[i+1][0])i++;
    const a=keys[i],b=keys[i+1],span=b[0]-a[0],t=(frame-a[0])/span;
    const value=col=>(2*t*t*t-3*t*t+1)*a[col]+(t*t*t-2*t*t+t)*span*slope(i,col)+(-2*t*t*t+3*t*t)*b[col]+(t*t*t-t*t)*span*slope(i+1,col);
    const top=value(1);
    // Convert the observed top relative to eye level into model units using the frontal width.
    const eyeY=phoneTop+(top-referenceCenterY)*phoneWidth/referenceFrontWidth;
    return {y:(top-endTop)/(startTop-endTop),x:value(3),yaw:value(2)*Math.PI/180,eyeY};
  }
  window.DopafitPhoneMotion={sample,cameraFov,cameraDistance,frontalBounds};
})();
