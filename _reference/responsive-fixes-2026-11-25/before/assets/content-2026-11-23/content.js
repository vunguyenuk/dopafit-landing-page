/* Copy/asset mapping: Figma 211:1276, 211:1307, 211:1679, 235:1839.
   See _reference/content-2026-11-23/IMPLEMENTATION.md for exact source nodes. */
(() => {
  const q=id=>document.querySelector(`[data-node-id="147:${id}"]`);
  const C=window.DopafitContent={
    pain:['At the gym, but not sure where to start?','Wondering what to train today.','Unsure which muscle group to train next.','Worried about your form or getting injured.'],
    features:['Know what you trained and when','Workouts adapt to your muscle recovery','Clear exercise guides for every muscle and piece of equipment','See progress with every workout'],
    orbit:{
      2910:['Track recovery for every muscle group','Your muscle map shows what is ready to train and what needs more time to recover.'],
      2911:['Log sets, reps and weights with ease','Your previous workout is filled in for you, with a rest timer that tells you when to start the next set.'],
      2912:['See progress with every workout','Measure strength by muscle group and track the weights you lift over time.'],
      2913:['500+ exercise videos','Learn proper form, train your muscles effectively and take care of your joints.']
    },
    screens:['assets/en/calendar-screen.webp','assets/en/native-recovery.webp','assets/en/native-guide.webp','assets/en/native-strength.webp'],
    fan:['Barbell front squat','Barbell curl','Dumbbell bench press','Double dumbbell snatch','Seated dumbbell curl','Reverse machine fly']
  };
  const copy={2750:'500+ exercises for every goal and muscle group, in one app',2851:'A training plan built for you',2852:'Track deeper. Go further.',2853:'Ready to train, anytime, anywhere',2854:'Start training with Dopafit today'};
  Object.entries(copy).forEach(([id,text])=>q(id).textContent=text);
  q(2853).innerHTML='<span>Ready to train,</span> <span>anytime, anywhere</span>';
  q(2850).textContent=C.pain.join(' ');q(2850).dataset.lines=JSON.stringify(C.pain);
  [2777,2793,2789,2785].forEach((id,i)=>q(id).textContent=C.features[i]);
  q(2778).remove();
  Object.entries(C.orbit).forEach(([id,[title,body]])=>{const n=q(id);n.replaceChildren();const h=document.createElement('strong'),p=document.createElement('span');h.className='orbit-feature-title';h.textContent=title;p.className='orbit-feature-body';p.textContent=body;n.append(h,p);n.style.height='auto';});
  q(2917).querySelector('img').alt='Total strength — scroll within the app to see your progress chart';
  q(2917).querySelector('img').src='assets/en/strength-reference.webp';
  const cta=window.DopafitContent.cta=()=>{const b=document.createElement('button');b.type='button';b.className='content-download';b.textContent='Download the app';b.addEventListener('click',()=>document.querySelector('#download-dialog').showModal());return b;};
  // Keep the imported canvas' original vertical coordinates stable when inserting
  // the explicitly requested review section. Freeze only top-level absolute slots.
  if(innerWidth>600){
    const canvas=document.querySelector('#design-canvas'),root=canvas.querySelector('.figma-source-layout'),delta=1420,cut=9250;
    const nodes=[...canvas.querySelectorAll('*')].filter(n=>n.offsetParent===root&&getComputedStyle(n).position==='absolute'&&n.offsetWidth&&n.offsetHeight);
    const slots=nodes.map(n=>({n,top:n.offsetTop,height:n.offsetHeight,bottom:getComputedStyle(n).bottom}));
    slots.forEach(({n,top,height,bottom})=>{n.style.top=`${top+(top>=cut?delta:0)}px`;if(bottom!=='auto'){n.style.bottom='auto';n.style.height=`${height}px`;}});
    root.style.height=`${root.offsetHeight+delta}px`;canvas.style.height=`${canvas.offsetHeight+delta}px`;
  }
})();
