/* Integrates the unmodified captured Chande title script with Dopafit's zoomed canvas.
   Glyph masks constrain Chande's existing color layers to the transparent letter shapes. */
(() => {
  // Dopafit primary from the supplied Figma layout and dev --lime token.
  // User-requested brand override; keep the captured Chande files unchanged.
  window.CHANDE_SETTINGS['titlefx.accent']='#b8f24a';
  // Shorter Vietnamese heading / dark canvas: expose a broader native transition
  // band and a readable unlit state. Chande's ramp, easing and scroll clock stay intact.
  window.CHANDE_SETTINGS['titlefx.band']=.28;
  window.CHANDE_SETTINGS['titlefx.baseAlpha']=.16;
  window.CHANDE_SETTINGS['titlefx.ditherSize']=3;
  const heading=document.querySelector('[data-node-id="147:2851"]');
  const title=document.createElement('span');
  title.className='dopafit-chande-title';
  title.textContent=heading.textContent;
  heading.replaceChildren(title);
  if(!document.documentElement.classList.contains('motion-off'))title.classList.add('hs-about__statement');

  function size(){
    const scale=document.documentElement.clientWidth/1920;
    const style=getComputedStyle(heading);
    title.style.zoom=String(1/scale);
    title.style.width=`${heading.clientWidth*scale}px`;
    title.style.fontSize=`${parseFloat(style.fontSize)*scale}px`;
  }
  size();
  addEventListener('resize',size,{passive:true});
  addEventListener('dopafit:typography',size);

  function maskLayers(){
    const words=[...title.querySelectorAll('.tfx-w')];
    if(!words.length)return;
    const style=getComputedStyle(title);
    const dpr=Math.min(devicePixelRatio||1,2);
    const textCanvas=document.createElement('canvas');
    const context=textCanvas.getContext('2d');
    const rectangles=words.map(word=>({word,rect:word.getBoundingClientRect()}));
    for(const layer of title.querySelectorAll('.tfx-ln')){
      if(layer.dataset.glyphMask)continue;
      const rect=layer.getBoundingClientRect();
      textCanvas.width=Math.ceil(rect.width*dpr);
      textCanvas.height=Math.ceil(rect.height*dpr);
      context.scale(dpr,dpr);
      context.font=`${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      // Match the current heading's variable width axis as well as its family.
      // Canvas uses stretch keywords; computed CSS may expose a percentage.
      const stretchPercent=parseFloat(style.fontStretch);
      if('fontStretch' in context)context.fontStretch=Number.isFinite(stretchPercent)?(stretchPercent>=200?'ultra-expanded':stretchPercent>=150?'extra-expanded':stretchPercent>=125?'expanded':stretchPercent>100?'semi-expanded':stretchPercent<=75?'condensed':stretchPercent<100?'semi-condensed':'normal'):style.fontStretch;
      context.fillStyle='white';
      context.letterSpacing=style.letterSpacing;
      context.fontKerning=style.fontKerning;
      context.textRendering=style.textRendering;
      for(const {word,rect:wordRect} of rectangles){
        const metrics=context.measureText(word.textContent);
        const ascent=metrics.fontBoundingBoxAscent;
        const descent=metrics.fontBoundingBoxDescent;
        const baseline=wordRect.top+(wordRect.height-ascent-descent)/2+ascent;
        context.fillText(word.textContent,wordRect.left-rect.left,baseline-rect.top);
      }
      layer.style.maskImage=`url(${textCanvas.toDataURL()})`;
      layer.style.maskSize='100% 100%';
      layer.style.maskRepeat='no-repeat';
      layer.dataset.glyphMask='true';
    }
    // Keep the native text for layout/accessibility; paint glyphs only once.
    // A white text copy under the antialiased mask leaves a visible white outline.
    title.classList.add('tfx-glyphs-ready');
  }
  new MutationObserver(maskLayers).observe(title,{childList:true});
  // Render native glyphs after all source sweeps finish, avoiding raster seams
  // on the wide face. Reverse scrolling returns to the same Chande layers.
  new MutationObserver(()=>{
    const layers=[...title.querySelectorAll('.tfx-ln')];
    const complete=layers.length>0&&layers.every(layer=>{
      const band=layer.children[1];
      return band&&new DOMMatrix(band.style.transform||'none').m41>=layer.offsetWidth-1;
    });
    title.classList.toggle('tfx-complete',complete);
  }).observe(title,{subtree:true,attributes:true,attributeFilter:['style']});
})();
