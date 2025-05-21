(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Su(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ct={},$r=[],zn=()=>{},d_=()=>!1,vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bu=t=>t.startsWith("onUpdate:"),Rt=Object.assign,Mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},h_=Object.prototype.hasOwnProperty,at=(t,e)=>h_.call(t,e),Ve=Array.isArray,ws=t=>xo(t)==="[object Map]",p_=t=>xo(t)==="[object Set]",Xe=t=>typeof t=="function",Mt=t=>typeof t=="string",ls=t=>typeof t=="symbol",vt=t=>t!==null&&typeof t=="object",_p=t=>(vt(t)||Xe(t))&&Xe(t.then)&&Xe(t.catch),m_=Object.prototype.toString,xo=t=>m_.call(t),g_=t=>xo(t).slice(8,-1),__=t=>xo(t)==="[object Object]",Eu=t=>Mt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rs=Su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},v_=/-(\w)/g,hn=yo(t=>t.replace(v_,(e,n)=>n?n.toUpperCase():"")),x_=/\B([A-Z])/g,br=yo(t=>t.replace(x_,"-$1").toLowerCase()),So=yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),qo=yo(t=>t?`on${So(t)}`:""),Ii=(t,e)=>!Object.is(t,e),$o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},y_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},S_=t=>{const e=Mt(t)?Number(t):NaN;return isNaN(e)?t:e};let bf;const bo=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tu(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Mt(i)?T_(i):Tu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mt(t)||vt(t))return t}const b_=/;(?![^(]*\))/g,M_=/:([^]+)/,E_=/\/\*[^]*?\*\//g;function T_(t){const e={};return t.replace(E_,"").split(b_).forEach(n=>{if(n){const i=n.split(M_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Au(t){let e="";if(Mt(t))e=t;else if(Ve(t))for(let n=0;n<t.length;n++){const i=Au(t[n]);i&&(e+=i+" ")}else if(vt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const A_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",w_=Su(A_);function xp(t){return!!t||t===""}/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class R_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){this._on>0&&--this._on===0&&(jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function C_(){return jt}let ft;const jo=new WeakSet;class yp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jo.has(this)&&(jo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mf(this),Mp(this);const e=ft,n=Sn;ft=this,Sn=!0;try{return this.fn()}finally{Ep(this),ft=e,Sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cu(e);this.deps=this.depsTail=void 0,Mf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yl(this)&&this.run()}get dirty(){return Yl(this)}}let Sp=0,Cs,Ps;function bp(t,e=!1){if(t.flags|=8,e){t.next=Ps,Ps=t;return}t.next=Cs,Cs=t}function wu(){Sp++}function Ru(){if(--Sp>0)return;if(Ps){let e=Ps;for(Ps=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Cs;){let e=Cs;for(Cs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Mp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ep(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Cu(i),P_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Yl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zs)||(t.globalVersion=zs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Yl(t))))return;t.flags|=2;const e=t.dep,n=ft,i=Sn;ft=t,Sn=!0;try{Mp(t);const r=t.fn(t._value);(e.version===0||Ii(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=n,Sn=i,Ep(t),t.flags&=-3}}function Cu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Cu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function P_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Sn=!0;const Ap=[];function fi(){Ap.push(Sn),Sn=!1}function di(){const t=Ap.pop();Sn=t===void 0?!0:t}function Mf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ft;ft=void 0;try{e()}finally{ft=n}}}let zs=0;class L_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ft||!Sn||ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ft)n=this.activeLink=new L_(ft,this),ft.deps?(n.prevDep=ft.depsTail,ft.depsTail.nextDep=n,ft.depsTail=n):ft.deps=ft.depsTail=n,wp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ft.depsTail,n.nextDep=void 0,ft.depsTail.nextDep=n,ft.depsTail=n,ft.deps===n&&(ft.deps=i)}return n}trigger(e){this.version++,zs++,this.notify(e)}notify(e){wu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ru()}}}function wp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)wp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Kl=new WeakMap,hr=Symbol(""),Zl=Symbol(""),ks=Symbol("");function Ft(t,e,n){if(Sn&&ft){let i=Kl.get(t);i||Kl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Pu),r.map=i,r.key=n),r.track()}}function ii(t,e,n,i,r,s){const a=Kl.get(t);if(!a){zs++;return}const o=l=>{l&&l.trigger()};if(wu(),e==="clear")a.forEach(o);else{const l=Ve(t),c=l&&Eu(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===ks||!ls(d)&&d>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(ks)),e){case"add":l?c&&o(a.get("length")):(o(a.get(hr)),ws(t)&&o(a.get(Zl)));break;case"delete":l||(o(a.get(hr)),ws(t)&&o(a.get(Zl)));break;case"set":ws(t)&&o(a.get(hr));break}}Ru()}function Er(t){const e=tt(t);return e===t?e:(Ft(e,"iterate",ks),bn(t)?e:e.map(Vt))}function Lu(t){return Ft(t=tt(t),"iterate",ks),t}const D_={__proto__:null,[Symbol.iterator](){return Yo(this,Symbol.iterator,Vt)},concat(...t){return Er(this).concat(...t.map(e=>Ve(e)?Er(e):e))},entries(){return Yo(this,"entries",t=>(t[1]=Vt(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Vt),arguments)},find(t,e){return $n(this,"find",t,e,Vt,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Vt,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ko(this,"includes",t)},indexOf(...t){return Ko(this,"indexOf",t)},join(t){return Er(this).join(t)},lastIndexOf(...t){return Ko(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return ms(this,"pop")},push(...t){return ms(this,"push",t)},reduce(t,...e){return Ef(this,"reduce",t,e)},reduceRight(t,...e){return Ef(this,"reduceRight",t,e)},shift(){return ms(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return ms(this,"splice",t)},toReversed(){return Er(this).toReversed()},toSorted(t){return Er(this).toSorted(t)},toSpliced(...t){return Er(this).toSpliced(...t)},unshift(...t){return ms(this,"unshift",t)},values(){return Yo(this,"values",Vt)}};function Yo(t,e,n){const i=Lu(t),r=i[e]();return i!==t&&!bn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const I_=Array.prototype;function $n(t,e,n,i,r,s){const a=Lu(t),o=a!==t&&!bn(t),l=a[e];if(l!==I_[e]){const f=l.apply(t,s);return o?Vt(f):f}let c=n;a!==t&&(o?c=function(f,d){return n.call(this,Vt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Ef(t,e,n,i){const r=Lu(t);let s=n;return r!==t&&(bn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,Vt(o),l,t)}),r[e](s,...i)}function Ko(t,e,n){const i=tt(t);Ft(i,"iterate",ks);const r=i[e](...n);return(r===-1||r===!1)&&Uu(n[0])?(n[0]=tt(n[0]),i[e](...n)):r}function ms(t,e,n=[]){fi(),wu();const i=tt(t)[e].apply(t,n);return Ru(),di(),i}const U_=Su("__proto__,__v_isRef,__isVue"),Rp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ls));function N_(t){ls(t)||(t=String(t));const e=tt(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class Cp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?X_:Ip:s?Dp:Lp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ve(e);if(!r){let l;if(a&&(l=D_[n]))return l;if(n==="hasOwnProperty")return N_}const o=Reflect.get(e,n,Ot(e)?e:i);return(ls(n)?Rp.has(n):U_(n))||(r||Ft(e,"get",n),s)?o:Ot(o)?a&&Eu(n)?o:o.value:vt(o)?r?Np(o):Un(o):o}}class Pp extends Cp{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=mr(s);if(!bn(i)&&!mr(i)&&(s=tt(s),i=tt(i)),!Ve(e)&&Ot(s)&&!Ot(i))return l?!1:(s.value=i,!0)}const a=Ve(e)&&Eu(n)?Number(n)<e.length:at(e,n),o=Reflect.set(e,n,i,Ot(e)?e:r);return e===tt(r)&&(a?Ii(i,s)&&ii(e,"set",n,i):ii(e,"add",n,i)),o}deleteProperty(e,n){const i=at(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ii(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!ls(n)||!Rp.has(n))&&Ft(e,"has",n),i}ownKeys(e){return Ft(e,"iterate",Ve(e)?"length":hr),Reflect.ownKeys(e)}}class F_ extends Cp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const O_=new Pp,B_=new F_,z_=new Pp(!0);const Jl=t=>t,fa=t=>Reflect.getPrototypeOf(t);function k_(t,e,n){return function(...i){const r=this.__v_raw,s=tt(r),a=ws(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?Jl:e?Ql:Vt;return!e&&Ft(s,"iterate",l?Zl:hr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function da(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function H_(t,e){const n={get(r){const s=this.__v_raw,a=tt(s),o=tt(r);t||(Ii(r,o)&&Ft(a,"get",r),Ft(a,"get",o));const{has:l}=fa(a),c=e?Jl:t?Ql:Vt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ft(tt(r),"iterate",hr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=tt(s),o=tt(r);return t||(Ii(r,o)&&Ft(a,"has",r),Ft(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=tt(o),c=e?Jl:t?Ql:Vt;return!t&&Ft(l,"iterate",hr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Rt(n,t?{add:da("add"),set:da("set"),delete:da("delete"),clear:da("clear")}:{add(r){!e&&!bn(r)&&!mr(r)&&(r=tt(r));const s=tt(this);return fa(s).has.call(s,r)||(s.add(r),ii(s,"add",r,r)),this},set(r,s){!e&&!bn(s)&&!mr(s)&&(s=tt(s));const a=tt(this),{has:o,get:l}=fa(a);let c=o.call(a,r);c||(r=tt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Ii(s,u)&&ii(a,"set",r,s):ii(a,"add",r,s),this},delete(r){const s=tt(this),{has:a,get:o}=fa(s);let l=a.call(s,r);l||(r=tt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&ii(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,a=r.clear();return s&&ii(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=k_(r,t,e)}),n}function Du(t,e){const n=H_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(at(n,r)&&r in i?n:i,r,s)}const V_={get:Du(!1,!1)},G_={get:Du(!1,!0)},W_={get:Du(!0,!1)};const Lp=new WeakMap,Dp=new WeakMap,Ip=new WeakMap,X_=new WeakMap;function q_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $_(t){return t.__v_skip||!Object.isExtensible(t)?0:q_(g_(t))}function Un(t){return mr(t)?t:Iu(t,!1,O_,V_,Lp)}function Up(t){return Iu(t,!1,z_,G_,Dp)}function Np(t){return Iu(t,!0,B_,W_,Ip)}function Iu(t,e,n,i,r){if(!vt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=$_(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function Ls(t){return mr(t)?Ls(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function bn(t){return!!(t&&t.__v_isShallow)}function Uu(t){return t?!!t.__v_raw:!1}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function Nu(t){return!at(t,"__v_skip")&&Object.isExtensible(t)&&vp(t,"__v_skip",!0),t}const Vt=t=>vt(t)?Un(t):t,Ql=t=>vt(t)?Np(t):t;function Ot(t){return t?t.__v_isRef===!0:!1}function wt(t){return Fp(t,!1)}function j_(t){return Fp(t,!0)}function Fp(t,e){return Ot(t)?t:new Y_(t,e)}class Y_{constructor(e,n){this.dep=new Pu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:tt(e),this._value=n?e:Vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||bn(e)||mr(e);e=i?e:tt(e),Ii(e,n)&&(this._rawValue=e,this._value=i?e:Vt(e),this.dep.trigger())}}function pr(t){return Ot(t)?t.value:t}const K_={get:(t,e,n)=>e==="__v_raw"?t:pr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ot(r)&&!Ot(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Op(t){return Ls(t)?t:new Proxy(t,K_)}class Z_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Pu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return bp(this,!0),!0}get value(){const e=this.dep.track();return Tp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function J_(t,e,n=!1){let i,r;return Xe(t)?i=t:(i=t.get,r=t.set),new Z_(i,r,n)}const ha={},Qa=new WeakMap;let nr;function Q_(t,e=!1,n=nr){if(n){let i=Qa.get(n);i||Qa.set(n,i=[]),i.push(t)}}function ev(t,e,n=ct){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=x=>r?x:bn(x)||r===!1||r===0?ri(x,1):ri(x);let u,f,d,h,g=!1,_=!1;if(Ot(t)?(f=()=>t.value,g=bn(t)):Ls(t)?(f=()=>c(t),g=!0):Ve(t)?(_=!0,g=t.some(x=>Ls(x)||bn(x)),f=()=>t.map(x=>{if(Ot(x))return x.value;if(Ls(x))return c(x);if(Xe(x))return l?l(x,2):x()})):Xe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){fi();try{d()}finally{di()}}const x=nr;nr=u;try{return l?l(t,3,[h]):t(h)}finally{nr=x}}:f=zn,e&&r){const x=f,w=r===!0?1/0:r;f=()=>ri(x(),w)}const m=C_(),p=()=>{u.stop(),m&&m.active&&Mu(m.effects,u)};if(s&&e){const x=e;e=(...w)=>{x(...w),p()}}let S=_?new Array(t.length).fill(ha):ha;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const w=u.run();if(r||g||(_?w.some((L,P)=>Ii(L,S[P])):Ii(w,S))){d&&d();const L=nr;nr=u;try{const P=[w,S===ha?void 0:_&&S[0]===ha?[]:S,h];l?l(e,3,P):e(...P),S=w}finally{nr=L}}}else u.run()};return o&&o(E),u=new yp(f),u.scheduler=a?()=>a(E,!1):E,h=x=>Q_(x,!1,u),d=u.onStop=()=>{const x=Qa.get(u);if(x){if(l)l(x,4);else for(const w of x)w();Qa.delete(u)}},e?i?E(!0):S=u.run():a?a(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ri(t,e=1/0,n){if(e<=0||!vt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ot(t))ri(t.value,e,n);else if(Ve(t))for(let i=0;i<t.length;i++)ri(t[i],e,n);else if(p_(t)||ws(t))t.forEach(i=>{ri(i,e,n)});else if(__(t)){for(const i in t)ri(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ri(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ta(t,e,n,i){try{return i?t(...i):t()}catch(r){Mo(r,e,n)}}function Tn(t,e,n,i){if(Xe(t)){const r=ta(t,e,n,i);return r&&_p(r)&&r.catch(s=>{Mo(s,e,n)}),r}if(Ve(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Tn(t[s],e,n,i));return r}}function Mo(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ct;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){fi(),ta(s,null,10,[t,l,c]),di();return}}tv(t,n,r,i,a)}function tv(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Gt=[];let Cn=-1;const jr=[];let wi=null,Gr=0;const Bp=Promise.resolve();let eo=null;function to(t){const e=eo||Bp;return t?e.then(this?t.bind(this):t):e}function nv(t){let e=Cn+1,n=Gt.length;for(;e<n;){const i=e+n>>>1,r=Gt[i],s=Hs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Fu(t){if(!(t.flags&1)){const e=Hs(t),n=Gt[Gt.length-1];!n||!(t.flags&2)&&e>=Hs(n)?Gt.push(t):Gt.splice(nv(e),0,t),t.flags|=1,zp()}}function zp(){eo||(eo=Bp.then(Hp))}function iv(t){Ve(t)?jr.push(...t):wi&&t.id===-1?wi.splice(Gr+1,0,t):t.flags&1||(jr.push(t),t.flags|=1),zp()}function Tf(t,e,n=Cn+1){for(;n<Gt.length;n++){const i=Gt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Gt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function kp(t){if(jr.length){const e=[...new Set(jr)].sort((n,i)=>Hs(n)-Hs(i));if(jr.length=0,wi){wi.push(...e);return}for(wi=e,Gr=0;Gr<wi.length;Gr++){const n=wi[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wi=null,Gr=0}}const Hs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hp(t){try{for(Cn=0;Cn<Gt.length;Cn++){const e=Gt[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ta(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<Gt.length;Cn++){const e=Gt[Cn];e&&(e.flags&=-2)}Cn=-1,Gt.length=0,kp(),eo=null,(Gt.length||jr.length)&&Hp()}}let Yt=null,Vp=null;function no(t){const e=Yt;return Yt=t,Vp=t&&t.type.__scopeId||null,e}function ir(t,e=Yt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ff(-1);const s=no(e);let a;try{a=t(...r)}finally{no(s),i._d&&Ff(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function rv(t,e){if(Yt===null)return t;const n=Co(Yt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=ct]=e[r];s&&(Xe(s)&&(s={mounted:s,updated:s}),s.deep&&ri(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function qi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(fi(),Tn(l,n,8,[t.el,o,t,e]),di())}}const sv=Symbol("_vte"),Gp=t=>t.__isTeleport,Ri=Symbol("_leaveCb"),pa=Symbol("_enterCb");function av(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gr(()=>{t.isMounted=!0}),Fi(()=>{t.isUnmounting=!0}),t}const on=[Function,Array],Wp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},Xp=t=>{const e=t.subTree;return e.component?Xp(e.component):e},ov={name:"BaseTransition",props:Wp,setup(t,{slots:e}){const n=Xn(),i=av();return()=>{const r=e.default&&jp(e.default(),!0);if(!r||!r.length)return;const s=qp(r),a=tt(t),{mode:o}=a;if(i.isLeaving)return Zo(s);const l=Af(s);if(!l)return Zo(s);let c=ec(l,a,i,n,f=>c=f);l.type!==Wt&&Vs(l,c);let u=n.subTree&&Af(n.subTree);if(u&&u.type!==Wt&&!ar(l,u)&&Xp(n).type!==Wt){let f=ec(u,a,i,n);if(Vs(u,f),o==="out-in"&&l.type!==Wt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Zo(s);o==="in-out"&&l.type!==Wt?f.delayLeave=(d,h,g)=>{const _=$p(i,u);_[String(u.key)]=u,d[Ri]=()=>{h(),d[Ri]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function qp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Wt){e=n;break}}return e}const lv=ov;function $p(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ec(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:S,onAppearCancelled:E}=e,x=String(t.key),w=$p(n,t),L=(A,M)=>{A&&Tn(A,i,9,M)},P=(A,M)=>{const D=M[1];L(A,M),Ve(A)?A.every(O=>O.length<=1)&&D():A.length<=1&&D()},U={mode:a,persisted:o,beforeEnter(A){let M=l;if(!n.isMounted)if(s)M=m||l;else return;A[Ri]&&A[Ri](!0);const D=w[x];D&&ar(t,D)&&D.el[Ri]&&D.el[Ri](),L(M,[A])},enter(A){let M=c,D=u,O=f;if(!n.isMounted)if(s)M=p||c,D=S||u,O=E||f;else return;let H=!1;const z=A[pa]=Q=>{H||(H=!0,Q?L(O,[A]):L(D,[A]),U.delayedLeave&&U.delayedLeave(),A[pa]=void 0)};M?P(M,[A,z]):z()},leave(A,M){const D=String(t.key);if(A[pa]&&A[pa](!0),n.isUnmounting)return M();L(d,[A]);let O=!1;const H=A[Ri]=z=>{O||(O=!0,M(),z?L(_,[A]):L(g,[A]),A[Ri]=void 0,w[D]===t&&delete w[D])};w[D]=t,h?P(h,[A,H]):H()},clone(A){const M=ec(A,e,n,i,r);return r&&r(M),M}};return U}function Zo(t){if(To(t))return t=Oi(t),t.children=null,t}function Af(t){if(!To(t))return Gp(t.type)&&t.children?qp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Xe(n.default))return n.default()}}function Vs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Vs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jp(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Ln?(a.patchFlag&128&&r++,i=i.concat(jp(a.children,e,o))):(e||a.type!==Wt)&&i.push(o!=null?Oi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Eo(t,e){return Xe(t)?Rt({name:t.name},e,{setup:t}):t}function Yp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function io(t,e,n,i,r=!1){if(Ve(t)){t.forEach((g,_)=>io(g,e&&(Ve(e)?e[_]:e),n,i,r));return}if(Ds(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&io(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Co(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===ct?o.refs={}:o.refs,f=o.setupState,d=tt(f),h=f===ct?()=>!1:g=>at(d,g);if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,h(c)&&(f[c]=null)):Ot(c)&&(c.value=null)),Xe(l))ta(l,o,12,[a,u]);else{const g=Mt(l),_=Ot(l);if(g||_){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;r?Ve(p)&&Mu(p,s):Ve(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=a,h(l)&&(f[l]=a)):_&&(l.value=a,t.k&&(u[t.k]=a))};a?(m.id=-1,tn(m,n)):m()}}}bo().requestIdleCallback;bo().cancelIdleCallback;const Ds=t=>!!t.type.__asyncLoader,To=t=>t.type.__isKeepAlive;function cv(t,e){Kp(t,"a",e)}function uv(t,e){Kp(t,"da",e)}function Kp(t,e,n=Pt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ao(e,i,n),n){let r=n.parent;for(;r&&r.parent;)To(r.parent.vnode)&&fv(i,e,n,r),r=r.parent}}function fv(t,e,n,i){const r=Ao(e,t,i,!0);Ou(()=>{Mu(i[e],r)},n)}function Ao(t,e,n=Pt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{fi();const o=na(n),l=Tn(e,n,t,a);return o(),di(),l});return i?r.unshift(s):r.push(s),s}}const mi=t=>(e,n=Pt)=>{(!Xs||t==="sp")&&Ao(t,(...i)=>e(...i),n)},dv=mi("bm"),gr=mi("m"),hv=mi("bu"),pv=mi("u"),Fi=mi("bum"),Ou=mi("um"),mv=mi("sp"),gv=mi("rtg"),_v=mi("rtc");function vv(t,e=Pt){Ao("ec",t,e)}const xv="components";function tc(t,e){return Sv(xv,t,!0,e)||t}const yv=Symbol.for("v-ndc");function Sv(t,e,n=!0,i=!1){const r=Yt||Pt;if(r){const s=r.type;{const o=c0(s,!1);if(o&&(o===e||o===hn(e)||o===So(hn(e))))return s}const a=wf(r[t]||s[t],e)||wf(r.appContext[t],e);return!a&&i?s:a}}function wf(t,e){return t&&(t[e]||t[hn(e)]||t[So(hn(e))])}const nc=t=>t?_m(t)?Co(t):nc(t.parent):null,Is=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nc(t.parent),$root:t=>nc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Jp(t),$forceUpdate:t=>t.f||(t.f=()=>{Fu(t.update)}),$nextTick:t=>t.n||(t.n=to.bind(t.proxy)),$watch:t=>Vv.bind(t)}),Jo=(t,e)=>t!==ct&&!t.__isScriptSetup&&at(t,e),bv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Jo(i,e))return a[e]=1,i[e];if(r!==ct&&at(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&at(c,e))return a[e]=3,s[e];if(n!==ct&&at(n,e))return a[e]=4,n[e];ic&&(a[e]=0)}}const u=Is[e];let f,d;if(u)return e==="$attrs"&&Ft(t.attrs,"get",""),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==ct&&at(n,e))return a[e]=4,n[e];if(d=l.config.globalProperties,at(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Jo(r,e)?(r[e]=n,!0):i!==ct&&at(i,e)?(i[e]=n,!0):at(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==ct&&at(t,a)||Jo(e,a)||(o=s[0])&&at(o,a)||at(i,a)||at(Is,a)||at(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:at(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rf(t){return Ve(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ic=!0;function Mv(t){const e=Jp(t),n=t.proxy,i=t.ctx;ic=!1,e.beforeCreate&&Cf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:E,unmounted:x,render:w,renderTracked:L,renderTriggered:P,errorCaptured:U,serverPrefetch:A,expose:M,inheritAttrs:D,components:O,directives:H,filters:z}=e;if(c&&Ev(c,i,null),a)for(const ee in a){const G=a[ee];Xe(G)&&(i[ee]=G.bind(n))}if(r){const ee=r.call(n,n);vt(ee)&&(t.data=Un(ee))}if(ic=!0,s)for(const ee in s){const G=s[ee],ge=Xe(G)?G.bind(n,n):Xe(G.get)?G.get.bind(n,n):zn,ye=!Xe(G)&&Xe(G.set)?G.set.bind(n):zn,Re=Se({get:ge,set:ye});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Ue=>Re.value=Ue})}if(o)for(const ee in o)Zp(o[ee],i,n,ee);if(l){const ee=Xe(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(G=>{Kr(G,ee[G])})}u&&Cf(u,t,"c");function Z(ee,G){Ve(G)?G.forEach(ge=>ee(ge.bind(n))):G&&ee(G.bind(n))}if(Z(dv,f),Z(gr,d),Z(hv,h),Z(pv,g),Z(cv,_),Z(uv,m),Z(vv,U),Z(_v,L),Z(gv,P),Z(Fi,S),Z(Ou,x),Z(mv,A),Ve(M))if(M.length){const ee=t.exposed||(t.exposed={});M.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:ge=>n[G]=ge})})}else t.exposed||(t.exposed={});w&&t.render===zn&&(t.render=w),D!=null&&(t.inheritAttrs=D),O&&(t.components=O),H&&(t.directives=H),A&&Yp(t)}function Ev(t,e,n=zn){Ve(t)&&(t=rc(t));for(const i in t){const r=t[i];let s;vt(r)?"default"in r?s=dn(r.from||i,r.default,!0):s=dn(r.from||i):s=dn(r),Ot(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Cf(t,e,n){Tn(Ve(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zp(t,e,n,i){let r=i.includes(".")?fm(n,i):()=>n[i];if(Mt(t)){const s=e[t];Xe(s)&&bt(r,s)}else if(Xe(t))bt(r,t.bind(n));else if(vt(t))if(Ve(t))t.forEach(s=>Zp(s,e,n,i));else{const s=Xe(t.handler)?t.handler.bind(n):e[t.handler];Xe(s)&&bt(r,s,t)}}function Jp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ro(l,c,a,!0)),ro(l,e,a)),vt(e)&&s.set(e,l),l}function ro(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ro(t,s,n,!0),r&&r.forEach(a=>ro(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=Tv[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const Tv={data:Pf,props:Lf,emits:Lf,methods:Es,computed:Es,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Es,directives:Es,watch:wv,provide:Pf,inject:Av};function Pf(t,e){return e?t?function(){return Rt(Xe(t)?t.call(this,this):t,Xe(e)?e.call(this,this):e)}:e:t}function Av(t,e){return Es(rc(t),rc(e))}function rc(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Es(t,e){return t?Rt(Object.create(null),t,e):e}function Lf(t,e){return t?Ve(t)&&Ve(e)?[...new Set([...t,...e])]:Rt(Object.create(null),Rf(t),Rf(e??{})):e}function wv(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const i in e)n[i]=kt(t[i],e[i]);return n}function Qp(){return{app:null,config:{isNativeTag:d_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rv=0;function Cv(t,e){return function(i,r=null){Xe(i)||(i=Rt({},i)),r!=null&&!vt(r)&&(r=null);const s=Qp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Rv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:f0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Xe(u.install)?(a.add(u),u.install(c,...f)):Xe(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||xt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Co(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Tn(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Yr;Yr=c;try{return u()}finally{Yr=f}}};return c}}let Yr=null;function Kr(t,e){if(Pt){let n=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===n&&(n=Pt.provides=Object.create(i)),n[t]=e}}function dn(t,e,n=!1){const i=Pt||Yt;if(i||Yr){const r=Yr?Yr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Xe(e)?e.call(i&&i.proxy):e}}const em={},tm=()=>Object.create(em),nm=t=>Object.getPrototypeOf(t)===em;function Pv(t,e,n,i=!1){const r={},s=tm();t.propsDefaults=Object.create(null),im(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Up(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Lv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=tt(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(wo(t.emitsOptions,d))continue;const h=e[d];if(l)if(at(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=hn(d);r[g]=sc(l,o,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{im(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!at(e,f)&&((u=br(f))===f||!at(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=sc(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!at(e,f))&&(delete s[f],c=!0)}c&&ii(t.attrs,"set","")}function im(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Rs(l))continue;const c=e[l];let u;r&&at(r,u=hn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:wo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=tt(n),c=o||ct;for(let u=0;u<s.length;u++){const f=s[u];n[f]=sc(r,l,f,c[f],t,!at(c,f))}}return a}function sc(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=at(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=na(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===br(n))&&(i=!0))}return i}const Dv=new WeakMap;function rm(t,e,n=!1){const i=n?Dv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!Xe(t)){const u=f=>{l=!0;const[d,h]=rm(f,e,!0);Rt(a,d),h&&o.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return vt(t)&&i.set(t,$r),$r;if(Ve(s))for(let u=0;u<s.length;u++){const f=hn(s[u]);Df(f)&&(a[f]=ct)}else if(s)for(const u in s){const f=hn(u);if(Df(f)){const d=s[u],h=a[f]=Ve(d)||Xe(d)?{type:d}:Rt({},d),g=h.type;let _=!1,m=!0;if(Ve(g))for(let p=0;p<g.length;++p){const S=g[p],E=Xe(S)&&S.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Xe(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||at(h,"default"))&&o.push(f)}}const c=[a,o];return vt(t)&&i.set(t,c),c}function Df(t){return t[0]!=="$"&&!Rs(t)}const Bu=t=>t[0]==="_"||t==="$stable",zu=t=>Ve(t)?t.map(Dn):[Dn(t)],Iv=(t,e,n)=>{if(e._n)return e;const i=ir((...r)=>zu(e(...r)),n);return i._c=!1,i},sm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Bu(r))continue;const s=t[r];if(Xe(s))e[r]=Iv(r,s,i);else if(s!=null){const a=zu(s);e[r]=()=>a}}},am=(t,e)=>{const n=zu(e);t.slots.default=()=>n},om=(t,e,n)=>{for(const i in e)(n||!Bu(i))&&(t[i]=e[i])},Uv=(t,e,n)=>{const i=t.slots=tm();if(t.vnode.shapeFlag&32){const r=e._;r?(om(i,e,n),n&&vp(i,"_",r,!0)):sm(e,i)}else e&&am(t,e)},Nv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=ct;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:om(r,e,n):(s=!e.$stable,sm(e,r)),a=e}else e&&(am(t,e),a={default:1});if(s)for(const o in r)!Bu(o)&&a[o]==null&&delete r[o]},tn=Yv;function Fv(t){return Ov(t)}function Ov(t,e){const n=bo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=zn,insertStaticContent:g}=t,_=(R,C,y,ie=null,K=null,q=null,te=void 0,ce=null,J=!!C.dynamicChildren)=>{if(R===C)return;R&&!ar(R,C)&&(ie=N(R),Ue(R,K,q,!0),R=null),C.patchFlag===-2&&(J=!1,C.dynamicChildren=null);const{type:b,ref:v,shapeFlag:I}=C;switch(b){case Ro:m(R,C,y,ie);break;case Wt:p(R,C,y,ie);break;case el:R==null&&S(C,y,ie,te);break;case Ln:O(R,C,y,ie,K,q,te,ce,J);break;default:I&1?w(R,C,y,ie,K,q,te,ce,J):I&6?H(R,C,y,ie,K,q,te,ce,J):(I&64||I&128)&&b.process(R,C,y,ie,K,q,te,ce,J,le)}v!=null&&K&&io(v,R&&R.ref,q,C||R,!C)},m=(R,C,y,ie)=>{if(R==null)i(C.el=o(C.children),y,ie);else{const K=C.el=R.el;C.children!==R.children&&c(K,C.children)}},p=(R,C,y,ie)=>{R==null?i(C.el=l(C.children||""),y,ie):C.el=R.el},S=(R,C,y,ie)=>{[R.el,R.anchor]=g(R.children,C,y,ie,R.el,R.anchor)},E=({el:R,anchor:C},y,ie)=>{let K;for(;R&&R!==C;)K=d(R),i(R,y,ie),R=K;i(C,y,ie)},x=({el:R,anchor:C})=>{let y;for(;R&&R!==C;)y=d(R),r(R),R=y;r(C)},w=(R,C,y,ie,K,q,te,ce,J)=>{C.type==="svg"?te="svg":C.type==="math"&&(te="mathml"),R==null?L(C,y,ie,K,q,te,ce,J):A(R,C,K,q,te,ce,J)},L=(R,C,y,ie,K,q,te,ce)=>{let J,b;const{props:v,shapeFlag:I,transition:V,dirs:$}=R;if(J=R.el=a(R.type,q,v&&v.is,v),I&8?u(J,R.children):I&16&&U(R.children,J,null,ie,K,Qo(R,q),te,ce),$&&qi(R,null,ie,"created"),P(J,R,R.scopeId,te,ie),v){for(const me in v)me!=="value"&&!Rs(me)&&s(J,me,null,v[me],q,ie);"value"in v&&s(J,"value",null,v.value,q),(b=v.onVnodeBeforeMount)&&Rn(b,ie,R)}$&&qi(R,null,ie,"beforeMount");const W=Bv(K,V);W&&V.beforeEnter(J),i(J,C,y),((b=v&&v.onVnodeMounted)||W||$)&&tn(()=>{b&&Rn(b,ie,R),W&&V.enter(J),$&&qi(R,null,ie,"mounted")},K)},P=(R,C,y,ie,K)=>{if(y&&h(R,y),ie)for(let q=0;q<ie.length;q++)h(R,ie[q]);if(K){let q=K.subTree;if(C===q||hm(q.type)&&(q.ssContent===C||q.ssFallback===C)){const te=K.vnode;P(R,te,te.scopeId,te.slotScopeIds,K.parent)}}},U=(R,C,y,ie,K,q,te,ce,J=0)=>{for(let b=J;b<R.length;b++){const v=R[b]=ce?Ci(R[b]):Dn(R[b]);_(null,v,C,y,ie,K,q,te,ce)}},A=(R,C,y,ie,K,q,te)=>{const ce=C.el=R.el;let{patchFlag:J,dynamicChildren:b,dirs:v}=C;J|=R.patchFlag&16;const I=R.props||ct,V=C.props||ct;let $;if(y&&$i(y,!1),($=V.onVnodeBeforeUpdate)&&Rn($,y,C,R),v&&qi(C,R,y,"beforeUpdate"),y&&$i(y,!0),(I.innerHTML&&V.innerHTML==null||I.textContent&&V.textContent==null)&&u(ce,""),b?M(R.dynamicChildren,b,ce,y,ie,Qo(C,K),q):te||G(R,C,ce,null,y,ie,Qo(C,K),q,!1),J>0){if(J&16)D(ce,I,V,y,K);else if(J&2&&I.class!==V.class&&s(ce,"class",null,V.class,K),J&4&&s(ce,"style",I.style,V.style,K),J&8){const W=C.dynamicProps;for(let me=0;me<W.length;me++){const ue=W[me],Ce=I[ue],Le=V[ue];(Le!==Ce||ue==="value")&&s(ce,ue,Ce,Le,K,y)}}J&1&&R.children!==C.children&&u(ce,C.children)}else!te&&b==null&&D(ce,I,V,y,K);(($=V.onVnodeUpdated)||v)&&tn(()=>{$&&Rn($,y,C,R),v&&qi(C,R,y,"updated")},ie)},M=(R,C,y,ie,K,q,te)=>{for(let ce=0;ce<C.length;ce++){const J=R[ce],b=C[ce],v=J.el&&(J.type===Ln||!ar(J,b)||J.shapeFlag&70)?f(J.el):y;_(J,b,v,null,ie,K,q,te,!0)}},D=(R,C,y,ie,K)=>{if(C!==y){if(C!==ct)for(const q in C)!Rs(q)&&!(q in y)&&s(R,q,C[q],null,K,ie);for(const q in y){if(Rs(q))continue;const te=y[q],ce=C[q];te!==ce&&q!=="value"&&s(R,q,ce,te,K,ie)}"value"in y&&s(R,"value",C.value,y.value,K)}},O=(R,C,y,ie,K,q,te,ce,J)=>{const b=C.el=R?R.el:o(""),v=C.anchor=R?R.anchor:o("");let{patchFlag:I,dynamicChildren:V,slotScopeIds:$}=C;$&&(ce=ce?ce.concat($):$),R==null?(i(b,y,ie),i(v,y,ie),U(C.children||[],y,v,K,q,te,ce,J)):I>0&&I&64&&V&&R.dynamicChildren?(M(R.dynamicChildren,V,y,K,q,te,ce),(C.key!=null||K&&C===K.subTree)&&lm(R,C,!0)):G(R,C,y,v,K,q,te,ce,J)},H=(R,C,y,ie,K,q,te,ce,J)=>{C.slotScopeIds=ce,R==null?C.shapeFlag&512?K.ctx.activate(C,y,ie,te,J):z(C,y,ie,K,q,te,J):Q(R,C,J)},z=(R,C,y,ie,K,q,te)=>{const ce=R.component=r0(R,ie,K);if(To(R)&&(ce.ctx.renderer=le),s0(ce,!1,te),ce.asyncDep){if(K&&K.registerDep(ce,Z,te),!R.el){const J=ce.subTree=xt(Wt);p(null,J,C,y)}}else Z(ce,R,C,y,K,q,te)},Q=(R,C,y)=>{const ie=C.component=R.component;if($v(R,C,y))if(ie.asyncDep&&!ie.asyncResolved){ee(ie,C,y);return}else ie.next=C,ie.update();else C.el=R.el,ie.vnode=C},Z=(R,C,y,ie,K,q,te)=>{const ce=()=>{if(R.isMounted){let{next:I,bu:V,u:$,parent:W,vnode:me}=R;{const xe=cm(R);if(xe){I&&(I.el=me.el,ee(R,I,te)),xe.asyncDep.then(()=>{R.isUnmounted||ce()});return}}let ue=I,Ce;$i(R,!1),I?(I.el=me.el,ee(R,I,te)):I=me,V&&$o(V),(Ce=I.props&&I.props.onVnodeBeforeUpdate)&&Rn(Ce,W,I,me),$i(R,!0);const Le=Uf(R),fe=R.subTree;R.subTree=Le,_(fe,Le,f(fe.el),N(fe),R,K,q),I.el=Le.el,ue===null&&jv(R,Le.el),$&&tn($,K),(Ce=I.props&&I.props.onVnodeUpdated)&&tn(()=>Rn(Ce,W,I,me),K)}else{let I;const{el:V,props:$}=C,{bm:W,m:me,parent:ue,root:Ce,type:Le}=R,fe=Ds(C);$i(R,!1),W&&$o(W),!fe&&(I=$&&$.onVnodeBeforeMount)&&Rn(I,ue,C),$i(R,!0);{Ce.ce&&Ce.ce._injectChildStyle(Le);const xe=R.subTree=Uf(R);_(null,xe,y,ie,R,K,q),C.el=xe.el}if(me&&tn(me,K),!fe&&(I=$&&$.onVnodeMounted)){const xe=C;tn(()=>Rn(I,ue,xe),K)}(C.shapeFlag&256||ue&&Ds(ue.vnode)&&ue.vnode.shapeFlag&256)&&R.a&&tn(R.a,K),R.isMounted=!0,C=y=ie=null}};R.scope.on();const J=R.effect=new yp(ce);R.scope.off();const b=R.update=J.run.bind(J),v=R.job=J.runIfDirty.bind(J);v.i=R,v.id=R.uid,J.scheduler=()=>Fu(v),$i(R,!0),b()},ee=(R,C,y)=>{C.component=R;const ie=R.vnode.props;R.vnode=C,R.next=null,Lv(R,C.props,ie,y),Nv(R,C.children,y),fi(),Tf(R),di()},G=(R,C,y,ie,K,q,te,ce,J=!1)=>{const b=R&&R.children,v=R?R.shapeFlag:0,I=C.children,{patchFlag:V,shapeFlag:$}=C;if(V>0){if(V&128){ye(b,I,y,ie,K,q,te,ce,J);return}else if(V&256){ge(b,I,y,ie,K,q,te,ce,J);return}}$&8?(v&16&&be(b,K,q),I!==b&&u(y,I)):v&16?$&16?ye(b,I,y,ie,K,q,te,ce,J):be(b,K,q,!0):(v&8&&u(y,""),$&16&&U(I,y,ie,K,q,te,ce,J))},ge=(R,C,y,ie,K,q,te,ce,J)=>{R=R||$r,C=C||$r;const b=R.length,v=C.length,I=Math.min(b,v);let V;for(V=0;V<I;V++){const $=C[V]=J?Ci(C[V]):Dn(C[V]);_(R[V],$,y,null,K,q,te,ce,J)}b>v?be(R,K,q,!0,!1,I):U(C,y,ie,K,q,te,ce,J,I)},ye=(R,C,y,ie,K,q,te,ce,J)=>{let b=0;const v=C.length;let I=R.length-1,V=v-1;for(;b<=I&&b<=V;){const $=R[b],W=C[b]=J?Ci(C[b]):Dn(C[b]);if(ar($,W))_($,W,y,null,K,q,te,ce,J);else break;b++}for(;b<=I&&b<=V;){const $=R[I],W=C[V]=J?Ci(C[V]):Dn(C[V]);if(ar($,W))_($,W,y,null,K,q,te,ce,J);else break;I--,V--}if(b>I){if(b<=V){const $=V+1,W=$<v?C[$].el:ie;for(;b<=V;)_(null,C[b]=J?Ci(C[b]):Dn(C[b]),y,W,K,q,te,ce,J),b++}}else if(b>V)for(;b<=I;)Ue(R[b],K,q,!0),b++;else{const $=b,W=b,me=new Map;for(b=W;b<=V;b++){const _e=C[b]=J?Ci(C[b]):Dn(C[b]);_e.key!=null&&me.set(_e.key,b)}let ue,Ce=0;const Le=V-W+1;let fe=!1,xe=0;const Ie=new Array(Le);for(b=0;b<Le;b++)Ie[b]=0;for(b=$;b<=I;b++){const _e=R[b];if(Ce>=Le){Ue(_e,K,q,!0);continue}let ke;if(_e.key!=null)ke=me.get(_e.key);else for(ue=W;ue<=V;ue++)if(Ie[ue-W]===0&&ar(_e,C[ue])){ke=ue;break}ke===void 0?Ue(_e,K,q,!0):(Ie[ke-W]=b+1,ke>=xe?xe=ke:fe=!0,_(_e,C[ke],y,null,K,q,te,ce,J),Ce++)}const Be=fe?zv(Ie):$r;for(ue=Be.length-1,b=Le-1;b>=0;b--){const _e=W+b,ke=C[_e],We=_e+1<v?C[_e+1].el:ie;Ie[b]===0?_(null,ke,y,We,K,q,te,ce,J):fe&&(ue<0||b!==Be[ue]?Re(ke,y,We,2):ue--)}}},Re=(R,C,y,ie,K=null)=>{const{el:q,type:te,transition:ce,children:J,shapeFlag:b}=R;if(b&6){Re(R.component.subTree,C,y,ie);return}if(b&128){R.suspense.move(C,y,ie);return}if(b&64){te.move(R,C,y,le);return}if(te===Ln){i(q,C,y);for(let I=0;I<J.length;I++)Re(J[I],C,y,ie);i(R.anchor,C,y);return}if(te===el){E(R,C,y);return}if(ie!==2&&b&1&&ce)if(ie===0)ce.beforeEnter(q),i(q,C,y),tn(()=>ce.enter(q),K);else{const{leave:I,delayLeave:V,afterLeave:$}=ce,W=()=>{R.ctx.isUnmounted?r(q):i(q,C,y)},me=()=>{I(q,()=>{W(),$&&$()})};V?V(q,W,me):me()}else i(q,C,y)},Ue=(R,C,y,ie=!1,K=!1)=>{const{type:q,props:te,ref:ce,children:J,dynamicChildren:b,shapeFlag:v,patchFlag:I,dirs:V,cacheIndex:$}=R;if(I===-2&&(K=!1),ce!=null&&(fi(),io(ce,null,y,R,!0),di()),$!=null&&(C.renderCache[$]=void 0),v&256){C.ctx.deactivate(R);return}const W=v&1&&V,me=!Ds(R);let ue;if(me&&(ue=te&&te.onVnodeBeforeUnmount)&&Rn(ue,C,R),v&6)pe(R.component,y,ie);else{if(v&128){R.suspense.unmount(y,ie);return}W&&qi(R,null,C,"beforeUnmount"),v&64?R.type.remove(R,C,y,le,ie):b&&!b.hasOnce&&(q!==Ln||I>0&&I&64)?be(b,C,y,!1,!0):(q===Ln&&I&384||!K&&v&16)&&be(J,C,y),ie&&Ke(R)}(me&&(ue=te&&te.onVnodeUnmounted)||W)&&tn(()=>{ue&&Rn(ue,C,R),W&&qi(R,null,C,"unmounted")},y)},Ke=R=>{const{type:C,el:y,anchor:ie,transition:K}=R;if(C===Ln){re(y,ie);return}if(C===el){x(R);return}const q=()=>{r(y),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(R.shapeFlag&1&&K&&!K.persisted){const{leave:te,delayLeave:ce}=K,J=()=>te(y,q);ce?ce(R.el,q,J):J()}else q()},re=(R,C)=>{let y;for(;R!==C;)y=d(R),r(R),R=y;r(C)},pe=(R,C,y)=>{const{bum:ie,scope:K,job:q,subTree:te,um:ce,m:J,a:b,parent:v,slots:{__:I}}=R;If(J),If(b),ie&&$o(ie),v&&Ve(I)&&I.forEach(V=>{v.renderCache[V]=void 0}),K.stop(),q&&(q.flags|=8,Ue(te,R,C,y)),ce&&tn(ce,C),tn(()=>{R.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},be=(R,C,y,ie=!1,K=!1,q=0)=>{for(let te=q;te<R.length;te++)Ue(R[te],C,y,ie,K)},N=R=>{if(R.shapeFlag&6)return N(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const C=d(R.anchor||R.el),y=C&&C[sv];return y?d(y):C};let se=!1;const oe=(R,C,y)=>{R==null?C._vnode&&Ue(C._vnode,null,null,!0):_(C._vnode||null,R,C,null,null,null,y),C._vnode=R,se||(se=!0,Tf(),kp(),se=!1)},le={p:_,um:Ue,m:Re,r:Ke,mt:z,mc:U,pc:G,pbc:M,n:N,o:t};return{render:oe,hydrate:void 0,createApp:Cv(oe)}}function Qo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $i({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Bv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lm(t,e,n=!1){const i=t.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ci(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&lm(a,o)),o.type===Ro&&(o.el=a.el),o.type===Wt&&!o.el&&(o.el=a.el)}}function zv(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function cm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cm(e)}function If(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const kv=Symbol.for("v-scx"),Hv=()=>dn(kv);function bt(t,e,n){return um(t,e,n)}function um(t,e,n=ct){const{immediate:i,deep:r,flush:s,once:a}=n,o=Rt({},n),l=e&&i||!e&&s!=="post";let c;if(Xs){if(s==="sync"){const h=Hv();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=zn,h.resume=zn,h.pause=zn,h}}const u=Pt;o.call=(h,g,_)=>Tn(h,u,g,_);let f=!1;s==="post"?o.scheduler=h=>{tn(h,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(h,g)=>{g?h():Fu(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=ev(t,e,o);return Xs&&(c?c.push(d):l&&d()),d}function Vv(t,e,n){const i=this.proxy,r=Mt(t)?t.includes(".")?fm(i,t):()=>i[t]:t.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,n=e);const a=na(this),o=um(r,s.bind(i),n);return a(),o}function fm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Gv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${br(e)}Modifiers`];function Wv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ct;let r=n;const s=e.startsWith("update:"),a=s&&Gv(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Mt(u)?u.trim():u)),a.number&&(r=n.map(y_)));let o,l=i[o=qo(e)]||i[o=qo(hn(e))];!l&&s&&(l=i[o=qo(br(e))]),l&&Tn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Tn(c,t,6,r)}}function dm(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!Xe(t)){const l=c=>{const u=dm(c,e,!0);u&&(o=!0,Rt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(vt(t)&&i.set(t,null),null):(Ve(s)?s.forEach(l=>a[l]=null):Rt(a,s),vt(t)&&i.set(t,a),a)}function wo(t,e){return!t||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(t,e[0].toLowerCase()+e.slice(1))||at(t,br(e))||at(t,e))}function Uf(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=t,m=no(t);let p,S;try{if(n.shapeFlag&4){const x=r||i,w=x;p=Dn(c.call(w,x,u,f,h,d,g)),S=o}else{const x=e;p=Dn(x.length>1?x(f,{attrs:o,slots:a,emit:l}):x(f,null)),S=e.props?o:Xv(o)}}catch(x){Us.length=0,Mo(x,t,1),p=xt(Wt)}let E=p;if(S&&_!==!1){const x=Object.keys(S),{shapeFlag:w}=E;x.length&&w&7&&(s&&x.some(bu)&&(S=qv(S,s)),E=Oi(E,S,!1,!0))}return n.dirs&&(E=Oi(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Vs(E,n.transition),p=E,no(m),p}const Xv=t=>{let e;for(const n in t)(n==="class"||n==="style"||vo(n))&&((e||(e={}))[n]=t[n]);return e},qv=(t,e)=>{const n={};for(const i in t)(!bu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function $v(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Nf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!wo(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Nf(i,a,c):!0:!!a;return!1}function Nf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!wo(n,s))return!0}return!1}function jv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const hm=t=>t.__isSuspense;function Yv(t,e){e&&e.pendingBranch?Ve(t)?e.effects.push(...t):e.effects.push(t):iv(t)}const Ln=Symbol.for("v-fgt"),Ro=Symbol.for("v-txt"),Wt=Symbol.for("v-cmt"),el=Symbol.for("v-stc"),Us=[];let nn=null;function Gs(t=!1){Us.push(nn=t?null:[])}function Kv(){Us.pop(),nn=Us[Us.length-1]||null}let Ws=1;function Ff(t,e=!1){Ws+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function pm(t){return t.dynamicChildren=Ws>0?nn||$r:null,Kv(),Ws>0&&nn&&nn.push(t),t}function mm(t,e,n,i,r,s){return pm(Pn(t,e,n,i,r,s,!0))}function ku(t,e,n,i,r){return pm(xt(t,e,n,i,r,!0))}function so(t){return t?t.__v_isVNode===!0:!1}function ar(t,e){return t.type===e.type&&t.key===e.key}const gm=({key:t})=>t??null,Va=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Mt(t)||Ot(t)||Xe(t)?{i:Yt,r:t,k:e,f:!!n}:t:null);function Pn(t,e=null,n=null,i=0,r=null,s=t===Ln?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gm(e),ref:e&&Va(e),scopeId:Vp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yt};return o?(Hu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Mt(n)?8:16),Ws>0&&!a&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const xt=Zv;function Zv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===yv)&&(t=Wt),so(t)){const o=Oi(t,e,!0);return n&&Hu(o,n),Ws>0&&!s&&nn&&(o.shapeFlag&6?nn[nn.indexOf(t)]=o:nn.push(o)),o.patchFlag=-2,o}if(u0(t)&&(t=t.__vccOpts),e){e=Jv(e);let{class:o,style:l}=e;o&&!Mt(o)&&(e.class=Au(o)),vt(l)&&(Uu(l)&&!Ve(l)&&(l=Rt({},l)),e.style=Tu(l))}const a=Mt(t)?1:hm(t)?128:Gp(t)?64:vt(t)?4:Xe(t)?2:0;return Pn(t,e,n,i,r,a,s,!0)}function Jv(t){return t?Uu(t)||nm(t)?Rt({},t):t:null}function Oi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?t0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&gm(c),ref:e&&e.ref?n&&s?Ve(s)?s.concat(Va(e)):[s,Va(e)]:Va(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ln?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Oi(t.ssContent),ssFallback:t.ssFallback&&Oi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Vs(u,l.clone(u)),u}function Qv(t=" ",e=0){return xt(Ro,null,t,e)}function e0(t="",e=!1){return e?(Gs(),ku(Wt,null,t)):xt(Wt,null,t)}function Dn(t){return t==null||typeof t=="boolean"?xt(Wt):Ve(t)?xt(Ln,null,t.slice()):so(t)?Ci(t):xt(Ro,null,String(t))}function Ci(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Oi(t)}function Hu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ve(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Hu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!nm(e)?e._ctx=Yt:r===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Yt},n=32):(e=String(e),i&64?(n=16,e=[Qv(e)]):n=8);t.children=e,t.shapeFlag|=n}function t0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Au([e.class,i.class]));else if(r==="style")e.style=Tu([e.style,i.style]);else if(vo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ve(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Rn(t,e,n,i=null){Tn(t,e,7,[n,i])}const n0=Qp();let i0=0;function r0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||n0,s={uid:i0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new R_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rm(i,r),emitsOptions:dm(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Wv.bind(null,s),t.ce&&t.ce(s),s}let Pt=null;const Xn=()=>Pt||Yt;let ao,ac;{const t=bo(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};ao=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),ac=e("__VUE_SSR_SETTERS__",n=>Xs=n)}const na=t=>{const e=Pt;return ao(t),t.scope.on(),()=>{t.scope.off(),ao(e)}},Of=()=>{Pt&&Pt.scope.off(),ao(null)};function _m(t){return t.vnode.shapeFlag&4}let Xs=!1;function s0(t,e=!1,n=!1){e&&ac(e);const{props:i,children:r}=t.vnode,s=_m(t);Pv(t,i,s,e),Uv(t,r,n||e);const a=s?a0(t,e):void 0;return e&&ac(!1),a}function a0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bv);const{setup:i}=n;if(i){fi();const r=t.setupContext=i.length>1?l0(t):null,s=na(t),a=ta(i,t,0,[t.props,r]),o=_p(a);if(di(),s(),(o||t.sp)&&!Ds(t)&&Yp(t),o){if(a.then(Of,Of),e)return a.then(l=>{Bf(t,l)}).catch(l=>{Mo(l,t,0)});t.asyncDep=a}else Bf(t,a)}else vm(t)}function Bf(t,e,n){Xe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:vt(e)&&(t.setupState=Op(e)),vm(t)}function vm(t,e,n){const i=t.type;t.render||(t.render=i.render||zn);{const r=na(t);fi();try{Mv(t)}finally{di(),r()}}}const o0={get(t,e){return Ft(t,"get",""),t[e]}};function l0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,o0),slots:t.slots,emit:t.emit,expose:e}}function Co(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Op(Nu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Is)return Is[n](t)},has(e,n){return n in e||n in Is}})):t.proxy}function c0(t,e=!0){return Xe(t)?t.displayName||t.name:t.name||e&&t.__name}function u0(t){return Xe(t)&&"__vccOpts"in t}const Se=(t,e)=>J_(t,e,Xs);function Ge(t,e,n){const i=arguments.length;return i===2?vt(e)&&!Ve(e)?so(e)?xt(t,null,[e]):xt(t,e):xt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&so(n)&&(n=[n]),xt(t,e,n))}const f0="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oc;const zf=typeof window<"u"&&window.trustedTypes;if(zf)try{oc=zf.createPolicy("vue",{createHTML:t=>t})}catch{}const xm=oc?t=>oc.createHTML(t):t=>t,d0="http://www.w3.org/2000/svg",h0="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,kf=ni&&ni.createElement("template"),p0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ni.createElementNS(d0,t):e==="mathml"?ni.createElementNS(h0,t):n?ni.createElement(t,{is:n}):ni.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ni.createTextNode(t),createComment:t=>ni.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ni.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{kf.innerHTML=xm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=kf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vi="transition",gs="animation",qs=Symbol("_vtc"),ym={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m0=Rt({},Wp,ym),g0=t=>(t.displayName="Transition",t.props=m0,t),_0=g0((t,{slots:e})=>Ge(lv,v0(t),e)),ji=(t,e=[])=>{Ve(t)?t.forEach(n=>n(...e)):t&&t(...e)},Hf=t=>t?Ve(t)?t.some(e=>e.length>1):t.length>1:!1;function v0(t){const e={};for(const O in t)O in ym||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=x0(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:E,onLeave:x,onLeaveCancelled:w,onBeforeAppear:L=p,onAppear:P=S,onAppearCancelled:U=E}=e,A=(O,H,z,Q)=>{O._enterCancelled=Q,Yi(O,H?u:o),Yi(O,H?c:a),z&&z()},M=(O,H)=>{O._isLeaving=!1,Yi(O,f),Yi(O,h),Yi(O,d),H&&H()},D=O=>(H,z)=>{const Q=O?P:S,Z=()=>A(H,O,z);ji(Q,[H,Z]),Vf(()=>{Yi(H,O?l:s),jn(H,O?u:o),Hf(Q)||Gf(H,i,_,Z)})};return Rt(e,{onBeforeEnter(O){ji(p,[O]),jn(O,s),jn(O,a)},onBeforeAppear(O){ji(L,[O]),jn(O,l),jn(O,c)},onEnter:D(!1),onAppear:D(!0),onLeave(O,H){O._isLeaving=!0;const z=()=>M(O,H);jn(O,f),O._enterCancelled?(jn(O,d),qf()):(qf(),jn(O,d)),Vf(()=>{O._isLeaving&&(Yi(O,f),jn(O,h),Hf(x)||Gf(O,i,m,z))}),ji(x,[O,z])},onEnterCancelled(O){A(O,!1,void 0,!0),ji(E,[O])},onAppearCancelled(O){A(O,!0,void 0,!0),ji(U,[O])},onLeaveCancelled(O){M(O),ji(w,[O])}})}function x0(t){if(t==null)return null;if(vt(t))return[tl(t.enter),tl(t.leave)];{const e=tl(t);return[e,e]}}function tl(t){return S_(t)}function jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qs]||(t[qs]=new Set)).add(e)}function Yi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[qs];n&&(n.delete(e),n.size||(t[qs]=void 0))}function Vf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let y0=0;function Gf(t,e,n,i){const r=t._endId=++y0,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=S0(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,d)}function S0(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${vi}Delay`),s=i(`${vi}Duration`),a=Wf(r,s),o=i(`${gs}Delay`),l=i(`${gs}Duration`),c=Wf(o,l);let u=null,f=0,d=0;e===vi?a>0&&(u=vi,f=a,d=s.length):e===gs?c>0&&(u=gs,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?vi:gs:null,d=u?u===vi?s.length:l.length:0);const h=u===vi&&/\b(transform|all)(,|$)/.test(i(`${vi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Wf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Xf(n)+Xf(t[i])))}function Xf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function qf(){return document.body.offsetHeight}function b0(t,e,n){const i=t[qs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $f=Symbol("_vod"),M0=Symbol("_vsh"),E0=Symbol(""),T0=/(^|;)\s*display\s*:/;function A0(t,e,n){const i=t.style,r=Mt(n);let s=!1;if(n&&!r){if(e)if(Mt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Ga(i,o,"")}else for(const a in e)n[a]==null&&Ga(i,a,"");for(const a in n)a==="display"&&(s=!0),Ga(i,a,n[a])}else if(r){if(e!==n){const a=i[E0];a&&(n+=";"+a),i.cssText=n,s=T0.test(n)}}else e&&t.removeAttribute("style");$f in t&&(t[$f]=s?i.display:"",t[M0]&&(i.display="none"))}const jf=/\s*!important$/;function Ga(t,e,n){if(Ve(n))n.forEach(i=>Ga(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=w0(t,e);jf.test(n)?t.setProperty(br(i),n.replace(jf,""),"important"):t[i]=n}}const Yf=["Webkit","Moz","ms"],nl={};function w0(t,e){const n=nl[e];if(n)return n;let i=hn(e);if(i!=="filter"&&i in t)return nl[e]=i;i=So(i);for(let r=0;r<Yf.length;r++){const s=Yf[r]+i;if(s in t)return nl[e]=s}return e}const Kf="http://www.w3.org/1999/xlink";function Zf(t,e,n,i,r,s=w_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kf,e.slice(6,e.length)):t.setAttributeNS(Kf,e,n):n==null||s&&!xp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ls(n)?String(n):n)}function Jf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=xp(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function R0(t,e,n,i){t.addEventListener(e,n,i)}function C0(t,e,n,i){t.removeEventListener(e,n,i)}const Qf=Symbol("_vei");function P0(t,e,n,i,r=null){const s=t[Qf]||(t[Qf]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=L0(e);if(i){const c=s[e]=U0(i,r);R0(t,o,c,l)}else a&&(C0(t,o,a,l),s[e]=void 0)}}const ed=/(?:Once|Passive|Capture)$/;function L0(t){let e;if(ed.test(t)){e={};let i;for(;i=t.match(ed);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):br(t.slice(2)),e]}let il=0;const D0=Promise.resolve(),I0=()=>il||(D0.then(()=>il=0),il=Date.now());function U0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Tn(N0(i,n.value),e,5,[i])};return n.value=t,n.attached=I0(),n}function N0(t,e){if(Ve(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const td=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,F0=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?b0(t,i,a):e==="style"?A0(t,n,i):vo(e)?bu(e)||P0(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O0(t,e,i,a))?(Jf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zf(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Mt(i))?Jf(t,hn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Zf(t,e,i,a))};function O0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&td(e)&&Xe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return td(e)&&Mt(n)?!1:e in t}const B0=Rt({patchProp:F0},p0);let nd;function z0(){return nd||(nd=Fv(B0))}const k0=(...t)=>{const e=z0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=V0(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,H0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function H0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function V0(t){return Mt(t)?document.querySelector(t):t}function Vu(t,e,n,i){return Object.defineProperty(t,e,{get:n,set:i,enumerable:!0}),t}const Vn=wt(!1);let lc;function G0(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:e[0]||""}}function W0(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const Sm="ontouchstart"in window||window.navigator.maxTouchPoints>0;function X0(t){const e=t.toLowerCase(),n=W0(e),i=G0(e,n),r={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};i.browser&&(r[i.browser]=!0,r.version=i.version,r.versionNumber=parseInt(i.version,10)),i.platform&&(r[i.platform]=!0);const s=r.android||r.ios||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r["windows phone"];if(s===!0||e.indexOf("mobile")!==-1?r.mobile=!0:r.desktop=!0,r["windows phone"]&&(r.winphone=!0,delete r["windows phone"]),r.edga||r.edgios||r.edg?(r.edge=!0,i.browser="edge"):r.crios?(r.chrome=!0,i.browser="chrome"):r.fxios&&(r.firefox=!0,i.browser="firefox"),(r.ipod||r.ipad||r.iphone)&&(r.ios=!0),r.vivaldi&&(i.browser="vivaldi",r.vivaldi=!0),(r.chrome||r.opr||r.safari||r.vivaldi||r.mobile===!0&&r.ios!==!0&&s!==!0)&&(r.webkit=!0),r.opr&&(i.browser="opera",r.opera=!0),r.safari&&(r.blackberry||r.bb?(i.browser="blackberry",r.blackberry=!0):r.playbook?(i.browser="playbook",r.playbook=!0):r.android?(i.browser="android",r.android=!0):r.kindle?(i.browser="kindle",r.kindle=!0):r.silk&&(i.browser="silk",r.silk=!0)),r.name=i.browser,r.platform=i.platform,e.indexOf("electron")!==-1)r.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)r.bex=!0;else{if(window.Capacitor!==void 0?(r.capacitor=!0,r.nativeMobile=!0,r.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(r.cordova=!0,r.nativeMobile=!0,r.nativeMobileWrapper="cordova"),Vn.value===!0&&(lc={is:{...r}}),Sm===!0&&r.mac===!0&&(r.desktop===!0&&r.safari===!0||r.nativeMobile===!0&&r.android!==!0&&r.ios!==!0&&r.ipad!==!0)){delete r.mac,delete r.desktop;const a=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(r,{mobile:!0,ios:!0,platform:a,[a]:!0})}r.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete r.desktop,r.mobile=!0)}return r}const id=navigator.userAgent||navigator.vendor||window.opera,q0={has:{touch:!1,webStorage:!1},within:{iframe:!1}},kn={userAgent:id,is:X0(id),has:{touch:Sm},within:{iframe:window.self!==window.top}},cc={install(t){const{$q:e}=t;Vn.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,kn),Vn.value=!1}),e.platform=Un(this)):e.platform=this}};{let t;Vu(kn.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(cc,kn),Vn.value===!0&&(Object.assign(cc,lc,q0),lc=null)}function wn(t){return Nu(Eo(t))}function $0(t){return Nu(t)}const Po=(t,e)=>{const n=Un(t);for(const i in t)Vu(e,i,()=>n[i],r=>{n[i]=r});return e},Bi={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Bi,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function _r(){}function j0(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function bm(t){t.stopPropagation()}function Y0(t){t.cancelable!==!1&&t.preventDefault()}function Tr(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function K0(t,e,n){const i=`__q_${e}_evt`;t[i]=t[i]!==void 0?t[i].concat(n):n,n.forEach(r=>{r[0].addEventListener(r[1],t[r[2]],Bi[r[3]])})}function Z0(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(i=>{i[0].removeEventListener(i[1],t[i[2]],Bi[i[3]])}),t[n]=void 0)}function J0(t,e=250,n){let i=null;function r(){const s=arguments,a=()=>{i=null,t.apply(this,s)};i!==null&&clearTimeout(i),i=setTimeout(a,e)}return r.cancel=()=>{i!==null&&clearTimeout(i)},r}const rl=["sm","md","lg","xl"],{passive:rd}=Bi,Q0=Po({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:_r,setDebounce:_r,install({$q:t,onSSRHydrated:e}){var f;if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,i=n||window,r=document.scrollingElement||document.documentElement,s=n===void 0||kn.is.mobile===!0?()=>[Math.max(window.innerWidth,r.clientWidth),Math.max(window.innerHeight,r.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-r.clientWidth,n.height*n.scale+window.innerHeight-r.clientHeight],a=((f=t.config.screen)==null?void 0:f.bodyClasses)===!0;this.__update=d=>{const[h,g]=s();if(g!==this.height&&(this.height=g),h!==this.width)this.width=h;else if(d!==!0)return;let _=this.sizes;this.gt.xs=h>=_.sm,this.gt.sm=h>=_.md,this.gt.md=h>=_.lg,this.gt.lg=h>=_.xl,this.lt.sm=h<_.sm,this.lt.md=h<_.md,this.lt.lg=h<_.lg,this.lt.xl=h<_.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,_=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",_!==this.name&&(a===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${_}`)),this.name=_)};let o,l={},c=16;this.setSizes=d=>{rl.forEach(h=>{d[h]!==void 0&&(l[h]=d[h])})},this.setDebounce=d=>{c=d};const u=()=>{const d=getComputedStyle(document.body);d.getPropertyValue("--q-size-sm")&&rl.forEach(h=>{this.sizes[h]=parseInt(d.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{rl.forEach(g=>{h[g]&&(this.sizes[g]=h[g])}),this.__update(!0)},this.setDebounce=h=>{o!==void 0&&i.removeEventListener("resize",o,rd),o=h>0?J0(this.__update,h):this.__update,i.addEventListener("resize",o,rd)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),a===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Vn.value===!0?e.push(u):u()}}),Nt=Po({isActive:!1,mode:!1},{__media:void 0,set(t){Nt.mode=t,t==="auto"?(Nt.__media===void 0&&(Nt.__media=window.matchMedia("(prefers-color-scheme: dark)"),Nt.__updateMedia=()=>{Nt.set("auto")},Nt.__media.addListener(Nt.__updateMedia)),t=Nt.__media.matches):Nt.__media!==void 0&&(Nt.__media.removeListener(Nt.__updateMedia),Nt.__media=void 0),Nt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){Nt.set(Nt.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function ex(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let Mm=!1;function tx(t){Mm=t.isComposing===!0}function nx(t){return Mm===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function uc(t,e){return nx(t)===!0?!1:[].concat(e).includes(t.keyCode)}function Em(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function ix({is:t,has:e,within:n},i){const r=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=Em(t);s!==void 0&&r.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;r.push(s),r.push("native-mobile"),t.ios===!0&&(i[s]===void 0||i[s].iosStatusBarPadding!==!1)&&r.push("q-ios-padding")}else t.electron===!0?r.push("electron"):t.bex===!0&&r.push("bex");return n.iframe===!0&&r.push("within-iframe"),r}function rx(){const{is:t}=kn,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const r=Em(t);r!==void 0&&n.add(`platform-${r}`)}}kn.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),kn.within.iframe===!0&&n.add("within-iframe");const i=Array.from(n).join(" ");e!==i&&(document.body.className=i)}function sx(t){for(const e in t)ex(e,t[e])}const ax={install(t){if(this.__installed!==!0){if(Vn.value===!0)rx();else{const{$q:e}=t;e.config.brand!==void 0&&sx(e.config.brand);const n=ix(kn,e.config);document.body.classList.add.apply(document.body.classList,n)}kn.is.ios===!0&&document.body.addEventListener("touchstart",_r),window.addEventListener("keydown",tx,!0)}}},Tm=()=>!0;function ox(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function lx(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function cx(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return Tm;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(ox).map(lx)),()=>e.includes(window.location.hash)}const ux={__history:[],add:_r,remove:_r,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=kn.is;if(e!==!0&&n!==!0)return;const i=t.config[e===!0?"cordova":"capacitor"];if((i==null?void 0:i.backButton)===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=a=>{a.condition===void 0&&(a.condition=Tm),this.__history.push(a)},this.remove=a=>{const o=this.__history.indexOf(a);o>=0&&this.__history.splice(o,1)};const r=cx(Object.assign({backButtonExit:!0},i)),s=()=>{if(this.__history.length){const a=this.__history[this.__history.length-1];a.condition()===!0&&(this.__history.pop(),a.handler())}else r()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},sd={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:t=>`Previous ${t} years`,nextRangeYears:t=>`Next ${t} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function ad(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const Pi=Po({__qLang:{}},{getLocale:ad,set(t=sd,e){const n={...t,rtl:t.rtl===!0,getLocale:ad};{if(n.set=Pi.set,Pi.__langConfig===void 0||Pi.__langConfig.noHtmlAttrs!==!0){const i=document.documentElement;i.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),i.setAttribute("lang",n.isoName)}Object.assign(Pi.__qLang,n)}},install({$q:t,lang:e,ssrContext:n}){t.lang=Pi.__qLang,Pi.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(i){return Reflect.ownKeys(i).filter(r=>r!=="set"&&r!=="getLocale")}}),this.set(e||sd))}}),fx={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},oo=Po({iconMapFn:null,__qIconSet:{}},{set(t,e){const n={...t};n.set=oo.set,Object.assign(oo.__qIconSet,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,Vu(t,"iconMapFn",()=>this.iconMapFn,i=>{this.iconMapFn=i}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(i){return Reflect.ownKeys(i).filter(r=>r!=="set")}}),this.set(e||fx))}}),dx="_q_",Lo="_q_l_",hx="_q_pc_";function ci(){}const od={};let Am=!1;function px(){Am=!0}function ld(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}const cd=[cc,ax,Nt,Q0,ux,Pi,oo];function ud(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function mx(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(dx,n.$q),ud(n,cd),e.components!==void 0&&Object.values(e.components).forEach(i=>{ld(i)===!0&&i.name!==void 0&&t.component(i.name,i)}),e.directives!==void 0&&Object.values(e.directives).forEach(i=>{ld(i)===!0&&i.name!==void 0&&t.directive(i.name,i)}),e.plugins!==void 0&&ud(n,Object.values(e.plugins).filter(i=>typeof i.install=="function"&&cd.includes(i)===!1)),Vn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(i=>{i()}),n.$q.onSSRHydrated=()=>{}})}const gx=function(t,e={}){const n={version:"2.18.1"};Am===!1?(e.config!==void 0&&Object.assign(od,e.config),n.config={...od},px()):n.config=e.config||{},mx(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},_x={name:"Quasar",version:"2.18.1",install:gx,lang:Pi,iconSet:oo};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function wm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&wm(t.default)}const st=Object.assign;function sl(t,e){const n={};for(const i in e){const r=e[i];n[i]=An(r)?r.map(t):t(r)}return n}const Ns=()=>{},An=Array.isArray,Rm=/#/g,xx=/&/g,yx=/\//g,Sx=/=/g,bx=/\?/g,Cm=/\+/g,Mx=/%5B/g,Ex=/%5D/g,Pm=/%5E/g,Tx=/%60/g,Lm=/%7B/g,Ax=/%7C/g,Dm=/%7D/g,wx=/%20/g;function Gu(t){return encodeURI(""+t).replace(Ax,"|").replace(Mx,"[").replace(Ex,"]")}function Rx(t){return Gu(t).replace(Lm,"{").replace(Dm,"}").replace(Pm,"^")}function fc(t){return Gu(t).replace(Cm,"%2B").replace(wx,"+").replace(Rm,"%23").replace(xx,"%26").replace(Tx,"`").replace(Lm,"{").replace(Dm,"}").replace(Pm,"^")}function Cx(t){return fc(t).replace(Sx,"%3D")}function Px(t){return Gu(t).replace(Rm,"%23").replace(bx,"%3F")}function Lx(t){return t==null?"":Px(t).replace(yx,"%2F")}function $s(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Dx=/\/$/,Ix=t=>t.replace(Dx,"");function al(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Ox(i??e,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:$s(a)}}function Ux(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Nx(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&es(e.matched[i],n.matched[r])&&Im(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Im(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fx(t[n],e[n]))return!1;return!0}function Fx(t,e){return An(t)?dd(t,e):An(e)?dd(e,t):t===e}function dd(t,e){return An(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Ox(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const xi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var js;(function(t){t.pop="pop",t.push="push"})(js||(js={}));var Fs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fs||(Fs={}));function Bx(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ix(t)}const zx=/^[^#]+#/;function kx(t,e){return t.replace(zx,"#")+e}function Hx(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Do=()=>({left:window.scrollX,top:window.scrollY});function Vx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Hx(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hd(t,e){return(history.state?history.state.position-e:-1)+t}const dc=new Map;function Gx(t,e){dc.set(t,e)}function Wx(t){const e=dc.get(t);return dc.delete(t),e}let Xx=()=>location.protocol+"//"+location.host;function Um(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),fd(l,"")}return fd(n,t)+i+r}function qx(t,e,n,i){let r=[],s=[],a=null;const o=({state:d})=>{const h=Um(t,location),g=n.value,_=e.value;let m=0;if(d){if(n.value=h,e.value=d,a&&a===g){a=null;return}m=_?d.position-_.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:js.pop,direction:m?m>0?Fs.forward:Fs.back:Fs.unknown})})};function l(){a=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(st({},d.state,{scroll:Do()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function pd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Do():null}}function $x(t){const{history:e,location:n}=window,i={value:Um(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Xx()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function a(l,c){const u=st({},e.state,pd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=st({},r.value,e.state,{forward:l,scroll:Do()});s(u.current,u,!0);const f=st({},pd(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function jx(t){t=Bx(t);const e=$x(t),n=qx(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=st({location:"",base:t,go:i,createHref:kx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Yx(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),jx(t)}function Kx(t){return typeof t=="string"||t&&typeof t=="object"}function Nm(t){return typeof t=="string"||typeof t=="symbol"}const Fm=Symbol("");var md;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(md||(md={}));function ts(t,e){return st(new Error,{type:t,[Fm]:!0},e)}function Yn(t,e){return t instanceof Error&&Fm in t&&(e==null||!!(t.type&e))}const gd="[^/]+?",Zx={sensitive:!1,strict:!1,start:!0,end:!0},Jx=/[.+*?^${}()[\]/\\]/g;function Qx(t,e){const n=st({},Zx,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(Jx,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const S=p||gd;if(S!==gd){h+=10;try{new RegExp(`(${S})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+x.message)}}let E=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,h+=20,m&&(h+=-8),_&&(h+=-20),S===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(An(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=An(p)?p.join("/"):p;if(!S)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function ey(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Om(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=ey(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(_d(i))return 1;if(_d(r))return-1}return r.length-i.length}function _d(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ty={type:0,value:""},ny=/[a-zA-Z0-9_]/;function iy(t){if(!t)return[[]];if(t==="/")return[[ty]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:ny.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function ry(t,e,n){const i=Qx(iy(t.path),n),r=st(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function sy(t,e){const n=[],i=new Map;e=Sd({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,_=xd(f);_.aliasOf=h&&h.record;const m=Sd(e,f),p=[_];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of x)p.push(xd(st({},_,{components:h?h.record.components:_.components,path:w,aliasOf:h?h.record:_})))}let S,E;for(const x of p){const{path:w}=x;if(d&&w[0]!=="/"){const L=d.record.path,P=L[L.length-1]==="/"?"":"/";x.path=d.record.path+(w&&P+w)}if(S=ry(x,d,m),h?h.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),g&&f.name&&!yd(S)&&a(f.name)),Bm(S)&&l(S),_.children){const L=_.children;for(let P=0;P<L.length;P++)s(L[P],S,h&&h.children[P])}h=h||S}return E?()=>{a(E)}:Ns}function a(f){if(Nm(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const d=ly(f,n);n.splice(d,0,f),f.record.name&&!yd(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw ts(1,{location:f});m=h.record.name,g=st(vd(d.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&vd(f.params,h.keys.map(E=>E.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=n.find(E=>E.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!h)throw ts(1,{location:f,currentLocation:d});m=h.record.name,g=st({},d.params,f.params),_=h.stringify(g)}const p=[];let S=h;for(;S;)p.unshift(S.record),S=S.parent;return{name:m,path:_,params:g,matched:p,meta:oy(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function vd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function xd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ay(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ay(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function yd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function oy(t){return t.reduce((e,n)=>st(e,n.meta),{})}function Sd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function ly(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Om(t,e[s])<0?i=s:n=s+1}const r=cy(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function cy(t){let e=t;for(;e=e.parent;)if(Bm(e)&&Om(t,e)===0)return e}function Bm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function uy(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Cm," "),a=s.indexOf("="),o=$s(a<0?s:s.slice(0,a)),l=a<0?null:$s(s.slice(a+1));if(o in e){let c=e[o];An(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function bd(t){let e="";for(let n in t){const i=t[n];if(n=Cx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(An(i)?i.map(s=>s&&fc(s)):[i&&fc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function fy(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=An(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const dy=Symbol(""),Md=Symbol(""),Wu=Symbol(""),zm=Symbol(""),hc=Symbol("");function _s(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Li(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(ts(4,{from:n,to:e})):d instanceof Error?l(d):Kx(d)?l(ts(2,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function ol(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(wm(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Li(u,n,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=vx(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Li(h,n,i,a,o,r)()}))}}return s}function Ed(t){const e=dn(Wu),n=dn(zm),i=Se(()=>{const l=pr(t.to);return e.resolve(l)}),r=Se(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(es.bind(null,u));if(d>-1)return d;const h=Td(l[c-2]);return c>1&&Td(u)===h&&f[f.length-1].path!==h?f.findIndex(es.bind(null,l[c-2])):d}),s=Se(()=>r.value>-1&&_y(n.params,i.value.params)),a=Se(()=>r.value>-1&&r.value===n.matched.length-1&&Im(n.params,i.value.params));function o(l={}){if(gy(l)){const c=e[pr(t.replace)?"replace":"push"](pr(t.to)).catch(Ns);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Se(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function hy(t){return t.length===1?t[0]:t}const py=Eo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ed,setup(t,{slots:e}){const n=Un(Ed(t)),{options:i}=dn(Wu),r=Se(()=>({[Ad(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ad(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&hy(e.default(n));return t.custom?s:Ge("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),my=py;function gy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _y(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!An(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ad=(t,e,n)=>t??e??n,vy=Eo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=dn(hc),r=Se(()=>t.route||i.value),s=dn(Md,0),a=Se(()=>{let c=pr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Se(()=>r.value.matched[a.value]);Kr(Md,Se(()=>a.value+1)),Kr(dy,o),Kr(hc,r);const l=wt();return bt(()=>[l.value,o.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!es(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=o.value,d=f&&f.components[u];if(!d)return wd(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Ge(d,st({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wd(n.default,{Component:m,route:c})||m}}});function wd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xy=vy;function yy(t){const e=sy(t.routes,t),n=t.parseQuery||uy,i=t.stringifyQuery||bd,r=t.history,s=_s(),a=_s(),o=_s(),l=j_(xi);let c=xi;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sl.bind(null,N=>""+N),f=sl.bind(null,Lx),d=sl.bind(null,$s);function h(N,se){let oe,le;return Nm(N)?(oe=e.getRecordMatcher(N),le=se):le=N,e.addRoute(le,oe)}function g(N){const se=e.getRecordMatcher(N);se&&e.removeRoute(se)}function _(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,se){if(se=st({},se||l.value),typeof N=="string"){const y=al(n,N,se.path),ie=e.resolve({path:y.path},se),K=r.createHref(y.fullPath);return st(y,ie,{params:d(ie.params),hash:$s(y.hash),redirectedFrom:void 0,href:K})}let oe;if(N.path!=null)oe=st({},N,{path:al(n,N.path,se.path).path});else{const y=st({},N.params);for(const ie in y)y[ie]==null&&delete y[ie];oe=st({},N,{params:f(y)}),se.params=f(se.params)}const le=e.resolve(oe,se),Oe=N.hash||"";le.params=u(d(le.params));const R=Ux(i,st({},N,{hash:Rx(Oe),path:le.path})),C=r.createHref(R);return st({fullPath:R,hash:Oe,query:i===bd?fy(N.query):N.query||{}},le,{redirectedFrom:void 0,href:C})}function S(N){return typeof N=="string"?al(n,N,l.value.path):st({},N)}function E(N,se){if(c!==N)return ts(8,{from:se,to:N})}function x(N){return P(N)}function w(N){return x(st(S(N),{replace:!0}))}function L(N){const se=N.matched[N.matched.length-1];if(se&&se.redirect){const{redirect:oe}=se;let le=typeof oe=="function"?oe(N):oe;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=S(le):{path:le},le.params={}),st({query:N.query,hash:N.hash,params:le.path!=null?{}:N.params},le)}}function P(N,se){const oe=c=p(N),le=l.value,Oe=N.state,R=N.force,C=N.replace===!0,y=L(oe);if(y)return P(st(S(y),{state:typeof y=="object"?st({},Oe,y.state):Oe,force:R,replace:C}),se||oe);const ie=oe;ie.redirectedFrom=se;let K;return!R&&Nx(i,le,oe)&&(K=ts(16,{to:ie,from:le}),Re(le,le,!0,!1)),(K?Promise.resolve(K):M(ie,le)).catch(q=>Yn(q)?Yn(q,2)?q:ye(q):G(q,ie,le)).then(q=>{if(q){if(Yn(q,2))return P(st({replace:C},S(q.to),{state:typeof q.to=="object"?st({},Oe,q.to.state):Oe,force:R}),se||ie)}else q=O(ie,le,!0,C,Oe);return D(ie,le,q),q})}function U(N,se){const oe=E(N,se);return oe?Promise.reject(oe):Promise.resolve()}function A(N){const se=re.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(N):N()}function M(N,se){let oe;const[le,Oe,R]=Sy(N,se);oe=ol(le.reverse(),"beforeRouteLeave",N,se);for(const y of le)y.leaveGuards.forEach(ie=>{oe.push(Li(ie,N,se))});const C=U.bind(null,N,se);return oe.push(C),be(oe).then(()=>{oe=[];for(const y of s.list())oe.push(Li(y,N,se));return oe.push(C),be(oe)}).then(()=>{oe=ol(Oe,"beforeRouteUpdate",N,se);for(const y of Oe)y.updateGuards.forEach(ie=>{oe.push(Li(ie,N,se))});return oe.push(C),be(oe)}).then(()=>{oe=[];for(const y of R)if(y.beforeEnter)if(An(y.beforeEnter))for(const ie of y.beforeEnter)oe.push(Li(ie,N,se));else oe.push(Li(y.beforeEnter,N,se));return oe.push(C),be(oe)}).then(()=>(N.matched.forEach(y=>y.enterCallbacks={}),oe=ol(R,"beforeRouteEnter",N,se,A),oe.push(C),be(oe))).then(()=>{oe=[];for(const y of a.list())oe.push(Li(y,N,se));return oe.push(C),be(oe)}).catch(y=>Yn(y,8)?y:Promise.reject(y))}function D(N,se,oe){o.list().forEach(le=>A(()=>le(N,se,oe)))}function O(N,se,oe,le,Oe){const R=E(N,se);if(R)return R;const C=se===xi,y=Wr?history.state:{};oe&&(le||C?r.replace(N.fullPath,st({scroll:C&&y&&y.scroll},Oe)):r.push(N.fullPath,Oe)),l.value=N,Re(N,se,oe,C),ye()}let H;function z(){H||(H=r.listen((N,se,oe)=>{if(!pe.listening)return;const le=p(N),Oe=L(le);if(Oe){P(st(Oe,{replace:!0,force:!0}),le).catch(Ns);return}c=le;const R=l.value;Wr&&Gx(hd(R.fullPath,oe.delta),Do()),M(le,R).catch(C=>Yn(C,12)?C:Yn(C,2)?(P(st(S(C.to),{force:!0}),le).then(y=>{Yn(y,20)&&!oe.delta&&oe.type===js.pop&&r.go(-1,!1)}).catch(Ns),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),G(C,le,R))).then(C=>{C=C||O(le,R,!1),C&&(oe.delta&&!Yn(C,8)?r.go(-oe.delta,!1):oe.type===js.pop&&Yn(C,20)&&r.go(-1,!1)),D(le,R,C)}).catch(Ns)}))}let Q=_s(),Z=_s(),ee;function G(N,se,oe){ye(N);const le=Z.list();return le.length?le.forEach(Oe=>Oe(N,se,oe)):console.error(N),Promise.reject(N)}function ge(){return ee&&l.value!==xi?Promise.resolve():new Promise((N,se)=>{Q.add([N,se])})}function ye(N){return ee||(ee=!N,z(),Q.list().forEach(([se,oe])=>N?oe(N):se()),Q.reset()),N}function Re(N,se,oe,le){const{scrollBehavior:Oe}=t;if(!Wr||!Oe)return Promise.resolve();const R=!oe&&Wx(hd(N.fullPath,0))||(le||!oe)&&history.state&&history.state.scroll||null;return to().then(()=>Oe(N,se,R)).then(C=>C&&Vx(C)).catch(C=>G(C,N,se))}const Ue=N=>r.go(N);let Ke;const re=new Set,pe={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:x,replace:w,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Z.add,isReady:ge,install(N){const se=this;N.component("RouterLink",my),N.component("RouterView",xy),N.config.globalProperties.$router=se,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>pr(l)}),Wr&&!Ke&&l.value===xi&&(Ke=!0,x(r.location).catch(Oe=>{}));const oe={};for(const Oe in xi)Object.defineProperty(oe,Oe,{get:()=>l.value[Oe],enumerable:!0});N.provide(Wu,se),N.provide(zm,Up(oe)),N.provide(hc,l);const le=N.unmount;re.add(N),N.unmount=function(){re.delete(N),re.size<1&&(c=xi,H&&H(),H=null,l.value=xi,Ke=!1,ee=!1),le()}}};function be(N){return N.reduce((se,oe)=>se.then(()=>A(oe)),Promise.resolve())}return pe}function Sy(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>es(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>es(c,l))||r.push(l))}return[n,i,r]}const pc={xs:18,sm:24,md:32,lg:38,xl:46},km={size:String};function Hm(t,e=pc){return Se(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}function Io(t,e){return t!==void 0&&t()||e}function by(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function cr(t,e){return t!==void 0?e.concat(t()):e}const Rd="0 0 24 24",ll=t=>t,cl=t=>`ionicons ${t}`,Vm={"mdi-":t=>`mdi ${t}`,"icon-":ll,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":cl,"ion-ios":cl,"ion-logo":cl,"iconfont ":ll,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`,"i-":ll},Gm={o_:"-outlined",r_:"-round",s_:"-sharp"},Wm={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},My=new RegExp("^("+Object.keys(Vm).join("|")+")"),Ey=new RegExp("^("+Object.keys(Gm).join("|")+")"),Cd=new RegExp("^("+Object.keys(Wm).join("|")+")"),Ty=/^[Mm]\s?[-+]?\.?\d/,Ay=/^img:/,wy=/^svguse:/,Ry=/^ion-/,Cy=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Pd=wn({name:"QIcon",props:{...km,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Xn(),i=Hm(t),r=Se(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=Se(()=>{let a,o=t.name;if(o==="none"||!o)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(o);if(u!==void 0)if(u.icon!==void 0){if(o=u.icon,o==="none"||!o)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(Ty.test(o)===!0){const[u,f=Rd]=o.split("|");return{svg:!0,viewBox:f,nodes:u.split("&&").map(d=>{const[h,g,_]=d.split("@@");return Ge("path",{style:g,d:h,transform:_})})}}if(Ay.test(o)===!0)return{img:!0,src:o.substring(4)};if(wy.test(o)===!0){const[u,f=Rd]=o.split("|");return{svguse:!0,src:u.substring(7),viewBox:f}}let l=" ";const c=o.match(My);if(c!==null)a=Vm[c[1]](o);else if(Cy.test(o)===!0)a=o;else if(Ry.test(o)===!0)a=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${o.substring(3)}`;else if(Cd.test(o)===!0){a="notranslate material-symbols";const u=o.match(Cd);u!==null&&(o=o.substring(6),a+=Wm[u[1]]),l=o}else{a="notranslate material-icons";const u=o.match(Ey);u!==null&&(o=o.substring(2),a+=Gm[u[1]]),l=o}return{cls:a,content:l}});return()=>{const a={class:r.value,style:i.value,"aria-hidden":"true"};return s.value.none===!0?Ge(t.tag,a,Io(e.default)):s.value.img===!0?Ge(t.tag,a,cr(e.default,[Ge("img",{src:s.value.src})])):s.value.svg===!0?Ge(t.tag,a,cr(e.default,[Ge("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?Ge(t.tag,a,cr(e.default,[Ge("svg",{viewBox:s.value.viewBox},[Ge("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(a.class+=" "+s.value.cls),Ge(t.tag,a,cr(e.default,[s.value.content])))}}}),Py={size:{type:[String,Number],default:"1em"},color:String};function Ly(t){return{cSize:Se(()=>t.size in pc?`${pc[t.size]}px`:t.size),classes:Se(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}const Dy=wn({name:"QSpinner",props:{...Py,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=Ly(t);return()=>Ge("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[Ge("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function mc(t,e){const n=t.style;for(const i in e)n[i]=e[i]}function Iy(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=pr(t);if(e)return e.$el||e}function Uy(t,e=250){let n=!1,i;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),i=t.apply(this,arguments)),i}}function Ld(t,e,n,i){n.modifiers.stop===!0&&bm(t);const r=n.modifiers.color;let s=n.modifiers.center;s=s===!0||i===!0;const a=document.createElement("span"),o=document.createElement("span"),l=j0(t),{left:c,top:u,width:f,height:d}=e.getBoundingClientRect(),h=Math.sqrt(f*f+d*d),g=h/2,_=`${(f-h)/2}px`,m=s?_:`${l.left-c-g}px`,p=`${(d-h)/2}px`,S=s?p:`${l.top-u-g}px`;o.className="q-ripple__inner",mc(o,{height:`${h}px`,width:`${h}px`,transform:`translate3d(${m},${S},0) scale3d(.2,.2,1)`,opacity:0}),a.className=`q-ripple${r?" text-"+r:""}`,a.setAttribute("dir","ltr"),a.appendChild(o),e.appendChild(a);const E=()=>{a.remove(),clearTimeout(x)};n.abort.push(E);let x=setTimeout(()=>{o.classList.add("q-ripple__inner--enter"),o.style.transform=`translate3d(${_},${p},0) scale3d(1,1,1)`,o.style.opacity=.2,x=setTimeout(()=>{o.classList.remove("q-ripple__inner--enter"),o.classList.add("q-ripple__inner--leave"),o.style.opacity=0,x=setTimeout(()=>{a.remove(),n.abort.splice(n.abort.indexOf(E),1)},275)},250)},50)}function Dd(t,{modifiers:e,value:n,arg:i}){const r=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:r.early===!0,stop:r.stop===!0,center:r.center===!0,color:r.color||i,keyCodes:[].concat(r.keyCodes||13)}}const Ny=$0({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const i={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(r){i.enabled===!0&&r.qSkipRipple!==!0&&r.type===(i.modifiers.early===!0?"pointerdown":"click")&&Ld(r,t,i,r.qKeyEvent===!0)},keystart:Uy(r=>{i.enabled===!0&&r.qSkipRipple!==!0&&uc(r,i.modifiers.keyCodes)===!0&&r.type===`key${i.modifiers.early===!0?"down":"up"}`&&Ld(r,t,i,!0)},300)};Dd(i,e),t.__qripple=i,K0(i,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&Dd(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),Z0(e,"main"),delete t._qripple)}}),Xm={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Fy=Object.keys(Xm),Oy={align:{type:String,validator:t=>Fy.includes(t)}};function By(t){return Se(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${Xm[e]}`})}function zy(t){return t.appContext.config.globalProperties.$router!==void 0}function Id(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function Ud(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ky(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(Array.isArray(r)===!1||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Nd(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Hy(t,e){return Array.isArray(t)===!0?Nd(t,e):Array.isArray(e)===!0?Nd(e,t):t===e}function Vy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(Hy(t[n],e[n])===!1)return!1;return!0}const Gy={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function Wy({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Xn(),{props:i,proxy:r,emit:s}=n,a=zy(n),o=Se(()=>i.disable!==!0&&i.href!==void 0),l=Se(e===!0?()=>a===!0&&i.disable!==!0&&o.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!=="":()=>a===!0&&o.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!==""),c=Se(()=>l.value===!0?S(i.to):null),u=Se(()=>c.value!==null),f=Se(()=>o.value===!0||u.value===!0),d=Se(()=>i.type==="a"||f.value===!0?"a":i.tag||t||"div"),h=Se(()=>o.value===!0?{href:i.href,target:i.target}:u.value===!0?{href:c.value.href,target:i.target}:{}),g=Se(()=>{if(u.value===!1)return-1;const{matched:w}=c.value,{length:L}=w,P=w[L-1];if(P===void 0)return-1;const U=r.$route.matched;if(U.length===0)return-1;const A=U.findIndex(Ud.bind(null,P));if(A!==-1)return A;const M=Id(w[L-2]);return L>1&&Id(P)===M&&U[U.length-1].path!==M?U.findIndex(Ud.bind(null,w[L-2])):A}),_=Se(()=>u.value===!0&&g.value!==-1&&ky(r.$route.params,c.value.params)),m=Se(()=>_.value===!0&&g.value===r.$route.matched.length-1&&Vy(r.$route.params,c.value.params)),p=Se(()=>u.value===!0?m.value===!0?` ${i.exactActiveClass} ${i.activeClass}`:i.exact===!0?"":_.value===!0?` ${i.activeClass}`:"":"");function S(w){try{return r.$router.resolve(w)}catch{}return null}function E(w,{returnRouterError:L,to:P=i.to,replace:U=i.replace}={}){if(i.disable===!0)return w.preventDefault(),Promise.resolve(!1);if(w.metaKey||w.altKey||w.ctrlKey||w.shiftKey||w.button!==void 0&&w.button!==0||i.target==="_blank")return Promise.resolve(!1);w.preventDefault();const A=r.$router[U===!0?"replace":"push"](P);return L===!0?A:A.then(()=>{}).catch(()=>{})}function x(w){if(u.value===!0){const L=P=>E(w,P);s("click",w,L),w.defaultPrevented!==!0&&L()}else s("click",w)}return{hasRouterLink:u,hasHrefLink:o,hasLink:f,linkTag:d,resolvedLink:c,linkIsActive:_,linkIsExactActive:m,linkClass:p,linkAttrs:h,getLink:S,navigateToRouterLink:E,navigateOnClick:x}}const Fd={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Xy={xs:8,sm:10,md:14,lg:20,xl:24},qy=["button","submit","reset"],$y=/[^\s]\/[^\s]/,jy=["flat","outline","push","unelevated"];function Yy(t,e){return t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e}const Ky={...km,...Gy,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...jy.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Oy.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Zy={...Ky,round:Boolean};function Jy(t){const e=Hm(t,Xy),n=By(t),{hasRouterLink:i,hasLink:r,linkTag:s,linkAttrs:a,navigateOnClick:o}=Wy({fallbackTag:"button"}),l=Se(()=>{const m=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},m,{padding:t.padding.split(/\s+/).map(p=>p in Fd?Fd[p]+"px":p).join(" "),minWidth:"0",minHeight:"0"}):m}),c=Se(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=Se(()=>t.disable!==!0&&t.loading!==!0),f=Se(()=>u.value===!0?t.tabindex||0:-1),d=Se(()=>Yy(t,"standard")),h=Se(()=>{const m={tabindex:f.value};return r.value===!0?Object.assign(m,a.value):qy.includes(t.type)===!0&&(m.type=t.type),s.value==="a"?(t.disable===!0?m["aria-disabled"]="true":m.href===void 0&&(m.role="button"),i.value!==!0&&$y.test(t.type)===!0&&(m.type=t.type)):t.disable===!0&&(m.disabled="",m["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(m,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),m}),g=Se(()=>{let m;t.color!==void 0?t.flat===!0||t.outline===!0?m=`text-${t.textColor||t.color}`:m=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(m=`text-${t.textColor}`);const p=t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${p}`+(m!==void 0?" "+m:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),_=Se(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:l,innerClasses:_,attributes:h,hasLink:r,linkTag:s,navigateOnClick:o,isActionable:u}}const{passiveCapture:ln}=Bi;let Ar=null,wr=null,Rr=null;const Qy=wn({name:"QBtn",props:{...Zy,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:i}=Xn(),{classes:r,style:s,innerClasses:a,attributes:o,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:f}=Jy(t),d=wt(null),h=wt(null);let g=null,_,m=null;const p=Se(()=>t.label!==void 0&&t.label!==null&&t.label!==""),S=Se(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),E=Se(()=>({center:t.round})),x=Se(()=>{const z=Math.max(0,Math.min(100,t.percentage));return z>0?{transition:"transform 0.6s",transform:`translateX(${z-100}%)`}:{}}),w=Se(()=>{if(t.loading===!0)return{onMousedown:H,onTouchstart:H,onClick:H,onKeydown:H,onKeyup:H};if(f.value===!0){const z={onClick:P,onKeydown:U,onMousedown:M};if(i.$q.platform.has.touch===!0){const Q=t.onTouchstart!==void 0?"":"Passive";z[`onTouchstart${Q}`]=A}return z}return{onClick:Tr}}),L=Se(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+r.value,style:s.value,...o.value,...w.value}));function P(z){if(d.value!==null){if(z!==void 0){if(z.defaultPrevented===!0)return;const Q=document.activeElement;if(t.type==="submit"&&Q!==document.body&&d.value.contains(Q)===!1&&Q.contains(d.value)===!1){z.qAvoidFocus!==!0&&d.value.focus();const Z=()=>{var ee;document.removeEventListener("keydown",Tr,!0),document.removeEventListener("keyup",Z,ln),(ee=d.value)==null||ee.removeEventListener("blur",Z,ln)};document.addEventListener("keydown",Tr,!0),document.addEventListener("keyup",Z,ln),d.value.addEventListener("blur",Z,ln)}}u(z)}}function U(z){d.value!==null&&(n("keydown",z),uc(z,[13,32])===!0&&wr!==d.value&&(wr!==null&&O(),z.defaultPrevented!==!0&&(z.qAvoidFocus!==!0&&d.value.focus(),wr=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",D,!0),d.value.addEventListener("blur",D,ln)),Tr(z)))}function A(z){d.value!==null&&(n("touchstart",z),z.defaultPrevented!==!0&&(Ar!==d.value&&(Ar!==null&&O(),Ar=d.value,g=z.target,g.addEventListener("touchcancel",D,ln),g.addEventListener("touchend",D,ln)),_=!0,m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,_=!1},200)))}function M(z){d.value!==null&&(z.qSkipRipple=_===!0,n("mousedown",z),z.defaultPrevented!==!0&&Rr!==d.value&&(Rr!==null&&O(),Rr=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",D,ln)))}function D(z){if(d.value!==null&&!((z==null?void 0:z.type)==="blur"&&document.activeElement===d.value)){if((z==null?void 0:z.type)==="keyup"){if(wr===d.value&&uc(z,[13,32])===!0){const Q=new MouseEvent("click",z);Q.qKeyEvent=!0,z.defaultPrevented===!0&&Y0(Q),z.cancelBubble===!0&&bm(Q),d.value.dispatchEvent(Q),Tr(z),z.qKeyEvent=!0}n("keyup",z)}O()}}function O(z){var Z,ee;const Q=h.value;z!==!0&&(Ar===d.value||Rr===d.value)&&Q!==null&&Q!==document.activeElement&&(Q.setAttribute("tabindex",-1),Q.focus()),Ar===d.value&&(g!==null&&(g.removeEventListener("touchcancel",D,ln),g.removeEventListener("touchend",D,ln)),Ar=g=null),Rr===d.value&&(document.removeEventListener("mouseup",D,ln),Rr=null),wr===d.value&&(document.removeEventListener("keyup",D,!0),(Z=d.value)==null||Z.removeEventListener("blur",D,ln),wr=null),(ee=d.value)==null||ee.classList.remove("q-btn--active")}function H(z){Tr(z),z.qSkipRipple=!0}return Fi(()=>{O(!0)}),Object.assign(i,{click:z=>{f.value===!0&&P(z)}}),()=>{let z=[];t.icon!==void 0&&z.push(Ge(Pd,{name:t.icon,left:t.stack!==!0&&p.value===!0,role:"img"})),p.value===!0&&z.push(Ge("span",{class:"block"},[t.label])),z=cr(e.default,z),t.iconRight!==void 0&&t.round===!1&&z.push(Ge(Pd,{name:t.iconRight,right:t.stack!==!0&&p.value===!0,role:"img"}));const Q=[Ge("span",{class:"q-focus-helper",ref:h})];return t.loading===!0&&t.percentage!==void 0&&Q.push(Ge("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[Ge("span",{class:"q-btn__progress-indicator fit block",style:x.value})])),Q.push(Ge("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+a.value},z)),t.loading!==null&&Q.push(Ge(_0,{name:"q-transition--fade"},()=>t.loading===!0?[Ge("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[Ge(Dy)])]:null)),rv(Ge(c.value,L.value,Q),[[Ny,S.value,void 0,E.value]])}}}),eS=wn({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:e}){const n=Se(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>Ge("div",{class:n.value},Io(e.default))}}),tS=wn({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=Se(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>Ge("div",{class:n.value,role:"toolbar"},Io(e.default))}});function nS(){const t=wt(!Vn.value);return t.value===!1&&gr(()=>{t.value=!0}),{isHydrated:t}}const qm=typeof ResizeObserver<"u",Od=qm===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},lo=wn({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,i,r={width:-1,height:-1};function s(l){l===!0||t.debounce===0||t.debounce==="0"?a():n===null&&(n=setTimeout(a,t.debounce))}function a(){if(n!==null&&(clearTimeout(n),n=null),i){const{offsetWidth:l,offsetHeight:c}=i;(l!==r.width||c!==r.height)&&(r={width:l,height:c},e("resize",r))}}const{proxy:o}=Xn();if(o.trigger=s,qm===!0){let l;const c=u=>{i=o.$el.parentNode,i?(l=new ResizeObserver(s),l.observe(i),a()):u!==!0&&to(()=>{c(!0)})};return gr(()=>{c()}),Fi(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():i&&l.unobserve(i))}),_r}else{let l=function(){n!==null&&(clearTimeout(n),n=null),f!==void 0&&(f.removeEventListener!==void 0&&f.removeEventListener("resize",s,Bi.passive),f=void 0)},c=function(){l(),i!=null&&i.contentDocument&&(f=i.contentDocument.defaultView,f.addEventListener("resize",s,Bi.passive),a())};const{isHydrated:u}=nS();let f;return gr(()=>{to(()=>{i=o.$el,i&&c()})}),Fi(l),()=>{if(u.value===!0)return Ge("object",{class:"q--avoid-card-border",style:Od.style,tabindex:-1,type:"text/html",data:Od.url,"aria-hidden":"true",onLoad:c})}}}}),iS=wn({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:i}}=Xn(),r=dn(Lo,ci);if(r===ci)return console.error("QHeader needs to be child of QLayout"),ci;const s=wt(parseInt(t.heightHint,10)),a=wt(!0),o=Se(()=>t.reveal===!0||r.view.value.indexOf("H")!==-1||i.platform.is.ios&&r.isContainer.value===!0),l=Se(()=>{if(t.modelValue!==!0)return 0;if(o.value===!0)return a.value===!0?s.value:0;const S=s.value-r.scroll.value.position;return S>0?S:0}),c=Se(()=>t.modelValue!==!0||o.value===!0&&a.value!==!0),u=Se(()=>t.modelValue===!0&&c.value===!0&&t.reveal===!0),f=Se(()=>"q-header q-layout__section--marginal "+(o.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),d=Se(()=>{const S=r.rows.value.top,E={};return S[0]==="l"&&r.left.space===!0&&(E[i.lang.rtl===!0?"right":"left"]=`${r.left.size}px`),S[2]==="r"&&r.right.space===!0&&(E[i.lang.rtl===!0?"left":"right"]=`${r.right.size}px`),E});function h(S,E){r.update("header",S,E)}function g(S,E){S.value!==E&&(S.value=E)}function _({height:S}){g(s,S),h("size",S)}function m(S){u.value===!0&&g(a,!0),n("focusin",S)}bt(()=>t.modelValue,S=>{h("space",S),g(a,!0),r.animate()}),bt(l,S=>{h("offset",S)}),bt(()=>t.reveal,S=>{S===!1&&g(a,t.modelValue)}),bt(a,S=>{r.animate(),n("reveal",S)}),bt(r.scroll,S=>{t.reveal===!0&&g(a,S.direction==="up"||S.position<=t.revealOffset||S.position-S.inflectionPoint<100)});const p={};return r.instances.header=p,t.modelValue===!0&&h("size",s.value),h("space",t.modelValue),h("offset",l.value),Fi(()=>{r.instances.header===p&&(r.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const S=by(e.default,[]);return t.elevated===!0&&S.push(Ge("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),S.push(Ge(lo,{debounce:0,onResize:_})),Ge("header",{class:f.value,style:d.value,onFocusin:m},S)}}}),rS=wn({name:"QPageContainer",setup(t,{slots:e}){const{proxy:{$q:n}}=Xn(),i=dn(Lo,ci);if(i===ci)return console.error("QPageContainer needs to be child of QLayout"),ci;Kr(hx,!0);const r=Se(()=>{const s={};return i.header.space===!0&&(s.paddingTop=`${i.header.size}px`),i.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(s.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),s});return()=>Ge("div",{class:"q-page-container",style:r.value},Io(e.default))}}),sS=wn({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:i}}=Xn(),r=dn(Lo,ci);if(r===ci)return console.error("QFooter needs to be child of QLayout"),ci;const s=wt(parseInt(t.heightHint,10)),a=wt(!0),o=wt(Vn.value===!0||r.isContainer.value===!0?0:window.innerHeight),l=Se(()=>t.reveal===!0||r.view.value.indexOf("F")!==-1||i.platform.is.ios&&r.isContainer.value===!0),c=Se(()=>r.isContainer.value===!0?r.containerHeight.value:o.value),u=Se(()=>{if(t.modelValue!==!0)return 0;if(l.value===!0)return a.value===!0?s.value:0;const w=r.scroll.value.position+c.value+s.value-r.height.value;return w>0?w:0}),f=Se(()=>t.modelValue!==!0||l.value===!0&&a.value!==!0),d=Se(()=>t.modelValue===!0&&f.value===!0&&t.reveal===!0),h=Se(()=>"q-footer q-layout__section--marginal "+(l.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(f.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(l.value!==!0?" hidden":""):"")),g=Se(()=>{const w=r.rows.value.bottom,L={};return w[0]==="l"&&r.left.space===!0&&(L[i.lang.rtl===!0?"right":"left"]=`${r.left.size}px`),w[2]==="r"&&r.right.space===!0&&(L[i.lang.rtl===!0?"left":"right"]=`${r.right.size}px`),L});function _(w,L){r.update("footer",w,L)}function m(w,L){w.value!==L&&(w.value=L)}function p({height:w}){m(s,w),_("size",w)}function S(){if(t.reveal!==!0)return;const{direction:w,position:L,inflectionPoint:P}=r.scroll.value;m(a,w==="up"||L-P<100||r.height.value-c.value-L-s.value<300)}function E(w){d.value===!0&&m(a,!0),n("focusin",w)}bt(()=>t.modelValue,w=>{_("space",w),m(a,!0),r.animate()}),bt(u,w=>{_("offset",w)}),bt(()=>t.reveal,w=>{w===!1&&m(a,t.modelValue)}),bt(a,w=>{r.animate(),n("reveal",w)}),bt([s,r.scroll,r.height],S),bt(()=>i.screen.height,w=>{r.isContainer.value!==!0&&m(o,w)});const x={};return r.instances.footer=x,t.modelValue===!0&&_("size",s.value),_("space",t.modelValue),_("offset",u.value),Fi(()=>{r.instances.footer===x&&(r.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const w=cr(e.default,[Ge(lo,{debounce:0,onResize:p})]);return t.elevated===!0&&w.push(Ge("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),Ge("footer",{class:h.value,style:g.value,onFocusin:E},w)}}}),aS=[Element,String],oS=[null,document,document.body,document.scrollingElement,document.documentElement];function lS(t,e){let n=Iy(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return oS.includes(n)?window:n}function cS(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function uS(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let ma;function ul(){if(ma!==void 0)return ma;const t=document.createElement("p"),e=document.createElement("div");mc(t,{width:"100%",height:"200px"}),mc(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let i=t.offsetWidth;return n===i&&(i=e.clientWidth),e.remove(),ma=n-i,ma}const{passive:Bd}=Bi,fS=["both","horizontal","vertical"],dS=wn({name:"QScrollObserver",props:{axis:{type:String,validator:t=>fS.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:aS},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,r,s;bt(()=>t.scrollTarget,()=>{l(),o()});function a(){i==null||i();const f=Math.max(0,cS(r)),d=uS(r),h={top:f-n.position.top,left:d-n.position.left};if(t.axis==="vertical"&&h.top===0||t.axis==="horizontal"&&h.left===0)return;const g=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";n.position={top:f,left:d},n.directionChanged=n.direction!==g,n.delta=h,n.directionChanged===!0&&(n.direction=g,n.inflectionPoint=n.position),e("scroll",{...n})}function o(){r=lS(s,t.scrollTarget),r.addEventListener("scroll",c,Bd),c(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",c,Bd),r=void 0)}function c(f){if(f===!0||t.debounce===0||t.debounce==="0")a();else if(i===null){const[d,h]=t.debounce?[setTimeout(a,t.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];i=()=>{h(d),i=null}}}const{proxy:u}=Xn();return bt(()=>u.$q.lang.rtl,a),gr(()=>{s=u.$el.parentNode,o()}),Fi(()=>{i==null||i(),l()}),Object.assign(u,{trigger:c,getPosition:()=>n}),_r}}),hS=wn({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const{proxy:{$q:i}}=Xn(),r=wt(null),s=wt(i.screen.height),a=wt(t.container===!0?0:i.screen.width),o=wt({position:0,direction:"down",inflectionPoint:0}),l=wt(0),c=wt(Vn.value===!0?0:ul()),u=Se(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),f=Se(()=>t.container===!1?{minHeight:i.screen.height+"px"}:null),d=Se(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),h=Se(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function g(x){if(t.container===!0||document.qScrollPrevented!==!0){const w={position:x.position.top,direction:x.direction,directionChanged:x.directionChanged,inflectionPoint:x.inflectionPoint.top,delta:x.delta.top};o.value=w,t.onScroll!==void 0&&n("scroll",w)}}function _(x){const{height:w,width:L}=x;let P=!1;s.value!==w&&(P=!0,s.value=w,t.onScrollHeight!==void 0&&n("scrollHeight",w),p()),a.value!==L&&(P=!0,a.value=L),P===!0&&t.onResize!==void 0&&n("resize",x)}function m({height:x}){l.value!==x&&(l.value=x,p())}function p(){if(t.container===!0){const x=s.value>l.value?ul():0;c.value!==x&&(c.value=x)}}let S=null;const E={instances:{},view:Se(()=>t.view),isContainer:Se(()=>t.container),rootRef:r,height:s,containerHeight:l,scrollbarWidth:c,totalWidth:Se(()=>a.value+c.value),rows:Se(()=>{const x=t.view.toLowerCase().split(" ");return{top:x[0].split(""),middle:x[1].split(""),bottom:x[2].split("")}}),header:Un({size:0,offset:0,space:!1}),right:Un({size:300,offset:0,space:!1}),footer:Un({size:0,offset:0,space:!1}),left:Un({size:300,offset:0,space:!1}),scroll:o,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(x,w,L){E[x][w]=L}};if(Kr(Lo,E),ul()>0){let x=function(){P=null,U.classList.remove("hide-scrollbar")},w=function(){if(P===null){if(U.scrollHeight>i.screen.height)return;U.classList.add("hide-scrollbar")}else clearTimeout(P);P=setTimeout(x,300)},L=function(A){P!==null&&A==="remove"&&(clearTimeout(P),x()),window[`${A}EventListener`]("resize",w)},P=null;const U=document.body;bt(()=>t.container!==!0?"add":"remove",L),t.container!==!0&&L("add"),Ou(()=>{L("remove")})}return()=>{const x=cr(e.default,[Ge(dS,{onScroll:g}),Ge(lo,{onResize:_})]),w=Ge("div",{class:u.value,style:f.value,ref:t.container===!0?void 0:r,tabindex:-1},x);return t.container===!0?Ge("div",{class:"q-layout-container overflow-hidden",ref:r},[Ge(lo,{onResize:m}),Ge("div",{class:"absolute-full",style:d.value},[Ge("div",{class:"scroll",style:h.value},[w])])]):w}}}),pS="/exacto-website/assets/ExactoWhite-CQ0hb-jq.svg",$m=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},mS={key:0,class:"bash-content",style:{"max-width":"1500px",margin:"auto",width:"100%"}},gS={class:"row items-center justify-between q-pa-md",style:{"max-width":"1500px",margin:"auto",width:"100%"}},_S={class:"row items-center q-gutter-x-sm"},vS={href:"mailto:contact@goexacto.com?subject=Information&body=I%20would%20like%20to%20receive%20more%20information%20about%20your%20company.",class:"icon-link",title:"Enviar correo",style:{"text-decoration":"none",color:"inherit"}},xS={__name:"MainLayout",setup(t){const e=wt(!0);return(n,i)=>{const r=tc("router-view"),s=tc("font-awesome-icon");return Gs(),ku(hS,{view:"hHh lpR fFf"},{default:ir(()=>[xt(iS,{elevated:"",class:"main-header",style:{"background-color":"#1E1E1E"}},{default:ir(()=>[e.value?(Gs(),mm("div",mS,[i[1]||(i[1]=Pn("span",{class:"text-green"},"$ generate --pi --number-of-digits 6.02E23",-1)),xt(Qy,{dense:"",flat:"",icon:"close",class:"close-btn",onClick:i[0]||(i[0]=a=>e.value=!1)})])):e0("",!0),xt(tS,null,{default:ir(()=>[xt(eS,{style:{display:"flex","justify-content":"center","align-items":"center",padding:"auto",height:"90px"}},{default:ir(()=>i[2]||(i[2]=[Pn("img",{src:pS,alt:"ExactoBv",class:"logo-img"},null,-1)])),_:1,__:[2]})]),_:1})]),_:1}),xt(rS,null,{default:ir(()=>[xt(r)]),_:1}),xt(sS,{class:"text-white",style:{"background-color":"#1E1E1E",height:"8vh"}},{default:ir(()=>[Pn("div",gS,[i[4]||(i[4]=Pn("div",{class:"icon-wrapper column"},[Pn("span",{class:"rights"},"Exacto B.V. © 2025. All rights reserved.")],-1)),Pn("div",_S,[Pn("a",vS,[i[3]||(i[3]=Pn("span",{class:"tooltip"},"contact@goexacto.com",-1)),xt(s,{icon:"fa-solid fa-envelope",class:"social-icon"})])])])]),_:1})]),_:1})}}},yS=$m(xS,[["__scopeId","data-v-02ae30c4"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xu="176",SS=0,zd=1,bS=2,jm=1,MS=2,ti=3,zi=0,Kt=1,si=2,Ui=0,Zr=1,kd=2,Hd=3,Vd=4,ES=5,or=100,TS=101,AS=102,wS=103,RS=104,CS=200,PS=201,LS=202,DS=203,gc=204,_c=205,IS=206,US=207,NS=208,FS=209,OS=210,BS=211,zS=212,kS=213,HS=214,vc=0,xc=1,yc=2,ns=3,Sc=4,bc=5,Mc=6,Ec=7,Ym=0,VS=1,GS=2,Ni=0,WS=1,XS=2,qS=3,$S=4,jS=5,YS=6,KS=7,Km=300,is=301,rs=302,Tc=303,Ac=304,Uo=306,wc=1e3,ur=1001,Rc=1002,Mn=1003,ZS=1004,ga=1005,Nn=1006,fl=1007,fr=1008,Gn=1009,Zm=1010,Jm=1011,Ys=1012,qu=1013,vr=1014,oi=1015,ia=1016,$u=1017,ju=1018,Ks=1020,Qm=35902,eg=1021,tg=1022,yn=1023,Zs=1026,Js=1027,ng=1028,Yu=1029,ig=1030,Ku=1031,Zu=1033,Wa=33776,Xa=33777,qa=33778,$a=33779,Cc=35840,Pc=35841,Lc=35842,Dc=35843,Ic=36196,Uc=37492,Nc=37496,Fc=37808,Oc=37809,Bc=37810,zc=37811,kc=37812,Hc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,qc=37818,$c=37819,jc=37820,Yc=37821,ja=36492,Kc=36494,Zc=36495,rg=36283,Jc=36284,Qc=36285,eu=36286,JS=3200,QS=3201,sg=0,eb=1,Di="",un="srgb",ss="srgb-linear",co="linear",lt="srgb",Cr=7680,Gd=519,tb=512,nb=513,ib=514,ag=515,rb=516,sb=517,ab=518,ob=519,Wd=35044,Xd="300 es",li=2e3,uo=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dl=Math.PI/180,tu=180/Math.PI;function ra(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function lb(t,e){return(t%e+e)%e}function hl(t,e,n){return(1-n)*t+n*e}function vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],S=r[1],E=r[4],x=r[7],w=r[2],L=r[5],P=r[8];return s[0]=a*_+o*S+l*w,s[3]=a*m+o*E+l*L,s[6]=a*p+o*x+l*P,s[1]=c*_+u*S+f*w,s[4]=c*m+u*E+f*L,s[7]=c*p+u*x+f*P,s[2]=d*_+h*S+g*w,s[5]=d*m+h*E+g*L,s[8]=d*p+h*x+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(pl.makeScale(e,n)),this}rotate(e){return this.premultiply(pl.makeRotation(-e)),this}translate(e,n){return this.premultiply(pl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pl=new $e;function og(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cb(){const t=fo("canvas");return t.style.display="block",t}const qd={};function Ya(t){t in qd||(qd[t]=!0,console.warn(t))}function ub(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function fb(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function db(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $d=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hb(){const t={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Di?co:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ss]:{primaries:e,whitePoint:i,transfer:co,toXYZ:$d,fromXYZ:jd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:$d,fromXYZ:jd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),t}const et=hb();function ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Pr;class pb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pr===void 0&&(Pr=fo("canvas")),Pr.width=e.width,Pr.height=e.height;const r=Pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ui(n[i]/255)*255):n[i]=ui(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mb=0;class Ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ml(r[a].image)):s.push(ml(r[a]))}else s=ml(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ml(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gb=0;class Zt extends cs{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=ur,r=ur,s=Nn,a=fr,o=yn,l=Gn,c=Zt.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=ra(),this.name="",this.source=new Ju(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wc:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wc:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Km;Zt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(h+1)/2,w=(p+1)/2,L=(u+d)/4,P=(f+_)/4,U=(g+m)/4;return E>x&&E>w?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=L/i,s=P/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=L/r,s=U/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=U/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _b extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ju(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends _b{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class lg extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vb extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-o;const p=l*d+c*h+u*g+f*_,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const w=Math.sqrt(E),L=Math.atan2(w,p*S);m=Math.sin(m*L)/w,o=Math.sin(o*L)/w}const x=o*S;if(l=l*m+d*x,c=c*m+h*x,u=u*m+g*x,f=f*m+_*x,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[n]=o*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-o*h,e[n+2]=c*g+u*h+o*d-l*f,e[n+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-n;return this._w=h*a+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gl=new X,Yd=new sa;class aa{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),va.subVectors(this.max,xs),Lr.subVectors(e.a,xs),Dr.subVectors(e.b,xs),Ir.subVectors(e.c,xs),yi.subVectors(Dr,Lr),Si.subVectors(Ir,Dr),Ki.subVectors(Lr,Ir);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Ki.z,Ki.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Ki.z,0,-Ki.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Ki.y,Ki.x,0];return!_l(n,Lr,Dr,Ir,va)||(n=[1,0,0,0,1,0,0,0,1],!_l(n,Lr,Dr,Ir,va))?!1:(xa.crossVectors(yi,Si),n=[xa.x,xa.y,xa.z],_l(n,Lr,Dr,Ir,va))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new X,new X,new X,new X,new X,new X,new X,new X],gn=new X,_a=new aa,Lr=new X,Dr=new X,Ir=new X,yi=new X,Si=new X,Ki=new X,xs=new X,va=new X,xa=new X,Zi=new X;function _l(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Zi.fromArray(t,s);const o=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=n.dot(Zi),u=i.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xb=new aa,ys=new X,vl=new X;class No{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const n=ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(vl)),this.expandByPoint(ys.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new X,xl=new X,ya=new X,bi=new X,yl=new X,Sa=new X,Sl=new X;class Qu{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xl.copy(e).add(n).multiplyScalar(.5),ya.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(xl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ya),o=bi.dot(this.direction),l=-bi.dot(ya),c=bi.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xl).addScaledVector(ya,d),h}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){yl.subVectors(n,e),Sa.subVectors(i,e),Sl.crossVectors(yl,Sa);let a=this.direction.dot(Sl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const l=o*this.direction.dot(Sa.crossVectors(bi,Sa));if(l<0)return null;const c=o*this.direction.dot(yl.cross(bi));if(c<0||l+c>a)return null;const u=-o*bi.dot(Sl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,a,o,l,c,u,f,d,h,g,_,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,h,g,_,m)}set(e,n,i,r,s,a,o,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),a=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-o*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*o,n[4]=g*o-h,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=h*o-g,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*o,n[4]=-a*f,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*u,n[9]=_-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=a*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=o*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yb,e,Sb)}lookAt(e,n,i){const r=this.elements;return Qt.subVectors(e,n),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Mi.crossVectors(i,Qt),Mi.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Mi.crossVectors(i,Qt)),Mi.normalize(),ba.crossVectors(Qt,Mi),r[0]=Mi.x,r[4]=ba.x,r[8]=Qt.x,r[1]=Mi.y,r[5]=ba.y,r[9]=Qt.y,r[2]=Mi.z,r[6]=ba.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],E=i[7],x=i[11],w=i[15],L=r[0],P=r[4],U=r[8],A=r[12],M=r[1],D=r[5],O=r[9],H=r[13],z=r[2],Q=r[6],Z=r[10],ee=r[14],G=r[3],ge=r[7],ye=r[11],Re=r[15];return s[0]=a*L+o*M+l*z+c*G,s[4]=a*P+o*D+l*Q+c*ge,s[8]=a*U+o*O+l*Z+c*ye,s[12]=a*A+o*H+l*ee+c*Re,s[1]=u*L+f*M+d*z+h*G,s[5]=u*P+f*D+d*Q+h*ge,s[9]=u*U+f*O+d*Z+h*ye,s[13]=u*A+f*H+d*ee+h*Re,s[2]=g*L+_*M+m*z+p*G,s[6]=g*P+_*D+m*Q+p*ge,s[10]=g*U+_*O+m*Z+p*ye,s[14]=g*A+_*H+m*ee+p*Re,s[3]=S*L+E*M+x*z+w*G,s[7]=S*P+E*D+x*Q+w*ge,s[11]=S*U+E*O+x*Z+w*ye,s[15]=S*A+E*H+x*ee+w*Re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*h-i*l*h)+_*(+n*l*h-n*c*d+s*a*d-r*a*h+r*c*u-s*l*u)+m*(+n*c*f-n*o*h-s*a*f+i*a*h+s*o*u-i*c*u)+p*(-r*o*u-n*l*f+n*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=f*m*c-_*d*c+_*l*h-o*m*h-f*l*p+o*d*p,E=g*d*c-u*m*c-g*l*h+a*m*h+u*l*p-a*d*p,x=u*_*c-g*f*c+g*o*h-a*_*h-u*o*p+a*f*p,w=g*f*l-u*_*l-g*o*d+a*_*d+u*o*m-a*f*m,L=n*S+i*E+r*x+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=S*P,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*P,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*P,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*h-i*l*h)*P,e[4]=E*P,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*P,e[6]=(g*l*s-a*m*s-g*r*c+n*m*c+a*r*p-n*l*p)*P,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*h+n*l*h)*P,e[8]=x*P,e[9]=(g*f*s-u*_*s-g*i*h+n*_*h+u*i*p-n*f*p)*P,e[10]=(a*_*s-g*o*s+g*i*c-n*_*c-a*i*p+n*o*p)*P,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*h-n*o*h)*P,e[12]=w*P,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*P,e[14]=(g*o*r-a*_*r-g*i*l+n*_*l+a*i*m-n*o*m)*P,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,S=l*c,E=l*u,x=l*f,w=i.x,L=i.y,P=i.z;return r[0]=(1-(_+p))*w,r[1]=(h+x)*w,r[2]=(g-E)*w,r[3]=0,r[4]=(h-x)*L,r[5]=(1-(d+p))*L,r[6]=(m+S)*L,r[7]=0,r[8]=(g+E)*P,r[9]=(m-S)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const a=Ur.set(r[4],r[5],r[6]).length(),o=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const c=1/s,u=1/a,f=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,n.setFromRotationMatrix(_n),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=li){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,g;if(o===li)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===uo)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),d=(n+e)*c,h=(i+r)*u;let g,_;if(o===li)g=(a+s)*f,_=-2*f;else if(o===uo)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new X,_n=new pt,yb=new X(0,0,0),Sb=new X(1,1,1),Mi=new X,ba=new X,Qt=new X,Kd=new pt,Zd=new sa;class Wn{constructor(e=0,n=0,i=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";let ef=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bb=0;const Jd=new X,Nr=new sa,Jn=new pt,Ma=new X,Ss=new X,Mb=new X,Eb=new sa,Qd=new X(1,0,0),eh=new X(0,1,0),th=new X(0,0,1),nh={type:"added"},Tb={type:"removed"},Fr={type:"childadded",child:null},bl={type:"childremoved",child:null};class Lt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new X,n=new Wn,i=new sa,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new $e}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(eh,e)}rotateZ(e){return this.rotateOnAxis(th,e)}translateOnAxis(e,n){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(eh,e)}translateZ(e){return this.translateOnAxis(th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ma.copy(e):Ma.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ss,Ma,this.up):Jn.lookAt(Ma,Ss,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nh),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Tb),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nh),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Mb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new X(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new X,Qn=new X,Ml=new X,ei=new X,Or=new X,Br=new X,ih=new X,El=new X,Tl=new X,Al=new X,wl=new _t,Rl=new _t,Cl=new _t;class xn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),vn.subVectors(e,n),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){vn.subVectors(r,n),Qn.subVectors(i,n),Ml.subVectors(e,n);const a=vn.dot(vn),o=vn.dot(Qn),l=vn.dot(Ml),c=Qn.dot(Qn),u=Qn.dot(Ml),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return wl.setScalar(0),Rl.setScalar(0),Cl.setScalar(0),wl.fromBufferAttribute(e,n),Rl.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(wl,s.x),a.addScaledVector(Rl,s.y),a.addScaledVector(Cl,s.z),a}static isFrontFacing(e,n,i,r){return vn.subVectors(i,n),Qn.subVectors(e,n),vn.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),vn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Or.subVectors(r,i),Br.subVectors(s,i),El.subVectors(e,i);const l=Or.dot(El),c=Br.dot(El);if(l<=0&&c<=0)return n.copy(i);Tl.subVectors(e,r);const u=Or.dot(Tl),f=Br.dot(Tl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Or,a);Al.subVectors(e,s);const h=Or.dot(Al),g=Br.dot(Al);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Br,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return ih.subVectors(s,r),o=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(ih,o);const p=1/(m+_+d);return a=_*p,o=d*p,n.copy(i).addScaledVector(Or,a).addScaledVector(Br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Pl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=lb(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Pl(a,s,e+1/3),this.g=Pl(a,s,e),this.b=Pl(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=un){const i=cg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return et.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ye(Ut.r*255,0,255))*65536+Math.round(Ye(Ut.g*255,0,255))*256+Math.round(Ye(Ut.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Ut.copy(this),n);const i=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Ut.copy(this),n),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=un){et.fromWorkingColorSpace(Ut.copy(this),e);const n=Ut.r,i=Ut.g,r=Ut.b;return e!==un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(Ea);const i=hl(Ei.h,Ea.h,n),r=hl(Ei.s,Ea.s,n),s=hl(Ei.l,Ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ze;Ze.NAMES=cg;let Ab=0;class us extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=Zr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gc&&(i.blendSrc=this.blendSrc),this.blendDst!==_c&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ug extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new X,Ta=new nt;let wb=0;class Hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wd,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ta.fromBufferAttribute(this,n),Ta.applyMatrix3(e),this.setXY(n,Ta.x,Ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wd&&(e.usage=this.usage),e}}class fg extends Hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dg extends Hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class En extends Hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Rb=0;const cn=new pt,Ll=new Lt,zr=new X,en=new aa,bs=new aa,At=new X;class gi extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?dg:fg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,n,i){return cn.makeTranslation(e,n,i),this.applyMatrix4(cn),this}scale(e,n,i){return cn.makeScale(e,n,i),this.applyMatrix4(cn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new En(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(en.min,bs.min),en.expandByPoint(At),At.addVectors(en.max,bs.max),en.expandByPoint(At)):(en.expandByPoint(bs.min),en.expandByPoint(bs.max))}en.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(e,c),At.add(zr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new X,l[U]=new X;const c=new X,u=new X,f=new X,d=new nt,h=new nt,g=new nt,_=new X,m=new X;function p(U,A,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,U),h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),o[U].add(_),o[A].add(_),o[M].add(_),l[U].add(m),l[A].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,A=S.length;U<A;++U){const M=S[U],D=M.start,O=M.count;for(let H=D,z=D+O;H<z;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new X,x=new X,w=new X,L=new X;function P(U){w.fromBufferAttribute(r,U),L.copy(w);const A=o[U];E.copy(A),E.sub(w.multiplyScalar(w.dot(A))).normalize(),x.crossVectors(L,A);const D=x.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,D)}for(let U=0,A=S.length;U<A;++U){const M=S[U],D=M.start,O=M.count;for(let H=D,z=D+O;H<z;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Hn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rh=new pt,Ji=new Qu,Aa=new No,sh=new X,wa=new X,Ra=new X,Ca=new X,Dl=new X,Pa=new X,ah=new X,La=new X;class Fn extends Lt{constructor(e=new gi,n=new ug){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Dl.fromBufferAttribute(f,e),a?Pa.addScaledVector(Dl,u):Pa.addScaledVector(Dl.sub(n),u))}n.add(Pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(Aa.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Aa,sh)===null||Ji.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(rh.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(rh),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ji)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,h.start),E=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=S,w=E;x<w;x+=3){const L=o.getX(x),P=o.getX(x+1),U=o.getX(x+2);r=Da(this,p,e,i,c,u,f,L,P,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);r=Da(this,a,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=S,w=E;x<w;x+=3){const L=x,P=x+1,U=x+2;r=Da(this,p,e,i,c,u,f,L,P,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=m,E=m+1,x=m+2;r=Da(this,a,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Cb(t,e,n,i,r,s,a,o){let l;if(e.side===Kt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===zi,o),l===null)return null;La.copy(o),La.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(La);return c<n.near||c>n.far?null:{distance:c,point:La.clone(),object:t}}function Da(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,wa),t.getVertexPosition(l,Ra),t.getVertexPosition(c,Ca);const u=Cb(t,e,n,i,wa,Ra,Ca,ah);if(u){const f=new X;xn.getBarycoord(ah,wa,Ra,Ca,f),r&&(u.uv=xn.getInterpolatedAttribute(r,o,l,c,f,new nt)),s&&(u.uv1=xn.getInterpolatedAttribute(s,o,l,c,f,new nt)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new X,materialIndex:0};xn.getNormal(wa,Ra,Ca,d.normal),u.face=d,u.barycoord=f}return u}class fs extends gi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(f,2));function g(_,m,p,S,E,x,w,L,P,U,A){const M=x/P,D=w/U,O=x/2,H=w/2,z=L/2,Q=P+1,Z=U+1;let ee=0,G=0;const ge=new X;for(let ye=0;ye<Z;ye++){const Re=ye*D-H;for(let Ue=0;Ue<Q;Ue++){const Ke=Ue*M-O;ge[_]=Ke*S,ge[m]=Re*E,ge[p]=z,c.push(ge.x,ge.y,ge.z),ge[_]=0,ge[m]=0,ge[p]=L>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ue/P),f.push(1-ye/U),ee+=1}}for(let ye=0;ye<U;ye++)for(let Re=0;Re<P;Re++){const Ue=d+Re+Q*ye,Ke=d+Re+Q*(ye+1),re=d+(Re+1)+Q*(ye+1),pe=d+(Re+1)+Q*ye;l.push(Ue,Ke,pe),l.push(Ke,re,pe),G+=6}o.addGroup(h,G,A),h+=G,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=as(t[n]);for(const r in i)e[r]=i[r]}return e}function Pb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Lb={clone:as,merge:Ht};var Db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ib=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Db,this.fragmentShader=Ib,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Pb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pg extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new X,oh=new nt,lh=new nt;class fn extends pg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tu*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,oh,lh),n.subVectors(lh,oh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,Hr=1;class Ub extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(kr,Hr,e,n);r.layers=this.layers,this.add(r);const s=new fn(kr,Hr,e,n);s.layers=this.layers,this.add(s);const a=new fn(kr,Hr,e,n);a.layers=this.layers,this.add(a);const o=new fn(kr,Hr,e,n);o.layers=this.layers,this.add(o);const l=new fn(kr,Hr,e,n);l.layers=this.layers,this.add(l);const c=new fn(kr,Hr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class mg extends Zt{constructor(e=[],n=is,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nb extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fs(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Ui});s.uniforms.tEquirect.value=n;const a=new Fn(r,s),o=n.minFilter;return n.minFilter===fr&&(n.minFilter=Nn),new Ub(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Ia extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fb={type:"move"};class Il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Ob extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ul=new X,Bb=new X,zb=new $e;class rr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ul.subVectors(i,n).cross(Bb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ul),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zb.getNormalMatrix(e),r=this.coplanarPoint(Ul).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new No,Ua=new X;class tf{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,a=new rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],E=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-h,x-p).normalize(),i[1].setComponents(l+s,d+c,m+h,x+p).normalize(),i[2].setComponents(l+a,d+u,m+g,x+S).normalize(),i[3].setComponents(l-a,d-u,m-g,x-S).normalize(),i[4].setComponents(l-o,d-f,m-_,x-E).normalize(),n===li)i[5].setComponents(l+o,d+f,m+_,x+E).normalize();else if(n===uo)i[5].setComponents(o,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gg extends us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ho=new X,po=new X,ch=new pt,Ms=new Qu,Na=new No,Nl=new X,uh=new X;class kb extends Lt{constructor(e=new gi,n=new gg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ho.fromBufferAttribute(n,r-1),po.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ho.distanceTo(po);e.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;ch.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(ch);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),E=Fa(this,e,Ms,l,p,S,_);E&&n.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=Fa(this,e,Ms,l,_,m,g-1);p&&n.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=c){const p=Fa(this,e,Ms,l,_,_+1,_);p&&n.push(p)}if(this.isLineLoop){const _=Fa(this,e,Ms,l,g-1,h,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fa(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(ho.fromBufferAttribute(o,r),po.fromBufferAttribute(o,s),n.distanceSqToSegment(ho,po,Nl,uh)>i)return;Nl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Nl);if(!(c<e.near||c>e.far))return{distance:c,point:uh.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const fh=new X,dh=new X;class Hb extends kb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)fh.fromBufferAttribute(n,r),dh.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+fh.distanceTo(dh);e.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _g extends Zt{constructor(e,n,i=vr,r,s,a,o=Mn,l=Mn,c,u=Zs){if(u!==Zs&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fo extends gi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*d-a;for(let E=0;E<c;E++){const x=E*f-s;g.push(x,-S,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const E=S+c*p,x=S+c*(p+1),w=S+1+c*(p+1),L=S+1+c*p;h.push(E,x,L),h.push(x,w,L)}this.setIndex(h),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vb extends us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sg,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gb extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wb extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xb extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Fl=new pt,hh=new X,ph=new X;class qb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tf,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),n.position.copy(hh),ph.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ph),n.updateMatrixWorld(),Fl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vg extends pg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $b extends qb{constructor(){super(new vg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jb extends Xb{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new $b}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yb extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mh=new pt;class Kb{constructor(e,n,i=0,r=1/0){this.ray=new Qu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ef,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return mh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(e,n=!0,i=[]){return nu(e,this,i,n),i.sort(gh),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)nu(e[r],this,i,n);return i.sort(gh),i}}function gh(t,e){return t.distance-e.distance}function nu(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)nu(s[a],e,n,!0)}}class Zb extends Hb{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ze(i),r=new Ze(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let d=0,h=0,g=-o;d<=n;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===s?i:r;_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3}const u=new gi;u.setAttribute("position",new En(l,3)),u.setAttribute("color",new En(c,3));const f=new gg({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function _h(t,e,n,i){const r=Jb(i);switch(n){case eg:return t*e;case ng:return t*e/r.components*r.byteLength;case Yu:return t*e/r.components*r.byteLength;case ig:return t*e*2/r.components*r.byteLength;case Ku:return t*e*2/r.components*r.byteLength;case tg:return t*e*3/r.components*r.byteLength;case yn:return t*e*4/r.components*r.byteLength;case Zu:return t*e*4/r.components*r.byteLength;case Wa:case Xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qa:case $a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Dc:return Math.max(t,16)*Math.max(e,8)/4;case Cc:case Lc:return Math.max(t,8)*Math.max(e,8)/2;case Ic:case Uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ja:case Kc:case Zc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rg:case Jc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qc:case eu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Jb(t){switch(t){case Gn:case Zm:return{byteLength:1,components:1};case Ys:case Jm:case ia:return{byteLength:2,components:1};case $u:case ju:return{byteLength:2,components:4};case vr:case qu:case oi:return{byteLength:4,components:1};case Qm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Qb(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
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
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
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
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
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
#endif`,cM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,pM=`#ifdef USE_BUMPMAP
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MM=`#define PI 3.141592653589793
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
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TM=`vec3 transformedNormal = objectNormal;
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
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
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
}`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
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
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,$M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
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
#endif`,JM=`struct PhysicalMaterial {
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
}`,QM=`
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cE=`#if defined( USE_POINTS_UV )
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
#endif`,uE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BE=`float getShadowMask() {
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
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$E=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
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
}`,aT=`#if DEPTH_PACKING == 3200
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
}`,oT=`#define DISTANCE
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
}`,lT=`#define DISTANCE
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
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`uniform float scale;
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
}`,dT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,pT=`uniform vec3 diffuse;
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define LAMBERT
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
}`,_T=`#define MATCAP
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
}`,vT=`#define MATCAP
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
}`,xT=`#define NORMAL
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
}`,yT=`#define NORMAL
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
}`,ST=`#define PHONG
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
}`,bT=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,ET=`#define STANDARD
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
}`,TT=`#define TOON
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
}`,AT=`#define TOON
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
}`,wT=`uniform float size;
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,PT=`uniform vec3 color;
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
}`,LT=`uniform float rotation;
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
}`,DT=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:eM,alphahash_pars_fragment:tM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:aM,aomap_pars_fragment:oM,batching_pars_vertex:lM,batching_vertex:cM,begin_vertex:uM,beginnormal_vertex:fM,bsdfs:dM,iridescence_fragment:hM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:_M,clipping_planes_vertex:vM,color_fragment:xM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:bM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:TM,displacementmap_pars_vertex:AM,displacementmap_vertex:wM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:PM,colorspace_pars_fragment:LM,envmap_fragment:DM,envmap_common_pars_fragment:IM,envmap_pars_fragment:UM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:qM,envmap_vertex:FM,fog_vertex:OM,fog_pars_vertex:BM,fog_fragment:zM,fog_pars_fragment:kM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:VM,lights_lambert_fragment:GM,lights_lambert_pars_fragment:WM,lights_pars_begin:XM,lights_toon_fragment:$M,lights_toon_pars_fragment:jM,lights_phong_fragment:YM,lights_phong_pars_fragment:KM,lights_physical_fragment:ZM,lights_physical_pars_fragment:JM,lights_fragment_begin:QM,lights_fragment_maps:eE,lights_fragment_end:tE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:sE,map_fragment:aE,map_pars_fragment:oE,map_particle_fragment:lE,map_particle_pars_fragment:cE,metalnessmap_fragment:uE,metalnessmap_pars_fragment:fE,morphinstance_vertex:dE,morphcolor_vertex:hE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:_E,normal_fragment_maps:vE,normal_pars_fragment:xE,normal_pars_vertex:yE,normal_vertex:SE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:AE,opaque_fragment:wE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:PE,dithering_fragment:LE,dithering_pars_fragment:DE,roughnessmap_fragment:IE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:FE,shadowmap_vertex:OE,shadowmask_pars_fragment:BE,skinbase_vertex:zE,skinning_pars_vertex:kE,skinning_vertex:HE,skinnormal_vertex:VE,specularmap_fragment:GE,specularmap_pars_fragment:WE,tonemapping_fragment:XE,tonemapping_pars_fragment:qE,transmission_fragment:$E,transmission_pars_fragment:jE,uv_pars_fragment:YE,uv_pars_vertex:KE,uv_vertex:ZE,worldpos_vertex:JE,background_vert:QE,background_frag:eT,backgroundCube_vert:tT,backgroundCube_frag:nT,cube_vert:iT,cube_frag:rT,depth_vert:sT,depth_frag:aT,distanceRGBA_vert:oT,distanceRGBA_frag:lT,equirect_vert:cT,equirect_frag:uT,linedashed_vert:fT,linedashed_frag:dT,meshbasic_vert:hT,meshbasic_frag:pT,meshlambert_vert:mT,meshlambert_frag:gT,meshmatcap_vert:_T,meshmatcap_frag:vT,meshnormal_vert:xT,meshnormal_frag:yT,meshphong_vert:ST,meshphong_frag:bT,meshphysical_vert:MT,meshphysical_frag:ET,meshtoon_vert:TT,meshtoon_frag:AT,points_vert:wT,points_frag:RT,shadow_vert:CT,shadow_frag:PT,sprite_vert:LT,sprite_frag:DT},ve={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},In={basic:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ht([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ht([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ht([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ht([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ht([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ht([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ht([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ht([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Ht([ve.common,ve.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Ht([ve.lights,ve.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};In.physical={uniforms:Ht([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Oa={r:0,b:0,g:0},er=new Wn,IT=new pt;function UT(t,e,n,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?n:e).get(x)),x}function _(E){let x=!1;const w=g(E);w===null?p(o,l):w&&w.isColor&&(p(w,1),x=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===Uo)?(u===void 0&&(u=new Fn(new fs(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:as(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),er.copy(x.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(IT.makeRotationFromEuler(er)),u.material.toneMapped=et.getTransfer(w.colorSpace)!==lt,(f!==w||d!==w.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Fn(new Fo(2,2),new ki({name:"BackgroundMaterial",uniforms:as(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(w.colorSpace)!==lt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,h=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(Oa,hg(t)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,x,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:S}}function NT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,D,O,H,z){let Q=!1;const Z=f(H,O,D);s!==Z&&(s=Z,c(s.object)),Q=h(M,H,O,z),Q&&g(M,H,O,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,x(M,D,O,H),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,D,O){const H=O.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let Q=z[D.id];Q===void 0&&(Q={},z[D.id]=Q);let Z=Q[H];return Z===void 0&&(Z=d(l()),Q[H]=Z),Z}function d(M){const D=[],O=[],H=[];for(let z=0;z<n;z++)D[z]=0,O[z]=0,H[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:H,object:M,attributes:{},index:null}}function h(M,D,O,H){const z=s.attributes,Q=D.attributes;let Z=0;const ee=O.getAttributes();for(const G in ee)if(ee[G].location>=0){const ye=z[G];let Re=Q[G];if(Re===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Re=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Re=M.instanceColor)),ye===void 0||ye.attribute!==Re||Re&&ye.data!==Re.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function g(M,D,O,H){const z={},Q=D.attributes;let Z=0;const ee=O.getAttributes();for(const G in ee)if(ee[G].location>=0){let ye=Q[G];ye===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor));const Re={};Re.attribute=ye,ye&&ye.data&&(Re.data=ye.data),z[G]=Re,Z++}s.attributes=z,s.attributesNum=Z,s.index=H}function _(){const M=s.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const O=s.newAttributes,H=s.enabledAttributes,z=s.attributeDivisors;O[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),z[M]!==D&&(t.vertexAttribDivisor(M,D),z[M]=D)}function S(){const M=s.newAttributes,D=s.enabledAttributes;for(let O=0,H=D.length;O<H;O++)D[O]!==M[O]&&(t.disableVertexAttribArray(O),D[O]=0)}function E(M,D,O,H,z,Q,Z){Z===!0?t.vertexAttribIPointer(M,D,O,z,Q):t.vertexAttribPointer(M,D,O,H,z,Q)}function x(M,D,O,H){_();const z=H.attributes,Q=O.getAttributes(),Z=D.defaultAttributeValues;for(const ee in Q){const G=Q[ee];if(G.location>=0){let ge=z[ee];if(ge===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const ye=ge.normalized,Re=ge.itemSize,Ue=e.get(ge);if(Ue===void 0)continue;const Ke=Ue.buffer,re=Ue.type,pe=Ue.bytesPerElement,be=re===t.INT||re===t.UNSIGNED_INT||ge.gpuType===qu;if(ge.isInterleavedBufferAttribute){const N=ge.data,se=N.stride,oe=ge.offset;if(N.isInstancedInterleavedBuffer){for(let le=0;le<G.locationSize;le++)p(G.location+le,N.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let le=0;le<G.locationSize;le++)E(G.location+le,Re/G.locationSize,re,ye,se*pe,(oe+Re/G.locationSize*le)*pe,be)}else{if(ge.isInstancedBufferAttribute){for(let N=0;N<G.locationSize;N++)p(G.location+N,ge.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let N=0;N<G.locationSize;N++)m(G.location+N);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let N=0;N<G.locationSize;N++)E(G.location+N,Re/G.locationSize,re,ye,Re*pe,Re/G.locationSize*N*pe,be)}}else if(Z!==void 0){const ye=Z[ee];if(ye!==void 0)switch(ye.length){case 2:t.vertexAttrib2fv(G.location,ye);break;case 3:t.vertexAttrib3fv(G.location,ye);break;case 4:t.vertexAttrib4fv(G.location,ye);break;default:t.vertexAttrib1fv(G.location,ye)}}}}S()}function w(){U();for(const M in i){const D=i[M];for(const O in D){const H=D[O];for(const z in H)u(H[z].object),delete H[z];delete D[O]}delete i[M]}}function L(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const O in D){const H=D[O];for(const z in H)u(H[z].object),delete H[z];delete D[O]}delete i[M.id]}function P(M){for(const D in i){const O=i[D];if(O[M.id]===void 0)continue;const H=O[M.id];for(const z in H)u(H[z].object),delete H[z];delete O[M.id]}}function U(){A(),a=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function FT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function OT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==yn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Gn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==oi&&!U)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:w,maxSamples:L}}function BT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new rr,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,E=S*4;let x=p.clippingState||null;l.value=x,x=u(g,d,E,h);for(let w=0;w!==E;++w)x[w]=n[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=h;E!==_;++E,x+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zT(t){let e=new WeakMap;function n(a,o){return o===Tc?a.mapping=is:o===Ac&&(a.mapping=rs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tc||o===Ac)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nb(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Xr=4,vh=[.125,.215,.35,.446,.526,.582],lr=20,Ol=new vg,xh=new Ze;let Bl=null,zl=0,kl=0,Hl=!1;const sr=(1+Math.sqrt(5))/2,Vr=1/sr,yh=[new X(-sr,Vr,0),new X(sr,Vr,0),new X(-Vr,0,sr),new X(Vr,0,sr),new X(0,sr,-Vr),new X(0,sr,Vr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],kT=new X;class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=kT}=s;Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,zl,kl),this._renderer.xr.enabled=Hl,e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ia,format:yn,colorSpace:ss,depthBuffer:!1},r=bh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HT(s)),this._blurMaterial=VT(s,e,n)}return r}_compileMaterial(e){const n=new Fn(this._lodPlanes[0],e);this._renderer.compile(n,Ol)}_sceneToCubeUV(e,n,i,r,s){const l=new fn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(xh),f.toneMapping=Ni,f.autoClear=!1;const g=new ug({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new Fn(new fs,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(xh),m=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const x=this._cubeSize;Ba(r,E*x,S>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Fn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ba(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ol)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yh[(r-s-1)%yh.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Fn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*lr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const p=[];let S=0;for(let P=0;P<lr;++P){const U=P/_,A=Math.exp(-U*U/2);p.push(A),P===0?S+=A:P<m&&(S+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const x=this._sizeLods[r],w=3*x*(r>E-Xr?r-E+Xr:0),L=4*(this._cubeSize-x);Ba(n,w,L,3*x,2*x),l.setRenderTarget(n),l.render(f,Ol)}}function HT(t){const e=[],n=[],i=[];let r=t;const s=t-Xr+1+vh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Xr?l=vh[a-t+Xr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*h),E=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let L=0;L<h;L++){const P=L%3*2/3-1,U=L>2?0:-1,A=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];S.set(A,_*g*L),E.set(d,m*g*L);const M=[L,L,L,L,L,L];x.set(M,p*g*L)}const w=new gi;w.setAttribute("position",new Hn(S,_)),w.setAttribute("uv",new Hn(E,m)),w.setAttribute("faceIndex",new Hn(x,p)),e.push(w),r>Xr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bh(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function VT(t,e,n){const i=new Float32Array(lr),r=new X(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nf(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Mh(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Eh(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function nf(){return`

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
	`}function GT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Tc||l===Ac,u=l===is||l===rs;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Sh(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new Sh(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function WT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ya("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function XT(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const S=h.array;_=h.version;for(let E=0,x=S.length;E<x;E+=3){const w=S[E+0],L=S[E+1],P=S[E+2];d.push(w,L,L,P,P,w)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const w=E+0,L=E+1,P=E+2;d.push(w,L,L,P,P,w)}}else return;const m=new(og(d)?dg:fg)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function qT(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*a,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=h[S]*_[S];n.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function $T(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jT(t,e,n){const i=new WeakMap,r=new _t;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var h=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let w=o.attributes.position.count*x,L=1;w>e.maxTextureSize&&(L=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*L*4*f),U=new lg(P,w,L,f);U.type=oi,U.needsUpdate=!0;const A=x*4;for(let D=0;D<f;D++){const O=p[D],H=S[D],z=E[D],Q=w*L*4*D;for(let Z=0;Z<O.count;Z++){const ee=Z*A;g===!0&&(r.fromBufferAttribute(O,Z),P[Q+ee+0]=r.x,P[Q+ee+1]=r.y,P[Q+ee+2]=r.z,P[Q+ee+3]=0),_===!0&&(r.fromBufferAttribute(H,Z),P[Q+ee+4]=r.x,P[Q+ee+5]=r.y,P[Q+ee+6]=r.z,P[Q+ee+7]=0),m===!0&&(r.fromBufferAttribute(z,Z),P[Q+ee+8]=r.x,P[Q+ee+9]=r.y,P[Q+ee+10]=r.z,P[Q+ee+11]=z.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new nt(w,L)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function YT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const yg=new Zt,Th=new _g(1,1),Sg=new lg,bg=new vb,Mg=new mg,Ah=[],wh=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);function ds(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ah[r];if(s===void 0&&(s=new Float32Array(r),Ah[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Oo(t,e){let n=wh[e];n===void 0&&(n=new Int32Array(e),wh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function KT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function eA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;Ph.set(i),t.uniformMatrix2fv(this.addr,!1,Ph),Tt(n,i)}}function tA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;Ch.set(i),t.uniformMatrix3fv(this.addr,!1,Ch),Tt(n,i)}}function nA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;Rh.set(i),t.uniformMatrix4fv(this.addr,!1,Rh),Tt(n,i)}}function iA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function aA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function oA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function cA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function fA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Th.compareFunction=ag,s=Th):s=yg,n.setTexture2D(e||s,r)}function dA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||bg,r)}function hA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Mg,r)}function pA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Sg,r)}function mA(t){switch(t){case 5126:return KT;case 35664:return ZT;case 35665:return JT;case 35666:return QT;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return aA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return pA}}function gA(t,e){t.uniform1fv(this.addr,e)}function _A(t,e){const n=ds(e,this.size,2);t.uniform2fv(this.addr,n)}function vA(t,e){const n=ds(e,this.size,3);t.uniform3fv(this.addr,n)}function xA(t,e){const n=ds(e,this.size,4);t.uniform4fv(this.addr,n)}function yA(t,e){const n=ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function SA(t,e){const n=ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bA(t,e){const n=ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function MA(t,e){t.uniform1iv(this.addr,e)}function EA(t,e){t.uniform2iv(this.addr,e)}function TA(t,e){t.uniform3iv(this.addr,e)}function AA(t,e){t.uniform4iv(this.addr,e)}function wA(t,e){t.uniform1uiv(this.addr,e)}function RA(t,e){t.uniform2uiv(this.addr,e)}function CA(t,e){t.uniform3uiv(this.addr,e)}function PA(t,e){t.uniform4uiv(this.addr,e)}function LA(t,e,n){const i=this.cache,r=e.length,s=Oo(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||yg,s[a])}function DA(t,e,n){const i=this.cache,r=e.length,s=Oo(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||bg,s[a])}function IA(t,e,n){const i=this.cache,r=e.length,s=Oo(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Mg,s[a])}function UA(t,e,n){const i=this.cache,r=e.length,s=Oo(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Sg,s[a])}function NA(t){switch(t){case 5126:return gA;case 35664:return _A;case 35665:return vA;case 35666:return xA;case 35674:return yA;case 35675:return SA;case 35676:return bA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return wA;case 36294:return RA;case 36295:return CA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return UA}}class FA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mA(n.type)}}class OA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=NA(n.type)}}class BA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Lh(t,e){t.seq.push(e),t.map[e.id]=e}function zA(t,e,n){const i=t.name,r=i.length;for(Vl.lastIndex=0;;){const s=Vl.exec(i),a=Vl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Lh(n,c===void 0?new FA(o,t,e):new OA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new BA(o),Lh(n,f)),n=f}}}class Ka{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);zA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Dh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kA=37297;let HA=0;function VA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Ih=new $e;function GA(t){et._getMatrix(Ih,et.workingColorSpace,t);const e=`mat3( ${Ih.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case co:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Uh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+VA(t.getShaderSource(e),a)}else return r}function WA(t,e){const n=GA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function XA(t,e){let n;switch(e){case WS:n="Linear";break;case XS:n="Reinhard";break;case qS:n="Cineon";break;case $S:n="ACESFilmic";break;case YS:n="AgX";break;case KS:n="Neutral";break;case jS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const za=new X;function qA(){et.getLuminanceCoefficients(za);const t=za.x.toFixed(4),e=za.y.toFixed(4),n=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $A(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function jA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ts(t){return t!==""}function Nh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KA=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(t){return t.replace(KA,JA)}const ZA=new Map;function JA(t,e){let n=je[e];if(n===void 0){const i=ZA.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return iu(n)}const QA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(t){return t.replace(QA,ew)}function ew(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===MS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function nw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function rw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ym:e="ENVMAP_BLENDING_MULTIPLY";break;case VS:e="ENVMAP_BLENDING_MIX";break;case GS:e="ENVMAP_BLENDING_ADD";break}return e}function sw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=tw(n),c=nw(n),u=iw(n),f=rw(n),d=sw(n),h=$A(n),g=jA(s),_=r.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[Bh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[Bh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?je.tonemapping_pars_fragment:"",n.toneMapping!==Ni?XA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,WA("linearToOutputTexel",n.outputColorSpace),qA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ts).join(`
`)),a=iu(a),a=Nh(a,n),a=Fh(a,n),o=iu(o),o=Nh(o,n),o=Fh(o,n),a=Oh(a),o=Oh(o),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+a,x=S+p+o,w=Dh(r,r.VERTEX_SHADER,E),L=Dh(r,r.FRAGMENT_SHADER,x);r.attachShader(_,w),r.attachShader(_,L),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(w).trim(),z=r.getShaderInfoLog(L).trim();let Q=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,w,L);else{const ee=Uh(r,w,"vertex"),G=Uh(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ee+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||z==="")&&(Z=!1);Z&&(D.diagnostics={runnable:Q,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(w),r.deleteShader(L),U=new Ka(r,_),A=YA(r,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,kA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=L,this}let ow=0;class lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cw(e),n.set(e,i)),i}}class cw{constructor(e){this.id=ow++,this.code=e,this.usedTimes=0}}function uw(t,e,n,i,r,s,a){const o=new ef,l=new lw,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,M,D,O,H){const z=O.fog,Q=H.geometry,Z=A.isMeshStandardMaterial?O.environment:null,ee=(A.isMeshStandardMaterial?n:e).get(A.envMap||Z),G=ee&&ee.mapping===Uo?ee.image.height:null,ge=g[A.type];A.precision!==null&&(h=r.getMaxPrecision(A.precision),h!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",h,"instead."));const ye=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Re=ye!==void 0?ye.length:0;let Ue=0;Q.morphAttributes.position!==void 0&&(Ue=1),Q.morphAttributes.normal!==void 0&&(Ue=2),Q.morphAttributes.color!==void 0&&(Ue=3);let Ke,re,pe,be;if(ge){const ot=In[ge];Ke=ot.vertexShader,re=ot.fragmentShader}else Ke=A.vertexShader,re=A.fragmentShader,l.update(A),pe=l.getVertexShaderID(A),be=l.getFragmentShaderID(A);const N=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),oe=H.isInstancedMesh===!0,le=H.isBatchedMesh===!0,Oe=!!A.map,R=!!A.matcap,C=!!ee,y=!!A.aoMap,ie=!!A.lightMap,K=!!A.bumpMap,q=!!A.normalMap,te=!!A.displacementMap,ce=!!A.emissiveMap,J=!!A.metalnessMap,b=!!A.roughnessMap,v=A.anisotropy>0,I=A.clearcoat>0,V=A.dispersion>0,$=A.iridescence>0,W=A.sheen>0,me=A.transmission>0,ue=v&&!!A.anisotropyMap,Ce=I&&!!A.clearcoatMap,Le=I&&!!A.clearcoatNormalMap,fe=I&&!!A.clearcoatRoughnessMap,xe=$&&!!A.iridescenceMap,Ie=$&&!!A.iridescenceThicknessMap,Be=W&&!!A.sheenColorMap,_e=W&&!!A.sheenRoughnessMap,ke=!!A.specularMap,We=!!A.specularColorMap,ut=!!A.specularIntensityMap,F=me&&!!A.transmissionMap,Ee=me&&!!A.thicknessMap,ne=!!A.gradientMap,ae=!!A.alphaMap,Ae=A.alphaTest>0,Te=!!A.alphaHash,qe=!!A.extensions;let mt=Ni;A.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(mt=t.toneMapping);const Dt={shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:Ke,fragmentShader:re,defines:A.defines,customVertexShaderID:pe,customFragmentShaderID:be,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:h,batching:le,batchingColor:le&&H._colorsTexture!==null,instancing:oe,instancingColor:oe&&H.instanceColor!==null,instancingMorph:oe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ss,alphaToCoverage:!!A.alphaToCoverage,map:Oe,matcap:R,envMap:C,envMapMode:C&&ee.mapping,envMapCubeUVHeight:G,aoMap:y,lightMap:ie,bumpMap:K,normalMap:q,displacementMap:d&&te,emissiveMap:ce,normalMapObjectSpace:q&&A.normalMapType===eb,normalMapTangentSpace:q&&A.normalMapType===sg,metalnessMap:J,roughnessMap:b,anisotropy:v,anisotropyMap:ue,clearcoat:I,clearcoatMap:Ce,clearcoatNormalMap:Le,clearcoatRoughnessMap:fe,dispersion:V,iridescence:$,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:W,sheenColorMap:Be,sheenRoughnessMap:_e,specularMap:ke,specularColorMap:We,specularIntensityMap:ut,transmission:me,transmissionMap:F,thicknessMap:Ee,gradientMap:ne,opaque:A.transparent===!1&&A.blending===Zr&&A.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ae,alphaHash:Te,combine:A.combine,mapUv:Oe&&_(A.map.channel),aoMapUv:y&&_(A.aoMap.channel),lightMapUv:ie&&_(A.lightMap.channel),bumpMapUv:K&&_(A.bumpMap.channel),normalMapUv:q&&_(A.normalMap.channel),displacementMapUv:te&&_(A.displacementMap.channel),emissiveMapUv:ce&&_(A.emissiveMap.channel),metalnessMapUv:J&&_(A.metalnessMap.channel),roughnessMapUv:b&&_(A.roughnessMap.channel),anisotropyMapUv:ue&&_(A.anisotropyMap.channel),clearcoatMapUv:Ce&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(A.sheenRoughnessMap.channel),specularMapUv:ke&&_(A.specularMap.channel),specularColorMapUv:We&&_(A.specularColorMap.channel),specularIntensityMapUv:ut&&_(A.specularIntensityMap.channel),transmissionMapUv:F&&_(A.transmissionMap.channel),thicknessMapUv:Ee&&_(A.thicknessMap.channel),alphaMapUv:ae&&_(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(q||v),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Oe||ae),fog:!!z,useFog:A.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:Oe&&A.map.isVideoTexture===!0&&et.getTransfer(A.map.colorSpace)===lt,decodeVideoTextureEmissive:ce&&A.emissiveMap.isVideoTexture===!0&&et.getTransfer(A.emissiveMap.colorSpace)===lt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===si,flipSided:A.side===Kt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:qe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&A.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const D in A.defines)M.push(D),M.push(A.defines[D]);return A.isRawShaderMaterial===!1&&(S(M,A),E(M,A),M.push(t.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function S(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function E(A,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),A.push(o.mask)}function x(A){const M=g[A.type];let D;if(M){const O=In[M];D=Lb.clone(O.uniforms)}else D=A.uniforms;return D}function w(A,M){let D;for(let O=0,H=u.length;O<H;O++){const z=u[O];if(z.cacheKey===M){D=z,++D.usedTimes;break}}return D===void 0&&(D=new aw(t,M,A,s),u.push(D)),D}function L(A){if(--A.usedTimes===0){const M=u.indexOf(A);u[M]=u[u.length-1],u.pop(),A.destroy()}}function P(A){l.remove(A)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:U}}function fw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function dw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function kh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,h,g,_,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||dw),i.length>1&&i.sort(d||zh),r.length>1&&r.sort(d||zh)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function hw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new kh,t.set(i,[a])):r>=s.length?(a=new kh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ze};break;case"SpotLight":n={position:new X,direction:new X,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function mw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gw=0;function _w(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vw(t){const e=new pw,n=mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new pt,a=new pt;function o(c){let u=0,f=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,S=0,E=0,x=0,w=0,L=0,P=0;c.sort(_w);for(let A=0,M=c.length;A<M;A++){const D=c[A],O=D.color,H=D.intensity,z=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*H,f+=O.g*H,d+=O.b*H;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],H);P++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,G=n.get(D);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.directionalShadow[h]=G,i.directionalShadowMap[h]=Q,i.directionalShadowMatrix[h]=D.shadow.matrix,S++}i.directional[h]=Z,h++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(O).multiplyScalar(H),Z.distance=z,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[_]=Z;const ee=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,ee.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[_]=ee.matrix,D.castShadow){const G=n.get(D);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Q,x++}_++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(O).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const ee=D.shadow,G=n.get(D);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(H),Z.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[p]=Z,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==h||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==w||U.numLightProbes!==P)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,U.directionalLength=h,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=w,U.numLightProbes=P,i.version=gw++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const E=c[p];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Hh(t){const e=new vw(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function xw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hh(t),e.set(r,[o])):s>=a.length?(o=new Hh(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sw=`uniform sampler2D shadow_pass;
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
}`;function bw(t,e,n){let i=new tf;const r=new nt,s=new nt,a=new _t,o=new Gb({depthPacking:QS}),l=new Wb,c={},u=n.maxTextureSize,f={[zi]:Kt,[Kt]:zi,[si]:si},d=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:yw,fragmentShader:Sw}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new gi;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jm;let p=this.type;this.render=function(L,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const A=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Ui),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=p!==ti&&this.type===ti,z=p===ti&&this.type!==ti;for(let Q=0,Z=L.length;Q<Z;Q++){const ee=L[Q],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ge=G.getFrameExtents();if(r.multiply(ge),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,G.mapSize.y=s.y)),G.map===null||H===!0||z===!0){const Re=this.type!==ti?{minFilter:Mn,magFilter:Mn}:{};G.map!==null&&G.map.dispose(),G.map=new xr(r.x,r.y,Re),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const ye=G.getViewportCount();for(let Re=0;Re<ye;Re++){const Ue=G.getViewport(Re);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),O.viewport(a),G.updateMatrices(ee,Re),i=G.getFrustum(),x(P,U,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===ti&&S(G,U),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(A,M,D)};function S(L,P){const U=e.update(_);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,h.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new xr(r.x,r.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(P,null,U,d,_,null),h.uniforms.shadow_pass.value=L.mapPass.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(P,null,U,h,_,null)}function E(L,P,U,A){let M=null;const D=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=M.uuid,H=P.uuid;let z=c[O];z===void 0&&(z={},c[O]=z);let Q=z[H];Q===void 0&&(Q=M.clone(),z[H]=Q,P.addEventListener("dispose",w)),M=Q}if(M.visible=P.visible,M.wireframe=P.wireframe,A===ti?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=t.properties.get(M);O.light=U}return M}function x(L,P,U,A,M){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===ti)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const H=e.update(L),z=L.material;if(Array.isArray(z)){const Q=H.groups;for(let Z=0,ee=Q.length;Z<ee;Z++){const G=Q[Z],ge=z[G.materialIndex];if(ge&&ge.visible){const ye=E(L,ge,A,M);L.onBeforeShadow(t,L,P,U,H,ye,G),t.renderBufferDirect(U,null,H,ye,L,G),L.onAfterShadow(t,L,P,U,H,ye,G)}}}else if(z.visible){const Q=E(L,z,A,M);L.onBeforeShadow(t,L,P,U,H,Q,null),t.renderBufferDirect(U,null,H,Q,L,null),L.onAfterShadow(t,L,P,U,H,Q,null)}}const O=L.children;for(let H=0,z=O.length;H<z;H++)x(O[H],P,U,A,M)}function w(L){L.target.removeEventListener("dispose",w);for(const U in c){const A=c[U],M=L.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}const Mw={[vc]:xc,[yc]:Mc,[Sc]:Ec,[ns]:bc,[xc]:vc,[Mc]:yc,[Ec]:Sc,[bc]:ns};function Ew(t,e){function n(){let F=!1;const Ee=new _t;let ne=null;const ae=new _t(0,0,0,0);return{setMask:function(Ae){ne!==Ae&&!F&&(t.colorMask(Ae,Ae,Ae,Ae),ne=Ae)},setLocked:function(Ae){F=Ae},setClear:function(Ae,Te,qe,mt,Dt){Dt===!0&&(Ae*=mt,Te*=mt,qe*=mt),Ee.set(Ae,Te,qe,mt),ae.equals(Ee)===!1&&(t.clearColor(Ae,Te,qe,mt),ae.copy(Ee))},reset:function(){F=!1,ne=null,ae.set(-1,0,0,0)}}}function i(){let F=!1,Ee=!1,ne=null,ae=null,Ae=null;return{setReversed:function(Te){if(Ee!==Te){const qe=e.get("EXT_clip_control");Te?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ee=Te;const mt=Ae;Ae=null,this.setClear(mt)}},getReversed:function(){return Ee},setTest:function(Te){Te?N(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(Te){ne!==Te&&!F&&(t.depthMask(Te),ne=Te)},setFunc:function(Te){if(Ee&&(Te=Mw[Te]),ae!==Te){switch(Te){case vc:t.depthFunc(t.NEVER);break;case xc:t.depthFunc(t.ALWAYS);break;case yc:t.depthFunc(t.LESS);break;case ns:t.depthFunc(t.LEQUAL);break;case Sc:t.depthFunc(t.EQUAL);break;case bc:t.depthFunc(t.GEQUAL);break;case Mc:t.depthFunc(t.GREATER);break;case Ec:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Te}},setLocked:function(Te){F=Te},setClear:function(Te){Ae!==Te&&(Ee&&(Te=1-Te),t.clearDepth(Te),Ae=Te)},reset:function(){F=!1,ne=null,ae=null,Ae=null,Ee=!1}}}function r(){let F=!1,Ee=null,ne=null,ae=null,Ae=null,Te=null,qe=null,mt=null,Dt=null;return{setTest:function(ot){F||(ot?N(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(ot){Ee!==ot&&!F&&(t.stencilMask(ot),Ee=ot)},setFunc:function(ot,pn,qn){(ne!==ot||ae!==pn||Ae!==qn)&&(t.stencilFunc(ot,pn,qn),ne=ot,ae=pn,Ae=qn)},setOp:function(ot,pn,qn){(Te!==ot||qe!==pn||mt!==qn)&&(t.stencilOp(ot,pn,qn),Te=ot,qe=pn,mt=qn)},setLocked:function(ot){F=ot},setClear:function(ot){Dt!==ot&&(t.clearStencil(ot),Dt=ot)},reset:function(){F=!1,Ee=null,ne=null,ae=null,Ae=null,Te=null,qe=null,mt=null,Dt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,S=null,E=null,x=null,w=null,L=null,P=new Ze(0,0,0),U=0,A=!1,M=null,D=null,O=null,H=null,z=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),Z=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Z=ee>=2);let ge=null,ye={};const Re=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),Ke=new _t().fromArray(Re),re=new _t().fromArray(Ue);function pe(F,Ee,ne,ae){const Ae=new Uint8Array(4),Te=t.createTexture();t.bindTexture(F,Te),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<ne;qe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(Ee+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return Te}const be={};be[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(t.DEPTH_TEST),a.setFunc(ns),K(!1),q(zd),N(t.CULL_FACE),y(Ui);function N(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function se(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function oe(F,Ee){return f[F]!==Ee?(t.bindFramebuffer(F,Ee),f[F]=Ee,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ee),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function le(F,Ee){let ne=h,ae=!1;if(F){ne=d.get(Ee),ne===void 0&&(ne=[],d.set(Ee,ne));const Ae=F.textures;if(ne.length!==Ae.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let Te=0,qe=Ae.length;Te<qe;Te++)ne[Te]=t.COLOR_ATTACHMENT0+Te;ne.length=Ae.length,ae=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,ae=!0);ae&&t.drawBuffers(ne)}function Oe(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const R={[or]:t.FUNC_ADD,[TS]:t.FUNC_SUBTRACT,[AS]:t.FUNC_REVERSE_SUBTRACT};R[wS]=t.MIN,R[RS]=t.MAX;const C={[CS]:t.ZERO,[PS]:t.ONE,[LS]:t.SRC_COLOR,[gc]:t.SRC_ALPHA,[OS]:t.SRC_ALPHA_SATURATE,[NS]:t.DST_COLOR,[IS]:t.DST_ALPHA,[DS]:t.ONE_MINUS_SRC_COLOR,[_c]:t.ONE_MINUS_SRC_ALPHA,[FS]:t.ONE_MINUS_DST_COLOR,[US]:t.ONE_MINUS_DST_ALPHA,[BS]:t.CONSTANT_COLOR,[zS]:t.ONE_MINUS_CONSTANT_COLOR,[kS]:t.CONSTANT_ALPHA,[HS]:t.ONE_MINUS_CONSTANT_ALPHA};function y(F,Ee,ne,ae,Ae,Te,qe,mt,Dt,ot){if(F===Ui){_===!0&&(se(t.BLEND),_=!1);return}if(_===!1&&(N(t.BLEND),_=!0),F!==ES){if(F!==m||ot!==A){if((p!==or||x!==or)&&(t.blendEquation(t.FUNC_ADD),p=or,x=or),ot)switch(F){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kd:t.blendFunc(t.ONE,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,E=null,w=null,L=null,P.set(0,0,0),U=0,m=F,A=ot}return}Ae=Ae||Ee,Te=Te||ne,qe=qe||ae,(Ee!==p||Ae!==x)&&(t.blendEquationSeparate(R[Ee],R[Ae]),p=Ee,x=Ae),(ne!==S||ae!==E||Te!==w||qe!==L)&&(t.blendFuncSeparate(C[ne],C[ae],C[Te],C[qe]),S=ne,E=ae,w=Te,L=qe),(mt.equals(P)===!1||Dt!==U)&&(t.blendColor(mt.r,mt.g,mt.b,Dt),P.copy(mt),U=Dt),m=F,A=!1}function ie(F,Ee){F.side===si?se(t.CULL_FACE):N(t.CULL_FACE);let ne=F.side===Kt;Ee&&(ne=!ne),K(ne),F.blending===Zr&&F.transparent===!1?y(Ui):y(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ae=F.stencilWrite;o.setTest(ae),ae&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){M!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),M=F)}function q(F){F!==SS?(N(t.CULL_FACE),F!==D&&(F===zd?t.cullFace(t.BACK):F===bS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),D=F}function te(F){F!==O&&(Z&&t.lineWidth(F),O=F)}function ce(F,Ee,ne){F?(N(t.POLYGON_OFFSET_FILL),(H!==Ee||z!==ne)&&(t.polygonOffset(Ee,ne),H=Ee,z=ne)):se(t.POLYGON_OFFSET_FILL)}function J(F){F?N(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function b(F){F===void 0&&(F=t.TEXTURE0+Q-1),ge!==F&&(t.activeTexture(F),ge=F)}function v(F,Ee,ne){ne===void 0&&(ge===null?ne=t.TEXTURE0+Q-1:ne=ge);let ae=ye[ne];ae===void 0&&(ae={type:void 0,texture:void 0},ye[ne]=ae),(ae.type!==F||ae.texture!==Ee)&&(ge!==ne&&(t.activeTexture(ne),ge=ne),t.bindTexture(F,Ee||be[F]),ae.type=F,ae.texture=Ee)}function I(){const F=ye[ge];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function V(){try{t.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{t.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{t.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{t.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{t.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{t.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(F){Ke.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ke.copy(F))}function _e(F){re.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),re.copy(F))}function ke(F,Ee){let ne=c.get(Ee);ne===void 0&&(ne=new WeakMap,c.set(Ee,ne));let ae=ne.get(F);ae===void 0&&(ae=t.getUniformBlockIndex(Ee,F.name),ne.set(F,ae))}function We(F,Ee){const ae=c.get(Ee).get(F);l.get(Ee)!==ae&&(t.uniformBlockBinding(Ee,ae,F.__bindingPointIndex),l.set(Ee,ae))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ge=null,ye={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,S=null,E=null,x=null,w=null,L=null,P=new Ze(0,0,0),U=0,A=!1,M=null,D=null,O=null,H=null,z=null,Ke.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:N,disable:se,bindFramebuffer:oe,drawBuffers:le,useProgram:Oe,setBlending:y,setMaterial:ie,setFlipSided:K,setCullFace:q,setLineWidth:te,setPolygonOffset:ce,setScissorTest:J,activeTexture:b,bindTexture:v,unbindTexture:I,compressedTexImage2D:V,compressedTexImage3D:$,texImage2D:xe,texImage3D:Ie,updateUBOMapping:ke,uniformBlockBinding:We,texStorage2D:Le,texStorage3D:fe,texSubImage2D:W,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ce,scissor:Be,viewport:_e,reset:ut}}function Tw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return h?new OffscreenCanvas(b,v):fo("canvas")}function _(b,v,I){let V=1;const $=J(b);if(($.width>I||$.height>I)&&(V=I/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(V*$.width),me=Math.floor(V*$.height);f===void 0&&(f=g(W,me));const ue=v?g(W,me):f;return ue.width=W,ue.height=me,ue.getContext("2d").drawImage(b,0,0,W,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+me+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){t.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(b,v,I,V,$=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=v;if(v===t.RED&&(I===t.FLOAT&&(W=t.R32F),I===t.HALF_FLOAT&&(W=t.R16F),I===t.UNSIGNED_BYTE&&(W=t.R8)),v===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.R8UI),I===t.UNSIGNED_SHORT&&(W=t.R16UI),I===t.UNSIGNED_INT&&(W=t.R32UI),I===t.BYTE&&(W=t.R8I),I===t.SHORT&&(W=t.R16I),I===t.INT&&(W=t.R32I)),v===t.RG&&(I===t.FLOAT&&(W=t.RG32F),I===t.HALF_FLOAT&&(W=t.RG16F),I===t.UNSIGNED_BYTE&&(W=t.RG8)),v===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.RG8UI),I===t.UNSIGNED_SHORT&&(W=t.RG16UI),I===t.UNSIGNED_INT&&(W=t.RG32UI),I===t.BYTE&&(W=t.RG8I),I===t.SHORT&&(W=t.RG16I),I===t.INT&&(W=t.RG32I)),v===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.RGB8UI),I===t.UNSIGNED_SHORT&&(W=t.RGB16UI),I===t.UNSIGNED_INT&&(W=t.RGB32UI),I===t.BYTE&&(W=t.RGB8I),I===t.SHORT&&(W=t.RGB16I),I===t.INT&&(W=t.RGB32I)),v===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),I===t.UNSIGNED_INT&&(W=t.RGBA32UI),I===t.BYTE&&(W=t.RGBA8I),I===t.SHORT&&(W=t.RGBA16I),I===t.INT&&(W=t.RGBA32I)),v===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),v===t.RGBA){const me=$?co:et.getTransfer(V);I===t.FLOAT&&(W=t.RGBA32F),I===t.HALF_FLOAT&&(W=t.RGBA16F),I===t.UNSIGNED_BYTE&&(W=me===lt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(b,v){let I;return b?v===null||v===vr||v===Ks?I=t.DEPTH24_STENCIL8:v===oi?I=t.DEPTH32F_STENCIL8:v===Ys&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vr||v===Ks?I=t.DEPTH_COMPONENT24:v===oi?I=t.DEPTH_COMPONENT32F:v===Ys&&(I=t.DEPTH_COMPONENT16),I}function w(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Mn&&b.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function L(b){const v=b.target;v.removeEventListener("dispose",L),U(v),v.isVideoTexture&&u.delete(v)}function P(b){const v=b.target;v.removeEventListener("dispose",P),M(v)}function U(b){const v=i.get(b);if(v.__webglInit===void 0)return;const I=b.source,V=d.get(I);if(V){const $=V[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(b),Object.keys(V).length===0&&d.delete(I)}i.remove(b)}function A(b){const v=i.get(b);t.deleteTexture(v.__webglTexture);const I=b.source,V=d.get(I);delete V[v.__cacheKey],a.memory.textures--}function M(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let $=0;$<v.__webglFramebuffer[V].length;$++)t.deleteFramebuffer(v.__webglFramebuffer[V][$]);else t.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)t.deleteFramebuffer(v.__webglFramebuffer[V]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=b.textures;for(let V=0,$=I.length;V<$;V++){const W=i.get(I[V]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(I[V])}i.remove(b)}let D=0;function O(){D=0}function H(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function z(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Q(b,v){const I=i.get(b);if(b.isVideoTexture&&te(b),b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(I,b,v);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+v)}function Z(b,v){const I=i.get(b);if(b.version>0&&I.__version!==b.version){re(I,b,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+v)}function ee(b,v){const I=i.get(b);if(b.version>0&&I.__version!==b.version){re(I,b,v);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+v)}function G(b,v){const I=i.get(b);if(b.version>0&&I.__version!==b.version){pe(I,b,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+v)}const ge={[wc]:t.REPEAT,[ur]:t.CLAMP_TO_EDGE,[Rc]:t.MIRRORED_REPEAT},ye={[Mn]:t.NEAREST,[ZS]:t.NEAREST_MIPMAP_NEAREST,[ga]:t.NEAREST_MIPMAP_LINEAR,[Nn]:t.LINEAR,[fl]:t.LINEAR_MIPMAP_NEAREST,[fr]:t.LINEAR_MIPMAP_LINEAR},Re={[tb]:t.NEVER,[ob]:t.ALWAYS,[nb]:t.LESS,[ag]:t.LEQUAL,[ib]:t.EQUAL,[ab]:t.GEQUAL,[rb]:t.GREATER,[sb]:t.NOTEQUAL};function Ue(b,v){if(v.type===oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===fl||v.magFilter===ga||v.magFilter===fr||v.minFilter===Nn||v.minFilter===fl||v.minFilter===ga||v.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,ge[v.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ge[v.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ge[v.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ye[v.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ye[v.minFilter]),v.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mn||v.minFilter!==ga&&v.minFilter!==fr||v.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(b,v){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",L));const V=v.source;let $=d.get(V);$===void 0&&($={},d.set(V,$));const W=z(v);if(W!==b.__cacheKey){$[W]===void 0&&($[W]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),$[W].usedTimes++;const me=$[b.__cacheKey];me!==void 0&&($[b.__cacheKey].usedTimes--,me.usedTimes===0&&A(v)),b.__cacheKey=W,b.__webglTexture=$[W].texture}return I}function re(b,v,I){let V=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=t.TEXTURE_3D);const $=Ke(b,v),W=v.source;n.bindTexture(V,b.__webglTexture,t.TEXTURE0+I);const me=i.get(W);if(W.version!==me.__version||$===!0){n.activeTexture(t.TEXTURE0+I);const ue=et.getPrimaries(et.workingColorSpace),Ce=v.colorSpace===Di?null:et.getPrimaries(v.colorSpace),Le=v.colorSpace===Di||ue===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let fe=_(v.image,!1,r.maxTextureSize);fe=ce(v,fe);const xe=s.convert(v.format,v.colorSpace),Ie=s.convert(v.type);let Be=E(v.internalFormat,xe,Ie,v.colorSpace,v.isVideoTexture);Ue(V,v);let _e;const ke=v.mipmaps,We=v.isVideoTexture!==!0,ut=me.__version===void 0||$===!0,F=W.dataReady,Ee=w(v,fe);if(v.isDepthTexture)Be=x(v.format===Js,v.type),ut&&(We?n.texStorage2D(t.TEXTURE_2D,1,Be,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Be,fe.width,fe.height,0,xe,Ie,null));else if(v.isDataTexture)if(ke.length>0){We&&ut&&n.texStorage2D(t.TEXTURE_2D,Ee,Be,ke[0].width,ke[0].height);for(let ne=0,ae=ke.length;ne<ae;ne++)_e=ke[ne],We?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,ne,Be,_e.width,_e.height,0,xe,Ie,_e.data);v.generateMipmaps=!1}else We?(ut&&n.texStorage2D(t.TEXTURE_2D,Ee,Be,fe.width,fe.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,xe,Ie,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Be,fe.width,fe.height,0,xe,Ie,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){We&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,Be,ke[0].width,ke[0].height,fe.depth);for(let ne=0,ae=ke.length;ne<ae;ne++)if(_e=ke[ne],v.format!==yn)if(xe!==null)if(We){if(F)if(v.layerUpdates.size>0){const Ae=_h(_e.width,_e.height,v.format,v.type);for(const Te of v.layerUpdates){const qe=_e.data.subarray(Te*Ae/_e.data.BYTES_PER_ELEMENT,(Te+1)*Ae/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Te,_e.width,_e.height,1,xe,qe)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,fe.depth,xe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Be,_e.width,_e.height,fe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,fe.depth,xe,Ie,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Be,_e.width,_e.height,fe.depth,0,xe,Ie,_e.data)}else{We&&ut&&n.texStorage2D(t.TEXTURE_2D,Ee,Be,ke[0].width,ke[0].height);for(let ne=0,ae=ke.length;ne<ae;ne++)_e=ke[ne],v.format!==yn?xe!==null?We?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Ie,_e.data):n.texImage2D(t.TEXTURE_2D,ne,Be,_e.width,_e.height,0,xe,Ie,_e.data)}else if(v.isDataArrayTexture)if(We){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,Be,fe.width,fe.height,fe.depth),F)if(v.layerUpdates.size>0){const ne=_h(fe.width,fe.height,v.format,v.type);for(const ae of v.layerUpdates){const Ae=fe.data.subarray(ae*ne/fe.data.BYTES_PER_ELEMENT,(ae+1)*ne/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,fe.width,fe.height,1,xe,Ie,Ae)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ie,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,fe.width,fe.height,fe.depth,0,xe,Ie,fe.data);else if(v.isData3DTexture)We?(ut&&n.texStorage3D(t.TEXTURE_3D,Ee,Be,fe.width,fe.height,fe.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Ie,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Be,fe.width,fe.height,fe.depth,0,xe,Ie,fe.data);else if(v.isFramebufferTexture){if(ut)if(We)n.texStorage2D(t.TEXTURE_2D,Ee,Be,fe.width,fe.height);else{let ne=fe.width,ae=fe.height;for(let Ae=0;Ae<Ee;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,Be,ne,ae,0,xe,Ie,null),ne>>=1,ae>>=1}}else if(ke.length>0){if(We&&ut){const ne=J(ke[0]);n.texStorage2D(t.TEXTURE_2D,Ee,Be,ne.width,ne.height)}for(let ne=0,ae=ke.length;ne<ae;ne++)_e=ke[ne],We?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,xe,Ie,_e):n.texImage2D(t.TEXTURE_2D,ne,Be,xe,Ie,_e);v.generateMipmaps=!1}else if(We){if(ut){const ne=J(fe);n.texStorage2D(t.TEXTURE_2D,Ee,Be,ne.width,ne.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ie,fe)}else n.texImage2D(t.TEXTURE_2D,0,Be,xe,Ie,fe);m(v)&&p(V),me.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function pe(b,v,I){if(v.image.length!==6)return;const V=Ke(b,v),$=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+I);const W=i.get($);if($.version!==W.__version||V===!0){n.activeTexture(t.TEXTURE0+I);const me=et.getPrimaries(et.workingColorSpace),ue=v.colorSpace===Di?null:et.getPrimaries(v.colorSpace),Ce=v.colorSpace===Di||me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Le=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!Le&&!fe?xe[ae]=_(v.image[ae],!0,r.maxCubemapSize):xe[ae]=fe?v.image[ae].image:v.image[ae],xe[ae]=ce(v,xe[ae]);const Ie=xe[0],Be=s.convert(v.format,v.colorSpace),_e=s.convert(v.type),ke=E(v.internalFormat,Be,_e,v.colorSpace),We=v.isVideoTexture!==!0,ut=W.__version===void 0||V===!0,F=$.dataReady;let Ee=w(v,Ie);Ue(t.TEXTURE_CUBE_MAP,v);let ne;if(Le){We&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,ke,Ie.width,Ie.height);for(let ae=0;ae<6;ae++){ne=xe[ae].mipmaps;for(let Ae=0;Ae<ne.length;Ae++){const Te=ne[Ae];v.format!==yn?Be!==null?We?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Te.width,Te.height,Be,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,ke,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Te.width,Te.height,Be,_e,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,ke,Te.width,Te.height,0,Be,_e,Te.data)}}}else{if(ne=v.mipmaps,We&&ut){ne.length>0&&Ee++;const ae=J(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(fe){We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Be,_e,xe[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ke,xe[ae].width,xe[ae].height,0,Be,_e,xe[ae].data);for(let Ae=0;Ae<ne.length;Ae++){const qe=ne[Ae].image[ae].image;We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,qe.width,qe.height,Be,_e,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,ke,qe.width,qe.height,0,Be,_e,qe.data)}}else{We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Be,_e,xe[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ke,Be,_e,xe[ae]);for(let Ae=0;Ae<ne.length;Ae++){const Te=ne[Ae];We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,Be,_e,Te.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,ke,Be,_e,Te.image[ae])}}}m(v)&&p(t.TEXTURE_CUBE_MAP),W.__version=$.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function be(b,v,I,V,$,W){const me=s.convert(I.format,I.colorSpace),ue=s.convert(I.type),Ce=E(I.internalFormat,me,ue,I.colorSpace),Le=i.get(v),fe=i.get(I);if(fe.__renderTarget=v,!Le.__hasExternalTextures){const xe=Math.max(1,v.width>>W),Ie=Math.max(1,v.height>>W);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,W,Ce,xe,Ie,v.depth,0,me,ue,null):n.texImage2D($,W,Ce,xe,Ie,0,me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),q(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,$,fe.__webglTexture,0,K(v)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,$,fe.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(b,v,I){if(t.bindRenderbuffer(t.RENDERBUFFER,b),v.depthBuffer){const V=v.depthTexture,$=V&&V.isDepthTexture?V.type:null,W=x(v.stencilBuffer,$),me=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=K(v);q(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,W,v.width,v.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,W,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,W,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,b)}else{const V=v.textures;for(let $=0;$<V.length;$++){const W=V[$],me=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),Ce=E(W.internalFormat,me,ue,W.colorSpace),Le=K(v);I&&q(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Ce,v.width,v.height):q(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,Ce,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const $=V.__webglTexture,W=K(v);if(v.depthTexture.format===Zs)q(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(v.depthTexture.format===Js)q(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function oe(b){const v=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const V=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=V}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const V=b.texture.mipmaps;V&&V.length>0?se(v.__webglFramebuffer[0],b):se(v.__webglFramebuffer,b)}else if(I){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=t.createRenderbuffer(),N(v.__webglDepthbuffer[V],b,!1);else{const $=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,W)}}else{const V=b.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),N(v.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(b,v,I){const V=i.get(b);v!==void 0&&be(V.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&oe(b)}function Oe(b){const v=b.texture,I=i.get(b),V=i.get(v);b.addEventListener("dispose",P);const $=b.textures,W=b.isWebGLCubeRenderTarget===!0,me=$.length>1;if(me||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=v.version,a.memory.textures++),W){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)I.__webglFramebuffer[ue][Ce]=t.createFramebuffer()}else I.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)I.__webglFramebuffer[ue]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(me)for(let ue=0,Ce=$.length;ue<Ce;ue++){const Le=i.get($[ue]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&q(b)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ue=0;ue<$.length;ue++){const Ce=$[ue];I.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ue]);const Le=s.convert(Ce.format,Ce.colorSpace),fe=s.convert(Ce.type),xe=E(Ce.internalFormat,Le,fe,Ce.colorSpace,b.isXRRenderTarget===!0),Ie=K(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,xe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,I.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),N(I.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)be(I.__webglFramebuffer[ue][Ce],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce);else be(I.__webglFramebuffer[ue],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let ue=0,Ce=$.length;ue<Ce;ue++){const Le=$[ue],fe=i.get(Le);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Ue(t.TEXTURE_2D,Le),be(I.__webglFramebuffer,b,Le,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Le)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,V.__webglTexture),Ue(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)be(I.__webglFramebuffer[Ce],b,v,t.COLOR_ATTACHMENT0,ue,Ce);else be(I.__webglFramebuffer,b,v,t.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),n.unbindTexture()}b.depthBuffer&&oe(b)}function R(b){const v=b.textures;for(let I=0,V=v.length;I<V;I++){const $=v[I];if(m($)){const W=S(b),me=i.get($).__webglTexture;n.bindTexture(W,me),p(W),n.unbindTexture()}}}const C=[],y=[];function ie(b){if(b.samples>0){if(q(b)===!1){const v=b.textures,I=b.width,V=b.height;let $=t.COLOR_BUFFER_BIT;const W=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(b),ue=v.length>1;if(ue)for(let Le=0;Le<v.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Ce=b.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Le=0;Le<v.length;Le++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Le]);const fe=i.get(v[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,I,V,0,0,I,V,$,t.NEAREST),l===!0&&(C.length=0,y.length=0,C.push(t.COLOR_ATTACHMENT0+Le),b.depthBuffer&&b.resolveDepthBuffer===!1&&(C.push(W),y.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,y)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,C))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Le=0;Le<v.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,me.__webglColorRenderbuffer[Le]);const fe=i.get(v[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function K(b){return Math.min(r.maxSamples,b.samples)}function q(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(b){const v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function ce(b,v){const I=b.colorSpace,V=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==ss&&I!==Di&&(et.getTransfer(I)===lt?(V!==yn||$!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function J(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=G,this.rebindTextures=le,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=q}function Aw(t,e){function n(i,r=Di){let s;const a=et.getTransfer(r);if(i===Gn)return t.UNSIGNED_BYTE;if(i===$u)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ju)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Qm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zm)return t.BYTE;if(i===Jm)return t.SHORT;if(i===Ys)return t.UNSIGNED_SHORT;if(i===qu)return t.INT;if(i===vr)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===ia)return t.HALF_FLOAT;if(i===eg)return t.ALPHA;if(i===tg)return t.RGB;if(i===yn)return t.RGBA;if(i===Zs)return t.DEPTH_COMPONENT;if(i===Js)return t.DEPTH_STENCIL;if(i===ng)return t.RED;if(i===Yu)return t.RED_INTEGER;if(i===ig)return t.RG;if(i===Ku)return t.RG_INTEGER;if(i===Zu)return t.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===$a)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cc||i===Pc||i===Lc||i===Dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Uc||i===Nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ic||i===Uc)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fc||i===Oc||i===Bc||i===zc||i===kc||i===Hc||i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===$c||i===jc||i===Yc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$c)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===Kc||i===Zc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ja)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rg||i===Jc||i===Qc||i===eu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rw=`
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

}`;class Cw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ki({vertexShader:ww,fragmentShader:Rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new Fo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pw extends cs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new Cw,m=n.getContextAttributes();let p=null,S=null;const E=[],x=[],w=new nt;let L=null;const P=new fn;P.viewport=new _t;const U=new fn;U.viewport=new _t;const A=[P,U],M=new Yb;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let pe=E[re];return pe===void 0&&(pe=new Il,E[re]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(re){let pe=E[re];return pe===void 0&&(pe=new Il,E[re]=pe),pe.getGripSpace()},this.getHand=function(re){let pe=E[re];return pe===void 0&&(pe=new Il,E[re]=pe),pe.getHandSpace()};function H(re){const pe=x.indexOf(re.inputSource);if(pe===-1)return;const be=E[pe];be!==void 0&&(be.update(re.inputSource,re.frame,c||a),be.dispatchEvent({type:re.type,data:re.inputSource}))}function z(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Q);for(let re=0;re<E.length;re++){const pe=x[re];pe!==null&&(x[re]=null,E[re].disconnect(pe))}D=null,O=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,N=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=m.stencil?Js:Zs,N=m.stencil?Ks:vr);const oe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new xr(d.textureWidth,d.textureHeight,{format:yn,type:Gn,depthTexture:new _g(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new xr(h.framebufferWidth,h.framebufferHeight,{format:yn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(re){for(let pe=0;pe<re.removed.length;pe++){const be=re.removed[pe],N=x.indexOf(be);N>=0&&(x[N]=null,E[N].disconnect(be))}for(let pe=0;pe<re.added.length;pe++){const be=re.added[pe];let N=x.indexOf(be);if(N===-1){for(let oe=0;oe<E.length;oe++)if(oe>=x.length){x.push(be),N=oe;break}else if(x[oe]===null){x[oe]=be,N=oe;break}if(N===-1)break}const se=E[N];se&&se.connect(be)}}const Z=new X,ee=new X;function G(re,pe,be){Z.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(be.matrixWorld);const N=Z.distanceTo(ee),se=pe.projectionMatrix.elements,oe=be.projectionMatrix.elements,le=se[14]/(se[10]-1),Oe=se[14]/(se[10]+1),R=(se[9]+1)/se[5],C=(se[9]-1)/se[5],y=(se[8]-1)/se[0],ie=(oe[8]+1)/oe[0],K=le*y,q=le*ie,te=N/(-y+ie),ce=te*-y;if(pe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ce),re.translateZ(te),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),se[10]===-1)re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const J=le+te,b=Oe+te,v=K-ce,I=q+(N-ce),V=R*Oe/b*J,$=C*Oe/b*J;re.projectionMatrix.makePerspective(v,I,V,$,J,b),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ge(re,pe){pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let pe=re.near,be=re.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(be=_.depthFar)),M.near=U.near=P.near=pe,M.far=U.far=P.far=be,(D!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,O=M.far),P.layers.mask=re.layers.mask|2,U.layers.mask=re.layers.mask|4,M.layers.mask=P.layers.mask|U.layers.mask;const N=re.parent,se=M.cameras;ge(M,N);for(let oe=0;oe<se.length;oe++)ge(se[oe],N);se.length===2?G(M,P,U):M.projectionMatrix.copy(P.projectionMatrix),ye(re,M,N)};function ye(re,pe,be){be===null?re.matrix.copy(pe.matrixWorld):(re.matrix.copy(be.matrixWorld),re.matrix.invert(),re.matrix.multiply(pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=tu*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Re=null;function Ue(re,pe){if(u=pe.getViewerPose(c||a),g=pe,u!==null){const be=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let N=!1;be.length!==M.cameras.length&&(M.cameras.length=0,N=!0);for(let le=0;le<be.length;le++){const Oe=be[le];let R=null;if(h!==null)R=h.getViewport(Oe);else{const y=f.getViewSubImage(d,Oe);R=y.viewport,le===0&&(e.setRenderTargetTextures(S,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(S))}let C=A[le];C===void 0&&(C=new fn,C.layers.enable(le),C.viewport=new _t,A[le]=C),C.matrix.fromArray(Oe.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Oe.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(R.x,R.y,R.width,R.height),le===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),N===!0&&M.cameras.push(C)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const le=f.getDepthInformation(be[0]);le&&le.isValid&&le.texture&&_.init(e,le,r.renderState)}}for(let be=0;be<E.length;be++){const N=x[be],se=E[be];N!==null&&se!==void 0&&se.update(N,pe,c||a)}Re&&Re(re,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Ke=new xg;Ke.setAnimationLoop(Ue),this.setAnimationLoop=function(re){Re=re},this.dispose=function(){}}}const tr=new Wn,Lw=new pt;function Dw(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,tr.copy(x),tr.x*=-1,tr.y*=-1,tr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.envMapRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(tr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Iw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function c(S,E){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));const w=E.program;i.updateUBOMapping(S,w);const L=e.render.frame;s[S.id]!==L&&(d(S),s[S.id]=L)}function u(S){const E=f();S.__bindingPointIndex=E;const x=t.createBuffer(),w=S.__size,L=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,w,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,x),x}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=r[S.id],x=S.uniforms,w=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let L=0,P=x.length;L<P;L++){const U=Array.isArray(x[L])?x[L]:[x[L]];for(let A=0,M=U.length;A<M;A++){const D=U[A];if(h(D,L,A,w)===!0){const O=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let Q=0;Q<H.length;Q++){const Z=H[Q],ee=_(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,O+z,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,z),z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(S,E,x,w){const L=S.value,P=E+"_"+x;if(w[P]===void 0)return typeof L=="number"||typeof L=="boolean"?w[P]=L:w[P]=L.clone(),!0;{const U=w[P];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return w[P]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function g(S){const E=S.uniforms;let x=0;const w=16;for(let P=0,U=E.length;P<U;P++){const A=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,D=A.length;M<D;M++){const O=A[M],H=Array.isArray(O.value)?O.value:[O.value];for(let z=0,Q=H.length;z<Q;z++){const Z=H[z],ee=_(Z),G=x%w,ge=G%ee.boundary,ye=G+ge;x+=ge,ye!==0&&w-ye<ee.storage&&(x+=w-ye),O.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=ee.storage}}}const L=x%w;return L>0&&(x+=w-L),S.__size=x,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Uw{constructor(e={}){const{canvas:n=cb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let w=!1;this._outputColorSpace=un;let L=0,P=0,U=null,A=-1,M=null;const D=new _t,O=new _t;let H=null;const z=new Ze(0);let Q=0,Z=n.width,ee=n.height,G=1,ge=null,ye=null;const Re=new _t(0,0,Z,ee),Ue=new _t(0,0,Z,ee);let Ke=!1;const re=new tf;let pe=!1,be=!1;const N=new pt,se=new pt,oe=new X,le=new _t,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function C(){return U===null?G:1}let y=i;function ie(T,B){return n.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xu}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Ae,!1),n.addEventListener("webglcontextcreationerror",Te,!1),y===null){const B="webgl2";if(y=ie(B,T),y===null)throw ie(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,q,te,ce,J,b,v,I,V,$,W,me,ue,Ce,Le,fe,xe,Ie,Be,_e,ke,We,ut,F;function Ee(){K=new WT(y),K.init(),We=new Aw(y,K),q=new OT(y,K,e,We),te=new Ew(y,K),q.reverseDepthBuffer&&d&&te.buffers.depth.setReversed(!0),ce=new $T(y),J=new fw,b=new Tw(y,K,te,J,q,We,ce),v=new zT(x),I=new GT(x),V=new Qb(y),ut=new NT(y,V),$=new XT(y,V,ce,ut),W=new YT(y,$,V,ce),Be=new jT(y,q,b),fe=new BT(J),me=new uw(x,v,I,K,q,ut,fe),ue=new Dw(x,J),Ce=new hw,Le=new xw(K),Ie=new UT(x,v,I,te,W,h,l),xe=new bw(x,W,q),F=new Iw(y,ce,q,te),_e=new FT(y,K,ce),ke=new qT(y,K,ce),ce.programs=me.programs,x.capabilities=q,x.extensions=K,x.properties=J,x.renderLists=Ce,x.shadowMap=xe,x.state=te,x.info=ce}Ee();const ne=new Pw(x,y);this.xr=ne,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(Z,ee,!1))},this.getSize=function(T){return T.set(Z,ee)},this.setSize=function(T,B,j=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,ee=B,n.width=Math.floor(T*G),n.height=Math.floor(B*G),j===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Z*G,ee*G).floor()},this.setDrawingBufferSize=function(T,B,j){Z=T,ee=B,G=j,n.width=Math.floor(T*j),n.height=Math.floor(B*j),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(Re)},this.setViewport=function(T,B,j,Y){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,B,j,Y),te.viewport(D.copy(Re).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Ue)},this.setScissor=function(T,B,j,Y){T.isVector4?Ue.set(T.x,T.y,T.z,T.w):Ue.set(T,B,j,Y),te.scissor(O.copy(Ue).multiplyScalar(G).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){te.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){ge=T},this.setTransparentSort=function(T){ye=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,j=!0){let Y=0;if(T){let k=!1;if(U!==null){const he=U.texture.format;k=he===Zu||he===Ku||he===Yu}if(k){const he=U.texture.type,Me=he===Gn||he===vr||he===Ys||he===Ks||he===$u||he===ju,we=Ie.getClearColor(),Pe=Ie.getClearAlpha(),He=we.r,ze=we.g,Ne=we.b;Me?(g[0]=He,g[1]=ze,g[2]=Ne,g[3]=Pe,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=He,_[1]=ze,_[2]=Ne,_[3]=Pe,y.clearBufferiv(y.COLOR,0,_))}else Y|=y.COLOR_BUFFER_BIT}B&&(Y|=y.DEPTH_BUFFER_BIT),j&&(Y|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Ae,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Ie.dispose(),Ce.dispose(),Le.dispose(),J.dispose(),v.dispose(),I.dispose(),W.dispose(),ut.dispose(),F.dispose(),me.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",mf),ne.removeEventListener("sessionend",gf),Wi.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=ce.autoReset,B=xe.enabled,j=xe.autoUpdate,Y=xe.needsUpdate,k=xe.type;Ee(),ce.autoReset=T,xe.enabled=B,xe.autoUpdate=j,xe.needsUpdate=Y,xe.type=k}function Te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const B=T.target;B.removeEventListener("dispose",qe),mt(B)}function mt(T){Dt(T),J.remove(T)}function Dt(T){const B=J.get(T).programs;B!==void 0&&(B.forEach(function(j){me.releaseProgram(j)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,j,Y,k,he){B===null&&(B=Oe);const Me=k.isMesh&&k.matrixWorld.determinant()<0,we=a_(T,B,j,Y,k);te.setMaterial(Y,Me);let Pe=j.index,He=1;if(Y.wireframe===!0){if(Pe=$.getWireframeAttribute(j),Pe===void 0)return;He=2}const ze=j.drawRange,Ne=j.attributes.position;let Je=ze.start*He,it=(ze.start+ze.count)*He;he!==null&&(Je=Math.max(Je,he.start*He),it=Math.min(it,(he.start+he.count)*He)),Pe!==null?(Je=Math.max(Je,0),it=Math.min(it,Pe.count)):Ne!=null&&(Je=Math.max(Je,0),it=Math.min(it,Ne.count));const yt=it-Je;if(yt<0||yt===1/0)return;ut.setup(k,Y,we,j,Pe);let gt,Qe=_e;if(Pe!==null&&(gt=V.get(Pe),Qe=ke,Qe.setIndex(gt)),k.isMesh)Y.wireframe===!0?(te.setLineWidth(Y.wireframeLinewidth*C()),Qe.setMode(y.LINES)):Qe.setMode(y.TRIANGLES);else if(k.isLine){let Fe=Y.linewidth;Fe===void 0&&(Fe=1),te.setLineWidth(Fe*C()),k.isLineSegments?Qe.setMode(y.LINES):k.isLineLoop?Qe.setMode(y.LINE_LOOP):Qe.setMode(y.LINE_STRIP)}else k.isPoints?Qe.setMode(y.POINTS):k.isSprite&&Qe.setMode(y.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ya("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Qe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Fe=k._multiDrawStarts,Ct=k._multiDrawCounts,rt=k._multiDrawCount,mn=Pe?V.get(Pe).bytesPerElement:1,Mr=J.get(Y).currentProgram.getUniforms();for(let Jt=0;Jt<rt;Jt++)Mr.setValue(y,"_gl_DrawID",Jt),Qe.render(Fe[Jt]/mn,Ct[Jt])}else if(k.isInstancedMesh)Qe.renderInstances(Je,yt,k.count);else if(j.isInstancedBufferGeometry){const Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ct=Math.min(j.instanceCount,Fe);Qe.renderInstances(Je,yt,Ct)}else Qe.render(Je,yt)};function ot(T,B,j){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=Kt,T.needsUpdate=!0,ua(T,B,j),T.side=zi,T.needsUpdate=!0,ua(T,B,j),T.side=si):ua(T,B,j)}this.compile=function(T,B,j=null){j===null&&(j=T),p=Le.get(j),p.init(B),E.push(p),j.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==j&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Y=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const we=he[Me];ot(we,j,k),Y.add(we)}else ot(he,j,k),Y.add(he)}),p=E.pop(),Y},this.compileAsync=function(T,B,j=null){const Y=this.compile(T,B,j);return new Promise(k=>{function he(){if(Y.forEach(function(Me){J.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){k(T);return}setTimeout(he,10)}K.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let pn=null;function qn(T){pn&&pn(T)}function mf(){Wi.stop()}function gf(){Wi.start()}const Wi=new xg;Wi.setAnimationLoop(qn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(T){pn=T,ne.setAnimationLoop(T),T===null?Wi.stop():Wi.start()},ne.addEventListener("sessionstart",mf),ne.addEventListener("sessionend",gf),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(B),B=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,U),p=Le.get(T,E.length),p.init(B),E.push(p),se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),re.setFromProjectionMatrix(se),be=this.localClippingEnabled,pe=fe.init(this.clippingPlanes,be),m=Ce.get(T,S.length),m.init(),S.push(m),ne.enabled===!0&&ne.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&Wo(he,B,-1/0,x.sortObjects)}Wo(T,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ge,ye),R=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,R&&Ie.addToRenderList(m,T),this.info.render.frame++,pe===!0&&fe.beginShadows();const j=p.state.shadowsArray;xe.render(j,T,B),pe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const he=B.cameras;if(k.length>0)for(let Me=0,we=he.length;Me<we;Me++){const Pe=he[Me];vf(Y,k,T,Pe)}R&&Ie.render(T);for(let Me=0,we=he.length;Me<we;Me++){const Pe=he[Me];_f(m,T,Pe,Pe.viewport)}}else k.length>0&&vf(Y,k,T,B),R&&Ie.render(T),_f(m,T,B);U!==null&&P===0&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),T.isScene===!0&&T.onAfterRender(x,T,B),ut.resetDefaultState(),A=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],pe===!0&&fe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Wo(T,B,j,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||re.intersectsSprite(T)){Y&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Me=W.update(T),we=T.material;we.visible&&m.push(T,Me,we,j,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||re.intersectsObject(T))){const Me=W.update(T),we=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),le.copy(Me.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(we)){const Pe=Me.groups;for(let He=0,ze=Pe.length;He<ze;He++){const Ne=Pe[He],Je=we[Ne.materialIndex];Je&&Je.visible&&m.push(T,Me,Je,j,le.z,Ne)}}else we.visible&&m.push(T,Me,we,j,le.z,null)}}const he=T.children;for(let Me=0,we=he.length;Me<we;Me++)Wo(he[Me],B,j,Y)}function _f(T,B,j,Y){const k=T.opaque,he=T.transmissive,Me=T.transparent;p.setupLightsView(j),pe===!0&&fe.setGlobalState(x.clippingPlanes,j),Y&&te.viewport(D.copy(Y)),k.length>0&&ca(k,B,j),he.length>0&&ca(he,B,j),Me.length>0&&ca(Me,B,j),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function vf(T,B,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new xr(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?ia:Gn,minFilter:fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const he=p.state.transmissionRenderTarget[Y.id],Me=Y.viewport||D;he.setSize(Me.z*x.transmissionResolutionScale,Me.w*x.transmissionResolutionScale);const we=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(z),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),R&&Ie.render(j);const Pe=x.toneMapping;x.toneMapping=Ni;const He=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),pe===!0&&fe.setGlobalState(x.clippingPlanes,Y),ca(T,j,Y),b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he),K.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ne=0,Je=B.length;Ne<Je;Ne++){const it=B[Ne],yt=it.object,gt=it.geometry,Qe=it.material,Fe=it.group;if(Qe.side===si&&yt.layers.test(Y.layers)){const Ct=Qe.side;Qe.side=Kt,Qe.needsUpdate=!0,xf(yt,j,Y,gt,Qe,Fe),Qe.side=Ct,Qe.needsUpdate=!0,ze=!0}}ze===!0&&(b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he))}x.setRenderTarget(we),x.setClearColor(z,Q),He!==void 0&&(Y.viewport=He),x.toneMapping=Pe}function ca(T,B,j){const Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,he=T.length;k<he;k++){const Me=T[k],we=Me.object,Pe=Me.geometry,He=Me.group;let ze=Me.material;ze.allowOverride===!0&&Y!==null&&(ze=Y),we.layers.test(j.layers)&&xf(we,B,j,Pe,ze,He)}}function xf(T,B,j,Y,k,he){T.onBeforeRender(x,B,j,Y,k,he),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,B,j,Y,T,he),k.transparent===!0&&k.side===si&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,x.renderBufferDirect(j,B,Y,k,T,he),k.side=zi,k.needsUpdate=!0,x.renderBufferDirect(j,B,Y,k,T,he),k.side=si):x.renderBufferDirect(j,B,Y,k,T,he),T.onAfterRender(x,B,j,Y,k,he)}function ua(T,B,j){B.isScene!==!0&&(B=Oe);const Y=J.get(T),k=p.state.lights,he=p.state.shadowsArray,Me=k.state.version,we=me.getParameters(T,k.state,he,B,j),Pe=me.getProgramCacheKey(we);let He=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?I:v).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",qe),He=new Map,Y.programs=He);let ze=He.get(Pe);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===Me)return Sf(T,we),ze}else we.uniforms=me.getUniforms(T),T.onBeforeCompile(we,x),ze=me.acquireProgram(we,Pe),He.set(Pe,ze),Y.uniforms=we.uniforms;const Ne=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=fe.uniform),Sf(T,we),Y.needsLights=l_(T),Y.lightsStateVersion=Me,Y.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMap.value=k.state.directionalShadowMap,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotShadowMap.value=k.state.spotShadowMap,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMap.value=k.state.pointShadowMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function yf(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Ka.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Sf(T,B){const j=J.get(T);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function a_(T,B,j,Y,k){B.isScene!==!0&&(B=Oe),b.resetTextureUnits();const he=B.fog,Me=Y.isMeshStandardMaterial?B.environment:null,we=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ss,Pe=(Y.isMeshStandardMaterial?I:v).get(Y.envMap||Me),He=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ze=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!j.morphAttributes.position,Je=!!j.morphAttributes.normal,it=!!j.morphAttributes.color;let yt=Ni;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(yt=x.toneMapping);const gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=gt!==void 0?gt.length:0,Fe=J.get(Y),Ct=p.state.lights;if(pe===!0&&(be===!0||T!==M)){const zt=T===M&&Y.id===A;fe.setState(Y,T,zt)}let rt=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ct.state.version||Fe.outputColorSpace!==we||k.isBatchedMesh&&Fe.batching===!1||!k.isBatchedMesh&&Fe.batching===!0||k.isBatchedMesh&&Fe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Fe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Fe.instancing===!1||!k.isInstancedMesh&&Fe.instancing===!0||k.isSkinnedMesh&&Fe.skinning===!1||!k.isSkinnedMesh&&Fe.skinning===!0||k.isInstancedMesh&&Fe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Fe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Fe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Fe.instancingMorph===!1&&k.morphTexture!==null||Fe.envMap!==Pe||Y.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==He||Fe.vertexTangents!==ze||Fe.morphTargets!==Ne||Fe.morphNormals!==Je||Fe.morphColors!==it||Fe.toneMapping!==yt||Fe.morphTargetsCount!==Qe)&&(rt=!0):(rt=!0,Fe.__version=Y.version);let mn=Fe.currentProgram;rt===!0&&(mn=ua(Y,B,k));let Mr=!1,Jt=!1,ps=!1;const ht=mn.getUniforms(),sn=Fe.uniforms;if(te.useProgram(mn.program)&&(Mr=!0,Jt=!0,ps=!0),Y.id!==A&&(A=Y.id,Jt=!0),Mr||M!==T){te.buffers.depth.getReversed()?(N.copy(T.projectionMatrix),fb(N),db(N),ht.setValue(y,"projectionMatrix",N)):ht.setValue(y,"projectionMatrix",T.projectionMatrix),ht.setValue(y,"viewMatrix",T.matrixWorldInverse);const Xt=ht.map.cameraPosition;Xt!==void 0&&Xt.setValue(y,oe.setFromMatrixPosition(T.matrixWorld)),q.logarithmicDepthBuffer&&ht.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ht.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Jt=!0,ps=!0)}if(k.isSkinnedMesh){ht.setOptional(y,k,"bindMatrix"),ht.setOptional(y,k,"bindMatrixInverse");const zt=k.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),ht.setValue(y,"boneTexture",zt.boneTexture,b))}k.isBatchedMesh&&(ht.setOptional(y,k,"batchingTexture"),ht.setValue(y,"batchingTexture",k._matricesTexture,b),ht.setOptional(y,k,"batchingIdTexture"),ht.setValue(y,"batchingIdTexture",k._indirectTexture,b),ht.setOptional(y,k,"batchingColorTexture"),k._colorsTexture!==null&&ht.setValue(y,"batchingColorTexture",k._colorsTexture,b));const an=j.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Be.update(k,j,mn),(Jt||Fe.receiveShadow!==k.receiveShadow)&&(Fe.receiveShadow=k.receiveShadow,ht.setValue(y,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(sn.envMap.value=Pe,sn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(sn.envMapIntensity.value=B.environmentIntensity),Jt&&(ht.setValue(y,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&o_(sn,ps),he&&Y.fog===!0&&ue.refreshFogUniforms(sn,he),ue.refreshMaterialUniforms(sn,Y,G,ee,p.state.transmissionRenderTarget[T.id]),Ka.upload(y,yf(Fe),sn,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ka.upload(y,yf(Fe),sn,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ht.setValue(y,"center",k.center),ht.setValue(y,"modelViewMatrix",k.modelViewMatrix),ht.setValue(y,"normalMatrix",k.normalMatrix),ht.setValue(y,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const zt=Y.uniformsGroups;for(let Xt=0,Xo=zt.length;Xt<Xo;Xt++){const Xi=zt[Xt];F.update(Xi,mn),F.bind(Xi,mn)}}return mn}function o_(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function l_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,B,j){const Y=J.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(T.texture).__webglTexture=B,J.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const j=J.get(T);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0};const c_=y.createFramebuffer();this.setRenderTarget=function(T,B=0,j=0){U=T,L=B,P=j;let Y=!0,k=null,he=!1,Me=!1;if(T){const Pe=J.get(T);if(Pe.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(y.FRAMEBUFFER,null),Y=!1;else if(Pe.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Pe.__hasExternalTextures)b.rebindTextures(T,J.get(T.texture).__webglTexture,J.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ne=T.depthTexture;if(Pe.__boundDepthTexture!==Ne){if(Ne!==null&&J.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const ze=J.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?k=ze[B][j]:k=ze[B],he=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?k=J.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[j]:k=ze,D.copy(T.viewport),O.copy(T.scissor),H=T.scissorTest}else D.copy(Re).multiplyScalar(G).floor(),O.copy(Ue).multiplyScalar(G).floor(),H=Ke;if(j!==0&&(k=c_),te.bindFramebuffer(y.FRAMEBUFFER,k)&&Y&&te.drawBuffers(T,k),te.viewport(D),te.scissor(O),te.setScissorTest(H),he){const Pe=J.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,j)}else if(Me){const Pe=J.get(T.texture),He=B;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Pe.__webglTexture,j,He)}else if(T!==null&&j!==0){const Pe=J.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Pe.__webglTexture,j)}A=-1},this.readRenderTargetPixels=function(T,B,j,Y,k,he,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){te.bindFramebuffer(y.FRAMEBUFFER,we);try{const Pe=T.texture,He=Pe.format,ze=Pe.type;if(!q.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&j>=0&&j<=T.height-k&&y.readPixels(B,j,Y,k,We.convert(He),We.convert(ze),he)}finally{const Pe=U!==null?J.get(U).__webglFramebuffer:null;te.bindFramebuffer(y.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,B,j,Y,k,he,Me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(B>=0&&B<=T.width-Y&&j>=0&&j<=T.height-k){te.bindFramebuffer(y.FRAMEBUFFER,we);const Pe=T.texture,He=Pe.format,ze=Pe.type;if(!q.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Ne),y.bufferData(y.PIXEL_PACK_BUFFER,he.byteLength,y.STREAM_READ),y.readPixels(B,j,Y,k,We.convert(He),We.convert(ze),0);const Je=U!==null?J.get(U).__webglFramebuffer:null;te.bindFramebuffer(y.FRAMEBUFFER,Je);const it=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await ub(y,it,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Ne),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,he),y.deleteBuffer(Ne),y.deleteSync(it),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,j=0){const Y=Math.pow(2,-j),k=Math.floor(T.image.width*Y),he=Math.floor(T.image.height*Y),Me=B!==null?B.x:0,we=B!==null?B.y:0;b.setTexture2D(T,0),y.copyTexSubImage2D(y.TEXTURE_2D,j,0,0,Me,we,k,he),te.unbindTexture()};const u_=y.createFramebuffer(),f_=y.createFramebuffer();this.copyTextureToTexture=function(T,B,j=null,Y=null,k=0,he=null){he===null&&(k!==0?(Ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=k,k=0):he=0);let Me,we,Pe,He,ze,Ne,Je,it,yt;const gt=T.isCompressedTexture?T.mipmaps[he]:T.image;if(j!==null)Me=j.max.x-j.min.x,we=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,He=j.min.x,ze=j.min.y,Ne=j.isBox3?j.min.z:0;else{const an=Math.pow(2,-k);Me=Math.floor(gt.width*an),we=Math.floor(gt.height*an),T.isDataArrayTexture?Pe=gt.depth:T.isData3DTexture?Pe=Math.floor(gt.depth*an):Pe=1,He=0,ze=0,Ne=0}Y!==null?(Je=Y.x,it=Y.y,yt=Y.z):(Je=0,it=0,yt=0);const Qe=We.convert(B.format),Fe=We.convert(B.type);let Ct;B.isData3DTexture?(b.setTexture3D(B,0),Ct=y.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(b.setTexture2DArray(B,0),Ct=y.TEXTURE_2D_ARRAY):(b.setTexture2D(B,0),Ct=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,B.unpackAlignment);const rt=y.getParameter(y.UNPACK_ROW_LENGTH),mn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Mr=y.getParameter(y.UNPACK_SKIP_PIXELS),Jt=y.getParameter(y.UNPACK_SKIP_ROWS),ps=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,gt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,gt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,He),y.pixelStorei(y.UNPACK_SKIP_ROWS,ze),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ne);const ht=T.isDataArrayTexture||T.isData3DTexture,sn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const an=J.get(T),zt=J.get(B),Xt=J.get(an.__renderTarget),Xo=J.get(zt.__renderTarget);te.bindFramebuffer(y.READ_FRAMEBUFFER,Xt.__webglFramebuffer),te.bindFramebuffer(y.DRAW_FRAMEBUFFER,Xo.__webglFramebuffer);for(let Xi=0;Xi<Pe;Xi++)ht&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(T).__webglTexture,k,Ne+Xi),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(B).__webglTexture,he,yt+Xi)),y.blitFramebuffer(He,ze,Me,we,Je,it,Me,we,y.DEPTH_BUFFER_BIT,y.NEAREST);te.bindFramebuffer(y.READ_FRAMEBUFFER,null),te.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||J.has(T)){const an=J.get(T),zt=J.get(B);te.bindFramebuffer(y.READ_FRAMEBUFFER,u_),te.bindFramebuffer(y.DRAW_FRAMEBUFFER,f_);for(let Xt=0;Xt<Pe;Xt++)ht?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,an.__webglTexture,k,Ne+Xt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,an.__webglTexture,k),sn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,zt.__webglTexture,he,yt+Xt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,zt.__webglTexture,he),k!==0?y.blitFramebuffer(He,ze,Me,we,Je,it,Me,we,y.COLOR_BUFFER_BIT,y.NEAREST):sn?y.copyTexSubImage3D(Ct,he,Je,it,yt+Xt,He,ze,Me,we):y.copyTexSubImage2D(Ct,he,Je,it,He,ze,Me,we);te.bindFramebuffer(y.READ_FRAMEBUFFER,null),te.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else sn?T.isDataTexture||T.isData3DTexture?y.texSubImage3D(Ct,he,Je,it,yt,Me,we,Pe,Qe,Fe,gt.data):B.isCompressedArrayTexture?y.compressedTexSubImage3D(Ct,he,Je,it,yt,Me,we,Pe,Qe,gt.data):y.texSubImage3D(Ct,he,Je,it,yt,Me,we,Pe,Qe,Fe,gt):T.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,he,Je,it,Me,we,Qe,Fe,gt.data):T.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,he,Je,it,gt.width,gt.height,Qe,gt.data):y.texSubImage2D(y.TEXTURE_2D,he,Je,it,Me,we,Qe,Fe,gt);y.pixelStorei(y.UNPACK_ROW_LENGTH,rt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,mn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Mr),y.pixelStorei(y.UNPACK_SKIP_ROWS,Jt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ps),he===0&&B.generateMipmaps&&y.generateMipmap(Ct),te.unbindTexture()},this.copyTextureToTexture3D=function(T,B,j=null,Y=null,k=0){return Ya('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,j,Y,k)},this.initRenderTarget=function(T){J.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),te.unbindTexture()},this.resetState=function(){L=0,P=0,U=null,te.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const Nw={__name:"IndexPage",setup(t){const e=wt(null);return gr(()=>{const n=new Kb,i=new nt;let r=!1,s=!1,a=!0;const o=new Ob,l=new fn(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.set(0,4,10),l.lookAt(0,0,0);const c=new Uw({antialias:!0});c.setClearColor(1973790),c.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(c.domElement);const u=c.domElement;u.addEventListener("mousedown",p=>{const S=u.getBoundingClientRect();i.x=(p.clientX-S.left)/S.width*2-1,i.y=-((p.clientY-S.top)/S.height)*2+1,n.setFromCamera(i,l),n.intersectObject(g).length>0&&(r=!0,s=!0,a=!1)}),u.addEventListener("mouseup",()=>{r=!1,s=!1,a=!0}),u.addEventListener("mouseleave",()=>{r=!1,s=!1,a=!0}),u.addEventListener("mousemove",p=>{if(!r||!s)return;const S=p.movementX,E=.005,x=.02;g.rotation.y+=S*E,_.position.z+=S*x,terrain.position.z+=S*x});const f=new jb(16777215,1);f.position.set(10,20,10),f.castShadow=!0,f.shadow.mapSize.width=1024,f.shadow.mapSize.height=1024,f.shadow.camera.near=.5,f.shadow.camera.far=50,f.shadow.camera.left=-20,f.shadow.camera.right=20,f.shadow.camera.top=20,f.shadow.camera.bottom=-20,o.add(f);const d=new fs(3,3,3),h=new Vb({color:15132390}),g=new Fn(d,h);g.position.set(0,2,0),g.castShadow=!0,o.add(g);const _=new Zb(1e3,200,8947848,4473924);_.position.y=-1,o.add(_);function m(){a&&(g.rotation.y+=.01),c.render(o,l),requestAnimationFrame(m)}m(),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)})}),(n,i)=>(Gs(),mm("div",{ref_key:"container",ref:e,id:"webgl-container"},null,512))}},Fw=[{path:"/",component:yS,children:[{path:"",component:Nw}]}],Ow=yy({history:Yx(),routes:Fw}),Bw={};function zw(t,e){const n=tc("router-view");return Gs(),ku(n)}const kw=$m(Bw,[["render",zw]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Hw(t,e,n){return(e=Gw(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function de(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vh(Object(n),!0).forEach(function(i){Hw(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vh(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Vw(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Gw(t){var e=Vw(t,"string");return typeof e=="symbol"?e:e+""}const Gh=()=>{};let rf={},Eg={},Tg=null,Ag={mark:Gh,measure:Gh};try{typeof window<"u"&&(rf=window),typeof document<"u"&&(Eg=document),typeof MutationObserver<"u"&&(Tg=MutationObserver),typeof performance<"u"&&(Ag=performance)}catch{}const{userAgent:Wh=""}=rf.navigator||{},Hi=rf,dt=Eg,Xh=Tg,ka=Ag;Hi.document;const _i=!!dt.documentElement&&!!dt.head&&typeof dt.addEventListener=="function"&&typeof dt.createElement=="function",wg=~Wh.indexOf("MSIE")||~Wh.indexOf("Trident/");var Ww=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Xw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Rg={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},qw={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Cg=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Bt="classic",Bo="duotone",$w="sharp",jw="sharp-duotone",Pg=[Bt,Bo,$w,jw],Yw={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Kw={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Zw=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Jw={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Qw=["fak","fa-kit","fakd","fa-kit-duotone"],qh={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},e1=["kit"],t1={kit:{"fa-kit":"fak"}},n1=["fak","fakd"],i1={kit:{fak:"fa-kit"}},$h={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ha={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],s1=["fak","fa-kit","fakd","fa-kit-duotone"],a1={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},o1={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},l1={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ru={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},c1=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],su=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...r1,...c1],u1=["solid","regular","light","thin","duotone","brands"],Lg=[1,2,3,4,5,6,7,8,9,10],f1=Lg.concat([11,12,13,14,15,16,17,18,19,20]),d1=[...Object.keys(l1),...u1,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ha.GROUP,Ha.SWAP_OPACITY,Ha.PRIMARY,Ha.SECONDARY].concat(Lg.map(t=>"".concat(t,"x"))).concat(f1.map(t=>"w-".concat(t))),h1={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const hi="___FONT_AWESOME___",au=16,Dg="fa",Ig="svg-inline--fa",yr="data-fa-i2svg",ou="data-fa-pseudo-element",p1="data-fa-pseudo-element-pending",sf="data-prefix",af="data-icon",jh="fontawesome-i2svg",m1="async",g1=["HTML","HEAD","STYLE","SCRIPT"],Ug=(()=>{try{return!0}catch{return!1}})();function oa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Bt]}})}const Ng=de({},Rg);Ng[Bt]=de(de(de(de({},{"fa-duotone":"duotone"}),Rg[Bt]),qh.kit),qh["kit-duotone"]);const _1=oa(Ng),lu=de({},Jw);lu[Bt]=de(de(de(de({},{duotone:"fad"}),lu[Bt]),$h.kit),$h["kit-duotone"]);const Yh=oa(lu),cu=de({},ru);cu[Bt]=de(de({},cu[Bt]),i1.kit);const of=oa(cu),uu=de({},o1);uu[Bt]=de(de({},uu[Bt]),t1.kit);oa(uu);const v1=Ww,Fg="fa-layers-text",x1=Xw,y1=de({},Yw);oa(y1);const S1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gl=qw,b1=[...e1,...d1],Os=Hi.FontAwesomeConfig||{};function M1(t){var e=dt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function E1(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}dt&&typeof dt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=E1(M1(n));r!=null&&(Os[i]=r)});const Og={styleDefault:"solid",familyDefault:Bt,cssPrefix:Dg,replacementClass:Ig,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Os.familyPrefix&&(Os.cssPrefix=Os.familyPrefix);const os=de(de({},Og),Os);os.autoReplaceSvg||(os.observeMutations=!1);const De={};Object.keys(Og).forEach(t=>{Object.defineProperty(De,t,{enumerable:!0,set:function(e){os[t]=e,Bs.forEach(n=>n(De))},get:function(){return os[t]}})});Object.defineProperty(De,"familyPrefix",{enumerable:!0,set:function(t){os.cssPrefix=t,Bs.forEach(e=>e(De))},get:function(){return os.cssPrefix}});Hi.FontAwesomeConfig=De;const Bs=[];function T1(t){return Bs.push(t),()=>{Bs.splice(Bs.indexOf(t),1)}}const Ai=au,On={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function A1(t){if(!t||!_i)return;const e=dt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=dt.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const s=n[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return dt.head.insertBefore(e,i),t}const w1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qs(){let t=12,e="";for(;t-- >0;)e+=w1[Math.random()*62|0];return e}function hs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function lf(t){return t.classList?hs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Bg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R1(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Bg(t[n]),'" '),"").trim()}function zo(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function cf(t){return t.size!==On.size||t.x!==On.x||t.y!==On.y||t.rotate!==On.rotate||t.flipX||t.flipY}function C1(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function P1(t){let{transform:e,width:n=au,height:i=au,startCentered:r=!1}=t,s="";return r&&wg?s+="translate(".concat(e.x/Ai-n/2,"em, ").concat(e.y/Ai-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/Ai,"em), calc(-50% + ").concat(e.y/Ai,"em)) "):s+="translate(".concat(e.x/Ai,"em, ").concat(e.y/Ai,"em) "),s+="scale(".concat(e.size/Ai*(e.flipX?-1:1),", ").concat(e.size/Ai*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var L1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function zg(){const t=Dg,e=Ig,n=De.cssPrefix,i=De.replacementClass;let r=L1;if(n!==t||i!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(i))}return r}let Kh=!1;function Wl(){De.autoAddCss&&!Kh&&(A1(zg()),Kh=!0)}var D1={mixout(){return{dom:{css:zg,insertCss:Wl}}},hooks(){return{beforeDOMElementCreation(){Wl()},beforeI2svg(){Wl()}}}};const pi=Hi||{};pi[hi]||(pi[hi]={});pi[hi].styles||(pi[hi].styles={});pi[hi].hooks||(pi[hi].hooks={});pi[hi].shims||(pi[hi].shims=[]);var Bn=pi[hi];const kg=[],Hg=function(){dt.removeEventListener("DOMContentLoaded",Hg),mo=1,kg.map(t=>t())};let mo=!1;_i&&(mo=(dt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(dt.readyState),mo||dt.addEventListener("DOMContentLoaded",Hg));function I1(t){_i&&(mo?setTimeout(t,0):kg.push(t))}function la(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?Bg(t):"<".concat(e," ").concat(R1(n),">").concat(i.map(la).join(""),"</").concat(e,">")}function Zh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xl=function(e,n,i,r){var s=Object.keys(e),a=s.length,o=n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function U1(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function fu(t){const e=U1(t);return e.length===1?e[0].toString(16):null}function N1(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Jh(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function du(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=Jh(e);typeof Bn.hooks.addPack=="function"&&!i?Bn.hooks.addPack(t,Jh(e)):Bn.styles[t]=de(de({},Bn.styles[t]||{}),r),t==="fas"&&du("fa",e)}const{styles:ea,shims:F1}=Bn,Vg=Object.keys(of),O1=Vg.reduce((t,e)=>(t[e]=Object.keys(of[e]),t),{});let uf=null,Gg={},Wg={},Xg={},qg={},$g={};function B1(t){return~b1.indexOf(t)}function z1(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!B1(r)?r:null}const jg=()=>{const t=i=>Xl(ea,(r,s,a)=>(r[a]=Xl(s,i,{}),r),{});Gg=t((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=s}),i)),Wg=t((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=s}),i)),$g=t((i,r,s)=>{const a=r[2];return i[s]=s,a.forEach(o=>{i[o]=s}),i});const e="far"in ea||De.autoFetchSvg,n=Xl(F1,(i,r)=>{const s=r[0];let a=r[1];const o=r[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:o}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:o}),i},{names:{},unicodes:{}});Xg=n.names,qg=n.unicodes,uf=ko(De.styleDefault,{family:De.familyDefault})};T1(t=>{uf=ko(t.styleDefault,{family:De.familyDefault})});jg();function ff(t,e){return(Gg[t]||{})[e]}function k1(t,e){return(Wg[t]||{})[e]}function dr(t,e){return($g[t]||{})[e]}function Yg(t){return Xg[t]||{prefix:null,iconName:null}}function H1(t){const e=qg[t],n=ff("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Vi(){return uf}const Kg=()=>({prefix:null,iconName:null,rest:[]});function V1(t){let e=Bt;const n=Vg.reduce((i,r)=>(i[r]="".concat(De.cssPrefix,"-").concat(r),i),{});return Pg.forEach(i=>{(t.includes(n[i])||t.some(r=>O1[i].includes(r)))&&(e=i)}),e}function ko(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Bt}=e,i=_1[n][t];if(n===Bo&&!t)return"fad";const r=Yh[n][t]||Yh[n][i],s=t in Bn.styles?t:null;return r||s||null}function G1(t){let e=[],n=null;return t.forEach(i=>{const r=z1(De.cssPrefix,i);r?n=r:i&&e.push(i)}),{iconName:n,rest:e}}function Qh(t){return t.sort().filter((e,n,i)=>i.indexOf(e)===n)}function Ho(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let i=null;const r=su.concat(s1),s=Qh(t.filter(f=>r.includes(f))),a=Qh(t.filter(f=>!su.includes(f))),o=s.filter(f=>(i=f,!Cg.includes(f))),[l=null]=o,c=V1(s),u=de(de({},G1(a)),{},{prefix:ko(l,{family:c})});return de(de(de({},u),$1({values:t,family:c,styles:ea,config:De,canonical:u,givenPrefix:i})),W1(n,i,u))}function W1(t,e,n){let{prefix:i,iconName:r}=n;if(t||!i||!r)return{prefix:i,iconName:r};const s=e==="fa"?Yg(r):{},a=dr(i,r);return r=s.iconName||a||r,i=s.prefix||i,i==="far"&&!ea.far&&ea.fas&&!De.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}const X1=Pg.filter(t=>t!==Bt||t!==Bo),q1=Object.keys(ru).filter(t=>t!==Bt).map(t=>Object.keys(ru[t])).flat();function $1(t){const{values:e,family:n,canonical:i,givenPrefix:r="",styles:s={},config:a={}}=t,o=n===Bo,l=e.includes("fa-duotone")||e.includes("fad"),c=a.familyDefault==="duotone",u=i.prefix==="fad"||i.prefix==="fa-duotone";if(!o&&(l||c||u)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&X1.includes(n)&&(Object.keys(s).find(d=>q1.includes(d))||a.autoFetchSvg)){const d=Zw.get(n).defaultShortPrefixId;i.prefix=d,i.iconName=dr(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||r==="fa")&&(i.prefix=Vi()||"fas"),i}class j1{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=de(de({},this.definitions[s]||{}),r[s]),du(s,r[s]);const a=of[Bt][s];a&&du(a,r[s]),jg()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:s,iconName:a,icon:o}=i[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][a]=o}),e}}let ep=[],qr={};const Qr={},Y1=Object.keys(Qr);function K1(t,e){let{mixoutsTo:n}=e;return ep=t,qr={},Object.keys(Qr).forEach(i=>{Y1.indexOf(i)===-1&&delete Qr[i]}),ep.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(a=>{n[s]||(n[s]={}),n[s][a]=r[s][a]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(a=>{qr[a]||(qr[a]=[]),qr[a].push(s[a])})}i.provides&&i.provides(Qr)}),n}function hu(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(qr[t]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function Sr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(qr[t]||[]).forEach(s=>{s.apply(null,n)})}function Gi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Qr[t]?Qr[t].apply(null,e):void 0}function pu(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Vi();if(e)return e=dr(n,e)||e,Zh(Zg.definitions,n,e)||Zh(Bn.styles,n,e)}const Zg=new j1,Z1=()=>{De.autoReplaceSvg=!1,De.observeMutations=!1,Sr("noAuto")},J1={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _i?(Sr("beforeI2svg",t),Gi("pseudoElements2svg",t),Gi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;De.autoReplaceSvg===!1&&(De.autoReplaceSvg=!0),De.observeMutations=!0,I1(()=>{eR({autoReplaceSvgRoot:e}),Sr("watch",t)})}},Q1={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ko(t[0]);return{prefix:n,iconName:dr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(De.cssPrefix,"-"))>-1||t.match(v1))){const e=Ho(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Vi(),iconName:dr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Vi();return{prefix:e,iconName:dr(e,t)||t}}}},rn={noAuto:Z1,config:De,dom:J1,parse:Q1,library:Zg,findIconDefinition:pu,toHtml:la},eR=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=dt}=t;(Object.keys(Bn.styles).length>0||De.autoFetchSvg)&&_i&&De.autoReplaceSvg&&rn.dom.i2svg({node:e})};function Vo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>la(n))}}),Object.defineProperty(t,"node",{get:function(){if(!_i)return;const n=dt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function tR(t){let{children:e,main:n,mask:i,attributes:r,styles:s,transform:a}=t;if(cf(a)&&n.found&&!i.found){const{width:o,height:l}=n,c={x:o/l/2,y:.5};r.style=zo(de(de({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function nR(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:s}=t;const a=s===!0?"".concat(e,"-").concat(De.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:de(de({},r),{},{id:a}),children:i}]}]}function df(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:s,symbol:a,title:o,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:d,height:h}=n.found?n:e,g=n1.includes(i),_=[De.replacementClass,r?"".concat(De.cssPrefix,"-").concat(r):""].filter(w=>u.classes.indexOf(w)===-1).filter(w=>w!==""||!!w).concat(u.classes).join(" ");let m={children:[],attributes:de(de({},u.attributes),{},{"data-prefix":i,"data-icon":r,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(h)})};const p=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/h*16*.0625,"em")}:{};f&&(m.attributes[yr]=""),o&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Qs())},children:[o]}),delete m.attributes.title);const S=de(de({},m),{},{prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:a,styles:de(de({},p),u.styles)}),{children:E,attributes:x}=n.found&&e.found?Gi("generateAbstractMask",S)||{children:[],attributes:{}}:Gi("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=E,S.attributes=x,a?nR(S):tR(S)}function tp(t){const{content:e,width:n,height:i,transform:r,title:s,extra:a,watchable:o=!1}=t,l=de(de(de({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});o&&(l[yr]="");const c=de({},a.styles);cf(r)&&(c.transform=P1({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const u=zo(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function iR(t){const{content:e,title:n,extra:i}=t,r=de(de(de({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=zo(i.styles);s.length>0&&(r.style=s);const a=[];return a.push({tag:"span",attributes:r,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:ql}=Bn;function mu(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(De.cssPrefix,"-").concat(Gl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(De.cssPrefix,"-").concat(Gl.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(De.cssPrefix,"-").concat(Gl.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const rR={found:!1,width:512,height:512};function sR(t,e){!Ug&&!De.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function gu(t,e){let n=e;return e==="fa"&&De.styleDefault!==null&&(e=Vi()),new Promise((i,r)=>{if(n==="fa"){const s=Yg(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ql[e]&&ql[e][t]){const s=ql[e][t];return i(mu(s))}sR(t,e),i(de(de({},rR),{},{icon:De.showMissingIcons&&t?Gi("missingIconAbstract")||{}:{}}))})}const np=()=>{},_u=De.measurePerformance&&ka&&ka.mark&&ka.measure?ka:{mark:np,measure:np},As='FA "6.7.2"',aR=t=>(_u.mark("".concat(As," ").concat(t," begins")),()=>Jg(t)),Jg=t=>{_u.mark("".concat(As," ").concat(t," ends")),_u.measure("".concat(As," ").concat(t),"".concat(As," ").concat(t," begins"),"".concat(As," ").concat(t," ends"))};var hf={begin:aR,end:Jg};const Za=()=>{};function ip(t){return typeof(t.getAttribute?t.getAttribute(yr):null)=="string"}function oR(t){const e=t.getAttribute?t.getAttribute(sf):null,n=t.getAttribute?t.getAttribute(af):null;return e&&n}function lR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(De.replacementClass)}function cR(){return De.autoReplaceSvg===!0?Ja.replace:Ja[De.autoReplaceSvg]||Ja.replace}function uR(t){return dt.createElementNS("http://www.w3.org/2000/svg",t)}function fR(t){return dt.createElement(t)}function Qg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?uR:fR}=e;if(typeof t=="string")return dt.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){i.appendChild(Qg(s,{ceFn:n}))}),i}function dR(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ja={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Qg(n),e)}),e.getAttribute(yr)===null&&De.keepOriginalSource){let n=dt.createComment(dR(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~lf(e).indexOf(De.replacementClass))return Ja.replace(t);const i=new RegExp("".concat(De.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((a,o)=>(o===De.replacementClass||o.match(i)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>la(s)).join(`
`);e.setAttribute(yr,""),e.innerHTML=r}};function rp(t){t()}function e_(t,e){const n=typeof e=="function"?e:Za;if(t.length===0)n();else{let i=rp;De.mutateApproach===m1&&(i=Hi.requestAnimationFrame||rp),i(()=>{const r=cR(),s=hf.begin("mutate");t.map(r),s(),n()})}}let pf=!1;function t_(){pf=!0}function vu(){pf=!1}let go=null;function sp(t){if(!Xh||!De.observeMutations)return;const{treeCallback:e=Za,nodeCallback:n=Za,pseudoElementsCallback:i=Za,observeMutationsRoot:r=dt}=t;go=new Xh(s=>{if(pf)return;const a=Vi();hs(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!ip(o.addedNodes[0])&&(De.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&De.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&ip(o.target)&&~S1.indexOf(o.attributeName))if(o.attributeName==="class"&&oR(o.target)){const{prefix:l,iconName:c}=Ho(lf(o.target));o.target.setAttribute(sf,l||a),c&&o.target.setAttribute(af,c)}else lR(o.target)&&n(o.target)})}),_i&&go.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function hR(){go&&go.disconnect()}function pR(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),n}function mR(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=Ho(lf(t));return r.prefix||(r.prefix=Vi()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=k1(r.prefix,t.innerText)||ff(r.prefix,fu(t.innerText))),!r.iconName&&De.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function gR(t){const e=hs(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return De.autoA11y&&(n?e["aria-labelledby"]="".concat(De.replacementClass,"-title-").concat(i||Qs()):(e["aria-hidden"]="true",e.focusable="false")),e}function _R(){return{iconName:null,title:null,titleId:null,prefix:null,transform:On,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ap(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=mR(t),s=gR(t),a=hu("parseNodeAttributes",{},t);let o=e.styleParser?pR(t):[];return de({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:On,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},a)}const{styles:vR}=Bn;function n_(t){const e=De.autoReplaceSvg==="nest"?ap(t,{styleParser:!1}):ap(t);return~e.extra.classes.indexOf(Fg)?Gi("generateLayersText",t,e):Gi("generateSvgReplacementMutation",t,e)}function xR(){return[...Qw,...su]}function op(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_i)return Promise.resolve();const n=dt.documentElement.classList,i=u=>n.add("".concat(jh,"-").concat(u)),r=u=>n.remove("".concat(jh,"-").concat(u)),s=De.autoFetchSvg?xR():Cg.concat(Object.keys(vR));s.includes("fa")||s.push("fa");const a=[".".concat(Fg,":not([").concat(yr,"])")].concat(s.map(u=>".".concat(u,":not([").concat(yr,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=hs(t.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();const l=hf.begin("onTree"),c=o.reduce((u,f)=>{try{const d=n_(f);d&&u.push(d)}catch(d){Ug||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(d=>{e_(d,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),f(d)})})}function yR(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;n_(t).then(n=>{n&&e_([n],e)})}function SR(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:pu(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:pu(r||{})),t(i,de(de({},n),{},{mask:r}))}}const bR=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=On,symbol:i=!1,mask:r=null,maskId:s=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:h}=t;return Vo(de({type:"icon"},t),()=>(Sr("beforeDOMElementCreation",{iconDefinition:t,params:e}),De.autoA11y&&(a?c["aria-labelledby"]="".concat(De.replacementClass,"-title-").concat(o||Qs()):(c["aria-hidden"]="true",c.focusable="false")),df({icons:{main:mu(h),mask:r?mu(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:de(de({},On),n),symbol:i,title:a,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var MR={mixout(){return{icon:SR(bR)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=op,t.nodeCallback=yR,t}}},provides(t){t.i2svg=function(e){const{node:n=dt,callback:i=()=>{}}=e;return op(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:s,prefix:a,transform:o,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((d,h)=>{Promise.all([gu(i,a),c.iconName?gu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[_,m]=g;d([e,df({icons:{main:_,mask:m},prefix:a,iconName:i,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:f,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:s,styles:a}=e;const o=zo(a);o.length>0&&(i.style=o);let l;return cf(s)&&(l=Gi("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},ER={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Vo({type:"layer"},()=>{Sr("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(De.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},TR={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return Vo({type:"counter",content:t},()=>(Sr("beforeDOMElementCreation",{content:t,params:e}),iR({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(De.cssPrefix,"-layers-counter"),...i]}})))}}}},AR={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=On,title:i=null,classes:r=[],attributes:s={},styles:a={}}=e;return Vo({type:"text",content:t},()=>(Sr("beforeDOMElementCreation",{content:t,params:e}),tp({content:t,transform:de(de({},On),n),title:i,extra:{attributes:s,styles:a,classes:["".concat(De.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:s}=n;let a=null,o=null;if(wg){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return De.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,tp({content:e.innerHTML,width:a,height:o,transform:r,title:i,extra:s,watchable:!0})])}}};const wR=new RegExp('"',"ug"),lp=[1105920,1112319],cp=de(de(de(de({},{FontAwesome:{normal:"fas",400:"fas"}}),Kw),h1),a1),xu=Object.keys(cp).reduce((t,e)=>(t[e.toLowerCase()]=cp[e],t),{}),RR=Object.keys(xu).reduce((t,e)=>{const n=xu[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function CR(t){const e=t.replace(wR,""),n=N1(e,0),i=n>=lp[0]&&n<=lp[1],r=e.length===2?e[0]===e[1]:!1;return{value:fu(r?e[0]:e),isSecondary:i||r}}function PR(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(xu[n]||{})[r]||RR[n]}function up(t,e){const n="".concat(p1).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const a=hs(t.children).filter(d=>d.getAttribute(ou)===e)[0],o=Hi.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(x1),u=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(a&&!c)return t.removeChild(a),i();if(c&&f!=="none"&&f!==""){const d=o.getPropertyValue("content");let h=PR(l,u);const{value:g,isSecondary:_}=CR(d),m=c[0].startsWith("FontAwesome");let p=ff(h,g),S=p;if(m){const E=H1(g);E.iconName&&E.prefix&&(p=E.iconName,h=E.prefix)}if(p&&!_&&(!a||a.getAttribute(sf)!==h||a.getAttribute(af)!==S)){t.setAttribute(n,S),a&&t.removeChild(a);const E=_R(),{extra:x}=E;x.attributes[ou]=e,gu(p,h).then(w=>{const L=df(de(de({},E),{},{icons:{main:w,mask:Kg()},prefix:h,iconName:S,extra:x,watchable:!0})),P=dt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=L.map(U=>la(U)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function LR(t){return Promise.all([up(t,"::before"),up(t,"::after")])}function DR(t){return t.parentNode!==document.head&&!~g1.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ou)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fp(t){if(_i)return new Promise((e,n)=>{const i=hs(t.querySelectorAll("*")).filter(DR).map(LR),r=hf.begin("searchPseudoElements");t_(),Promise.all(i).then(()=>{r(),vu(),e()}).catch(()=>{r(),vu(),n()})})}var IR={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fp,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=dt}=e;De.searchPseudoElements&&fp(n)}}};let dp=!1;var UR={mixout(){return{dom:{unwatch(){t_(),dp=!0}}}},hooks(){return{bootstrap(){sp(hu("mutationObserverCallbacks",{}))},noAuto(){hR()},watch(t){const{observeMutationsRoot:e}=t;dp?vu():sp(hu("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const hp=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let a=r.slice(1).join("-");if(s&&a==="h")return n.flipX=!0,n;if(s&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(s){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},e)};var NR={mixout(){return{parse:{transform:t=>hp(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=hp(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:s}=e;const a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},d={outer:a,inner:u,path:f};return{tag:"g",attributes:de({},d.outer),children:[{tag:"g",attributes:de({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:de(de({},n.icon.attributes),d.path)}]}]}}}};const $l={x:0,y:0,width:"100%",height:"100%"};function pp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function FR(t){return t.tag==="g"?t.children:[t]}var OR={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?Ho(n.split(" ").map(r=>r.trim())):Kg();return i.prefix||(i.prefix=Vi()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:s,maskId:a,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:f}=s,d=C1({transform:o,containerWidth:u,iconWidth:l}),h={tag:"rect",attributes:de(de({},$l),{},{fill:"white"})},g=c.children?{children:c.children.map(pp)}:{},_={tag:"g",attributes:de({},d.inner),children:[pp(de({tag:c.tag,attributes:de(de({},c.attributes),d.path)},g))]},m={tag:"g",attributes:de({},d.outer),children:[_]},p="mask-".concat(a||Qs()),S="clip-".concat(a||Qs()),E={tag:"mask",attributes:de(de({},$l),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,m]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:FR(f)},E]};return n.push(x,{tag:"rect",attributes:de({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(p,")")},$l)}),{children:n,attributes:i}}}},BR={provides(t){let e=!1;Hi.matchMedia&&(e=Hi.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:de(de({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=de(de({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:de(de({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||a.children.push({tag:"animate",attributes:de(de({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:de(de({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:de(de({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:de(de({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:de(de({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:de(de({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},zR={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},kR=[D1,MR,ER,TR,AR,IR,UR,NR,OR,BR,zR];K1(kR,{mixoutsTo:rn});rn.noAuto;rn.config;const HR=rn.library;rn.dom;const yu=rn.parse;rn.findIconDefinition;rn.toHtml;const VR=rn.icon;rn.layer;rn.text;rn.counter;function mp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ai(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mp(Object(n),!0).forEach(function(i){$t(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function GR(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function WR(t){var e=GR(t,"string");return typeof e=="symbol"?e:e+""}function _o(t){"@babel/helpers - typeof";return _o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_o(t)}function $t(t,e,n){return e=WR(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function XR(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function qR(t,e){if(t==null)return{};var n=XR(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var $R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i_={exports:{}};(function(t){(function(e){var n=function(p,S,E){if(!c(S)||f(S)||d(S)||h(S)||l(S))return S;var x,w=0,L=0;if(u(S))for(x=[],L=S.length;w<L;w++)x.push(n(p,S[w],E));else{x={};for(var P in S)Object.prototype.hasOwnProperty.call(S,P)&&(x[p(P,E)]=n(p,S[P],E))}return x},i=function(p,S){S=S||{};var E=S.separator||"_",x=S.split||/(?=[A-Z])/;return p.split(x).join(E)},r=function(p){return g(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(S,E){return E?E.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},s=function(p){var S=r(p);return S.substr(0,1).toUpperCase()+S.substr(1)},a=function(p,S){return i(p,S).toLowerCase()},o=Object.prototype.toString,l=function(p){return typeof p=="function"},c=function(p){return p===Object(p)},u=function(p){return o.call(p)=="[object Array]"},f=function(p){return o.call(p)=="[object Date]"},d=function(p){return o.call(p)=="[object RegExp]"},h=function(p){return o.call(p)=="[object Boolean]"},g=function(p){return p=p-0,p===p},_=function(p,S){var E=S&&"process"in S?S.process:S;return typeof E!="function"?p:function(x,w){return E(x,p,w)}},m={camelize:r,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(p,S){return n(_(r,S),p)},decamelizeKeys:function(p,S){return n(_(a,S),p,S)},pascalizeKeys:function(p,S){return n(_(s,S),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})($R)})(i_);var jR=i_.exports,YR=["class","style"];function KR(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=jR.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function ZR(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function r_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return r_(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=ZR(u);break;case"style":l.style=KR(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=qR(n,YR);return Ge(t.tag,ai(ai(ai({},e),{},{class:r.class,style:ai(ai({},r.style),a)},r.attrs),o),i)}var s_=!1;try{s_=!0}catch{}function JR(){if(!s_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function jl(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$t({},t,e):{}}function QR(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},$t($t($t($t($t($t($t($t($t($t(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),$t($t(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function gp(t){if(t&&_o(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(yu.icon)return yu.icon(t);if(t===null)return null;if(_o(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var eC=Eo({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Se(function(){return gp(e.icon)}),s=Se(function(){return jl("classes",QR(e))}),a=Se(function(){return jl("transform",typeof e.transform=="string"?yu.transform(e.transform):e.transform)}),o=Se(function(){return jl("mask",gp(e.mask))}),l=Se(function(){return VR(r.value,ai(ai(ai(ai({},s.value),a.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});bt(l,function(u){if(!u)return JR("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var c=Se(function(){return l.value?r_(l.value.abstract[0],{},i):null});return function(){return c.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const tC={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Go=k0(kw);Go.use(Ow);HR.add(tC);Go.use(_x,{plugins:{}});Go.mount("#app");Go.component("font-awesome-icon",eC);
