var he=Object.defineProperty,ge=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var K=(a,e,t)=>e in a?he(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,b=(a,e)=>{for(var t in e||(e={}))ve.call(e,t)&&K(a,t,e[t]);if(H)for(var t of H(e))ye.call(e,t)&&K(a,t,e[t]);return a},j=(a,e)=>ge(a,me(e));import{w as x,d as S,_ as P}from"./preload-helper-b55195a1.js";import{$ as g,K as be}from"./index-3a3d0142.js";var we=Object.defineProperty,ke=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,z=(a,e,t)=>e in a?we(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,y=(a,e)=>{for(var t in e||(e={}))Y.call(e,t)&&z(a,t,e[t]);if(I)for(var t of I(e))Z.call(e,t)&&z(a,t,e[t]);return a},$=(a,e)=>ke(a,Oe(e)),F=(a,e)=>{var t={};for(var r in a)Y.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&I)for(var r of I(a))e.indexOf(r)<0&&Z.call(a,r)&&(t[r]=a[r]);return t},B=({parser:a,key:e,params:t,translations:r,locale:o,fallbackLocale:i})=>{if(!(e&&o))return console.warn("[i18n]: No translation key or locale provided. Skipping translation..."),"";let l=(r[o]||{})[e];return i&&l===void 0&&(l=(r[i]||{})[e]),a.parse(l,t,o,e)},O=(...a)=>a.length?a.filter(e=>!!e).map(e=>{let t=`${e}`.toLowerCase();try{if([t]=Intl.Collator.supportedLocalesOf(e),!t)throw new Error(`[i18n]: '${e}' is non-standard.`)}catch{console.warn(`[i18n]: Non-standard locale provided: '${e}'. Check your 'translations' and 'loaders' in i18n config...`)}return t}):[],M=(a,e)=>Object.keys(a||{}).reduce((t,r)=>{let o=a[r],i=e?`${e}.${r}`:`${r}`;return o&&typeof o=="object"?y(y({},t),M(o,i)):$(y({},t),{[i]:o})},{}),$e=async a=>{try{return(await Promise.all(a.map(e=>{var t=e,{loader:r}=t,o=F(t,["loader"]);return new Promise(async i=>{let l;try{l=await r()}catch(c){console.error(`[i18n]: Failed to load translation. Verify your '${o.locale}' > '${o.key}' Loader.`),console.error(c)}i($(y({loader:r},o),{data:l}))})}))).reduce((e,{key:t,data:r,locale:o})=>{if(!r)return e;let[i]=O(o);return $(y({},e),{[i]:M($(y({},e[i]||{}),{[t]:r}))})},{})}catch(e){console.error(e)}return{}},Le=a=>e=>{try{if(typeof e=="string")return e===a;if(typeof e=="object")return e.test(a)}catch{throw new Error("[i18n]: Invalid route config!")}return!1},_e=(a,e)=>{let t=!0;try{t=Object.keys(a).filter(r=>a[r]!==void 0).every(r=>a[r]===e[r])}catch{}return t},J=1e3*60*60*24,Pe=class{constructor(a){this.cachedAt=0,this.loadedKeys={},this.currentRoute=x(),this.config=x(),this.isLoading=x(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(e,t)=>{let r=Array.from(this.promises).filter(o=>_e({locale:O(e)[0],route:t},o)).map(({promise:o})=>o);return Promise.all(r)},get:()=>g(this.isLoading)},this.privateTranslations=x({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>g(this.translations)},this.locales=$(y({},S([this.config,this.privateTranslations],([e,t])=>{if(!e)return[];let{loaders:r=[]}=e,o=r.map(({locale:l})=>O(l)[0]),i=Object.keys(t).map(l=>O(l)[0]);return Array.from(new Set([...o,...i]))},[])),{get:()=>g(this.locales)}),this.internalLocale=x(),this.loaderTrigger=S([this.internalLocale,this.currentRoute],([e,t],r)=>{var o,i,l;e!==void 0&&t!==void 0&&(e!==((o=g(this.loaderTrigger))==null?void 0:o[0])||t!==((i=g(this.loaderTrigger))==null?void 0:i[1]))&&((l=g(this.config))!=null&&l.debug&&console.debug("[i18n]: Triggering translation load..."),r([e,t]))},[]),this.localeHelper=x(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>g(this.locale)},this.initialized=S([this.locale,this.currentRoute,this.privateTranslations],([e,t,r],o)=>{g(this.initialized)||o(e!==void 0&&t!==void 0&&!!Object.keys(r).length)}),this.translation=S([this.privateTranslations,this.locale,this.isLoading],([e,t,r],o)=>{let i=e[t];i&&Object.keys(i).length&&!r&&o(i)},{}),this.t=$(y({},S([this.config,this.translation],([{parser:e,fallbackLocale:t}])=>(r,...o)=>B({parser:e,key:r,params:o,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:t}))),{get:(e,...t)=>g(this.t)(e,...t)}),this.l=$(y({},S([this.config,this.translations],([{parser:e,fallbackLocale:t},r])=>(o,i,...l)=>B({parser:e,key:i,params:l,translations:r,locale:o,fallbackLocale:t}))),{get:(e,t,...r)=>g(this.l)(e,t,...r)}),this.getLocale=e=>{if(!e)return"";let t=this.locales.get().find(r=>r===O(e)[0])||"";return O(t)[0]||""},this.setLocale=e=>{var t;if(!e)return;let[r]=O(e);if(r!==g(this.internalLocale))return(t=g(this.config))!=null&&t.debug&&console.debug(`[i18n]: Setting '${r}' locale.`),this.internalLocale.set(r),this.loading.toPromise(e,g(this.currentRoute))},this.setRoute=e=>{var t;if(e!==g(this.currentRoute)){(t=g(this.config))!=null&&t.debug&&console.debug(`[i18n]: Setting '${e}' route.`),this.currentRoute.set(e);let r=g(this.internalLocale);return this.loading.toPromise(r,e)}},this.loadConfig=async e=>{await this.configLoader(e)},this.getTranslationProps=async(e=this.locale.get(),t=g(this.currentRoute))=>{let r=g(this.config);if(!r||!e)return[];let o=this.translations.get(),{loaders:i,fallbackLocale:l="",cache:c=J}=r||{},p=Number.isNaN(+c)?J:+c;this.cachedAt?Date.now()>p+this.cachedAt&&(r!=null&&r.debug&&console.debug("[i18n]: Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(r!=null&&r.debug&&console.debug("[i18n]: Setting cache timestamp."),this.cachedAt=Date.now());let[n,f]=O(e,l),h=o[n],u=o[f],s=(i||[]).map(d=>{var v=d,{locale:w}=v,m=F(v,["locale"]);return $(y({},m),{locale:O(w)[0]})}).filter(({routes:d})=>!d||(d||[]).some(Le(t))).filter(({key:d,locale:v})=>v===n&&(!h||!(this.loadedKeys[n]||[]).includes(d))||l&&v===f&&(!u||!(this.loadedKeys[f]||[]).includes(d)));if(s.length){this.isLoading.set(!0),r!=null&&r.debug&&console.debug("[i18n]: Fetching translations...");let d=await $e(s);this.isLoading.set(!1);let v=Object.keys(d).reduce((m,k)=>$(y({},m),{[k]:Object.keys(d[k])}),{}),w=s.filter(({key:m,locale:k})=>(v[k]||[]).some(L=>`${L}`.startsWith(m))).reduce((m,{key:k,locale:L})=>$(y({},m),{[L]:[...m[L]||[],k]}),{});return[d,w]}return[]},this.addTranslations=(e,t)=>{var r;if(!e)return;(r=g(this.config))!=null&&r.debug&&console.debug("[i18n]: Adding translations...");let o=Object.keys(e||{});this.privateTranslations.update(i=>o.reduce((l,c)=>$(y({},l),{[c]:y(y({},l[c]||{}),M(e[c]))}),i)),o.forEach(i=>{let l=Object.keys(e[i]).map(c=>`${c}`.split(".")[0]);t&&(l=t[i]),this.loadedKeys[i]=Array.from(new Set([...this.loadedKeys[i]||[],...l||[]]))})},this.loader=async([e,t])=>{var r;(r=g(this.config))!=null&&r.debug&&console.debug("[i18n]: Adding loader promise.");let o=(async()=>{let i=await this.getTranslationProps(e,t);i.length&&this.addTranslations(...i)})();this.promises.add({locale:e,route:t,promise:o}),o.then(()=>{let i=this.getLocale(e);i&&this.locale.get()!==i&&this.locale.forceSet(i)})},this.loadTranslations=(e,t=g(this.currentRoute)||"")=>{if(e)return this.setRoute(t),this.setLocale(e),this.loading.toPromise(e,t)},a&&this.loadConfig(a),this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async e=>{var t;e&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),(t=g(this.config))!=null&&t.debug&&console.debug("[i18n]: Loader promises have been purged."))})}async configLoader(a){if(!a)throw new Error("[i18n]: No config provided!");let e=a,{initLocale:t,fallbackLocale:r,translations:o,debug:i}=e,l=F(e,["initLocale","fallbackLocale","translations","debug"]);[t]=O(t),[r]=O(r),i&&console.debug("[i18n]: Setting config."),this.config.set(y({initLocale:t,fallbackLocale:r,translations:o,debug:i},l)),o&&this.addTranslations(o),await this.loadTranslations(t)}},ee=Object.defineProperty,Ee=Object.defineProperties,xe=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,X=(a,e,t)=>e in a?ee(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,_=(a,e)=>{for(var t in e||(e={}))te.call(e,t)&&X(a,t,e[t]);if(D)for(var t of D(e))ae.call(e,t)&&X(a,t,e[t]);return a},re=(a,e)=>Ee(a,xe(e)),T=(a,e)=>{var t={};for(var r in a)te.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&D)for(var r of D(a))e.indexOf(r)<0&&ae.call(a,r)&&(t[r]=a[r]);return t},Se=(a,e)=>{for(var t in e)ee(a,t,{get:e[t],enumerable:!0})},oe={};Se(oe,{ago:()=>Ce,date:()=>De,eq:()=>W,gt:()=>ne,gte:()=>je,lt:()=>ie,lte:()=>Ae,ne:()=>Te,number:()=>Ie});var N=(a,e)=>{let{modifierDefaults:t}=e||{},{[a]:r}=t||{};return r||{}},W=({value:a,options:e=[],defaultValue:t=""})=>(e.find(({key:r})=>`${r}`.toLowerCase()===`${a}`.toLowerCase())||{}).value||t,Te=({value:a,options:e=[],defaultValue:t=""})=>(e.find(({key:r})=>`${r}`.toLowerCase()!==`${a}`.toLowerCase())||{}).value||t,ie=({value:a,options:e=[],defaultValue:t=""})=>(e.sort((r,o)=>+r.key-+o.key).find(({key:r})=>+a<+r)||{}).value||t,ne=({value:a,options:e=[],defaultValue:t=""})=>(e.sort((r,o)=>+o.key-+r.key).find(({key:r})=>+a>+r)||{}).value||t,Ae=({value:a,options:e=[],defaultValue:t=""})=>W({value:a,options:e,defaultValue:ie({value:a,options:e,defaultValue:t})}),je=({value:a,options:e=[],defaultValue:t=""})=>W({value:a,options:e,defaultValue:ne({value:a,options:e,defaultValue:t})}),Ie=({value:a,props:e,defaultValue:t="",locale:r="",parserOptions:o})=>{if(!r)return"";let i=N("number",o),{maximumFractionDigits:l}=i,c=T(i,["maximumFractionDigits"]),p=(e==null?void 0:e.number)||{},{maximumFractionDigits:n=l||2}=p,f=T(p,["maximumFractionDigits"]);return new Intl.NumberFormat(r,_(re(_({},c),{maximumFractionDigits:n}),f)).format(+a||+t)},De=({value:a,props:e,defaultValue:t="",locale:r="",parserOptions:o})=>{if(!r)return"";let i=T(N("date",o),[]),l=T((e==null?void 0:e.date)||{},[]);return new Intl.DateTimeFormat(r,_(_({},i),l)).format(+a||+t)},C=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],le=(a="",e="")=>new RegExp(`^${a}s?$`).test(e),Re=a=>C.indexOf(C.find(({key:e})=>le(e,a))),Fe=(a,e)=>C.reduce(([t,r],{key:o,multiplier:i},l)=>{if(le(r,e))return[t,r];if(!r||l===Re(r)+1){let c=Math.round(t/i);if(!r||Math.abs(c)>=1||e!=="auto")return[c,o]}return[t,r]},[a,""]),Ce=({value:a,defaultValue:e="",locale:t="",props:r,parserOptions:o})=>{if(!t)return"";let i=N("ago",o),{format:l,numeric:c}=i,p=T(i,["format","numeric"]),n=(r==null?void 0:r.ago)||{},{format:f=l||"auto",numeric:h=c||"auto"}=n,u=T(n,["format","numeric"]),s=+a||+e,d=Fe(s,f);return new Intl.RelativeTimeFormat(t,_(re(_({},p),{numeric:h}),u)).format(...d)},Ve=a=>typeof a=="string"&&/{{(?:(?!{{|}}).)+}}/.test(a),V=a=>typeof a=="string"?a.replace(/\\(?=:|;|{|})/g,""):a,Me=({value:a,props:e,payload:t,parserOptions:r,locale:o})=>`${a}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,i=>{let l=V(`${i.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),c=t==null?void 0:t[l],[,p=""]=i.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;\s}])*)(?=\s*(?:;|}}$))/i)||[];p=p||(t==null?void 0:t.default)||"";let[,n=""]=i.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(c===void 0&&n!=="ne")return p;let f=!!n,{customModifiers:h}=r||{},u=_(_({},oe),h||{});n=Object.keys(u).includes(n)?n:"eq";let s=u[n],d=(i.match(/[^\s:;{](?:[^;]|\\[;])+[^\s:;}]/gi)||[]).reduce((v,w,m)=>{if(m>0){let k=V(`${w.match(/(?:(?:\\:)|[^:])+/)}`.trim()),L=`${w.match(/(?:(?:\\:)|[^:])+$/)}`.trim();if(k&&k!=="default"&&L)return[...v,{key:k,value:L}]}return v},[]);return!f&&!d.length?c:s({value:c,options:d,props:e,defaultValue:p,locale:o,parserOptions:r})}),se=({value:a,props:e,payload:t,parserOptions:r,locale:o})=>{if(Ve(a)){let i=Me({value:a,payload:t,props:e,parserOptions:r,locale:o});return se({value:i,payload:t,props:e,parserOptions:r,locale:o})}else return V(a)},Ne=a=>({parse:(e,[t,r],o,i)=>((t==null?void 0:t.default)&&e===void 0&&(e=`${t.default}`),e===void 0&&(e=`${i}`),se({value:e,payload:t,props:r,parserOptions:a,locale:o}))}),We=Ne,qe=Object.defineProperty,He=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,G=(a,e,t)=>e in a?qe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,ze=(a,e)=>{for(var t in e||(e={}))ce.call(e,t)&&G(a,t,e[t]);if(R)for(var t of R(e))ue.call(e,t)&&G(a,t,e[t]);return a},Be=(a,e)=>He(a,Ke(e)),Je=(a,e)=>{var t={};for(var r in a)ce.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&R)for(var r of R(a))e.indexOf(r)<0&&ue.call(a,r)&&(t[r]=a[r]);return t},U=a=>{var e=a,{parserOptions:t={}}=e,r=Je(e,["parserOptions"]);return Be(ze({},r),{parser:We(t)})},Xe=class extends Pe{constructor(a){super(a&&U(a)),this.loadConfig=e=>super.configLoader(U(e))}},Ge=Xe;const Ue="English",Qe="Fran\xE7aise",Ye="Espa\xF1ol",Ze="Deutsche",et="Portugues do Brasil",tt="Nederlands",at="T\xFCrk\xE7e";var E={en:Ue,fr:Qe,es:Ye,de:Ze,pt:et,nl:tt,tr:at};const rt={translations:{en:{lang:E},fr:{lang:E},nl:{lang:E},es:{lang:E},pt:{lang:E},tr:{lang:E},de:{lang:E}},loaders:[{locale:"en",key:"main",loader:async()=>(await P(()=>import("./main-2787f61d.js"),[])).default},{locale:"fr",key:"main",loader:async()=>(await P(()=>import("./main-d9cea97f.js"),[])).default},{locale:"nl",key:"main",loader:async()=>(await P(()=>import("./main-67c4206f.js"),[])).default},{locale:"es",key:"main",loader:async()=>(await P(()=>import("./main-ce5dc422.js"),[])).default},{locale:"pt",key:"main",loader:async()=>(await P(()=>import("./main-7b1abc72.js"),[])).default},{locale:"tr",key:"main",loader:async()=>(await P(()=>import("./main-355e2178.js"),[])).default},{locale:"de",key:"main",loader:async()=>(await P(()=>import("./main-81ee6ff4.js"),[])).default}]};function ft(){return!navigator||!navigator.language?"en":navigator.language.startsWith("fr")?"fr":navigator.language.startsWith("nl")?"nl":navigator.language.startsWith("es")?"es":navigator.language.startsWith("pt")?"pt":navigator.language.startsWith("tr")?"tr":navigator.language.startsWith("de")?"de":"en"}const{t:pt,loading:ht,locales:gt,locale:mt,loadTranslations:vt,translations:yt}=new Ge(rt);function ot(a,e,t){const r=/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname)||location.protocol==="file:";if(!e.trackLocalhost&&r)return console.warn("[Plausible] Ignoring event because website is running locally");if(localStorage.getItem("plausible_ignore")==="true")return console.warn('[Plausible] Ignoring event because "plausible_ignore" is set to "true" in localStorage');const i={n:a,u:e.url,d:e.domain,r:e.referrer,w:e.deviceWidth,h:e.hashMode?1:0,p:t&&t.props?JSON.stringify(t.props):void 0},l=new XMLHttpRequest;l.open("POST",`${e.apiHost}/api/event`,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(i)),l.onreadystatechange=()=>{l.readyState===4&&t&&t.callback&&t.callback()}}function it(a){const e=()=>b({hashMode:!1,trackLocalhost:!1,url:location.href,domain:location.hostname,referrer:document.referrer||null,deviceWidth:window.innerWidth,apiHost:"https://plausible.io"},a),t=(l,c,p)=>{ot(l,b(b({},e()),p),c)},r=(l,c)=>{t("pageview",c,l)};return{trackEvent:t,trackPageview:r,enableAutoPageviews:()=>{const l=()=>r(),c=history.pushState;return c&&(history.pushState=function(p,n,f){c.apply(this,[p,n,f]),l()},addEventListener("popstate",l)),a&&a.hashMode&&addEventListener("hashchange",l),r(),function(){c&&(history.pushState=c,removeEventListener("popstate",l)),a&&a.hashMode&&removeEventListener("hashchange",l)}},enableAutoOutboundTracking:(l=document,c={subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]})=>{function p(s){t("Outbound Link: Click",{props:{url:this.href}}),typeof process!="undefined"&&process,setTimeout(()=>{location.href=this.href},150),s.preventDefault()}const n=new Set;function f(s){s instanceof HTMLAnchorElement?s.host!==location.host&&(s.addEventListener("click",p),n.add(s)):"querySelectorAll"in s&&s.querySelectorAll("a").forEach(f)}function h(s){s instanceof HTMLAnchorElement?(s.removeEventListener("click",p),n.delete(s)):"querySelectorAll"in s&&s.querySelectorAll("a").forEach(h)}const u=new MutationObserver(s=>{s.forEach(d=>{d.type==="attributes"?(h(d.target),f(d.target)):d.type==="childList"&&(d.addedNodes.forEach(f),d.removedNodes.forEach(h))})});return l.querySelectorAll("a").forEach(f),u.observe(l,c),function(){n.forEach(d=>{d.removeEventListener("click",p)}),n.clear(),u.disconnect()}}}}const Q=it({domain:"vegeta897.github.io/wordle-peaks",apiHost:"https://plausible.pixelatomy.com"}),bt=()=>de("pageview"),wt=a=>de(a);function de(a){try{a==="pageview"?Q.trackPageview():Q.trackEvent(a)}catch(e){console.warn(`Failed to track ${a}`,e)}}function fe(a){const e=a-1;return e*e*e+1}function kt(a){return-a*(a-2)}function Ot(a){return-.5*(Math.cos(Math.PI*a)-1)}function $t(a,{delay:e=0,duration:t=400,easing:r=be}={}){const o=+getComputedStyle(a).opacity;return{delay:e,duration:t,easing:r,css:i=>`opacity: ${i*o}`}}function Lt(a,{delay:e=0,duration:t=400,easing:r=fe,x:o=0,y:i=0,opacity:l=0}={}){const c=getComputedStyle(a),p=+c.opacity,n=c.transform==="none"?"":c.transform,f=p*(1-l);return{delay:e,duration:t,easing:r,css:(h,u)=>`
			transform: ${n} translate(${(1-h)*o}px, ${(1-h)*i}px);
			opacity: ${p-f*u}`}}function _t(a,{delay:e=0,duration:t=400,easing:r=fe}={}){const o=getComputedStyle(a),i=+o.opacity,l=parseFloat(o.height),c=parseFloat(o.paddingTop),p=parseFloat(o.paddingBottom),n=parseFloat(o.marginTop),f=parseFloat(o.marginBottom),h=parseFloat(o.borderTopWidth),u=parseFloat(o.borderBottomWidth);return{delay:e,duration:t,easing:r,css:s=>`overflow: hidden;opacity: ${Math.min(s*20,1)*i};height: ${s*l}px;padding-top: ${s*c}px;padding-bottom: ${s*p}px;margin-top: ${s*n}px;margin-bottom: ${s*f}px;border-top-width: ${s*h}px;border-bottom-width: ${s*u}px;`}}const nt={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256},theme:{}},lt=()=>{const{subscribe:a,update:e}=x([]);let t=0;const r={},o=n=>n instanceof Object;return{subscribe:a,push:(n,f={})=>{const h=b({target:"default"},o(n)?n:j(b({},f),{msg:n})),u=r[h.target]||{},s=j(b(b(b({},nt),u),h),{theme:b(b({},u.theme),h.theme),id:++t});return e(d=>s.reversed?[...d,s]:[s,...d]),t},pop:n=>{e(f=>{if(!f.length||n===0)return[];if(o(n))return f.filter(u=>n(u));const h=n||Math.max(...f.map(u=>u.id));return f.filter(u=>u.id!==h)})},set:(n,f={})=>{const h=o(n)?b({},n):j(b({},f),{id:n});e(u=>{const s=u.findIndex(d=>d.id===h.id);return s>-1&&(u[s]=b(b({},u[s]),h)),u})},_init:(n="default",f={})=>(r[n]=f,r)}},st=lt();function Pt({gameWon:a,guesses:e,gameMode:t,hardMode:r,day:o}){const i=a?e.length:"X",l=t==="random"?"\u221E ":`#${o} `,c=`${i}/6${r?"*":""}`;return`${q()?"Wordle Peas":"Wordle Peaks"} ${l}${c}`}function Et({guesses:a,answer:e,guessTimes:t}){let r;return t&&(r=pe(t)),"  "+a.map((o,i)=>[...o].map((l,c)=>l===e[c]?q()?"\u{1F7E2}":"\u{1F7E9}":l>e[c]?"\u{1F53D}":"\u{1F53C}").join("")+(t?" "+t[i].padStart(r):"")).join(`
  `)}function xt(a){return st.pop(),navigator.clipboard.writeText(a)}function St(a){a.toBlob(async e=>{let t=[new ClipboardItem({[e.type]:e})];await navigator.clipboard.write(t)})}async function Tt(a,{hash:e,day:t}){const r=a.toDataURL(),o=await(await fetch(r)).blob(),l={files:[new File([o],`wordle-peaks-${e||t}.png`,{type:o.type,lastModified:new Date().getTime()})]};await navigator.share(l)}function At(a,{highContrast:e,boardContent:t,guesses:r,caption:o,guessTimes:i,totalTime:l,showURL:c,hash:p}){if(!a)return;a.width=504+(i?pe(i)*28+6:0),a.style.maxWidth=`min(100%, ${Math.round(a.width/2)}px)`,a.height=r.length*100+60+(c?44:0);const n=a.getContext("2d");n.fillStyle=e?"#161a25":"#312236",n.fillRect(0,0,a.width,a.height);const f=(u,s,d,v,w,m)=>{m=m!=null?m:w,n.beginPath(),n.moveTo(u+w,s),n.arcTo(u+d,s,u+d,s+v,w),n.arcTo(u+d,s+v,u,s+v,m),n.arcTo(u,s+v,u,s,m),n.arcTo(u,s,u+d,s,w),n.closePath(),n.fill()};n.font="50px Arial",n.textAlign="right",n.textBaseline="middle";const h=q();if(t.forEach((u,s)=>{s>=r.length||(u.forEach((d,v)=>{let w=10,m=10;d.distance===0?n.fillStyle=e?"#64ba2e":"#15a850":d.distance>0?(n.fillStyle="#567de8",m=28):(n.fillStyle=e?"#da3f8b":"#e38f2f",w=28);const k=8+v*100,L=8+s*100,A=88;h&&d.distance===0?(n.beginPath(),n.arc(k+A/2,L+A/2,A/2,0,2*Math.PI),n.fill()):f(k,L,A,A,w,m)}),i&&(n.fillStyle="#a7a1a9",n.fillText(i[s],a.width-6,s*100+55)))}),n.textBaseline="alphabetic",n.fillStyle="#cccccc",l&&n.fillText(l,a.width-6,r.length*100+44),n.font="40px Arial",n.textAlign=l?"left":"center",n.fillText(o,l?8:a.width/2,r.length*100+44),c){n.font="40px Arial";let u="wordlepeaks.com";p&&(u+="/#"+p),n.fillStyle="#a7a1a9",n.fillText(u,l?8:a.width/2,r.length*100+92)}}const pe=a=>a.reduce((e,t)=>e===null||e.length<t.length?t:e).length,q=()=>{const a=new Date;return a.getMonth()===3&&a.getDate()===1};export{$t as a,bt as b,fe as c,vt as d,q as e,Lt as f,ft as g,wt as h,pt as i,_t as j,Pt as k,gt as l,xt as m,Et as n,At as o,Tt as p,kt as q,St as r,Ot as s,st as t,E as u};
