/* Copy/asset mapping: Figma 211:1276, 211:1307, 211:1679, 235:1839.
   See _reference/content-2026-11-23/IMPLEMENTATION.md for exact source nodes. */
(() => {
  const q=id=>document.querySelector(`[data-node-id="147:${id}"]`);
  const C=window.DopafitContent={
    pain:['Đến phòng tập rồi, vẫn chưa biết bắt đầu từ đâu?','Tự hỏi hôm nay nên tập bài gì.','Không nhớ, không biết mình nên tập nhóm cơ nào.','Lo tập sai động tác, sợ bị chấn thương.'],
    features:['Biết bạn đã tập gì vào ngày nào','Bài tập thay đổi theo nhóm cơ đã phục hồi','Hướng dẫn chi tiết động tác chuẩn cho đa dạng nhóm cơ, dụng cụ tập','Thấy tiến bộ theo từng buổi tập'],
    orbit:{
      2910:['Theo dõi mức độ phục hồi của từng nhóm cơ','Bản đồ nhóm cơ cho bạn biết những nhóm cơ sẵn sàng tập luyện và nhóm cơ nào cần thêm thời gian phục hồi.'],
      2911:['Ghi lại hiệp, số lần và mức tạ dễ dàng','Với dữ liệu buổi tập trước điền sẵn, kèm đồng hồ đếm ngược tự động nhắc bạn vào hiệp tiếp theo.'],
      2912:['Thấy tiến bộ qua từng buổi tập','Với các bài đo sức mạnh theo từng nhóm cơ và theo dõi mức tạ theo thời gian.'],
      2913:['500+ video hướng dẫn','Giúp bạn tập đúng động tác, tối ưu cơ bắp và bảo vệ khớp tối đa.']
    },
    screens:['assets/app-captures-2026-11-16/21-lich-thang.webp','assets/content-2026-11-23/native-recovery.webp','assets/content-2026-11-23/native-guide.webp','assets/content-2026-11-23/native-strength.webp'],
    fan:['Squat với thanh tạ phía trước','Cuốn tay với thanh tạ','Đẩy ngực với tạ đơn','Cử giật với hai tạ đơn','Cuốn tạ đơn khi ngồi','Ép vai sau với máy']
  };
  const copy={2750:'500+ bài tập cho mọi mục tiêu và nhóm cơ trong một ứng dụng',2851:'Lộ trình tập luyện dành riêng cho bạn',2852:'Theo dõi chuyên sâu, bức phá từng buổi tập',2853:'Sẵn sàng tập mọi lúc mọi nơi',2854:'Bắt đầu tập luyện với Dopafit hôm nay'};
  Object.entries(copy).forEach(([id,text])=>q(id).textContent=text);
  q(2853).innerHTML='<span>Sẵn sàng tập</span> <span>mọi lúc mọi nơi</span>';
  q(2850).textContent=C.pain.join(' ');q(2850).dataset.lines=JSON.stringify(C.pain);
  [2777,2793,2789,2785].forEach((id,i)=>q(id).textContent=C.features[i]);
  q(2778).remove();
  Object.entries(C.orbit).forEach(([id,[title,body]])=>{const n=q(id);n.replaceChildren();const h=document.createElement('strong'),p=document.createElement('span');h.className='orbit-feature-title';h.textContent=title;p.className='orbit-feature-body';p.textContent=body;n.append(h,p);n.style.height='auto';});
  q(2917).querySelector('img').alt='Sức mạnh tổng — một màn hình app cuộn xuống biểu đồ';
  q(2917).querySelector('img').src='assets/orbit-ui/strength-reference.webp';
  const cta=window.DopafitContent.cta=()=>{const b=document.createElement('button');b.type='button';b.className='content-download';b.textContent='Tải ứng dụng ngay';b.addEventListener('click',()=>document.querySelector('#download-dialog').showModal());return b;};
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
