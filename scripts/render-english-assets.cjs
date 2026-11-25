/* English text on the original app/Figma artwork. Coordinates, typography and
   retained source pixels: assets/en/ui-translations.json. No generated photos.
   Run after extracting the three original month textures from the calendar GLB. */
const {spawn,execFileSync}=require('node:child_process'),fs=require('node:fs/promises'),path=require('node:path');
const root=path.resolve(__dirname,'..'),profile='/private/tmp/dopafit-en-assets-'+Date.now();
const chrome=spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',['--headless','--no-first-run','--no-default-browser-check','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'});
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function run(){
 let port;for(let i=0;i<100;i++){port=await fs.readFile(profile+'/DevToolsActivePort','utf8').catch(()=>null);if(port)break;await wait(80);}
 const [target]=await fetch('http://127.0.0.1:'+parseInt(port)+'/json/list').then(r=>r.json()),ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise(r=>ws.addEventListener('open',r));
 let id=0;const pending=new Map();ws.addEventListener('message',({data})=>{const m=JSON.parse(data);if(!m.id)return;const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);});
 const send=(method,params={})=>new Promise((resolve,reject)=>{const k=++id;pending.set(k,{resolve,reject});ws.send(JSON.stringify({id:k,method,params}));});
 const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
 await send('Page.enable');await send('Page.navigate',{url:'http://127.0.0.1:8097/assets/en/'});await wait(200);
 await evaluate(`document.head.append(Object.assign(document.createElement('base'),{href:'http://127.0.0.1:8097/'}))`);
 await fs.mkdir(root+'/_reference/english-2026-11-25/rendered',{recursive:true});
 const jobs=JSON.parse(await fs.readFile(root+'/assets/en/ui-translations.json','utf8')).filter(job=>!process.env.ASSET_ONLY||job.name===process.env.ASSET_ONLY);
 for(const job of jobs){
  const data=await evaluate(`(async()=>{
   const job=${JSON.stringify(job)},image=new Image();image.src='/'+job.source;await image.decode();
   const canvas=document.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0);
   for(const p of job.patches){
    const [x,y,w,h]=p.rect;ctx.save();ctx.beginPath();ctx.rect(x,y,w,h);ctx.clip();if(p.bg==='edge'){
      const pixels=ctx.getImageData(x,y,w,h),src=ctx.getImageData(0,0,canvas.width,canvas.height);
      for(let yy=0;yy<h;yy++){
       const row=Math.min(canvas.height-1,y+yy),li=(row*canvas.width+Math.max(0,x-2))*4,ri=(row*canvas.width+Math.min(canvas.width-1,x+w+2))*4;
       for(let xx=0;xx<w;xx++){const t=xx/Math.max(1,w-1),i=(yy*w+xx)*4;for(let c=0;c<4;c++)pixels.data[i+c]=src.data[li+c]*(1-t)+src.data[ri+c]*t;}
      }ctx.putImageData(pixels,x,y);
    }else{ctx.fillStyle=p.bg;ctx.fillRect(x,y,w,h);}if(p.pill){ctx.beginPath();ctx.roundRect(x+.5,y+.5,w-1,h-1,p.pill.radius);ctx.fillStyle=p.pill.fill;ctx.fill();if(p.pill.stroke){ctx.strokeStyle=p.pill.stroke;ctx.lineWidth=1;ctx.stroke();}}ctx.textAlign=p.align;ctx.textBaseline='middle';ctx.fillStyle=p.fill;
    let size=p.size,lines;
    const layout=()=>{ctx.font=p.weight+' '+size+'px "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif';lines=[];for(const paragraph of p.text.split('\\n')){if(!paragraph){lines.push('');continue;}let line='';for(const word of paragraph.split(' ')){const test=line?line+' '+word:word;if(line&&ctx.measureText(test).width>w-(p.chevron?38:16)){lines.push(line);line=word;}else line=test;}lines.push(line);}};
    layout();while(lines.length*size*1.25>h&&size>10){size--;layout();}
    const start=y+(h-(lines.length-1)*size*1.25)/2;lines.forEach((line,i)=>ctx.fillText(line,p.align==='center'?x+w/2-(p.chevron?12:0):p.align==='right'?x+w-2:x+(p.inset??2),start+i*size*1.25));if(p.chevron){const end=p.align==='center'?x+w/2-12+ctx.measureText(lines[0]).width/2:x+2+ctx.measureText(lines[0]).width;ctx.beginPath();ctx.moveTo(end+12,y+h/2-3);ctx.lineTo(end+18,y+h/2+3);ctx.lineTo(end+24,y+h/2-3);ctx.strokeStyle=p.fill;ctx.lineWidth=size*.065;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke();}ctx.restore();
   }
   return canvas.toDataURL('image/png').split(',')[1];
  })()`);
  await fs.writeFile(root+'/_reference/english-2026-11-25/rendered/'+job.name+'.png',Buffer.from(data,'base64'));execFileSync('cwebp',['-quiet','-lossless','-m','6',root+'/_reference/english-2026-11-25/rendered/'+job.name+'.png','-o',root+'/assets/en/'+job.name+'.webp']);console.log('Rendered',job.name);
 }
 if(process.env.ASSET_ONLY){ws.close();return;}
 // The intro uses the same code-native exercise artwork as the live WebGL screen.
 const artwork=await evaluate(`(async()=>{const {loadExerciseArtwork}=await import('/assets/intro/exercise-screen.js');const a=await loadExerciseArtwork();return a.poster.toDataURL('image/png').split(',')[1]})()`);
 await fs.writeFile(root+'/_reference/english-2026-11-25/rendered/exercise-poster.png',Buffer.from(artwork,'base64'));

 for(const [name,original] of [['history','focus-history.mp4'],['native-recovery','focus-recovery-20261123.mp4'],['native-guide','focus-guide-20261123.mp4'],['native-strength','focus-strength-20261123.mp4']]){
  const duration=execFileSync('ffprobe',['-v','error','-show_entries','format=duration','-of','csv=p=0',root+'/assets/phone/recordings/'+original],{encoding:'utf8'}).trim();
  execFileSync('ffmpeg',['-y','-loglevel','error','-loop','1','-i',root+'/_reference/english-2026-11-25/rendered/'+name+'.png','-t',duration,'-vf','scale=710:1534','-r','30','-c:v','libx264','-crf','16','-pix_fmt','yuv420p','-movflags','+faststart',root+'/assets/en/focus-'+name+'.mp4']);
 }
 ws.close();
}
run().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>chrome.kill());
