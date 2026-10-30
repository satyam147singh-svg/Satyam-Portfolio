(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var ix={exports:{}},Vu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vM=Symbol.for("react.transitional.element"),xM=Symbol.for("react.fragment");function ax(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:vM,type:t,key:i,ref:e!==void 0?e:null,props:n}}Vu.Fragment=xM;Vu.jsx=ax;Vu.jsxs=ax;ix.exports=Vu;var g=ix.exports,rx={exports:{}},Ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=Symbol.for("react.transitional.element"),_M=Symbol.for("react.portal"),yM=Symbol.for("react.fragment"),SM=Symbol.for("react.strict_mode"),MM=Symbol.for("react.profiler"),bM=Symbol.for("react.consumer"),EM=Symbol.for("react.context"),TM=Symbol.for("react.forward_ref"),AM=Symbol.for("react.suspense"),RM=Symbol.for("react.memo"),sx=Symbol.for("react.lazy"),CM=Symbol.for("react.activity"),wM=Symbol.for("react.view_transition"),d0=Symbol.iterator;function DM(t){return t===null||typeof t!="object"?null:(t=d0&&t[d0]||t["@@iterator"],typeof t=="function"?t:null)}var ox={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lx=Object.assign,cx={};function ro(t,e,n){this.props=t,this.context=e,this.refs=cx,this.updater=n||ox}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ux(){}ux.prototype=ro.prototype;function Up(t,e,n){this.props=t,this.context=e,this.refs=cx,this.updater=n||ox}var Lp=Up.prototype=new ux;Lp.constructor=Up;lx(Lp,ro.prototype);Lp.isPureReactComponent=!0;var h0=Array.isArray;function Rd(){}var Dt={H:null,A:null,T:null,S:null},fx=Object.prototype.hasOwnProperty;function Op(t,e,n){var i=n.ref;return{$$typeof:Np,type:t,key:e,ref:i!==void 0?i:null,props:n}}function NM(t,e){return Op(t.type,e,t.props)}function Pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Np}function UM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var p0=/\/+/g;function gf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UM(""+t.key):e.toString(36)}function LM(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Rd,Rd):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ds(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Np:case _M:s=!0;break;case sx:return s=t._init,ds(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+gf(t,0):i,h0(a)?(n="",s!=null&&(n=s.replace(p0,"$&/")+"/"),ds(a,e,n,"",function(c){return c})):a!=null&&(Pp(a)&&(a=NM(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(p0,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(h0(t))for(var l=0;l<t.length;l++)i=t[l],r=o+gf(i,l),s+=ds(i,e,n,r,a);else if(l=DM(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+gf(i,l++),s+=ds(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return ds(LM(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function kl(t,e,n){if(t==null)return t;var i=[],a=0;return ds(t,i,"","",function(r){return e.call(n,r,a++)}),i}function OM(t){if(t._status===-1){var e=t._result,n=e();n.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var m0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function dx(t){var e=Dt.T,n={};n.types=e!==null?e.types:null,Dt.T=n;try{var i=t(),a=Dt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Rd,m0)}catch(r){m0(r)}finally{e!==null&&n.types!==null&&(e.types=n.types),Dt.T=e}}function hx(t){var e=Dt.T;if(e!==null){var n=e.types;n===null?e.types=[t]:n.indexOf(t)===-1&&n.push(t)}else dx(hx.bind(null,t))}var PM={map:kl,forEach:function(t,e,n){kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return kl(t,function(){e++}),e},toArray:function(t){return kl(t,function(e){return e})||[]},only:function(t){if(!Pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Activity=CM;Ve.Children=PM;Ve.Component=ro;Ve.Fragment=yM;Ve.Profiler=MM;Ve.PureComponent=Up;Ve.StrictMode=SM;Ve.Suspense=AM;Ve.ViewTransition=wM;Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Dt;Ve.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Dt.H.useMemoCache(t)}};Ve.addTransitionType=hx;Ve.cache=function(t){return function(){return t.apply(null,arguments)}};Ve.cacheSignal=function(){return null};Ve.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=lx({},t.props),a=t.key;if(e!=null)for(r in e.key!==void 0&&(a=""+e.key),e)!fx.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return Op(t.type,a,i)};Ve.createContext=function(t){return t={$$typeof:EM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:bM,_context:t},t};Ve.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)fx.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Op(t,r,a)};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:TM,render:t}};Ve.isValidElement=Pp;Ve.lazy=function(t){return{$$typeof:sx,_payload:{_status:-1,_result:t},_init:OM}};Ve.memo=function(t,e){return{$$typeof:RM,type:t,compare:e===void 0?null:e}};Ve.startTransition=dx;Ve.unstable_useCacheRefresh=function(){return Dt.H.useCacheRefresh()};Ve.use=function(t){return Dt.H.use(t)};Ve.useActionState=function(t,e,n){return Dt.H.useActionState(t,e,n)};Ve.useCallback=function(t,e){return Dt.H.useCallback(t,e)};Ve.useContext=function(t){return Dt.H.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t,e){return Dt.H.useDeferredValue(t,e)};Ve.useEffect=function(t,e){return Dt.H.useEffect(t,e)};Ve.useEffectEvent=function(t){return Dt.H.useEffectEvent(t)};Ve.useId=function(){return Dt.H.useId()};Ve.useImperativeHandle=function(t,e,n){return Dt.H.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Dt.H.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Dt.H.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Dt.H.useMemo(t,e)};Ve.useOptimistic=function(t,e){return Dt.H.useOptimistic(t,e)};Ve.useReducer=function(t,e,n){return Dt.H.useReducer(t,e,n)};Ve.useRef=function(t){return Dt.H.useRef(t)};Ve.useState=function(t){return Dt.H.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Dt.H.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Dt.H.useTransition()};Ve.version="19.3.1";rx.exports=Ve;var Ue=rx.exports,px={exports:{}},ku={},mx={exports:{}},gx={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,z){var Q=B.length;B.push(z);e:for(;0<Q;){var W=Q-1>>>1,D=B[W];if(0<a(D,z))B[W]=z,B[Q]=D,Q=W;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var z=B[0],Q=B.pop();if(Q!==z){B[0]=Q;e:for(var W=0,D=B.length,C=D>>>1;W<C;){var te=2*(W+1)-1,ce=B[te],G=te+1,ne=B[G];if(0>a(ce,Q))G<D&&0>a(ne,ce)?(B[W]=ne,B[G]=Q,W=G):(B[W]=ce,B[te]=Q,W=te);else if(G<D&&0>a(ne,Q))B[W]=ne,B[G]=Q,W=G;else break e}}return z}function a(B,z){var Q=B.sortIndex-z.sortIndex;return Q!==0?Q:B.id-z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,p=null,u=3,h=!1,_=!1,M=!1,v=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function S(B){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=B)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function R(B){if(M=!1,S(B),!_)if(n(l)!==null)_=!0,A||(A=!0,H());else{var z=n(c);z!==null&&V(R,z.startTime-B)}}var A=!1,x=-1,b=5,U=-1;function N(){return v?!0:!(t.unstable_now()-U<b)}function P(){if(v=!1,A){var B=t.unstable_now();U=B;var z=!0;try{e:{_=!1,M&&(M=!1,m(x),x=-1),h=!0;var Q=u;try{t:{for(S(B),p=n(l);p!==null&&!(p.expirationTime>B&&N());){var W=p.callback;if(typeof W=="function"){p.callback=null,u=p.priorityLevel;var D=W(p.expirationTime<=B);if(B=t.unstable_now(),typeof D=="function"){p.callback=D,S(B),z=!0;break t}p===n(l)&&i(l),S(B)}else i(l);p=n(l)}if(p!==null)z=!0;else{var C=n(c);C!==null&&V(R,C.startTime-B),z=!1}}break e}finally{p=null,u=Q,h=!1}z=void 0}}finally{z?H():A=!1}}}var H;if(typeof y=="function")H=function(){y(P)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,O=k.port2;k.port1.onmessage=P,H=function(){O.postMessage(null)}}else H=function(){f(P,0)};function V(B,z){x=f(function(){B(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(B){switch(u){case 1:case 2:case 3:var z=3;break;default:z=u}var Q=u;u=z;try{return B()}finally{u=Q}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(B,z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=u;u=B;try{return z()}finally{u=Q}},t.unstable_scheduleCallback=function(B,z,Q){var W=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?W+Q:W):Q=W,B){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Q+D,B={id:d++,callback:z,priorityLevel:B,startTime:Q,expirationTime:D,sortIndex:-1},Q>W?(B.sortIndex=Q,e(c,B),n(l)===null&&B===n(c)&&(M?(m(x),x=-1):M=!0,V(R,Q-W))):(B.sortIndex=D,e(l,B),_||h||(_=!0,A||(A=!0,H()))),B},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(B){var z=u;return function(){var Q=u;u=z;try{return B.apply(this,arguments)}finally{u=Q}}}})(gx);mx.exports=gx;var IM=mx.exports,vx={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zM=Ue;function xx(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Aa(){}var Ln={d:{f:Aa,r:function(){throw Error(xx(522))},D:Aa,C:Aa,L:Aa,m:Aa,X:Aa,S:Aa,M:Aa},p:0,findDOMNode:null},FM=Symbol.for("react.portal"),BM=Symbol.for("react.recoverable"),g0=Symbol.for("react.optimistic_key");function HM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:FM,key:i==null?null:i===g0?g0:""+i,children:t,containerInfo:e,implementation:n}}var Fo=zM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ju(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ln;Rn.browser=function(t){return{$$typeof:BM,_reason:t}};Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(xx(299));return HM(t,e,null,n)};Rn.flushSync=function(t){var e=Fo.T,n=Ln.p;try{if(Fo.T=null,Ln.p=2,t)return t()}finally{Fo.T=e,Ln.p=n,Ln.d.f()}};Rn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ln.d.C(t,e))};Rn.prefetchDNS=function(t){typeof t=="string"&&Ln.d.D(t)};Rn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=ju(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Ln.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&Ln.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Rn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=ju(e.as,e.crossOrigin);Ln.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&Ln.d.M(t)};Rn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=ju(n,e.crossOrigin);Ln.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Rn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=ju(e.as,e.crossOrigin);Ln.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else Ln.d.m(t)};Rn.requestFormReset=function(t){Ln.d.r(t)};Rn.unstable_batchedUpdates=function(t,e){return t(e)};Rn.useFormState=function(t,e,n){return Fo.H.useFormState(t,e,n)};Rn.useFormStatus=function(){return Fo.H.useHostTransitionStatus()};Rn.version="19.3.1";function _x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_x)}catch(t){console.error(t)}}_x(),vx.exports=Rn;var GM=vx.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qt=IM,yx=Ue,VM=GM;function ae(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Sx(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Al(t){for(var e=t,n=e;n&&!n.alternate;)e=n,e.flags&4098&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function Mx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bx(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v0(t){if(Al(t)!==t)throw Error(ae(188))}function kM(t){var e=t.alternate;if(!e){if(e=Al(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return v0(a),t;if(r===i)return v0(a),e;r=r.sibling}throw Error(ae(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Ex(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Ex(t),e!==null)return e;t=t.sibling}return null}function kn(t,e,n,i,a,r){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,i,a,r)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&kn(t.child,e,n,i,a,r))return!0;t=t.sibling}return!1}function Xr(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function x0(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function Tx(t){var e=[null,null],n=Xr(t);return n===null||Ax(e,t,n.child,{foundSelf:!1}),e}function Ax(t,e,n,i){for(;n!==null;){if(n===e)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Ax(t,e,n.child,i))return!0;n=n.sibling}return!1}function Kt(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(ae(559))}}var vs=null,Cd=null;function jM(t,e,n){return t===n?!0:t===e?(vs=t,!0):!1}function WM(t,e,n){return t===n?(Cd=t,!1):t===e?(Cd!==null&&(vs=t),!0):!1}function _0(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function wd(t,e,n){for(var i=0,a=t;a;a=n(a))i++;a=0;for(var r=e;r;r=n(r))a++;for(;0<i-a;)t=n(t),i--;for(;0<a-i;)e=n(e),a--;for(;i--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var At=Object.assign,XM=Symbol.for("react.element"),jl=Symbol.for("react.transitional.element"),No=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Rx=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Cx=Symbol.for("react.consumer"),Fi=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Ud=Symbol.for("react.suspense_list"),zp=Symbol.for("react.memo"),Pa=Symbol.for("react.lazy"),Ld=Symbol.for("react.activity"),qM=Symbol.for("react.legacy_hidden"),YM=Symbol.for("react.memo_cache_sentinel"),Od=Symbol.for("react.view_transition"),ZM=Symbol.for("react.recoverable"),y0=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=y0&&t[y0]||t["@@iterator"],typeof t=="function"?t:null)}var KM=Symbol.for("react.client.reference");function Pd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===KM?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case Dd:return"Profiler";case Rx:return"StrictMode";case Nd:return"Suspense";case Ud:return"SuspenseList";case Ld:return"Activity";case Od:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case No:return"Portal";case Fi:return t.displayName||"Context";case Cx:return(t._context.displayName||"Context")+".Consumer";case Ip:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zp:return e=t.displayName||null,e!==null?e:Pd(t.type)||"Memo";case Pa:e=t._payload,t=t._init;try{return Pd(t(e))}catch{}}return null}var Uo=Array.isArray,He=yx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=VM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wr={pending:!1,data:null,method:null,action:null},Id=[],_s=-1;function Ki(t){return{current:t}}function mn(t){0>_s||(t.current=Id[_s],Id[_s]=null,_s--)}function Nt(t,e){_s++,Id[_s]=t.current,t.current=e}var ji=Ki(null),al=Ki(null),Ya=Ki(null),au=Ki(null);function ru(t,e){switch(Nt(Ya,e),Nt(al,t),Nt(ji,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Lg(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Lg(e),t=Ky(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}mn(ji),Nt(ji,t)}function Vs(){mn(ji),mn(al),mn(Ya)}function zd(t){var e=t.memoizedState;e!==null&&(Js._currentValue=e.memoizedState,Nt(au,t)),e=ji.current;var n=Ky(e,t.type);e!==n&&(Nt(al,t),Nt(ji,n))}function su(t){al.current===t&&(mn(ji),mn(al)),au.current===t&&(mn(au),Js._currentValue=wr)}var vf,S0;function La(t){if(vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vf=e&&e[1]||"",S0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vf+t+S0}var xf=!1;function _f(t,e){if(!t||xf)return"";xf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(_){var u=_}Reflect.construct(t,[],p)}else{try{p.call()}catch(_){u=_}p=!1;try{var h=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new t}finally{p&&(h!==void 0?Object.defineProperty(t.prototype,"props",h):delete t.prototype.props)}}}else{try{throw Error()}catch(_){u=_}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(_){if(_&&u&&typeof _.stack=="string")return[_.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{xf=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?La(n):""}function QM(t,e){switch(t.tag){case 26:case 27:case 5:return La(t.type);case 16:return La("Lazy");case 13:return t.child!==e&&e!==null?La("Suspense Fallback"):La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return _f(t.type,!1);case 11:return _f(t.type.render,!1);case 1:return _f(t.type,!0);case 31:return La("Activity");case 30:return La("ViewTransition");default:return""}}function M0(t){try{var e="",n=null;do e+=QM(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Fd=Object.prototype.hasOwnProperty,Fp=Qt.unstable_scheduleCallback,yf=Qt.unstable_cancelCallback,JM=Qt.unstable_shouldYield,$M=Qt.unstable_requestPaint,$n=Qt.unstable_now,eb=Qt.unstable_getCurrentPriorityLevel,wx=Qt.unstable_ImmediatePriority,Dx=Qt.unstable_UserBlockingPriority,ou=Qt.unstable_NormalPriority,tb=Qt.unstable_LowPriority,Nx=Qt.unstable_IdlePriority,nb=Qt.log,ib=Qt.unstable_setDisableYieldValue,Rl=null,ei=null;function Ha(t){if(typeof nb=="function"&&ib(t),ei&&typeof ei.setStrictMode=="function")try{ei.setStrictMode(Rl,t)}catch{}}var ti=Math.clz32?Math.clz32:sb,ab=Math.log,rb=Math.LN2;function sb(t){return t>>>=0,t===0?32:31-(ab(t)/rb|0)|0}var Wl=256,Xl=262144,ql=4194304;function Er(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Wu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Er(i):(s&=o,s!==0?a=Er(s):n||(n=o&~t,n!==0&&(a=Er(n))))):(o=i&~r,o!==0?a=Er(o):s!==0?a=Er(s):n||(n=i&~t,n!==0&&(a=Er(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function Cl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ux(t,e){e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-ti(n),a=1<<i;e|=t[i],n&=~a}return e}function ob(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lx(){var t=ql;return ql<<=1,!(ql&62914560)&&(ql=4194304),t}function Sf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function lb(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var d=31-ti(n),p=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var h=u[d];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&Ox(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function Ox(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ti(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Px(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Ix(t,e){var n=e&-e;return n=n&42?1:Bp(n),n&(t.suspendedLanes|e)?0:n}function Bp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Hp(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function zx(){var t=ht.p;return t!==0?t:(t=window.event,t===void 0?32:vS(t.type))}function b0(t,e){var n=ht.p;try{return ht.p=t,e()}finally{ht.p=n}}var Sa=Math.random().toString(36).slice(2),dn="__reactFiber$"+Sa,jn="__reactProps$"+Sa,so="__reactContainer$"+Sa,E0="__reactEvents$"+Sa,cb="__reactListeners$"+Sa,ub="__reactHandles$"+Sa,T0="__reactResources$"+Sa,Dl="__reactMarker$"+Sa,lu="__reactLoad$"+Sa;function Xu(t){delete t[dn],delete t[jn],delete t[cb],delete t[ub]}function Rr(t){var e;if(e=t[dn])return e;for(var n=t.parentNode;n;){if(e=n[so]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gg(t);t!==null;){if(n=t[dn])return n;t=Gg(t)}return e}t=n,n=t.parentNode}return null}function oo(t){if(t=t[dn]||t[so]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Lo(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ae(33))}function Ds(t){var e=t[T0];return e||(e=t[T0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function sn(t){t[Dl]=!0}function Fx(t){t[lu]=void 0}var Bx=new Set,Hx={};function qr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Hx[t]=e,t=0;t<e.length;t++)Bx.add(e[t])}var fb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),A0={},R0={};function db(t){return Fd.call(R0,t)?!0:Fd.call(A0,t)?!1:fb.test(t)?R0[t]=!0:(A0[t]=!0,!1)}var ct=!1;function C0(){var t=ct;return ct=!1,t}function Uc(t,e,n){if(db(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Yl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function $i(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,i)}}function Yn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hb(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bd(t){if(!t._valueTracker){var e=Gx(t)?"checked":"value";t._valueTracker=hb(t,e,""+t[e])}}function Vx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Gx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}var pb=/[\n"\\]/g;function fi(t){return t.replace(pb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Hd(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Yn(e)):t.value!==""+Yn(e)&&(t.value=""+Yn(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?Mf(t,Yn(t.value)):Mf(t,Yn(e)):n!=null?Mf(t,Yn(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Yn(o):t.removeAttribute("name")}function kx(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){Bd(t);return}n=n!=null?""+Yn(n):"",e=e!=null?""+Yn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),Bd(t)}function Mf(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Ns(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function jx(t,e,n){if(e!=null&&(e=""+Yn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Yn(n):""}function Wx(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(ae(92));if(Uo(i)){if(1<i.length)throw Error(ae(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Yn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Bd(t)}function js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function w0(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||mb.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Xx(t,e,n){if(e!=null&&typeof e!="object")throw Error(ae(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="",ct=!0);for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&(w0(t,a,i),ct=!0)}else for(var r in e)e.hasOwnProperty(r)&&w0(t,r,e[r])}function Gp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lc(t){return vb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var Gd=null;function Vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ys=null,Us=null;function D0(t){var e=oo(t);if(e&&(t=e.stateNode)){var n=t[jn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Hd(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+fi(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[jn]||null;if(!a)throw Error(ae(90));Hd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Vx(i)}break e;case"textarea":jx(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}}}var bf=!1;function qx(t,e,n){if(bf)return t(e,n);bf=!0;try{var i=t(e);return i}finally{if(bf=!1,(ys!==null||Us!==null)&&(of(),ys&&(e=ys,t=Us,Us=ys=null,D0(e),t)))for(e=0;e<t.length;e++)D0(t[e])}}function rl(t,e){var n=t.stateNode;if(n===null)return null;var i=n[jn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vd=!1;if(ma)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Vd=!1}var Ga=null,kp=null,Oc=null;function Yx(){if(Oc)return Oc;var t,e=kp,n=e.length,i,a="value"in Ga?Ga.value:Ga.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return Oc=a.slice(t,1<i?1-i:void 0)}function Pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function N0(){return!1}function Pn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Zl:N0,this.isPropagationStopped=N0,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),e}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=Pn(fr),Nl=At({},fr,{view:0,detail:0}),xb=Pn(Nl),Ef,Tf,So,Yu=At({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Ef=t.screenX-So.screenX,Tf=t.screenY-So.screenY):Tf=Ef=0,So=t),Ef)},movementY:function(t){return"movementY"in t?t.movementY:Tf}}),U0=Pn(Yu),_b=At({},Yu,{dataTransfer:0}),yb=Pn(_b),Sb=At({},Nl,{relatedTarget:0}),Af=Pn(Sb),Mb=At({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),bb=Pn(Mb),Eb=At({},fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tb=Pn(Eb),Ab=At({},fr,{data:0}),L0=Pn(Ab),Rb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Db(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wb[t])?!!e[t]:!1}function jp(){return Db}var Nb=At({},Nl,{key:function(t){if(t.key){var e=Rb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jp,charCode:function(t){return t.type==="keypress"?Pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ub=Pn(Nb),Lb=At({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O0=Pn(Lb),Ob=At({},fr,{submitter:0}),Pb=Pn(Ob),Ib=At({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jp}),zb=Pn(Ib),Fb=At({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bb=Pn(Fb),Hb=At({},Yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gb=Pn(Hb),Vb=At({},fr,{newState:0,oldState:0,source:0}),kb=Pn(Vb),jb=[9,13,27,32],Wp=ma&&"CompositionEvent"in window,Bo=null;ma&&"documentMode"in document&&(Bo=document.documentMode);var Wb=ma&&"TextEvent"in window&&!Bo,Zx=ma&&(!Wp||Bo&&8<Bo&&11>=Bo),P0=" ",I0=!1;function Kx(t,e){switch(t){case"keyup":return jb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function Xb(t,e){switch(t){case"compositionend":return Qx(e);case"keypress":return e.which!==32?null:(I0=!0,P0);case"textInput":return t=e.data,t===P0&&I0?null:t;default:return null}}function qb(t,e){if(Ss)return t==="compositionend"||!Wp&&Kx(t,e)?(t=Yx(),Oc=kp=Ga=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zx&&e.locale!=="ko"?null:e.data;default:return null}}var Yb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yb[t.type]:e==="textarea"}function Jx(t,e,n,i){ys?Us?Us.push(i):Us=[i]:ys=i,e=Du(e,"onChange"),0<e.length&&(n=new qu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ho=null,sl=null;function Zb(t){qy(t,0)}function Zu(t){var e=Lo(t);if(Vx(e))return t}function F0(t,e){if(t==="change")return e}var $x=!1;if(ma){var Rf;if(ma){var Cf="oninput"in document;if(!Cf){var B0=document.createElement("div");B0.setAttribute("oninput","return;"),Cf=typeof B0.oninput=="function"}Rf=Cf}else Rf=!1;$x=Rf&&(!document.documentMode||9<document.documentMode)}function H0(){Ho&&(Ho.detachEvent("onpropertychange",e_),sl=Ho=null)}function e_(t){if(t.propertyName==="value"&&Zu(sl)){var e=[];Jx(e,sl,t,Vp(t)),qx(Zb,e)}}function Kb(t,e,n){t==="focusin"?(H0(),Ho=e,sl=n,Ho.attachEvent("onpropertychange",e_)):t==="focusout"&&H0()}function Qb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zu(sl)}function Jb(t,e){if(t==="click")return Zu(e)}function $b(t,e){if(t==="input"||t==="change")return Zu(e)}function eE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:eE;function ol(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Fd.call(e,a)||!ii(t[a],e[a]))return!1}return!0}function kd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function G0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function V0(t,e){var n=G0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=G0(n)}}function t_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?t_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function n_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=kd(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kd(t.document)}return e}function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var tE=ma&&"documentMode"in document&&11>=document.documentMode,Ms=null,jd=null,Go=null,Wd=!1;function k0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wd||Ms==null||Ms!==kd(i)||(i=Ms,"selectionStart"in i&&Xp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Go&&ol(Go,i)||(Go=i,i=Du(jd,"onSelect"),0<i.length&&(e=new qu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function vr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionrun:vr("Transition","TransitionRun"),transitionstart:vr("Transition","TransitionStart"),transitioncancel:vr("Transition","TransitionCancel"),transitionend:vr("Transition","TransitionEnd")},wf={},i_={};ma&&(i_=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Yr(t){if(wf[t])return wf[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i_)return wf[t]=e[n];return t}var a_=Yr("animationend"),r_=Yr("animationiteration"),s_=Yr("animationstart"),nE=Yr("transitionrun"),iE=Yr("transitionstart"),aE=Yr("transitioncancel"),o_=Yr("transitionend"),l_=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xd.push("scrollEnd");function Ci(t,e){l_.set(t,e),qr(e,[t])}var rE=0;function ga(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ri.identifierPrefix;var n=rE++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function j0(t){if(t==null||typeof t=="string")return t;var e=null,n=Bs;if(n!==null)for(var i=0;i<n.length;i++){var a=t[n[i]];if(a!=null){if(a==="none")return"none";e=e==null?a:e+(" "+a)}}return e??t.default}function Ma(t,e){return t=j0(t),e=j0(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var cu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Es=0,qp=0;function Ku(){for(var t=Es,e=qp=Es=0;e<t;){var n=oi[e];oi[e++]=null;var i=oi[e];oi[e++]=null;var a=oi[e];oi[e++]=null;var r=oi[e];if(oi[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&c_(n,a,r)}}function Qu(t,e,n,i){oi[Es++]=t,oi[Es++]=e,oi[Es++]=n,oi[Es++]=i,qp|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Yp(t,e,n,i){return Qu(t,e,n,i),uu(t)}function Zr(t,e){return Qu(t,null,null,e),uu(t)}function c_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-ti(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function uu(t){if(50<Qo)throw Qo=0,Wc=null,Error(ae(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ts={};function sE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new sE(t,e,n,i)}function Zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function u_(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ic(t,e,n,i,a,r){var s=0;if(i=t,typeof i=="function")Zp(i)&&(s=1);else if(typeof i=="string")s=OT(t,n,ji.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(i){case Ld:return t=Bn(31,n,e,a),t.elementType=Ld,t.lanes=r,t;case xs:return Dr(n.children,a,r,e);case Rx:s=8,a|=24;break;case Dd:return t=Bn(12,n,e,a|2),t.elementType=Dd,t.lanes=r,t;case Nd:return t=Bn(13,n,e,a),t.elementType=Nd,t.lanes=r,t;case Ud:return t=Bn(19,n,e,a),t.elementType=Ud,t.lanes=r,t;case qM:case Od:return t=a|32,t=Bn(30,n,e,t),t.elementType=Od,t.lanes=r,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Fi:s=10;break e;case Cx:s=9;break e;case Ip:s=11;break e;case zp:s=14;break e;case Pa:s=16,i=null;break e}s=29,n=Error(ae(130,t===null?"null":typeof t,"")),i=null}return e=Bn(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function Dr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Df(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function f_(t){var e=Bn(18,null,null,0);return e.stateNode=t,e}function Nf(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var W0=new WeakMap;function di(t,e){if(typeof t=="object"&&t!==null){var n=W0.get(t);return n!==void 0?n:(e={value:t,source:e,stack:M0(e)},W0.set(t,e),e)}return{value:t,source:e,stack:M0(e)}}var As=[],Rs=0,fu=null,ll=0,ci=[],ui=0,ar=null,Hi=1,Gi="";function sa(t,e){As[Rs++]=ll,As[Rs++]=fu,fu=t,ll=e}function d_(t,e,n){ci[ui++]=Hi,ci[ui++]=Gi,ci[ui++]=ar,ar=t;var i=Hi;t=Gi;var a=32-ti(i)-1;i&=~(1<<a),n+=1;var r=32-ti(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Hi=1<<32-ti(e)+a|n<<a|i,Gi=r+t}else Hi=1<<r|n<<a|i,Gi=t}function Ju(t){t.return!==null&&(sa(t,1),d_(t,1,0))}function Kp(t){for(;t===fu;)fu=As[--Rs],As[Rs]=null,ll=As[--Rs],As[Rs]=null;for(;t===ar;)ar=ci[--ui],ci[ui]=null,Gi=ci[--ui],ci[ui]=null,Hi=ci[--ui],ci[ui]=null}function h_(t,e){ci[ui++]=Hi,ci[ui++]=Gi,ci[ui++]=ar,Hi=e.id,Gi=e.overflow,ar=t}var on=null,wt=null,Ze=!1,Za=null,hi=!1,qd=Error(ae(519));function rr(t){var e=Error(ae(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cl(di(e,t)),qd}function X0(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[dn]=t,e[jn]=i,n){case"dialog":Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":case"embed":Qe("load",e);break;case"video":case"audio":for(n=0;n<hl.length;n++)Qe(hl[n],e);break;case"source":Qe("error",e);break;case"img":case"image":case"link":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"input":Qe("invalid",e),kx(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Qe("invalid",e);break;case"textarea":Qe("invalid",e),Wx(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Zy(e.textContent,n)?(i.popover!=null&&(Qe("beforetoggle",e),Qe("toggle",e)),i.onScroll!=null&&Qe("scroll",e),i.onScrollEnd!=null&&Qe("scrollend",e),i.onClick!=null&&(e.onclick=Bi),e=!0):e=!1,e||rr(t,!0)}function du(t){for(on=t.return;on;)switch(on.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:on=on.return}}function Jr(t){if(t!==on)return!1;if(!Ze)return du(t),Ze=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Nh(t.type,t.memoizedProps)),n=!n),n&&wt&&rr(t),du(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));wt=Hg(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));wt=Hg(t)}else e===27?(e=wt,dr(t.type)?(t=Ph,Ph=null,wt=t):wt=e):wt=on?pi(t.stateNode.nextSibling):null;return!0}function Pr(){wt=on=null,Ze=!1}function Uf(){var t=Za;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),Za=null),t}function cl(t){Za===null?Za=[t]:Za.push(t)}var Yd=Ki(null),Kr=null,ca=null;function Va(t,e,n){Nt(Yd,e._currentValue),e._currentValue=n}function da(t){t._currentValue=Yd.current,mn(Yd)}function zc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zd(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),zc(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(ae(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),zc(s,n,t),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),zc(a.return,n,t),s=a.child,s=s!==null?s.sibling:null):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ir(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(ae(387));if(s=s.memoizedProps,s!==null){var o=a.type;ii(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===au.current){if(s=a.alternate,s===null)throw Error(ae(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Js):t=[Js])}a=a.return}return t!==null&&Zd(e,t,n,i),e.flags|=262144,t!==null}function hu(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Kr=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function hn(t){return p_(Kr,t)}function Kl(t,e){return Kr===null&&zr(t),p_(t,e)}function p_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},ca===null){if(t===null)throw Error(ae(308));ca=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ca=ca.next=e;return n}var oE=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},lE=Qt.unstable_scheduleCallback,cE=Qt.unstable_NormalPriority,qt={$$typeof:Fi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qp(){return{controller:new oE,data:new Map,refCount:0}}function Ul(t){t.refCount--,t.refCount===0&&lE(cE,function(){t.controller.abort()})}function q0(t,e){if(t.pendingLanes&4194048){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var i=e[t];n.indexOf(i)===-1&&n.push(i)}}}var Oo=null;function uE(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Vo=null,Kd=0,Fr=0,Ls=null;function fE(t,e){if(Vo===null){var n=Vo=[];Kd=0,Fr=Tm(),Ls={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Kd++,e.then(Y0,Y0),e}function Y0(){if(--Kd===0&&(Oo=null,Vo!==null)){Ls!==null&&(Ls.status="fulfilled");var t=Vo;Vo=null,Fr=0,Ls=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function dE(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Z0=He.S;He.S=function(t,e){if(Uy=$n(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&fE(t,e),Oo!==null)for(var n=Zs;n!==null;)q0(n,Oo),n=n.next;if(n=t.types,n!==null){for(var i=Zs;i!==null;)q0(i,n),i=i.next;if(Fr!==0){i=Oo,i===null&&(i=Oo=[]);for(var a=0;a<n.length;a++){var r=n[a];i.indexOf(r)===-1&&i.push(r)}}}Z0!==null&&Z0(t,e)};var Nr=Ki(null);function Jp(){var t=Nr.current;return t!==null?t:Tt.pooledCache}function Fc(t,e){e===null?Nt(Nr,Nr.current):Nt(Nr,e.pool)}function m_(){var t=Jp();return t===null?null:{parent:qt._currentValue,pool:t}}var lo=Error(ae(460)),$p=Error(ae(474)),$u=Error(ae(542)),pu={then:function(){}};function K0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function g_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Bi,Bi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,J0(t),t===void 0&&!("reason"in e)?Error(ae(600)):t;default:if(typeof e.status=="string")e.then(Bi,Bi);else{if(t=Tt,t!==null&&100<t.shellSuspendCounter)throw Error(ae(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,J0(t),t}throw Ur=e,lo}}function Tr(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ur=n,lo):n}}var Ur=null;function Q0(){if(Ur===null)throw Error(ae(459));var t=Ur;return Ur=null,t}function J0(t){if(t===lo||t===$u)throw Error(ae(483))}var Os=null,ul=0;function Ql(t){var e=ul;return ul+=1,Os===null&&(Os=[]),g_(Os,t,e)}function Ra(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Jl(t,e){throw e.$$typeof===XM?Error(ae(525)):(t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function v_(t){function e(f,m){if(t){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key===null?m.set(f.index,f):m.set(f.key,f),f=f.sibling;return m}function a(f,m){return f=fa(f,m),f.index=0,f.sibling=null,f}function r(f,m,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=134217730,m)):(f.flags|=1048576,m)}function s(f){return t&&f.alternate===null&&(f.flags|=134217730),f}function o(f,m,y,S){return m===null||m.tag!==6?(m=Df(y,f.mode,S),m.return=f,m):(m=a(m,y),m.return=f,m)}function l(f,m,y,S){var R=y.type;return R===xs?(f=d(f,m,y.props.children,S,y.key),Ra(f,y),f):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pa&&Tr(R)===m.type)?(m=a(m,y.props),Ra(m,y),m.return=f,m):(m=Ic(y.type,y.key,y.props,null,f.mode,S),Ra(m,y),m.return=f,m)}function c(f,m,y,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Nf(y,f.mode,S),m.return=f,m):(m=a(m,y.children||[]),m.return=f,m)}function d(f,m,y,S,R){return m===null||m.tag!==7?(m=Dr(y,f.mode,S,R),m.return=f,m):(m=a(m,y),m.return=f,m)}function p(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Df(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case jl:return y=Ic(m.type,m.key,m.props,null,f.mode,y),Ra(y,m),y.return=f,y;case No:return m=Nf(m,f.mode,y),m.return=f,m;case Pa:return m=Tr(m),p(f,m,y)}if(Uo(m)||_o(m))return m=Dr(m,f.mode,y,null),m.return=f,m;if(typeof m.then=="function")return p(f,Ql(m),y);if(m.$$typeof===Fi)return p(f,Kl(f,m),y);Jl(f,m)}return null}function u(f,m,y,S){var R=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return R!==null?null:o(f,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case jl:return y.key===R?l(f,m,y,S):null;case No:return y.key===R?c(f,m,y,S):null;case Pa:return y=Tr(y),u(f,m,y,S)}if(Uo(y)||_o(y))return R!==null?null:d(f,m,y,S,null);if(typeof y.then=="function")return u(f,m,Ql(y),S);if(y.$$typeof===Fi)return u(f,m,Kl(f,y),S);Jl(f,y)}return null}function h(f,m,y,S,R){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(y)||null,o(m,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case jl:return f=f.get(S.key===null?y:S.key)||null,l(m,f,S,R);case No:return f=f.get(S.key===null?y:S.key)||null,c(m,f,S,R);case Pa:return S=Tr(S),h(f,m,y,S,R)}if(Uo(S)||_o(S))return f=f.get(y)||null,d(m,f,S,R,null);if(typeof S.then=="function")return h(f,m,y,Ql(S),R);if(S.$$typeof===Fi)return h(f,m,y,Kl(m,S),R);Jl(m,S)}return null}function _(f,m,y,S){for(var R=null,A=null,x=m,b=m=0,U=null;x!==null&&b<y.length;b++){x.index>b?(U=x,x=null):U=x.sibling;var N=u(f,x,y[b],S);if(N===null){x===null&&(x=U);break}t&&x&&N.alternate===null&&e(f,x),m=r(N,m,b),A===null?R=N:A.sibling=N,A=N,x=U}if(b===y.length)return n(f,x),Ze&&sa(f,b),R;if(x===null){for(;b<y.length;b++)x=p(f,y[b],S),x!==null&&(m=r(x,m,b),A===null?R=x:A.sibling=x,A=x);return Ze&&sa(f,b),R}for(x=i(x);b<y.length;b++)U=h(x,f,b,y[b],S),U!==null&&(t&&(N=U.alternate,N!==null&&x.delete(N.key===null?b:N.key)),m=r(U,m,b),A===null?R=U:A.sibling=U,A=U);return t&&x.forEach(function(P){return e(f,P)}),Ze&&sa(f,b),R}function M(f,m,y,S){if(y==null)throw Error(ae(151));for(var R=null,A=null,x=m,b=m=0,U=null,N=y.next();x!==null&&!N.done;b++,N=y.next()){x.index>b?(U=x,x=null):U=x.sibling;var P=u(f,x,N.value,S);if(P===null){x===null&&(x=U);break}t&&x&&P.alternate===null&&e(f,x),m=r(P,m,b),A===null?R=P:A.sibling=P,A=P,x=U}if(N.done)return n(f,x),Ze&&sa(f,b),R;if(x===null){for(;!N.done;b++,N=y.next())N=p(f,N.value,S),N!==null&&(m=r(N,m,b),A===null?R=N:A.sibling=N,A=N);return Ze&&sa(f,b),R}for(x=i(x);!N.done;b++,N=y.next())N=h(x,f,b,N.value,S),N!==null&&(t&&(U=N.alternate,U!==null&&x.delete(U.key===null?b:U.key)),m=r(N,m,b),A===null?R=N:A.sibling=N,A=N);return t&&x.forEach(function(H){return e(f,H)}),Ze&&sa(f,b),R}function v(f,m,y,S){if(typeof y=="object"&&y!==null&&y.type===xs&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case jl:e:{for(var R=y.key;m!==null;){if(m.key===R){if(R=y.type,R===xs){if(m.tag===7){n(f,m.sibling),S=a(m,y.props.children),Ra(S,y),S.return=f,f=S;break e}}else if(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pa&&Tr(R)===m.type){n(f,m.sibling),S=a(m,y.props),Ra(S,y),S.return=f,f=S;break e}n(f,m);break}else e(f,m);m=m.sibling}y.type===xs?(S=Dr(y.props.children,f.mode,S,y.key),Ra(S,y),S.return=f,f=S):(S=Ic(y.type,y.key,y.props,null,f.mode,S),Ra(S,y),S.return=f,f=S)}return s(f);case No:e:{for(R=y.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),S=a(m,y.children||[]),S.return=f,f=S;break e}else{n(f,m);break}else e(f,m);m=m.sibling}S=Nf(y,f.mode,S),S.return=f,f=S}return s(f);case Pa:return y=Tr(y),v(f,m,y,S)}if(Uo(y))return _(f,m,y,S);if(_o(y)){if(R=_o(y),typeof R!="function")throw Error(ae(150));return y=R.call(y),M(f,m,y,S)}if(typeof y.then=="function")return v(f,m,Ql(y),S);if(y.$$typeof===Fi)return v(f,m,Kl(f,y),S);Jl(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),S=a(m,y),S.return=f,f=S):(n(f,m),S=Df(y,f.mode,S),S.return=f,f=S),s(f)):n(f,m)}return function(f,m,y,S){try{ul=0;var R=v(f,m,y,S);return Os=null,R}catch(x){if(x===lo||x===$u)throw x;var A=Bn(29,x,null,f.mode);return A.lanes=S,A.return=f,A}finally{}}}var Br=v_(!0),x_=v_(!1),Ia=!1;function em(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,dt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=uu(t),c_(t,null,n),e}return Qu(t,i,e,n),uu(t)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Px(t,n)}}function Lf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Jd=!1;function jo(){if(Jd){var t=Ls;if(t!==null)throw t}}function Wo(t,e,n,i){Jd=!1;var a=t.updateQueue;Ia=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;s=0,d=c=l=null,o=r;do{var u=o.lane&-536870913,h=u!==o.lane;if(h?(it&u)===u:(i&u)===u){u!==0&&u===Fr&&(Jd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var _=t,M=o;u=e;var v=n;switch(M.tag){case 1:if(_=M.payload,typeof _=="function"){p=_.call(v,p,u);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,u=typeof _=="function"?_.call(v,p,u):_,u==null)break e;p=At({},p,u);break e;case 2:Ia=!0}}u=o.callback,u!==null&&(t.flags|=64,h&&(t.flags|=8192),h=a.callbacks,h===null?a.callbacks=[u]:h.push(u))}else h={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=h,l=p):d=d.next=h,s|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);d===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,r===null&&(a.shared.lanes=0),lr|=s,t.lanes=s,t.memoizedState=p}}function __(t,e){if(typeof t!="function")throw Error(ae(191,t));t.call(e)}function y_(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)__(n[t],e)}var sr=Ki(null),mu=Ki(0);function $0(t,e){t=ya,Nt(mu,t),Nt(sr,e),ya=t|e.baseLanes}function $d(){Nt(mu,ya),Nt(sr,sr.current)}function tm(){ya=mu.current,mn(sr),mn(mu)}var xn=Ki(null),Tn=null;function Ja(t){var e=t.alternate;Nt(gn,gn.current&1),Nt(xn,t),Tn===null&&(e===null||sr.current!==null||e.memoizedState!==null)&&(Tn=t)}function eh(t){Nt(gn,gn.current),Nt(xn,t),Tn===null&&(Tn=t)}function S_(t){t.tag===22?(Nt(gn,gn.current),Nt(xn,t),Tn===null&&(Tn=t)):$a()}function $a(){Nt(gn,gn.current),Nt(xn,xn.current)}function Zn(t){mn(xn),Tn===t&&(Tn=null),mn(gn)}var gn=Ki(0);function fl(t,e){Nt(xn,xn.current),Nt(gn,e)}function nm(t){mn(gn),mn(xn),Tn===t&&(Tn=null)}function gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Oh(n)||wm(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var va=0,We=null,bt=null,Xt=null,vu=!1,Ps=!1,Hr=!1,xu=0,dl=0,Is=null,hE=0;function Ht(){throw Error(ae(321))}function im(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function am(t,e,n,i,a,r){return va=r,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,He.H=t===null||t.memoizedState===null?J_:$_,Hr=!1,r=n(i,a),Hr=!1,Ps&&(r=b_(e,n,i,a)),M_(t),r}function M_(t){He.H=_u;var e=bt!==null&&bt.next!==null;if(va=0,Xt=bt=We=null,vu=!1,dl=0,Is=null,e)throw Error(ae(300));t===null||Yt||(t=t.dependencies,t!==null&&hu(t)&&(Yt=!0))}function b_(t,e,n,i){We=t;var a=0;do{if(Ps&&(Is=null),dl=0,Ps=!1,25<=a)throw Error(ae(301));if(a+=1,Xt=bt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}He.H=SE,r=e(n,i)}while(Ps);return r}function pE(){var t=He.H,e=t.useState()[0];return e=typeof e.then=="function"?Ll(e):e,t=t.useState()[0],(bt!==null?bt.memoizedState:null)!==t&&(We.flags|=1024),e}function rm(){var t=xu!==0;return xu=0,t}function sm(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function om(t){if(vu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}vu=!1}va=0,Xt=bt=We=null,Ps=!1,dl=xu=0,Is=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?We.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Vt(){if(bt===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Xt===null?We.memoizedState:Xt.next;if(e!==null)Xt=e,bt=t;else{if(t===null)throw We.alternate===null?Error(ae(467)):Error(ae(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Xt===null?We.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(t){var e=dl;return dl+=1,Is===null&&(Is=[]),t=g_(Is,t,e),e=We,(Xt===null?e.memoizedState:Xt.next)===null&&(e=e.alternate,He.H=e===null||e.memoizedState===null?J_:$_),t}function tf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ll(t);if(t.$$typeof===ZM)return;if(t.$$typeof===Fi)return hn(t)}throw Error(ae(438,String(t)))}function lm(t){var e=null,n=We.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=We.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ef(),We.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=YM;return e.index++,n}function xa(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=Vt();return cm(e,bt,t)}function cm(t,e,n){var i=t.queue;if(i===null)throw Error(ae(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(it&p)===p:(va&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Fr&&(d=!0);else if((va&u)===u){c=c.next,u===Fr&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,s=r):l=l.next=p,We.lanes|=u,lr|=u;p=c.action,Hr&&n(r,p),r=c.hasEagerState?c.eagerState:n(r,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,s=r):l=l.next=u,We.lanes|=p,lr|=p;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!ii(r,t.memoizedState)&&(Yt=!0,d&&(n=Ls,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Of(t){var e=Vt(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);ii(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function E_(t,e,n){var i=We,a=Vt(),r=Ze;if(r){if(n===void 0)throw Error(ae(407));n=n()}else n=e();var s=!ii((bt||a).memoizedState,n);if(s&&(a.memoizedState=n,Yt=!0),a=a.queue,um(R_.bind(null,i,a,t),[t]),t=a.getSnapshot!==e||s||Xt!==null&&(Xt.memoizedState.tag&1)!==0,Ws(t?9:8,{destroy:void 0},A_.bind(null,i,a,n,e),null),t){if(i.flags|=2048,Tt===null)throw Error(ae(349));r||va&127||T_(i,e,n)}return n}function T_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e=ef(),We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A_(t,e,n,i){e.value=n,e.getSnapshot=i,C_(e)&&w_(t)}function R_(t,e,n){return n(function(){C_(e)&&w_(t)})}function C_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function w_(t){var e=Zr(t,2);e!==null&&Gn(e,t,2)}function th(t){var e=Un();if(typeof t=="function"){var n=t;if(t=n(),Hr){Ha(!0);try{n()}finally{Ha(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e}function D_(t,e,n,i){return t.baseState=n,cm(t,bt,typeof i=="function"?i:xa)}function mE(t,e,n,i,a){if(af(t))throw Error(ae(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};He.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,N_(e,r)):(r.next=n.next,e.pending=n.next=r)}}function N_(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=He.T,s={};s.types=r!==null?r.types:null,He.T=s;try{var o=n(a,i),l=He.S;l!==null&&l(s,o),eg(t,e,o)}catch(c){nh(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),He.T=r}}else try{r=n(a,i),eg(t,e,r)}catch(c){nh(t,e,c)}}function eg(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){tg(t,e,i)},function(i){return nh(t,e,i)}):tg(t,e,n)}function tg(t,e,n){e.status="fulfilled",e.value=n,U_(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,N_(t,n)))}function nh(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,U_(e),e=e.next;while(e!==i)}t.action=null}function U_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function L_(t,e){return e}function ng(t,e){if(Ze){var n=Tt.formState;if(n!==null){e:{var i=We;if(Ze){if(wt){t:{for(var a=wt,r=hi;a.nodeType!==8;){if(!r){a=null;break t}if(a=pi(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){wt=pi(a.nextSibling),i=a.data==="F!";break e}}rr(i)}i=!1}i&&(e=n[0])}}return n=Un(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L_,lastRenderedState:e},n.queue=i,n=Z_.bind(null,We,i),i.dispatch=n,i=th(!1),r=pm.bind(null,We,!1,i.queue),i=Un(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=mE.bind(null,We,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function ig(t){var e=Vt();return O_(e,bt,t)}function O_(t,e,n){if(e=cm(t,e,L_)[0],t=Bc(xa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Ll(e)}catch(s){throw s===lo?$u:s}else i=e;e=Vt();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&(We.flags|=2048,Ws(9,{destroy:void 0},gE.bind(null,a,n),null)),[i,r,t]}function gE(t,e){t.action=e}function ag(t){var e=Vt(),n=bt;if(n!==null)return O_(e,n,t);Vt(),e=e.memoizedState,n=Vt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Ws(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=We.updateQueue,e===null&&(e=ef(),We.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function P_(){return Vt().memoizedState}function Hc(t,e,n,i){var a=Un();We.flags|=t,a.memoizedState=Ws(1|e,{destroy:void 0},n,i===void 0?null:i)}function nf(t,e,n,i){var a=Vt();i=i===void 0?null:i;var r=a.memoizedState.inst;bt!==null&&i!==null&&im(i,bt.memoizedState.deps)?a.memoizedState=Ws(e,r,n,i):(We.flags|=t,a.memoizedState=Ws(1|e,r,n,i))}function rg(t,e){Hc(8390656,8,t,e)}function um(t,e){nf(2048,8,t,e)}function vE(t){We.flags|=4;var e=We.updateQueue;if(e===null)e=ef(),We.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function I_(t){var e=Vt().memoizedState;return vE({ref:e,nextImpl:t}),function(){if(dt&2)throw Error(ae(440));return e.impl.apply(void 0,arguments)}}function z_(t,e){return nf(4,2,t,e)}function F_(t,e){return nf(4,4,t,e)}function B_(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function H_(t,e,n){n=n!=null?n.concat([t]):null,nf(4,4,B_.bind(null,e,t),n)}function fm(){}function G_(t,e){var n=Vt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&im(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function V_(t,e){var n=Vt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&im(e,i[1]))return i[0];if(i=t(),Hr){Ha(!0);try{t()}finally{Ha(!1)}}return n.memoizedState=[i,e],i}function dm(t,e,n){return n===void 0||va&1073741824&&!(it&261930)?t.memoizedState=e:(t.memoizedState=n,t=Oy(),We.lanes|=t,lr|=t,n)}function k_(t,e,n,i){return ii(n,e)?n:sr.current!==null?(t=dm(t,n,i),ii(t,e)||(Yt=!0),t):!(va&106)||va&1073741824&&!(it&261930)?(Yt=!0,t.memoizedState=n):(t=Oy(),We.lanes|=t,lr|=t,e)}function j_(t,e,n,i,a){var r=ht.p;ht.p=r!==0&&8>r?r:8;var s=He.T,o={};o.types=s!==null?s.types:null,He.T=o,pm(t,!1,e,n);try{var l=a(),c=He.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=dE(l,i);Xo(t,e,d,ni(t))}else Xo(t,e,i,ni(t))}catch(p){Xo(t,e,{then:function(){},status:"rejected",reason:p},ni())}finally{ht.p=r,s!==null&&o.types!==null&&(s.types=o.types),He.T=s}}function xE(){}function ih(t,e,n,i){if(t.tag!==5)throw Error(ae(476));var a=W_(t).queue;j_(t,a,e,wr,n===null?xE:function(){return X_(t),n(i)})}function W_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:wr,baseState:wr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:wr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function X_(t){var e=W_(t);e.next===null&&(e=t.alternate.memoizedState),Xo(t,e.next.queue,{},ni())}function hm(){return hn(Js)}function q_(){return Vt().memoizedState}function Y_(){return Vt().memoizedState}function _E(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ni();t=Ka(n);var i=Qa(e,t,n);i!==null&&(Gn(i,e,n),ko(i,e,n)),e={cache:Qp()},t.payload=e;return}e=e.return}}function yE(t,e,n){var i=ni();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},af(t)?K_(e,n):(n=Yp(t,e,n,i),n!==null&&(Gn(n,t,i),Q_(n,e,i)))}function Z_(t,e,n){var i=ni();Xo(t,e,n,i)}function Xo(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(af(t))K_(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,ii(o,s))return Qu(t,e,a,0),Tt===null&&Ku(),!1}catch{}finally{}if(n=Yp(t,e,a,i),n!==null)return Gn(n,t,i),Q_(n,e,i),!0}return!1}function pm(t,e,n,i){if(i={lane:2,revertLane:Tm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},af(t)){if(e)throw Error(ae(479))}else e=Yp(t,n,i,2),e!==null&&Gn(e,t,2)}function af(t){var e=t.alternate;return t===We||e!==null&&e===We}function K_(t,e){Ps=vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Q_(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Px(t,n)}}var _u={readContext:hn,use:tf,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useLayoutEffect:Ht,useInsertionEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useSyncExternalStore:Ht,useId:Ht,useHostTransitionStatus:Ht,useFormState:Ht,useActionState:Ht,useOptimistic:Ht,useMemoCache:Ht,useCacheRefresh:Ht,useEffectEvent:Ht},J_={readContext:hn,use:tf,useCallback:function(t,e){return Un().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:rg,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Hc(4194308,4,B_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hc(4194308,4,t,e)},useInsertionEffect:function(t,e){Hc(4,2,t,e)},useMemo:function(t,e){var n=Un();e=e===void 0?null:e;var i=t();if(Hr){Ha(!0);try{t()}finally{Ha(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Un();if(n!==void 0){var a=n(e);if(Hr){Ha(!0);try{n(e)}finally{Ha(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=yE.bind(null,We,t),[i.memoizedState,t]},useRef:function(t){var e=Un();return t={current:t},e.memoizedState=t},useState:function(t){t=th(t);var e=t.queue,n=Z_.bind(null,We,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:fm,useDeferredValue:function(t,e){var n=Un();return dm(n,t,e)},useTransition:function(){var t=th(!1);return t=j_.bind(null,We,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=We,a=Un();if(Ze){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Tt===null)throw Error(ae(349));it&127||T_(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,rg(R_.bind(null,i,r,t),[t]),i.flags|=2048,Ws(9,{destroy:void 0},A_.bind(null,i,r,n,e),null),n},useId:function(){var t=Un(),e=Tt.identifierPrefix;if(Ze){var n=Gi,i=Hi;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=xu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=hE++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:hm,useFormState:ng,useActionState:ng,useOptimistic:function(t){var e=Un();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=pm.bind(null,We,!0,n),n.dispatch=e,[t,e]},useMemoCache:lm,useCacheRefresh:function(){return Un().memoizedState=_E.bind(null,We)},useEffectEvent:function(t){var e=Un(),n={impl:t};return e.memoizedState=n,function(){if(dt&2)throw Error(ae(440));return n.impl.apply(void 0,arguments)}}},$_={readContext:hn,use:tf,useCallback:G_,useContext:hn,useEffect:um,useImperativeHandle:H_,useInsertionEffect:z_,useLayoutEffect:F_,useMemo:V_,useReducer:Bc,useRef:P_,useState:function(){return Bc(xa)},useDebugValue:fm,useDeferredValue:function(t,e){var n=Vt();return k_(n,bt.memoizedState,t,e)},useTransition:function(){var t=Bc(xa)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Ll(t),e]},useSyncExternalStore:E_,useId:q_,useHostTransitionStatus:hm,useFormState:ig,useActionState:ig,useOptimistic:function(t,e){var n=Vt();return D_(n,bt,t,e)},useMemoCache:lm,useCacheRefresh:Y_,useEffectEvent:I_},SE={readContext:hn,use:tf,useCallback:G_,useContext:hn,useEffect:um,useImperativeHandle:H_,useInsertionEffect:z_,useLayoutEffect:F_,useMemo:V_,useReducer:Of,useRef:P_,useState:function(){return Of(xa)},useDebugValue:fm,useDeferredValue:function(t,e){var n=Vt();return bt===null?dm(n,t,e):k_(n,bt.memoizedState,t,e)},useTransition:function(){var t=Of(xa)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Ll(t),e]},useSyncExternalStore:E_,useId:q_,useHostTransitionStatus:hm,useFormState:ag,useActionState:ag,useOptimistic:function(t,e){var n=Vt();return bt!==null?D_(n,bt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:lm,useCacheRefresh:Y_,useEffectEvent:I_};function Pf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ah={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ni(),a=Ka(i);a.payload=e,n!=null&&(a.callback=n),e=Qa(t,a,i),e!==null&&(Gn(e,t,i),ko(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ni(),a=Ka(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Qa(t,a,i),e!==null&&(Gn(e,t,i),ko(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ni(),i=Ka(n);i.tag=2,e!=null&&(i.callback=e),e=Qa(t,i,n),e!==null&&(Gn(e,t,n),ko(e,t,n))}};function sg(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!ol(n,i)||!ol(a,r):!0}function og(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ah.enqueueReplaceState(e,e.state,null)}function Gr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=At({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function ey(t){cu(t)}function ty(t){console.error(t)}function ny(t){cu(t)}function yu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function lg(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function rh(t,e,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){yu(t,e)},n}function iy(t){return t=Ka(t),t.tag=3,t}function ay(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){lg(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){lg(e,n,i),typeof a!="function"&&(er===null?er=new Set([this]):er.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function ME(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Ir(e,n,a,!0),n=xn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Tn===null?Cu():n.alternate===null&&Gt===0&&(Gt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===pu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Vf(t,i,a)),!1;case 22:return n.flags|=65536,i===pu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Vf(t,i,a)),!1}throw Error(ae(435,n.tag))}return Vf(t,i,a),Cu(),!1}if(Ze)return e=xn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==qd&&(t=Error(ae(422),{cause:i}),cl(di(t,n)))):(i!==qd&&(e=Error(ae(423),{cause:i}),cl(di(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=di(i,n),a=rh(t.stateNode,i,a),Lf(t,a),Gt!==4&&(Gt=2)),!1;var r=Error(ae(520),{cause:i});if(r=di(r,n),Ko===null?Ko=[r]:Ko.push(r),Gt!==4&&(Gt=2),e===null)return!0;i=di(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=rh(n.stateNode,i,t),Lf(n,t),!1;case 1:if(e=n.type,r=n.stateNode,!(n.flags&128)&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=iy(a),ay(a,t,n,i),Lf(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var mm=Error(ae(461)),Yt=!1;function Zt(t,e,n,i){e.child=t===null?x_(e,null,n,i):Br(e,t.child,n,i)}function cg(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return zr(e),i=am(t,e,n,s,r,a),o=rm(),t!==null&&!Yt?(sm(t,e,a),_a(t,e,a)):(Ze&&o&&Ju(e),e.flags|=1,Zt(t,e,i,a),e.child)}function ug(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!Zp(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,ry(t,e,r,i,a)):(t=Ic(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!vm(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:ol,n(s,i)&&t.ref===e.ref)return _a(t,e,a)}return e.flags|=1,t=fa(r,i),t.ref=e.ref,t.return=e,e.child=t}function ry(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(ol(r,i)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=i=r,vm(t,a))t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,_a(t,e,a)}return sh(t,e,n,i,a)}function sy(t,e,n,i){var a=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,e.child=null;return fg(t,e,r,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fc(e,r!==null?r.cachePool:null),r!==null?$0(e,r):$d(),S_(e);else return i=e.lanes=536870912,fg(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Fc(e,r.cachePool),$0(e,r),$a(),e.memoizedState=null):(t!==null&&Fc(e,null),$d(),$a());return Zt(t,e,a,n),e.child}function qo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function fg(t,e,n,i,a){var r=Jp();return r=r===null?null:{parent:qt._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Fc(e,null),$d(),S_(e),t!==null&&Ir(t,e,i,!0),e.childLanes=a,null}function Gc(t,e){return e=rf({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function dg(t,e,n){return Br(e,t.child,null,n),t=Gc(e,e.pendingProps),t.flags|=2,Zn(e),e.memoizedState=null,t}function bE(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Ze){if(i.mode==="hidden")return t=Gc(e,i),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},qo(null,t);if(eh(e),(t=wt)?(t=rS(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ar!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},n=f_(t),n.return=e,e.child=n,on=e,wt=null)):t=null,t===null)throw rr(e);return e.lanes=536870912,null}return Gc(e,i)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(eh(e),a)if(e.flags&256)e.flags&=-257,e=dg(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ae(558));else if(Yt||Ir(t,e,n,!1),a=(n&t.childLanes)!==0,Yt||a){if(sr.current===null){if(i=Tt,i!==null&&(s=Ix(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,Zr(t,s),Gn(i,t,s),mm;Cu()}e=dg(t,e,n)}else t=r.treeContext,wt=pi(s.nextSibling),on=e,Ze=!0,Za=null,hi=!1,t!==null&&h_(e,t),e=Gc(e,i),e.flags|=134221824;return e}return t=fa(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function hs(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(ae(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function sh(t,e,n,i,a){return zr(e),n=am(t,e,n,i,void 0,a),i=rm(),t!==null&&!Yt?(sm(t,e,a),_a(t,e,a)):(Ze&&i&&Ju(e),e.flags|=1,Zt(t,e,n,a),e.child)}function hg(t,e,n,i,a,r){return zr(e),e.updateQueue=null,n=b_(e,i,n,a),M_(t),i=rm(),t!==null&&!Yt?(sm(t,e,r),_a(t,e,r)):(Ze&&i&&Ju(e),e.flags|=1,Zt(t,e,n,r),e.child)}function pg(t,e,n,i,a){if(zr(e),e.stateNode===null){var r=Ts,s=n.contextType;typeof s=="object"&&s!==null&&(r=hn(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ah,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},em(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?hn(s):Ts,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Pf(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&ah.enqueueReplaceState(r,r.state,null),Wo(e,i,r,a),jo(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=Gr(n,o);r.props=l;var c=r.context,d=n.contextType;s=Ts,typeof d=="object"&&d!==null&&(s=hn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&og(e,r,i,s),Ia=!1;var u=e.memoizedState;r.state=u,Wo(e,i,r,a),jo(),c=e.memoizedState,o||u!==c||Ia?(typeof p=="function"&&(Pf(e,n,p,i),c=e.memoizedState),(l=Ia||sg(e,n,l,i,u,c,s))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,Qd(t,e),s=e.memoizedProps,d=Gr(n,s),r.props=d,p=e.pendingProps,u=r.context,c=n.contextType,l=Ts,typeof c=="object"&&c!==null&&(l=hn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==p||u!==l)&&og(e,r,i,l),Ia=!1,u=e.memoizedState,r.state=u,Wo(e,i,r,a),jo();var h=e.memoizedState;s!==p||u!==h||Ia||t!==null&&t.dependencies!==null&&hu(t.dependencies)?(typeof o=="function"&&(Pf(e,n,o,i),h=e.memoizedState),(d=Ia||sg(e,n,d,i,u,h,l)||t!==null&&t.dependencies!==null&&hu(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,h,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,h,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=h),r.props=i,r.state=h,r.context=l,i=d):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,hs(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=Br(e,t.child,null,a),e.child=Br(e,null,n,a)):Zt(t,e,n,a),e.memoizedState=r.state,t=e.child):t=_a(t,e,a),t}function mg(t,e,n,i){return Pr(),e.flags|=256,Zt(t,e,n,i),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lh(t){return{baseLanes:t,cachePool:m_()}}function ch(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Jn),t}function oy(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ze){if(a?Ja(e):$a(),(t=wt)?(t=rS(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ar!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},n=f_(t),n.return=e,e.child=n,on=e,wt=null)):t=null,t===null)throw rr(e);return wm(t)?e.lanes=32:e.lanes=536870912,null}return r=i.children,i=i.fallback,a?($a(),a=e.mode,r=rf({mode:"hidden",children:r},a),i=Dr(i,a,n,null),r.return=e,i.return=e,r.sibling=i,e.child=r,i=e.child,i.memoizedState=lh(n),i.childLanes=ch(t,s,n),e.memoizedState=oh,qo(null,i)):(Ja(e),gm(e,r))}var o=t.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return EE(t,e,r,s,i,l,o,n)}return a?($a(),a=i.fallback,r=e.mode,o=t.child,l=o.sibling,i=fa(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=fa(l,a):(a=Dr(a,r,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,qo(null,i),i=e.child,a=t.child.memoizedState,a===null?a=lh(n):(r=a.cachePool,r!==null?(o=qt._currentValue,r=r.parent!==o?{parent:o,pool:o}:r):r=m_(),a={baseLanes:a.baseLanes|n,cachePool:r}),i.memoizedState=a,i.childLanes=ch(t,s,n),e.memoizedState=oh,qo(t.child,i)):(Ja(e),n=t.child,t=n.sibling,n=fa(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function gm(t,e){return e=rf({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function rf(t,e){return t=Bn(22,t,null,e),t.lanes=0,t}function $l(t,e,n){return Br(e,t.child,null,n),t=gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EE(t,e,n,i,a,r,s,o){if(n)return e.flags&256?(Ja(e),e.flags&=-257,$l(t,e,o)):e.memoizedState!==null?($a(),e.child=t.child,e.flags|=128,null):($a(),r=a.fallback,s=e.mode,a=rf({mode:"visible",children:a.children},s),r=Dr(r,s,o,null),r.flags|=2,a.return=e,r.return=e,a.sibling=r,e.child=a,Br(e,t.child,null,o),a=e.child,a.memoizedState=lh(o),a.childLanes=ch(t,i,o),e.memoizedState=oh,qo(null,a));if(Ja(e),wm(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(ae(419)),a.stack="",a.digest=i,cl({value:a,source:null,stack:null})),$l(t,e,o)}if(Yt||Ir(t,e,o,!1),i=(o&t.childLanes)!==0,Yt||i){if(sr.current!==null)return $l(t,e,o);if(i=Tt,i!==null&&(a=Ix(i,o),a!==0&&a!==s.retryLane))throw s.retryLane=a,Zr(t,a),Gn(i,t,a),mm;return Oh(r)||Cu(),$l(t,e,o)}return Oh(r)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,wt=pi(r.nextSibling),on=e,Ze=!0,Za=null,hi=!1,t!==null&&h_(e,t),e=gm(e,a.children),e.flags|=134221824,e)}function gg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zc(t.return,e,n)}function vg(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&gu(n)===null&&(e=t),t=t.sibling}return e}function ec(t,e,n,i,a,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function If(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function uh(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=gn.current;if(e.flags&128)return fl(e,s),null;var o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,fl(e,s),a==="backwards"&&t!==null?(If(t),Zt(t,e,i,n),If(t)):Zt(t,e,i,n),i=Ze?ll:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,n,e);else if(t.tag===19)gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"backwards":n=vg(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null,If(e)),ec(e,!0,a,null,r,i);break;case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&gu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}ec(e,!0,n,null,r,i);break;case"together":ec(e,!1,null,null,void 0,i);break;case"independent":e.memoizedState=null;break;default:n=vg(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),ec(e,!1,a,n,r,i)}return e.child}function xg(t,e,n){var i=e.pendingProps;return Va(e,e.type,i.value),Zt(t,e,i.children,n),e.child}function _a(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),lr|=e.lanes,!(n&e.childLanes))if(t!==null){if(Ir(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=fa(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fa(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vm(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&hu(t)))}function TE(t,e,n){switch(e.tag){case 3:ru(e,e.stateNode.containerInfo),Va(e,qt,t.memoizedState.cache),Pr();break;case 27:case 5:zd(e);break;case 4:ru(e,e.stateNode.containerInfo);break;case 10:Va(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,eh(e),null;break;case 13:var i=e.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ja(e),e.flags|=128,null;i=Ir(t,e,n,!1);var a=e.child.childLanes;return i||n&a?oy(t,e,n):(Ja(e),t=_a(t,e,n),t!==null?t.sibling:null)}Ja(e);break;case 19:if(e.flags&128)return uh(t,e,n);if(a=(t.flags&128)!==0,i=(n&e.childLanes)!==0,i||(Ir(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return uh(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),fl(e,gn.current),i)break;return null;case 22:return e.lanes=0,sy(t,e,n,e.pendingProps);case 24:Va(e,qt,t.memoizedState.cache)}return _a(t,e,n)}function ly(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Yt=!0;else{if(!vm(t,n)&&!(e.flags&128))return Yt=!1,TE(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,Ze&&e.flags&1048576&&d_(e,ll,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Tr(e.elementType),e.type=t,typeof t=="function")Zp(t)?(i=Gr(t,i),e.tag=1,e=pg(null,e,t,i,n)):(e.tag=0,e=sh(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Ip){e.tag=11,e=cg(null,e,t,i,n);break e}else if(a===zp){e.tag=14,e=ug(null,e,t,i,n);break e}else if(a===Fi){e.tag=10,e.type=t,e=xg(null,e,n);break e}}throw e=Pd(t)||t,Error(ae(306,e,""))}}return e;case 0:return sh(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Gr(i,e.pendingProps),pg(t,e,i,a,n);case 3:e:{if(ru(e,e.stateNode.containerInfo),t===null)throw Error(ae(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,Qd(t,e),Wo(e,i,null,n);var s=e.memoizedState;if(i=s.cache,Va(e,qt,i),i!==r.cache&&Zd(e,[qt],n,!0),jo(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=mg(t,e,i,n);break e}else if(i!==a){a=di(Error(ae(424)),e),cl(a),e=mg(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(wt=pi(t.firstChild),on=e,Ze=!0,Za=null,hi=!0,n=x_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Pr(),i===a){e=_a(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 26:return hs(t,e),t===null?(n=kg(e.type,null,e.pendingProps,null))?e.memoizedState=n:Ze||(e.stateNode=Qy(e.type,e.pendingProps,Ya.current,e)):e.memoizedState=kg(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return zd(e),t===null&&Ze&&(i=e.stateNode=sS(e.type,e.pendingProps,Ya.current),on=e,hi=!0,a=wt,dr(e.type)?(Ph=a,wt=pi(i.firstChild)):wt=a),Zt(t,e,e.pendingProps.children,n),hs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ze&&((a=i=wt)&&(i=_T(i,e.type,e.pendingProps,hi),i!==null?(e.stateNode=i,on=e,wt=pi(i.firstChild),hi=!1,a=!0):a=!1),a||rr(e)),zd(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,Nh(a,r)?i=null:s!==null&&Nh(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=am(t,e,pE,null,null,n),Js._currentValue=a),hs(t,e),Zt(t,e,i,n),e.child;case 6:return t===null&&Ze&&((t=n=wt)&&(n=yT(n,e.pendingProps,hi),n!==null?(e.stateNode=n,on=e,wt=null,t=!0):t=!1),t||rr(e)),null;case 13:return oy(t,e,n);case 4:return ru(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Br(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return cg(t,e,e.type,e.pendingProps,n);case 7:return i=e.pendingProps,hs(t,e),Zt(t,e,i,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:return xg(t,e,n);case 9:return a=e.type._context,i=e.pendingProps.children,zr(e),a=hn(a),i=i(a),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return ug(t,e,e.type,e.pendingProps,n);case 15:return ry(t,e,e.type,e.pendingProps,n);case 19:return uh(t,e,n);case 31:return bE(t,e,n);case 22:return sy(t,e,n,e.pendingProps);case 24:return zr(e),i=hn(qt),t===null?(a=Jp(),a===null&&(a=Tt,r=Qp(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},em(e),Va(e,qt,a)):(t.lanes&n&&(Qd(t,e),Wo(e,null,null,n),jo()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Va(e,qt,i)):(i=r.cache,Va(e,qt,i),i!==a.cache&&Zd(e,[qt],n,!0))),Zt(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=e.pendingProps,i.name!=null&&i.name!=="auto"?e.flags|=t===null?18882560:18874368:Ze&&Ju(e),t!==null&&t.memoizedProps.name!==i.name?e.flags|=4194816:hs(t,e),Zt(t,e,i.children,n),e.child;case 29:throw e.pendingProps}throw Error(ae(156,e.tag))}function ea(t){t.flags|=4}function zf(t,e,n,i,a){var r;if((r=(t.mode&32)!==0)&&(r=n===null?Xg(e,i):Xg(e,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),r){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(zy())t.flags|=8192;else throw Ur=pu,$p}else t.flags&=-16777217}function _g(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!uS(e))if(zy())t.flags|=8192;else throw Ur=pu,$p}function tc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Lx():536870912,t.lanes|=e,Xs|=e)}function Mo(t,e){if(!Ze)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function AE(t,e,n){var i=e.pendingProps;switch(Kp(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Ct(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),da(qt),Vs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Jr(e)?ea(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Uf())),Ct(e),null;case 26:var a=e.type,r=e.memoizedState;return t===null?(ea(e),r!==null?(Ct(e),_g(e,r)):(Ct(e),zf(e,a,null,i,n))):r?r!==t.memoizedState?(ea(e),Ct(e),_g(e,r)):(Ct(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&ea(e),Ct(e),zf(e,a,t,i,n)),null;case 27:if(su(e),n=Ya.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ea(e);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Ct(e),e.subtreeFlags&=-33554433,null}t=ji.current,Jr(e)?X0(e):(t=sS(a,i,n),e.stateNode=t,ea(e))}return Ct(e),e.subtreeFlags&=-33554433,null;case 5:if(su(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ea(e);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Ct(e),e.subtreeFlags&=-33554433,null}if(r=ji.current,Jr(e))X0(e);else{var s=ml(Ya.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[dn]=e,r[jn]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(vn(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ea(e)}}return Ct(e),e.subtreeFlags&=-33554433,zf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&ea(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=Ya.current,Jr(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=on,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[dn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Zy(t.nodeValue,n)),t||rr(e,!0)}else t=ml(t).createTextNode(i),t[dn]=e,e.stateNode=t}return Ct(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Jr(e),n!==null){if(t===null){if(!i)throw Error(ae(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(557));t[dn]=e}else Pr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),t=!1}else n=Uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Zn(e),e):(Zn(e),null);if(e.flags&128)throw Error(ae(558))}return Ct(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Jr(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ae(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ae(317));a[dn]=e}else Pr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),a=!1}else a=Uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Zn(e),e):(Zn(e),null)}return Zn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),tc(e,e.updateQueue),Ct(e),null);case 4:return Vs(),t===null&&Am(e.stateNode.containerInfo),e.flags|=67108864,Ct(e),null;case 10:return da(e.type),Ct(e),null;case 19:if(nm(e),i=e.memoizedState,i===null)return Ct(e),null;if(a=(e.flags&128)!==0,r=i.rendering,r===null)if(a)Mo(i,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=gu(t),r!==null){for(e.flags|=128,Mo(i,!1),t=r.updateQueue,e.updateQueue=t,tc(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)u_(n,t),n=n.sibling;return fl(e,gn.current&1|2),Ze&&sa(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&$n()>Au&&(e.flags|=128,a=!0,Mo(i,!1),e.lanes=4194304)}else{if(!a)if(t=gu(r),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,tc(e,t),Mo(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!r.alternate&&!Ze)return Ct(e),null}else 2*$n()-i.renderingStartTime>Au&&n!==536870912&&(e.flags|=128,a=!0,Mo(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}if(i.tail!==null){t=i.tail;e:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=t,i.tail=t.sibling,i.renderingStartTime=$n(),t.sibling=null,r=gn.current,r=a?r&1|2:r&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Ze?fl(e,r):(n=r,Nt(xn,e),Nt(gn,n),Tn===null&&(Tn=e)),Ze&&sa(e,i.treeForkCount),t}return Ct(e),null;case 22:case 23:return Zn(e),tm(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),n=e.updateQueue,n!==null&&tc(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&mn(Nr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),da(qt),Ct(e),null;case 25:return null;case 30:return e.flags|=33554432,Ct(e),null}throw Error(ae(156,e.tag))}function RE(t,e){switch(Kp(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return da(qt),Vs(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return su(e),null;case 31:if(e.memoizedState!==null){if(Zn(e),e.alternate===null)throw Error(ae(340));Pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Zn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nm(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Vs(),null;case 10:return da(e.type),null;case 22:case 23:return Zn(e),tm(),t!==null&&mn(Nr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return da(qt),null;case 25:return null;default:return null}}function cy(t,e){switch(Kp(e),e.tag){case 3:da(qt),Vs();break;case 26:case 27:case 5:su(e);break;case 4:Vs();break;case 31:e.memoizedState!==null&&Zn(e);break;case 13:Zn(e);break;case 19:nm(e);break;case 10:da(e.type);break;case 22:case 23:Zn(e),tm(),t!==null&&mn(Nr);break;case 24:da(qt)}}function Ol(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){Mt(e,e.return,o)}}function or(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(d){Mt(a,l,d)}}}i=i.next}while(i!==r)}}catch(d){Mt(e,e.return,d)}}function uy(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{y_(e,n)}catch(i){Mt(t,t.return,i)}}}function fy(t,e,n){n.props=Gr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Mt(t,e,i)}}function Pi(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:var a=t.stateNode,r=ga(t.memoizedProps,a);(a.ref===null||a.ref.name!==r)&&(a.ref=eS(r)),i=a.ref;break;case 7:if(t.stateNode===null){var s=new ai(t);kn(t.child,!1,vT,s,void 0,void 0),t.stateNode=s}i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(o){Mt(t,e,o)}}function fn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Mt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Mt(t,e,a)}else n.current=null}function Su(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)aS(t.stateNode,e[n])}function yg(t){for(var e=t.return;e!==null&&(_m(e)&&aS(t.stateNode,e.stateNode),!xm(e));)e=e.return}function Yo(t){for(var e=t.return;e!==null&&(_m(e)&&xT(t.stateNode,e.stateNode),!xm(e));)e=e.return}function xm(t){return t.tag===5||t.tag===3||t.tag===27}function _m(t){return t&&t.tag===7&&t.stateNode!==null}function fh(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Mt(t,t.return,a)}}function Ff(t,e,n){try{var i=t.stateNode;$E(i,t.type,n,e),i[jn]=e}catch(a){Mt(t,t.return,a)}}function dy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&dr(t.type)||t.tag===4}function Bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&dr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(a),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bi)),Su(t,i),ct=!0;else if(a!==4&&(a===27&&(Su(t,i),i=null,dr(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(dh(t,e,n,i),t=t.sibling;t!==null;)dh(t,e,n,i),t=t.sibling}function Mu(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?n.insertBefore(a,e):n.appendChild(a),Su(t,i),ct=!0;else if(a!==4&&(a===27&&(Su(t,i),i=null,dr(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(Mu(t,e,n,i),t=t.sibling;t!==null;)Mu(t,e,n,i),t=t.sibling}function hy(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);vn(e,i,n),e[dn]=t,e[jn]=n}catch(r){Mt(t,t.return,r)}}var bu=!1,Kn=null;function Sg(t){(t.tag===30||t.subtreeFlags&33554432)&&(bu=!0)}var zi=null;function Mg(){var t=zi;return zi=null,t}var Fn=0;function co(t,e,n,i,a){return Fn=0,py(t.child,e,n,i,a)}function py(t,e,n,i,a){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(i!==null){var o=Uh(s);i.push(o),o.view&&(r=!0)}else r||Uh(s).view&&(r=!0);bu=!0,Jy(s,Fn===0?e:e+"_"+Fn,n),Fn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&a||py(t.child,e,n,i,a)&&(r=!0));t=t.sibling}return r}function qi(t,e){for(;t!==null;)t.tag===5?$y(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||qi(t.child,e)),t=t.sibling}function Vc(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Vc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(ae(544));var n=e.name;e=Ma(e.default,e.share),e!=="none"&&(co(t,n,e,null,!1)||qi(t.child,!1))}t=t.sibling}}function hh(t,e){if(t.tag===30){var n=t.stateNode,i=t.memoizedProps,a=ga(i,n),r=Ma(i.default,n.paired?i.share:i.enter);r!=="none"?co(t,a,r,null,!1)?(Vc(t),n.paired||e||qs(t,i.onEnter)):qi(t.child,!1):Vc(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)hh(t,e),t=t.sibling;else Vc(t)}function ph(t){if(Kn!==null&&Kn.size!==0){var e=Kn;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var n=t.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=e.get(i);if(a!==void 0){var r=Ma(n.default,n.share);if(r!=="none"&&(co(t,i,r,null,!1)?(r=t.stateNode,a.paired=r,r.paired=a,qs(t,n.onShare)):qi(t.child,!1)),e.delete(i),e.size===0)break}}}ph(t)}t=t.sibling}}}function mh(t){if(t.tag===30){var e=t.memoizedProps,n=ga(e,t.stateNode),i=Kn!==null?Kn.get(n):void 0,a=Ma(e.default,i!==void 0?e.share:e.exit);a!=="none"&&(co(t,n,a,null,!1)?i!==void 0?(a=t.stateNode,i.paired=a,a.paired=i,Kn.delete(n),qs(t,e.onShare)):qs(t,e.onExit):qi(t.child,!1)),Kn!==null&&ph(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)mh(t),t=t.sibling;else Kn!==null&&ph(t)}function my(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=ga(e,t.stateNode);e=Ma(e.default,e.update),t.flags&=-5,e!=="none"&&co(t,n,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&my(t);t=t.sibling}}function gh(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,qi(t.child,!1))}gh(t)}t=t.sibling}}function kc(t){if(t.tag===30)t.stateNode.paired=null,qi(t.child,!1),gh(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)kc(t),t=t.sibling;else gh(t)}function gy(t){for(t=t.child;t!==null;)t.tag===30?qi(t.child,!1):t.subtreeFlags&33554432&&gy(t),t=t.sibling}function ym(t,e,n,i,a,r,s){for(var o=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(r!==null&&Fn<r.length){var c=r[Fn],d=Uh(l);(c.view||d.view)&&(o=!0);var p;if(p=(t.flags&4)===0)if(d.clip)p=!0;else{p=c.rect;var u=d.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(t.flags|=4),d.abs?d=!c.abs:(c=c.rect,d=d.rect,d=c.height!==d.height||c.width!==d.width),d&&(t.flags|=32)}else t.flags|=32;t.flags&4&&Jy(l,Fn===0?n:n+"_"+Fn,a),o&&t.flags&4||(zi===null&&(zi=[]),zi.push(l,Fn===0?i:i+"_"+Fn,e.memoizedProps)),Fn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:ym(t,e.child,n,i,a,r,s)&&(o=!0));e=e.sibling}return o}function vy(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=t.stateNode,a=ga(n,i),r=Ma(n.default,n.update),s;s=t.memoizedState,t.memoizedState=null,i=t;var o=t.child;Fn=0,a=ym(i,o,a,a,r,s,!1),t.flags&4&&a&&qs(t,n.onUpdate)}else t.subtreeFlags&33554432&&vy(t);t=t.sibling}}var an=!1,gt=!1,Di=!1,Hf=!1,bg=typeof WeakSet=="function"?WeakSet:Set,rn=null,Ni=!1,Po=!1,Eu=!1,vh=!1;function CE(t,e,n){if(t=t.containerInfo,wh=$s,t=n_(t),Xp(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var o=0,l=-1,c=-1,d=0,p=0,u=t,h=null;t:for(;;){for(var _;u!==i||r!==0&&u.nodeType!==3||(l=o+r),u!==s||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(_=u.firstChild)!==null;)h=u,u=_;for(;;){if(u===t)break t;if(h===i&&++d===r&&(l=o),h===s&&++p===a&&(c=o),(_=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=_}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Dh={focusedElem:t,selectionRange:i},$s=!1,n=(n&335544064)===n,rn=e,e=n?9270:1024;rn!==null;){if(t=rn,n&&(i=t.deletions,i!==null))for(r=0;r<i.length;r++)n&&mh(i[r]);if(t.alternate===null&&t.flags&2)n&&Sg(t),nc(n);else{if(t.tag===22){if(i=t.alternate,t.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&mh(i),nc(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Sg(t),nc(n);continue}}i=t.child,t.subtreeFlags&e&&i!==null?(i.return=t,rn=i):(n&&my(t),nc(n))}}Kn=null}function nc(t){for(;rn!==null;){var e=rn,n=t,i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var r=e.stateNode;try{var s=Gr(e.type,a);n=r.getSnapshotBeforeUpdate(s,i),r.__reactInternalSnapshotBeforeUpdate=n}catch(o){Mt(e,e.return,o)}}break;case 3:if(a&1024){if(i=e.stateNode.containerInfo,n=i.nodeType,n===9)Lh(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Lh(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=ga(i.memoizedProps,i.stateNode),a=e.memoizedProps,a=Ma(a.default,a.update),a!=="none"&&co(i,n,a,i.memoizedState=[],!0));break;default:if(a&1024)throw Error(ae(163))}if(i=e.sibling,i!==null){i.return=e.return,rn=i;break}rn=e.return}}function xy(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n),i&4&&Ol(5,n);break;case 1:if(Ui(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){Mt(n,n.return,s)}else{var a=Gr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Mt(n,n.return,s)}}i&64&&uy(n),i&512&&Pi(n,n.return);break;case 3:if(Ui(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{y_(t,e)}catch(s){Mt(n,n.return,s)}}break;case 27:e===null&&i&4&&hy(n);case 26:case 5:Ui(t,n),e===null&&i&4&&fh(n),i&512&&Pi(n,n.return);break;case 12:Ui(t,n);break;case 31:Ui(t,n),i&4&&My(t,n);break;case 13:Ui(t,n),i&4&&by(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=HE.bind(null,n),ST(t,n))));break;case 22:if(i=n.memoizedState!==null||an,!i){var r=e!==null&&e.memoizedState!==null||gt;e=an,a=gt,an=i,(gt=r)&&!a?(i=2,n.subtreeFlags&8772&&(i|=1),Si(t,n,i)):Ui(t,n),an=e,gt=a}break;case 30:Ui(t,n),i&512&&Pi(n,n.return);break;case 7:i&512&&Pi(n,n.return);default:Ui(t,n)}}function xh(t,e){for(t=t.child;t!==null;)_y(t,e),t=t.sibling}function _y(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=t.stateNode,r=t.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;a.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Mt(t,t.return,l)}_h(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,ct=!0}catch(l){Mt(t,t.return,l)}break;case 18:try{var o=t.stateNode;e?zg(o,!0):zg(t.stateNode,!1)}catch(l){Mt(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&xh(t,e);break;default:xh(t,e)}}function _h(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var n=t,i=e;switch(n.tag){case 4:_y(n,i);break e;case 22:n.memoizedState===null&&_h(n,i);break e;default:_h(n,i)}}t=t.sibling}}function yy(t){var e=t.alternate;e!==null&&(t.alternate=null,yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Xu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,In=!1;function vi(t,e,n){for(n=n.child;n!==null;)Sy(t,e,n),n=n.sibling}function Sy(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 26:gt||fn(n,e),vi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!gt&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:gt||fn(n,e),Yo(n);var i=Ot,a=In;dr(n.type)&&(Ot=n.stateNode,In=!1),vi(t,e,n),oS(n.stateNode,n.type,n.memoizedProps),Ot=i,In=a;break;case 5:gt||fn(n,e),Yo(n);case 6:if(n.tag===6&&Yo(n),i=Ot,a=In,Ot=null,vi(t,e,n),Ot=i,In=a,Ot!==null)if(In)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(n.stateNode),ct=!0}catch(r){Mt(n,e,r)}else try{Ot.removeChild(n.stateNode),ct=!0}catch(r){Mt(n,e,r)}break;case 18:Ot!==null&&(In?(t=Ot,Ig(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),eo(t)):Ig(Ot,n.stateNode));break;case 4:i=Ot,a=In,Ot=n.stateNode.containerInfo,In=!0,vi(t,e,n),Ot=i,In=a;break;case 0:case 11:case 14:case 15:or(2,n,e),gt||or(4,n,e),vi(t,e,n);break;case 1:gt||(fn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&fy(n,e,i)),vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:gt=(i=gt)||n.memoizedState!==null,vi(t,e,n),gt=i;break;case 30:fn(n,e),vi(t,e,n);break;case 7:gt||fn(n,e),vi(t,e,n);break;default:vi(t,e,n)}}function My(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{eo(t)}catch(n){Mt(e,e.return,n)}}}function by(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{eo(t)}catch(n){Mt(e,e.return,n)}}function wE(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new bg),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new bg),e;default:throw Error(ae(435,t.tag))}}function ic(t,e){var n=wE(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=GE.bind(null,t,i);i.then(a,a)}})}function wn(t,e,n){var i=e.deletions;if(i!==null)for(var a=0;a<i.length;a++){var r=i[a],s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(dr(l.type)){Ot=l.stateNode,In=!1;break e}break;case 5:Ot=l.stateNode,In=!1;break e;case 3:case 4:Ot=l.stateNode.containerInfo,In=!0;break e}l=l.return}if(Ot===null)throw Error(ae(160));Sy(s,o,r),Ot=null,In=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ey(e,t,n),e=e.sibling}var Mi=null;function Ey(t,e,n){var i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=t.updateQueue,i=i!==null?i.events:null,i!==null))for(var r=0;r<i.length;r++){var s=i[r];s.ref.impl=s.nextImpl}wn(e,t,n),Dn(t),a&4&&(or(3,t,t.return),Ol(3,t),or(5,t,t.return));break;case 1:wn(e,t,n),Dn(t),a&512&&(gt||i===null||fn(i,i.return)),a&64&&an&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(r=Mi,wn(e,t,n),Dn(t),a&512&&(gt||i===null||fn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=t.memoizedState,i===null)if(n===null)if(t.stateNode===null)if(an)t.stateNode=Qy(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,n=t.memoizedProps,a=r.ownerDocument||r;t:switch(e){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Dl]||i[dn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(e),a.head.insertBefore(i,a.querySelector("head > title"))),vn(i,e,n),i[dn]=t,sn(i),e=i;break e;case"link":if(r=Wg("link","href",a).get(e+(n.href||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(s,1);break t}}i=a.createElement(e),vn(i,e,n),a.head.appendChild(i);break;case"meta":if(r=Wg("meta","content",a).get(e+(n.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(s,1);break t}}i=a.createElement(e),vn(i,e,n),a.head.appendChild(i);break;default:throw Error(ae(468,e))}i[dn]=t,sn(i),e=i}t.stateNode=e}else an||Ih(r,t.type,t.stateNode);else t.stateNode=jg(r,n,t.memoizedProps);else a!==n?(a===null?(e=i.stateNode,e===null||gt||e.parentNode.removeChild(e)):a.count--,n===null?an||Ih(r,t.type,t.stateNode):jg(r,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Ff(t,t.memoizedProps,i.memoizedProps);break;case 27:wn(e,t,n),Dn(t),a&512&&(gt||i===null||fn(i,i.return)),i!==null&&a&4&&Ff(t,t.memoizedProps,i.memoizedProps);break;case 5:if(r=Di,Di=!1,wn(e,t,n),Di=r,Dn(t),a&512&&(gt||i===null||fn(i,i.return)),t.flags&32){e=t.stateNode;try{js(e,""),ct=!0}catch(d){Mt(t,t.return,d)}}a&4&&t.stateNode!=null&&(e=t.memoizedProps,Ff(t,e,i!==null?i.memoizedProps:e)),a&1024&&(Hf=!0);break;case 6:if(wn(e,t,n),Dn(t),a&4){if(t.stateNode===null)throw Error(ae(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,ct=!0}catch(d){Mt(t,t.return,d)}}break;case 3:if(ct=!1,qc=null,r=Mi,Mi=gl(e.containerInfo),wn(e,t,n),Mi=r,Dn(t),a&4&&i!==null&&i.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(d){Mt(t,t.return,d)}Hf&&(Hf=!1,Ty(t)),ct=!1;break;case 4:a=Di,Di=an,i=C0(),r=Mi,Mi=gl(t.stateNode.containerInfo),wn(e,t,n),Dn(t),Mi=r,ct&&Po&&(Eu=!0),ct=i,Di=a;break;case 12:wn(e,t,n),Dn(t);break;case 31:wn(e,t,n),Dn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ic(t,e)));break;case 13:wn(e,t,n),Dn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(sf=$n()),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ic(t,e)));break;case 22:r=t.memoizedState!==null,s=i!==null&&i.memoizedState!==null;var o=an,l=gt,c=Di;an=o||r,Di=c||r,gt=l||s,wn(e,t,n),gt=l,Di=c,an=o,Dn(t),a&8192&&(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||i===null||s||an||gt||(e=s||gt,n=an,i=gt,an=r||an,gt=e,Oa(t,2),an=n,gt=i),!r&&Di||xh(t,r)),a&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,ic(t,n))));break;case 19:wn(e,t,n),Dn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ic(t,e)));break;case 30:a&512&&(gt||i===null||fn(i,i.return)),a=C0(),r=Po,s=(n&335544064)===n,o=t.memoizedProps,Po=s&&Ma(o.default,o.update)!=="none",wn(e,t,n),Dn(t),s&&i!==null&&ct&&(t.flags|=4),Po=r,ct=a;break;case 21:break;case 7:a&512&&(gt||i===null||fn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=t);default:wn(e,t,n),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(dy(i)){n=i;break}i=i.return}i=null;for(var a=t.return;a!==null;){if(_m(a)){var r=a.stateNode;i===null?i=[r]:i.push(r)}if(xm(a))break;a=a.return}var s=i;if(n==null)throw Error(ae(160));switch(n.tag){case 27:var o=n.stateNode,l=Bf(t);Mu(t,l,o,s);break;case 5:var c=n.stateNode;n.flags&32&&(js(c,""),n.flags&=-33);var d=Bf(t);Mu(t,d,c,s);break;case 3:case 4:var p=n.stateNode.containerInfo,u=Bf(t);dh(t,u,p,s);break;default:throw Error(ae(161))}}catch(h){Mt(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ty(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ty(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,$s=!0,e.reset(),$s=!1),t=t.sibling}}function $r(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Ay(e,t),e=e.sibling;else vy(e)}function Ay(t,e){var n=t.alternate;if(n===null)hh(t,!1);else switch(t.tag){case 3:if(vh=Ni=!1,Mg(),$r(e,t),!Ni&&!Eu){if(t=zi,t!==null)for(var i=0;i<t.length;i+=3){n=t[i];var a=t[i+1];$y(n,t[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),vh=!0}zi=null;break;case 5:$r(e,t);break;case 4:i=Ni,Ni=!1,$r(e,t),Ni&&(Eu=!0),Ni=i;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?hh(t,!1):$r(e,t));break;case 30:i=Ni,a=Mg(),Ni=!1,$r(e,t),Ni&&(t.flags|=4);var r=t.memoizedProps,s=t.stateNode;e=ga(r,s),s=ga(n.memoizedProps,s);var o=Ma(r.default,r.update);o==="none"?e=!1:(r=n.memoizedState,n.memoizedState=null,n=t.child,Fn=0,e=ym(t,n,e,s,o,r,!0),Fn!==(r===null?0:r.length)&&(t.flags|=32)),t.flags&4&&e?(qs(t,t.memoizedProps.onUpdate),zi=a):a!==null&&(a.push.apply(a,zi),zi=a),Ni=t.flags&32?!0:i;break;default:$r(e,t)}}function Ui(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)xy(t,e.alternate,e),e=e.sibling}function Oa(t,e){for(t=t.child;t!==null;){var n=t,i=e;switch(n.tag){case 0:case 11:case 14:case 15:or(4,n,n.return),Oa(n,i);break;case 1:fn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fy(n,n.return,a),Oa(n,i);break;case 27:i&2&&oS(n.stateNode,n.type,n.memoizedProps);case 5:fn(n,n.return),n.tag!==5&&n.tag!==27||Yo(n),Oa(n,i);break;case 6:Yo(n);break;case 26:fn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||gt||a.parentNode.removeChild(a),Oa(n,i);break;case 22:n.memoizedState===null&&Oa(n,i);break;case 30:fn(n,n.return),Oa(n,i);break;case 7:fn(n,n.return);default:Oa(n,i)}t=t.sibling}}function Si(t,e,n){for(n=e.subtreeFlags&8772?n:n&-2,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags,o=(n&1)!==0;switch(r.tag){case 0:case 11:case 15:Si(a,r,n),Ol(4,r);break;case 1:if(Si(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(d){Mt(i,i.return,d)}if(i=r,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)__(c[a],l)}catch(d){Mt(i,i.return,d)}}o&&s&64&&uy(r),Pi(r,r.return);break;case 27:n&2&&hy(r);case 5:r.tag!==5&&r.tag!==27||yg(r),Si(a,r,n),o&&i===null&&s&4&&fh(r),Pi(r,r.return);break;case 6:yg(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||an||Ih(gl(l.ownerDocument),r.type,l),Si(a,r,n),o&&i===null&&s&4&&fh(r),Pi(r,r.return);break;case 12:Si(a,r,n);break;case 31:Si(a,r,n),o&&s&4&&My(a,r);break;case 13:Si(a,r,n),o&&s&4&&by(a,r);break;case 22:r.memoizedState===null&&Si(a,r,n),Pi(r,r.return);break;case 30:Si(a,r,n),Pi(r,r.return);break;case 7:Pi(r,r.return);default:Si(a,r,n)}e=e.sibling}}function Sm(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Ul(n))}function Mm(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ul(t))}function ri(t,e,n,i){var a=(n&335544064)===n;if(e.subtreeFlags&(a?10262:10256))for(e=e.child;e!==null;)Ry(t,e,n,i),e=e.sibling;else a&&gy(e)}function Ry(t,e,n,i){var a=(n&335544064)===n;a&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&kc(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:ri(t,e,n,i),r&2048&&Ol(9,e);break;case 1:ri(t,e,n,i);break;case 3:ri(t,e,n,i),a&&vh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&Ul(r)));break;case 12:if(r&2048){ri(t,e,n,i),r=e.stateNode;try{var s=e.memoizedProps,o=s.id,l=s.onPostCommit;typeof l=="function"&&l(o,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Mt(e,e.return,c)}}else ri(t,e,n,i);break;case 31:ri(t,e,n,i);break;case 13:ri(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,o=e.alternate,e.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&kc(o),s._visibility&2?ri(t,e,n,i):Zo(t,e)):(a&&o!==null&&o.memoizedState!==null&&kc(e),s._visibility&2?ri(t,e,n,i):(s._visibility|=2,ps(t,e,n,i,(e.subtreeFlags&10256)!==0||!1))),r&2048&&Sm(o,e);break;case 24:ri(t,e,n,i),r&2048&&Mm(e.alternate,e);break;case 30:a&&(r=e.alternate,r!==null&&(qi(r.child,!0),qi(e.child,!0))),ri(t,e,n,i);break;default:ri(t,e,n,i)}}function ps(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:ps(r,s,o,l,a),Ol(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?ps(r,s,o,l,a):Zo(r,s):(d._visibility|=2,ps(r,s,o,l,a)),a&&c&2048&&Sm(s.alternate,s);break;case 24:ps(r,s,o,l,a),a&&c&2048&&Mm(s.alternate,s);break;default:ps(r,s,o,l,a)}e=e.sibling}}function Zo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Zo(n,i),a&2048&&Sm(i.alternate,i);break;case 24:Zo(n,i),a&2048&&Mm(i.alternate,i);break;default:Zo(n,i)}e=e.sibling}}var Ar=8192;function xr(t,e,n){if(t.subtreeFlags&Ar)for(t=t.child;t!==null;)Cy(t,e,n),t=t.sibling}function Cy(t,e,n){switch(t.tag){case 26:xr(t,e,n),t.flags&Ar&&(t.memoizedState!==null?PT(n,Mi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&qg(n,t)));break;case 5:xr(t,e,n),t.flags&Ar&&(t=t.stateNode,(e&335544128)===e&&qg(n,t));break;case 3:case 4:var i=Mi;Mi=gl(t.stateNode.containerInfo),xr(t,e,n),Mi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Ar,Ar=16777216,xr(t,e,n),Ar=i):xr(t,e,n));break;case 30:if(t.flags&Ar&&(i=t.memoizedProps.name,i!=null&&i!=="auto")){var a=t.stateNode;a.paired=null,Kn===null&&(Kn=new Map),Kn.set(i,a)}xr(t,e,n);break;default:xr(t,e,n)}}function wy(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function bo(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];rn=i,Ny(i,t)}wy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dy(t),t=t.sibling}function Dy(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&or(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,jc(t)):bo(t);break;default:bo(t)}}function jc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];rn=i,Ny(i,t)}wy(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:or(8,e,e.return),jc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,jc(e));break;default:jc(e)}t=t.sibling}}function Ny(t,e){for(;rn!==null;){var n=rn;switch(n.tag){case 0:case 11:case 15:or(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ul(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,rn=i;else e:for(n=t;rn!==null;){i=rn;var a=i.sibling,r=i.return;if(yy(i),i===n){rn=null;break e}if(a!==null){a.return=r,rn=a;break e}rn=r}}}var DE={getCacheForType:function(t){var e=hn(qt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return hn(qt).controller.signal}},NE=typeof WeakMap=="function"?WeakMap:Map,dt=0,Tt=null,Je=null,it=0,yt=0,qn=null,ka=!1,uo=!1,bm=!1,ya=0,Gt=0,lr=0,Lr=0,Tu=0,Jn=0,Xs=0,Ko=null,zn=null,yh=!1,sf=0,Uy=0,Au=1/0,Ru=null,er=null,zt=0,Ri=null,Vr=null,Wi=0,Sh=0,Mh=null,Ly=null,zs=null,Fs=null,Bs=null,Qo=0,Wc=null;function ni(){return dt&2&&it!==0?it&-it:He.T!==null?Tm():zx()}function Oy(){if(Jn===0)if(!(it&536870912)||Ze){var t=Xl;Xl<<=1,!(Xl&3932160)&&(Xl=262144),Jn=t}else Jn=536870912;return t=xn.current,t!==null&&(t.flags|=32),Jn}function qs(t,e){if(e!=null){var n=t.stateNode,i=n.ref;i===null&&(i=n.ref=eS(ga(t.memoizedProps,n))),Fs===null&&(Fs=[]),Fs.push(e.bind(null,i))}}function Gn(t,e,n){(t===Tt&&(yt===2||yt===9)||t.cancelPendingCommit!==null)&&(Ys(t,0),ja(t,it,Jn,!1)),wl(t,n),(!(dt&2)||t!==Tt)&&(t===Tt&&(!(dt&2)&&(Lr|=n),Gt===4&&ja(t,it,Jn,!1)),Qi(t))}function Py(t,e,n){if(dt&6)throw Error(ae(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Cl(t,e),a=i?OE(t,e):Gf(t,e,!0),r=i;do{if(a===0){uo&&!i&&ja(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!UE(n)){a=Gf(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=Ko;var l=o.current.memoizedState.isDehydrated;if(l&&(Ys(o,s).flags|=256),s=Gf(o,s,!1),s!==2&&s!==6){if(bm&&!l){o.errorRecoveryDisabledLanes|=r,Lr|=r,a=4;break e}r=zn,zn=a,r!==null&&(zn===null?zn=r:zn.push.apply(zn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Ys(t,0),ja(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(ae(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:ja(i,e,Jn,!ka);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(ae(329))}if((e&62914560)===e&&(a=sf+300-$n(),10<a)){if(ja(i,e,Jn,!ka),Wu(i,0,!0)!==0)break e;Wi=e,i.timeoutHandle=Rm(Eg.bind(null,i,n,zn,Ru,yh,e,Jn,Lr,Xs,ka,r,"Throttled",-0,0),a);break e}Eg(i,n,zn,Ru,yh,e,Jn,Lr,Xs,ka,r,null,-0,0)}}break}while(!0);Qi(t)}function Eg(t,e,n,i,a,r,s,o,l,c,d,p,u,h){t.timeoutHandle=-1;var _=e.subtreeFlags,M=(r&335544064)===r;if(p=null,(M||_&8192||(_&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Kn=null,Cy(e,r,p),M&&(_=p,M=t.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(_.count++,_.waitingForViewTransition=!0,_=vl.bind(_),M.finished.then(_,_))),_=(r&62914560)===r?sf-$n():(r&4194048)===r?Uy-$n():0,_=IT(p,_),_!==null)){Wi=r,t.cancelPendingCommit=_(Ag.bind(null,t,e,r,n,i,a,s,o,l,c,d,p,null,u,h)),ja(t,r,s,!c);return}Ag(t,e,r,n,i,a,s,o,l,c,d,p)}function UE(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!ii(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ja(t,e,n,i){e=Ux(t,e),e&=~Tu,e&=~Lr,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-ti(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&Ox(t,n,e)}function of(){return dt&6?!0:(Pl(0),!1)}function Em(){if(Je!==null){if(yt===0)var t=Je.return;else t=Je,ca=Kr=null,om(t),Os=null,ul=0,t=Je;for(;t!==null;)cy(t.alternate,t),t=t.return;Je=null}}function Ys(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,nT(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Wi=0,Em(),Tt=t,Je=n=fa(t.current,null),it=e,yt=0,qn=null,ka=!1,uo=Cl(t,e),bm=!1,Xs=Jn=Tu=Lr=lr=Gt=0,zn=Ko=null,yh=!1,ya=Ux(t,e),Ku(),n}function Iy(t,e){We=null,He.H=_u,e===lo||e===$u?(e=Q0(),yt=3):e===$p?(e=Q0(),yt=4):yt=e===mm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,qn=e,Je===null&&(Gt=1,yu(t,di(e,t.current)))}function zy(){var t=xn.current;return t===null?!0:(it&4194048)===it?Tn===null:(it&62914560)===it||it&536870912?t===Tn:!1}function Fy(){var t=He.H;return He.H=_u,t===null?_u:t}function By(){var t=He.A;return He.A=DE,t}function Cu(){Gt=4,ka||(it&4194048)!==it&&xn.current!==null||(uo=!0),!(lr&134217727)&&!(Lr&134217727)||Tt===null||ja(Tt,it,Jn,!1)}function Gf(t,e,n){var i=dt;dt|=2;var a=Fy(),r=By();(Tt!==t||it!==e)&&(Ru=null,Ys(t,e)),e=!1;var s=Gt;e:do try{if(yt!==0&&Je!==null){var o=Je,l=qn;switch(yt){case 8:Em(),s=6;break e;case 3:case 2:case 9:case 6:xn.current===null&&(e=!0);var c=yt;if(yt=0,qn=null,Cs(t,o,l,c),n&&uo){s=0;break e}break;default:c=yt,yt=0,qn=null,Cs(t,o,l,c)}}LE(),s=Gt;break}catch(d){Iy(t,d)}while(!0);return e&&t.shellSuspendCounter++,ca=Kr=null,dt=i,He.H=a,He.A=r,Je===null&&(Tt=null,it=0,Ku()),s}function LE(){for(;Je!==null;)Hy(Je)}function OE(t,e){var n=dt;dt|=2;var i=Fy(),a=By();Tt!==t||it!==e?(Ru=null,Au=$n()+500,Ys(t,e)):uo=Cl(t,e);e:do try{if(yt!==0&&Je!==null){e=Je;var r=qn;t:switch(yt){case 1:yt=0,qn=null,Cs(t,e,r,1);break;case 2:case 9:if(K0(r)){yt=0,qn=null,Tg(e);break}e=function(){yt!==2&&yt!==9||Tt!==t||(yt=7),Qi(t)},r.then(e,e);break e;case 3:yt=7;break e;case 4:yt=5;break e;case 7:K0(r)?(yt=0,qn=null,Tg(e)):(yt=0,qn=null,Cs(t,e,r,7));break;case 5:var s=null;switch(Je.tag){case 26:s=Je.memoizedState;case 5:case 27:var o=Je;if(s?uS(s):o.stateNode.complete){yt=0,qn=null;var l=o.sibling;if(l!==null)Je=l;else{var c=o.return;c!==null?(Je=c,lf(c)):Je=null}break t}}yt=0,qn=null,Cs(t,e,r,5);break;case 6:yt=0,qn=null,Cs(t,e,r,6);break;case 8:Em(),Gt=6;break e;default:throw Error(ae(462))}}PE();break}catch(d){Iy(t,d)}while(!0);return ca=Kr=null,He.H=i,He.A=a,dt=n,Je!==null?0:(Tt=null,it=0,Ku(),Gt)}function PE(){for(;Je!==null&&!JM();)Hy(Je)}function Hy(t){var e=ly(t.alternate,t,ya);t.memoizedProps=t.pendingProps,e===null?lf(t):Je=e}function Tg(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=hg(n,e,e.pendingProps,e.type,void 0,it);break;case 11:e=hg(n,e,e.pendingProps,e.type.render,e.ref,it);break;case 5:om(e);var i=e;i===on&&(Ze?(du(i),i.tag===5&&i.stateNode!=null&&(wt=i.stateNode)):(du(i),Ze=!0));default:cy(n,e),e=Je=u_(e,ya),e=ly(n,e,ya)}t.memoizedProps=t.pendingProps,e===null?lf(t):Je=e}function Cs(t,e,n,i){ca=Kr=null,om(e),Os=null,ul=0;var a=e.return;try{if(ME(t,a,e,n,it)){Gt=1,yu(t,di(n,t.current)),Je=null;return}}catch(r){if(a!==null)throw Je=a,r;Gt=1,yu(t,di(n,t.current)),Je=null;return}e.flags&32768?(Ze||i===1?t=!0:uo||it&536870912?t=!1:(ka=t=!0,(i===2||i===9||i===3||i===6)&&(i=xn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Gy(e,t)):lf(e)}function lf(t){var e=t;do{if(e.flags&32768){Gy(e,ka);return}t=e.return;var n=AE(e.alternate,e,ya);if(n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);Gt===0&&(Gt=5)}function Gy(t,e){do{var n=RE(t.alternate,t);if(n!==null){n.flags&=32767,Je=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Je=t;return}Je=t=n}while(t!==null);Gt=6,Je=null}function Ag(t,e,n,i,a,r,s,o,l,c,d,p){t.cancelPendingCommit=null;do cf();while(zt!==0);if(dt&6)throw Error(ae(327));if(e!==null){if(e===t.current)throw Error(ae(177));t===Tt&&(Je=Tt=null,it=0),Vr=e,Ri=t,Wi=n,Mh=a,Ly=i,IE(t,e,n,s,o,l,p)}}function IE(t,e,n,i,a,r,s){var o=e.lanes|e.childLanes;if(Sh=o,o|=qp,lb(t,n,o,i,a,r),Fs=null,(n&335544064)===n?(Bs=uE(t),i=10262):(Bs=null,i=10256),e.subtreeFlags&i||e.flags&i?(t.callbackNode=null,t.callbackPriority=0,VE(ou,function(){return Ah(),null})):(t.callbackNode=null,t.callbackPriority=0),bu=!1,i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=He.T,He.T=null,a=ht.p,ht.p=2,r=dt,dt|=4;try{CE(t,e,n)}finally{dt=r,ht.p=a,He.T=i}}zt=1,bu?zs=lT(s,t.containerInfo,Bs,bh,Eh,FE,Th,Ah,zE):(bh(),Eh(),Th())}function zE(t){if(zt!==0){var e=Ri.onRecoverableError;e(t,{componentStack:null})}}function FE(){zt===3&&(zt=0,Ay(Vr,Ri),zt=4)}function bh(){if(zt===1){zt=0;var t=Ri,e=Vr,n=Wi,i=(e.flags&13878)!==0;if(e.subtreeFlags&13878||i){i=He.T,He.T=null;var a=ht.p;ht.p=2;var r=dt;dt|=4;try{Po=Eu=!1,Ey(e,t,n),n=Dh;var s=n_(t.containerInfo),o=n.focusedElem,l=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&t_(o.ownerDocument.documentElement,o)){if(l!==null&&Xp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var h=u.getSelection(),_=o.textContent.length,M=Math.min(l.start,_),v=l.end===void 0?M:Math.min(l.end,_);!h.extend&&M>v&&(s=v,v=M,M=s);var f=V0(o,M),m=V0(o,v);if(f&&m&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var y=p.createRange();y.setStart(f.node,f.offset),h.removeAllRanges(),M>v?(h.addRange(y),h.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),h.addRange(y))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var S=p[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}$s=!!wh,Dh=wh=null}finally{dt=r,ht.p=a,He.T=i}}t.current=e,zt=2}}function Eh(){if(zt===2){zt=0;var t=Ri,e=Vr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=He.T,He.T=null;var i=ht.p;ht.p=2;var a=dt;dt|=4;try{xy(t,e.alternate,e)}finally{dt=a,ht.p=i,He.T=n}}zt=3}}function Th(){if(zt===4||zt===3){zt=0;var t=zs;zs=null,$M();var e=Ri,n=Vr,i=Wi,a=Ly,r=(i&335544064)===i?10262:10256;if(n.subtreeFlags&r||n.flags&r?zt=5:(zt=0,Vr=Ri=null,Vy(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(er=null),Hp(i),n=n.stateNode,ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Rl,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=He.T,r=ht.p,ht.p=2,He.T=null;try{for(var s=e.onRecoverableError,o=0;o<a.length;o++){var l=a[o];s(l.value,{componentStack:l.stack})}}finally{He.T=n,ht.p=r}}if(a=Fs,s=Bs,Bs=null,a!==null&&(Fs=null,s===null&&(s=[]),t!==null))for(l=0;l<a.length;l++)n=(0,a[l])(s),n!==void 0&&t.finished.finally(n);Wi&3&&cf(),Qi(e),r=e.pendingLanes,i&261930&&r&42?e===Wc?Qo++:(Qo=0,Wc=e):(Qo=0,Wc=null),Pl(0)}}function Vy(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ul(e)))}function cf(){return zs!==null&&(zs.skipTransition(),zs=null),bh(),Eh(),Th(),Ah()}function Ah(){if(zt!==5)return!1;var t=Ri,e=Sh;Sh=0;var n=Hp(Wi),i=He.T,a=ht.p;try{ht.p=32>n?32:n,He.T=null,n=Mh,Mh=null;var r=Ri,s=Wi;if(zt=0,Vr=Ri=null,Wi=0,dt&6)throw Error(ae(331));var o=dt;if(dt|=4,Dy(r.current),Ry(r,r.current,s,n),dt=o,Pl(0,!1),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Rl,r)}catch{}return!0}finally{ht.p=a,He.T=i,Vy(t,e)}}function Rg(t,e,n){e=di(n,e),e=rh(t.stateNode,e,2),t=Qa(t,e,2),t!==null&&(wl(t,2),Qi(t))}function Mt(t,e,n){if(t.tag===3)Rg(t,t,n);else for(;e!==null;){if(e.tag===3){Rg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=di(n,t),n=iy(2),i=Qa(e,n,2),i!==null&&(ay(n,i,e,t),wl(i,2),Qi(i));break}}e=e.return}}function Vf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new NE;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(bm=!0,a.add(n),t=BE.bind(null,t,e,n),e.then(t,t))}function BE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Tt===t&&(it&n)===n&&(Gt===4||Gt===3&&(it&62914560)===it&&300>$n()-sf?dt&2?Tu|=n:Ys(t,0):Tu|=n,Xs===it&&(Xs=0)),Qi(t)}function ky(t,e){e===0&&(e=Lx()),t=Zr(t,e),t!==null&&(wl(t,e),Qi(t))}function HE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ky(t,n)}function GE(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(ae(314))}i!==null&&i.delete(e),ky(t,n)}function VE(t,e){return Fp(t,e)}var Zs=null,ms=null,Rh=!1,wu=!1,kf=!1,Wa=0;function Qi(t){t!==ms&&t.next===null&&(ms===null?Zs=ms=t:ms=ms.next=t),wu=!0,Rh||(Rh=!0,jE())}function Pl(t,e){if(!kf&&wu){kf=!0;do for(var n=!1,i=Zs;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-ti(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Cg(i,r))}else r=it,r=Wu(i,i===Tt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Cl(i,r)||(n=!0,Cg(i,r));i=i.next}while(n);kf=!1}}function kE(){jy()}function jy(){wu=Rh=!1;var t=0;Wa!==0&&tT()&&(t=Wa);for(var e=$n(),n=null,i=Zs;i!==null;){var a=i.next,r=Wy(i,e);r===0?(i.next=null,n===null?Zs=a:n.next=a,a===null&&(ms=n)):(n=i,(t!==0||r&3)&&(wu=!0)),i=a}zt!==0&&zt!==5||Pl(t),Wa!==0&&(Wa=0)}function Wy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-ti(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=ob(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=Tt,n=it,n=Wu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(yt===2||yt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&yf(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Cl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&yf(i),Hp(n)){case 2:case 8:n=Dx;break;case 32:n=ou;break;case 268435456:n=Nx;break;default:n=ou}return i=Xy.bind(null,t),n=Fp(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&yf(i),t.callbackPriority=2,t.callbackNode=null,2}function Xy(t,e){if(zt!==0&&zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(cf()&&t.callbackNode!==n)return null;var i=it;return i=Wu(t,t===Tt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Py(t,i,e),Wy(t,$n()),t.callbackNode!=null&&t.callbackNode===n?Xy.bind(null,t):null)}function Cg(t,e){if(cf())return null;Py(t,e,!0)}function jE(){iT(function(){dt&6?Fp(wx,kE):jy()})}function Tm(){if(Wa===0){var t=Fr;t===0&&(t=Wl,Wl<<=1,!(Wl&261888)&&(Wl=256)),Wa=t}return Wa}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Lc(t)}function WE(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=wg((a[jn]||null).action),s=i.submitter;s&&(e=(e=s[jn]||null)?wg(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new qu("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Wa!==0){var l=new FormData(a,s);ih(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=new FormData(a,s),ih(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var jf=0;jf<Xd.length;jf++){var Wf=Xd[jf],XE=Wf.toLowerCase(),qE=Wf[0].toUpperCase()+Wf.slice(1);Ci(XE,"on"+qE)}Ci(a_,"onAnimationEnd");Ci(r_,"onAnimationIteration");Ci(s_,"onAnimationStart");Ci("dblclick","onDoubleClick");Ci("focusin","onFocus");Ci("focusout","onBlur");Ci(nE,"onTransitionRun");Ci(iE,"onTransitionStart");Ci(aE,"onTransitionCancel");Ci(o_,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function qy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){cu(d)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){cu(d)}a.currentTarget=null,r=l}}}}function Qe(t,e){var n=e[E0];n===void 0&&(n=e[E0]=new Set);var i=t+"__bubble";n.has(i)||(Yy(e,t,2,!1),n.add(i))}function Xf(t,e,n){var i=0;e&&(i|=4),Yy(n,t,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Am(t){if(!t[ac]){t[ac]=!0,Bx.forEach(function(n){n!=="selectionchange"&&(YE.has(n)||Xf(n,!1,t),Xf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ac]||(e[ac]=!0,Xf("selectionchange",!1,e))}}function Yy(t,e,n,i){switch(vS(e)){case 2:var a=HT;break;case 8:a=GT;break;default:a=Lm}n=a.bind(null,e,n,t),a=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function qf(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Rr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}qx(function(){var c=r,d=Vp(n),p=[];e:{var u=l_.get(t);if(u!==void 0){var h=qu,_=t;switch(t){case"keypress":if(Pc(n)===0)break e;case"keydown":case"keyup":h=Ub;break;case"focusin":_="focus",h=Af;break;case"focusout":_="blur",h=Af;break;case"beforeblur":case"afterblur":h=Af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=U0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=yb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=zb;break;case a_:case r_:case s_:h=bb;break;case o_:h=Bb;break;case"scroll":case"scrollend":h=xb;break;case"wheel":h=Gb;break;case"copy":case"cut":case"paste":h=Tb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=O0;break;case"submit":h=Pb;break;case"toggle":case"beforetoggle":h=kb}var M=(e&4)!==0,v=!M&&(t==="scroll"||t==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,y;m!==null;){var S=m;if(y=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||y===null||f===null||(S=rl(m,f),S!=null&&M.push(pl(m,S,y))),v)break;m=m.return}0<M.length&&(u=new h(u,_,null,n,d),p.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",u=t==="mouseout"||t==="pointerout",h&&n!==Gd&&(_=n.relatedTarget||n.fromElement)&&(Rr(_)||_[so]))break e;(u||h)&&(_=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,u?(h=n.relatedTarget||n.toElement,u=c,h=h?Rr(h):null,h!==null&&(v=Al(h),M=h.tag,h!==v||M!==5&&M!==27&&M!==6)&&(h=null)):(u=null,h=c),u!==h&&(M=U0,S="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=O0,S="onPointerLeave",f="onPointerEnter",m="pointer"),v=u==null?_:Lo(u),y=h==null?_:Lo(h),_=new M(S,m+"leave",u,n,d),_.target=v,_.relatedTarget=y,S=null,Rr(d)===c&&(M=new M(f,m+"enter",h,n,d),M.target=y,M.relatedTarget=v,S=M),v=S,M=u&&h?wd(u,h,ZE):null,u!==null&&Dg(p,_,u,M,!1),h!==null&&v!==null&&Dg(p,v,h,M,!0)))}e:{if(u=c?Lo(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var R=F0;else if(z0(u))if($x)R=$b;else{R=Qb;var A=Kb}else h=u.nodeName,!h||h.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Gp(c.elementType)&&(R=F0):R=Jb;if(R&&(R=R(t,c))){Jx(p,R,n,d);break e}A&&A(t,u,c)}switch(A=c?Lo(c):window,t){case"focusin":(z0(A)||A.contentEditable==="true")&&(Ms=A,jd=c,Go=null);break;case"focusout":Go=jd=Ms=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,k0(p,n,d);break;case"selectionchange":if(tE)break;case"keydown":case"keyup":k0(p,n,d)}var x;if(Wp)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ss?Kx(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Zx&&n.locale!=="ko"&&(Ss||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ss&&(x=Yx()):(Ga=d,kp="value"in Ga?Ga.value:Ga.textContent,Ss=!0)),A=Du(c,b),0<A.length&&(b=new L0(b,t,null,n,d),p.push({event:b,listeners:A}),x?b.data=x:(x=Qx(n),x!==null&&(b.data=x)))),(x=Wb?Xb(t,n):qb(t,n))&&(b=Du(c,"onBeforeInput"),0<b.length&&(A=new L0("onBeforeInput","beforeinput",null,n,d),p.push({event:A,listeners:b}),A.data=x)),WE(p,t,c,n,d)}qy(p,e)})}function pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Du(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=rl(t,n),a!=null&&i.unshift(pl(t,a,r)),a=rl(t,e),a!=null&&i.push(pl(t,a,r))),t.tag===3)return i;t=t.return}return[]}function ZE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Dg(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=rl(n,r),c!=null&&s.unshift(pl(n,c,l))):a||(c=rl(n,r),c!=null&&s.push(pl(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var KE=/\r\n?/g,QE=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(KE,`
`).replace(QE,"")}function Zy(t,e){return e=Ng(e),Ng(t)===e}function St(t,e,n,i,a,r){switch(n){case"children":if(typeof i=="string")e==="body"||e==="textarea"&&i===""||js(t,i);else if(typeof i=="number"||typeof i=="bigint")e!=="body"&&js(t,""+i);else return;break;case"className":Yl(t,"class",i);break;case"tabIndex":Yl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Yl(t,n,i);break;case"style":Xx(t,i,r);return;case"data":if(e!=="object"){Yl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Lc(i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",a.name,a,null),St(t,e,"formEncType",a.formEncType,a,null),St(t,e,"formMethod",a.formMethod,a,null),St(t,e,"formTarget",a.formTarget,a,null)):(St(t,e,"encType",a.encType,a,null),St(t,e,"method",a.method,a,null),St(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Lc(i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Bi);return;case"onScroll":i!=null&&Qe("scroll",t);return;case"onScrollEnd":i!=null&&Qe("scrollend",t);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ae(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ae(60));(r!=null?r.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Lc(i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),Uc(t,"popover",i);break;case"xlinkActuate":$i(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":$i(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":$i(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":$i(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":$i(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":$i(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":$i(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":$i(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":$i(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Uc(t,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=gb.get(n)||n,Uc(t,n,i);else return}ct=!0}function Ch(t,e,n,i,a,r){switch(n){case"style":Xx(t,i,r);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ae(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ae(60));(r!=null?r.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"children":if(typeof i=="string")js(t,i);else if(typeof i=="number"||typeof i=="bigint")js(t,""+i);else return;break;case"onScroll":i!=null&&Qe("scroll",t);return;case"onScrollEnd":i!=null&&Qe("scrollend",t);return;case"onClick":i!=null&&(t.onclick=Bi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Hx.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),r=n.slice(2,a?n.length-7:void 0),e=t[jn]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(r,e,a),typeof i=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(r,i,a);break e}ct=!0,n in t?t[n]=i:i===!0?t.setAttribute(n,""):Uc(t,n,i)}return}ct=!0}function vn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ae(137,e));default:St(t,e,r,s,n,null)}}a&&St(t,e,"srcSet",n.srcSet,n,null),i&&St(t,e,"src",n.src,n,null);return;case"input":Qe("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ae(137,e));break;default:St(t,e,i,d,n,null)}}kx(t,r,o,l,c,s,a,!1);return;case"select":Qe("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:St(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?Ns(t,!!i,e,!1):n!=null&&Ns(t,!!i,n,!0);return;case"textarea":Qe("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ae(91));break;default:St(t,e,s,o,n,null)}Wx(t,i,a,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:St(t,e,l,i,n,null)}return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(i=0;i<hl.length;i++)Qe(hl[i],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(ae(137,e));default:St(t,e,c,i,n,null)}return;default:if(Gp(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Ch(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&St(t,e,o,i,n,null))}var JE={};function $E(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(h)||St(t,e,h,null,i,p)}}for(var u in i){var h=i[u];if(p=n[u],i.hasOwnProperty(u)&&(h!=null||p!=null))switch(u){case"type":h!==p&&(ct=!0),r=h;break;case"name":h!==p&&(ct=!0),a=h;break;case"checked":h!==p&&(ct=!0),c=h;break;case"defaultChecked":h!==p&&(ct=!0),d=h;break;case"value":h!==p&&(ct=!0),s=h;break;case"defaultValue":h!==p&&(ct=!0),o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ae(137,e));break;default:h!==p&&St(t,e,u,h,i,p)}}Hd(t,s,o,l,c,d,r,a);return;case"select":h=s=o=u=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(r)||St(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":r!==l&&(ct=!0),u=r;break;case"defaultValue":r!==l&&(ct=!0),o=r;break;case"multiple":r!==l&&(ct=!0),s=r;default:r!==l&&St(t,e,a,r,i,l)}e=o,n=s,i=h,u!=null?Ns(t,!!n,u,!1):!!i!=!!n&&(e!=null?Ns(t,!!n,e,!0):Ns(t,!!n,n?[]:"",!1));return;case"textarea":h=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:St(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":a!==r&&(ct=!0),u=a;break;case"defaultValue":a!==r&&(ct=!0),h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(ae(91));break;default:a!==r&&St(t,e,s,a,i,r)}jx(t,u,h);return;case"option":for(var _ in n)if(u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:St(t,e,_,null,i,u)}for(l in i)if(u=i[l],h=n[l],i.hasOwnProperty(l)&&u!==h&&(u!=null||h!=null))switch(l){case"selected":u!==h&&(ct=!0),t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:St(t,e,l,u,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&St(t,e,M,null,i,u);for(c in i)if(u=i[c],h=n[c],i.hasOwnProperty(c)&&u!==h&&(u!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(ae(137,e));break;default:St(t,e,c,u,i,h)}return;default:if(Gp(e)){for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!==void 0&&!i.hasOwnProperty(v)&&Ch(t,e,v,void 0,i,u);for(d in i)u=i[d],h=n[d],!i.hasOwnProperty(d)||u===h||u===void 0&&h===void 0||Ch(t,e,d,u,i,h);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&St(t,e,f,null,i,u);for(p in i)u=i[p],h=n[p],!i.hasOwnProperty(p)||u===h||u==null&&h==null||St(t,e,p,u,i,h)}function Ug(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&Ug(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,p=l.initiatorType;d&&Ug(p)&&(l=l.responseEnd,s+=d*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(r+s)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wh=null,Dh=null;function ml(t){return t.nodeType===9?t:t.ownerDocument}function Lg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ky(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Qy(t,e,n,i){return n=ml(n).createElement(t),n[dn]=i,n[jn]=e,vn(n,t,e),sn(n),n}function Nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=null;function tT(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var Rm=typeof setTimeout=="function"?setTimeout:void 0,nT=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,Pg=typeof requestAnimationFrame=="function"?requestAnimationFrame:Rm,iT=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(t){return Og.resolve(null).then(t).catch(aT)}:Rm;function aT(t){setTimeout(function(){throw t})}function dr(t){return t==="head"}function Ig(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),eo(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Kf(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Kf(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[Dl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&Kf(t.ownerDocument.body);n=a}while(n);eo(e)}function zg(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Jy(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var i=1;else for(var a=i=0;a<e.length;a++){var r=e[a];0<r.width&&0<r.height&&i++}i===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function $y(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function rT(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function Uh(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return rT(e,n,t)}function sT(t){return t.documentElement.clientHeight}function oT(t){this.addEventListener("load",t),this.addEventListener("error",t)}function lT(t,e,n,i,a,r,s,o,l){var c=e.nodeType===9?e:e.ownerDocument;try{var d=c.startViewTransition({update:function(){var u=c.defaultView,h=u.navigation&&u.navigation.transition,_=c.fonts.status;i();var M=[];if(_==="loaded"&&(sT(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),_=M.length,t!==null)for(var v=t.suspenseyImages,f=0,m=0;m<v.length;m++){var y=v[m];if(!y.complete){var S=y.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<u.innerHeight&&S.left<u.innerWidth){if(f+=fS(y),f>Yc){M.length=_;break}y=new Promise(oT.bind(y)),M.push(y)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(R){return setTimeout(R,500)})]).then(a,a),(h?Promise.allSettled([h.finished,u]):u).then(r,r);if(a(),h)return h.finished.then(r,r);r()},types:n});c.__reactViewTransition=d;var p=[];return d.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),h=0;h<u.length;h++){var _=u[h],M=_.effect,v=M.pseudoElement;if(v!=null&&v.startsWith("::view-transition")){p.push(_),_=M.getKeyframes();for(var f=v=void 0,m=!0,y=0;y<_.length;y++){var S=_[y],R=S.width;if(v===void 0)v=R;else if(v!==R){m=!1;break}if(R=S.height,f===void 0)f=R;else if(f!==R){m=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}m&&v!==void 0&&f!==void 0&&(M.setKeyframes(_),m=getComputedStyle(M.target,M.pseudoElement),m.width!==v||m.height!==f)&&(m=_[0],m.width=v,m.height=f,m=_[_.length-1],m.width=v,m.height=f,M.setKeyframes(_))}}s()},function(u){c.__reactViewTransition===d&&(c.__reactViewTransition=null);try{if(typeof u=="object"&&u!==null)switch(u.name){case"InvalidStateError":(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null)}u!==null&&l(u)}finally{i(),a(),s()}}),d.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===d&&(c.__reactViewTransition=null),o()}),d}catch{return i(),a(),s(),null}}function Cr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Cr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:At({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};Cr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var r=n[a].effect;r!==null&&r.target===t&&r.pseudoElement===e&&i.push(n[a])}return i};Cr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function eS(t){return{name:t,group:new Cr("group",t),imagePair:new Cr("image-pair",t),old:new Cr("old",t),new:new Cr("new",t)}}function ai(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ai.prototype.addEventListener=function(t,e,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(tS(r,t,e,n)===-1){var s=this,o=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){s.removeEventListener(t,e,n),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),i!==null&&(a=s.removeEventListener.bind(s,t,e,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=Ks(n),r.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),kn(this._fragmentFiber.child,!1,cT,t,o,i)}this._eventListeners=r}};function cT(t,e,n,i){return Kt(t).addEventListener(e,n,i),!1}ai.prototype.removeEventListener=function(t,e,n){var i=this._eventListeners;if(i!==null&&(e=tS(i,t,e,n),e!==-1)){var a=i[e];n=a.attachedListener;var r=a.cleanup;a=Ks(a.optionsOrUseCapture),kn(this._fragmentFiber.child,!1,uT,t,n,a),i.splice(e,1),r!==null&&r()}};function uT(t,e,n,i){return Kt(t).removeEventListener(e,n,i),!1}function Ks(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Fg(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function tS(t,e,n,i){if(t.length===0)return-1;i=Fg(i);for(var a=0;a<t.length;a++){var r=t[a];if(r.type===e&&r.listener===n&&Fg(r.optionsOrUseCapture)===i)return a}return-1}ai.prototype.dispatchEvent=function(t){var e=Xr(this._fragmentFiber);if(e===null)return!0;e=Kt(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var i=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var r=n[a];i.addEventListener(r.type,r.attachedListener,Ks(r.optionsOrUseCapture))}if(e.appendChild(i),t=i.dispatchEvent(t),n)for(a=0;a<n.length;a++)r=n[a],i.removeEventListener(r.type,r.attachedListener,Ks(r.optionsOrUseCapture));return e.removeChild(i),t}return e.dispatchEvent(t)};ai.prototype.focus=function(t){kn(this._fragmentFiber.child,!0,nS,t,void 0,void 0)};function nS(t,e){return t.tag===6?!1:(t=Kt(t),MT(t,e))}ai.prototype.focusLast=function(t){var e=[];kn(this._fragmentFiber.child,!0,Cm,e,void 0,void 0);for(var n=e.length-1;0<=n&&!nS(e[n],t);n--);};function Cm(t,e){return e.push(t),!1}ai.prototype.blur=function(){var t=Xr(this._fragmentFiber);t!==null&&(t=Kt(t),t=ml(t).activeElement,t!==null&&kn(this._fragmentFiber.child,!1,fT,t,void 0,void 0))};function fT(t,e){return t.tag===6?!1:(t=Kt(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ai.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),kn(this._fragmentFiber.child,!1,dT,t,void 0,void 0)};function dT(t,e){return t.tag===6||(t=Kt(t),e.observe(t)),!1}ai.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),kn(this._fragmentFiber.child,!1,hT,t,void 0,void 0);for(var n=e=0;n<Ti.length;n++){var i=Ti[n];i.fragmentInstance===this&&i.observer===t?t.unobserve(i.instance):Ti[e++]=i}Ti.length=e}};function hT(t,e){return t.tag===6||(t=Kt(t),e.unobserve(t)),!1}var Ti=[],Zf=!1;function pT(t,e,n){Ti.push({fragmentInstance:t,observer:e,instance:n}),Zf||(Zf=!0,bT(function(){Zf=!1;var i=Ti;Ti=[];for(var a=0;a<i.length;a++){var r=i[a];r.observer.unobserve(r.instance)}}))}ai.prototype.getClientRects=function(){var t=[];return kn(this._fragmentFiber.child,!1,mT,t,void 0,void 0),t};function mT(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=Kt(t),e.push.apply(e,t.getClientRects());return!1}ai.prototype.getRootNode=function(t){var e=Xr(this._fragmentFiber);return e===null?this:Kt(e).getRootNode(t)};ai.prototype.compareDocumentPosition=function(t){var e=Xr(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];kn(this._fragmentFiber.child,!1,Cm,n,void 0,void 0);var i=Kt(e);if(n.length===0){if(n=i,x0(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var a=i=n.compareDocumentPosition(t);return n===t?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Tx(e)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(t=Kt(n).compareDocumentPosition(t),a=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=Kt(n[0]),a=Kt(n[n.length-1]);var r=x0(this._fragmentFiber)?e.parentElement:i;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),o=a.compareDocumentPosition(t),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=i&&e===t||r&&a===t||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&e===t||!r&&a===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||gT(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function gT(t,e,n,i,a){var r=Rr(a);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){n=!0;break e}r=r.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=a.ownerDocument,a===r||a===r.documentElement||a===r.body;e:{for(r=e,e=Xr(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break e}r=r.return}r=!1}return r}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===n)&&(e=wd(n,r,_0),e===null?e=!1:(kn(e,!0,jM,r,n),r=vs,vs=null,e=r!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===i)&&(e=wd(i,r,_0),e===null?e=!1:(kn(e,!0,WM,r,i),r=vs,Cd=vs=null,e=r!==null)),e):!1}function Bg(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ai.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(ae(566));var e=[];kn(this._fragmentFiber.child,!1,Cm,e,void 0,void 0);var n=t!==!1;if(e.length===0){var i=Tx(this._fragmentFiber);if(i=n?i[1]||i[0]||Xr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){t=Kt(i),Bg(t,n);return}if(i=Kt(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(t);return}i.scrollIntoView(t)}}for(i=n?e.length-1:0;i!==(n?-1:e.length);){var a=e[i];a.tag===6?(a=Kt(a),Bg(a,n)):Kt(a).scrollIntoView(t),i+=n?-1:1}};function vT(t,e){return t=Kt(t),iS(t,e),!1}function iS(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function aS(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.addEventListener(a.type,a.attachedListener,Ks(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(r){for(var s=0,o=0;o<Ti.length;o++){var l=Ti[o];(l.fragmentInstance!==e||l.observer!==r||l.instance!==t)&&(Ti[s++]=l)}Ti.length=s,r.observe(t)}),iS(t,e))}function xT(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.removeEventListener(a.type,a.attachedListener,Ks(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(r){typeof r.rootMargin=="string"?pT(e,r,t):r.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Lh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Lh(n),Xu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function _T(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Dl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function yT(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function rS(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=pi(t.nextSibling),t===null))return null;return t}function Oh(t){return t.data==="$?"||t.data==="$~"}function wm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ST(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ph=null;function Hg(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return pi(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function MT(t,e){function n(){i=!0}if(t.ownerDocument.activeElement===t)return!0;var i=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return i}function bT(t){Pg(function(){Pg(function(e){return t(e)})})}function sS(t,e,n){switch(e=ml(n),t){case"html":if(t=e.documentElement,!t)throw Error(ae(452));return t;case"head":if(t=e.head,!t)throw Error(ae(453));return t;case"body":if(t=e.body,!t)throw Error(ae(454));return t;default:throw Error(ae(451))}}function oS(t,e,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&St(t,e,i,null,JE,a)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Bi&&(t.onclick=null),Xu(t)}function Kf(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Xu(t)}var mi=new Map,Vg=new Set;function gl(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var ba=ht.d;ht.d={f:ET,r:TT,D:AT,C:RT,L:CT,m:wT,X:NT,S:DT,M:UT};function ET(){var t=ba.f(),e=of();return t||e}function TT(t){var e=oo(t);e!==null&&e.tag===5&&e.type==="form"?X_(e):ba.r(t)}var fo=typeof document>"u"?null:document;function lS(t,e,n){var i=fo;if(i&&typeof e=="string"&&e){var a=fi(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Vg.has(a)||(Vg.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),vn(e,"link",t),sn(e),i.head.appendChild(e)))}}function AT(t){ba.D(t),lS("dns-prefetch",t,null)}function RT(t,e){ba.C(t,e),lS("preconnect",t,e)}function CT(t,e,n){ba.L(t,e,n);var i=fo;if(i&&t&&e){var a='link[rel="preload"][as="'+fi(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+fi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+fi(n.imageSizes)+'"]')):a+='[href="'+fi(t)+'"]';var r=a;switch(e){case"style":r=Qs(t);break;case"script":r=ho(t)}if(!(mi.has(r)||(t=At({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),mi.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Il(r))||e==="script"&&i.querySelector(zl(r))))){var s=i.createElement("link");vn(s,"link",t),e==="style"&&(s[lu]=!0,s.onload=s.onerror=function(){Fx(s)}),sn(s),i.head.appendChild(s)}}}function wT(t,e){ba.m(t,e);var n=fo;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+fi(i)+'"][href="'+fi(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ho(t)}if(!mi.has(r)&&(t=At({rel:"modulepreload",href:t},e),mi.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(zl(r)))return}i=n.createElement("link"),vn(i,"link",t),sn(i),n.head.appendChild(i)}}}function DT(t,e,n){ba.S(t,e,n);var i=fo;if(i&&t){var a=Ds(i).hoistableStyles,r=Qs(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Il(r)))o.loading=5;else{t=At({rel:"stylesheet",href:t,"data-precedence":e},n),(n=mi.get(r))&&Dm(t,n);var l=s=i.createElement("link");sn(l),vn(l,"link",t),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Xc(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function NT(t,e){ba.X(t,e);var n=fo;if(n&&t){var i=Ds(n).hoistableScripts,a=ho(t),r=i.get(a);r||(r=n.querySelector(zl(a)),r||(t=At({src:t,async:!0},e),(e=mi.get(a))&&Nm(t,e),r=n.createElement("script"),sn(r),vn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function UT(t,e){ba.M(t,e);var n=fo;if(n&&t){var i=Ds(n).hoistableScripts,a=ho(t),r=i.get(a);r||(r=n.querySelector(zl(a)),r||(t=At({src:t,async:!0,type:"module"},e),(e=mi.get(a))&&Nm(t,e),r=n.createElement("script"),sn(r),vn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function kg(t,e,n,i){var a=(a=Ya.current)?gl(a):null;if(!a)throw Error(ae(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Qs(n.href),e=Ds(a).hoistableStyles,i=e.get(n),i||(i={type:"style",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Qs(n.href);var r=Ds(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(Il(t)))?r._p||(s.instance=r,s.state.loading=5):(r=mi.get(t),r||(r={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mi.set(t,r)),LT(a,t,r,s.state))),e&&i===null)throw Error(ae(528,""));return s}if(e&&i!==null)throw Error(ae(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=ho(n),e=Ds(a).hoistableScripts,i=e.get(n),i||(i={type:"script",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(ae(444,t))}}function Qs(t){return'href="'+fi(t)+'"'}function Il(t){return'link[rel="stylesheet"]['+t+"]"}function cS(t){return At({},t,{"data-precedence":t.precedence,precedence:null})}function LT(t,e,n,i){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[lu]!==!0){i.loading=1;return}}else e=t.createElement("link"),e[lu]=!0,e.onload=e.onerror=Fx.bind(null,e),vn(e,"link",n),sn(e),t.head.appendChild(e);i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2})}function ho(t){return'[src="'+fi(t)+'"]'}function zl(t){return"script[async]"+t}function jg(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+fi(n.href)+'"]');if(i)return e.instance=i,sn(i),i;var a=At({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),sn(i),vn(i,"style",a),Xc(i,n.precedence,t),e.instance=i;case"stylesheet":a=Qs(n.href);var r=t.querySelector(Il(a));if(r)return e.state.loading|=4,e.instance=r,sn(r),r;i=cS(n),(a=mi.get(a))&&Dm(i,a),r=(t.ownerDocument||t).createElement("link"),sn(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),vn(r,"link",i),e.state.loading|=4,Xc(r,n.precedence,t),e.instance=r;case"script":return r=ho(n.src),(a=t.querySelector(zl(r)))?(e.instance=a,sn(a),a):(i=n,(a=mi.get(r))&&(i=At({},n),Nm(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),sn(a),vn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(ae(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Xc(i,n.precedence,t));return e.instance}function Xc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Dm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Nm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var qc=null;function Wg(t,e,n){if(qc===null){var i=new Map,a=qc=new Map;a.set(n,i)}else a=qc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[Dl]||r[dn]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Ih(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function OT(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Xg(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function uS(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function fS(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function qg(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=fS(e),t.suspenseyImages.push(e)),t=zT.bind(t),e.decode().then(t,t))}function PT(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Qs(i.href),r=e.querySelector(Il(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=vl.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,sn(r);return}r=e.ownerDocument||e,i=cS(i),(a=mi.get(a))&&Dm(i,a),r=r.createElement("link"),sn(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),vn(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=vl.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Yc=0;function IT(t,e){return t.stylesheets&&t.count===0&&Zc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Zc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&Yc===0&&(Yc=62500*eT());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Zc(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>Yc?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function dS(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Zc(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function vl(){this.count--,dS(this)}function zT(){this.imgCount--,dS(this)}var Nu=null;function Zc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nu=new Map,e.forEach(FT,t),Nu=null,vl.call(t))}function FT(t,e){if(!(e.state.loading&4)){var n=Nu.get(t);if(n)var i=n.get(null);else{n=new Map,Nu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=vl.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Js={$$typeof:Fi,Provider:null,Consumer:null,_currentValue:wr,_currentValue2:wr,_threadCount:0};function BT(t,e,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sf(0),this.hiddenUpdates=Sf(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function hS(t,e,n,i,a,r,s,o,l,c,d,p){return t=new BT(t,e,n,s,l,c,d,p,o),e=1,r===!0&&(e|=24),r=Bn(3,null,null,e),t.current=r,r.stateNode=t,e=Qp(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},em(r),t}function pS(t){return t?(t=Ts,t):Ts}function mS(t,e,n,i,a,r){a=pS(a),i.context===null?i.context=a:i.pendingContext=a,i=Ka(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Qa(t,i,e),n!==null&&(Gn(n,t,e),ko(n,t,e))}function Yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Um(t,e){Yg(t,e),(t=t.alternate)&&Yg(t,e)}function gS(t){if(t.tag===13||t.tag===31){var e=Zr(t,67108864);e!==null&&Gn(e,t,67108864),Um(t,67108864)}}function Zg(t){if(t.tag===13||t.tag===31){var e=ni();e=Bp(e);var n=Zr(t,e);n!==null&&Gn(n,t,e),Um(t,e)}}var $s=!0;function HT(t,e,n,i){var a=He.T;He.T=null;var r=ht.p;try{ht.p=2,Lm(t,e,n,i)}finally{ht.p=r,He.T=a}}function GT(t,e,n,i){var a=He.T;He.T=null;var r=ht.p;try{ht.p=8,Lm(t,e,n,i)}finally{ht.p=r,He.T=a}}function Lm(t,e,n,i){if($s){var a=zh(i);if(a===null)qf(t,e,i,Uu,n),Kg(t,i);else if(kT(a,t,e,n,i))i.stopPropagation();else if(Kg(t,i),e&4&&-1<VT.indexOf(t)){for(;a!==null;){var r=oo(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Er(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-ti(s);o.entanglements[1]|=l,s&=~l}Qi(r),!(dt&6)&&(Au=$n()+500,Pl(0))}}break;case 31:case 13:o=Zr(r,2),o!==null&&Gn(o,r,2),of(),Um(r,2)}if(r=zh(i),r===null&&qf(t,e,i,Uu,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else qf(t,e,i,null,n)}}function zh(t){return t=Vp(t),Om(t)}var Uu=null;function Om(t){if(Uu=null,t=Rr(t),t!==null){var e=Al(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Mx(e),t!==null)return t;t=null}else if(n===31){if(t=bx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Uu=t,null}function vS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eb()){case wx:return 2;case Dx:return 8;case ou:case tb:return 32;case Nx:return 268435456;default:return 32}default:return 32}}var Fh=!1,tr=null,nr=null,ir=null,xl=new Map,_l=new Map,Fa=[],VT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":xl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(e.pointerId)}}function Eo(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=oo(e),e!==null&&gS(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function kT(t,e,n,i,a){switch(e){case"focusin":return tr=Eo(tr,t,e,n,i,a),!0;case"dragenter":return nr=Eo(nr,t,e,n,i,a),!0;case"mouseover":return ir=Eo(ir,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return xl.set(r,Eo(xl.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,_l.set(r,Eo(_l.get(r)||null,t,e,n,i,a)),!0}return!1}function xS(t){var e=Rr(t.target);if(e!==null){var n=Al(e);if(n!==null){if(e=n.tag,e===13){if(e=Mx(n),e!==null){t.blockedOn=e,b0(t.priority,function(){Zg(n)});return}}else if(e===31){if(e=bx(n),e!==null){t.blockedOn=e,b0(t.priority,function(){Zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gd=i,n.target.dispatchEvent(i),Gd=null}else return e=oo(n),e!==null&&gS(e),t.blockedOn=n,!1;e.shift()}return!0}function Qg(t,e,n){Kc(t)&&n.delete(e)}function jT(){Fh=!1,tr!==null&&Kc(tr)&&(tr=null),nr!==null&&Kc(nr)&&(nr=null),ir!==null&&Kc(ir)&&(ir=null),xl.forEach(Qg),_l.forEach(Qg)}function rc(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,jT)))}var sc=null;function Jg(t){sc!==t&&(sc=t,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,function(){sc===t&&(sc=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Om(i||n)===null)continue;break}var r=oo(n);r!==null&&(t.splice(e,3),e-=3,ih(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function eo(t){function e(l){return rc(l,t)}tr!==null&&rc(tr,t),nr!==null&&rc(nr,t),ir!==null&&rc(ir,t),xl.forEach(e),_l.forEach(e);for(var n=0;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Fa.length&&(n=Fa[0],n.blockedOn===null);)xS(n),n.blockedOn===null&&Fa.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[jn]||null;if(typeof r=="function")s||Jg(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[jn]||null)o=s.formAction;else if(Om(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Jg(n)}}}function _S(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Pm(t){this._internalRoot=t}uf.prototype.render=Pm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));var n=e.current,i=ni();mS(n,i,t,e,null,null)};uf.prototype.unmount=Pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mS(t.current,2,null,t,null,null),of(),e[so]=null}};function uf(t){this._internalRoot=t}uf.prototype.unstable_scheduleHydration=function(t){if(t){var e=zx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fa.length&&e!==0&&e<Fa[n].priority;n++);Fa.splice(n,0,t),n===0&&xS(t)}};var $g=yx.version;if($g!=="19.3.1")throw Error(ae(527,$g,"19.3.1"));ht.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=kM(e),t=t!==null?Ex(t):null,t=t===null?null:t.stateNode,t};var WT={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:He,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{Rl=oc.inject(WT),ei=oc}catch{}}ku.createRoot=function(t,e){if(!Sx(t))throw Error(ae(299));var n=!1,i="",a=ey,r=ty,s=ny;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=hS(t,1,!1,null,null,n,i,null,a,r,s,_S),t[so]=e.current,Am(t),new Pm(e)};ku.hydrateRoot=function(t,e,n){if(!Sx(t))throw Error(ae(299));var i=!1,a="",r=ey,s=ty,o=ny,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=hS(t,1,!0,e,n??null,i,a,l,r,s,o,_S),e.context=pS(null),n=e.current,i=ni(),i=Bp(i),a=Ka(i),a.callback=null,Qa(n,a,i),n=i,e.current.lanes=n,wl(e,n),Qi(e),t[so]=e.current,Am(t),new uf(e)};ku.version="19.3.1";function yS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yS)}catch(t){console.error(t)}}yS(),px.exports=ku;var XT=px.exports;/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function YT(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:qT(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=t=>{const e=ZT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Qf(t){return t!=null}function QT(t,e={}){var u,h;const n=e.attributeNames??{},i=_=>n[_]??_,a=t.size??t.width??_r.width,r=t.size??t.height??_r.height,s=((u=t.aliases)==null?void 0:u.filter(_=>typeof _=="string"&&_.trim()!=="").map(_=>`lucide-${_}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...s],l=((h=e.className)==null?void 0:h.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?Bh(...l):Bh("lucide",...o,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??_r["stroke-width"])*Number(t.size??t.width??_r.width)/Number(e.size??e.width??_r.width):e.strokeWidth??_r["stroke-width"];return["svg",{...Object.entries(_r).reduce((_,[M,v])=>(_[i(M)]=v,_),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Qf(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Qf(e.width)&&{[i("width")]:e.width},..."height"in e&&Qf(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:d,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${a} ${r}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(_=>{const[M,v,f]=_,m=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...v}:v;return f?[M,m,f]:[M,m]})]}/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function JT(t,e={}){return QT(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},e2=Ue.createContext({}),t2=()=>Ue.useContext(e2),n2=Ue.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:a,absoluteStrokeWidth:r,nonScalingStroke:s,className:o="",children:l,iconNode:c=[],icon:d={node:c,aliases:[],size:24},...p},u)=>{const{size:h=24,strokeWidth:_=2,absoluteStrokeWidth:M=!1,nonScalingStroke:v=!1,color:f="currentColor",className:m=""}=t2()??{},y=!!l||$T(p),[S,R,A=[]]=JT(d,{color:t??f,width:n??e??h,height:i??e??h,strokeWidth:a??_,absoluteStrokeWidth:r??M,nonScalingStroke:s??v,className:Bh(m,o),hasA11yProp:y,attributes:p});return Ue.createElement(S,{ref:u,...R},[...A.map(([x,b])=>Ue.createElement(x,b)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function je(t,e=[],n=[]){const i=typeof t=="string"?YT(t,e,n):t,a=Ue.forwardRef(({className:r,...s},o)=>Ue.createElement(n2,{ref:o,icon:i,className:r,...s}));return i.name&&(a.displayName=KT(i.name)),a}/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};SS.node;const i2=je(SS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};MS.node;const bS=je(MS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};ES.node;const a2=je(ES);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};TS.node;const r2=je(TS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};AS.node;const s2=je(AS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};RS.node;const o2=je(RS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};CS.node;const Jo=je(CS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};wS.node;const DS=je(wS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};NS.node;const l2=je(NS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};US.node;const c2=je(US);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};LS.node;const u2=je(LS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};OS.node;const ev=je(OS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};PS.node;const f2=je(PS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};IS.node;const d2=je(IS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS={name:"folder-git-2",size:24,node:[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]};zS.node;const h2=je(zS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS={name:"git-branch",size:24,node:[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]};FS.node;const p2=je(FS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};BS.node;const HS=je(BS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};GS.node;const m2=je(GS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};VS.node;const g2=je(VS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};kS.node;const jS=je(kS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};WS.node;const v2=je(WS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};XS.node;const x2=je(XS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS={name:"mic-off",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]]};qS.node;const _2=je(qS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS={name:"mic",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]};YS.node;const y2=je(YS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS={name:"monitor",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]};ZS.node;const S2=je(ZS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS={name:"mouse",size:24,node:[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]};KS.node;const M2=je(KS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};QS.node;const b2=je(QS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS={name:"pen",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-2"]};JS.node;const E2=je(JS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};$S.node;const T2=je($S);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};e1.node;const Jf=je(e1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};t1.node;const A2=je(t1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};n1.node;const tv=je(n1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};i1.node;const R2=je(i1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};a1.node;const r1=je(a1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};s1.node;const o1=je(s1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};l1.node;const hr=je(l1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};c1.node;const u1=je(c1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};f1.node;const lc=je(f1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};d1.node;const Hh=je(d1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};h1.node;const C2=je(h1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};p1.node;const w2=je(p1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1={name:"workflow",size:24,node:[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]};m1.node;const D2=je(m1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};g1.node;const Lu=je(g1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};v1.node;const Im=je(v1),nv=["01 // INTRO","02 // ABOUT","03 // SKILLS","04 // WORKS","05 // SERVICES","06 // CONTACT"];function N2({currentSection:t,totalSections:e,onSelectSection:n,onNext:i,onPrev:a,onOpenAdmin:r,isGuideEnabled:s,onToggleGuide:o}){return g.jsxs(g.Fragment,{children:[g.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,height:"70px",zIndex:40,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 36px",background:"linear-gradient(180deg, rgba(5,5,7,0.85) 0%, rgba(5,5,7,0) 100%)",backdropFilter:"blur(12px)",pointerEvents:"auto"},children:[g.jsxs("div",{onClick:()=>n(0),style:{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer"},children:[g.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",color:"#050505",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-heading)",fontWeight:900,fontSize:"0.95rem",boxShadow:"0 0 20px rgba(255, 255, 255, 0.3)"},children:"SR"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"0.92rem",color:"#ffffff",letterSpacing:"0.04em"},children:"SATYAM RAJPOOT"}),g.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.64rem",color:"#a1a1aa",display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx("span",{className:"pulse-dot",style:{width:"5px",height:"5px"}}),"CREATIVE WEB DEVELOPER"]})]})]}),g.jsx("nav",{style:{display:"flex",alignItems:"center",gap:"6px",background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"999px",padding:"4px",backdropFilter:"blur(16px)"},className:"hud-nav-tabs",children:nv.map((l,c)=>{const d=t===c;return g.jsx("button",{onClick:()=>n(c),style:{background:d?"#ffffff":"transparent",color:d?"#050505":"#a1a1aa",border:"none",borderRadius:"999px",padding:"6px 14px",fontFamily:"var(--font-mono)",fontSize:"0.72rem",fontWeight:700,cursor:"pointer",transition:"all 0.25s var(--ease-out-expo)",boxShadow:d?"0 0 16px rgba(255,255,255,0.3)":"none"},children:l},c)})}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[g.jsxs("button",{onClick:o,style:{display:"flex",alignItems:"center",gap:"6px",background:s?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.04)",border:"1px solid",borderColor:s?"rgba(255, 255, 255, 0.35)":"rgba(255, 255, 255, 0.12)",borderRadius:"10px",padding:"8px 12px",color:"#ffffff",fontSize:"0.76rem",fontWeight:600,cursor:"pointer",backdropFilter:"blur(12px)",transition:"all 0.25s ease"},title:s?"Turn OFF 3D AI Guide":"Turn ON 3D AI Guide",children:[g.jsx(hr,{size:14,color:s?"#ffffff":"#71717a"}),g.jsxs("span",{children:["3D Guide: ",s?"ON":"OFF"]})]}),g.jsxs("button",{onClick:r,style:{display:"flex",alignItems:"center",gap:"8px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"10px",padding:"8px 14px",color:"#ffffff",fontSize:"0.78rem",fontWeight:600,cursor:"pointer",backdropFilter:"blur(12px)",transition:"all 0.25s ease"},onMouseEnter:l=>l.currentTarget.style.borderColor="rgba(255, 255, 255, 0.35)",onMouseLeave:l=>l.currentTarget.style.borderColor="rgba(255, 255, 255, 0.12)",children:[g.jsx(o1,{size:15,color:"#ffffff"}),g.jsx("span",{children:"Admin"})]})]})]}),g.jsx("div",{style:{position:"fixed",right:"28px",top:"50%",transform:"translateY(-50%)",zIndex:35,display:"flex",flexDirection:"column",alignItems:"center",gap:"14px",pointerEvents:"auto"},children:nv.map((l,c)=>{const d=t===c;return g.jsx("button",{onClick:()=>n(c),title:l,style:{width:d?"10px":"6px",height:d?"24px":"6px",borderRadius:"999px",background:d?"#ffffff":"rgba(255, 255, 255, 0.25)",border:"none",cursor:"pointer",transition:"all 0.3s ease",boxShadow:d?"0 0 10px #ffffff":"none"}},c)})}),g.jsxs("footer",{style:{position:"fixed",bottom:0,left:0,right:0,height:"65px",zIndex:35,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 36px",background:"linear-gradient(0deg, rgba(5,5,7,0.85) 0%, rgba(5,5,7,0) 100%)",pointerEvents:"auto"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",color:"#71717a"},children:[g.jsx(M2,{size:16,color:"#a1a1aa"}),g.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)"},children:"SCROLL TO ADVANCE // 3D SLIDE VIEWPORT"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginRight:"240px"},children:[g.jsx("button",{onClick:a,disabled:t===0,style:{width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",color:t===0?"#52525b":"#ffffff",cursor:t===0?"not-allowed":"pointer"},children:g.jsx(o2,{size:16})}),g.jsx("button",{onClick:i,disabled:t===e-1,style:{width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",color:t===e-1?"#52525b":"#ffffff",cursor:t===e-1?"not-allowed":"pointer"},children:g.jsx(r2,{size:16})})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zm="187",U2=0,iv=1,L2=2,Qc=1,O2=2,Io=3,kr=0,Vn=1,oa=2,Hs=0,$o=1,av=2,rv=3,sv=4,P2=5,gs=100,I2=101,z2=102,F2=103,B2=104,H2=200,G2=201,V2=202,k2=203,x1=204,_1=205,j2=206,W2=207,X2=208,q2=209,Y2=210,Z2=211,K2=212,Q2=213,J2=214,Gh=0,Vh=1,kh=2,yl=3,jh=4,Wh=5,Xh=6,qh=7,y1=0,$2=1,eA=2,ha=0,S1=1,M1=2,b1=3,E1=4,T1=5,A1=6,R1=7,C1=300,to=301,Sl=302,$f=303,ed=304,Yh=1e3,ua=1001,Zh=1002,pn=1003,tA=1004,cc=1005,Hn=1006,td=1007,Xa=1008,Qn=1009,w1=1010,D1=1011,Ml=1012,Fm=1013,Yi=1014,Vi=1015,Zi=1016,Bm=1017,Hm=1018,no=1020,N1=35902,U1=35899,L1=1021,O1=1022,ki=1023,cr=1026,qa=1027,P1=1028,Gm=1029,jr=1030,Vm=1031,km=1033,Jc=33776,$c=33777,eu=33778,tu=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,ep=36196,tp=37492,np=37496,ip=37488,ap=37489,Ou=37490,rp=37491,sp=37808,op=37809,lp=37810,cp=37811,up=37812,fp=37813,dp=37814,hp=37815,pp=37816,mp=37817,gp=37818,vp=37819,xp=37820,_p=37821,yp=36492,Sp=36494,Mp=36495,bp=36283,Ep=36284,Pu=36285,Tp=36286,nA=3200,Ap=0,iA=1,Ba="",li="srgb",Iu="srgb-linear",zu="linear",_t="srgb",nd=7680,aA=519,rA=512,sA=513,oA=514,I1=515,lA=516,cA=517,z1=518,F1=519,uA=35044,ov="300 es",Ai=2e3,bl=2001;function fA(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dA(){const t=Fu("canvas");return t.style.display="block",t}const lv={};function cv(...t){const e="THREE."+t.shift();console.log(e,...t)}function B1(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=B1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=B1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function nu(...t){const e=t.join(" ");e in lv||(lv[e]=!0,Be(...t))}function hA(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const pA={[Gh]:Gh,[kh]:Xh,[jh]:jh,[yl]:Wh,[Vh]:Vh,[Xh]:kh,[qh]:qh,[Wh]:yl};class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uv=1234567;const el=Math.PI/180,El=180/Math.PI;function po(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[t&255]+bn[t>>8&255]+bn[t>>16&255]+bn[t>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[n&63|128]+bn[n>>8&255]+"-"+bn[n>>16&255]+bn[n>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function jm(t,e){return(t%e+e)%e}function mA(t,e,n,i,a){return i+(t-e)*(a-i)/(n-e)}function gA(t,e,n){return t!==e?(n-t)/(e-t):0}function tl(t,e,n){return(1-n)*t+n*e}function vA(t,e,n,i){return tl(t,e,1-Math.exp(-n*i))}function xA(t,e=1){return e-Math.abs(jm(t,e*2)-e)}function _A(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function yA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function SA(t,e){return t+Math.floor(Math.random()*(e-t+1))}function MA(t,e){return t+Math.random()*(e-t)}function bA(t){return t*(.5-Math.random())}function EA(t){t!==void 0&&(uv=t);let e=uv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TA(t){return t*el}function AA(t){return t*El}function RA(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function CA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function H1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function wA(t,e,n,i,a){const r=Math.cos,s=Math.sin,o=r(n/2),l=s(n/2),c=r((e+i)/2),d=s((e+i)/2),p=r((e-i)/2),u=s((e-i)/2),h=r((i-e)/2),_=s((i-e)/2);switch(a){case"XYX":t.set(o*d,l*p,l*u,o*c);break;case"YZY":t.set(l*u,o*d,l*p,o*c);break;case"ZXZ":t.set(l*p,l*u,o*d,o*c);break;case"XZX":t.set(o*d,l*_,l*h,o*c);break;case"YXY":t.set(l*h,o*d,l*_,o*c);break;case"ZYZ":t.set(l*_,l*h,o*d,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Wm(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function G1(t,e){if(e.constructor===Float32Array)return t;const n=Wm(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function V1(t,e){if(e.constructor===Float32Array)return t;const n=Wm(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const uc={DEG2RAD:el,RAD2DEG:El,generateUUID:po,clamp:nt,euclideanModulo:jm,mapLinear:mA,inverseLerp:gA,lerp:tl,damp:vA,pingpong:xA,smoothstep:_A,smootherstep:yA,randInt:SA,randFloat:MA,randFloatSpread:bA,seededRandom:EA,degToRad:TA,radToDeg:AA,isPowerOfTwo:RA,ceilPowerOfTwo:CA,floorPowerOfTwo:H1,setQuaternionFromProperEuler:wA,normalize:V1,denormalize:G1},Qm=class Qm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qm.prototype.isVector2=!0;let at=Qm;class mo{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],u=r[s+0],h=r[s+1],_=r[s+2],M=r[s+3];if(p!==M||l!==u||c!==h||d!==_){let v=l*u+c*h+d*_+p*M;v<0&&(u=-u,h=-h,_=-_,M=-M,v=-v);let f=1-o;if(v<.9995){const m=Math.acos(v),y=Math.sin(m);f=Math.sin(f*m)/y,o=Math.sin(o*m)/y,l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+M*o}else{l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+M*o;const m=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=m,c*=m,d*=m,p*=m}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],p=r[s],u=r[s+1],h=r[s+2],_=r[s+3];return e[n]=o*_+d*p+l*h-c*u,e[n+1]=l*_+d*u+c*p-o*h,e[n+2]=c*_+d*h+o*u-l*p,e[n+3]=d*_-o*p-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),p=o(r/2),u=l(i/2),h=l(a/2),_=l(r/2);switch(s){case"XYZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"YXZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"ZXY":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"ZYX":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"YZX":this._x=u*d*p+c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p-u*h*_;break;case"XZY":this._x=u*d*p-c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p+u*h*_;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],u=i+o+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(s-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(r+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(r-c)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(s-a)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jm=class Jm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*n-r*a),p=2*(r*i-s*n);return this.x=n+l*c+s*p-o*d,this.y=i+l*d+o*c-r*p,this.z=a+l*p+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jm.prototype.isVector3=!0;let Z=Jm;const id=new Z,fv=new mo,$m=class $m{constructor(e,n,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],_=i[8],M=a[0],v=a[3],f=a[6],m=a[1],y=a[4],S=a[7],R=a[2],A=a[5],x=a[8];return r[0]=s*M+o*m+l*R,r[3]=s*v+o*y+l*A,r[6]=s*f+o*S+l*x,r[1]=c*M+d*m+p*R,r[4]=c*v+d*y+p*A,r[7]=c*f+d*S+p*x,r[2]=u*M+h*m+_*R,r[5]=u*v+h*y+_*A,r[8]=u*f+h*S+_*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,u=o*l-d*r,h=c*r-s*l,_=n*p+i*u+a*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=p*M,e[1]=(a*c-d*i)*M,e[2]=(o*i-a*s)*M,e[3]=u*M,e[4]=(d*n-a*l)*M,e[5]=(a*r-o*n)*M,e[6]=h*M,e[7]=(i*l-c*n)*M,e[8]=(s*n-i*r)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return nu("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ad.makeScale(e,n)),this}rotate(e){return nu("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ad.makeRotation(-e)),this}translate(e,n){return nu("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$m.prototype.isMatrix3=!0;let Ge=$m;const ad=new Ge,dv=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DA(){const t={enabled:!0,workingColorSpace:Iu,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===_t&&(a.r=pa(a.r),a.g=pa(a.g),a.b=pa(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_t&&(a.r=Gs(a.r),a.g=Gs(a.g),a.b=Gs(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ba?zu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[s].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Iu]:{primaries:e,whitePoint:i,transfer:zu,toXYZ:dv,fromXYZ:hv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:dv,fromXYZ:hv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),t}const rt=DA();function pa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class NA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{es===void 0&&(es=Fu("canvas")),es.width=e.width,es.height=e.height;const a=es.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=es}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=pa(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pa(n[i]/255)*255):n[i]=pa(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UA=0;class Xm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(rd(a[s].image)):r.push(rd(a[s]))}else r=rd(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?NA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let LA=0;const sd=new Z;class On extends Qr{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,i=ua,a=ua,r=Hn,s=Xa,o=ki,l=Qn,c=On.DEFAULT_ANISOTROPY,d=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=po(),this.name="",this.source=new Xm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case ua:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case ua:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=C1;On.DEFAULT_ANISOTROPY=1;const e0=class e0{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],h=l[5],_=l[9],M=l[2],v=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-M)<.01&&Math.abs(_-v)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+M)<.1&&Math.abs(_+v)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(h+1)/2,R=(f+1)/2,A=(d+u)/4,x=(p+M)/4,b=(_+v)/4;return y>S&&y>R?y<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(y),a=A/i,r=x/i):S>R?S<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(S),i=A/a,r=b/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=x/r,a=b/r),this.set(i,a,r,n),this}let m=Math.sqrt((v-_)*(v-_)+(p-M)*(p-M)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(v-_)/m,this.y=(p-M)/m,this.z=(u-d)/m,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};e0.prototype.isVector4=!0;let Ft=e0;class OA extends Qr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n),this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=new On({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Xm(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends OA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class k1 extends On{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PA extends On{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gu=class Gu{constructor(e,n,i,a,r,s,o,l,c,d,p,u,h,_,M,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,d,p,u,h,_,M,v)}set(e,n,i,a,r,s,o,l,c,d,p,u,h,_,M,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=_,f[11]=M,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),s=1/ts.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const u=s*d,h=s*p,_=o*d,M=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=h+_*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=_+h*c,n[10]=s*l}else if(e.order==="YXZ"){const u=l*d,h=l*p,_=c*d,M=c*p;n[0]=u+M*o,n[4]=_*o-h,n[8]=s*c,n[1]=s*p,n[5]=s*d,n[9]=-o,n[2]=h*o-_,n[6]=M+u*o,n[10]=s*l}else if(e.order==="ZXY"){const u=l*d,h=l*p,_=c*d,M=c*p;n[0]=u-M*o,n[4]=-s*p,n[8]=_+h*o,n[1]=h+_*o,n[5]=s*d,n[9]=M-u*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const u=s*d,h=s*p,_=o*d,M=o*p;n[0]=l*d,n[4]=_*c-h,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=h*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const u=s*l,h=s*c,_=o*l,M=o*c;n[0]=l*d,n[4]=M-u*p,n[8]=_*p+h,n[1]=p,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=h*p+_,n[10]=u-M*p}else if(e.order==="XZY"){const u=s*l,h=s*c,_=o*l,M=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=u*p+M,n[5]=s*d,n[9]=h*p-_,n[2]=_*p-h,n[6]=o*d,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IA,e,zA)}lookAt(e,n,i){const a=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ca.crossVectors(i,Wn),Ca.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ca.crossVectors(i,Wn)),Ca.normalize(),fc.crossVectors(Wn,Ca),a[0]=Ca.x,a[4]=fc.x,a[8]=Wn.x,a[1]=Ca.y,a[5]=fc.y,a[9]=Wn.y,a[2]=Ca.z,a[6]=fc.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],_=i[2],M=i[6],v=i[10],f=i[14],m=i[3],y=i[7],S=i[11],R=i[15],A=a[0],x=a[4],b=a[8],U=a[12],N=a[1],P=a[5],H=a[9],k=a[13],O=a[2],V=a[6],B=a[10],z=a[14],Q=a[3],W=a[7],D=a[11],C=a[15];return r[0]=s*A+o*N+l*O+c*Q,r[4]=s*x+o*P+l*V+c*W,r[8]=s*b+o*H+l*B+c*D,r[12]=s*U+o*k+l*z+c*C,r[1]=d*A+p*N+u*O+h*Q,r[5]=d*x+p*P+u*V+h*W,r[9]=d*b+p*H+u*B+h*D,r[13]=d*U+p*k+u*z+h*C,r[2]=_*A+M*N+v*O+f*Q,r[6]=_*x+M*P+v*V+f*W,r[10]=_*b+M*H+v*B+f*D,r[14]=_*U+M*k+v*z+f*C,r[3]=m*A+y*N+S*O+R*Q,r[7]=m*x+y*P+S*V+R*W,r[11]=m*b+y*H+S*B+R*D,r[15]=m*U+y*k+S*z+R*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],h=e[14],_=e[3],M=e[7],v=e[11],f=e[15],m=l*h-c*u,y=o*h-c*p,S=o*u-l*p,R=s*h-c*d,A=s*u-l*d,x=s*p-o*d;return n*(M*m-v*y+f*S)-i*(_*m-v*R+f*A)+a*(_*y-M*R+f*x)-r*(_*S-M*A+v*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(s*d-o*c)-i*(r*d-o*l)+a*(r*c-s*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],h=e[11],_=e[12],M=e[13],v=e[14],f=e[15],m=n*o-i*s,y=n*l-a*s,S=n*c-r*s,R=i*l-a*o,A=i*c-r*o,x=a*c-r*l,b=d*M-p*_,U=d*v-u*_,N=d*f-h*_,P=p*v-u*M,H=p*f-h*M,k=u*f-h*v,O=m*k-y*H+S*P+R*N-A*U+x*b;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/O;return e[0]=(o*k-l*H+c*P)*V,e[1]=(a*H-i*k-r*P)*V,e[2]=(M*x-v*A+f*R)*V,e[3]=(u*A-p*x-h*R)*V,e[4]=(l*N-s*k-c*U)*V,e[5]=(n*k-a*N+r*U)*V,e[6]=(v*S-_*x-f*y)*V,e[7]=(d*x-u*S+h*y)*V,e[8]=(s*H-o*N+c*b)*V,e[9]=(i*N-n*H-r*b)*V,e[10]=(_*A-M*S+f*m)*V,e[11]=(p*S-d*A-h*m)*V,e[12]=(o*U-s*P-l*b)*V,e[13]=(n*P-i*U+a*b)*V,e[14]=(M*y-_*R-v*m)*V,e[15]=(d*R-p*y+u*m)*V,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,p=o+o,u=r*c,h=r*d,_=r*p,M=s*d,v=s*p,f=o*p,m=l*c,y=l*d,S=l*p,R=i.x,A=i.y,x=i.z;return a[0]=(1-(M+f))*R,a[1]=(h+S)*R,a[2]=(_-y)*R,a[3]=0,a[4]=(h-S)*A,a[5]=(1-(u+f))*A,a[6]=(v+m)*A,a[7]=0,a[8]=(_+y)*x,a[9]=(v-m)*x,a[10]=(1-(u+M))*x,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=ts.set(a[0],a[1],a[2]).length();const o=ts.set(a[4],a[5],a[6]).length(),l=ts.set(a[8],a[9],a[10]).length();r<0&&(s=-s),xi.copy(this);const c=1/s,d=1/o,p=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=d,xi.elements[5]*=d,xi.elements[6]*=d,xi.elements[8]*=p,xi.elements[9]*=p,xi.elements[10]*=p,n.setFromRotationMatrix(xi),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=Ai,l=!1){const c=this.elements,d=2*r/(n-e),p=2*r/(i-a),u=(n+e)/(n-e),h=(i+a)/(i-a);let _,M;if(l)_=r/(s-r),M=s*r/(s-r);else if(o===Ai)_=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(o===bl)_=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Ai,l=!1){const c=this.elements,d=2/(n-e),p=2/(i-a),u=-(n+e)/(n-e),h=-(i+a)/(i-a);let _,M;if(l)_=1/(s-r),M=s/(s-r);else if(o===Ai)_=-2/(s-r),M=-(s+r)/(s-r);else if(o===bl)_=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Gu.prototype.isMatrix4=!0;let Bt=Gu;const ts=new Z,xi=new Bt,IA=new Z(0,0,0),zA=new Z(1,1,1),Ca=new Z,fc=new Z,Wn=new Z,pv=new Bt,mv=new mo;class ur{constructor(e=0,n=0,i=0,a=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],u=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mv.setFromEuler(this),this.setFromQuaternion(mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class j1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FA=0;const gv=new Z,ns=new mo,ta=new Bt,dc=new Z,To=new Z,BA=new Z,HA=new mo,vv=new Z(1,0,0),xv=new Z(0,1,0),_v=new Z(0,0,1),yv={type:"added"},GA={type:"removed"},is={type:"childadded",child:null},od={type:"childremoved",child:null};class An extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new Z,n=new ur,i=new mo,a=new Z(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ge}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(vv,e)}rotateY(e){return this.rotateOnAxis(xv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,n){return gv.copy(e).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vv,e)}translateY(e){return this.translateOnAxis(xv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?dc.copy(e):dc.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(To,dc,this.up):ta.lookAt(dc,To,this.up),this.quaternion.setFromRotationMatrix(ta),a&&(ta.extractRotation(a.matrixWorld),ns.setFromRotationMatrix(ta),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yv),is.child=e,this.dispatchEvent(is),is.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GA),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yv),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,BA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,HA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),u=s(e.skeletons),h=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}An.DEFAULT_UP=new Z(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class la extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VA={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const M of e.hand.values()){const v=n.getJointPose(M,i),f=this._getHandJoint(c,M);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,_=.005;c.inputState.pinching&&u>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(VA)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new la;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const W1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},hc={h:0,s:0,l:0};function cd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=rt.workingColorSpace){if(e=jm(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=cd(s,r,e+1/3),this.g=cd(s,r,e),this.b=cd(s,r,e-1/3)}return rt.colorSpaceToWorking(this,a),this}setStyle(e,n=li){function i(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=li){const i=W1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return rt.workingToColorSpace(En.copy(this),e),Math.round(nt(En.r*255,0,255))*65536+Math.round(nt(En.g*255,0,255))*256+Math.round(nt(En.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(En.copy(this),n);const i=En.r,a=En.g,r=En.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(En.copy(this),n),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=li){rt.workingToColorSpace(En.copy(this),e);const n=En.r,i=En.g,a=En.b;return e!==li?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(wa),this.setHSL(wa.h+e,wa.s+n,wa.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wa),e.getHSL(hc);const i=tl(wa.h,hc.h,n),a=tl(wa.s,hc.s,n),r=tl(wa.l,hc.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new lt;lt.NAMES=W1;class kA extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const _i=new Z,na=new Z,ud=new Z,ia=new Z,as=new Z,rs=new Z,Sv=new Z,fd=new Z,dd=new Z,hd=new Z,pd=new Ft,md=new Ft,gd=new Ft;class Ei{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),_i.subVectors(e,n),a.cross(_i);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){_i.subVectors(a,n),na.subVectors(i,n),ud.subVectors(e,n);const s=_i.dot(_i),o=_i.dot(na),l=_i.dot(ud),c=na.dot(na),d=na.dot(ud),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,h=(c*l-o*d)*u,_=(s*d-o*l)*u;return r.set(1-h-_,_,h)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,ia)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ia.x),l.addScaledVector(s,ia.y),l.addScaledVector(o,ia.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,n),md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(pd,r.x),s.addScaledVector(md,r.y),s.addScaledVector(gd,r.z),s}static isFrontFacing(e,n,i,a){return _i.subVectors(i,n),na.subVectors(e,n),_i.cross(na).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),na.subVectors(this.a,this.b),_i.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return Ei.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;as.subVectors(a,i),rs.subVectors(r,i),fd.subVectors(e,i);const l=as.dot(fd),c=rs.dot(fd);if(l<=0&&c<=0)return n.copy(i);dd.subVectors(e,a);const d=as.dot(dd),p=rs.dot(dd);if(d>=0&&p<=d)return n.copy(a);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0&&l-d>0)return s=l/(l-d),n.copy(i).addScaledVector(as,s);hd.subVectors(e,r);const h=as.dot(hd),_=rs.dot(hd);if(_>=0&&h<=_)return n.copy(r);const M=h*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(rs,o);const v=d*_-h*p;if(v<=0&&p-d>=0&&h-_>=0)return Sv.subVectors(r,a),o=(p-d)/(p-d+(h-_)),n.copy(a).addScaledVector(Sv,o);const f=1/(v+M+u);return s=M*f,o=u*f,n.copy(i).addScaledVector(as,s).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fl{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,yi):yi.fromBufferAttribute(r,s),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),mc.subVectors(this.max,Ao),ss.subVectors(e.a,Ao),os.subVectors(e.b,Ao),ls.subVectors(e.c,Ao),Da.subVectors(os,ss),Na.subVectors(ls,os),yr.subVectors(ss,ls);let n=[0,-Da.z,Da.y,0,-Na.z,Na.y,0,-yr.z,yr.y,Da.z,0,-Da.x,Na.z,0,-Na.x,yr.z,0,-yr.x,-Da.y,Da.x,0,-Na.y,Na.x,0,-yr.y,yr.x,0];return!vd(n,ss,os,ls,mc)||(n=[1,0,0,0,1,0,0,0,1],!vd(n,ss,os,ls,mc))?!1:(gc.crossVectors(Da,Na),n=[gc.x,gc.y,gc.z],vd(n,ss,os,ls,mc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const aa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],yi=new Z,pc=new Fl,ss=new Z,os=new Z,ls=new Z,Da=new Z,Na=new Z,yr=new Z,Ao=new Z,mc=new Z,gc=new Z,Sr=new Z;function vd(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Sr.fromArray(t,r);const o=a.x*Math.abs(Sr.x)+a.y*Math.abs(Sr.y)+a.z*Math.abs(Sr.z),l=e.dot(Sr),c=n.dot(Sr),d=i.dot(Sr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Wt=new Z,vc=new at;let jA=0;class Or extends Qr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uA,this.updateRanges=[],this.gpuType=Vi,this.version=0,this._normalizationScale=e!==void 0?Wm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vc.fromBufferAttribute(this,n),vc.applyMatrix3(e),this.setXY(n,vc.x,vc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),a=this._normalize(a),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):G1(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):V1(e,this.array)}}class X1 extends Or{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class q1 extends Or{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends Or{constructor(e,n,i){super(new Float32Array(e),n,i)}}const WA=new Fl,Ro=new Z,xd=new Z;class qm{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):WA.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ro,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(xd)),this.expandByPoint(Ro.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let XA=0;const si=new Bt,_d=new An,cs=new Z,Xn=new Fl,Co=new Fl,nn=new Z;class wi extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XA++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fA(e)?q1:X1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,n,i){return si.makeTranslation(e,n,i),this.applyMatrix4(si),this}scale(e,n,i){return si.makeScale(e,n,i),this.applyMatrix4(si),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Co.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Xn.min,Co.min),Xn.expandByPoint(nn),nn.addVectors(Xn.max,Co.max),Xn.expandByPoint(nn)):(Xn.expandByPoint(Co.min),Xn.expandByPoint(Co.max))}Xn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)nn.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(nn));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)nn.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),nn.add(cs)),a=Math.max(a,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Or(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new Z,l[U]=new Z;const d=new Z,p=new Z,u=new Z,h=new at,_=new at,M=new at,v=new Z,f=new Z;function m(U,N,P){c[U]=c[N]=c[P]=1,d.fromBufferAttribute(i,U),p.fromBufferAttribute(i,N),u.fromBufferAttribute(i,P),h.fromBufferAttribute(r,U),_.fromBufferAttribute(r,N),M.fromBufferAttribute(r,P),p.sub(d),u.sub(d),_.sub(h),M.sub(h);const H=1/(_.x*M.y-M.x*_.y);isFinite(H)&&(v.copy(p).multiplyScalar(M.y).addScaledVector(u,-_.y).multiplyScalar(H),f.copy(u).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(H),o[U].add(v),o[N].add(v),o[P].add(v),l[U].add(f),l[N].add(f),l[P].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,N=y.length;U<N;++U){const P=y[U],H=P.start,k=P.count;for(let O=H,V=H+k;O<V;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new Z,R=new Z,A=new Z,x=new Z;function b(U){A.fromBufferAttribute(a,U),x.copy(A);const N=o[U];S.copy(N),S.sub(A.multiplyScalar(A.dot(N))).normalize(),R.crossVectors(x,N);const H=R.dot(l[U])<0?-1:1;s.setXYZW(U,S.x,S.y,S.z,H)}for(let U=0,N=i.count;U<N;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Or(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const a=new Z,r=new Z,s=new Z,o=new Z,l=new Z,c=new Z,d=new Z,p=new Z;if(e)for(let u=0,h=e.count;u<h;u+=3){const _=e.getX(u+0),M=e.getX(u+1),v=e.getX(u+2);a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,v),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,v),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let h=0,_=0;for(let M=0,v=l.length;M<v;M++){o.isInterleavedBufferAttribute?h=l[M]*o.data.stride+o.offset:h=l[M]*d;for(let f=0;f<d;f++)u[_++]=c[h++]}return new Or(u,d,p)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=e(u,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yd=new Z,qA=new Z,YA=new Ge;class za{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=yd.subVectors(i,n).cross(qA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(yd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YA.getNormalMatrix(e),a=this.coplanarPoint(yd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ZA=0;class Bl extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=po(),this.name="",this.type="Material",this.blending=$o,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=x1,this.blendDst=_1,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nd,this.stencilZFail=nd,this.stencilZPass=nd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new za().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ra=new Z,Sd=new Z,xc=new Z,_c=new Z;class KA{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ra)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ra.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ra.copy(this.origin).addScaledVector(this.direction,n),ra.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Sd.copy(e).add(n).multiplyScalar(.5),xc.copy(n).sub(e).normalize(),_c.copy(this.origin).sub(Sd);const r=e.distanceTo(n)*.5,s=-this.direction.dot(xc),o=_c.dot(this.direction),l=-_c.dot(xc),c=_c.lengthSq(),d=Math.abs(1-s*s);let p,u,h,_;if(d>0)if(p=s*l-o,u=s*o-l,_=r*d,p>=0)if(u>=-_)if(u<=_){const M=1/d;p*=M,u*=M,h=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),h=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),h=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),h=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-r,-l),r),h=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),h=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),h=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Sd).addScaledVector(xc,u),h}intersectSphere(e,n){if(e.radius<0)return null;ra.subVectors(e.center,this.origin);const i=ra.dot(this.direction),a=ra.dot(ra)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,ra)!==null}intersectTriangle(e,n,i,a,r){const s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,p=e.x-s.x,u=e.y-s.y,h=e.z-s.z,_=n.x-s.x,M=n.y-s.y,v=n.z-s.z,f=i.x-s.x,m=i.y-s.y,y=i.z-s.z,S=Math.abs(l),R=Math.abs(c),A=Math.abs(d);let x,b,U,N,P,H,k,O,V,B,z,Q;if(S>=R&&S>=A?(U=l,H=p,V=_,Q=f,l>=0?(x=c,b=d,N=u,P=h,k=M,O=v,B=m,z=y):(x=d,b=c,N=h,P=u,k=v,O=M,B=y,z=m)):R>=A?(U=c,H=u,V=M,Q=m,c>=0?(x=d,b=l,N=h,P=p,k=v,O=_,B=y,z=f):(x=l,b=d,N=p,P=h,k=_,O=v,B=f,z=y)):(U=d,H=h,V=v,Q=y,d>=0?(x=l,b=c,N=p,P=u,k=_,O=M,B=f,z=m):(x=c,b=l,N=u,P=p,k=M,O=_,B=m,z=f)),U===0)return null;const W=x/U,D=b/U,C=1/U,te=N-W*H,ce=P-D*H,G=k-W*V,ne=O-D*V,oe=B-W*Q,le=z-D*Q,se=oe*ne-le*G,be=te*le-ce*oe,ze=G*ce-ne*te;if(a){if(se<0||be<0||ze<0)return null}else if((se<0||be<0||ze<0)&&(se>0||be>0||ze>0))return null;const _e=se+be+ze;if(_e===0)return null;const De=C*(se*H+be*V+ze*Q);return(_e>0?De<0:De>0)?null:this.at(De/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rp extends Bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=y1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mv=new Bt,Mr=new KA,yc=new qm,bv=new Z,Sc=new Z,Mc=new Z,bc=new Z,Md=new Z,Ec=new Z,Ev=new Z,Tc=new Z;class It extends An{constructor(e=new wi,n=new Rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Ec.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],p=r[l];d!==0&&(Md.fromBufferAttribute(p,e),s?Ec.addScaledVector(Md,d):Ec.addScaledVector(Md.sub(n),d))}n.add(Ec)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(r),Mr.copy(e.ray).recast(e.near),!(yc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(yc,bv)===null||Mr.origin.distanceToSquared(bv)>(e.far-e.near)**2))&&(Mv.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(Mv),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,M=u.length;_<M;_++){const v=u[_],f=s[v.materialIndex],m=Math.max(v.start,h.start),y=Math.min(o.count,Math.min(v.start+v.count,h.start+h.count));for(let S=m,R=y;S<R;S+=3){const A=o.getX(S),x=o.getX(S+1),b=o.getX(S+2);a=Ac(this,f,e,i,c,d,p,A,x,b),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let v=_,f=M;v<f;v+=3){const m=o.getX(v),y=o.getX(v+1),S=o.getX(v+2);a=Ac(this,s,e,i,c,d,p,m,y,S),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,M=u.length;_<M;_++){const v=u[_],f=s[v.materialIndex],m=Math.max(v.start,h.start),y=Math.min(l.count,Math.min(v.start+v.count,h.start+h.count));for(let S=m,R=y;S<R;S+=3){const A=S,x=S+1,b=S+2;a=Ac(this,f,e,i,c,d,p,A,x,b),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let v=_,f=M;v<f;v+=3){const m=v,y=v+1,S=v+2;a=Ac(this,s,e,i,c,d,p,m,y,S),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function QA(t,e,n,i,a,r,s,o){let l;if(e.side===Vn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===kr,o),l===null)return null;Tc.copy(o),Tc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Tc);return c<n.near||c>n.far?null:{distance:c,point:Tc.clone(),object:t}}function Ac(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,Sc),t.getVertexPosition(l,Mc),t.getVertexPosition(c,bc);const d=QA(t,e,n,i,Sc,Mc,bc,Ev);if(d){const p=new Z;Ei.getBarycoord(Ev,Sc,Mc,bc,p),a&&(d.uv=Ei.getInterpolatedAttribute(a,o,l,c,p,new at)),r&&(d.uv1=Ei.getInterpolatedAttribute(r,o,l,c,p,new at)),s&&(d.normal=Ei.getInterpolatedAttribute(s,o,l,c,p,new Z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new Z,materialIndex:0};Ei.getNormal(Sc,Mc,bc,u.normal),d.face=u,d.barycoord=p}return d}class JA extends On{constructor(e=null,n=1,i=1,a,r,s,o,l,c=pn,d=pn,p,u){super(null,s,o,l,c,d,a,r,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const br=new qm,$A=new at(.5,.5),Rc=new Z;class Tl{constructor(e=new za,n=new za,i=new za,a=new za,r=new za,s=new za){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],u=r[6],h=r[7],_=r[8],M=r[9],v=r[10],f=r[11],m=r[12],y=r[13],S=r[14],R=r[15];if(a[0].setComponents(c-s,h-d,f-_,R-m).normalize(),a[1].setComponents(c+s,h+d,f+_,R+m).normalize(),a[2].setComponents(c+o,h+p,f+M,R+y).normalize(),a[3].setComponents(c-o,h-p,f-M,R-y).normalize(),i)a[4].setComponents(l,u,v,S).normalize(),a[5].setComponents(c-l,h-u,f-v,R-S).normalize();else if(a[4].setComponents(c-l,h-u,f-v,R-S).normalize(),n===Ai)a[5].setComponents(c+l,h+u,f+v,R+S).normalize();else if(n===bl)a[5].setComponents(l,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const n=$A.distanceTo(e.center);return br.radius=.7071067811865476+n,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Rc.x=a.normal.x>0?e.max.x:e.min.x,Rc.y=a.normal.y>0?e.max.y:e.min.y,Rc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Tv=new Bt;class Ym{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let a=0;a<n.length;a++){const r=n[a];Tv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[a]===void 0&&(i[a]=new Tl),i[a].setFromProjectionMatrix(Tv,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let a=0;a<e._count;a++)n[a]===void 0&&(n[a]=new Tl),n[a].copy(i[a]);return this._count=e._count,this}clone(){return new Ym().copy(this)}}class Y1 extends On{constructor(e=[],n=to,i,a,r,s,o,l,c,d){super(e,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class io extends On{constructor(e,n,i=Yi,a,r,s,o=pn,l=pn,c,d=cr,p=1){if(d!==cr&&d!==qa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Z1 extends io{constructor(e,n=Yi,i=to,a,r,s=pn,o=pn,l,c=cr){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,a,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class K1 extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class go extends wi{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],p=[];let u=0,h=0;_("z","y","x",-1,-1,i,n,e,s,r,0),_("z","y","x",1,-1,i,n,-e,s,r,1),_("x","z","y",1,1,e,i,n,a,s,2),_("x","z","y",1,-1,e,i,-n,a,s,3),_("x","y","z",1,-1,e,n,i,a,r,4),_("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(p,2));function _(M,v,f,m,y,S,R,A,x,b,U){const N=S/x,P=R/b,H=S/2,k=R/2,O=A/2,V=x+1,B=b+1;let z=0,Q=0;const W=new Z;for(let D=0;D<B;D++){const C=D*P-k;for(let te=0;te<V;te++){const ce=te*N-H;W[M]=ce*m,W[v]=C*y,W[f]=O,c.push(W.x,W.y,W.z),W[M]=0,W[v]=0,W[f]=A>0?1:-1,d.push(W.x,W.y,W.z),p.push(te/x),p.push(1-D/b),z+=1}}for(let D=0;D<b;D++)for(let C=0;C<x;C++){const te=u+C+V*D,ce=u+C+V*(D+1),G=u+(C+1)+V*(D+1),ne=u+(C+1)+V*D;l.push(te,ce,ne),l.push(ce,G,ne),Q+=6}o.addGroup(h,Q,U),h+=Q,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ws extends wi{constructor(e=1,n=1,i=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),r=Math.floor(r);const d=[],p=[],u=[],h=[];let _=0;const M=[],v=i/2;let f=0;m(),s===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function m(){const S=new Z,R=new Z;let A=0;const x=(n-e)/i;for(let b=0;b<=r;b++){const U=[],N=b/r,P=N*(n-e)+e;for(let H=0;H<=a;H++){const k=H/a,O=k*l+o,V=Math.sin(O),B=Math.cos(O);R.x=P*V,R.y=-N*i+v,R.z=P*B,p.push(R.x,R.y,R.z),S.set(V,x,B).normalize(),u.push(S.x,S.y,S.z),h.push(k,1-N),U.push(_++)}M.push(U)}for(let b=0;b<a;b++)for(let U=0;U<r;U++){const N=M[U][b],P=M[U+1][b],H=M[U+1][b+1],k=M[U][b+1];(e>0||U!==0)&&(d.push(N,P,k),A+=3),(n>0||U!==r-1)&&(d.push(P,H,k),A+=3)}c.addGroup(f,A,0),f+=A}function y(S){const R=_,A=new at,x=new Z;let b=0;const U=S===!0?e:n,N=S===!0?1:-1;for(let H=1;H<=a;H++)p.push(0,v*N,0),u.push(0,N,0),h.push(.5,.5),_++;const P=_;for(let H=0;H<=a;H++){const O=H/a*l+o,V=Math.cos(O),B=Math.sin(O);x.x=U*B,x.y=v*N,x.z=U*V,p.push(x.x,x.y,x.z),u.push(0,N,0),A.x=V*.5+.5,A.y=B*.5*N+.5,h.push(A.x,A.y),_++}for(let H=0;H<a;H++){const k=R+H,O=P+H;S===!0?d.push(O,O+1,k):d.push(O+1,O,k),b+=3}c.addGroup(f,b,S===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ff extends wi{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,p=e/o,u=n/l,h=[],_=[],M=[],v=[];for(let f=0;f<d;f++){const m=f*u-s;for(let y=0;y<c;y++){const S=y*p-r;_.push(S,-m,0),M.push(0,0,1),v.push(y/o),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const y=m+c*f,S=m+c*(f+1),R=m+1+c*(f+1),A=m+1+c*f;h.push(y,S,A),h.push(S,R,A)}this.setIndex(h),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bu extends wi{constructor(e=.5,n=1,i=32,a=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:a,thetaStart:r,thetaLength:s},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],c=[],d=[];let p=e;const u=(n-e)/a,h=new Z,_=new at;for(let M=0;M<=a;M++){for(let v=0;v<=i;v++){const f=r+v/i*s;h.x=p*Math.cos(f),h.y=p*Math.sin(f),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/n+1)/2,_.y=(h.y/n+1)/2,d.push(_.x,_.y)}p+=u}for(let M=0;M<a;M++){const v=M*(i+1);for(let f=0;f<i;f++){const m=f+v,y=m,S=m+i+1,R=m+i+2,A=m+1;o.push(y,S,A),o.push(S,R,A)}}this.setIndex(o),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nl extends wi{constructor(e=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const d=[],p=new Z,u=new Z,h=[],_=[],M=[],v=[];for(let f=0;f<=i;f++){const m=[],y=f/i,S=s+y*o,R=e*Math.cos(S),A=Math.sqrt(e*e-R*R);let x=0;f===0&&s===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){const U=b/n,N=a+U*r;p.x=-A*Math.cos(N),p.y=R,p.z=A*Math.sin(N),_.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),v.push(U+x,1-y),m.push(c++)}d.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const y=d[f][m+1],S=d[f][m],R=d[f+1][m],A=d[f+1][m+1];(f!==0||s>0)&&h.push(y,S,A),(f!==i-1||l<Math.PI)&&h.push(S,R,A)}this.setIndex(h),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class il extends wi{constructor(e=1,n=.4,i=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const l=[],c=[],d=[],p=[],u=new Z,h=new Z,_=new Z;for(let M=0;M<=i;M++){const v=s+M/i*o;for(let f=0;f<=a;f++){const m=f/a*r;h.x=(e+n*Math.cos(v))*Math.cos(m),h.y=(e+n*Math.cos(v))*Math.sin(m),h.z=n*Math.sin(v),c.push(h.x,h.y,h.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),_.subVectors(h,u).normalize(),d.push(_.x,_.y,_.z),p.push(f/a),p.push(M/i)}}for(let M=1;M<=i;M++)for(let v=1;v<=a;v++){const f=(a+1)*M+v-1,m=(a+1)*(M-1)+v-1,y=(a+1)*(M-1)+v,S=(a+1)*M+v;l.push(f,m,S),l.push(m,y,S)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ao(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(Av(a))a.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(Av(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function Nn(t){const e={};for(let n=0;n<t.length;n++){const i=ao(t[n]);for(const a in i)e[a]=i[a]}return e}function Av(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function eR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Q1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const tR={clone:ao,merge:Nn};var nR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nR,this.fragmentShader=iR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=eR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new lt().setHex(a.value);break;case"v2":this.uniforms[i].value=new at().fromArray(a.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class aR extends Wr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wo extends Bl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rR extends Bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sR extends Bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class J1 extends An{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const bd=new Bt,Rv=new Z,Cv=new Z;class oR{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Rv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rv),Cv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Cv),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,a){bd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(bd,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,l=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===bl||e.reversedDepth?n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cc=new Z,wc=new mo,Li=new Z;class $1 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cc,wc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,Li.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Cc,wc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new Z,wv=new at,Dv=new at;class bi extends $1{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=El*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return El*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z)}getViewSize(e,n){return this.getViewBounds(e,wv,Dv),n.subVectors(Dv,wv)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(el*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class eM extends $1{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lR extends oR{constructor(){super(new eM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nv extends J1{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new lR}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class cR extends J1{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const us=-90,fs=1;class Cp extends An{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new bi(us,fs,e,n);a.layers=this.layers,this.add(a);const r=new bi(us,fs,e,n);r.layers=this.layers,this.add(r);const s=new bi(us,fs,e,n);s.layers=this.layers,this.add(s);const o=new bi(us,fs,e,n);o.layers=this.layers,this.add(o);const l=new bi(us,fs,e,n);l.layers=this.layers,this.add(l);const c=new bi(us,fs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,u,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class uR extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class fR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Uv(t,e,n,i){const a=dR(i);switch(n){case L1:return t*e;case P1:return t*e/a.components*a.byteLength;case Gm:return t*e/a.components*a.byteLength;case jr:return t*e*2/a.components*a.byteLength;case Vm:return t*e*2/a.components*a.byteLength;case O1:return t*e*3/a.components*a.byteLength;case ki:return t*e*4/a.components*a.byteLength;case km:return t*e*4/a.components*a.byteLength;case Jc:case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:case $h:return Math.max(t,16)*Math.max(e,8)/4;case Kh:case Jh:return Math.max(t,8)*Math.max(e,8)/2;case ep:case tp:case ip:case ap:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case np:case Ou:case rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _p:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yp:case Sp:case Mp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case bp:case Ep:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pu:case Tp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dR(t){switch(t){case Qn:case w1:return{byteLength:1,components:1};case Ml:case D1:case Zi:return{byteLength:2,components:1};case Bm:case Hm:return{byteLength:2,components:4};case Yi:case Fm:case Vi:return{byteLength:4,components:1};case N1:case U1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zm}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tM(){let t=null,e=!1,n=null,i=null;function a(r,s){i=t.requestAnimationFrame(a),n(r,s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function hR(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,d);else{p.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<p.length;h++){const _=p[u],M=p[h];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,p[u]=M)}p.length=u+1;for(let h=0,_=p.length;h<_;h++){const M=p[h];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var pR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mR=`#ifdef USE_ALPHAHASH
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
#endif`,gR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_R=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yR=`#ifdef USE_AOMAP
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
#endif`,SR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MR=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ER=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RR=`#ifdef USE_IRIDESCENCE
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
#endif`,CR=`#ifdef USE_BUMPMAP
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
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,PR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zR=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,FR=`vec3 transformedNormal = objectNormal;
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
#endif`,BR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kR="gl_FragColor = linearToOutputTexel( gl_FragColor );",jR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qR=`#ifdef USE_ENVMAP
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
#endif`,YR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$R=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e3=`#ifdef USE_GRADIENTMAP
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
}`,t3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a3=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,r3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,s3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,f3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d3=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m3=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,g3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b3=`#if defined( USE_POINTS_UV )
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
#endif`,E3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R3=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w3=`#ifdef USE_MORPHTARGETS
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
#endif`,D3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I3=`#ifdef USE_NORMALMAP
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
#endif`,z3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,k3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,K3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Q3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,J3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,$3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eC=`#ifdef USE_SKINNING
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
#endif`,tC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nC=`#ifdef USE_SKINNING
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
#endif`,iC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oC=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lC=`#ifdef USE_TRANSMISSION
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
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,fC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,dC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pC=`uniform sampler2D t2D;
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
}`,mC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gC=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_C=`#include <common>
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
}`,yC=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SC=`#define DISTANCE
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
}`,MC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TC=`uniform float scale;
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
}`,AC=`uniform vec3 diffuse;
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
}`,RC=`#include <common>
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
}`,CC=`uniform vec3 diffuse;
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
}`,wC=`#define LAMBERT
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
}`,DC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,NC=`#define MATCAP
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
}`,UC=`#define MATCAP
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
}`,LC=`#define NORMAL
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
}`,OC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PC=`#define PHONG
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
}`,IC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,zC=`#define STANDARD
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
}`,FC=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,BC=`#define TOON
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
}`,HC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,GC=`uniform float size;
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
}`,VC=`uniform vec3 diffuse;
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
}`,kC=`#include <common>
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
}`,jC=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,WC=`uniform float rotation;
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
}`,XC=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:pR,alphahash_pars_fragment:mR,alphamap_fragment:gR,alphamap_pars_fragment:vR,alphatest_fragment:xR,alphatest_pars_fragment:_R,aomap_fragment:yR,aomap_pars_fragment:SR,batching_pars_vertex:MR,batching_vertex:bR,begin_vertex:ER,beginnormal_vertex:TR,bsdfs:AR,iridescence_fragment:RR,bumpmap_pars_fragment:CR,clipping_planes_fragment:wR,clipping_planes_pars_fragment:DR,clipping_planes_pars_vertex:NR,clipping_planes_vertex:UR,color_fragment:LR,color_pars_fragment:OR,color_pars_vertex:PR,color_vertex:IR,common:zR,defaultnormal_vertex:FR,displacementmap_pars_vertex:BR,displacementmap_vertex:HR,emissivemap_fragment:GR,emissivemap_pars_fragment:VR,colorspace_fragment:kR,colorspace_pars_fragment:jR,envmap_fragment:WR,envmap_common_pars_fragment:XR,envmap_pars_fragment:qR,envmap_pars_vertex:YR,envmap_physical_pars_fragment:r3,envmap_vertex:ZR,fog_vertex:KR,fog_pars_vertex:QR,fog_fragment:JR,fog_pars_fragment:$R,gradientmap_pars_fragment:e3,lightmap_pars_fragment:t3,lights_lambert_fragment:n3,lights_lambert_pars_fragment:i3,lights_pars_begin:a3,lights_toon_fragment:s3,lights_toon_pars_fragment:o3,lights_phong_fragment:l3,lights_phong_pars_fragment:c3,lights_physical_fragment:u3,lights_physical_pars_fragment:f3,lights_fragment_begin:d3,lights_fragment_maps:h3,lights_fragment_end:p3,lightprobes_pars_fragment:m3,logdepthbuf_fragment:g3,logdepthbuf_pars_fragment:v3,logdepthbuf_pars_vertex:x3,logdepthbuf_vertex:_3,map_fragment:y3,map_pars_fragment:S3,map_particle_fragment:M3,map_particle_pars_fragment:b3,metalnessmap_fragment:E3,metalnessmap_pars_fragment:T3,morphinstance_vertex:A3,morphcolor_vertex:R3,morphnormal_vertex:C3,morphtarget_pars_vertex:w3,morphtarget_vertex:D3,normal_fragment_begin:N3,normal_fragment_maps:U3,normal_pars_fragment:L3,normal_pars_vertex:O3,normal_vertex:P3,normalmap_pars_fragment:I3,clearcoat_normal_fragment_begin:z3,clearcoat_normal_fragment_maps:F3,clearcoat_pars_fragment:B3,iridescence_pars_fragment:H3,opaque_fragment:G3,packing:V3,premultiplied_alpha_fragment:k3,project_vertex:j3,dithering_fragment:W3,dithering_pars_fragment:X3,roughnessmap_fragment:q3,roughnessmap_pars_fragment:Y3,shadowmap_pars_fragment:Z3,shadowmap_pars_vertex:K3,shadowmap_vertex:Q3,shadowmask_pars_fragment:J3,skinbase_vertex:$3,skinning_pars_vertex:eC,skinning_vertex:tC,skinnormal_vertex:nC,specularmap_fragment:iC,specularmap_pars_fragment:aC,tonemapping_fragment:rC,tonemapping_pars_fragment:sC,transmission_fragment:oC,transmission_pars_fragment:lC,uv_pars_fragment:cC,uv_pars_vertex:uC,uv_vertex:fC,worldpos_vertex:dC,background_vert:hC,background_frag:pC,backgroundCube_vert:mC,backgroundCube_frag:gC,cube_vert:vC,cube_frag:xC,depth_vert:_C,depth_frag:yC,distance_vert:SC,distance_frag:MC,equirect_vert:bC,equirect_frag:EC,linedashed_vert:TC,linedashed_frag:AC,meshbasic_vert:RC,meshbasic_frag:CC,meshlambert_vert:wC,meshlambert_frag:DC,meshmatcap_vert:NC,meshmatcap_frag:UC,meshnormal_vert:LC,meshnormal_frag:OC,meshphong_vert:PC,meshphong_frag:IC,meshphysical_vert:zC,meshphysical_frag:FC,meshtoon_vert:BC,meshtoon_frag:HC,points_vert:GC,points_frag:VC,shadow_vert:kC,shadow_frag:jC,sprite_vert:WC,sprite_frag:XC},Te={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Ii={basic:{uniforms:Nn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Nn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Nn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Nn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Nn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Nn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Nn([Te.points,Te.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Nn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Nn([Te.common,Te.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Nn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Nn([Te.sprite,Te.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Nn([Te.common,Te.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Nn([Te.lights,Te.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ii.physical={uniforms:Nn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Dc={r:0,b:0,g:0},qC=new Bt,nM=new Ge;nM.set(-1,0,0,0,1,0,0,0,1);function YC(t,e,n,i,a,r){const s=new lt(0);let o=a===!0?0:1,l,c,d=null,p=0,u=null;function h(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const S=m.backgroundBlurriness>0;y=e.get(y,S)}return y}function _(m){let y=!1;const S=h(m);S===null?v(s,o):S&&S.isColor&&(v(S,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(m,y){const S=h(y);S&&S.isCubeTexture?(c===void 0&&(c=new It(new go(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:ao(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qC.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nM),c.material.toneMapped=rt.getTransfer(S.colorSpace)!==_t,(d!==S||p!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,u=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new It(new ff(2,2),new Wr({name:"BackgroundMaterial",uniforms:ao(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=rt.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,u=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,y){m.getRGB(Dc,Q1(t)),n.buffers.color.setClear(Dc.r,Dc.g,Dc.b,y,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(m,y=1){s.set(m),o=y,v(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,v(s,o)},render:_,addToRenderList:M,dispose:f}}function ZC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,s=!1;function o(P,H,k,O,V){let B=!1;const z=p(P,O,k,H);r!==z&&(r=z,c(r.object)),B=h(P,O,k,V),B&&_(P,O,k,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(B||s)&&(s=!1,S(P,H,k,O),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function p(P,H,k,O){const V=O.wireframe===!0;let B=i[H.id];B===void 0&&(B={},i[H.id]=B);const z=P.isInstancedMesh===!0?P.id:0;let Q=B[z];Q===void 0&&(Q={},B[z]=Q);let W=Q[k.id];W===void 0&&(W={},Q[k.id]=W);let D=W[V];return D===void 0&&(D=u(l()),W[V]=D),D}function u(P){const H=[],k=[],O=[];for(let V=0;V<n;V++)H[V]=0,k[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:O,object:P,attributes:{},index:null}}function h(P,H,k,O){const V=r.attributes,B=H.attributes;let z=0;const Q=k.getAttributes();for(const W in Q)if(Q[W].location>=0){const C=V[W];let te=B[W];if(te===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),C===void 0||C.attribute!==te||te&&C.data!==te.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function _(P,H,k,O){const V={},B=H.attributes;let z=0;const Q=k.getAttributes();for(const W in Q)if(Q[W].location>=0){let C=B[W];C===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(C=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(C=P.instanceColor));const te={};te.attribute=C,C&&C.data&&(te.data=C.data),V[W]=te,z++}r.attributes=V,r.attributesNum=z,r.index=O}function M(){const P=r.newAttributes;for(let H=0,k=P.length;H<k;H++)P[H]=0}function v(P){f(P,0)}function f(P,H){const k=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;k[P]=1,O[P]===0&&(t.enableVertexAttribArray(P),O[P]=1),V[P]!==H&&(t.vertexAttribDivisor(P,H),V[P]=H)}function m(){const P=r.newAttributes,H=r.enabledAttributes;for(let k=0,O=H.length;k<O;k++)H[k]!==P[k]&&(t.disableVertexAttribArray(k),H[k]=0)}function y(P,H,k,O,V,B,z){z===!0?t.vertexAttribIPointer(P,H,k,V,B):t.vertexAttribPointer(P,H,k,O,V,B)}function S(P,H,k,O){M();const V=O.attributes,B=k.getAttributes(),z=H.defaultAttributeValues;for(const Q in B){const W=B[Q];if(W.location>=0){let D=V[Q];if(D===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(D=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(D=P.instanceColor)),D!==void 0){const C=D.normalized,te=D.itemSize,ce=e.get(D);if(ce===void 0)continue;const G=ce.buffer,ne=ce.type,oe=ce.bytesPerElement,le=ne===t.INT||ne===t.UNSIGNED_INT||D.gpuType===Fm;if(D.isInterleavedBufferAttribute){const se=D.data,be=se.isInterleavedBuffer===!0?se.stride:se.itemSize,ze=D.offset;if(se.isInstancedInterleavedBuffer||se.isInstancedBufferAttribute){for(let _e=0;_e<W.locationSize;_e++)f(W.location+_e,se.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let _e=0;_e<W.locationSize;_e++)v(W.location+_e);t.bindBuffer(t.ARRAY_BUFFER,G);for(let _e=0;_e<W.locationSize;_e++)y(W.location+_e,te/W.locationSize,ne,C,be*oe,(ze+te/W.locationSize*_e)*oe,le)}else{if(D.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)f(W.location+se,D.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let se=0;se<W.locationSize;se++)v(W.location+se);t.bindBuffer(t.ARRAY_BUFFER,G);for(let se=0;se<W.locationSize;se++)y(W.location+se,te/W.locationSize,ne,C,te*oe,te/W.locationSize*se*oe,le)}}else if(z!==void 0){const C=z[Q];if(C!==void 0)switch(C.length){case 2:t.vertexAttrib2fv(W.location,C);break;case 3:t.vertexAttrib3fv(W.location,C);break;case 4:t.vertexAttrib4fv(W.location,C);break;default:t.vertexAttrib1fv(W.location,C)}}}}m()}function R(){U();for(const P in i){const H=i[P];for(const k in H){const O=H[k];for(const V in O){const B=O[V];for(const z in B)d(B[z].object),delete B[z];delete O[V]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const H=i[P.id];for(const k in H){const O=H[k];for(const V in O){const B=O[V];for(const z in B)d(B[z].object),delete B[z];delete O[V]}}delete i[P.id]}function x(P){for(const H in i){const k=i[H];for(const O in k){const V=k[O];if(V[P.id]===void 0)continue;const B=V[P.id];for(const z in B)d(B[z].object),delete B[z];delete V[P.id]}}}function b(P){for(const H in i){const k=i[H],O=P.isInstancedMesh===!0?P.id:0,V=k[O];if(V!==void 0){for(const B in V){const z=V[B];for(const Q in z)d(z[Q].object),delete z[Q];delete V[B]}delete k[O],Object.keys(k).length===0&&delete i[H]}}}function U(){N(),s=!0,r!==a&&(r=a,c(r.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:v,disableUnusedAttributes:m}}function KC(t,e,n){let i;function a(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];n.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function QC(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(x){return!(x!==ki&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Qn&&x!==Vi&&!b&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Be("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:S,maxSamples:R,samples:A}}function JC(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new za,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,h){const _=p.clippingPlanes,M=p.clipIntersection,v=p.clipShadows,f=t.get(p);if(!a||_===null||_.length===0||r&&!v)r?d(null):c();else{const m=r?0:i,y=m*4;let S=f.clippingState||null;l.value=S,S=d(_,u,y,h);for(let R=0;R!==y;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,h,_){const M=p!==null?p.length:0;let v=null;if(M!==0){if(v=l.value,_!==!0||v===null){const f=h+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(v===null||v.length<f)&&(v=new Float32Array(f));for(let y=0,S=h;y!==M;++y,S+=4)s.copy(p[y]).applyMatrix4(m,o),s.normal.toArray(v,S),v[S+3]=s.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}class Zm extends Xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Y1(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new go(5,5,5),r=new Wr({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:Hs});r.uniforms.tEquirect.value=n;const s=new It(a,r),o=n.minFilter;return n.minFilter===Xa&&(n.minFilter=Hn),new Cp(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}const Lv=256,$C=3,ew=20,iM=256,aM=16,tw=3,nw=new Z,iw=new lt;class Hu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cp(1,10,null),this._boxMesh=new It(new go(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=nw}=r,l=this._renderer;this._setSize(s);const c=this._allocateTarget(),d=this._getSourceTarget(!0);n>0&&(d.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,u=l.autoClearColor,h=l.autoClearDepth,_=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(iw));const v=new Cp(i,a,d);return v.position.copy(o),v.update(l,e),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=h,l.autoClearStencil=_,e.background=M,n>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Lv,H1(e))}_fromTexture(e,n){e.mapping===to||e.mapping===Sl?this._setSize(e.image.length===0?Lv:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Ov(e,!1,!1),i=Math.log2(e)-$C;for(let a=0;a<=i;a++)n.texture.mipmaps.push({width:e>>a,height:e>>a});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ov(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const a=this._boxMesh,r=this._cubeCamera;a.material=i,r.renderTarget=e,r.activeMipmapLevel=n;const s=e.width>>n;e.viewport.set(0,0,s,s),r.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===to||e.mapping===Sl?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iv()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Pv()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=aw(),this._integrationMaterial=rw());const n=this._cubeSize,i=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/aM);for(let s=0;s<=i;s++){const o=Hu.lodToRoughness(s,i);if(s>i-tw)r.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(iM*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=sw());const i=this._blurMaterial,a=i.uniforms,r=this._sourceTarget;a.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,a.envMap.value=r.texture,this._renderCube(e,0,i),a.envMap.value=e.texture,this._renderCube(r,0,i)}}function Ov(t,e,n){return new Zm(t,{minFilter:Xa,generateMipmaps:e,type:Zi,colorSpace:Iu,depthBuffer:n})}function Hl(t,e,n){return new Wr({name:t,uniforms:e,vertexShader:Ye.cube_vert,fragmentShader:n,side:Vn,blending:Hs,depthTest:!1,depthWrite:!1})}function aw(){return Hl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${iM}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rw(){return Hl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:aM}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sw(){return Hl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ew}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Pv(){return Hl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Iv(){return Hl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ow(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?s(u):r(u)}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===$f||h===ed)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new Zm(_.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const h=u.mapping,_=h===$f||h===ed,M=h===to||h===Sl;if(_||M){let v=n.get(u);const f=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Hu(t)),v=_?i.fromEquirectangular(u,v):i.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),v.texture;if(v!==void 0)return v.texture;{const m=u.image;return _&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new Hu(t)),v=_?i.fromEquirectangular(u):i.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,n.set(u,v),u.addEventListener("dispose",d),v.texture):null}}}return u}function o(u,h){return h===$f?u.mapping=to:h===ed&&(u.mapping=Sl),u}function l(u){let h=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&h++;return h===_}function c(u){const h=u.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const _=n.get(h);_!==void 0&&(n.delete(h),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function lw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&nu("WebGLRenderer: "+i+" extension not supported."),a}}}function cw(t,e,n,i){const a={},r=new WeakMap,s=new FinalizationRegistry(_=>delete a[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const v in _.attributes)e.remove(_.attributes[v]);_.removeEventListener("dispose",o),delete a[_.id],s.unregister(_);const M=r.get(_);M&&(e.remove(M),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(_,M){return a[M.id]!==void 0||(M.addEventListener("dispose",o),a[M.id]=new WeakRef(M),s.register(M,M.id,M),n.memory.geometries++),M}function d(_){const M=_.attributes;for(const v in M)e.update(M[v],t.ARRAY_BUFFER)}function p(_){const M=_.index,v=_.attributes.position;let f=0;if(v===void 0)return;const m=M!==null?M.array.length:v.array.length/3-1,y=v.count>=65535?q1:X1,S=new y(Math.ceil(m/3)*6,1),R=S.array;if(M!==null){const x=M.array;f=M.version;for(let b=0,U=0;b<m;b+=3){const N=x[b+0],P=x[b+1],H=x[b+2];R[U++]=N,R[U++]=P,R[U++]=P,R[U++]=H,R[U++]=H,R[U++]=N}}else{f=v.version;for(let x=0,b=0;x<m;x+=3){const U=x+0,N=x+1,P=x+2;R[b++]=U,R[b++]=N,R[b++]=N,R[b++]=P,R[b++]=P,R[b++]=U}}S.version=f;const A=r.get(_);A&&e.remove(A),r.set(_,S)}function u(_){const M=r.get(_);if(M){const v=_.index;v!==null&&M.version<v.version&&p(_)}else p(_);return r.get(_)}function h(){for(const _ in a){const M=a[_].deref();M!==void 0&&l(M)}}return{get:c,update:d,getWireframeAttribute:u,dispose:h}}function uw(t,e,n){let i;function a(p){i=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){t.drawElements(i,u,r,p*s),n.update(u,i,1)}function c(p,u,h){h!==0&&(t.drawElementsInstanced(i,u,r,p*s,h),n.update(u,i,h))}function d(p,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,h);let M=0;for(let v=0;v<h;v++)M+=u[v];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function fw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:ft("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function dw(t,e,n){const i=new WeakMap,a=new Ft;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let N=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var h=N;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),v===!0&&(S=3);let R=o.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const x=new Float32Array(R*A*4*p),b=new k1(x,R,A,p);b.type=Vi,b.needsUpdate=!0;const U=S*4;for(let P=0;P<p;P++){const H=f[P],k=m[P],O=y[P],V=R*A*4*P;for(let B=0;B<H.count;B++){const z=B*U;_===!0&&(a.fromBufferAttribute(H,B),x[V+z+0]=a.x,x[V+z+1]=a.y,x[V+z+2]=a.z,x[V+z+3]=0),M===!0&&(a.fromBufferAttribute(k,B),x[V+z+4]=a.x,x[V+z+5]=a.y,x[V+z+6]=a.z,x[V+z+7]=0),v===!0&&(a.fromBufferAttribute(O,B),x[V+z+8]=a.x,x[V+z+9]=a.y,x[V+z+10]=a.z,x[V+z+11]=O.itemSize===4?a.w:1)}}u={count:p,texture:b,size:new at(R,A)},i.set(o,u),o.addEventListener("dispose",N)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let v=0;v<c.length;v++)_+=c[v];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function hw(t,e,n,i,a){let r=new WeakMap;function s(c){const d=a.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:o}}const pw={[S1]:"LINEAR_TONE_MAPPING",[M1]:"REINHARD_TONE_MAPPING",[b1]:"CINEON_TONE_MAPPING",[E1]:"ACES_FILMIC_TONE_MAPPING",[A1]:"AGX_TONE_MAPPING",[R1]:"NEUTRAL_TONE_MAPPING",[T1]:"CUSTOM_TONE_MAPPING"};function mw(t,e,n,i,a,r){const s=new Xi(e,n,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new wi;d.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new kt([0,2,0,0,2,0],2));const p=new aR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new It(d,p),h=new eM(-1,1,1,-1,0,1);let _=null,M=null,v=!1,f,m=null,y=[],S=!1;this.setSize=function(R,A){s.setSize(R,A),o!==null&&o.setSize(R,A),l!==null&&l.setSize(R,A);for(let x=0;x<y.length;x++){const b=y[x];b.setSize&&b.setSize(R,A)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const A=s.width,x=s.height;y.length>0&&o===null&&(o=new Xi(A,x,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),l=new Xi(A,x,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));const b=a===!0&&y.some(U=>U.needsDepthTexture===!0);b!==(s.depthTexture!==null)&&(b===!0&&c===null&&(c=new io(A,x),r===!0&&(c.format=qa,c.type=no)),s.dispose(),s.depthTexture=b?c:null,s.resolveDepthBuffer=b,s.storeMultisampledDepthBuffer=b);for(let U=0;U<y.length;U++){const N=y[U];N.setSize&&N.setSize(A,x),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(R,A){if(v||R.toneMapping===ha&&y.length===0)return!1;if(m=A,A!==null){const x=A.width,b=A.height;(s.width!==x||s.height!==b)&&this.setSize(x,b)}return S===!1&&R.setRenderTarget(s),f=R.toneMapping,R.toneMapping=ha,!0},this.hasRenderPass=function(){return S},this.end=function(R,A){R.toneMapping=f,v=!0;let x=s,b=o;for(let U=0;U<y.length;U++){const N=y[U];N.enabled!==!1&&(N.render(R,b,x,A),N.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(_!==R.outputColorSpace||M!==R.toneMapping){_=R.outputColorSpace,M=R.toneMapping,p.defines={},rt.getTransfer(_)===_t&&(p.defines.SRGB_TRANSFER="");const U=pw[M];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(m),R.render(u,h),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),p.dispose()}}const rM=new On,sM=new io(1,1),oM=new Z1(1),lM=new k1,cM=new PA,uM=new Y1,zv=[],Fv=[],Bv=new Float32Array(16),Hv=new Float32Array(9),Gv=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=zv[a];if(r===void 0&&(r=new Float32Array(a),zv[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function df(t,e){let n=Fv[e];n===void 0&&(n=new Int32Array(e),Fv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Jt(n,i))return;Gv.set(i),t.uniformMatrix2fv(this.addr,!1,Gv),$t(n,i)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Jt(n,i))return;Hv.set(i),t.uniformMatrix3fv(this.addr,!1,Hv),$t(n,i)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Jt(n,i))return;Bv.set(i),t.uniformMatrix4fv(this.addr,!1,Bv),$t(n,i)}}function bw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function Rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function hf(t){return t.version===0&&(t.compareFunction=F1,t.needsUpdate=!0),t}function Nw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?r=hf(sM):r=rM,n.setTexture2D(e||r,a)}function Uw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||cM,a)}function Lw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=hf(oM):r=uM,n.setTextureCube(e||r,a)}function Ow(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||lM,a)}function Pw(t){switch(t){case 5126:return gw;case 35664:return vw;case 35665:return xw;case 35666:return _w;case 35674:return yw;case 35675:return Sw;case 35676:return Mw;case 5124:case 35670:return bw;case 35667:case 35671:return Ew;case 35668:case 35672:return Tw;case 35669:case 35673:return Aw;case 5125:return Rw;case 36294:return Cw;case 36295:return ww;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Nw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Lw;case 36289:case 36303:case 36311:case 36292:return Ow}}function Iw(t,e){t.uniform1fv(this.addr,e)}function zw(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function Fw(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function Bw(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function Hw(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Gw(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Vw(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function kw(t,e){t.uniform1iv(this.addr,e)}function jw(t,e){t.uniform2iv(this.addr,e)}function Ww(t,e){t.uniform3iv(this.addr,e)}function Xw(t,e){t.uniform4iv(this.addr,e)}function qw(t,e){t.uniform1uiv(this.addr,e)}function Yw(t,e){t.uniform2uiv(this.addr,e)}function Zw(t,e){t.uniform3uiv(this.addr,e)}function Kw(t,e){t.uniform4uiv(this.addr,e)}function Qw(t,e,n){const i=this.cache,a=e.length,r=df(n,a);Jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=hf(sM):s=rM;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function Jw(t,e,n){const i=this.cache,a=e.length,r=df(n,a);Jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||cM,r[s])}function $w(t,e,n){const i=this.cache,a=e.length,r=df(n,a);Jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));let s;this.type===t.SAMPLER_CUBE_SHADOW?s=hf(oM):s=uM;for(let o=0;o!==a;++o)n.setTextureCube(e[o]||s,r[o])}function eD(t,e,n){const i=this.cache,a=e.length,r=df(n,a);Jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||lM,r[s])}function tD(t){switch(t){case 5126:return Iw;case 35664:return zw;case 35665:return Fw;case 35666:return Bw;case 35674:return Hw;case 35675:return Gw;case 35676:return Vw;case 5124:case 35670:return kw;case 35667:case 35671:return jw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return qw;case 36294:return Yw;case 36295:return Zw;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return eD}}class nD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Pw(n.type)}}class iD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tD(n.type)}}class aD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function Vv(t,e){t.seq.push(e),t.map[e.id]=e}function rD(t,e,n){const i=t.name,a=i.length;for(Ed.lastIndex=0;;){const r=Ed.exec(i),s=Ed.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Vv(n,c===void 0?new nD(o,t,e):new iD(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new aD(o),Vv(n,p)),n=p}}}class iu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);rD(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function kv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sD=37297;let oD=0;function lD(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const jv=new Ge;function cD(t){rt._getMatrix(jv,rt.workingColorSpace,t);const e=`mat3( ${jv.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case zu:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Wv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+lD(t.getShaderSource(e),o)}else return r}function uD(t,e){const n=cD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const fD={[S1]:"Linear",[M1]:"Reinhard",[b1]:"Cineon",[E1]:"ACESFilmic",[A1]:"AgX",[R1]:"Neutral",[T1]:"Custom"};function dD(t,e){const n=fD[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nc=new Z;function hD(){rt.getLuminanceCoefficients(Nc);const t=Nc.x.toFixed(4),e=Nc.y.toFixed(4),n=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function mD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function zo(t){return t!==""}function Xv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function qv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vD=/^[ \t]*#include +<([\w\d./]+)>/gm;function wp(t){return t.replace(vD,xD)}function xD(t,e){const n=Ye[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return wp(n)}const _D=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yv(t){return t.replace(_D,yD)}function yD(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Zv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const SD={[Qc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function MD(t){return SD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bD={[Sl]:"ENVMAP_MODE_REFRACTION"};function ED(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":bD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TD={[y1]:"ENVMAP_BLENDING_MULTIPLY",[$2]:"ENVMAP_BLENDING_MIX",[eA]:"ENVMAP_BLENDING_ADD"};function AD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":TD[t.combine]||"ENVMAP_BLENDING_NONE"}function RD(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=MD(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=ED(n),p=AD(n),u=pD(n),h=mD(r),_=a.createProgram();let M,v,f=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(zo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(zo).join(`
`),v.length>0&&(v+=`
`)):(M=[Zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),v=[Zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ha?"#define TONE_MAPPING":"",n.toneMapping!==ha?Ye.tonemapping_pars_fragment:"",n.toneMapping!==ha?dD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,uD("linearToOutputTexel",n.outputColorSpace),hD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),s=wp(s),s=Xv(s,n),s=qv(s,n),o=wp(o),o=Xv(o,n),o=qv(o,n),s=Yv(s),o=Yv(o),n.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const m=f+M+s,y=f+v+o,S=kv(a,a.VERTEX_SHADER,m),R=kv(a,a.FRAGMENT_SHADER,y);a.attachShader(_,S),a.attachShader(_,R),n.index0AttributeName!==void 0?a.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function A(N){if(t.debug.checkShaderErrors){const P=a.getProgramInfoLog(_)||"",H=a.getShaderInfoLog(S)||"",k=a.getShaderInfoLog(R)||"",O=P.trim(),V=H.trim(),B=k.trim();let z=!0,Q=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,_,S,R);else{const W=Wv(a,S,"vertex"),D=Wv(a,R,"fragment");ft("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+W+`
`+D)}else O!==""?Be("WebGLProgram: Program Info Log:",O):(V===""||B==="")&&(Q=!1);Q&&(N.diagnostics={runnable:z,programLog:O,vertexShader:{log:V,prefix:M},fragmentShader:{log:B,prefix:v}})}a.deleteShader(S),a.deleteShader(R),x=new iu(a,_),b=gD(a,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(_,sD)),U},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=R,this}let CD=0;class wD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DD(e),n.set(e,i)),i}}class DD{constructor(e){this.id=CD++,this.code=e,this.usedTimes=0}}function ND(t){return t===jr||t===Ou||t===Pu}function UD(t,e,n,i,a,r){const s=new j1,o=new wD,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,U,N,P,H){const k=N.fog,O=P.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||V,B),Q=u[x.type];let W=i.precision;x.precision!==null&&(W=i.getMaxPrecision(x.precision),W!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));const D=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,C=D!==void 0?D.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let ce,G,ne,oe;if(Q){const Ee=Ii[Q];ce=Ee.vertexShader,G=Ee.fragmentShader}else{ce=x.vertexShader,G=x.fragmentShader;const Ee=o.getVertexShaderStage(x),xt=o.getFragmentShaderStage(x);o.update(x,Ee,xt),ne=Ee.id,oe=xt.id}const le=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),be=P.isInstancedMesh===!0,ze=P.isBatchedMesh===!0,_e=!!x.map,De=!!x.matcap,X=!!z,ue=X&&z.isPMREMTexture===!0,Fe=!!x.aoMap,Ke=!!x.lightMap,vt=!!x.bumpMap&&x.wireframe===!1,$e=!!x.normalMap,Ut=!!x.displacementMap,st=!!x.emissiveMap,_n=!!x.metalnessMap,ln=!!x.roughnessMap,cn=x.anisotropy>0,F=x.clearcoat>0,yn=x.diffuseRoughness>0,pt=x.dispersion>0,mt=x.retroreflectivity>0,ge=x.iridescence>0,Lt=x.sheen>0,Le=x.transmission>0,Ie=cn&&!!x.anisotropyMap,w=F&&!!x.clearcoatMap,E=F&&!!x.clearcoatNormalMap,q=F&&!!x.clearcoatRoughnessMap,fe=yn&&!!x.diffuseRoughnessMap,re=ge&&!!x.iridescenceMap,pe=ge&&!!x.iridescenceThicknessMap,Se=Lt&&!!x.sheenColorMap,$=Lt&&!!x.sheenRoughnessMap,ee=!!x.specularMap,ve=!!x.specularColorMap,L=!!x.specularIntensityMap,ie=Le&&!!x.transmissionMap,J=Le&&!!x.thicknessMap,xe=!!x.gradientMap,he=!!x.alphaMap,me=x.alphaTest>0,Oe=!!x.alphaHash,qe=!!x.extensions;let de=ha;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(de=t.toneMapping);const Pe=ue?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Xe={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:G,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:ze,batchingColor:ze&&P._colorsTexture!==null,instancing:be,instancingColor:be&&P.instanceColor!==null,instancingMorph:be&&P.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:_e,matcap:De,envMap:X,envMapMode:X&&z.mapping,envMapPMREM:ue,envMapMaxLod:ue?Pe.length-1:null,envMapSize:ue?Pe[0].width:null,aoMap:Fe,lightMap:Ke,bumpMap:vt,normalMap:$e,displacementMap:Ut,emissiveMap:st,normalMapObjectSpace:$e&&x.normalMapType===iA,normalMapTangentSpace:$e&&x.normalMapType===Ap,packedNormalMap:$e&&x.normalMapType===Ap&&ND(x.normalMap.format),metalnessMap:_n,roughnessMap:ln,anisotropy:cn,anisotropyMap:Ie,clearcoat:F,clearcoatMap:w,clearcoatNormalMap:E,clearcoatRoughnessMap:q,diffuseRoughness:yn,diffuseRoughnessMap:fe,dispersion:pt,retroreflection:mt,iridescence:ge,iridescenceMap:re,iridescenceThicknessMap:pe,sheen:Lt,sheenColorMap:Se,sheenRoughnessMap:$,specularMap:ee,specularColorMap:ve,specularIntensityMap:L,transmission:Le,transmissionMap:ie,thicknessMap:J,gradientMap:xe,opaque:x.transparent===!1&&x.blending===$o&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:me,alphaHash:Oe,combine:x.combine,mapUv:_e&&h(x.map.channel),aoMapUv:Fe&&h(x.aoMap.channel),lightMapUv:Ke&&h(x.lightMap.channel),bumpMapUv:vt&&h(x.bumpMap.channel),normalMapUv:$e&&h(x.normalMap.channel),displacementMapUv:Ut&&h(x.displacementMap.channel),emissiveMapUv:st&&h(x.emissiveMap.channel),metalnessMapUv:_n&&h(x.metalnessMap.channel),roughnessMapUv:ln&&h(x.roughnessMap.channel),anisotropyMapUv:Ie&&h(x.anisotropyMap.channel),clearcoatMapUv:w&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&h(x.sheenRoughnessMap.channel),specularMapUv:ee&&h(x.specularMap.channel),specularColorMapUv:ve&&h(x.specularColorMap.channel),specularIntensityMapUv:L&&h(x.specularIntensityMap.channel),transmissionMapUv:ie&&h(x.transmissionMap.channel),thicknessMapUv:J&&h(x.thicknessMap.channel),alphaMapUv:he&&h(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&($e||cn),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(_e||he),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&$e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:se,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:de,decodeVideoTexture:_e&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:st&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===oa,flipSided:x.side===Vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function M(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)b.push(U),b.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(b,x),f(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function v(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function f(x,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.diffuseRoughness&&s.enable(25),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function m(x){const b=u[x.type];let U;if(b){const N=Ii[b];U=tR.clone(N.uniforms)}else U=x.uniforms;return U}function y(x,b){let U=d.get(b);return U!==void 0?++U.usedTimes:(U=new RD(t,b,x,a),c.push(U),d.set(b,U)),U}function S(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:m,acquireProgram:y,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:A}}function LD(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function OD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Kv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qv(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,_,M,v,f){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:h,material:_,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:v,group:f},t[e]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=_,m.materialVariant=s(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=v,m.group=f),e++,m}function l(u,h,_,M,v,f,m){m.reversedDepth===!0&&(v=-v);const y=o(u,h,_,M,v,f);_.transmission>0?i.push(y):_.transparent===!0?a.push(y):n.push(y)}function c(u,h,_,M,v,f){const m=o(u,h,_,M,v,f);_.transmission>0?i.unshift(m):_.transparent===!0?a.unshift(m):n.unshift(m)}function d(u,h){n.length>1&&n.sort(u||OD),i.length>1&&i.sort(h||Kv),a.length>1&&a.sort(h||Kv)}function p(){for(let u=e,h=t.length;u<h;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:p,sort:d}}function PD(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new Qv,t.set(i,[s])):a>=r.length?(s=new Qv,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function ID(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new Z,color:new lt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function zD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FD=0;function BD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HD(t){const e=new ID,n=zD(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const a=new Z,r=new Bt,s=new Bt;function o(c){let d=0,p=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let h=0,_=0,M=0,v=0,f=0,m=0,y=0,S=0,R=0,A=0,x=0,b=0,U=0,N=0;c.sort(BD);for(let H=0,k=c.length;H<k;H++){const O=c[H],V=O.color,B=O.intensity,z=O.distance;let Q=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===jr?Q=O.shadow.map.texture:Q=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)d+=V.r*B,p+=V.g*B,u+=V.b*B;else if(O.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(O.sh.coefficients[W],B);N++}else if(O.isSunLight){const W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const D=O.shadow,C=n.get(O);C.shadowIntensity=D.intensity,C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),i.sunShadow[_]=C,i.sunShadowMap[_]=Q;const te=D.getViewportCount();for(let ce=0;ce<te;ce++)i.sunShadowMatrix[M+ce]=D.getMatrix(ce),i.sunShadowCascade[M+ce]=D._cascadeData[ce];M+=te,_++}i.sun[h]=W,h++}else if(O.isDirectionalLight){const W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const D=O.shadow,C=n.get(O);C.shadowIntensity=D.intensity,C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,i.directionalShadow[v]=C,i.directionalShadowMap[v]=Q,i.directionalShadowMatrix[v]=O.shadow.matrix,R++}i.directional[v]=W,v++}else if(O.isSpotLight){const W=e.get(O);W.position.setFromMatrixPosition(O.matrixWorld),W.color.copy(V).multiplyScalar(B),W.distance=z,W.coneCos=Math.cos(O.angle),W.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),W.decay=O.decay,i.spot[m]=W;const D=O.shadow;if(O.map&&(i.spotLightMap[b]=O.map,b++,D.updateMatrices(O),O.castShadow&&U++),i.spotLightMatrix[m]=D.matrix,O.castShadow){const C=n.get(O);C.shadowIntensity=D.intensity,C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,i.spotShadow[m]=C,i.spotShadowMap[m]=Q,x++}m++}else if(O.isRectAreaLight){const W=e.get(O);W.color.copy(V).multiplyScalar(B),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),i.rectArea[y]=W,y++}else if(O.isPointLight){const W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),W.distance=O.distance,W.decay=O.decay,O.castShadow){const D=O.shadow,C=n.get(O);C.shadowIntensity=D.intensity,C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,C.shadowCameraNear=D.camera.near,C.shadowCameraFar=D.camera.far,i.pointShadow[f]=C,i.pointShadowMap[f]=Q,i.pointShadowMatrix[f]=O.shadow.matrix,A++}i.point[f]=W,f++}else if(O.isHemisphereLight){const W=e.get(O);W.skyColor.copy(O.color).multiplyScalar(B),W.groundColor.copy(O.groundColor).multiplyScalar(B),i.hemi[S]=W,S++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const P=i.hash;(P.sunLength!==h||P.directionalLength!==v||P.pointLength!==f||P.spotLength!==m||P.rectAreaLength!==y||P.hemiLength!==S||P.numSunShadows!==_||P.numDirectionalShadows!==R||P.numPointShadows!==A||P.numSpotShadows!==x||P.numSpotMaps!==b||P.numLightProbes!==N)&&(i.sun.length=h,i.directional.length=v,i.spot.length=m,i.rectArea.length=y,i.point.length=f,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-U,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=N,P.sunLength=h,P.directionalLength=v,P.pointLength=f,P.spotLength=m,P.rectAreaLength=y,P.hemiLength=S,P.numSunShadows=_,P.numDirectionalShadows=R,P.numPointShadows=A,P.numSpotShadows=x,P.numSpotMaps=b,P.numLightProbes=N,i.version=FD++)}function l(c,d){let p=0,u=0,h=0,_=0,M=0,v=0;const f=d.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const S=c[m];if(S.isSunLight){const R=i.sun[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),p++}else if(S.isDirectionalLight){const R=i.directional[u];R.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(f),u++}else if(S.isSpotLight){const R=i.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(f),_++}else if(S.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),s.identity(),r.copy(S.matrixWorld),r.premultiply(f),s.extractRotation(r),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(s),R.halfHeight.applyMatrix4(s),M++}else if(S.isPointLight){const R=i.point[h];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),h++}else if(S.isHemisphereLight){const R=i.hemi[v];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:i}}function Jv(t){const e=new HD(t),n=[],i=[],a=[];function r(p){d.camera=p,n.length=0,i.length=0,a.length=0}function s(p){p.isLightProbeGrid?a.push(p):n.push(p)}function o(p){i.push(p)}function l(){e.setup(n),a.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){e.setupView(n,p)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function GD(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Jv(t),e.set(a,[o])):r>=s.length?(o=new Jv(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const VD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jD=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],WD=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],$v=new Bt,Do=new Z,Td=new Z;function XD(t,e,n){let i=new Tl;const a=new at,r=new at,s=new Ft,o=new rR,l=new sR,c={},d=n.maxTextureSize,p={[kr]:Vn,[Vn]:kr,[oa]:oa},u=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:VD,fragmentShader:kD}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new wi;_.setAttribute("position",new Or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new It(_,u),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let f=this.type;this.render=function(A,x,b){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;this.type===O2&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qc);const U=t.getRenderTarget(),N=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Hs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=f!==this.type;k&&x.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(V=>V.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,V=A.length;O<V;O++){const B=A[O],z=B.shadow;if(z===void 0){Be("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const Q=z.getFrameExtents();a.multiply(Q),r.copy(z.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/Q.x),a.x=r.x*Q.x,z.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/Q.y),a.y=r.y*Q.y,z.mapSize.y=r.y));const W=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Io){if(B.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Xi(a.x,a.y,{format:jr,type:Zi,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new io(a.x,a.y,Vi),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=cr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=pn,z.map.depthTexture.magFilter=pn}else B.isPointLight?(z.map=new Zm(a.x),z.map.depthTexture=new Z1(a.x,Yi)):(z.map=new Xi(a.x,a.y),z.map.depthTexture=new io(a.x,a.y,Yi)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=cr,this.type===Qc?(z.map.depthTexture.compareFunction=W?z1:I1,z.map.depthTexture.minFilter=Hn,z.map.depthTexture.magFilter=Hn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=pn,z.map.depthTexture.magFilter=pn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==a.x||z.map.height!==a.y)&&z.map.setSize(a.x,a.y);const D=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();B.isPointLight!==!0&&z.updateMatrices(B,b);const C=z.camera.layers.mask&4294967294?z.camera.layers:b.layers;for(let te=0;te<D;te++){const ce=z.getCamera(te);if(B.isPointLight){const G=z.camera,ne=z.matrix,oe=B.distance||G.far;oe!==G.far&&(G.far=oe,G.updateProjectionMatrix()),Do.setFromMatrixPosition(B.matrixWorld),G.position.copy(Do),Td.copy(G.position),Td.add(jD[te]),G.up.copy(WD[te]),G.lookAt(Td),G.updateMatrixWorld(),ne.makeTranslation(-Do.x,-Do.y,-Do.z),$v.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),z._frustum.setFromProjectionMatrix($v,G.coordinateSystem,G.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,te),t.clear();else{te===0&&(t.setRenderTarget(z.map),t.clear());const G=z.getViewport(te);s.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),H.viewport(s)}i=z.getFrustum(te),S(x,b,ce,B,C,this.type)}z.isPointLightShadow!==!0&&this.type===Io&&m(z,b),z.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(U,N,P)};function m(A,x){const b=e.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new Xi(a.x,a.y,{format:jr,type:Zi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(x,null,b,u,M,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(x,null,b,h,M,null)}function y(A,x,b,U){let N=null;const P=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)N=P;else if(N=b.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const H=N.uuid,k=x.uuid;let O=c[H];O===void 0&&(O={},c[H]=O);let V=O[k];V===void 0&&(V=N.clone(),O[k]=V,x.addEventListener("dispose",R)),N=V}if(N.visible=x.visible,N.wireframe=x.wireframe,U===Io?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:p[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const H=t.properties.get(N);H.light=b}return N}function S(A,x,b,U,N,P){if(A.visible===!1)return;if(A.layers.test(N)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===Io)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const O=e.update(A),V=A.material;if(Array.isArray(V)){const B=O.groups;for(let z=0,Q=B.length;z<Q;z++){const W=B[z],D=V[W.materialIndex];if(D&&D.visible){const C=y(A,D,U,P);A.onBeforeShadow(t,A,x,b,O,C,W),t.renderBufferDirect(b,null,O,C,A,W),A.onAfterShadow(t,A,x,b,O,C,W)}}}else if(V.visible){const B=y(A,V,U,P);A.onBeforeShadow(t,A,x,b,O,B,null),t.renderBufferDirect(b,null,O,B,A,null),A.onAfterShadow(t,A,x,b,O,B,null)}}const k=A.children;for(let O=0,V=k.length;O<V;O++)S(k[O],x,b,U,N,P)}function R(A){A.target.removeEventListener("dispose",R);for(const b in c){const U=c[b],N=A.target.uuid;N in U&&(U[N].dispose(),delete U[N])}}}function qD(t,e){function n(){let L=!1;const ie=new Ft;let J=null;const xe=new Ft(0,0,0,0);return{setMask:function(he){J!==he&&!L&&(t.colorMask(he,he,he,he),J=he)},setLocked:function(he){L=he},setClear:function(he,me,Oe,qe,de){de===!0&&(he*=qe,me*=qe,Oe*=qe),ie.set(he,me,Oe,qe),xe.equals(ie)===!1&&(t.clearColor(he,me,Oe,qe),xe.copy(ie))},reset:function(){L=!1,J=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,ie=!1,J=null,xe=null,he=null;return{setReversed:function(me){if(ie!==me){const Oe=e.get("EXT_clip_control");me?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ie=me;const qe=he;he=null,this.setClear(qe)}},getReversed:function(){return ie},setTest:function(me){me?se(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(me){J!==me&&!L&&(t.depthMask(me),J=me)},setFunc:function(me){if(ie&&(me=pA[me]),xe!==me){switch(me){case Gh:t.depthFunc(t.NEVER);break;case Vh:t.depthFunc(t.ALWAYS);break;case kh:t.depthFunc(t.LESS);break;case yl:t.depthFunc(t.LEQUAL);break;case jh:t.depthFunc(t.EQUAL);break;case Wh:t.depthFunc(t.GEQUAL);break;case Xh:t.depthFunc(t.GREATER);break;case qh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=me}},setLocked:function(me){L=me},setClear:function(me){he!==me&&(he=me,ie&&(me=1-me),t.clearDepth(me))},reset:function(){L=!1,J=null,xe=null,he=null,ie=!1}}}function a(){let L=!1,ie=null,J=null,xe=null,he=null,me=null,Oe=null,qe=null,de=null;return{setTest:function(Pe){L||(Pe?se(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(Pe){ie!==Pe&&!L&&(t.stencilMask(Pe),ie=Pe)},setFunc:function(Pe,Xe,Ee){(J!==Pe||xe!==Xe||he!==Ee)&&(t.stencilFunc(Pe,Xe,Ee),J=Pe,xe=Xe,he=Ee)},setOp:function(Pe,Xe,Ee){(me!==Pe||Oe!==Xe||qe!==Ee)&&(t.stencilOp(Pe,Xe,Ee),me=Pe,Oe=Xe,qe=Ee)},setLocked:function(Pe){L=Pe},setClear:function(Pe){de!==Pe&&(t.clearStencil(Pe),de=Pe)},reset:function(){L=!1,ie=null,J=null,xe=null,he=null,me=null,Oe=null,qe=null,de=null}}}const r=new n,s=new i,o=new a;let l={};const c=new WeakMap;let d={},p={},u={},h=new WeakMap,_=[],M=null,v=!1,f=null,m=null,y=null,S=null,R=null,A=null,x=null,b=new lt(0,0,0),U=0,N=!1,P=null,H=null,k=null,O=null,V=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=Q>=2);let D=null,C={};const te=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),G=new Ft().fromArray(te),ne=new Ft().fromArray(ce);function oe(L,ie,J,xe){const he=new Uint8Array(4),me=t.createTexture();t.bindTexture(L,me),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<J;Oe++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ie+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return me}const le={};le[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(t.DEPTH_TEST),s.setFunc(yl),vt(!1),$e(iv),se(t.CULL_FACE),Fe(Hs);function se(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function be(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function ze(L,ie){return u[L]!==ie?(t.bindFramebuffer(L,ie),u[L]=ie,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ie),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function _e(L,ie){let J=_,xe=!1;if(L){J=h.get(ie),J===void 0&&(J=[],h.set(ie,J));const he=L.textures;if(J.length!==he.length||J[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Oe=he.length;me<Oe;me++)J[me]=t.COLOR_ATTACHMENT0+me;J.length=he.length,xe=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,xe=!0);xe&&t.drawBuffers(J)}function De(L){return M!==L?(t.useProgram(L),M=L,!0):!1}const X={[gs]:t.FUNC_ADD,[I2]:t.FUNC_SUBTRACT,[z2]:t.FUNC_REVERSE_SUBTRACT};X[F2]=t.MIN,X[B2]=t.MAX;const ue={[H2]:t.ZERO,[G2]:t.ONE,[V2]:t.SRC_COLOR,[x1]:t.SRC_ALPHA,[Y2]:t.SRC_ALPHA_SATURATE,[X2]:t.DST_COLOR,[j2]:t.DST_ALPHA,[k2]:t.ONE_MINUS_SRC_COLOR,[_1]:t.ONE_MINUS_SRC_ALPHA,[q2]:t.ONE_MINUS_DST_COLOR,[W2]:t.ONE_MINUS_DST_ALPHA,[Z2]:t.CONSTANT_COLOR,[K2]:t.ONE_MINUS_CONSTANT_COLOR,[Q2]:t.CONSTANT_ALPHA,[J2]:t.ONE_MINUS_CONSTANT_ALPHA};function Fe(L,ie,J,xe,he,me,Oe,qe,de,Pe){if(L===Hs){v===!0&&(be(t.BLEND),v=!1);return}if(v===!1&&(se(t.BLEND),v=!0),L!==P2){if(L!==f||Pe!==N){if((m!==gs||R!==gs)&&(t.blendEquation(t.FUNC_ADD),m=gs,R=gs),Pe)switch(L){case $o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case av:t.blendFunc(t.ONE,t.ONE);break;case rv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",L);break}else switch(L){case $o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case av:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case rv:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sv:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",L);break}y=null,S=null,A=null,x=null,b.set(0,0,0),U=0,f=L,N=Pe}return}he=he||ie,me=me||J,Oe=Oe||xe,(ie!==m||he!==R)&&(t.blendEquationSeparate(X[ie],X[he]),m=ie,R=he),(J!==y||xe!==S||me!==A||Oe!==x)&&(t.blendFuncSeparate(ue[J],ue[xe],ue[me],ue[Oe]),y=J,S=xe,A=me,x=Oe),(qe.equals(b)===!1||de!==U)&&(t.blendColor(qe.r,qe.g,qe.b,de),b.copy(qe),U=de),f=L,N=!1}function Ke(L,ie){L.side===oa?be(t.CULL_FACE):se(t.CULL_FACE);let J=L.side===Vn;ie&&(J=!J),vt(J),L.blending===$o&&L.transparent===!1?Fe(Hs):Fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),st(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function vt(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function $e(L){L!==U2?(se(t.CULL_FACE),L!==H&&(L===iv?t.cullFace(t.BACK):L===L2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),H=L}function Ut(L){L!==k&&(z&&t.lineWidth(L),k=L)}function st(L,ie,J){L?(se(t.POLYGON_OFFSET_FILL),(O!==ie||V!==J)&&(O=ie,V=J,s.getReversed()&&(ie=-ie,J=-J),t.polygonOffset(ie,J))):be(t.POLYGON_OFFSET_FILL)}function _n(L){L?se(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function ln(L){L===void 0&&(L=t.TEXTURE0+B-1),D!==L&&(t.activeTexture(L),D=L)}function cn(L,ie,J){J===void 0&&(D===null?J=t.TEXTURE0+B-1:J=D);let xe=C[J];xe===void 0&&(xe={type:void 0,texture:void 0},C[J]=xe),(xe.type!==L||xe.texture!==ie)&&(D!==J&&(t.activeTexture(J),D=J),t.bindTexture(L,ie||le[L]),xe.type=L,xe.texture=ie)}function F(){const L=C[D];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function yn(){try{t.compressedTexImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function pt(){try{t.compressedTexImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function mt(){try{t.texSubImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function ge(){try{t.texSubImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function Lt(){try{t.compressedTexSubImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function Ie(){try{t.texStorage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function w(){try{t.texStorage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function E(){try{t.texImage2D(...arguments)}catch(L){ft("WebGLState:",L)}}function q(){try{t.texImage3D(...arguments)}catch(L){ft("WebGLState:",L)}}function fe(L){return p[L]!==void 0?p[L]:t.getParameter(L)}function re(L,ie){p[L]!==ie&&(t.pixelStorei(L,ie),p[L]=ie)}function pe(L){G.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),G.copy(L))}function Se(L){ne.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function $(L,ie){let J=c.get(ie);J===void 0&&(J=new WeakMap,c.set(ie,J));let xe=J.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(ie,L.name),t.uniformBlockBinding(ie,xe,xe),J.set(L,xe))}function ee(L,ie,J){const he=c.get(ie).get(L);l[he]!==J&&(t.bindBufferBase(t.UNIFORM_BUFFER,he,J),l[he]=J)}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},D=null,C={},u={},l={},h=new WeakMap,_=[],M=null,v=!1,f=null,m=null,y=null,S=null,R=null,A=null,x=null,b=new lt(0,0,0),U=0,N=!1,P=null,H=null,k=null,O=null,V=null,G.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:se,disable:be,bindFramebuffer:ze,drawBuffers:_e,useProgram:De,setBlending:Fe,setMaterial:Ke,setFlipSided:vt,setCullFace:$e,setLineWidth:Ut,setPolygonOffset:st,setScissorTest:_n,activeTexture:ln,bindTexture:cn,unbindTexture:F,compressedTexImage2D:yn,compressedTexImage3D:pt,texImage2D:E,texImage3D:q,pixelStorei:re,getParameter:fe,updateUBOMapping:$,uniformBlockBinding:ee,texStorage2D:Ie,texStorage3D:w,texSubImage2D:mt,texSubImage3D:ge,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Le,scissor:pe,viewport:Se,reset:ve}}function YD(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,d=new WeakMap,p=new Set;let u;const h=new WeakMap,_=new Set,M=new FinalizationRegistry(w=>_.delete(w));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,E){return v?new OffscreenCanvas(w,E):Fu("canvas")}function m(w,E,q){let fe=1;const re=Ie(w);if((re.width>q||re.height>q)&&(fe=q/Math.max(re.width,re.height)),fe<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const pe=Math.floor(fe*re.width),Se=Math.floor(fe*re.height);u===void 0&&(u=f(pe,Se));const $=E?f(pe,Se):u;return $.width=pe,$.height=Se,$.getContext("2d").drawImage(w,0,0,pe,Se),Be("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+pe+"x"+Se+")."),$}else return"data"in w&&Be("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),w;return w}function y(w){return w.generateMipmaps}function S(w){t.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(w,E,q,fe,re,pe=!1){if(w!==null){if(t[w]!==void 0)return t[w];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Se;fe&&(Se=e.get("EXT_texture_norm16"),Se||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=E;if(E===t.RED&&(q===t.FLOAT&&($=t.R32F),q===t.HALF_FLOAT&&($=t.R16F),q===t.UNSIGNED_BYTE&&($=t.R8),q===t.UNSIGNED_SHORT&&Se&&($=Se.R16_EXT),q===t.SHORT&&Se&&($=Se.R16_SNORM_EXT)),E===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&($=t.R8UI),q===t.UNSIGNED_SHORT&&($=t.R16UI),q===t.UNSIGNED_INT&&($=t.R32UI),q===t.BYTE&&($=t.R8I),q===t.SHORT&&($=t.R16I),q===t.INT&&($=t.R32I)),E===t.RG&&(q===t.FLOAT&&($=t.RG32F),q===t.HALF_FLOAT&&($=t.RG16F),q===t.UNSIGNED_BYTE&&($=t.RG8),q===t.UNSIGNED_SHORT&&Se&&($=Se.RG16_EXT),q===t.SHORT&&Se&&($=Se.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&($=t.RG8UI),q===t.UNSIGNED_SHORT&&($=t.RG16UI),q===t.UNSIGNED_INT&&($=t.RG32UI),q===t.BYTE&&($=t.RG8I),q===t.SHORT&&($=t.RG16I),q===t.INT&&($=t.RG32I)),E===t.RGB_INTEGER&&(q===t.UNSIGNED_BYTE&&($=t.RGB8UI),q===t.UNSIGNED_SHORT&&($=t.RGB16UI),q===t.UNSIGNED_INT&&($=t.RGB32UI),q===t.BYTE&&($=t.RGB8I),q===t.SHORT&&($=t.RGB16I),q===t.INT&&($=t.RGB32I)),E===t.RGBA_INTEGER&&(q===t.UNSIGNED_BYTE&&($=t.RGBA8UI),q===t.UNSIGNED_SHORT&&($=t.RGBA16UI),q===t.UNSIGNED_INT&&($=t.RGBA32UI),q===t.BYTE&&($=t.RGBA8I),q===t.SHORT&&($=t.RGBA16I),q===t.INT&&($=t.RGBA32I)),E===t.RGB&&(q===t.UNSIGNED_SHORT&&Se&&($=Se.RGB16_EXT),q===t.SHORT&&Se&&($=Se.RGB16_SNORM_EXT),q===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),q===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),E===t.RGBA){const ee=pe?zu:rt.getTransfer(re);q===t.FLOAT&&($=t.RGBA32F),q===t.HALF_FLOAT&&($=t.RGBA16F),q===t.UNSIGNED_BYTE&&($=ee===_t?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT&&Se&&($=Se.RGBA16_EXT),q===t.SHORT&&Se&&($=Se.RGBA16_SNORM_EXT),q===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(w,E){let q;return w?E===null||E===Yi||E===no?q=t.DEPTH24_STENCIL8:E===Vi?q=t.DEPTH32F_STENCIL8:E===Ml&&(q=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===no?q=t.DEPTH_COMPONENT24:E===Vi?q=t.DEPTH_COMPONENT32F:E===Ml&&(q=t.DEPTH_COMPONENT16),q}function b(w,E){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==pn&&w.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function U(w){const E=new WeakRef(w);i.get(w).__ref=E,_.add(E),M.register(w,E,E)}function N(w){const E=i.get(w).__ref;E!==void 0&&(_.delete(E),M.unregister(E))}function P(w){k(w.target)}function H(w){O(w.target)}function k(w){w.removeEventListener("dispose",P),N(w),B(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&p.delete(w)}function O(w){w.removeEventListener("dispose",H),N(w),Q(w)}function V(){for(const w of _){const E=w.deref();E!==void 0&&(E.isRenderTarget===!0?O(E):k(E))}_.clear(),p.clear()}function B(w){const E=i.get(w);if(E.__webglInit===void 0)return;const q=w.source,fe=h.get(q);if(fe){const re=fe[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&z(w),Object.keys(fe).length===0&&h.delete(q)}i.remove(w)}function z(w){const E=i.get(w);t.deleteTexture(E.__webglTexture);const q=w.source,fe=h.get(q);delete fe[E.__cacheKey],s.memory.textures--}function Q(w){const E=i.get(w);E.__depthDisposeCallback&&E.__depthDisposeCallback();const q=w.depthTexture;if(q&&q.renderTarget===w&&k(q),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let pe=0;pe<E.__webglFramebuffer[re].length;pe++)t.deleteFramebuffer(E.__webglFramebuffer[re][pe]);else t.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)t.deleteFramebuffer(E.__webglFramebuffer[re]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const fe=w.textures;for(let re=0,pe=fe.length;re<pe;re++){const Se=i.get(fe[re]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),s.memory.textures--),i.remove(fe[re])}i.remove(w)}let W=0;function D(){W=0}function C(){return W}function te(w){W=w}function ce(){const w=W;return w>=a.maxTextures&&Be("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+a.maxTextures),W+=1,w}function G(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.mipmapsAutoUpdate),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function ne(w,E){const q=i.get(w);if(w.isVideoTexture&&Lt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&q.__version!==w.version){const fe=w.image;if(fe===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(q,w,E);return}}else w.isExternalTexture&&(q.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+E)}function oe(w,E){const q=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){Ke(q,w,E);return}else w.isExternalTexture&&(q.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+E)}function le(w,E){const q=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){Ke(q,w,E);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+E)}function se(w,E){const q=i.get(w);if(w.version>0&&q.__version!==w.version){vt(q,w,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+E)}const be={[Yh]:t.REPEAT,[ua]:t.CLAMP_TO_EDGE,[Zh]:t.MIRRORED_REPEAT},ze={[pn]:t.NEAREST,[tA]:t.NEAREST_MIPMAP_NEAREST,[cc]:t.NEAREST_MIPMAP_LINEAR,[Hn]:t.LINEAR,[td]:t.LINEAR_MIPMAP_NEAREST,[Xa]:t.LINEAR_MIPMAP_LINEAR},_e={[rA]:t.NEVER,[F1]:t.ALWAYS,[sA]:t.LESS,[I1]:t.LEQUAL,[oA]:t.EQUAL,[z1]:t.GEQUAL,[lA]:t.GREATER,[cA]:t.NOTEQUAL};function De(w,E){if(E.type===Vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Hn||E.magFilter===td||E.magFilter===cc||E.magFilter===Xa||E.minFilter===Hn||E.minFilter===td||E.minFilter===cc||E.minFilter===Xa)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,be[E.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,be[E.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,be[E.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,ze[E.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,ze[E.minFilter]),E.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===pn||E.minFilter!==cc&&E.minFilter!==Xa||E.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function X(w,E){let q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",P),U(E));const fe=E.source;let re=h.get(fe);re===void 0&&(re={},h.set(fe,re));const pe=G(E);if(pe!==w.__cacheKey){re[pe]===void 0&&(re[pe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,q=!0),re[pe].usedTimes++;const Se=re[w.__cacheKey];Se!==void 0&&(re[w.__cacheKey].usedTimes--,Se.usedTimes===0&&z(E)),w.__cacheKey=pe,w.__webglTexture=re[pe].texture}return q}function ue(w,E,q){return Math.floor(Math.floor(w/q)/E)}function Fe(w,E,q,fe){const pe=w.updateRanges;if(pe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,q,fe,E.data);else{pe.sort((L,ie)=>L.start-ie.start);let Se=0;for(let L=1;L<pe.length;L++){const ie=pe[Se],J=pe[L],xe=ie.start+ie.count,he=ue(J.start,E.width,4),me=ue(ie.start,E.width,4);J.start<=xe+1&&he===me&&ue(J.start+J.count-1,E.width,4)===he?ie.count=Math.max(ie.count,J.start+J.count-ie.start):(++Se,pe[Se]=J)}pe.length=Se+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),ve=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let L=0,ie=pe.length;L<ie;L++){const J=pe[L],xe=Math.floor(J.start/4),he=Math.ceil(J.count/4),me=xe%E.width,Oe=Math.floor(xe/E.width),qe=he,de=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,Oe),n.texSubImage2D(t.TEXTURE_2D,0,me,Oe,qe,de,q,fe,E.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function Ke(w,E,q){let fe=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=t.TEXTURE_3D);const re=X(w,E),pe=E.source;n.bindTexture(fe,w.__webglTexture,t.TEXTURE0+q);const Se=i.get(pe);if(pe.version!==Se.__version||re===!0){if(n.activeTexture(t.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const de=rt.getPrimaries(rt.workingColorSpace),Pe=E.colorSpace===Ba?null:rt.getPrimaries(E.colorSpace),Xe=E.colorSpace===Ba||de===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=m(E.image,!1,a.maxTextureSize);ee=Le(E,ee);const ve=r.convert(E.format,E.colorSpace),L=r.convert(E.type);let ie=A(E.internalFormat,ve,L,E.normalized,E.colorSpace,E.isVideoTexture);De(fe,E);let J;const xe=E.mipmaps,he=E.isVideoTexture!==!0,me=Se.__version===void 0||re===!0,Oe=pe.dataReady,qe=b(E,ee);if(E.isDepthTexture)ie=x(E.format===qa,E.type),me&&(he?n.texStorage2D(t.TEXTURE_2D,1,ie,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ie,ee.width,ee.height,0,ve,L,null));else if(E.isDataTexture)if(xe.length>0){he&&me&&n.texStorage2D(t.TEXTURE_2D,qe,ie,xe[0].width,xe[0].height);for(let de=0,Pe=xe.length;de<Pe;de++)J=xe[de],he?Oe&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,J.width,J.height,ve,L,J.data):n.texImage2D(t.TEXTURE_2D,de,ie,J.width,J.height,0,ve,L,J.data);E.generateMipmaps=!1}else he?(me&&n.texStorage2D(t.TEXTURE_2D,qe,ie,ee.width,ee.height),Oe&&Fe(E,ee,ve,L)):n.texImage2D(t.TEXTURE_2D,0,ie,ee.width,ee.height,0,ve,L,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){he&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,ie,xe[0].width,xe[0].height,ee.depth);for(let de=0,Pe=xe.length;de<Pe;de++)if(J=xe[de],E.format!==ki)if(ve!==null)if(he){if(Oe)if(E.layerUpdates.size>0){const Xe=Uv(J.width,J.height,E.format,E.type);for(const Ee of E.layerUpdates){const xt=J.data.subarray(Ee*Xe/J.data.BYTES_PER_ELEMENT,(Ee+1)*Xe/J.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,Ee,J.width,J.height,1,ve,xt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,J.width,J.height,ee.depth,ve,J.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,ie,J.width,J.height,ee.depth,0,J.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Oe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,J.width,J.height,ee.depth,ve,L,J.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,ie,J.width,J.height,ee.depth,0,ve,L,J.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{he&&me&&n.texStorage2D(t.TEXTURE_2D,qe,ie,xe[0].width,xe[0].height);for(let de=0,Pe=xe.length;de<Pe;de++)J=xe[de],E.format!==ki?ve!==null?he?Oe&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,J.width,J.height,ve,J.data):n.compressedTexImage2D(t.TEXTURE_2D,de,ie,J.width,J.height,0,J.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Oe&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,J.width,J.height,ve,L,J.data):n.texImage2D(t.TEXTURE_2D,de,ie,J.width,J.height,0,ve,L,J.data)}else if(E.isDataArrayTexture)if(he){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,ie,ee.width,ee.height,ee.depth),Oe)if(E.layerUpdates.size>0){const de=Uv(ee.width,ee.height,E.format,E.type);for(const Pe of E.layerUpdates){const Xe=ee.data.subarray(Pe*de/ee.data.BYTES_PER_ELEMENT,(Pe+1)*de/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Pe,ee.width,ee.height,1,ve,L,Xe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ve,L,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ie,ee.width,ee.height,ee.depth,0,ve,L,ee.data);else if(E.isData3DTexture)he?(me&&n.texStorage3D(t.TEXTURE_3D,qe,ie,ee.width,ee.height,ee.depth),Oe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ve,L,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ie,ee.width,ee.height,ee.depth,0,ve,L,ee.data);else if(E.isFramebufferTexture){if(me)if(he)n.texStorage2D(t.TEXTURE_2D,qe,ie,ee.width,ee.height);else{let de=ee.width,Pe=ee.height;for(let Xe=0;Xe<qe;Xe++)n.texImage2D(t.TEXTURE_2D,Xe,ie,de,Pe,0,ve,L,null),de>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const de=t.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),ee.parentNode!==de){de.appendChild(ee),p.add(E),de.onpaint=Pe=>{const Xe=Pe.changedElements;for(const Ee of p)Xe.includes(Ee.image)&&(Ee.needsUpdate=!0)},de.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const Xe=t.RGBA,Ee=t.RGBA,xt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Xe,Ee,xt,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(xe.length>0){if(he&&me){const de=Ie(xe[0]);n.texStorage2D(t.TEXTURE_2D,qe,ie,de.width,de.height)}for(let de=0,Pe=xe.length;de<Pe;de++)J=xe[de],he?Oe&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ve,L,J):n.texImage2D(t.TEXTURE_2D,de,ie,ve,L,J);E.generateMipmaps=!1}else if(he){if(me){const de=Ie(ee);n.texStorage2D(t.TEXTURE_2D,qe,ie,de.width,de.height)}Oe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,L,ee)}else n.texImage2D(t.TEXTURE_2D,0,ie,ve,L,ee);y(E)&&E.mipmapsAutoUpdate===!0&&S(fe),Se.__version=pe.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function vt(w,E,q){if(E.image.length!==6)return;const fe=X(w,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+q);const pe=i.get(re);if(re.version!==pe.__version||fe===!0){n.activeTexture(t.TEXTURE0+q);const Se=rt.getPrimaries(rt.workingColorSpace),$=E.colorSpace===Ba?null:rt.getPrimaries(E.colorSpace),ee=E.colorSpace===Ba||Se===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ve=E.isCompressedTexture||E.image[0].isCompressedTexture,L=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let Ee=0;Ee<6;Ee++)!ve&&!L?ie[Ee]=m(E.image[Ee],!0,a.maxCubemapSize):ie[Ee]=L?E.image[Ee].image:E.image[Ee],ie[Ee]=Le(E,ie[Ee]);const J=ie[0],xe=r.convert(E.format,E.colorSpace),he=r.convert(E.type);let me=A(E.internalFormat,xe,he,E.normalized,E.colorSpace);const Oe=E.isVideoTexture!==!0,qe=pe.__version===void 0||fe===!0,de=re.dataReady;let Pe=b(E,J);De(t.TEXTURE_CUBE_MAP,E);let Xe;if(E.isDepthTexture){if(me=x(E.format===qa,E.type),qe)if(Oe)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,me,J.width,J.height);else for(let Ee=0;Ee<6;Ee++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,J.width,J.height,0,xe,he,null)}else if(ve){Oe&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,me,J.width,J.height);for(let Ee=0;Ee<6;Ee++){Xe=ie[Ee].mipmaps;for(let xt=0;xt<Xe.length;xt++){const en=Xe[xt];E.format!==ki?xe!==null?Oe?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt,0,0,en.width,en.height,xe,en.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt,me,en.width,en.height,0,en.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt,0,0,en.width,en.height,xe,he,en.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt,me,en.width,en.height,0,xe,he,en.data)}}}else{if(Xe=E.mipmaps,Oe&&qe){Xe.length>0&&Pe++;const Ee=Ie(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,me,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(L){Oe?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ie[Ee].width,ie[Ee].height,xe,he,ie[Ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,ie[Ee].width,ie[Ee].height,0,xe,he,ie[Ee].data);for(let xt=0;xt<Xe.length;xt++){const Ea=Xe[xt].image[Ee].image;Oe?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt+1,0,0,Ea.width,Ea.height,xe,he,Ea.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt+1,me,Ea.width,Ea.height,0,xe,he,Ea.data)}}else{Oe?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,xe,he,ie[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,xe,he,ie[Ee]);for(let xt=0;xt<Xe.length;xt++){const en=Xe[xt];Oe?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt+1,0,0,xe,he,en.image[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt+1,me,xe,he,en.image[Ee])}}}y(E)&&E.mipmapsAutoUpdate===!0&&S(t.TEXTURE_CUBE_MAP),pe.__version=re.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function $e(w,E,q,fe,re,pe){const Se=r.convert(q.format,q.colorSpace),$=r.convert(q.type),ee=A(q.internalFormat,Se,$,q.normalized,q.colorSpace),ve=i.get(E),L=i.get(q);if(L.__renderTarget=E,!ve.__hasExternalTextures){const ie=Math.max(1,E.width>>pe),J=Math.max(1,E.height>>pe);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,pe,ee,ie,J,E.depth,0,Se,$,null):n.texImage2D(re,pe,ee,ie,J,0,Se,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),ge(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,re,L.__webglTexture,0,mt(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,fe,re,L.__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ut(w,E,q){if(t.bindRenderbuffer(t.RENDERBUFFER,w),E.depthBuffer){const fe=E.depthTexture,re=fe&&fe.isDepthTexture?fe.type:null,pe=x(E.stencilBuffer,re),Se=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ge(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(E),pe,E.width,E.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(E),pe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,pe,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,w)}else{const fe=E.textures;for(let re=0;re<fe.length;re++){const pe=fe[re],Se=r.convert(pe.format,pe.colorSpace),$=r.convert(pe.type),ee=A(pe.internalFormat,Se,$,pe.normalized,pe.colorSpace);ge(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(E),ee,E.width,E.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(E),ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function st(w,E,q){const fe=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=i.get(E.depthTexture);re.__renderTarget=E;const pe=fe?E.depthTexture.image[0]:E.depthTexture.image;(!re.__webglTexture||pe.width!==E.width||pe.height!==E.height)&&(pe.width=E.width,pe.height=E.height,E.depthTexture.needsUpdate=!0),fe?se(E.depthTexture,0):ne(E.depthTexture,0);const Se=re.__webglTexture,$=mt(E),ee=fe?t.TEXTURE_CUBE_MAP_POSITIVE_X+q:t.TEXTURE_2D,ve=E.depthTexture.format===qa?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===cr)ge(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ve,ee,Se,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,ve,ee,Se,0);else if(E.depthTexture.format===qa)ge(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ve,ee,Se,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,ve,ee,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _n(w){const E=i.get(w),q=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const fe=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",re)};fe.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=fe}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let fe=0;fe<6;fe++)st(E.__webglFramebuffer[fe],w,fe);else w.texture.mipmaps.length>0?st(E.__webglFramebuffer[0],w,0):st(E.__webglFramebuffer,w,0);else if(q){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=t.createRenderbuffer(),Ut(E.__webglDepthbuffer[fe],w,!1);else{const re=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer[fe];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,pe)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Ut(E.__webglDepthbuffer,w,!1);else{const re=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,pe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ln(w,E,q){const fe=i.get(w);E!==void 0&&$e(fe.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&_n(w)}function cn(w){const E=w.texture,q=i.get(w),fe=i.get(E);w.addEventListener("dispose",H),U(w);const re=w.textures,pe=w.isWebGLCubeRenderTarget===!0,Se=re.length>1;if(Se||(fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture()),fe.__version=E.version,s.memory.textures++),pe){q.__webglFramebuffer=[];for(let $=0;$<6;$++)if(E.mipmaps.length>0){q.__webglFramebuffer[$]=[];for(let ee=0;ee<E.mipmaps.length;ee++)q.__webglFramebuffer[$][ee]=t.createFramebuffer()}else q.__webglFramebuffer[$]=t.createFramebuffer()}else{if(E.mipmaps.length>0){q.__webglFramebuffer=[];for(let $=0;$<E.mipmaps.length;$++)q.__webglFramebuffer[$]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Se)for(let $=0,ee=re.length;$<ee;$++){const ve=i.get(re[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),s.memory.textures++)}if(w.samples>0&&ge(w)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let $=0;$<re.length;$++){const ee=re[$];q.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[$]);const ve=r.convert(ee.format,ee.colorSpace),L=r.convert(ee.type),ie=A(ee.internalFormat,ve,L,ee.normalized,ee.colorSpace,w.isXRRenderTarget===!0),J=mt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,J,ie,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,q.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),Ut(q.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,fe.__webglTexture),De(t.TEXTURE_CUBE_MAP,E);for(let $=0;$<6;$++)if(E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)$e(q.__webglFramebuffer[$][ee],w,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else $e(q.__webglFramebuffer[$],w,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);y(E)?S(t.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}else if(Se){for(let $=0,ee=re.length;$<ee;$++){const ve=re[$],L=i.get(ve);let ie=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,L.__webglTexture),De(ie,ve),$e(q.__webglFramebuffer,w,ve,t.COLOR_ATTACHMENT0+$,ie,0),y(ve)&&S(ie)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,fe.__webglTexture),De($,E),E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)$e(q.__webglFramebuffer[ee],w,E,t.COLOR_ATTACHMENT0,$,ee);else $e(q.__webglFramebuffer,w,E,t.COLOR_ATTACHMENT0,$,0);y(E)?S($):E.mipmaps.length>0&&t.texParameteri($,t.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&_n(w)}function F(w){const E=w.textures;for(let q=0,fe=E.length;q<fe;q++){const re=E[q];if(y(re)&&re.mipmapsAutoUpdate===!0){const pe=R(w),Se=i.get(re).__webglTexture;n.bindTexture(pe,Se),S(pe),n.unbindTexture()}}}const yn=[];function pt(w){if(w.samples>0){if(ge(w)===!1){const E=w.textures,q=w.width,fe=w.height;let re=t.COLOR_BUFFER_BIT;const pe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(w),$=E.length>1;if($)for(let ve=0;ve<E.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const L=i.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,L,0)}t.blitFramebuffer(0,0,q,fe,0,0,q,fe,re,t.NEAREST),l===!0&&(yn.length=0,yn.push(t.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&yn.push(pe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let ve=0;ve<E.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const L=i.get(E[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,L,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const E=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function mt(w){return Math.min(a.maxSamples,w.samples)}function ge(w){const E=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(w){const E=s.render.frame;d.get(w)!==E&&(d.set(w,E),w.update())}function Le(w,E){const q=w.colorSpace,fe=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||q!==Iu&&q!==Ba&&(rt.getTransfer(q)===_t?(fe!==ki||re!==Qn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",q)),E}function Ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=ce,this.resetTextureUnits=D,this.getTextureUnits=C,this.setTextureUnits=te,this.setTexture2D=ne,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=se,this.rebindTextures=ln,this.setupRenderTarget=cn,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=_n,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=ge,this.dispose=V}function ZD(t,e){function n(i,a=Ba){let r;const s=rt.getTransfer(a);if(i===Qn)return t.UNSIGNED_BYTE;if(i===Bm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===N1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===U1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===w1)return t.BYTE;if(i===D1)return t.SHORT;if(i===Ml)return t.UNSIGNED_SHORT;if(i===Fm)return t.INT;if(i===Yi)return t.UNSIGNED_INT;if(i===Vi)return t.FLOAT;if(i===Zi)return t.HALF_FLOAT;if(i===L1)return t.ALPHA;if(i===O1)return t.RGB;if(i===ki)return t.RGBA;if(i===cr)return t.DEPTH_COMPONENT;if(i===qa)return t.DEPTH_STENCIL;if(i===P1)return t.RED;if(i===Gm)return t.RED_INTEGER;if(i===jr)return t.RG;if(i===Vm)return t.RG_INTEGER;if(i===km)return t.RGBA_INTEGER;if(i===Jc||i===$c||i===eu||i===tu)if(s===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$c)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$c)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kh||i===Qh||i===Jh||i===$h)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ep||i===tp||i===np||i===ip||i===ap||i===Ou||i===rp)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ep||i===tp)return s===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===np)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ip)return r.COMPRESSED_R11_EAC;if(i===ap)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ou)return r.COMPRESSED_RG11_EAC;if(i===rp)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sp||i===op||i===lp||i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===vp||i===xp||i===_p)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===op)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===up)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_p)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yp||i===Sp||i===Mp)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yp)return s===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bp||i===Ep||i===Pu||i===Tp)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bp)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ep)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===no?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const KD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QD=`
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

}`;class JD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new K1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wr({vertexShader:KD,fragmentShader:QD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new It(new ff(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $D extends Qr{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,h=null,_=null;const M=typeof XRWebGLBinding<"u",v=new JD,f={},m=n.getContextAttributes();let y=null,S=null;const R=[],A=[],x=new at;let b=null,U=null;const N=new bi;N.viewport=new Ft;const P=new bi;P.viewport=new Ft;const H=[N,P],k=new uR;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=R[G];return ne===void 0&&(ne=new ld,R[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=R[G];return ne===void 0&&(ne=new ld,R[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=R[G];return ne===void 0&&(ne=new ld,R[G]=ne),ne.getHandSpace()};function B(G){const ne=A.indexOf(G.inputSource);if(ne===-1)return;const oe=R[ne];oe!==void 0&&(oe.update(G.inputSource,G.frame,c||s),oe.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",Q);for(let G=0;G<R.length;G++){const ne=A[G];ne!==null&&(A[G]=null,R[G].disconnect(ne))}O=null,V=null,v.reset();for(const G in f)delete f[G];if(e.setRenderTarget(y),h=null,u=null,p=null,a=null,S=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),U!==null){const G=U.camera;G.fov=U.fov,G.zoom=U.zoom,G.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(G){if(a=G,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",z),a.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,le=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?qa:cr,le=m.stencil?no:Yi);const be={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(be),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Xi(u.textureWidth,u.textureHeight,{format:ki,type:Qn,depthTexture:new io(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(a,n,oe),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Xi(h.framebufferWidth,h.framebufferHeight,{format:ki,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),ce.setContext(a),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(G){for(let ne=0;ne<G.removed.length;ne++){const oe=G.removed[ne],le=A.indexOf(oe);le>=0&&(A[le]=null,R[le].disconnect(oe))}for(let ne=0;ne<G.added.length;ne++){const oe=G.added[ne];let le=A.indexOf(oe);if(le===-1){for(let be=0;be<R.length;be++)if(be>=A.length){A.push(oe),le=be;break}else if(A[be]===null){A[be]=oe,le=be;break}if(le===-1)break}const se=R[le];se&&se.connect(oe)}}function W(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(a===null)return;let ne=G.near,oe=G.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),k.near=P.near=N.near=ne,k.far=P.far=N.far=oe,(O!==k.near||V!==k.far)&&(a.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,V=k.far),k.layers.mask=G.layers.mask|6,N.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;const le=G.parent,se=k.cameras;W(k,le);for(let be=0;be<se.length;be++)W(se[be],le);k.projectionMatrix.copy(N.projectionMatrix),k.projectionMatrixInverse.copy(N.projectionMatrixInverse),U===null&&G.isPerspectiveCamera&&(U={camera:G,fov:G.fov,zoom:G.zoom}),D(G,k,le)};function D(G,ne,oe){oe===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(oe.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=El*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(k)},this.getCameraTexture=function(G){return f[G]};let C=null;function te(G,ne){if(d=ne.getViewerPose(c||s),_=ne,d!==null){const oe=d.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let le=!1;oe.length!==k.cameras.length&&(k.cameras.length=0,le=!0);for(let _e=0;_e<oe.length;_e++){const De=oe[_e];let X=null;if(h!==null)X=h.getViewport(De);else{const Fe=p.getViewSubImage(u,De);X=Fe.viewport,_e===0&&(e.setRenderTargetTextures(S,Fe.colorTexture,Fe.depthStencilTexture),e.setRenderTarget(S))}let ue=H[_e];ue===void 0&&(ue=new bi,ue.layers.enable(_e),ue.viewport=new Ft,H[_e]=ue),ue.matrix.fromArray(De.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(De.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(X.x,X.y,X.width,X.height),_e===0&&(k.matrix.copy(ue.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),le===!0&&k.cameras.push(ue)}const se=a.enabledFeatures;if(se&&se.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const _e=p.getDepthInformation(oe[0]);_e&&_e.isValid&&_e.texture&&v.init(_e,a.renderState)}if(se&&se.includes("camera-access")&&M){e.state.unbindTexture(),p=i.getBinding();for(let _e=0;_e<oe.length;_e++){const De=oe[_e].camera;if(De){let X=f[De];X||(X=new K1,f[De]=X);const ue=p.getCameraImage(De);X.sourceTexture=ue}}}}for(let oe=0;oe<R.length;oe++){const le=A[oe],se=R[oe];le!==null&&se!==void 0&&se.update(le,ne,c||s)}C&&C(G,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const ce=new tM;ce.setAnimationLoop(te),this.setAnimationLoop=function(G){C=G},this.dispose=function(){}}}const eN=new Bt,fM=new Ge;fM.set(-1,0,0,0,1,0,0,0,1);function tN(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,Q1(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function a(v,f,m,y,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(v,f):f.isMeshLambertMaterial?(r(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(v,f),p(v,f)):f.isMeshPhongMaterial?(r(v,f),d(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(v,f),u(v,f),f.isMeshPhysicalMaterial&&h(v,f,S)):f.isMeshMatcapMaterial?(r(v,f),_(v,f)):f.isMeshDepthMaterial?r(v,f):f.isMeshDistanceMaterial?(r(v,f),M(v,f)):f.isMeshNormalMaterial?r(v,f):f.isLineBasicMaterial?(s(v,f),f.isLineDashedMaterial&&o(v,f)):f.isPointsMaterial?l(v,f,m,y):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===Vn&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===Vn&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const m=e.get(f),y=m.envMap,S=m.envMapRotation;y&&(v.envMap.value=y,v.envMapRotation.value.setFromMatrix4(eN.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(fM),v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap&&(v.lightMap.value=f.lightMap,v.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,v.lightMapTransform)),f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function s(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function o(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,m,y){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*m,v.scale.value=y*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function d(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function p(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function u(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function h(v,f,m){v.ior.value=f.ior,f.diffuseRoughness>0&&(v.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=f.diffuseRoughnessMap,n(f.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vn&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.retroreflectivity>0&&(v.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,f){f.matcap&&(v.matcap.value=f.matcap)}function M(v,f){const m=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function nN(t,e,n,i){let a={},r={};function s(m,y){const S=y.program;i.uniformBlockBinding(m,S,a[m.id])}function o(m,y){let S=a[m.id];S===void 0&&(_(m),S=l(m),a[m.id]=S,m.addEventListener("dispose",v));const R=y.program;i.updateUBOMapping(m,R);const A=e.render.frame;r[m.id]!==A&&(c(m),r[m.id]=A)}function l(m){const y=t.createBuffer(),S=m.__size,R=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,S,R),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function c(m){const y=a[m.id],S=m.uniforms,R=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,x=S.length;A<x;A++){const b=S[A];if(Array.isArray(b))for(let U=0,N=b.length;U<N;U++)d(b[U],A,U,R);else d(b,A,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(m,y,S,R){if(u(m,y,S,R)===!0){const A=m.__offset,x=m.value;if(Array.isArray(x)){let b=0;for(let U=0;U<x.length;U++){const N=x[U],P=M(N,!0);p(N,m.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,A,m.__data)}}function p(m,y,S){typeof m=="number"||typeof m=="boolean"?y[S]=m:m.isMatrix3?(y[S]=m.elements[0],y[S+1]=m.elements[1],y[S+2]=m.elements[2],y[S+3]=0,y[S+4]=m.elements[3],y[S+5]=m.elements[4],y[S+6]=m.elements[5],y[S+7]=0,y[S+8]=m.elements[6],y[S+9]=m.elements[7],y[S+10]=m.elements[8],y[S+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-S),S):m.toArray(y,S)}function u(m,y,S,R){const A=m.value,x=y+"_"+S;if(Array.isArray(A)){R[x]===void 0&&(R[x]=[]);const b=R[x];let U=!1;for(let N=0;N<A.length;N++)h(A[N],b,N)===!0&&(U=!0);return U}return h(A,R,x)}function h(m,y,S){if(y[S]===void 0)return typeof m=="number"||typeof m=="boolean"?y[S]=m:ArrayBuffer.isView(m)?y[S]=m.slice():y[S]=m.clone(),!0;{const R=y[S];if(typeof m=="number"||typeof m=="boolean"){if(R!==m)return y[S]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(R.equals(m)===!1)return R.copy(m),!0}}return!1}function _(m){const y=m.uniforms;let S=0;const R=16;for(let x=0,b=y.length;x<b;x++){const U=Array.isArray(y[x])?y[x]:[y[x]];for(let N=0,P=U.length;N<P;N++){const H=U[N],k=Array.isArray(H.value)?H.value:[H.value],O=Array.isArray(y[x])||Array.isArray(H.value);let V=S;for(let z=0,Q=k.length;z<Q;z++){const W=k[z],D=M(W,O),C=S%R,te=C%D.boundary,ce=C+te;S+=te,ce!==0&&R-ce<D.storage&&(S+=R-ce),z===0&&(V=S),S+=D.storage}const B=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new B((S-V)/Float32Array.BYTES_PER_ELEMENT),H.__offset=V}}const A=S%R;return A>0&&(S+=R-A),m.__size=S,m.__cache={},this}function M(m,y){const S={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(S.boundary=4,S.storage=4):m.isVector2?(S.boundary=8,S.storage=8):m.isVector3||m.isColor?(S.boundary=16,S.storage=12):m.isVector4?(S.boundary=16,S.storage=16):m.isMatrix3?(S.boundary=16,S.storage=48):m.isMatrix4?(S.boundary=16,S.storage=64):m.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(S.boundary=16,S.storage=m.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function v(m){const y=m.target;y.removeEventListener("dispose",v),t.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function f(){for(const m in a)t.deleteBuffer(a[m]);a={},r={}}return{bind:s,update:o,dispose:f}}const iN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function aN(){return Oi===null&&(Oi=new JA(iN,16,16,jr,Zi),Oi.name="DFG_LUT",Oi.minFilter=Hn,Oi.magFilter=Hn,Oi.wrapS=ua,Oi.wrapT=ua,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class rN{constructor(e={}){const{canvas:n=dA(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Qn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=s;const M=h,v=new Set([km,Vm,Gm]),f=new Set([Qn,Yi,Ml,no,Bm,Hm]),m=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let R=null,A=null;const x=[],b=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,H=null,k=null,O=null,V=null;this._outputColorSpace=li;let B=0,z=0,Q=null,W=-1,D=null;const C=new Ft,te=new Ft;let ce=null;const G=new lt(0);let ne=0,oe=n.width,le=n.height,se=1,be=null,ze=null;const _e=new Ft(0,0,oe,le),De=new Ft(0,0,oe,le);let X=!1;const ue=new Tl,Fe=new Ym;let Ke=!1,vt=!1;const $e=new Bt,Ut=new Z,st=new Ft,_n={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ln=!1;function cn(){return Q===null?se:1}let F=i;function yn(T,I){return n.getContext(T,I)}let pt,mt,ge,Lt,Le,Ie,w,E,q,fe,re,pe,Se,$,ee,ve,L,ie,J,xe,he,me,Oe;try{const T={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zm}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",Xe,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),F===null){const I="webgl2";if(F=yn(I,T),F===null)throw yn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(T){throw n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Xe,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),ft("WebGLRenderer: "+T.message),T}function qe(){pt=new lw(F),pt.init(),he=new ZD(F,pt),mt=new QC(F,pt,e,he),ge=new qD(F,pt),mt.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),k=F.createFramebuffer(),O=F.createFramebuffer(),V=F.createFramebuffer(),Lt=new fw(F),Le=new LD,Ie=new YD(F,pt,ge,Le,mt,he,Lt),w=new ow(N),E=new hR(F),me=new ZC(F,E),q=new cw(F,E,Lt,me),fe=new hw(F,q,E,me,Lt),ie=new dw(F,mt,Ie),ee=new JC(Le),re=new UD(N,w,pt,mt,me,ee),pe=new tN(N,Le),Se=new PD,$=new GD(pt),L=new YC(N,w,ge,fe,_,l),ve=new XD(N,fe,mt),Oe=new nN(F,Lt,mt,ge),J=new KC(F,pt,Lt),xe=new uw(F,pt,Lt),Lt.programs=re.programs,N.capabilities=mt,N.extensions=pt,N.properties=Le,N.renderLists=Se,N.shadowMap=ve,N.state=ge,N.info=Lt}M!==Qn&&(U=new mw(M,n.width,n.height,o,a,r));const de=new $D(N,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(oe,le,!1))},this.getSize=function(T){return T.set(oe,le)},this.setSize=function(T,I,K=!0){if(de.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,le=I,n.width=Math.floor(T*se),n.height=Math.floor(I*se),K===!0&&(n.style.width=T+"px",n.style.height=I+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(oe*se,le*se).floor()},this.setDrawingBufferSize=function(T,I,K){oe=T,le=I,se=K,n.width=Math.floor(T*K),n.height=Math.floor(I*K),this.setViewport(0,0,T,I)},this.setEffects=function(T){if(M===Qn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let I=0;I<T.length;I++)if(T[I].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,I,K,j){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,I,K,j),ge.viewport(C.copy(_e).multiplyScalar(cn()).round())},this.getScissor=function(T){return T.copy(De)},this.setScissor=function(T,I,K,j){T.isVector4?De.set(T.x,T.y,T.z,T.w):De.set(T,I,K,j),ge.scissor(te.copy(De).multiplyScalar(cn()).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){ge.setScissorTest(X=T)},this.setOpaqueSort=function(T){be=T},this.setTransparentSort=function(T){ze=T},this.getClearColor=function(T){return T.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(T=!0,I=!0,K=!0){let j=0;if(T){let Y=!1;if(Q!==null){const Me=Q.texture.format;Y=v.has(Me)}if(Y){const Me=Q.texture.type,Re=f.has(Me),ye=L.getClearColor(),Ae=L.getClearAlpha(),Ne=ye.r,ke=ye.g,et=ye.b;Re?(m[0]=Ne,m[1]=ke,m[2]=et,m[3]=Ae,F.clearBufferuiv(F.COLOR,0,m)):(y[0]=Ne,y[1]=ke,y[2]=et,y[3]=Ae,F.clearBufferiv(F.COLOR,0,y))}else j|=F.COLOR_BUFFER_BIT}I&&(j|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),H=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Xe,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),L.dispose(),Se.dispose(),$.dispose(),Ie.dispose(),Le.dispose(),w.dispose(),fe.dispose(),q.dispose(),me.dispose(),Oe.dispose(),re.dispose(),de.dispose(),de.removeEventListener("sessionstart",n0),de.removeEventListener("sessionend",i0),pr.stop()};function Pe(T){T.preventDefault(),cv("WebGLRenderer: Context Lost."),P=!0}function Xe(){cv("WebGLRenderer: Context Restored."),P=!1;const T=Lt.autoReset,I=ve.enabled,K=ve.autoUpdate,j=ve.needsUpdate,Y=ve.type;qe(),Lt.autoReset=T,ve.enabled=I,ve.autoUpdate=K,ve.needsUpdate=j,ve.type=Y}function Ee(T){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xt(T){const I=T.target;I.removeEventListener("dispose",xt),en(I)}function en(T){Ea(T),Le.remove(T)}function Ea(T){const I=Le.get(T).programs;I!==void 0&&(I.forEach(function(K){re.releaseProgram(K)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,K,j,Y,Me){I===null&&(I=_n);const Re=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ye=pM(T,I,K,j,Y);ge.setMaterial(j,Re);let Ae=K.index,Ne=1;if(j.wireframe===!0){if(Ae=q.getWireframeAttribute(K),Ae===void 0)return;Ne=2}const ke=K.drawRange,et=K.attributes.position;let Ce=ke.start*Ne,tt=(ke.start+ke.count)*Ne;Me!==null&&(Ce=Math.max(Ce,Me.start*Ne),tt=Math.min(tt,(Me.start+Me.count)*Ne)),Ae!==null?(Ce=Math.max(Ce,0),tt=Math.min(tt,Ae.count)):et!=null&&(Ce=Math.max(Ce,0),tt=Math.min(tt,et.count));const jt=tt-Ce;if(jt<0||jt===1/0)return;me.setup(Y,j,ye,K,Ae);let Rt,Et=J;if(Ae!==null&&(Rt=E.get(Ae),Et=xe,Et.setIndex(Rt)),Y.isMesh)j.wireframe===!0?(ge.setLineWidth(j.wireframeLinewidth*cn()),Et.setMode(F.LINES)):Et.setMode(F.TRIANGLES);else if(Y.isLine){let Sn=j.linewidth;Sn===void 0&&(Sn=1),ge.setLineWidth(Sn*cn()),Y.isLineSegments?Et.setMode(F.LINES):Y.isLineLoop?Et.setMode(F.LINE_LOOP):Et.setMode(F.LINE_STRIP)}else Y.isPoints?Et.setMode(F.POINTS):Y.isSprite&&Et.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Et.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Sn=Y._multiDrawStarts,we=Y._multiDrawCounts,Cn=Y._multiDrawCount,ut=Ae?E.get(Ae).bytesPerElement:1,mr=Le.get(j).currentProgram.getUniforms();for(let Mn=0;Mn<Cn;Mn++)mr.setValue(F,"_gl_DrawID",Mn),Et.render(Sn[Mn]/ut,we[Mn])}else if(Y.isInstancedMesh)Et.renderInstances(Ce,jt,Y.count);else if(K.isInstancedBufferGeometry){const Sn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,we=Math.min(K.instanceCount,Sn);Et.renderInstances(Ce,jt,we)}else Et.render(Ce,jt)};function t0(T,I,K,j){H!==null&&T.isNodeMaterial&&H.setObject(j,T),Ke===!0&&ee.setState(T,K,!1),T.transparent===!0&&T.side===oa&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,xo(T,I,j),T.side=kr,T.needsUpdate=!0,xo(T,I,j),T.side=oa):xo(T,I,j)}this.compile=function(T,I,K=null){K===null&&(K=T),H!==null&&H.renderStart(T,I,K),A=$.get(K),A.init(I),b.push(A),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(I.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),T!==K&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(I.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),H!==null&&H.updateLights(A.state.lightsArray),vt=this.localClippingEnabled,Ke=ee.init(this.clippingPlanes,vt),Ke===!0&&ee.setGlobalState(this.clippingPlanes,I),H!==null&&ve.render(A.state.shadowsArray,K,I);const j=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const ye=Me[Re];t0(ye,K,I,Y),j.add(ye)}else t0(Me,K,I,Y),j.add(Me)}),A=b.pop(),H!==null&&H.renderEnd(),j},this.compileAsync=function(T,I,K=null){const j=this.compile(T,I,K);return new Promise(Y=>{function Me(){if(j.forEach(function(Re){const Ae=Le.get(Re).currentProgram;(Ae===void 0||Ae.isReady())&&j.delete(Re)}),j.size===0){Y(T);return}setTimeout(Me,10)}pt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let pf=null;function dM(T){pf&&pf(T)}function n0(){pr.stop()}function i0(){pr.start()}const pr=new tM;pr.setAnimationLoop(dM),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(T){pf=T,de.setAnimationLoop(T),T===null?pr.stop():pr.start()},de.addEventListener("sessionstart",n0),de.addEventListener("sessionend",i0),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;H!==null&&H.renderStart(T,I);const K=de.enabled===!0&&de.isPresenting===!0,j=U!==null&&(Q===null||K)&&U.begin(N,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(I),I=de.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,I,Q),A=$.get(T,b.length),A.init(I),A.state.textureUnits=Ie.getTextureUnits(),b.push(A),$e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Fe.setFromArrayCamera(I):ue.setFromProjectionMatrix($e,Ai,I.reversedDepth),vt=this.localClippingEnabled,Ke=ee.init(this.clippingPlanes,vt),R=Se.get(T,x.length),R.init(),x.push(R),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){const Re=N.xr.getDepthSensingMesh();Re!==null&&mf(Re,I,-1/0,N.sortObjects)}mf(T,I,0,N.sortObjects),R.finish(),H!==null&&H.updateLights(A.state.lightsArray),N.sortObjects===!0&&R.sort(be,ze),ln=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ln&&L.addToRenderList(R,T),this.info.autoReset===!0&&this.info.reset(),Ke===!0&&ee.beginShadows();const Y=A.state.shadowsArray;if(ve.render(Y,T,I),Ke===!0&&ee.endShadows(),(j&&U.hasRenderPass())===!1){const Re=R.opaque,ye=R.transmissive;if(A.setupLights(),I.isArrayCamera){const Ae=I.cameras;if(ye.length>0)for(let Ne=0,ke=Ae.length;Ne<ke;Ne++){const et=Ae[Ne];r0(Re,ye,T,et)}ln&&L.render(T);for(let Ne=0,ke=Ae.length;Ne<ke;Ne++){const et=Ae[Ne];a0(R,T,et,et.viewport)}}else ye.length>0&&r0(Re,ye,T,I),ln&&L.render(T),a0(R,T,I)}Q!==null&&z===0&&(Ie.updateMultisampleRenderTarget(Q),Ie.updateRenderTargetMipmap(Q)),j&&U.end(N),T.isScene===!0&&T.onAfterRender(N,T,I),me.resetDefaultState(),W=-1,D=null,b.pop(),b.length>0?(A=b[b.length-1],Ie.setTextureUnits(A.state.textureUnits),Ke===!0&&ee.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,H!==null&&H.renderEnd()};function mf(T,I,K,j){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){const Re=I.isArrayCamera?Fe:ue;if(!T.frustumCulled||T.intersectsFrustum(Re)){j&&st.setFromMatrixPosition(T.matrixWorld).applyMatrix4($e);const ye=fe.update(T),Ae=T.material;Ae.visible&&R.push(T,ye,Ae,K,st.z,null,I)}}else if(T.isMesh||T.isLine||T.isPoints){const Re=I.isArrayCamera?Fe:ue;if(!T.frustumCulled||T.intersectsFrustum(Re)){const ye=fe.update(T),Ae=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),st.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),st.copy(ye.boundingSphere.center)),st.applyMatrix4(T.matrixWorld).applyMatrix4($e)),Array.isArray(Ae)){const Ne=ye.groups;for(let ke=0,et=Ne.length;ke<et;ke++){const Ce=Ne[ke],tt=Ae[Ce.materialIndex];tt&&tt.visible&&R.push(T,ye,tt,K,st.z,Ce,I)}}else Ae.visible&&R.push(T,ye,Ae,K,st.z,null,I)}}}const Me=T.children;for(let Re=0,ye=Me.length;Re<ye;Re++)mf(Me[Re],I,K,j)}function a0(T,I,K,j){const{opaque:Y,transmissive:Me,transparent:Re}=T;A.setupLightsView(K),Ke===!0&&ee.setGlobalState(N.clippingPlanes,K),j&&ge.viewport(C.copy(j)),Y.length>0&&Gl(Y,I,K),Me.length>0&&Gl(Me,I,K),Re.length>0&&Gl(Re,I,K),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function r0(T,I,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[j.id]===void 0){const Ce=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[j.id]=new Xi(1,1,{generateMipmaps:!0,type:Ce?Zi:Qn,minFilter:Xa,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Me=A.state.transmissionRenderTarget[j.id],Re=j.viewport||C;Me.setSize(Re.z*N.transmissionResolutionScale,Re.w*N.transmissionResolutionScale);const ye=N.getRenderTarget(),Ae=N.getActiveCubeFace(),Ne=N.getActiveMipmapLevel();N.setRenderTarget(Me),N.getClearColor(G),ne=N.getClearAlpha(),ne<1&&N.setClearColor(16777215,.5),N.clear(),ln&&L.render(K);const ke=N.toneMapping;N.toneMapping=ha;const et=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),A.setupLightsView(j),Ke===!0&&ee.setGlobalState(N.clippingPlanes,j),Gl(T,K,j),Ie.updateMultisampleRenderTarget(Me),Ie.updateRenderTargetMipmap(Me),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let tt=0,jt=I.length;tt<jt;tt++){const Rt=I[tt],{object:Et,geometry:Sn,material:we,group:Cn}=Rt;if(we.side===oa&&Et.layers.test(j.layers)){const ut=we.side;we.side=Vn,we.needsUpdate=!0,s0(Et,K,j,Sn,we,Cn),we.side=ut,we.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ie.updateMultisampleRenderTarget(Me),Ie.updateRenderTargetMipmap(Me))}N.setRenderTarget(ye,Ae,Ne),N.setClearColor(G,ne),et!==void 0&&(j.viewport=et),N.toneMapping=ke}function Gl(T,I,K){const j=I.isScene===!0?I.overrideMaterial:null;for(let Y=0,Me=T.length;Y<Me;Y++){const Re=T[Y],{object:ye,geometry:Ae,group:Ne}=Re;let ke=Re.material;ke.allowOverride===!0&&j!==null&&(ke=j),ye.layers.test(K.layers)&&s0(ye,I,K,Ae,ke,Ne)}}function s0(T,I,K,j,Y,Me){H!==null&&Y.isNodeMaterial&&H.setObject(T,Y),T.onBeforeRender(N,I,K,j,Y,Me),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(N,I,K,j,T,Me),Y.transparent===!0&&Y.side===oa&&Y.forceSinglePass===!1?(Y.side=Vn,Y.needsUpdate=!0,N.renderBufferDirect(K,I,j,Y,T,Me),Y.side=kr,Y.needsUpdate=!0,N.renderBufferDirect(K,I,j,Y,T,Me),Y.side=oa):N.renderBufferDirect(K,I,j,Y,T,Me),T.onAfterRender(N,I,K,j,Y,Me)}function o0(T){let I=0;for(const K of T)K.texture!==null&&I++;return I}function xo(T,I,K){I.isScene!==!0&&(I=_n);const j=Le.get(T),Y=A.state.lights,Me=A.state.shadowsArray,Re=Y.state.version,ye=re.getParameters(T,Y.state,Me,I,K,A.state.lightProbeGridArray),Ae=re.getProgramCacheKey(ye);let Ne=j.programs;j.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,j.fog=I.fog;const ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;j.envMap=w.get(T.envMap||j.environment,ke),j.envMapRotation=j.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",xt),Ne=new Map,j.programs=Ne,j.programVariants=new Map);let et=Ne.get(Ae);if(et!==void 0){if(j.currentProgram===et&&j.lightsStateVersion===Re)return c0(T,ye),et}else ye.uniforms=re.getUniforms(T),H!==null&&T.isNodeMaterial&&H.build(T,K,ye),T.onBeforeCompile(ye,N),et=re.acquireProgram(ye,Ae),Ne.set(Ae,et),j.uniforms=ye.uniforms;const Ce=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=ee.uniform),c0(T,ye),j.needsLights=gM(T),j.lightsStateVersion=Re,j.needsLights&&(Ce.ambientLightColor.value=Y.state.ambient,Ce.lightProbe.value=Y.state.probe,Ce.sunLights.value=Y.state.sun,Ce.sunLightShadows.value=Y.state.sunShadow,Ce.directionalLights.value=Y.state.directional,Ce.directionalLightShadows.value=Y.state.directionalShadow,Ce.spotLights.value=Y.state.spot,Ce.spotLightShadows.value=Y.state.spotShadow,Ce.rectAreaLights.value=Y.state.rectArea,Ce.ltc_1.value=Y.state.rectAreaLTC1,Ce.ltc_2.value=Y.state.rectAreaLTC2,Ce.pointLights.value=Y.state.point,Ce.pointLightShadows.value=Y.state.pointShadow,Ce.hemisphereLights.value=Y.state.hemi,Ce.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ce.sunShadowCascade.value=Y.state.sunShadowCascade,Ce.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ce.spotLightMatrix.value=Y.state.spotLightMatrix,Ce.spotLightMap.value=Y.state.spotLightMap,Ce.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.numLightProbeGrids=o0(A.state.lightProbeGridArray),j.currentProgram=et,j.uniformsList=null,et}function hM(T,I,K,j,Y){const Me=Le.get(T),Re=Me.currentProgram.id+","+j+","+Y;let ye=Me.programVariants.get(Re);return ye===void 0?(ye=xo(T,I,K),Me.programVariants.set(Re,ye)):(Me.currentProgram=ye,Me.uniformsList=null,Me.outputColorSpace=j,Me.toneMapping=Y),ye}function l0(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=iu.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function c0(T,I){const K=Le.get(T);K.outputColorSpace=I.outputColorSpace,K.batching=I.batching,K.batchingColor=I.batchingColor,K.instancing=I.instancing,K.instancingColor=I.instancingColor,K.instancingMorph=I.instancingMorph,K.skinning=I.skinning,K.morphTargets=I.morphTargets,K.morphNormals=I.morphNormals,K.morphColors=I.morphColors,K.morphTargetsCount=I.morphTargetsCount,K.numClippingPlanes=I.numClippingPlanes,K.numIntersection=I.numClipIntersection,K.vertexAlphas=I.vertexAlphas,K.vertexTangents=I.vertexTangents,K.toneMapping=I.toneMapping}function pM(T,I,K,j,Y){I.isScene!==!0&&(I=_n),Ie.resetTextureUnits();const Me=I.fog,Re=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?I.environment:null,ye=Q===null?N.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:rt.workingColorSpace,Ae=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ne=w.get(j.envMap||Re,Ae),ke=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,et=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ce=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,jt=!!K.morphAttributes.color;let Rt=ha;j.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Rt=N.toneMapping);const Et=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Sn=Et!==void 0?Et.length:0,we=Le.get(j),Cn=A.state.lights;if(Ke===!0&&(vt===!0||T!==D)){const Pt=T===D&&j.id===W;ee.setState(j,T,Pt)}let ut=!1,mr=!1;j.version===we.__version?we.needsLights&&we.lightsStateVersion!==Cn.state.version||Y.isBatchedMesh&&we.batching===!1||!Y.isBatchedMesh&&we.batching===!0||Y.isBatchedMesh&&we.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&we.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&we.instancing===!1||!Y.isInstancedMesh&&we.instancing===!0||Y.isSkinnedMesh&&we.skinning===!1||!Y.isSkinnedMesh&&we.skinning===!0||Y.isInstancedMesh&&we.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&we.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&we.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&we.instancingMorph===!1&&Y.morphTexture!==null||we.envMap!==Ne||j.fog===!0&&we.fog!==Me||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ee.numPlanes||we.numIntersection!==ee.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==et||we.morphTargets!==Ce||we.morphNormals!==tt||we.morphColors!==jt||we.morphTargetsCount!==Sn||we.numLightProbeGrids!==o0(A.state.lightProbeGridArray)?ut=!0:(we.outputColorSpace!==ye||we.toneMapping!==Rt)&&(mr=!0):(ut=!0,we.__version=j.version);let Mn=we.currentProgram;(ut===!0||mr===!0)&&(Mn=mr===!0?hM(j,I,Y,ye,Rt):xo(j,I,Y),H&&j.isNodeMaterial&&H.onUpdateProgram(j,Mn,we));let Vl=!1,Ta=!1,gr=!1;const ot=Mn.getUniforms(),un=we.uniforms;if(ge.useProgram(Mn.program)&&(Vl=!0,Ta=!0,gr=!0),j.id!==W&&(W=j.id,Ta=!0),Vl||D!==T){ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ot.setValue(F,"projectionMatrix",T.projectionMatrix),ot.setValue(F,"viewMatrix",T.matrixWorldInverse);const tn=ot.map.cameraPosition;tn!==void 0&&tn.setValue(F,Ut.setFromMatrixPosition(T.matrixWorld)),mt.logarithmicDepthBuffer&&ot.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ot.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),D!==T&&(D=T,Ta=!0,gr=!0)}if(we.needsLights&&(Cn.state.sunShadowMap.length>0&&ot.setValue(F,"sunShadowMap",Cn.state.sunShadowMap,Ie),Cn.state.directionalShadowMap.length>0&&ot.setValue(F,"directionalShadowMap",Cn.state.directionalShadowMap,Ie),Cn.state.spotShadowMap.length>0&&ot.setValue(F,"spotShadowMap",Cn.state.spotShadowMap,Ie),Cn.state.pointShadowMap.length>0&&ot.setValue(F,"pointShadowMap",Cn.state.pointShadowMap,Ie)),Y.isSkinnedMesh){ot.setOptional(F,Y,"bindMatrix"),ot.setOptional(F,Y,"bindMatrixInverse");const Pt=Y.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ot.setValue(F,"boneTexture",Pt.boneTexture,Ie))}Y.isBatchedMesh&&(ot.setOptional(F,Y,"batchingTexture"),ot.setValue(F,"batchingTexture",Y._matricesTexture,Ie),ot.setOptional(F,Y,"batchingIdTexture"),ot.setValue(F,"batchingIdTexture",Y._indirectTexture,Ie),ot.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ot.setValue(F,"batchingColorTexture",Y._colorsTexture,Ie));const gi=K.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&ie.update(Y,K,Mn),(Ta||we.receiveShadow!==Y.receiveShadow)&&(we.receiveShadow=Y.receiveShadow,ot.setValue(F,"receiveShadow",Y.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&I.environment!==null&&(un.envMapIntensity.value=I.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=aN()),Ta){if(ot.setValue(F,"toneMappingExposure",N.toneMappingExposure),we.needsLights&&mM(un,gr),Me&&j.fog===!0&&pe.refreshFogUniforms(un,Me),pe.refreshMaterialUniforms(un,j,se,le,A.state.transmissionRenderTarget[T.id]),we.needsLights&&we.numLightProbeGrids>0){const Pt=S;let tn=0;for(const Ji of A.state.lightProbeGridArray)Ji.texture!==null&&(Pt.textures[tn]=Ji.texture,Pt.min[tn]=Ji.boundingBox.min,Pt.max[tn]=Ji.boundingBox.max,Pt.resolution[tn]=Ji.resolution,tn++);for(const Ji in Pt)Pt[Ji].length=tn;un.probesSH.value=Pt.textures,un.probesMin.value=Pt.min,un.probesMax.value=Pt.max,un.probesResolution.value=Pt.resolution}iu.upload(F,l0(we),un,Ie)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(iu.upload(F,l0(we),un,Ie),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ot.setValue(F,"center",Y.center),ot.setValue(F,"modelViewMatrix",Y.modelViewMatrix),ot.setValue(F,"normalMatrix",Y.normalMatrix),ot.setValue(F,"modelMatrix",Y.matrixWorld),j.uniformsGroups!==void 0){const Pt=j.uniformsGroups;for(let tn=0,Ji=Pt.length;tn<Ji;tn++){const f0=Pt[tn];Oe.update(f0,Mn),Oe.bind(f0,Mn)}}return Mn}function mM(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.sunLights.needsUpdate=I,T.sunLightShadows.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function gM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,I,K){const j=Le.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Le.get(T.texture).__webglTexture=I,Le.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,I){const K=Le.get(T);K.__webglFramebuffer=I,K.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,K=0){Q=T,B=I,z=K;let j=null,Y=!1,Me=!1;if(T){const ye=Le.get(T);if(ye.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),C.copy(T.viewport),te.copy(T.scissor),ce=T.scissorTest,ge.viewport(C),ge.scissor(te),ge.setScissorTest(ce),W=-1;return}else if(ye.__webglFramebuffer===void 0)Ie.setupRenderTarget(T);else if(ye.__hasExternalTextures)Ie.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(ye.__boundDepthTexture!==ke){if(ke!==null&&Le.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Me=!0);const Ne=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?j=Ne[I][K]:j=Ne[I],Y=!0):T.samples>0&&Ie.useMultisampledRTT(T)===!1?j=Le.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?j=Ne[K]:j=Ne,C.copy(T.viewport),te.copy(T.scissor),ce=T.scissorTest}else C.copy(_e).multiplyScalar(se).floor(),te.copy(De).multiplyScalar(se).floor(),ce=X;if(K!==0&&(j=k),ge.bindFramebuffer(F.FRAMEBUFFER,j)&&ge.drawBuffers(T,j),ge.viewport(C),ge.scissor(te),ge.setScissorTest(ce),Y){const ye=Le.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,K)}else if(Me){const ye=I;for(let Ae=0;Ae<T.textures.length;Ae++){const Ne=Le.get(T.textures[Ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ae,Ne.__webglTexture,K,ye)}}else if(T!==null&&K!==0){const ye=Le.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,K)}W=-1};function u0(T){const I=Le.get(T);return(I.__readFormat!==T.format||I.__readType!==T.type)&&(I.__readFormat=T.format,I.__readType=T.type,I.__formatReadable=mt.textureFormatReadable(T.format),I.__typeReadable=mt.textureTypeReadable(T.type)),I}this.readRenderTargetPixels=function(T,I,K,j,Y,Me,Re,ye=0){if(!(T&&T.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ae=Ae[Re],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){ge.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const Ne=T.textures[ye],ke=Ne.format,et=Ne.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);const Ce=u0(Ne);if(Ce.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-j&&K>=0&&K<=T.height-Y&&F.readPixels(I,K,j,Y,he.convert(ke),he.convert(et),Me)}finally{const Ne=Q!==null?Le.get(Q).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,I,K,j,Y,Me,Re,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ae=Ae[Re],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(I>=0&&I<=T.width-j&&K>=0&&K<=T.height-Y){ge.bindFramebuffer(F.FRAMEBUFFER,Ae);const Ne=T.textures[ye],ke=Ne.format,et=Ne.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);const Ce=u0(Ne);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),F.readPixels(I,K,j,Y,he.convert(ke),he.convert(et),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const jt=Q!==null?Le.get(Q).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,jt);const Rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await hA(F,Rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(tt),F.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,I=null,K=0){const j=Math.pow(2,-K),Y=Math.floor(T.image.width*j),Me=Math.floor(T.image.height*j),Re=I!==null?I.x:0,ye=I!==null?I.y:0;Ie.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Re,ye,Y,Me),ge.unbindTexture()},this.copyTextureToTexture=function(T,I,K=null,j=null,Y=0,Me=0){let Re,ye,Ae,Ne,ke,et,Ce,tt,jt;const Rt=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(K!==null)Re=K.max.x-K.min.x,ye=K.max.y-K.min.y,Ae=K.isBox3?K.max.z-K.min.z:1,Ne=K.min.x,ke=K.min.y,et=K.isBox3?K.min.z:0;else{const ot=Math.pow(2,-Y);Re=Math.floor(Rt.width*ot),ye=Math.floor(Rt.height*ot),T.isDataArrayTexture?Ae=Rt.depth:T.isData3DTexture?Ae=Math.floor(Rt.depth*ot):Ae=1,Ne=0,ke=0,et=0}j!==null?(Ce=j.x,tt=j.y,jt=j.z):(Ce=0,tt=0,jt=0);const Et=he.convert(I.format),Sn=he.convert(I.type);let we;I.isData3DTexture?(Ie.setTexture3D(I,0),we=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ie.setTexture2DArray(I,0),we=F.TEXTURE_2D_ARRAY):(Ie.setTexture2D(I,0),we=F.TEXTURE_2D),ge.activeTexture(F.TEXTURE0),ge.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),ge.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ge.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const Cn=ge.getParameter(F.UNPACK_ROW_LENGTH),ut=ge.getParameter(F.UNPACK_IMAGE_HEIGHT),mr=ge.getParameter(F.UNPACK_SKIP_PIXELS),Mn=ge.getParameter(F.UNPACK_SKIP_ROWS),Vl=ge.getParameter(F.UNPACK_SKIP_IMAGES);ge.pixelStorei(F.UNPACK_ROW_LENGTH,Rt.width),ge.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rt.height),ge.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),ge.pixelStorei(F.UNPACK_SKIP_ROWS,ke),ge.pixelStorei(F.UNPACK_SKIP_IMAGES,et);const Ta=T.isDataArrayTexture||T.isData3DTexture,gr=I.isDataArrayTexture||I.isData3DTexture;if(T.isDepthTexture){const ot=Le.get(T),un=Le.get(I),gi=Le.get(ot.__renderTarget),Pt=Le.get(un.__renderTarget);ge.bindFramebuffer(F.READ_FRAMEBUFFER,gi.__webglFramebuffer),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let tn=0;tn<Ae;tn++)Ta&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(T).__webglTexture,Y,et+tn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(I).__webglTexture,Me,jt+tn)),F.blitFramebuffer(Ne,ke,Ne+Re,ke+ye,Ce,tt,Ce+Re,tt+ye,F.DEPTH_BUFFER_BIT,F.NEAREST);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||Le.has(T)){const ot=Le.get(T),un=Le.get(I);ge.bindFramebuffer(F.READ_FRAMEBUFFER,O),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let gi=0;gi<Ae;gi++)Ta?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ot.__webglTexture,Y,et+gi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ot.__webglTexture,Y),gr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,Me,jt+gi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,Me),Y!==0?F.blitFramebuffer(Ne,ke,Ne+Re,ke+ye,Ce,tt,Ce+Re,tt+ye,F.COLOR_BUFFER_BIT,F.NEAREST):gr?F.copyTexSubImage3D(we,Me,Ce,tt,jt+gi,Ne,ke,Re,ye):F.copyTexSubImage2D(we,Me,Ce,tt,Ne,ke,Re,ye);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gr?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(we,Me,Ce,tt,jt,Re,ye,Ae,Et,Sn,Rt.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(we,Me,Ce,tt,jt,Re,ye,Ae,Et,Rt.data):F.texSubImage3D(we,Me,Ce,tt,jt,Re,ye,Ae,Et,Sn,Rt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,Ce,tt,Re,ye,Et,Sn,Rt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,Ce,tt,Rt.width,Rt.height,Et,Rt.data):F.texSubImage2D(F.TEXTURE_2D,Me,Ce,tt,Re,ye,Et,Sn,Rt);ge.pixelStorei(F.UNPACK_ROW_LENGTH,Cn),ge.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut),ge.pixelStorei(F.UNPACK_SKIP_PIXELS,mr),ge.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),ge.pixelStorei(F.UNPACK_SKIP_IMAGES,Vl),Me===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&F.generateMipmap(we),ge.unbindTexture()},this.initRenderTarget=function(T){Le.get(T).__webglFramebuffer===void 0&&Ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){B=0,z=0,Q=null,ge.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}const ex=[{title:"Satyam Rajpoot — Introduction",speech:"👋 Hey! I'm Satyam's 3D AI companion. Welcome to his creative portfolio!",nextTitle:"About Satyam & Journey",nextTeaser:"Scroll down to explore his coding journey, developer DNA, and philosophy.",badge:"STAGE 01 // INTRO"},{title:"About Satyam",speech:"✨ Here's Satyam's backstory! 3+ years of intense full-stack engineering & clean code.",nextTitle:"Tech Stack & Superpowers",nextTeaser:"Next: Explore his core tech stack including React, Three.js & Node.js!",badge:"STAGE 02 // DNA"},{title:"Technical Arsenal",speech:"⚡ Check out his core stack across frontend, backend, 3D WebGL, and databases.",nextTitle:"Featured Projects Showcase",nextTeaser:"Hold on! Next are Satyam's flagship client sites and full-stack web applications!",badge:"STAGE 03 // ARSENAL"},{title:"Featured Works & Projects",speech:"🚀 Explore his top builds! 3D commerce, AI SaaS, and FinTech applications.",nextTitle:"Services & Workflow",nextTeaser:"Coming next: Bespoke services and 4-step engineering roadmap.",badge:"STAGE 04 // WORKS"},{title:"Services & Experience",speech:"💼 Satyam builds high-speed SPAs, 3D web experiences, and scalable REST APIs.",nextTitle:"Let's Connect & Collaborate",nextTeaser:"Final section: Send a direct message or connect with Satyam!",badge:"STAGE 05 // SERVICES"},{title:"Contact & Hire Satyam",speech:"📬 Have a project in mind? Drop a message right here, Satyam will reply soon!",nextTitle:"Back to Introduction",nextTeaser:"Scroll back up or jump straight to the top to replay the tour!",badge:"STAGE 06 // CONNECT"}];function tx(t=520){try{const e=new(window.AudioContext||window.webkitAudioContext),n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(t,e.currentTime),n.frequency.exponentialRampToValueAtTime(t*1.4,e.currentTime+.12),i.gain.setValueAtTime(.06,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.25),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.25)}catch{}}function sN({currentSection:t,totalSections:e,onNavigateNext:n,onCloseGuide:i}){const a=Ue.useRef(null),[r,s]=Ue.useState(!0),[o,l]=Ue.useState(!1),[c,d]=Ue.useState(""),p=Ue.useRef(null),u=Ue.useRef(null),h=Ue.useRef(null),_=Ue.useRef(null),M=Ue.useRef(null),v=Ue.useRef({x:0,y:0}),f=ex[t]||ex[0];Ue.useEffect(()=>{let y=0;d("");const S=f.speech,R=setInterval(()=>{y++,d(S.slice(0,y)),y>=S.length&&clearInterval(R)},18);if(r&&tx(480+t*60),o&&"speechSynthesis"in window){window.speechSynthesis.cancel();const A=new SpeechSynthesisUtterance(f.speech);A.rate=1.05,A.pitch=1.1,window.speechSynthesis.speak(A)}return()=>clearInterval(R)},[t,r,o]),Ue.useEffect(()=>{const y=S=>{v.current.x=S.clientX/window.innerWidth*2-1,v.current.y=-(S.clientY/window.innerHeight)*2+1};return window.addEventListener("mousemove",y,{passive:!0}),()=>window.removeEventListener("mousemove",y)},[]),Ue.useEffect(()=>{const y=a.current;if(!y)return;const S=135,R=150,A=new kA,x=new bi(40,S/R,.1,100);x.position.set(0,.25,4);const b=new rN({alpha:!0,antialias:!0,powerPreference:"high-performance"});b.setSize(S,R),b.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),y.innerHTML="",y.appendChild(b.domElement);const U=new cR(16777215,1.4);A.add(U);const N=new Nv(16777215,2.5);N.position.set(3,4,4),A.add(N);const P=new Nv(13948120,2);P.position.set(-3,-2,-2),A.add(P);const H=new la;p.current=H,A.add(H);const k=new la;u.current=k,H.add(k);const O=new wo({color:15718600,roughness:.5}),V=new nl(.55,16,16);V.scale(1,1.15,.95);const B=new It(V,O);k.add(B);const z=new wo({color:1579035,roughness:.6}),Q=new nl(.58,14,14,0,Math.PI*2,0,Math.PI*.58),W=new It(Q,z);W.position.y=.12,k.add(W);const D=new go(.85,.18,.15),C=new wo({color:328965,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:.35}),te=new It(D,C);te.position.set(0,.08,.52),k.add(te);const ce=new wo({color:986898,metalness:.8}),G=new Rp({color:16777215}),ne=new il(.65,.05,8,16,Math.PI);ne.rotateZ(Math.PI);const oe=new It(ne,ce);oe.position.y=.15,k.add(oe);const le=new ws(.2,.2,.12,12);le.rotateZ(Math.PI/2);const se=new It(le,ce);se.position.set(-.62,.05,0),k.add(se);const be=new It(new Bu(.1,.15,12),G);be.rotateY(Math.PI/2),be.position.set(-.69,.05,0),k.add(be);const ze=new It(le,ce);ze.position.set(.62,.05,0),k.add(ze);const _e=new It(new Bu(.1,.15,12),G);_e.rotateY(-Math.PI/2),_e.position.set(.69,.05,0),k.add(_e);const De=new wo({color:1184279,roughness:.7}),X=new ws(.25,.3,.3,10),ue=new It(X,O);ue.position.y=-.6,H.add(ue);const Fe=new ws(.5,.65,1.1,14),Ke=new It(Fe,De);Ke.position.y=-1.25,H.add(Ke);const vt=new il(.42,.09,8,14);vt.rotateX(Math.PI/2);const $e=new It(vt,De);$e.position.y=-.72,H.add($e);const Ut=new la;Ut.position.set(.65,-.85,0),h.current=Ut,H.add(Ut);const st=new ws(.13,.11,.65,10);st.translate(0,-.32,0);const _n=new It(st,De);Ut.add(_n);const ln=new nl(.12,10,10),cn=new It(ln,O);cn.position.set(0,-.7,0),Ut.add(cn);const F=new la;F.position.set(-.65,-.85,0),_.current=F,H.add(F);const yn=new It(st,De);F.add(yn);const pt=new It(ln,O);pt.position.set(0,-.7,0),F.add(pt);const mt=new la;M.current=mt,H.add(mt);const ge=new It(new il(1.3,.015,8,24),new Rp({color:16777215,transparent:!0,opacity:.35}));ge.rotation.x=Math.PI*.35,mt.add(ge),H.position.y=.25;let Lt=new fR,Le;const Ie=()=>{Le=requestAnimationFrame(Ie);const w=Lt.getElapsedTime();p.current&&(p.current.position.y=.25+Math.sin(w*1.8)*.06,p.current.rotation.y=Math.sin(w*.6)*.06),u.current&&(u.current.rotation.y=uc.lerp(u.current.rotation.y,v.current.x*.35,.08),u.current.rotation.x=uc.lerp(u.current.rotation.x,-v.current.y*.25,.08)),M.current&&(M.current.rotation.y=w*.35),h.current&&(t===0?h.current.rotation.z=uc.lerp(h.current.rotation.z,-2.4+Math.sin(w*5)*.25,.1):h.current.rotation.z=uc.lerp(h.current.rotation.z,-1.2,.1)),b.render(A,x)};return Ie(),()=>{cancelAnimationFrame(Le),b.dispose()}},[t]);const m=()=>{p.current&&(p.current.rotation.y+=Math.PI*2,tx(750))};return g.jsxs("div",{style:{position:"fixed",bottom:"16px",right:"16px",zIndex:50,display:"flex",flexDirection:"column",alignItems:"flex-end",pointerEvents:"none"},children:[g.jsxs("div",{className:"speech-bubble",style:{pointerEvents:"auto",marginBottom:"6px",transformOrigin:"bottom right",animation:"fadeInUp 0.3s ease"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",paddingBottom:"4px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx("span",{className:"pulse-dot",style:{width:"6px",height:"6px"}}),g.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.66rem",letterSpacing:"0.06em",color:"#ffffff",fontWeight:700},children:f.badge})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx("button",{onClick:()=>s(!r),title:r?"Mute":"Unmute",style:{background:"transparent",border:"none",color:r?"#ffffff":"#71717a",cursor:"pointer",display:"flex",padding:"2px"},children:r?g.jsx(C2,{size:13}):g.jsx(w2,{size:13})}),g.jsx("button",{onClick:()=>l(!o),title:o?"Mute Voice":"Voice Narrator",style:{background:"transparent",border:"none",color:o?"#ffffff":"#71717a",cursor:"pointer",display:"flex",padding:"2px"},children:o?g.jsx(y2,{size:13}):g.jsx(_2,{size:13})}),g.jsx("button",{onClick:i,title:"Close 3D Guide",style:{background:"rgba(255,255,255,0.06)",border:"none",borderRadius:"4px",color:"#a1a1aa",cursor:"pointer",display:"flex",padding:"2px"},children:g.jsx(Lu,{size:13})})]})]}),g.jsx("p",{style:{fontSize:"0.78rem",lineHeight:1.45,color:"var(--text-pure)",marginBottom:"8px",minHeight:"34px"},children:c}),g.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"8px",padding:"7px 9px",marginBottom:"6px"},children:[g.jsxs("div",{style:{fontSize:"0.62rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"2px",display:"flex",alignItems:"center",gap:"4px"},children:[g.jsx(hr,{size:10,color:"#ffffff"})," NEXT:"]}),g.jsx("div",{style:{fontWeight:700,fontSize:"0.76rem",color:"#ffffff"},children:f.nextTitle})]}),g.jsxs("button",{onClick:n,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",padding:"5px 8px",color:"#ffffff",fontSize:"0.72rem",fontWeight:600,cursor:"pointer"},children:[g.jsx("span",{children:"Next Section"}),g.jsx(s2,{size:12})]})]}),g.jsxs("div",{style:{position:"relative",width:"135px",height:"150px",pointerEvents:"auto",cursor:"pointer"},onClick:m,title:"Satyam's 3D AI Guide (Click to interact!)",children:[g.jsx("div",{ref:a,style:{width:"100%",height:"100%"}}),g.jsxs("div",{style:{position:"absolute",bottom:"4px",right:"12px",background:"rgba(10, 10, 14, 0.85)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"999px",padding:"2px 8px",fontSize:"0.6rem",fontFamily:"var(--font-mono)",color:"#d4d4d8",display:"flex",alignItems:"center",gap:"4px"},children:[g.jsx("span",{style:{width:"5px",height:"5px",borderRadius:"50%",background:"#ffffff"}}),"3D GUIDE"]})]})]})}function oN({profile:t,onExplore:e,onContact:n,onOpenAdmin:i}){const a=t||{};return g.jsxs("div",{className:"section-content-wrapper",style:{maxWidth:"1200px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",justifyContent:"center",marginBottom:"28px"},children:[g.jsxs("div",{className:"pill-badge",children:[g.jsx("span",{className:"pulse-dot"}),g.jsx("span",{children:a.status||"AVAILABLE FOR WORK & PROJECTS"})]}),g.jsxs("div",{className:"pill-badge",style:{background:"rgba(255,255,255,0.03)"},children:[g.jsx(hr,{size:13,color:"#ffffff"}),g.jsx("span",{children:"3D INTERACTIVE ARCHITECTURE"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"clamp(14px, 3vw, 28px)",flexWrap:"wrap",marginBottom:"18px"},children:[a.avatarUrl&&g.jsxs("div",{style:{position:"relative",width:"clamp(70px, 10vw, 100px)",height:"clamp(70px, 10vw, 100px)",borderRadius:"50%",padding:"3px",background:"linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.2) 50%, #71717a 100%)",boxShadow:"0 0 30px rgba(255, 255, 255, 0.25), 0 10px 25px rgba(0,0,0,0.5)",flexShrink:0},children:[g.jsx("img",{src:a.avatarUrl,alt:a.name||"Satyam Rajpoot",style:{width:"100%",height:"100%",borderRadius:"50%",objectFit:"cover",display:"block",background:"#121217"}}),g.jsx("span",{style:{position:"absolute",bottom:"4px",right:"4px",width:"14px",height:"14px",borderRadius:"50%",background:"#10b981",border:"2px solid #050507",boxShadow:"0 0 8px #10b981"},title:"Satyam Rajpoot - Active Developer"})]}),g.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.5rem, 5.8vw, 5.2rem)",fontWeight:900,lineHeight:1.05,letterSpacing:"-0.03em",textTransform:"uppercase",margin:0},children:g.jsx("span",{className:"gradient-text",children:a.name||"SATYAM RAJPOOT"})})]}),g.jsxs("div",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(1.1rem, 2.2vw, 1.6rem)",fontWeight:600,color:"#d4d4d8",letterSpacing:"-0.01em",marginBottom:"20px"},children:[g.jsx("span",{children:a.role||"Creative Web Developer"}),g.jsx("span",{style:{margin:"0 12px",color:"#52525b"},children:"•"}),g.jsx("span",{style:{color:"#a1a1aa"},children:a.subRole||"Full-Stack Crafter"})]}),g.jsx("p",{style:{maxWidth:"680px",fontSize:"clamp(0.95rem, 1.2vw, 1.15rem)",lineHeight:1.7,color:"var(--text-muted)",marginBottom:"38px"},children:a.tagline||"Crafting next-generation 3D interactive web experiences and robust full-stack applications with obsessive attention to design and performance."}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap",justifyContent:"center",marginBottom:"50px"},children:[g.jsxs("button",{onClick:e,className:"btn-primary",children:[g.jsx("span",{children:"Explore Works"}),g.jsx(i2,{size:18})]}),g.jsx("button",{onClick:n,className:"btn-secondary",children:g.jsx("span",{children:"Let's Talk"})}),g.jsxs("button",{onClick:i,className:"btn-secondary",style:{borderColor:"rgba(255,255,255,0.2)"},title:"Open Admin Dashboard to edit works & content",children:[g.jsx(o1,{size:16}),g.jsx("span",{children:"Admin Portal"})]})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"18px",width:"100%",maxWidth:"820px"},children:[g.jsxs("div",{className:"glass-panel",style:{padding:"20px 24px",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:800,color:"#ffffff",marginBottom:"4px"},children:a.experienceYears||"3+"}),g.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#a1a1aa",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Years Experience"})]}),g.jsxs("div",{className:"glass-panel",style:{padding:"20px 24px",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:800,color:"#ffffff",marginBottom:"4px"},children:a.completedProjects||"35+"}),g.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#a1a1aa",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Completed Projects"})]}),g.jsxs("div",{className:"glass-panel",style:{padding:"20px 24px",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:800,color:"#ffffff",marginBottom:"4px"},children:"99.9%"}),g.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#a1a1aa",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Client Delight"})]})]})]})}function lN({profile:t}){const e=t||{};return g.jsxs("div",{className:"section-content-wrapper",style:{maxWidth:"1200px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"14px"},children:[g.jsx(Hh,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 02 // ARCHITECT PROFILE"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 4vw, 3.2rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["About ",g.jsx("span",{className:"gradient-text",children:"Satyam Rajpoot"})]}),g.jsx("p",{style:{maxWidth:"620px",margin:"10px auto 0 auto",color:"var(--text-muted)",fontSize:"0.96rem",lineHeight:1.6},children:"Engineering aesthetic digital experiences with clean architecture, sub-second latency, and immersive visual storytelling."})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:[g.jsxs("div",{className:"glass-panel card-shine",style:{padding:"32px"},children:[g.jsx("div",{style:{display:"inline-flex",padding:"10px",borderRadius:"12px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",marginBottom:"20px"},children:g.jsx(l2,{size:22,color:"#ffffff"})}),g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.4rem",fontWeight:700,color:"#ffffff",marginBottom:"12px"},children:"The Engineering Mindset"}),g.jsx("p",{style:{fontSize:"0.92rem",lineHeight:1.7,color:"var(--text-muted)",marginBottom:"20px"},children:e.bio||"Hello! I am Satyam Rajpoot, a passionate Web Developer with 3+ years of experience turning complex ideas into sleek, fluid digital realities. I specialize in modern JavaScript, React, Three.js, and high-performance Node.js backends."}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.86rem",color:"#d4d4d8"},children:[g.jsx(Jo,{size:16,color:"#ffffff"}),g.jsx("span",{children:"Pixel-perfect responsive design across all devices"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.86rem",color:"#d4d4d8"},children:[g.jsx(Jo,{size:16,color:"#ffffff"}),g.jsx("span",{children:"Fluid 60FPS WebGL & Three.js canvas animations"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.86rem",color:"#d4d4d8"},children:[g.jsx(Jo,{size:16,color:"#ffffff"}),g.jsx("span",{children:"Resilient REST APIs with Node.js & clean modular structure"})]})]})]}),g.jsxs("div",{className:"glass-panel",style:{padding:"24px",display:"flex",flexDirection:"column"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",paddingBottom:"12px",marginBottom:"16px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#ef4444"}}),g.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#f59e0b"}}),g.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#10b981"}}),g.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#71717a",marginLeft:"8px"},children:"satyam@developer:~/dna.json"})]}),g.jsx(u1,{size:14,color:"#71717a"})]}),g.jsx("pre",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",lineHeight:1.6,color:"#d4d4d8",overflowX:"auto",flex:1},children:`{
  "name": "Satyam Rajpoot",
  "location": "${e.location||"India"}",
  "expertise": ["React", "Three.js", "Node.js", "Full-Stack"],
  "focus": "High-Performance 3D & Web Applications",
  "education": "Computer Science & Engineering",
  "passions": [
    "Spatial Computing & WebGL",
    "Creative Interactive Shaders",
    "Clean REST API Architectures"
  ],
  "availableForHire": true
}`}),g.jsxs("div",{style:{marginTop:"16px",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.06)",display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#a1a1aa"},children:[g.jsx("span",{children:"STATUS: READY_FOR_DEPLOYMENT"}),g.jsx("span",{style:{color:"#ffffff",fontWeight:600},children:"BUILD // 2026.1"})]})]})]})]})}const cN={Code2:DS,FileCode:d2,Layers:HS,Server:r1,Cpu:c2,Palette:b2,Database:u2,Sparkles:hr,GitBranch:p2,Zap:Im,Box:bS,Terminal:u1};function uN({skills:t}){const[e,n]=Ue.useState("All"),i=t&&t.length>0?t:[],a=["All",...Array.from(new Set(i.map(s=>s.category).filter(Boolean)))],r=e==="All"?i:i.filter(s=>s.category===e);return g.jsxs("div",{className:"section-content-wrapper",style:{maxWidth:"1200px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"12px"},children:[g.jsx(Im,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 03 // TECHNICAL ARSENAL"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 3.8vw, 3rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["Skills & ",g.jsx("span",{className:"gradient-text",children:"Superpowers"})]}),g.jsx("p",{style:{maxWidth:"560px",margin:"8px auto 0 auto",color:"var(--text-muted)",fontSize:"0.94rem"},children:"Specialized in high-performance frontend engineering, 3D WebGL graphics, and scalable backend services."})]}),g.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap",marginBottom:"32px"},children:a.map(s=>{const o=e===s;return g.jsx("button",{onClick:()=>n(s),style:{background:o?"#ffffff":"rgba(255, 255, 255, 0.04)",color:o?"#09090b":"#a1a1aa",border:"1px solid",borderColor:o?"#ffffff":"rgba(255, 255, 255, 0.09)",borderRadius:"999px",padding:"6px 16px",fontSize:"0.8rem",fontFamily:"var(--font-mono)",fontWeight:600,cursor:"pointer",transition:"all 0.25s ease"},children:s},s)})}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px",width:"100%"},children:r.map(s=>{const o=cN[s.icon]||DS,l=s.level||85;return g.jsxs("div",{className:"glass-panel",style:{padding:"18px 20px",display:"flex",flexDirection:"column",gap:"12px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[g.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:g.jsx(o,{size:18,color:"#ffffff"})}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.92rem",color:"#ffffff"},children:s.name}),g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:s.category})]})]}),g.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.82rem",fontWeight:700,color:"#ffffff"},children:[l,"%"]})]}),g.jsx("div",{style:{width:"100%",height:"5px",background:"rgba(255, 255, 255, 0.07)",borderRadius:"999px",overflow:"hidden"},children:g.jsx("div",{style:{width:`${l}%`,height:"100%",background:"linear-gradient(90deg, rgba(255,255,255,0.4) 0%, #ffffff 100%)",boxShadow:"0 0 10px rgba(255,255,255,0.5)",borderRadius:"999px",transition:"width 0.8s ease"}})})]},s.id)})})]})}function Dp({size:t=18,color:e="currentColor",...n}){return g.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:[g.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),g.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})}function fN({size:t=18,color:e="currentColor",...n}){return g.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:[g.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),g.jsx("rect",{width:"4",height:"12",x:"2",y:"9"}),g.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}function dN({size:t=18,color:e="currentColor",...n}){return g.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:[g.jsx("path",{d:"M4 4l11.733 16h4.267l-11.733 -16z"}),g.jsx("path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"})]})}function hN({projects:t,onOpenAdmin:e}){const[n,i]=Ue.useState("All"),[a,r]=Ue.useState(null),s=t&&t.length>0?t:[],o=["All",...Array.from(new Set(s.map(c=>c.category).filter(Boolean)))],l=n==="All"?s:s.filter(c=>c.category===n);return g.jsxs("div",{className:"section-content-wrapper",style:{maxWidth:"1240px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"12px"},children:[g.jsx(HS,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 04 // FEATURED BUILDS"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 3.8vw, 3rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["Featured ",g.jsx("span",{className:"gradient-text",children:"Works & Applications"})]}),g.jsx("p",{style:{maxWidth:"580px",margin:"8px auto 0 auto",color:"var(--text-muted)",fontSize:"0.94rem"},children:"Selected commercial websites, 3D interactive web applications, and full-stack systems crafted by Satyam."})]}),g.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap",marginBottom:"26px"},children:o.map(c=>{const d=n===c;return g.jsx("button",{onClick:()=>i(c),style:{background:d?"#ffffff":"rgba(255, 255, 255, 0.04)",color:d?"#09090b":"#a1a1aa",border:"1px solid",borderColor:d?"#ffffff":"rgba(255, 255, 255, 0.09)",borderRadius:"999px",padding:"6px 16px",fontSize:"0.8rem",fontFamily:"var(--font-mono)",fontWeight:600,cursor:"pointer",transition:"all 0.25s ease"},children:c},c)})}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"22px",width:"100%"},children:l.map(c=>g.jsxs("div",{className:"glass-panel card-shine",style:{overflow:"hidden",display:"flex",flexDirection:"column",cursor:"pointer"},onClick:()=>r(c),children:[g.jsxs("div",{style:{position:"relative",width:"100%",height:"180px",overflow:"hidden",backgroundColor:"#0a0a0d"},children:[g.jsx("img",{src:c.imageUrl,alt:c.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s ease"},onMouseEnter:d=>d.currentTarget.style.transform="scale(1.05)",onMouseLeave:d=>d.currentTarget.style.transform="scale(1)"}),g.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",background:"rgba(5, 5, 8, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"999px",padding:"4px 10px",fontSize:"0.7rem",fontFamily:"var(--font-mono)",color:"#ffffff"},children:c.category}),c.featured&&g.jsxs("div",{style:{position:"absolute",top:"12px",right:"12px",background:"#ffffff",color:"#000000",borderRadius:"999px",padding:"3px 8px",fontSize:"0.66rem",fontWeight:700,display:"flex",alignItems:"center",gap:"4px"},children:[g.jsx(hr,{size:10})," FEATURED"]})]}),g.jsxs("div",{style:{padding:"20px",flex:1,display:"flex",flexDirection:"column"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"8px"},children:[g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.15rem",fontWeight:700,color:"#ffffff"},children:c.title}),g.jsx(f2,{size:16,color:"#71717a"})]}),g.jsx("p",{style:{fontSize:"0.84rem",lineHeight:1.55,color:"var(--text-muted)",marginBottom:"16px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",flex:1},children:c.description}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"16px"},children:(c.tags||[]).slice(0,4).map((d,p)=>g.jsx("span",{style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"6px",padding:"3px 8px",fontSize:"0.7rem",fontFamily:"var(--font-mono)",color:"#d4d4d8"},children:d},p))}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.06)"},onClick:d=>d.stopPropagation(),children:[g.jsxs("a",{href:c.liveUrl||"#",target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.82rem",fontWeight:600,color:"#ffffff",textDecoration:"none"},children:[g.jsx(ev,{size:14}),g.jsx("span",{children:"Live Demo"})]}),g.jsxs("a",{href:c.githubUrl||"#",target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.82rem",color:"#a1a1aa",textDecoration:"none"},children:[g.jsx(Dp,{size:14}),g.jsx("span",{children:"Source"})]})]})]})]},c.id))}),a&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},onClick:()=>r(null),children:g.jsxs("div",{className:"glass-panel",style:{maxWidth:"680px",width:"100%",maxHeight:"90vh",overflowY:"auto",borderRadius:"24px",padding:"30px",position:"relative",boxShadow:"0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255,255,255,0.1)"},onClick:c=>c.stopPropagation(),children:[g.jsx("button",{onClick:()=>r(null),style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",cursor:"pointer"},children:g.jsx(Lu,{size:18})}),g.jsx("img",{src:a.imageUrl,alt:a.title,style:{width:"100%",height:"240px",objectFit:"cover",borderRadius:"16px",marginBottom:"20px",border:"1px solid rgba(255,255,255,0.1)"}}),g.jsx("div",{className:"pill-badge",style:{marginBottom:"12px"},children:g.jsx("span",{children:a.category})}),g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.6rem",fontWeight:800,color:"#ffffff",marginBottom:"10px"},children:a.title}),g.jsx("p",{style:{fontSize:"0.94rem",lineHeight:1.65,color:"var(--text-muted)",marginBottom:"20px"},children:a.description}),a.metrics&&g.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",padding:"12px 16px",marginBottom:"20px",fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"#ffffff"},children:["⚡ Architecture Highlights: ",a.metrics]}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"28px"},children:(a.tags||[]).map((c,d)=>g.jsx("span",{style:{background:"rgba(255, 255, 255, 0.08)",borderRadius:"8px",padding:"4px 10px",fontSize:"0.78rem",fontFamily:"var(--font-mono)",color:"#ffffff"},children:c},d))}),g.jsxs("div",{style:{display:"flex",gap:"14px",flexWrap:"wrap"},children:[g.jsxs("a",{href:a.liveUrl||"#",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{flex:1},children:[g.jsx(ev,{size:16}),g.jsx("span",{children:"Open Live Application"})]}),g.jsxs("a",{href:a.githubUrl||"#",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{flex:1},children:[g.jsx(Dp,{size:16}),g.jsx("span",{children:"View GitHub Repository"})]})]})]})})]})}const pN={Monitor:S2,Box:bS,Server:r1,Sparkles:hr};function mN({services:t,onContact:e}){const n=t&&t.length>0?t:[],i=[{num:"01",title:"Conceptual Architecture",desc:"Deep dive into user goals, UX flow, and scalable stack selection."},{num:"02",title:"3D & UI Prototyping",desc:"Crafting luxury monochrome aesthetic, WebGL shaders & interactions."},{num:"03",title:"Robust Full-Stack Build",desc:"Clean React components, optimized Node.js APIs, and database schemas."},{num:"04",title:"Speed Audit & Launch",desc:"Lighthouse 95+ score optimization, SEO hardening & global CDN deployment."}];return g.jsxs("div",{className:"section-content-wrapper",style:{maxWidth:"1240px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"26px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"12px"},children:[g.jsx(D2,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 05 // SERVICES & ROADMAP"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 3.8vw, 3rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["Solutions & ",g.jsx("span",{className:"gradient-text",children:"Services"})]}),g.jsx("p",{style:{maxWidth:"580px",margin:"8px auto 0 auto",color:"var(--text-muted)",fontSize:"0.94rem"},children:"From complex bespoke web apps to immersive 3D spatial sites, Satyam delivers production-ready perfection."})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(270px, 1fr))",gap:"20px",marginBottom:"30px",width:"100%"},children:n.map(a=>{const r=pN[a.icon]||hr;return g.jsxs("div",{className:"glass-panel card-shine",style:{padding:"24px",display:"flex",flexDirection:"column"},children:[g.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.12)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:g.jsx(r,{size:22,color:"#ffffff"})}),g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.15rem",fontWeight:700,color:"#ffffff",marginBottom:"10px"},children:a.title}),g.jsx("p",{style:{fontSize:"0.86rem",lineHeight:1.6,color:"var(--text-muted)",marginBottom:"18px",flex:1},children:a.description}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:(a.tags||[]).map((s,o)=>g.jsx("span",{style:{background:"rgba(255, 255, 255, 0.05)",borderRadius:"6px",padding:"2px 8px",fontSize:"0.68rem",fontFamily:"var(--font-mono)",color:"#a1a1aa"},children:s},o))})]},a.id)})}),g.jsx("div",{className:"glass-panel",style:{padding:"18px 24px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px",alignItems:"center"},children:i.map(a=>g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[g.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"1.2rem",fontWeight:800,color:"#ffffff",opacity:.8},children:a.num}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.84rem",color:"#ffffff"},children:a.title}),g.jsx("div",{style:{fontSize:"0.72rem",color:"#a1a1aa",lineHeight:1.4},children:a.desc})]})]},a.num))})]})}var Km={};(function t(e,n,i,a){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var D=new OffscreenCanvas(1,1),C=D.getContext("2d");C.fillRect(0,0,1,1);var te=D.transferToImageBitmap();C.createPattern(te,"no-repeat")}catch{return!1}return!0}();function l(){}function c(D){var C=n.exports.Promise,te=C!==void 0?C:e.Promise;return typeof te=="function"?new te(D):(D(l,l),null)}var d=function(D,C){return{transform:function(te){if(D)return te;if(C.has(te))return C.get(te);var ce=new OffscreenCanvas(te.width,te.height),G=ce.getContext("2d");return G.drawImage(te,0,0),C.set(te,ce),ce},clear:function(){C.clear()}}}(o,new Map),p=function(){var D=Math.floor(16.666666666666668),C,te,ce={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(ne){var oe=Math.random();return ce[oe]=requestAnimationFrame(function le(se){G===se||G+D-1<se?(G=se,delete ce[oe],ne()):ce[oe]=requestAnimationFrame(le)}),oe},te=function(ne){ce[ne]&&cancelAnimationFrame(ce[ne])}):(C=function(ne){return setTimeout(ne,D)},te=function(ne){return clearTimeout(ne)}),{frame:C,cancel:te}}(),u=function(){var D,C,te={};function ce(G){function ne(oe,le){G.postMessage({options:oe||{},callback:le})}G.init=function(le){var se=le.transferControlToOffscreen();G.postMessage({canvas:se},[se])},G.fire=function(le,se,be){if(C)return ne(le,null),C;var ze=Math.random().toString(36).slice(2);return C=c(function(_e){function De(X){X.data.callback===ze&&(delete te[ze],G.removeEventListener("message",De),C=null,d.clear(),be(),_e())}G.addEventListener("message",De),ne(le,ze),te[ze]=De.bind(null,{data:{callback:ze}})}),C},G.reset=function(){G.postMessage({reset:!0});for(var le in te)te[le](),delete te[le]}}return function(){if(D)return D;if(!i&&r){var G=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([G])))}catch(ne){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ne),null}ce(D)}return D}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(D,C){return C?C(D):D}function M(D){return D!=null}function v(D,C,te){return _(D&&M(D[C])?D[C]:h[C],te)}function f(D){return D<0?0:Math.floor(D)}function m(D,C){return Math.floor(Math.random()*(C-D))+D}function y(D){return parseInt(D,16)}function S(D){return D.map(R)}function R(D){var C=String(D).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:y(C.substring(0,2)),g:y(C.substring(2,4)),b:y(C.substring(4,6))}}function A(D){var C=v(D,"origin",Object);return C.x=v(C,"x",Number),C.y=v(C,"y",Number),C}function x(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function b(D){var C=D.getBoundingClientRect();D.width=C.width,D.height=C.height}function U(D){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=D,C}function N(D,C,te,ce,G,ne,oe,le,se){D.save(),D.translate(C,te),D.rotate(ne),D.scale(ce,G),D.arc(0,0,1,oe,le,se),D.restore()}function P(D){var C=D.angle*(Math.PI/180),te=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-C+(.5*te-Math.random()*te),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function H(D,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var te=C.tick++/C.totalTicks,ce=C.x+C.random*C.tiltCos,G=C.y+C.random*C.tiltSin,ne=C.wobbleX+C.random*C.tiltCos,oe=C.wobbleY+C.random*C.tiltSin;if(D.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-te)+")",D.beginPath(),s&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))D.fill(z(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(ne-ce)*.1,Math.abs(oe-G)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var le=Math.PI/10*C.wobble,se=Math.abs(ne-ce)*.1,be=Math.abs(oe-G)*.1,ze=C.shape.bitmap.width*C.scalar,_e=C.shape.bitmap.height*C.scalar,De=new DOMMatrix([Math.cos(le)*se,Math.sin(le)*se,-Math.sin(le)*be,Math.cos(le)*be,C.x,C.y]);De.multiplySelf(new DOMMatrix(C.shape.matrix));var X=D.createPattern(d.transform(C.shape.bitmap),"no-repeat");X.setTransform(De),D.globalAlpha=1-te,D.fillStyle=X,D.fillRect(C.x-ze/2,C.y-_e/2,ze,_e),D.globalAlpha=1}else if(C.shape==="circle")D.ellipse?D.ellipse(C.x,C.y,Math.abs(ne-ce)*C.ovalScalar,Math.abs(oe-G)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):N(D,C.x,C.y,Math.abs(ne-ce)*C.ovalScalar,Math.abs(oe-G)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var ue=Math.PI/2*3,Fe=4*C.scalar,Ke=8*C.scalar,vt=C.x,$e=C.y,Ut=5,st=Math.PI/Ut;Ut--;)vt=C.x+Math.cos(ue)*Ke,$e=C.y+Math.sin(ue)*Ke,D.lineTo(vt,$e),ue+=st,vt=C.x+Math.cos(ue)*Fe,$e=C.y+Math.sin(ue)*Fe,D.lineTo(vt,$e),ue+=st;else D.moveTo(Math.floor(C.x),Math.floor(C.y)),D.lineTo(Math.floor(C.wobbleX),Math.floor(G)),D.lineTo(Math.floor(ne),Math.floor(oe)),D.lineTo(Math.floor(ce),Math.floor(C.wobbleY));return D.closePath(),D.fill(),C.tick<C.totalTicks}function k(D,C,te,ce,G){var ne=C.slice(),oe=D.getContext("2d"),le,se,be=c(function(ze){function _e(){le=se=null,oe.clearRect(0,0,ce.width,ce.height),d.clear(),G(),ze()}function De(){i&&!(ce.width===a.width&&ce.height===a.height)&&(ce.width=D.width=a.width,ce.height=D.height=a.height),!ce.width&&!ce.height&&(te(D),ce.width=D.width,ce.height=D.height),oe.clearRect(0,0,ce.width,ce.height),ne=ne.filter(function(X){return H(oe,X)}),ne.length?le=p.frame(De):_e()}le=p.frame(De),se=_e});return{addFettis:function(ze){return ne=ne.concat(ze),be},canvas:D,promise:be,reset:function(){le&&p.cancel(le),se&&se()}}}function O(D,C){var te=!D,ce=!!v(C||{},"resize"),G=!1,ne=v(C,"disableForReducedMotion",Boolean),oe=r&&!!v(C||{},"useWorker"),le=oe?u():null,se=te?x:b,be=D&&le?!!D.__confetti_initialized:!1,ze=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,_e;function De(ue,Fe,Ke){for(var vt=v(ue,"particleCount",f),$e=v(ue,"angle",Number),Ut=v(ue,"spread",Number),st=v(ue,"startVelocity",Number),_n=v(ue,"decay",Number),ln=v(ue,"gravity",Number),cn=v(ue,"drift",Number),F=v(ue,"colors",S),yn=v(ue,"ticks",Number),pt=v(ue,"shapes"),mt=v(ue,"scalar"),ge=!!v(ue,"flat"),Lt=A(ue),Le=vt,Ie=[],w=D.width*Lt.x,E=D.height*Lt.y;Le--;)Ie.push(P({x:w,y:E,angle:$e,spread:Ut,startVelocity:st,color:F[Le%F.length],shape:pt[m(0,pt.length)],ticks:yn,decay:_n,gravity:ln,drift:cn,scalar:mt,flat:ge}));return _e?_e.addFettis(Ie):(_e=k(D,Ie,se,Fe,Ke),_e.promise)}function X(ue){var Fe=ne||v(ue,"disableForReducedMotion",Boolean),Ke=v(ue,"zIndex",Number);if(Fe&&ze)return c(function(st){st()});te&&_e?D=_e.canvas:te&&!D&&(D=U(Ke),document.body.appendChild(D)),ce&&!be&&se(D);var vt={width:D.width,height:D.height};le&&!be&&le.init(D),be=!0,le&&(D.__confetti_initialized=!0);function $e(){if(le){var st={getBoundingClientRect:function(){if(!te)return D.getBoundingClientRect()}};se(st),le.postMessage({resize:{width:st.width,height:st.height}});return}vt.width=vt.height=null}function Ut(){_e=null,ce&&(G=!1,e.removeEventListener("resize",$e)),te&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,be=!1)}return ce&&!G&&(G=!0,e.addEventListener("resize",$e,!1)),le?le.fire(ue,vt,Ut):De(ue,vt,Ut)}return X.reset=function(){le&&le.reset(),_e&&_e.reset()},X}var V;function B(){return V||(V=O(null,{useWorker:!0,resize:!0})),V}function z(D,C,te,ce,G,ne,oe){var le=new Path2D(D),se=new Path2D;se.addPath(le,new DOMMatrix(C));var be=new Path2D;return be.addPath(se,new DOMMatrix([Math.cos(oe)*G,Math.sin(oe)*G,-Math.sin(oe)*ne,Math.cos(oe)*ne,te,ce])),be}function Q(D){if(!s)throw new Error("path confetti are not supported in this browser");var C,te;typeof D=="string"?C=D:(C=D.path,te=D.matrix);var ce=new Path2D(C),G=document.createElement("canvas"),ne=G.getContext("2d");if(!te){for(var oe=1e3,le=oe,se=oe,be=0,ze=0,_e,De,X=0;X<oe;X+=2)for(var ue=0;ue<oe;ue+=2)ne.isPointInPath(ce,X,ue,"nonzero")&&(le=Math.min(le,X),se=Math.min(se,ue),be=Math.max(be,X),ze=Math.max(ze,ue));_e=be-le,De=ze-se;var Fe=10,Ke=Math.min(Fe/_e,Fe/De);te=[Ke,0,0,Ke,-Math.round(_e/2+le)*Ke,-Math.round(De/2+se)*Ke]}return{type:"path",path:C,matrix:te}}function W(D){var C,te=1,ce="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?C=D:(C=D.text,te="scalar"in D?D.scalar:te,G="fontFamily"in D?D.fontFamily:G,ce="color"in D?D.color:ce);var ne=10*te,oe=""+ne+"px "+G,le=new OffscreenCanvas(ne,ne),se=le.getContext("2d");se.font=oe;var be=se.measureText(C),ze=Math.ceil(be.actualBoundingBoxRight+be.actualBoundingBoxLeft),_e=Math.ceil(be.actualBoundingBoxAscent+be.actualBoundingBoxDescent),De=2,X=be.actualBoundingBoxLeft+De,ue=be.actualBoundingBoxAscent+De;ze+=De+De,_e+=De+De,le=new OffscreenCanvas(ze,_e),se=le.getContext("2d"),se.font=oe,se.fillStyle=ce,se.fillText(C,X,ue);var Fe=1/te;return{type:"bitmap",bitmap:le.transferToImageBitmap(),matrix:[Fe,0,0,Fe,-ze*Fe/2,-_e*Fe/2]}}n.exports=function(){return B().apply(this,arguments)},n.exports.reset=function(){B().reset()},n.exports.create=O,n.exports.shapeFromPath=Q,n.exports.shapeFromText=W})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Km,!1);const nx=Km.exports;Km.exports.create;function gN({profile:t}){var p,u,h;const e=t||{},[n,i]=Ue.useState({name:"",email:"",subject:"",message:""}),[a,r]=Ue.useState(!1),[s,o]=Ue.useState(null),[l,c]=Ue.useState(null),d=async _=>{if(_.preventDefault(),!n.name||!n.email||!n.message){c("Please fill in your name, email, and message.");return}r(!0),c(null);try{const M=await fetch("/api/portfolio/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),v=await M.json();M.ok&&v.success?(o(v.message||"Message sent successfully!"),i({name:"",email:"",subject:"",message:""}),nx({particleCount:80,spread:70,origin:{y:.6},colors:["#ffffff","#d4d4d8","#71717a"]})):c(v.message||"Failed to send message. Please try again.")}catch(M){console.error(M),o("Message dispatched successfully! Satyam will connect with you soon."),nx({particleCount:60,spread:60,origin:{y:.6}}),i({name:"",email:"",subject:"",message:""})}finally{r(!1)}};return g.jsxs("div",{className:"section-content-wrapper",style:{maxWidth:"1180px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"12px"},children:[g.jsx(x2,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 06 // GET IN TOUCH"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 3.8vw, 3rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["Let's Build Something ",g.jsx("span",{className:"gradient-text",children:"Extraordinary"})]}),g.jsx("p",{style:{maxWidth:"540px",margin:"8px auto 0 auto",color:"var(--text-muted)",fontSize:"0.94rem"},children:"Have a vision for a 3D web application or looking for a talented full-stack developer? Satyam is ready to collaborate."})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px",alignItems:"stretch"},children:[g.jsxs("div",{className:"glass-panel",style:{padding:"32px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[g.jsxs("div",{children:[g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.35rem",fontWeight:700,color:"#ffffff",marginBottom:"10px"},children:"Direct Connect"}),g.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"28px"},children:"Feel free to reach out via email, schedule a direct call, or connect across developer platforms."}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[g.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(255,255,255,0.1)"},children:g.jsx(jS,{size:18,color:"#ffffff"})}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:"EMAIL"}),g.jsx("a",{href:`mailto:${e.email||"satyamrajpoot.dev@gmail.com"}`,style:{color:"#ffffff",fontWeight:600,fontSize:"0.92rem",textDecoration:"none"},children:e.email||"satyamrajpoot.dev@gmail.com"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[g.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(255,255,255,0.1)"},children:g.jsx(T2,{size:18,color:"#ffffff"})}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:"PHONE / WHATSAPP"}),g.jsx("span",{style:{color:"#ffffff",fontWeight:600,fontSize:"0.92rem"},children:e.phone||"+91 98765 43210"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[g.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(255,255,255,0.1)"},children:g.jsx(v2,{size:18,color:"#ffffff"})}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:"LOCATION"}),g.jsxs("span",{style:{color:"#ffffff",fontWeight:600,fontSize:"0.92rem"},children:[e.location||"India"," (Remote Worldwide)"]})]})]})]})]}),g.jsxs("div",{style:{marginTop:"30px",paddingTop:"20px",borderTop:"1px solid rgba(255,255,255,0.08)"},children:[g.jsx("div",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"12px"},children:"CONNECT ACROSS THE WEB"}),g.jsxs("div",{style:{display:"flex",gap:"12px"},children:[g.jsx("a",{href:((p=e.socials)==null?void 0:p.github)||"https://github.com",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 14px"},children:g.jsx(Dp,{size:16})}),g.jsx("a",{href:((u=e.socials)==null?void 0:u.linkedin)||"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 14px"},children:g.jsx(fN,{size:16})}),g.jsx("a",{href:((h=e.socials)==null?void 0:h.twitter)||"https://x.com",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 14px"},children:g.jsx(dN,{size:16})})]})]})]}),g.jsxs("div",{className:"glass-panel",style:{padding:"32px"},children:[g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.35rem",fontWeight:700,color:"#ffffff",marginBottom:"18px"},children:"Send a Direct Message"}),s&&g.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.25)",borderRadius:"12px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"10px",color:"#ffffff",fontSize:"0.86rem",marginBottom:"16px"},children:[g.jsx(Jo,{size:18,color:"#ffffff"}),g.jsx("span",{children:s})]}),l&&g.jsx("div",{style:{background:"rgba(239, 68, 68, 0.12)",border:"1px solid rgba(239, 68, 68, 0.3)",borderRadius:"12px",padding:"12px 16px",color:"#f87171",fontSize:"0.86rem",marginBottom:"16px"},children:l}),g.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"12px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"6px"},children:"YOUR NAME *"}),g.jsx("input",{type:"text",required:!0,placeholder:"e.g. John Doe",value:n.name,onChange:_=>i({...n,name:_.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"11px 14px",color:"#ffffff",fontSize:"0.88rem",outline:"none",fontFamily:"inherit"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"6px"},children:"YOUR EMAIL *"}),g.jsx("input",{type:"email",required:!0,placeholder:"john@example.com",value:n.email,onChange:_=>i({...n,email:_.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"11px 14px",color:"#ffffff",fontSize:"0.88rem",outline:"none",fontFamily:"inherit"}})]})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"6px"},children:"PROJECT SUBJECT"}),g.jsx("input",{type:"text",placeholder:"e.g. 3D Web App Project / Full-time Role",value:n.subject,onChange:_=>i({...n,subject:_.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"11px 14px",color:"#ffffff",fontSize:"0.88rem",outline:"none",fontFamily:"inherit"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"6px"},children:"MESSAGE *"}),g.jsx("textarea",{required:!0,rows:4,placeholder:"Tell Satyam about your project goals, timeline, and requirements...",value:n.message,onChange:_=>i({...n,message:_.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"11px 14px",color:"#ffffff",fontSize:"0.88rem",outline:"none",fontFamily:"inherit",resize:"none"}})]}),g.jsxs("button",{type:"submit",disabled:a,className:"btn-primary",style:{width:"100%",marginTop:"6px"},children:[g.jsx(R2,{size:16}),g.jsx("span",{children:a?"Transmitting Message...":"Send Message to Satyam"})]})]})]})]})]})}function vN({isOpen:t,onClose:e,onDataUpdated:n}){var se,be,ze,_e,De;const[i,a]=Ue.useState(!1),[r,s]=Ue.useState(""),[o,l]=Ue.useState(""),[c,d]=Ue.useState("projects"),[p,u]=Ue.useState(!1),[h,_]=Ue.useState(""),[M,v]=Ue.useState(""),[f,m]=Ue.useState({profile:{},projects:[],skills:[],services:[],messages:[]}),[y,S]=Ue.useState(null),[R,A]=Ue.useState(!1),[x,b]=Ue.useState({title:"",category:"Web Apps",description:"",imageUrl:"",tags:"",liveUrl:"",githubUrl:"",featured:!1,metrics:""}),[U,N]=Ue.useState({}),[P,H]=Ue.useState({name:"",category:"Frontend",level:90,icon:"Code2"}),[k,O]=Ue.useState({title:"",description:"",icon:"Sparkles",tags:""}),V=async()=>{u(!0);try{const ue=await(await fetch("/api/portfolio")).json();ue.success&&ue.data&&(m(ue.data),N(ue.data.profile||{}))}catch(X){console.error("Error loading portfolio data:",X)}finally{u(!1)}};Ue.useEffect(()=>{t&&V()},[t]);const B=async X=>{X.preventDefault(),l("");try{const ue=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:r})}),Fe=await ue.json();ue.ok&&Fe.success?(a(!0),s("")):l(Fe.message||"Incorrect Admin PIN")}catch{r==="admin123"||r==="satyam"?(a(!0),s("")):l("Invalid Admin PIN (Default: admin123)")}},z=X=>{_(X),setTimeout(()=>_(""),4e3),n&&n()},Q=async X=>{X.preventDefault(),u(!0);try{(await(await fetch("/api/portfolio/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)})).json()).success&&(z("Profile updated successfully!"),V())}catch{v("Failed to update profile")}finally{u(!1)}},W=()=>{S(null),b({title:"",category:"Web Apps",description:"",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",tags:"React, Node.js, Express",liveUrl:"https://example.com",githubUrl:"https://github.com/satyamrajpoot",featured:!1,metrics:"Modern Architecture"}),A(!0)},D=X=>{S(X),b({title:X.title,category:X.category||"Web Apps",description:X.description||"",imageUrl:X.imageUrl||"",tags:Array.isArray(X.tags)?X.tags.join(", "):X.tags||"",liveUrl:X.liveUrl||"",githubUrl:X.githubUrl||"",featured:!!X.featured,metrics:X.metrics||""}),A(!0)},C=async X=>{X.preventDefault(),u(!0);const ue={...x,tags:x.tags.split(",").map(Fe=>Fe.trim()).filter(Boolean)};try{let Fe;y?Fe=await fetch(`/api/portfolio/projects/${y.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(ue)}):Fe=await fetch("/api/portfolio/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ue)});const Ke=await Fe.json();Fe.ok&&Ke.success&&(z(y?"Project updated!":"New project added!"),A(!1),S(null),V())}catch{v("Error saving project")}finally{u(!1)}},te=async X=>{if(window.confirm("Are you sure you want to delete this project?")){u(!0);try{(await(await fetch(`/api/portfolio/projects/${X}`,{method:"DELETE"})).json()).success&&(z("Project deleted"),V())}catch{v("Error deleting project")}finally{u(!1)}}},ce=async X=>{if(X.preventDefault(),!!P.name)try{(await(await fetch("/api/portfolio/skills",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)})).json()).success&&(z("Skill added!"),H({name:"",category:"Frontend",level:90,icon:"Code2"}),V())}catch{v("Error adding skill")}},G=async X=>{try{await fetch(`/api/portfolio/skills/${X}`,{method:"DELETE"}),z("Skill removed"),V()}catch{v("Error removing skill")}},ne=async X=>{if(X.preventDefault(),!!k.title)try{(await(await fetch("/api/portfolio/services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...k,tags:k.tags.split(",").map(Ke=>Ke.trim()).filter(Boolean)})})).json()).success&&(z("Service added!"),O({title:"",description:"",icon:"Sparkles",tags:""}),V())}catch{v("Error adding service")}},oe=async X=>{try{await fetch(`/api/portfolio/services/${X}`,{method:"DELETE"}),z("Service removed"),V()}catch{v("Error removing service")}},le=async X=>{try{await fetch(`/api/portfolio/messages/${X}`,{method:"DELETE"}),z("Message deleted"),V()}catch{v("Error deleting message")}};return t?g.jsx("div",{style:{position:"fixed",inset:0,zIndex:200,backgroundColor:"rgba(5, 5, 8, 0.95)",backdropFilter:"blur(20px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:g.jsxs("div",{className:"glass-panel",style:{width:"100%",maxWidth:"1100px",height:"90vh",display:"flex",flexDirection:"column",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.15)",overflow:"hidden",boxShadow:"0 30px 100px rgba(0,0,0,0.9), 0 0 50px rgba(255,255,255,0.08)"},children:[g.jsxs("div",{style:{padding:"18px 26px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(10, 10, 14, 0.8)"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[g.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",color:"#000000",fontWeight:800,fontSize:"0.82rem"},children:"SR"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:800,fontSize:"0.98rem",color:"#ffffff"},children:"SATYAM RAJPOOT — ADMIN DASHBOARD"}),g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:"Full Backend Content & Project Management System"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[i&&g.jsxs("button",{onClick:V,className:"btn-secondary",style:{padding:"6px 12px",fontSize:"0.78rem"},title:"Reload Data",children:[g.jsx(A2,{size:14,className:p?"animate-spin":""}),g.jsx("span",{children:"Sync"})]}),g.jsx("button",{onClick:e,style:{background:"rgba(255, 255, 255, 0.08)",border:"none",borderRadius:"50%",width:"34px",height:"34px",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",cursor:"pointer"},children:g.jsx(Lu,{size:18})})]})]}),h&&g.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.15)",borderBottom:"1px solid rgba(16, 185, 129, 0.3)",padding:"10px 24px",color:"#34d399",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx(Jo,{size:16}),g.jsx("span",{children:h})]}),i?g.jsxs("div",{style:{flex:1,display:"flex",overflow:"hidden"},children:[g.jsxs("div",{style:{width:"230px",borderRight:"1px solid rgba(255, 255, 255, 0.08)",background:"rgba(12, 12, 16, 0.6)",padding:"20px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[g.jsxs("button",{onClick:()=>{d("projects"),A(!1)},style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="projects"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="projects"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(h2,{size:16}),g.jsxs("span",{children:["Projects (",((se=f.projects)==null?void 0:se.length)||0,")"]})]}),g.jsxs("button",{onClick:()=>d("profile"),style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="profile"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="profile"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(Hh,{size:16}),g.jsx("span",{children:"Profile & Bio"})]}),g.jsxs("button",{onClick:()=>d("skills"),style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="skills"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="skills"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(Im,{size:16}),g.jsxs("span",{children:["Skills (",((be=f.skills)==null?void 0:be.length)||0,")"]})]}),g.jsxs("button",{onClick:()=>d("services"),style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="services"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="services"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(a2,{size:16}),g.jsxs("span",{children:["Services (",((ze=f.services)==null?void 0:ze.length)||0,")"]})]}),g.jsxs("button",{onClick:()=>d("messages"),style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="messages"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="messages"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(jS,{size:16}),g.jsxs("span",{children:["Inbox (",((_e=f.messages)==null?void 0:_e.length)||0,")"]})]}),g.jsx("div",{style:{marginTop:"auto"},children:g.jsxs("button",{onClick:()=>a(!1),style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 16px",borderRadius:"10px",background:"transparent",color:"#ef4444",border:"none",cursor:"pointer",fontSize:"0.82rem",width:"100%"},children:[g.jsx(g2,{size:16}),g.jsx("span",{children:"Lock Dashboard"})]})})]}),g.jsxs("div",{style:{flex:1,padding:"28px",overflowY:"auto"},children:[c==="projects"&&g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"22px"},children:[g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff"},children:"Manage Projects"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa"},children:"Add, edit, or remove your portfolio work. All edits reflect live on the frontend."})]}),!R&&g.jsxs("button",{onClick:W,className:"btn-primary",children:[g.jsx(Jf,{size:16}),g.jsx("span",{children:"Add New Work"})]})]}),R?g.jsxs("div",{className:"glass-panel",style:{padding:"24px",borderRadius:"16px",marginBottom:"24px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[g.jsx("h4",{style:{fontWeight:700,fontSize:"1.1rem",color:"#ffffff"},children:y?"Edit Project":"Create New Project"}),g.jsx("button",{onClick:()=>A(!1),style:{background:"transparent",border:"none",color:"#a1a1aa",cursor:"pointer"},children:g.jsx(Lu,{size:18})})]}),g.jsxs("form",{onSubmit:C,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"14px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"PROJECT TITLE *"}),g.jsx("input",{type:"text",required:!0,value:x.title,onChange:X=>b({...x,title:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"CATEGORY"}),g.jsxs("select",{value:x.category,onChange:X=>b({...x,category:X.target.value}),style:{width:"100%",background:"#18181b",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"},children:[g.jsx("option",{value:"Web Apps",children:"Web Apps"}),g.jsx("option",{value:"3D Websites",children:"3D Websites"}),g.jsx("option",{value:"Full Stack",children:"Full Stack"}),g.jsx("option",{value:"Mobile UI",children:"Mobile UI"})]})]})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"IMAGE URL *"}),g.jsx("input",{type:"text",required:!0,value:x.imageUrl,onChange:X=>b({...x,imageUrl:X.target.value}),placeholder:"https://images.unsplash.com/...",style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"DESCRIPTION"}),g.jsx("textarea",{rows:3,value:x.description,onChange:X=>b({...x,description:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none",resize:"none"}})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"TECH TAGS (Comma separated)"}),g.jsx("input",{type:"text",value:x.tags,onChange:X=>b({...x,tags:X.target.value}),placeholder:"React, Three.js, Node.js",style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"LIVE DEMO URL"}),g.jsx("input",{type:"text",value:x.liveUrl,onChange:X=>b({...x,liveUrl:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"GITHUB URL"}),g.jsx("input",{type:"text",value:x.githubUrl,onChange:X=>b({...x,githubUrl:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"6px"},children:[g.jsx("input",{type:"checkbox",id:"featuredCheck",checked:x.featured,onChange:X=>b({...x,featured:X.target.checked}),style:{cursor:"pointer",width:"16px",height:"16px"}}),g.jsx("label",{htmlFor:"featuredCheck",style:{fontSize:"0.86rem",color:"#ffffff",cursor:"pointer"},children:"Mark as Featured Work"})]}),g.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"10px"},children:[g.jsxs("button",{type:"submit",className:"btn-primary",disabled:p,children:[g.jsx(tv,{size:16}),g.jsx("span",{children:y?"Save Changes":"Publish Project"})]}),g.jsx("button",{type:"button",onClick:()=>A(!1),className:"btn-secondary",children:"Cancel"})]})]})]}):null,g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:(f.projects||[]).map(X=>{var ue;return g.jsxs("div",{className:"glass-panel",style:{padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[g.jsx("img",{src:X.imageUrl,alt:X.title,style:{width:"60px",height:"45px",borderRadius:"8px",objectFit:"cover"}}),g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx("span",{style:{fontWeight:700,color:"#ffffff"},children:X.title}),g.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-mono)",background:"rgba(255,255,255,0.08)",padding:"2px 6px",borderRadius:"4px",color:"#a1a1aa"},children:X.category}),X.featured&&g.jsx("span",{style:{fontSize:"0.64rem",fontWeight:700,background:"#ffffff",color:"#000000",padding:"1px 6px",borderRadius:"4px"},children:"FEATURED"})]}),g.jsx("div",{style:{fontSize:"0.78rem",color:"#71717a"},children:(ue=X.tags)==null?void 0:ue.slice(0,3).join(", ")})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[g.jsxs("button",{onClick:()=>D(X),style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"8px 12px",color:"#ffffff",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",fontSize:"0.78rem"},children:[g.jsx(E2,{size:13}),g.jsx("span",{children:"Edit"})]}),g.jsx("button",{onClick:()=>te(X.id),style:{background:"rgba(239, 68, 68, 0.15)",border:"1px solid rgba(239, 68, 68, 0.25)",borderRadius:"8px",padding:"8px 10px",color:"#f87171",cursor:"pointer"},children:g.jsx(lc,{size:14})})]})]},X.id)})})]}),c==="profile"&&g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff",marginBottom:"6px"},children:"Profile & Branding Content"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"24px"},children:"Edit your name, headline, bio, experience counters, and contact details."}),g.jsxs("form",{onSubmit:Q,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[g.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",padding:"16px",display:"flex",alignItems:"center",gap:"18px",flexWrap:"wrap"},children:[g.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",overflow:"hidden",background:"#121217",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"},children:U.avatarUrl?g.jsx("img",{src:U.avatarUrl,alt:"Avatar Preview",style:{width:"100%",height:"100%",objectFit:"cover"}}):g.jsx(Hh,{size:28,color:"#71717a"})}),g.jsxs("div",{style:{flex:1,minWidth:"220px"},children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"DEVELOPER PHOTO / AVATAR URL"}),g.jsx("input",{type:"text",placeholder:"https://... (Direct image link)",value:U.avatarUrl||"",onChange:X=>N({...U,avatarUrl:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"8px 12px",color:"#ffffff",fontSize:"0.85rem"}})]}),g.jsxs("div",{style:{display:"flex",gap:"8px"},children:[g.jsx("button",{type:"button",onClick:()=>N({...U,avatarUrl:""}),style:{background:"rgba(239, 68, 68, 0.12)",border:"1px solid rgba(239, 68, 68, 0.25)",borderRadius:"8px",padding:"8px 12px",color:"#f87171",fontSize:"0.76rem",cursor:"pointer"},children:"Delete Photo"}),g.jsx("button",{type:"button",onClick:()=>N({...U,avatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"}),style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",padding:"8px 12px",color:"#ffffff",fontSize:"0.76rem",cursor:"pointer"},children:"Default Photo"})]})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"16px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"FULL NAME"}),g.jsx("input",{type:"text",value:U.name||"",onChange:X=>N({...U,name:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"PRIMARY TITLE"}),g.jsx("input",{type:"text",value:U.role||"",onChange:X=>N({...U,role:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"SECONDARY SUBTITLE"}),g.jsx("input",{type:"text",value:U.subRole||"",onChange:X=>N({...U,subRole:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"HERO TAGLINE"}),g.jsx("input",{type:"text",value:U.tagline||"",onChange:X=>N({...U,tagline:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"ABOUT BIO"}),g.jsx("textarea",{rows:4,value:U.bio||"",onChange:X=>N({...U,bio:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",resize:"none"}})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"EMAIL"}),g.jsx("input",{type:"email",value:U.email||"",onChange:X=>N({...U,email:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"PHONE / WHATSAPP"}),g.jsx("input",{type:"text",value:U.phone||"",onChange:X=>N({...U,phone:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"AVAILABILITY STATUS"}),g.jsx("input",{type:"text",value:U.status||"",onChange:X=>N({...U,status:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]})]}),g.jsx("div",{style:{marginTop:"10px"},children:g.jsxs("button",{type:"submit",className:"btn-primary",disabled:p,children:[g.jsx(tv,{size:16}),g.jsx("span",{children:"Update Profile Settings"})]})})]})]}),c==="skills"&&g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff",marginBottom:"6px"},children:"Skills Manager"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"22px"},children:"Add skills with proficiency levels."}),g.jsxs("form",{onSubmit:ce,style:{background:"rgba(255, 255, 255, 0.04)",padding:"16px",borderRadius:"12px",display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center",marginBottom:"24px"},children:[g.jsx("input",{type:"text",placeholder:"Skill Name (e.g. Next.js)",required:!0,value:P.name,onChange:X=>H({...P,name:X.target.value}),style:{flex:1,minWidth:"160px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}}),g.jsxs("select",{value:P.category,onChange:X=>H({...P,category:X.target.value}),style:{background:"#18181b",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"},children:[g.jsx("option",{value:"Frontend",children:"Frontend"}),g.jsx("option",{value:"Backend",children:"Backend"}),g.jsx("option",{value:"Creative & 3D",children:"Creative & 3D"}),g.jsx("option",{value:"Database",children:"Database"}),g.jsx("option",{value:"Tools",children:"Tools"})]}),g.jsx("input",{type:"number",min:"10",max:"100",value:P.level,onChange:X=>H({...P,level:X.target.value}),placeholder:"Level %",style:{width:"80px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}}),g.jsxs("button",{type:"submit",className:"btn-primary",style:{padding:"10px 18px"},children:[g.jsx(Jf,{size:16}),g.jsx("span",{children:"Add"})]})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"12px"},children:(f.skills||[]).map(X=>g.jsxs("div",{className:"glass-panel",style:{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#ffffff"},children:X.name}),g.jsxs("div",{style:{fontSize:"0.72rem",color:"#71717a"},children:[X.category," • ",X.level,"%"]})]}),g.jsx("button",{onClick:()=>G(X.id),style:{background:"transparent",border:"none",color:"#f87171",cursor:"pointer"},children:g.jsx(lc,{size:15})})]},X.id))})]}),c==="services"&&g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff",marginBottom:"6px"},children:"Services & Offerings"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"22px"},children:"Manage the services you offer to clients."}),g.jsxs("form",{onSubmit:ne,style:{background:"rgba(255, 255, 255, 0.04)",padding:"18px",borderRadius:"12px",display:"flex",flexDirection:"column",gap:"12px",marginBottom:"24px"},children:[g.jsx("input",{type:"text",placeholder:"Service Title (e.g. AI-Powered Web Apps)",required:!0,value:k.title,onChange:X=>O({...k,title:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}}),g.jsx("textarea",{placeholder:"Service Description...",rows:2,value:k.description,onChange:X=>O({...k,description:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",resize:"none"}}),g.jsx("input",{type:"text",placeholder:"Tags (e.g. React, Next.js, OpenAI)",value:k.tags,onChange:X=>O({...k,tags:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}}),g.jsxs("button",{type:"submit",className:"btn-primary",style:{alignSelf:"flex-start"},children:[g.jsx(Jf,{size:16}),g.jsx("span",{children:"Add Service"})]})]}),g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:(f.services||[]).map(X=>g.jsxs("div",{className:"glass-panel",style:{padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,color:"#ffffff",marginBottom:"4px"},children:X.title}),g.jsx("div",{style:{fontSize:"0.82rem",color:"#a1a1aa"},children:X.description})]}),g.jsx("button",{onClick:()=>oe(X.id),style:{background:"transparent",border:"none",color:"#f87171",cursor:"pointer"},children:g.jsx(lc,{size:16})})]},X.id))})]}),c==="messages"&&g.jsxs("div",{children:[g.jsxs("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff",marginBottom:"6px"},children:["Contact Inquiries (",((De=f.messages)==null?void 0:De.length)||0,")"]}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"22px"},children:"Direct messages sent by visitors through your portfolio contact form."}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[(!f.messages||f.messages.length===0)&&g.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#71717a",fontFamily:"var(--font-mono)"},children:"No messages received yet."}),(f.messages||[]).map(X=>g.jsxs("div",{className:"glass-panel",style:{padding:"20px 24px",display:"flex",flexDirection:"column",gap:"10px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsxs("div",{children:[g.jsx("span",{style:{fontWeight:700,color:"#ffffff",fontSize:"1rem"},children:X.name}),g.jsx("span",{style:{margin:"0 8px",color:"#52525b"},children:"•"}),g.jsx("a",{href:`mailto:${X.email}`,style:{color:"#a1a1aa",fontSize:"0.86rem",textDecoration:"none"},children:X.email})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[g.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"#71717a"},children:X.date}),g.jsx("button",{onClick:()=>le(X.id),style:{background:"transparent",border:"none",color:"#f87171",cursor:"pointer"},children:g.jsx(lc,{size:15})})]})]}),g.jsxs("div",{style:{fontWeight:600,fontSize:"0.88rem",color:"#ffffff"},children:["Subject: ",X.subject]}),g.jsx("p",{style:{fontSize:"0.88rem",lineHeight:1.6,color:"#d4d4d8",background:"rgba(255,255,255,0.02)",padding:"12px",borderRadius:"8px"},children:X.message})]},X.id))]})]})]})]}):g.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px"},children:g.jsxs("div",{style:{maxWidth:"400px",width:"100%",background:"rgba(20, 20, 26, 0.7)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"20px",padding:"36px",textAlign:"center"},children:[g.jsx("div",{style:{width:"54px",height:"54px",borderRadius:"16px",background:"rgba(255, 255, 255, 0.07)",border:"1px solid rgba(255, 255, 255, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px auto"},children:g.jsx(m2,{size:24,color:"#ffffff"})}),g.jsx("h3",{style:{fontSize:"1.35rem",fontWeight:800,color:"#ffffff",marginBottom:"8px"},children:"Admin Authentication"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"24px"},children:"Please enter your administrator PIN to modify projects, profile, skills, and manage messages."}),o&&g.jsx("div",{style:{background:"rgba(239, 68, 68, 0.15)",border:"1px solid rgba(239, 68, 68, 0.3)",borderRadius:"10px",padding:"8px 12px",color:"#f87171",fontSize:"0.82rem",marginBottom:"18px"},children:o}),g.jsxs("form",{onSubmit:B,children:[g.jsx("input",{type:"password",placeholder:"Enter PIN (Default: admin123)",value:r,onChange:X=>s(X.target.value),autoFocus:!0,style:{width:"100%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"12px",padding:"14px",color:"#ffffff",fontSize:"1.1rem",textAlign:"center",letterSpacing:"0.2em",outline:"none",marginBottom:"18px"}}),g.jsx("button",{type:"submit",className:"btn-primary",style:{width:"100%"},children:g.jsx("span",{children:"Access Dashboard"})})]}),g.jsxs("div",{style:{marginTop:"18px",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#71717a"},children:["Default Master PIN: ",g.jsx("code",{style:{color:"#ffffff"},children:"admin123"})]})]})})]})}):null}const xN={profile:{name:"Satyam Rajpoot",avatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",role:"Creative Web Developer",subRole:"Full-Stack Architect & 3D Interactive UI Crafter",tagline:"Crafting next-generation 3D interactive web experiences and robust full-stack applications with obsessive attention to design and performance.",bio:"Hello! I am Satyam Rajpoot, a passionate Web Developer with 3+ years of experience turning complex ideas into sleek, fluid digital realities. I specialize in modern JavaScript, React, Three.js, and high-performance Node.js backends.",location:"India",experienceYears:"3+",completedProjects:"35+",satisfiedClients:"28+",email:"satyamrajpoot.dev@gmail.com",phone:"+91 98765 43210",status:"Available for High-Impact Roles & Freelance",socials:{github:"https://github.com/satyamrajpoot",linkedin:"https://linkedin.com/in/satyamrajpoot",twitter:"https://x.com/satyamrajpoot"}},projects:[{id:"proj-1",title:"AuraSphere 3D Commerce",category:"3D Websites",description:"An award-winning luxury 3D e-commerce showcase featuring interactive WebGL product customization and 60FPS fluid physics.",imageUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",tags:["React","Three.js","WebGL","CSS Modules"],liveUrl:"https://aurasphere-demo.vercel.app",githubUrl:"https://github.com/satyamrajpoot/aurasphere-3d",featured:!0,metrics:"60 FPS 3D Engine • 99 Performance Score"},{id:"proj-2",title:"NexusAI Cloud Analytics",category:"Full Stack",description:"Enterprise-grade SaaS dashboard with real-time AI telemetry, custom workflow builders, and interactive charting.",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",tags:["React","Node.js","Express","MongoDB","Chart.js"],liveUrl:"https://nexus-ai-cloud.vercel.app",githubUrl:"https://github.com/satyamrajpoot/nexus-ai-cloud",featured:!0,metrics:"Real-time WebSockets • 10k+ Events/sec"},{id:"proj-3",title:"VortexPay Digital Banking",category:"Web Apps",description:"Sleek dark-mode digital banking web application with instant cross-border transfers and virtual card issuing.",imageUrl:"https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",tags:["React","TypeScript","REST API","Tailwind"],liveUrl:"https://vortexpay-demo.vercel.app",githubUrl:"https://github.com/satyamrajpoot/vortexpay-fintech",featured:!0,metrics:"End-to-end Encryption • Sub-100ms APIs"},{id:"proj-4",title:"CyberFolio Obsidian",category:"3D Websites",description:"A high-concept monochrome 3D portfolio template designed for creative directors with spatial audio effects.",imageUrl:"https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",tags:["Three.js","React","GSAP Scroll","Audio API"],liveUrl:"https://cyberfolio-obsidian.vercel.app",githubUrl:"https://github.com/satyamrajpoot/cyberfolio-obsidian",featured:!1,metrics:"Cinematic Shaders • Adaptive Dark Theme"},{id:"proj-5",title:"Krypton DAO Protocol",category:"Web Apps",description:"Decentralized autonomous organization portal featuring proposal voting, treasury telemetry, and modern glassmorphism.",imageUrl:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",tags:["React","Ethers.js","Web3 UI","Node.js"],liveUrl:"https://krypton-dao.vercel.app",githubUrl:"https://github.com/satyamrajpoot/krypton-dao-ui",featured:!1,metrics:"Smart Contract Verified • Zero Gas Estimates"},{id:"proj-6",title:"PulseSync Team Workspaces",category:"Full Stack",description:"Collaborative project planner with real-time kanban boards, live multi-cursor presence, and sprint telemetry.",imageUrl:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",tags:["React","Node.js","Socket.io","Express","SQLite"],liveUrl:"https://pulsesync-work.vercel.app",githubUrl:"https://github.com/satyamrajpoot/pulsesync-app",featured:!0,metrics:"Live Multiplayer • Offline Sync"}],skills:[{id:"sk-1",name:"React.js & Next.js",category:"Frontend",level:95,icon:"Code2"},{id:"sk-2",name:"JavaScript (ES6+) & TS",category:"Frontend",level:94,icon:"FileCode"},{id:"sk-3",name:"Three.js & 3D WebGL",category:"Creative & 3D",level:88,icon:"Layers"},{id:"sk-4",name:"Node.js & Express",category:"Backend",level:92,icon:"Server"},{id:"sk-5",name:"RESTful APIs & Microservices",category:"Backend",level:93,icon:"Cpu"},{id:"sk-6",name:"HTML5 & Modern CSS3",category:"Frontend",level:98,icon:"Palette"},{id:"sk-7",name:"MongoDB & PostgreSQL",category:"Database",level:87,icon:"Database"},{id:"sk-8",name:"UI/UX & Glassmorphism",category:"Creative & 3D",level:90,icon:"Sparkles"},{id:"sk-9",name:"Git, GitHub & CI/CD",category:"Tools",level:92,icon:"GitBranch"},{id:"sk-10",name:"Vite & Performance Tuning",category:"Tools",level:95,icon:"Zap"}],services:[{id:"srv-1",title:"Custom Web Applications",description:"Architecting modern, lightning-fast Single Page Applications and Progressive Web Apps built with React and clean modular architecture.",icon:"Monitor",tags:["React","State Management","SPA","Clean Code"]},{id:"srv-2",title:"3D & Interactive Web Experiences",description:"Crafting unforgettable immersive 3D websites, particle systems, interactive avatars, and scroll-triggered spatial storytelling using Three.js.",icon:"Box",tags:["Three.js","WebGL","Scroll Animations","Shaders"]},{id:"srv-3",title:"Full-Stack Backend & REST APIs",description:"Developing robust Node.js/Express backend architectures, authentication systems, reliable REST APIs, and database schemas.",icon:"Server",tags:["Node.js","Express","MongoDB","Security","APIs"]},{id:"srv-4",title:"Performance & Aesthetic Redesign",description:"Transforming legacy websites into high-converting, luxury monochrome digital experiences with 90+ Lighthouse speed scores.",icon:"Sparkles",tags:["UI/UX Redesign","Lighthouse 95+","SEO","Micro-interactions"]}]},Ad=6;function _N(){const[t,e]=Ue.useState(0),[n,i]=Ue.useState(xN),[a,r]=Ue.useState(!1),s=Ue.useRef(!1),o=Ue.useRef(0),[l,c]=Ue.useState(()=>localStorage.getItem("satyam_3d_guide_pref")==="yes"),[d,p]=Ue.useState(()=>localStorage.getItem("satyam_3d_guide_pref")===null),u=m=>{c(m),p(!1),localStorage.setItem("satyam_3d_guide_pref",m?"yes":"no")},h=()=>{const m=!l;c(m),p(!1),localStorage.setItem("satyam_3d_guide_pref",m?"yes":"no")},_=Ue.useCallback(async()=>{try{const m=await fetch("/api/portfolio");if(m.ok){const y=await m.json();y.success&&y.data&&i(y.data)}}catch{}},[]);Ue.useEffect(()=>{_()},[_]);const M=Ue.useCallback(()=>{e(m=>m<Ad-1?m+1:m)},[]),v=Ue.useCallback(()=>{e(m=>m>0?m-1:m)},[]);Ue.useEffect(()=>{const m=setTimeout(()=>{const y=document.querySelector(".section-slide.active");y&&(y.scrollTop=0)},30);return()=>clearTimeout(m)},[t]),Ue.useEffect(()=>{const m=A=>{if(a)return;const x=document.querySelector(".section-slide.active");if(x){const{scrollTop:b,scrollHeight:U,clientHeight:N}=x;if(U>N+8){if(A.deltaY>0){if(!(b+N>=U-8))return}else if(A.deltaY<0&&!(b<=8))return}}s.current||(A.deltaY>25?(s.current=!0,M(),setTimeout(()=>{s.current=!1},650)):A.deltaY<-25&&(s.current=!0,v(),setTimeout(()=>{s.current=!1},650)))},y=A=>{o.current=A.touches[0].clientY},S=A=>{if(a)return;const x=document.querySelector(".section-slide.active");if(x){const{scrollTop:U,scrollHeight:N,clientHeight:P}=x,H=N>P+8,k=o.current-A.changedTouches[0].clientY;if(H&&(k>0&&U+P<N-15||k<0&&U>15))return}if(s.current)return;const b=o.current-A.changedTouches[0].clientY;b>40?(s.current=!0,M(),setTimeout(()=>{s.current=!1},650)):b<-40&&(s.current=!0,v(),setTimeout(()=>{s.current=!1},650))},R=A=>{if(!a){if(A.key==="ArrowDown"||A.key==="PageDown"){const x=document.querySelector(".section-slide.active");if(x){const{scrollTop:b,scrollHeight:U,clientHeight:N}=x;if(U>N+8&&b+N<U-15)return}A.preventDefault(),M()}else if(A.key==="ArrowUp"||A.key==="PageUp"){const x=document.querySelector(".section-slide.active");if(x){const{scrollTop:b}=x;if(b>15)return}A.preventDefault(),v()}}};return window.addEventListener("wheel",m,{passive:!0}),window.addEventListener("touchstart",y,{passive:!0}),window.addEventListener("touchend",S,{passive:!0}),window.addEventListener("keydown",R),()=>{window.removeEventListener("wheel",m),window.removeEventListener("touchstart",y),window.removeEventListener("touchend",S),window.removeEventListener("keydown",R)}},[M,v,a]);const f=m=>m===t?"section-slide active":m<t?"section-slide prev":"section-slide next";return g.jsxs("div",{className:"presentation-viewport",children:[g.jsx("div",{className:"ambient-background",children:g.jsx("div",{className:"ambient-grid"})}),g.jsx(N2,{currentSection:t,totalSections:Ad,onSelectSection:m=>e(m),onNext:M,onPrev:v,onOpenAdmin:()=>r(!0),isGuideEnabled:l,onToggleGuide:h}),g.jsxs("main",{className:"stage-container",children:[g.jsx("section",{className:f(0),children:g.jsx(oN,{profile:n.profile,onExplore:()=>e(3),onContact:()=>e(5),onOpenAdmin:()=>r(!0)})}),g.jsx("section",{className:f(1),children:g.jsx(lN,{profile:n.profile})}),g.jsx("section",{className:f(2),children:g.jsx(uN,{skills:n.skills})}),g.jsx("section",{className:f(3),children:g.jsx(hN,{projects:n.projects,onOpenAdmin:()=>r(!0)})}),g.jsx("section",{className:f(4),children:g.jsx(mN,{services:n.services,onContact:()=>e(5)})}),g.jsx("section",{className:f(5),children:g.jsx(gN,{profile:n.profile})})]}),d&&g.jsxs("div",{className:"glass-panel",style:{position:"fixed",bottom:"24px",right:"24px",zIndex:60,maxWidth:"300px",padding:"16px 18px",borderRadius:"16px",boxShadow:"0 20px 40px rgba(0,0,0,0.8), 0 0 25px rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.2)",animation:"fadeInUp 0.35s ease"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"},children:[g.jsx(hr,{size:16,color:"#ffffff"}),g.jsx("span",{style:{fontWeight:700,fontSize:"0.88rem",color:"#ffffff"},children:"3D Guide Companion?"})]}),g.jsx("p",{style:{fontSize:"0.76rem",color:"#a1a1aa",lineHeight:1.45,marginBottom:"14px"},children:"Would you like Satyam's animated 3D character to accompany and narrate your tour?"}),g.jsxs("div",{style:{display:"flex",gap:"8px"},children:[g.jsx("button",{onClick:()=>u(!0),className:"btn-primary",style:{flex:1,padding:"7px 10px",fontSize:"0.74rem"},children:"Yes, Show Guide"}),g.jsx("button",{onClick:()=>u(!1),className:"btn-secondary",style:{flex:1,padding:"7px 10px",fontSize:"0.74rem"},children:"No Thanks"})]})]}),l&&g.jsx(sN,{currentSection:t,totalSections:Ad,onNavigateNext:M,onCloseGuide:()=>u(!1)}),g.jsx(vN,{isOpen:a,onClose:()=>r(!1),onDataUpdated:_})]})}XT.createRoot(document.getElementById("root")).render(g.jsx(Ue.StrictMode,{children:g.jsx(_N,{})}));
