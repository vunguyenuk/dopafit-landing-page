// Build static metadata from the SEO copy and existing, user-visible FAQ source.
// Run: node scripts/update-seo.cjs (set productionUrl in assets/seo/config.json first).
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const config=JSON.parse(read('assets/seo/config.json'));
const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
let origin='';
if(config.productionUrl){
 const url=new URL(config.productionUrl);
 if(url.protocol!=='https:'||url.username||url.password||url.search||url.hash)throw Error('productionUrl must be the public HTTPS landing-page URL');
 origin=url.href.endsWith('/')?url.href:url.href+'/';
}
const absolute=p=>new URL(p,origin).href;
const id=fragment=>origin?absolute(fragment):fragment;
let page=read('index.html');
const source=read('assets/figma/landing.js');
const answerLiteral=source.match(/const answers=\[([\s\S]*?)\n  \];/);
if(!answerLiteral)throw Error('FAQ answers source not found');
const answers=vm.runInNewContext('['+answerLiteral[1]+']',Object.create(null),{timeout:100});
const rows=[2796,2800,2804,2808,2812,2816];
if(answers.length!==rows.length)throw Error('FAQ question/answer count mismatch');
const questions=rows.map(row=>{
 const match=page.match(new RegExp('data-node-id="147:'+row+'"[\\s\\S]*?<p[^>]*>([\\s\\S]*?)</p>'));
 if(!match)throw Error('FAQ question missing: '+row);
 return match[1].replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
});
const organization={'@type':'Organization','@id':id('#organization'),name:'Dopafit',email:'support@dopafit.app'};
const app={'@type':'MobileApplication','@id':id('#app'),name:'Dopafit',description:config.description,applicationCategory:'HealthApplication',operatingSystem:'iOS',availableOnDevice:'iPhone',inLanguage:'vi',publisher:{'@id':id('#organization')},featureList:['Lịch tập cá nhân hóa theo mục tiêu, thời gian và dụng cụ','500+ video hướng dẫn bài tập','Ghi lại số hiệp, số lần và mức tạ','Theo dõi tiến bộ và mức độ phục hồi của từng nhóm cơ']};
const faq={'@type':'FAQPage','@id':id('#faq'),inLanguage:'vi',mainEntity:questions.map((name,i)=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text:answers[i]}}))};
if(origin){organization.url=origin;organization.logo=absolute('assets/brand/dopafit-wordmark.svg');app.url=origin;app.image=absolute('assets/seo/share.png');}
const meta=(name,value,property=false)=>`<meta ${property?'property':'name'}="${name}" content="${esc(value)}">`;
const tags=[`<title>${esc(config.title)}</title>`,meta('description',config.description),meta('theme-color','#000000'),meta('application-name','Dopafit'),meta('robots','index, follow, max-image-preview:large'),meta('og:type','website',true),meta('og:locale','vi_VN',true),meta('og:site_name','Dopafit',true),meta('og:title',config.title,true),meta('og:description',config.description,true),meta('twitter:card','summary_large_image'),meta('twitter:title',config.title),meta('twitter:description',config.description)];
if(origin)tags.push(`<link rel="canonical" href="${esc(origin)}">`,meta('og:url',origin,true),meta('og:image',absolute('assets/seo/share.png'),true),meta('og:image:type','image/png',true),meta('og:image:width','1200',true),meta('og:image:height','630',true),meta('og:image:alt','Dopafit – Mở Dopafit là biết hôm nay tập gì',true),meta('twitter:image',absolute('assets/seo/share.png')),meta('twitter:image:alt','Dopafit – Mở Dopafit là biết hôm nay tập gì'));
tags.push('<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">','<link rel="icon" href="/assets/brand/favicon.svg" type="image/svg+xml" sizes="any">','<link rel="apple-touch-icon" href="/assets/brand/apple-touch-icon.png" sizes="180x180">',`<script type="application/ld+json" id="dopafit-structured-data">${JSON.stringify({'@context':'https://schema.org','@graph':[organization,app,faq]},null,2).replace(/</g,'\\u003c')}</script>`);
const block='<!-- seo:begin -->\n'+tags.join('\n')+'\n<!-- seo:end -->\n';
if(page.includes('<!-- seo:begin -->'))page=page.replace(/<!-- seo:begin -->[\s\S]*?<!-- seo:end -->\s*/,block);
else page=page.replace(/(<meta name="viewport"[^>]*>)[\s\S]*?(?=<link rel="stylesheet")/,'$1\n'+block);
fs.writeFileSync(path.join(root,'index.html'),page);
if(origin){
 fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${absolute('sitemap.xml')}\n`);
 fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${esc(origin)}</loc></url></urlset>\n`);
}
console.log(`SEO: ${config.title.length}-character title; ${config.description.length}-character description; ${questions.length} matching FAQs; production URL ${origin||'pending confirmation'}.`);
