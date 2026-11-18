const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-KU7AozX5.js","assets/is-plan-event-enabled-DFXGTgBz.js","assets/index-CVIUfWLV.js"])))=>i.map(i=>d[i]);
(function(){try{var n=typeof window<"u"?window:typeof is<"u"?is:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"dc2ec5de94947ea5de6520894853f04c35a164ba"},n._sentryModuleMetadata=n._sentryModuleMetadata||{},n._sentryModuleMetadata[new n.Error().stack]=(function(t){for(var i=1;i<arguments.length;i++){var r=arguments[i];if(r!=null)for(var s in r)r.hasOwnProperty(s)&&(t[s]=r[s])}return t})({},n._sentryModuleMetadata[new n.Error().stack],{"_sentryBundlerPluginAppKey:anyone-web":!0});var e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="ad2aac8c-bc8d-460f-a277-c94e430ed78e",n._sentryDebugIdIdentifier="sentry-dbid-ad2aac8c-bc8d-460f-a277-c94e430ed78e")}catch{}})();(globalThis.__zod_globalConfig??={}).jitless=!0;(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const qp="modulepreload",jp=function(n){return"/"+n},nu={},rn=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");r=o(t.map(l=>{if(l=jp(l),l in nu)return;nu[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":qp,u||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((d,m)=>{f.addEventListener("load",d),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var Zp=class extends Error{constructor(n,e){super(n,e),this.name="BetterAuthError",this.message=n,this.stack=""}};function Yp(n){return{success:!1,error:`You are not allowed to access resource: ${n}`}}function Kp(n){return{success:!1,error:`unauthorized to access resource "${n}"`}}function iu(n){return n==="OR"?"OR":"AND"}function ru(n){return Array.isArray(n)}function Jp(n){if(ru(n))return{actions:n,connector:"AND"};if(!n||typeof n!="object")throw new Zp("Invalid access control request");const{actions:e,connector:t}=n;return ru(e)?{actions:e,connector:iu(t)}:{actions:[],connector:iu(t)}}function su(n,e){return typeof e=="string"&&n.includes(e)}function Qp(n,{actions:e,connector:t}){return e.length===0?!1:t==="OR"?e.some(i=>su(n,i)):e.every(i=>su(n,i))}function em(n){return{authorize(e,t="AND"){let i=!1;for(const[r,s]of Object.entries(e)){const o=n[r];if(!o){if(t==="AND")return Yp(r);continue}const a=Qp(o,Jp(s));if(a&&(i=!0),a&&t==="OR")return{success:!0};if(!a&&t==="AND")return Kp(r)}return i?{success:!0}:{success:!1,error:"Not authorized"}},statements:n}}function tm(n){return{newRole(e){return em(e)},statements:n}}var It=(n=>(n.Owner="owner",n.Admin="admin",n.Member="member",n))(It||{});const nm=["owner","admin","member"];function TT(n){return nm.some(e=>e===n)}const im=["everyone","admins","owners","disabled"],rm={everyone:[It.Owner,It.Admin,It.Member],admins:[It.Owner,It.Admin],owners:[It.Owner],disabled:[]},AT={providers:{},models:{}};function sm(n){return im.some(e=>e===n)}function ou(n){return Object.keys(n.providers).length===0&&Object.keys(n.models).length===0}function rl(n){const e=n.indexOf("/");return e===-1?n:n.slice(0,e)}function om({modelId:n,access:e}){return e.models[n]??e.providers[rl(n)]??"everyone"}function RT({modelId:n,access:e,viewerRole:t}){const i=om({modelId:n,access:e});return t===null?i==="everyone":rm[i].includes(t)}function CT({access:n,change:e}){const t={providers:{...n.providers},models:{...n.models}};e.scope==="provider"?e.level==="everyone"?delete t.providers[e.target]:t.providers[e.target]=e.level:t.models[e.target]=e.level;for(const[i,r]of Object.entries(t.models)){const s=t.providers[rl(i)]??"everyone";r===s&&delete t.models[i]}return t}function au(n){return Array.isArray(n)&&n.every(e=>typeof e=="string")}function am(n){if(!("disabledModelIds"in n)||!("disabledProviders"in n))return null;const{disabledModelIds:e,disabledProviders:t}=n;return!au(e)||!au(t)?null:{disabledModelIds:e,disabledProviders:t}}function cm(n){const e={providers:{},models:{}};for(const t of n.disabledProviders)e.providers[t]="disabled";for(const t of n.disabledModelIds)e.providers[rl(t)]!=="disabled"&&(e.models[t]="disabled");return e}function cu(n){if(typeof n!="object"||n===null||Array.isArray(n))return{entries:{},dropped:[]};const e={},t=[];for(const[i,r]of Object.entries(n))i.length!==0&&(sm(r)?e[i]=r:t.push(i));return{entries:e,dropped:t}}function PT(n){return lm(n).access}function lm(n){if(typeof n!="object"||n===null)return{access:null,droppedKeys:[]};const e=am(n);if(e){const s=cm(e);return{access:ou(s)?null:s,droppedKeys:[]}}const t=cu("providers"in n?n.providers:null),i=cu("models"in n?n.models:null),r={providers:t.entries,models:i.entries};return{access:ou(r)?null:r,droppedKeys:[...t.dropped,...i.dropped]}}const um=["everyone","admins","disabled"],hm={everyone:[It.Owner,It.Admin,It.Member],admins:[It.Owner,It.Admin],disabled:[]},IT=["model-selection","compute","external-access","email","text","slack"],LT={},fm={level:"everyone",teamIds:[],userIds:[]};function lu(n){return um.some(e=>e===n)}function Vf({level:n,teamIds:e,userIds:t}){return n==="everyone"?{level:n,teamIds:[],userIds:[]}:{level:n,teamIds:[...new Set(e)],userIds:[...new Set(t)]}}function dm({controlId:n,access:e}){return e[n]??fm}function DT({controlId:n,access:e,viewerRole:t,viewerUserId:i,viewerTeamIds:r}){const s=dm({controlId:n,access:e});return i!==null&&s.userIds.includes(i)||r.some(o=>s.teamIds.includes(o))?!0:t===null?s.level==="everyone":hm[s.level].includes(t)}function NT({access:n,controlId:e,rule:t}){const i={...n},r=Vf(t);return r.level==="everyone"?delete i[e]:i[e]=r,i}function UT(n){const e={};for(const[t,i]of Object.entries(n)){if(i.teamIds.length===0&&i.userIds.length===0){e[t]=i.level;continue}e[t]={level:i.level,...i.teamIds.length>0?{teamIds:[...i.teamIds]}:{},...i.userIds.length>0?{userIds:[...i.userIds]}:{}}}return e}function OT(n){return n===null?"":JSON.stringify(Object.entries(n).map(([e,t])=>({controlId:e,level:t.level,teamIds:[...t.teamIds].sort(),userIds:[...t.userIds].sort()})).sort((e,t)=>e.controlId.localeCompare(t.controlId)))}function FT(n){return n.teamIds.length+n.userIds.length}function pm(n){return Object.keys(n).length===0}function mm(n){if(lu(n))return{level:n,teamIds:[],userIds:[]};if(typeof n!="object"||n===null||Array.isArray(n)||!("level"in n))return null;const{level:e,teamIds:t,userIds:i}=n;return lu(e)?Vf({level:e,teamIds:uu(t),userIds:uu(i)}):null}function uu(n){return Array.isArray(n)?n.filter(e=>typeof e=="string"&&e!==""):[]}function vm(n){if(typeof n!="object"||n===null||Array.isArray(n))return{access:null,droppedKeys:[]};const e={},t=[];for(const[i,r]of Object.entries(n)){if(i.length===0)continue;const s=mm(r);s===null?t.push(i):e[i]=s}return{access:pm(e)?null:e,droppedKeys:t}}function zT(n){return vm(n).access}const gm={organization:["update","delete"],member:["create","update","delete"],invitation:["create","cancel"],team:["create","update","delete"],ac:["create","read","update","delete"]},sl=tm(gm),_m=sl.newRole({organization:["update","delete"],member:["create","update","delete"],invitation:["create","cancel"],team:["create","update","delete"],ac:["create","read","update","delete"]}),ym=sl.newRole({organization:["update"],member:["create","update","delete"],invitation:["create","cancel"],team:["create","update","delete"],ac:["create","read","update","delete"]}),xm=sl.newRole({organization:[],member:[],invitation:["create"],team:[],ac:["read"]}),Hf={owner:_m,admin:ym,member:xm};It.Owner+"",It.Admin+"",It.Member+"";function Mm(n){return n in Hf}function Sm({role:n,permissions:e}){return Mm(n)?Hf[n].authorize(e).success:!1}function BT({role:n}){return Sm({role:n,permissions:{organization:["update"]}})}const kT="no active organization",VT="no active team",HT="not a member of the requested workspace",GT="x-workspace-id",WT="x-posthog-session-id",XT="https://jobs.ashbyhq.com/anything",Ur={home:"/",billing:"/settings/billing",billingPlans:"/settings/billing/plans",billingCredit:"/settings/billing/plans/credit",team:"/settings/workspace"},$T={billingAction:"action",checkoutSource:"source"},qT={updateCard:"update-card",autoTopUp:"auto-top-up"},jT={cli:"cli",slack:"slack",imessage:"imessage"},ZT={emailDomains:"email-domains",agentModels:"agent-models"};function YT(n){return typeof n=="string"&&(n==="NO_ACTIVE_ORGANIZATION"||n==="NO_ACTIVE_TEAM")}var ec=function(n,e){return ec=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},ec(n,e)};function Ft(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ec(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Q=function(){return Q=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Q.apply(this,arguments)};function Gf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function we(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(h){o(h)}}function c(u){try{l(i.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Te(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(u){l=[6,u],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Mt(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}const hu={home:Ur.home,login:"/login",signup:"/signup",modelSettings:"/settings/models",admin:"/admin",office:"/office",map:"/map",adminTab:"/admin/$tab",adminEvalRun:"/admin/evals/$runId",onboarding:"/onboarding",v2Home:Ur.home,v2Templates:"/templates",v2TemplatesFromSkydive:"/templates/from-skydive",v2TemplatesMarketplace:"/templates/marketplace",v2TemplateListing:"/templates/$templateId",v2TemplateSetup:"/templates/$templateId/setup",v2Agents:"/settings/agents",v2Routines:"/settings/routines",v2RoutineDetail:"/settings/routines/$routineId",v2Account:"/settings/account",v2Integrations:"/settings/integrations",v2Workspace:"/settings/workspace",v2Billing:Ur.billing,v2BillingPlans:Ur.billingPlans,v2BillingCredit:Ur.billingCredit,v2BillingPlanCheckout:"/settings/billing/plans/$planKey",v2BillingInvoices:"/settings/billing/invoices",v2WorkspaceAuditLogs:"/settings/workspace/audit-logs",v2Conversation:"/c/$conversationId",pricing:"/pricing",forgotPassword:"/forgot-password",resetPassword:"/reset-password",tos:"/tos",privacy:"/privacy"};function fu(n){const e=Object.values(n).filter(i=>typeof i=="number");return Object.entries(n).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function KT(n,e="|"){return n.map(t=>Lm(t)).join(e)}function bm(n,e){return typeof e=="bigint"?e.toString():e}class Em{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function zo(n){return new Em(n)}function wm(n){return n==null}function ol(n){const e=n.startsWith("^")?1:0,t=n.endsWith("$")?n.length-1:n.length;return n.slice(e,t)}function Tm(n,e){const t=n/e,i=Math.round(t),r=4*Number.EPSILON*Math.max(Math.abs(t),1);return Math.abs(t-i)<r?0:t-i}function Bo(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!0,configurable:!0})}function Wf(n){const e=Object.getOwnPropertyDescriptor(n,"shape");return e?.get?e.get.raw:e?.value}function Ln(n){return Wf(n._zod.def)??n._zod.def.shape}function Xf(n,e,t){Object.defineProperty(n,e,{get(){const i=t();return Bo(this,e,i),i},enumerable:!0,configurable:!0})}function $f(n,e,t){e in n?Bo(n,e,t):n[e]=t}function Li(n,e,t,i){const r=Ln(e);for(const s of t){const o=Object.getOwnPropertyDescriptor(r,s);o.enumerable&&(o.get?Xf(n,s,()=>{const a=e._zod.def.shape[s];return i?i(a,s):a}):$f(n,s,i?i(o.value,s):o.value))}}function Am(n,e){for(const t of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,t);i.enumerable&&(i.get?Xf(n,t,()=>e[t]):$f(n,t,i.value))}}function zi(...n){const e={};for(const t of n){const i=Object.getOwnPropertyDescriptors(t);Object.assign(e,i)}return Object.defineProperties({},e)}function Rm(n){return JSON.stringify(n)}function Cm(n){return n.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const qf="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function ls(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const Pm=zo(()=>{if(Dn.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const n=Function;return new n(""),!0}catch{return!1}});function _r(n){if(ls(n)===!1)return!1;const e=n.constructor;if(e===void 0||typeof e!="function")return!0;const t=e.prototype;return!(ls(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function JT(n){return _r(n)?{...n}:Array.isArray(n)?[...n]:n instanceof Map?new Map(n):n instanceof Set?new Set(n):n}const Im=new Set(["string","number","symbol"]);function yr(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ii(n,e,t){const i=new n._zod.constr(e??n._zod.def);return(!e||t?.parent)&&(i._zod.parent=n),i}function Le(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function Lm(n){return typeof n=="bigint"?n.toString()+"n":typeof n=="string"?`"${n}"`:`${n}`}function Dm(n){return Object.keys(n).filter(e=>n[e]._zod.optin!==void 0&&n[e]._zod.optout==="optional")}const Nm={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},QT={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function e1(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return Li(s,n,ko(n,e)),ii(n,zi(t,{shape:s,checks:[]}))}function ko(n,e){const t=Ln(n),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(t,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function t1(n,e){const t=n._zod.def,i=t.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(ko(n,e)),o={};return Li(o,n,Reflect.ownKeys(Ln(n)).filter(a=>!s.has(a))),ii(n,zi(t,{shape:o,checks:[]}))}function n1(n,e){if(!_r(e))throw new Error("Invalid input to extend: expected a plain object");const t=n._zod.def.checks;if(t&&t.length>0){const r=Ln(n);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return ii(n,zi(n._zod.def,{shape:jf(n,e)}))}function jf(n,e){const t={};return Li(t,n,Reflect.ownKeys(Ln(n))),Am(t,e),t}function i1(n,e){if(!_r(e))throw new Error("Invalid input to safeExtend: expected a plain object");return ii(n,zi(n._zod.def,{shape:jf(n,e)}))}function r1(n,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(n._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const t={};Li(t,n,Reflect.ownKeys(Ln(n))),Li(t,e,Reflect.ownKeys(Ln(e)));const i=zi(n._zod.def,{shape:t,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return ii(n,i)}function s1(n,e,t,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const a=t?new Set(ko(e,t)):void 0,c={};return Li(c,e,Reflect.ownKeys(Ln(e)),n&&((l,u)=>a&&!a.has(u)?l:new n({type:"optional",innerType:l}))),ii(e,zi(e._zod.def,{shape:c,checks:[]}))}function o1(n,e,t){const i=t?new Set(ko(e,t)):void 0,r={};return Li(r,e,Reflect.ownKeys(Ln(e)),(s,o)=>i&&!i.has(o)?s:new n({type:"nonoptional",innerType:s})),ii(e,zi(e._zod.def,{shape:r}))}function An(n,e=0){if(n.aborted===!0)return!0;for(let t=e;t<n.issues.length;t++)if(n.issues[t]?.continue!==!0)return!0;return!1}function Um(n,e=0){if(n.aborted===!0)return!0;for(let t=e;t<n.issues.length;t++)if(n.issues[t]?.continue===!1)return!0;return!1}function Ti(n,e){return e.map(t=>{var i;return(i=t).path??(i.path=[]),t.path.unshift(n),t})}function Or(n){return typeof n=="string"?n:n?.message}function du(n){const e=[];for(const t of n??[]){const i=t._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,t])}return e}function tc(n,e,t){var i;for(let r=e;r<n.length;r++)(i=n[r]).schema??(i.schema=t)}function Jn(n,e,t){var i;const r=n.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=n).schema??(i.schema=n.inst):n.schema=n.inst);const s=n.schema!==n.inst?n.schema?._zod.def?.error:void 0,o=n.message?n.message:Or(n.inst?._zod.def?.error?.(n))??Or(s?.(n))??Or(e?.error?.(n))??Or(t.customError?.(n))??Or(t.localeError?.(n))??"Invalid input",a={};for(const c of Object.keys(n))c==="inst"||c==="schema"||c==="continue"||c==="input"||c==="__proto__"||(a[c]=n[c]);return a.path??(a.path=[]),a.message=o,e?.reportInput&&(a.input=n.input),a}const Om=/[\uD800-\uDBFF]/;function al(n){const e=n.length;if(!Om.test(n))return e;let t=e;for(let i=0;i<e-1;i++)(n.charCodeAt(i)&64512)===55296&&(n.charCodeAt(i+1)&64512)===56320&&(t--,i++);return t}function cl(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function a1(n){const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"nan":"number";case"object":{if(n===null)return"null";if(Array.isArray(n))return"array";const t=n;if(t&&Object.getPrototypeOf(t)!==Object.prototype&&"constructor"in t&&t.constructor)return t.constructor.name}}return e}function nc(...n){const[e,t,i]=n;return typeof e=="string"?{message:e,code:"custom",input:t,inst:i}:{...e}}function Fm(n,e){for(const t in e){const i=Object.getOwnPropertyDescriptor(e,t);i.get?Object.defineProperty(n,t,{...i,enumerable:!1}):zm(n,t,i.value)}}function Di(n,e,t,i=!0){return Object.defineProperty(n,e,{configurable:!0,writable:!0,enumerable:i,value:t}),t}function Zf(n,e,t){return Di(n,e,t,!1)}function c1(n,e){for(const t in n){const i=n[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get(){return Di(this,t,i(this))},set(r){Di(this,t,r)}})}return e}function zm(n,e,t){Object.defineProperty(n,e,{configurable:!0,get(){return this==null?t:Di(this,e,t.bind(this))},set(i){Di(this,e,i)}})}function Bm(n,e){const t=Object.getPrototypeOf(n);return e in t?void 0:t}let sa,$n=!1;const km={configurable:!0,get(){$n=!0}};function tt(n,e,t){const i=Object.getPrototypeOf(n._zod);if(e in i&&sa!==n._zod){sa=void 0;return}sa=n._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,km);const r=$n;$n=!1;try{const s=t(this);return $n?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),$n=$n||r,s}catch(s){throw delete this[e],$n=$n||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function Vm(n,e,t,i){const r=Bm(n,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=t(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const Hm="~constantCatch";function l1(n){const e=()=>n;return e[Hm]=!0,e}var pu;const oa={value:void 0,enumerable:!1};let mu="captureStackTrace"in Error?Error:null;function Gm(n){const e=mu;if(e){const t=e.stackTraceLimit;if(typeof t=="number"){try{e.stackTraceLimit=0}catch{return mu=null,new n}try{return new n}finally{e.stackTraceLimit=t}}}return new n}function ae(n,e,t,i){const r={};function s(f){this.def=f,this.constr=h,this.traits=new Set}s.prototype=r;const o=t,a=o&&new WeakSet;function c(f,d){if(f._zod){if(f._zod.traits.has(n))return}else{oa.value=new s(d);try{Object.defineProperty(f,"_zod",oa)}finally{oa.value=void 0}}if(f._zod.traits.add(n),e(f,d),a){const g=Object.getPrototypeOf(f),v=f._zod.constr.prototype;let p=g;for(;p&&p!==v;)p=Object.getPrototypeOf(p);const x=p??g;a.has(x)||(a.add(x),Fm(x,o))}const m=h.prototype;for(const g in m)Object.prototype.hasOwnProperty.call(m,g)&&(g in f||(f[g]=m[g].bind(f)))}const l=i?.Parent??Object;class u extends l{}Object.defineProperty(u,"name",{value:n});function h(f){const d=i?.Parent?Gm(u):this;c(d,f);const m=d._zod.deferred;if(m){for(const v of m)v();d._zod.deferred=void 0}const g=globalThis.__zod_globalConfig?.postProcessor;return g&&g(d),d}return Object.defineProperty(h,"init",{value:c}),Object.defineProperty(h,Symbol.hasInstance,{value:f=>i?.Parent&&f instanceof i.Parent?!0:f?._zod?.traits?.has(n)}),Object.defineProperty(h,"name",{value:n}),h}class Pi extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Wm extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(pu=globalThis).__zod_globalConfig??(pu.__zod_globalConfig={});const Dn=globalThis.__zod_globalConfig;function Qn(n){return n&&Object.assign(Dn,n),Dn}function Xm(){const n=this._zod;return n.message??(n.message=JSON.stringify(n.def,bm,2)),n.message}function $m(n){this._zod.message=n}const qm={get:Xm,set:$m,enumerable:!0,configurable:!0},aa={value:void 0,enumerable:!1},vu=new WeakSet([Object.prototype,Error.prototype]),Yf=(n,e)=>{n.name="$ZodError",aa.value=e,Object.defineProperty(n,"issues",aa),aa.value=void 0,Object.defineProperty(n,"message",qm);const t=Object.getPrototypeOf(n);vu.has(t)||(vu.add(t),Object.defineProperty(t,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},u1=ae("$ZodError",Yf),Vo=ae("$ZodError",Yf,void 0,{Parent:Error});function jm(n,e,t){return Object.prototype.hasOwnProperty.call(n,e)||(e==="__proto__"?Object.defineProperty(n,e,{value:t(),writable:!0,enumerable:!0,configurable:!0}):n[e]=t()),n[e]}function h1(n,e=t=>t.message){const t={},i=[];for(const r of n.issues)r.path.length>0?jm(t,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:t}}function f1(n,e=t=>t.message){const t={_errors:[]},i=(r,s=[])=>{for(const o of r.issues)if(o.code==="invalid_union"&&o.errors.length)o.errors.map(a=>i({issues:a},[...s,...o.path]));else if(o.code==="invalid_key")i({issues:o.issues},[...s,...o.path]);else if(o.code==="invalid_element")i({issues:o.issues},[...s,...o.path]);else{const a=[...s,...o.path];if(a.length===0)t._errors.push(e(o));else{let c=t,l=0;for(;l<a.length;){const u=a[l],h=l===a.length-1;if(u==="_errors"){h&&c._errors.push(e(o)),l++;continue}Object.prototype.hasOwnProperty.call(c,u)||Object.defineProperty(c,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const f=c[u];h&&f._errors.push(e(o)),c=f,l++}}}};return i(n),t}function Ho(n,e){return{callee:e?.callee??n,Err:e?.Err}}const ll=n=>{const e=(t,i,r,s)=>{const o=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:i,issues:[]},o);if(a instanceof Promise)throw new Pi;if(a.issues.length){const c=new(s?.Err??n)(a.issues.map(l=>Jn(l,o,Qn())));throw qf(c,s?.callee??e),c}return a.value};return e},Zm=ll(Vo),ul=n=>{const e=async(t,i,r,s)=>{const o=r?{...r,async:!0}:{async:!0};let a=t._zod.run({value:i,issues:[]},o);if(a instanceof Promise&&(a=await a),a.issues.length){const c=new(s?.Err??n)(a.issues.map(l=>Jn(l,o,Qn())));throw qf(c,s?.callee??e),c}return a.value};return e},Ym=ul(Vo),hl=n=>(e,t,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:t,issues:[]},r);if(s instanceof Promise)throw new Pi;return s.issues.length?Kf(n,s.issues,r):{success:!0,data:s.value}},Km=hl(Vo);function Kf(n,e,t){let i;return{success:!1,get error(){return i||(i=new n(e.map(r=>Jn(r,t,Qn()))),e=void 0,t=void 0),i},set error(r){i=r,e=void 0,t=void 0}}}const fl=n=>async(e,t,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:t,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?Kf(n,s.issues,r):{success:!0,data:s.value}},Jm=fl(Vo),Qm=Symbol.for("zod.compile.invalid"),ev=Symbol.for("zod.compile.fallback"),d1=((n,e,t)=>{const i=n._zod.bag.validator;if(i!==void 0){if(i(e)!==Qm)return!0;if(i.definite===!0&&t===void 0)return!1}return tv(n,e,t)});function tv(n,e,t){const i=t?{...t,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=n._zod.bag.fallbackRun;let s;if(r?(i[ev]=!0,s=r({value:e,issues:[]},i)):s=n._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new Pi;return s.issues.length===0}const p1=async(n,e,t)=>{const i=t?{...t,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=n._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},m1=n=>{const e=ll(n),t=(i,r,s,o)=>{const a=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,a,Ho(t,o))};return t},v1=n=>{const e=ll(n),t=(i,r,s,o)=>e(i,r,s,Ho(t,o));return t},g1=n=>{const e=ul(n),t=async(i,r,s,o)=>{const a=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,a,Ho(t,o))};return t},_1=n=>{const e=ul(n),t=async(i,r,s,o)=>await e(i,r,s,Ho(t,o));return t},y1=n=>(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return hl(n)(e,t,r)},x1=n=>(e,t,i)=>hl(n)(e,t,i),M1=n=>async(e,t,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return fl(n)(e,t,r)},S1=n=>async(e,t,i)=>fl(n)(e,t,i),nv=/^[cC][0-9a-z]{6,}$/,iv=/^[0-9a-z]+$/,rv=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,sv=/^[0-9a-vA-V]{20}$/,ov=/^[A-Za-z0-9]{27}$/,av=/^[a-zA-Z0-9_-]{21}$/;function cv(n){return new RegExp(`^[a-zA-Z0-9_-]{${n}}$`)}const lv=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,uv=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,gu=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,hv=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,fv="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function dv(){return new RegExp(fv,"u")}const pv=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,mv=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,vv=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,gv=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,b1=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,E1=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,_v=/^https?$/,yv=/^\+[1-9]\d{6,14}$/,Jf="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function xv(n){return new RegExp(`^${n}$`)}const Mv=xv(Jf);function ic(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:n.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Sv(n){return new RegExp(`^${ic(n)}$`)}function bv(n){const e=["Z"];n.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const t=`${ic({precision:n.precision,seconds:!0})}(?:${e.join("|")})`,i=n.local?`${t}|${ic({precision:n.precision})}`:t;return new RegExp(`^${Jf}T(?:${i})$`)}const Ev=/^[\s\S]{0,}$/,w1=/^-?\d+$/,Qf=/^-?\d+(?:\.\d+)?$/,wv=/^(?:true|false)$/i,Tv=/^[^A-Z]*$/,Av=/^[^a-z]*$/,Lt=ae("$ZodCheck",(n,e)=>{var t;n._zod??(n._zod={}),n._zod.def=e,(t=n._zod).onattach??(t.onattach=[])}),dl=n=>{const e=n.value;return!wm(e)&&e.length!==void 0},wo={number:"number",bigint:"bigint",object:"date"},ed=ae("$ZodCheckLessThan",(n,e)=>{Lt.init(n,e);const t=wo[typeof e.value];n._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:wo[typeof i.value]??t,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),td=ae("$ZodCheckGreaterThan",(n,e)=>{Lt.init(n,e);const t=wo[typeof e.value];n._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:wo[typeof i.value]??t,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Rv=ae("$ZodCheckMultipleOf",(n,e)=>{Lt.init(n,e),n._zod.check=t=>{if(typeof t.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?e.value!==BigInt(0)&&t.value%e.value===BigInt(0):Tm(t.value,e.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:e.value,input:t.value,inst:n,continue:!e.abort})}}),Cv=ae("$ZodCheckNumberFormat",(n,e)=>{Lt.init(n,e),e.format=e.format||"float64";const t=e.format?.includes("int"),i=t?"int":"number",[r,s]=Nm[e.format];n._zod.check=o=>{const a=o.value;if(t){if(!Number.isInteger(a)){o.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:a,inst:n});return}if(!Number.isSafeInteger(a)){a>0?o.issues.push({input:a,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort}):o.issues.push({input:a,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:i,inclusive:!0,continue:!e.abort});return}}a<r&&o.issues.push({origin:"number",input:a,code:"too_small",minimum:r,inclusive:!0,inst:n,continue:!e.abort}),a>s&&o.issues.push({origin:"number",input:a,code:"too_big",maximum:s,inclusive:!0,inst:n,continue:!e.abort})}}),Pv=ae("$ZodCheckMaxLength",(n,e)=>{var t;Lt.init(n,e),(t=n._zod.def).when??(t.when=dl),n._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?al(r):s)<=e.maximum)return;const a=cl(r);i.issues.push({origin:a,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),Iv=ae("$ZodCheckMinLength",(n,e)=>{var t;Lt.init(n,e),(t=n._zod.def).when??(t.when=dl),n._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?al(r):s)>=e.minimum)return;const a=cl(r);i.issues.push({origin:a,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:n,continue:!e.abort})}}),Lv=ae("$ZodCheckLengthEquals",(n,e)=>{var t;Lt.init(n,e),(t=n._zod.def).when??(t.when=dl),n._zod.check=i=>{const r=i.value,s=r.length,o=typeof r=="string"&&s>=e.length&&s<=e.length*2?al(r):s;if(o===e.length)return;const a=cl(r),c=o>e.length;i.issues.push({origin:a,...c?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:n,continue:!e.abort})}}),Go=ae("$ZodCheckStringFormat",(n,e)=>{var t,i;Lt.init(n,e),e.pattern?(t=n._zod).check??(t.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(i=n._zod).check??(i.check=()=>{})}),Dv=ae("$ZodCheckRegex",(n,e)=>{Go.init(n,e),n._zod.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),Nv=ae("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=Tv),Go.init(n,e)}),Uv=ae("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=Av),Go.init(n,e)}),Ov=ae("$ZodCheckIncludes",(n,e)=>{Lt.init(n,e);const t=yr(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${t}`:t);e.pattern=i,n._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:n,continue:!e.abort})}}),Fv=ae("$ZodCheckStartsWith",(n,e)=>{Lt.init(n,e);const t=new RegExp(`^${yr(e.prefix)}.*`);e.pattern??(e.pattern=t),n._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:n,continue:!e.abort})}}),zv=ae("$ZodCheckEndsWith",(n,e)=>{Lt.init(n,e);const t=new RegExp(`.*${yr(e.suffix)}$`);e.pattern??(e.pattern=t),n._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:n,continue:!e.abort})}});function _u(n,e,t){n.issues.length&&e.issues.push(...Ti(t,n.issues))}const Bv=ae("$ZodCheckProperties",(n,e)=>{Lt.init(n,e),Zf(n,Symbol.iterator,function*(){yield n});let t;n._zod.check=i=>{if(i.value==null){i.issues.push({expected:"object",code:"invalid_type",input:i.value,inst:n});return}t??(t=Reflect.ownKeys(e.shape).map(o=>[o,e.shape[o]]));const r=i.value;let s;for(const[o,a]of t){const c=a._zod.run({value:r[o],issues:[]},{});c instanceof Promise?(s??(s=[]),s.push(c.then(l=>_u(l,i,o)))):_u(c,i,o)}if(s)return Promise.all(s).then(()=>{})}}),kv=ae("$ZodCheckOverwrite",(n,e)=>{Lt.init(n,e),n._zod.check=t=>{t.value=e.tx(t.value)}});class Vv{constructor(e=[],t={}){this.content=[],this.indent=0,this.args=e,this.closed=t}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(o=>o),r=Math.min(...i.map(o=>o.length-o.trimStart().length)),s=i.map(o=>o.slice(r)).map(o=>" ".repeat(this.indent*2)+o);for(const o of s)this.content.push(o)}compile(){const e=Function,t=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${t.join(`
`)}
};`)(...Object.values(this.closed))}}const Hv={major:4,minor:6,patch:7},dt=ae("$ZodType",(n,e)=>{var t;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=Hv;const i=n._zod.def.checks,r=n._zod.traits.has("$ZodCheck")?[n,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const o of s._zod.onattach)o(n);if(r.length===0)(t=n._zod).deferred??(t.deferred=[]),n._zod.deferred?.push(()=>{n._zod.run=n._zod.parse});else{const s=(a,c,l)=>{if(a.memo)return a;let u=An(a),h;for(const f of c){if(f._zod.def.when){if(Um(a)||!f._zod.def.when(a))continue}else if(u)continue;const d=a.issues.length,m=f._zod.check(a);if(m instanceof Promise&&l?.async===!1)throw new Pi;if(h||m instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await m,a.issues.length!==d&&(tc(a.issues,d,n),u||(u=An(a,d)))});else{if(a.issues.length===d)continue;tc(a.issues,d,n),u||(u=An(a,d))}}return h?h.then(()=>a):a},o=(a,c,l)=>{if(An(a))return a.aborted=!0,a;const u=s(c,r,l);if(u instanceof Promise){if(l.async===!1)throw new Pi;return u.then(h=>n._zod.parse(h,l))}return n._zod.parse(u,l)};n._zod.run=(a,c)=>{if(c.skipChecks)return n._zod.parse(a,c);if(c.direction==="backward"){const u=n._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});return u instanceof Promise?u.then(h=>o(h,a,c)):o(u,a,c)}const l=n._zod.parse(a,c);if(l instanceof Promise){if(c.async===!1)throw new Pi;return l.then(u=>s(u,r,c))}return s(l,r,c)}}},{get"~standard"(){return Zf(this,"~standard",Wv(this))},set"~standard"(n){Di(this,"~standard",n)}}),nd=(n,e)=>n.issues.length?{issues:n.issues.map(t=>Jn(t,e,Qn()))}:{value:n.value};async function Gv(n,e){const t={async:!0};return nd(await n._zod.run({value:e,issues:[]},t),t)}function Wv(n){return{validate:e=>{const t={async:!1};try{const i=n._zod.run({value:e,issues:[]},t);if(!(i instanceof Promise))return nd(i,t)}catch{}return Gv(n,e)},vendor:"zod",version:1}}const id=ae("$ZodString",(n,e)=>{dt.init(n,e),n._zod.pattern=e.pattern??Ev,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=String(t.value)}catch{}return typeof t.value=="string"||t.issues.push({expected:"string",code:"invalid_type",input:t.value,inst:n}),t}}),vt=ae("$ZodStringFormat",(n,e)=>{Go.init(n,e),id.init(n,e)}),T1=ae("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=uv),vt.init(n,e)}),A1=ae("$ZodUUID",(n,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=gu(i))}else e.pattern??(e.pattern=gu());vt.init(n,e)}),R1=ae("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=hv),vt.init(n,e)}),rd=1,To=2;function sd(n){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(n):(new URL(n),!0)}catch{return!1}}function Xv(n,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?sd(n)||To:$v(n,e)}function $v(n,e){if(!e.normalize&&e.protocol?.source===_v.source&&!/^https?:\/\//i.test(n))return rd;try{if(typeof URL<"u"){const t=URL;if(typeof t.parse=="function")return t.parse(n)??To}return new URL(n)}catch{return To}}const qv=/[\t\n\r]/g;function yu(n){return n.replace(qv,"")}function jv(n,e){return e.lastIndex=0,e.test(n.hostname)}function Zv(n,e){return e.lastIndex=0,e.test(n.protocol.endsWith(":")?n.protocol.slice(0,-1):n.protocol)}const C1=ae("$ZodURL",(n,e)=>{vt.init(n,e),n._zod.check=t=>{try{const i=t.value.trim(),r=Xv(i,e);if(r===rd){t.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:t.value,inst:n,continue:!e.abort});return}if(r===To){t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:n,continue:!e.abort});return}if(r===!0){t.value=yu(i);return}e.hostname&&!jv(r,e.hostname)&&t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:t.value,inst:n,continue:!e.abort}),e.protocol&&!Zv(r,e.protocol)&&t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:t.value,inst:n,continue:!e.abort}),t.value=e.normalize?r.href:yu(i);return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:n,continue:!e.abort})}}}),P1=ae("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=dv()),vt.init(n,e)}),I1=ae("$ZodNanoID",(n,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?av:cv(e.length)),vt.init(n,e)}),L1=ae("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=nv),vt.init(n,e)}),D1=ae("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=iv),vt.init(n,e)}),N1=ae("$ZodULID",(n,e)=>{e.pattern??(e.pattern=rv),vt.init(n,e)}),U1=ae("$ZodXID",(n,e)=>{e.pattern??(e.pattern=sv),vt.init(n,e)}),O1=ae("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=ov),vt.init(n,e)}),F1=ae("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=bv(e)),vt.init(n,e)}),z1=ae("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=Mv),vt.init(n,e)}),B1=ae("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=Sv(e)),vt.init(n,e)}),k1=ae("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=lv),vt.init(n,e)}),V1=ae("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=pv),vt.init(n,e)}),Yv=/^[0-9a-fA-F:.]+$/;function od(n){return Yv.test(n)?sd(`http://[${n}]`):!1}const H1=ae("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=mv),vt.init(n,e),n._zod.check=t=>{od(t.value)||t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:n,continue:!e.abort})}}),G1=ae("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=vv),vt.init(n,e)});function Kv(n){const e=n.split("/");if(e.length!==2)return!1;const[t,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:od(t)}const W1=ae("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=gv),vt.init(n,e),n._zod.check=t=>{Kv(t.value)||t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:n,continue:!e.abort})}});function ad(n){if(n==="")return!0;if(/\s/.test(n)||n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const Jv=/^[0-9a-zA-Z+/]*={0,2}$/,X1=ae("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=Jv),vt.init(n,e),n._zod.check=t=>{ad(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:n,continue:!e.abort})}}),cd=/^[A-Za-z0-9_-]*$/;function Qv(n){if(!cd.test(n))return!1;const e=n.replace(/[-_]/g,i=>i==="-"?"+":"/"),t=e.padEnd(Math.ceil(e.length/4)*4,"=");return ad(t)}const $1=ae("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=cd),vt.init(n,e),n._zod.check=t=>{Qv(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:n,continue:!e.abort})}}),q1=ae("$ZodE164",(n,e)=>{e.pattern??(e.pattern=yv),vt.init(n,e)});function eg(n,e=null){try{const t=n.split(".");if(t.length!==3)return!1;const[i]=t;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const j1=ae("$ZodJWT",(n,e)=>{vt.init(n,e),n._zod.check=t=>{eg(t.value,e.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:n,continue:!e.abort})}}),tg=ae("$ZodNumber",(n,e)=>{dt.init(n,e),n._zod.pattern=Qf,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=Number(t.value)}catch{}const r=t.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return t;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return t.issues.push({expected:"number",code:"invalid_type",input:r,inst:n,...s?{received:s}:{}}),t}}),Z1=ae("$ZodNumberFormat",(n,e)=>{Cv.init(n,e),tg.init(n,e)}),ng=ae("$ZodBoolean",(n,e)=>{dt.init(n,e),n._zod.pattern=wv,n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=!!t.value}catch{}const r=t.value;return typeof r=="boolean"||t.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:n}),t}}),ig=ae("$ZodUnknown",(n,e)=>{dt.init(n,e),n._zod.parse=t=>t}),Y1=ae("$ZodNever",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:n}),t)}),K1=ae("$ZodDate",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{if(e.coerce)try{t.value=new Date(t.value)}catch{}const r=t.value,s=r instanceof Date;return s&&!Number.isNaN(r.getTime())||t.issues.push({expected:"date",code:"invalid_type",input:r,...s?{received:"Invalid Date"}:{},inst:n}),t}});function rg(n,e){const t=du(n._zod.def.checks);if(!t.length)return;const i=Math.min(...t.map(s=>s[0])),r=n._zod.parse;n._zod.parse=(s,o)=>{const a=e(s.value);if(a>i&&!o?.skipChecks&&o?.direction!=="backward"){for(const[c,l]of du(n._zod.def.checks))if(a>c&&l._zod.def.when(s)){const u=s.issues.length;return l._zod.check(s),s.issues[u].continue=!1,tc(s.issues,u,n),s}}return r(s,o)}}const sg=n=>Array.isArray(n)?n.length:-1;function xu(n,e,t){n.issues.length&&e.issues.push(...Ti(t,n.issues)),e.value[t]=n.value}const og=ae("$ZodArray",(n,e)=>{dt.init(n,e);const t=Dn.memoizer;t?.attach(n),n._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:n}),i;i.value=t?t.alloc(n,i,Array(s.length),r):Array(s.length);const o=[],a=r?.abortEarly;for(let c=0;c<s.length;c++){const l=s[c],u=e.element._zod.run({value:l,issues:[]},r);if(u instanceof Promise)o.push(u.then(h=>xu(h,i,c)));else if(xu(u,i,c),a&&u.issues.length!==0&&An(u))break}return o.length?Promise.all(o).then(()=>i):i},rg(n,sg)});function Ao(n,e,t,i,r,s){const o=t in i,a=s==="optional";if(!(!o&&a&&r==="optional")){if(n.issues.length){if(r!==void 0&&a&&!o)return;e.issues.push(...Ti(t,n.issues))}if(!o&&r===void 0){n.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[t]});return}n.value===void 0?(o||r==="defaulted"&&!a)&&(e.value[t]=void 0):e.value[t]=n.value}}const ag=[];function ld(n){const e=Object.keys(n.shape),t=Object.getOwnPropertySymbols(n.shape),i=t.length?t:ag,r=i.length?[...e,...i]:e;for(const o of r)if(!n.shape?.[o]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(o)}": expected a Zod schema`);const s=Dm(n.shape);return{...n,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function ud(n,e,t,i,r,s,o){const a=[],c=r.keySet,l=r.catchall._zod,u=l.def.type,h=l.optin,f=l.optout;let d=0;for(const m in e){if(o&&t.issues.length!==d){if(An(t,d))break;d=t.issues.length}if(c.has(m))continue;if(m==="__proto__"){u==="never"&&a.push(m);continue}if(u==="never"){a.push(m);continue}const g=l.run({value:e[m],issues:[]},i);g instanceof Promise?n.push(g.then(v=>Ao(v,t,m,e,h,f))):Ao(g,t,m,e,h,f)}return a.length&&t.issues.push({code:"unrecognized_keys",keys:a,input:e,inst:s,continue:!0}),n.length?Promise.all(n).then(()=>t):t}const hd=ae("$ZodObject",(n,e)=>{dt.init(n,e);const t=Object.getOwnPropertyDescriptor(e,"shape"),i=t?.get?t.get.raw:e.shape??{};if(i){const l=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),l.raw=u,u};l.raw=i,Object.defineProperty(e,"shape",{get:l})}const r=zo(()=>ld(e));tt(n,"propValues",l=>{const u=l.def.shape,h={};for(const f in u){const d=u[f]._zod;if(d.values){Object.prototype.hasOwnProperty.call(h,f)||Bo(h,f,new Set);for(const m of d.values)h[f].add(m);d.optin!==void 0&&h[f].add(void 0)}}return h});const s=ls,o=e.catchall;let a;const c=Dn.memoizer;c?.attach(n),n._zod.parse=(l,u)=>{a??(a=r.value);const h=l.value;if(!s(h))return l.issues.push({expected:"object",code:"invalid_type",input:h,inst:n}),l;l.value=c?c.alloc(n,l,{},u):{};const f=[],d=a.shape,m=u?.abortEarly;let g=l.issues.length;for(const v of a.allKeys){if(m&&l.issues.length!==g){if(An(l,g))break;g=l.issues.length}if(v==="__proto__")continue;const p=d[v],x=p._zod.optin,y=p._zod.optout,_=p._zod.run({value:h[v],issues:[]},u);_ instanceof Promise?f.push(_.then(R=>Ao(R,l,v,h,x,y))):Ao(_,l,v,h,x,y)}return o?ud(f,h,l,u,r.value,n,m===!0):f.length?Promise.all(f).then(()=>l):l}}),J1=ae("$ZodObjectJIT",(n,e)=>{hd.init(n,e);const t=n._zod.parse,i=zo(()=>ld(e)),r=Dn.memoizer,s=d=>{const m=i.value,g=m.symbolKeys,v=new Vv(["payload","ctx"],{shape:d,inst:n,memo:r,syms:g}),p=R=>`shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`,x=(R,w)=>`
          let ${R}_ab = false;
          for (let i = 0; i < ${R}.issues.length; i++) {
            const iss = ${R}.issues[i];
            iss.path = iss.path ? [${w}, ...iss.path] : [${w}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${R}_ab = true;
          }
          if (${R}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;v.write("const input = payload.value;");const y=Object.create(null);let _=0;for(const R of m.allKeys)y[R]=`key_${_++}`;v.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const R of m.allKeys){if(R==="__proto__")continue;const w=y[R],A=typeof R=="symbol"?`syms[${g.indexOf(R)}]`:Rm(R),P=`${A} in input`,E=d[R],M=E?._zod?.optin,I=M!==void 0,z=E?._zod?.optout==="optional";if(v.write(`const ${w} = ${p(A)};`),I&&z){const F=M==="optional"?`${w}_present`:`${w}.value !== undefined || ${w}_present`;v.write(`
        const ${w}_present = ${P};
        if (!${w}.issues.length || ${w}_present) {
          if (${w}.issues.length) {${x(w,A)}
          }

          if (${F}) {
            newResult[${A}] = ${w}.value;
          }
        }

      `)}else I?(v.write(`
        if (${w}.issues.length) {${x(w,A)}
        }
      `),M==="defaulted"?v.write(`newResult[${A}] = ${w}.value;`):v.write(`
        if (${w}.value !== undefined || ${P}) {
          newResult[${A}] = ${w}.value;
        }
      `)):v.write(`
        const ${w}_present = ${P};
        if (${w}.issues.length) {${x(w,A)}
        }
        if (!${w}_present && !${w}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${A}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${w}_present) {
          newResult[${A}] = ${w}.value;
        }

      `)}return v.write("payload.value = newResult;"),v.write("return payload;"),v.compile()};let o;const a=ls,c=!Dn.jitless,u=c&&Pm.value,h=e.catchall;let f;n._zod.parse=(d,m)=>{f??(f=i.value);const g=d.value;return a(g)?c&&u&&m?.async===!1&&m.jitless!==!0?(o||(o=s(e.shape)),d=o(d,m),h?ud([],g,d,m,f,n,m?.abortEarly===!0):d):t(d,m):(d.issues.push({expected:"object",code:"invalid_type",input:g,inst:n}),d)}});function Mu(n,e,t,i){for(const s of n)if(s.issues.length===0)return e.value=s.value,e;const r=n.filter(s=>!An(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:t,errors:n.map(s=>s.issues.map(o=>Jn(o,i,Qn())))}),e)}const cg=ae("$ZodUnion",(n,e)=>{dt.init(n,e),tt(n,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),tt(n,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),tt(n,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),tt(n,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>ol(s.source)).join("|")})$`)}});const t=e.options.length===1?e.options[0]._zod.run:null;n._zod.parse=(i,r)=>{if(t)return t(i,r);let s=!1;const o=[];for(const a of e.options){const c=a._zod.run({value:i.value,issues:[]},r);if(c instanceof Promise)o.push(c),s=!0;else{if(c.issues.length===0)return c;o.push(c)}}return s?Promise.all(o).then(a=>Mu(a,i,n,r)):Mu(o,i,n,r)}});function lg(n){const e=new Map;for(const t of n.options){const i=t._zod.propValues?.[n.discriminator];if(!i||i.size===0)throw new Error(`Invalid discriminated union option at index "${n.options.indexOf(t)}"`);for(const r of i)if(e.has(r)){if(r!==void 0)throw new Error(`Duplicate discriminator value "${String(r)}"`);e.set(r,null)}else e.set(r,t)}return e}const Q1=ae("$ZodDiscriminatedUnion",(n,e)=>{e.inclusive=!1,cg.init(n,e);const t=n._zod.parse;tt(n,"propValues",r=>{const s={};let o=0;for(const a of r.def.options){const c=a._zod.propValues;if(!c||Object.keys(c).length===0)throw new Error(`Invalid discriminated union option at index "${r.def.options.indexOf(a)}"`);c[r.def.discriminator]?.has(void 0)&&o++;for(const[l,u]of Object.entries(c)){Object.prototype.hasOwnProperty.call(s,l)||Bo(s,l,new Set);for(const h of u)s[l].add(h)}}return!r.def.unionFallback&&o>1&&s[r.def.discriminator]?.delete(void 0),s}),e.options.forEach((r,s)=>{const o=Wf(r._zod.def);if(o&&!Object.prototype.hasOwnProperty.call(o,e.discriminator))throw new Error(`Invalid discriminated union option at index "${s}"`)});const i=zo(()=>lg(e));n._zod.parse=(r,s)=>{const o=r.value;if(!ls(o))return r.issues.push({code:"invalid_type",expected:"object",input:o,inst:n}),r;const a=o?.[e.discriminator],c=i.value.get(a);return c&&(a!==void 0||s.direction!=="backward")?c._zod.run(r,s):e.unionFallback||s.direction==="backward"?t(r,s):(r.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:e.discriminator,options:Array.from(i.value.keys()).filter(l=>i.value.get(l)!==null),input:o,path:[e.discriminator],inst:n}),r)}}),eA=ae("$ZodIntersection",(n,e)=>{dt.init(n,e),n._zod.parse=(t,i)=>{const r=t.value,s=e.left._zod.run({value:r,issues:[]},i),o=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||o instanceof Promise?Promise.all([s,o]).then(([c,l])=>Su(t,c,l)):Su(t,s,o)}});function rc(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(_r(n)&&_r(e)){const t=Object.keys(e),i=Object.keys(n).filter(s=>t.indexOf(s)!==-1),r={...n,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const o=rc(n[s],e[s]);if(!o.valid)return{valid:!1,mergeErrorPath:[s,...o.mergeErrorPath]};r[s]=o.data}return{valid:!0,data:r}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let i=0;i<n.length;i++){const r=n[i],s=e[i],o=rc(r,s);if(!o.valid)return{valid:!1,mergeErrorPath:[i,...o.mergeErrorPath]};t.push(o.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function Su(n,e,t){const i=new Map;let r;const s=new Map,o=(l,u)=>{let h;if(l.code==="unrecognized_keys"&&!l.path?.length)r??(r=l),h=l.keys;else if(l.code==="invalid_key"&&l.origin==="record"&&l.path?.length===1){const f=String(l.path[0]);s.has(f)||s.set(f,l),h=[f]}else return!1;for(const f of h)i.has(f)||i.set(f,{}),i.get(f)[u]=!0;return!0};for(const l of e.issues)o(l,"l")||n.issues.push(l);for(const l of t.issues)o(l,"r")||n.issues.push(l);const a=[...i].filter(([,l])=>l.l&&l.r).map(([l])=>l);if(a.length){const l=r?a.filter(u=>r.keys.includes(u)):[];l.length&&n.issues.push({...r,keys:l});for(const u of a)!l.includes(u)&&s.has(u)&&n.issues.push(s.get(u))}const c=rc(e.value,t.value);if(!c.valid){if(An(n))return n;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return n.value=c.data,n}const ug=ae("$ZodRecord",(n,e)=>{dt.init(n,e);const t=Dn.memoizer;t?.attach(n),n._zod.parse=(i,r)=>{const s=i.value;if(!_r(s))return i.issues.push({expected:"record",code:"invalid_type",input:s,inst:n}),i;const o=[],a=e.keyType._zod.values;if(a&&!e.partial){i.value=t?t.alloc(n,i,{},r):{};const c=new Set;for(const u of a)if(typeof u=="string"||typeof u=="number"||typeof u=="symbol"){if(c.add(typeof u=="number"?u.toString():u),u==="__proto__")continue;const h=e.keyType._zod.run({value:u,issues:[]},r);if(h instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(h.issues.length){i.issues.push({code:"invalid_key",origin:"record",issues:h.issues.map(m=>Jn(m,r,Qn())),input:u,path:[u],inst:n});continue}const f=h.value;if(f==="__proto__")continue;const d=e.valueType._zod.run({value:s[u],issues:[]},r);d instanceof Promise?o.push(d.then(m=>{m.issues.length&&i.issues.push(...Ti(u,m.issues)),i.value[f]=m.value})):(d.issues.length&&i.issues.push(...Ti(u,d.issues)),i.value[f]=d.value)}let l;for(const u in s)if(!c.has(u))if(e.mode==="loose"){if(u==="__proto__")continue;i.value[u]=s[u]}else l=l??[],l.push(u);l&&l.length>0&&i.issues.push({code:"unrecognized_keys",input:s,inst:n,keys:l,continue:!0})}else{i.value=t?t.alloc(n,i,{},r):{};let c;for(const l of Reflect.ownKeys(s)){if(l==="__proto__"||!Object.prototype.propertyIsEnumerable.call(s,l))continue;let u=e.keyType._zod.run({value:l,issues:[]},r);if(u instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(typeof l=="string"&&Qf.test(l)&&u.issues.length){const m=e.keyType._zod.run({value:Number(l),issues:[]},r);if(m instanceof Promise)throw new Error("Async schemas not supported in object keys currently");m.issues.length===0&&(u=m)}if(u.issues.length){e.mode==="loose"?i.value[l]=s[l]:a?(c=c??[],c.push(l)):i.issues.push({code:"invalid_key",origin:"record",issues:u.issues.map(m=>Jn(m,r,Qn())),input:l,path:[l],inst:n});continue}const f=u.value;if(f==="__proto__")continue;const d=e.valueType._zod.run({value:s[l],issues:[]},r);d instanceof Promise?o.push(d.then(m=>{m.issues.length&&i.issues.push(...Ti(l,m.issues)),i.value[f]=m.value})):(d.issues.length&&i.issues.push(...Ti(l,d.issues)),i.value[f]=d.value)}c&&c.length>0&&i.issues.push({code:"unrecognized_keys",input:s,inst:n,keys:c,continue:!0})}return o.length?Promise.all(o).then(()=>i):i}}),hg=ae("$ZodEnum",(n,e)=>{dt.init(n,e);const t=fu(e.entries),i=new Set(t);n._zod.values=i,tt(n,"pattern",r=>{const s=fu(r.def.entries).filter(o=>Im.has(typeof o));return new RegExp(s.length?`^(${s.map(o=>yr(o.toString())).join("|")})$`:"^[^\\s\\S]$")}),n._zod.parse=(r,s)=>{const o=r.value;return i.has(o)||r.issues.push({code:"invalid_value",values:t,input:o,inst:n}),r}}),tA=ae("$ZodLiteral",(n,e)=>{dt.init(n,e);const t=new Set(e.values);n._zod.values=t,tt(n,"pattern",i=>{const r=i.def.values;return new RegExp(r.length?`^(${r.map(s=>typeof s=="string"?yr(s):s?yr(s.toString()):String(s)).join("|")})$`:"^[^\\s\\S]$")}),n._zod.parse=(i,r)=>{const s=i.value;return t.has(s)||i.issues.push({code:"invalid_value",values:e.values,input:s,inst:n}),i}}),nA=ae("$ZodTransform",(n,e)=>{dt.init(n,e),n._zod.optin="optional",Dn.memoizer?.guard(n),n._zod.parse=(t,i)=>{if(i.direction==="backward")throw new Wm(n.constructor.name);const r=e.transform(t.value,t);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(o=>(t.value=o,t));if(r instanceof Promise)throw new Pi;return t.value=r,t}});function bu(n,e){return n.value=e.issues.length?void 0:e.value,n}const fd=ae("$ZodOptional",(n,e)=>{dt.init(n,e),tt(n,"optin",t=>t.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),n._zod.optout="optional",tt(n,"values",t=>{const i=t.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),tt(n,"pattern",t=>{const i=t.def.innerType._zod.pattern;return i?new RegExp(`^(${ol(i.source)})?$`):void 0}),n._zod.parse=(t,i)=>{if(t.value===void 0){if(e.innerType._zod.optin!=="defaulted")return t;const r=e.innerType._zod.run({value:t.value,issues:[]},i);return r instanceof Promise?r.then(s=>bu(t,s)):bu(t,r)}return e.innerType._zod.run(t,i)}}),iA=ae("$ZodExactOptional",(n,e)=>{fd.init(n,e),tt(n,"values",t=>t.def.innerType._zod.values),tt(n,"pattern",t=>t.def.innerType._zod.pattern),n._zod.parse=(t,i)=>e.innerType._zod.run(t,i)}),fg=ae("$ZodNullable",(n,e)=>{dt.init(n,e),tt(n,"optin",t=>t.def.innerType._zod.optin),tt(n,"optout",t=>t.def.innerType._zod.optout),tt(n,"pattern",t=>{const i=t.def.innerType._zod.pattern;return i?new RegExp(`^(${ol(i.source)}|null)$`):void 0}),tt(n,"values",t=>t.def.innerType._zod.values?new Set([...t.def.innerType._zod.values,null]):void 0),n._zod.parse=(t,i)=>t.value===null?t:e.innerType._zod.run(t,i)}),rA=ae("$ZodDefault",(n,e)=>{dt.init(n,e),n._zod.optin="defaulted",tt(n,"values",t=>t.def.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);if(t.value===void 0)return t.value=e.defaultValue,t;const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>Eu(s,e)):Eu(r,e)}});function Eu(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const sA=ae("$ZodPrefault",(n,e)=>{dt.init(n,e),n._zod.optin="defaulted",tt(n,"values",t=>t.def.innerType._zod.values),n._zod.parse=(t,i)=>(i.direction==="backward"||t.value===void 0&&(t.value=e.defaultValue),e.innerType._zod.run(t,i))}),oA=ae("$ZodNonOptional",(n,e)=>{dt.init(n,e),tt(n,"values",t=>{const i=t.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),n._zod.parse=(t,i)=>{const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(s=>wu(s,n)):wu(r,n)}});function wu(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}function Tu(n,e,t,i){return e.issues.length?(n.value=t.catchValue({...e,value:n.value,error:{issues:e.issues.map(r=>Jn(r,i,Qn()))},input:n.value}),n):(n.value=e.value,e.memo&&(n.memo=!0),n)}const aA=ae("$ZodCatch",(n,e)=>{dt.init(n,e),tt(n,"optin",t=>t.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),tt(n,"optout",t=>t.def.innerType._zod.optout),tt(n,"values",t=>t.def.innerType._zod.values),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run({value:t.value,issues:[]},i);return r instanceof Promise?r.then(s=>Tu(t,s,e,i)):Tu(t,r,e,i)}}),cA=ae("$ZodPipe",(n,e)=>{dt.init(n,e),tt(n,"values",t=>t.def.in._zod.values),tt(n,"optin",t=>t.def.in._zod.optin),tt(n,"optout",t=>t.def.out._zod.optout),tt(n,"propValues",t=>t.def.in._zod.propValues),n._zod.parse=(t,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(t,i);return s instanceof Promise?s.then(o=>Es(o,e.in,i)):Es(s,e.in,i)}const r=e.in._zod.run(t,i);return r instanceof Promise?r.then(s=>Es(s,e.out,i)):Es(r,e.out,i)}});function Es(n,e,t){return n.issues.some(i=>i.code!=="unrecognized_keys")?(n.aborted=!0,n):e._zod.run({value:n.value,issues:n.issues},t)}const lA=ae("$ZodReadonly",(n,e)=>{dt.init(n,e),tt(n,"propValues",t=>t.def.innerType._zod.propValues),tt(n,"values",t=>t.def.innerType._zod.values),tt(n,"optin",t=>t.def.innerType?._zod?.optin),tt(n,"optout",t=>t.def.innerType?._zod?.optout),n._zod.parse=(t,i)=>{if(i.direction==="backward")return e.innerType._zod.run(t,i);const r=e.innerType._zod.run(t,i);return r instanceof Promise?r.then(Au):Au(r)}});function Au(n){return n.memo||(n.value=Object.freeze(n.value)),n}const uA=ae("$ZodCustom",(n,e)=>{Lt.init(n,e),dt.init(n,e),n._zod.parse=(t,i)=>t,n._zod.check=t=>{const i=t.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>Ru(s,t,i,n));Ru(r,t,i,n)}});function Ru(n,e,t,i){if(!n){const r={code:"custom",input:t,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(nc(r))}}function dd(n){return n.checks&&(n.checks=[...n.checks]),n}function dg(n,e){return new n(dd({type:"string",...Le(e)}))}function hA(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...Le(e)})}function fA(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...Le(e)})}function dA(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...Le(e)})}function pA(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Le(e)})}function mA(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Le(e)})}function vA(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Le(e)})}function gA(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...Le(e)})}function _A(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...Le(e)})}function yA(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...Le(e)})}function xA(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...Le(e)})}function MA(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...Le(e)})}function SA(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...Le(e)})}function bA(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...Le(e)})}function EA(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...Le(e)})}function wA(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...Le(e)})}function TA(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...Le(e)})}function AA(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Le(e)})}function RA(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Le(e)})}function CA(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...Le(e)})}function PA(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...Le(e)})}function IA(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...Le(e)})}function LA(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...Le(e)})}function DA(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Le(e)})}function NA(n,e){return new n({type:"string",format:"date",check:"string_format",...Le(e)})}function UA(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...Le(e)})}function OA(n,e){return new n({type:"string",format:"duration",check:"string_format",...Le(e)})}function FA(n,e){return new n(dd({type:"number",checks:[],...Le(e)}))}function zA(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...Le(e)})}function pg(n,e){return new n({type:"boolean",...Le(e)})}function mg(n){return new n({type:"unknown"})}function BA(n,e){return new n({type:"never",...Le(e)})}function kA(n,e){return new n({type:"date",...Le(e)})}function VA(n,e){return new ed({check:"less_than",...Le(e),value:n,inclusive:!1})}function HA(n,e){return new ed({check:"less_than",...Le(e),value:n,inclusive:!0})}function GA(n,e){return new td({check:"greater_than",...Le(e),value:n,inclusive:!1})}function WA(n,e){return new td({check:"greater_than",...Le(e),value:n,inclusive:!0})}function XA(n,e){return new Rv({check:"multiple_of",...Le(e),value:n})}function $A(n,e){return new Pv({check:"max_length",...Le(e),maximum:n})}function qA(n,e){return new Iv({check:"min_length",...Le(e),minimum:n})}function jA(n,e){return new Lv({check:"length_equals",...Le(e),length:n})}function ZA(n,e){return new Dv({check:"string_format",format:"regex",...Le(e),pattern:n})}function YA(n){return new Nv({check:"string_format",format:"lowercase",...Le(n)})}function KA(n){return new Uv({check:"string_format",format:"uppercase",...Le(n)})}function JA(n,e){return new Ov({check:"string_format",format:"includes",...Le(e),includes:n})}function QA(n,e){return new Fv({check:"string_format",format:"starts_with",...Le(e),prefix:n})}function eR(n,e){return new zv({check:"string_format",format:"ends_with",...Le(e),suffix:n})}function tR(n,e){return new Bv({check:"properties",shape:n,...Le(e)})}function gs(n){return new kv({check:"overwrite",tx:n})}function nR(n){return gs(e=>e.normalize(n))}function iR(){return gs(n=>n.trim())}function rR(){return gs(n=>n.toLowerCase())}function sR(){return gs(n=>n.toUpperCase())}function oR(){return gs(n=>Cm(n))}function aR(n,e,t){return new n({type:"array",element:e,...Le(t)})}function cR(n,e,t){const i=Le(t);return i.abort??(i.abort=!0),new n({type:"custom",check:"custom",fn:e,...i})}function lR(n,e,t){return new n({type:"custom",check:"custom",fn:e,...Le(t)})}function uR(n,e){const t=vg(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(nc(r,i.value,t._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=t),s.continue??(s.continue=!t._zod.def.abort),i.issues.push(nc(s))}},n(i.value,i)),e);return t}function vg(n,e){const t=new Lt({check:"custom",...Le(e)});return t._zod.check=n,t}function hR(n){return({payload:e,next:t})=>{const i=n();if(i){const r=e.obj;(r.properties!==void 0||r.type==="track"||r.type==="page"||r.type==="screen")&&(r.properties={...r.properties,...i}),(r.traits!==void 0||r.type==="identify"||r.type==="group")&&(r.traits={...r.traits,...i})}t(e)}}function sc(n,e,t){e.split&&(e=e.split("."));for(var i=0,r=e.length,s=n,o,a;i<r&&(a=""+e[i++],!(a==="__proto__"||a==="constructor"||a==="prototype"));)s=s[a]=i===r?t:typeof(o=s[a])==typeof e?o:e[i]*0!==0||~(""+e[i]).indexOf(".")?{}:[]}var gg=function(n,e){return Object.keys(n).filter(function(t){return e(t,n[t])}).reduce(function(t,i){return t[i]=n[i],t},{})},Ni=(function(n){Ft(e,n);function e(t,i){var r=n.call(this,"".concat(t," ").concat(i))||this;return r.field=t,r}return e})(Error);function ei(n){return typeof n=="string"}function oc(n){return typeof n=="number"}function pr(n){return typeof n=="function"}function _g(n){return n!=null}function Zt(n){return Object.prototype.toString.call(n).slice(8,-1).toLowerCase()==="object"}var pl="is not a string",ml="is not an object",yg="is nil";function xg(n){if(!_g(n))throw new Ni("Event",yg);if(typeof n!="object")throw new Ni("Event",ml)}function Mg(n){if(!ei(n.type))throw new Ni(".type",pl)}function Sg(n){if(!ei(n.event))throw new Ni(".event",pl)}function bg(n){if(!Zt(n.properties))throw new Ni(".properties",ml)}function Eg(n){if(!Zt(n.traits))throw new Ni(".traits",ml)}function wg(n){if(!ei(n.messageId))throw new Ni(".messageId",pl)}function Tg(n){xg(n),Mg(n),wg(n),n.type==="track"&&(Sg(n),bg(n)),["group","identify"].includes(n.type)&&Eg(n)}var Ag=(function(){function n(e){var t,i;this.settings=e,this.createMessageId=e.createMessageId,this.onEventMethodCall=(t=e.onEventMethodCall)!==null&&t!==void 0?t:(function(){}),this.onFinishedEvent=(i=e.onFinishedEvent)!==null&&i!==void 0?i:(function(){})}return n})(),Rg=(function(){function n(e){this.settings=new Ag(e)}return n.prototype.track=function(e,t,i,r){return this.settings.onEventMethodCall({type:"track",options:i}),this.normalize(Q(Q({},this.baseEvent()),{event:e,type:"track",properties:t??{},options:Q({},i),integrations:Q({},r)}))},n.prototype.page=function(e,t,i,r,s){var o;this.settings.onEventMethodCall({type:"page",options:r});var a={type:"page",properties:Q({},i),options:Q({},r),integrations:Q({},s)};return e!==null&&(a.category=e,a.properties=(o=a.properties)!==null&&o!==void 0?o:{},a.properties.category=e),t!==null&&(a.name=t),this.normalize(Q(Q({},this.baseEvent()),a))},n.prototype.screen=function(e,t,i,r,s){this.settings.onEventMethodCall({type:"screen",options:r});var o={type:"screen",properties:Q({},i),options:Q({},r),integrations:Q({},s)};return e!==null&&(o.category=e),t!==null&&(o.name=t),this.normalize(Q(Q({},this.baseEvent()),o))},n.prototype.identify=function(e,t,i,r){return this.settings.onEventMethodCall({type:"identify",options:i}),this.normalize(Q(Q({},this.baseEvent()),{type:"identify",userId:e,traits:t??{},options:Q({},i),integrations:r}))},n.prototype.group=function(e,t,i,r){return this.settings.onEventMethodCall({type:"group",options:i}),this.normalize(Q(Q({},this.baseEvent()),{type:"group",traits:t??{},options:Q({},i),integrations:Q({},r),groupId:e}))},n.prototype.alias=function(e,t,i,r){this.settings.onEventMethodCall({type:"alias",options:i});var s={userId:e,type:"alias",options:Q({},i),integrations:Q({},r)};return t!==null&&(s.previousId=t),e===void 0?this.normalize(Q(Q({},s),this.baseEvent())):this.normalize(Q(Q({},this.baseEvent()),s))},n.prototype.baseEvent=function(){return{integrations:{},options:{}}},n.prototype.context=function(e){var t,i=["userId","anonymousId","timestamp","messageId"];delete e.integrations;var r=Object.keys(e),s=(t=e.context)!==null&&t!==void 0?t:{},o={};return r.forEach(function(a){a!=="context"&&(i.includes(a)?sc(o,a,e[a]):sc(s,a,e[a]))}),[s,o]},n.prototype.normalize=function(e){var t,i,r=Object.keys((t=e.integrations)!==null&&t!==void 0?t:{}).reduce(function(f,d){var m,g;return Q(Q({},f),(m={},m[d]=!!(!((g=e.integrations)===null||g===void 0)&&g[d]),m))},{});e.options=gg(e.options||{},function(f,d){return d!==void 0});var s=Q(Q({},r),(i=e.options)===null||i===void 0?void 0:i.integrations),o=e.options?this.context(e.options):[],a=o[0],c=o[1],l=e.options,u=Gf(e,["options"]),h=Q(Q(Q(Q({timestamp:new Date},u),{context:a,integrations:s}),c),{messageId:l.messageId||this.settings.createMessageId()});return this.settings.onFinishedEvent(h),Tg(h),h},n})();function Cg(n,e){return new Promise(function(t,i){var r=setTimeout(function(){i(Error("Promise timed out"))},e);n.then(function(s){return clearTimeout(r),t(s)}).catch(i)})}function Pg(n){return new Promise(function(e){return setTimeout(e,n)})}function Ig(n,e,t){var i=function(){try{return Promise.resolve(e(n))}catch(r){return Promise.reject(r)}};return Pg(t).then(function(){return Cg(i(),1e3)}).catch(function(r){n?.log("warn","Callback Error",{error:r}),n?.stats.increment("callback_error")}).then(function(){return n})}var pd=function(){var n,e,t=!1,i=new Promise(function(r,s){n=function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];t=!0,r.apply(void 0,o)},e=function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];t=!0,s.apply(void 0,o)}});return{resolve:n,reject:e,promise:i,isSettled:function(){return t}}},vl=(function(){function n(e){var t;this.callbacks={},this.warned=!1,this.maxListeners=(t=e?.maxListeners)!==null&&t!==void 0?t:10}return n.prototype.warnIfPossibleMemoryLeak=function(e){this.warned||this.maxListeners&&this.callbacks[e].length>this.maxListeners&&(console.warn("Event Emitter: Possible memory leak detected; ".concat(String(e)," has exceeded ").concat(this.maxListeners," listeners.")),this.warned=!0)},n.prototype.on=function(e,t){return this.callbacks[e]?(this.callbacks[e].push(t),this.warnIfPossibleMemoryLeak(e)):this.callbacks[e]=[t],this},n.prototype.once=function(e,t){var i=this,r=function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];i.off(e,r),t.apply(i,s)};return this.on(e,r),this},n.prototype.off=function(e,t){var i,r=(i=this.callbacks[e])!==null&&i!==void 0?i:[],s=r.filter(function(o){return o!==t});return this.callbacks[e]=s,this},n.prototype.emit=function(e){for(var t=this,i,r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];var o=(i=this.callbacks[e])!==null&&i!==void 0?i:[];return o.forEach(function(a){a.apply(t,r)}),this},n})();function Lg(n){var e=Math.random()+1,t=n.minTimeout,i=t===void 0?500:t,r=n.factor,s=r===void 0?2:r,o=n.attempt,a=n.maxTimeout,c=a===void 0?1/0:a;return Math.min(e*i*Math.pow(s,o),c)}var md="onRemoveFromFuture",gl=(function(n){Ft(e,n);function e(t,i,r){var s=n.call(this)||this;return s.future=[],s.maxAttempts=t,s.queue=i,s.seen=r??{},s}return e.prototype.push=function(){for(var t=this,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];var s=i.map(function(o){var a=t.updateAttempts(o);return a>t.maxAttempts||t.includes(o)?!1:(t.queue.push(o),!0)});return this.queue=this.queue.sort(function(o,a){return t.getAttempts(o)-t.getAttempts(a)}),s},e.prototype.pushWithBackoff=function(t,i){var r=this;if(i===void 0&&(i=0),i==0&&this.getAttempts(t)===0)return this.push(t)[0];var s=this.updateAttempts(t);if(s>this.maxAttempts||this.includes(t))return!1;var o=Lg({attempt:s-1});return i>0&&o<i&&(o=i),setTimeout(function(){r.queue.push(t),r.future=r.future.filter(function(a){return a.id!==t.id}),r.emit(md)},o),this.future.push(t),!0},e.prototype.getAttempts=function(t){var i;return(i=this.seen[t.id])!==null&&i!==void 0?i:0},e.prototype.updateAttempts=function(t){return this.seen[t.id]=this.getAttempts(t)+1,this.getAttempts(t)},e.prototype.includes=function(t){return this.queue.includes(t)||this.future.includes(t)||!!this.queue.find(function(i){return i.id===t.id})||!!this.future.find(function(i){return i.id===t.id})},e.prototype.pop=function(){return this.queue.shift()},Object.defineProperty(e.prototype,"length",{get:function(){return this.queue.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"todo",{get:function(){return this.queue.length+this.future.length},enumerable:!1,configurable:!0}),e})(vl),Ai=256,go=[],ws;for(;Ai--;)go[Ai]=(Ai+256).toString(16).substring(1);function _l(){var n=0,e,t="";if(!ws||Ai+16>256){for(ws=Array(n=256);n--;)ws[n]=256*Math.random()|0;n=Ai=0}for(;n<16;n++)e=ws[Ai+n],n==6?t+=go[e&15|64]:n==8?t+=go[e&63|128]:t+=go[e],n&1&&n>1&&n<11&&(t+="-");return Ai++,t}var Dg=(function(){function n(){this._logs=[]}return n.prototype.log=function(e,t,i){var r=new Date;this._logs.push({level:e,message:t,time:r,extras:i})},Object.defineProperty(n.prototype,"logs",{get:function(){return this._logs},enumerable:!1,configurable:!0}),n.prototype.flush=function(){if(this.logs.length>1){var e=this._logs.reduce(function(t,i){var r,s,o,a=Q(Q({},i),{json:JSON.stringify(i.extras,null," "),extras:i.extras});delete a.time;var c=(o=(s=i.time)===null||s===void 0?void 0:s.toISOString())!==null&&o!==void 0?o:"";return t[c]&&(c="".concat(c,"-").concat(Math.random())),Q(Q({},t),(r={},r[c]=a,r))},{});console.table?console.table(e):console.log(e)}else this.logs.forEach(function(t){var i=t.level,r=t.message,s=t.extras;i==="info"||i==="debug"?console.log(r,s??""):console[i](r,s??"")});this._logs=[]},n})(),Ng=function(n){var e={gauge:"g",counter:"c"};return e[n]},vd=(function(){function n(){this.metrics=[]}return n.prototype.increment=function(e,t,i){t===void 0&&(t=1),this.metrics.push({metric:e,value:t,tags:i??[],type:"counter",timestamp:Date.now()})},n.prototype.gauge=function(e,t,i){this.metrics.push({metric:e,value:t,tags:i??[],type:"gauge",timestamp:Date.now()})},n.prototype.flush=function(){var e=this.metrics.map(function(t){return Q(Q({},t),{tags:t.tags.join(",")})});console.table?console.table(e):console.log(e),this.metrics=[]},n.prototype.serialize=function(){return this.metrics.map(function(e){return{m:e.metric,v:e.value,t:e.tags,k:Ng(e.type),e:e.timestamp}})},n})(),Ug=(function(n){Ft(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.gauge=function(){},e.prototype.increment=function(){},e.prototype.flush=function(){},e.prototype.serialize=function(){return[]},e})(vd),xr=(function(){function n(e){var t,i,r;this.retry=(t=e.retry)!==null&&t!==void 0?t:!0,this.type=(i=e.type)!==null&&i!==void 0?i:"plugin Error",this.reason=(r=e.reason)!==null&&r!==void 0?r:""}return n})(),Ro=(function(){function n(e,t,i,r){t===void 0&&(t=_l()),i===void 0&&(i=new Ug),r===void 0&&(r=new Dg),this.attempts=0,this.event=e,this._id=t,this.logger=r,this.stats=i}return n.system=function(){},n.prototype.isSame=function(e){return e.id===this.id},n.prototype.cancel=function(e){throw e||new xr({reason:"Context Cancel"})},n.prototype.log=function(e,t,i){this.logger.log(e,t,i)},Object.defineProperty(n.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),n.prototype.updateEvent=function(e,t){var i;if(e.split(".")[0]==="integrations"){var r=e.split(".")[1];if(((i=this.event.integrations)===null||i===void 0?void 0:i[r])===!1)return this.event}return sc(this.event,e,t),this.event},n.prototype.failedDelivery=function(){return this._failedDelivery},n.prototype.setFailedDelivery=function(e){this._failedDelivery=e},n.prototype.logs=function(){return this.logger.logs},n.prototype.flush=function(){this.logger.flush(),this.stats.flush()},n.prototype.toJSON=function(){return{id:this._id,event:this.event,logs:this.logger.logs,metrics:this.stats.metrics}},n})();function Og(n,e){var t={};return n.forEach(function(i){var r,s=void 0;{var o=i[e];s=typeof o!="string"?JSON.stringify(o):o}s!==void 0&&(t[s]=Mt(Mt([],(r=t[s])!==null&&r!==void 0?r:[],!0),[i],!1))}),t}var Fg=function(n){return typeof n=="object"&&n!==null&&"then"in n&&typeof n.then=="function"},zg=function(){var n,e,t=0;return{done:function(){return n},run:function(i){var r=i();return Fg(r)&&(++t===1&&(n=new Promise(function(s){return e=s})),r.finally(function(){return--t===0&&e()})),r}}};function Bg(n){return we(this,void 0,void 0,function(){var e;return Te(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,n()];case 1:return[2,t.sent()];case 2:return e=t.sent(),[2,Promise.reject(e)];case 3:return[2]}})})}function ns(n,e){n.log("debug","plugin",{plugin:e.name});var t=new Date().getTime(),i=e[n.event.type];if(i===void 0)return Promise.resolve(n);var r=Bg(function(){return i.apply(e,[n])}).then(function(s){var o=new Date().getTime()-t;return s.stats.gauge("plugin_time",o,["plugin:".concat(e.name)]),s}).catch(function(s){if(s instanceof xr&&s.type==="middleware_cancellation")throw s;return s instanceof xr?(n.log("warn",s.type,{plugin:e.name,error:s}),s):(n.log("error","plugin Error",{plugin:e.name,error:s}),n.stats.increment("plugin_error",1,["plugin:".concat(e.name)]),s)});return r}function kg(n,e){return ns(n,e).then(function(t){if(t instanceof Ro)return t;n.log("debug","Context canceled"),n.stats.increment("context_canceled"),n.cancel(t)})}var Vg=(function(n){Ft(e,n);function e(t){var i=n.call(this)||this;return i.criticalTasks=zg(),i.plugins=[],i.failedInitializations=[],i.flushing=!1,i.queue=t,i.queue.on(md,function(){i.scheduleFlush(0)}),i}return e.prototype.register=function(t,i,r){return we(this,void 0,void 0,function(){var s,o,a=this;return Te(this,function(c){switch(c.label){case 0:return this.plugins.push(i),s=function(l){a.failedInitializations.push(i.name),a.emit("initialization_failure",i),console.warn(i.name,l),t.log("warn","Failed to load destination",{plugin:i.name,error:l}),a.plugins=a.plugins.filter(function(u){return u!==i})},i.type==="destination"&&i.name!=="Segment.io"?(i.load(t,r).catch(s),[3,4]):[3,1];case 1:return c.trys.push([1,3,,4]),[4,i.load(t,r)];case 2:return c.sent(),[3,4];case 3:return o=c.sent(),s(o),[3,4];case 4:return[2]}})})},e.prototype.deregister=function(t,i,r){return we(this,void 0,void 0,function(){var s;return Te(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),i.unload?[4,Promise.resolve(i.unload(t,r))]:[3,2];case 1:o.sent(),o.label=2;case 2:return this.plugins=this.plugins.filter(function(a){return a.name!==i.name}),[3,4];case 3:return s=o.sent(),t.log("warn","Failed to unload destination",{plugin:i.name,error:s}),[3,4];case 4:return[2]}})})},e.prototype.dispatch=function(t){return we(this,void 0,void 0,function(){var i;return Te(this,function(r){return t.log("debug","Dispatching"),t.stats.increment("message_dispatched"),this.queue.push(t),i=this.subscribeToDelivery(t),this.scheduleFlush(0),[2,i]})})},e.prototype.subscribeToDelivery=function(t){return we(this,void 0,void 0,function(){var i=this;return Te(this,function(r){return[2,new Promise(function(s){var o=function(a,c){a.isSame(t)&&(i.off("flush",o),s(a))};i.on("flush",o)})]})})},e.prototype.dispatchSingle=function(t){return we(this,void 0,void 0,function(){var i=this;return Te(this,function(r){return t.log("debug","Dispatching"),t.stats.increment("message_dispatched"),this.queue.updateAttempts(t),t.attempts=1,[2,this.deliver(t).catch(function(s){var o=i.enqueuRetry(s,t);return o?i.subscribeToDelivery(t):(t.setFailedDelivery({reason:s}),t)})]})})},e.prototype.isEmpty=function(){return this.queue.length===0},e.prototype.scheduleFlush=function(t){var i=this;t===void 0&&(t=500),!this.flushing&&(this.flushing=!0,setTimeout(function(){i.flush().then(function(){setTimeout(function(){i.flushing=!1,i.queue.length&&i.scheduleFlush(0)},0)})},t))},e.prototype.deliver=function(t){return we(this,void 0,void 0,function(){var i,r,s,o;return Te(this,function(a){switch(a.label){case 0:return[4,this.criticalTasks.done()];case 1:a.sent(),i=Date.now(),a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.flushOne(t)];case 3:return t=a.sent(),r=Date.now()-i,this.emit("delivery_success",t),t.stats.gauge("delivered",r),t.log("debug","Delivered",t.event),[2,t];case 4:throw s=a.sent(),o=s,t.log("error","Failed to deliver",o),this.emit("delivery_failure",t,o),t.stats.increment("delivery_failed"),s;case 5:return[2]}})})},e.prototype.enqueuRetry=function(t,i){var r=!(t instanceof xr)||t.retry;return r?this.queue.pushWithBackoff(i):!1},e.prototype.flush=function(){return we(this,void 0,void 0,function(){var t,i,r;return Te(this,function(s){switch(s.label){case 0:if(this.queue.length===0)return[2,[]];if(t=this.queue.pop(),!t)return[2,[]];t.attempts=this.queue.getAttempts(t),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,this.deliver(t)];case 2:return t=s.sent(),this.emit("flush",t,!0),[3,4];case 3:return i=s.sent(),r=this.enqueuRetry(i,t),r||(t.setFailedDelivery({reason:i}),this.emit("flush",t,!1)),[2,[]];case 4:return[2,[t]]}})})},e.prototype.isReady=function(){return!0},e.prototype.availableExtensions=function(t){var i=this.plugins.filter(function(d){var m,g,v;if(d.type!=="destination"&&d.name!=="Segment.io")return!0;var p=void 0;return(m=d.alternativeNames)===null||m===void 0||m.forEach(function(x){t[x]!==void 0&&(p=t[x])}),(v=(g=t[d.name])!==null&&g!==void 0?g:p)!==null&&v!==void 0?v:(d.name==="Segment.io"?!0:t.All)!==!1}),r=Og(i,"type"),s=r.before,o=s===void 0?[]:s,a=r.enrichment,c=a===void 0?[]:a,l=r.destination,u=l===void 0?[]:l,h=r.after,f=h===void 0?[]:h;return{before:o,enrichment:c,destinations:u,after:f}},e.prototype.flushOne=function(t){var i,r;return we(this,void 0,void 0,function(){var s,o,a,c,l,u,m,h,f,d,m,g,v,p,x;return Te(this,function(y){switch(y.label){case 0:if(!this.isReady())throw new Error("Not ready");t.attempts>1&&this.emit("delivery_retry",t),s=this.availableExtensions((i=t.event.integrations)!==null&&i!==void 0?i:{}),o=s.before,a=s.enrichment,c=0,l=o,y.label=1;case 1:return c<l.length?(u=l[c],[4,kg(t,u)]):[3,4];case 2:m=y.sent(),m instanceof Ro&&(t=m),this.emit("message_enriched",t,u),y.label=3;case 3:return c++,[3,1];case 4:h=0,f=a,y.label=5;case 5:return h<f.length?(d=f[h],[4,ns(t,d)]):[3,8];case 6:m=y.sent(),m instanceof Ro&&(t=m),this.emit("message_enriched",t,d),y.label=7;case 7:return h++,[3,5];case 8:return g=this.availableExtensions((r=t.event.integrations)!==null&&r!==void 0?r:{}),v=g.destinations,p=g.after,[4,new Promise(function(_,R){setTimeout(function(){var w=v.map(function(A){return ns(t,A)});Promise.all(w).then(_).catch(R)},0)})];case 9:return y.sent(),t.stats.increment("message_delivered"),this.emit("message_delivered",t),x=p.map(function(_){return ns(t,_)}),[4,Promise.all(x)];case 10:return y.sent(),[2,t]}})})},e})(vl),Hg=function(n,e){var t=Date.now()-n;return Math.max((e??300)-t,0)};function Gg(n,e,t,i){return we(this,void 0,void 0,function(){var r,s;return Te(this,function(o){switch(o.label){case 0:return t.emit("dispatch_start",n),r=Date.now(),e.isEmpty()?[4,e.dispatchSingle(n)]:[3,2];case 1:return s=o.sent(),[3,4];case 2:return[4,e.dispatch(n)];case 3:s=o.sent(),o.label=4;case 4:return i?.callback?[4,Ig(s,i.callback,Hg(r,i.timeout))]:[3,6];case 5:s=o.sent(),o.label=6;case 6:return i?.debug&&s.flush(),[2,s]}})})}function Wg(n,e,t,i){var r,s=[n,e,t,i],o=Zt(n)?n.event:n;if(!o||!ei(o))throw new Error("Event missing");var a=Zt(n)?(r=n.properties)!==null&&r!==void 0?r:{}:Zt(e)?e:{},c={};pr(t)||(c=t??{}),Zt(n)&&!pr(e)&&(c=e??{});var l=s.find(pr);return[o,a,c,l]}function Cu(n,e,t,i,r){var s,o,a=null,c=null,l=[n,e,t,i,r],u=l.filter(ei);u.length===1?ei(l[1])?(c=l[1],a=null):(c=u[0],a=null):u.length===2&&(typeof l[0]=="string"&&(a=l[0]),typeof l[1]=="string"&&(c=l[1]));var h=l.find(pr),f=l.filter(Zt);return f.length===1?Zt(l[2])?(o={},s=l[2]):Zt(l[3])?(s={},o=l[3]):(s=f[0],o={}):f.length===2&&(s=f[0],o=f[1]),[a,c,s??(s={}),o??(o={}),h]}var Pu=function(n){return function(){for(var e,t,i,r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];for(var o={},a=["callback","options","traits","id"],c=0,l=r;c<l.length;c++){var u=l[c],h=a.pop();if(h==="id"){if(ei(u)||oc(u)){o.id=u.toString();continue}if(u==null)continue;h=a.pop()}if((h==="traits"||h==="options")&&(u==null||Zt(u))&&(o[h]=u),pr(u)){o.callback=u;break}}return[(e=o.id)!==null&&e!==void 0?e:n.id(),(t=o.traits)!==null&&t!==void 0?t:{},(i=o.options)!==null&&i!==void 0?i:{},o.callback]}};function Xg(n,e,t,i){oc(n)&&(n=n.toString()),oc(e)&&(e=e.toString());var r=[n,e,t,i],s=r.filter(ei),o=s[0],a=o===void 0?n:o,c=s[1],l=c===void 0?null:c,u=r.filter(Zt)[0],h=u===void 0?{}:u,f=r.find(pr);return[a,l,h,f]}function yl(){return typeof window<"u"}function fR(){return!yl()}function $g(){return yl()?window.navigator.onLine:!0}function us(){return!$g()}function qg(n,e){return e=e||{},new Promise(function(t,i){var r=new XMLHttpRequest,s=[],o=[],a={},c=function(){return{ok:(r.status/100|0)==2,statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:c,headers:{keys:function(){return s},entries:function(){return o},get:function(u){return a[u.toLowerCase()]},has:function(u){return u.toLowerCase()in a}}}};for(var l in r.open(e.method||"get",n,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(u,h,f){s.push(h=h.toLowerCase()),o.push([h,f]),a[h]=a[h]?a[h]+","+f:f}),t(c())},r.onerror=i,r.withCredentials=e.credentials=="include",e.headers)r.setRequestHeader(l,e.headers[l]);r.send(e.body||null)})}var xl=function(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof globalThis<"u"?globalThis:null},Wo=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=xl();return(t&&t.fetch||qg).apply(void 0,n)},Xo="1.79.0",gd="api.segment.io/v1",jg=function(n,e,t){var i=e.reduce(function(r,s){var o=s.split(":"),a=o[0],c=o[1];return r[a]=c,r},{});return{type:"Counter",metric:n,value:1,tags:Q(Q({},i),{library:"analytics.js",library_version:"npm:next-".concat(Xo)})}};function ca(n){console.error("Error sending segment performance metrics",n)}var Zg=(function(){function n(e){var t=this,i,r,s,o,a;if(this.host=(i=e?.host)!==null&&i!==void 0?i:gd,this.sampleRate=(r=e?.sampleRate)!==null&&r!==void 0?r:1,this.flushTimer=(s=e?.flushTimer)!==null&&s!==void 0?s:30*1e3,this.maxQueueSize=(o=e?.maxQueueSize)!==null&&o!==void 0?o:20,this.protocol=(a=e?.protocol)!==null&&a!==void 0?a:"https",this.queue=[],this.sampleRate>0){var c=!1,l=function(){c||(c=!0,t.flush().catch(ca),c=!1,setTimeout(l,t.flushTimer))};l()}}return n.prototype.increment=function(e,t){if(e.includes("analytics_js.")&&t.length!==0&&!(Math.random()>this.sampleRate)&&!(this.queue.length>=this.maxQueueSize)){var i=jg(e,t);this.queue.push(i),e.includes("error")&&this.flush().catch(ca)}},n.prototype.flush=function(){return we(this,void 0,void 0,function(){var e=this;return Te(this,function(t){switch(t.label){case 0:return this.queue.length<=0?[2]:[4,this.send().catch(function(i){ca(i),e.sampleRate=0})];case 1:return t.sent(),[2]}})})},n.prototype.send=function(){return we(this,void 0,void 0,function(){var e,t,i;return Te(this,function(r){return e={series:this.queue},this.queue=[],t={"Content-Type":"text/plain"},i="".concat(this.protocol,"://").concat(this.host,"/m"),[2,Wo(i,{headers:t,body:JSON.stringify(e),method:"POST"})]})})},n})(),Ts,_d=(function(n){Ft(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.initRemoteMetrics=function(t){Ts=new Zg(t)},e.prototype.increment=function(t,i,r){n.prototype.increment.call(this,t,i,r),Ts?.increment(t,r??[])},e})(vd),Cn=(function(n){Ft(e,n);function e(t,i){return n.call(this,t,i,new _d)||this}return e.system=function(){return new this({type:"track",event:"system"})},e})(Ro),yd="bpc",xd=function(n,e,t,i,r,s){return{__t:yd,c:e,p:i,u:n,s:t,t:r,r:s}},Yg=Object.keys(xd("","","","","",""));function Kg(n){if(!Zt(n)||n.__t!==yd)return!1;for(var e in n)if(!Yg.includes(e))return!1;return!0}var Jg=function(n,e){return n.indexOf("?")>-1?n:n+e},Qg=function(n){var e=n.indexOf("#");return e===-1?n:n.slice(0,e)},e_=function(n){try{return new URL(n).pathname}catch{return n[0]==="/"?n:"/"+n}},Md=function(n){var e=n.c,t=n.p,i=n.s,r=n.u,s=n.r,o=n.t,a=e?e_(e):t,c=e?Jg(e,i):Qg(r);return{path:a,referrer:s,search:i,title:o,url:c}},Sd=function(){var n=document.querySelector("link[rel='canonical']");return xd(location.href,n&&n.getAttribute("href")||void 0,location.search,location.pathname,document.title,document.referrer)},t_=function(){return Md(Sd())};function n_(n,e){return Object.assign.apply(Object,Mt([{}],e.map(function(t){var i;if(n&&Object.prototype.hasOwnProperty.call(n,t))return i={},i[t]=n[t],i}),!1))}var Gi=function(n,e){e===void 0&&(e=t_());var t=n.context,i;n.type==="page"&&(i=n.properties&&n_(n.properties,Object.keys(e)),n.properties=Q(Q(Q({},e),n.properties),n.name?{name:n.name}:{})),t.page=Q(Q(Q({},e),i),t.page)},i_=(function(n){Ft(e,n);function e(t){var i=n.call(this,{createMessageId:function(){return"ajs-next-".concat(Date.now(),"-").concat(_l())},onEventMethodCall:function(r){var s=r.options;i.maybeUpdateAnonId(s)},onFinishedEvent:function(r){return i.addIdentity(r),r}})||this;return i.user=t,i}return e.prototype.maybeUpdateAnonId=function(t){t?.anonymousId&&this.user.anonymousId(t.anonymousId)},e.prototype.addIdentity=function(t){this.user.id()&&(t.userId=this.user.id()),this.user.anonymousId()&&(t.anonymousId=this.user.anonymousId())},e.prototype.track=function(t,i,r,s,o){var a=n.prototype.track.call(this,t,i,r,s);return Gi(a,o),a},e.prototype.page=function(t,i,r,s,o,a){var c=n.prototype.page.call(this,t,i,r,s,o);return Gi(c,a),c},e.prototype.screen=function(t,i,r,s,o,a){var c=n.prototype.screen.call(this,t,i,r,s,o);return Gi(c,a),c},e.prototype.identify=function(t,i,r,s,o){var a=n.prototype.identify.call(this,t,i,r,s);return Gi(a,o),a},e.prototype.group=function(t,i,r,s,o){var a=n.prototype.group.call(this,t,i,r,s);return Gi(a,o),a},e.prototype.alias=function(t,i,r,s,o){var a=n.prototype.alias.call(this,t,i,r,s);return Gi(a,o),a},e})(Rg),r_=function(n){return"addMiddleware"in n&&n.type==="destination"},dn={getItem:function(){},setItem:function(){},removeItem:function(){}};try{dn=yl()&&window.localStorage?window.localStorage:dn}catch(n){console.warn("Unable to access localStorage",n)}function bd(n){var e=dn.getItem(n);return(e?JSON.parse(e):[]).map(function(t){return new Cn(t.event,t.id)})}function s_(n,e){var t=bd(n),i=Mt(Mt([],e,!0),t,!0),r=i.reduce(function(s,o){var a;return Q(Q({},s),(a={},a[o.id]=o,a))},{});dn.setItem(n,JSON.stringify(Object.values(r)))}function Ed(n){var e=dn.getItem(n);return e?JSON.parse(e):{}}function o_(n,e){var t=Ed(n);dn.setItem(n,JSON.stringify(Q(Q({},t),e)))}function Iu(n){dn.removeItem(n)}var a_=function(){return new Date().getTime()};function ac(n,e,t){t===void 0&&(t=0);var i=50,r="persisted-queue:v1:".concat(n,":lock"),s=function(l){return new Date().getTime()>l},o=dn.getItem(r),a=o?JSON.parse(o):null,c=a===null||s(a);if(c){dn.setItem(r,JSON.stringify(a_()+i)),e(),dn.removeItem(r);return}!c&&t<3?setTimeout(function(){ac(n,e,t+1)},i):console.error("Unable to retrieve lock")}var Ml=(function(n){Ft(e,n);function e(t,i){var r=n.call(this,t,[])||this,s="persisted-queue:v1:".concat(i,":items"),o="persisted-queue:v1:".concat(i,":seen"),a=[],c={};return ac(i,function(){try{a=bd(s),c=Ed(o),Iu(s),Iu(o),r.queue=Mt(Mt([],a,!0),r.queue,!0),r.seen=Q(Q({},c),r.seen)}catch(l){console.error(l)}}),window.addEventListener("pagehide",function(){if(r.todo>0){var l=Mt(Mt([],r.queue,!0),r.future,!0);try{ac(i,function(){s_(s,l),o_(o,r.seen)})}catch(u){console.error(u)}}}),r}return e})(gl),c_=(function(n){Ft(e,n);function e(t){return n.call(this,typeof t=="string"?new Ml(4,t):t)||this}return e.prototype.flush=function(){return we(this,void 0,void 0,function(){return Te(this,function(t){return us()?[2,[]]:[2,n.prototype.flush.call(this)]})})},e})(Vg);function Sl(n){for(var e=n.constructor.prototype,t=0,i=Object.getOwnPropertyNames(e);t<i.length;t++){var r=i[t];if(r!=="constructor"){var s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);s&&typeof s.value=="function"&&(n[r]=n[r].bind(n))}}return n}/*! js-cookie v3.0.7 | MIT */function As(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)i!=="__proto__"&&(n[i]=t[i])}return n}var l_={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function cc(n,e){function t(r,s,o){if(!(typeof document>"u")){o=As({},e,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in o)o[c]&&(a+="; "+c,o[c]!==!0&&(a+="="+o[c].split(";")[0]));return document.cookie=r+"="+n.write(s,r)+a}}function i(r){if(!(typeof document>"u"||arguments.length&&!r)){for(var s=document.cookie?document.cookie.split("; "):[],o={},a=0;a<s.length;a++){var c=s[a].split("="),l=c.slice(1).join("=");try{var u=decodeURIComponent(c[0]);if(u in o||(o[u]=n.read(l,u)),r===u)break}catch{}}return r?o[r]:o}}return Object.create({set:t,get:i,remove:function(r,s){t(r,"",As({},s,{expires:-1}))},withAttributes:function(r){return cc(this.converter,As({},this.attributes,r))},withConverter:function(r){return cc(As({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(n)}})}var wn=cc(l_,{path:"/"});function u_(n){var e=n.hostname,t=e.split("."),i=t[t.length-1],r=[];if(t.length===4&&parseInt(i,10)>0||t.length<=1)return r;for(var s=t.length-2;s>=0;--s)r.push(t.slice(s).join("."));return r}function h_(n){try{return new URL(n)}catch{return}}function wd(n){var e=h_(n);if(e)for(var t=u_(e),i=0;i<t.length;++i){var r="__tld__",s=t[i],o={domain:"."+s};try{if(wn.set(r,"1",o),wn.get(r))return wn.remove(r,o),s}catch{return}}}var f_=365,Td=(function(){function n(e){e===void 0&&(e=n.defaults),this.options=Q(Q({},n.defaults),e)}return Object.defineProperty(n,"defaults",{get:function(){return{maxage:f_,domain:wd(window.location.href),path:"/",sameSite:"Lax"}},enumerable:!1,configurable:!0}),n.prototype.opts=function(){return{sameSite:this.options.sameSite,expires:this.options.maxage,domain:this.options.domain,path:this.options.path,secure:this.options.secure}},n.prototype.get=function(e){var t;try{var i=wn.get(e);if(i==null)return null;try{return(t=JSON.parse(i))!==null&&t!==void 0?t:null}catch{return i??null}}catch{return null}},n.prototype.set=function(e,t){typeof t=="string"?wn.set(e,t,this.opts()):t===null?wn.remove(e,this.opts()):wn.set(e,JSON.stringify(t),this.opts())},n.prototype.remove=function(e){return wn.remove(e,this.opts())},n})(),d_=(function(){function n(){}return n.prototype.localStorageWarning=function(e,t){console.warn("Unable to access ".concat(e,", localStorage may be ").concat(t))},n.prototype.get=function(e){var t;try{var i=localStorage.getItem(e);if(i===null)return null;try{return(t=JSON.parse(i))!==null&&t!==void 0?t:null}catch{return i??null}}catch{return this.localStorageWarning(e,"unavailable"),null}},n.prototype.set=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{this.localStorageWarning(e,"full")}},n.prototype.remove=function(e){try{return localStorage.removeItem(e)}catch{this.localStorageWarning(e,"unavailable")}},n})(),bl=(function(){function n(){this.cache={}}return n.prototype.get=function(e){var t;return(t=this.cache[e])!==null&&t!==void 0?t:null},n.prototype.set=function(e,t){this.cache[e]=t},n.prototype.remove=function(e){delete this.cache[e]},n})(),Nt={Cookie:"cookie",LocalStorage:"localStorage",Memory:"memory"};function Ad(n){return n&&n.stores&&Array.isArray(n.stores)&&n.stores.every(function(e){return Object.values(Nt).includes(e)})}function p_(n){return typeof n=="object"&&n.name!==void 0}var la=function(n,e,t,i){console.warn("".concat(n.constructor.name,": Can't ").concat(e,' key "').concat(t,'" | Err: ').concat(i))},Ii=(function(){function n(e){this.stores=e}return n.prototype.get=function(e){for(var t=null,i=0,r=this.stores;i<r.length;i++){var s=r[i];try{if(t=s.get(e),t!=null)return t}catch(o){la(s,"get",e,o)}}return null},n.prototype.set=function(e,t){this.stores.forEach(function(i){try{i.set(e,t)}catch(r){la(i,"set",e,r)}})},n.prototype.clear=function(e){this.stores.forEach(function(t){try{t.remove(e)}catch(i){la(t,"remove",e,i)}})},n.prototype.getAndSync=function(e){var t=this.get(e),i=typeof t=="number"?t.toString():t;return this.set(e,i),i},n})();function lc(n){var e=n.map(function(t){var i,r;switch(p_(t)?(i=t.name,r=t.settings):i=t,i){case Nt.Cookie:return new Td(r);case Nt.LocalStorage:return new d_;case Nt.Memory:return new bl;default:throw new Error("Unknown Store Type: ".concat(t))}});return e}function Rd(n,e){return n.map(function(t){return e&&t===Nt.Cookie?{name:t,settings:e}:t})}var oi={persist:!0,cookie:{key:"ajs_user_id",oldKey:"ajs_user"},localStorage:{key:"ajs_user_traits"}},Cd=(function(){function n(e,t){e===void 0&&(e=oi);var i=this,r,s,o,a;this.options={},this.id=function(l){if(i.options.disable)return null;var u=i.identityStore.getAndSync(i.idKey);if(l!==void 0){i.identityStore.set(i.idKey,l);var h=l!==u&&u!==null&&l!==null;h&&i.anonymousId(null)}var f=i.identityStore.getAndSync(i.idKey);if(f)return f;var d=i.legacyUserStore.get(oi.cookie.oldKey);return d?typeof d=="object"?d.id:d:null},this.anonymousId=function(l){var u,h;if(i.options.disable)return null;if(l===void 0){var f=(u=i.identityStore.getAndSync(i.anonKey))!==null&&u!==void 0?u:(h=i.legacySIO())===null||h===void 0?void 0:h[0];if(f)return f}return l===null?(i.identityStore.set(i.anonKey,null),i.identityStore.getAndSync(i.anonKey)):(i.identityStore.set(i.anonKey,l??_l()),i.identityStore.getAndSync(i.anonKey))},this.traits=function(l){var u;if(!i.options.disable)return l===null&&(l={}),l&&i.traitsStore.set(i.traitsKey,l??{}),(u=i.traitsStore.get(i.traitsKey))!==null&&u!==void 0?u:{}},this.options=Q(Q({},oi),e),this.cookieOptions=t,this.idKey=(s=(r=e.cookie)===null||r===void 0?void 0:r.key)!==null&&s!==void 0?s:oi.cookie.key,this.traitsKey=(a=(o=e.localStorage)===null||o===void 0?void 0:o.key)!==null&&a!==void 0?a:oi.localStorage.key,this.anonKey="ajs_anonymous_id",this.identityStore=this.createStorage(this.options,t),this.legacyUserStore=this.createStorage(this.options,t,function(l){return l===Nt.Cookie}),this.traitsStore=this.createStorage(this.options,t,function(l){return l!==Nt.Cookie});var c=this.legacyUserStore.get(oi.cookie.oldKey);c&&typeof c=="object"&&(c.id&&this.id(c.id),c.traits&&this.traits(c.traits)),Sl(this)}return n.prototype.legacySIO=function(){var e=this.legacyUserStore.get("_sio");if(!e)return null;var t=e.split("----"),i=t[0],r=t[1];return[i,r]},n.prototype.identify=function(e,t){if(!this.options.disable){t=t??{};var i=this.id();(i===null||i===e)&&(t=Q(Q({},this.traits()),t)),e&&this.id(e),this.traits(t)}},n.prototype.logout=function(){this.anonymousId(null),this.id(null),this.traits({})},n.prototype.reset=function(){this.logout(),this.identityStore.clear(this.idKey),this.identityStore.clear(this.anonKey),this.traitsStore.clear(this.traitsKey)},n.prototype.load=function(){return new n(this.options,this.cookieOptions)},n.prototype.save=function(){return!0},n.prototype.createStorage=function(e,t,i){var r=[Nt.LocalStorage,Nt.Cookie,Nt.Memory];return e.disable?new Ii([]):e.persist?(e.storage!==void 0&&e.storage!==null&&Ad(e.storage)&&(r=e.storage.stores),e.localStorageFallbackDisabled&&(r=r.filter(function(s){return s!==Nt.LocalStorage})),i&&(r=r.filter(i)),new Ii(lc(Rd(r,t)))):new Ii([new bl])},n.defaults=oi,n})(),Lu={persist:!0,cookie:{key:"ajs_group_id"},localStorage:{key:"ajs_group_properties"}},m_=(function(n){Ft(e,n);function e(t,i){t===void 0&&(t=Lu);var r=n.call(this,Q(Q({},Lu),t),i)||this;return r.anonymousId=function(s){},Sl(r),r}return e})(Cd),El="analytics";function Pd(){return window[El]}function v_(n){El=n}function g_(n){window[El]=n}var __=function(n){return typeof n=="object"&&n!==null&&"then"in n&&typeof n.then=="function"},Id=function(n,e,t){t.getAndRemove(n).forEach(function(i){$o(e,i).catch(console.error)})},y_=function(n,e){return we(void 0,void 0,void 0,function(){var t,i,r;return Te(this,function(s){switch(s.label){case 0:t=0,i=e.getAndRemove("addSourceMiddleware"),s.label=1;case 1:return t<i.length?(r=i[t],[4,$o(n,r).catch(console.error)]):[3,4];case 2:s.sent(),s.label=3;case 3:return t++,[3,1];case 4:return[2]}})})},x_=function(n,e){return we(void 0,void 0,void 0,function(){var t,i,r;return Te(this,function(s){switch(s.label){case 0:t=0,i=e.getAndRemove("register"),s.label=1;case 1:return t<i.length?(r=i[t],[4,$o(n,r).catch(console.error)]):[3,4];case 2:s.sent(),s.label=3;case 3:return t++,[3,1];case 4:return[2]}})})},M_=Id.bind(void 0,"on"),S_=Id.bind(void 0,"setAnonymousId"),b_=function(n,e){Object.keys(e.calls).forEach(function(t){e.getAndRemove(t).forEach(function(i){setTimeout(function(){$o(n,i).catch(console.error)},0)})})},Wi=function(n){if(Ld(n)){var e=n.pop();return Md(e)}},Ld=function(n){var e=n[n.length-1];return Kg(e)},uc=(function(){function n(e,t,i,r){i===void 0&&(i=function(){}),r===void 0&&(r=console.error),this.method=e,this.resolve=i,this.reject=r,this.called=!1,this.args=t}return n})(),E_=(function(){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._callMap={},this.add.apply(this,e)}return Object.defineProperty(n.prototype,"calls",{get:function(){return this._pushSnippetWindowBuffer(),this._callMap},set:function(e){this._callMap=e},enumerable:!1,configurable:!0}),n.prototype.get=function(e){var t;return(t=this.calls[e])!==null&&t!==void 0?t:[]},n.prototype.getAndRemove=function(e){var t=this.get(e);return this.calls[e]=[],t},n.prototype.add=function(){for(var e=this,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];t.forEach(function(r){var s=["track","screen","alias","group","page","identify"];s.includes(r.method)&&!Ld(r.args)&&(r.args=Mt(Mt([],r.args,!0),[Sd()],!1)),e.calls[r.method]?e.calls[r.method].push(r):e.calls[r.method]=[r]})},n.prototype.clear=function(){this._pushSnippetWindowBuffer(),this.calls={}},n.prototype.toArray=function(){var e;return(e=[]).concat.apply(e,Object.values(this.calls))},n.prototype._pushSnippetWindowBuffer=function(){},n})();function $o(n,e){return we(this,void 0,void 0,function(){var t,i;return Te(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),e.called?[2,void 0]:(e.called=!0,t=n[e.method].apply(n,e.args),__(t)?[4,t]:[3,2]);case 1:r.sent(),r.label=2;case 2:return e.resolve(t),[3,4];case 3:return i=r.sent(),e.reject(i),[3,4];case 4:return[2]}})})}var w_=(function(){function n(e){var t=this;this.trackSubmit=this._createMethod("trackSubmit"),this.trackClick=this._createMethod("trackClick"),this.trackLink=this._createMethod("trackLink"),this.pageView=this._createMethod("pageview"),this.identify=this._createMethod("identify"),this.reset=this._createMethod("reset"),this.group=this._createMethod("group"),this.track=this._createMethod("track"),this.ready=this._createMethod("ready"),this.alias=this._createMethod("alias"),this.debug=this._createChainableMethod("debug"),this.page=this._createMethod("page"),this.once=this._createChainableMethod("once"),this.off=this._createChainableMethod("off"),this.on=this._createChainableMethod("on"),this.addSourceMiddleware=this._createMethod("addSourceMiddleware"),this.setAnonymousId=this._createMethod("setAnonymousId"),this.addDestinationMiddleware=this._createMethod("addDestinationMiddleware"),this.screen=this._createMethod("screen"),this.register=this._createMethod("register"),this.deregister=this._createMethod("deregister"),this.user=this._createMethod("user"),this.VERSION=Xo,this._preInitBuffer=new E_,this._promise=e(this._preInitBuffer),this._promise.then(function(i){var r=i[0],s=i[1];t.instance=r,t.ctx=s}).catch(function(){})}return n.prototype.then=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return(e=this._promise).then.apply(e,t)},n.prototype.catch=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return(e=this._promise).catch.apply(e,t)},n.prototype.finally=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return(e=this._promise).finally.apply(e,t)},n.prototype._createMethod=function(e){var t=this;return function(){for(var i,r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];if(t.instance){var o=(i=t.instance)[e].apply(i,r);return Promise.resolve(o)}return new Promise(function(a,c){t._preInitBuffer.add(new uc(e,r,a,c))})}},n.prototype._createChainableMethod=function(e){var t=this;return function(){for(var i,r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];return t.instance?((i=t.instance)[e].apply(i,r),t):(t._preInitBuffer.add(new uc(e,r)),t)}},n})(),Fr={},ai={},Xi={},ua={exports:{}},Du;function qo(){return Du||(Du=1,(function(n){n.exports=e(t),n.exports.find=n.exports,n.exports.replace=function(a,c,l,u){return e(r).call(this,a,c,l,u),a},n.exports.del=function(a,c,l){return e(i).call(this,a,c,null,l),a};function e(a){return function(c,l,u,h){var f=h&&o(h.normalizer)?h.normalizer:s;l=f(l);for(var d,m=!1;!m;)g();function g(){for(d in c){var v=f(d);if(l.indexOf(v)===0){var p=l.substr(v.length);if(p.charAt(0)==="."||p.length===0){l=p.substr(1);var x=c[d];if(x==null){m=!0;return}if(!l.length){m=!0;return}c=x;return}}}d=void 0,m=!0}if(d)return c==null?c:a(c,d,u)}}function t(a,c){if(a.hasOwnProperty(c))return a[c]}function i(a,c){return a.hasOwnProperty(c)&&delete a[c],a}function r(a,c,l){return a.hasOwnProperty(c)&&(a[c]=l),a}function s(a){return a.replace(/[^a-zA-Z0-9\.]+/g,"").toLowerCase()}function o(a){return typeof a=="function"}})(ua)),ua.exports}var Nu;function T_(){if(Nu)return Xi;Nu=1;var n=Xi&&Xi.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Xi,"__esModule",{value:!0});var e=n(qo());function t(r,s){return function(){var o=this.traits(),a=this.properties?this.properties():{};return e.default(o,"address."+r)||e.default(o,r)||(s?e.default(o,"address."+s):null)||(s?e.default(o,s):null)||e.default(a,"address."+r)||e.default(a,r)||(s?e.default(a,"address."+s):null)||(s?e.default(a,s):null)}}function i(r){r.zip=t("postalCode","zip"),r.country=t("country"),r.street=t("street"),r.state=t("state"),r.city=t("city"),r.region=t("region")}return Xi.default=i,Xi}var zr={},Uu;function A_(){if(Uu)return zr;Uu=1,Object.defineProperty(zr,"__esModule",{value:!0}),zr.clone=void 0;function n(e){if(typeof e!="object")return e;if(Object.prototype.toString.call(e)==="[object Object]"){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=n(e[i]));return t}else return Array.isArray(e)?e.map(n):e}return zr.clone=n,zr}var Rs={},Ou;function R_(){if(Ou)return Rs;Ou=1,Object.defineProperty(Rs,"__esModule",{value:!0});var n={Salesforce:!0};function e(t){return!n[t]}return Rs.default=e,Rs}var Cs={},Fu;function Dd(){if(Fu)return Cs;Fu=1;var n=/^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;return Cs.parse=function(e){var t=[1,5,6,7,11,12],i=n.exec(e),r=0;if(!i)return new Date(e);for(var s=0,o;o=t[s];s++)i[o]=parseInt(i[o],10)||0;i[2]=parseInt(i[2],10)||1,i[3]=parseInt(i[3],10)||1,i[2]--,i[8]=i[8]?(i[8]+"00").substring(0,3):0,i[4]===" "?r=new Date().getTimezoneOffset():i[9]!=="Z"&&i[10]&&(r=i[11]*60+i[12],i[10]==="+"&&(r=0-r));var a=Date.UTC(i[1],i[2],i[3],i[5],i[6]+r,i[7],i[8]);return new Date(a)},Cs.is=function(e,t){return typeof e!="string"||t&&/^\d{4}-\d{2}-\d{2}/.test(e)===!1?!1:n.test(e)},Cs}var Ps={},zu;function C_(){if(zu)return Ps;zu=1;var n=/\d{13}/;return Ps.is=function(e){return n.test(e)},Ps.parse=function(e){return e=parseInt(e,10),new Date(e)},Ps}var Is={},Bu;function P_(){if(Bu)return Is;Bu=1;var n=/\d{10}/;return Is.is=function(e){return n.test(e)},Is.parse=function(e){var t=parseInt(e,10)*1e3;return new Date(t)},Is}var ha,ku;function wl(){if(ku)return ha;ku=1;var n=Dd(),e=C_(),t=P_(),i=Object.prototype,r=i.toString;function s(c){return r.call(c)==="[object Date]"}function o(c){return r.call(c)==="[object Number]"}ha=function(l){return s(l)?l:o(l)?new Date(a(l)):n.is(l)?n.parse(l):e.is(l)?e.parse(l):t.is(l)?t.parse(l):new Date(l)};function a(c){return c<315576e5?c*1e3:c}return ha}var fa,Vu;function I_(){if(Vu)return fa;Vu=1;var n=Dd();fa=e;function e(r,s){return s===void 0&&(s=!0),r&&typeof r=="object"?t(r,s):Array.isArray(r)?i(r,s):n.is(r,s)?n.parse(r):r}function t(r,s){return Object.keys(r).forEach(function(o){r[o]=e(r[o],s)}),r}function i(r,s){return r.forEach(function(o,a){r[a]=e(o,s)}),r}return fa}var Hu;function Bi(){if(Hu)return ai;Hu=1;var n=ai&&ai.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ai,"__esModule",{value:!0}),ai.Facade=void 0;var e=n(T_()),t=A_(),i=n(R_()),r=n(wl()),s=n(qo()),o=n(I_());function a(u,h){h=h||{},this.raw=t.clone(u),"clone"in h||(h.clone=!0),h.clone&&(u=t.clone(u)),"traverse"in h||(h.traverse=!0),"timestamp"in u?u.timestamp=r.default(u.timestamp):u.timestamp=new Date,h.traverse&&o.default(u),this.opts=h,this.obj=u}ai.Facade=a;var c=a.prototype;c.proxy=function(u){var h=u.split(".");u=h.shift();var f=this[u]||this.obj[u];return f&&(typeof f=="function"&&(f=f.call(this)||{}),h.length===0?this.opts.clone?l(f):f:(f=s.default(f,h.join(".")),this.opts.clone?l(f):f))},c.field=function(u){var h=this.obj[u];return this.opts.clone?l(h):h},a.proxy=function(u){return function(){return this.proxy(u)}},a.field=function(u){return function(){return this.field(u)}},a.multi=function(u){return function(){var h=this.proxy(u+"s");if(Array.isArray(h))return h;var f=this.proxy(u);return f&&(f=[this.opts.clone?t.clone(f):f]),f||[]}},a.one=function(u){return function(){var h=this.proxy(u);if(h)return h;var f=this.proxy(u+"s");if(Array.isArray(f))return f[0]}},c.json=function(){var u=this.opts.clone?t.clone(this.obj):this.obj;return this.type&&(u.type=this.type()),u},c.rawEvent=function(){return this.raw},c.options=function(u){var h=this.obj.options||this.obj.context||{},f=this.opts.clone?t.clone(h):h;if(!u)return f;if(this.enabled(u)){var d=this.integrations(),m=d[u]||s.default(d,u);return typeof m!="object"&&(m=s.default(this.options(),u)),typeof m=="object"?m:{}}},c.context=c.options,c.enabled=function(u){var h=this.proxy("options.providers.all");typeof h!="boolean"&&(h=this.proxy("options.all")),typeof h!="boolean"&&(h=this.proxy("integrations.all")),typeof h!="boolean"&&(h=!0);var f=h&&i.default(u),d=this.integrations();if(d.providers&&d.providers.hasOwnProperty(u)&&(f=d.providers[u]),d.hasOwnProperty(u)){var m=d[u];typeof m=="boolean"?f=m:f=!0}return!!f},c.integrations=function(){return this.obj.integrations||this.proxy("options.providers")||this.options()},c.active=function(){var u=this.proxy("options.active");return u==null&&(u=!0),u},c.anonymousId=function(){return this.field("anonymousId")||this.field("sessionId")},c.sessionId=c.anonymousId,c.groupId=a.proxy("options.groupId"),c.traits=function(u){var h=this.proxy("options.traits")||{},f=this.userId();u=u||{},f&&(h.id=f);for(var d in u)if(Object.prototype.hasOwnProperty.call(u,d)){var m=this[d]==null?this.proxy("options.traits."+d):this[d]();if(m==null)continue;h[u[d]]=m,delete h[d]}return h},c.library=function(){var u=this.proxy("options.library");return u?typeof u=="string"?{name:u,version:null}:u:{name:"unknown",version:null}},c.device=function(){var u=this.proxy("context.device");(typeof u!="object"||u===null)&&(u={});var h=this.library().name;return u.type||(h.indexOf("ios")>-1&&(u.type="ios"),h.indexOf("android")>-1&&(u.type="android")),u},c.userAgent=a.proxy("context.userAgent"),c.timezone=a.proxy("context.timezone"),c.timestamp=a.field("timestamp"),c.channel=a.field("channel"),c.ip=a.proxy("context.ip"),c.userId=a.field("userId"),e.default(c);function l(u){return t.clone(u)}return ai}var ci={},Ls={exports:{}},Gu;function ki(){return Gu||(Gu=1,typeof Object.create=="function"?Ls.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:Ls.exports=function(e,t){if(t){e.super_=t;var i=function(){};i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}}),Ls.exports}var Wu;function L_(){if(Wu)return ci;Wu=1;var n=ci&&ci.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ci,"__esModule",{value:!0}),ci.Alias=void 0;var e=n(ki()),t=Bi();function i(r,s){t.Facade.call(this,r,s)}return ci.Alias=i,e.default(i,t.Facade),i.prototype.action=function(){return"alias"},i.prototype.type=i.prototype.action,i.prototype.previousId=function(){return this.field("previousId")||this.field("from")},i.prototype.from=i.prototype.previousId,i.prototype.userId=function(){return this.field("userId")||this.field("to")},i.prototype.to=i.prototype.userId,ci}var li={},Ds={},Xu;function jo(){if(Xu)return Ds;Xu=1,Object.defineProperty(Ds,"__esModule",{value:!0});var n=/.+\@.+\..+/;function e(t){return n.test(t)}return Ds.default=e,Ds}var $u;function D_(){if($u)return li;$u=1;var n=li&&li.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(li,"__esModule",{value:!0}),li.Group=void 0;var e=n(ki()),t=n(jo()),i=n(wl()),r=Bi();function s(a,c){r.Facade.call(this,a,c)}li.Group=s,e.default(s,r.Facade);var o=s.prototype;return o.action=function(){return"group"},o.type=o.action,o.groupId=r.Facade.field("groupId"),o.created=function(){var a=this.proxy("traits.createdAt")||this.proxy("traits.created")||this.proxy("properties.createdAt")||this.proxy("properties.created");if(a)return i.default(a)},o.email=function(){var a=this.proxy("traits.email");if(a)return a;var c=this.groupId();if(t.default(c))return c},o.traits=function(a){var c=this.properties(),l=this.groupId();a=a||{},l&&(c.id=l);for(var u in a)if(Object.prototype.hasOwnProperty.call(a,u)){var h=this[u]==null?this.proxy("traits."+u):this[u]();if(h==null)continue;c[a[u]]=h,delete c[u]}return c},o.name=r.Facade.proxy("traits.name"),o.industry=r.Facade.proxy("traits.industry"),o.employees=r.Facade.proxy("traits.employees"),o.properties=function(){return this.field("traits")||this.field("properties")||{}},li}var ui={},qu;function Nd(){if(qu)return ui;qu=1;var n=ui&&ui.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(ui,"__esModule",{value:!0}),ui.Identify=void 0;var e=Bi(),t=n(qo()),i=n(ki()),r=n(jo()),s=n(wl()),o=function(l){return l.trim()};function a(l,u){e.Facade.call(this,l,u)}ui.Identify=a,i.default(a,e.Facade);var c=a.prototype;return c.action=function(){return"identify"},c.type=c.action,c.traits=function(l){var u=this.field("traits")||{},h=this.userId();l=l||{},h&&(u.id=h);for(var f in l){var d=this[f]==null?this.proxy("traits."+f):this[f]();d!=null&&(u[l[f]]=d,f!==l[f]&&delete u[f])}return u},c.email=function(){var l=this.proxy("traits.email");if(l)return l;var u=this.userId();if(r.default(u))return u},c.created=function(){var l=this.proxy("traits.created")||this.proxy("traits.createdAt");if(l)return s.default(l)},c.companyCreated=function(){var l=this.proxy("traits.company.created")||this.proxy("traits.company.createdAt");if(l)return s.default(l)},c.companyName=function(){return this.proxy("traits.company.name")},c.name=function(){var l=this.proxy("traits.name");if(typeof l=="string")return o(l);var u=this.firstName(),h=this.lastName();if(u&&h)return o(u+" "+h)},c.firstName=function(){var l=this.proxy("traits.firstName");if(typeof l=="string")return o(l);var u=this.proxy("traits.name");if(typeof u=="string")return o(u).split(" ")[0]},c.lastName=function(){var l=this.proxy("traits.lastName");if(typeof l=="string")return o(l);var u=this.proxy("traits.name");if(typeof u=="string"){var h=o(u).indexOf(" ");if(h!==-1)return o(u.substr(h+1))}},c.uid=function(){return this.userId()||this.username()||this.email()},c.description=function(){return this.proxy("traits.description")||this.proxy("traits.background")},c.age=function(){var l=this.birthday(),u=t.default(this.traits(),"age");if(u!=null)return u;if(l instanceof Date){var h=new Date;return h.getFullYear()-l.getFullYear()}},c.avatar=function(){var l=this.traits();return t.default(l,"avatar")||t.default(l,"photoUrl")||t.default(l,"avatarUrl")},c.position=function(){var l=this.traits();return t.default(l,"position")||t.default(l,"jobTitle")},c.username=e.Facade.proxy("traits.username"),c.website=e.Facade.one("traits.website"),c.websites=e.Facade.multi("traits.website"),c.phone=e.Facade.one("traits.phone"),c.phones=e.Facade.multi("traits.phone"),c.address=e.Facade.proxy("traits.address"),c.gender=e.Facade.proxy("traits.gender"),c.birthday=e.Facade.proxy("traits.birthday"),ui}var hi={},ju;function Tl(){if(ju)return hi;ju=1;var n=hi&&hi.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(hi,"__esModule",{value:!0}),hi.Track=void 0;var e=n(ki()),t=Bi(),i=Nd(),r=n(jo()),s=n(qo());function o(l,u){t.Facade.call(this,l,u)}hi.Track=o,e.default(o,t.Facade);var a=o.prototype;a.action=function(){return"track"},a.type=a.action,a.event=t.Facade.field("event"),a.value=t.Facade.proxy("properties.value"),a.category=t.Facade.proxy("properties.category"),a.id=t.Facade.proxy("properties.id"),a.productId=function(){return this.proxy("properties.product_id")||this.proxy("properties.productId")},a.promotionId=function(){return this.proxy("properties.promotion_id")||this.proxy("properties.promotionId")},a.cartId=function(){return this.proxy("properties.cart_id")||this.proxy("properties.cartId")},a.checkoutId=function(){return this.proxy("properties.checkout_id")||this.proxy("properties.checkoutId")},a.paymentId=function(){return this.proxy("properties.payment_id")||this.proxy("properties.paymentId")},a.couponId=function(){return this.proxy("properties.coupon_id")||this.proxy("properties.couponId")},a.wishlistId=function(){return this.proxy("properties.wishlist_id")||this.proxy("properties.wishlistId")},a.reviewId=function(){return this.proxy("properties.review_id")||this.proxy("properties.reviewId")},a.orderId=function(){return this.proxy("properties.id")||this.proxy("properties.order_id")||this.proxy("properties.orderId")},a.sku=t.Facade.proxy("properties.sku"),a.tax=t.Facade.proxy("properties.tax"),a.name=t.Facade.proxy("properties.name"),a.price=t.Facade.proxy("properties.price"),a.total=t.Facade.proxy("properties.total"),a.repeat=t.Facade.proxy("properties.repeat"),a.coupon=t.Facade.proxy("properties.coupon"),a.shipping=t.Facade.proxy("properties.shipping"),a.discount=t.Facade.proxy("properties.discount"),a.shippingMethod=function(){return this.proxy("properties.shipping_method")||this.proxy("properties.shippingMethod")},a.paymentMethod=function(){return this.proxy("properties.payment_method")||this.proxy("properties.paymentMethod")},a.description=t.Facade.proxy("properties.description"),a.plan=t.Facade.proxy("properties.plan"),a.subtotal=function(){var l=s.default(this.properties(),"subtotal"),u=this.total()||this.revenue();if(l)return l;if(!u)return 0;if(this.total()){var h=this.tax();h&&(u-=h),h=this.shipping(),h&&(u-=h),h=this.discount(),h&&(u+=h)}return u},a.products=function(){var l=this.properties(),u=s.default(l,"products");return Array.isArray(u)?u.filter(function(h){return h!==null}):[]},a.quantity=function(){var l=this.obj.properties||{};return l.quantity||1},a.currency=function(){var l=this.obj.properties||{};return l.currency||"USD"},a.referrer=function(){return this.proxy("context.referrer.url")||this.proxy("context.page.referrer")||this.proxy("properties.referrer")},a.query=t.Facade.proxy("options.query"),a.properties=function(l){var u=this.field("properties")||{};l=l||{};for(var h in l)if(Object.prototype.hasOwnProperty.call(l,h)){var f=this[h]==null?this.proxy("properties."+h):this[h]();if(f==null)continue;u[l[h]]=f,delete u[h]}return u},a.username=function(){return this.proxy("traits.username")||this.proxy("properties.username")||this.userId()||this.sessionId()},a.email=function(){var l=this.proxy("traits.email")||this.proxy("properties.email")||this.proxy("options.traits.email");if(l)return l;var u=this.userId();if(r.default(u))return u},a.revenue=function(){var l=this.proxy("properties.revenue"),u=this.event(),h=/^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;return!l&&u&&u.match(h)&&(l=this.proxy("properties.total")),c(l)},a.cents=function(){var l=this.revenue();return typeof l!="number"?this.value()||0:l*100},a.identify=function(){var l=this.json();return l.traits=this.traits(),new i.Identify(l,this.opts)};function c(l){if(l){if(typeof l=="number")return l;if(typeof l=="string"&&(l=l.replace(/\$/g,""),l=parseFloat(l),!isNaN(l)))return l}}return hi}var fi={},Zu;function Ud(){if(Zu)return fi;Zu=1;var n=fi&&fi.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(fi,"__esModule",{value:!0}),fi.Page=void 0;var e=n(ki()),t=Bi(),i=Tl(),r=n(jo());function s(a,c){t.Facade.call(this,a,c)}fi.Page=s,e.default(s,t.Facade);var o=s.prototype;return o.action=function(){return"page"},o.type=o.action,o.category=t.Facade.field("category"),o.name=t.Facade.field("name"),o.title=t.Facade.proxy("properties.title"),o.path=t.Facade.proxy("properties.path"),o.url=t.Facade.proxy("properties.url"),o.referrer=function(){return this.proxy("context.referrer.url")||this.proxy("context.page.referrer")||this.proxy("properties.referrer")},o.properties=function(a){var c=this.field("properties")||{},l=this.category(),u=this.name();a=a||{},l&&(c.category=l),u&&(c.name=u);for(var h in a)if(Object.prototype.hasOwnProperty.call(a,h)){var f=this[h]==null?this.proxy("properties."+h):this[h]();if(f==null)continue;c[a[h]]=f,h!==a[h]&&delete c[h]}return c},o.email=function(){var a=this.proxy("context.traits.email")||this.proxy("properties.email");if(a)return a;var c=this.userId();if(r.default(c))return c},o.fullName=function(){var a=this.category(),c=this.name();return c&&a?a+" "+c:c},o.event=function(a){return a?"Viewed "+a+" Page":"Loaded a Page"},o.track=function(a){var c=this.json();return c.event=this.event(a),c.timestamp=this.timestamp(),c.properties=this.properties(),new i.Track(c,this.opts)},fi}var di={},Yu;function N_(){if(Yu)return di;Yu=1;var n=di&&di.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(di,"__esModule",{value:!0}),di.Screen=void 0;var e=n(ki()),t=Ud(),i=Tl();function r(s,o){t.Page.call(this,s,o)}return di.Screen=r,e.default(r,t.Page),r.prototype.action=function(){return"screen"},r.prototype.type=r.prototype.action,r.prototype.event=function(s){return s?"Viewed "+s+" Screen":"Loaded a Screen"},r.prototype.track=function(s){var o=this.json();return o.event=this.event(s),o.timestamp=this.timestamp(),o.properties=this.properties(),new i.Track(o,this.opts)},di}var pi={},Ku;function U_(){if(Ku)return pi;Ku=1;var n=pi&&pi.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(pi,"__esModule",{value:!0}),pi.Delete=void 0;var e=n(ki()),t=Bi();function i(r,s){t.Facade.call(this,r,s)}return pi.Delete=i,e.default(i,t.Facade),i.prototype.type=function(){return"delete"},pi}var Ju;function O_(){return Ju||(Ju=1,(function(n){var e=Fr&&Fr.__assign||function(){return e=Object.assign||function(u){for(var h,f=1,d=arguments.length;f<d;f++){h=arguments[f];for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&(u[m]=h[m])}return u},e.apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.Delete=n.Screen=n.Page=n.Track=n.Identify=n.Group=n.Alias=n.Facade=void 0;var t=Bi();Object.defineProperty(n,"Facade",{enumerable:!0,get:function(){return t.Facade}});var i=L_();Object.defineProperty(n,"Alias",{enumerable:!0,get:function(){return i.Alias}});var r=D_();Object.defineProperty(n,"Group",{enumerable:!0,get:function(){return r.Group}});var s=Nd();Object.defineProperty(n,"Identify",{enumerable:!0,get:function(){return s.Identify}});var o=Tl();Object.defineProperty(n,"Track",{enumerable:!0,get:function(){return o.Track}});var a=Ud();Object.defineProperty(n,"Page",{enumerable:!0,get:function(){return a.Page}});var c=N_();Object.defineProperty(n,"Screen",{enumerable:!0,get:function(){return c.Screen}});var l=U_();Object.defineProperty(n,"Delete",{enumerable:!0,get:function(){return l.Delete}}),n.default=e(e({},t.Facade),{Alias:i.Alias,Group:r.Group,Identify:s.Identify,Track:o.Track,Page:a.Page,Screen:c.Screen,Delete:l.Delete})})(Fr)),Fr}var mi=O_();function Co(n,e){var t=new mi.Facade(n,e);return n.type==="track"&&(t=new mi.Track(n,e)),n.type==="identify"&&(t=new mi.Identify(n,e)),n.type==="page"&&(t=new mi.Page(n,e)),n.type==="alias"&&(t=new mi.Alias(n,e)),n.type==="group"&&(t=new mi.Group(n,e)),n.type==="screen"&&(t=new mi.Screen(n,e)),Object.defineProperty(t,"obj",{value:n,writable:!0}),t}var F_=function(n){var e=!1;window.addEventListener("pagehide",function(){e||(e=!0,n(e))}),document.addEventListener("visibilitychange",function(){if(document.visibilityState=="hidden"){if(e)return;e=!0}else e=!1;n(e)})},Od=(function(n){Ft(e,n);function e(t,i){var r=n.call(this,t)||this;return r.retryTimeout=i,r.name="RateLimitError",r}return e})(Error),Fd=function(n){return Q({"Content-Type":"text/plain"},typeof n=="function"?n():n)},z_=500,B_=64;function Al(n){var e=encodeURI(JSON.stringify(n)).split(/%..|./).length-1;return e/1024}function k_(n){return Al(n)>=z_-50}function V_(n){return Al(n)>=B_-10}function H_(n){var e=[],t=0;return n.forEach(function(i){var r=Al(e[t]);r>=64&&t++,e[t]?e[t].push(i):e[t]=[i]}),e}function G_(n,e){var t,i,r=[],s=!1,o=(t=e?.size)!==null&&t!==void 0?t:10,a=(i=e?.timeout)!==null&&i!==void 0?i:5e3,c=0;function l(m){var g;if(m.length!==0){var v=(g=m[0])===null||g===void 0?void 0:g.writeKey,p=m.map(function(x){var y=x;y.sentAt;var _=Gf(y,["sentAt"]);return _});return Wo("https://".concat(n,"/b"),{credentials:e?.credentials,keepalive:e?.keepalive||s,headers:Fd(e?.headers),method:"post",body:JSON.stringify({writeKey:v,batch:p,sentAt:new Date().toISOString()}),priority:e?.priority}).then(function(x){var y;if(x.status>=500)throw new Error("Bad response from server: ".concat(x.status));if(x.status===429){var _=(y=x.headers)===null||y===void 0?void 0:y.get("x-ratelimit-reset"),R=typeof _=="string"?parseInt(_)*1e3:a;throw new Od("Rate limit exceeded: ".concat(x.status),R)}})}}function u(m){var g;return m===void 0&&(m=1),we(this,void 0,void 0,function(){var v;return Te(this,function(p){return r.length?(v=r,r=[],[2,(g=l(v))===null||g===void 0?void 0:g.catch(function(x){var y,_=Cn.system();_.log("error","Error sending batch",x),m<=((y=e?.maxRetries)!==null&&y!==void 0?y:10)&&(x.name==="RateLimitError"&&(c=x.retryTimeout),r.push.apply(r,v),r.map(function(R){if("_metadata"in R){var w=R;w._metadata=Q(Q({},w._metadata),{retryCount:m})}}),f(m+1))})]):[2]})})}var h;function f(m){m===void 0&&(m=1),!h&&(h=setTimeout(function(){h=void 0,u(m).catch(console.error)},c||a),c=0)}F_(function(m){if(s=m,s&&r.length){var g=H_(r).map(l);Promise.all(g).catch(console.error)}});function d(m,g){return we(this,void 0,void 0,function(){var v;return Te(this,function(p){return r.push(g),v=r.length>=o||k_(r)||e?.keepalive&&V_(r),[2,v||s?u():f()]})})}return{dispatch:d}}function W_(n){function e(t,i){return Wo(t,{credentials:n?.credentials,keepalive:n?.keepalive,headers:Fd(n?.headers),method:"post",body:JSON.stringify(i),priority:n?.priority}).then(function(r){var s;if(r.status>=500)throw new Error("Bad response from server: ".concat(r.status));if(r.status===429){var o=(s=r.headers)===null||s===void 0?void 0:s.get("x-ratelimit-reset"),a=o?parseInt(o)*1e3:5e3;throw new Od("Rate limit exceeded: ".concat(r.status),a)}})}return{dispatch:e}}function X_(n,e,t,i,r){var s,o=n.user();delete e.options,e.writeKey=t?.apiKey,e.userId=e.userId||o.id(),e.anonymousId=e.anonymousId||o.anonymousId(),e.sentAt=new Date;var a=n.queue.failedInitializations||[];a.length>0&&(e._metadata={failedInitializations:a}),r!=null&&(r.attempts>1&&(e._metadata=Q(Q({},e._metadata),{retryCount:r.attempts})),r.attempts++);var c=[],l=[];for(var u in i){var h=i[u];u==="Segment.io"&&c.push(u),h.bundlingStatus==="bundled"&&c.push(u),h.bundlingStatus==="unbundled"&&l.push(u)}for(var f=0,d=t?.unbundledIntegrations||[];f<d.length;f++){var m=d[f];l.includes(m)||l.push(m)}var g=(s=t?.maybeBundledConfigIds)!==null&&s!==void 0?s:{},v=[];return c.sort().forEach(function(p){var x;((x=g[p])!==null&&x!==void 0?x:[]).forEach(function(y){v.push(y)})}),t?.addBundledMetadata!==!1&&(e._metadata=Q(Q({},e._metadata),{bundled:c.sort(),unbundled:l.sort(),bundledIds:v})),e}var $_=function(n,e){return we(void 0,void 0,void 0,function(){var t;return Te(this,function(i){return t=function(r){return we(void 0,void 0,void 0,function(){var s;return Te(this,function(o){switch(o.label){case 0:return n(r)?(s=t,[4,e()]):[3,2];case 1:return[2,s.apply(void 0,[o.sent()])];case 2:return[2]}})})},[2,t(void 0)]})})};function q_(n,e){return we(this,void 0,void 0,function(){var t,i=this;return Te(this,function(r){switch(r.label){case 0:return t=[],us()?[2,e]:[4,$_(function(){return e.length>0&&!us()},function(){return we(i,void 0,void 0,function(){var s,o,a;return Te(this,function(c){switch(c.label){case 0:return s=e.pop(),s?[4,ns(s,n)]:[2];case 1:return o=c.sent(),a=o instanceof Cn,a||t.push(s),[2]}})})})];case 1:return r.sent(),t.map(function(s){return e.pushWithBackoff(s)}),[2,e]}})})}function $i(n,e,t,i){var r=this;n||setTimeout(function(){return we(r,void 0,void 0,function(){var s,o;return Te(this,function(a){switch(a.label){case 0:return s=!0,[4,q_(t,e)];case 1:return o=a.sent(),s=!1,e.todo>0&&i(s,o,t,i),[2]}})})},Math.random()*5e3)}function j_(n,e){var t,i,r,s,o=n.user();return e.previousId=(r=(i=(t=e.previousId)!==null&&t!==void 0?t:e.from)!==null&&i!==void 0?i:o.id())!==null&&r!==void 0?r:o.anonymousId(),e.userId=(s=e.userId)!==null&&s!==void 0?s:e.to,delete e.from,delete e.to,e}var Z_=function(n){return n.name==="Segment.io"};function Y_(n,e,t){var i,r,s;window.addEventListener("pagehide",function(){a.push.apply(a,Array.from(c)),c.clear()});var o=(i=e?.apiKey)!==null&&i!==void 0?i:"",a=n.options.disableClientPersistence?new gl(n.queue.queue.maxAttempts,[]):new Ml(n.queue.queue.maxAttempts,"".concat(o,":dest-Segment.io")),c=new Set,l=!1,u=(r=e?.apiHost)!==null&&r!==void 0?r:gd,h=(s=e?.protocol)!==null&&s!==void 0?s:"https",f="".concat(h,"://").concat(u),d=e?.deliveryStrategy,m=d&&"strategy"in d&&d.strategy==="batching"?G_(u,d.config):W_(d?.config);function g(p){return we(this,void 0,void 0,function(){var x,y;return Te(this,function(_){return us()?(a.push(p),$i(l,a,v,$i),[2,p]):(c.add(p),x=p.event.type.charAt(0),y=Co(p.event).json(),p.event.type==="track"&&delete y.traits,p.event.type==="alias"&&(y=j_(n,y)),[2,m.dispatch("".concat(f,"/").concat(x),X_(n,y,e,t,p)).then(function(){return p}).catch(function(R){if(p.log("error","Error sending event",R),R.name==="RateLimitError"){var w=R.retryTimeout;a.pushWithBackoff(p,w)}else a.pushWithBackoff(p);return $i(l,a,v,$i),p}).finally(function(){c.delete(p)})])})})}var v={metadata:{writeKey:o,apiHost:u,protocol:h},name:"Segment.io",type:"destination",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},track:g,identify:g,page:g,alias:g,group:g,screen:g};return a.todo&&$i(l,a,v,$i),v}var qn="This is being deprecated and will be not be available in future releases of Analytics JS",is=xl(),da=is?.analytics;function K_(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var i=e?10:1,r=t?new gl(i,[]):new Ml(i,n);return new c_(r)}var J_=(function(){function n(e,t){var i;this.timeout=300,this._getSegmentPluginMetadata=function(){var s;return(s=t.plugins.find(Z_))===null||s===void 0?void 0:s.metadata},this.writeKey=e.writeKey;var r={integrations:{"Segment.io":{apiKey:""}}};this.cdnSettings=(i=e.cdnSettings)!==null&&i!==void 0?i:r,this.cdnURL=e.cdnURL}return Object.defineProperty(n.prototype,"apiHost",{get:function(){var e,t;return(t=(e=this._getSegmentPluginMetadata)===null||e===void 0?void 0:e.call(this))===null||t===void 0?void 0:t.apiHost},enumerable:!1,configurable:!0}),n})();function un(){console.warn(qn)}var zd=(function(n){Ft(e,n);function e(t,i,r,s,o){var a=this,c,l;a=n.call(this)||this,a._debug=!1,a.initialized=!1,a.user=function(){return a._user},a.init=a.initialize.bind(a),a.log=un,a.addIntegrationMiddleware=un,a.listeners=un,a.addEventListener=un,a.removeAllListeners=un,a.removeListener=un,a.removeEventListener=un,a.hasListeners=un,a.add=un,a.addIntegration=un;var u=i?.cookie,h=(c=i?.disableClientPersistence)!==null&&c!==void 0?c:!1;a.queue=r??K_("".concat(t.writeKey,":event-queue"),i?.retryQueue,h),a.settings=new J_(t,a.queue);var f=i?.storage;return a._universalStorage=a.createStore(h,f,u),a._user=s??new Cd(Q({persist:!h,storage:i?.storage},i?.user),u).load(),a._group=o??new m_(Q({persist:!h,storage:i?.storage},i?.group),u).load(),a.eventFactory=new i_(a._user),a.integrations=(l=i?.integrations)!==null&&l!==void 0?l:{},a.options=i??{},Sl(a),a}return e.prototype.createStore=function(t,i,r){return t?new Ii([new bl]):i&&Ad(i)?new Ii(lc(Rd(i.stores,r))):new Ii(lc([Nt.LocalStorage,{name:Nt.Cookie,settings:r},Nt.Memory]))},Object.defineProperty(e.prototype,"storage",{get:function(){return this._universalStorage},enumerable:!1,configurable:!0}),e.prototype.track=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s,o,a,c,l,u,h=this;return Te(this,function(f){return r=Wi(t),s=Wg.apply(void 0,t),o=s[0],a=s[1],c=s[2],l=s[3],u=this.eventFactory.track(o,a,c,this.integrations,r),[2,this._dispatch(u,l).then(function(d){return h.emit("track",o,d.event.properties,d.event.options),d})]})})},e.prototype.page=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s,o,a,c,l,u,h,f=this;return Te(this,function(d){return r=Wi(t),s=Cu.apply(void 0,t),o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=this.eventFactory.page(o,a,c,l,this.integrations,r),[2,this._dispatch(h,u).then(function(m){return f.emit("page",o,a,m.event.properties,m.event.options),m})]})})},e.prototype.identify=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s,o,a,c,l,u,h=this;return Te(this,function(f){return r=Wi(t),s=Pu(this._user).apply(void 0,t),o=s[0],a=s[1],c=s[2],l=s[3],this._user.identify(o,a),u=this.eventFactory.identify(this._user.id(),this._user.traits(),c,this.integrations,r),[2,this._dispatch(u,l).then(function(d){return h.emit("identify",d.event.userId,d.event.traits,d.event.options),d})]})})},e.prototype.group=function(){for(var t=this,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];var s=Wi(i);if(i.length===0)return this._group;var o=Pu(this._group).apply(void 0,i),a=o[0],c=o[1],l=o[2],u=o[3];this._group.identify(a,c);var h=this._group.id(),f=this._group.traits(),d=this.eventFactory.group(h,f,l,this.integrations,s);return this._dispatch(d,u).then(function(m){return t.emit("group",m.event.groupId,m.event.traits,m.event.options),m})},e.prototype.alias=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s,o,a,c,l,u,h=this;return Te(this,function(f){return r=Wi(t),s=Xg.apply(void 0,t),o=s[0],a=s[1],c=s[2],l=s[3],u=this.eventFactory.alias(o,a,c,this.integrations,r),[2,this._dispatch(u,l).then(function(d){return h.emit("alias",o,a,d.event.options),d})]})})},e.prototype.screen=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s,o,a,c,l,u,h,f=this;return Te(this,function(d){return r=Wi(t),s=Cu.apply(void 0,t),o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=this.eventFactory.screen(o,a,c,l,this.integrations,r),[2,this._dispatch(h,u).then(function(m){return f.emit("screen",o,a,m.event.properties,m.event.options),m})]})})},e.prototype.trackClick=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s;return Te(this,function(o){switch(o.label){case 0:return[4,rn(()=>import("./auto-track-THjISx9Q.js"),[])];case 1:return r=o.sent(),[2,(s=r.link).call.apply(s,Mt([this],t,!1))]}})})},e.prototype.trackLink=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s;return Te(this,function(o){switch(o.label){case 0:return[4,rn(()=>import("./auto-track-THjISx9Q.js"),[])];case 1:return r=o.sent(),[2,(s=r.link).call.apply(s,Mt([this],t,!1))]}})})},e.prototype.trackSubmit=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s;return Te(this,function(o){switch(o.label){case 0:return[4,rn(()=>import("./auto-track-THjISx9Q.js"),[])];case 1:return r=o.sent(),[2,(s=r.form).call.apply(s,Mt([this],t,!1))]}})})},e.prototype.trackForm=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s;return Te(this,function(o){switch(o.label){case 0:return[4,rn(()=>import("./auto-track-THjISx9Q.js"),[])];case 1:return r=o.sent(),[2,(s=r.form).call.apply(s,Mt([this],t,!1))]}})})},e.prototype.register=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s,o=this;return Te(this,function(a){switch(a.label){case 0:return r=Cn.system(),s=t.map(function(c){return o.queue.register(r,c,o)}),[4,Promise.all(s)];case 1:return a.sent(),[2,r]}})})},e.prototype.deregister=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return we(this,void 0,void 0,function(){var r,s,o=this;return Te(this,function(a){switch(a.label){case 0:return r=Cn.system(),s=t.map(function(c){var l=o.queue.plugins.find(function(u){return u.name===c});if(l)return o.queue.deregister(r,l,o);r.log("warn","plugin ".concat(c," not found"))}),[4,Promise.all(s)];case 1:return a.sent(),[2,r]}})})},e.prototype.debug=function(t){return t===!1&&localStorage.getItem("debug")&&localStorage.removeItem("debug"),this._debug=t,this},e.prototype.reset=function(){this._user.reset(),this._group.reset(),this.emit("reset")},e.prototype.timeout=function(t){this.settings.timeout=t},e.prototype._dispatch=function(t,i){return we(this,void 0,void 0,function(){var r;return Te(this,function(s){return r=new Cn(t),r.stats.increment("analytics_js.invoke",1,[t.type]),us()&&!this.options.retryQueue?[2,r]:[2,Gg(r,this.queue,this,{callback:i,debug:this._debug,timeout:this.settings.timeout})]})})},e.prototype.addSourceMiddleware=function(t){return we(this,void 0,void 0,function(){var i=this;return Te(this,function(r){switch(r.label){case 0:return[4,this.queue.criticalTasks.run(function(){return we(i,void 0,void 0,function(){var s,o,a;return Te(this,function(c){switch(c.label){case 0:return[4,rn(()=>Promise.resolve().then(()=>m0),void 0)];case 1:return s=c.sent().sourceMiddlewarePlugin,o={},this.queue.plugins.forEach(function(l){if(l.type==="destination")return o[l.name]=!0}),a=s(t,o),[4,this.register(a)];case 2:return c.sent(),[2]}})})})];case 1:return r.sent(),[2,this]}})})},e.prototype.addDestinationMiddleware=function(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return this.queue.plugins.filter(r_).forEach(function(s){(t==="*"||s.name.toLowerCase()===t.toLowerCase())&&s.addMiddleware.apply(s,i)}),Promise.resolve(this)},e.prototype.setAnonymousId=function(t){return this._user.anonymousId(t)},e.prototype.queryString=function(t){return we(this,void 0,void 0,function(){var i;return Te(this,function(r){switch(r.label){case 0:return this.options.useQueryString===!1?[2,[]]:[4,rn(()=>import("./index-B1Ghxk0Z.js"),[])];case 1:return i=r.sent().queryString,[2,i(this,t)]}})})},e.prototype.use=function(t){return t(this),this},e.prototype.ready=function(t){return t===void 0&&(t=function(i){return i}),we(this,void 0,void 0,function(){return Te(this,function(i){return[2,Promise.all(this.queue.plugins.map(function(r){return r.ready?r.ready():Promise.resolve()})).then(function(r){return t(r),r})]})})},e.prototype.noConflict=function(){return console.warn(qn),g_(da??this),this},e.prototype.normalize=function(t){return console.warn(qn),this.eventFactory.normalize(t)},Object.defineProperty(e.prototype,"failedInitializations",{get:function(){return console.warn(qn),this.queue.failedInitializations},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"VERSION",{get:function(){return Xo},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,i){return we(this,void 0,void 0,function(){return Te(this,function(r){return console.warn(qn),[2,Promise.resolve(this)]})})},e.prototype.pageview=function(t){return we(this,void 0,void 0,function(){return Te(this,function(i){switch(i.label){case 0:return console.warn(qn),[4,this.page({path:t})];case 1:return i.sent(),[2,this]}})})},Object.defineProperty(e.prototype,"plugins",{get:function(){var t;return console.warn(qn),(t=this._plugins)!==null&&t!==void 0?t:{}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"Integrations",{get:function(){console.warn(qn);var t=this.queue.plugins.filter(function(i){return i.type==="destination"}).reduce(function(i,r){var s="".concat(r.name.toLowerCase().replace(".","").split(" ").join("-"),"Integration"),o=window[s];if(!o)return i;var a=o.Integration;return a?(i[r.name]=a,i):(i[r.name]=o,i)},{});return t},enumerable:!1,configurable:!0}),e.prototype.push=function(t){var i=this,r=t.shift();r&&!i[r]||i[r].apply(this,t)},e})(vl),Qu=(function(n){Ft(e,n);function e(){var t=n.call(this,{writeKey:""},{disableClientPersistence:!0})||this;return t.initialized=!0,t}return e})(zd),eh={};function Bd(){return typeof process>"u"||!eh?{}:eh}var Q_=/(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/,e0=function(){var n,e=Array.prototype.slice.call(document.querySelectorAll("script"));return e.forEach(function(t){var i,r=(i=t.getAttribute("src"))!==null&&i!==void 0?i:"",s=Q_.exec(r);s&&s[1]&&(n=s[1])}),n},_o,t0=function(){var n,e=_o??((n=Pd())===null||n===void 0?void 0:n._cdn);return e},n0=function(n){var e=Pd();e&&(e._cdn=n),_o=n},Rl=function(){var n=t0();if(n)return n;var e=e0();return e||"https://cdn.segment.com"},dR=function(){var n=Rl();return"".concat(n,"/next-integrations")};function i0(n,e){var t,i=Object.entries((t=e.integrations)!==null&&t!==void 0?t:{}).reduce(function(r,s){var o,a,c=s[0],l=s[1];return typeof l=="object"?Q(Q({},r),(o={},o[c]=l,o)):Q(Q({},r),(a={},a[c]={},a))},{});return Object.entries(n.integrations).reduce(function(r,s){var o,a=s[0],c=s[1];return Q(Q({},r),(o={},o[a]=Q(Q({},c),i[a]),o))},{})}function r0(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return n}}function s0(n){return we(this,void 0,void 0,function(){var e;return Te(this,function(t){return e=navigator.userAgentData,e?n?[2,e.getHighEntropyValues(n).catch(function(){return e.toJSON()})]:[2,e.toJSON()]:[2,void 0]})})}var Br;function o0(){if(Br)return Br;var n=wd(window.location.href);return Br={expires:31536e6,secure:!1,path:"/"},n&&(Br.domain=n),Br}function a0(n){var e={btid:"dataxu",urid:"millennial-media"};n.startsWith("?")&&(n=n.substring(1)),n=n.replace(/\?/g,"&");for(var t=n.split("&"),i=0,r=t;i<r.length;i++){var s=r[i],o=s.split("="),a=o[0],c=o[1];if(e[a])return{id:c,type:e[a]}}}function c0(n){return n.startsWith("?")&&(n=n.substring(1)),n=n.replace(/\?/g,"&"),n.split("&").reduce(function(e,t){var i=t.split("="),r=i[0],s=i[1],o=s===void 0?"":s;if(r.includes("utm_")&&r.length>4){var a=r.slice(4);a==="campaign"&&(a="name"),e[a]=r0(o)}return e},{})}function l0(){var n=wn.get("_ga");if(n&&n.startsWith("amp"))return n}function u0(n,e,t){var i,r=new Ii(t?[]:[new Td(o0())]),s=r.get("s:context.referrer"),o=(i=a0(n))!==null&&i!==void 0?i:s;o&&(e&&(e.referrer=Q(Q({},e.referrer),o)),r.set("s:context.referrer",o))}var h0=function(n){try{var e=new URLSearchParams;return Object.entries(n).forEach(function(t){var i=t[0],r=t[1];Array.isArray(r)?r.forEach(function(s){return e.append(i,s)}):e.append(i,r)}),e.toString()}catch{return""}},f0=(function(){function n(){var e=this;this.name="Page Enrichment",this.type="before",this.version="0.1.0",this.isLoaded=function(){return!0},this.load=function(t,i){return we(e,void 0,void 0,function(){var r;return Te(this,function(s){switch(s.label){case 0:this.instance=i,s.label=1;case 1:return s.trys.push([1,3,,4]),r=this,[4,s0(this.instance.options.highEntropyValuesClientHints)];case 2:return r.userAgentData=s.sent(),[3,4];case 3:return s.sent(),[3,4];case 4:return[2,Promise.resolve()]}})})},this.enrich=function(t){var i,r,s=t.event.context,o=s.page.search||"",a=typeof o=="object"?h0(o):o;s.userAgent=navigator.userAgent,s.userAgentData=e.userAgentData;var c=navigator.userLanguage||navigator.language;typeof s.locale>"u"&&typeof c<"u"&&(s.locale=c),(i=s.library)!==null&&i!==void 0||(s.library={name:"analytics.js",version:"".concat("npm:next","-").concat(Xo)}),a&&!s.campaign&&(s.campaign=c0(a));var l=l0();l&&(s.amp={id:l}),u0(a,s,(r=e.instance.options.disableClientPersistence)!==null&&r!==void 0?r:!1);try{s.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}return t},this.track=this.enrich,this.identify=this.enrich,this.page=this.enrich,this.group=this.enrich,this.alias=this.enrich,this.screen=this.enrich}return n})(),d0=new f0;function kd(n){var e=Array.prototype.slice.call(window.document.querySelectorAll("script"));return e.find(function(t){return t.src===n})}function pa(n,e){var t=kd(n);if(t!==void 0){var i=t?.getAttribute("status");if(i==="loaded")return Promise.resolve(t);if(i==="loading")return new Promise(function(r,s){t.addEventListener("load",function(){return r(t)}),t.addEventListener("error",function(o){return s(o)})})}return new Promise(function(r,s){var o,a=window.document.createElement("script");a.type="text/javascript",a.src=n,a.async=!0,a.setAttribute("status","loading");for(var c=0,l=Object.entries({});c<l.length;c++){var u=l[c],h=u[0],f=u[1];a.setAttribute(h,f)}a.onload=function(){a.onerror=a.onload=null,a.setAttribute("status","loaded"),r(a)},a.onerror=function(){a.onerror=a.onload=null,a.setAttribute("status","error"),s(new Error("Failed to load ".concat(n)))};var d=window.document.querySelector("script");d?(o=d.parentElement)===null||o===void 0||o.insertBefore(a,d):window.document.head.appendChild(a)})}function pR(n){var e=kd(n);return e!==void 0&&e.remove(),Promise.resolve()}function Vd(n,e,t){return we(this,void 0,void 0,function(){function i(l,u){return we(this,void 0,void 0,function(){var h,f,d;return Te(this,function(m){switch(m.label){case 0:return h=!1,f=null,[4,u({payload:Co(l,{clone:!0,traverse:!1}),integration:n,next:function(g){h=!0,g===null&&(f=null),g&&(f=g.obj)}})];case 1:return m.sent(),!h&&f!==null&&(f=f,f.integrations=Q(Q({},l.integrations),(d={},d[n]=!1,d))),[2,f]}})})}var r,s,o,a,c;return Te(this,function(l){switch(l.label){case 0:r=Co(e,{clone:!0,traverse:!1}).rawEvent(),s=0,o=t,l.label=1;case 1:return s<o.length?(a=o[s],[4,i(r,a)]):[3,4];case 2:if(c=l.sent(),c===null)return[2,null];r=c,l.label=3;case 3:return s++,[3,1];case 4:return[2,r]}})})}function p0(n,e){function t(i){return we(this,void 0,void 0,function(){var r;return Te(this,function(s){switch(s.label){case 0:return r=!1,[4,n({payload:Co(i.event,{clone:!0,traverse:!1}),integrations:e??{},next:function(o){r=!0,o&&(i.event=o.obj)}})];case 1:if(s.sent(),!r)throw new xr({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,i]}})})}return{name:"Source Middleware ".concat(n.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(i){return Promise.resolve(i)},track:t,page:t,screen:t,identify:t,alias:t,group:t}}const m0=Object.freeze(Object.defineProperty({__proto__:null,applyDestinationMiddleware:Vd,sourceMiddlewarePlugin:p0},Symbol.toStringTag,{value:"Module"}));function Ns(n,e){var t=e.methodName,i=e.integrationName,r=e.type,s=e.didError,o=s===void 0?!1:s;n.stats.increment("analytics_js.integration.invoke".concat(o?".error":""),1,["method:".concat(t),"integration_name:".concat(i),"type:".concat(r)])}var v0=(function(){function n(e,t){this.version="1.0.0",this.alternativeNames=[],this.loadPromise=pd(),this.middleware=[],this.alias=this._createMethod("alias"),this.group=this._createMethod("group"),this.identify=this._createMethod("identify"),this.page=this._createMethod("page"),this.screen=this._createMethod("screen"),this.track=this._createMethod("track"),this.action=t,this.name=e,this.type=t.type,this.alternativeNames.push(t.name)}return n.prototype.addMiddleware=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];this.type==="destination"&&(e=this.middleware).push.apply(e,t)},n.prototype.transform=function(e){return we(this,void 0,void 0,function(){var t;return Te(this,function(i){switch(i.label){case 0:return[4,Vd(this.name,e.event,this.middleware)];case 1:return t=i.sent(),t===null&&e.cancel(new xr({retry:!1,reason:"dropped by destination middleware"})),[2,new Cn(t)]}})})},n.prototype._createMethod=function(e){var t=this;return function(i){return we(t,void 0,void 0,function(){var r,s;return Te(this,function(o){switch(o.label){case 0:return this.action[e]?(r=i,this.type!=="destination"?[3,2]:[4,this.transform(i)]):[2,i];case 1:r=o.sent(),o.label=2;case 2:return o.trys.push([2,5,,6]),[4,this.ready()];case 3:if(!o.sent())throw new Error("Something prevented the destination from getting ready");return Ns(i,{integrationName:this.action.name,methodName:e,type:"action"}),[4,this.action[e](r)];case 4:return o.sent(),[3,6];case 5:throw s=o.sent(),Ns(i,{integrationName:this.action.name,methodName:e,type:"action",didError:!0}),s;case 6:return[2,i]}})})}},n.prototype.isLoaded=function(){return this.action.isLoaded()},n.prototype.ready=function(){return we(this,void 0,void 0,function(){return Te(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.loadPromise.promise];case 1:return e.sent(),[2,!0];case 2:return e.sent(),[2,!1];case 3:return[2]}})})},n.prototype.load=function(e,t){return we(this,void 0,void 0,function(){var i,r,s,o;return Te(this,function(a){switch(a.label){case 0:if(this.loadPromise.isSettled())return[2,this.loadPromise.promise];a.label=1;case 1:return a.trys.push([1,3,,4]),Ns(e,{integrationName:this.action.name,methodName:"load",type:"action"}),i=this.action.load(e,t),s=(r=this.loadPromise).resolve,[4,i];case 2:return s.apply(r,[a.sent()]),[2,i];case 3:throw o=a.sent(),Ns(e,{integrationName:this.action.name,methodName:"load",type:"action",didError:!0}),this.loadPromise.reject(o),o;case 4:return[2]}})})},n.prototype.unload=function(e,t){var i,r;return(r=(i=this.action).unload)===null||r===void 0?void 0:r.call(i,e,t)},n})();function g0(n){if(!Array.isArray(n))throw new Error("Not a valid list of plugins");var e=["load","isLoaded","name","version","type"];return n.forEach(function(t){e.forEach(function(i){var r;if(t[i]===void 0)throw new Error("Plugin: ".concat((r=t.name)!==null&&r!==void 0?r:"unknown"," missing required function ").concat(i))})}),!0}function _0(n,e){var t=n[e.creationName],i=n[e.name];return n.All===!1&&!t&&!i||t===!1||i===!1}function y0(n,e){return we(this,void 0,void 0,function(){var t,i,r,s,o,a;return Te(this,function(c){switch(c.label){case 0:if(c.trys.push([0,9,,10]),t=new RegExp("https://cdn.segment.(com|build)"),i=Rl(),!e)return[3,6];r=n.url.split("/"),s=r[r.length-2],o=n.url.replace(s,btoa(s).replace(/=/g,"")),c.label=1;case 1:return c.trys.push([1,3,,5]),[4,pa(o.replace(t,i))];case 2:return c.sent(),[3,5];case 3:return c.sent(),[4,pa(n.url.replace(t,i))];case 4:return c.sent(),[3,5];case 5:return[3,8];case 6:return[4,pa(n.url.replace(t,i))];case 7:c.sent(),c.label=8;case 8:return typeof window[n.libraryName]=="function"?[2,window[n.libraryName]]:[3,10];case 9:throw a=c.sent(),console.error("Failed to create PluginFactory",n),a;case 10:return[2]}})})}function x0(n,e,t,i,r,s){var o,a,c;return we(this,void 0,void 0,function(){var l,u,h,f=this;return Te(this,function(d){switch(d.label){case 0:return l=[],u=(a=(o=n.middlewareSettings)===null||o===void 0?void 0:o.routingRules)!==null&&a!==void 0?a:[],h=((c=n.remotePlugins)!==null&&c!==void 0?c:[]).map(function(m){return we(f,void 0,void 0,function(){var g,v,p,x,y,_,R;return Te(this,function(w){switch(w.label){case 0:if(_0(e,m))return[2];w.label=1;case 1:return w.trys.push([1,6,,7]),v=s?.find(function(A){var P=A.pluginName;return P===m.name}),v?[3,3]:[4,y0(m,i?.obfuscate)];case 2:v=w.sent(),w.label=3;case 3:return g=v,g?(p=t[m.name],[4,g(Q(Q({},m.settings),p))]):[3,5];case 4:x=w.sent(),y=Array.isArray(x)?x:[x],g0(y),_=u.filter(function(A){return A.destinationName===m.creationName}),y.forEach(function(A){var P=new v0(m.creationName,A);_.length&&r&&P.addMiddleware(r),l.push(P)}),w.label=5;case 5:return[3,7];case 6:return R=w.sent(),console.warn("Failed to load Remote Plugin",R),[3,7];case 7:return[2]}})})}),[4,Promise.all(h)];case 1:return d.sent(),[2,l.filter(Boolean)]}})})}var ma,th,M0=xl(),nh=(ma=(th=M0).__SEGMENT_INSPECTOR__)!==null&&ma!==void 0?ma:th.__SEGMENT_INSPECTOR__={},S0=function(n){var e;return(e=nh.attach)===null||e===void 0?void 0:e.call(nh,n)};function b0(n,e){return Wo("".concat(e,"/v1/projects/").concat(n,"/settings")).then(function(t){return t.ok?t.json():t.text().then(function(i){throw new Error(i)})}).catch(function(t){throw console.error(t.message),t})}function E0(n){return Bd().NODE_ENV!=="test"&&Object.keys(n.integrations).length>1}function w0(n){var e,t,i;return Bd().NODE_ENV!=="test"&&((i=(t=(e=n.middlewareSettings)===null||e===void 0?void 0:e.routingRules)===null||t===void 0?void 0:t.length)!==null&&i!==void 0?i:0)>0}function T0(n,e){S_(n,e),M_(n,e)}function A0(n,e,t){return we(this,void 0,void 0,function(){return Te(this,function(i){switch(i.label){case 0:return[4,C0(n,e)];case 1:return i.sent(),b_(n,t),[2]}})})}var R0=function(){var n,e,t=(n=window.location.hash)!==null&&n!==void 0?n:"",i=(e=window.location.search)!==null&&e!==void 0?e:"",r=i.length?i:t.replace(/(?=#).*(?=\?)/,"");return r},C0=function(n,e){return we(void 0,void 0,void 0,function(){return Te(this,function(t){switch(t.label){case 0:return e.includes("ajs_")?[4,n.queryString(e).catch(console.error)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})};function P0(n,e,t,i,r,s,o){var a,c,l;return r===void 0&&(r=[]),we(this,void 0,void 0,function(){var u,h,f,d,m,g,v,p,x,y,_,R,w,A,P,E=this;return Te(this,function(M){switch(M.label){case 0:return T0(t,o),u=r?.filter(function(I){return typeof I=="object"}),h=r?.filter(function(I){return typeof I=="function"&&typeof I.pluginName=="string"}),w0(e)?[4,rn(()=>import("./index-gNUQfarB.js"),[]).then(function(I){return I.tsubMiddleware(e.middlewareSettings.routingRules)})]:[3,2];case 1:return d=M.sent(),[3,3];case 2:d=void 0,M.label=3;case 3:return f=d,E0(e)||s.length>0?[4,rn(()=>import("./index-KU7AozX5.js"),__vite__mapDeps([0,1])).then(function(I){return I.ajsDestinations(n,e,t.integrations,i,f,s)})]:[3,5];case 4:return g=M.sent(),[3,6];case 5:g=[],M.label=6;case 6:return m=g,e.legacyVideoPluginsEnabled?[4,rn(()=>import("./index-DWUcXr_S.js"),[]).then(function(I){return I.loadLegacyVideoPlugins(t)})]:[3,8];case 7:M.sent(),M.label=8;case 8:return!((a=i.plan)===null||a===void 0)&&a.track?[4,rn(()=>import("./index-CVIUfWLV.js"),__vite__mapDeps([2,1])).then(function(I){var z;return I.schemaFilter((z=i.plan)===null||z===void 0?void 0:z.track,e)})]:[3,10];case 9:return p=M.sent(),[3,11];case 10:p=void 0,M.label=11;case 11:return v=p,x=i0(e,i),[4,x0(e,t.integrations,x,i,f,h).catch(function(){return[]})];case 12:return y=M.sent(),_=Mt(Mt([d0],m,!0),y,!0),v&&_.push(v),R=((c=i.integrations)===null||c===void 0?void 0:c.All)===!1&&!i.integrations["Segment.io"]||i.integrations&&i.integrations["Segment.io"]===!1,R?[3,14]:(A=(w=_).push,[4,Y_(t,x["Segment.io"],e.integrations)]);case 13:A.apply(w,[M.sent()]),M.label=14;case 14:return[4,t.register.apply(t,Mt(Mt([],_,!1),u,!1))];case 15:return P=M.sent(),[4,x_(t,o)];case 16:return M.sent(),Object.entries((l=e.enabledMiddleware)!==null&&l!==void 0?l:{}).some(function(I){var z=I[1];return z})?[4,rn(()=>import("./index-DAd9OPG0.js"),[]).then(function(I){var z=I.remoteMiddlewares;return we(E,void 0,void 0,function(){var F,V;return Te(this,function(j){switch(j.label){case 0:return[4,z(P,e,i.obfuscate)];case 1:return F=j.sent(),V=F.map(function(H){return t.addSourceMiddleware(H)}),[2,Promise.all(V)]}})})})]:[3,18];case 17:M.sent(),M.label=18;case 18:return[4,y_(t,o)];case 19:return M.sent(),[2,P]}})})}function I0(n,e,t){var i,r,s,o,a,c,l,u,h;return e===void 0&&(e={}),we(this,void 0,void 0,function(){var f,d,m,g,v,p,x,y,_,R,w;return Te(this,function(A){switch(A.label){case 0:return e.disable===!0?[2,[new Qu,Cn.system()]]:(e.globalAnalyticsKey&&v_(e.globalAnalyticsKey),n.cdnURL&&n0(n.cdnURL),e.initialPageview&&t.add(new uc("page",[])),f=R0(),d=(i=n.cdnURL)!==null&&i!==void 0?i:Rl(),(r=n.cdnSettings)!==null&&r!==void 0?(g=r,[3,3]):[3,1]);case 1:return[4,b0(n.writeKey,d)];case 2:g=A.sent(),A.label=3;case 3:return m=g,e.updateCDNSettings&&(m=e.updateCDNSettings(m)),typeof e.disable!="function"?[3,5]:[4,e.disable(m)];case 4:if(v=A.sent(),v)return[2,[new Qu,Cn.system()]];A.label=5;case 5:return p=(o=(s=m.integrations["Segment.io"])===null||s===void 0?void 0:s.retryQueue)!==null&&o!==void 0?o:!0,e=Q({retryQueue:p},e),x=new zd(Q(Q({},n),{cdnSettings:m,cdnURL:d}),e),S0(x),y=(a=n.plugins)!==null&&a!==void 0?a:[],_=(c=n.classicIntegrations)!==null&&c!==void 0?c:[],R=(l=e.integrations)===null||l===void 0?void 0:l["Segment.io"],_d.initRemoteMetrics(Q(Q({},m.metrics),{host:(u=R?.apiHost)!==null&&u!==void 0?u:(h=m.metrics)===null||h===void 0?void 0:h.host,protocol:R?.protocol})),[4,P0(n.writeKey,m,x,e,y,_,t)];case 6:return w=A.sent(),x.initialized=!0,x.emit("initialize",n,e),[4,A0(x,f,t)];case 7:return A.sent(),[2,[x,w]]}})})}var L0=(function(n){Ft(e,n);function e(){var t=this,i=pd(),r=i.promise,s=i.resolve;return t=n.call(this,function(o){return r.then(function(a){var c=a[0],l=a[1];return I0(c,l,o)})})||this,t._resolveLoadStart=function(o,a){return s([o,a])},t}return e.prototype.load=function(t,i){return i===void 0&&(i={}),this._resolveLoadStart(t,i),this},e.load=function(t,i){return i===void 0&&(i={}),new e().load(t,i)},e.standalone=function(t,i){return e.load({writeKey:t},i).then(function(r){return r[0]})},e})(w_);const D0="ouNp1FQjCMBXAeCCN7OhBdvfgWXrUePk";function mR({sourceMiddleware:n}){const e=new L0;for(const s of n)e.addSourceMiddleware(s);let t=!1;const i=()=>{t||(t=!0,e.load({writeKey:D0}))},r=()=>{typeof window.requestIdleCallback=="function"?window.requestIdleCallback(i):setTimeout(i,300)};return typeof window>"u"||(document.readyState==="complete"?r():(window.addEventListener("load",r,{once:!0}),document.visibilityState==="hidden"?r():document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&r()},{once:!0}))),e}const On=ae("ZodMiniType",(n,e)=>{if(!n._zod)throw new Error("Uninitialized schema in ZodMiniType.");dt.init(n,e),n.def=e,n.type=e.type},{get with(){return this.check},set with(n){Di(this,"with",n)},parse(n,e){return Zm(this,n,e,{callee:this.parse})},parseAsync(n,e){return Ym(this,n,e,{callee:this.parseAsync})},safeParse(n,e){return Km(this,n,e)},safeParseAsync(n,e){return Jm(this,n,e)},check(...n){const e=this.def;return this.clone({...e,checks:[...e.checks??[],...n.map(t=>typeof t=="function"?{_zod:{check:t,def:{check:"custom"},onattach:[]}}:t)]},{parent:!0})},clone(n,e){return ii(this,n,e)},brand(){return this},register(n,e){return n.add(this,e),this},apply(n,...e){return e.length===0?n(this):n(this,...e)}}),N0=ae("ZodMiniString",(n,e)=>{id.init(n,e),On.init(n,e)});function Jr(n){return dg(N0,n)}const U0=ae("ZodMiniBoolean",(n,e)=>{ng.init(n,e),On.init(n,e)});function O0(n){return pg(U0,n)}const F0=ae("ZodMiniUnknown",(n,e)=>{ig.init(n,e),On.init(n,e)});function ih(){return mg(F0)}const z0=ae("ZodMiniArray",(n,e)=>{og.init(n,e),On.init(n,e)});function B0(n,e){return new z0({type:"array",element:n,...Le(e)})}const k0=ae("ZodMiniObject",(n,e)=>{hd.init(n,e),On.init(n,e),Vm(n,"shape",t=>t._zod.def.shape,!1)});function rh(n,e){const t={type:"object",shape:n??{},...Le(e)};return new k0(t)}const sh=ae("ZodMiniRecord",(n,e)=>{ug.init(n,e),On.init(n,e)});function oh(n,e,t){return!e||!e._zod?new sh({type:"record",keyType:Jr(),valueType:n,...Le(e)}):new sh({type:"record",keyType:n,valueType:e,...Le(t)})}const V0=ae("ZodMiniEnum",(n,e)=>{hg.init(n,e),On.init(n,e),n.options=[...n._zod.values]});function H0(n,e){const t=Array.isArray(n)?Object.fromEntries(n.map(i=>[i,i])):n;return new V0({type:"enum",entries:t,...Le(e)})}const G0=ae("ZodMiniOptional",(n,e)=>{fd.init(n,e),On.init(n,e)});function W0(n){return new G0({type:"optional",innerType:n})}const X0=ae("ZodMiniNullable",(n,e)=>{fg.init(n,e),On.init(n,e)});function $0(n){return new X0({type:"nullable",innerType:n})}const hs="skydive:office-home-handoff",q0=rh({path:H0([hu.home,hu.office]),referrer:Jr(),flagState:$0(rh({featureFlags:oh(Jr(),ih()),featureFlagKeys:B0(Jr())})),adContext:oh(Jr(),ih()),worldEnabled:W0(O0())});function vR(){try{return window.sessionStorage.setItem(hs,""),window.sessionStorage.removeItem(hs),!0}catch{return!1}}function gR(n){window.sessionStorage.setItem(hs,JSON.stringify(n))}function _R(){let n;try{n=window.sessionStorage.getItem(hs),window.sessionStorage.removeItem(hs)}catch{return null}if(!n)return null;try{const e=q0.safeParse(JSON.parse(n));return e.success?e.data:null}catch{return null}}const yR="skydive:map-dive-arrival";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="170",xR={ROTATE:0,DOLLY:1,PAN:2},MR={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},j0=0,ah=1,Z0=2,Hd=1,Y0=2,En=3,ti=0,Ot=1,Tn=2,Yn=0,mr=1,ch=2,lh=3,uh=4,K0=5,Ei=100,J0=101,Q0=102,ey=103,ty=104,ny=200,iy=201,ry=202,sy=203,hc=204,fc=205,oy=206,ay=207,cy=208,ly=209,uy=210,hy=211,fy=212,dy=213,py=214,dc=0,pc=1,mc=2,Mr=3,vc=4,gc=5,_c=6,yc=7,Pl=0,my=1,vy=2,Kn=0,gy=1,_y=2,yy=3,xy=4,My=5,Sy=6,by=7,hh="attached",Ey="detached",Gd=300,Sr=301,br=302,xc=303,Mc=304,Zo=306,Sc=1e3,Ri=1001,bc=1002,Ht=1003,wy=1004,Us=1005,fn=1006,va=1007,Ci=1008,Nn=1009,Wd=1010,Xd=1011,fs=1012,Il=1013,Ui=1014,on=1015,_s=1016,Ll=1017,Dl=1018,Er=1020,$d=35902,qd=1021,jd=1022,Yt=1023,Zd=1024,Yd=1025,vr=1026,wr=1027,Nl=1028,Ul=1029,Kd=1030,Ol=1031,Fl=1033,yo=33776,xo=33777,Mo=33778,So=33779,Ec=35840,wc=35841,Tc=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Ic=37808,Lc=37809,Dc=37810,Nc=37811,Uc=37812,Oc=37813,Fc=37814,zc=37815,Bc=37816,kc=37817,Vc=37818,Hc=37819,Gc=37820,Wc=37821,bo=36492,Xc=36494,$c=36495,Jd=36283,qc=36284,jc=36285,Zc=36286,Po=2300,Yc=2301,ga=2302,fh=2400,dh=2401,ph=2402,Ty=2500,Ay=0,Ry=1,mh=2,Cy=3200,Py=3201,Yo=0,Iy=1,jn="",qt="srgb",Rr="srgb-linear",Ko="linear",at="srgb",qi=7680,vh=519,Ly=512,Dy=513,Ny=514,Qd=515,Uy=516,Oy=517,Fy=518,zy=519,Kc=35044,SR=35048,gh="300 es",Rn=2e3,Io=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const rs=Math.PI/180,Tr=180/Math.PI;function Kt(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function zl(n,e){return(n%e+e)%e}function By(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ky(n,e,t){return n!==e?(t-n)/(e-n):0}function ss(n,e,t){return(1-t)*n+t*e}function Vy(n,e,t,i){return ss(n,e,1-Math.exp(-t*i))}function Hy(n,e=1){return e-Math.abs(zl(n,e*2)-e)}function Gy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $y(n,e){return n+Math.random()*(e-n)}function qy(n){return n*(.5-Math.random())}function jy(n){n!==void 0&&(_h=n);let e=_h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zy(n){return n*rs}function Yy(n){return n*Tr}function Ky(n){return(n&n-1)===0&&n!==0}function Jy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ex(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bR={DEG2RAD:rs,RAD2DEG:Tr,generateUUID:Kt,clamp:xt,euclideanModulo:zl,mapLinear:By,inverseLerp:ky,lerp:ss,damp:Vy,pingpong:Hy,smoothstep:Gy,smootherstep:Wy,randInt:Xy,randFloat:$y,randFloatSpread:qy,seededRandom:jy,degToRad:Zy,radToDeg:Yy,isPowerOfTwo:Ky,ceilPowerOfTwo:Jy,floorPowerOfTwo:Qy,setQuaternionFromProperEuler:ex,normalize:ot,denormalize:sn};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],g=r[0],v=r[3],p=r[6],x=r[1],y=r[4],_=r[7],R=r[2],w=r[5],A=r[8];return s[0]=o*g+a*x+c*R,s[3]=o*v+a*y+c*w,s[6]=o*p+a*_+c*A,s[1]=l*g+u*x+h*R,s[4]=l*v+u*y+h*w,s[7]=l*p+u*_+h*A,s[2]=f*g+d*x+m*R,s[5]=f*v+d*y+m*w,s[8]=f*p+d*_+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,m=t*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=h*g,e[1]=(r*l-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new We;function ep(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tx(){const n=ds("canvas");return n.style.display="block",n}const yh={};function Qr(n){n in yh||(yh[n]=!0,console.warn(n))}function nx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ix(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rx(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(n.r=Pn(n.r),n.g=Pn(n.g),n.b=Pn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(n.r=gr(n.r),n.g=gr(n.g),n.b=gr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===jn?Ko:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const xh=[.64,.33,.3,.6,.15,.06],Mh=[.2126,.7152,.0722],Sh=[.3127,.329],bh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Rr]:{primaries:xh,whitePoint:Sh,transfer:Ko,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:Mh,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:xh,whitePoint:Sh,transfer:at,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:Mh,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}});let ji;class sx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=ds("canvas")),ji.width=e.width,ji.height=e.height;const i=ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pn(t[i]/255)*255):t[i]=Pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ox=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Kt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ya(r[o].image)):s.push(ya(r[o]))}else s=ya(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ax=0;class wt extends Vi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=Ri,r=Ri,s=fn,o=Ci,a=Yt,c=Nn,l=wt.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Kt(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sc:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sc:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Gd;wt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],g=c[2],v=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+v)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(d+1)/2,R=(p+1)/2,w=(u+f)/4,A=(h+g)/4,P=(m+v)/4;return y>_&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):_>R?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=w/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=P/s),this.set(i,r,s,t),this}let x=Math.sqrt((v-m)*(v-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(v-m)/x,this.y=(h-g)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cx extends Vi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends cx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class np extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lx extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],m=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(h!==g||c!==f||l!==d||u!==m){let v=1-a;const p=c*f+l*d+u*m+h*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),w=Math.atan2(R,p*x);v=Math.sin(v*w)/R,a=Math.sin(a*w)/R}const _=a*x;if(c=c*v+f*_,l=l*v+d*_,u=u*v+m*_,h=h*v+g*_,v===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-a*d,e[t+2]=l*m+u*d+a*f-c*h,e[t+3]=u*m-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new L,wh=new Cr;class ri{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Fs.subVectors(this.max,kr),Zi.subVectors(e.a,kr),Yi.subVectors(e.b,kr),Ki.subVectors(e.c,kr),kn.subVectors(Yi,Zi),Vn.subVectors(Ki,Yi),vi.subVectors(Zi,Ki);let t=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-vi.z,vi.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,vi.z,0,-vi.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-vi.y,vi.x,0];return!Ma(t,Zi,Yi,Ki,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,Zi,Yi,Ki,Fs))?!1:(zs.crossVectors(kn,Vn),t=[zs.x,zs.y,zs.z],Ma(t,Zi,Yi,Ki,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new L,new L,new L,new L,new L,new L,new L,new L],en=new L,Os=new ri,Zi=new L,Yi=new L,Ki=new L,kn=new L,Vn=new L,vi=new L,kr=new L,Fs=new L,zs=new L,gi=new L;function Ma(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gi.fromArray(n,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ux=new ri,Vr=new L,Sa=new L;class Fn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ux.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Sa)),this.expandByPoint(Vr.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new L,ba=new L,Bs=new L,Hn=new L,Ea=new L,ks=new L,wa=new L;class ys{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ba.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(ba);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=Hn.dot(this.direction),c=-Hn.dot(Bs),l=Hn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=s*u,h>=0)if(f>=-m)if(f<=m){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ba).addScaledVector(Bs,f),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){Ea.subVectors(t,e),ks.subVectors(i,e),wa.crossVectors(Ea,ks);let o=this.direction.dot(wa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,e);const c=a*this.direction.dot(ks.crossVectors(Hn,ks));if(c<0)return null;const l=a*this.direction.dot(Ea.cross(Hn));if(l<0||c+l>o)return null;const u=-a*Hn.dot(wa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,r,s,o,a,c,l,u,h,f,d,m,g,v){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,f,d,m,g,v)}set(e,t,i,r,s,o,a,c,l,u,h,f,d,m,g,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=g,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,m=l*u,g=l*h;t[0]=f+g*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,m=l*u,g=l*h;t[0]=f-g*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,g=a*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,g=a*l;t[0]=c*u,t[4]=g-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hx,e,fx)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Gn.crossVectors(i,Bt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Gn.crossVectors(i,Bt)),Gn.normalize(),Vs.crossVectors(Bt,Gn),r[0]=Gn.x,r[4]=Vs.x,r[8]=Bt.x,r[1]=Gn.y,r[5]=Vs.y,r[9]=Bt.y,r[2]=Gn.z,r[6]=Vs.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],g=i[6],v=i[10],p=i[14],x=i[3],y=i[7],_=i[11],R=i[15],w=r[0],A=r[4],P=r[8],E=r[12],M=r[1],I=r[5],z=r[9],F=r[13],V=r[2],j=r[6],H=r[10],ne=r[14],G=r[3],le=r[7],ve=r[11],Se=r[15];return s[0]=o*w+a*M+c*V+l*G,s[4]=o*A+a*I+c*j+l*le,s[8]=o*P+a*z+c*H+l*ve,s[12]=o*E+a*F+c*ne+l*Se,s[1]=u*w+h*M+f*V+d*G,s[5]=u*A+h*I+f*j+d*le,s[9]=u*P+h*z+f*H+d*ve,s[13]=u*E+h*F+f*ne+d*Se,s[2]=m*w+g*M+v*V+p*G,s[6]=m*A+g*I+v*j+p*le,s[10]=m*P+g*z+v*H+p*ve,s[14]=m*E+g*F+v*ne+p*Se,s[3]=x*w+y*M+_*V+R*G,s[7]=x*A+y*I+_*j+R*le,s[11]=x*P+y*z+_*H+R*ve,s[15]=x*E+y*F+_*ne+R*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],g=e[7],v=e[11],p=e[15];return m*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+g*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+v*(+t*l*h-t*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+p*(-r*a*u-t*c*h+t*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],g=e[13],v=e[14],p=e[15],x=h*v*l-g*f*l+g*c*d-a*v*d-h*c*p+a*f*p,y=m*f*l-u*v*l-m*c*d+o*v*d+u*c*p-o*f*p,_=u*g*l-m*h*l+m*a*d-o*g*d-u*a*p+o*h*p,R=m*h*c-u*g*c-m*a*f+o*g*f+u*a*v-o*h*v,w=t*x+i*y+r*_+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(g*f*s-h*v*s-g*r*d+i*v*d+h*r*p-i*f*p)*A,e[2]=(a*v*s-g*c*s+g*r*l-i*v*l-a*r*p+i*c*p)*A,e[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*A,e[4]=y*A,e[5]=(u*v*s-m*f*s+m*r*d-t*v*d-u*r*p+t*f*p)*A,e[6]=(m*c*s-o*v*s-m*r*l+t*v*l+o*r*p-t*c*p)*A,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*d+t*c*d)*A,e[8]=_*A,e[9]=(m*h*s-u*g*s-m*i*d+t*g*d+u*i*p-t*h*p)*A,e[10]=(o*g*s-m*a*s+m*i*l-t*g*l-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*d-t*a*d)*A,e[12]=R*A,e[13]=(u*g*r-m*h*r+m*i*f-t*g*f-u*i*v+t*h*v)*A,e[14]=(m*a*r-o*g*r-m*i*c+t*g*c+o*i*v-t*a*v)*A,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,m=s*h,g=o*u,v=o*h,p=a*h,x=c*l,y=c*u,_=c*h,R=i.x,w=i.y,A=i.z;return r[0]=(1-(g+p))*R,r[1]=(d+_)*R,r[2]=(m-y)*R,r[3]=0,r[4]=(d-_)*w,r[5]=(1-(f+p))*w,r[6]=(v+x)*w,r[7]=0,r[8]=(m+y)*A,r[9]=(v-x)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const o=Ji.set(r[4],r[5],r[6]).length(),a=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const l=1/s,u=1/o,h=1/a;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Rn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,m;if(a===Rn)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Io)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Rn){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*l,d=(i+r)*u;let m,g;if(a===Rn)m=(o+s)*h,g=-2*h;else if(a===Io)m=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new L,tn=new qe,hx=new L(0,0,0),fx=new L(1,1,1),Gn=new L,Vs=new L,Bt=new L,Th=new qe,Ah=new Cr;class an{constructor(e=0,t=0,i=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dx=0;const Rh=new L,Qi=new Cr,xn=new qe,Hs=new L,Hr=new L,px=new L,mx=new Cr,Ch=new L(1,0,0),Ph=new L(0,1,0),Ih=new L(0,0,1),Lh={type:"added"},vx={type:"removed"},er={type:"childadded",child:null},Ta={type:"childremoved",child:null};class mt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new L,t=new an,i=new Cr,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new We}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hs.copy(e):Hs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Hr,Hs,this.up):xn.lookAt(Hs,Hr,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(xn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vx),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DEFAULT_UP=new L(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new L,Mn=new L,Aa=new L,Sn=new L,tr=new L,nr=new L,Dh=new L,Ra=new L,Ca=new L,Pa=new L,Ia=new et,La=new et,Da=new et;class jt{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),Mn.subVectors(i,t),Aa.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(Mn),c=nn.dot(Aa),l=Mn.dot(Mn),u=Mn.dot(Aa),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ia.setScalar(0),La.setScalar(0),Da.setScalar(0),Ia.fromBufferAttribute(e,t),La.fromBufferAttribute(e,i),Da.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ia,s.x),o.addScaledVector(La,s.y),o.addScaledVector(Da,s.z),o}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),Mn.subVectors(e,t),nn.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),nn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,i),nr.subVectors(s,i),Ra.subVectors(e,i);const c=tr.dot(Ra),l=nr.dot(Ra);if(c<=0&&l<=0)return t.copy(i);Ca.subVectors(e,r);const u=tr.dot(Ca),h=nr.dot(Ca);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(tr,o);Pa.subVectors(e,s);const d=tr.dot(Pa),m=nr.dot(Pa);if(m>=0&&d<=m)return t.copy(s);const g=d*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(nr,a);const v=u*m-d*h;if(v<=0&&h-u>=0&&d-m>=0)return Dh.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Dh,a);const p=1/(v+g+f);return o=g*p,a=f*p,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=zl(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Na(o,s,e+1/3),this.g=Na(o,s,e),this.b=Na(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=ip[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Je.fromWorkingColorSpace(Rt.copy(this),e),Math.round(xt(Rt.r*255,0,255))*65536+Math.round(xt(Rt.g*255,0,255))*256+Math.round(xt(Rt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=qt){Je.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Gs);const i=ss(Wn.h,Gs.h,t),r=ss(Wn.s,Gs.s,t),s=ss(Wn.l,Gs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new ke;ke.NAMES=ip;let gx=0;class cn extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Kt(),this.name="",this.blending=mr,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=fc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==fc&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rp extends cn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new L,Ws=new J;class Gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kc,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class sp extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class op extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ze extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _x=0;const Xt=new qe,Ua=new mt,ir=new L,kt=new ri,Gr=new ri,Et=new L;class yt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Kt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ep(e)?op:sp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(kt.min,Gr.min),kt.expandByPoint(Et),Et.addVectors(kt.max,Gr.max),kt.expandByPoint(Et)):(kt.expandByPoint(Gr.min),kt.expandByPoint(Gr.max))}kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Et.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),Et.add(ir)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new L,c[P]=new L;const l=new L,u=new L,h=new L,f=new J,d=new J,m=new J,g=new L,v=new L;function p(P,E,M){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,M),u.sub(l),h.sub(l),d.sub(f),m.sub(f);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(I),v.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(I),a[P].add(g),a[E].add(g),a[M].add(g),c[P].add(v),c[E].add(v),c[M].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,E=x.length;P<E;++P){const M=x[P],I=M.start,z=M.count;for(let F=I,V=I+z;F<V;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new L,_=new L,R=new L,w=new L;function A(P){R.fromBufferAttribute(r,P),w.copy(R);const E=a[P];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),_.crossVectors(w,E);const I=_.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,E=x.length;P<E;++P){const M=x[P],I=M.start,z=M.count;for(let F=I,V=I+z;F<V;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),g=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,m=0;for(let g=0,v=c.length;g<v;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new Gt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nh=new qe,_i=new ys,Xs=new Fn,Uh=new L,$s=new L,qs=new L,js=new L,Oa=new L,Zs=new L,Oh=new L,Ys=new L;class Ut extends mt{constructor(e=new yt,t=new rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Oa.fromBufferAttribute(h,e),o?Zs.addScaledVector(Oa,u):Zs.addScaledVector(Oa.sub(t),u))}t.add(Zs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(Xs.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Xs,Uh)===null||_i.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Nh.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Nh),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const v=f[m],p=o[v.materialIndex],x=Math.max(v.start,d.start),y=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let _=x,R=y;_<R;_+=3){const w=a.getX(_),A=a.getX(_+1),P=a.getX(_+2);r=Ks(this,p,e,i,l,u,h,w,A,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let v=m,p=g;v<p;v+=3){const x=a.getX(v),y=a.getX(v+1),_=a.getX(v+2);r=Ks(this,o,e,i,l,u,h,x,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const v=f[m],p=o[v.materialIndex],x=Math.max(v.start,d.start),y=Math.min(c.count,Math.min(v.start+v.count,d.start+d.count));for(let _=x,R=y;_<R;_+=3){const w=_,A=_+1,P=_+2;r=Ks(this,p,e,i,l,u,h,w,A,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let v=m,p=g;v<p;v+=3){const x=v,y=v+1,_=v+2;r=Ks(this,o,e,i,l,u,h,x,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function yx(n,e,t,i,r,s,o,a){let c;if(e.side===Ot?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ti,a),c===null)return null;Ys.copy(a),Ys.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ys);return l<t.near||l>t.far?null:{distance:l,point:Ys.clone(),object:n}}function Ks(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,$s),n.getVertexPosition(c,qs),n.getVertexPosition(l,js);const u=yx(n,e,t,i,$s,qs,js,Oh);if(u){const h=new L;jt.getBarycoord(Oh,$s,qs,js,h),r&&(u.uv=jt.getInterpolatedAttribute(r,a,c,l,h,new J)),s&&(u.uv1=jt.getInterpolatedAttribute(s,a,c,l,h,new J)),o&&(u.normal=jt.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};jt.getNormal($s,qs,js,f.normal),u.face=f,u.barycoord=h}return u}class ni extends yt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function m(g,v,p,x,y,_,R,w,A,P,E){const M=_/A,I=R/P,z=_/2,F=R/2,V=w/2,j=A+1,H=P+1;let ne=0,G=0;const le=new L;for(let ve=0;ve<H;ve++){const Se=ve*I-F;for(let Ve=0;Ve<j;Ve++){const nt=Ve*M-z;le[g]=nt*x,le[v]=Se*y,le[p]=V,l.push(le.x,le.y,le.z),le[g]=0,le[v]=0,le[p]=w>0?1:-1,u.push(le.x,le.y,le.z),h.push(Ve/A),h.push(1-ve/P),ne+=1}}for(let ve=0;ve<P;ve++)for(let Se=0;Se<A;Se++){const Ve=f+Se+j*ve,nt=f+Se+j*(ve+1),q=f+(Se+1)+j*(ve+1),re=f+(Se+1)+j*ve;c.push(Ve,nt,re),c.push(nt,q,re),G+=6}a.addGroup(d,G,E),d+=G,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=Ar(n[t]);for(const r in i)e[r]=i[r]}return e}function xx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ap(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Mx={clone:Ar,merge:Pt};var Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends cn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cp extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new L,Fh=new J,zh=new J;class Vt extends cp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,zh),t.subVectors(zh,Fh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class Ex extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new Vt(rr,sr,e,t);s.layers=this.layers,this.add(s);const o=new Vt(rr,sr,e,t);o.layers=this.layers,this.add(o);const a=new Vt(rr,sr,e,t);a.layers=this.layers,this.add(a);const c=new Vt(rr,sr,e,t);c.layers=this.layers,this.add(c);const l=new Vt(rr,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class lp extends wt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wx extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ni(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Yn});s.uniforms.tEquirect.value=t;const o=new Ut(r,s),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=fn),new Ex(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Fa=new L,Tx=new L,Ax=new We;class Si{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fa.subVectors(i,t).cross(Tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ax.getNormalMatrix(e),r=this.coplanarPoint(Fa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Fn,Js=new L;class kl{constructor(e=new Si,t=new Si,i=new Si,r=new Si,s=new Si,o=new Si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],m=r[9],g=r[10],v=r[11],p=r[12],x=r[13],y=r[14],_=r[15];if(i[0].setComponents(c-s,f-l,v-d,_-p).normalize(),i[1].setComponents(c+s,f+l,v+d,_+p).normalize(),i[2].setComponents(c+o,f+u,v+m,_+x).normalize(),i[3].setComponents(c-o,f-u,v-m,_-x).normalize(),i[4].setComponents(c-a,f-h,v-g,_-y).normalize(),t===Rn)i[5].setComponents(c+a,f+h,v+g,_+y).normalize();else if(t===Io)i[5].setComponents(a,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function up(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Rx(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],g=h[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const g=h[d];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class xs extends yt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],m=[],g=[],v=[];for(let p=0;p<u;p++){const x=p*f-o;for(let y=0;y<l;y++){const _=y*h-s;m.push(_,-x,0),g.push(0,0,1),v.push(y/a),v.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const y=x+l*p,_=x+l*(p+1),R=x+1+l*(p+1),w=x+1+l*p;d.push(y,_,w),d.push(_,R,w)}this.setIndex(d),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(g,3)),this.setAttribute("uv",new Ze(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ux=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,US=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Cx,alphahash_pars_fragment:Px,alphamap_fragment:Ix,alphamap_pars_fragment:Lx,alphatest_fragment:Dx,alphatest_pars_fragment:Nx,aomap_fragment:Ux,aomap_pars_fragment:Ox,batching_pars_vertex:Fx,batching_vertex:zx,begin_vertex:Bx,beginnormal_vertex:kx,bsdfs:Vx,iridescence_fragment:Hx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:$x,clipping_planes_vertex:qx,color_fragment:jx,color_pars_fragment:Zx,color_pars_vertex:Yx,color_vertex:Kx,common:Jx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:eM,displacementmap_pars_vertex:tM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:rM,colorspace_fragment:sM,colorspace_pars_fragment:oM,envmap_fragment:aM,envmap_common_pars_fragment:cM,envmap_pars_fragment:lM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:MM,envmap_vertex:hM,fog_vertex:fM,fog_pars_vertex:dM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:vM,lightmap_pars_fragment:gM,lights_lambert_fragment:_M,lights_lambert_pars_fragment:yM,lights_pars_begin:xM,lights_toon_fragment:SM,lights_toon_pars_fragment:bM,lights_phong_fragment:EM,lights_phong_pars_fragment:wM,lights_physical_fragment:TM,lights_physical_pars_fragment:AM,lights_fragment_begin:RM,lights_fragment_maps:CM,lights_fragment_end:PM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:LM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:NM,map_fragment:UM,map_pars_fragment:OM,map_particle_fragment:FM,map_particle_pars_fragment:zM,metalnessmap_fragment:BM,metalnessmap_pars_fragment:kM,morphinstance_vertex:VM,morphcolor_vertex:HM,morphnormal_vertex:GM,morphtarget_pars_vertex:WM,morphtarget_vertex:XM,normal_fragment_begin:$M,normal_fragment_maps:qM,normal_pars_fragment:jM,normal_pars_vertex:ZM,normal_vertex:YM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:QM,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:oS,dithering_pars_fragment:aS,roughnessmap_fragment:cS,roughnessmap_pars_fragment:lS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:hS,shadowmap_vertex:fS,shadowmask_pars_fragment:dS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:vS,skinnormal_vertex:gS,specularmap_fragment:_S,specularmap_pars_fragment:yS,tonemapping_fragment:xS,tonemapping_pars_fragment:MS,transmission_fragment:SS,transmission_pars_fragment:bS,uv_pars_fragment:ES,uv_pars_vertex:wS,uv_vertex:TS,worldpos_vertex:AS,background_vert:RS,background_frag:CS,backgroundCube_vert:PS,backgroundCube_frag:IS,cube_vert:LS,cube_frag:DS,depth_vert:NS,depth_frag:US,distanceRGBA_vert:OS,distanceRGBA_frag:FS,equirect_vert:zS,equirect_frag:BS,linedashed_vert:kS,linedashed_frag:VS,meshbasic_vert:HS,meshbasic_frag:GS,meshlambert_vert:WS,meshlambert_frag:XS,meshmatcap_vert:$S,meshmatcap_frag:qS,meshnormal_vert:jS,meshnormal_frag:ZS,meshphong_vert:YS,meshphong_frag:KS,meshphysical_vert:JS,meshphysical_frag:QS,meshtoon_vert:eb,meshtoon_frag:tb,points_vert:nb,points_frag:ib,shadow_vert:rb,shadow_frag:sb,sprite_vert:ob,sprite_frag:ab},ue={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},hn={basic:{uniforms:Pt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Pt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Pt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Pt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Pt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Pt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Pt([ue.points,ue.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Pt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Pt([ue.common,ue.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Pt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Pt([ue.sprite,ue.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Pt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Pt([ue.lights,ue.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};hn.physical={uniforms:Pt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Qs={r:0,b:0,g:0},xi=new an,cb=new qe;function lb(n,e,t,i,r,s,o){const a=new ke(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function g(x){let y=!1;const _=m(x);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,y){const _=m(y);_&&(_.isCubeTexture||_.mapping===Zo)?(u===void 0&&(u=new Ut(new ni(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ar(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xi.copy(y.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cb.makeRotationFromEuler(xi)),u.material.toneMapped=Je.getTransfer(_.colorSpace)!==at,(h!==_||f!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ut(new xs(2,2),new Un({name:"BackgroundMaterial",uniforms:Ar(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Qs,ap(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:g,addToRenderList:v}}function ub(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,I,z,F,V){let j=!1;const H=h(F,z,I);s!==H&&(s=H,l(s.object)),j=d(M,F,z,V),j&&m(M,F,z,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(M,I,z,F),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,I,z){const F=z.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let j=V[I.id];j===void 0&&(j={},V[I.id]=j);let H=j[F];return H===void 0&&(H=f(c()),j[F]=H),H}function f(M){const I=[],z=[],F=[];for(let V=0;V<t;V++)I[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,I,z,F){const V=s.attributes,j=I.attributes;let H=0;const ne=z.getAttributes();for(const G in ne)if(ne[G].location>=0){const ve=V[G];let Se=j[G];if(Se===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),ve===void 0||ve.attribute!==Se||Se&&ve.data!==Se.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function m(M,I,z,F){const V={},j=I.attributes;let H=0;const ne=z.getAttributes();for(const G in ne)if(ne[G].location>=0){let ve=j[G];ve===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));const Se={};Se.attribute=ve,ve&&ve.data&&(Se.data=ve.data),V[G]=Se,H++}s.attributes=V,s.attributesNum=H,s.index=F}function g(){const M=s.newAttributes;for(let I=0,z=M.length;I<z;I++)M[I]=0}function v(M){p(M,0)}function p(M,I){const z=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;z[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),V[M]!==I&&(n.vertexAttribDivisor(M,I),V[M]=I)}function x(){const M=s.newAttributes,I=s.enabledAttributes;for(let z=0,F=I.length;z<F;z++)I[z]!==M[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function y(M,I,z,F,V,j,H){H===!0?n.vertexAttribIPointer(M,I,z,V,j):n.vertexAttribPointer(M,I,z,F,V,j)}function _(M,I,z,F){g();const V=F.attributes,j=z.getAttributes(),H=I.defaultAttributeValues;for(const ne in j){const G=j[ne];if(G.location>=0){let le=V[ne];if(le===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const ve=le.normalized,Se=le.itemSize,Ve=e.get(le);if(Ve===void 0)continue;const nt=Ve.buffer,q=Ve.type,re=Ve.bytesPerElement,be=q===n.INT||q===n.UNSIGNED_INT||le.gpuType===Il;if(le.isInterleavedBufferAttribute){const oe=le.data,De=oe.stride,ze=le.offset;if(oe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<G.locationSize;Oe++)p(G.location+Oe,oe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Oe=0;Oe<G.locationSize;Oe++)v(G.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Oe=0;Oe<G.locationSize;Oe++)y(G.location+Oe,Se/G.locationSize,q,ve,De*re,(ze+Se/G.locationSize*Oe)*re,be)}else{if(le.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,le.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let oe=0;oe<G.locationSize;oe++)v(G.location+oe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let oe=0;oe<G.locationSize;oe++)y(G.location+oe,Se/G.locationSize,q,ve,Se*re,Se/G.locationSize*oe*re,be)}}else if(H!==void 0){const ve=H[ne];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(G.location,ve);break;case 3:n.vertexAttrib3fv(G.location,ve);break;case 4:n.vertexAttrib4fv(G.location,ve);break;default:n.vertexAttrib1fv(G.location,ve)}}}}x()}function R(){P();for(const M in i){const I=i[M];for(const z in I){const F=I[z];for(const V in F)u(F[V].object),delete F[V];delete I[z]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const z in I){const F=I[z];for(const V in F)u(F[V].object),delete F[V];delete I[z]}delete i[M.id]}function A(M){for(const I in i){const z=i[I];if(z[M.id]===void 0)continue;const F=z[M.id];for(const V in F)u(F[V].object),delete F[V];delete z[M.id]}}function P(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:v,disableUnusedAttributes:x}}function hb(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*f[g];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function fb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Yt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Nn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==on&&!P)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:w}}function db(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Si,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,g=h.clipIntersection,v=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!v)s?u(null):l();else{const x=s?0:i,y=x*4;let _=p.clippingState||null;c.value=_,_=u(m,f,y,d);for(let R=0;R!==y;++R)_[R]=t[R];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){const g=h!==null?h.length:0;let v=null;if(g!==0){if(v=c.value,m!==!0||v===null){const p=d+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(v===null||v.length<p)&&(v=new Float32Array(p));for(let y=0,_=d;y!==g;++y,_+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(v,_),v[_+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}function pb(n){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=Sr:a===Mc&&(o.mapping=br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xc||a===Mc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wx(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hp extends cp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fr=4,Bh=[.125,.215,.35,.446,.526,.582],wi=20,za=new hp,kh=new ke;let Ba=null,ka=0,Va=0,Ha=!1;const bi=(1+Math.sqrt(5))/2,or=1/bi,Vh=[new L(-bi,or,0),new L(bi,or,0),new L(-or,0,bi),new L(or,0,bi),new L(0,bi,-or),new L(0,bi,or),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,ka,Va),this._renderer.xr.enabled=Ha,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:_s,format:Yt,colorSpace:Rr,depthBuffer:!1},r=Gh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mb(s)),this._blurMaterial=vb(s,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,i,r){const a=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(kh),u.toneMapping=Kn,u.autoClear=!1;const d=new rp({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),m=new Ut(new ni,d);let g=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,g=!0):(d.color.copy(kh),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;eo(r,x*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Sr||e.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;eo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,za)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vh[(r-s-1)%Vh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ut(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*wi-1),g=s/m,v=isFinite(s)?1+Math.floor(u*g):wi;v>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${wi}`);const p=[];let x=0;for(let A=0;A<wi;++A){const P=A/g,E=Math.exp(-P*P/2);p.push(E),A===0?x+=E:A<v&&(x+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;const _=this._sizeLods[r],R=3*_*(r>y-fr?r-y+fr:0),w=4*(this._cubeSize-_);eo(t,R,w,3*_,2*_),c.setRenderTarget(t),c.render(h,za)}}function mb(n){const e=[],t=[],i=[];let r=n;const s=n-fr+1+Bh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-fr?c=Bh[o-n+fr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,g=3,v=2,p=1,x=new Float32Array(g*m*d),y=new Float32Array(v*m*d),_=new Float32Array(p*m*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,P=w>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(E,g*m*w),y.set(f,v*m*w);const M=[w,w,w,w,w,w];_.set(M,p*m*w)}const R=new yt;R.setAttribute("position",new Gt(x,g)),R.setAttribute("uv",new Gt(y,v)),R.setAttribute("faceIndex",new Gt(_,p)),e.push(R),r>fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gh(n,e,t){const i=new Oi(n,e,t);return i.texture.mapping=Zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vb(n,e,t){const i=new Float32Array(wi),r=new L(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Wh(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Xh(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===xc||c===Mc,u=c===Sr||c===br;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Hh(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Hh(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _b(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yb(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const g=f.morphAttributes[m];for(let v=0,p=g.length;v<p;v++)e.remove(g[v])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const g=d[m];for(let v=0,p=g.length;v<p;v++)e.update(g[v],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,m=h.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let y=0,_=x.length;y<_;y+=3){const R=x[y+0],w=x[y+1],A=x[y+2];f.push(R,w,w,A,A,R)}}else if(m!==void 0){const x=m.array;g=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const R=y+0,w=y+1,A=y+2;f.push(R,w,w,A,A,R)}}else return;const v=new(ep(f)?op:sp)(f,1);v.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,v)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function xb(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function l(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,f*o,m),t.update(d,i,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let v=0;for(let p=0;p<m;p++)v+=d[p];t.update(v,i,1)}function h(f,d,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{v.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,g,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*g[x];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Mb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Sb(n,e,t){const i=new WeakMap,r=new et;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let d=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",d)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let R=a.attributes.position.count*_,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*w*4*h),P=new np(A,R,w,h);P.type=on,P.needsUpdate=!0;const E=_*4;for(let M=0;M<h;M++){const I=p[M],z=x[M],F=y[M],V=R*w*4*M;for(let j=0;j<I.count;j++){const H=j*E;m===!0&&(r.fromBufferAttribute(I,j),A[V+H+0]=r.x,A[V+H+1]=r.y,A[V+H+2]=r.z,A[V+H+3]=0),g===!0&&(r.fromBufferAttribute(z,j),A[V+H+4]=r.x,A[V+H+5]=r.y,A[V+H+6]=r.z,A[V+H+7]=0),v===!0&&(r.fromBufferAttribute(F,j),A[V+H+8]=r.x,A[V+H+9]=r.y,A[V+H+10]=r.z,A[V+H+11]=F.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new J(R,w)},i.set(a,f),a.addEventListener("dispose",d)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function bb(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class fp extends wt{constructor(e,t,i,r,s,o,a,c,l,u=vr){if(u!==vr&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=Ui),i===void 0&&u===wr&&(i=Er),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const dp=new wt,$h=new fp(1,1),pp=new np,mp=new lx,vp=new lp,qh=[],jh=[],Zh=new Float32Array(16),Yh=new Float32Array(9),Kh=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=qh[r];if(s===void 0&&(s=new Float32Array(r),qh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jo(n,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Eb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Rb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Kh.set(i),n.uniformMatrix2fv(this.addr,!1,Kh),bt(t,i)}}function Cb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Yh.set(i),n.uniformMatrix3fv(this.addr,!1,Yh),bt(t,i)}}function Pb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Zh.set(i),n.uniformMatrix4fv(this.addr,!1,Zh),bt(t,i)}}function Ib(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function Nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function Ub(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function Fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function Bb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($h.compareFunction=Qd,s=$h):s=dp,t.setTexture2D(e||s,r)}function kb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||mp,r)}function Vb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vp,r)}function Hb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pp,r)}function Gb(n){switch(n){case 5126:return Eb;case 35664:return wb;case 35665:return Tb;case 35666:return Ab;case 35674:return Rb;case 35675:return Cb;case 35676:return Pb;case 5124:case 35670:return Ib;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Nb;case 5125:return Ub;case 36294:return Ob;case 36295:return Fb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Hb}}function Wb(n,e){n.uniform1fv(this.addr,e)}function Xb(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function $b(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function qb(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function jb(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zb(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yb(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kb(n,e){n.uniform1iv(this.addr,e)}function Jb(n,e){n.uniform2iv(this.addr,e)}function Qb(n,e){n.uniform3iv(this.addr,e)}function eE(n,e){n.uniform4iv(this.addr,e)}function tE(n,e){n.uniform1uiv(this.addr,e)}function nE(n,e){n.uniform2uiv(this.addr,e)}function iE(n,e){n.uniform3uiv(this.addr,e)}function rE(n,e){n.uniform4uiv(this.addr,e)}function sE(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||dp,s[o])}function oE(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||mp,s[o])}function aE(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vp,s[o])}function cE(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||pp,s[o])}function lE(n){switch(n){case 5126:return Wb;case 35664:return Xb;case 35665:return $b;case 35666:return qb;case 35674:return jb;case 35675:return Zb;case 35676:return Yb;case 5124:case 35670:return Kb;case 35667:case 35671:return Jb;case 35668:case 35672:return Qb;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return aE;case 36289:case 36303:case 36311:case 36292:return cE}}class uE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gb(t.type)}}class hE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lE(t.type)}}class fE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Jh(n,e){n.seq.push(e),n.map[e.id]=e}function dE(n,e,t){const i=n.name,r=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),o=Ga.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Jh(t,l===void 0?new uE(a,n,e):new hE(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new fE(a),Jh(t,h)),t=h}}}class Eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);dE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Qh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pE=37297;let mE=0;function vE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ef=new We;function gE(n){Je._getMatrix(ef,Je.workingColorSpace,n);const e=`mat3( ${ef.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Ko:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function tf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vE(n.getShaderSource(e),o)}else return r}function _E(n,e){const t=gE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yE(n,e){let t;switch(e){case gy:t="Linear";break;case _y:t="Reinhard";break;case yy:t="Cineon";break;case xy:t="ACESFilmic";break;case Sy:t="AgX";break;case by:t="Neutral";break;case My:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new L;function xE(){Je.getLuminanceCoefficients(to);const n=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ME(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function SE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function es(n){return n!==""}function nf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(EE,TE)}const wE=new Map;function TE(n,e){let t=$e[e];if(t===void 0){const i=wE.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}const AE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(n){return n.replace(AE,RE)}function RE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function of(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function PE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case br:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function LE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pl:e="ENVMAP_BLENDING_MULTIPLY";break;case my:e="ENVMAP_BLENDING_MIX";break;case vy:e="ENVMAP_BLENDING_ADD";break}return e}function DE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function NE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=CE(t),l=PE(t),u=IE(t),h=LE(t),f=DE(t),d=ME(t),m=SE(s),g=r.createProgram();let v,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(es).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(es).join(`
`),p.length>0&&(p+=`
`)):(v=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Kn?yE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,_E("linearToOutputTexel",t.outputColorSpace),xE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),o=Jc(o),o=nf(o,t),o=rf(o,t),a=Jc(a),a=nf(a,t),a=rf(a,t),o=sf(o),a=sf(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+v+o,_=x+p+a,R=Qh(r,r.VERTEX_SHADER,y),w=Qh(r,r.FRAGMENT_SHADER,_);r.attachShader(g,R),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(I){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(w).trim();let j=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,R,w);else{const ne=tf(r,R,"vertex"),G=tf(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+ne+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(H=!1);H&&(I.diagnostics={runnable:j,programLog:z,vertexShader:{log:F,prefix:v},fragmentShader:{log:V,prefix:p}})}r.deleteShader(R),r.deleteShader(w),P=new Eo(r,g),E=bE(r,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,pE)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let UE=0;class OE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new FE(e),t.set(e,i)),i}}class FE{constructor(e){this.id=UE++,this.code=e,this.usedTimes=0}}function zE(n,e,t,i,r,s,o){const a=new Bl,c=new OE,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function v(E,M,I,z,F){const V=z.fog,j=F.geometry,H=E.isMeshStandardMaterial?z.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),G=ne&&ne.mapping===Zo?ne.image.height:null,le=m[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ve=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=ve!==void 0?ve.length:0;let Ve=0;j.morphAttributes.position!==void 0&&(Ve=1),j.morphAttributes.normal!==void 0&&(Ve=2),j.morphAttributes.color!==void 0&&(Ve=3);let nt,q,re,be;if(le){const st=hn[le];nt=st.vertexShader,q=st.fragmentShader}else nt=E.vertexShader,q=E.fragmentShader,c.update(E),re=c.getVertexShaderID(E),be=c.getFragmentShaderID(E);const oe=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),ze=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,Ke=!!E.map,Y=!!E.matcap,ie=!!ne,C=!!E.aoMap,Pe=!!E.lightMap,ee=!!E.bumpMap,ye=!!E.normalMap,ce=!!E.displacementMap,Ne=!!E.emissiveMap,ge=!!E.metalnessMap,T=!!E.roughnessMap,S=E.anisotropy>0,O=E.clearcoat>0,X=E.dispersion>0,K=E.iridescence>0,$=E.sheen>0,Ee=E.transmission>0,he=S&&!!E.anisotropyMap,_e=O&&!!E.clearcoatMap,je=O&&!!E.clearcoatNormalMap,te=O&&!!E.clearcoatRoughnessMap,xe=K&&!!E.iridescenceMap,Ue=K&&!!E.iridescenceThicknessMap,Fe=$&&!!E.sheenColorMap,Me=$&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,Xe=!!E.specularColorMap,lt=!!E.specularIntensityMap,D=Ee&&!!E.transmissionMap,fe=Ee&&!!E.thicknessMap,W=!!E.gradientMap,Z=!!E.alphaMap,me=E.alphaTest>0,de=!!E.alphaHash,He=!!E.extensions;let gt=Kn;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(gt=n.toneMapping);const Tt={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:nt,fragmentShader:q,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:ze,instancingColor:ze&&F.instanceColor!==null,instancingMorph:ze&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Rr,alphaToCoverage:!!E.alphaToCoverage,map:Ke,matcap:Y,envMap:ie,envMapMode:ie&&ne.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:Pe,bumpMap:ee,normalMap:ye,displacementMap:f&&ce,emissiveMap:Ne,normalMapObjectSpace:ye&&E.normalMapType===Iy,normalMapTangentSpace:ye&&E.normalMapType===Yo,metalnessMap:ge,roughnessMap:T,anisotropy:S,anisotropyMap:he,clearcoat:O,clearcoatMap:_e,clearcoatNormalMap:je,clearcoatRoughnessMap:te,dispersion:X,iridescence:K,iridescenceMap:xe,iridescenceThicknessMap:Ue,sheen:$,sheenColorMap:Fe,sheenRoughnessMap:Me,specularMap:Ye,specularColorMap:Xe,specularIntensityMap:lt,transmission:Ee,transmissionMap:D,thicknessMap:fe,gradientMap:W,opaque:E.transparent===!1&&E.blending===mr&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:me,alphaHash:de,combine:E.combine,mapUv:Ke&&g(E.map.channel),aoMapUv:C&&g(E.aoMap.channel),lightMapUv:Pe&&g(E.lightMap.channel),bumpMapUv:ee&&g(E.bumpMap.channel),normalMapUv:ye&&g(E.normalMap.channel),displacementMapUv:ce&&g(E.displacementMap.channel),emissiveMapUv:Ne&&g(E.emissiveMap.channel),metalnessMapUv:ge&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:he&&g(E.anisotropyMap.channel),clearcoatMapUv:_e&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:je&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(E.sheenRoughnessMap.channel),specularMapUv:Ye&&g(E.specularMap.channel),specularColorMapUv:Xe&&g(E.specularColorMap.channel),specularIntensityMapUv:lt&&g(E.specularIntensityMap.channel),transmissionMapUv:D&&g(E.transmissionMap.channel),thicknessMapUv:fe&&g(E.thicknessMap.channel),alphaMapUv:Z&&g(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ye||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(Ke||Z),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:De,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ke&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:Ne&&E.emissiveMap.isVideoTexture===!0&&Je.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===Ot,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)M.push(I),M.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(x(M,E),y(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const M=m[E.type];let I;if(M){const z=hn[M];I=Mx.clone(z.uniforms)}else I=E.uniforms;return I}function R(E,M){let I;for(let z=0,F=u.length;z<F;z++){const V=u[z];if(V.cacheKey===M){I=V,++I.usedTimes;break}}return I===void 0&&(I=new NE(n,M,E,s),u.push(I)),I}function w(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:P}}function BE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function kE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,m,g,v){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:g,group:v},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=g,p.group=v),e++,p}function a(h,f,d,m,g,v){const p=o(h,f,d,m,g,v);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(h,f,d,m,g,v){const p=o(h,f,d,m,g,v);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||kE),i.length>1&&i.sort(f||af),r.length>1&&r.sort(f||af)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function VE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new cf,n.set(i,[o])):r>=s.length?(o=new cf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function HE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function GE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let WE=0;function XE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $E(n){const e=new HE,t=GE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const r=new L,s=new qe,o=new qe;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,m=0,g=0,v=0,p=0,x=0,y=0,_=0,R=0,w=0,A=0;l.sort(XE);for(let E=0,M=l.length;E<M;E++){const I=l[E],z=I.color,F=I.intensity,V=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*F,h+=z.g*F,f+=z.b*F;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],F);A++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,G=t.get(I);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=I.shadow.matrix,x++}i.directional[d]=H,d++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(z).multiplyScalar(F),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[g]=H;const ne=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,ne.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[g]=ne.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.spotShadow[g]=G,i.spotShadowMap[g]=j,_++}g++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(z).multiplyScalar(F),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=H,v++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const ne=I.shadow,G=t.get(I);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=H,m++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(F),H.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[p]=H,p++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==g||P.rectAreaLength!==v||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=v,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,P.directionalLength=d,P.pointLength=m,P.spotLength=g,P.rectAreaLength=v,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=A,i.version=WE++)}function c(l,u){let h=0,f=0,d=0,m=0,g=0;const v=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),h++}else if(y.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),d++}else if(y.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),o.identity(),s.copy(y.matrixWorld),s.premultiply(v),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),f++}else if(y.isHemisphereLight){const _=i.hemi[g];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(v),g++}}}return{setup:a,setupView:c,state:i}}function lf(n){const e=new $E(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function qE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new lf(n),e.set(r,[a])):s>=o.length?(a=new lf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class jE extends cn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZE extends cn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JE(n,e,t){let i=new kl;const r=new J,s=new J,o=new et,a=new jE({depthPacking:Py}),c=new ZE,l={},u=t.maxTextureSize,h={[ti]:Ot,[Ot]:ti,[Tn]:Tn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:YE,fragmentShader:KE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new yt;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ut(m,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hd;let p=this.type;this.render=function(w,A,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Yn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=p!==En&&this.type===En,V=p===En&&this.type!==En;for(let j=0,H=w.length;j<H;j++){const ne=w[j],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const le=G.getFrameExtents();if(r.multiply(le),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,G.mapSize.y=s.y)),G.map===null||F===!0||V===!0){const Se=this.type!==En?{minFilter:Ht,magFilter:Ht}:{};G.map!==null&&G.map.dispose(),G.map=new Oi(r.x,r.y,Se),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ve=G.getViewportCount();for(let Se=0;Se<ve;Se++){const Ve=G.getViewport(Se);o.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),z.viewport(o),G.updateMatrices(ne,Se),i=G.getFrustum(),_(A,P,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===En&&x(G,P),G.needsUpdate=!1}p=this.type,v.needsUpdate=!1,n.setRenderTarget(E,M,I)};function x(w,A){const P=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Oi(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,P,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,P,d,g,null)}function y(w,A,P,E){let M=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,F=A.uuid;let V=l[z];V===void 0&&(V={},l[z]=V);let j=V[F];j===void 0&&(j=M.clone(),V[F]=j,A.addEventListener("dispose",R)),M=j}if(M.visible=A.visible,M.wireframe=A.wireframe,E===En?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=P}return M}function _(w,A,P,E,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===En)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const F=e.update(w),V=w.material;if(Array.isArray(V)){const j=F.groups;for(let H=0,ne=j.length;H<ne;H++){const G=j[H],le=V[G.materialIndex];if(le&&le.visible){const ve=y(w,le,E,M);w.onBeforeShadow(n,w,A,P,F,ve,G),n.renderBufferDirect(P,null,F,ve,w,G),w.onAfterShadow(n,w,A,P,F,ve,G)}}}else if(V.visible){const j=y(w,V,E,M);w.onBeforeShadow(n,w,A,P,F,j,null),n.renderBufferDirect(P,null,F,j,w,null),w.onAfterShadow(n,w,A,P,F,j,null)}}const z=w.children;for(let F=0,V=z.length;F<V;F++)_(z[F],A,P,E,M)}function R(w){w.target.removeEventListener("dispose",R);for(const P in l){const E=l[P],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const QE={[dc]:pc,[mc]:_c,[vc]:yc,[Mr]:gc,[pc]:dc,[_c]:mc,[yc]:vc,[gc]:Mr};function ew(n,e){function t(){let D=!1;const fe=new et;let W=null;const Z=new et(0,0,0,0);return{setMask:function(me){W!==me&&!D&&(n.colorMask(me,me,me,me),W=me)},setLocked:function(me){D=me},setClear:function(me,de,He,gt,Tt){Tt===!0&&(me*=gt,de*=gt,He*=gt),fe.set(me,de,He,gt),Z.equals(fe)===!1&&(n.clearColor(me,de,He,gt),Z.copy(fe))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,fe=!1,W=null,Z=null,me=null;return{setReversed:function(de){if(fe!==de){const He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const gt=me;me=null,this.setClear(gt)}fe=de},getReversed:function(){return fe},setTest:function(de){de?oe(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(de){W!==de&&!D&&(n.depthMask(de),W=de)},setFunc:function(de){if(fe&&(de=QE[de]),Z!==de){switch(de){case dc:n.depthFunc(n.NEVER);break;case pc:n.depthFunc(n.ALWAYS);break;case mc:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case vc:n.depthFunc(n.EQUAL);break;case gc:n.depthFunc(n.GEQUAL);break;case _c:n.depthFunc(n.GREATER);break;case yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=de}},setLocked:function(de){D=de},setClear:function(de){me!==de&&(fe&&(de=1-de),n.clearDepth(de),me=de)},reset:function(){D=!1,W=null,Z=null,me=null,fe=!1}}}function r(){let D=!1,fe=null,W=null,Z=null,me=null,de=null,He=null,gt=null,Tt=null;return{setTest:function(st){D||(st?oe(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(st){fe!==st&&!D&&(n.stencilMask(st),fe=st)},setFunc:function(st,Jt,vn){(W!==st||Z!==Jt||me!==vn)&&(n.stencilFunc(st,Jt,vn),W=st,Z=Jt,me=vn)},setOp:function(st,Jt,vn){(de!==st||He!==Jt||gt!==vn)&&(n.stencilOp(st,Jt,vn),de=st,He=Jt,gt=vn)},setLocked:function(st){D=st},setClear:function(st){Tt!==st&&(n.clearStencil(st),Tt=st)},reset:function(){D=!1,fe=null,W=null,Z=null,me=null,de=null,He=null,gt=null,Tt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,g=!1,v=null,p=null,x=null,y=null,_=null,R=null,w=null,A=new ke(0,0,0),P=0,E=!1,M=null,I=null,z=null,F=null,V=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ne=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=ne>=2);let le=null,ve={};const Se=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),nt=new et().fromArray(Se),q=new et().fromArray(Ve);function re(D,fe,W,Z){const me=new Uint8Array(4),de=n.createTexture();n.bindTexture(D,de),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<W;He++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(fe+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return de}const be={};be[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Mr),ee(!1),ye(ah),oe(n.CULL_FACE),C(Yn);function oe(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function De(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function ze(D,fe){return h[D]!==fe?(n.bindFramebuffer(D,fe),h[D]=fe,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Oe(D,fe){let W=d,Z=!1;if(D){W=f.get(fe),W===void 0&&(W=[],f.set(fe,W));const me=D.textures;if(W.length!==me.length||W[0]!==n.COLOR_ATTACHMENT0){for(let de=0,He=me.length;de<He;de++)W[de]=n.COLOR_ATTACHMENT0+de;W.length=me.length,Z=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Z=!0);Z&&n.drawBuffers(W)}function Ke(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const Y={[Ei]:n.FUNC_ADD,[J0]:n.FUNC_SUBTRACT,[Q0]:n.FUNC_REVERSE_SUBTRACT};Y[ey]=n.MIN,Y[ty]=n.MAX;const ie={[ny]:n.ZERO,[iy]:n.ONE,[ry]:n.SRC_COLOR,[hc]:n.SRC_ALPHA,[uy]:n.SRC_ALPHA_SATURATE,[cy]:n.DST_COLOR,[oy]:n.DST_ALPHA,[sy]:n.ONE_MINUS_SRC_COLOR,[fc]:n.ONE_MINUS_SRC_ALPHA,[ly]:n.ONE_MINUS_DST_COLOR,[ay]:n.ONE_MINUS_DST_ALPHA,[hy]:n.CONSTANT_COLOR,[fy]:n.ONE_MINUS_CONSTANT_COLOR,[dy]:n.CONSTANT_ALPHA,[py]:n.ONE_MINUS_CONSTANT_ALPHA};function C(D,fe,W,Z,me,de,He,gt,Tt,st){if(D===Yn){g===!0&&(De(n.BLEND),g=!1);return}if(g===!1&&(oe(n.BLEND),g=!0),D!==K0){if(D!==v||st!==E){if((p!==Ei||_!==Ei)&&(n.blendEquation(n.FUNC_ADD),p=Ei,_=Ei),st)switch(D){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ch:n.blendFunc(n.ONE,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ch:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,y=null,R=null,w=null,A.set(0,0,0),P=0,v=D,E=st}return}me=me||fe,de=de||W,He=He||Z,(fe!==p||me!==_)&&(n.blendEquationSeparate(Y[fe],Y[me]),p=fe,_=me),(W!==x||Z!==y||de!==R||He!==w)&&(n.blendFuncSeparate(ie[W],ie[Z],ie[de],ie[He]),x=W,y=Z,R=de,w=He),(gt.equals(A)===!1||Tt!==P)&&(n.blendColor(gt.r,gt.g,gt.b,Tt),A.copy(gt),P=Tt),v=D,E=!1}function Pe(D,fe){D.side===Tn?De(n.CULL_FACE):oe(n.CULL_FACE);let W=D.side===Ot;fe&&(W=!W),ee(W),D.blending===mr&&D.transparent===!1?C(Yn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function ye(D){D!==j0?(oe(n.CULL_FACE),D!==I&&(D===ah?n.cullFace(n.BACK):D===Z0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),I=D}function ce(D){D!==z&&(H&&n.lineWidth(D),z=D)}function Ne(D,fe,W){D?(oe(n.POLYGON_OFFSET_FILL),(F!==fe||V!==W)&&(n.polygonOffset(fe,W),F=fe,V=W)):De(n.POLYGON_OFFSET_FILL)}function ge(D){D?oe(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function T(D){D===void 0&&(D=n.TEXTURE0+j-1),le!==D&&(n.activeTexture(D),le=D)}function S(D,fe,W){W===void 0&&(le===null?W=n.TEXTURE0+j-1:W=le);let Z=ve[W];Z===void 0&&(Z={type:void 0,texture:void 0},ve[W]=Z),(Z.type!==D||Z.texture!==fe)&&(le!==W&&(n.activeTexture(W),le=W),n.bindTexture(D,fe||be[D]),Z.type=D,Z.texture=fe)}function O(){const D=ve[le];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){nt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function Me(D){q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Ye(D,fe){let W=l.get(fe);W===void 0&&(W=new WeakMap,l.set(fe,W));let Z=W.get(D);Z===void 0&&(Z=n.getUniformBlockIndex(fe,D.name),W.set(D,Z))}function Xe(D,fe){const Z=l.get(fe).get(D);c.get(fe)!==Z&&(n.uniformBlockBinding(fe,Z,D.__bindingPointIndex),c.set(fe,Z))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,ve={},h={},f=new WeakMap,d=[],m=null,g=!1,v=null,p=null,x=null,y=null,_=null,R=null,w=null,A=new ke(0,0,0),P=0,E=!1,M=null,I=null,z=null,F=null,V=null,nt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:De,bindFramebuffer:ze,drawBuffers:Oe,useProgram:Ke,setBlending:C,setMaterial:Pe,setFlipSided:ee,setCullFace:ye,setLineWidth:ce,setPolygonOffset:Ne,setScissorTest:ge,activeTexture:T,bindTexture:S,unbindTexture:O,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:xe,texImage3D:Ue,updateUBOMapping:Ye,uniformBlockBinding:Xe,texStorage2D:je,texStorage3D:te,texSubImage2D:$,texSubImage3D:Ee,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Fe,viewport:Me,reset:lt}}function uf(n,e,t,i){const r=tw(i);switch(t){case qd:return n*e;case Zd:return n*e;case Yd:return n*e*2;case Nl:return n*e/r.components*r.byteLength;case Ul:return n*e/r.components*r.byteLength;case Kd:return n*e*2/r.components*r.byteLength;case Ol:return n*e*2/r.components*r.byteLength;case jd:return n*e*3/r.components*r.byteLength;case Yt:return n*e*4/r.components*r.byteLength;case Fl:return n*e*4/r.components*r.byteLength;case yo:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wc:case Ac:return Math.max(n,16)*Math.max(e,8)/4;case Ec:case Tc:return Math.max(n,8)*Math.max(e,8)/2;case Rc:case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bo:case Xc:case $c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jd:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jc:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tw(n){switch(n){case Nn:case Wd:return{byteLength:1,components:1};case fs:case Xd:case _s:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case Ui:case Il:case on:return{byteLength:4,components:1};case $d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function nw(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,S){return d?new OffscreenCanvas(T,S):ds("canvas")}function g(T,S,O){let X=1;const K=ge(T);if((K.width>O||K.height>O)&&(X=O/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(X*K.width),Ee=Math.floor(X*K.height);h===void 0&&(h=m($,Ee));const he=S?m($,Ee):h;return he.width=$,he.height=Ee,he.getContext("2d").drawImage(T,0,0,$,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+Ee+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function v(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,S,O,X,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=S;if(S===n.RED&&(O===n.FLOAT&&($=n.R32F),O===n.HALF_FLOAT&&($=n.R16F),O===n.UNSIGNED_BYTE&&($=n.R8)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.R8UI),O===n.UNSIGNED_SHORT&&($=n.R16UI),O===n.UNSIGNED_INT&&($=n.R32UI),O===n.BYTE&&($=n.R8I),O===n.SHORT&&($=n.R16I),O===n.INT&&($=n.R32I)),S===n.RG&&(O===n.FLOAT&&($=n.RG32F),O===n.HALF_FLOAT&&($=n.RG16F),O===n.UNSIGNED_BYTE&&($=n.RG8)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RG8UI),O===n.UNSIGNED_SHORT&&($=n.RG16UI),O===n.UNSIGNED_INT&&($=n.RG32UI),O===n.BYTE&&($=n.RG8I),O===n.SHORT&&($=n.RG16I),O===n.INT&&($=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGB8UI),O===n.UNSIGNED_SHORT&&($=n.RGB16UI),O===n.UNSIGNED_INT&&($=n.RGB32UI),O===n.BYTE&&($=n.RGB8I),O===n.SHORT&&($=n.RGB16I),O===n.INT&&($=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGBA8UI),O===n.UNSIGNED_SHORT&&($=n.RGBA16UI),O===n.UNSIGNED_INT&&($=n.RGBA32UI),O===n.BYTE&&($=n.RGBA8I),O===n.SHORT&&($=n.RGBA16I),O===n.INT&&($=n.RGBA32I)),S===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),S===n.RGBA){const Ee=K?Ko:Je.getTransfer(X);O===n.FLOAT&&($=n.RGBA32F),O===n.HALF_FLOAT&&($=n.RGBA16F),O===n.UNSIGNED_BYTE&&($=Ee===at?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(T,S){let O;return T?S===null||S===Ui||S===Er?O=n.DEPTH24_STENCIL8:S===on?O=n.DEPTH32F_STENCIL8:S===fs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ui||S===Er?O=n.DEPTH_COMPONENT24:S===on?O=n.DEPTH_COMPONENT32F:S===fs&&(O=n.DEPTH_COMPONENT16),O}function R(T,S){return v(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ht&&T.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){const S=T.target;S.removeEventListener("dispose",w),P(S),S.isVideoTexture&&u.delete(S)}function A(T){const S=T.target;S.removeEventListener("dispose",A),M(S)}function P(T){const S=i.get(T);if(S.__webglInit===void 0)return;const O=T.source,X=f.get(O);if(X){const K=X[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(T),Object.keys(X).length===0&&f.delete(O)}i.remove(T)}function E(T){const S=i.get(T);n.deleteTexture(S.__webglTexture);const O=T.source,X=f.get(O);delete X[S.__cacheKey],o.memory.textures--}function M(T){const S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let K=0;K<S.__webglFramebuffer[X].length;K++)n.deleteFramebuffer(S.__webglFramebuffer[X][K]);else n.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)n.deleteFramebuffer(S.__webglFramebuffer[X]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=T.textures;for(let X=0,K=O.length;X<K;X++){const $=i.get(O[X]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(O[X])}i.remove(T)}let I=0;function z(){I=0}function F(){const T=I;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T}function V(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function j(T,S){const O=i.get(T);if(T.isVideoTexture&&ce(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,S);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function H(T,S){const O=i.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function ne(T,S){const O=i.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function G(T,S){const O=i.get(T);if(T.version>0&&O.__version!==T.version){re(O,T,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}const le={[Sc]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[bc]:n.MIRRORED_REPEAT},ve={[Ht]:n.NEAREST,[wy]:n.NEAREST_MIPMAP_NEAREST,[Us]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[va]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Se={[Ly]:n.NEVER,[zy]:n.ALWAYS,[Dy]:n.LESS,[Qd]:n.LEQUAL,[Ny]:n.EQUAL,[Fy]:n.GEQUAL,[Uy]:n.GREATER,[Oy]:n.NOTEQUAL};function Ve(T,S){if(S.type===on&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===va||S.magFilter===Us||S.magFilter===Ci||S.minFilter===fn||S.minFilter===va||S.minFilter===Us||S.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,le[S.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,le[S.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,le[S.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ve[S.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ve[S.minFilter]),S.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==Us&&S.minFilter!==Ci||S.type===on&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function nt(T,S){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));const X=S.source;let K=f.get(X);K===void 0&&(K={},f.set(X,K));const $=V(S);if($!==T.__cacheKey){K[$]===void 0&&(K[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[$].usedTimes++;const Ee=K[T.__cacheKey];Ee!==void 0&&(K[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(S)),T.__cacheKey=$,T.__webglTexture=K[$].texture}return O}function q(T,S,O){let X=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=n.TEXTURE_3D);const K=nt(T,S),$=S.source;t.bindTexture(X,T.__webglTexture,n.TEXTURE0+O);const Ee=i.get($);if($.version!==Ee.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const he=Je.getPrimaries(Je.workingColorSpace),_e=S.colorSpace===jn?null:Je.getPrimaries(S.colorSpace),je=S.colorSpace===jn||he===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let te=g(S.image,!1,r.maxTextureSize);te=Ne(S,te);const xe=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type);let Fe=y(S.internalFormat,xe,Ue,S.colorSpace,S.isVideoTexture);Ve(X,S);let Me;const Ye=S.mipmaps,Xe=S.isVideoTexture!==!0,lt=Ee.__version===void 0||K===!0,D=$.dataReady,fe=R(S,te);if(S.isDepthTexture)Fe=_(S.format===wr,S.type),lt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Fe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Fe,te.width,te.height,0,xe,Ue,null));else if(S.isDataTexture)if(Ye.length>0){Xe&&lt&&t.texStorage2D(n.TEXTURE_2D,fe,Fe,Ye[0].width,Ye[0].height);for(let W=0,Z=Ye.length;W<Z;W++)Me=Ye[W],Xe?D&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Me.width,Me.height,xe,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,W,Fe,Me.width,Me.height,0,xe,Ue,Me.data);S.generateMipmaps=!1}else Xe?(lt&&t.texStorage2D(n.TEXTURE_2D,fe,Fe,te.width,te.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,xe,Ue,te.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,te.width,te.height,0,xe,Ue,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Fe,Ye[0].width,Ye[0].height,te.depth);for(let W=0,Z=Ye.length;W<Z;W++)if(Me=Ye[W],S.format!==Yt)if(xe!==null)if(Xe){if(D)if(S.layerUpdates.size>0){const me=uf(Me.width,Me.height,S.format,S.type);for(const de of S.layerUpdates){const He=Me.data.subarray(de*me/Me.data.BYTES_PER_ELEMENT,(de+1)*me/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,de,Me.width,Me.height,1,xe,He)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Me.width,Me.height,te.depth,xe,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Fe,Me.width,Me.height,te.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Me.width,Me.height,te.depth,xe,Ue,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Fe,Me.width,Me.height,te.depth,0,xe,Ue,Me.data)}else{Xe&&lt&&t.texStorage2D(n.TEXTURE_2D,fe,Fe,Ye[0].width,Ye[0].height);for(let W=0,Z=Ye.length;W<Z;W++)Me=Ye[W],S.format!==Yt?xe!==null?Xe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?D&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Me.width,Me.height,xe,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,W,Fe,Me.width,Me.height,0,xe,Ue,Me.data)}else if(S.isDataArrayTexture)if(Xe){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Fe,te.width,te.height,te.depth),D)if(S.layerUpdates.size>0){const W=uf(te.width,te.height,S.format,S.type);for(const Z of S.layerUpdates){const me=te.data.subarray(Z*W/te.data.BYTES_PER_ELEMENT,(Z+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,xe,Ue,me)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,xe,Ue,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,te.width,te.height,te.depth,0,xe,Ue,te.data);else if(S.isData3DTexture)Xe?(lt&&t.texStorage3D(n.TEXTURE_3D,fe,Fe,te.width,te.height,te.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,xe,Ue,te.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,te.width,te.height,te.depth,0,xe,Ue,te.data);else if(S.isFramebufferTexture){if(lt)if(Xe)t.texStorage2D(n.TEXTURE_2D,fe,Fe,te.width,te.height);else{let W=te.width,Z=te.height;for(let me=0;me<fe;me++)t.texImage2D(n.TEXTURE_2D,me,Fe,W,Z,0,xe,Ue,null),W>>=1,Z>>=1}}else if(Ye.length>0){if(Xe&&lt){const W=ge(Ye[0]);t.texStorage2D(n.TEXTURE_2D,fe,Fe,W.width,W.height)}for(let W=0,Z=Ye.length;W<Z;W++)Me=Ye[W],Xe?D&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,xe,Ue,Me):t.texImage2D(n.TEXTURE_2D,W,Fe,xe,Ue,Me);S.generateMipmaps=!1}else if(Xe){if(lt){const W=ge(te);t.texStorage2D(n.TEXTURE_2D,fe,Fe,W.width,W.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ue,te)}else t.texImage2D(n.TEXTURE_2D,0,Fe,xe,Ue,te);v(S)&&p(X),Ee.__version=$.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function re(T,S,O){if(S.image.length!==6)return;const X=nt(T,S),K=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const $=i.get(K);if(K.version!==$.__version||X===!0){t.activeTexture(n.TEXTURE0+O);const Ee=Je.getPrimaries(Je.workingColorSpace),he=S.colorSpace===jn?null:Je.getPrimaries(S.colorSpace),_e=S.colorSpace===jn||Ee===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const je=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!je&&!te?xe[Z]=g(S.image[Z],!0,r.maxCubemapSize):xe[Z]=te?S.image[Z].image:S.image[Z],xe[Z]=Ne(S,xe[Z]);const Ue=xe[0],Fe=s.convert(S.format,S.colorSpace),Me=s.convert(S.type),Ye=y(S.internalFormat,Fe,Me,S.colorSpace),Xe=S.isVideoTexture!==!0,lt=$.__version===void 0||X===!0,D=K.dataReady;let fe=R(S,Ue);Ve(n.TEXTURE_CUBE_MAP,S);let W;if(je){Xe&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ye,Ue.width,Ue.height);for(let Z=0;Z<6;Z++){W=xe[Z].mipmaps;for(let me=0;me<W.length;me++){const de=W[me];S.format!==Yt?Fe!==null?Xe?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,de.width,de.height,Fe,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,de.width,de.height,Fe,Me,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ye,de.width,de.height,0,Fe,Me,de.data)}}}else{if(W=S.mipmaps,Xe&&lt){W.length>0&&fe++;const Z=ge(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){Xe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,Fe,Me,xe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,xe[Z].width,xe[Z].height,0,Fe,Me,xe[Z].data);for(let me=0;me<W.length;me++){const He=W[me].image[Z].image;Xe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,He.width,He.height,Fe,Me,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ye,He.width,He.height,0,Fe,Me,He.data)}}else{Xe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Fe,Me,xe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Fe,Me,xe[Z]);for(let me=0;me<W.length;me++){const de=W[me];Xe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Fe,Me,de.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ye,Fe,Me,de.image[Z])}}}v(S)&&p(n.TEXTURE_CUBE_MAP),$.__version=K.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function be(T,S,O,X,K,$){const Ee=s.convert(O.format,O.colorSpace),he=s.convert(O.type),_e=y(O.internalFormat,Ee,he,O.colorSpace),je=i.get(S),te=i.get(O);if(te.__renderTarget=S,!je.__hasExternalTextures){const xe=Math.max(1,S.width>>$),Ue=Math.max(1,S.height>>$);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,$,_e,xe,Ue,S.depth,0,Ee,he,null):t.texImage2D(K,$,_e,xe,Ue,0,Ee,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ye(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,K,te.__webglTexture,0,ee(S)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,K,te.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(T,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),S.depthBuffer){const X=S.depthTexture,K=X&&X.isDepthTexture?X.type:null,$=_(S.stencilBuffer,K),Ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=ee(S);ye(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,$,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,$,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,$,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,T)}else{const X=S.textures;for(let K=0;K<X.length;K++){const $=X[K],Ee=s.convert($.format,$.colorSpace),he=s.convert($.type),_e=y($.internalFormat,Ee,he,$.colorSpace),je=ee(S);O&&ye(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,_e,S.width,S.height):ye(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,_e,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,_e,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const K=X.__webglTexture,$=ee(S);if(S.depthTexture.format===vr)ye(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(S.depthTexture.format===wr)ye(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ze(T){const S=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=X}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(S.__webglFramebuffer,T)}else if(O){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=n.createRenderbuffer(),oe(S.__webglDepthbuffer[X],T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),oe(S.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(T,S,O){const X=i.get(T);S!==void 0&&be(X.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ze(T)}function Ke(T){const S=T.texture,O=i.get(T),X=i.get(S);T.addEventListener("dispose",A);const K=T.textures,$=T.isWebGLCubeRenderTarget===!0,Ee=K.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=S.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let _e=0;_e<S.mipmaps.length;_e++)O.__webglFramebuffer[he][_e]=n.createFramebuffer()}else O.__webglFramebuffer[he]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)O.__webglFramebuffer[he]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let he=0,_e=K.length;he<_e;he++){const je=i.get(K[he]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ye(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<K.length;he++){const _e=K[he];O.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const je=s.convert(_e.format,_e.colorSpace),te=s.convert(_e.type),xe=y(_e.internalFormat,je,te,_e.colorSpace,T.isXRRenderTarget===!0),Ue=ee(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,xe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,O.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)be(O.__webglFramebuffer[he][_e],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else be(O.__webglFramebuffer[he],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let he=0,_e=K.length;he<_e;he++){const je=K[he],te=i.get(je);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),Ve(n.TEXTURE_2D,je),be(O.__webglFramebuffer,T,je,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),v(je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,X.__webglTexture),Ve(he,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)be(O.__webglFramebuffer[_e],T,S,n.COLOR_ATTACHMENT0,he,_e);else be(O.__webglFramebuffer,T,S,n.COLOR_ATTACHMENT0,he,0);v(S)&&p(he),t.unbindTexture()}T.depthBuffer&&ze(T)}function Y(T){const S=T.textures;for(let O=0,X=S.length;O<X;O++){const K=S[O];if(v(K)){const $=x(T),Ee=i.get(K).__webglTexture;t.bindTexture($,Ee),p($),t.unbindTexture()}}}const ie=[],C=[];function Pe(T){if(T.samples>0){if(ye(T)===!1){const S=T.textures,O=T.width,X=T.height;let K=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(T),he=S.length>1;if(he)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const je=i.get(S[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,O,X,0,0,O,X,K,n.NEAREST),c===!0&&(ie.length=0,C.length=0,ie.push(n.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push($),C.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const je=i.get(S[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ee(T){return Math.min(r.maxSamples,T.samples)}function ye(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(T){const S=o.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function Ne(T,S){const O=T.colorSpace,X=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Rr&&O!==jn&&(Je.getTransfer(O)===at?(X!==Yt||K!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=Oe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ye}function iw(n,e){function t(i,r=jn){let s;const o=Je.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$d)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wd)return n.BYTE;if(i===Xd)return n.SHORT;if(i===fs)return n.UNSIGNED_SHORT;if(i===Il)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===on)return n.FLOAT;if(i===_s)return n.HALF_FLOAT;if(i===qd)return n.ALPHA;if(i===jd)return n.RGB;if(i===Yt)return n.RGBA;if(i===Zd)return n.LUMINANCE;if(i===Yd)return n.LUMINANCE_ALPHA;if(i===vr)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===Nl)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===Kd)return n.RG;if(i===Ol)return n.RG_INTEGER;if(i===Fl)return n.RGBA_INTEGER;if(i===yo||i===xo||i===Mo||i===So)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===wc||i===Tc||i===Ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Cc||i===Pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rc||i===Cc)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===zc||i===Bc||i===kc||i===Vc||i===Hc||i===Gc||i===Wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ic)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bo||i===Xc||i===$c)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bo)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===qc||i===jc||i===Zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class rw extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ts extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sw={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,i),p=this._getHandJoint(l,g);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sw)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ts;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:ow,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lw extends Vi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null;const g=new cw,v=t.getContextAttributes();let p=null,x=null;const y=[],_=[],R=new J;let w=null;const A=new Vt;A.viewport=new et;const P=new Vt;P.viewport=new et;const E=[A,P],M=new rw;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=y[q];return re===void 0&&(re=new Wa,y[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=y[q];return re===void 0&&(re=new Wa,y[q]=re),re.getGripSpace()},this.getHand=function(q){let re=y[q];return re===void 0&&(re=new Wa,y[q]=re),re.getHandSpace()};function F(q){const re=_.indexOf(q.inputSource);if(re===-1)return;const be=y[re];be!==void 0&&(be.update(q.inputSource,q.frame,l||o),be.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",j);for(let q=0;q<y.length;q++){const re=_[q];re!==null&&(_[q]=null,y[q].disconnect(re))}I=null,z=null,g.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,x=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Oi(d.framebufferWidth,d.framebufferHeight,{format:Yt,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let re=null,be=null,oe=null;v.depth&&(oe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?wr:vr,be=v.stencil?Er:Ui);const De={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Oi(f.textureWidth,f.textureHeight,{format:Yt,type:Nn,depthTexture:new fp(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(q){for(let re=0;re<q.removed.length;re++){const be=q.removed[re],oe=_.indexOf(be);oe>=0&&(_[oe]=null,y[oe].disconnect(be))}for(let re=0;re<q.added.length;re++){const be=q.added[re];let oe=_.indexOf(be);if(oe===-1){for(let ze=0;ze<y.length;ze++)if(ze>=_.length){_.push(be),oe=ze;break}else if(_[ze]===null){_[ze]=be,oe=ze;break}if(oe===-1)break}const De=y[oe];De&&De.connect(be)}}const H=new L,ne=new L;function G(q,re,be){H.setFromMatrixPosition(re.matrixWorld),ne.setFromMatrixPosition(be.matrixWorld);const oe=H.distanceTo(ne),De=re.projectionMatrix.elements,ze=be.projectionMatrix.elements,Oe=De[14]/(De[10]-1),Ke=De[14]/(De[10]+1),Y=(De[9]+1)/De[5],ie=(De[9]-1)/De[5],C=(De[8]-1)/De[0],Pe=(ze[8]+1)/ze[0],ee=Oe*C,ye=Oe*Pe,ce=oe/(-C+Pe),Ne=ce*-C;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ne),q.translateZ(ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),De[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ge=Oe+ce,T=Ke+ce,S=ee-Ne,O=ye+(oe-Ne),X=Y*Ke/T*ge,K=ie*Ke/T*ge;q.projectionMatrix.makePerspective(S,O,X,K,ge,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,be=q.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(be=g.depthFar)),M.near=P.near=A.near=re,M.far=P.far=A.far=be,(I!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,z=M.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const oe=q.parent,De=M.cameras;le(M,oe);for(let ze=0;ze<De.length;ze++)le(De[ze],oe);De.length===2?G(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ve(q,M,oe)};function ve(q,re,be){be===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Tr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Se=null;function Ve(q,re){if(u=re.getViewerPose(l||o),m=re,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let oe=!1;be.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let ze=0;ze<be.length;ze++){const Oe=be[ze];let Ke=null;if(d!==null)Ke=d.getViewport(Oe);else{const ie=h.getViewSubImage(f,Oe);Ke=ie.viewport,ze===0&&(e.setRenderTargetTextures(x,ie.colorTexture,f.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(x))}let Y=E[ze];Y===void 0&&(Y=new Vt,Y.layers.enable(ze),Y.viewport=new et,E[ze]=Y),Y.matrix.fromArray(Oe.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Oe.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ze===0&&(M.matrix.copy(Y.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(Y)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const ze=h.getDepthInformation(be[0]);ze&&ze.isValid&&ze.texture&&g.init(e,ze,r.renderState)}}for(let be=0;be<y.length;be++){const oe=_[be],De=y[be];oe!==null&&De!==void 0&&De.update(oe,re,l||o)}Se&&Se(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}const nt=new up;nt.setAnimationLoop(Ve),this.setAnimationLoop=function(q){Se=q},this.dispose=function(){}}}const Mi=new an,uw=new qe;function hw(n,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function i(v,p){p.color.getRGB(v.fogColor.value,ap(n)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function r(v,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(v,p):p.isMeshToonMaterial?(s(v,p),h(v,p)):p.isMeshPhongMaterial?(s(v,p),u(v,p)):p.isMeshStandardMaterial?(s(v,p),f(v,p),p.isMeshPhysicalMaterial&&d(v,p,_)):p.isMeshMatcapMaterial?(s(v,p),m(v,p)):p.isMeshDepthMaterial?s(v,p):p.isMeshDistanceMaterial?(s(v,p),g(v,p)):p.isMeshNormalMaterial?s(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&a(v,p)):p.isPointsMaterial?c(v,p,x,y):p.isSpriteMaterial?l(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Ot&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Ot&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,_=x.envMapRotation;y&&(v.envMap.value=y,Mi.copy(_),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),v.envMapRotation.value.setFromMatrix4(uw.makeRotationFromEuler(Mi)),v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function a(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function c(v,p,x,y){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*x,v.scale.value=y*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function l(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function u(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function h(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function f(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function d(v,p,x){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,p){p.matcap&&(v.matcap.value=p.matcap)}function g(v,p){const x=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fw(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const _=y.program;i.uniformBlockBinding(x,_)}function l(x,y){let _=r[x.id];_===void 0&&(m(x),_=u(x),r[x.id]=_,x.addEventListener("dispose",v));const R=y.program;i.updateUBOMapping(x,R);const w=e.render.frame;s[x.id]!==w&&(f(x),s[x.id]=w)}function u(x){const y=h();x.__bindingPointIndex=y;const _=n.createBuffer(),R=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=r[x.id],_=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,A=_.length;w<A;w++){const P=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,M=P.length;E<M;E++){const I=P[E];if(d(I,w,E,R)===!0){const z=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let j=0;j<F.length;j++){const H=F[j],ne=g(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,z+V,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,V),V+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,y,_,R){const w=x.value,A=y+"_"+_;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const P=R[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(x){const y=x.uniforms;let _=0;const R=16;for(let A=0,P=y.length;A<P;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,I=E.length;M<I;M++){const z=E[M],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,j=F.length;V<j;V++){const H=F[V],ne=g(H),G=_%R,le=G%ne.boundary,ve=G+le;_+=le,ve!==0&&R-ve<ne.storage&&(_+=R-ve),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=ne.storage}}}const w=_%R;return w>0&&(_+=R-w),x.__size=_,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function v(x){const y=x.target;y.removeEventListener("dispose",v);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class ER{constructor(e={}){const{canvas:t=tx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=Kn,this.toneMappingExposure=1;const _=this;let R=!1,w=0,A=0,P=null,E=-1,M=null;const I=new et,z=new et;let F=null;const V=new ke(0);let j=0,H=t.width,ne=t.height,G=1,le=null,ve=null;const Se=new et(0,0,H,ne),Ve=new et(0,0,H,ne);let nt=!1;const q=new kl;let re=!1,be=!1;const oe=new qe,De=new qe,ze=new L,Oe=new et,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function ie(){return P===null?G:1}let C=i;function Pe(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",de,!1),C===null){const N="webgl2";if(C=Pe(N,b),C===null)throw Pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ee,ye,ce,Ne,ge,T,S,O,X,K,$,Ee,he,_e,je,te,xe,Ue,Fe,Me,Ye,Xe,lt,D;function fe(){ee=new _b(C),ee.init(),Xe=new iw(C,ee),ye=new fb(C,ee,e,Xe),ce=new ew(C,ee),ye.reverseDepthBuffer&&f&&ce.buffers.depth.setReversed(!0),Ne=new Mb(C),ge=new BE,T=new nw(C,ee,ce,ge,ye,Xe,Ne),S=new pb(_),O=new gb(_),X=new Rx(C),lt=new ub(C,X),K=new yb(C,X,Ne,lt),$=new bb(C,K,X,Ne),Fe=new Sb(C,ye,T),te=new db(ge),Ee=new zE(_,S,O,ee,ye,lt,te),he=new hw(_,ge),_e=new VE,je=new qE(ee),Ue=new lb(_,S,O,ce,$,d,c),xe=new JE(_,$,ye),D=new fw(C,Ne,ye,ce),Me=new hb(C,ee,Ne),Ye=new xb(C,ee,Ne),Ne.programs=Ee.programs,_.capabilities=ye,_.extensions=ee,_.properties=ge,_.renderLists=_e,_.shadowMap=xe,_.state=ce,_.info=Ne}fe();const W=new lw(_,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(H,ne,!1))},this.getSize=function(b){return b.set(H,ne)},this.setSize=function(b,N,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,ne=N,t.width=Math.floor(b*G),t.height=Math.floor(N*G),B===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(H*G,ne*G).floor()},this.setDrawingBufferSize=function(b,N,B){H=b,ne=N,G=B,t.width=Math.floor(b*B),t.height=Math.floor(N*B),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,N,B,k){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,N,B,k),ce.viewport(I.copy(Se).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Ve)},this.setScissor=function(b,N,B,k){b.isVector4?Ve.set(b.x,b.y,b.z,b.w):Ve.set(b,N,B,k),ce.scissor(z.copy(Ve).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(b){ce.setScissorTest(nt=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(b=!0,N=!0,B=!0){let k=0;if(b){let U=!1;if(P!==null){const se=P.texture.format;U=se===Fl||se===Ol||se===Ul}if(U){const se=P.texture.type,pe=se===Nn||se===Ui||se===fs||se===Er||se===Ll||se===Dl,Ae=Ue.getClearColor(),Re=Ue.getClearAlpha(),Be=Ae.r,Ge=Ae.g,Ce=Ae.b;pe?(m[0]=Be,m[1]=Ge,m[2]=Ce,m[3]=Re,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Be,g[1]=Ge,g[2]=Ce,g[3]=Re,C.clearBufferiv(C.COLOR,0,g))}else k|=C.COLOR_BUFFER_BIT}N&&(k|=C.DEPTH_BUFFER_BIT),B&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",de,!1),_e.dispose(),je.dispose(),ge.dispose(),S.dispose(),O.dispose(),$.dispose(),lt.dispose(),D.dispose(),Ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",jl),W.removeEventListener("sessionend",Zl),si.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=Ne.autoReset,N=xe.enabled,B=xe.autoUpdate,k=xe.needsUpdate,U=xe.type;fe(),Ne.autoReset=b,xe.enabled=N,xe.autoUpdate=B,xe.needsUpdate=k,xe.type=U}function de(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function He(b){const N=b.target;N.removeEventListener("dispose",He),gt(N)}function gt(b){Tt(b),ge.remove(b)}function Tt(b){const N=ge.get(b).programs;N!==void 0&&(N.forEach(function(B){Ee.releaseProgram(B)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,B,k,U,se){N===null&&(N=Ke);const pe=U.isMesh&&U.matrixWorld.determinant()<0,Ae=Wp(b,N,B,k,U);ce.setMaterial(k,pe);let Re=B.index,Be=1;if(k.wireframe===!0){if(Re=K.getWireframeAttribute(B),Re===void 0)return;Be=2}const Ge=B.drawRange,Ce=B.attributes.position;let Qe=Ge.start*Be,ut=(Ge.start+Ge.count)*Be;se!==null&&(Qe=Math.max(Qe,se.start*Be),ut=Math.min(ut,(se.start+se.count)*Be)),Re!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,Re.count)):Ce!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Ce.count));const ht=ut-Qe;if(ht<0||ht===1/0)return;lt.setup(U,k,Ae,B,Re);let Dt,it=Me;if(Re!==null&&(Dt=X.get(Re),it=Ye,it.setIndex(Dt)),U.isMesh)k.wireframe===!0?(ce.setLineWidth(k.wireframeLinewidth*ie()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(U.isLine){let Ie=k.linewidth;Ie===void 0&&(Ie=1),ce.setLineWidth(Ie*ie()),U.isLineSegments?it.setMode(C.LINES):U.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else U.isPoints?it.setMode(C.POINTS):U.isSprite&&it.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ie=U._multiDrawStarts,gn=U._multiDrawCounts,rt=U._multiDrawCount,Qt=Re?X.get(Re).bytesPerElement:1,Hi=ge.get(k).currentProgram.getUniforms();for(let zt=0;zt<rt;zt++)Hi.setValue(C,"_gl_DrawID",zt),it.render(Ie[zt]/Qt,gn[zt])}else if(U.isInstancedMesh)it.renderInstances(Qe,ht,U.count);else if(B.isInstancedBufferGeometry){const Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gn=Math.min(B.instanceCount,Ie);it.renderInstances(Qe,ht,gn)}else it.render(Qe,ht)};function st(b,N,B){b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=Ot,b.needsUpdate=!0,bs(b,N,B),b.side=ti,b.needsUpdate=!0,bs(b,N,B),b.side=Tn):bs(b,N,B)}this.compile=function(b,N,B=null){B===null&&(B=b),p=je.get(B),p.init(N),y.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Ae=se[pe];st(Ae,B,U),k.add(Ae)}else st(se,B,U),k.add(se)}),y.pop(),p=null,k},this.compileAsync=function(b,N,B=null){const k=this.compile(b,N,B);return new Promise(U=>{function se(){if(k.forEach(function(pe){ge.get(pe).currentProgram.isReady()&&k.delete(pe)}),k.size===0){U(b);return}setTimeout(se,10)}ee.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Jt=null;function vn(b){Jt&&Jt(b)}function jl(){si.stop()}function Zl(){si.start()}const si=new up;si.setAnimationLoop(vn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(b){Jt=b,W.setAnimationLoop(b),b===null?si.stop():si.start()},W.addEventListener("sessionstart",jl),W.addEventListener("sessionend",Zl),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,N,P),p=je.get(b,y.length),p.init(N),y.push(p),De.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(De),be=this.localClippingEnabled,re=te.init(this.clippingPlanes,be),v=_e.get(b,x.length),v.init(),x.push(v),W.enabled===!0&&W.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&ra(se,N,-1/0,_.sortObjects)}ra(b,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(le,ve),Y=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Y&&Ue.addToRenderList(v,b),this.info.render.frame++,re===!0&&te.beginShadows();const B=p.state.shadowsArray;xe.render(B,b,N),re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=v.opaque,U=v.transmissive;if(p.setupLights(),N.isArrayCamera){const se=N.cameras;if(U.length>0)for(let pe=0,Ae=se.length;pe<Ae;pe++){const Re=se[pe];Kl(k,U,b,Re)}Y&&Ue.render(b);for(let pe=0,Ae=se.length;pe<Ae;pe++){const Re=se[pe];Yl(v,b,Re,Re.viewport)}}else U.length>0&&Kl(k,U,b,N),Y&&Ue.render(b),Yl(v,b,N);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(_,b,N),lt.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],re===!0&&te.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?v=x[x.length-1]:v=null};function ra(b,N,B,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){k&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(De);const pe=$.update(b),Ae=b.material;Ae.visible&&v.push(b,pe,Ae,B,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const pe=$.update(b),Ae=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Oe.copy(pe.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(De)),Array.isArray(Ae)){const Re=pe.groups;for(let Be=0,Ge=Re.length;Be<Ge;Be++){const Ce=Re[Be],Qe=Ae[Ce.materialIndex];Qe&&Qe.visible&&v.push(b,pe,Qe,B,Oe.z,Ce)}}else Ae.visible&&v.push(b,pe,Ae,B,Oe.z,null)}}const se=b.children;for(let pe=0,Ae=se.length;pe<Ae;pe++)ra(se[pe],N,B,k)}function Yl(b,N,B,k){const U=b.opaque,se=b.transmissive,pe=b.transparent;p.setupLightsView(B),re===!0&&te.setGlobalState(_.clippingPlanes,B),k&&ce.viewport(I.copy(k)),U.length>0&&Ss(U,N,B),se.length>0&&Ss(se,N,B),pe.length>0&&Ss(pe,N,B),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Kl(b,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Oi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?_s:Nn,minFilter:Ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=p.state.transmissionRenderTarget[k.id],pe=k.viewport||I;se.setSize(pe.z,pe.w);const Ae=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(V),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),Y&&Ue.render(B);const Re=_.toneMapping;_.toneMapping=Kn;const Be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),re===!0&&te.setGlobalState(_.clippingPlanes,k),Ss(b,B,k),T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ce=0,Qe=N.length;Ce<Qe;Ce++){const ut=N[Ce],ht=ut.object,Dt=ut.geometry,it=ut.material,Ie=ut.group;if(it.side===Tn&&ht.layers.test(k.layers)){const gn=it.side;it.side=Ot,it.needsUpdate=!0,Jl(ht,B,k,Dt,it,Ie),it.side=gn,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se))}_.setRenderTarget(Ae),_.setClearColor(V,j),Be!==void 0&&(k.viewport=Be),_.toneMapping=Re}function Ss(b,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,se=b.length;U<se;U++){const pe=b[U],Ae=pe.object,Re=pe.geometry,Be=k===null?pe.material:k,Ge=pe.group;Ae.layers.test(B.layers)&&Jl(Ae,N,B,Re,Be,Ge)}}function Jl(b,N,B,k,U,se){b.onBeforeRender(_,N,B,k,U,se),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,N,B,k,b,se),U.transparent===!0&&U.side===Tn&&U.forceSinglePass===!1?(U.side=Ot,U.needsUpdate=!0,_.renderBufferDirect(B,N,k,U,b,se),U.side=ti,U.needsUpdate=!0,_.renderBufferDirect(B,N,k,U,b,se),U.side=Tn):_.renderBufferDirect(B,N,k,U,b,se),b.onAfterRender(_,N,B,k,U,se)}function bs(b,N,B){N.isScene!==!0&&(N=Ke);const k=ge.get(b),U=p.state.lights,se=p.state.shadowsArray,pe=U.state.version,Ae=Ee.getParameters(b,U.state,se,N,B),Re=Ee.getProgramCacheKey(Ae);let Be=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?O:S).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",He),Be=new Map,k.programs=Be);let Ge=Be.get(Re);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===pe)return eu(b,Ae),Ge}else Ae.uniforms=Ee.getUniforms(b),b.onBeforeCompile(Ae,_),Ge=Ee.acquireProgram(Ae,Re),Be.set(Re,Ge),k.uniforms=Ae.uniforms;const Ce=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=te.uniform),eu(b,Ae),k.needsLights=$p(b),k.lightsStateVersion=pe,k.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ge,k.uniformsList=null,Ge}function Ql(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Eo.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function eu(b,N){const B=ge.get(b);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Wp(b,N,B,k,U){N.isScene!==!0&&(N=Ke),T.resetTextureUnits();const se=N.fog,pe=k.isMeshStandardMaterial?N.environment:null,Ae=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Rr,Re=(k.isMeshStandardMaterial?O:S).get(k.envMap||pe),Be=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ge=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,ut=!!B.morphAttributes.color;let ht=Kn;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ht=_.toneMapping);const Dt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=Dt!==void 0?Dt.length:0,Ie=ge.get(k),gn=p.state.lights;if(re===!0&&(be===!0||b!==M)){const Wt=b===M&&k.id===E;te.setState(k,b,Wt)}let rt=!1;k.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==gn.state.version||Ie.outputColorSpace!==Ae||U.isBatchedMesh&&Ie.batching===!1||!U.isBatchedMesh&&Ie.batching===!0||U.isBatchedMesh&&Ie.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ie.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ie.instancing===!1||!U.isInstancedMesh&&Ie.instancing===!0||U.isSkinnedMesh&&Ie.skinning===!1||!U.isSkinnedMesh&&Ie.skinning===!0||U.isInstancedMesh&&Ie.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ie.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ie.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ie.instancingMorph===!1&&U.morphTexture!==null||Ie.envMap!==Re||k.fog===!0&&Ie.fog!==se||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==te.numPlanes||Ie.numIntersection!==te.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==Ge||Ie.morphTargets!==Ce||Ie.morphNormals!==Qe||Ie.morphColors!==ut||Ie.toneMapping!==ht||Ie.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Ie.__version=k.version);let Qt=Ie.currentProgram;rt===!0&&(Qt=bs(k,N,U));let Hi=!1,zt=!1,Dr=!1;const ft=Qt.getUniforms(),ln=Ie.uniforms;if(ce.useProgram(Qt.program)&&(Hi=!0,zt=!0,Dr=!0),k.id!==E&&(E=k.id,zt=!0),Hi||M!==b){ce.buffers.depth.getReversed()?(oe.copy(b.projectionMatrix),ix(oe),rx(oe),ft.setValue(C,"projectionMatrix",oe)):ft.setValue(C,"projectionMatrix",b.projectionMatrix),ft.setValue(C,"viewMatrix",b.matrixWorldInverse);const zn=ft.map.cameraPosition;zn!==void 0&&zn.setValue(C,ze.setFromMatrixPosition(b.matrixWorld)),ye.logarithmicDepthBuffer&&ft.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ft.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,zt=!0,Dr=!0)}if(U.isSkinnedMesh){ft.setOptional(C,U,"bindMatrix"),ft.setOptional(C,U,"bindMatrixInverse");const Wt=U.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ft.setValue(C,"boneTexture",Wt.boneTexture,T))}U.isBatchedMesh&&(ft.setOptional(C,U,"batchingTexture"),ft.setValue(C,"batchingTexture",U._matricesTexture,T),ft.setOptional(C,U,"batchingIdTexture"),ft.setValue(C,"batchingIdTexture",U._indirectTexture,T),ft.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(C,"batchingColorTexture",U._colorsTexture,T));const Nr=B.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&Fe.update(U,B,Qt),(zt||Ie.receiveShadow!==U.receiveShadow)&&(Ie.receiveShadow=U.receiveShadow,ft.setValue(C,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ln.envMap.value=Re,ln.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(ln.envMapIntensity.value=N.environmentIntensity),zt&&(ft.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ie.needsLights&&Xp(ln,Dr),se&&k.fog===!0&&he.refreshFogUniforms(ln,se),he.refreshMaterialUniforms(ln,k,G,ne,p.state.transmissionRenderTarget[b.id]),Eo.upload(C,Ql(Ie),ln,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Eo.upload(C,Ql(Ie),ln,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ft.setValue(C,"center",U.center),ft.setValue(C,"modelViewMatrix",U.modelViewMatrix),ft.setValue(C,"normalMatrix",U.normalMatrix),ft.setValue(C,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Wt=k.uniformsGroups;for(let zn=0,Bn=Wt.length;zn<Bn;zn++){const tu=Wt[zn];D.update(tu,Qt),D.bind(tu,Qt)}}return Qt}function Xp(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function $p(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,N,B){ge.get(b.texture).__webglTexture=N,ge.get(b.depthTexture).__webglTexture=B;const k=ge.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const B=ge.get(b);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,B=0){P=b,w=N,A=B;let k=!0,U=null,se=!1,pe=!1;if(b){const Re=ge.get(b);if(Re.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(Re.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Re.__hasExternalTextures)T.rebindTextures(b,ge.get(b.texture).__webglTexture,ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ce=b.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&ge.has(Ce)&&(b.width!==Ce.image.width||b.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(pe=!0);const Ge=ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?U=Ge[N][B]:U=Ge[N],se=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?U=ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?U=Ge[B]:U=Ge,I.copy(b.viewport),z.copy(b.scissor),F=b.scissorTest}else I.copy(Se).multiplyScalar(G).floor(),z.copy(Ve).multiplyScalar(G).floor(),F=nt;if(ce.bindFramebuffer(C.FRAMEBUFFER,U)&&k&&ce.drawBuffers(b,U),ce.viewport(I),ce.scissor(z),ce.setScissorTest(F),se){const Re=ge.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,B)}else if(pe){const Re=ge.get(b.texture),Be=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Re.__webglTexture,B||0,Be)}E=-1},this.readRenderTargetPixels=function(b,N,B,k,U,se,pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae){ce.bindFramebuffer(C.FRAMEBUFFER,Ae);try{const Re=b.texture,Be=Re.format,Ge=Re.type;if(!ye.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&B>=0&&B<=b.height-U&&C.readPixels(N,B,k,U,Xe.convert(Be),Xe.convert(Ge),se)}finally{const Re=P!==null?ge.get(P).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,N,B,k,U,se,pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae){const Re=b.texture,Be=Re.format,Ge=Re.type;if(!ye.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-k&&B>=0&&B<=b.height-U){ce.bindFramebuffer(C.FRAMEBUFFER,Ae);const Ce=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ce),C.bufferData(C.PIXEL_PACK_BUFFER,se.byteLength,C.STREAM_READ),C.readPixels(N,B,k,U,Xe.convert(Be),Xe.convert(Ge),0);const Qe=P!==null?ge.get(P).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,Qe);const ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await nx(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ce),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,se),C.deleteBuffer(Ce),C.deleteSync(ut),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,B=0){b.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(b.image.width*k),se=Math.floor(b.image.height*k),pe=N!==null?N.x:0,Ae=N!==null?N.y:0;T.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,pe,Ae,U,se),ce.unbindTexture()},this.copyTextureToTexture=function(b,N,B=null,k=null,U=0){b.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],N=arguments[2],U=arguments[3]||0,B=null);let se,pe,Ae,Re,Be,Ge,Ce,Qe,ut;const ht=b.isCompressedTexture?b.mipmaps[U]:b.image;B!==null?(se=B.max.x-B.min.x,pe=B.max.y-B.min.y,Ae=B.isBox3?B.max.z-B.min.z:1,Re=B.min.x,Be=B.min.y,Ge=B.isBox3?B.min.z:0):(se=ht.width,pe=ht.height,Ae=ht.depth||1,Re=0,Be=0,Ge=0),k!==null?(Ce=k.x,Qe=k.y,ut=k.z):(Ce=0,Qe=0,ut=0);const Dt=Xe.convert(N.format),it=Xe.convert(N.type);let Ie;N.isData3DTexture?(T.setTexture3D(N,0),Ie=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Ie=C.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Ie=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const gn=C.getParameter(C.UNPACK_ROW_LENGTH),rt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qt=C.getParameter(C.UNPACK_SKIP_PIXELS),Hi=C.getParameter(C.UNPACK_SKIP_ROWS),zt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ht.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ht.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ge);const Dr=b.isDataArrayTexture||b.isData3DTexture,ft=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const ln=ge.get(b),Nr=ge.get(N),Wt=ge.get(ln.__renderTarget),zn=ge.get(Nr.__renderTarget);ce.bindFramebuffer(C.READ_FRAMEBUFFER,Wt.__webglFramebuffer),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Bn=0;Bn<Ae;Bn++)Dr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(b).__webglTexture,U,Ge+Bn),b.isDepthTexture?(ft&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(N).__webglTexture,U,ut+Bn),C.blitFramebuffer(Re,Be,se,pe,Ce,Qe,se,pe,C.DEPTH_BUFFER_BIT,C.NEAREST)):ft?C.copyTexSubImage3D(Ie,U,Ce,Qe,ut+Bn,Re,Be,se,pe):C.copyTexSubImage2D(Ie,U,Ce,Qe,ut+Bn,Re,Be,se,pe);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Ie,U,Ce,Qe,ut,se,pe,Ae,Dt,it,ht.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Ie,U,Ce,Qe,ut,se,pe,Ae,Dt,ht.data):C.texSubImage3D(Ie,U,Ce,Qe,ut,se,pe,Ae,Dt,it,ht):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,Ce,Qe,se,pe,Dt,it,ht.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,Ce,Qe,ht.width,ht.height,Dt,ht.data):C.texSubImage2D(C.TEXTURE_2D,U,Ce,Qe,se,pe,Dt,it,ht);C.pixelStorei(C.UNPACK_ROW_LENGTH,gn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,rt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Hi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zt),U===0&&N.generateMipmaps&&C.generateMipmap(Ie),ce.unbindTexture()},this.copyTextureToTexture3D=function(b,N,B=null,k=null,U=0){return b.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,b=arguments[2],N=arguments[3],U=arguments[4]||0),Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,B,k,U)},this.initRenderTarget=function(b){ge.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),ce.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,ce.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class gp{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new gp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wR extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=Kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new L;class Lo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pw extends cn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ar;const Wr=new L,cr=new L,lr=new L,ur=new J,Xr=new J,_p=new qe,no=new L,$r=new L,io=new L,hf=new J,Xa=new J,ff=new J;class TR extends mt{constructor(e=new pw){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dw(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Lo(i,3,0,!1)),ar.setAttribute("uv",new Lo(i,2,3,!1))}this.geometry=ar,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),_p.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-lr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ro(no.set(-.5,-.5,0),lr,o,cr,r,s),ro($r.set(.5,-.5,0),lr,o,cr,r,s),ro(io.set(.5,.5,0),lr,o,cr,r,s),hf.set(0,0),Xa.set(1,0),ff.set(1,1);let a=e.ray.intersectTriangle(no,$r,io,!1,Wr);if(a===null&&(ro($r.set(-.5,.5,0),lr,o,cr,r,s),Xa.set(0,1),a=e.ray.intersectTriangle(no,io,$r,!1,Wr),a===null))return;const c=e.ray.origin.distanceTo(Wr);c<e.near||c>e.far||t.push({distance:c,point:Wr.clone(),uv:jt.getInterpolation(Wr,no,$r,io,hf,Xa,ff,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ro(n,e,t,i,r,s){ur.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Xr.x=s*ur.x-r*ur.y,Xr.y=r*ur.x+s*ur.y):Xr.copy(ur),n.copy(e),n.x+=Xr.x,n.y+=Xr.y,n.applyMatrix4(_p)}const df=new L,pf=new et,mf=new et,mw=new L,vf=new qe,so=new L,$a=new Fn,gf=new qe,qa=new ys;class AR extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,so),this.boundingSphere.expandByPoint(so)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$a.copy(this.boundingSphere),$a.applyMatrix4(r),e.ray.intersectsSphere($a)!==!1&&(gf.copy(r).invert(),qa.copy(e.ray).applyMatrix4(gf),!(this.boundingBox!==null&&qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ey?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;pf.fromBufferAttribute(r.attributes.skinIndex,e),mf.fromBufferAttribute(r.attributes.skinWeight,e),df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=mf.getComponent(s);if(o!==0){const a=pf.getComponent(s);vf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(mw.copy(df).applyMatrix4(vf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vw extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yp extends wt{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Ht,u=Ht,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _f=new qe,gw=new qe;class xp{constructor(e=[],t=[]){this.uuid=Kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:gw;_f.multiplyMatrices(a,t[s]),_f.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new xp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new yp(t,e,e,Yt,on);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new vw),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class yf extends Gt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hr=new qe,xf=new qe,oo=[],Mf=new ri,_w=new qe,qr=new Ut,jr=new Fn;class RR extends Ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,_w)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),Mf.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Mf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),jr.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),e.ray.intersectsSphere(jr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,hr),xf.multiplyMatrices(i,hr),qr.matrixWorld=xf,qr.raycast(e,oo);for(let o=0,a=oo.length;o<a;o++){const c=oo[o];c.instanceId=s,c.object=this,t.push(c)}oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new yp(new Float32Array(r*this.count),r,this.count,Nl,on));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yw extends cn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Do=new L,No=new L,Sf=new qe,Zr=new ys,ao=new Fn,ja=new L,bf=new L;class Mp extends mt{constructor(e=new yt,t=new yw){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Do.fromBufferAttribute(t,r-1),No.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Do.distanceTo(No);e.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),ao.radius+=s,e.ray.intersectsSphere(ao)===!1)return;Sf.copy(r).invert(),Zr.copy(e.ray).applyMatrix4(Sf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,v=m-1;g<v;g+=l){const p=u.getX(g),x=u.getX(g+1),y=co(this,e,Zr,c,p,x);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(m-1),v=u.getX(d),p=co(this,e,Zr,c,g,v);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,v=m-1;g<v;g+=l){const p=co(this,e,Zr,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=co(this,e,Zr,c,m-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function co(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Do.fromBufferAttribute(o,r),No.fromBufferAttribute(o,s),t.distanceSqToSegment(Do,No,ja,bf)>i)return;ja.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ja);if(!(c<e.near||c>e.far))return{distance:c,point:bf.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Ef=new L,wf=new L;class CR extends Mp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ef.fromBufferAttribute(t,r),wf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ef.distanceTo(wf);e.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PR extends Mp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xw extends cn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tf=new qe,Qc=new ys,lo=new Fn,uo=new L;class IR extends mt{constructor(e=new yt,t=new xw){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),lo.radius+=s,e.ray.intersectsSphere(lo)===!1)return;Tf.copy(r).invert(),Qc.copy(e.ray).applyMatrix4(Tf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,g=d;m<g;m++){const v=l.getX(m);uo.fromBufferAttribute(h,v),Af(uo,v,c,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,g=d;m<g;m++)uo.fromBufferAttribute(h,m),Af(uo,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Af(n,e,t,i,r,s,o){const a=Qc.distanceSqToPoint(n);if(a<t){const c=new L;Qc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class LR extends wt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new J:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,r=[],s=[],o=[],a=new L,c=new qe;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new L)}s[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(xt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(xt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hl extends pn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new J){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mw extends Hl{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const ho=new L,Za=new Gl,Ya=new Gl,Ka=new Gl;class Sw extends pn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(ho.subVectors(r[0],r[1]).add(r[0]),l=ho);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ho.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ho),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),Za.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,m,g,v),Ya.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,m,g,v),Ka.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,m,g,v)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ya.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ka.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Za.calc(c),Ya.calc(c),Ka.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Rf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function bw(n,e){const t=1-n;return t*t*e}function Ew(n,e){return 2*(1-n)*n*e}function ww(n,e){return n*n*e}function os(n,e,t,i){return bw(n,e)+Ew(n,t)+ww(n,i)}function Tw(n,e){const t=1-n;return t*t*t*e}function Aw(n,e){const t=1-n;return 3*t*t*n*e}function Rw(n,e){return 3*(1-n)*n*n*e}function Cw(n,e){return n*n*n*e}function as(n,e,t,i,r){return Tw(n,e)+Aw(n,t)+Rw(n,i)+Cw(n,r)}class Sp extends pn{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(as(e,r.x,s.x,o.x,a.x),as(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pw extends pn{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(as(e,r.x,s.x,o.x,a.x),as(e,r.y,s.y,o.y,a.y),as(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bp extends pn{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iw extends pn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ep extends pn{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(os(e,r.x,s.x,o.x),os(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wp extends pn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(os(e,r.x,s.x,o.x),os(e,r.y,s.y,o.y),os(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tp extends pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Rf(a,c.x,l.x,u.x,h.x),Rf(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new J().fromArray(r))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:Mw,CatmullRomCurve3:Sw,CubicBezierCurve:Sp,CubicBezierCurve3:Pw,EllipseCurve:Hl,LineCurve:bp,LineCurve3:Iw,QuadraticBezierCurve:Ep,QuadraticBezierCurve3:wp,SplineCurve:Tp});class Lw extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Uo[r.type]().fromJSON(r))}return this}}class el extends Lw{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new bp(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Ep(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Sp(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Tp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Hl(e,t,i,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ap extends yt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new L,u=new J;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ap(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wl extends yt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let m=0;const g=[],v=i/2;let p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(d,2));function x(){const _=new L,R=new L;let w=0;const A=(t-e)/i;for(let P=0;P<=s;P++){const E=[],M=P/s,I=M*(t-e)+e;for(let z=0;z<=r;z++){const F=z/r,V=F*c+a,j=Math.sin(V),H=Math.cos(V);R.x=I*j,R.y=-M*i+v,R.z=I*H,h.push(R.x,R.y,R.z),_.set(j,A,H).normalize(),f.push(_.x,_.y,_.z),d.push(F,1-M),E.push(m++)}g.push(E)}for(let P=0;P<r;P++)for(let E=0;E<s;E++){const M=g[E][P],I=g[E+1][P],z=g[E+1][P+1],F=g[E][P+1];(e>0||E!==0)&&(u.push(M,I,F),w+=3),(t>0||E!==s-1)&&(u.push(I,z,F),w+=3)}l.addGroup(p,w,0),p+=w}function y(_){const R=m,w=new J,A=new L;let P=0;const E=_===!0?e:t,M=_===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,v*M,0),f.push(0,M,0),d.push(.5,.5),m++;const I=m;for(let z=0;z<=r;z++){const V=z/r*c+a,j=Math.cos(V),H=Math.sin(V);A.x=E*H,A.y=v*M,A.z=E*j,h.push(A.x,A.y,A.z),f.push(0,M,0),w.x=j*.5+.5,w.y=H*.5*M+.5,d.push(w.x,w.y),m++}for(let z=0;z<r;z++){const F=R+z,V=I+z;_===!0?u.push(V,V+1,F):u.push(V+1,V,F),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rp extends Wl{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Rp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qo extends yt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(s.slice(),3)),this.setAttribute("uv",new Ze(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new L,_=new L,R=new L;for(let w=0;w<t.length;w+=3)d(t[w+0],y),d(t[w+1],_),d(t[w+2],R),c(y,_,R,x)}function c(x,y,_,R){const w=R+1,A=[];for(let P=0;P<=w;P++){A[P]=[];const E=x.clone().lerp(_,P/w),M=y.clone().lerp(_,P/w),I=w-P;for(let z=0;z<=I;z++)z===0&&P===w?A[P][z]=E:A[P][z]=E.clone().lerp(M,z/I)}for(let P=0;P<w;P++)for(let E=0;E<2*(w-P)-1;E++){const M=Math.floor(E/2);E%2===0?(f(A[P][M+1]),f(A[P+1][M]),f(A[P][M])):(f(A[P][M+1]),f(A[P+1][M+1]),f(A[P+1][M]))}}function l(x){const y=new L;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(x),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function u(){const x=new L;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const _=v(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;o.push(_,1-R)}m(),h()}function h(){for(let x=0;x<o.length;x+=6){const y=o[x+0],_=o[x+2],R=o[x+4],w=Math.max(y,_,R),A=Math.min(y,_,R);w>.9&&A<.1&&(y<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,y){const _=x*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function m(){const x=new L,y=new L,_=new L,R=new L,w=new J,A=new J,P=new J;for(let E=0,M=0;E<s.length;E+=9,M+=6){x.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),w.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),R.copy(x).add(y).add(_).divideScalar(3);const I=v(R);g(w,M+0,x,I),g(A,M+2,y,I),g(P,M+4,_,I)}}function g(x,y,_,R){R<0&&x.x===1&&(o[y]=x.x-1),_.x===0&&_.z===0&&(o[y]=R/2/Math.PI+.5)}function v(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.vertices,e.indices,e.radius,e.details)}}class Cp extends Qo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cp(e.radius,e.detail)}}class cs extends el{constructor(e){super(e),this.uuid=Kt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new el().fromJSON(r))}return this}}const Dw={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Pp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(i&&(s=zw(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let m=t;m<r;m+=t)h=n[m],f=n[m+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return ps(s,o,t,a,c,d,0),o}};function Pp(n,e,t,i,r){let s,o;if(r===Zw(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Cf(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Cf(s,n[s],n[s+1],o);return o&&ea(o,o.next)&&(vs(o),o=o.next),o}function Fi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ea(t,t.next)||pt(t.prev,t,t.next)===0)){if(vs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ps(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Gw(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?Uw(n,i,r,s):Nw(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),vs(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Ow(Fi(n),e,t),ps(n,e,t,i,r,s,2)):o===2&&Fw(n,e,t,i,r,s):ps(Fi(n),e,t,i,r,s,1);break}}}function Nw(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=r>s?r>o?r:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&dr(r,a,s,c,o,l,m.x,m.y)&&pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Uw(n,e,t,i){const r=n.prev,s=n,o=n.next;if(pt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,m=u<h?u<f?u:f:h<f?h:f,g=a>c?a>l?a:l:c>l?c:l,v=u>h?u>f?u:f:h>f?h:f,p=tl(d,m,e,t,i),x=tl(g,v,e,t,i);let y=n.prevZ,_=n.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=v&&y!==r&&y!==o&&dr(a,u,c,h,l,f,y.x,y.y)&&pt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=m&&_.y<=v&&_!==r&&_!==o&&dr(a,u,c,h,l,f,_.x,_.y)&&pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=v&&y!==r&&y!==o&&dr(a,u,c,h,l,f,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=g&&_.y>=m&&_.y<=v&&_!==r&&_!==o&&dr(a,u,c,h,l,f,_.x,_.y)&&pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ow(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!ea(r,s)&&Ip(r,i,i.next,s)&&ms(r,s)&&ms(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),vs(i),vs(i.next),i=n=s),i=i.next}while(i!==n);return Fi(i)}function Fw(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$w(o,a)){let c=Lp(o,a);o=Fi(o,o.next),c=Fi(c,c.next),ps(o,e,t,i,r,s,0),ps(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function zw(n,e,t,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Pp(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Xw(l));for(r.sort(Bw),s=0;s<r.length;s++)t=kw(r[s],t);return t}function Bw(n,e){return n.x-e.x}function kw(n,e){const t=Vw(n,e);if(!t)return e;const i=Lp(t,n);return Fi(i,i.next),Fi(t,t.next)}function Vw(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,c=r.x,l=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&dr(o<l?s:i,o,c,l,o<l?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),ms(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Hw(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function Hw(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function Gw(n,e,t,i){let r=n;do r.z===0&&(r.z=tl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ww(r)}function Ww(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function tl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Xw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function dr(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function $w(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qw(n,e)&&(ms(n,e)&&ms(e,n)&&jw(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||ea(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ea(n,e){return n.x===e.x&&n.y===e.y}function Ip(n,e,t,i){const r=po(pt(n,e,t)),s=po(pt(n,e,i)),o=po(pt(t,i,n)),a=po(pt(t,i,e));return!!(r!==s&&o!==a||r===0&&fo(n,t,e)||s===0&&fo(n,i,e)||o===0&&fo(t,n,i)||a===0&&fo(t,e,i))}function fo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function po(n){return n>0?1:n<0?-1:0}function qw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ip(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ms(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function jw(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lp(n,e){const t=new nl(n.i,n.x,n.y),i=new nl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Cf(n,e,t,i){const r=new nl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function vs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zw(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class In{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return In.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Pf(e),If(i,e);let o=e.length;t.forEach(Pf);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,If(i,t[c]);const a=Dw.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Pf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function If(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Dp extends yt{constructor(e=new cs([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ze(r,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Yw;let y,_=!1,R,w,A,P;p&&(y=p.getSpacedPoints(u),_=!0,f=!1,R=p.computeFrenetFrames(u,!1),w=new L,A=new L,P=new L),f||(v=0,d=0,m=0,g=0);const E=a.extractPoints(l);let M=E.shape;const I=E.holes;if(!In.isClockWise(M)){M=M.reverse();for(let Y=0,ie=I.length;Y<ie;Y++){const C=I[Y];In.isClockWise(C)&&(I[Y]=C.reverse())}}const F=In.triangulateShape(M,I),V=M;for(let Y=0,ie=I.length;Y<ie;Y++){const C=I[Y];M=M.concat(C)}function j(Y,ie,C){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(ie,C)}const H=M.length,ne=F.length;function G(Y,ie,C){let Pe,ee,ye;const ce=Y.x-ie.x,Ne=Y.y-ie.y,ge=C.x-Y.x,T=C.y-Y.y,S=ce*ce+Ne*Ne,O=ce*T-Ne*ge;if(Math.abs(O)>Number.EPSILON){const X=Math.sqrt(S),K=Math.sqrt(ge*ge+T*T),$=ie.x-Ne/X,Ee=ie.y+ce/X,he=C.x-T/K,_e=C.y+ge/K,je=((he-$)*T-(_e-Ee)*ge)/(ce*T-Ne*ge);Pe=$+ce*je-Y.x,ee=Ee+Ne*je-Y.y;const te=Pe*Pe+ee*ee;if(te<=2)return new J(Pe,ee);ye=Math.sqrt(te/2)}else{let X=!1;ce>Number.EPSILON?ge>Number.EPSILON&&(X=!0):ce<-Number.EPSILON?ge<-Number.EPSILON&&(X=!0):Math.sign(Ne)===Math.sign(T)&&(X=!0),X?(Pe=-Ne,ee=ce,ye=Math.sqrt(S)):(Pe=ce,ee=Ne,ye=Math.sqrt(S/2))}return new J(Pe/ye,ee/ye)}const le=[];for(let Y=0,ie=V.length,C=ie-1,Pe=Y+1;Y<ie;Y++,C++,Pe++)C===ie&&(C=0),Pe===ie&&(Pe=0),le[Y]=G(V[Y],V[C],V[Pe]);const ve=[];let Se,Ve=le.concat();for(let Y=0,ie=I.length;Y<ie;Y++){const C=I[Y];Se=[];for(let Pe=0,ee=C.length,ye=ee-1,ce=Pe+1;Pe<ee;Pe++,ye++,ce++)ye===ee&&(ye=0),ce===ee&&(ce=0),Se[Pe]=G(C[Pe],C[ye],C[ce]);ve.push(Se),Ve=Ve.concat(Se)}for(let Y=0;Y<v;Y++){const ie=Y/v,C=d*Math.cos(ie*Math.PI/2),Pe=m*Math.sin(ie*Math.PI/2)+g;for(let ee=0,ye=V.length;ee<ye;ee++){const ce=j(V[ee],le[ee],Pe);oe(ce.x,ce.y,-C)}for(let ee=0,ye=I.length;ee<ye;ee++){const ce=I[ee];Se=ve[ee];for(let Ne=0,ge=ce.length;Ne<ge;Ne++){const T=j(ce[Ne],Se[Ne],Pe);oe(T.x,T.y,-C)}}}const nt=m+g;for(let Y=0;Y<H;Y++){const ie=f?j(M[Y],Ve[Y],nt):M[Y];_?(A.copy(R.normals[0]).multiplyScalar(ie.x),w.copy(R.binormals[0]).multiplyScalar(ie.y),P.copy(y[0]).add(A).add(w),oe(P.x,P.y,P.z)):oe(ie.x,ie.y,0)}for(let Y=1;Y<=u;Y++)for(let ie=0;ie<H;ie++){const C=f?j(M[ie],Ve[ie],nt):M[ie];_?(A.copy(R.normals[Y]).multiplyScalar(C.x),w.copy(R.binormals[Y]).multiplyScalar(C.y),P.copy(y[Y]).add(A).add(w),oe(P.x,P.y,P.z)):oe(C.x,C.y,h/u*Y)}for(let Y=v-1;Y>=0;Y--){const ie=Y/v,C=d*Math.cos(ie*Math.PI/2),Pe=m*Math.sin(ie*Math.PI/2)+g;for(let ee=0,ye=V.length;ee<ye;ee++){const ce=j(V[ee],le[ee],Pe);oe(ce.x,ce.y,h+C)}for(let ee=0,ye=I.length;ee<ye;ee++){const ce=I[ee];Se=ve[ee];for(let Ne=0,ge=ce.length;Ne<ge;Ne++){const T=j(ce[Ne],Se[Ne],Pe);_?oe(T.x,T.y+y[u-1].y,y[u-1].x+C):oe(T.x,T.y,h+C)}}}q(),re();function q(){const Y=r.length/3;if(f){let ie=0,C=H*ie;for(let Pe=0;Pe<ne;Pe++){const ee=F[Pe];De(ee[2]+C,ee[1]+C,ee[0]+C)}ie=u+v*2,C=H*ie;for(let Pe=0;Pe<ne;Pe++){const ee=F[Pe];De(ee[0]+C,ee[1]+C,ee[2]+C)}}else{for(let ie=0;ie<ne;ie++){const C=F[ie];De(C[2],C[1],C[0])}for(let ie=0;ie<ne;ie++){const C=F[ie];De(C[0]+H*u,C[1]+H*u,C[2]+H*u)}}i.addGroup(Y,r.length/3-Y,0)}function re(){const Y=r.length/3;let ie=0;be(V,ie),ie+=V.length;for(let C=0,Pe=I.length;C<Pe;C++){const ee=I[C];be(ee,ie),ie+=ee.length}i.addGroup(Y,r.length/3-Y,1)}function be(Y,ie){let C=Y.length;for(;--C>=0;){const Pe=C;let ee=C-1;ee<0&&(ee=Y.length-1);for(let ye=0,ce=u+v*2;ye<ce;ye++){const Ne=H*ye,ge=H*(ye+1),T=ie+Pe+Ne,S=ie+ee+Ne,O=ie+ee+ge,X=ie+Pe+ge;ze(T,S,O,X)}}}function oe(Y,ie,C){c.push(Y),c.push(ie),c.push(C)}function De(Y,ie,C){Oe(Y),Oe(ie),Oe(C);const Pe=r.length/3,ee=x.generateTopUV(i,r,Pe-3,Pe-2,Pe-1);Ke(ee[0]),Ke(ee[1]),Ke(ee[2])}function ze(Y,ie,C,Pe){Oe(Y),Oe(ie),Oe(Pe),Oe(ie),Oe(C),Oe(Pe);const ee=r.length/3,ye=x.generateSideWallUV(i,r,ee-6,ee-3,ee-2,ee-1);Ke(ye[0]),Ke(ye[1]),Ke(ye[3]),Ke(ye[1]),Ke(ye[2]),Ke(ye[3])}function Oe(Y){r.push(c[Y*3+0]),r.push(c[Y*3+1]),r.push(c[Y*3+2])}function Ke(Y){s.push(Y.x),s.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Kw(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Uo[r.type]().fromJSON(r)),new Dp(i,e.options)}}const Yw={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new J(s,o),new J(a,c),new J(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],m=e[r*3+2],g=e[s*3],v=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new J(o,1-c),new J(l,1-h),new J(f,1-m),new J(g,1-p)]:[new J(a,1-c),new J(u,1-h),new J(d,1-m),new J(v,1-p)]}};function Kw(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Np extends Qo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Np(e.radius,e.detail)}}class Up extends yt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/r,d=new L,m=new J;for(let g=0;g<=r;g++){for(let v=0;v<=i;v++){const p=s+v/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let g=0;g<r;g++){const v=g*(i+1);for(let p=0;p<i;p++){const x=p+v,y=x,_=x+i+1,R=x+i+2,w=x+1;a.push(y,_,w),a.push(_,R,w)}}this.setIndex(a),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Op extends yt{constructor(e=new cs([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(s,3)),this.setAttribute("uv",new Ze(o,2));function l(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;In.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,p=m.length;v<p;v++){const x=m[v];In.isClockWise(x)===!0&&(m[v]=x.reverse())}const g=In.triangulateShape(d,m);for(let v=0,p=m.length;v<p;v++){const x=m[v];d=d.concat(x)}for(let v=0,p=d.length;v<p;v++){const x=d[v];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let v=0,p=g.length;v<p;v++){const x=g[v],y=x[0]+h,_=x[1]+h,R=x[2]+h;i.push(y,_,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Jw(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Op(i,e.curveSegments)}}function Jw(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Fp extends yt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,f=new L,d=[],m=[],g=[],v=[];for(let p=0;p<=i;p++){const x=[],y=p/i;let _=0;p===0&&o===0?_=.5/t:p===i&&c===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){const w=R/t;h.x=-e*Math.cos(r+w*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),v.push(w+_,1-y),x.push(l++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const y=u[p][x+1],_=u[p][x],R=u[p+1][x],w=u[p+1][x+1];(p!==0||o>0)&&d.push(y,_,w),(p!==i-1||c<Math.PI)&&d.push(_,R,w)}this.setIndex(d),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(g,3)),this.setAttribute("uv",new Ze(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zp extends yt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new L,h=new L,f=new L;for(let d=0;d<=i;d++)for(let m=0;m<=r;m++){const g=m/r*s,v=d/i*Math.PI*2;h.x=(e+t*Math.cos(v))*Math.cos(g),h.y=(e+t*Math.cos(v))*Math.sin(g),h.z=t*Math.sin(v),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(m/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=r;m++){const g=(r+1)*d+m-1,v=(r+1)*(d-1)+m-1,p=(r+1)*(d-1)+m,x=(r+1)*d+m;o.push(g,v,x),o.push(v,p,x)}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bp extends yt{constructor(e=new wp(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new J;let u=new L;const h=[],f=[],d=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(d,2));function g(){for(let y=0;y<t;y++)v(y);v(s===!1?t:0),x(),p()}function v(y){u=e.getPointAt(y/t,u);const _=o.normals[y],R=o.binormals[y];for(let w=0;w<=r;w++){const A=w/r*Math.PI*2,P=Math.sin(A),E=-Math.cos(A);c.x=E*_.x+P*R.x,c.y=E*_.y+P*R.y,c.z=E*_.z+P*R.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=r;_++){const R=(r+1)*(y-1)+(_-1),w=(r+1)*y+(_-1),A=(r+1)*y+_,P=(r+1)*(y-1)+_;m.push(R,w,P),m.push(w,A,P)}}function x(){for(let y=0;y<=t;y++)for(let _=0;_<=r;_++)l.x=y/t,l.y=_/r,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bp(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class DR extends cn{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class kp extends cn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class NR extends kp{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class UR extends cn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class OR extends cn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function mo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Qw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function eT(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Lf(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function Vp(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ta{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tT extends ta{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case dh:s=e,a=2*t-i;break;case ph:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case dh:o=e,c=2*i-t;break;case ph:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),g=m*m,v=g*m,p=-f*v+2*f*g-f*m,x=(1+f)*v+(-1.5-2*f)*g+(-.5+f)*m+1,y=(-1-d)*v+(1.5+d)*g+.5*m,_=d*v-d*g;for(let R=0;R!==a;++R)s[R]=p*o[u+R]+x*o[l+R]+y*o[c+R]+_*o[h+R];return s}}class nT extends ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class iT extends ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class mn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new iT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Yc:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Yc;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Qw(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ga,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const h=a*i,f=h-i,d=h+i;for(let m=0;m!==i;++m){const g=t[h+m];if(g!==t[f+m]||g!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Yc;class Ir extends mn{constructor(e,t,i){super(e,t,i)}}Ir.prototype.ValueTypeName="bool";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=Po;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Hp extends mn{}Hp.prototype.ValueTypeName="color";class Oo extends mn{}Oo.prototype.ValueTypeName="number";class rT extends ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Cr.slerpFlat(s,0,o,l-a,o,l,c);return s}}class na extends mn{InterpolantFactoryMethodLinear(e){return new rT(this.times,this.values,this.getValueSize(),e)}}na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends mn{constructor(e,t,i){super(e,t,i)}}Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=Po;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fo extends mn{}Fo.prototype.ValueTypeName="vector";class FR{constructor(e="",t=-1,i=[],r=Ty){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Kt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(oT(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(mn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=eT(c);c=Lf(c,1,u),l=Lf(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Oo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,m,g){if(d.length!==0){const v=[],p=[];Vp(d,v,p,m),v.length!==0&&g.push(new h(f,v,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let g=0;g<f[m].morphTargets.length;g++)d[f[m].morphTargets[g]]=-1;for(const g in d){const v=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const y=f[m];v.push(y.time),p.push(y.morphTarget===g?1:0)}r.push(new Oo(".morphTargetInfluence["+g+"]",v,p))}c=d.length*o}else{const d=".bones["+t[h].name+"]";i(Fo,d+".position",f,"pos",r),i(na,d+".quaternion",f,"rot",r),i(Fo,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oo;case"vector":case"vector2":case"vector3":case"vector4":return Fo;case"color":return Hp;case"quaternion":return na;case"bool":case"boolean":return Ir;case"string":return Lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function oT(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sT(n.type);if(n.times===void 0){const t=[],i=[];Vp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Zn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class aT{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const cT=new aT;class Ms{constructor(e){this.manager=e!==void 0?e:cT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const bn={};class lT extends Error{constructor(e,t){super(e),this.response=t}}class zR extends Ms{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Zn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bn[e]!==void 0){bn[e].push({onLoad:t,onProgress:i,onError:r});return}bn[e]=[],bn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=bn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let g=0;const v=new ReadableStream({start(p){x();function x(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{g+=_.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:d});for(let w=0,A=u.length;w<A;w++){const P=u[w];P.onProgress&&P.onProgress(R)}p.enqueue(_),x()}},y=>{p.error(y)})}}});return new Response(v)}else throw new lT(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Zn.add(e,l);const u=bn[e];delete bn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=bn[e];if(u===void 0)throw this.manager.itemError(e),l;delete bn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class uT extends Ms{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ds("img");function c(){u(),Zn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class BR extends Ms{constructor(e){super(e)}load(e,t,i,r){const s=new wt,o=new uT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ia extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kR extends ia{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ja=new qe,Df=new L,Nf=new L;class Xl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hT extends Xl{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Tr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class VR extends ia{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new hT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uf=new qe,Yr=new L,Qa=new L;class fT extends Xl{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Yr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Yr),Qa.copy(i.position),Qa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qa),i.updateMatrixWorld(),r.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Uf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf)}}class HR extends ia{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dT extends Xl{constructor(){super(new hp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class GR extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new dT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class WR{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class XR extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Zn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Zn.add(e,c),s.manager.itemStart(e)}}class $R{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Of(){return performance.now()}const $l="\\[\\]\\.:\\/",pT=new RegExp("["+$l+"]","g"),ql="[^"+$l+"]",mT="[^"+$l.replace("\\.","")+"]",vT=/((?:WC+[\/:])*)/.source.replace("WC",ql),gT=/(WCOD+)?/.source.replace("WCOD",mT),_T=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),yT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),xT=new RegExp("^"+vT+gT+_T+yT+"$"),MT=["material","materials","bones","map"];class ST{constructor(e,t,i){const r=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ct{constructor(e,t,i){this.path=t,this.parsedPath=i||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,i):new ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pT,"")}static parseTrackName(e){const t=xT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);MT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=ST;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Gp{constructor(e){this.value=e}clone(){return new Gp(this.value.clone===void 0?this.value:this.value.clone())}}const Ff=new qe;class qR{constructor(e,t,i=0,r=1/0){this.ray=new ys(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ff.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ff),this}intersectObject(e,t=!0,i=[]){return il(e,this,i,t),i.sort(zf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)il(e[r],this,i,t);return i.sort(zf),i}}function zf(n,e){return n.distance-e.distance}function il(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)il(s[o],e,t,!0)}}class jR{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Bf=new J;class bT{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class ZR{constructor(){this.type="ShapePath",this.color=new ke,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new el,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let y=0,_=p.length;y<_;y++){const R=p[y],w=new cs;w.curves=R.curves,x.push(w)}return x}function i(p,x){const y=x.length;let _=!1;for(let R=y-1,w=0;w<y;R=w++){let A=x[R],P=x[w],E=P.x-A.x,M=P.y-A.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(A=x[w],E=-E,P=x[R],M=-M),p.y<A.y||p.y>P.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const I=M*(p.x-A.x)-E*(p.y-A.y);if(I===0)return!0;if(I<0)continue;_=!_}}else{if(p.y!==A.y)continue;if(P.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=P.x)return!0}}return _}const r=In.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new cs,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],m=0,g;f[m]=void 0,d[m]=[];for(let p=0,x=s.length;p<x;p++)a=s[p],g=a.getPoints(),o=r(g),o=e?!o:o,o?(!u&&f[m]&&m++,f[m]={s:new cs,p:g},f[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:g[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,x=0;for(let y=0,_=f.length;y<_;y++)h[y]=[];for(let y=0,_=f.length;y<_;y++){const R=d[y];for(let w=0;w<R.length;w++){const A=R[w];let P=!0;for(let E=0;E<f.length;E++)i(A.p,f[E].p)&&(y!==E&&x++,P?(P=!1,h[E].push(A)):p=!0);P&&h[y].push(A)}}x>0&&p===!1&&(d=h)}let v;for(let p=0,x=f.length;p<x;p++){c=f[p].s,l.push(c),v=d[p];for(let y=0,_=v.length;y<_;y++)c.holes.push(v[y].h)}return l}}class YR extends Vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);function KR(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new yt;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(const u in s){const h=kf(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let g=0;g<o[u].length;++g)d.push(o[u][g][f]);const m=kf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function kf(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Gt(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){const g=u.getComponent(f,m);a.setComponent(f+h,m,g)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function JR(n,e){if(e===Ay)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===mh||e===Ry){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===mh)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}const Kr=new L;function $t(n,e,t,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Kr.copy(e),Kr[i]=0,Kr.normalize();const l=.5*o/(o+a),u=1-Kr.angleTo(n)/c;return Math.sign(Kr[t])===1?u*l:a/(o+a)+l+l*(1-u)}class ET extends ni{constructor(e=1,t=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new L,c=new L,l=new L(e,t,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,m=new L,g=.5/r;for(let v=0,p=0;v<u.length;v+=3,p+=2)switch(a.fromArray(u,v),c.copy(a),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[v+0]=l.x*Math.sign(a.x)+c.x*s,u[v+1]=l.y*Math.sign(a.y)+c.y*s,u[v+2]=l.z*Math.sign(a.z)+c.z*s,h[v+0]=c.x,h[v+1]=c.y,h[v+2]=c.z,Math.floor(v/d)){case 0:m.set(1,0,0),f[p+0]=$t(m,c,"z","y",s,i),f[p+1]=1-$t(m,c,"y","z",s,t);break;case 1:m.set(-1,0,0),f[p+0]=1-$t(m,c,"z","y",s,i),f[p+1]=1-$t(m,c,"y","z",s,t);break;case 2:m.set(0,1,0),f[p+0]=1-$t(m,c,"x","z",s,e),f[p+1]=$t(m,c,"z","x",s,i);break;case 3:m.set(0,-1,0),f[p+0]=1-$t(m,c,"x","z",s,e),f[p+1]=1-$t(m,c,"z","x",s,i);break;case 4:m.set(0,0,1),f[p+0]=1-$t(m,c,"x","y",s,e),f[p+1]=1-$t(m,c,"y","x",s,t);break;case 5:m.set(0,0,-1),f[p+0]=$t(m,c,"x","y",s,e),f[p+1]=1-$t(m,c,"y","x",s,t);break}}}const vo={thickness:20,roundness:4,softness:4,strength:.22};function wT(n,e,t,i,r){const s=[];for(const c of[t,e]){const l=(c-i)/Math.max(.001,r.y);for(const u of[n.x0-1,n.x1+1])for(const h of[n.z0-1,n.z1+1])s.push(new J(u-r.x*l,h-r.z*l))}s.sort((c,l)=>c.x-l.x||c.y-l.y);const o=(c,l,u)=>(l.x-c.x)*(u.y-c.y)-(l.y-c.y)*(u.x-c.x),a=c=>{const l=[];for(const u of c){for(;l.length>=2&&o(l.at(-2)??u,l.at(-1)??u,u)<=0;)l.pop();l.push(u)}return l.slice(0,-1)};return[...a(s),...a([...s].reverse())]}class QR extends ts{lightDirection=new L(0,1,0);dimensions=new L;cornerRadius=vo.roundness;builtRadius=-1;shadowOutline=Array.from({length:6},()=>new J);platform=new Ut(new ni(1,1,1),new kp({color:"#dcd5c9",roughness:.95}));shadow=new Ut(new xs(1,1),new Un({transparent:!0,depthWrite:!1,uniforms:{lightDirection:{value:this.lightDirection},baseCenter:{value:this.platform.position},halfSize:{value:new L},softness:{value:vo.softness},opacity:{value:vo.strength},cornerRadius:{value:this.cornerRadius},officeFade:{value:1}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorldPosition = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,fragmentShader:`
        uniform vec3 lightDirection;
        uniform vec3 baseCenter;
        uniform vec3 halfSize;
        uniform float softness;
        uniform float opacity;
        uniform float cornerRadius;
        uniform float officeFade;
        varying vec3 vWorldPosition;
        void main() {
          // Trace only the rounded plinth toward the interior's actual key light.
          float travel = 0.04;
          float visibility = 1.0;
          float end = (baseCenter.y + halfSize.y - vWorldPosition.y) / max(lightDirection.y, 0.001);
          float spread = max(softness, 0.1) / max(halfSize.y * 2.0, 1.0);
          for (int i = 0; i < 40; i++) {
            vec3 p = vWorldPosition + lightDirection * travel - baseCenter;
            vec3 q = abs(p) - halfSize + cornerRadius;
            float distanceToBase = length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - cornerRadius;
            if (distanceToBase < 0.015) {
              visibility = 0.0;
              break;
            }
            visibility = min(visibility, distanceToBase / (travel * spread));
            travel += max(distanceToBase, 0.05);
            if (travel > end) break;
          }
          float alpha = (1.0 - smoothstep(0.0, 1.0, visibility)) * opacity * officeFade;
          gl_FragColor = vec4(0.12, 0.10, 0.08, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}));constructor(){super(),this.name="Office set base experiment",this.platform.name="Office exterior plinth",this.shadow.name="Office platform-only drop shadow",this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=-1,this.platform.castShadow=this.platform.receiveShadow=!1,this.shadow.castShadow=this.shadow.receiveShadow=!1,this.add(this.platform,this.shadow)}layout(e,t=vo.thickness,i=this.cornerRadius){const r=e.x1-e.x0,s=e.z1-e.z0,o=(e.x0+e.x1)/2,a=(e.z0+e.z1)/2,c=-2-t;this.cornerRadius=Math.max(0,Math.min(i,t/2,r/2,s/2));const l=this.cornerRadius+1,u=r+l*2,h=s+l*2;if(!this.dimensions.equals(new L(u,t,h))||this.builtRadius!==this.cornerRadius){const _=this.platform.geometry;this.platform.geometry=this.cornerRadius===0?new ni(u,t,h):new ET(u,t,h,3,this.cornerRadius),_.dispose(),this.dimensions.set(u,t,h),this.builtRadius=this.cornerRadius}const f=this.shadow.material.uniforms.cornerRadius;f&&(f.value=this.cornerRadius),this.shadow.material.uniforms.halfSize?.value.set(u/2,t/2,h/2),this.platform.position.set(o,-2-t/2,a);const d=c-.2,m=wT({x0:e.x0-this.cornerRadius,x1:e.x1+this.cornerRadius,z0:e.z0-this.cornerRadius,z1:e.z1+this.cornerRadius},-2,c,d,this.lightDirection),g=new bT().setFromPoints(m),p=g.getSize(new J).addScalar(48*2),x=g.getCenter(new J);this.shadow.scale.set(p.x,p.y,1),this.shadow.position.set(x.x,d,x.y);const y=m.at(-1)??new J(o,a);this.shadowOutline.forEach((_,R)=>_.copy(m[R]??y))}setLightDirection(e){this.lightDirection.copy(e).normalize()}}export{Yc as $,CR as A,Gt as B,ke as C,GR as D,Mp as E,zR as F,PR as G,IR as H,RR as I,ts as J,Vt as K,Ms as L,NR as M,Us as N,mt as O,HR as P,Cr as Q,Sc as R,qt as S,BR as T,bR as U,J as V,hp as W,xp as X,FR as Y,vw as Z,Po as _,WR as a,Un as a$,Lo as a0,wt as a1,Fo as a2,Oo as a3,na as a4,Je as a5,ti as a6,ta as a7,ri as a8,Fn as a9,$g as aA,hu as aB,bT as aC,In as aD,cs as aE,el as aF,Ze as aG,We as aH,ZR as aI,ni as aJ,OR as aK,Bp as aL,Sw as aM,wR as aN,ER as aO,Y0 as aP,xy as aQ,kR as aR,Dp as aS,Fp as aT,Wl as aU,xs as aV,Up as aW,LR as aX,qR as aY,Si as aZ,QR as a_,Ry as aa,mh as ab,we as ac,Te as ad,rn as ae,Q as af,fR as ag,dR as ah,pa as ai,Cg as aj,r0 as ak,Zt as al,pR as am,Mt as an,Ns as ao,us as ap,xr as aq,Vd as ar,mi as as,i0 as at,pd as au,gl as av,Ml as aw,$_ as ax,ns as ay,Cn as az,Rr as b,Wm as b$,ia as b0,YR as b1,xR as b2,MR as b3,jR as b4,ys as b5,aT as b6,Wf as b7,KT as b8,Lm as b9,ul as bA,ll as bB,Le as bC,dg as bD,Q1 as bE,tA as bF,cg as bG,p1 as bH,d1 as bI,Di as bJ,Zf as bK,gs as bL,ii as bM,zi as bN,dt as bO,l1 as bP,aR as bQ,uR as bR,lR as bS,Dn as bT,Qn as bU,lA as bV,cA as bW,aA as bX,sA as bY,rA as bZ,nA as b_,a1 as ba,Bo as bb,fu as bc,Jv as bd,b1 as be,cd as bf,E1 as bg,Qf as bh,w1 as bi,QT as bj,Nm as bk,ae as bl,u1 as bm,f1 as bn,h1 as bo,bm as bp,S1 as bq,M1 as br,x1 as bs,y1 as bt,_1 as bu,g1 as bv,v1 as bw,m1 as bx,fl as by,hl as bz,VR as c,vt as c$,nc as c0,eA as c1,oA as c2,fd as c3,fg as c4,iA as c5,FA as c6,pg as c7,hg as c8,ug as c9,PA as cA,CA as cB,SA as cC,MA as cD,xA as cE,yA as cF,vA as cG,mA as cH,pA as cI,dA as cJ,fA as cK,_A as cL,LA as cM,gA as cN,hA as cO,id as cP,c1 as cQ,tg as cR,ng as cS,ig as cT,jA as cU,$A as cV,qA as cW,og as cX,BA as cY,kA as cZ,z1 as c_,mg as ca,cR as cb,tR as cc,uA as cd,Wv as ce,o1 as cf,s1 as cg,t1 as ch,e1 as ci,r1 as cj,i1 as ck,n1 as cl,J1 as cm,Vm as cn,JT as co,OA as cp,UA as cq,NA as cr,DA as cs,IA as ct,RA as cu,AA as cv,TA as cw,wA as cx,EA as cy,bA as cz,qe as d,rh as d$,oR as d0,sR as d1,rR as d2,nR as d3,iR as d4,KA as d5,YA as d6,eR as d7,QA as d8,JA as d9,VA as dA,WA as dB,GA as dC,zA as dD,Y1 as dE,K1 as dF,Z1 as dG,by as dH,Oi as dI,fp as dJ,on as dK,Rp as dL,yp as dM,Nl as dN,KR as dO,Np as dP,TR as dQ,pw as dR,UR as dS,ch as dT,Cp as dU,$R as dV,gp as dW,uT as dX,ET as dY,Op as dZ,yR as d_,ZA as da,F1 as db,B1 as dc,k1 as dd,R1 as de,T1 as df,A1 as dg,C1 as dh,P1 as di,I1 as dj,L1 as dk,D1 as dl,N1 as dm,U1 as dn,O1 as dp,V1 as dq,H1 as dr,G1 as ds,W1 as dt,X1 as du,$1 as dv,q1 as dw,j1 as dx,XA as dy,HA as dz,L as e,B0 as e0,$0 as e1,Jr as e2,_R as e3,mR as e4,hR as e5,En as e6,DR as e7,zp as e8,Ap as e9,SR as eA,Gp as eB,ZT as eC,dm as eD,DT as eE,LT as eF,PT as eG,RT as eH,rl as eI,AT as eJ,om as eK,CT as eL,ou as eM,OT as eN,FT as eO,IT as eP,NT as eQ,pm as eR,UT as eS,Ot as ea,sp as eb,uh as ec,K0 as ed,vo as ee,GT as ef,Hf as eg,sl as eh,Gf as ei,It as ej,TT as ek,WT as el,zT as em,BT as en,Sm as eo,YT as ep,HT as eq,kT as er,VT as es,$T as et,jT as eu,gR as ev,vR as ew,qT as ex,Ur as ey,XT as ez,yf as f,XR as g,dw as h,Ci as i,va as j,wy as k,fn as l,Ht as m,bc as n,Ri as o,xw as p,cn as q,yw as r,kp as s,Tn as t,rp as u,ct as v,yt as w,AR as x,Ut as y,JR as z};
