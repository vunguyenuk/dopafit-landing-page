/* Typography/columns: Figma 93:3218. Quotes and titles: supplied XLSX A/K.
   No author, date, store or original star rating is present in the workbook.
   User authorized sentiment-based estimates, then requested only positive4–5 selections
   and no visible estimate labels. Keep provenance in data and the accessible rating text. */
(() => {
  function build(){
    const section=document.createElement('section');section.className='community-reviews';section.dataset.sourceNode='93:3218';section.setAttribute('aria-labelledby','community-title');
    const h=document.createElement('h2');h.id='community-title';h.dataset.sourceNode='211:1670';h.innerHTML='You are not alone<br>on this journey';section.append(h);
    const columns=document.createElement('div');columns.className='review-columns';
    [0,1].forEach(lane=>{
      const col=document.createElement('div');col.className='review-lane';col.tabIndex=0;col.setAttribute('aria-label',`Stories from people who train — column ${lane+1}`);
      const track=document.createElement('div');track.className='review-track';
      const group=document.createElement('div');group.className='review-group';
      window.DopafitReviews.filter(r=>r.estimatedRating>=4).filter((_,i)=>i%2===lane).forEach(r=>{
        const card=document.createElement('blockquote');card.className='review-card';card.dataset.sourceRow=r.sourceRow;
        if(Number.isInteger(r.estimatedRating)&&r.estimatedRating>=1&&r.estimatedRating<=5){
          const rating=document.createElement('div');rating.className='review-rating';rating.setAttribute('aria-label',`${r.estimatedRating} out of 5 stars, estimated from the review text`);
          const stars=document.createElement('span');stars.className='review-stars';stars.setAttribute('aria-hidden','true');
          const art=document.createElement('span');art.className='review-stars-art';
          const base=document.createElement('img');base.src='assets/content-2026-11-23/review-stars.svg';base.alt='';base.className='review-stars-base';
          const fill=document.createElement('span');fill.className='review-stars-fill';fill.style.clipPath=`inset(0 ${100-r.estimatedRating*20}% 0 0)`;
          const lit=base.cloneNode();lit.className='review-stars-lit';fill.append(lit);art.append(base,fill);stars.append(art);
          rating.append(stars);card.append(rating);
        }
        const title=document.createElement('h3'),body=document.createElement('p');title.textContent=r.title;body.textContent=r.text;card.append(title,body);group.append(card);
      });
      const duplicate=group.cloneNode(true);duplicate.setAttribute('aria-hidden','true');duplicate.inert=true;track.append(group,duplicate);col.append(track);columns.append(col);
      // Constant readable speed, based on actual quote heights rather than count.
      requestAnimationFrame(()=>track.style.setProperty('--review-duration',`${group.offsetHeight/24}s`));
      new ResizeObserver(()=>track.style.setProperty('--review-duration',`${group.offsetHeight/24}s`)).observe(group);
    });
    section.append(columns);
    const type=()=>{
      if(window.DopafitMobile)return;
      const scale=innerWidth/1920;
      section.style.setProperty('--review-body',`${Math.min(24,Math.max(16,20*scale))/scale}px`);
      section.style.setProperty('--review-title',`${Math.min(28,Math.max(20,24*scale))/scale}px`);
      section.style.setProperty('--review-heading',`${Math.min(64,Math.max(32,61.7*scale))/scale}px`);
    };type();addEventListener('resize',type,{passive:true});
    new IntersectionObserver(([e])=>section.classList.toggle('is-visible',e.isIntersecting)).observe(section);
    document.addEventListener('visibilitychange',()=>section.classList.toggle('is-background',document.hidden));
    return section;
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const section=build();
    if(window.DopafitMobile){document.querySelector('.m-integrations').before(section);}
    else {const canvas=document.querySelector('#design-canvas');section.classList.add('community-desktop');canvas.querySelector(".figma-source-layout").append(section);}
    const copy=document.querySelector('.tracking-copy');if(copy){const b=window.DopafitContent.cta();b.classList.add('tracking-download');copy.append(b);}
    document.querySelector('.faq-pl-left')?.append(window.DopafitContent.cta());
    document.querySelector('.m-faq')?.append(window.DopafitContent.cta());
  });
})();
