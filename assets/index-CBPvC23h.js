(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var rx={exports:{}},Vu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yM=Symbol.for("react.transitional.element"),SM=Symbol.for("react.fragment");function sx(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:yM,type:t,key:i,ref:e!==void 0?e:null,props:n}}Vu.Fragment=SM;Vu.jsx=sx;Vu.jsxs=sx;rx.exports=Vu;var g=rx.exports,ox={exports:{}},Ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=Symbol.for("react.transitional.element"),MM=Symbol.for("react.portal"),bM=Symbol.for("react.fragment"),EM=Symbol.for("react.strict_mode"),TM=Symbol.for("react.profiler"),AM=Symbol.for("react.consumer"),RM=Symbol.for("react.context"),CM=Symbol.for("react.forward_ref"),wM=Symbol.for("react.suspense"),DM=Symbol.for("react.memo"),lx=Symbol.for("react.lazy"),NM=Symbol.for("react.activity"),UM=Symbol.for("react.view_transition"),p0=Symbol.iterator;function LM(t){return t===null||typeof t!="object"?null:(t=p0&&t[p0]||t["@@iterator"],typeof t=="function"?t:null)}var cx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ux=Object.assign,fx={};function lo(t,e,n){this.props=t,this.context=e,this.refs=fx,this.updater=n||cx}lo.prototype.isReactComponent={};lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dx(){}dx.prototype=lo.prototype;function Np(t,e,n){this.props=t,this.context=e,this.refs=fx,this.updater=n||cx}var Up=Np.prototype=new dx;Up.constructor=Np;ux(Up,lo.prototype);Up.isPureReactComponent=!0;var m0=Array.isArray;function Rd(){}var Nt={H:null,A:null,T:null,S:null},hx=Object.prototype.hasOwnProperty;function Lp(t,e,n){var i=n.ref;return{$$typeof:Dp,type:t,key:e,ref:i!==void 0?i:null,props:n}}function OM(t,e){return Lp(t.type,e,t.props)}function Op(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dp}function PM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var g0=/\/+/g;function gf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PM(""+t.key):e.toString(36)}function IM(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Rd,Rd):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function gs(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Dp:case MM:s=!0;break;case lx:return s=t._init,gs(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+gf(t,0):i,m0(a)?(n="",s!=null&&(n=s.replace(g0,"$&/")+"/"),gs(a,e,n,"",function(c){return c})):a!=null&&(Op(a)&&(a=OM(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(g0,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(m0(t))for(var l=0;l<t.length;l++)i=t[l],r=o+gf(i,l),s+=gs(i,e,n,r,a);else if(l=LM(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+gf(i,l++),s+=gs(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return gs(IM(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function Wl(t,e,n){if(t==null)return t;var i=[],a=0;return gs(t,i,"","",function(r){return e.call(n,r,a++)}),i}function zM(t){if(t._status===-1){var e=t._result,n=e();n.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var v0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function px(t){var e=Nt.T,n={};n.types=e!==null?e.types:null,Nt.T=n;try{var i=t(),a=Nt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Rd,v0)}catch(r){v0(r)}finally{e!==null&&n.types!==null&&(e.types=n.types),Nt.T=e}}function mx(t){var e=Nt.T;if(e!==null){var n=e.types;n===null?e.types=[t]:n.indexOf(t)===-1&&n.push(t)}else px(mx.bind(null,t))}var FM={map:Wl,forEach:function(t,e,n){Wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wl(t,function(){e++}),e},toArray:function(t){return Wl(t,function(e){return e})||[]},only:function(t){if(!Op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Activity=NM;Ve.Children=FM;Ve.Component=lo;Ve.Fragment=bM;Ve.Profiler=TM;Ve.PureComponent=Np;Ve.StrictMode=EM;Ve.Suspense=wM;Ve.ViewTransition=UM;Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Nt;Ve.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Nt.H.useMemoCache(t)}};Ve.addTransitionType=mx;Ve.cache=function(t){return function(){return t.apply(null,arguments)}};Ve.cacheSignal=function(){return null};Ve.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=ux({},t.props),a=t.key;if(e!=null)for(r in e.key!==void 0&&(a=""+e.key),e)!hx.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return Lp(t.type,a,i)};Ve.createContext=function(t){return t={$$typeof:RM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:AM,_context:t},t};Ve.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)hx.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Lp(t,r,a)};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:CM,render:t}};Ve.isValidElement=Op;Ve.lazy=function(t){return{$$typeof:lx,_payload:{_status:-1,_result:t},_init:zM}};Ve.memo=function(t,e){return{$$typeof:DM,type:t,compare:e===void 0?null:e}};Ve.startTransition=px;Ve.unstable_useCacheRefresh=function(){return Nt.H.useCacheRefresh()};Ve.use=function(t){return Nt.H.use(t)};Ve.useActionState=function(t,e,n){return Nt.H.useActionState(t,e,n)};Ve.useCallback=function(t,e){return Nt.H.useCallback(t,e)};Ve.useContext=function(t){return Nt.H.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t,e){return Nt.H.useDeferredValue(t,e)};Ve.useEffect=function(t,e){return Nt.H.useEffect(t,e)};Ve.useEffectEvent=function(t){return Nt.H.useEffectEvent(t)};Ve.useId=function(){return Nt.H.useId()};Ve.useImperativeHandle=function(t,e,n){return Nt.H.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Nt.H.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Nt.H.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Nt.H.useMemo(t,e)};Ve.useOptimistic=function(t,e){return Nt.H.useOptimistic(t,e)};Ve.useReducer=function(t,e,n){return Nt.H.useReducer(t,e,n)};Ve.useRef=function(t){return Nt.H.useRef(t)};Ve.useState=function(t){return Nt.H.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Nt.H.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Nt.H.useTransition()};Ve.version="19.3.1";ox.exports=Ve;var Oe=ox.exports,gx={exports:{}},ku={},vx={exports:{}},xx={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,z){var J=F.length;F.push(z);e:for(;0<J;){var W=J-1>>>1,D=F[W];if(0<a(D,z))F[W]=z,F[J]=D,J=W;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var z=F[0],J=F.pop();if(J!==z){F[0]=J;e:for(var W=0,D=F.length,C=D>>>1;W<C;){var ne=2*(W+1)-1,fe=F[ne],V=ne+1,ie=F[V];if(0>a(fe,J))V<D&&0>a(ie,fe)?(F[W]=ie,F[V]=J,W=V):(F[W]=fe,F[ne]=J,W=ne);else if(V<D&&0>a(ie,J))F[W]=ie,F[V]=J,W=V;else break e}}return z}function a(F,z){var J=F.sortIndex-z.sortIndex;return J!==0?J:F.id-z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,p=null,u=3,h=!1,_=!1,M=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;function y(F){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=F)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function A(F){if(M=!1,y(F),!_)if(n(l)!==null)_=!0,R||(R=!0,H());else{var z=n(c);z!==null&&G(A,z.startTime-F)}}var R=!1,x=-1,E=5,O=-1;function N(){return m?!0:!(t.unstable_now()-O<E)}function P(){if(m=!1,R){var F=t.unstable_now();O=F;var z=!0;try{e:{_=!1,M&&(M=!1,v(x),x=-1),h=!0;var J=u;try{t:{for(y(F),p=n(l);p!==null&&!(p.expirationTime>F&&N());){var W=p.callback;if(typeof W=="function"){p.callback=null,u=p.priorityLevel;var D=W(p.expirationTime<=F);if(F=t.unstable_now(),typeof D=="function"){p.callback=D,y(F),z=!0;break t}p===n(l)&&i(l),y(F)}else i(l);p=n(l)}if(p!==null)z=!0;else{var C=n(c);C!==null&&G(A,C.startTime-F),z=!1}}break e}finally{p=null,u=J,h=!1}z=void 0}}finally{z?H():R=!1}}}var H;if(typeof S=="function")H=function(){S(P)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,L=Y.port2;Y.port1.onmessage=P,H=function(){L.postMessage(null)}}else H=function(){f(P,0)};function G(F,z){x=f(function(){F(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(F){switch(u){case 1:case 2:case 3:var z=3;break;default:z=u}var J=u;u=z;try{return F()}finally{u=J}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(F,z){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=u;u=F;try{return z()}finally{u=J}},t.unstable_scheduleCallback=function(F,z,J){var W=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?W+J:W):J=W,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=J+D,F={id:d++,callback:z,priorityLevel:F,startTime:J,expirationTime:D,sortIndex:-1},J>W?(F.sortIndex=J,e(c,F),n(l)===null&&F===n(c)&&(M?(v(x),x=-1):M=!0,G(A,J-W))):(F.sortIndex=D,e(l,F),_||h||(_=!0,R||(R=!0,H()))),F},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(F){var z=u;return function(){var J=u;u=z;try{return F.apply(this,arguments)}finally{u=J}}}})(xx);vx.exports=xx;var BM=vx.exports,_x={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HM=Oe;function yx(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ra(){}var On={d:{f:Ra,r:function(){throw Error(yx(522))},D:Ra,C:Ra,L:Ra,m:Ra,X:Ra,S:Ra,M:Ra},p:0,findDOMNode:null},GM=Symbol.for("react.portal"),VM=Symbol.for("react.recoverable"),x0=Symbol.for("react.optimistic_key");function kM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:GM,key:i==null?null:i===x0?x0:""+i,children:t,containerInfo:e,implementation:n}}var Go=HM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ju(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=On;Cn.browser=function(t){return{$$typeof:VM,_reason:t}};Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(yx(299));return kM(t,e,null,n)};Cn.flushSync=function(t){var e=Go.T,n=On.p;try{if(Go.T=null,On.p=2,t)return t()}finally{Go.T=e,On.p=n,On.d.f()}};Cn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,On.d.C(t,e))};Cn.prefetchDNS=function(t){typeof t=="string"&&On.d.D(t)};Cn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=ju(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?On.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&On.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Cn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=ju(e.as,e.crossOrigin);On.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&On.d.M(t)};Cn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=ju(n,e.crossOrigin);On.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Cn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=ju(e.as,e.crossOrigin);On.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else On.d.m(t)};Cn.requestFormReset=function(t){On.d.r(t)};Cn.unstable_batchedUpdates=function(t,e){return t(e)};Cn.useFormState=function(t,e,n){return Go.H.useFormState(t,e,n)};Cn.useFormStatus=function(){return Go.H.useHostTransitionStatus()};Cn.version="19.3.1";function Sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sx)}catch(t){console.error(t)}}Sx(),_x.exports=Cn;var jM=_x.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qt=BM,Mx=Oe,WM=jM;function re(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function bx(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cl(t){for(var e=t,n=e;n&&!n.alternate;)e=n,e.flags&4098&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function Ex(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tx(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _0(t){if(Cl(t)!==t)throw Error(re(188))}function XM(t){var e=t.alternate;if(!e){if(e=Cl(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return _0(a),t;if(r===i)return _0(a),e;r=r.sibling}throw Error(re(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Ax(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Ax(t),e!==null)return e;t=t.sibling}return null}function jn(t,e,n,i,a,r){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,i,a,r)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&jn(t.child,e,n,i,a,r))return!0;t=t.sibling}return!1}function Kr(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y0(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function Rx(t){var e=[null,null],n=Kr(t);return n===null||Cx(e,t,n.child,{foundSelf:!1}),e}function Cx(t,e,n,i){for(;n!==null;){if(n===e)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Cx(t,e,n.child,i))return!0;n=n.sibling}return!1}function Kt(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(re(559))}}var Ss=null,Cd=null;function qM(t,e,n){return t===n?!0:t===e?(Ss=t,!0):!1}function YM(t,e,n){return t===n?(Cd=t,!1):t===e?(Cd!==null&&(Ss=t),!0):!1}function S0(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function wd(t,e,n){for(var i=0,a=t;a;a=n(a))i++;a=0;for(var r=e;r;r=n(r))a++;for(;0<i-a;)t=n(t),i--;for(;0<a-i;)e=n(e),a--;for(;i--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var Rt=Object.assign,ZM=Symbol.for("react.element"),Xl=Symbol.for("react.transitional.element"),Lo=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),wx=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Dx=Symbol.for("react.consumer"),Bi=Symbol.for("react.context"),Pp=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Ud=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),Ia=Symbol.for("react.lazy"),Ld=Symbol.for("react.activity"),KM=Symbol.for("react.legacy_hidden"),QM=Symbol.for("react.memo_cache_sentinel"),Od=Symbol.for("react.view_transition"),JM=Symbol.for("react.recoverable"),M0=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=M0&&t[M0]||t["@@iterator"],typeof t=="function"?t:null)}var $M=Symbol.for("react.client.reference");function Pd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$M?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Dd:return"Profiler";case wx:return"StrictMode";case Nd:return"Suspense";case Ud:return"SuspenseList";case Ld:return"Activity";case Od:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Lo:return"Portal";case Bi:return t.displayName||"Context";case Dx:return(t._context.displayName||"Context")+".Consumer";case Pp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ip:return e=t.displayName||null,e!==null?e:Pd(t.type)||"Memo";case Ia:e=t._payload,t=t._init;try{return Pd(t(e))}catch{}}return null}var Oo=Array.isArray,He=Mx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt=WM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Lr={pending:!1,data:null,method:null,action:null},Id=[],bs=-1;function Qi(t){return{current:t}}function vn(t){0>bs||(t.current=Id[bs],Id[bs]=null,bs--)}function Ut(t,e){bs++,Id[bs]=t.current,t.current=e}var Wi=Qi(null),sl=Qi(null),Za=Qi(null),ru=Qi(null);function su(t,e){switch(Ut(Za,e),Ut(sl,t),Ut(Wi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Pg(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Pg(e),t=Jy(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vn(Wi),Ut(Wi,t)}function Ws(){vn(Wi),vn(sl),vn(Za)}function zd(t){var e=t.memoizedState;e!==null&&(to._currentValue=e.memoizedState,Ut(ru,t)),e=Wi.current;var n=Jy(e,t.type);e!==n&&(Ut(sl,t),Ut(Wi,n))}function ou(t){sl.current===t&&(vn(Wi),vn(sl)),ru.current===t&&(vn(ru),to._currentValue=Lr)}var vf,b0;function Oa(t){if(vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vf=e&&e[1]||"",b0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vf+t+b0}var xf=!1;function _f(t,e){if(!t||xf)return"";xf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(_){var u=_}Reflect.construct(t,[],p)}else{try{p.call()}catch(_){u=_}p=!1;try{var h=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new t}finally{p&&(h!==void 0?Object.defineProperty(t.prototype,"props",h):delete t.prototype.props)}}}else{try{throw Error()}catch(_){u=_}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(_){if(_&&u&&typeof _.stack=="string")return[_.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{xf=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Oa(n):""}function eb(t,e){switch(t.tag){case 26:case 27:case 5:return Oa(t.type);case 16:return Oa("Lazy");case 13:return t.child!==e&&e!==null?Oa("Suspense Fallback"):Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 15:return _f(t.type,!1);case 11:return _f(t.type.render,!1);case 1:return _f(t.type,!0);case 31:return Oa("Activity");case 30:return Oa("ViewTransition");default:return""}}function E0(t){try{var e="",n=null;do e+=eb(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Fd=Object.prototype.hasOwnProperty,zp=Qt.unstable_scheduleCallback,yf=Qt.unstable_cancelCallback,tb=Qt.unstable_shouldYield,nb=Qt.unstable_requestPaint,ei=Qt.unstable_now,ib=Qt.unstable_getCurrentPriorityLevel,Nx=Qt.unstable_ImmediatePriority,Ux=Qt.unstable_UserBlockingPriority,lu=Qt.unstable_NormalPriority,ab=Qt.unstable_LowPriority,Lx=Qt.unstable_IdlePriority,rb=Qt.log,sb=Qt.unstable_setDisableYieldValue,wl=null,ti=null;function Ga(t){if(typeof rb=="function"&&sb(t),ti&&typeof ti.setStrictMode=="function")try{ti.setStrictMode(wl,t)}catch{}}var ni=Math.clz32?Math.clz32:cb,ob=Math.log,lb=Math.LN2;function cb(t){return t>>>=0,t===0?32:31-(ob(t)/lb|0)|0}var ql=256,Yl=262144,Zl=4194304;function Ar(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Wu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Ar(i):(s&=o,s!==0?a=Ar(s):n||(n=o&~t,n!==0&&(a=Ar(n))))):(o=i&~r,o!==0?a=Ar(o):s!==0?a=Ar(s):n||(n=i&~t,n!==0&&(a=Ar(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function Dl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ox(t,e){e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-ni(n),a=1<<i;e|=t[i],n&=~a}return e}function ub(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Px(){var t=Zl;return Zl<<=1,!(Zl&62914560)&&(Zl=4194304),t}function Sf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Nl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fb(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var d=31-ni(n),p=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var h=u[d];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&Ix(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function Ix(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ni(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function zx(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Fx(t,e){var n=e&-e;return n=n&42?1:Fp(n),n&(t.suspendedLanes|e)?0:n}function Fp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Bp(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Bx(){var t=mt.p;return t!==0?t:(t=window.event,t===void 0?32:_S(t.type))}function T0(t,e){var n=mt.p;try{return mt.p=t,e()}finally{mt.p=n}}var Ma=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ma,Wn="__reactProps$"+Ma,co="__reactContainer$"+Ma,A0="__reactEvents$"+Ma,db="__reactListeners$"+Ma,hb="__reactHandles$"+Ma,R0="__reactResources$"+Ma,Ul="__reactMarker$"+Ma,cu="__reactLoad$"+Ma;function Xu(t){delete t[pn],delete t[Wn],delete t[db],delete t[hb]}function Dr(t){var e;if(e=t[pn])return e;for(var n=t.parentNode;n;){if(e=n[co]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kg(t);t!==null;){if(n=t[pn])return n;t=kg(t)}return e}t=n,n=t.parentNode}return null}function uo(t){if(t=t[pn]||t[co]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Po(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(re(33))}function Ls(t){var e=t[R0];return e||(e=t[R0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function on(t){t[Ul]=!0}function Hx(t){t[cu]=void 0}var Gx=new Set,Vx={};function Qr(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Vx[t]=e,t=0;t<e.length;t++)Gx.add(e[t])}var pb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),C0={},w0={};function mb(t){return Fd.call(w0,t)?!0:Fd.call(C0,t)?!1:pb.test(t)?w0[t]=!0:(C0[t]=!0,!1)}var ct=!1;function D0(){var t=ct;return ct=!1,t}function Lc(t,e,n){if(mb(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Kl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function ea(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,i)}}function Zn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gb(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bd(t){if(!t._valueTracker){var e=kx(t)?"checked":"value";t._valueTracker=gb(t,e,""+t[e])}}function jx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}var vb=/[\n"\\]/g;function hi(t){return t.replace(vb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Hd(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Zn(e)):t.value!==""+Zn(e)&&(t.value=""+Zn(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?s==="number"&&t.value==e?Mf(t,Zn(t.value)):Mf(t,Zn(e)):n!=null?Mf(t,Zn(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Zn(o):t.removeAttribute("name")}function Wx(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){Bd(t);return}n=n!=null?""+Zn(n):"",e=e!=null?""+Zn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),Bd(t)}function Mf(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Os(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Xx(t,e,n){if(e!=null&&(e=""+Zn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Zn(n):""}function qx(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(re(92));if(Oo(i)){if(1<i.length)throw Error(re(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Zn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Bd(t)}function qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function N0(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||xb.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Yx(t,e,n){if(e!=null&&typeof e!="object")throw Error(re(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="",ct=!0);for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&(N0(t,a,i),ct=!0)}else for(var r in e)e.hasOwnProperty(r)&&N0(t,r,e[r])}function Hp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _b=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oc(t){return yb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var Gd=null;function Gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Es=null,Ps=null;function U0(t){var e=uo(t);if(e&&(t=e.stateNode)){var n=t[Wn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Hd(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+hi(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Wn]||null;if(!a)throw Error(re(90));Hd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&jx(i)}break e;case"textarea":Xx(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}}}var bf=!1;function Zx(t,e,n){if(bf)return t(e,n);bf=!0;try{var i=t(e);return i}finally{if(bf=!1,(Es!==null||Ps!==null)&&(of(),Es&&(e=Es,t=Ps,Ps=Es=null,U0(e),t)))for(e=0;e<t.length;e++)U0(t[e])}}function ol(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Wn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vd=!1;if(ga)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{Vd=!1}var Va=null,Vp=null,Pc=null;function Kx(){if(Pc)return Pc;var t,e=Vp,n=e.length,i,a="value"in Va?Va.value:Va.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return Pc=a.slice(t,1<i?1-i:void 0)}function Ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ql(){return!0}function L0(){return!1}function In(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ql:L0,this.isPropagationStopped=L0,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),e}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=In(hr),Ll=Rt({},hr,{view:0,detail:0}),Sb=In(Ll),Ef,Tf,Eo,Yu=Rt({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Ef=t.screenX-Eo.screenX,Tf=t.screenY-Eo.screenY):Tf=Ef=0,Eo=t),Ef)},movementY:function(t){return"movementY"in t?t.movementY:Tf}}),O0=In(Yu),Mb=Rt({},Yu,{dataTransfer:0}),bb=In(Mb),Eb=Rt({},Ll,{relatedTarget:0}),Af=In(Eb),Tb=Rt({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ab=In(Tb),Rb=Rt({},hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cb=In(Rb),wb=Rt({},hr,{data:0}),P0=In(wb),Db={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ub={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ub[t])?!!e[t]:!1}function kp(){return Lb}var Ob=Rt({},Ll,{key:function(t){if(t.key){var e=Db[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kp,charCode:function(t){return t.type==="keypress"?Ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pb=In(Ob),Ib=Rt({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I0=In(Ib),zb=Rt({},hr,{submitter:0}),Fb=In(zb),Bb=Rt({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kp}),Hb=In(Bb),Gb=Rt({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vb=In(Gb),kb=Rt({},Yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jb=In(kb),Wb=Rt({},hr,{newState:0,oldState:0,source:0}),Xb=In(Wb),qb=[9,13,27,32],jp=ga&&"CompositionEvent"in window,Vo=null;ga&&"documentMode"in document&&(Vo=document.documentMode);var Yb=ga&&"TextEvent"in window&&!Vo,Qx=ga&&(!jp||Vo&&8<Vo&&11>=Vo),z0=" ",F0=!1;function Jx(t,e){switch(t){case"keyup":return qb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $x(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function Zb(t,e){switch(t){case"compositionend":return $x(e);case"keypress":return e.which!==32?null:(F0=!0,z0);case"textInput":return t=e.data,t===z0&&F0?null:t;default:return null}}function Kb(t,e){if(Ts)return t==="compositionend"||!jp&&Jx(t,e)?(t=Kx(),Pc=Vp=Va=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qx&&e.locale!=="ko"?null:e.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function B0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qb[t.type]:e==="textarea"}function e_(t,e,n,i){Es?Ps?Ps.push(i):Ps=[i]:Es=i,e=Nu(e,"onChange"),0<e.length&&(n=new qu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ko=null,ll=null;function Jb(t){Zy(t,0)}function Zu(t){var e=Po(t);if(jx(e))return t}function H0(t,e){if(t==="change")return e}var t_=!1;if(ga){var Rf;if(ga){var Cf="oninput"in document;if(!Cf){var G0=document.createElement("div");G0.setAttribute("oninput","return;"),Cf=typeof G0.oninput=="function"}Rf=Cf}else Rf=!1;t_=Rf&&(!document.documentMode||9<document.documentMode)}function V0(){ko&&(ko.detachEvent("onpropertychange",n_),ll=ko=null)}function n_(t){if(t.propertyName==="value"&&Zu(ll)){var e=[];e_(e,ll,t,Gp(t)),Zx(Jb,e)}}function $b(t,e,n){t==="focusin"?(V0(),ko=e,ll=n,ko.attachEvent("onpropertychange",n_)):t==="focusout"&&V0()}function eE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zu(ll)}function tE(t,e){if(t==="click")return Zu(e)}function nE(t,e){if(t==="input"||t==="change")return Zu(e)}function iE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:iE;function cl(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Fd.call(e,a)||!ai(t[a],e[a]))return!1}return!0}function kd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function j0(t,e){var n=k0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=k0(n)}}function i_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?i_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=kd(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kd(t.document)}return e}function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var aE=ga&&"documentMode"in document&&11>=document.documentMode,As=null,jd=null,jo=null,Wd=!1;function W0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wd||As==null||As!==kd(i)||(i=As,"selectionStart"in i&&Wp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&cl(jo,i)||(jo=i,i=Nu(jd,"onSelect"),0<i.length&&(e=new qu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=As)))}function xr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},wf={},r_={};ga&&(r_=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Jr(t){if(wf[t])return wf[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r_)return wf[t]=e[n];return t}var s_=Jr("animationend"),o_=Jr("animationiteration"),l_=Jr("animationstart"),rE=Jr("transitionrun"),sE=Jr("transitionstart"),oE=Jr("transitioncancel"),c_=Jr("transitionend"),u_=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xd.push("scrollEnd");function wi(t,e){u_.set(t,e),Qr(e,[t])}var lE=0;function va(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ci.identifierPrefix;var n=lE++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function X0(t){if(t==null||typeof t=="string")return t;var e=null,n=Vs;if(n!==null)for(var i=0;i<n.length;i++){var a=t[n[i]];if(a!=null){if(a==="none")return"none";e=e==null?a:e+(" "+a)}}return e??t.default}function ba(t,e){return t=X0(t),e=X0(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var uu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],Cs=0,Xp=0;function Ku(){for(var t=Cs,e=Xp=Cs=0;e<t;){var n=li[e];li[e++]=null;var i=li[e];li[e++]=null;var a=li[e];li[e++]=null;var r=li[e];if(li[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&f_(n,a,r)}}function Qu(t,e,n,i){li[Cs++]=t,li[Cs++]=e,li[Cs++]=n,li[Cs++]=i,Xp|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function qp(t,e,n,i){return Qu(t,e,n,i),fu(t)}function $r(t,e){return Qu(t,null,null,e),fu(t)}function f_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-ni(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function fu(t){if(50<el)throw el=0,Xc=null,Error(re(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ws={};function cE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new cE(t,e,n,i)}function Yp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function d_(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function zc(t,e,n,i,a,r){var s=0;if(i=t,typeof i=="function")Yp(i)&&(s=1);else if(typeof i=="string")s=zT(t,n,Wi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(i){case Ld:return t=Hn(31,n,e,a),t.elementType=Ld,t.lanes=r,t;case Ms:return Or(n.children,a,r,e);case wx:s=8,a|=24;break;case Dd:return t=Hn(12,n,e,a|2),t.elementType=Dd,t.lanes=r,t;case Nd:return t=Hn(13,n,e,a),t.elementType=Nd,t.lanes=r,t;case Ud:return t=Hn(19,n,e,a),t.elementType=Ud,t.lanes=r,t;case KM:case Od:return t=a|32,t=Hn(30,n,e,t),t.elementType=Od,t.lanes=r,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Bi:s=10;break e;case Dx:s=9;break e;case Pp:s=11;break e;case Ip:s=14;break e;case Ia:s=16,i=null;break e}s=29,n=Error(re(130,t===null?"null":typeof t,"")),i=null}return e=Hn(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function Or(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function Df(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function h_(t){var e=Hn(18,null,null,0);return e.stateNode=t,e}function Nf(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var q0=new WeakMap;function pi(t,e){if(typeof t=="object"&&t!==null){var n=q0.get(t);return n!==void 0?n:(e={value:t,source:e,stack:E0(e)},q0.set(t,e),e)}return{value:t,source:e,stack:E0(e)}}var Ds=[],Ns=0,du=null,ul=0,ui=[],fi=0,sr=null,Gi=1,Vi="";function oa(t,e){Ds[Ns++]=ul,Ds[Ns++]=du,du=t,ul=e}function p_(t,e,n){ui[fi++]=Gi,ui[fi++]=Vi,ui[fi++]=sr,sr=t;var i=Gi;t=Vi;var a=32-ni(i)-1;i&=~(1<<a),n+=1;var r=32-ni(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Gi=1<<32-ni(e)+a|n<<a|i,Vi=r+t}else Gi=1<<r|n<<a|i,Vi=t}function Ju(t){t.return!==null&&(oa(t,1),p_(t,1,0))}function Zp(t){for(;t===du;)du=Ds[--Ns],Ds[Ns]=null,ul=Ds[--Ns],Ds[Ns]=null;for(;t===sr;)sr=ui[--fi],ui[fi]=null,Vi=ui[--fi],ui[fi]=null,Gi=ui[--fi],ui[fi]=null}function m_(t,e){ui[fi++]=Gi,ui[fi++]=Vi,ui[fi++]=sr,Gi=e.id,Vi=e.overflow,sr=t}var ln=null,Dt=null,Ke=!1,Ka=null,mi=!1,qd=Error(re(519));function or(t){var e=Error(re(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fl(pi(e,t)),qd}function Y0(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[pn]=t,e[Wn]=i,n){case"dialog":Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":case"embed":Qe("load",e);break;case"video":case"audio":for(n=0;n<ml.length;n++)Qe(ml[n],e);break;case"source":Qe("error",e);break;case"img":case"image":case"link":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"input":Qe("invalid",e),Wx(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Qe("invalid",e);break;case"textarea":Qe("invalid",e),qx(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||Qy(e.textContent,n)?(i.popover!=null&&(Qe("beforetoggle",e),Qe("toggle",e)),i.onScroll!=null&&Qe("scroll",e),i.onScrollEnd!=null&&Qe("scrollend",e),i.onClick!=null&&(e.onclick=Hi),e=!0):e=!1,e||or(t,!0)}function hu(t){for(ln=t.return;ln;)switch(ln.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:ln=ln.return}}function ns(t){if(t!==ln)return!1;if(!Ke)return hu(t),Ke=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Nh(t.type,t.memoizedProps)),n=!n),n&&Dt&&or(t),hu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));Dt=Vg(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));Dt=Vg(t)}else e===27?(e=Dt,pr(t.type)?(t=Ph,Ph=null,Dt=t):Dt=e):Dt=ln?gi(t.stateNode.nextSibling):null;return!0}function Br(){Dt=ln=null,Ke=!1}function Uf(){var t=Ka;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),Ka=null),t}function fl(t){Ka===null?Ka=[t]:Ka.push(t)}var Yd=Qi(null),es=null,ua=null;function ka(t,e,n){Ut(Yd,e._currentValue),e._currentValue=n}function ha(t){t._currentValue=Yd.current,vn(Yd)}function Fc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zd(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Fc(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(re(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Fc(s,n,t),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Fc(a.return,n,t),s=a.child,s=s!==null?s.sibling:null):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Hr(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(re(387));if(s=s.memoizedProps,s!==null){var o=a.type;ai(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===ru.current){if(s=a.alternate,s===null)throw Error(re(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(to):t=[to])}a=a.return}return t!==null&&Zd(e,t,n,i),e.flags|=262144,t!==null}function pu(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gr(t){es=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function mn(t){return g_(es,t)}function Jl(t,e){return es===null&&Gr(t),g_(t,e)}function g_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},ua===null){if(t===null)throw Error(re(308));ua=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ua=ua.next=e;return n}var uE=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},fE=Qt.unstable_scheduleCallback,dE=Qt.unstable_NormalPriority,qt={$$typeof:Bi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kp(){return{controller:new uE,data:new Map,refCount:0}}function Ol(t){t.refCount--,t.refCount===0&&fE(dE,function(){t.controller.abort()})}function Z0(t,e){if(t.pendingLanes&4194048){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var i=e[t];n.indexOf(i)===-1&&n.push(i)}}}var Io=null;function hE(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Wo=null,Kd=0,Vr=0,Is=null;function pE(t,e){if(Wo===null){var n=Wo=[];Kd=0,Vr=Em(),Is={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Kd++,e.then(K0,K0),e}function K0(){if(--Kd===0&&(Io=null,Wo!==null)){Is!==null&&(Is.status="fulfilled");var t=Wo;Wo=null,Vr=0,Is=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function mE(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Q0=He.S;He.S=function(t,e){if(Oy=ei(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&pE(t,e),Io!==null)for(var n=Js;n!==null;)Z0(n,Io),n=n.next;if(n=t.types,n!==null){for(var i=Js;i!==null;)Z0(i,n),i=i.next;if(Vr!==0){i=Io,i===null&&(i=Io=[]);for(var a=0;a<n.length;a++){var r=n[a];i.indexOf(r)===-1&&i.push(r)}}}Q0!==null&&Q0(t,e)};var Pr=Qi(null);function Qp(){var t=Pr.current;return t!==null?t:At.pooledCache}function Bc(t,e){e===null?Ut(Pr,Pr.current):Ut(Pr,e.pool)}function v_(){var t=Qp();return t===null?null:{parent:qt._currentValue,pool:t}}var fo=Error(re(460)),Jp=Error(re(474)),$u=Error(re(542)),mu={then:function(){}};function J0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function x_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Hi,Hi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,eg(t),t===void 0&&!("reason"in e)?Error(re(600)):t;default:if(typeof e.status=="string")e.then(Hi,Hi);else{if(t=At,t!==null&&100<t.shellSuspendCounter)throw Error(re(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,eg(t),t}throw Ir=e,fo}}function Rr(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ir=n,fo):n}}var Ir=null;function $0(){if(Ir===null)throw Error(re(459));var t=Ir;return Ir=null,t}function eg(t){if(t===fo||t===$u)throw Error(re(483))}var zs=null,dl=0;function $l(t){var e=dl;return dl+=1,zs===null&&(zs=[]),x_(zs,t,e)}function Ca(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ec(t,e){throw e.$$typeof===ZM?Error(re(525)):(t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function __(t){function e(f,v){if(t){var S=f.deletions;S===null?(f.deletions=[v],f.flags|=16):S.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key===null?v.set(f.index,f):v.set(f.key,f),f=f.sibling;return v}function a(f,v){return f=da(f,v),f.index=0,f.sibling=null,f}function r(f,v,S){return f.index=S,t?(S=f.alternate,S!==null?(S=S.index,S<v?(f.flags|=2,v):S):(f.flags|=134217730,v)):(f.flags|=1048576,v)}function s(f){return t&&f.alternate===null&&(f.flags|=134217730),f}function o(f,v,S,y){return v===null||v.tag!==6?(v=Df(S,f.mode,y),v.return=f,v):(v=a(v,S),v.return=f,v)}function l(f,v,S,y){var A=S.type;return A===Ms?(f=d(f,v,S.props.children,y,S.key),Ca(f,S),f):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ia&&Rr(A)===v.type)?(v=a(v,S.props),Ca(v,S),v.return=f,v):(v=zc(S.type,S.key,S.props,null,f.mode,y),Ca(v,S),v.return=f,v)}function c(f,v,S,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Nf(S,f.mode,y),v.return=f,v):(v=a(v,S.children||[]),v.return=f,v)}function d(f,v,S,y,A){return v===null||v.tag!==7?(v=Or(S,f.mode,y,A),v.return=f,v):(v=a(v,S),v.return=f,v)}function p(f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Df(""+v,f.mode,S),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xl:return S=zc(v.type,v.key,v.props,null,f.mode,S),Ca(S,v),S.return=f,S;case Lo:return v=Nf(v,f.mode,S),v.return=f,v;case Ia:return v=Rr(v),p(f,v,S)}if(Oo(v)||Mo(v))return v=Or(v,f.mode,S,null),v.return=f,v;if(typeof v.then=="function")return p(f,$l(v),S);if(v.$$typeof===Bi)return p(f,Jl(f,v),S);ec(f,v)}return null}function u(f,v,S,y){var A=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return A!==null?null:o(f,v,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xl:return S.key===A?l(f,v,S,y):null;case Lo:return S.key===A?c(f,v,S,y):null;case Ia:return S=Rr(S),u(f,v,S,y)}if(Oo(S)||Mo(S))return A!==null?null:d(f,v,S,y,null);if(typeof S.then=="function")return u(f,v,$l(S),y);if(S.$$typeof===Bi)return u(f,v,Jl(f,S),y);ec(f,S)}return null}function h(f,v,S,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(S)||null,o(v,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xl:return f=f.get(y.key===null?S:y.key)||null,l(v,f,y,A);case Lo:return f=f.get(y.key===null?S:y.key)||null,c(v,f,y,A);case Ia:return y=Rr(y),h(f,v,S,y,A)}if(Oo(y)||Mo(y))return f=f.get(S)||null,d(v,f,y,A,null);if(typeof y.then=="function")return h(f,v,S,$l(y),A);if(y.$$typeof===Bi)return h(f,v,S,Jl(v,y),A);ec(v,y)}return null}function _(f,v,S,y){for(var A=null,R=null,x=v,E=v=0,O=null;x!==null&&E<S.length;E++){x.index>E?(O=x,x=null):O=x.sibling;var N=u(f,x,S[E],y);if(N===null){x===null&&(x=O);break}t&&x&&N.alternate===null&&e(f,x),v=r(N,v,E),R===null?A=N:R.sibling=N,R=N,x=O}if(E===S.length)return n(f,x),Ke&&oa(f,E),A;if(x===null){for(;E<S.length;E++)x=p(f,S[E],y),x!==null&&(v=r(x,v,E),R===null?A=x:R.sibling=x,R=x);return Ke&&oa(f,E),A}for(x=i(x);E<S.length;E++)O=h(x,f,E,S[E],y),O!==null&&(t&&(N=O.alternate,N!==null&&x.delete(N.key===null?E:N.key)),v=r(O,v,E),R===null?A=O:R.sibling=O,R=O);return t&&x.forEach(function(P){return e(f,P)}),Ke&&oa(f,E),A}function M(f,v,S,y){if(S==null)throw Error(re(151));for(var A=null,R=null,x=v,E=v=0,O=null,N=S.next();x!==null&&!N.done;E++,N=S.next()){x.index>E?(O=x,x=null):O=x.sibling;var P=u(f,x,N.value,y);if(P===null){x===null&&(x=O);break}t&&x&&P.alternate===null&&e(f,x),v=r(P,v,E),R===null?A=P:R.sibling=P,R=P,x=O}if(N.done)return n(f,x),Ke&&oa(f,E),A;if(x===null){for(;!N.done;E++,N=S.next())N=p(f,N.value,y),N!==null&&(v=r(N,v,E),R===null?A=N:R.sibling=N,R=N);return Ke&&oa(f,E),A}for(x=i(x);!N.done;E++,N=S.next())N=h(x,f,E,N.value,y),N!==null&&(t&&(O=N.alternate,O!==null&&x.delete(O.key===null?E:O.key)),v=r(N,v,E),R===null?A=N:R.sibling=N,R=N);return t&&x.forEach(function(H){return e(f,H)}),Ke&&oa(f,E),A}function m(f,v,S,y){if(typeof S=="object"&&S!==null&&S.type===Ms&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Xl:e:{for(var A=S.key;v!==null;){if(v.key===A){if(A=S.type,A===Ms){if(v.tag===7){n(f,v.sibling),y=a(v,S.props.children),Ca(y,S),y.return=f,f=y;break e}}else if(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ia&&Rr(A)===v.type){n(f,v.sibling),y=a(v,S.props),Ca(y,S),y.return=f,f=y;break e}n(f,v);break}else e(f,v);v=v.sibling}S.type===Ms?(y=Or(S.props.children,f.mode,y,S.key),Ca(y,S),y.return=f,f=y):(y=zc(S.type,S.key,S.props,null,f.mode,y),Ca(y,S),y.return=f,f=y)}return s(f);case Lo:e:{for(A=S.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(f,v.sibling),y=a(v,S.children||[]),y.return=f,f=y;break e}else{n(f,v);break}else e(f,v);v=v.sibling}y=Nf(S,f.mode,y),y.return=f,f=y}return s(f);case Ia:return S=Rr(S),m(f,v,S,y)}if(Oo(S))return _(f,v,S,y);if(Mo(S)){if(A=Mo(S),typeof A!="function")throw Error(re(150));return S=A.call(S),M(f,v,S,y)}if(typeof S.then=="function")return m(f,v,$l(S),y);if(S.$$typeof===Bi)return m(f,v,Jl(f,S),y);ec(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(n(f,v.sibling),y=a(v,S),y.return=f,f=y):(n(f,v),y=Df(S,f.mode,y),y.return=f,f=y),s(f)):n(f,v)}return function(f,v,S,y){try{dl=0;var A=m(f,v,S,y);return zs=null,A}catch(x){if(x===fo||x===$u)throw x;var R=Hn(29,x,null,f.mode);return R.lanes=y,R.return=f,R}finally{}}}var kr=__(!0),y_=__(!1),za=!1;function $p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,pt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=fu(t),f_(t,null,n),e}return Qu(t,i,e,n),fu(t)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zx(t,n)}}function Lf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Jd=!1;function qo(){if(Jd){var t=Is;if(t!==null)throw t}}function Yo(t,e,n,i){Jd=!1;var a=t.updateQueue;za=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;s=0,d=c=l=null,o=r;do{var u=o.lane&-536870913,h=u!==o.lane;if(h?(nt&u)===u:(i&u)===u){u!==0&&u===Vr&&(Jd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var _=t,M=o;u=e;var m=n;switch(M.tag){case 1:if(_=M.payload,typeof _=="function"){p=_.call(m,p,u);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,u=typeof _=="function"?_.call(m,p,u):_,u==null)break e;p=Rt({},p,u);break e;case 2:za=!0}}u=o.callback,u!==null&&(t.flags|=64,h&&(t.flags|=8192),h=a.callbacks,h===null?a.callbacks=[u]:h.push(u))}else h={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=h,l=p):d=d.next=h,s|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);d===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,r===null&&(a.shared.lanes=0),ur|=s,t.lanes=s,t.memoizedState=p}}function S_(t,e){if(typeof t!="function")throw Error(re(191,t));t.call(e)}function M_(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)S_(n[t],e)}var lr=Qi(null),gu=Qi(0);function tg(t,e){t=Sa,Ut(gu,t),Ut(lr,e),Sa=t|e.baseLanes}function $d(){Ut(gu,Sa),Ut(lr,lr.current)}function em(){Sa=gu.current,vn(lr),vn(gu)}var yn=Qi(null),An=null;function $a(t){var e=t.alternate;Ut(xn,xn.current&1),Ut(yn,t),An===null&&(e===null||lr.current!==null||e.memoizedState!==null)&&(An=t)}function eh(t){Ut(xn,xn.current),Ut(yn,t),An===null&&(An=t)}function b_(t){t.tag===22?(Ut(xn,xn.current),Ut(yn,t),An===null&&(An=t)):er()}function er(){Ut(xn,xn.current),Ut(yn,yn.current)}function Kn(t){vn(yn),An===t&&(An=null),vn(xn)}var xn=Qi(0);function hl(t,e){Ut(yn,yn.current),Ut(xn,e)}function tm(t){vn(xn),vn(yn),An===t&&(An=null)}function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Oh(n)||Cm(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xa=0,We=null,Et=null,Xt=null,xu=!1,Fs=!1,jr=!1,_u=0,pl=0,Bs=null,gE=0;function Bt(){throw Error(re(321))}function nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function im(t,e,n,i,a,r){return xa=r,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,He.H=t===null||t.memoizedState===null?ey:ty,jr=!1,r=n(i,a),jr=!1,Fs&&(r=T_(e,n,i,a)),E_(t),r}function E_(t){He.H=yu;var e=Et!==null&&Et.next!==null;if(xa=0,Xt=Et=We=null,xu=!1,pl=0,Bs=null,e)throw Error(re(300));t===null||Yt||(t=t.dependencies,t!==null&&pu(t)&&(Yt=!0))}function T_(t,e,n,i){We=t;var a=0;do{if(Fs&&(Bs=null),pl=0,Fs=!1,25<=a)throw Error(re(301));if(a+=1,Xt=Et=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}He.H=EE,r=e(n,i)}while(Fs);return r}function vE(){var t=He.H,e=t.useState()[0];return e=typeof e.then=="function"?Pl(e):e,t=t.useState()[0],(Et!==null?Et.memoizedState:null)!==t&&(We.flags|=1024),e}function am(){var t=_u!==0;return _u=0,t}function rm(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function sm(t){if(xu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xu=!1}xa=0,Xt=Et=We=null,Fs=!1,pl=_u=0,Bs=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?We.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Vt(){if(Et===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Xt===null?We.memoizedState:Xt.next;if(e!==null)Xt=e,Et=t;else{if(t===null)throw We.alternate===null?Error(re(467)):Error(re(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Xt===null?We.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(t){var e=pl;return pl+=1,Bs===null&&(Bs=[]),t=x_(Bs,t,e),e=We,(Xt===null?e.memoizedState:Xt.next)===null&&(e=e.alternate,He.H=e===null||e.memoizedState===null?ey:ty),t}function tf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pl(t);if(t.$$typeof===JM)return;if(t.$$typeof===Bi)return mn(t)}throw Error(re(438,String(t)))}function om(t){var e=null,n=We.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=We.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ef(),We.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=QM;return e.index++,n}function _a(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=Vt();return lm(e,Et,t)}function lm(t,e,n){var i=t.queue;if(i===null)throw Error(re(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(nt&p)===p:(xa&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Vr&&(d=!0);else if((xa&u)===u){c=c.next,u===Vr&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,s=r):l=l.next=p,We.lanes|=u,ur|=u;p=c.action,jr&&n(r,p),r=c.hasEagerState?c.eagerState:n(r,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,s=r):l=l.next=u,We.lanes|=p,ur|=p;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!ai(r,t.memoizedState)&&(Yt=!0,d&&(n=Is,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Of(t){var e=Vt(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);ai(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function A_(t,e,n){var i=We,a=Vt(),r=Ke;if(r){if(n===void 0)throw Error(re(407));n=n()}else n=e();var s=!ai((Et||a).memoizedState,n);if(s&&(a.memoizedState=n,Yt=!0),a=a.queue,cm(w_.bind(null,i,a,t),[t]),t=a.getSnapshot!==e||s||Xt!==null&&(Xt.memoizedState.tag&1)!==0,Ys(t?9:8,{destroy:void 0},C_.bind(null,i,a,n,e),null),t){if(i.flags|=2048,At===null)throw Error(re(349));r||xa&127||R_(i,e,n)}return n}function R_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e=ef(),We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C_(t,e,n,i){e.value=n,e.getSnapshot=i,D_(e)&&N_(t)}function w_(t,e,n){return n(function(){D_(e)&&N_(t)})}function D_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function N_(t){var e=$r(t,2);e!==null&&Vn(e,t,2)}function th(t){var e=Ln();if(typeof t=="function"){var n=t;if(t=n(),jr){Ga(!0);try{n()}finally{Ga(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e}function U_(t,e,n,i){return t.baseState=n,lm(t,Et,typeof i=="function"?i:_a)}function xE(t,e,n,i,a){if(af(t))throw Error(re(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};He.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,L_(e,r)):(r.next=n.next,e.pending=n.next=r)}}function L_(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=He.T,s={};s.types=r!==null?r.types:null,He.T=s;try{var o=n(a,i),l=He.S;l!==null&&l(s,o),ng(t,e,o)}catch(c){nh(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),He.T=r}}else try{r=n(a,i),ng(t,e,r)}catch(c){nh(t,e,c)}}function ng(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ig(t,e,i)},function(i){return nh(t,e,i)}):ig(t,e,n)}function ig(t,e,n){e.status="fulfilled",e.value=n,O_(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,L_(t,n)))}function nh(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,O_(e),e=e.next;while(e!==i)}t.action=null}function O_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function P_(t,e){return e}function ag(t,e){if(Ke){var n=At.formState;if(n!==null){e:{var i=We;if(Ke){if(Dt){t:{for(var a=Dt,r=mi;a.nodeType!==8;){if(!r){a=null;break t}if(a=gi(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Dt=gi(a.nextSibling),i=a.data==="F!";break e}}or(i)}i=!1}i&&(e=n[0])}}return n=Ln(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P_,lastRenderedState:e},n.queue=i,n=Q_.bind(null,We,i),i.dispatch=n,i=th(!1),r=hm.bind(null,We,!1,i.queue),i=Ln(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=xE.bind(null,We,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function rg(t){var e=Vt();return I_(e,Et,t)}function I_(t,e,n){if(e=lm(t,e,P_)[0],t=Hc(_a)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Pl(e)}catch(s){throw s===fo?$u:s}else i=e;e=Vt();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&(We.flags|=2048,Ys(9,{destroy:void 0},_E.bind(null,a,n),null)),[i,r,t]}function _E(t,e){t.action=e}function sg(t){var e=Vt(),n=Et;if(n!==null)return I_(e,n,t);Vt(),e=e.memoizedState,n=Vt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Ys(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=We.updateQueue,e===null&&(e=ef(),We.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function z_(){return Vt().memoizedState}function Gc(t,e,n,i){var a=Ln();We.flags|=t,a.memoizedState=Ys(1|e,{destroy:void 0},n,i===void 0?null:i)}function nf(t,e,n,i){var a=Vt();i=i===void 0?null:i;var r=a.memoizedState.inst;Et!==null&&i!==null&&nm(i,Et.memoizedState.deps)?a.memoizedState=Ys(e,r,n,i):(We.flags|=t,a.memoizedState=Ys(1|e,r,n,i))}function og(t,e){Gc(8390656,8,t,e)}function cm(t,e){nf(2048,8,t,e)}function yE(t){We.flags|=4;var e=We.updateQueue;if(e===null)e=ef(),We.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function F_(t){var e=Vt().memoizedState;return yE({ref:e,nextImpl:t}),function(){if(pt&2)throw Error(re(440));return e.impl.apply(void 0,arguments)}}function B_(t,e){return nf(4,2,t,e)}function H_(t,e){return nf(4,4,t,e)}function G_(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function V_(t,e,n){n=n!=null?n.concat([t]):null,nf(4,4,G_.bind(null,e,t),n)}function um(){}function k_(t,e){var n=Vt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&nm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function j_(t,e){var n=Vt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&nm(e,i[1]))return i[0];if(i=t(),jr){Ga(!0);try{t()}finally{Ga(!1)}}return n.memoizedState=[i,e],i}function fm(t,e,n){return n===void 0||xa&1073741824&&!(nt&261930)?t.memoizedState=e:(t.memoizedState=n,t=Iy(),We.lanes|=t,ur|=t,n)}function W_(t,e,n,i){return ai(n,e)?n:lr.current!==null?(t=fm(t,n,i),ai(t,e)||(Yt=!0),t):!(xa&106)||xa&1073741824&&!(nt&261930)?(Yt=!0,t.memoizedState=n):(t=Iy(),We.lanes|=t,ur|=t,e)}function X_(t,e,n,i,a){var r=mt.p;mt.p=r!==0&&8>r?r:8;var s=He.T,o={};o.types=s!==null?s.types:null,He.T=o,hm(t,!1,e,n);try{var l=a(),c=He.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=mE(l,i);Zo(t,e,d,ii(t))}else Zo(t,e,i,ii(t))}catch(p){Zo(t,e,{then:function(){},status:"rejected",reason:p},ii())}finally{mt.p=r,s!==null&&o.types!==null&&(s.types=o.types),He.T=s}}function SE(){}function ih(t,e,n,i){if(t.tag!==5)throw Error(re(476));var a=q_(t).queue;X_(t,a,e,Lr,n===null?SE:function(){return Y_(t),n(i)})}function q_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Lr,baseState:Lr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:Lr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Y_(t){var e=q_(t);e.next===null&&(e=t.alternate.memoizedState),Zo(t,e.next.queue,{},ii())}function dm(){return mn(to)}function Z_(){return Vt().memoizedState}function K_(){return Vt().memoizedState}function ME(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ii();t=Qa(n);var i=Ja(e,t,n);i!==null&&(Vn(i,e,n),Xo(i,e,n)),e={cache:Kp()},t.payload=e;return}e=e.return}}function bE(t,e,n){var i=ii();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},af(t)?J_(e,n):(n=qp(t,e,n,i),n!==null&&(Vn(n,t,i),$_(n,e,i)))}function Q_(t,e,n){var i=ii();Zo(t,e,n,i)}function Zo(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(af(t))J_(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,ai(o,s))return Qu(t,e,a,0),At===null&&Ku(),!1}catch{}finally{}if(n=qp(t,e,a,i),n!==null)return Vn(n,t,i),$_(n,e,i),!0}return!1}function hm(t,e,n,i){if(i={lane:2,revertLane:Em(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},af(t)){if(e)throw Error(re(479))}else e=qp(t,n,i,2),e!==null&&Vn(e,t,2)}function af(t){var e=t.alternate;return t===We||e!==null&&e===We}function J_(t,e){Fs=xu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $_(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zx(t,n)}}var yu={readContext:mn,use:tf,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt,useEffectEvent:Bt},ey={readContext:mn,use:tf,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:mn,useEffect:og,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Gc(4194308,4,G_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gc(4194308,4,t,e)},useInsertionEffect:function(t,e){Gc(4,2,t,e)},useMemo:function(t,e){var n=Ln();e=e===void 0?null:e;var i=t();if(jr){Ga(!0);try{t()}finally{Ga(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Ln();if(n!==void 0){var a=n(e);if(jr){Ga(!0);try{n(e)}finally{Ga(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=bE.bind(null,We,t),[i.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:function(t){t=th(t);var e=t.queue,n=Q_.bind(null,We,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:um,useDeferredValue:function(t,e){var n=Ln();return fm(n,t,e)},useTransition:function(){var t=th(!1);return t=X_.bind(null,We,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=We,a=Ln();if(Ke){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),At===null)throw Error(re(349));nt&127||R_(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,og(w_.bind(null,i,r,t),[t]),i.flags|=2048,Ys(9,{destroy:void 0},C_.bind(null,i,r,n,e),null),n},useId:function(){var t=Ln(),e=At.identifierPrefix;if(Ke){var n=Vi,i=Gi;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=_u++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=gE++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:dm,useFormState:ag,useActionState:ag,useOptimistic:function(t){var e=Ln();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=hm.bind(null,We,!0,n),n.dispatch=e,[t,e]},useMemoCache:om,useCacheRefresh:function(){return Ln().memoizedState=ME.bind(null,We)},useEffectEvent:function(t){var e=Ln(),n={impl:t};return e.memoizedState=n,function(){if(pt&2)throw Error(re(440));return n.impl.apply(void 0,arguments)}}},ty={readContext:mn,use:tf,useCallback:k_,useContext:mn,useEffect:cm,useImperativeHandle:V_,useInsertionEffect:B_,useLayoutEffect:H_,useMemo:j_,useReducer:Hc,useRef:z_,useState:function(){return Hc(_a)},useDebugValue:um,useDeferredValue:function(t,e){var n=Vt();return W_(n,Et.memoizedState,t,e)},useTransition:function(){var t=Hc(_a)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Pl(t),e]},useSyncExternalStore:A_,useId:Z_,useHostTransitionStatus:dm,useFormState:rg,useActionState:rg,useOptimistic:function(t,e){var n=Vt();return U_(n,Et,t,e)},useMemoCache:om,useCacheRefresh:K_,useEffectEvent:F_},EE={readContext:mn,use:tf,useCallback:k_,useContext:mn,useEffect:cm,useImperativeHandle:V_,useInsertionEffect:B_,useLayoutEffect:H_,useMemo:j_,useReducer:Of,useRef:z_,useState:function(){return Of(_a)},useDebugValue:um,useDeferredValue:function(t,e){var n=Vt();return Et===null?fm(n,t,e):W_(n,Et.memoizedState,t,e)},useTransition:function(){var t=Of(_a)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Pl(t),e]},useSyncExternalStore:A_,useId:Z_,useHostTransitionStatus:dm,useFormState:sg,useActionState:sg,useOptimistic:function(t,e){var n=Vt();return Et!==null?U_(n,Et,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:om,useCacheRefresh:K_,useEffectEvent:F_};function Pf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ah={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ii(),a=Qa(i);a.payload=e,n!=null&&(a.callback=n),e=Ja(t,a,i),e!==null&&(Vn(e,t,i),Xo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ii(),a=Qa(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Ja(t,a,i),e!==null&&(Vn(e,t,i),Xo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ii(),i=Qa(n);i.tag=2,e!=null&&(i.callback=e),e=Ja(t,i,n),e!==null&&(Vn(e,t,n),Xo(e,t,n))}};function lg(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!cl(n,i)||!cl(a,r):!0}function cg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ah.enqueueReplaceState(e,e.state,null)}function Wr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Rt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function ny(t){uu(t)}function iy(t){console.error(t)}function ay(t){uu(t)}function Su(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function ug(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function rh(t,e,n){return n=Qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Su(t,e)},n}function ry(t){return t=Qa(t),t.tag=3,t}function sy(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){ug(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ug(e,n,i),typeof a!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function TE(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Hr(e,n,a,!0),n=yn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return An===null?wu():n.alternate===null&&Ht===0&&(Ht=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===mu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Vf(t,i,a)),!1;case 22:return n.flags|=65536,i===mu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Vf(t,i,a)),!1}throw Error(re(435,n.tag))}return Vf(t,i,a),wu(),!1}if(Ke)return e=yn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==qd&&(t=Error(re(422),{cause:i}),fl(pi(t,n)))):(i!==qd&&(e=Error(re(423),{cause:i}),fl(pi(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=pi(i,n),a=rh(t.stateNode,i,a),Lf(t,a),Ht!==4&&(Ht=2)),!1;var r=Error(re(520),{cause:i});if(r=pi(r,n),$o===null?$o=[r]:$o.push(r),Ht!==4&&(Ht=2),e===null)return!0;i=pi(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=rh(n.stateNode,i,t),Lf(n,t),!1;case 1:if(e=n.type,r=n.stateNode,!(n.flags&128)&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ry(a),sy(a,t,n,i),Lf(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var pm=Error(re(461)),Yt=!1;function Zt(t,e,n,i){e.child=t===null?y_(e,null,n,i):kr(e,t.child,n,i)}function fg(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Gr(e),i=im(t,e,n,s,r,a),o=am(),t!==null&&!Yt?(rm(t,e,a),ya(t,e,a)):(Ke&&o&&Ju(e),e.flags|=1,Zt(t,e,i,a),e.child)}function dg(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!Yp(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,oy(t,e,r,i,a)):(t=zc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!gm(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:cl,n(s,i)&&t.ref===e.ref)return ya(t,e,a)}return e.flags|=1,t=da(r,i),t.ref=e.ref,t.return=e,e.child=t}function oy(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(cl(r,i)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=i=r,gm(t,a))t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,ya(t,e,a)}return sh(t,e,n,i,a)}function ly(t,e,n,i){var a=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,e.child=null;return hg(t,e,r,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bc(e,r!==null?r.cachePool:null),r!==null?tg(e,r):$d(),b_(e);else return i=e.lanes=536870912,hg(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Bc(e,r.cachePool),tg(e,r),er(),e.memoizedState=null):(t!==null&&Bc(e,null),$d(),er());return Zt(t,e,a,n),e.child}function Ko(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function hg(t,e,n,i,a){var r=Qp();return r=r===null?null:{parent:qt._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Bc(e,null),$d(),b_(e),t!==null&&Hr(t,e,i,!0),e.childLanes=a,null}function Vc(t,e){return e=rf({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function pg(t,e,n){return kr(e,t.child,null,n),t=Vc(e,e.pendingProps),t.flags|=2,Kn(e),e.memoizedState=null,t}function AE(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Ke){if(i.mode==="hidden")return t=Vc(e,i),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ko(null,t);if(eh(e),(t=Dt)?(t=oS(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:sr!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},n=h_(t),n.return=e,e.child=n,ln=e,Dt=null)):t=null,t===null)throw or(e);return e.lanes=536870912,null}return Vc(e,i)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(eh(e),a)if(e.flags&256)e.flags&=-257,e=pg(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(re(558));else if(Yt||Hr(t,e,n,!1),a=(n&t.childLanes)!==0,Yt||a){if(lr.current===null){if(i=At,i!==null&&(s=Fx(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,$r(t,s),Vn(i,t,s),pm;wu()}e=pg(t,e,n)}else t=r.treeContext,Dt=gi(s.nextSibling),ln=e,Ke=!0,Ka=null,mi=!1,t!==null&&m_(e,t),e=Vc(e,i),e.flags|=134221824;return e}return t=da(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function vs(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(re(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function sh(t,e,n,i,a){return Gr(e),n=im(t,e,n,i,void 0,a),i=am(),t!==null&&!Yt?(rm(t,e,a),ya(t,e,a)):(Ke&&i&&Ju(e),e.flags|=1,Zt(t,e,n,a),e.child)}function mg(t,e,n,i,a,r){return Gr(e),e.updateQueue=null,n=T_(e,i,n,a),E_(t),i=am(),t!==null&&!Yt?(rm(t,e,r),ya(t,e,r)):(Ke&&i&&Ju(e),e.flags|=1,Zt(t,e,n,r),e.child)}function gg(t,e,n,i,a){if(Gr(e),e.stateNode===null){var r=ws,s=n.contextType;typeof s=="object"&&s!==null&&(r=mn(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ah,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},$p(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?mn(s):ws,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Pf(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&ah.enqueueReplaceState(r,r.state,null),Yo(e,i,r,a),qo(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=Wr(n,o);r.props=l;var c=r.context,d=n.contextType;s=ws,typeof d=="object"&&d!==null&&(s=mn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&cg(e,r,i,s),za=!1;var u=e.memoizedState;r.state=u,Yo(e,i,r,a),qo(),c=e.memoizedState,o||u!==c||za?(typeof p=="function"&&(Pf(e,n,p,i),c=e.memoizedState),(l=za||lg(e,n,l,i,u,c,s))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,Qd(t,e),s=e.memoizedProps,d=Wr(n,s),r.props=d,p=e.pendingProps,u=r.context,c=n.contextType,l=ws,typeof c=="object"&&c!==null&&(l=mn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==p||u!==l)&&cg(e,r,i,l),za=!1,u=e.memoizedState,r.state=u,Yo(e,i,r,a),qo();var h=e.memoizedState;s!==p||u!==h||za||t!==null&&t.dependencies!==null&&pu(t.dependencies)?(typeof o=="function"&&(Pf(e,n,o,i),h=e.memoizedState),(d=za||lg(e,n,d,i,u,h,l)||t!==null&&t.dependencies!==null&&pu(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,h,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,h,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=h),r.props=i,r.state=h,r.context=l,i=d):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,vs(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=kr(e,t.child,null,a),e.child=kr(e,null,n,a)):Zt(t,e,n,a),e.memoizedState=r.state,t=e.child):t=ya(t,e,a),t}function vg(t,e,n,i){return Br(),e.flags|=256,Zt(t,e,n,i),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lh(t){return{baseLanes:t,cachePool:v_()}}function ch(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=$n),t}function cy(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ke){if(a?$a(e):er(),(t=Dt)?(t=oS(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:sr!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},n=h_(t),n.return=e,e.child=n,ln=e,Dt=null)):t=null,t===null)throw or(e);return Cm(t)?e.lanes=32:e.lanes=536870912,null}return r=i.children,i=i.fallback,a?(er(),a=e.mode,r=rf({mode:"hidden",children:r},a),i=Or(i,a,n,null),r.return=e,i.return=e,r.sibling=i,e.child=r,i=e.child,i.memoizedState=lh(n),i.childLanes=ch(t,s,n),e.memoizedState=oh,Ko(null,i)):($a(e),mm(e,r))}var o=t.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return RE(t,e,r,s,i,l,o,n)}return a?(er(),a=i.fallback,r=e.mode,o=t.child,l=o.sibling,i=da(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=da(l,a):(a=Or(a,r,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,Ko(null,i),i=e.child,a=t.child.memoizedState,a===null?a=lh(n):(r=a.cachePool,r!==null?(o=qt._currentValue,r=r.parent!==o?{parent:o,pool:o}:r):r=v_(),a={baseLanes:a.baseLanes|n,cachePool:r}),i.memoizedState=a,i.childLanes=ch(t,s,n),e.memoizedState=oh,Ko(t.child,i)):($a(e),n=t.child,t=n.sibling,n=da(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function mm(t,e){return e=rf({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function rf(t,e){return t=Hn(22,t,null,e),t.lanes=0,t}function tc(t,e,n){return kr(e,t.child,null,n),t=mm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RE(t,e,n,i,a,r,s,o){if(n)return e.flags&256?($a(e),e.flags&=-257,tc(t,e,o)):e.memoizedState!==null?(er(),e.child=t.child,e.flags|=128,null):(er(),r=a.fallback,s=e.mode,a=rf({mode:"visible",children:a.children},s),r=Or(r,s,o,null),r.flags|=2,a.return=e,r.return=e,a.sibling=r,e.child=a,kr(e,t.child,null,o),a=e.child,a.memoizedState=lh(o),a.childLanes=ch(t,i,o),e.memoizedState=oh,Ko(null,a));if($a(e),Cm(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(re(419)),a.stack="",a.digest=i,fl({value:a,source:null,stack:null})),tc(t,e,o)}if(Yt||Hr(t,e,o,!1),i=(o&t.childLanes)!==0,Yt||i){if(lr.current!==null)return tc(t,e,o);if(i=At,i!==null&&(a=Fx(i,o),a!==0&&a!==s.retryLane))throw s.retryLane=a,$r(t,a),Vn(i,t,a),pm;return Oh(r)||wu(),tc(t,e,o)}return Oh(r)?(e.flags|=192,e.child=t.child,null):(t=s.treeContext,Dt=gi(r.nextSibling),ln=e,Ke=!0,Ka=null,mi=!1,t!==null&&m_(e,t),e=mm(e,a.children),e.flags|=134221824,e)}function xg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fc(t.return,e,n)}function _g(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&vu(n)===null&&(e=t),t=t.sibling}return e}function nc(t,e,n,i,a,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function If(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function uh(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=xn.current;if(e.flags&128)return hl(e,s),null;var o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,hl(e,s),a==="backwards"&&t!==null?(If(t),Zt(t,e,i,n),If(t)):Zt(t,e,i,n),i=Ke?ul:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,n,e);else if(t.tag===19)xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"backwards":n=_g(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null,If(e)),nc(e,!0,a,null,r,i);break;case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&vu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}nc(e,!0,n,null,r,i);break;case"together":nc(e,!1,null,null,void 0,i);break;case"independent":e.memoizedState=null;break;default:n=_g(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),nc(e,!1,a,n,r,i)}return e.child}function yg(t,e,n){var i=e.pendingProps;return ka(e,e.type,i.value),Zt(t,e,i.children,n),e.child}function ya(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ur|=e.lanes,!(n&e.childLanes))if(t!==null){if(Hr(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=da(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=da(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gm(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&pu(t)))}function CE(t,e,n){switch(e.tag){case 3:su(e,e.stateNode.containerInfo),ka(e,qt,t.memoizedState.cache),Br();break;case 27:case 5:zd(e);break;case 4:su(e,e.stateNode.containerInfo);break;case 10:ka(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,eh(e),null;break;case 13:var i=e.memoizedState;if(i!==null){if(i.dehydrated!==null)return $a(e),e.flags|=128,null;i=Hr(t,e,n,!1);var a=e.child.childLanes;return i||n&a?cy(t,e,n):($a(e),t=ya(t,e,n),t!==null?t.sibling:null)}$a(e);break;case 19:if(e.flags&128)return uh(t,e,n);if(a=(t.flags&128)!==0,i=(n&e.childLanes)!==0,i||(Hr(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return uh(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),hl(e,xn.current),i)break;return null;case 22:return e.lanes=0,ly(t,e,n,e.pendingProps);case 24:ka(e,qt,t.memoizedState.cache)}return ya(t,e,n)}function uy(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Yt=!0;else{if(!gm(t,n)&&!(e.flags&128))return Yt=!1,CE(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,Ke&&e.flags&1048576&&p_(e,ul,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Rr(e.elementType),e.type=t,typeof t=="function")Yp(t)?(i=Wr(t,i),e.tag=1,e=gg(null,e,t,i,n)):(e.tag=0,e=sh(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Pp){e.tag=11,e=fg(null,e,t,i,n);break e}else if(a===Ip){e.tag=14,e=dg(null,e,t,i,n);break e}else if(a===Bi){e.tag=10,e.type=t,e=yg(null,e,n);break e}}throw e=Pd(t)||t,Error(re(306,e,""))}}return e;case 0:return sh(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Wr(i,e.pendingProps),gg(t,e,i,a,n);case 3:e:{if(su(e,e.stateNode.containerInfo),t===null)throw Error(re(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,Qd(t,e),Yo(e,i,null,n);var s=e.memoizedState;if(i=s.cache,ka(e,qt,i),i!==r.cache&&Zd(e,[qt],n,!0),qo(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=vg(t,e,i,n);break e}else if(i!==a){a=pi(Error(re(424)),e),fl(a),e=vg(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Dt=gi(t.firstChild),ln=e,Ke=!0,Ka=null,mi=!0,n=y_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Br(),i===a){e=ya(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 26:return vs(t,e),t===null?(n=Wg(e.type,null,e.pendingProps,null))?e.memoizedState=n:Ke||(e.stateNode=$y(e.type,e.pendingProps,Za.current,e)):e.memoizedState=Wg(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return zd(e),t===null&&Ke&&(i=e.stateNode=lS(e.type,e.pendingProps,Za.current),ln=e,mi=!0,a=Dt,pr(e.type)?(Ph=a,Dt=gi(i.firstChild)):Dt=a),Zt(t,e,e.pendingProps.children,n),vs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ke&&((a=i=Dt)&&(i=MT(i,e.type,e.pendingProps,mi),i!==null?(e.stateNode=i,ln=e,Dt=gi(i.firstChild),mi=!1,a=!0):a=!1),a||or(e)),zd(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,Nh(a,r)?i=null:s!==null&&Nh(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=im(t,e,vE,null,null,n),to._currentValue=a),vs(t,e),Zt(t,e,i,n),e.child;case 6:return t===null&&Ke&&((t=n=Dt)&&(n=bT(n,e.pendingProps,mi),n!==null?(e.stateNode=n,ln=e,Dt=null,t=!0):t=!1),t||or(e)),null;case 13:return cy(t,e,n);case 4:return su(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=kr(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return fg(t,e,e.type,e.pendingProps,n);case 7:return i=e.pendingProps,vs(t,e),Zt(t,e,i,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:return yg(t,e,n);case 9:return a=e.type._context,i=e.pendingProps.children,Gr(e),a=mn(a),i=i(a),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return dg(t,e,e.type,e.pendingProps,n);case 15:return oy(t,e,e.type,e.pendingProps,n);case 19:return uh(t,e,n);case 31:return AE(t,e,n);case 22:return ly(t,e,n,e.pendingProps);case 24:return Gr(e),i=mn(qt),t===null?(a=Qp(),a===null&&(a=At,r=Kp(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},$p(e),ka(e,qt,a)):(t.lanes&n&&(Qd(t,e),Yo(e,null,null,n),qo()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),ka(e,qt,i)):(i=r.cache,ka(e,qt,i),i!==a.cache&&Zd(e,[qt],n,!0))),Zt(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=e.pendingProps,i.name!=null&&i.name!=="auto"?e.flags|=t===null?18882560:18874368:Ke&&Ju(e),t!==null&&t.memoizedProps.name!==i.name?e.flags|=4194816:vs(t,e),Zt(t,e,i.children,n),e.child;case 29:throw e.pendingProps}throw Error(re(156,e.tag))}function ta(t){t.flags|=4}function zf(t,e,n,i,a){var r;if((r=(t.mode&32)!==0)&&(r=n===null?Yg(e,i):Yg(e,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),r){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(By())t.flags|=8192;else throw Ir=mu,Jp}else t.flags&=-16777217}function Sg(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!dS(e))if(By())t.flags|=8192;else throw Ir=mu,Jp}function ic(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Px():536870912,t.lanes|=e,Zs|=e)}function To(t,e){if(!Ke)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function wE(t,e,n){var i=e.pendingProps;switch(Zp(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return wt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ha(qt),Ws(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ns(e)?ta(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Uf())),wt(e),null;case 26:var a=e.type,r=e.memoizedState;return t===null?(ta(e),r!==null?(wt(e),Sg(e,r)):(wt(e),zf(e,a,null,i,n))):r?r!==t.memoizedState?(ta(e),wt(e),Sg(e,r)):(wt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&ta(e),wt(e),zf(e,a,t,i,n)),null;case 27:if(ou(e),n=Za.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ta(e);else{if(!i){if(e.stateNode===null)throw Error(re(166));return wt(e),e.subtreeFlags&=-33554433,null}t=Wi.current,ns(e)?Y0(e):(t=lS(a,i,n),e.stateNode=t,ta(e))}return wt(e),e.subtreeFlags&=-33554433,null;case 5:if(ou(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ta(e);else{if(!i){if(e.stateNode===null)throw Error(re(166));return wt(e),e.subtreeFlags&=-33554433,null}if(r=Wi.current,ns(e))Y0(e);else{var s=vl(Za.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[pn]=e,r[Wn]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(_n(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ta(e)}}return wt(e),e.subtreeFlags&=-33554433,zf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&ta(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=Za.current,ns(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=ln,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[pn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Qy(t.nodeValue,n)),t||or(e,!0)}else t=vl(t).createTextNode(i),t[pn]=e,e.stateNode=t}return wt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=ns(e),n!==null){if(t===null){if(!i)throw Error(re(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(557));t[pn]=e}else Br(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),t=!1}else n=Uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Kn(e),e):(Kn(e),null);if(e.flags&128)throw Error(re(558))}return wt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=ns(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(re(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(re(317));a[pn]=e}else Br(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),a=!1}else a=Uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Kn(e),e):(Kn(e),null)}return Kn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),ic(e,e.updateQueue),wt(e),null);case 4:return Ws(),t===null&&Tm(e.stateNode.containerInfo),e.flags|=67108864,wt(e),null;case 10:return ha(e.type),wt(e),null;case 19:if(tm(e),i=e.memoizedState,i===null)return wt(e),null;if(a=(e.flags&128)!==0,r=i.rendering,r===null)if(a)To(i,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=vu(t),r!==null){for(e.flags|=128,To(i,!1),t=r.updateQueue,e.updateQueue=t,ic(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)d_(n,t),n=n.sibling;return hl(e,xn.current&1|2),Ke&&oa(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&ei()>Ru&&(e.flags|=128,a=!0,To(i,!1),e.lanes=4194304)}else{if(!a)if(t=vu(r),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,ic(e,t),To(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!r.alternate&&!Ke)return wt(e),null}else 2*ei()-i.renderingStartTime>Ru&&n!==536870912&&(e.flags|=128,a=!0,To(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}if(i.tail!==null){t=i.tail;e:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ei(),t.sibling=null,r=xn.current,r=a?r&1|2:r&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Ke?hl(e,r):(n=r,Ut(yn,e),Ut(xn,n),An===null&&(An=e)),Ke&&oa(e,i.treeForkCount),t}return wt(e),null;case 22:case 23:return Kn(e),em(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),n=e.updateQueue,n!==null&&ic(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&vn(Pr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ha(qt),wt(e),null;case 25:return null;case 30:return e.flags|=33554432,wt(e),null}throw Error(re(156,e.tag))}function DE(t,e){switch(Zp(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ha(qt),Ws(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ou(e),null;case 31:if(e.memoizedState!==null){if(Kn(e),e.alternate===null)throw Error(re(340));Br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Kn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tm(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Ws(),null;case 10:return ha(e.type),null;case 22:case 23:return Kn(e),em(),t!==null&&vn(Pr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ha(qt),null;case 25:return null;default:return null}}function fy(t,e){switch(Zp(e),e.tag){case 3:ha(qt),Ws();break;case 26:case 27:case 5:ou(e);break;case 4:Ws();break;case 31:e.memoizedState!==null&&Kn(e);break;case 13:Kn(e);break;case 19:tm(e);break;case 10:ha(e.type);break;case 22:case 23:Kn(e),em(),t!==null&&vn(Pr);break;case 24:ha(qt)}}function Il(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){Mt(e,e.return,o)}}function cr(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(d){Mt(a,l,d)}}}i=i.next}while(i!==r)}}catch(d){Mt(e,e.return,d)}}function dy(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{M_(e,n)}catch(i){Mt(t,t.return,i)}}}function hy(t,e,n){n.props=Wr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Mt(t,e,i)}}function Ii(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:var a=t.stateNode,r=va(t.memoizedProps,a);(a.ref===null||a.ref.name!==r)&&(a.ref=nS(r)),i=a.ref;break;case 7:if(t.stateNode===null){var s=new ri(t);jn(t.child,!1,yT,s,void 0,void 0),t.stateNode=s}i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(o){Mt(t,e,o)}}function hn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Mt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Mt(t,e,a)}else n.current=null}function Mu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)sS(t.stateNode,e[n])}function Mg(t){for(var e=t.return;e!==null&&(xm(e)&&sS(t.stateNode,e.stateNode),!vm(e));)e=e.return}function Qo(t){for(var e=t.return;e!==null&&(xm(e)&&ST(t.stateNode,e.stateNode),!vm(e));)e=e.return}function vm(t){return t.tag===5||t.tag===3||t.tag===27}function xm(t){return t&&t.tag===7&&t.stateNode!==null}function fh(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Mt(t,t.return,a)}}function Ff(t,e,n){try{var i=t.stateNode;nT(i,t.type,n,e),i[Wn]=e}catch(a){Mt(t,t.return,a)}}function py(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&pr(t.type)||t.tag===4}function Bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||py(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&pr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(a),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hi)),Mu(t,i),ct=!0;else if(a!==4&&(a===27&&(Mu(t,i),i=null,pr(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(dh(t,e,n,i),t=t.sibling;t!==null;)dh(t,e,n,i),t=t.sibling}function bu(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?n.insertBefore(a,e):n.appendChild(a),Mu(t,i),ct=!0;else if(a!==4&&(a===27&&(Mu(t,i),i=null,pr(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(bu(t,e,n,i),t=t.sibling;t!==null;)bu(t,e,n,i),t=t.sibling}function my(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);_n(e,i,n),e[pn]=t,e[Wn]=n}catch(r){Mt(t,t.return,r)}}var Eu=!1,Qn=null;function bg(t){(t.tag===30||t.subtreeFlags&33554432)&&(Eu=!0)}var Fi=null;function Eg(){var t=Fi;return Fi=null,t}var Bn=0;function ho(t,e,n,i,a){return Bn=0,gy(t.child,e,n,i,a)}function gy(t,e,n,i,a){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(i!==null){var o=Uh(s);i.push(o),o.view&&(r=!0)}else r||Uh(s).view&&(r=!0);Eu=!0,eS(s,Bn===0?e:e+"_"+Bn,n),Bn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&a||gy(t.child,e,n,i,a)&&(r=!0));t=t.sibling}return r}function Yi(t,e){for(;t!==null;)t.tag===5?tS(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Yi(t.child,e)),t=t.sibling}function kc(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(kc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(re(544));var n=e.name;e=ba(e.default,e.share),e!=="none"&&(ho(t,n,e,null,!1)||Yi(t.child,!1))}t=t.sibling}}function hh(t,e){if(t.tag===30){var n=t.stateNode,i=t.memoizedProps,a=va(i,n),r=ba(i.default,n.paired?i.share:i.enter);r!=="none"?ho(t,a,r,null,!1)?(kc(t),n.paired||e||Ks(t,i.onEnter)):Yi(t.child,!1):kc(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)hh(t,e),t=t.sibling;else kc(t)}function ph(t){if(Qn!==null&&Qn.size!==0){var e=Qn;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var n=t.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=e.get(i);if(a!==void 0){var r=ba(n.default,n.share);if(r!=="none"&&(ho(t,i,r,null,!1)?(r=t.stateNode,a.paired=r,r.paired=a,Ks(t,n.onShare)):Yi(t.child,!1)),e.delete(i),e.size===0)break}}}ph(t)}t=t.sibling}}}function mh(t){if(t.tag===30){var e=t.memoizedProps,n=va(e,t.stateNode),i=Qn!==null?Qn.get(n):void 0,a=ba(e.default,i!==void 0?e.share:e.exit);a!=="none"&&(ho(t,n,a,null,!1)?i!==void 0?(a=t.stateNode,i.paired=a,a.paired=i,Qn.delete(n),Ks(t,e.onShare)):Ks(t,e.onExit):Yi(t.child,!1)),Qn!==null&&ph(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)mh(t),t=t.sibling;else Qn!==null&&ph(t)}function vy(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=va(e,t.stateNode);e=ba(e.default,e.update),t.flags&=-5,e!=="none"&&ho(t,n,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&vy(t);t=t.sibling}}function gh(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,Yi(t.child,!1))}gh(t)}t=t.sibling}}function jc(t){if(t.tag===30)t.stateNode.paired=null,Yi(t.child,!1),gh(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)jc(t),t=t.sibling;else gh(t)}function xy(t){for(t=t.child;t!==null;)t.tag===30?Yi(t.child,!1):t.subtreeFlags&33554432&&xy(t),t=t.sibling}function _m(t,e,n,i,a,r,s){for(var o=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(r!==null&&Bn<r.length){var c=r[Bn],d=Uh(l);(c.view||d.view)&&(o=!0);var p;if(p=(t.flags&4)===0)if(d.clip)p=!0;else{p=c.rect;var u=d.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(t.flags|=4),d.abs?d=!c.abs:(c=c.rect,d=d.rect,d=c.height!==d.height||c.width!==d.width),d&&(t.flags|=32)}else t.flags|=32;t.flags&4&&eS(l,Bn===0?n:n+"_"+Bn,a),o&&t.flags&4||(Fi===null&&(Fi=[]),Fi.push(l,Bn===0?i:i+"_"+Bn,e.memoizedProps)),Bn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s?t.flags|=e.flags&32:_m(t,e.child,n,i,a,r,s)&&(o=!0));e=e.sibling}return o}function _y(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=t.stateNode,a=va(n,i),r=ba(n.default,n.update),s;s=t.memoizedState,t.memoizedState=null,i=t;var o=t.child;Bn=0,a=_m(i,o,a,a,r,s,!1),t.flags&4&&a&&Ks(t,n.onUpdate)}else t.subtreeFlags&33554432&&_y(t);t=t.sibling}}var rn=!1,vt=!1,Ni=!1,Hf=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,sn=null,Ui=!1,zo=!1,Tu=!1,vh=!1;function NE(t,e,n){if(t=t.containerInfo,wh=no,t=a_(t),Wp(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var o=0,l=-1,c=-1,d=0,p=0,u=t,h=null;t:for(;;){for(var _;u!==i||r!==0&&u.nodeType!==3||(l=o+r),u!==s||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(_=u.firstChild)!==null;)h=u,u=_;for(;;){if(u===t)break t;if(h===i&&++d===r&&(l=o),h===s&&++p===a&&(c=o),(_=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=_}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Dh={focusedElem:t,selectionRange:i},no=!1,n=(n&335544064)===n,sn=e,e=n?9270:1024;sn!==null;){if(t=sn,n&&(i=t.deletions,i!==null))for(r=0;r<i.length;r++)n&&mh(i[r]);if(t.alternate===null&&t.flags&2)n&&bg(t),ac(n);else{if(t.tag===22){if(i=t.alternate,t.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&mh(i),ac(n);continue}else if(i!==null&&i.memoizedState!==null){n&&bg(t),ac(n);continue}}i=t.child,t.subtreeFlags&e&&i!==null?(i.return=t,sn=i):(n&&vy(t),ac(n))}}Qn=null}function ac(t){for(;sn!==null;){var e=sn,n=t,i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var r=e.stateNode;try{var s=Wr(e.type,a);n=r.getSnapshotBeforeUpdate(s,i),r.__reactInternalSnapshotBeforeUpdate=n}catch(o){Mt(e,e.return,o)}}break;case 3:if(a&1024){if(i=e.stateNode.containerInfo,n=i.nodeType,n===9)Lh(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Lh(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=va(i.memoizedProps,i.stateNode),a=e.memoizedProps,a=ba(a.default,a.update),a!=="none"&&ho(i,n,a,i.memoizedState=[],!0));break;default:if(a&1024)throw Error(re(163))}if(i=e.sibling,i!==null){i.return=e.return,sn=i;break}sn=e.return}}function yy(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n),i&4&&Il(5,n);break;case 1:if(Li(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){Mt(n,n.return,s)}else{var a=Wr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Mt(n,n.return,s)}}i&64&&dy(n),i&512&&Ii(n,n.return);break;case 3:if(Li(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{M_(t,e)}catch(s){Mt(n,n.return,s)}}break;case 27:e===null&&i&4&&my(n);case 26:case 5:Li(t,n),e===null&&i&4&&fh(n),i&512&&Ii(n,n.return);break;case 12:Li(t,n);break;case 31:Li(t,n),i&4&&Ey(t,n);break;case 13:Li(t,n),i&4&&Ty(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=kE.bind(null,n),ET(t,n))));break;case 22:if(i=n.memoizedState!==null||rn,!i){var r=e!==null&&e.memoizedState!==null||vt;e=rn,a=vt,rn=i,(vt=r)&&!a?(i=2,n.subtreeFlags&8772&&(i|=1),bi(t,n,i)):Li(t,n),rn=e,vt=a}break;case 30:Li(t,n),i&512&&Ii(n,n.return);break;case 7:i&512&&Ii(n,n.return);default:Li(t,n)}}function xh(t,e){for(t=t.child;t!==null;)Sy(t,e),t=t.sibling}function Sy(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=t.stateNode,r=t.memoizedProps.style,s=r!=null&&r.hasOwnProperty("display")?r.display:null;a.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(l){Mt(t,t.return,l)}_h(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,ct=!0}catch(l){Mt(t,t.return,l)}break;case 18:try{var o=t.stateNode;e?Bg(o,!0):Bg(t.stateNode,!1)}catch(l){Mt(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&xh(t,e);break;default:xh(t,e)}}function _h(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var n=t,i=e;switch(n.tag){case 4:Sy(n,i);break e;case 22:n.memoizedState===null&&_h(n,i);break e;default:_h(n,i)}}t=t.sibling}}function My(t){var e=t.alternate;e!==null&&(t.alternate=null,My(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Xu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,zn=!1;function _i(t,e,n){for(n=n.child;n!==null;)by(t,e,n),n=n.sibling}function by(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 26:vt||hn(n,e),_i(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!vt&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:vt||hn(n,e),Qo(n);var i=Ot,a=zn;pr(n.type)&&(Ot=n.stateNode,zn=!1),_i(t,e,n),cS(n.stateNode,n.type,n.memoizedProps),Ot=i,zn=a;break;case 5:vt||hn(n,e),Qo(n);case 6:if(n.tag===6&&Qo(n),i=Ot,a=zn,Ot=null,_i(t,e,n),Ot=i,zn=a,Ot!==null)if(zn)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(n.stateNode),ct=!0}catch(r){Mt(n,e,r)}else try{Ot.removeChild(n.stateNode),ct=!0}catch(r){Mt(n,e,r)}break;case 18:Ot!==null&&(zn?(t=Ot,Fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),io(t)):Fg(Ot,n.stateNode));break;case 4:i=Ot,a=zn,Ot=n.stateNode.containerInfo,zn=!0,_i(t,e,n),Ot=i,zn=a;break;case 0:case 11:case 14:case 15:cr(2,n,e),vt||cr(4,n,e),_i(t,e,n);break;case 1:vt||(hn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&hy(n,e,i)),_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:vt=(i=vt)||n.memoizedState!==null,_i(t,e,n),vt=i;break;case 30:hn(n,e),_i(t,e,n);break;case 7:vt||hn(n,e),_i(t,e,n);break;default:_i(t,e,n)}}function Ey(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{io(t)}catch(n){Mt(e,e.return,n)}}}function Ty(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{io(t)}catch(n){Mt(e,e.return,n)}}function UE(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Tg),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Tg),e;default:throw Error(re(435,t.tag))}}function rc(t,e){var n=UE(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=jE.bind(null,t,i);i.then(a,a)}})}function Dn(t,e,n){var i=e.deletions;if(i!==null)for(var a=0;a<i.length;a++){var r=i[a],s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(pr(l.type)){Ot=l.stateNode,zn=!1;break e}break;case 5:Ot=l.stateNode,zn=!1;break e;case 3:case 4:Ot=l.stateNode.containerInfo,zn=!0;break e}l=l.return}if(Ot===null)throw Error(re(160));by(s,o,r),Ot=null,zn=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ay(e,t,n),e=e.sibling}var Ei=null;function Ay(t,e,n){var i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=t.updateQueue,i=i!==null?i.events:null,i!==null))for(var r=0;r<i.length;r++){var s=i[r];s.ref.impl=s.nextImpl}Dn(e,t,n),Nn(t),a&4&&(cr(3,t,t.return),Il(3,t),cr(5,t,t.return));break;case 1:Dn(e,t,n),Nn(t),a&512&&(vt||i===null||hn(i,i.return)),a&64&&rn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(r=Ei,Dn(e,t,n),Nn(t),a&512&&(vt||i===null||hn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=t.memoizedState,i===null)if(n===null)if(t.stateNode===null)if(rn)t.stateNode=$y(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,n=t.memoizedProps,a=r.ownerDocument||r;t:switch(e){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Ul]||i[pn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(e),a.head.insertBefore(i,a.querySelector("head > title"))),_n(i,e,n),i[pn]=t,on(i),e=i;break e;case"link":if(r=qg("link","href",a).get(e+(n.href||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(s,1);break t}}i=a.createElement(e),_n(i,e,n),a.head.appendChild(i);break;case"meta":if(r=qg("meta","content",a).get(e+(n.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(s,1);break t}}i=a.createElement(e),_n(i,e,n),a.head.appendChild(i);break;default:throw Error(re(468,e))}i[pn]=t,on(i),e=i}t.stateNode=e}else rn||Ih(r,t.type,t.stateNode);else t.stateNode=Xg(r,n,t.memoizedProps);else a!==n?(a===null?(e=i.stateNode,e===null||vt||e.parentNode.removeChild(e)):a.count--,n===null?rn||Ih(r,t.type,t.stateNode):Xg(r,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Ff(t,t.memoizedProps,i.memoizedProps);break;case 27:Dn(e,t,n),Nn(t),a&512&&(vt||i===null||hn(i,i.return)),i!==null&&a&4&&Ff(t,t.memoizedProps,i.memoizedProps);break;case 5:if(r=Ni,Ni=!1,Dn(e,t,n),Ni=r,Nn(t),a&512&&(vt||i===null||hn(i,i.return)),t.flags&32){e=t.stateNode;try{qs(e,""),ct=!0}catch(d){Mt(t,t.return,d)}}a&4&&t.stateNode!=null&&(e=t.memoizedProps,Ff(t,e,i!==null?i.memoizedProps:e)),a&1024&&(Hf=!0);break;case 6:if(Dn(e,t,n),Nn(t),a&4){if(t.stateNode===null)throw Error(re(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,ct=!0}catch(d){Mt(t,t.return,d)}}break;case 3:if(ct=!1,Yc=null,r=Ei,Ei=xl(e.containerInfo),Dn(e,t,n),Ei=r,Nn(t),a&4&&i!==null&&i.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(d){Mt(t,t.return,d)}Hf&&(Hf=!1,Ry(t)),ct=!1;break;case 4:a=Ni,Ni=rn,i=D0(),r=Ei,Ei=xl(t.stateNode.containerInfo),Dn(e,t,n),Nn(t),Ei=r,ct&&zo&&(Tu=!0),ct=i,Ni=a;break;case 12:Dn(e,t,n),Nn(t);break;case 31:Dn(e,t,n),Nn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,rc(t,e)));break;case 13:Dn(e,t,n),Nn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(sf=ei()),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,rc(t,e)));break;case 22:r=t.memoizedState!==null,s=i!==null&&i.memoizedState!==null;var o=rn,l=vt,c=Ni;rn=o||r,Ni=c||r,vt=l||s,Dn(e,t,n),vt=l,Ni=c,rn=o,Nn(t),a&8192&&(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,!r||i===null||s||rn||vt||(e=s||vt,n=rn,i=vt,rn=r||rn,vt=e,Pa(t,2),rn=n,vt=i),!r&&Ni||xh(t,r)),a&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,rc(t,n))));break;case 19:Dn(e,t,n),Nn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,rc(t,e)));break;case 30:a&512&&(vt||i===null||hn(i,i.return)),a=D0(),r=zo,s=(n&335544064)===n,o=t.memoizedProps,zo=s&&ba(o.default,o.update)!=="none",Dn(e,t,n),Nn(t),s&&i!==null&&ct&&(t.flags|=4),zo=r,ct=a;break;case 21:break;case 7:a&512&&(vt||i===null||hn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=t);default:Dn(e,t,n),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(py(i)){n=i;break}i=i.return}i=null;for(var a=t.return;a!==null;){if(xm(a)){var r=a.stateNode;i===null?i=[r]:i.push(r)}if(vm(a))break;a=a.return}var s=i;if(n==null)throw Error(re(160));switch(n.tag){case 27:var o=n.stateNode,l=Bf(t);bu(t,l,o,s);break;case 5:var c=n.stateNode;n.flags&32&&(qs(c,""),n.flags&=-33);var d=Bf(t);bu(t,d,c,s);break;case 3:case 4:var p=n.stateNode.containerInfo,u=Bf(t);dh(t,u,p,s);break;default:throw Error(re(161))}}catch(h){Mt(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ry(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ry(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,no=!0,e.reset(),no=!1),t=t.sibling}}function is(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Cy(e,t),e=e.sibling;else _y(e)}function Cy(t,e){var n=t.alternate;if(n===null)hh(t,!1);else switch(t.tag){case 3:if(vh=Ui=!1,Eg(),is(e,t),!Ui&&!Tu){if(t=Fi,t!==null)for(var i=0;i<t.length;i+=3){n=t[i];var a=t[i+1];tS(n,t[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),vh=!0}Fi=null;break;case 5:is(e,t);break;case 4:i=Ui,Ui=!1,is(e,t),Ui&&(Tu=!0),Ui=i;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?hh(t,!1):is(e,t));break;case 30:i=Ui,a=Eg(),Ui=!1,is(e,t),Ui&&(t.flags|=4);var r=t.memoizedProps,s=t.stateNode;e=va(r,s),s=va(n.memoizedProps,s);var o=ba(r.default,r.update);o==="none"?e=!1:(r=n.memoizedState,n.memoizedState=null,n=t.child,Bn=0,e=_m(t,n,e,s,o,r,!0),Bn!==(r===null?0:r.length)&&(t.flags|=32)),t.flags&4&&e?(Ks(t,t.memoizedProps.onUpdate),Fi=a):a!==null&&(a.push.apply(a,Fi),Fi=a),Ui=t.flags&32?!0:i;break;default:is(e,t)}}function Li(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)yy(t,e.alternate,e),e=e.sibling}function Pa(t,e){for(t=t.child;t!==null;){var n=t,i=e;switch(n.tag){case 0:case 11:case 14:case 15:cr(4,n,n.return),Pa(n,i);break;case 1:hn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hy(n,n.return,a),Pa(n,i);break;case 27:i&2&&cS(n.stateNode,n.type,n.memoizedProps);case 5:hn(n,n.return),n.tag!==5&&n.tag!==27||Qo(n),Pa(n,i);break;case 6:Qo(n);break;case 26:hn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||vt||a.parentNode.removeChild(a),Pa(n,i);break;case 22:n.memoizedState===null&&Pa(n,i);break;case 30:hn(n,n.return),Pa(n,i);break;case 7:hn(n,n.return);default:Pa(n,i)}t=t.sibling}}function bi(t,e,n){for(n=e.subtreeFlags&8772?n:n&-2,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags,o=(n&1)!==0;switch(r.tag){case 0:case 11:case 15:bi(a,r,n),Il(4,r);break;case 1:if(bi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(d){Mt(i,i.return,d)}if(i=r,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)S_(c[a],l)}catch(d){Mt(i,i.return,d)}}o&&s&64&&dy(r),Ii(r,r.return);break;case 27:n&2&&my(r);case 5:r.tag!==5&&r.tag!==27||Mg(r),bi(a,r,n),o&&i===null&&s&4&&fh(r),Ii(r,r.return);break;case 6:Mg(r);break;case 26:l=r.stateNode,r.memoizedState!==null||l===null||rn||Ih(xl(l.ownerDocument),r.type,l),bi(a,r,n),o&&i===null&&s&4&&fh(r),Ii(r,r.return);break;case 12:bi(a,r,n);break;case 31:bi(a,r,n),o&&s&4&&Ey(a,r);break;case 13:bi(a,r,n),o&&s&4&&Ty(a,r);break;case 22:r.memoizedState===null&&bi(a,r,n),Ii(r,r.return);break;case 30:bi(a,r,n),Ii(r,r.return);break;case 7:Ii(r,r.return);default:bi(a,r,n)}e=e.sibling}}function ym(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Ol(n))}function Sm(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ol(t))}function si(t,e,n,i){var a=(n&335544064)===n;if(e.subtreeFlags&(a?10262:10256))for(e=e.child;e!==null;)wy(t,e,n,i),e=e.sibling;else a&&xy(e)}function wy(t,e,n,i){var a=(n&335544064)===n;a&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&jc(e);var r=e.flags;switch(e.tag){case 0:case 11:case 15:si(t,e,n,i),r&2048&&Il(9,e);break;case 1:si(t,e,n,i);break;case 3:si(t,e,n,i),a&&vh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),r&2048&&(r=null,e.alternate!==null&&(r=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==r&&(e.refCount++,r!=null&&Ol(r)));break;case 12:if(r&2048){si(t,e,n,i),r=e.stateNode;try{var s=e.memoizedProps,o=s.id,l=s.onPostCommit;typeof l=="function"&&l(o,e.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(c){Mt(e,e.return,c)}}else si(t,e,n,i);break;case 31:si(t,e,n,i);break;case 13:si(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,o=e.alternate,e.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&jc(o),s._visibility&2?si(t,e,n,i):Jo(t,e)):(a&&o!==null&&o.memoizedState!==null&&jc(e),s._visibility&2?si(t,e,n,i):(s._visibility|=2,xs(t,e,n,i,(e.subtreeFlags&10256)!==0||!1))),r&2048&&ym(o,e);break;case 24:si(t,e,n,i),r&2048&&Sm(e.alternate,e);break;case 30:a&&(r=e.alternate,r!==null&&(Yi(r.child,!0),Yi(e.child,!0))),si(t,e,n,i);break;default:si(t,e,n,i)}}function xs(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:xs(r,s,o,l,a),Il(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?xs(r,s,o,l,a):Jo(r,s):(d._visibility|=2,xs(r,s,o,l,a)),a&&c&2048&&ym(s.alternate,s);break;case 24:xs(r,s,o,l,a),a&&c&2048&&Sm(s.alternate,s);break;default:xs(r,s,o,l,a)}e=e.sibling}}function Jo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Jo(n,i),a&2048&&ym(i.alternate,i);break;case 24:Jo(n,i),a&2048&&Sm(i.alternate,i);break;default:Jo(n,i)}e=e.sibling}}var Cr=8192;function _r(t,e,n){if(t.subtreeFlags&Cr)for(t=t.child;t!==null;)Dy(t,e,n),t=t.sibling}function Dy(t,e,n){switch(t.tag){case 26:_r(t,e,n),t.flags&Cr&&(t.memoizedState!==null?FT(n,Ei,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Zg(n,t)));break;case 5:_r(t,e,n),t.flags&Cr&&(t=t.stateNode,(e&335544128)===e&&Zg(n,t));break;case 3:case 4:var i=Ei;Ei=xl(t.stateNode.containerInfo),_r(t,e,n),Ei=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Cr,Cr=16777216,_r(t,e,n),Cr=i):_r(t,e,n));break;case 30:if(t.flags&Cr&&(i=t.memoizedProps.name,i!=null&&i!=="auto")){var a=t.stateNode;a.paired=null,Qn===null&&(Qn=new Map),Qn.set(i,a)}_r(t,e,n);break;default:_r(t,e,n)}}function Ny(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ao(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];sn=i,Ly(i,t)}Ny(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uy(t),t=t.sibling}function Uy(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&cr(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Wc(t)):Ao(t);break;default:Ao(t)}}function Wc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];sn=i,Ly(i,t)}Ny(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:cr(8,e,e.return),Wc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Wc(e));break;default:Wc(e)}t=t.sibling}}function Ly(t,e){for(;sn!==null;){var n=sn;switch(n.tag){case 0:case 11:case 15:cr(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ol(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,sn=i;else e:for(n=t;sn!==null;){i=sn;var a=i.sibling,r=i.return;if(My(i),i===n){sn=null;break e}if(a!==null){a.return=r,sn=a;break e}sn=r}}}var LE={getCacheForType:function(t){var e=mn(qt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return mn(qt).controller.signal}},OE=typeof WeakMap=="function"?WeakMap:Map,pt=0,At=null,Je=null,nt=0,yt=0,Yn=null,ja=!1,po=!1,Mm=!1,Sa=0,Ht=0,ur=0,zr=0,Au=0,$n=0,Zs=0,$o=null,Fn=null,yh=!1,sf=0,Oy=0,Ru=1/0,Cu=null,tr=null,It=0,Ci=null,Xr=null,Xi=0,Sh=0,Mh=null,Py=null,Hs=null,Gs=null,Vs=null,el=0,Xc=null;function ii(){return pt&2&&nt!==0?nt&-nt:He.T!==null?Em():Bx()}function Iy(){if($n===0)if(!(nt&536870912)||Ke){var t=Yl;Yl<<=1,!(Yl&3932160)&&(Yl=262144),$n=t}else $n=536870912;return t=yn.current,t!==null&&(t.flags|=32),$n}function Ks(t,e){if(e!=null){var n=t.stateNode,i=n.ref;i===null&&(i=n.ref=nS(va(t.memoizedProps,n))),Gs===null&&(Gs=[]),Gs.push(e.bind(null,i))}}function Vn(t,e,n){(t===At&&(yt===2||yt===9)||t.cancelPendingCommit!==null)&&(Qs(t,0),Wa(t,nt,$n,!1)),Nl(t,n),(!(pt&2)||t!==At)&&(t===At&&(!(pt&2)&&(zr|=n),Ht===4&&Wa(t,nt,$n,!1)),Ji(t))}function zy(t,e,n){if(pt&6)throw Error(re(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Dl(t,e),a=i?zE(t,e):Gf(t,e,!0),r=i;do{if(a===0){po&&!i&&Wa(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!PE(n)){a=Gf(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=$o;var l=o.current.memoizedState.isDehydrated;if(l&&(Qs(o,s).flags|=256),s=Gf(o,s,!1),s!==2&&s!==6){if(Mm&&!l){o.errorRecoveryDisabledLanes|=r,zr|=r,a=4;break e}r=Fn,Fn=a,r!==null&&(Fn===null?Fn=r:Fn.push.apply(Fn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Qs(t,0),Wa(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(re(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Wa(i,e,$n,!ja);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(re(329))}if((e&62914560)===e&&(a=sf+300-ei(),10<a)){if(Wa(i,e,$n,!ja),Wu(i,0,!0)!==0)break e;Xi=e,i.timeoutHandle=Am(Ag.bind(null,i,n,Fn,Cu,yh,e,$n,zr,Zs,ja,r,"Throttled",-0,0),a);break e}Ag(i,n,Fn,Cu,yh,e,$n,zr,Zs,ja,r,null,-0,0)}}break}while(!0);Ji(t)}function Ag(t,e,n,i,a,r,s,o,l,c,d,p,u,h){t.timeoutHandle=-1;var _=e.subtreeFlags,M=(r&335544064)===r;if(p=null,(M||_&8192||(_&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},Qn=null,Dy(e,r,p),M&&(_=p,M=t.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(_.count++,_.waitingForViewTransition=!0,_=_l.bind(_),M.finished.then(_,_))),_=(r&62914560)===r?sf-ei():(r&4194048)===r?Oy-ei():0,_=BT(p,_),_!==null)){Xi=r,t.cancelPendingCommit=_(Cg.bind(null,t,e,r,n,i,a,s,o,l,c,d,p,null,u,h)),Wa(t,r,s,!c);return}Cg(t,e,r,n,i,a,s,o,l,c,d,p)}function PE(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!ai(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wa(t,e,n,i){e=Ox(t,e),e&=~Au,e&=~zr,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-ni(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&Ix(t,n,e)}function of(){return pt&6?!0:(zl(0),!1)}function bm(){if(Je!==null){if(yt===0)var t=Je.return;else t=Je,ua=es=null,sm(t),zs=null,dl=0,t=Je;for(;t!==null;)fy(t.alternate,t),t=t.return;Je=null}}function Qs(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,rT(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Xi=0,bm(),At=t,Je=n=da(t.current,null),nt=e,yt=0,Yn=null,ja=!1,po=Dl(t,e),Mm=!1,Zs=$n=Au=zr=ur=Ht=0,Fn=$o=null,yh=!1,Sa=Ox(t,e),Ku(),n}function Fy(t,e){We=null,He.H=yu,e===fo||e===$u?(e=$0(),yt=3):e===Jp?(e=$0(),yt=4):yt=e===pm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Yn=e,Je===null&&(Ht=1,Su(t,pi(e,t.current)))}function By(){var t=yn.current;return t===null?!0:(nt&4194048)===nt?An===null:(nt&62914560)===nt||nt&536870912?t===An:!1}function Hy(){var t=He.H;return He.H=yu,t===null?yu:t}function Gy(){var t=He.A;return He.A=LE,t}function wu(){Ht=4,ja||(nt&4194048)!==nt&&yn.current!==null||(po=!0),!(ur&134217727)&&!(zr&134217727)||At===null||Wa(At,nt,$n,!1)}function Gf(t,e,n){var i=pt;pt|=2;var a=Hy(),r=Gy();(At!==t||nt!==e)&&(Cu=null,Qs(t,e)),e=!1;var s=Ht;e:do try{if(yt!==0&&Je!==null){var o=Je,l=Yn;switch(yt){case 8:bm(),s=6;break e;case 3:case 2:case 9:case 6:yn.current===null&&(e=!0);var c=yt;if(yt=0,Yn=null,Us(t,o,l,c),n&&po){s=0;break e}break;default:c=yt,yt=0,Yn=null,Us(t,o,l,c)}}IE(),s=Ht;break}catch(d){Fy(t,d)}while(!0);return e&&t.shellSuspendCounter++,ua=es=null,pt=i,He.H=a,He.A=r,Je===null&&(At=null,nt=0,Ku()),s}function IE(){for(;Je!==null;)Vy(Je)}function zE(t,e){var n=pt;pt|=2;var i=Hy(),a=Gy();At!==t||nt!==e?(Cu=null,Ru=ei()+500,Qs(t,e)):po=Dl(t,e);e:do try{if(yt!==0&&Je!==null){e=Je;var r=Yn;t:switch(yt){case 1:yt=0,Yn=null,Us(t,e,r,1);break;case 2:case 9:if(J0(r)){yt=0,Yn=null,Rg(e);break}e=function(){yt!==2&&yt!==9||At!==t||(yt=7),Ji(t)},r.then(e,e);break e;case 3:yt=7;break e;case 4:yt=5;break e;case 7:J0(r)?(yt=0,Yn=null,Rg(e)):(yt=0,Yn=null,Us(t,e,r,7));break;case 5:var s=null;switch(Je.tag){case 26:s=Je.memoizedState;case 5:case 27:var o=Je;if(s?dS(s):o.stateNode.complete){yt=0,Yn=null;var l=o.sibling;if(l!==null)Je=l;else{var c=o.return;c!==null?(Je=c,lf(c)):Je=null}break t}}yt=0,Yn=null,Us(t,e,r,5);break;case 6:yt=0,Yn=null,Us(t,e,r,6);break;case 8:bm(),Ht=6;break e;default:throw Error(re(462))}}FE();break}catch(d){Fy(t,d)}while(!0);return ua=es=null,He.H=i,He.A=a,pt=n,Je!==null?0:(At=null,nt=0,Ku(),Ht)}function FE(){for(;Je!==null&&!tb();)Vy(Je)}function Vy(t){var e=uy(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,e===null?lf(t):Je=e}function Rg(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=mg(n,e,e.pendingProps,e.type,void 0,nt);break;case 11:e=mg(n,e,e.pendingProps,e.type.render,e.ref,nt);break;case 5:sm(e);var i=e;i===ln&&(Ke?(hu(i),i.tag===5&&i.stateNode!=null&&(Dt=i.stateNode)):(hu(i),Ke=!0));default:fy(n,e),e=Je=d_(e,Sa),e=uy(n,e,Sa)}t.memoizedProps=t.pendingProps,e===null?lf(t):Je=e}function Us(t,e,n,i){ua=es=null,sm(e),zs=null,dl=0;var a=e.return;try{if(TE(t,a,e,n,nt)){Ht=1,Su(t,pi(n,t.current)),Je=null;return}}catch(r){if(a!==null)throw Je=a,r;Ht=1,Su(t,pi(n,t.current)),Je=null;return}e.flags&32768?(Ke||i===1?t=!0:po||nt&536870912?t=!1:(ja=t=!0,(i===2||i===9||i===3||i===6)&&(i=yn.current,i!==null&&i.tag===13&&(i.flags|=16384))),ky(e,t)):lf(e)}function lf(t){var e=t;do{if(e.flags&32768){ky(e,ja);return}t=e.return;var n=wE(e.alternate,e,Sa);if(n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);Ht===0&&(Ht=5)}function ky(t,e){do{var n=DE(t.alternate,t);if(n!==null){n.flags&=32767,Je=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Je=t;return}Je=t=n}while(t!==null);Ht=6,Je=null}function Cg(t,e,n,i,a,r,s,o,l,c,d,p){t.cancelPendingCommit=null;do cf();while(It!==0);if(pt&6)throw Error(re(327));if(e!==null){if(e===t.current)throw Error(re(177));t===At&&(Je=At=null,nt=0),Xr=e,Ci=t,Xi=n,Mh=a,Py=i,BE(t,e,n,s,o,l,p)}}function BE(t,e,n,i,a,r,s){var o=e.lanes|e.childLanes;if(Sh=o,o|=Xp,fb(t,n,o,i,a,r),Gs=null,(n&335544064)===n?(Vs=hE(t),i=10262):(Vs=null,i=10256),e.subtreeFlags&i||e.flags&i?(t.callbackNode=null,t.callbackPriority=0,WE(lu,function(){return Ah(),null})):(t.callbackNode=null,t.callbackPriority=0),Eu=!1,i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=He.T,He.T=null,a=mt.p,mt.p=2,r=pt,pt|=4;try{NE(t,e,n)}finally{pt=r,mt.p=a,He.T=i}}It=1,Eu?Hs=fT(s,t.containerInfo,Vs,bh,Eh,GE,Th,Ah,HE):(bh(),Eh(),Th())}function HE(t){if(It!==0){var e=Ci.onRecoverableError;e(t,{componentStack:null})}}function GE(){It===3&&(It=0,Cy(Xr,Ci),It=4)}function bh(){if(It===1){It=0;var t=Ci,e=Xr,n=Xi,i=(e.flags&13878)!==0;if(e.subtreeFlags&13878||i){i=He.T,He.T=null;var a=mt.p;mt.p=2;var r=pt;pt|=4;try{zo=Tu=!1,Ay(e,t,n),n=Dh;var s=a_(t.containerInfo),o=n.focusedElem,l=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&i_(o.ownerDocument.documentElement,o)){if(l!==null&&Wp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var h=u.getSelection(),_=o.textContent.length,M=Math.min(l.start,_),m=l.end===void 0?M:Math.min(l.end,_);!h.extend&&M>m&&(s=m,m=M,M=s);var f=j0(o,M),v=j0(o,m);if(f&&v&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==v.node||h.focusOffset!==v.offset)){var S=p.createRange();S.setStart(f.node,f.offset),h.removeAllRanges(),M>m?(h.addRange(S),h.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),h.addRange(S))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}no=!!wh,Dh=wh=null}finally{pt=r,mt.p=a,He.T=i}}t.current=e,It=2}}function Eh(){if(It===2){It=0;var t=Ci,e=Xr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=He.T,He.T=null;var i=mt.p;mt.p=2;var a=pt;pt|=4;try{yy(t,e.alternate,e)}finally{pt=a,mt.p=i,He.T=n}}It=3}}function Th(){if(It===4||It===3){It=0;var t=Hs;Hs=null,nb();var e=Ci,n=Xr,i=Xi,a=Py,r=(i&335544064)===i?10262:10256;if(n.subtreeFlags&r||n.flags&r?It=5:(It=0,Xr=Ci=null,jy(e,e.pendingLanes)),r=e.pendingLanes,r===0&&(tr=null),Bp(i),n=n.stateNode,ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(wl,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=He.T,r=mt.p,mt.p=2,He.T=null;try{for(var s=e.onRecoverableError,o=0;o<a.length;o++){var l=a[o];s(l.value,{componentStack:l.stack})}}finally{He.T=n,mt.p=r}}if(a=Gs,s=Vs,Vs=null,a!==null&&(Gs=null,s===null&&(s=[]),t!==null))for(l=0;l<a.length;l++)n=(0,a[l])(s),n!==void 0&&t.finished.finally(n);Xi&3&&cf(),Ji(e),r=e.pendingLanes,i&261930&&r&42?e===Xc?el++:(el=0,Xc=e):(el=0,Xc=null),zl(0)}}function jy(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ol(e)))}function cf(){return Hs!==null&&(Hs.skipTransition(),Hs=null),bh(),Eh(),Th(),Ah()}function Ah(){if(It!==5)return!1;var t=Ci,e=Sh;Sh=0;var n=Bp(Xi),i=He.T,a=mt.p;try{mt.p=32>n?32:n,He.T=null,n=Mh,Mh=null;var r=Ci,s=Xi;if(It=0,Xr=Ci=null,Xi=0,pt&6)throw Error(re(331));var o=pt;if(pt|=4,Uy(r.current),wy(r,r.current,s,n),pt=o,zl(0,!1),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(wl,r)}catch{}return!0}finally{mt.p=a,He.T=i,jy(t,e)}}function wg(t,e,n){e=pi(n,e),e=rh(t.stateNode,e,2),t=Ja(t,e,2),t!==null&&(Nl(t,2),Ji(t))}function Mt(t,e,n){if(t.tag===3)wg(t,t,n);else for(;e!==null;){if(e.tag===3){wg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=pi(n,t),n=ry(2),i=Ja(e,n,2),i!==null&&(sy(n,i,e,t),Nl(i,2),Ji(i));break}}e=e.return}}function Vf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new OE;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Mm=!0,a.add(n),t=VE.bind(null,t,e,n),e.then(t,t))}function VE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,At===t&&(nt&n)===n&&(Ht===4||Ht===3&&(nt&62914560)===nt&&300>ei()-sf?pt&2?Au|=n:Qs(t,0):Au|=n,Zs===nt&&(Zs=0)),Ji(t)}function Wy(t,e){e===0&&(e=Px()),t=$r(t,e),t!==null&&(Nl(t,e),Ji(t))}function kE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wy(t,n)}function jE(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(re(314))}i!==null&&i.delete(e),Wy(t,n)}function WE(t,e){return zp(t,e)}var Js=null,_s=null,Rh=!1,Du=!1,kf=!1,Xa=0;function Ji(t){t!==_s&&t.next===null&&(_s===null?Js=_s=t:_s=_s.next=t),Du=!0,Rh||(Rh=!0,qE())}function zl(t,e){if(!kf&&Du){kf=!0;do for(var n=!1,i=Js;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-ni(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Dg(i,r))}else r=nt,r=Wu(i,i===At?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Dl(i,r)||(n=!0,Dg(i,r));i=i.next}while(n);kf=!1}}function XE(){Xy()}function Xy(){Du=Rh=!1;var t=0;Xa!==0&&aT()&&(t=Xa);for(var e=ei(),n=null,i=Js;i!==null;){var a=i.next,r=qy(i,e);r===0?(i.next=null,n===null?Js=a:n.next=a,a===null&&(_s=n)):(n=i,(t!==0||r&3)&&(Du=!0)),i=a}It!==0&&It!==5||zl(t),Xa!==0&&(Xa=0)}function qy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-ni(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=ub(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=At,n=nt,n=Wu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(yt===2||yt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&yf(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Dl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&yf(i),Bp(n)){case 2:case 8:n=Ux;break;case 32:n=lu;break;case 268435456:n=Lx;break;default:n=lu}return i=Yy.bind(null,t),n=zp(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&yf(i),t.callbackPriority=2,t.callbackNode=null,2}function Yy(t,e){if(It!==0&&It!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(cf()&&t.callbackNode!==n)return null;var i=nt;return i=Wu(t,t===At?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(zy(t,i,e),qy(t,ei()),t.callbackNode!=null&&t.callbackNode===n?Yy.bind(null,t):null)}function Dg(t,e){if(cf())return null;zy(t,e,!0)}function qE(){sT(function(){pt&6?zp(Nx,XE):Xy()})}function Em(){if(Xa===0){var t=Vr;t===0&&(t=ql,ql<<=1,!(ql&261888)&&(ql=256)),Xa=t}return Xa}function Ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Oc(t)}function YE(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=Ng((a[Wn]||null).action),s=i.submitter;s&&(e=(e=s[Wn]||null)?Ng(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new qu("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xa!==0){var l=new FormData(a,s);ih(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=new FormData(a,s),ih(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var jf=0;jf<Xd.length;jf++){var Wf=Xd[jf],ZE=Wf.toLowerCase(),KE=Wf[0].toUpperCase()+Wf.slice(1);wi(ZE,"on"+KE)}wi(s_,"onAnimationEnd");wi(o_,"onAnimationIteration");wi(l_,"onAnimationStart");wi("dblclick","onDoubleClick");wi("focusin","onFocus");wi("focusout","onBlur");wi(rE,"onTransitionRun");wi(sE,"onTransitionStart");wi(oE,"onTransitionCancel");wi(c_,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function Zy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){uu(d)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){uu(d)}a.currentTarget=null,r=l}}}}function Qe(t,e){var n=e[A0];n===void 0&&(n=e[A0]=new Set);var i=t+"__bubble";n.has(i)||(Ky(e,t,2,!1),n.add(i))}function Xf(t,e,n){var i=0;e&&(i|=4),Ky(n,t,i,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Tm(t){if(!t[sc]){t[sc]=!0,Gx.forEach(function(n){n!=="selectionchange"&&(QE.has(n)||Xf(n,!1,t),Xf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sc]||(e[sc]=!0,Xf("selectionchange",!1,e))}}function Ky(t,e,n,i){switch(_S(e)){case 2:var a=kT;break;case 8:a=jT;break;default:a=Um}n=a.bind(null,e,n,t),a=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function qf(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Dr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}Zx(function(){var c=r,d=Gp(n),p=[];e:{var u=u_.get(t);if(u!==void 0){var h=qu,_=t;switch(t){case"keypress":if(Ic(n)===0)break e;case"keydown":case"keyup":h=Pb;break;case"focusin":_="focus",h=Af;break;case"focusout":_="blur",h=Af;break;case"beforeblur":case"afterblur":h=Af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=O0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=bb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Hb;break;case s_:case o_:case l_:h=Ab;break;case c_:h=Vb;break;case"scroll":case"scrollend":h=Sb;break;case"wheel":h=jb;break;case"copy":case"cut":case"paste":h=Cb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=I0;break;case"submit":h=Fb;break;case"toggle":case"beforetoggle":h=Xb}var M=(e&4)!==0,m=!M&&(t==="scroll"||t==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var v=c,S;v!==null;){var y=v;if(S=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||S===null||f===null||(y=ol(v,f),y!=null&&M.push(gl(v,y,S))),m)break;v=v.return}0<M.length&&(u=new h(u,_,null,n,d),p.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",u=t==="mouseout"||t==="pointerout",h&&n!==Gd&&(_=n.relatedTarget||n.fromElement)&&(Dr(_)||_[co]))break e;(u||h)&&(_=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,u?(h=n.relatedTarget||n.toElement,u=c,h=h?Dr(h):null,h!==null&&(m=Cl(h),M=h.tag,h!==m||M!==5&&M!==27&&M!==6)&&(h=null)):(u=null,h=c),u!==h&&(M=O0,y="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=I0,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=u==null?_:Po(u),S=h==null?_:Po(h),_=new M(y,v+"leave",u,n,d),_.target=m,_.relatedTarget=S,y=null,Dr(d)===c&&(M=new M(f,v+"enter",h,n,d),M.target=S,M.relatedTarget=m,y=M),m=y,M=u&&h?wd(u,h,JE):null,u!==null&&Ug(p,_,u,M,!1),h!==null&&m!==null&&Ug(p,m,h,M,!0)))}e:{if(u=c?Po(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var A=H0;else if(B0(u))if(t_)A=nE;else{A=eE;var R=$b}else h=u.nodeName,!h||h.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Hp(c.elementType)&&(A=H0):A=tE;if(A&&(A=A(t,c))){e_(p,A,n,d);break e}R&&R(t,u,c)}switch(R=c?Po(c):window,t){case"focusin":(B0(R)||R.contentEditable==="true")&&(As=R,jd=c,jo=null);break;case"focusout":jo=jd=As=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,W0(p,n,d);break;case"selectionchange":if(aE)break;case"keydown":case"keyup":W0(p,n,d)}var x;if(jp)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ts?Jx(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Qx&&n.locale!=="ko"&&(Ts||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ts&&(x=Kx()):(Va=d,Vp="value"in Va?Va.value:Va.textContent,Ts=!0)),R=Nu(c,E),0<R.length&&(E=new P0(E,t,null,n,d),p.push({event:E,listeners:R}),x?E.data=x:(x=$x(n),x!==null&&(E.data=x)))),(x=Yb?Zb(t,n):Kb(t,n))&&(E=Nu(c,"onBeforeInput"),0<E.length&&(R=new P0("onBeforeInput","beforeinput",null,n,d),p.push({event:R,listeners:E}),R.data=x)),YE(p,t,c,n,d)}Zy(p,e)})}function gl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nu(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ol(t,n),a!=null&&i.unshift(gl(t,a,r)),a=ol(t,e),a!=null&&i.push(gl(t,a,r))),t.tag===3)return i;t=t.return}return[]}function JE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ug(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=ol(n,r),c!=null&&s.unshift(gl(n,c,l))):a||(c=ol(n,r),c!=null&&s.push(gl(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var $E=/\r\n?/g,eT=/\u0000|\uFFFD/g;function Lg(t){return(typeof t=="string"?t:""+t).replace($E,`
`).replace(eT,"")}function Qy(t,e){return e=Lg(e),Lg(t)===e}function St(t,e,n,i,a,r){switch(n){case"children":if(typeof i=="string")e==="body"||e==="textarea"&&i===""||qs(t,i);else if(typeof i=="number"||typeof i=="bigint")e!=="body"&&qs(t,""+i);else return;break;case"className":Kl(t,"class",i);break;case"tabIndex":Kl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(t,n,i);break;case"style":Yx(t,i,r);return;case"data":if(e!=="object"){Kl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Oc(i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",a.name,a,null),St(t,e,"formEncType",a.formEncType,a,null),St(t,e,"formMethod",a.formMethod,a,null),St(t,e,"formTarget",a.formTarget,a,null)):(St(t,e,"encType",a.encType,a,null),St(t,e,"method",a.method,a,null),St(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Oc(i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Hi);return;case"onScroll":i!=null&&Qe("scroll",t);return;case"onScrollEnd":i!=null&&Qe("scrollend",t);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(re(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(re(60));(r!=null?r.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Oc(i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),Lc(t,"popover",i);break;case"xlinkActuate":ea(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ea(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ea(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ea(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ea(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ea(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ea(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ea(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ea(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Lc(t,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=_b.get(n)||n,Lc(t,n,i);else return}ct=!0}function Ch(t,e,n,i,a,r){switch(n){case"style":Yx(t,i,r);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(re(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(re(60));(r!=null?r.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"children":if(typeof i=="string")qs(t,i);else if(typeof i=="number"||typeof i=="bigint")qs(t,""+i);else return;break;case"onScroll":i!=null&&Qe("scroll",t);return;case"onScrollEnd":i!=null&&Qe("scrollend",t);return;case"onClick":i!=null&&(t.onclick=Hi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Vx.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),r=n.slice(2,a?n.length-7:void 0),e=t[Wn]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(r,e,a),typeof i=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(r,i,a);break e}ct=!0,n in t?t[n]=i:i===!0?t.setAttribute(n,""):Lc(t,n,i)}return}ct=!0}function _n(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(re(137,e));default:St(t,e,r,s,n,null)}}a&&St(t,e,"srcSet",n.srcSet,n,null),i&&St(t,e,"src",n.src,n,null);return;case"input":Qe("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(re(137,e));break;default:St(t,e,i,d,n,null)}}Wx(t,r,o,l,c,s,a,!1);return;case"select":Qe("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:St(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?Os(t,!!i,e,!1):n!=null&&Os(t,!!i,n,!0);return;case"textarea":Qe("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(re(91));break;default:St(t,e,s,o,n,null)}qx(t,i,a,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:St(t,e,l,i,n,null)}return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(i=0;i<ml.length;i++)Qe(ml[i],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(re(137,e));default:St(t,e,c,i,n,null)}return;default:if(Hp(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Ch(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&St(t,e,o,i,n,null))}var tT={};function nT(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(h)||St(t,e,h,null,i,p)}}for(var u in i){var h=i[u];if(p=n[u],i.hasOwnProperty(u)&&(h!=null||p!=null))switch(u){case"type":h!==p&&(ct=!0),r=h;break;case"name":h!==p&&(ct=!0),a=h;break;case"checked":h!==p&&(ct=!0),c=h;break;case"defaultChecked":h!==p&&(ct=!0),d=h;break;case"value":h!==p&&(ct=!0),s=h;break;case"defaultValue":h!==p&&(ct=!0),o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(re(137,e));break;default:h!==p&&St(t,e,u,h,i,p)}}Hd(t,s,o,l,c,d,r,a);return;case"select":h=s=o=u=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(r)||St(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":r!==l&&(ct=!0),u=r;break;case"defaultValue":r!==l&&(ct=!0),o=r;break;case"multiple":r!==l&&(ct=!0),s=r;default:r!==l&&St(t,e,a,r,i,l)}e=o,n=s,i=h,u!=null?Os(t,!!n,u,!1):!!i!=!!n&&(e!=null?Os(t,!!n,e,!0):Os(t,!!n,n?[]:"",!1));return;case"textarea":h=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:St(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":a!==r&&(ct=!0),u=a;break;case"defaultValue":a!==r&&(ct=!0),h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(re(91));break;default:a!==r&&St(t,e,s,a,i,r)}Xx(t,u,h);return;case"option":for(var _ in n)if(u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:St(t,e,_,null,i,u)}for(l in i)if(u=i[l],h=n[l],i.hasOwnProperty(l)&&u!==h&&(u!=null||h!=null))switch(l){case"selected":u!==h&&(ct=!0),t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:St(t,e,l,u,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&St(t,e,M,null,i,u);for(c in i)if(u=i[c],h=n[c],i.hasOwnProperty(c)&&u!==h&&(u!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(re(137,e));break;default:St(t,e,c,u,i,h)}return;default:if(Hp(e)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Ch(t,e,m,void 0,i,u);for(d in i)u=i[d],h=n[d],!i.hasOwnProperty(d)||u===h||u===void 0&&h===void 0||Ch(t,e,d,u,i,h);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&St(t,e,f,null,i,u);for(p in i)u=i[p],h=n[p],!i.hasOwnProperty(p)||u===h||u==null&&h==null||St(t,e,p,u,i,h)}function Og(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&Og(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,p=l.initiatorType;d&&Og(p)&&(l=l.responseEnd,s+=d*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(r+s)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wh=null,Dh=null;function vl(t){return t.nodeType===9?t:t.ownerDocument}function Pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jy(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function $y(t,e,n,i){return n=vl(n).createElement(t),n[pn]=i,n[Wn]=e,_n(n,t,e),on(n),n}function Nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=null;function aT(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var Am=typeof setTimeout=="function"?setTimeout:void 0,rT=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,zg=typeof requestAnimationFrame=="function"?requestAnimationFrame:Am,sT=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch(oT)}:Am;function oT(t){setTimeout(function(){throw t})}function pr(t){return t==="head"}function Fg(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),io(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Kf(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Kf(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[Ul]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&Kf(t.ownerDocument.body);n=a}while(n);io(e)}function Bg(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function eS(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var i=1;else for(var a=i=0;a<e.length;a++){var r=e[a];0<r.width&&0<r.height&&i++}i===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function tS(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function lT(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function Uh(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return lT(e,n,t)}function cT(t){return t.documentElement.clientHeight}function uT(t){this.addEventListener("load",t),this.addEventListener("error",t)}function fT(t,e,n,i,a,r,s,o,l){var c=e.nodeType===9?e:e.ownerDocument;try{var d=c.startViewTransition({update:function(){var u=c.defaultView,h=u.navigation&&u.navigation.transition,_=c.fonts.status;i();var M=[];if(_==="loaded"&&(cT(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),_=M.length,t!==null)for(var m=t.suspenseyImages,f=0,v=0;v<m.length;v++){var S=m[v];if(!S.complete){var y=S.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(f+=hS(S),f>Zc){M.length=_;break}S=new Promise(uT.bind(S)),M.push(S)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(A){return setTimeout(A,500)})]).then(a,a),(h?Promise.allSettled([h.finished,u]):u).then(r,r);if(a(),h)return h.finished.then(r,r);r()},types:n});c.__reactViewTransition=d;var p=[];return d.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),h=0;h<u.length;h++){var _=u[h],M=_.effect,m=M.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(_),_=M.getKeyframes();for(var f=m=void 0,v=!0,S=0;S<_.length;S++){var y=_[S],A=y.width;if(m===void 0)m=A;else if(m!==A){v=!1;break}if(A=y.height,f===void 0)f=A;else if(f!==A){v=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}v&&m!==void 0&&f!==void 0&&(M.setKeyframes(_),v=getComputedStyle(M.target,M.pseudoElement),v.width!==m||v.height!==f)&&(v=_[0],v.width=m,v.height=f,v=_[_.length-1],v.width=m,v.height=f,M.setKeyframes(_))}}s()},function(u){c.__reactViewTransition===d&&(c.__reactViewTransition=null);try{if(typeof u=="object"&&u!==null)switch(u.name){case"InvalidStateError":(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null)}u!==null&&l(u)}finally{i(),a(),s()}}),d.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===d&&(c.__reactViewTransition=null),o()}),d}catch{return i(),a(),s(),null}}function Nr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Nr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Rt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};Nr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var r=n[a].effect;r!==null&&r.target===t&&r.pseudoElement===e&&i.push(n[a])}return i};Nr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function nS(t){return{name:t,group:new Nr("group",t),imagePair:new Nr("image-pair",t),old:new Nr("old",t),new:new Nr("new",t)}}function ri(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(t,e,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(iS(r,t,e,n)===-1){var s=this,o=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){s.removeEventListener(t,e,n),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),i!==null&&(a=s.removeEventListener.bind(s,t,e,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=$s(n),r.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),jn(this._fragmentFiber.child,!1,dT,t,o,i)}this._eventListeners=r}};function dT(t,e,n,i){return Kt(t).addEventListener(e,n,i),!1}ri.prototype.removeEventListener=function(t,e,n){var i=this._eventListeners;if(i!==null&&(e=iS(i,t,e,n),e!==-1)){var a=i[e];n=a.attachedListener;var r=a.cleanup;a=$s(a.optionsOrUseCapture),jn(this._fragmentFiber.child,!1,hT,t,n,a),i.splice(e,1),r!==null&&r()}};function hT(t,e,n,i){return Kt(t).removeEventListener(e,n,i),!1}function $s(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Hg(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function iS(t,e,n,i){if(t.length===0)return-1;i=Hg(i);for(var a=0;a<t.length;a++){var r=t[a];if(r.type===e&&r.listener===n&&Hg(r.optionsOrUseCapture)===i)return a}return-1}ri.prototype.dispatchEvent=function(t){var e=Kr(this._fragmentFiber);if(e===null)return!0;e=Kt(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var i=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var r=n[a];i.addEventListener(r.type,r.attachedListener,$s(r.optionsOrUseCapture))}if(e.appendChild(i),t=i.dispatchEvent(t),n)for(a=0;a<n.length;a++)r=n[a],i.removeEventListener(r.type,r.attachedListener,$s(r.optionsOrUseCapture));return e.removeChild(i),t}return e.dispatchEvent(t)};ri.prototype.focus=function(t){jn(this._fragmentFiber.child,!0,aS,t,void 0,void 0)};function aS(t,e){return t.tag===6?!1:(t=Kt(t),TT(t,e))}ri.prototype.focusLast=function(t){var e=[];jn(this._fragmentFiber.child,!0,Rm,e,void 0,void 0);for(var n=e.length-1;0<=n&&!aS(e[n],t);n--);};function Rm(t,e){return e.push(t),!1}ri.prototype.blur=function(){var t=Kr(this._fragmentFiber);t!==null&&(t=Kt(t),t=vl(t).activeElement,t!==null&&jn(this._fragmentFiber.child,!1,pT,t,void 0,void 0))};function pT(t,e){return t.tag===6?!1:(t=Kt(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ri.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),jn(this._fragmentFiber.child,!1,mT,t,void 0,void 0)};function mT(t,e){return t.tag===6||(t=Kt(t),e.observe(t)),!1}ri.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),jn(this._fragmentFiber.child,!1,gT,t,void 0,void 0);for(var n=e=0;n<Ai.length;n++){var i=Ai[n];i.fragmentInstance===this&&i.observer===t?t.unobserve(i.instance):Ai[e++]=i}Ai.length=e}};function gT(t,e){return t.tag===6||(t=Kt(t),e.unobserve(t)),!1}var Ai=[],Zf=!1;function vT(t,e,n){Ai.push({fragmentInstance:t,observer:e,instance:n}),Zf||(Zf=!0,AT(function(){Zf=!1;var i=Ai;Ai=[];for(var a=0;a<i.length;a++){var r=i[a];r.observer.unobserve(r.instance)}}))}ri.prototype.getClientRects=function(){var t=[];return jn(this._fragmentFiber.child,!1,xT,t,void 0,void 0),t};function xT(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=Kt(t),e.push.apply(e,t.getClientRects());return!1}ri.prototype.getRootNode=function(t){var e=Kr(this._fragmentFiber);return e===null?this:Kt(e).getRootNode(t)};ri.prototype.compareDocumentPosition=function(t){var e=Kr(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];jn(this._fragmentFiber.child,!1,Rm,n,void 0,void 0);var i=Kt(e);if(n.length===0){if(n=i,y0(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var a=i=n.compareDocumentPosition(t);return n===t?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Rx(e)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(t=Kt(n).compareDocumentPosition(t),a=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=Kt(n[0]),a=Kt(n[n.length-1]);var r=y0(this._fragmentFiber)?e.parentElement:i;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=r.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=e.compareDocumentPosition(t),o=a.compareDocumentPosition(t),l=s&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&r&&s&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=i&&e===t||r&&a===t||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&e===t||!r&&a===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||_T(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function _T(t,e,n,i,a){var r=Dr(a);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===e||r.alternate===e)){n=!0;break e}r=r.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=a.ownerDocument,a===r||a===r.documentElement||a===r.body;e:{for(r=e,e=Kr(e);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==e&&r.alternate!==e)){r=!0;break e}r=r.return}r=!1}return r}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!r)&&!(e=r===n)&&(e=wd(n,r,S0),e===null?e=!1:(jn(e,!0,qM,r,n),r=Ss,Ss=null,e=r!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!r)&&!(e=r===i)&&(e=wd(i,r,S0),e===null?e=!1:(jn(e,!0,YM,r,i),r=Ss,Cd=Ss=null,e=r!==null)),e):!1}function Gg(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(re(566));var e=[];jn(this._fragmentFiber.child,!1,Rm,e,void 0,void 0);var n=t!==!1;if(e.length===0){var i=Rx(this._fragmentFiber);if(i=n?i[1]||i[0]||Kr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){t=Kt(i),Gg(t,n);return}if(i=Kt(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(t);return}i.scrollIntoView(t)}}for(i=n?e.length-1:0;i!==(n?-1:e.length);){var a=e[i];a.tag===6?(a=Kt(a),Gg(a,n)):Kt(a).scrollIntoView(t),i+=n?-1:1}};function yT(t,e){return t=Kt(t),rS(t,e),!1}function rS(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function sS(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.addEventListener(a.type,a.attachedListener,$s(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(r){for(var s=0,o=0;o<Ai.length;o++){var l=Ai[o];(l.fragmentInstance!==e||l.observer!==r||l.instance!==t)&&(Ai[s++]=l)}Ai.length=s,r.observe(t)}),rS(t,e))}function ST(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.removeEventListener(a.type,a.attachedListener,$s(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(r){typeof r.rootMargin=="string"?vT(e,r,t):r.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Lh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Lh(n),Xu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function MT(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ul])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function bT(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function oS(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=gi(t.nextSibling),t===null))return null;return t}function Oh(t){return t.data==="$?"||t.data==="$~"}function Cm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ET(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ph=null;function Vg(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return gi(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function kg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function TT(t,e){function n(){i=!0}if(t.ownerDocument.activeElement===t)return!0;var i=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return i}function AT(t){zg(function(){zg(function(e){return t(e)})})}function lS(t,e,n){switch(e=vl(n),t){case"html":if(t=e.documentElement,!t)throw Error(re(452));return t;case"head":if(t=e.head,!t)throw Error(re(453));return t;case"body":if(t=e.body,!t)throw Error(re(454));return t;default:throw Error(re(451))}}function cS(t,e,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&St(t,e,i,null,tT,a)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Hi&&(t.onclick=null),Xu(t)}function Kf(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Xu(t)}var vi=new Map,jg=new Set;function xl(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Ea=mt.d;mt.d={f:RT,r:CT,D:wT,C:DT,L:NT,m:UT,X:OT,S:LT,M:PT};function RT(){var t=Ea.f(),e=of();return t||e}function CT(t){var e=uo(t);e!==null&&e.tag===5&&e.type==="form"?Y_(e):Ea.r(t)}var mo=typeof document>"u"?null:document;function uS(t,e,n){var i=mo;if(i&&typeof e=="string"&&e){var a=hi(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),jg.has(a)||(jg.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),_n(e,"link",t),on(e),i.head.appendChild(e)))}}function wT(t){Ea.D(t),uS("dns-prefetch",t,null)}function DT(t,e){Ea.C(t,e),uS("preconnect",t,e)}function NT(t,e,n){Ea.L(t,e,n);var i=mo;if(i&&t&&e){var a='link[rel="preload"][as="'+hi(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+hi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+hi(n.imageSizes)+'"]')):a+='[href="'+hi(t)+'"]';var r=a;switch(e){case"style":r=eo(t);break;case"script":r=go(t)}if(!(vi.has(r)||(t=Rt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),vi.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Fl(r))||e==="script"&&i.querySelector(Bl(r))))){var s=i.createElement("link");_n(s,"link",t),e==="style"&&(s[cu]=!0,s.onload=s.onerror=function(){Hx(s)}),on(s),i.head.appendChild(s)}}}function UT(t,e){Ea.m(t,e);var n=mo;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+hi(i)+'"][href="'+hi(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=go(t)}if(!vi.has(r)&&(t=Rt({rel:"modulepreload",href:t},e),vi.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bl(r)))return}i=n.createElement("link"),_n(i,"link",t),on(i),n.head.appendChild(i)}}}function LT(t,e,n){Ea.S(t,e,n);var i=mo;if(i&&t){var a=Ls(i).hoistableStyles,r=eo(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Fl(r)))o.loading=5;else{t=Rt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=vi.get(r))&&wm(t,n);var l=s=i.createElement("link");on(l),_n(l,"link",t),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,qc(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function OT(t,e){Ea.X(t,e);var n=mo;if(n&&t){var i=Ls(n).hoistableScripts,a=go(t),r=i.get(a);r||(r=n.querySelector(Bl(a)),r||(t=Rt({src:t,async:!0},e),(e=vi.get(a))&&Dm(t,e),r=n.createElement("script"),on(r),_n(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function PT(t,e){Ea.M(t,e);var n=mo;if(n&&t){var i=Ls(n).hoistableScripts,a=go(t),r=i.get(a);r||(r=n.querySelector(Bl(a)),r||(t=Rt({src:t,async:!0,type:"module"},e),(e=vi.get(a))&&Dm(t,e),r=n.createElement("script"),on(r),_n(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Wg(t,e,n,i){var a=(a=Za.current)?xl(a):null;if(!a)throw Error(re(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=eo(n.href),e=Ls(a).hoistableStyles,i=e.get(n),i||(i={type:"style",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=eo(n.href);var r=Ls(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(Fl(t)))?r._p||(s.instance=r,s.state.loading=5):(r=vi.get(t),r||(r={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vi.set(t,r)),IT(a,t,r,s.state))),e&&i===null)throw Error(re(528,""));return s}if(e&&i!==null)throw Error(re(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=go(n),e=Ls(a).hoistableScripts,i=e.get(n),i||(i={type:"script",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(re(444,t))}}function eo(t){return'href="'+hi(t)+'"'}function Fl(t){return'link[rel="stylesheet"]['+t+"]"}function fS(t){return Rt({},t,{"data-precedence":t.precedence,precedence:null})}function IT(t,e,n,i){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[cu]!==!0){i.loading=1;return}}else e=t.createElement("link"),e[cu]=!0,e.onload=e.onerror=Hx.bind(null,e),_n(e,"link",n),on(e),t.head.appendChild(e);i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2})}function go(t){return'[src="'+hi(t)+'"]'}function Bl(t){return"script[async]"+t}function Xg(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+hi(n.href)+'"]');if(i)return e.instance=i,on(i),i;var a=Rt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),on(i),_n(i,"style",a),qc(i,n.precedence,t),e.instance=i;case"stylesheet":a=eo(n.href);var r=t.querySelector(Fl(a));if(r)return e.state.loading|=4,e.instance=r,on(r),r;i=fS(n),(a=vi.get(a))&&wm(i,a),r=(t.ownerDocument||t).createElement("link"),on(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),_n(r,"link",i),e.state.loading|=4,qc(r,n.precedence,t),e.instance=r;case"script":return r=go(n.src),(a=t.querySelector(Bl(r)))?(e.instance=a,on(a),a):(i=n,(a=vi.get(r))&&(i=Rt({},n),Dm(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),on(a),_n(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(re(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,qc(i,n.precedence,t));return e.instance}function qc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function wm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Dm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Yc=null;function qg(t,e,n){if(Yc===null){var i=new Map,a=Yc=new Map;a.set(n,i)}else a=Yc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[Ul]||r[pn]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Ih(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function zT(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Yg(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function dS(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function hS(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Zg(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=hS(e),t.suspenseyImages.push(e)),t=HT.bind(t),e.decode().then(t,t))}function FT(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=eo(i.href),r=e.querySelector(Fl(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=_l.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,on(r);return}r=e.ownerDocument||e,i=fS(i),(a=vi.get(a))&&wm(i,a),r=r.createElement("link"),on(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),_n(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=_l.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Zc=0;function BT(t,e){return t.stylesheets&&t.count===0&&Kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&Zc===0&&(Zc=62500*iT());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>Zc?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function pS(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Kc(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function _l(){this.count--,pS(this)}function HT(){this.imgCount--,pS(this)}var Uu=null;function Kc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uu=new Map,e.forEach(GT,t),Uu=null,_l.call(t))}function GT(t,e){if(!(e.state.loading&4)){var n=Uu.get(t);if(n)var i=n.get(null);else{n=new Map,Uu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=_l.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var to={$$typeof:Bi,Provider:null,Consumer:null,_currentValue:Lr,_currentValue2:Lr,_threadCount:0};function VT(t,e,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sf(0),this.hiddenUpdates=Sf(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function mS(t,e,n,i,a,r,s,o,l,c,d,p){return t=new VT(t,e,n,s,l,c,d,p,o),e=1,r===!0&&(e|=24),r=Hn(3,null,null,e),t.current=r,r.stateNode=t,e=Kp(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},$p(r),t}function gS(t){return t?(t=ws,t):ws}function vS(t,e,n,i,a,r){a=gS(a),i.context===null?i.context=a:i.pendingContext=a,i=Qa(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Ja(t,i,e),n!==null&&(Vn(n,t,e),Xo(n,t,e))}function Kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nm(t,e){Kg(t,e),(t=t.alternate)&&Kg(t,e)}function xS(t){if(t.tag===13||t.tag===31){var e=$r(t,67108864);e!==null&&Vn(e,t,67108864),Nm(t,67108864)}}function Qg(t){if(t.tag===13||t.tag===31){var e=ii();e=Fp(e);var n=$r(t,e);n!==null&&Vn(n,t,e),Nm(t,e)}}var no=!0;function kT(t,e,n,i){var a=He.T;He.T=null;var r=mt.p;try{mt.p=2,Um(t,e,n,i)}finally{mt.p=r,He.T=a}}function jT(t,e,n,i){var a=He.T;He.T=null;var r=mt.p;try{mt.p=8,Um(t,e,n,i)}finally{mt.p=r,He.T=a}}function Um(t,e,n,i){if(no){var a=zh(i);if(a===null)qf(t,e,i,Lu,n),Jg(t,i);else if(XT(a,t,e,n,i))i.stopPropagation();else if(Jg(t,i),e&4&&-1<WT.indexOf(t)){for(;a!==null;){var r=uo(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ar(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-ni(s);o.entanglements[1]|=l,s&=~l}Ji(r),!(pt&6)&&(Ru=ei()+500,zl(0))}}break;case 31:case 13:o=$r(r,2),o!==null&&Vn(o,r,2),of(),Nm(r,2)}if(r=zh(i),r===null&&qf(t,e,i,Lu,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else qf(t,e,i,null,n)}}function zh(t){return t=Gp(t),Lm(t)}var Lu=null;function Lm(t){if(Lu=null,t=Dr(t),t!==null){var e=Cl(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Ex(e),t!==null)return t;t=null}else if(n===31){if(t=Tx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Lu=t,null}function _S(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ib()){case Nx:return 2;case Ux:return 8;case lu:case ab:return 32;case Lx:return 268435456;default:return 32}default:return 32}}var Fh=!1,nr=null,ir=null,ar=null,yl=new Map,Sl=new Map,Ba=[],WT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jg(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":yl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(e.pointerId)}}function Ro(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=uo(e),e!==null&&xS(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function XT(t,e,n,i,a){switch(e){case"focusin":return nr=Ro(nr,t,e,n,i,a),!0;case"dragenter":return ir=Ro(ir,t,e,n,i,a),!0;case"mouseover":return ar=Ro(ar,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return yl.set(r,Ro(yl.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Sl.set(r,Ro(Sl.get(r)||null,t,e,n,i,a)),!0}return!1}function yS(t){var e=Dr(t.target);if(e!==null){var n=Cl(e);if(n!==null){if(e=n.tag,e===13){if(e=Ex(n),e!==null){t.blockedOn=e,T0(t.priority,function(){Qg(n)});return}}else if(e===31){if(e=Tx(n),e!==null){t.blockedOn=e,T0(t.priority,function(){Qg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gd=i,n.target.dispatchEvent(i),Gd=null}else return e=uo(n),e!==null&&xS(e),t.blockedOn=n,!1;e.shift()}return!0}function $g(t,e,n){Qc(t)&&n.delete(e)}function qT(){Fh=!1,nr!==null&&Qc(nr)&&(nr=null),ir!==null&&Qc(ir)&&(ir=null),ar!==null&&Qc(ar)&&(ar=null),yl.forEach($g),Sl.forEach($g)}function oc(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,qT)))}var lc=null;function ev(t){lc!==t&&(lc=t,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Lm(i||n)===null)continue;break}var r=uo(n);r!==null&&(t.splice(e,3),e-=3,ih(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function io(t){function e(l){return oc(l,t)}nr!==null&&oc(nr,t),ir!==null&&oc(ir,t),ar!==null&&oc(ar,t),yl.forEach(e),Sl.forEach(e);for(var n=0;n<Ba.length;n++){var i=Ba[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ba.length&&(n=Ba[0],n.blockedOn===null);)yS(n),n.blockedOn===null&&Ba.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[Wn]||null;if(typeof r=="function")s||ev(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[Wn]||null)o=s.formAction;else if(Lm(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ev(n)}}}function SS(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Om(t){this._internalRoot=t}uf.prototype.render=Om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));var n=e.current,i=ii();vS(n,i,t,e,null,null)};uf.prototype.unmount=Om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vS(t.current,2,null,t,null,null),of(),e[co]=null}};function uf(t){this._internalRoot=t}uf.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ba.length&&e!==0&&e<Ba[n].priority;n++);Ba.splice(n,0,t),n===0&&yS(t)}};var tv=Mx.version;if(tv!=="19.3.1")throw Error(re(527,tv,"19.3.1"));mt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=XM(e),t=t!==null?Ax(t):null,t=t===null?null:t.stateNode,t};var YT={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:He,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{wl=cc.inject(YT),ti=cc}catch{}}ku.createRoot=function(t,e){if(!bx(t))throw Error(re(299));var n=!1,i="",a=ny,r=iy,s=ay;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=mS(t,1,!1,null,null,n,i,null,a,r,s,SS),t[co]=e.current,Tm(t),new Om(e)};ku.hydrateRoot=function(t,e,n){if(!bx(t))throw Error(re(299));var i=!1,a="",r=ny,s=iy,o=ay,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=mS(t,1,!0,e,n??null,i,a,l,r,s,o,SS),e.context=gS(null),n=e.current,i=ii(),i=Fp(i),a=Qa(i),a.callback=null,Ja(n,a,i),n=i,e.current.lanes=n,Nl(e,n),Ji(e),t[co]=e.current,Tm(t),new uf(e)};ku.version="19.3.1";function MS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(MS)}catch(t){console.error(t)}}MS(),gx.exports=ku;var ZT=gx.exports;/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function QT(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:KT(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=t=>{const e=JT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Qf(t){return t!=null}function e2(t,e={}){var u,h;const n=e.attributeNames??{},i=_=>n[_]??_,a=t.size??t.width??yr.width,r=t.size??t.height??yr.height,s=((u=t.aliases)==null?void 0:u.filter(_=>typeof _=="string"&&_.trim()!=="").map(_=>`lucide-${_}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...s],l=((h=e.className)==null?void 0:h.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?Bh(...l):Bh("lucide",...o,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??yr["stroke-width"])*Number(t.size??t.width??yr.width)/Number(e.size??e.width??yr.width):e.strokeWidth??yr["stroke-width"];return["svg",{...Object.entries(yr).reduce((_,[M,m])=>(_[i(M)]=m,_),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Qf(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Qf(e.width)&&{[i("width")]:e.width},..."height"in e&&Qf(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:d,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${a} ${r}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(_=>{const[M,m,f]=_,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return f?[M,v,f]:[M,v]})]}/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function t2(t,e={}){return e2(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},i2=Oe.createContext({}),a2=()=>Oe.useContext(i2),r2=Oe.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:a,absoluteStrokeWidth:r,nonScalingStroke:s,className:o="",children:l,iconNode:c=[],icon:d={node:c,aliases:[],size:24},...p},u)=>{const{size:h=24,strokeWidth:_=2,absoluteStrokeWidth:M=!1,nonScalingStroke:m=!1,color:f="currentColor",className:v=""}=a2()??{},S=!!l||n2(p),[y,A,R=[]]=t2(d,{color:t??f,width:n??e??h,height:i??e??h,strokeWidth:a??_,absoluteStrokeWidth:r??M,nonScalingStroke:s??m,className:Bh(v,o),hasA11yProp:S,attributes:p});return Oe.createElement(y,{ref:u,...A},[...R.map(([x,E])=>Oe.createElement(x,E)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function je(t,e=[],n=[]){const i=typeof t=="string"?QT(t,e,n):t,a=Oe.forwardRef(({className:r,...s},o)=>Oe.createElement(r2,{ref:o,icon:i,className:r,...s}));return i.name&&(a.displayName=$T(i.name)),a}/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};bS.node;const s2=je(bS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};ES.node;const TS=je(ES);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};AS.node;const o2=je(AS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};RS.node;const l2=je(RS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};CS.node;const c2=je(CS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};wS.node;const u2=je(wS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};DS.node;const tl=je(DS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};NS.node;const US=je(NS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};LS.node;const f2=je(LS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};OS.node;const d2=je(OS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};PS.node;const h2=je(PS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};IS.node;const nv=je(IS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};zS.node;const p2=je(zS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};FS.node;const m2=je(FS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS={name:"folder-git-2",size:24,node:[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]};BS.node;const g2=je(BS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS={name:"git-branch",size:24,node:[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]};HS.node;const v2=je(HS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};GS.node;const VS=je(GS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};kS.node;const x2=je(kS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};jS.node;const _2=je(jS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};WS.node;const XS=je(WS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};qS.node;const y2=je(qS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};YS.node;const ZS=je(YS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS={name:"mic-off",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]]};KS.node;const S2=je(KS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS={name:"mic",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]};QS.node;const M2=je(QS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS={name:"monitor",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]};JS.node;const b2=je(JS);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S={name:"mouse",size:24,node:[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]};$S.node;const E2=je($S);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};e1.node;const T2=je(e1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1={name:"pen",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-2"]};t1.node;const A2=je(t1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};n1.node;const R2=je(n1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};i1.node;const Jf=je(i1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};a1.node;const C2=je(a1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};r1.node;const iv=je(r1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};s1.node;const w2=je(s1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};o1.node;const l1=je(o1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};c1.node;const u1=je(c1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};f1.node;const vo=je(f1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};d1.node;const h1=je(d1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};p1.node;const uc=je(p1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};m1.node;const g1=je(m1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};v1.node;const D2=je(v1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};x1.node;const N2=je(x1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1={name:"workflow",size:24,node:[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]};_1.node;const U2=je(_1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};y1.node;const Hh=je(y1);/**
 * @license lucide-react v1.65.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};S1.node;const Pm=je(S1),av=["01 // INTRO","02 // ABOUT","03 // SKILLS","04 // WORKS","05 // SERVICES","06 // CONTACT"];function L2({currentSection:t,totalSections:e,onSelectSection:n,onNext:i,onPrev:a,onOpenAdmin:r}){return g.jsxs(g.Fragment,{children:[g.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,height:"70px",zIndex:40,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 36px",background:"linear-gradient(180deg, rgba(5,5,7,0.85) 0%, rgba(5,5,7,0) 100%)",backdropFilter:"blur(12px)",pointerEvents:"auto"},children:[g.jsxs("div",{onClick:()=>n(0),style:{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer"},children:[g.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",color:"#050505",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-heading)",fontWeight:900,fontSize:"0.95rem",boxShadow:"0 0 20px rgba(255, 255, 255, 0.3)"},children:"SR"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontFamily:"var(--font-heading)",fontWeight:800,fontSize:"0.92rem",color:"#ffffff",letterSpacing:"0.04em"},children:"SATYAM RAJPOOT"}),g.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.64rem",color:"#a1a1aa",display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx("span",{className:"pulse-dot",style:{width:"5px",height:"5px"}}),"CREATIVE WEB DEVELOPER"]})]})]}),g.jsx("nav",{style:{display:"flex",alignItems:"center",gap:"6px",background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"999px",padding:"4px",backdropFilter:"blur(16px)"},className:"hud-nav-tabs",children:av.map((s,o)=>{const l=t===o;return g.jsx("button",{onClick:()=>n(o),style:{background:l?"#ffffff":"transparent",color:l?"#050505":"#a1a1aa",border:"none",borderRadius:"999px",padding:"6px 14px",fontFamily:"var(--font-mono)",fontSize:"0.72rem",fontWeight:700,cursor:"pointer",transition:"all 0.25s var(--ease-out-expo)",boxShadow:l?"0 0 16px rgba(255,255,255,0.3)":"none"},children:s},o)})}),g.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:g.jsxs("button",{onClick:r,style:{display:"flex",alignItems:"center",gap:"8px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"10px",padding:"8px 14px",color:"#ffffff",fontSize:"0.78rem",fontWeight:600,cursor:"pointer",backdropFilter:"blur(12px)",transition:"all 0.25s ease"},onMouseEnter:s=>s.currentTarget.style.borderColor="rgba(255, 255, 255, 0.35)",onMouseLeave:s=>s.currentTarget.style.borderColor="rgba(255, 255, 255, 0.12)",children:[g.jsx(u1,{size:15,color:"#ffffff"}),g.jsx("span",{children:"Admin"})]})})]}),g.jsx("div",{style:{position:"fixed",right:"28px",top:"50%",transform:"translateY(-50%)",zIndex:35,display:"flex",flexDirection:"column",alignItems:"center",gap:"14px",pointerEvents:"auto"},children:av.map((s,o)=>{const l=t===o;return g.jsx("button",{onClick:()=>n(o),title:s,style:{width:l?"10px":"6px",height:l?"24px":"6px",borderRadius:"999px",background:l?"#ffffff":"rgba(255, 255, 255, 0.25)",border:"none",cursor:"pointer",transition:"all 0.3s ease",boxShadow:l?"0 0 10px #ffffff":"none"}},o)})}),g.jsxs("footer",{style:{position:"fixed",bottom:0,left:0,right:0,height:"65px",zIndex:35,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 36px",background:"linear-gradient(0deg, rgba(5,5,7,0.85) 0%, rgba(5,5,7,0) 100%)",pointerEvents:"auto"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",color:"#71717a"},children:[g.jsx(E2,{size:16,color:"#a1a1aa"}),g.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)"},children:"SCROLL TO ADVANCE // 3D SLIDE VIEWPORT"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginRight:"240px"},children:[g.jsx("button",{onClick:a,disabled:t===0,style:{width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",color:t===0?"#52525b":"#ffffff",cursor:t===0?"not-allowed":"pointer"},children:g.jsx(u2,{size:16})}),g.jsx("button",{onClick:i,disabled:t===e-1,style:{width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",color:t===e-1?"#52525b":"#ffffff",cursor:t===e-1?"not-allowed":"pointer"},children:g.jsx(l2,{size:16})})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Im="187",O2=0,rv=1,P2=2,Jc=1,I2=2,Fo=3,qr=0,kn=1,la=2,ks=0,nl=1,sv=2,ov=3,lv=4,z2=5,ys=100,F2=101,B2=102,H2=103,G2=104,V2=200,k2=201,j2=202,W2=203,M1=204,b1=205,X2=206,q2=207,Y2=208,Z2=209,K2=210,Q2=211,J2=212,$2=213,eA=214,Gh=0,Vh=1,kh=2,Ml=3,jh=4,Wh=5,Xh=6,qh=7,E1=0,tA=1,nA=2,pa=0,T1=1,A1=2,R1=3,zm=4,C1=5,w1=6,D1=7,N1=300,ao=301,bl=302,$f=303,ed=304,Yh=1e3,fa=1001,Zh=1002,gn=1003,iA=1004,fc=1005,Gn=1006,td=1007,qa=1008,Jn=1009,U1=1010,L1=1011,El=1012,Fm=1013,Zi=1014,ki=1015,Ki=1016,Bm=1017,Hm=1018,ro=1020,O1=35902,P1=35899,I1=1021,z1=1022,ji=1023,fr=1026,Ya=1027,F1=1028,Gm=1029,Yr=1030,Vm=1031,km=1033,$c=33776,eu=33777,tu=33778,nu=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,ep=36196,tp=37492,np=37496,ip=37488,ap=37489,Ou=37490,rp=37491,sp=37808,op=37809,lp=37810,cp=37811,up=37812,fp=37813,dp=37814,hp=37815,pp=37816,mp=37817,gp=37818,vp=37819,xp=37820,_p=37821,yp=36492,Sp=36494,Mp=36495,bp=36283,Ep=36284,Pu=36285,Tp=36286,aA=3200,Ap=0,rA=1,Ha="",ci="srgb",Iu="srgb-linear",zu="linear",_t="srgb",nd=7680,sA=519,oA=512,lA=513,cA=514,B1=515,uA=516,fA=517,H1=518,G1=519,dA=35044,cv="300 es",Ri=2e3,Tl=2001;function hA(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pA(){const t=Fu("canvas");return t.style.display="block",t}const uv={};function fv(...t){const e="THREE."+t.shift();console.log(e,...t)}function V1(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=V1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ht(...t){t=V1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function iu(...t){const e=t.join(" ");e in uv||(uv[e]=!0,Be(...t))}function mA(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const gA={[Gh]:Gh,[kh]:Xh,[jh]:jh,[Ml]:Wh,[Vh]:Vh,[Xh]:kh,[qh]:qh,[Wh]:Ml};class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dv=1234567;const il=Math.PI/180,Al=180/Math.PI;function xo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[t&255]+En[t>>8&255]+En[t>>16&255]+En[t>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function jm(t,e){return(t%e+e)%e}function vA(t,e,n,i,a){return i+(t-e)*(a-i)/(n-e)}function xA(t,e,n){return t!==e?(n-t)/(e-t):0}function al(t,e,n){return(1-n)*t+n*e}function _A(t,e,n,i){return al(t,e,1-Math.exp(-n*i))}function yA(t,e=1){return e-Math.abs(jm(t,e*2)-e)}function SA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function MA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function bA(t,e){return t+Math.floor(Math.random()*(e-t+1))}function EA(t,e){return t+Math.random()*(e-t)}function TA(t){return t*(.5-Math.random())}function AA(t){t!==void 0&&(dv=t);let e=dv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RA(t){return t*il}function CA(t){return t*Al}function wA(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function DA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function k1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function NA(t,e,n,i,a){const r=Math.cos,s=Math.sin,o=r(n/2),l=s(n/2),c=r((e+i)/2),d=s((e+i)/2),p=r((e-i)/2),u=s((e-i)/2),h=r((i-e)/2),_=s((i-e)/2);switch(a){case"XYX":t.set(o*d,l*p,l*u,o*c);break;case"YZY":t.set(l*u,o*d,l*p,o*c);break;case"ZXZ":t.set(l*p,l*u,o*d,o*c);break;case"XZX":t.set(o*d,l*_,l*h,o*c);break;case"YXY":t.set(l*h,o*d,l*_,o*c);break;case"ZYZ":t.set(l*_,l*h,o*d,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Wm(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function j1(t,e){if(e.constructor===Float32Array)return t;const n=Wm(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function W1(t,e){if(e.constructor===Float32Array)return t;const n=Wm(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const nn={DEG2RAD:il,RAD2DEG:Al,generateUUID:xo,clamp:tt,euclideanModulo:jm,mapLinear:vA,inverseLerp:xA,lerp:al,damp:_A,pingpong:yA,smoothstep:SA,smootherstep:MA,randInt:bA,randFloat:EA,randFloatSpread:TA,seededRandom:AA,degToRad:RA,radToDeg:CA,isPowerOfTwo:wA,ceilPowerOfTwo:DA,floorPowerOfTwo:k1,setQuaternionFromProperEuler:NA,normalize:W1,denormalize:j1},$m=class $m{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$m.prototype.isVector2=!0;let it=$m;class _o{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],u=r[s+0],h=r[s+1],_=r[s+2],M=r[s+3];if(p!==M||l!==u||c!==h||d!==_){let m=l*u+c*h+d*_+p*M;m<0&&(u=-u,h=-h,_=-_,M=-M,m=-m);let f=1-o;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);f=Math.sin(f*v)/S,o=Math.sin(o*v)/S,l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+M*o}else{l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+M*o;const v=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=v,c*=v,d*=v,p*=v}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],p=r[s],u=r[s+1],h=r[s+2],_=r[s+3];return e[n]=o*_+d*p+l*h-c*u,e[n+1]=l*_+d*u+c*p-o*h,e[n+2]=c*_+d*h+o*u-l*p,e[n+3]=d*_-o*p-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),p=o(r/2),u=l(i/2),h=l(a/2),_=l(r/2);switch(s){case"XYZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"YXZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"ZXY":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"ZYX":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"YZX":this._x=u*d*p+c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p-u*h*_;break;case"XZY":this._x=u*d*p-c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p+u*h*_;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],u=i+o+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(s-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(r+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(r-c)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(s-a)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const e0=class e0{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*n-r*a),p=2*(r*i-s*n);return this.x=n+l*c+s*p-o*d,this.y=i+l*d+o*c-r*p,this.z=a+l*p+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};e0.prototype.isVector3=!0;let Z=e0;const id=new Z,hv=new _o,t0=class t0{constructor(e,n,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],_=i[8],M=a[0],m=a[3],f=a[6],v=a[1],S=a[4],y=a[7],A=a[2],R=a[5],x=a[8];return r[0]=s*M+o*v+l*A,r[3]=s*m+o*S+l*R,r[6]=s*f+o*y+l*x,r[1]=c*M+d*v+p*A,r[4]=c*m+d*S+p*R,r[7]=c*f+d*y+p*x,r[2]=u*M+h*v+_*A,r[5]=u*m+h*S+_*R,r[8]=u*f+h*y+_*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,u=o*l-d*r,h=c*r-s*l,_=n*p+i*u+a*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=p*M,e[1]=(a*c-d*i)*M,e[2]=(o*i-a*s)*M,e[3]=u*M,e[4]=(d*n-a*l)*M,e[5]=(a*r-o*n)*M,e[6]=h*M,e[7]=(i*l-c*n)*M,e[8]=(s*n-i*r)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return iu("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ad.makeScale(e,n)),this}rotate(e){return iu("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ad.makeRotation(-e)),this}translate(e,n){return iu("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};t0.prototype.isMatrix3=!0;let Ge=t0;const ad=new Ge,pv=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UA(){const t={enabled:!0,workingColorSpace:Iu,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===_t&&(a.r=ma(a.r),a.g=ma(a.g),a.b=ma(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_t&&(a.r=js(a.r),a.g=js(a.g),a.b=js(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ha?zu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[s].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Iu]:{primaries:e,whitePoint:i,transfer:zu,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),t}const rt=UA();function ma(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function js(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let as;class LA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Fu("canvas")),as.width=e.width,as.height=e.height;const a=as.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=as}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ma(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ma(n[i]/255)*255):n[i]=ma(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OA=0;class Xm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:OA++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(rd(a[s].image)):r.push(rd(a[s]))}else r=rd(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?LA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let PA=0;const sd=new Z;class Pn extends ts{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,i=fa,a=fa,r=Gn,s=qa,o=ji,l=Jn,c=Pn.DEFAULT_ANISOTROPY,d=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=xo(),this.name="",this.source=new Xm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=N1;Pn.DEFAULT_ANISOTROPY=1;const n0=class n0{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],h=l[5],_=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(h+1)/2,A=(f+1)/2,R=(d+u)/4,x=(p+M)/4,E=(_+m)/4;return S>y&&S>A?S<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(S),a=R/i,r=x/i):y>A?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=R/a,r=E/a):A<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(A),i=x/r,a=E/r),this.set(i,a,r,n),this}let v=Math.sqrt((m-_)*(m-_)+(p-M)*(p-M)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(p-M)/v,this.z=(u-d)/v,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};n0.prototype.isVector4=!0;let zt=n0;class IA extends ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n),this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=new Pn({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Xm(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends IA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class X1 extends Pn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zA extends Pn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Gu=class Gu{constructor(e,n,i,a,r,s,o,l,c,d,p,u,h,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,d,p,u,h,_,M,m)}set(e,n,i,a,r,s,o,l,c,d,p,u,h,_,M,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),s=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const u=s*d,h=s*p,_=o*d,M=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=h+_*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=_+h*c,n[10]=s*l}else if(e.order==="YXZ"){const u=l*d,h=l*p,_=c*d,M=c*p;n[0]=u+M*o,n[4]=_*o-h,n[8]=s*c,n[1]=s*p,n[5]=s*d,n[9]=-o,n[2]=h*o-_,n[6]=M+u*o,n[10]=s*l}else if(e.order==="ZXY"){const u=l*d,h=l*p,_=c*d,M=c*p;n[0]=u-M*o,n[4]=-s*p,n[8]=_+h*o,n[1]=h+_*o,n[5]=s*d,n[9]=M-u*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const u=s*d,h=s*p,_=o*d,M=o*p;n[0]=l*d,n[4]=_*c-h,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=h*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const u=s*l,h=s*c,_=o*l,M=o*c;n[0]=l*d,n[4]=M-u*p,n[8]=_*p+h,n[1]=p,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=h*p+_,n[10]=u-M*p}else if(e.order==="XZY"){const u=s*l,h=s*c,_=o*l,M=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=u*p+M,n[5]=s*d,n[9]=h*p-_,n[2]=_*p-h,n[6]=o*d,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FA,e,BA)}lookAt(e,n,i){const a=this.elements;return Xn.subVectors(e,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),wa.crossVectors(i,Xn),wa.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),wa.crossVectors(i,Xn)),wa.normalize(),dc.crossVectors(Xn,wa),a[0]=wa.x,a[4]=dc.x,a[8]=Xn.x,a[1]=wa.y,a[5]=dc.y,a[9]=Xn.y,a[2]=wa.z,a[6]=dc.z,a[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],_=i[2],M=i[6],m=i[10],f=i[14],v=i[3],S=i[7],y=i[11],A=i[15],R=a[0],x=a[4],E=a[8],O=a[12],N=a[1],P=a[5],H=a[9],Y=a[13],L=a[2],G=a[6],F=a[10],z=a[14],J=a[3],W=a[7],D=a[11],C=a[15];return r[0]=s*R+o*N+l*L+c*J,r[4]=s*x+o*P+l*G+c*W,r[8]=s*E+o*H+l*F+c*D,r[12]=s*O+o*Y+l*z+c*C,r[1]=d*R+p*N+u*L+h*J,r[5]=d*x+p*P+u*G+h*W,r[9]=d*E+p*H+u*F+h*D,r[13]=d*O+p*Y+u*z+h*C,r[2]=_*R+M*N+m*L+f*J,r[6]=_*x+M*P+m*G+f*W,r[10]=_*E+M*H+m*F+f*D,r[14]=_*O+M*Y+m*z+f*C,r[3]=v*R+S*N+y*L+A*J,r[7]=v*x+S*P+y*G+A*W,r[11]=v*E+S*H+y*F+A*D,r[15]=v*O+S*Y+y*z+A*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],h=e[14],_=e[3],M=e[7],m=e[11],f=e[15],v=l*h-c*u,S=o*h-c*p,y=o*u-l*p,A=s*h-c*d,R=s*u-l*d,x=s*p-o*d;return n*(M*v-m*S+f*y)-i*(_*v-m*A+f*R)+a*(_*S-M*A+f*x)-r*(_*y-M*R+m*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(s*d-o*c)-i*(r*d-o*l)+a*(r*c-s*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],h=e[11],_=e[12],M=e[13],m=e[14],f=e[15],v=n*o-i*s,S=n*l-a*s,y=n*c-r*s,A=i*l-a*o,R=i*c-r*o,x=a*c-r*l,E=d*M-p*_,O=d*m-u*_,N=d*f-h*_,P=p*m-u*M,H=p*f-h*M,Y=u*f-h*m,L=v*Y-S*H+y*P+A*N-R*O+x*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*Y-l*H+c*P)*G,e[1]=(a*H-i*Y-r*P)*G,e[2]=(M*x-m*R+f*A)*G,e[3]=(u*R-p*x-h*A)*G,e[4]=(l*N-s*Y-c*O)*G,e[5]=(n*Y-a*N+r*O)*G,e[6]=(m*y-_*x-f*S)*G,e[7]=(d*x-u*y+h*S)*G,e[8]=(s*H-o*N+c*E)*G,e[9]=(i*N-n*H-r*E)*G,e[10]=(_*R-M*y+f*v)*G,e[11]=(p*y-d*R-h*v)*G,e[12]=(o*O-s*P-l*E)*G,e[13]=(n*P-i*O+a*E)*G,e[14]=(M*S-_*A-m*v)*G,e[15]=(d*A-p*S+u*v)*G,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,p=o+o,u=r*c,h=r*d,_=r*p,M=s*d,m=s*p,f=o*p,v=l*c,S=l*d,y=l*p,A=i.x,R=i.y,x=i.z;return a[0]=(1-(M+f))*A,a[1]=(h+y)*A,a[2]=(_-S)*A,a[3]=0,a[4]=(h-y)*R,a[5]=(1-(u+f))*R,a[6]=(m+v)*R,a[7]=0,a[8]=(_+S)*x,a[9]=(m-v)*x,a[10]=(1-(u+M))*x,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=rs.set(a[0],a[1],a[2]).length();const o=rs.set(a[4],a[5],a[6]).length(),l=rs.set(a[8],a[9],a[10]).length();r<0&&(s=-s),yi.copy(this);const c=1/s,d=1/o,p=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=d,yi.elements[5]*=d,yi.elements[6]*=d,yi.elements[8]*=p,yi.elements[9]*=p,yi.elements[10]*=p,n.setFromRotationMatrix(yi),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=Ri,l=!1){const c=this.elements,d=2*r/(n-e),p=2*r/(i-a),u=(n+e)/(n-e),h=(i+a)/(i-a);let _,M;if(l)_=r/(s-r),M=s*r/(s-r);else if(o===Ri)_=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(o===Tl)_=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Ri,l=!1){const c=this.elements,d=2/(n-e),p=2/(i-a),u=-(n+e)/(n-e),h=-(i+a)/(i-a);let _,M;if(l)_=1/(s-r),M=s/(s-r);else if(o===Ri)_=-2/(s-r),M=-(s+r)/(s-r);else if(o===Tl)_=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Gu.prototype.isMatrix4=!0;let Ft=Gu;const rs=new Z,yi=new Ft,FA=new Z(0,0,0),BA=new Z(1,1,1),wa=new Z,dc=new Z,Xn=new Z,gv=new Ft,vv=new _o;class dr{constructor(e=0,n=0,i=0,a=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],u=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class q1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HA=0;const xv=new Z,ss=new _o,na=new Ft,hc=new Z,Co=new Z,GA=new Z,VA=new _o,_v=new Z(1,0,0),yv=new Z(0,1,0),Sv=new Z(0,0,1),Mv={type:"added"},kA={type:"removed"},os={type:"childadded",child:null},od={type:"childremoved",child:null};class Rn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new Z,n=new dr,i=new _o,a=new Z(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Ge}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(_v,e)}rotateY(e){return this.rotateOnAxis(yv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,n){return xv.copy(e).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_v,e)}translateY(e){return this.translateOnAxis(yv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?hc.copy(e):hc.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Co,hc,this.up):na.lookAt(hc,Co,this.up),this.quaternion.setFromRotationMatrix(na),a&&(na.extractRotation(a.matrixWorld),ss.setFromRotationMatrix(na),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mv),os.child=e,this.dispatchEvent(os),os.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kA),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mv),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,GA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,VA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),u=s(e.skeletons),h=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new Z(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ca extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jA={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,_=.005;c.inputState.pinching&&u>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jA)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Y1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},pc={h:0,s:0,l:0};function cd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=rt.workingColorSpace){if(e=jm(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=cd(s,r,e+1/3),this.g=cd(s,r,e),this.b=cd(s,r,e-1/3)}return rt.colorSpaceToWorking(this,a),this}setStyle(e,n=ci){function i(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ci){const i=Y1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return rt.workingToColorSpace(Tn.copy(this),e),Math.round(tt(Tn.r*255,0,255))*65536+Math.round(tt(Tn.g*255,0,255))*256+Math.round(tt(Tn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(Tn.copy(this),n);const i=Tn.r,a=Tn.g,r=Tn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ci){rt.workingToColorSpace(Tn.copy(this),e);const n=Tn.r,i=Tn.g,a=Tn.b;return e!==ci?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+n,Da.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Da),e.getHSL(pc);const i=al(Da.h,pc.h,n),a=al(Da.s,pc.s,n),r=al(Da.l,pc.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new ot;ot.NAMES=Y1;class WA extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Si=new Z,ia=new Z,ud=new Z,aa=new Z,ls=new Z,cs=new Z,bv=new Z,fd=new Z,dd=new Z,hd=new Z,pd=new zt,md=new zt,gd=new zt;class Ti{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),Si.subVectors(e,n),a.cross(Si);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){Si.subVectors(a,n),ia.subVectors(i,n),ud.subVectors(e,n);const s=Si.dot(Si),o=Si.dot(ia),l=Si.dot(ud),c=ia.dot(ia),d=ia.dot(ud),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,h=(c*l-o*d)*u,_=(s*d-o*l)*u;return r.set(1-h-_,_,h)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,aa)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,aa.x),l.addScaledVector(s,aa.y),l.addScaledVector(o,aa.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,n),md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(pd,r.x),s.addScaledVector(md,r.y),s.addScaledVector(gd,r.z),s}static isFrontFacing(e,n,i,a){return Si.subVectors(i,n),ia.subVectors(e,n),Si.cross(ia).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Si.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return Ti.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;ls.subVectors(a,i),cs.subVectors(r,i),fd.subVectors(e,i);const l=ls.dot(fd),c=cs.dot(fd);if(l<=0&&c<=0)return n.copy(i);dd.subVectors(e,a);const d=ls.dot(dd),p=cs.dot(dd);if(d>=0&&p<=d)return n.copy(a);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0&&l-d>0)return s=l/(l-d),n.copy(i).addScaledVector(ls,s);hd.subVectors(e,r);const h=ls.dot(hd),_=cs.dot(hd);if(_>=0&&h<=_)return n.copy(r);const M=h*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(cs,o);const m=d*_-h*p;if(m<=0&&p-d>=0&&h-_>=0)return bv.subVectors(r,a),o=(p-d)/(p-d+(h-_)),n.copy(a).addScaledVector(bv,o);const f=1/(m+M+u);return s=M*f,o=u*f,n.copy(i).addScaledVector(ls,s).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hl{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Mi):Mi.fromBufferAttribute(r,s),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mc.copy(i.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),gc.subVectors(this.max,wo),us.subVectors(e.a,wo),fs.subVectors(e.b,wo),ds.subVectors(e.c,wo),Na.subVectors(fs,us),Ua.subVectors(ds,fs),Sr.subVectors(us,ds);let n=[0,-Na.z,Na.y,0,-Ua.z,Ua.y,0,-Sr.z,Sr.y,Na.z,0,-Na.x,Ua.z,0,-Ua.x,Sr.z,0,-Sr.x,-Na.y,Na.x,0,-Ua.y,Ua.x,0,-Sr.y,Sr.x,0];return!vd(n,us,fs,ds,gc)||(n=[1,0,0,0,1,0,0,0,1],!vd(n,us,fs,ds,gc))?!1:(vc.crossVectors(Na,Ua),n=[vc.x,vc.y,vc.z],vd(n,us,fs,ds,gc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Mi=new Z,mc=new Hl,us=new Z,fs=new Z,ds=new Z,Na=new Z,Ua=new Z,Sr=new Z,wo=new Z,gc=new Z,vc=new Z,Mr=new Z;function vd(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Mr.fromArray(t,r);const o=a.x*Math.abs(Mr.x)+a.y*Math.abs(Mr.y)+a.z*Math.abs(Mr.z),l=e.dot(Mr),c=n.dot(Mr),d=i.dot(Mr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Wt=new Z,xc=new it;let XA=0;class Fr extends ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=dA,this.updateRanges=[],this.gpuType=ki,this.version=0,this._normalizationScale=e!==void 0?Wm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xc.fromBufferAttribute(this,n),xc.applyMatrix3(e),this.setXY(n,xc.x,xc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),a=this._normalize(a),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):j1(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):W1(e,this.array)}}class Z1 extends Fr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class K1 extends Fr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends Fr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const qA=new Hl,Do=new Z,xd=new Z;class qm{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qA.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Do,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(xd)),this.expandByPoint(Do.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YA=0;const oi=new Ft,_d=new Rn,hs=new Z,qn=new Hl,No=new Hl,an=new Z;class Di extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hA(e)?K1:Z1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,n,i){return oi.makeTranslation(e,n,i),this.applyMatrix4(oi),this}scale(e,n,i){return oi.makeScale(e,n,i),this.applyMatrix4(oi),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];No.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(qn.min,No.min),qn.expandByPoint(an),an.addVectors(qn.max,No.max),qn.expandByPoint(an)):(qn.expandByPoint(No.min),qn.expandByPoint(No.max))}qn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)an.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(an));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)an.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(e,c),an.add(hs)),a=Math.max(a,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Fr(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new Z,l[O]=new Z;const d=new Z,p=new Z,u=new Z,h=new it,_=new it,M=new it,m=new Z,f=new Z;function v(O,N,P){c[O]=c[N]=c[P]=1,d.fromBufferAttribute(i,O),p.fromBufferAttribute(i,N),u.fromBufferAttribute(i,P),h.fromBufferAttribute(r,O),_.fromBufferAttribute(r,N),M.fromBufferAttribute(r,P),p.sub(d),u.sub(d),_.sub(h),M.sub(h);const H=1/(_.x*M.y-M.x*_.y);isFinite(H)&&(m.copy(p).multiplyScalar(M.y).addScaledVector(u,-_.y).multiplyScalar(H),f.copy(u).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(H),o[O].add(m),o[N].add(m),o[P].add(m),l[O].add(f),l[N].add(f),l[P].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,N=S.length;O<N;++O){const P=S[O],H=P.start,Y=P.count;for(let L=H,G=H+Y;L<G;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new Z,A=new Z,R=new Z,x=new Z;function E(O){R.fromBufferAttribute(a,O),x.copy(R);const N=o[O];y.copy(N),y.sub(R.multiplyScalar(R.dot(N))).normalize(),A.crossVectors(x,N);const H=A.dot(l[O])<0?-1:1;s.setXYZW(O,y.x,y.y,y.z,H)}for(let O=0,N=i.count;O<N;++O)c[O]&&E(O);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Fr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const a=new Z,r=new Z,s=new Z,o=new Z,l=new Z,c=new Z,d=new Z,p=new Z;if(e)for(let u=0,h=e.count;u<h;u+=3){const _=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,m),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let h=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?h=l[M]*o.data.stride+o.offset:h=l[M]*d;for(let f=0;f<d;f++)u[_++]=c[h++]}return new Fr(u,d,p)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Di,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=e(u,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yd=new Z,ZA=new Z,KA=new Ge;class Fa{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=yd.subVectors(i,n).cross(ZA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(yd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KA.getNormalMatrix(e),a=this.coplanarPoint(yd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let QA=0;class Gl extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=nl,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=M1,this.blendDst=b1,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nd,this.stencilZFail=nd,this.stencilZPass=nd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fa().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sa=new Z,Sd=new Z,_c=new Z,yc=new Z;class JA{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,n),sa.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Sd.copy(e).add(n).multiplyScalar(.5),_c.copy(n).sub(e).normalize(),yc.copy(this.origin).sub(Sd);const r=e.distanceTo(n)*.5,s=-this.direction.dot(_c),o=yc.dot(this.direction),l=-yc.dot(_c),c=yc.lengthSq(),d=Math.abs(1-s*s);let p,u,h,_;if(d>0)if(p=s*l-o,u=s*o-l,_=r*d,p>=0)if(u>=-_)if(u<=_){const M=1/d;p*=M,u*=M,h=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),h=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),h=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),h=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-r,-l),r),h=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),h=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),h=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Sd).addScaledVector(_c,u),h}intersectSphere(e,n){if(e.radius<0)return null;sa.subVectors(e.center,this.origin);const i=sa.dot(this.direction),a=sa.dot(sa)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,n,i,a,r){const s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,p=e.x-s.x,u=e.y-s.y,h=e.z-s.z,_=n.x-s.x,M=n.y-s.y,m=n.z-s.z,f=i.x-s.x,v=i.y-s.y,S=i.z-s.z,y=Math.abs(l),A=Math.abs(c),R=Math.abs(d);let x,E,O,N,P,H,Y,L,G,F,z,J;if(y>=A&&y>=R?(O=l,H=p,G=_,J=f,l>=0?(x=c,E=d,N=u,P=h,Y=M,L=m,F=v,z=S):(x=d,E=c,N=h,P=u,Y=m,L=M,F=S,z=v)):A>=R?(O=c,H=u,G=M,J=v,c>=0?(x=d,E=l,N=h,P=p,Y=m,L=_,F=S,z=f):(x=l,E=d,N=p,P=h,Y=_,L=m,F=f,z=S)):(O=d,H=h,G=m,J=S,d>=0?(x=l,E=c,N=p,P=u,Y=_,L=M,F=f,z=v):(x=c,E=l,N=u,P=p,Y=M,L=_,F=v,z=f)),O===0)return null;const W=x/O,D=E/O,C=1/O,ne=N-W*H,fe=P-D*H,V=Y-W*G,ie=L-D*G,oe=F-W*J,le=z-D*J,se=oe*ie-le*V,be=ne*le-fe*oe,Fe=V*fe-ie*ne;if(a){if(se<0||be<0||Fe<0)return null}else if((se<0||be<0||Fe<0)&&(se>0||be>0||Fe>0))return null;const Se=se+be+Fe;if(Se===0)return null;const Ne=C*(se*H+be*G+Fe*J);return(Se>0?Ne<0:Ne>0)?null:this.at(Ne/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bo extends Gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=E1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ev=new Ft,br=new JA,Sc=new qm,Tv=new Z,Mc=new Z,bc=new Z,Ec=new Z,Md=new Z,Tc=new Z,Av=new Z,Ac=new Z;class bt extends Rn{constructor(e=new Di,n=new Bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Tc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],p=r[l];d!==0&&(Md.fromBufferAttribute(p,e),s?Tc.addScaledVector(Md,d):Tc.addScaledVector(Md.sub(n),d))}n.add(Tc)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(r),br.copy(e.ray).recast(e.near),!(Sc.containsPoint(br.origin)===!1&&(br.intersectSphere(Sc,Tv)===null||br.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(r).invert(),br.copy(e.ray).applyMatrix4(Ev),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,M=u.length;_<M;_++){const m=u[_],f=s[m.materialIndex],v=Math.max(m.start,h.start),S=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=v,A=S;y<A;y+=3){const R=o.getX(y),x=o.getX(y+1),E=o.getX(y+2);a=Rc(this,f,e,i,c,d,p,R,x,E),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let m=_,f=M;m<f;m+=3){const v=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);a=Rc(this,s,e,i,c,d,p,v,S,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,M=u.length;_<M;_++){const m=u[_],f=s[m.materialIndex],v=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=v,A=S;y<A;y+=3){const R=y,x=y+1,E=y+2;a=Rc(this,f,e,i,c,d,p,R,x,E),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let m=_,f=M;m<f;m+=3){const v=m,S=m+1,y=m+2;a=Rc(this,s,e,i,c,d,p,v,S,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function $A(t,e,n,i,a,r,s,o){let l;if(e.side===kn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===qr,o),l===null)return null;Ac.copy(o),Ac.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ac);return c<n.near||c>n.far?null:{distance:c,point:Ac.clone(),object:t}}function Rc(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,Mc),t.getVertexPosition(l,bc),t.getVertexPosition(c,Ec);const d=$A(t,e,n,i,Mc,bc,Ec,Av);if(d){const p=new Z;Ti.getBarycoord(Av,Mc,bc,Ec,p),a&&(d.uv=Ti.getInterpolatedAttribute(a,o,l,c,p,new it)),r&&(d.uv1=Ti.getInterpolatedAttribute(r,o,l,c,p,new it)),s&&(d.normal=Ti.getInterpolatedAttribute(s,o,l,c,p,new Z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new Z,materialIndex:0};Ti.getNormal(Mc,bc,Ec,u.normal),d.face=u,d.barycoord=p}return d}class eR extends Pn{constructor(e=null,n=1,i=1,a,r,s,o,l,c=gn,d=gn,p,u){super(null,s,o,l,c,d,a,r,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Er=new qm,tR=new it(.5,.5),Cc=new Z;class Rl{constructor(e=new Fa,n=new Fa,i=new Fa,a=new Fa,r=new Fa,s=new Fa){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],u=r[6],h=r[7],_=r[8],M=r[9],m=r[10],f=r[11],v=r[12],S=r[13],y=r[14],A=r[15];if(a[0].setComponents(c-s,h-d,f-_,A-v).normalize(),a[1].setComponents(c+s,h+d,f+_,A+v).normalize(),a[2].setComponents(c+o,h+p,f+M,A+S).normalize(),a[3].setComponents(c-o,h-p,f-M,A-S).normalize(),i)a[4].setComponents(l,u,m,y).normalize(),a[5].setComponents(c-l,h-u,f-m,A-y).normalize();else if(a[4].setComponents(c-l,h-u,f-m,A-y).normalize(),n===Ri)a[5].setComponents(c+l,h+u,f+m,A+y).normalize();else if(n===Tl)a[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const n=tR.distanceTo(e.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Cc.x=a.normal.x>0?e.max.x:e.min.x,Cc.y=a.normal.y>0?e.max.y:e.min.y,Cc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Rv=new Ft;class Ym{constructor(){this.coordinateSystem=Ri,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let a=0;a<n.length;a++){const r=n[a];Rv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[a]===void 0&&(i[a]=new Rl),i[a].setFromProjectionMatrix(Rv,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let a=0;a<e._count;a++)n[a]===void 0&&(n[a]=new Rl),n[a].copy(i[a]);return this._count=e._count,this}clone(){return new Ym().copy(this)}}class Q1 extends Pn{constructor(e=[],n=ao,i,a,r,s,o,l,c,d){super(e,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class so extends Pn{constructor(e,n,i=Zi,a,r,s,o=gn,l=gn,c,d=fr,p=1){if(d!==fr&&d!==Ya)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class J1 extends so{constructor(e,n=Zi,i=ao,a,r,s=gn,o=gn,l,c=fr){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,a,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $1 extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rr extends Di{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],p=[];let u=0,h=0;_("z","y","x",-1,-1,i,n,e,s,r,0),_("z","y","x",1,-1,i,n,-e,s,r,1),_("x","z","y",1,1,e,i,n,a,s,2),_("x","z","y",1,-1,e,i,-n,a,s,3),_("x","y","z",1,-1,e,n,i,a,r,4),_("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(p,2));function _(M,m,f,v,S,y,A,R,x,E,O){const N=y/x,P=A/E,H=y/2,Y=A/2,L=R/2,G=x+1,F=E+1;let z=0,J=0;const W=new Z;for(let D=0;D<F;D++){const C=D*P-Y;for(let ne=0;ne<G;ne++){const fe=ne*N-H;W[M]=fe*v,W[m]=C*S,W[f]=L,c.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[f]=R>0?1:-1,d.push(W.x,W.y,W.z),p.push(ne/x),p.push(1-D/E),z+=1}}for(let D=0;D<E;D++)for(let C=0;C<x;C++){const ne=u+C+G*D,fe=u+C+G*(D+1),V=u+(C+1)+G*(D+1),ie=u+(C+1)+G*D;l.push(ne,fe,ie),l.push(fe,V,ie),J+=6}o.addGroup(h,J,O),h+=J,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ur extends Di{constructor(e=1,n=1,i=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),r=Math.floor(r);const d=[],p=[],u=[],h=[];let _=0;const M=[],m=i/2;let f=0;v(),s===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function v(){const y=new Z,A=new Z;let R=0;const x=(n-e)/i;for(let E=0;E<=r;E++){const O=[],N=E/r,P=N*(n-e)+e;for(let H=0;H<=a;H++){const Y=H/a,L=Y*l+o,G=Math.sin(L),F=Math.cos(L);A.x=P*G,A.y=-N*i+m,A.z=P*F,p.push(A.x,A.y,A.z),y.set(G,x,F).normalize(),u.push(y.x,y.y,y.z),h.push(Y,1-N),O.push(_++)}M.push(O)}for(let E=0;E<a;E++)for(let O=0;O<r;O++){const N=M[O][E],P=M[O+1][E],H=M[O+1][E+1],Y=M[O][E+1];(e>0||O!==0)&&(d.push(N,P,Y),R+=3),(n>0||O!==r-1)&&(d.push(P,H,Y),R+=3)}c.addGroup(f,R,0),f+=R}function S(y){const A=_,R=new it,x=new Z;let E=0;const O=y===!0?e:n,N=y===!0?1:-1;for(let H=1;H<=a;H++)p.push(0,m*N,0),u.push(0,N,0),h.push(.5,.5),_++;const P=_;for(let H=0;H<=a;H++){const L=H/a*l+o,G=Math.cos(L),F=Math.sin(L);x.x=O*F,x.y=m*N,x.z=O*G,p.push(x.x,x.y,x.z),u.push(0,N,0),R.x=G*.5+.5,R.y=F*.5*N+.5,h.push(R.x,R.y),_++}for(let H=0;H<a;H++){const Y=A+H,L=P+H;y===!0?d.push(L,L+1,Y):d.push(L+1,L,Y),E+=3}c.addGroup(f,E,y===!0?1:2),f+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zm extends Ur{constructor(e=1,n=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,n,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Zm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ff extends Di{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,p=e/o,u=n/l,h=[],_=[],M=[],m=[];for(let f=0;f<d;f++){const v=f*u-s;for(let S=0;S<c;S++){const y=S*p-r;_.push(y,-v,0),M.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const S=v+c*f,y=v+c*(f+1),A=v+1+c*(f+1),R=v+1+c*f;h.push(S,y,R),h.push(y,A,R)}this.setIndex(h),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bu extends Di{constructor(e=.5,n=1,i=32,a=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:a,thetaStart:r,thetaLength:s},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],c=[],d=[];let p=e;const u=(n-e)/a,h=new Z,_=new it;for(let M=0;M<=a;M++){for(let m=0;m<=i;m++){const f=r+m/i*s;h.x=p*Math.cos(f),h.y=p*Math.sin(f),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/n+1)/2,_.y=(h.y/n+1)/2,d.push(_.x,_.y)}p+=u}for(let M=0;M<a;M++){const m=M*(i+1);for(let f=0;f<i;f++){const v=f+m,S=v,y=v+i+1,A=v+i+2,R=v+1;o.push(S,y,R),o.push(y,A,R)}}this.setIndex(o),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rl extends Di{constructor(e=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const d=[],p=new Z,u=new Z,h=[],_=[],M=[],m=[];for(let f=0;f<=i;f++){const v=[],S=f/i,y=s+S*o,A=e*Math.cos(y),R=Math.sqrt(e*e-A*A);let x=0;f===0&&s===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let E=0;E<=n;E++){const O=E/n,N=a+O*r;p.x=-R*Math.cos(N),p.y=A,p.z=R*Math.sin(N),_.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),m.push(O+x,1-S),v.push(c++)}d.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const S=d[f][v+1],y=d[f][v],A=d[f+1][v],R=d[f+1][v+1];(f!==0||s>0)&&h.push(S,y,R),(f!==i-1||l<Math.PI)&&h.push(y,A,R)}this.setIndex(h),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wr extends Di{constructor(e=1,n=.4,i=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const l=[],c=[],d=[],p=[],u=new Z,h=new Z,_=new Z;for(let M=0;M<=i;M++){const m=s+M/i*o;for(let f=0;f<=a;f++){const v=f/a*r;h.x=(e+n*Math.cos(m))*Math.cos(v),h.y=(e+n*Math.cos(m))*Math.sin(v),h.z=n*Math.sin(m),c.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),_.subVectors(h,u).normalize(),d.push(_.x,_.y,_.z),p.push(f/a),p.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=a;m++){const f=(a+1)*M+m-1,v=(a+1)*(M-1)+m-1,S=(a+1)*(M-1)+m,y=(a+1)*M+m;l.push(f,v,y),l.push(v,S,y)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(Cv(a))a.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(Cv(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function Un(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const a in i)e[a]=i[a]}return e}function Cv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function nR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function eM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const iR={clone:oo,merge:Un};var aR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zr extends Gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aR,this.fragmentShader=rR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=nR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(a.value);break;case"v2":this.uniforms[i].value=new it().fromArray(a.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(a.value);break;case"v4":this.uniforms[i].value=new zt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Ft().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sR extends Zr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tr extends Gl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oR extends Gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lR extends Gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Km extends Rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const bd=new Ft,wv=new Z,Dv=new Z;class tM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;wv.setFromMatrixPosition(e.matrixWorld),n.position.copy(wv),Dv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dv),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,a){bd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(bd,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,l=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===Tl||e.reversedDepth?n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wc=new Z,Dc=new _o,Oi=new Z;class nM extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(wc,Dc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const La=new Z,Nv=new it,Uv=new it;class di extends nM{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(La.x,La.y).multiplyScalar(-e/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-e/La.z)}getViewSize(e,n){return this.getViewBounds(e,Nv,Uv),n.subVectors(Uv,Nv)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(il*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cR extends tM{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}}class uR extends Km{constructor(e,n,i=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new cR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class iM extends nM{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class fR extends tM{constructor(){super(new iM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lv extends Km{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new fR}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class dR extends Km{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ps=-90,ms=1;class Rp extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new di(ps,ms,e,n);a.layers=this.layers,this.add(a);const r=new di(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new di(ps,ms,e,n);s.layers=this.layers,this.add(s);const o=new di(ps,ms,e,n);o.layers=this.layers,this.add(o);const l=new di(ps,ms,e,n);l.layers=this.layers,this.add(l);const c=new di(ps,ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,u,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class hR extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class pR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ov(t,e,n,i){const a=mR(i);switch(n){case I1:return t*e;case F1:return t*e/a.components*a.byteLength;case Gm:return t*e/a.components*a.byteLength;case Yr:return t*e*2/a.components*a.byteLength;case Vm:return t*e*2/a.components*a.byteLength;case z1:return t*e*3/a.components*a.byteLength;case ji:return t*e*4/a.components*a.byteLength;case km:return t*e*4/a.components*a.byteLength;case $c:case eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:case $h:return Math.max(t,16)*Math.max(e,8)/4;case Kh:case Jh:return Math.max(t,8)*Math.max(e,8)/2;case ep:case tp:case ip:case ap:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case np:case Ou:case rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _p:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yp:case Sp:case Mp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case bp:case Ep:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pu:case Tp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mR(t){switch(t){case Jn:case U1:return{byteLength:1,components:1};case El:case L1:case Ki:return{byteLength:2,components:1};case Bm:case Hm:return{byteLength:2,components:4};case Zi:case Fm:case ki:return{byteLength:4,components:1};case O1:case P1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Im}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Im);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function aM(){let t=null,e=!1,n=null,i=null;function a(r,s){i=t.requestAnimationFrame(a),n(r,s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function gR(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,d);else{p.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<p.length;h++){const _=p[u],M=p[h];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,p[u]=M)}p.length=u+1;for(let h=0,_=p.length;h<_;h++){const M=p[h];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var vR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xR=`#ifdef USE_ALPHAHASH
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
#endif`,_R=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bR=`#ifdef USE_AOMAP
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
#endif`,ER=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TR=`#ifdef USE_BATCHING
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
#endif`,AR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DR=`#ifdef USE_IRIDESCENCE
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
#endif`,NR=`#ifdef USE_BUMPMAP
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
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,HR=`#define PI 3.141592653589793
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
} // validated`,GR=`vec3 transformedNormal = objectNormal;
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
#endif`,VR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XR="gl_FragColor = linearToOutputTexel( gl_FragColor );",qR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YR=`#ifdef USE_ENVMAP
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
#endif`,ZR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,KR=`#ifdef USE_ENVMAP
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
#endif`,QR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JR=`#ifdef USE_ENVMAP
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
#endif`,$R=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i3=`#ifdef USE_GRADIENTMAP
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
}`,a3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o3=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l3=`#ifdef USE_ENVMAP
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
#endif`,c3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h3=`PhysicalMaterial material;
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
#endif`,p3=`uniform sampler2D dfgLUT;
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
}`,m3=`
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
#endif`,g3=`#if defined( RE_IndirectDiffuse )
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
#endif`,v3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x3=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,_3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A3=`#if defined( USE_POINTS_UV )
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
#endif`,R3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D3=`#if defined( USE_MORPHCOLORS )
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
#endif`,N3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U3=`#ifdef USE_MORPHTARGETS
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
#endif`,L3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B3=`#ifdef USE_NORMALMAP
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
#endif`,H3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tC=`float getShadowMask() {
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
}`,nC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iC=`#ifdef USE_SKINNING
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
#endif`,aC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rC=`#ifdef USE_SKINNING
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
#endif`,sC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uC=`#ifdef USE_TRANSMISSION
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
#endif`,fC=`#ifdef USE_TRANSMISSION
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
#endif`,dC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vC=`uniform sampler2D t2D;
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
}`,xC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform float backgroundBlurriness;
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
}`,yC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MC=`#include <common>
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
}`,bC=`#if DEPTH_PACKING == 3200
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
}`,EC=`#define DISTANCE
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
}`,TC=`#define DISTANCE
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
}`,AC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CC=`uniform float scale;
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
}`,wC=`uniform vec3 diffuse;
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
}`,DC=`#include <common>
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
}`,NC=`uniform vec3 diffuse;
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
}`,UC=`#define LAMBERT
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
}`,LC=`#define LAMBERT
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
}`,OC=`#define MATCAP
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
}`,PC=`#define MATCAP
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
}`,IC=`#define NORMAL
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
}`,zC=`#define NORMAL
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
}`,FC=`#define PHONG
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
}`,BC=`#define PHONG
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
}`,HC=`#define STANDARD
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
}`,GC=`#define STANDARD
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
}`,VC=`#define TOON
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
}`,kC=`#define TOON
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
}`,jC=`uniform float size;
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
}`,WC=`uniform vec3 diffuse;
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
}`,XC=`#include <common>
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
}`,qC=`uniform vec3 color;
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
}`,YC=`uniform float rotation;
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
}`,ZC=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:vR,alphahash_pars_fragment:xR,alphamap_fragment:_R,alphamap_pars_fragment:yR,alphatest_fragment:SR,alphatest_pars_fragment:MR,aomap_fragment:bR,aomap_pars_fragment:ER,batching_pars_vertex:TR,batching_vertex:AR,begin_vertex:RR,beginnormal_vertex:CR,bsdfs:wR,iridescence_fragment:DR,bumpmap_pars_fragment:NR,clipping_planes_fragment:UR,clipping_planes_pars_fragment:LR,clipping_planes_pars_vertex:OR,clipping_planes_vertex:PR,color_fragment:IR,color_pars_fragment:zR,color_pars_vertex:FR,color_vertex:BR,common:HR,defaultnormal_vertex:GR,displacementmap_pars_vertex:VR,displacementmap_vertex:kR,emissivemap_fragment:jR,emissivemap_pars_fragment:WR,colorspace_fragment:XR,colorspace_pars_fragment:qR,envmap_fragment:YR,envmap_common_pars_fragment:ZR,envmap_pars_fragment:KR,envmap_pars_vertex:QR,envmap_physical_pars_fragment:l3,envmap_vertex:JR,fog_vertex:$R,fog_pars_vertex:e3,fog_fragment:t3,fog_pars_fragment:n3,gradientmap_pars_fragment:i3,lightmap_pars_fragment:a3,lights_lambert_fragment:r3,lights_lambert_pars_fragment:s3,lights_pars_begin:o3,lights_toon_fragment:c3,lights_toon_pars_fragment:u3,lights_phong_fragment:f3,lights_phong_pars_fragment:d3,lights_physical_fragment:h3,lights_physical_pars_fragment:p3,lights_fragment_begin:m3,lights_fragment_maps:g3,lights_fragment_end:v3,lightprobes_pars_fragment:x3,logdepthbuf_fragment:_3,logdepthbuf_pars_fragment:y3,logdepthbuf_pars_vertex:S3,logdepthbuf_vertex:M3,map_fragment:b3,map_pars_fragment:E3,map_particle_fragment:T3,map_particle_pars_fragment:A3,metalnessmap_fragment:R3,metalnessmap_pars_fragment:C3,morphinstance_vertex:w3,morphcolor_vertex:D3,morphnormal_vertex:N3,morphtarget_pars_vertex:U3,morphtarget_vertex:L3,normal_fragment_begin:O3,normal_fragment_maps:P3,normal_pars_fragment:I3,normal_pars_vertex:z3,normal_vertex:F3,normalmap_pars_fragment:B3,clearcoat_normal_fragment_begin:H3,clearcoat_normal_fragment_maps:G3,clearcoat_pars_fragment:V3,iridescence_pars_fragment:k3,opaque_fragment:j3,packing:W3,premultiplied_alpha_fragment:X3,project_vertex:q3,dithering_fragment:Y3,dithering_pars_fragment:Z3,roughnessmap_fragment:K3,roughnessmap_pars_fragment:Q3,shadowmap_pars_fragment:J3,shadowmap_pars_vertex:$3,shadowmap_vertex:eC,shadowmask_pars_fragment:tC,skinbase_vertex:nC,skinning_pars_vertex:iC,skinning_vertex:aC,skinnormal_vertex:rC,specularmap_fragment:sC,specularmap_pars_fragment:oC,tonemapping_fragment:lC,tonemapping_pars_fragment:cC,transmission_fragment:uC,transmission_pars_fragment:fC,uv_pars_fragment:dC,uv_pars_vertex:hC,uv_vertex:pC,worldpos_vertex:mC,background_vert:gC,background_frag:vC,backgroundCube_vert:xC,backgroundCube_frag:_C,cube_vert:yC,cube_frag:SC,depth_vert:MC,depth_frag:bC,distance_vert:EC,distance_frag:TC,equirect_vert:AC,equirect_frag:RC,linedashed_vert:CC,linedashed_frag:wC,meshbasic_vert:DC,meshbasic_frag:NC,meshlambert_vert:UC,meshlambert_frag:LC,meshmatcap_vert:OC,meshmatcap_frag:PC,meshnormal_vert:IC,meshnormal_frag:zC,meshphong_vert:FC,meshphong_frag:BC,meshphysical_vert:HC,meshphysical_frag:GC,meshtoon_vert:VC,meshtoon_frag:kC,points_vert:jC,points_frag:WC,shadow_vert:XC,shadow_frag:qC,sprite_vert:YC,sprite_frag:ZC},Te={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},zi={basic:{uniforms:Un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Un([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Un([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Un([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Un([Te.points,Te.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Un([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Un([Te.common,Te.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Un([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Un([Te.sprite,Te.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Un([Te.common,Te.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Un([Te.lights,Te.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};zi.physical={uniforms:Un([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Nc={r:0,b:0,g:0},KC=new Ft,rM=new Ge;rM.set(-1,0,0,0,1,0,0,0,1);function QC(t,e,n,i,a,r){const s=new ot(0);let o=a===!0?0:1,l,c,d=null,p=0,u=null;function h(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function _(v){let S=!1;const y=h(v);y===null?m(s,o):y&&y.isColor&&(m(y,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(v,S){const y=h(S);y&&y.isCubeTexture?(c===void 0&&(c=new bt(new rr(1,1,1),new Zr({name:"BackgroundCubeMaterial",uniforms:oo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KC.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rM),c.material.toneMapped=rt.getTransfer(y.colorSpace)!==_t,(d!==y||p!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new bt(new ff(2,2),new Zr({name:"BackgroundMaterial",uniforms:oo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=rt.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(Nc,eM(t)),n.buffers.color.setClear(Nc.r,Nc.g,Nc.b,S,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(v,S=1){s.set(v),o=S,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(s,o)},render:_,addToRenderList:M,dispose:f}}function JC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,s=!1;function o(P,H,Y,L,G){let F=!1;const z=p(P,L,Y,H);r!==z&&(r=z,c(r.object)),F=h(P,L,Y,G),F&&_(P,L,Y,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(F||s)&&(s=!1,y(P,H,Y,L),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function p(P,H,Y,L){const G=L.wireframe===!0;let F=i[H.id];F===void 0&&(F={},i[H.id]=F);const z=P.isInstancedMesh===!0?P.id:0;let J=F[z];J===void 0&&(J={},F[z]=J);let W=J[Y.id];W===void 0&&(W={},J[Y.id]=W);let D=W[G];return D===void 0&&(D=u(l()),W[G]=D),D}function u(P){const H=[],Y=[],L=[];for(let G=0;G<n;G++)H[G]=0,Y[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:L,object:P,attributes:{},index:null}}function h(P,H,Y,L){const G=r.attributes,F=H.attributes;let z=0;const J=Y.getAttributes();for(const W in J)if(J[W].location>=0){const C=G[W];let ne=F[W];if(ne===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),C===void 0||C.attribute!==ne||ne&&C.data!==ne.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function _(P,H,Y,L){const G={},F=H.attributes;let z=0;const J=Y.getAttributes();for(const W in J)if(J[W].location>=0){let C=F[W];C===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(C=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(C=P.instanceColor));const ne={};ne.attribute=C,C&&C.data&&(ne.data=C.data),G[W]=ne,z++}r.attributes=G,r.attributesNum=z,r.index=L}function M(){const P=r.newAttributes;for(let H=0,Y=P.length;H<Y;H++)P[H]=0}function m(P){f(P,0)}function f(P,H){const Y=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;Y[P]=1,L[P]===0&&(t.enableVertexAttribArray(P),L[P]=1),G[P]!==H&&(t.vertexAttribDivisor(P,H),G[P]=H)}function v(){const P=r.newAttributes,H=r.enabledAttributes;for(let Y=0,L=H.length;Y<L;Y++)H[Y]!==P[Y]&&(t.disableVertexAttribArray(Y),H[Y]=0)}function S(P,H,Y,L,G,F,z){z===!0?t.vertexAttribIPointer(P,H,Y,G,F):t.vertexAttribPointer(P,H,Y,L,G,F)}function y(P,H,Y,L){M();const G=L.attributes,F=Y.getAttributes(),z=H.defaultAttributeValues;for(const J in F){const W=F[J];if(W.location>=0){let D=G[J];if(D===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(D=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(D=P.instanceColor)),D!==void 0){const C=D.normalized,ne=D.itemSize,fe=e.get(D);if(fe===void 0)continue;const V=fe.buffer,ie=fe.type,oe=fe.bytesPerElement,le=ie===t.INT||ie===t.UNSIGNED_INT||D.gpuType===Fm;if(D.isInterleavedBufferAttribute){const se=D.data,be=se.isInterleavedBuffer===!0?se.stride:se.itemSize,Fe=D.offset;if(se.isInstancedInterleavedBuffer||se.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)f(W.location+Se,se.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se);t.bindBuffer(t.ARRAY_BUFFER,V);for(let Se=0;Se<W.locationSize;Se++)S(W.location+Se,ne/W.locationSize,ie,C,be*oe,(Fe+ne/W.locationSize*Se)*oe,le)}else{if(D.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)f(W.location+se,D.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let se=0;se<W.locationSize;se++)m(W.location+se);t.bindBuffer(t.ARRAY_BUFFER,V);for(let se=0;se<W.locationSize;se++)S(W.location+se,ne/W.locationSize,ie,C,ne*oe,ne/W.locationSize*se*oe,le)}}else if(z!==void 0){const C=z[J];if(C!==void 0)switch(C.length){case 2:t.vertexAttrib2fv(W.location,C);break;case 3:t.vertexAttrib3fv(W.location,C);break;case 4:t.vertexAttrib4fv(W.location,C);break;default:t.vertexAttrib1fv(W.location,C)}}}}v()}function A(){O();for(const P in i){const H=i[P];for(const Y in H){const L=H[Y];for(const G in L){const F=L[G];for(const z in F)d(F[z].object),delete F[z];delete L[G]}}delete i[P]}}function R(P){if(i[P.id]===void 0)return;const H=i[P.id];for(const Y in H){const L=H[Y];for(const G in L){const F=L[G];for(const z in F)d(F[z].object),delete F[z];delete L[G]}}delete i[P.id]}function x(P){for(const H in i){const Y=i[H];for(const L in Y){const G=Y[L];if(G[P.id]===void 0)continue;const F=G[P.id];for(const z in F)d(F[z].object),delete F[z];delete G[P.id]}}}function E(P){for(const H in i){const Y=i[H],L=P.isInstancedMesh===!0?P.id:0,G=Y[L];if(G!==void 0){for(const F in G){const z=G[F];for(const J in z)d(z[J].object),delete z[J];delete G[F]}delete Y[L],Object.keys(Y).length===0&&delete i[H]}}}function O(){N(),s=!0,r!==a&&(r=a,c(r.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:O,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function $C(t,e,n){let i;function a(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];n.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function ew(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(x){return!(x!==ji&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const E=x===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Jn&&x!==ki&&!E&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Be("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:A,samples:R}}function tw(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new Fa,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,h){const _=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,f=t.get(p);if(!a||_===null||_.length===0||r&&!m)r?d(null):c();else{const v=r?0:i,S=v*4;let y=f.clippingState||null;l.value=y,y=d(_,u,S,h);for(let A=0;A!==S;++A)y[A]=n[A];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,h,_){const M=p!==null?p.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const f=h+M*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,y=h;S!==M;++S,y+=4)s.copy(p[S]).applyMatrix4(v,o),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}class Qm extends qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Q1(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new rr(5,5,5),r=new Zr({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:ks});r.uniforms.tEquirect.value=n;const s=new bt(a,r),o=n.minFilter;return n.minFilter===qa&&(n.minFilter=Gn),new Rp(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}const Pv=256,nw=3,iw=20,sM=256,oM=16,aw=3,rw=new Z,sw=new ot;class Hu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rp(1,10,null),this._boxMesh=new bt(new rr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=rw}=r,l=this._renderer;this._setSize(s);const c=this._allocateTarget(),d=this._getSourceTarget(!0);n>0&&(d.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,u=l.autoClearColor,h=l.autoClearDepth,_=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(sw));const m=new Rp(i,a,d);return m.position.copy(o),m.update(l,e),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=h,l.autoClearStencil=_,e.background=M,n>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Pv,k1(e))}_fromTexture(e,n){e.mapping===ao||e.mapping===bl?this._setSize(e.image.length===0?Pv:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Iv(e,!1,!1),i=Math.log2(e)-nw;for(let a=0;a<=i;a++)n.texture.mipmaps.push({width:e>>a,height:e>>a});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Iv(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const a=this._boxMesh,r=this._cubeCamera;a.material=i,r.renderTarget=e,r.activeMipmapLevel=n;const s=e.width>>n;e.viewport.set(0,0,s,s),r.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===ao||e.mapping===bl?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zv()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ow(),this._integrationMaterial=lw());const n=this._cubeSize,i=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/oM);for(let s=0;s<=i;s++){const o=Hu.lodToRoughness(s,i);if(s>i-aw)r.roughness.value=o,this._renderCube(e,s,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(sM*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(e,s,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=cw());const i=this._blurMaterial,a=i.uniforms,r=this._sourceTarget;a.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,a.envMap.value=r.texture,this._renderCube(e,0,i),a.envMap.value=e.texture,this._renderCube(r,0,i)}}function Iv(t,e,n){return new Qm(t,{minFilter:qa,generateMipmaps:e,type:Ki,colorSpace:Iu,depthBuffer:n})}function Vl(t,e,n){return new Zr({name:t,uniforms:e,vertexShader:Ye.cube_vert,fragmentShader:n,side:kn,blending:ks,depthTest:!1,depthWrite:!1})}function ow(){return Vl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sM}u

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
	`)}function lw(){return Vl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:oM}},`

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
	`)}function cw(){return Vl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${iw}
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
	`)}function zv(){return Vl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Fv(){return Vl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function uw(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?s(u):r(u)}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===$f||h===ed)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new Qm(_.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const h=u.mapping,_=h===$f||h===ed,M=h===ao||h===bl;if(_||M){let m=n.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Hu(t)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return _&&v&&v.height>0||M&&v&&l(v)?(i===null&&(i=new Hu(t)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,h){return h===$f?u.mapping=ao:h===ed&&(u.mapping=bl),u}function l(u){let h=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&h++;return h===_}function c(u){const h=u.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const _=n.get(h);_!==void 0&&(n.delete(h),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function fw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&iu("WebGLRenderer: "+i+" extension not supported."),a}}}function dw(t,e,n,i){const a={},r=new WeakMap,s=new FinalizationRegistry(_=>delete a[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete a[_.id],s.unregister(_);const M=r.get(_);M&&(e.remove(M),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(_,M){return a[M.id]!==void 0||(M.addEventListener("dispose",o),a[M.id]=new WeakRef(M),s.register(M,M.id,M),n.memory.geometries++),M}function d(_){const M=_.attributes;for(const m in M)e.update(M[m],t.ARRAY_BUFFER)}function p(_){const M=_.index,m=_.attributes.position;let f=0;if(m===void 0)return;const v=M!==null?M.array.length:m.array.length/3-1,S=m.count>=65535?K1:Z1,y=new S(Math.ceil(v/3)*6,1),A=y.array;if(M!==null){const x=M.array;f=M.version;for(let E=0,O=0;E<v;E+=3){const N=x[E+0],P=x[E+1],H=x[E+2];A[O++]=N,A[O++]=P,A[O++]=P,A[O++]=H,A[O++]=H,A[O++]=N}}else{f=m.version;for(let x=0,E=0;x<v;x+=3){const O=x+0,N=x+1,P=x+2;A[E++]=O,A[E++]=N,A[E++]=N,A[E++]=P,A[E++]=P,A[E++]=O}}y.version=f;const R=r.get(_);R&&e.remove(R),r.set(_,y)}function u(_){const M=r.get(_);if(M){const m=_.index;m!==null&&M.version<m.version&&p(_)}else p(_);return r.get(_)}function h(){for(const _ in a){const M=a[_].deref();M!==void 0&&l(M)}}return{get:c,update:d,getWireframeAttribute:u,dispose:h}}function hw(t,e,n){let i;function a(p){i=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){t.drawElements(i,u,r,p*s),n.update(u,i,1)}function c(p,u,h){h!==0&&(t.drawElementsInstanced(i,u,r,p*s,h),n.update(u,i,h))}function d(p,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,h);let M=0;for(let m=0;m<h;m++)M+=u[m];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function pw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:ht("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function mw(t,e,n){const i=new WeakMap,a=new zt;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let N=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var h=N;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),M===!0&&(y=2),m===!0&&(y=3);let A=o.attributes.position.count*y,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const x=new Float32Array(A*R*4*p),E=new X1(x,A,R,p);E.type=ki,E.needsUpdate=!0;const O=y*4;for(let P=0;P<p;P++){const H=f[P],Y=v[P],L=S[P],G=A*R*4*P;for(let F=0;F<H.count;F++){const z=F*O;_===!0&&(a.fromBufferAttribute(H,F),x[G+z+0]=a.x,x[G+z+1]=a.y,x[G+z+2]=a.z,x[G+z+3]=0),M===!0&&(a.fromBufferAttribute(Y,F),x[G+z+4]=a.x,x[G+z+5]=a.y,x[G+z+6]=a.z,x[G+z+7]=0),m===!0&&(a.fromBufferAttribute(L,F),x[G+z+8]=a.x,x[G+z+9]=a.y,x[G+z+10]=a.z,x[G+z+11]=L.itemSize===4?a.w:1)}}u={count:p,texture:E,size:new it(A,R)},i.set(o,u),o.addEventListener("dispose",N)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function gw(t,e,n,i,a){let r=new WeakMap;function s(c){const d=a.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:o}}const vw={[T1]:"LINEAR_TONE_MAPPING",[A1]:"REINHARD_TONE_MAPPING",[R1]:"CINEON_TONE_MAPPING",[zm]:"ACES_FILMIC_TONE_MAPPING",[w1]:"AGX_TONE_MAPPING",[D1]:"NEUTRAL_TONE_MAPPING",[C1]:"CUSTOM_TONE_MAPPING"};function xw(t,e,n,i,a,r){const s=new qi(e,n,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new Di;d.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new kt([0,2,0,0,2,0],2));const p=new sR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new bt(d,p),h=new iM(-1,1,1,-1,0,1);let _=null,M=null,m=!1,f,v=null,S=[],y=!1;this.setSize=function(A,R){s.setSize(A,R),o!==null&&o.setSize(A,R),l!==null&&l.setSize(A,R);for(let x=0;x<S.length;x++){const E=S[x];E.setSize&&E.setSize(A,R)}},this.setEffects=function(A){S=A,y=S.length>0&&S[0].isRenderPass===!0;const R=s.width,x=s.height;S.length>0&&o===null&&(o=new qi(R,x,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),l=new qi(R,x,{type:Ki,depthBuffer:!1,stencilBuffer:!1}));const E=a===!0&&S.some(O=>O.needsDepthTexture===!0);E!==(s.depthTexture!==null)&&(E===!0&&c===null&&(c=new so(R,x),r===!0&&(c.format=Ya,c.type=ro)),s.dispose(),s.depthTexture=E?c:null,s.resolveDepthBuffer=E,s.storeMultisampledDepthBuffer=E);for(let O=0;O<S.length;O++){const N=S[O];N.setSize&&N.setSize(R,x),E&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(A,R){if(m||A.toneMapping===pa&&S.length===0)return!1;if(v=R,R!==null){const x=R.width,E=R.height;(s.width!==x||s.height!==E)&&this.setSize(x,E)}return y===!1&&A.setRenderTarget(s),f=A.toneMapping,A.toneMapping=pa,!0},this.hasRenderPass=function(){return y},this.end=function(A,R){A.toneMapping=f,m=!0;let x=s,E=o;for(let O=0;O<S.length;O++){const N=S[O];N.enabled!==!1&&(N.render(A,E,x,R),N.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(_!==A.outputColorSpace||M!==A.toneMapping){_=A.outputColorSpace,M=A.toneMapping,p.defines={},rt.getTransfer(_)===_t&&(p.defines.SRGB_TRANSFER="");const O=vw[M];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(v),A.render(u,h),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),p.dispose()}}const lM=new Pn,cM=new so(1,1),uM=new J1(1),fM=new X1,dM=new zA,hM=new Q1,Bv=[],Hv=[],Gv=new Float32Array(16),Vv=new Float32Array(9),kv=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=Bv[a];if(r===void 0&&(r=new Float32Array(a),Bv[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function df(t,e){let n=Hv[e];n===void 0&&(n=new Int32Array(e),Hv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function bw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Jt(n,i))return;kv.set(i),t.uniformMatrix2fv(this.addr,!1,kv),$t(n,i)}}function Ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Jt(n,i))return;Vv.set(i),t.uniformMatrix3fv(this.addr,!1,Vv),$t(n,i)}}function Tw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Jt(n,i))return;Gv.set(i),t.uniformMatrix4fv(this.addr,!1,Gv),$t(n,i)}}function Aw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function Dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function hf(t){return t.version===0&&(t.compareFunction=G1,t.needsUpdate=!0),t}function Ow(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?r=hf(cM):r=lM,n.setTexture2D(e||r,a)}function Pw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||dM,a)}function Iw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=hf(uM):r=hM,n.setTextureCube(e||r,a)}function zw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||fM,a)}function Fw(t){switch(t){case 5126:return _w;case 35664:return yw;case 35665:return Sw;case 35666:return Mw;case 35674:return bw;case 35675:return Ew;case 35676:return Tw;case 5124:case 35670:return Aw;case 35667:case 35671:return Rw;case 35668:case 35672:return Cw;case 35669:case 35673:return ww;case 5125:return Dw;case 36294:return Nw;case 36295:return Uw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ow;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return zw}}function Bw(t,e){t.uniform1fv(this.addr,e)}function Hw(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function Gw(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function Vw(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function kw(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jw(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ww(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Xw(t,e){t.uniform1iv(this.addr,e)}function qw(t,e){t.uniform2iv(this.addr,e)}function Yw(t,e){t.uniform3iv(this.addr,e)}function Zw(t,e){t.uniform4iv(this.addr,e)}function Kw(t,e){t.uniform1uiv(this.addr,e)}function Qw(t,e){t.uniform2uiv(this.addr,e)}function Jw(t,e){t.uniform3uiv(this.addr,e)}function $w(t,e){t.uniform4uiv(this.addr,e)}function eD(t,e,n){const i=this.cache,a=e.length,r=df(n,a);Jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=hf(cM):s=lM;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function tD(t,e,n){const i=this.cache,a=e.length,r=df(n,a);Jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||dM,r[s])}function nD(t,e,n){const i=this.cache,a=e.length,r=df(n,a);Jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));let s;this.type===t.SAMPLER_CUBE_SHADOW?s=hf(uM):s=hM;for(let o=0;o!==a;++o)n.setTextureCube(e[o]||s,r[o])}function iD(t,e,n){const i=this.cache,a=e.length,r=df(n,a);Jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||fM,r[s])}function aD(t){switch(t){case 5126:return Bw;case 35664:return Hw;case 35665:return Gw;case 35666:return Vw;case 35674:return kw;case 35675:return jw;case 35676:return Ww;case 5124:case 35670:return Xw;case 35667:case 35671:return qw;case 35668:case 35672:return Yw;case 35669:case 35673:return Zw;case 5125:return Kw;case 36294:return Qw;case 36295:return Jw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return eD;case 35679:case 36299:case 36307:return tD;case 35680:case 36300:case 36308:case 36293:return nD;case 36289:case 36303:case 36311:case 36292:return iD}}class rD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Fw(n.type)}}class sD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aD(n.type)}}class oD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function jv(t,e){t.seq.push(e),t.map[e.id]=e}function lD(t,e,n){const i=t.name,a=i.length;for(Ed.lastIndex=0;;){const r=Ed.exec(i),s=Ed.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){jv(n,c===void 0?new rD(o,t,e):new sD(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new oD(o),jv(n,p)),n=p}}}class au{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);lD(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function Wv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cD=37297;let uD=0;function fD(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Xv=new Ge;function dD(t){rt._getMatrix(Xv,rt.workingColorSpace,t);const e=`mat3( ${Xv.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case zu:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fD(t.getShaderSource(e),o)}else return r}function hD(t,e){const n=dD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const pD={[T1]:"Linear",[A1]:"Reinhard",[R1]:"Cineon",[zm]:"ACESFilmic",[w1]:"AgX",[D1]:"Neutral",[C1]:"Custom"};function mD(t,e){const n=pD[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Uc=new Z;function gD(){rt.getLuminanceCoefficients(Uc);const t=Uc.x.toFixed(4),e=Uc.y.toFixed(4),n=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function xD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _D(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Ho(t){return t!==""}function Yv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(t){return t.replace(yD,SD)}function SD(t,e){const n=Ye[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Cp(n)}const MD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(t){return t.replace(MD,bD)}function bD(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Qv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const ED={[Jc]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function TD(t){return ED[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AD={[bl]:"ENVMAP_MODE_REFRACTION"};function RD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":AD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CD={[E1]:"ENVMAP_BLENDING_MULTIPLY",[tA]:"ENVMAP_BLENDING_MIX",[nA]:"ENVMAP_BLENDING_ADD"};function wD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":CD[t.combine]||"ENVMAP_BLENDING_NONE"}function DD(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=TD(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=RD(n),p=wD(n),u=vD(n),h=xD(r),_=a.createProgram();let M,m,f=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(Ho).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(Ho).join(`
`),m.length>0&&(m+=`
`)):(M=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),m=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pa?"#define TONE_MAPPING":"",n.toneMapping!==pa?Ye.tonemapping_pars_fragment:"",n.toneMapping!==pa?mD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,hD("linearToOutputTexel",n.outputColorSpace),gD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),s=Cp(s),s=Yv(s,n),s=Zv(s,n),o=Cp(o),o=Yv(o,n),o=Zv(o,n),s=Kv(s),o=Kv(o),n.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",n.glslVersion===cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=f+M+s,S=f+m+o,y=Wv(a,a.VERTEX_SHADER,v),A=Wv(a,a.FRAGMENT_SHADER,S);a.attachShader(_,y),a.attachShader(_,A),n.index0AttributeName!==void 0?a.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function R(N){if(t.debug.checkShaderErrors){const P=a.getProgramInfoLog(_)||"",H=a.getShaderInfoLog(y)||"",Y=a.getShaderInfoLog(A)||"",L=P.trim(),G=H.trim(),F=Y.trim();let z=!0,J=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,_,y,A);else{const W=qv(a,y,"vertex"),D=qv(a,A,"fragment");ht("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+L+`
`+W+`
`+D)}else L!==""?Be("WebGLProgram: Program Info Log:",L):(G===""||F==="")&&(J=!1);J&&(N.diagnostics={runnable:z,programLog:L,vertexShader:{log:G,prefix:M},fragmentShader:{log:F,prefix:m}})}a.deleteShader(y),a.deleteShader(A),x=new au(a,_),E=_D(a,_)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(_,cD)),O},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=A,this}let ND=0;class UD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LD(e),n.set(e,i)),i}}class LD{constructor(e){this.id=ND++,this.code=e,this.usedTimes=0}}function OD(t){return t===Yr||t===Ou||t===Pu}function PD(t,e,n,i,a,r){const s=new q1,o=new UD,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,O,N,P,H){const Y=N.fog,L=P.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||G,F),J=u[x.type];let W=i.precision;x.precision!==null&&(W=i.getMaxPrecision(x.precision),W!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));const D=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,C=D!==void 0?D.length:0;let ne=0;L.morphAttributes.position!==void 0&&(ne=1),L.morphAttributes.normal!==void 0&&(ne=2),L.morphAttributes.color!==void 0&&(ne=3);let fe,V,ie,oe;if(J){const Ee=zi[J];fe=Ee.vertexShader,V=Ee.fragmentShader}else{fe=x.vertexShader,V=x.fragmentShader;const Ee=o.getVertexShaderStage(x),xt=o.getFragmentShaderStage(x);o.update(x,Ee,xt),ie=Ee.id,oe=xt.id}const le=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),be=P.isInstancedMesh===!0,Fe=P.isBatchedMesh===!0,Se=!!x.map,Ne=!!x.matcap,X=!!z,ue=X&&z.isPMREMTexture===!0,ze=!!x.aoMap,Ze=!!x.lightMap,ut=!!x.bumpMap&&x.wireframe===!1,at=!!x.normalMap,Gt=!!x.displacementMap,ft=!!x.emissiveMap,cn=!!x.metalnessMap,un=!!x.roughnessMap,fn=x.anisotropy>0,B=x.clearcoat>0,Sn=x.diffuseRoughness>0,gt=x.dispersion>0,lt=x.retroreflectivity>0,ve=x.iridescence>0,Lt=x.sheen>0,Ue=x.transmission>0,Ie=fn&&!!x.anisotropyMap,w=B&&!!x.clearcoatMap,b=B&&!!x.clearcoatNormalMap,k=B&&!!x.clearcoatRoughnessMap,ce=Sn&&!!x.diffuseRoughnessMap,ae=ve&&!!x.iridescenceMap,pe=ve&&!!x.iridescenceThicknessMap,_e=Lt&&!!x.sheenColorMap,$=Lt&&!!x.sheenRoughnessMap,te=!!x.specularMap,me=!!x.specularColorMap,U=!!x.specularIntensityMap,ee=Ue&&!!x.transmissionMap,Q=Ue&&!!x.thicknessMap,ge=!!x.gradientMap,de=!!x.alphaMap,xe=x.alphaTest>0,Le=!!x.alphaHash,qe=!!x.extensions;let he=pa;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(he=t.toneMapping);const Pe=ue?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Xe={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:fe,fragmentShader:V,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:Fe,batchingColor:Fe&&P._colorsTexture!==null,instancing:be,instancingColor:be&&P.instanceColor!==null,instancingMorph:be&&P.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Se,matcap:Ne,envMap:X,envMapMode:X&&z.mapping,envMapPMREM:ue,envMapMaxLod:ue?Pe.length-1:null,envMapSize:ue?Pe[0].width:null,aoMap:ze,lightMap:Ze,bumpMap:ut,normalMap:at,displacementMap:Gt,emissiveMap:ft,normalMapObjectSpace:at&&x.normalMapType===rA,normalMapTangentSpace:at&&x.normalMapType===Ap,packedNormalMap:at&&x.normalMapType===Ap&&OD(x.normalMap.format),metalnessMap:cn,roughnessMap:un,anisotropy:fn,anisotropyMap:Ie,clearcoat:B,clearcoatMap:w,clearcoatNormalMap:b,clearcoatRoughnessMap:k,diffuseRoughness:Sn,diffuseRoughnessMap:ce,dispersion:gt,retroreflection:lt,iridescence:ve,iridescenceMap:ae,iridescenceThicknessMap:pe,sheen:Lt,sheenColorMap:_e,sheenRoughnessMap:$,specularMap:te,specularColorMap:me,specularIntensityMap:U,transmission:Ue,transmissionMap:ee,thicknessMap:Q,gradientMap:ge,opaque:x.transparent===!1&&x.blending===nl&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:xe,alphaHash:Le,combine:x.combine,mapUv:Se&&h(x.map.channel),aoMapUv:ze&&h(x.aoMap.channel),lightMapUv:Ze&&h(x.lightMap.channel),bumpMapUv:ut&&h(x.bumpMap.channel),normalMapUv:at&&h(x.normalMap.channel),displacementMapUv:Gt&&h(x.displacementMap.channel),emissiveMapUv:ft&&h(x.emissiveMap.channel),metalnessMapUv:cn&&h(x.metalnessMap.channel),roughnessMapUv:un&&h(x.roughnessMap.channel),anisotropyMapUv:Ie&&h(x.anisotropyMap.channel),clearcoatMapUv:w&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&h(x.sheenRoughnessMap.channel),specularMapUv:te&&h(x.specularMap.channel),specularColorMapUv:me&&h(x.specularColorMap.channel),specularIntensityMapUv:U&&h(x.specularIntensityMap.channel),transmissionMapUv:ee&&h(x.transmissionMap.channel),thicknessMapUv:Q&&h(x.thicknessMap.channel),alphaMapUv:de&&h(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(at||fn),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Se||de),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&at===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:se,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:ne,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:he,decodeVideoTexture:Se&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===la,flipSided:x.side===kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function M(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)E.push(O),E.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(m(E,x),f(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function f(x,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.retroreflection&&s.enable(24),E.diffuseRoughness&&s.enable(25),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function v(x){const E=u[x.type];let O;if(E){const N=zi[E];O=iR.clone(N.uniforms)}else O=x.uniforms;return O}function S(x,E){let O=d.get(E);return O!==void 0?++O.usedTimes:(O=new DD(t,E,x,a),c.push(O),d.set(E,O)),O}function y(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:R}}function ID(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function zD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Jv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $v(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,_,M,m,f){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:h,material:_,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},t[e]=v):(v.id=u.id,v.object=u,v.geometry=h,v.material=_,v.materialVariant=s(u),v.groupOrder=M,v.renderOrder=u.renderOrder,v.z=m,v.group=f),e++,v}function l(u,h,_,M,m,f,v){v.reversedDepth===!0&&(m=-m);const S=o(u,h,_,M,m,f);_.transmission>0?i.push(S):_.transparent===!0?a.push(S):n.push(S)}function c(u,h,_,M,m,f){const v=o(u,h,_,M,m,f);_.transmission>0?i.unshift(v):_.transparent===!0?a.unshift(v):n.unshift(v)}function d(u,h){n.length>1&&n.sort(u||zD),i.length>1&&i.sort(h||Jv),a.length>1&&a.sort(h||Jv)}function p(){for(let u=e,h=t.length;u<h;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:p,sort:d}}function FD(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new $v,t.set(i,[s])):a>=r.length?(s=new $v,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function BD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new Z,color:new ot};break;case"SpotLight":n={position:new Z,direction:new Z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function HD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GD=0;function VD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kD(t){const e=new BD,n=HD(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const a=new Z,r=new Ft,s=new Ft;function o(c){let d=0,p=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let h=0,_=0,M=0,m=0,f=0,v=0,S=0,y=0,A=0,R=0,x=0,E=0,O=0,N=0;c.sort(VD);for(let H=0,Y=c.length;H<Y;H++){const L=c[H],G=L.color,F=L.intensity,z=L.distance;let J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Yr?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=G.r*F,p+=G.g*F,u+=G.b*F;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],F);N++}else if(L.isSunLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const D=L.shadow,C=n.get(L);C.shadowIntensity=D.intensity,C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),i.sunShadow[_]=C,i.sunShadowMap[_]=J;const ne=D.getViewportCount();for(let fe=0;fe<ne;fe++)i.sunShadowMatrix[M+fe]=D.getMatrix(fe),i.sunShadowCascade[M+fe]=D._cascadeData[fe];M+=ne,_++}i.sun[h]=W,h++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const D=L.shadow,C=n.get(L);C.shadowIntensity=D.intensity,C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,i.directionalShadow[m]=C,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=L.shadow.matrix,A++}i.directional[m]=W,m++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(G).multiplyScalar(F),W.distance=z,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[v]=W;const D=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,D.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[v]=D.matrix,L.castShadow){const C=n.get(L);C.shadowIntensity=D.intensity,C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,i.spotShadow[v]=C,i.spotShadowMap[v]=J,x++}v++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(G).multiplyScalar(F),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=W,S++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const D=L.shadow,C=n.get(L);C.shadowIntensity=D.intensity,C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,C.shadowCameraNear=D.camera.near,C.shadowCameraFar=D.camera.far,i.pointShadow[f]=C,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=L.shadow.matrix,R++}i.point[f]=W,f++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(F),W.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[y]=W,y++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const P=i.hash;(P.sunLength!==h||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==v||P.rectAreaLength!==S||P.hemiLength!==y||P.numSunShadows!==_||P.numDirectionalShadows!==A||P.numPointShadows!==R||P.numSpotShadows!==x||P.numSpotMaps!==E||P.numLightProbes!==N)&&(i.sun.length=h,i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=f,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+E-O,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=N,P.sunLength=h,P.directionalLength=m,P.pointLength=f,P.spotLength=v,P.rectAreaLength=S,P.hemiLength=y,P.numSunShadows=_,P.numDirectionalShadows=A,P.numPointShadows=R,P.numSpotShadows=x,P.numSpotMaps=E,P.numLightProbes=N,i.version=GD++)}function l(c,d){let p=0,u=0,h=0,_=0,M=0,m=0;const f=d.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const y=c[v];if(y.isSunLight){const A=i.sun[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(f),p++}else if(y.isDirectionalLight){const A=i.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),u++}else if(y.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(f),s.identity(),r.copy(y.matrixWorld),r.premultiply(f),s.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),M++}else if(y.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(f),h++}else if(y.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function ex(t){const e=new kD(t),n=[],i=[],a=[];function r(p){d.camera=p,n.length=0,i.length=0,a.length=0}function s(p){p.isLightProbeGrid?a.push(p):n.push(p)}function o(p){i.push(p)}function l(){e.setup(n),a.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){e.setupView(n,p)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function jD(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new ex(t),e.set(a,[o])):r>=s.length?(o=new ex(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const WD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XD=`uniform sampler2D shadow_pass;
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
}`,qD=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],YD=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],tx=new Ft,Uo=new Z,Td=new Z;function ZD(t,e,n){let i=new Rl;const a=new it,r=new it,s=new zt,o=new oR,l=new lR,c={},d=n.maxTextureSize,p={[qr]:kn,[kn]:qr,[la]:la},u=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:WD,fragmentShader:XD}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new Di;_.setAttribute("position",new Fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new bt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let f=this.type;this.render=function(R,x,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===I2&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jc);const O=t.getRenderTarget(),N=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),H=t.state;H.setBlending(ks),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Y=f!==this.type;Y&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=R.length;L<G;L++){const F=R[L],z=F.shadow;if(z===void 0){Be("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const J=z.getFrameExtents();a.multiply(J),r.copy(z.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/J.x),a.x=r.x*J.x,z.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/J.y),a.y=r.y*J.y,z.mapSize.y=r.y));const W=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||Y===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Fo){if(F.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new qi(a.x,a.y,{format:Yr,type:Ki,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new so(a.x,a.y,ki),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=fr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=gn,z.map.depthTexture.magFilter=gn}else F.isPointLight?(z.map=new Qm(a.x),z.map.depthTexture=new J1(a.x,Zi)):(z.map=new qi(a.x,a.y),z.map.depthTexture=new so(a.x,a.y,Zi)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=fr,this.type===Jc?(z.map.depthTexture.compareFunction=W?H1:B1,z.map.depthTexture.minFilter=Gn,z.map.depthTexture.magFilter=Gn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=gn,z.map.depthTexture.magFilter=gn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==a.x||z.map.height!==a.y)&&z.map.setSize(a.x,a.y);const D=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();F.isPointLight!==!0&&z.updateMatrices(F,E);const C=z.camera.layers.mask&4294967294?z.camera.layers:E.layers;for(let ne=0;ne<D;ne++){const fe=z.getCamera(ne);if(F.isPointLight){const V=z.camera,ie=z.matrix,oe=F.distance||V.far;oe!==V.far&&(V.far=oe,V.updateProjectionMatrix()),Uo.setFromMatrixPosition(F.matrixWorld),V.position.copy(Uo),Td.copy(V.position),Td.add(qD[ne]),V.up.copy(YD[ne]),V.lookAt(Td),V.updateMatrixWorld(),ie.makeTranslation(-Uo.x,-Uo.y,-Uo.z),tx.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),z._frustum.setFromProjectionMatrix(tx,V.coordinateSystem,V.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(z.map),t.clear());const V=z.getViewport(ne);s.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),H.viewport(s)}i=z.getFrustum(ne),y(x,E,fe,F,C,this.type)}z.isPointLightShadow!==!0&&this.type===Fo&&v(z,E),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(O,N,P)};function v(R,x){const E=e.update(M);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null?R.mapPass=new qi(a.x,a.y,{format:Yr,type:Ki}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(x,null,E,u,M,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(x,null,E,h,M,null)}function S(R,x,E,O){let N=null;const P=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)N=P;else if(N=E.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const H=N.uuid,Y=x.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let G=L[Y];G===void 0&&(G=N.clone(),L[Y]=G,x.addEventListener("dispose",A)),N=G}if(N.visible=x.visible,N.wireframe=x.wireframe,O===Fo?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:p[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,E.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const H=t.properties.get(N);H.light=E}return N}function y(R,x,E,O,N,P){if(R.visible===!1)return;if(R.layers.test(N)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&P===Fo)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const L=e.update(R),G=R.material;if(Array.isArray(G)){const F=L.groups;for(let z=0,J=F.length;z<J;z++){const W=F[z],D=G[W.materialIndex];if(D&&D.visible){const C=S(R,D,O,P);R.onBeforeShadow(t,R,x,E,L,C,W),t.renderBufferDirect(E,null,L,C,R,W),R.onAfterShadow(t,R,x,E,L,C,W)}}}else if(G.visible){const F=S(R,G,O,P);R.onBeforeShadow(t,R,x,E,L,F,null),t.renderBufferDirect(E,null,L,F,R,null),R.onAfterShadow(t,R,x,E,L,F,null)}}const Y=R.children;for(let L=0,G=Y.length;L<G;L++)y(Y[L],x,E,O,N,P)}function A(R){R.target.removeEventListener("dispose",A);for(const E in c){const O=c[E],N=R.target.uuid;N in O&&(O[N].dispose(),delete O[N])}}}function KD(t,e){function n(){let U=!1;const ee=new zt;let Q=null;const ge=new zt(0,0,0,0);return{setMask:function(de){Q!==de&&!U&&(t.colorMask(de,de,de,de),Q=de)},setLocked:function(de){U=de},setClear:function(de,xe,Le,qe,he){he===!0&&(de*=qe,xe*=qe,Le*=qe),ee.set(de,xe,Le,qe),ge.equals(ee)===!1&&(t.clearColor(de,xe,Le,qe),ge.copy(ee))},reset:function(){U=!1,Q=null,ge.set(-1,0,0,0)}}}function i(){let U=!1,ee=!1,Q=null,ge=null,de=null;return{setReversed:function(xe){if(ee!==xe){const Le=e.get("EXT_clip_control");xe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ee=xe;const qe=de;de=null,this.setClear(qe)}},getReversed:function(){return ee},setTest:function(xe){xe?se(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(xe){Q!==xe&&!U&&(t.depthMask(xe),Q=xe)},setFunc:function(xe){if(ee&&(xe=gA[xe]),ge!==xe){switch(xe){case Gh:t.depthFunc(t.NEVER);break;case Vh:t.depthFunc(t.ALWAYS);break;case kh:t.depthFunc(t.LESS);break;case Ml:t.depthFunc(t.LEQUAL);break;case jh:t.depthFunc(t.EQUAL);break;case Wh:t.depthFunc(t.GEQUAL);break;case Xh:t.depthFunc(t.GREATER);break;case qh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=xe}},setLocked:function(xe){U=xe},setClear:function(xe){de!==xe&&(de=xe,ee&&(xe=1-xe),t.clearDepth(xe))},reset:function(){U=!1,Q=null,ge=null,de=null,ee=!1}}}function a(){let U=!1,ee=null,Q=null,ge=null,de=null,xe=null,Le=null,qe=null,he=null;return{setTest:function(Pe){U||(Pe?se(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(Pe){ee!==Pe&&!U&&(t.stencilMask(Pe),ee=Pe)},setFunc:function(Pe,Xe,Ee){(Q!==Pe||ge!==Xe||de!==Ee)&&(t.stencilFunc(Pe,Xe,Ee),Q=Pe,ge=Xe,de=Ee)},setOp:function(Pe,Xe,Ee){(xe!==Pe||Le!==Xe||qe!==Ee)&&(t.stencilOp(Pe,Xe,Ee),xe=Pe,Le=Xe,qe=Ee)},setLocked:function(Pe){U=Pe},setClear:function(Pe){he!==Pe&&(t.clearStencil(Pe),he=Pe)},reset:function(){U=!1,ee=null,Q=null,ge=null,de=null,xe=null,Le=null,qe=null,he=null}}}const r=new n,s=new i,o=new a;let l={};const c=new WeakMap;let d={},p={},u={},h=new WeakMap,_=[],M=null,m=!1,f=null,v=null,S=null,y=null,A=null,R=null,x=null,E=new ot(0,0,0),O=0,N=!1,P=null,H=null,Y=null,L=null,G=null;const F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=J>=2);let D=null,C={};const ne=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),V=new zt().fromArray(ne),ie=new zt().fromArray(fe);function oe(U,ee,Q,ge){const de=new Uint8Array(4),xe=t.createTexture();t.bindTexture(U,xe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<Q;Le++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ee+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return xe}const le={};le[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(t.DEPTH_TEST),s.setFunc(Ml),ut(!1),at(rv),se(t.CULL_FACE),ze(ks);function se(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function be(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Fe(U,ee){return u[U]!==ee?(t.bindFramebuffer(U,ee),u[U]=ee,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ee),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function Se(U,ee){let Q=_,ge=!1;if(U){Q=h.get(ee),Q===void 0&&(Q=[],h.set(ee,Q));const de=U.textures;if(Q.length!==de.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,Le=de.length;xe<Le;xe++)Q[xe]=t.COLOR_ATTACHMENT0+xe;Q.length=de.length,ge=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,ge=!0);ge&&t.drawBuffers(Q)}function Ne(U){return M!==U?(t.useProgram(U),M=U,!0):!1}const X={[ys]:t.FUNC_ADD,[F2]:t.FUNC_SUBTRACT,[B2]:t.FUNC_REVERSE_SUBTRACT};X[H2]=t.MIN,X[G2]=t.MAX;const ue={[V2]:t.ZERO,[k2]:t.ONE,[j2]:t.SRC_COLOR,[M1]:t.SRC_ALPHA,[K2]:t.SRC_ALPHA_SATURATE,[Y2]:t.DST_COLOR,[X2]:t.DST_ALPHA,[W2]:t.ONE_MINUS_SRC_COLOR,[b1]:t.ONE_MINUS_SRC_ALPHA,[Z2]:t.ONE_MINUS_DST_COLOR,[q2]:t.ONE_MINUS_DST_ALPHA,[Q2]:t.CONSTANT_COLOR,[J2]:t.ONE_MINUS_CONSTANT_COLOR,[$2]:t.CONSTANT_ALPHA,[eA]:t.ONE_MINUS_CONSTANT_ALPHA};function ze(U,ee,Q,ge,de,xe,Le,qe,he,Pe){if(U===ks){m===!0&&(be(t.BLEND),m=!1);return}if(m===!1&&(se(t.BLEND),m=!0),U!==z2){if(U!==f||Pe!==N){if((v!==ys||A!==ys)&&(t.blendEquation(t.FUNC_ADD),v=ys,A=ys),Pe)switch(U){case nl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sv:t.blendFunc(t.ONE,t.ONE);break;case ov:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ht("WebGLState: Invalid blending: ",U);break}else switch(U){case nl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ov:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lv:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",U);break}S=null,y=null,R=null,x=null,E.set(0,0,0),O=0,f=U,N=Pe}return}de=de||ee,xe=xe||Q,Le=Le||ge,(ee!==v||de!==A)&&(t.blendEquationSeparate(X[ee],X[de]),v=ee,A=de),(Q!==S||ge!==y||xe!==R||Le!==x)&&(t.blendFuncSeparate(ue[Q],ue[ge],ue[xe],ue[Le]),S=Q,y=ge,R=xe,x=Le),(qe.equals(E)===!1||he!==O)&&(t.blendColor(qe.r,qe.g,qe.b,he),E.copy(qe),O=he),f=U,N=!1}function Ze(U,ee){U.side===la?be(t.CULL_FACE):se(t.CULL_FACE);let Q=U.side===kn;ee&&(Q=!Q),ut(Q),U.blending===nl&&U.transparent===!1?ze(ks):ze(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function ut(U){P!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),P=U)}function at(U){U!==O2?(se(t.CULL_FACE),U!==H&&(U===rv?t.cullFace(t.BACK):U===P2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),H=U}function Gt(U){U!==Y&&(z&&t.lineWidth(U),Y=U)}function ft(U,ee,Q){U?(se(t.POLYGON_OFFSET_FILL),(L!==ee||G!==Q)&&(L=ee,G=Q,s.getReversed()&&(ee=-ee,Q=-Q),t.polygonOffset(ee,Q))):be(t.POLYGON_OFFSET_FILL)}function cn(U){U?se(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function un(U){U===void 0&&(U=t.TEXTURE0+F-1),D!==U&&(t.activeTexture(U),D=U)}function fn(U,ee,Q){Q===void 0&&(D===null?Q=t.TEXTURE0+F-1:Q=D);let ge=C[Q];ge===void 0&&(ge={type:void 0,texture:void 0},C[Q]=ge),(ge.type!==U||ge.texture!==ee)&&(D!==Q&&(t.activeTexture(Q),D=Q),t.bindTexture(U,ee||le[U]),ge.type=U,ge.texture=ee)}function B(){const U=C[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Sn(){try{t.compressedTexImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function gt(){try{t.compressedTexImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function lt(){try{t.texSubImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function ve(){try{t.texSubImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function Lt(){try{t.compressedTexSubImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function Ue(){try{t.compressedTexSubImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function Ie(){try{t.texStorage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function w(){try{t.texStorage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function b(){try{t.texImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function k(){try{t.texImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function ce(U){return p[U]!==void 0?p[U]:t.getParameter(U)}function ae(U,ee){p[U]!==ee&&(t.pixelStorei(U,ee),p[U]=ee)}function pe(U){V.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),V.copy(U))}function _e(U){ie.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ie.copy(U))}function $(U,ee){let Q=c.get(ee);Q===void 0&&(Q=new WeakMap,c.set(ee,Q));let ge=Q.get(U);ge===void 0&&(ge=t.getUniformBlockIndex(ee,U.name),t.uniformBlockBinding(ee,ge,ge),Q.set(U,ge))}function te(U,ee,Q){const de=c.get(ee).get(U);l[de]!==Q&&(t.bindBufferBase(t.UNIFORM_BUFFER,de,Q),l[de]=Q)}function me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},D=null,C={},u={},l={},h=new WeakMap,_=[],M=null,m=!1,f=null,v=null,S=null,y=null,A=null,R=null,x=null,E=new ot(0,0,0),O=0,N=!1,P=null,H=null,Y=null,L=null,G=null,V.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:se,disable:be,bindFramebuffer:Fe,drawBuffers:Se,useProgram:Ne,setBlending:ze,setMaterial:Ze,setFlipSided:ut,setCullFace:at,setLineWidth:Gt,setPolygonOffset:ft,setScissorTest:cn,activeTexture:un,bindTexture:fn,unbindTexture:B,compressedTexImage2D:Sn,compressedTexImage3D:gt,texImage2D:b,texImage3D:k,pixelStorei:ae,getParameter:ce,updateUBOMapping:$,uniformBlockBinding:te,texStorage2D:Ie,texStorage3D:w,texSubImage2D:lt,texSubImage3D:ve,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Ue,scissor:pe,viewport:_e,reset:me}}function QD(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,d=new WeakMap,p=new Set;let u;const h=new WeakMap,_=new Set,M=new FinalizationRegistry(w=>_.delete(w));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,b){return m?new OffscreenCanvas(w,b):Fu("canvas")}function v(w,b,k){let ce=1;const ae=Ie(w);if((ae.width>k||ae.height>k)&&(ce=k/Math.max(ae.width,ae.height)),ce<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const pe=Math.floor(ce*ae.width),_e=Math.floor(ce*ae.height);u===void 0&&(u=f(pe,_e));const $=b?f(pe,_e):u;return $.width=pe,$.height=_e,$.getContext("2d").drawImage(w,0,0,pe,_e),Be("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+pe+"x"+_e+")."),$}else return"data"in w&&Be("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),w;return w}function S(w){return w.generateMipmaps}function y(w){t.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function R(w,b,k,ce,ae,pe=!1){if(w!==null){if(t[w]!==void 0)return t[w];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let _e;ce&&(_e=e.get("EXT_texture_norm16"),_e||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=b;if(b===t.RED&&(k===t.FLOAT&&($=t.R32F),k===t.HALF_FLOAT&&($=t.R16F),k===t.UNSIGNED_BYTE&&($=t.R8),k===t.UNSIGNED_SHORT&&_e&&($=_e.R16_EXT),k===t.SHORT&&_e&&($=_e.R16_SNORM_EXT)),b===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.R8UI),k===t.UNSIGNED_SHORT&&($=t.R16UI),k===t.UNSIGNED_INT&&($=t.R32UI),k===t.BYTE&&($=t.R8I),k===t.SHORT&&($=t.R16I),k===t.INT&&($=t.R32I)),b===t.RG&&(k===t.FLOAT&&($=t.RG32F),k===t.HALF_FLOAT&&($=t.RG16F),k===t.UNSIGNED_BYTE&&($=t.RG8),k===t.UNSIGNED_SHORT&&_e&&($=_e.RG16_EXT),k===t.SHORT&&_e&&($=_e.RG16_SNORM_EXT)),b===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RG8UI),k===t.UNSIGNED_SHORT&&($=t.RG16UI),k===t.UNSIGNED_INT&&($=t.RG32UI),k===t.BYTE&&($=t.RG8I),k===t.SHORT&&($=t.RG16I),k===t.INT&&($=t.RG32I)),b===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RGB8UI),k===t.UNSIGNED_SHORT&&($=t.RGB16UI),k===t.UNSIGNED_INT&&($=t.RGB32UI),k===t.BYTE&&($=t.RGB8I),k===t.SHORT&&($=t.RGB16I),k===t.INT&&($=t.RGB32I)),b===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RGBA8UI),k===t.UNSIGNED_SHORT&&($=t.RGBA16UI),k===t.UNSIGNED_INT&&($=t.RGBA32UI),k===t.BYTE&&($=t.RGBA8I),k===t.SHORT&&($=t.RGBA16I),k===t.INT&&($=t.RGBA32I)),b===t.RGB&&(k===t.UNSIGNED_SHORT&&_e&&($=_e.RGB16_EXT),k===t.SHORT&&_e&&($=_e.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),b===t.RGBA){const te=pe?zu:rt.getTransfer(ae);k===t.FLOAT&&($=t.RGBA32F),k===t.HALF_FLOAT&&($=t.RGBA16F),k===t.UNSIGNED_BYTE&&($=te===_t?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&_e&&($=_e.RGBA16_EXT),k===t.SHORT&&_e&&($=_e.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(w,b){let k;return w?b===null||b===Zi||b===ro?k=t.DEPTH24_STENCIL8:b===ki?k=t.DEPTH32F_STENCIL8:b===El&&(k=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===ro?k=t.DEPTH_COMPONENT24:b===ki?k=t.DEPTH_COMPONENT32F:b===El&&(k=t.DEPTH_COMPONENT16),k}function E(w,b){return S(w)===!0||w.isFramebufferTexture&&w.minFilter!==gn&&w.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function O(w){const b=new WeakRef(w);i.get(w).__ref=b,_.add(b),M.register(w,b,b)}function N(w){const b=i.get(w).__ref;b!==void 0&&(_.delete(b),M.unregister(b))}function P(w){Y(w.target)}function H(w){L(w.target)}function Y(w){w.removeEventListener("dispose",P),N(w),F(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&p.delete(w)}function L(w){w.removeEventListener("dispose",H),N(w),J(w)}function G(){for(const w of _){const b=w.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):Y(b))}_.clear(),p.clear()}function F(w){const b=i.get(w);if(b.__webglInit===void 0)return;const k=w.source,ce=h.get(k);if(ce){const ae=ce[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&z(w),Object.keys(ce).length===0&&h.delete(k)}i.remove(w)}function z(w){const b=i.get(w);t.deleteTexture(b.__webglTexture);const k=w.source,ce=h.get(k);delete ce[b.__cacheKey],s.memory.textures--}function J(w){const b=i.get(w);b.__depthDisposeCallback&&b.__depthDisposeCallback();const k=w.depthTexture;if(k&&k.renderTarget===w&&Y(k),w.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let pe=0;pe<b.__webglFramebuffer[ae].length;pe++)t.deleteFramebuffer(b.__webglFramebuffer[ae][pe]);else t.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)t.deleteFramebuffer(b.__webglFramebuffer[ae]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ce=w.textures;for(let ae=0,pe=ce.length;ae<pe;ae++){const _e=i.get(ce[ae]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),s.memory.textures--),i.remove(ce[ae])}i.remove(w)}let W=0;function D(){W=0}function C(){return W}function ne(w){W=w}function fe(){const w=W;return w>=a.maxTextures&&Be("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+a.maxTextures),W+=1,w}function V(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.mipmapsAutoUpdate),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function ie(w,b){const k=i.get(w);if(w.isVideoTexture&&Lt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const ce=w.image;if(ce===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(k,w,b);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+b)}function oe(w,b){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Ze(k,w,b);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+b)}function le(w,b){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Ze(k,w,b);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+b)}function se(w,b){const k=i.get(w);if(w.version>0&&k.__version!==w.version){ut(k,w,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+b)}const be={[Yh]:t.REPEAT,[fa]:t.CLAMP_TO_EDGE,[Zh]:t.MIRRORED_REPEAT},Fe={[gn]:t.NEAREST,[iA]:t.NEAREST_MIPMAP_NEAREST,[fc]:t.NEAREST_MIPMAP_LINEAR,[Gn]:t.LINEAR,[td]:t.LINEAR_MIPMAP_NEAREST,[qa]:t.LINEAR_MIPMAP_LINEAR},Se={[oA]:t.NEVER,[G1]:t.ALWAYS,[lA]:t.LESS,[B1]:t.LEQUAL,[cA]:t.EQUAL,[H1]:t.GEQUAL,[uA]:t.GREATER,[fA]:t.NOTEQUAL};function Ne(w,b){if(b.type===ki&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===td||b.magFilter===fc||b.magFilter===qa||b.minFilter===Gn||b.minFilter===td||b.minFilter===fc||b.minFilter===qa)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,be[b.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,be[b.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,be[b.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Fe[b.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Fe[b.minFilter]),b.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gn||b.minFilter!==fc&&b.minFilter!==qa||b.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function X(w,b){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",P),O(b));const ce=b.source;let ae=h.get(ce);ae===void 0&&(ae={},h.set(ce,ae));const pe=V(b);if(pe!==w.__cacheKey){ae[pe]===void 0&&(ae[pe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,k=!0),ae[pe].usedTimes++;const _e=ae[w.__cacheKey];_e!==void 0&&(ae[w.__cacheKey].usedTimes--,_e.usedTimes===0&&z(b)),w.__cacheKey=pe,w.__webglTexture=ae[pe].texture}return k}function ue(w,b,k){return Math.floor(Math.floor(w/k)/b)}function ze(w,b,k,ce){const pe=w.updateRanges;if(pe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,k,ce,b.data);else{pe.sort((U,ee)=>U.start-ee.start);let _e=0;for(let U=1;U<pe.length;U++){const ee=pe[_e],Q=pe[U],ge=ee.start+ee.count,de=ue(Q.start,b.width,4),xe=ue(ee.start,b.width,4);Q.start<=ge+1&&de===xe&&ue(Q.start+Q.count-1,b.width,4)===de?ee.count=Math.max(ee.count,Q.start+Q.count-ee.start):(++_e,pe[_e]=Q)}pe.length=_e+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let U=0,ee=pe.length;U<ee;U++){const Q=pe[U],ge=Math.floor(Q.start/4),de=Math.ceil(Q.count/4),xe=ge%b.width,Le=Math.floor(ge/b.width),qe=de,he=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Le),n.texSubImage2D(t.TEXTURE_2D,0,xe,Le,qe,he,k,ce,b.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function Ze(w,b,k){let ce=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=t.TEXTURE_3D);const ae=X(w,b),pe=b.source;n.bindTexture(ce,w.__webglTexture,t.TEXTURE0+k);const _e=i.get(pe);if(pe.version!==_e.__version||ae===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const he=rt.getPrimaries(rt.workingColorSpace),Pe=b.colorSpace===Ha?null:rt.getPrimaries(b.colorSpace),Xe=b.colorSpace===Ha||he===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment);let te=v(b.image,!1,a.maxTextureSize);te=Ue(b,te);const me=r.convert(b.format,b.colorSpace),U=r.convert(b.type);let ee=R(b.internalFormat,me,U,b.normalized,b.colorSpace,b.isVideoTexture);Ne(ce,b);let Q;const ge=b.mipmaps,de=b.isVideoTexture!==!0,xe=_e.__version===void 0||ae===!0,Le=pe.dataReady,qe=E(b,te);if(b.isDepthTexture)ee=x(b.format===Ya,b.type),xe&&(de?n.texStorage2D(t.TEXTURE_2D,1,ee,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,ee,te.width,te.height,0,me,U,null));else if(b.isDataTexture)if(ge.length>0){de&&xe&&n.texStorage2D(t.TEXTURE_2D,qe,ee,ge[0].width,ge[0].height);for(let he=0,Pe=ge.length;he<Pe;he++)Q=ge[he],de?Le&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Q.width,Q.height,me,U,Q.data):n.texImage2D(t.TEXTURE_2D,he,ee,Q.width,Q.height,0,me,U,Q.data);b.generateMipmaps=!1}else de?(xe&&n.texStorage2D(t.TEXTURE_2D,qe,ee,te.width,te.height),Le&&ze(b,te,me,U)):n.texImage2D(t.TEXTURE_2D,0,ee,te.width,te.height,0,me,U,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){de&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,ee,ge[0].width,ge[0].height,te.depth);for(let he=0,Pe=ge.length;he<Pe;he++)if(Q=ge[he],b.format!==ji)if(me!==null)if(de){if(Le)if(b.layerUpdates.size>0){const Xe=Ov(Q.width,Q.height,b.format,b.type);for(const Ee of b.layerUpdates){const xt=Q.data.subarray(Ee*Xe/Q.data.BYTES_PER_ELEMENT,(Ee+1)*Xe/Q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,Ee,Q.width,Q.height,1,me,xt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Q.width,Q.height,te.depth,me,Q.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,ee,Q.width,Q.height,te.depth,0,Q.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Q.width,Q.height,te.depth,me,U,Q.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,ee,Q.width,Q.height,te.depth,0,me,U,Q.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{de&&xe&&n.texStorage2D(t.TEXTURE_2D,qe,ee,ge[0].width,ge[0].height);for(let he=0,Pe=ge.length;he<Pe;he++)Q=ge[he],b.format!==ji?me!==null?de?Le&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,Q.width,Q.height,me,Q.data):n.compressedTexImage2D(t.TEXTURE_2D,he,ee,Q.width,Q.height,0,Q.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Le&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Q.width,Q.height,me,U,Q.data):n.texImage2D(t.TEXTURE_2D,he,ee,Q.width,Q.height,0,me,U,Q.data)}else if(b.isDataArrayTexture)if(de){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,ee,te.width,te.height,te.depth),Le)if(b.layerUpdates.size>0){const he=Ov(te.width,te.height,b.format,b.type);for(const Pe of b.layerUpdates){const Xe=te.data.subarray(Pe*he/te.data.BYTES_PER_ELEMENT,(Pe+1)*he/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Pe,te.width,te.height,1,me,U,Xe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,U,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,te.width,te.height,te.depth,0,me,U,te.data);else if(b.isData3DTexture)de?(xe&&n.texStorage3D(t.TEXTURE_3D,qe,ee,te.width,te.height,te.depth),Le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,U,te.data)):n.texImage3D(t.TEXTURE_3D,0,ee,te.width,te.height,te.depth,0,me,U,te.data);else if(b.isFramebufferTexture){if(xe)if(de)n.texStorage2D(t.TEXTURE_2D,qe,ee,te.width,te.height);else{let he=te.width,Pe=te.height;for(let Xe=0;Xe<qe;Xe++)n.texImage2D(t.TEXTURE_2D,Xe,ee,he,Pe,0,me,U,null),he>>=1,Pe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in t){const he=t.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),te.parentNode!==he){he.appendChild(te),p.add(b),he.onpaint=Pe=>{const Xe=Pe.changedElements;for(const Ee of p)Xe.includes(Ee.image)&&(Ee.needsUpdate=!0)},he.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const Xe=t.RGBA,Ee=t.RGBA,xt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Xe,Ee,xt,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ge.length>0){if(de&&xe){const he=Ie(ge[0]);n.texStorage2D(t.TEXTURE_2D,qe,ee,he.width,he.height)}for(let he=0,Pe=ge.length;he<Pe;he++)Q=ge[he],de?Le&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,me,U,Q):n.texImage2D(t.TEXTURE_2D,he,ee,me,U,Q);b.generateMipmaps=!1}else if(de){if(xe){const he=Ie(te);n.texStorage2D(t.TEXTURE_2D,qe,ee,he.width,he.height)}Le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,U,te)}else n.texImage2D(t.TEXTURE_2D,0,ee,me,U,te);S(b)&&b.mipmapsAutoUpdate===!0&&y(ce),_e.__version=pe.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function ut(w,b,k){if(b.image.length!==6)return;const ce=X(w,b),ae=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+k);const pe=i.get(ae);if(ae.version!==pe.__version||ce===!0){n.activeTexture(t.TEXTURE0+k);const _e=rt.getPrimaries(rt.workingColorSpace),$=b.colorSpace===Ha?null:rt.getPrimaries(b.colorSpace),te=b.colorSpace===Ha||_e===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const me=b.isCompressedTexture||b.image[0].isCompressedTexture,U=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let Ee=0;Ee<6;Ee++)!me&&!U?ee[Ee]=v(b.image[Ee],!0,a.maxCubemapSize):ee[Ee]=U?b.image[Ee].image:b.image[Ee],ee[Ee]=Ue(b,ee[Ee]);const Q=ee[0],ge=r.convert(b.format,b.colorSpace),de=r.convert(b.type);let xe=R(b.internalFormat,ge,de,b.normalized,b.colorSpace);const Le=b.isVideoTexture!==!0,qe=pe.__version===void 0||ce===!0,he=ae.dataReady;let Pe=E(b,Q);Ne(t.TEXTURE_CUBE_MAP,b);let Xe;if(b.isDepthTexture){if(xe=x(b.format===Ya,b.type),qe)if(Le)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,xe,Q.width,Q.height);else for(let Ee=0;Ee<6;Ee++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xe,Q.width,Q.height,0,ge,de,null)}else if(me){Le&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,xe,Q.width,Q.height);for(let Ee=0;Ee<6;Ee++){Xe=ee[Ee].mipmaps;for(let xt=0;xt<Xe.length;xt++){const en=Xe[xt];b.format!==ji?ge!==null?Le?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt,0,0,en.width,en.height,ge,en.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt,xe,en.width,en.height,0,en.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt,0,0,en.width,en.height,ge,de,en.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt,xe,en.width,en.height,0,ge,de,en.data)}}}else{if(Xe=b.mipmaps,Le&&qe){Xe.length>0&&Pe++;const Ee=Ie(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,xe,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(U){Le?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ee[Ee].width,ee[Ee].height,ge,de,ee[Ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xe,ee[Ee].width,ee[Ee].height,0,ge,de,ee[Ee].data);for(let xt=0;xt<Xe.length;xt++){const Ta=Xe[xt].image[Ee].image;Le?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt+1,0,0,Ta.width,Ta.height,ge,de,Ta.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt+1,xe,Ta.width,Ta.height,0,ge,de,Ta.data)}}else{Le?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ge,de,ee[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xe,ge,de,ee[Ee]);for(let xt=0;xt<Xe.length;xt++){const en=Xe[xt];Le?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt+1,0,0,ge,de,en.image[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xt+1,xe,ge,de,en.image[Ee])}}}S(b)&&b.mipmapsAutoUpdate===!0&&y(t.TEXTURE_CUBE_MAP),pe.__version=ae.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function at(w,b,k,ce,ae,pe){const _e=r.convert(k.format,k.colorSpace),$=r.convert(k.type),te=R(k.internalFormat,_e,$,k.normalized,k.colorSpace),me=i.get(b),U=i.get(k);if(U.__renderTarget=b,!me.__hasExternalTextures){const ee=Math.max(1,b.width>>pe),Q=Math.max(1,b.height>>pe);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,pe,te,ee,Q,b.depth,0,_e,$,null):n.texImage2D(ae,pe,te,ee,Q,0,_e,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),ve(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,ae,U.__webglTexture,0,lt(b)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,ae,U.__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Gt(w,b,k){if(t.bindRenderbuffer(t.RENDERBUFFER,w),b.depthBuffer){const ce=b.depthTexture,ae=ce&&ce.isDepthTexture?ce.type:null,pe=x(b.stencilBuffer,ae),_e=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ve(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,lt(b),pe,b.width,b.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,lt(b),pe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,pe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,w)}else{const ce=b.textures;for(let ae=0;ae<ce.length;ae++){const pe=ce[ae],_e=r.convert(pe.format,pe.colorSpace),$=r.convert(pe.type),te=R(pe.internalFormat,_e,$,pe.normalized,pe.colorSpace);ve(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,lt(b),te,b.width,b.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,lt(b),te,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,te,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ft(w,b,k){const ce=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=i.get(b.depthTexture);ae.__renderTarget=b;const pe=ce?b.depthTexture.image[0]:b.depthTexture.image;(!ae.__webglTexture||pe.width!==b.width||pe.height!==b.height)&&(pe.width=b.width,pe.height=b.height,b.depthTexture.needsUpdate=!0),ce?se(b.depthTexture,0):ie(b.depthTexture,0);const _e=ae.__webglTexture,$=lt(b),te=ce?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,me=b.depthTexture.format===Ya?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===fr)ve(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,te,_e,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,me,te,_e,0);else if(b.depthTexture.format===Ya)ve(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,te,_e,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,me,te,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function cn(w){const b=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const ce=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ce){const ae=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ce.removeEventListener("dispose",ae)};ce.addEventListener("dispose",ae),b.__depthDisposeCallback=ae}b.__boundDepthTexture=ce}if(w.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let ce=0;ce<6;ce++)ft(b.__webglFramebuffer[ce],w,ce);else w.texture.mipmaps.length>0?ft(b.__webglFramebuffer[0],w,0):ft(b.__webglFramebuffer,w,0);else if(k){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]===void 0)b.__webglDepthbuffer[ce]=t.createRenderbuffer(),Gt(b.__webglDepthbuffer[ce],w,!1);else{const ae=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer[ce];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,pe)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Gt(b.__webglDepthbuffer,w,!1);else{const ae=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,pe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function un(w,b,k){const ce=i.get(w);b!==void 0&&at(ce.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&cn(w)}function fn(w){const b=w.texture,k=i.get(w),ce=i.get(b);w.addEventListener("dispose",H),O(w);const ae=w.textures,pe=w.isWebGLCubeRenderTarget===!0,_e=ae.length>1;if(_e||(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=b.version,s.memory.textures++),pe){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(b.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let te=0;te<b.mipmaps.length;te++)k.__webglFramebuffer[$][te]=t.createFramebuffer()}else k.__webglFramebuffer[$]=t.createFramebuffer()}else{if(b.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<b.mipmaps.length;$++)k.__webglFramebuffer[$]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(_e)for(let $=0,te=ae.length;$<te;$++){const me=i.get(ae[$]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),s.memory.textures++)}if(w.samples>0&&ve(w)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<ae.length;$++){const te=ae[$];k.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[$]);const me=r.convert(te.format,te.colorSpace),U=r.convert(te.type),ee=R(te.internalFormat,me,U,te.normalized,te.colorSpace,w.isXRRenderTarget===!0),Q=lt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,ee,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,k.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Gt(k.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,b);for(let $=0;$<6;$++)if(b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)at(k.__webglFramebuffer[$][te],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,te);else at(k.__webglFramebuffer[$],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);S(b)?y(t.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),n.unbindTexture()}else if(_e){for(let $=0,te=ae.length;$<te;$++){const me=ae[$],U=i.get(me);let ee=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,U.__webglTexture),Ne(ee,me),at(k.__webglFramebuffer,w,me,t.COLOR_ATTACHMENT0+$,ee,0),S(me)&&y(ee)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,ce.__webglTexture),Ne($,b),b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)at(k.__webglFramebuffer[te],w,b,t.COLOR_ATTACHMENT0,$,te);else at(k.__webglFramebuffer,w,b,t.COLOR_ATTACHMENT0,$,0);S(b)?y($):b.mipmaps.length>0&&t.texParameteri($,t.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&cn(w)}function B(w){const b=w.textures;for(let k=0,ce=b.length;k<ce;k++){const ae=b[k];if(S(ae)&&ae.mipmapsAutoUpdate===!0){const pe=A(w),_e=i.get(ae).__webglTexture;n.bindTexture(pe,_e),y(pe),n.unbindTexture()}}}const Sn=[];function gt(w){if(w.samples>0){if(ve(w)===!1){const b=w.textures,k=w.width,ce=w.height;let ae=t.COLOR_BUFFER_BIT;const pe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(w),$=b.length>1;if($)for(let me=0;me<b.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let me=0;me<b.length;me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);const U=i.get(b[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,U,0)}t.blitFramebuffer(0,0,k,ce,0,0,k,ce,ae,t.NEAREST),l===!0&&(Sn.length=0,Sn.push(t.COLOR_ATTACHMENT0+me),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Sn.push(pe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Sn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<b.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);const U=i.get(b[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,U,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const b=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function lt(w){return Math.min(a.maxSamples,w.samples)}function ve(w){const b=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Lt(w){const b=s.render.frame;d.get(w)!==b&&(d.set(w,b),w.update())}function Ue(w,b){const k=w.colorSpace,ce=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Iu&&k!==Ha&&(rt.getTransfer(k)===_t?(ce!==ji||ae!==Jn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",k)),b}function Ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=fe,this.resetTextureUnits=D,this.getTextureUnits=C,this.setTextureUnits=ne,this.setTexture2D=ie,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=se,this.rebindTextures=un,this.setupRenderTarget=fn,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=cn,this.setupFrameBufferTexture=at,this.useMultisampledRTT=ve,this.dispose=G}function JD(t,e){function n(i,a=Ha){let r;const s=rt.getTransfer(a);if(i===Jn)return t.UNSIGNED_BYTE;if(i===Bm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===O1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===P1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===U1)return t.BYTE;if(i===L1)return t.SHORT;if(i===El)return t.UNSIGNED_SHORT;if(i===Fm)return t.INT;if(i===Zi)return t.UNSIGNED_INT;if(i===ki)return t.FLOAT;if(i===Ki)return t.HALF_FLOAT;if(i===I1)return t.ALPHA;if(i===z1)return t.RGB;if(i===ji)return t.RGBA;if(i===fr)return t.DEPTH_COMPONENT;if(i===Ya)return t.DEPTH_STENCIL;if(i===F1)return t.RED;if(i===Gm)return t.RED_INTEGER;if(i===Yr)return t.RG;if(i===Vm)return t.RG_INTEGER;if(i===km)return t.RGBA_INTEGER;if(i===$c||i===eu||i===tu||i===nu)if(s===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$c)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$c)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kh||i===Qh||i===Jh||i===$h)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ep||i===tp||i===np||i===ip||i===ap||i===Ou||i===rp)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ep||i===tp)return s===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===np)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ip)return r.COMPRESSED_R11_EAC;if(i===ap)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ou)return r.COMPRESSED_RG11_EAC;if(i===rp)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sp||i===op||i===lp||i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===vp||i===xp||i===_p)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===op)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===up)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xp)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_p)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yp||i===Sp||i===Mp)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yp)return s===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bp||i===Ep||i===Pu||i===Tp)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bp)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ep)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const $D=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eN=`
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

}`;class tN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new $1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zr({vertexShader:$D,fragmentShader:eN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bt(new ff(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nN extends ts{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,h=null,_=null;const M=typeof XRWebGLBinding<"u",m=new tN,f={},v=n.getContextAttributes();let S=null,y=null;const A=[],R=[],x=new it;let E=null,O=null;const N=new di;N.viewport=new zt;const P=new di;P.viewport=new zt;const H=[N,P],Y=new hR;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ie=A[V];return ie===void 0&&(ie=new ld,A[V]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(V){let ie=A[V];return ie===void 0&&(ie=new ld,A[V]=ie),ie.getGripSpace()},this.getHand=function(V){let ie=A[V];return ie===void 0&&(ie=new ld,A[V]=ie),ie.getHandSpace()};function F(V){const ie=R.indexOf(V.inputSource);if(ie===-1)return;const oe=A[ie];oe!==void 0&&(oe.update(V.inputSource,V.frame,c||s),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",J);for(let V=0;V<A.length;V++){const ie=R[V];ie!==null&&(R[V]=null,A[V].disconnect(ie))}L=null,G=null,m.reset();for(const V in f)delete f[V];if(e.setRenderTarget(S),h=null,u=null,p=null,a=null,y=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),O!==null){const V=O.camera;V.fov=O.fov,V.zoom=O.zoom,V.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(V){if(a=V,a!==null){if(S=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",z),a.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,le=null,se=null;v.depth&&(se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=v.stencil?Ya:fr,le=v.stencil?ro:Zi);const be={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(be),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new qi(u.textureWidth,u.textureHeight,{format:ji,type:Jn,depthTexture:new so(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(a,n,oe),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new qi(h.framebufferWidth,h.framebufferHeight,{format:ji,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),fe.setContext(a),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(V){for(let ie=0;ie<V.removed.length;ie++){const oe=V.removed[ie],le=R.indexOf(oe);le>=0&&(R[le]=null,A[le].disconnect(oe))}for(let ie=0;ie<V.added.length;ie++){const oe=V.added[ie];let le=R.indexOf(oe);if(le===-1){for(let be=0;be<A.length;be++)if(be>=R.length){R.push(oe),le=be;break}else if(R[be]===null){R[be]=oe,le=be;break}if(le===-1)break}const se=A[le];se&&se.connect(oe)}}function W(V,ie){ie===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ie.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(a===null)return;let ie=V.near,oe=V.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),Y.near=P.near=N.near=ie,Y.far=P.far=N.far=oe,(L!==Y.near||G!==Y.far)&&(a.updateRenderState({depthNear:Y.near,depthFar:Y.far}),L=Y.near,G=Y.far),Y.layers.mask=V.layers.mask|6,N.layers.mask=Y.layers.mask&-5,P.layers.mask=Y.layers.mask&-3;const le=V.parent,se=Y.cameras;W(Y,le);for(let be=0;be<se.length;be++)W(se[be],le);Y.projectionMatrix.copy(N.projectionMatrix),Y.projectionMatrixInverse.copy(N.projectionMatrixInverse),O===null&&V.isPerspectiveCamera&&(O={camera:V,fov:V.fov,zoom:V.zoom}),D(V,Y,le)};function D(V,ie,oe){oe===null?V.matrix.copy(ie.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(ie.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ie.projectionMatrix),V.projectionMatrixInverse.copy(ie.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Al*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(V){return f[V]};let C=null;function ne(V,ie){if(d=ie.getViewerPose(c||s),_=ie,d!==null){const oe=d.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let le=!1;oe.length!==Y.cameras.length&&(Y.cameras.length=0,le=!0);for(let Se=0;Se<oe.length;Se++){const Ne=oe[Se];let X=null;if(h!==null)X=h.getViewport(Ne);else{const ze=p.getViewSubImage(u,Ne);X=ze.viewport,Se===0&&(e.setRenderTargetTextures(y,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(y))}let ue=H[Se];ue===void 0&&(ue=new di,ue.layers.enable(Se),ue.viewport=new zt,H[Se]=ue),ue.matrix.fromArray(Ne.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ne.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(X.x,X.y,X.width,X.height),Se===0&&(Y.matrix.copy(ue.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),le===!0&&Y.cameras.push(ue)}const se=a.enabledFeatures;if(se&&se.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const Se=p.getDepthInformation(oe[0]);Se&&Se.isValid&&Se.texture&&m.init(Se,a.renderState)}if(se&&se.includes("camera-access")&&M){e.state.unbindTexture(),p=i.getBinding();for(let Se=0;Se<oe.length;Se++){const Ne=oe[Se].camera;if(Ne){let X=f[Ne];X||(X=new $1,f[Ne]=X);const ue=p.getCameraImage(Ne);X.sourceTexture=ue}}}}for(let oe=0;oe<A.length;oe++){const le=R[oe],se=A[oe];le!==null&&se!==void 0&&se.update(le,ie,c||s)}C&&C(V,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const fe=new aM;fe.setAnimationLoop(ne),this.setAnimationLoop=function(V){C=V},this.dispose=function(){}}}const iN=new Ft,pM=new Ge;pM.set(-1,0,0,0,1,0,0,0,1);function aN(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,eM(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,v,S,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&h(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===kn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===kn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),S=v.envMap,y=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(iN.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(pM),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=S*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,v){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,n(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function rN(t,e,n,i){let a={},r={};function s(v,S){const y=S.program;i.uniformBlockBinding(v,y,a[v.id])}function o(v,S){let y=a[v.id];y===void 0&&(_(v),y=l(v),a[v.id]=y,v.addEventListener("dispose",m));const A=S.program;i.updateUBOMapping(v,A);const R=e.render.frame;r[v.id]!==R&&(c(v),r[v.id]=R)}function l(v){const S=t.createBuffer(),y=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,y,A),t.bindBuffer(t.UNIFORM_BUFFER,null),S}function c(v){const S=a[v.id],y=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let R=0,x=y.length;R<x;R++){const E=y[R];if(Array.isArray(E))for(let O=0,N=E.length;O<N;O++)d(E[O],R,O,A);else d(E,R,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(v,S,y,A){if(u(v,S,y,A)===!0){const R=v.__offset,x=v.value;if(Array.isArray(x)){let E=0;for(let O=0;O<x.length;O++){const N=x[O],P=M(N,!0);p(N,v.__data,E),E+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,R,v.__data)}}function p(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function u(v,S,y,A){const R=v.value,x=S+"_"+y;if(Array.isArray(R)){A[x]===void 0&&(A[x]=[]);const E=A[x];let O=!1;for(let N=0;N<R.length;N++)h(R[N],E,N)===!0&&(O=!0);return O}return h(R,A,x)}function h(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{const A=S[y];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function _(v){const S=v.uniforms;let y=0;const A=16;for(let x=0,E=S.length;x<E;x++){const O=Array.isArray(S[x])?S[x]:[S[x]];for(let N=0,P=O.length;N<P;N++){const H=O[N],Y=Array.isArray(H.value)?H.value:[H.value],L=Array.isArray(S[x])||Array.isArray(H.value);let G=y;for(let z=0,J=Y.length;z<J;z++){const W=Y[z],D=M(W,L),C=y%A,ne=C%D.boundary,fe=C+ne;y+=ne,fe!==0&&A-fe<D.storage&&(y+=A-fe),z===0&&(G=y),y+=D.storage}const F=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new F((y-G)/Float32Array.BYTES_PER_ELEMENT),H.__offset=G}}const R=y%A;return R>0&&(y+=A-R),v.__size=y,v.__cache={},this}function M(v,S){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){const S=v.target;S.removeEventListener("dispose",m),t.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function f(){for(const v in a)t.deleteBuffer(a[v]);a={},r={}}return{bind:s,update:o,dispose:f}}const sN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function oN(){return Pi===null&&(Pi=new eR(sN,16,16,Yr,Ki),Pi.name="DFG_LUT",Pi.minFilter=Gn,Pi.magFilter=Gn,Pi.wrapS=fa,Pi.wrapT=fa,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class lN{constructor(e={}){const{canvas:n=pA(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Jn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=s;const M=h,m=new Set([km,Vm,Gm]),f=new Set([Jn,Zi,El,ro,Bm,Hm]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let A=null,R=null;const x=[],E=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,H=null,Y=null,L=null,G=null;this._outputColorSpace=ci;let F=0,z=0,J=null,W=-1,D=null;const C=new zt,ne=new zt;let fe=null;const V=new ot(0);let ie=0,oe=n.width,le=n.height,se=1,be=null,Fe=null;const Se=new zt(0,0,oe,le),Ne=new zt(0,0,oe,le);let X=!1;const ue=new Rl,ze=new Ym;let Ze=!1,ut=!1;const at=new Ft,Gt=new Z,ft=new zt,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let un=!1;function fn(){return J===null?se:1}let B=i;function Sn(T,I){return n.getContext(T,I)}let gt,lt,ve,Lt,Ue,Ie,w,b,k,ce,ae,pe,_e,$,te,me,U,ee,Q,ge,de,xe,Le;try{const T={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Im}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",Xe,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),B===null){const I="webgl2";if(B=Sn(I,T),B===null)throw Sn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(T){throw n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Xe,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),ht("WebGLRenderer: "+T.message),T}function qe(){gt=new fw(B),gt.init(),de=new JD(B,gt),lt=new ew(B,gt,e,de),ve=new KD(B,gt),lt.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),Y=B.createFramebuffer(),L=B.createFramebuffer(),G=B.createFramebuffer(),Lt=new pw(B),Ue=new ID,Ie=new QD(B,gt,ve,Ue,lt,de,Lt),w=new uw(N),b=new gR(B),xe=new JC(B,b),k=new dw(B,b,Lt,xe),ce=new gw(B,k,b,xe,Lt),ee=new mw(B,lt,Ie),te=new tw(Ue),ae=new PD(N,w,gt,lt,xe,te),pe=new aN(N,Ue),_e=new FD,$=new jD(gt),U=new QC(N,w,ve,ce,_,l),me=new ZD(N,ce,lt),Le=new rN(B,Lt,lt,ve),Q=new $C(B,gt,Lt),ge=new hw(B,gt,Lt),Lt.programs=ae.programs,N.capabilities=lt,N.extensions=gt,N.properties=Ue,N.renderLists=_e,N.shadowMap=me,N.state=ve,N.info=Lt}M!==Jn&&(O=new xw(M,n.width,n.height,o,a,r));const he=new nN(N,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(oe,le,!1))},this.getSize=function(T){return T.set(oe,le)},this.setSize=function(T,I,K=!0){if(he.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,le=I,n.width=Math.floor(T*se),n.height=Math.floor(I*se),K===!0&&(n.style.width=T+"px",n.style.height=I+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(oe*se,le*se).floor()},this.setDrawingBufferSize=function(T,I,K){oe=T,le=I,se=K,n.width=Math.floor(T*K),n.height=Math.floor(I*K),this.setViewport(0,0,T,I)},this.setEffects=function(T){if(M===Jn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let I=0;I<T.length;I++)if(T[I].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,I,K,j){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,I,K,j),ve.viewport(C.copy(Se).multiplyScalar(fn()).round())},this.getScissor=function(T){return T.copy(Ne)},this.setScissor=function(T,I,K,j){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,I,K,j),ve.scissor(ne.copy(Ne).multiplyScalar(fn()).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){ve.setScissorTest(X=T)},this.setOpaqueSort=function(T){be=T},this.setTransparentSort=function(T){Fe=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,I=!0,K=!0){let j=0;if(T){let q=!1;if(J!==null){const Me=J.texture.format;q=m.has(Me)}if(q){const Me=J.texture.type,Re=f.has(Me),ye=U.getClearColor(),Ae=U.getClearAlpha(),De=ye.r,ke=ye.g,$e=ye.b;Re?(v[0]=De,v[1]=ke,v[2]=$e,v[3]=Ae,B.clearBufferuiv(B.COLOR,0,v)):(S[0]=De,S[1]=ke,S[2]=$e,S[3]=Ae,B.clearBufferiv(B.COLOR,0,S))}else j|=B.COLOR_BUFFER_BIT}I&&(j|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),H=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Xe,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),U.dispose(),_e.dispose(),$.dispose(),Ie.dispose(),Ue.dispose(),w.dispose(),ce.dispose(),k.dispose(),xe.dispose(),Le.dispose(),ae.dispose(),he.dispose(),he.removeEventListener("sessionstart",a0),he.removeEventListener("sessionend",r0),mr.stop()};function Pe(T){T.preventDefault(),fv("WebGLRenderer: Context Lost."),P=!0}function Xe(){fv("WebGLRenderer: Context Restored."),P=!1;const T=Lt.autoReset,I=me.enabled,K=me.autoUpdate,j=me.needsUpdate,q=me.type;qe(),Lt.autoReset=T,me.enabled=I,me.autoUpdate=K,me.needsUpdate=j,me.type=q}function Ee(T){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xt(T){const I=T.target;I.removeEventListener("dispose",xt),en(I)}function en(T){Ta(T),Ue.remove(T)}function Ta(T){const I=Ue.get(T).programs;I!==void 0&&(I.forEach(function(K){ae.releaseProgram(K)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,K,j,q,Me){I===null&&(I=cn);const Re=q.isMesh&&q.matrixWorld.determinantAffine()<0,ye=vM(T,I,K,j,q);ve.setMaterial(j,Re);let Ae=K.index,De=1;if(j.wireframe===!0){if(Ae=k.getWireframeAttribute(K),Ae===void 0)return;De=2}const ke=K.drawRange,$e=K.attributes.position;let Ce=ke.start*De,et=(ke.start+ke.count)*De;Me!==null&&(Ce=Math.max(Ce,Me.start*De),et=Math.min(et,(Me.start+Me.count)*De)),Ae!==null?(Ce=Math.max(Ce,0),et=Math.min(et,Ae.count)):$e!=null&&(Ce=Math.max(Ce,0),et=Math.min(et,$e.count));const jt=et-Ce;if(jt<0||jt===1/0)return;xe.setup(q,j,ye,K,Ae);let Ct,Tt=Q;if(Ae!==null&&(Ct=b.get(Ae),Tt=ge,Tt.setIndex(Ct)),q.isMesh)j.wireframe===!0?(ve.setLineWidth(j.wireframeLinewidth*fn()),Tt.setMode(B.LINES)):Tt.setMode(B.TRIANGLES);else if(q.isLine){let Mn=j.linewidth;Mn===void 0&&(Mn=1),ve.setLineWidth(Mn*fn()),q.isLineSegments?Tt.setMode(B.LINES):q.isLineLoop?Tt.setMode(B.LINE_LOOP):Tt.setMode(B.LINE_STRIP)}else q.isPoints?Tt.setMode(B.POINTS):q.isSprite&&Tt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Mn=q._multiDrawStarts,we=q._multiDrawCounts,wn=q._multiDrawCount,dt=Ae?b.get(Ae).bytesPerElement:1,gr=Ue.get(j).currentProgram.getUniforms();for(let bn=0;bn<wn;bn++)gr.setValue(B,"_gl_DrawID",bn),Tt.render(Mn[bn]/dt,we[bn])}else if(q.isInstancedMesh)Tt.renderInstances(Ce,jt,q.count);else if(K.isInstancedBufferGeometry){const Mn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,we=Math.min(K.instanceCount,Mn);Tt.renderInstances(Ce,jt,we)}else Tt.render(Ce,jt)};function i0(T,I,K,j){H!==null&&T.isNodeMaterial&&H.setObject(j,T),Ze===!0&&te.setState(T,K,!1),T.transparent===!0&&T.side===la&&T.forceSinglePass===!1?(T.side=kn,T.needsUpdate=!0,So(T,I,j),T.side=qr,T.needsUpdate=!0,So(T,I,j),T.side=la):So(T,I,j)}this.compile=function(T,I,K=null){K===null&&(K=T),H!==null&&H.renderStart(T,I,K),R=$.get(K),R.init(I),E.push(R),K.traverseVisible(function(q){q.isLight&&q.layers.test(I.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),T!==K&&T.traverseVisible(function(q){q.isLight&&q.layers.test(I.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),R.setupLights(),H!==null&&H.updateLights(R.state.lightsArray),ut=this.localClippingEnabled,Ze=te.init(this.clippingPlanes,ut),Ze===!0&&te.setGlobalState(this.clippingPlanes,I),H!==null&&me.render(R.state.shadowsArray,K,I);const j=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const ye=Me[Re];i0(ye,K,I,q),j.add(ye)}else i0(Me,K,I,q),j.add(Me)}),R=E.pop(),H!==null&&H.renderEnd(),j},this.compileAsync=function(T,I,K=null){const j=this.compile(T,I,K);return new Promise(q=>{function Me(){if(j.forEach(function(Re){const Ae=Ue.get(Re).currentProgram;(Ae===void 0||Ae.isReady())&&j.delete(Re)}),j.size===0){q(T);return}setTimeout(Me,10)}gt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let pf=null;function mM(T){pf&&pf(T)}function a0(){mr.stop()}function r0(){mr.start()}const mr=new aM;mr.setAnimationLoop(mM),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(T){pf=T,he.setAnimationLoop(T),T===null?mr.stop():mr.start()},he.addEventListener("sessionstart",a0),he.addEventListener("sessionend",r0),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;H!==null&&H.renderStart(T,I);const K=he.enabled===!0&&he.isPresenting===!0,j=O!==null&&(J===null||K)&&O.begin(N,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(I),I=he.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,I,J),R=$.get(T,E.length),R.init(I),R.state.textureUnits=Ie.getTextureUnits(),E.push(R),at.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?ze.setFromArrayCamera(I):ue.setFromProjectionMatrix(at,Ri,I.reversedDepth),ut=this.localClippingEnabled,Ze=te.init(this.clippingPlanes,ut),A=_e.get(T,x.length),A.init(),x.push(A),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){const Re=N.xr.getDepthSensingMesh();Re!==null&&mf(Re,I,-1/0,N.sortObjects)}mf(T,I,0,N.sortObjects),A.finish(),H!==null&&H.updateLights(R.state.lightsArray),N.sortObjects===!0&&A.sort(be,Fe),un=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,un&&U.addToRenderList(A,T),this.info.autoReset===!0&&this.info.reset(),Ze===!0&&te.beginShadows();const q=R.state.shadowsArray;if(me.render(q,T,I),Ze===!0&&te.endShadows(),(j&&O.hasRenderPass())===!1){const Re=A.opaque,ye=A.transmissive;if(R.setupLights(),I.isArrayCamera){const Ae=I.cameras;if(ye.length>0)for(let De=0,ke=Ae.length;De<ke;De++){const $e=Ae[De];o0(Re,ye,T,$e)}un&&U.render(T);for(let De=0,ke=Ae.length;De<ke;De++){const $e=Ae[De];s0(A,T,$e,$e.viewport)}}else ye.length>0&&o0(Re,ye,T,I),un&&U.render(T),s0(A,T,I)}J!==null&&z===0&&(Ie.updateMultisampleRenderTarget(J),Ie.updateRenderTargetMipmap(J)),j&&O.end(N),T.isScene===!0&&T.onAfterRender(N,T,I),xe.resetDefaultState(),W=-1,D=null,E.pop(),E.length>0?(R=E[E.length-1],Ie.setTextureUnits(R.state.textureUnits),Ze===!0&&te.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,H!==null&&H.renderEnd()};function mf(T,I,K,j){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)R.pushLight(T),T.castShadow&&R.pushShadow(T);else if(T.isSprite){const Re=I.isArrayCamera?ze:ue;if(!T.frustumCulled||T.intersectsFrustum(Re)){j&&ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(at);const ye=ce.update(T),Ae=T.material;Ae.visible&&A.push(T,ye,Ae,K,ft.z,null,I)}}else if(T.isMesh||T.isLine||T.isPoints){const Re=I.isArrayCamera?ze:ue;if(!T.frustumCulled||T.intersectsFrustum(Re)){const ye=ce.update(T),Ae=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ft.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ft.copy(ye.boundingSphere.center)),ft.applyMatrix4(T.matrixWorld).applyMatrix4(at)),Array.isArray(Ae)){const De=ye.groups;for(let ke=0,$e=De.length;ke<$e;ke++){const Ce=De[ke],et=Ae[Ce.materialIndex];et&&et.visible&&A.push(T,ye,et,K,ft.z,Ce,I)}}else Ae.visible&&A.push(T,ye,Ae,K,ft.z,null,I)}}}const Me=T.children;for(let Re=0,ye=Me.length;Re<ye;Re++)mf(Me[Re],I,K,j)}function s0(T,I,K,j){const{opaque:q,transmissive:Me,transparent:Re}=T;R.setupLightsView(K),Ze===!0&&te.setGlobalState(N.clippingPlanes,K),j&&ve.viewport(C.copy(j)),q.length>0&&kl(q,I,K),Me.length>0&&kl(Me,I,K),Re.length>0&&kl(Re,I,K),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function o0(T,I,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[j.id]===void 0){const Ce=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[j.id]=new qi(1,1,{generateMipmaps:!0,type:Ce?Ki:Jn,minFilter:qa,samples:Math.max(4,lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Me=R.state.transmissionRenderTarget[j.id],Re=j.viewport||C;Me.setSize(Re.z*N.transmissionResolutionScale,Re.w*N.transmissionResolutionScale);const ye=N.getRenderTarget(),Ae=N.getActiveCubeFace(),De=N.getActiveMipmapLevel();N.setRenderTarget(Me),N.getClearColor(V),ie=N.getClearAlpha(),ie<1&&N.setClearColor(16777215,.5),N.clear(),un&&U.render(K);const ke=N.toneMapping;N.toneMapping=pa;const $e=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),R.setupLightsView(j),Ze===!0&&te.setGlobalState(N.clippingPlanes,j),kl(T,K,j),Ie.updateMultisampleRenderTarget(Me),Ie.updateRenderTargetMipmap(Me),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let et=0,jt=I.length;et<jt;et++){const Ct=I[et],{object:Tt,geometry:Mn,material:we,group:wn}=Ct;if(we.side===la&&Tt.layers.test(j.layers)){const dt=we.side;we.side=kn,we.needsUpdate=!0,l0(Tt,K,j,Mn,we,wn),we.side=dt,we.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ie.updateMultisampleRenderTarget(Me),Ie.updateRenderTargetMipmap(Me))}N.setRenderTarget(ye,Ae,De),N.setClearColor(V,ie),$e!==void 0&&(j.viewport=$e),N.toneMapping=ke}function kl(T,I,K){const j=I.isScene===!0?I.overrideMaterial:null;for(let q=0,Me=T.length;q<Me;q++){const Re=T[q],{object:ye,geometry:Ae,group:De}=Re;let ke=Re.material;ke.allowOverride===!0&&j!==null&&(ke=j),ye.layers.test(K.layers)&&l0(ye,I,K,Ae,ke,De)}}function l0(T,I,K,j,q,Me){H!==null&&q.isNodeMaterial&&H.setObject(T,q),T.onBeforeRender(N,I,K,j,q,Me),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(N,I,K,j,T,Me),q.transparent===!0&&q.side===la&&q.forceSinglePass===!1?(q.side=kn,q.needsUpdate=!0,N.renderBufferDirect(K,I,j,q,T,Me),q.side=qr,q.needsUpdate=!0,N.renderBufferDirect(K,I,j,q,T,Me),q.side=la):N.renderBufferDirect(K,I,j,q,T,Me),T.onAfterRender(N,I,K,j,q,Me)}function c0(T){let I=0;for(const K of T)K.texture!==null&&I++;return I}function So(T,I,K){I.isScene!==!0&&(I=cn);const j=Ue.get(T),q=R.state.lights,Me=R.state.shadowsArray,Re=q.state.version,ye=ae.getParameters(T,q.state,Me,I,K,R.state.lightProbeGridArray),Ae=ae.getProgramCacheKey(ye);let De=j.programs;j.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,j.fog=I.fog;const ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;j.envMap=w.get(T.envMap||j.environment,ke),j.envMapRotation=j.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",xt),De=new Map,j.programs=De,j.programVariants=new Map);let $e=De.get(Ae);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===Re)return f0(T,ye),$e}else ye.uniforms=ae.getUniforms(T),H!==null&&T.isNodeMaterial&&H.build(T,K,ye),T.onBeforeCompile(ye,N),$e=ae.acquireProgram(ye,Ae),De.set(Ae,$e),j.uniforms=ye.uniforms;const Ce=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=te.uniform),f0(T,ye),j.needsLights=_M(T),j.lightsStateVersion=Re,j.needsLights&&(Ce.ambientLightColor.value=q.state.ambient,Ce.lightProbe.value=q.state.probe,Ce.sunLights.value=q.state.sun,Ce.sunLightShadows.value=q.state.sunShadow,Ce.directionalLights.value=q.state.directional,Ce.directionalLightShadows.value=q.state.directionalShadow,Ce.spotLights.value=q.state.spot,Ce.spotLightShadows.value=q.state.spotShadow,Ce.rectAreaLights.value=q.state.rectArea,Ce.ltc_1.value=q.state.rectAreaLTC1,Ce.ltc_2.value=q.state.rectAreaLTC2,Ce.pointLights.value=q.state.point,Ce.pointLightShadows.value=q.state.pointShadow,Ce.hemisphereLights.value=q.state.hemi,Ce.sunShadowMatrix.value=q.state.sunShadowMatrix,Ce.sunShadowCascade.value=q.state.sunShadowCascade,Ce.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ce.spotLightMatrix.value=q.state.spotLightMatrix,Ce.spotLightMap.value=q.state.spotLightMap,Ce.pointShadowMatrix.value=q.state.pointShadowMatrix),j.numLightProbeGrids=c0(R.state.lightProbeGridArray),j.currentProgram=$e,j.uniformsList=null,$e}function gM(T,I,K,j,q){const Me=Ue.get(T),Re=Me.currentProgram.id+","+j+","+q;let ye=Me.programVariants.get(Re);return ye===void 0?(ye=So(T,I,K),Me.programVariants.set(Re,ye)):(Me.currentProgram=ye,Me.uniformsList=null,Me.outputColorSpace=j,Me.toneMapping=q),ye}function u0(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=au.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function f0(T,I){const K=Ue.get(T);K.outputColorSpace=I.outputColorSpace,K.batching=I.batching,K.batchingColor=I.batchingColor,K.instancing=I.instancing,K.instancingColor=I.instancingColor,K.instancingMorph=I.instancingMorph,K.skinning=I.skinning,K.morphTargets=I.morphTargets,K.morphNormals=I.morphNormals,K.morphColors=I.morphColors,K.morphTargetsCount=I.morphTargetsCount,K.numClippingPlanes=I.numClippingPlanes,K.numIntersection=I.numClipIntersection,K.vertexAlphas=I.vertexAlphas,K.vertexTangents=I.vertexTangents,K.toneMapping=I.toneMapping}function vM(T,I,K,j,q){I.isScene!==!0&&(I=cn),Ie.resetTextureUnits();const Me=I.fog,Re=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?I.environment:null,ye=J===null?N.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:rt.workingColorSpace,Ae=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,De=w.get(j.envMap||Re,Ae),ke=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,$e=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ce=!!K.morphAttributes.position,et=!!K.morphAttributes.normal,jt=!!K.morphAttributes.color;let Ct=pa;j.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ct=N.toneMapping);const Tt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mn=Tt!==void 0?Tt.length:0,we=Ue.get(j),wn=R.state.lights;if(Ze===!0&&(ut===!0||T!==D)){const Pt=T===D&&j.id===W;te.setState(j,T,Pt)}let dt=!1,gr=!1;j.version===we.__version?we.needsLights&&we.lightsStateVersion!==wn.state.version||q.isBatchedMesh&&we.batching===!1||!q.isBatchedMesh&&we.batching===!0||q.isBatchedMesh&&we.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&we.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&we.instancing===!1||!q.isInstancedMesh&&we.instancing===!0||q.isSkinnedMesh&&we.skinning===!1||!q.isSkinnedMesh&&we.skinning===!0||q.isInstancedMesh&&we.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&we.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&we.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&we.instancingMorph===!1&&q.morphTexture!==null||we.envMap!==De||j.fog===!0&&we.fog!==Me||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==ke||we.vertexTangents!==$e||we.morphTargets!==Ce||we.morphNormals!==et||we.morphColors!==jt||we.morphTargetsCount!==Mn||we.numLightProbeGrids!==c0(R.state.lightProbeGridArray)?dt=!0:(we.outputColorSpace!==ye||we.toneMapping!==Ct)&&(gr=!0):(dt=!0,we.__version=j.version);let bn=we.currentProgram;(dt===!0||gr===!0)&&(bn=gr===!0?gM(j,I,q,ye,Ct):So(j,I,q),H&&j.isNodeMaterial&&H.onUpdateProgram(j,bn,we));let jl=!1,Aa=!1,vr=!1;const st=bn.getUniforms(),dn=we.uniforms;if(ve.useProgram(bn.program)&&(jl=!0,Aa=!0,vr=!0),j.id!==W&&(W=j.id,Aa=!0),jl||D!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),st.setValue(B,"projectionMatrix",T.projectionMatrix),st.setValue(B,"viewMatrix",T.matrixWorldInverse);const tn=st.map.cameraPosition;tn!==void 0&&tn.setValue(B,Gt.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&st.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&st.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),D!==T&&(D=T,Aa=!0,vr=!0)}if(we.needsLights&&(wn.state.sunShadowMap.length>0&&st.setValue(B,"sunShadowMap",wn.state.sunShadowMap,Ie),wn.state.directionalShadowMap.length>0&&st.setValue(B,"directionalShadowMap",wn.state.directionalShadowMap,Ie),wn.state.spotShadowMap.length>0&&st.setValue(B,"spotShadowMap",wn.state.spotShadowMap,Ie),wn.state.pointShadowMap.length>0&&st.setValue(B,"pointShadowMap",wn.state.pointShadowMap,Ie)),q.isSkinnedMesh){st.setOptional(B,q,"bindMatrix"),st.setOptional(B,q,"bindMatrixInverse");const Pt=q.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),st.setValue(B,"boneTexture",Pt.boneTexture,Ie))}q.isBatchedMesh&&(st.setOptional(B,q,"batchingTexture"),st.setValue(B,"batchingTexture",q._matricesTexture,Ie),st.setOptional(B,q,"batchingIdTexture"),st.setValue(B,"batchingIdTexture",q._indirectTexture,Ie),st.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&st.setValue(B,"batchingColorTexture",q._colorsTexture,Ie));const xi=K.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&ee.update(q,K,bn),(Aa||we.receiveShadow!==q.receiveShadow)&&(we.receiveShadow=q.receiveShadow,st.setValue(B,"receiveShadow",q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&I.environment!==null&&(dn.envMapIntensity.value=I.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=oN()),Aa){if(st.setValue(B,"toneMappingExposure",N.toneMappingExposure),we.needsLights&&xM(dn,vr),Me&&j.fog===!0&&pe.refreshFogUniforms(dn,Me),pe.refreshMaterialUniforms(dn,j,se,le,R.state.transmissionRenderTarget[T.id]),we.needsLights&&we.numLightProbeGrids>0){const Pt=y;let tn=0;for(const $i of R.state.lightProbeGridArray)$i.texture!==null&&(Pt.textures[tn]=$i.texture,Pt.min[tn]=$i.boundingBox.min,Pt.max[tn]=$i.boundingBox.max,Pt.resolution[tn]=$i.resolution,tn++);for(const $i in Pt)Pt[$i].length=tn;dn.probesSH.value=Pt.textures,dn.probesMin.value=Pt.min,dn.probesMax.value=Pt.max,dn.probesResolution.value=Pt.resolution}au.upload(B,u0(we),dn,Ie)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(au.upload(B,u0(we),dn,Ie),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&st.setValue(B,"center",q.center),st.setValue(B,"modelViewMatrix",q.modelViewMatrix),st.setValue(B,"normalMatrix",q.normalMatrix),st.setValue(B,"modelMatrix",q.matrixWorld),j.uniformsGroups!==void 0){const Pt=j.uniformsGroups;for(let tn=0,$i=Pt.length;tn<$i;tn++){const h0=Pt[tn];Le.update(h0,bn),Le.bind(h0,bn)}}return bn}function xM(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.sunLights.needsUpdate=I,T.sunLightShadows.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function _M(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,I,K){const j=Ue.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ue.get(T.texture).__webglTexture=I,Ue.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,I){const K=Ue.get(T);K.__webglFramebuffer=I,K.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,K=0){J=T,F=I,z=K;let j=null,q=!1,Me=!1;if(T){const ye=Ue.get(T);if(ye.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(B.FRAMEBUFFER,ye.__webglFramebuffer),C.copy(T.viewport),ne.copy(T.scissor),fe=T.scissorTest,ve.viewport(C),ve.scissor(ne),ve.setScissorTest(fe),W=-1;return}else if(ye.__webglFramebuffer===void 0)Ie.setupRenderTarget(T);else if(ye.__hasExternalTextures)Ie.rebindTextures(T,Ue.get(T.texture).__webglTexture,Ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(ye.__boundDepthTexture!==ke){if(ke!==null&&Ue.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Me=!0);const De=Ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[I])?j=De[I][K]:j=De[I],q=!0):T.samples>0&&Ie.useMultisampledRTT(T)===!1?j=Ue.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?j=De[K]:j=De,C.copy(T.viewport),ne.copy(T.scissor),fe=T.scissorTest}else C.copy(Se).multiplyScalar(se).floor(),ne.copy(Ne).multiplyScalar(se).floor(),fe=X;if(K!==0&&(j=Y),ve.bindFramebuffer(B.FRAMEBUFFER,j)&&ve.drawBuffers(T,j),ve.viewport(C),ve.scissor(ne),ve.setScissorTest(fe),q){const ye=Ue.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,K)}else if(Me){const ye=I;for(let Ae=0;Ae<T.textures.length;Ae++){const De=Ue.get(T.textures[Ae]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ae,De.__webglTexture,K,ye)}}else if(T!==null&&K!==0){const ye=Ue.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ye.__webglTexture,K)}W=-1};function d0(T){const I=Ue.get(T);return(I.__readFormat!==T.format||I.__readType!==T.type)&&(I.__readFormat=T.format,I.__readType=T.type,I.__formatReadable=lt.textureFormatReadable(T.format),I.__typeReadable=lt.textureTypeReadable(T.type)),I}this.readRenderTargetPixels=function(T,I,K,j,q,Me,Re,ye=0){if(!(T&&T.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ae=Ae[Re],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){ve.bindFramebuffer(B.FRAMEBUFFER,Ae);try{const De=T.textures[ye],ke=De.format,$e=De.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ye);const Ce=d0(De);if(Ce.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-j&&K>=0&&K<=T.height-q&&B.readPixels(I,K,j,q,de.convert(ke),de.convert($e),Me)}finally{const De=J!==null?Ue.get(J).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,I,K,j,q,Me,Re,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ae=Ae[Re],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(I>=0&&I<=T.width-j&&K>=0&&K<=T.height-q){ve.bindFramebuffer(B.FRAMEBUFFER,Ae);const De=T.textures[ye],ke=De.format,$e=De.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ye);const Ce=d0(De);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.bufferData(B.PIXEL_PACK_BUFFER,Me.byteLength,B.STREAM_READ),B.readPixels(I,K,j,q,de.convert(ke),de.convert($e),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const jt=J!==null?Ue.get(J).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,jt);const Ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await mA(B,Ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Me),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(et),B.deleteSync(Ct),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,I=null,K=0){const j=Math.pow(2,-K),q=Math.floor(T.image.width*j),Me=Math.floor(T.image.height*j),Re=I!==null?I.x:0,ye=I!==null?I.y:0;Ie.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Re,ye,q,Me),ve.unbindTexture()},this.copyTextureToTexture=function(T,I,K=null,j=null,q=0,Me=0){let Re,ye,Ae,De,ke,$e,Ce,et,jt;const Ct=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(K!==null)Re=K.max.x-K.min.x,ye=K.max.y-K.min.y,Ae=K.isBox3?K.max.z-K.min.z:1,De=K.min.x,ke=K.min.y,$e=K.isBox3?K.min.z:0;else{const st=Math.pow(2,-q);Re=Math.floor(Ct.width*st),ye=Math.floor(Ct.height*st),T.isDataArrayTexture?Ae=Ct.depth:T.isData3DTexture?Ae=Math.floor(Ct.depth*st):Ae=1,De=0,ke=0,$e=0}j!==null?(Ce=j.x,et=j.y,jt=j.z):(Ce=0,et=0,jt=0);const Tt=de.convert(I.format),Mn=de.convert(I.type);let we;I.isData3DTexture?(Ie.setTexture3D(I,0),we=B.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ie.setTexture2DArray(I,0),we=B.TEXTURE_2D_ARRAY):(Ie.setTexture2D(I,0),we=B.TEXTURE_2D),ve.activeTexture(B.TEXTURE0),ve.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,I.flipY),ve.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ve.pixelStorei(B.UNPACK_ALIGNMENT,I.unpackAlignment);const wn=ve.getParameter(B.UNPACK_ROW_LENGTH),dt=ve.getParameter(B.UNPACK_IMAGE_HEIGHT),gr=ve.getParameter(B.UNPACK_SKIP_PIXELS),bn=ve.getParameter(B.UNPACK_SKIP_ROWS),jl=ve.getParameter(B.UNPACK_SKIP_IMAGES);ve.pixelStorei(B.UNPACK_ROW_LENGTH,Ct.width),ve.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ct.height),ve.pixelStorei(B.UNPACK_SKIP_PIXELS,De),ve.pixelStorei(B.UNPACK_SKIP_ROWS,ke),ve.pixelStorei(B.UNPACK_SKIP_IMAGES,$e);const Aa=T.isDataArrayTexture||T.isData3DTexture,vr=I.isDataArrayTexture||I.isData3DTexture;if(T.isDepthTexture){const st=Ue.get(T),dn=Ue.get(I),xi=Ue.get(st.__renderTarget),Pt=Ue.get(dn.__renderTarget);ve.bindFramebuffer(B.READ_FRAMEBUFFER,xi.__webglFramebuffer),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let tn=0;tn<Ae;tn++)Aa&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(T).__webglTexture,q,$e+tn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(I).__webglTexture,Me,jt+tn)),B.blitFramebuffer(De,ke,De+Re,ke+ye,Ce,et,Ce+Re,et+ye,B.DEPTH_BUFFER_BIT,B.NEAREST);ve.bindFramebuffer(B.READ_FRAMEBUFFER,null),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||Ue.has(T)){const st=Ue.get(T),dn=Ue.get(I);ve.bindFramebuffer(B.READ_FRAMEBUFFER,L),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,G);for(let xi=0;xi<Ae;xi++)Aa?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,st.__webglTexture,q,$e+xi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,st.__webglTexture,q),vr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dn.__webglTexture,Me,jt+xi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dn.__webglTexture,Me),q!==0?B.blitFramebuffer(De,ke,De+Re,ke+ye,Ce,et,Ce+Re,et+ye,B.COLOR_BUFFER_BIT,B.NEAREST):vr?B.copyTexSubImage3D(we,Me,Ce,et,jt+xi,De,ke,Re,ye):B.copyTexSubImage2D(we,Me,Ce,et,De,ke,Re,ye);ve.bindFramebuffer(B.READ_FRAMEBUFFER,null),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vr?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(we,Me,Ce,et,jt,Re,ye,Ae,Tt,Mn,Ct.data):I.isCompressedArrayTexture?B.compressedTexSubImage3D(we,Me,Ce,et,jt,Re,ye,Ae,Tt,Ct.data):B.texSubImage3D(we,Me,Ce,et,jt,Re,ye,Ae,Tt,Mn,Ct):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Me,Ce,et,Re,ye,Tt,Mn,Ct.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Me,Ce,et,Ct.width,Ct.height,Tt,Ct.data):B.texSubImage2D(B.TEXTURE_2D,Me,Ce,et,Re,ye,Tt,Mn,Ct);ve.pixelStorei(B.UNPACK_ROW_LENGTH,wn),ve.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt),ve.pixelStorei(B.UNPACK_SKIP_PIXELS,gr),ve.pixelStorei(B.UNPACK_SKIP_ROWS,bn),ve.pixelStorei(B.UNPACK_SKIP_IMAGES,jl),Me===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&B.generateMipmap(we),ve.unbindTexture()},this.initRenderTarget=function(T){Ue.get(T).__webglFramebuffer===void 0&&Ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){F=0,z=0,J=null,ve.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}const nx=[{title:"Satyam Rajpoot — Introduction",speech:"👋 Hey there! I'm Satyam's 3D AI companion. Welcome to his creative portfolio! Here you'll see how he crafts award-winning web experiences.",nextTitle:"About Satyam & Journey",nextTeaser:"Scroll down to discover his coding journey, development philosophy, and live code metrics!",badge:"STAGE 01 // WELCOME"},{title:"About Satyam",speech:"✨ Here's Satyam's backstory! 3+ years of intense full-stack engineering, crafting modern digital realities with clean code.",nextTitle:"Tech Stack & Superpowers",nextTeaser:"Next up: Explore his tech stack including React, Three.js, Node.js, and modern databases!",badge:"STAGE 02 // DNA"},{title:"Technical Arsenal",speech:"⚡ Check out his core stack! Interactive mastery ratings across frontend, backend, 3D WebGL, and cloud deployment.",nextTitle:"Featured Projects Showcase",nextTeaser:"Hold tight! Next are Satyam's flagship client sites and full-stack web applications with live previews!",badge:"STAGE 03 // ARSENAL"},{title:"Featured Works & Projects",speech:"🚀 Explore his top builds! From 3D luxury commerce to AI dashboards and FinTech platforms. You can filter and view live demos!",nextTitle:"Services & Workflow",nextTeaser:"Coming next: The bespoke services Satyam provides for clients and companies worldwide.",badge:"STAGE 04 // SHOWCASE"},{title:"Services & Experience",speech:"💼 Satyam builds high-performance SPAs, 3D interactive web experiences, scalable REST APIs, and conducts luxury redesigns.",nextTitle:"Let's Connect & Collaborate",nextTeaser:"Final section: Send a direct message to Satyam or book a consultation for your next big idea!",badge:"STAGE 05 // SERVICES"},{title:"Contact & Hire Satyam",speech:"📬 You reached the final station! Have a project or role in mind? Drop a message right here, and Satyam will get back to you promptly!",nextTitle:"Back to Introduction",nextTeaser:"Scroll back up or jump straight to the top to replay the journey!",badge:"STAGE 06 // CONNECT"}];function ix(t=520){try{const e=new(window.AudioContext||window.webkitAudioContext),n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(t,e.currentTime),n.frequency.exponentialRampToValueAtTime(t*1.5,e.currentTime+.15),i.gain.setValueAtTime(.08,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.35),n.connect(i),i.connect(e.destination),n.start(),n.stop(e.currentTime+.35)}catch{}}function cN({currentSection:t,totalSections:e,onNavigateNext:n}){const i=Oe.useRef(null),[a,r]=Oe.useState(!0),[s,o]=Oe.useState(!1),[l,c]=Oe.useState(!1),[d,p]=Oe.useState(""),u=Oe.useRef(null),h=Oe.useRef(null),_=Oe.useRef(null),M=Oe.useRef(null),m=Oe.useRef(null),f=Oe.useRef({x:0,y:0}),v=nx[t]||nx[0];Oe.useEffect(()=>{let y=0;p("");const A=v.speech,R=setInterval(()=>{y++,p(A.slice(0,y)),y>=A.length&&clearInterval(R)},18);if(a&&ix(440+t*80),s&&"speechSynthesis"in window){window.speechSynthesis.cancel();const x=new SpeechSynthesisUtterance(v.speech);x.rate=1.05,x.pitch=1.1,window.speechSynthesis.speak(x)}return()=>clearInterval(R)},[t,a,s]),Oe.useEffect(()=>{const y=A=>{f.current.x=A.clientX/window.innerWidth*2-1,f.current.y=-(A.clientY/window.innerHeight)*2+1};return window.addEventListener("mousemove",y),()=>window.removeEventListener("mousemove",y)},[]),Oe.useEffect(()=>{const y=i.current;if(!y)return;const A=y.clientWidth||300,R=y.clientHeight||340,x=new WA,E=new di(45,A/R,.1,100);E.position.set(0,.2,3.8);const O=new lN({alpha:!0,antialias:!0});O.setSize(A,R),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.toneMapping=zm,y.innerHTML="",y.appendChild(O.domElement);const N=new dR(16777215,1.2);x.add(N);const P=new Lv(16777215,2.5);P.position.set(3,4,4),x.add(P);const H=new Lv(13948120,3);H.position.set(-3,-2,-2),x.add(H);const Y=new uR(16777215,1.5,6);Y.position.set(0,1.5,1.5),x.add(Y);const L=new ca;u.current=L,x.add(L);const G=new ca;h.current=G,L.add(G);const F=new Tr({color:15718600,roughness:.45,metalness:.05}),z=new rl(.55,32,32);z.scale(1,1.15,.95);const J=new bt(z,F);G.add(J);const W=new Tr({color:1579035,roughness:.6,metalness:.2}),D=new rl(.58,24,24,0,Math.PI*2,0,Math.PI*.58),C=new bt(D,W);C.position.y=.12,G.add(C);for(let U=-3;U<=3;U++){const ee=new Zm(.12,.35,8);ee.rotateX(Math.PI*.4);const Q=new bt(ee,W);Q.position.set(U*.12,.55,.48),Q.rotation.z=U*-.1,G.add(Q)}const ne=new rr(.85,.18,.15),fe=new Tr({color:328965,metalness:.9,roughness:.1,emissive:16777215,emissiveIntensity:.35}),V=new bt(ne,fe);V.position.set(0,.08,.52),G.add(V);const ie=new wr(.48,.02,8,32,Math.PI*.8),oe=new Bo({color:16777215}),le=new bt(ie,oe);le.position.set(0,.08,.35),G.add(le);const se=new Tr({color:986898,metalness:.85,roughness:.2}),be=new Bo({color:16777215}),Fe=new wr(.65,.06,16,32,Math.PI);Fe.rotateZ(Math.PI);const Se=new bt(Fe,se);Se.position.y=.15,G.add(Se);const Ne=new Ur(.22,.22,.14,24);Ne.rotateZ(Math.PI/2);const X=new bt(Ne,se);X.position.set(-.62,.05,0),G.add(X);const ue=new bt(new Bu(.12,.16,24),be);ue.rotateY(Math.PI/2),ue.position.set(-.7,.05,0),G.add(ue);const ze=new bt(Ne,se);ze.position.set(.62,.05,0),G.add(ze);const Ze=new bt(new Bu(.12,.16,24),be);Ze.rotateY(-Math.PI/2),Ze.position.set(.7,.05,0),G.add(Ze);const ut=new Tr({color:1184279,roughness:.7,metalness:.1}),at=new Ur(.25,.3,.3,16),Gt=new bt(at,F);Gt.position.y=-.6,L.add(Gt);const ft=new Ur(.5,.65,1.1,24),cn=new bt(ft,ut);cn.position.y=-1.25,L.add(cn);const un=new wr(.42,.1,12,24);un.rotateX(Math.PI/2);const fn=new bt(un,ut);fn.position.y=-.72,L.add(fn);const B=new rr(.04,.9,.05),Sn=new Tr({color:16777215,metalness:.9,roughness:.1}),gt=new bt(B,Sn);gt.position.set(0,-1.25,.58),L.add(gt);const lt=new ca;lt.position.set(.68,-.85,0),_.current=lt,L.add(lt);const ve=new Ur(.14,.12,.7,16);ve.translate(0,-.35,0);const Lt=new bt(ve,ut);lt.add(Lt);const Ue=new rl(.14,16,16),Ie=new bt(Ue,F);Ie.position.set(0,-.75,0),lt.add(Ie);const w=new ca;w.position.set(-.68,-.85,0),M.current=w,L.add(w);const b=new bt(ve,ut);w.add(b);const k=new bt(Ue,F);k.position.set(0,-.75,0),w.add(k);const ce=new ca;m.current=ce,L.add(ce);const ae=new bt(new wr(1.3,.015,12,48),new Bo({color:16777215,transparent:!0,opacity:.35}));ae.rotation.x=Math.PI*.35,ce.add(ae);const pe=new bt(new wr(1.6,.012,12,48),new Bo({color:13948120,transparent:!0,opacity:.25}));pe.rotation.y=Math.PI*.25,ce.add(pe);for(let U=0;U<8;U++){const ee=new rr(.08,.08,.08),Q=new Tr({color:16777215,metalness:.8,roughness:.2,emissive:4473924}),ge=new bt(ee,Q),de=U/8*Math.PI*2;ge.position.set(Math.cos(de)*1.4,Math.sin(de)*.8-.5,Math.sin(de*2)*.5),ce.add(ge)}L.position.y=.25;let _e=new pR,$;const te=()=>{$=requestAnimationFrame(te);const U=_e.getElapsedTime();u.current&&(u.current.position.y=.25+Math.sin(U*1.8)*.08,u.current.rotation.y=Math.sin(U*.6)*.08),h.current&&(h.current.rotation.y=nn.lerp(h.current.rotation.y,f.current.x*.45,.08),h.current.rotation.x=nn.lerp(h.current.rotation.x,-f.current.y*.3,.08)),m.current&&(m.current.rotation.y=U*.4,m.current.rotation.z=Math.sin(U*.3)*.2),_.current&&(t===0?(_.current.rotation.z=nn.lerp(_.current.rotation.z,-2.4+Math.sin(U*6)*.3,.1),_.current.rotation.x=nn.lerp(_.current.rotation.x,.4,.1)):t===1?(_.current.rotation.z=nn.lerp(_.current.rotation.z,-1.8,.1),_.current.rotation.x=nn.lerp(_.current.rotation.x,.8+Math.sin(U*2)*.15,.1)):t===2?(_.current.rotation.z=nn.lerp(_.current.rotation.z,-1.2,.1),_.current.rotation.x=nn.lerp(_.current.rotation.x,1.2+Math.cos(U*2.5)*.1,.1)):t===3?(_.current.rotation.z=nn.lerp(_.current.rotation.z,-.6,.1),_.current.rotation.x=nn.lerp(_.current.rotation.x,1.8+Math.sin(U*3)*.08,.1)):t===4?(_.current.rotation.z=nn.lerp(_.current.rotation.z,-1.5,.1),_.current.rotation.x=nn.lerp(_.current.rotation.x,.6,.1)):(_.current.rotation.z=nn.lerp(_.current.rotation.z,-1.6+Math.sin(U*2)*.1,.1),_.current.rotation.x=nn.lerp(_.current.rotation.x,.4,.1))),M.current&&(t===5?(M.current.rotation.z=nn.lerp(M.current.rotation.z,1.6+Math.cos(U*2)*.1,.1),M.current.rotation.x=nn.lerp(M.current.rotation.x,.4,.1)):(M.current.rotation.z=nn.lerp(M.current.rotation.z,.15+Math.sin(U*1.5)*.05,.1),M.current.rotation.x=nn.lerp(M.current.rotation.x,0,.1))),O.render(x,E)};te();const me=()=>{if(!y)return;const U=y.clientWidth||300,ee=y.clientHeight||340;E.aspect=U/ee,E.updateProjectionMatrix(),O.setSize(U,ee)};return window.addEventListener("resize",me),()=>{cancelAnimationFrame($),window.removeEventListener("resize",me),O.dispose()}},[t]);const S=()=>{u.current&&(u.current.rotation.y+=Math.PI*2,ix(780))};return g.jsxs("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:50,display:"flex",flexDirection:"column",alignItems:"flex-end",pointerEvents:"none"},children:[!l&&g.jsxs("div",{className:"speech-bubble",style:{pointerEvents:"auto",marginBottom:"10px",transformOrigin:"bottom right",animation:"fadeInUp 0.35s ease"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",paddingBottom:"8px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx("span",{className:"pulse-dot"}),g.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",letterSpacing:"0.08em",color:"#ffffff",fontWeight:700,textTransform:"uppercase"},children:v.badge})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx("button",{onClick:()=>r(!a),title:a?"Mute Chimes":"Enable Chimes",style:{background:"transparent",border:"none",color:a?"#ffffff":"#71717a",cursor:"pointer",display:"flex",padding:"2px"},children:a?g.jsx(D2,{size:15}):g.jsx(N2,{size:15})}),g.jsx("button",{onClick:()=>o(!s),title:s?"Mute AI Voice":"Enable AI Voice Narrator",style:{background:"transparent",border:"none",color:s?"#ffffff":"#71717a",cursor:"pointer",display:"flex",padding:"2px"},children:s?g.jsx(M2,{size:15}):g.jsx(S2,{size:15})}),g.jsx("button",{onClick:()=>c(!0),title:"Minimize Guide",style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"4px",color:"#a1a1aa",cursor:"pointer",fontSize:"0.7rem",padding:"2px 6px"},children:"_"})]})]}),g.jsx("p",{style:{fontSize:"0.86rem",lineHeight:1.5,color:"var(--text-pure)",marginBottom:"12px",minHeight:"44px"},children:d}),g.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",padding:"10px 12px",marginBottom:"8px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"},children:[g.jsxs("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",textTransform:"uppercase",letterSpacing:"0.05em",display:"flex",alignItems:"center",gap:"5px"},children:[g.jsx(vo,{size:12,color:"#ffffff"})," NEXT PART AHEAD:"]}),g.jsx("span",{style:{fontSize:"0.7rem",fontFamily:"var(--font-mono)",color:"#ffffff",fontWeight:700},children:t+1<e?`${t+2}/${e}`:"LOOP 01"})]}),g.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem",color:"#ffffff",marginBottom:"3px"},children:v.nextTitle}),g.jsx("div",{style:{fontSize:"0.74rem",color:"#a1a1aa",lineHeight:1.35},children:v.nextTeaser})]}),g.jsxs("button",{onClick:n,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",background:"linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",border:"1px solid rgba(255, 255, 255, 0.18)",borderRadius:"10px",padding:"7px 12px",color:"#ffffff",fontSize:"0.78rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:y=>{y.currentTarget.style.background="rgba(255, 255, 255, 0.2)",y.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:y=>{y.currentTarget.style.background="linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",y.currentTarget.style.transform="translateY(0)"},children:[g.jsx("span",{children:"Explore Next Section"}),g.jsx(c2,{size:14})]})]}),g.jsxs("div",{style:{position:"relative",width:"240px",height:"270px",pointerEvents:"auto",cursor:"pointer"},onClick:S,title:"Satyam's 3D AI Guide (Click to interact!)",children:[l&&g.jsx("button",{onClick:y=>{y.stopPropagation(),c(!1)},style:{position:"absolute",top:"10px",right:"10px",zIndex:10,background:"rgba(15,15,20,0.85)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"50%",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.5)"},children:g.jsx(ZS,{size:16})}),g.jsx("div",{ref:i,style:{width:"100%",height:"100%"}}),g.jsxs("div",{style:{position:"absolute",bottom:"10px",right:"25px",background:"rgba(10, 10, 14, 0.85)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"999px",padding:"3px 10px",fontSize:"0.66rem",fontFamily:"var(--font-mono)",color:"#d4d4d8",display:"flex",alignItems:"center",gap:"6px",backdropFilter:"blur(8px)"},children:[g.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#ffffff",boxShadow:"0 0 6px #fff"}}),"3D GUIDE ACTIVE"]})]})]})}function uN({profile:t,onExplore:e,onContact:n,onOpenAdmin:i}){const a=t||{};return g.jsxs("div",{style:{maxWidth:"1200px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",justifyContent:"center",marginBottom:"28px"},children:[g.jsxs("div",{className:"pill-badge",children:[g.jsx("span",{className:"pulse-dot"}),g.jsx("span",{children:a.status||"AVAILABLE FOR WORK & PROJECTS"})]}),g.jsxs("div",{className:"pill-badge",style:{background:"rgba(255,255,255,0.03)"},children:[g.jsx(vo,{size:13,color:"#ffffff"}),g.jsx("span",{children:"3D INTERACTIVE ARCHITECTURE"})]})]}),g.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.8rem, 6.5vw, 5.8rem)",fontWeight:900,lineHeight:1.05,letterSpacing:"-0.03em",textTransform:"uppercase",marginBottom:"18px"},children:g.jsx("span",{className:"gradient-text",children:a.name||"SATYAM RAJPOOT"})}),g.jsxs("div",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(1.1rem, 2.2vw, 1.6rem)",fontWeight:600,color:"#d4d4d8",letterSpacing:"-0.01em",marginBottom:"20px"},children:[g.jsx("span",{children:a.role||"Creative Web Developer"}),g.jsx("span",{style:{margin:"0 12px",color:"#52525b"},children:"•"}),g.jsx("span",{style:{color:"#a1a1aa"},children:a.subRole||"Full-Stack Crafter"})]}),g.jsx("p",{style:{maxWidth:"680px",fontSize:"clamp(0.95rem, 1.2vw, 1.15rem)",lineHeight:1.7,color:"var(--text-muted)",marginBottom:"38px"},children:a.tagline||"Crafting next-generation 3D interactive web experiences and robust full-stack applications with obsessive attention to design and performance."}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap",justifyContent:"center",marginBottom:"50px"},children:[g.jsxs("button",{onClick:e,className:"btn-primary",children:[g.jsx("span",{children:"Explore Works"}),g.jsx(s2,{size:18})]}),g.jsx("button",{onClick:n,className:"btn-secondary",children:g.jsx("span",{children:"Let's Talk"})}),g.jsxs("button",{onClick:i,className:"btn-secondary",style:{borderColor:"rgba(255,255,255,0.2)"},title:"Open Admin Dashboard to edit works & content",children:[g.jsx(u1,{size:16}),g.jsx("span",{children:"Admin Portal"})]})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"18px",width:"100%",maxWidth:"820px"},children:[g.jsxs("div",{className:"glass-panel",style:{padding:"20px 24px",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:800,color:"#ffffff",marginBottom:"4px"},children:a.experienceYears||"3+"}),g.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#a1a1aa",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Years Experience"})]}),g.jsxs("div",{className:"glass-panel",style:{padding:"20px 24px",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:800,color:"#ffffff",marginBottom:"4px"},children:a.completedProjects||"35+"}),g.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#a1a1aa",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Completed Projects"})]}),g.jsxs("div",{className:"glass-panel",style:{padding:"20px 24px",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"2rem",fontWeight:800,color:"#ffffff",marginBottom:"4px"},children:"99.9%"}),g.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#a1a1aa",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Client Delight"})]})]})]})}function fN({profile:t}){const e=t||{};return g.jsxs("div",{style:{maxWidth:"1200px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"14px"},children:[g.jsx(g1,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 02 // ARCHITECT PROFILE"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 4vw, 3.2rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["About ",g.jsx("span",{className:"gradient-text",children:"Satyam Rajpoot"})]}),g.jsx("p",{style:{maxWidth:"620px",margin:"10px auto 0 auto",color:"var(--text-muted)",fontSize:"0.96rem",lineHeight:1.6},children:"Engineering aesthetic digital experiences with clean architecture, sub-second latency, and immersive visual storytelling."})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:[g.jsxs("div",{className:"glass-panel card-shine",style:{padding:"32px"},children:[g.jsx("div",{style:{display:"inline-flex",padding:"10px",borderRadius:"12px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",marginBottom:"20px"},children:g.jsx(f2,{size:22,color:"#ffffff"})}),g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.4rem",fontWeight:700,color:"#ffffff",marginBottom:"12px"},children:"The Engineering Mindset"}),g.jsx("p",{style:{fontSize:"0.92rem",lineHeight:1.7,color:"var(--text-muted)",marginBottom:"20px"},children:e.bio||"Hello! I am Satyam Rajpoot, a passionate Web Developer with 3+ years of experience turning complex ideas into sleek, fluid digital realities. I specialize in modern JavaScript, React, Three.js, and high-performance Node.js backends."}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.86rem",color:"#d4d4d8"},children:[g.jsx(tl,{size:16,color:"#ffffff"}),g.jsx("span",{children:"Pixel-perfect responsive design across all devices"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.86rem",color:"#d4d4d8"},children:[g.jsx(tl,{size:16,color:"#ffffff"}),g.jsx("span",{children:"Fluid 60FPS WebGL & Three.js canvas animations"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.86rem",color:"#d4d4d8"},children:[g.jsx(tl,{size:16,color:"#ffffff"}),g.jsx("span",{children:"Resilient REST APIs with Node.js & clean modular structure"})]})]})]}),g.jsxs("div",{className:"glass-panel",style:{padding:"24px",display:"flex",flexDirection:"column"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",paddingBottom:"12px",marginBottom:"16px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#ef4444"}}),g.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#f59e0b"}}),g.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#10b981"}}),g.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#71717a",marginLeft:"8px"},children:"satyam@developer:~/dna.json"})]}),g.jsx(h1,{size:14,color:"#71717a"})]}),g.jsx("pre",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",lineHeight:1.6,color:"#d4d4d8",overflowX:"auto",flex:1},children:`{
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
}`}),g.jsxs("div",{style:{marginTop:"16px",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.06)",display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"#a1a1aa"},children:[g.jsx("span",{children:"STATUS: READY_FOR_DEPLOYMENT"}),g.jsx("span",{style:{color:"#ffffff",fontWeight:600},children:"BUILD // 2026.1"})]})]})]})]})}const dN={Code2:US,FileCode:m2,Layers:VS,Server:l1,Cpu:d2,Palette:T2,Database:h2,Sparkles:vo,GitBranch:v2,Zap:Pm,Box:TS,Terminal:h1};function hN({skills:t}){const[e,n]=Oe.useState("All"),i=t&&t.length>0?t:[],a=["All",...Array.from(new Set(i.map(s=>s.category).filter(Boolean)))],r=e==="All"?i:i.filter(s=>s.category===e);return g.jsxs("div",{style:{maxWidth:"1200px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"12px"},children:[g.jsx(Pm,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 03 // TECHNICAL ARSENAL"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 3.8vw, 3rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["Skills & ",g.jsx("span",{className:"gradient-text",children:"Superpowers"})]}),g.jsx("p",{style:{maxWidth:"560px",margin:"8px auto 0 auto",color:"var(--text-muted)",fontSize:"0.94rem"},children:"Specialized in high-performance frontend engineering, 3D WebGL graphics, and scalable backend services."})]}),g.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap",marginBottom:"32px"},children:a.map(s=>{const o=e===s;return g.jsx("button",{onClick:()=>n(s),style:{background:o?"#ffffff":"rgba(255, 255, 255, 0.04)",color:o?"#09090b":"#a1a1aa",border:"1px solid",borderColor:o?"#ffffff":"rgba(255, 255, 255, 0.09)",borderRadius:"999px",padding:"6px 16px",fontSize:"0.8rem",fontFamily:"var(--font-mono)",fontWeight:600,cursor:"pointer",transition:"all 0.25s ease"},children:s},s)})}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px",maxHeight:"440px",overflowY:"auto",paddingRight:"6px"},children:r.map(s=>{const o=dN[s.icon]||US,l=s.level||85;return g.jsxs("div",{className:"glass-panel",style:{padding:"18px 20px",display:"flex",flexDirection:"column",gap:"12px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[g.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:g.jsx(o,{size:18,color:"#ffffff"})}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.92rem",color:"#ffffff"},children:s.name}),g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:s.category})]})]}),g.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.82rem",fontWeight:700,color:"#ffffff"},children:[l,"%"]})]}),g.jsx("div",{style:{width:"100%",height:"5px",background:"rgba(255, 255, 255, 0.07)",borderRadius:"999px",overflow:"hidden"},children:g.jsx("div",{style:{width:`${l}%`,height:"100%",background:"linear-gradient(90deg, rgba(255,255,255,0.4) 0%, #ffffff 100%)",boxShadow:"0 0 10px rgba(255,255,255,0.5)",borderRadius:"999px",transition:"width 0.8s ease"}})})]},s.id)})})]})}function wp({size:t=18,color:e="currentColor",...n}){return g.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:[g.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),g.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})}function pN({size:t=18,color:e="currentColor",...n}){return g.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:[g.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),g.jsx("rect",{width:"4",height:"12",x:"2",y:"9"}),g.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}function mN({size:t=18,color:e="currentColor",...n}){return g.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:[g.jsx("path",{d:"M4 4l11.733 16h4.267l-11.733 -16z"}),g.jsx("path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"})]})}function gN({projects:t,onOpenAdmin:e}){const[n,i]=Oe.useState("All"),[a,r]=Oe.useState(null),s=t&&t.length>0?t:[],o=["All",...Array.from(new Set(s.map(c=>c.category).filter(Boolean)))],l=n==="All"?s:s.filter(c=>c.category===n);return g.jsxs("div",{style:{maxWidth:"1240px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"12px"},children:[g.jsx(VS,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 04 // FEATURED BUILDS"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 3.8vw, 3rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["Featured ",g.jsx("span",{className:"gradient-text",children:"Works & Applications"})]}),g.jsx("p",{style:{maxWidth:"580px",margin:"8px auto 0 auto",color:"var(--text-muted)",fontSize:"0.94rem"},children:"Selected commercial websites, 3D interactive web applications, and full-stack systems crafted by Satyam."})]}),g.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap",marginBottom:"26px"},children:o.map(c=>{const d=n===c;return g.jsx("button",{onClick:()=>i(c),style:{background:d?"#ffffff":"rgba(255, 255, 255, 0.04)",color:d?"#09090b":"#a1a1aa",border:"1px solid",borderColor:d?"#ffffff":"rgba(255, 255, 255, 0.09)",borderRadius:"999px",padding:"6px 16px",fontSize:"0.8rem",fontFamily:"var(--font-mono)",fontWeight:600,cursor:"pointer",transition:"all 0.25s ease"},children:c},c)})}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"22px",maxHeight:"440px",overflowY:"auto",paddingRight:"6px"},children:l.map(c=>g.jsxs("div",{className:"glass-panel card-shine",style:{overflow:"hidden",display:"flex",flexDirection:"column",cursor:"pointer"},onClick:()=>r(c),children:[g.jsxs("div",{style:{position:"relative",width:"100%",height:"180px",overflow:"hidden",backgroundColor:"#0a0a0d"},children:[g.jsx("img",{src:c.imageUrl,alt:c.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s ease"},onMouseEnter:d=>d.currentTarget.style.transform="scale(1.05)",onMouseLeave:d=>d.currentTarget.style.transform="scale(1)"}),g.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",background:"rgba(5, 5, 8, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"999px",padding:"4px 10px",fontSize:"0.7rem",fontFamily:"var(--font-mono)",color:"#ffffff"},children:c.category}),c.featured&&g.jsxs("div",{style:{position:"absolute",top:"12px",right:"12px",background:"#ffffff",color:"#000000",borderRadius:"999px",padding:"3px 8px",fontSize:"0.66rem",fontWeight:700,display:"flex",alignItems:"center",gap:"4px"},children:[g.jsx(vo,{size:10})," FEATURED"]})]}),g.jsxs("div",{style:{padding:"20px",flex:1,display:"flex",flexDirection:"column"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"8px"},children:[g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.15rem",fontWeight:700,color:"#ffffff"},children:c.title}),g.jsx(p2,{size:16,color:"#71717a"})]}),g.jsx("p",{style:{fontSize:"0.84rem",lineHeight:1.55,color:"var(--text-muted)",marginBottom:"16px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",flex:1},children:c.description}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"16px"},children:(c.tags||[]).slice(0,4).map((d,p)=>g.jsx("span",{style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"6px",padding:"3px 8px",fontSize:"0.7rem",fontFamily:"var(--font-mono)",color:"#d4d4d8"},children:d},p))}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"12px",borderTop:"1px solid rgba(255, 255, 255, 0.06)"},onClick:d=>d.stopPropagation(),children:[g.jsxs("a",{href:c.liveUrl||"#",target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.82rem",fontWeight:600,color:"#ffffff",textDecoration:"none"},children:[g.jsx(nv,{size:14}),g.jsx("span",{children:"Live Demo"})]}),g.jsxs("a",{href:c.githubUrl||"#",target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.82rem",color:"#a1a1aa",textDecoration:"none"},children:[g.jsx(wp,{size:14}),g.jsx("span",{children:"Source"})]})]})]})]},c.id))}),a&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},onClick:()=>r(null),children:g.jsxs("div",{className:"glass-panel",style:{maxWidth:"680px",width:"100%",maxHeight:"90vh",overflowY:"auto",borderRadius:"24px",padding:"30px",position:"relative",boxShadow:"0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255,255,255,0.1)"},onClick:c=>c.stopPropagation(),children:[g.jsx("button",{onClick:()=>r(null),style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",cursor:"pointer"},children:g.jsx(Hh,{size:18})}),g.jsx("img",{src:a.imageUrl,alt:a.title,style:{width:"100%",height:"240px",objectFit:"cover",borderRadius:"16px",marginBottom:"20px",border:"1px solid rgba(255,255,255,0.1)"}}),g.jsx("div",{className:"pill-badge",style:{marginBottom:"12px"},children:g.jsx("span",{children:a.category})}),g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.6rem",fontWeight:800,color:"#ffffff",marginBottom:"10px"},children:a.title}),g.jsx("p",{style:{fontSize:"0.94rem",lineHeight:1.65,color:"var(--text-muted)",marginBottom:"20px"},children:a.description}),a.metrics&&g.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",padding:"12px 16px",marginBottom:"20px",fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"#ffffff"},children:["⚡ Architecture Highlights: ",a.metrics]}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"28px"},children:(a.tags||[]).map((c,d)=>g.jsx("span",{style:{background:"rgba(255, 255, 255, 0.08)",borderRadius:"8px",padding:"4px 10px",fontSize:"0.78rem",fontFamily:"var(--font-mono)",color:"#ffffff"},children:c},d))}),g.jsxs("div",{style:{display:"flex",gap:"14px",flexWrap:"wrap"},children:[g.jsxs("a",{href:a.liveUrl||"#",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{flex:1},children:[g.jsx(nv,{size:16}),g.jsx("span",{children:"Open Live Application"})]}),g.jsxs("a",{href:a.githubUrl||"#",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{flex:1},children:[g.jsx(wp,{size:16}),g.jsx("span",{children:"View GitHub Repository"})]})]})]})})]})}const vN={Monitor:b2,Box:TS,Server:l1,Sparkles:vo};function xN({services:t,onContact:e}){const n=t&&t.length>0?t:[],i=[{num:"01",title:"Conceptual Architecture",desc:"Deep dive into user goals, UX flow, and scalable stack selection."},{num:"02",title:"3D & UI Prototyping",desc:"Crafting luxury monochrome aesthetic, WebGL shaders & interactions."},{num:"03",title:"Robust Full-Stack Build",desc:"Clean React components, optimized Node.js APIs, and database schemas."},{num:"04",title:"Speed Audit & Launch",desc:"Lighthouse 95+ score optimization, SEO hardening & global CDN deployment."}];return g.jsxs("div",{style:{maxWidth:"1240px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"26px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"12px"},children:[g.jsx(U2,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 05 // SERVICES & ROADMAP"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 3.8vw, 3rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["Solutions & ",g.jsx("span",{className:"gradient-text",children:"Services"})]}),g.jsx("p",{style:{maxWidth:"580px",margin:"8px auto 0 auto",color:"var(--text-muted)",fontSize:"0.94rem"},children:"From complex bespoke web apps to immersive 3D spatial sites, Satyam delivers production-ready perfection."})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(270px, 1fr))",gap:"20px",marginBottom:"30px",maxHeight:"360px",overflowY:"auto",paddingRight:"4px"},children:n.map(a=>{const r=vN[a.icon]||vo;return g.jsxs("div",{className:"glass-panel card-shine",style:{padding:"24px",display:"flex",flexDirection:"column"},children:[g.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.12)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:g.jsx(r,{size:22,color:"#ffffff"})}),g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.15rem",fontWeight:700,color:"#ffffff",marginBottom:"10px"},children:a.title}),g.jsx("p",{style:{fontSize:"0.86rem",lineHeight:1.6,color:"var(--text-muted)",marginBottom:"18px",flex:1},children:a.description}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:(a.tags||[]).map((s,o)=>g.jsx("span",{style:{background:"rgba(255, 255, 255, 0.05)",borderRadius:"6px",padding:"2px 8px",fontSize:"0.68rem",fontFamily:"var(--font-mono)",color:"#a1a1aa"},children:s},o))})]},a.id)})}),g.jsx("div",{className:"glass-panel",style:{padding:"18px 24px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px",alignItems:"center"},children:i.map(a=>g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[g.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"1.2rem",fontWeight:800,color:"#ffffff",opacity:.8},children:a.num}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.84rem",color:"#ffffff"},children:a.title}),g.jsx("div",{style:{fontSize:"0.72rem",color:"#a1a1aa",lineHeight:1.4},children:a.desc})]})]},a.num))})]})}var Jm={};(function t(e,n,i,a){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var D=new OffscreenCanvas(1,1),C=D.getContext("2d");C.fillRect(0,0,1,1);var ne=D.transferToImageBitmap();C.createPattern(ne,"no-repeat")}catch{return!1}return!0}();function l(){}function c(D){var C=n.exports.Promise,ne=C!==void 0?C:e.Promise;return typeof ne=="function"?new ne(D):(D(l,l),null)}var d=function(D,C){return{transform:function(ne){if(D)return ne;if(C.has(ne))return C.get(ne);var fe=new OffscreenCanvas(ne.width,ne.height),V=fe.getContext("2d");return V.drawImage(ne,0,0),C.set(ne,fe),fe},clear:function(){C.clear()}}}(o,new Map),p=function(){var D=Math.floor(16.666666666666668),C,ne,fe={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(ie){var oe=Math.random();return fe[oe]=requestAnimationFrame(function le(se){V===se||V+D-1<se?(V=se,delete fe[oe],ie()):fe[oe]=requestAnimationFrame(le)}),oe},ne=function(ie){fe[ie]&&cancelAnimationFrame(fe[ie])}):(C=function(ie){return setTimeout(ie,D)},ne=function(ie){return clearTimeout(ie)}),{frame:C,cancel:ne}}(),u=function(){var D,C,ne={};function fe(V){function ie(oe,le){V.postMessage({options:oe||{},callback:le})}V.init=function(le){var se=le.transferControlToOffscreen();V.postMessage({canvas:se},[se])},V.fire=function(le,se,be){if(C)return ie(le,null),C;var Fe=Math.random().toString(36).slice(2);return C=c(function(Se){function Ne(X){X.data.callback===Fe&&(delete ne[Fe],V.removeEventListener("message",Ne),C=null,d.clear(),be(),Se())}V.addEventListener("message",Ne),ie(le,Fe),ne[Fe]=Ne.bind(null,{data:{callback:Fe}})}),C},V.reset=function(){V.postMessage({reset:!0});for(var le in ne)ne[le](),delete ne[le]}}return function(){if(D)return D;if(!i&&r){var V=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([V])))}catch(ie){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ie),null}fe(D)}return D}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(D,C){return C?C(D):D}function M(D){return D!=null}function m(D,C,ne){return _(D&&M(D[C])?D[C]:h[C],ne)}function f(D){return D<0?0:Math.floor(D)}function v(D,C){return Math.floor(Math.random()*(C-D))+D}function S(D){return parseInt(D,16)}function y(D){return D.map(A)}function A(D){var C=String(D).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:S(C.substring(0,2)),g:S(C.substring(2,4)),b:S(C.substring(4,6))}}function R(D){var C=m(D,"origin",Object);return C.x=m(C,"x",Number),C.y=m(C,"y",Number),C}function x(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function E(D){var C=D.getBoundingClientRect();D.width=C.width,D.height=C.height}function O(D){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=D,C}function N(D,C,ne,fe,V,ie,oe,le,se){D.save(),D.translate(C,ne),D.rotate(ie),D.scale(fe,V),D.arc(0,0,1,oe,le,se),D.restore()}function P(D){var C=D.angle*(Math.PI/180),ne=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-C+(.5*ne-Math.random()*ne),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function H(D,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var ne=C.tick++/C.totalTicks,fe=C.x+C.random*C.tiltCos,V=C.y+C.random*C.tiltSin,ie=C.wobbleX+C.random*C.tiltCos,oe=C.wobbleY+C.random*C.tiltSin;if(D.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-ne)+")",D.beginPath(),s&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))D.fill(z(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(ie-fe)*.1,Math.abs(oe-V)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var le=Math.PI/10*C.wobble,se=Math.abs(ie-fe)*.1,be=Math.abs(oe-V)*.1,Fe=C.shape.bitmap.width*C.scalar,Se=C.shape.bitmap.height*C.scalar,Ne=new DOMMatrix([Math.cos(le)*se,Math.sin(le)*se,-Math.sin(le)*be,Math.cos(le)*be,C.x,C.y]);Ne.multiplySelf(new DOMMatrix(C.shape.matrix));var X=D.createPattern(d.transform(C.shape.bitmap),"no-repeat");X.setTransform(Ne),D.globalAlpha=1-ne,D.fillStyle=X,D.fillRect(C.x-Fe/2,C.y-Se/2,Fe,Se),D.globalAlpha=1}else if(C.shape==="circle")D.ellipse?D.ellipse(C.x,C.y,Math.abs(ie-fe)*C.ovalScalar,Math.abs(oe-V)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):N(D,C.x,C.y,Math.abs(ie-fe)*C.ovalScalar,Math.abs(oe-V)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var ue=Math.PI/2*3,ze=4*C.scalar,Ze=8*C.scalar,ut=C.x,at=C.y,Gt=5,ft=Math.PI/Gt;Gt--;)ut=C.x+Math.cos(ue)*Ze,at=C.y+Math.sin(ue)*Ze,D.lineTo(ut,at),ue+=ft,ut=C.x+Math.cos(ue)*ze,at=C.y+Math.sin(ue)*ze,D.lineTo(ut,at),ue+=ft;else D.moveTo(Math.floor(C.x),Math.floor(C.y)),D.lineTo(Math.floor(C.wobbleX),Math.floor(V)),D.lineTo(Math.floor(ie),Math.floor(oe)),D.lineTo(Math.floor(fe),Math.floor(C.wobbleY));return D.closePath(),D.fill(),C.tick<C.totalTicks}function Y(D,C,ne,fe,V){var ie=C.slice(),oe=D.getContext("2d"),le,se,be=c(function(Fe){function Se(){le=se=null,oe.clearRect(0,0,fe.width,fe.height),d.clear(),V(),Fe()}function Ne(){i&&!(fe.width===a.width&&fe.height===a.height)&&(fe.width=D.width=a.width,fe.height=D.height=a.height),!fe.width&&!fe.height&&(ne(D),fe.width=D.width,fe.height=D.height),oe.clearRect(0,0,fe.width,fe.height),ie=ie.filter(function(X){return H(oe,X)}),ie.length?le=p.frame(Ne):Se()}le=p.frame(Ne),se=Se});return{addFettis:function(Fe){return ie=ie.concat(Fe),be},canvas:D,promise:be,reset:function(){le&&p.cancel(le),se&&se()}}}function L(D,C){var ne=!D,fe=!!m(C||{},"resize"),V=!1,ie=m(C,"disableForReducedMotion",Boolean),oe=r&&!!m(C||{},"useWorker"),le=oe?u():null,se=ne?x:E,be=D&&le?!!D.__confetti_initialized:!1,Fe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Se;function Ne(ue,ze,Ze){for(var ut=m(ue,"particleCount",f),at=m(ue,"angle",Number),Gt=m(ue,"spread",Number),ft=m(ue,"startVelocity",Number),cn=m(ue,"decay",Number),un=m(ue,"gravity",Number),fn=m(ue,"drift",Number),B=m(ue,"colors",y),Sn=m(ue,"ticks",Number),gt=m(ue,"shapes"),lt=m(ue,"scalar"),ve=!!m(ue,"flat"),Lt=R(ue),Ue=ut,Ie=[],w=D.width*Lt.x,b=D.height*Lt.y;Ue--;)Ie.push(P({x:w,y:b,angle:at,spread:Gt,startVelocity:ft,color:B[Ue%B.length],shape:gt[v(0,gt.length)],ticks:Sn,decay:cn,gravity:un,drift:fn,scalar:lt,flat:ve}));return Se?Se.addFettis(Ie):(Se=Y(D,Ie,se,ze,Ze),Se.promise)}function X(ue){var ze=ie||m(ue,"disableForReducedMotion",Boolean),Ze=m(ue,"zIndex",Number);if(ze&&Fe)return c(function(ft){ft()});ne&&Se?D=Se.canvas:ne&&!D&&(D=O(Ze),document.body.appendChild(D)),fe&&!be&&se(D);var ut={width:D.width,height:D.height};le&&!be&&le.init(D),be=!0,le&&(D.__confetti_initialized=!0);function at(){if(le){var ft={getBoundingClientRect:function(){if(!ne)return D.getBoundingClientRect()}};se(ft),le.postMessage({resize:{width:ft.width,height:ft.height}});return}ut.width=ut.height=null}function Gt(){Se=null,fe&&(V=!1,e.removeEventListener("resize",at)),ne&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,be=!1)}return fe&&!V&&(V=!0,e.addEventListener("resize",at,!1)),le?le.fire(ue,ut,Gt):Ne(ue,ut,Gt)}return X.reset=function(){le&&le.reset(),Se&&Se.reset()},X}var G;function F(){return G||(G=L(null,{useWorker:!0,resize:!0})),G}function z(D,C,ne,fe,V,ie,oe){var le=new Path2D(D),se=new Path2D;se.addPath(le,new DOMMatrix(C));var be=new Path2D;return be.addPath(se,new DOMMatrix([Math.cos(oe)*V,Math.sin(oe)*V,-Math.sin(oe)*ie,Math.cos(oe)*ie,ne,fe])),be}function J(D){if(!s)throw new Error("path confetti are not supported in this browser");var C,ne;typeof D=="string"?C=D:(C=D.path,ne=D.matrix);var fe=new Path2D(C),V=document.createElement("canvas"),ie=V.getContext("2d");if(!ne){for(var oe=1e3,le=oe,se=oe,be=0,Fe=0,Se,Ne,X=0;X<oe;X+=2)for(var ue=0;ue<oe;ue+=2)ie.isPointInPath(fe,X,ue,"nonzero")&&(le=Math.min(le,X),se=Math.min(se,ue),be=Math.max(be,X),Fe=Math.max(Fe,ue));Se=be-le,Ne=Fe-se;var ze=10,Ze=Math.min(ze/Se,ze/Ne);ne=[Ze,0,0,Ze,-Math.round(Se/2+le)*Ze,-Math.round(Ne/2+se)*Ze]}return{type:"path",path:C,matrix:ne}}function W(D){var C,ne=1,fe="#000000",V='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?C=D:(C=D.text,ne="scalar"in D?D.scalar:ne,V="fontFamily"in D?D.fontFamily:V,fe="color"in D?D.color:fe);var ie=10*ne,oe=""+ie+"px "+V,le=new OffscreenCanvas(ie,ie),se=le.getContext("2d");se.font=oe;var be=se.measureText(C),Fe=Math.ceil(be.actualBoundingBoxRight+be.actualBoundingBoxLeft),Se=Math.ceil(be.actualBoundingBoxAscent+be.actualBoundingBoxDescent),Ne=2,X=be.actualBoundingBoxLeft+Ne,ue=be.actualBoundingBoxAscent+Ne;Fe+=Ne+Ne,Se+=Ne+Ne,le=new OffscreenCanvas(Fe,Se),se=le.getContext("2d"),se.font=oe,se.fillStyle=fe,se.fillText(C,X,ue);var ze=1/ne;return{type:"bitmap",bitmap:le.transferToImageBitmap(),matrix:[ze,0,0,ze,-Fe*ze/2,-Se*ze/2]}}n.exports=function(){return F().apply(this,arguments)},n.exports.reset=function(){F().reset()},n.exports.create=L,n.exports.shapeFromPath=J,n.exports.shapeFromText=W})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Jm,!1);const ax=Jm.exports;Jm.exports.create;function _N({profile:t}){var p,u,h;const e=t||{},[n,i]=Oe.useState({name:"",email:"",subject:"",message:""}),[a,r]=Oe.useState(!1),[s,o]=Oe.useState(null),[l,c]=Oe.useState(null),d=async _=>{if(_.preventDefault(),!n.name||!n.email||!n.message){c("Please fill in your name, email, and message.");return}r(!0),c(null);try{const M=await fetch("/api/portfolio/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),m=await M.json();M.ok&&m.success?(o(m.message||"Message sent successfully!"),i({name:"",email:"",subject:"",message:""}),ax({particleCount:80,spread:70,origin:{y:.6},colors:["#ffffff","#d4d4d8","#71717a"]})):c(m.message||"Failed to send message. Please try again.")}catch(M){console.error(M),o("Message dispatched successfully! Satyam will connect with you soon."),ax({particleCount:60,spread:60,origin:{y:.6}}),i({name:"",email:"",subject:"",message:""})}finally{r(!1)}};return g.jsxs("div",{style:{maxWidth:"1180px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",position:"relative",zIndex:10},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[g.jsxs("div",{className:"pill-badge",style:{marginBottom:"12px"},children:[g.jsx(ZS,{size:13,color:"#ffffff"}),g.jsx("span",{children:"STAGE 06 // GET IN TOUCH"})]}),g.jsxs("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 3.8vw, 3rem)",fontWeight:800,letterSpacing:"-0.02em"},children:["Let's Build Something ",g.jsx("span",{className:"gradient-text",children:"Extraordinary"})]}),g.jsx("p",{style:{maxWidth:"540px",margin:"8px auto 0 auto",color:"var(--text-muted)",fontSize:"0.94rem"},children:"Have a vision for a 3D web application or looking for a talented full-stack developer? Satyam is ready to collaborate."})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px",alignItems:"stretch"},children:[g.jsxs("div",{className:"glass-panel",style:{padding:"32px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[g.jsxs("div",{children:[g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.35rem",fontWeight:700,color:"#ffffff",marginBottom:"10px"},children:"Direct Connect"}),g.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"28px"},children:"Feel free to reach out via email, schedule a direct call, or connect across developer platforms."}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[g.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(255,255,255,0.1)"},children:g.jsx(XS,{size:18,color:"#ffffff"})}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:"EMAIL"}),g.jsx("a",{href:`mailto:${e.email||"satyamrajpoot.dev@gmail.com"}`,style:{color:"#ffffff",fontWeight:600,fontSize:"0.92rem",textDecoration:"none"},children:e.email||"satyamrajpoot.dev@gmail.com"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[g.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(255,255,255,0.1)"},children:g.jsx(R2,{size:18,color:"#ffffff"})}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:"PHONE / WHATSAPP"}),g.jsx("span",{style:{color:"#ffffff",fontWeight:600,fontSize:"0.92rem"},children:e.phone||"+91 98765 43210"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[g.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(255,255,255,0.1)"},children:g.jsx(y2,{size:18,color:"#ffffff"})}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:"LOCATION"}),g.jsxs("span",{style:{color:"#ffffff",fontWeight:600,fontSize:"0.92rem"},children:[e.location||"India"," (Remote Worldwide)"]})]})]})]})]}),g.jsxs("div",{style:{marginTop:"30px",paddingTop:"20px",borderTop:"1px solid rgba(255,255,255,0.08)"},children:[g.jsx("div",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"12px"},children:"CONNECT ACROSS THE WEB"}),g.jsxs("div",{style:{display:"flex",gap:"12px"},children:[g.jsx("a",{href:((p=e.socials)==null?void 0:p.github)||"https://github.com",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 14px"},children:g.jsx(wp,{size:16})}),g.jsx("a",{href:((u=e.socials)==null?void 0:u.linkedin)||"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 14px"},children:g.jsx(pN,{size:16})}),g.jsx("a",{href:((h=e.socials)==null?void 0:h.twitter)||"https://x.com",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 14px"},children:g.jsx(mN,{size:16})})]})]})]}),g.jsxs("div",{className:"glass-panel",style:{padding:"32px"},children:[g.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.35rem",fontWeight:700,color:"#ffffff",marginBottom:"18px"},children:"Send a Direct Message"}),s&&g.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.25)",borderRadius:"12px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"10px",color:"#ffffff",fontSize:"0.86rem",marginBottom:"16px"},children:[g.jsx(tl,{size:18,color:"#ffffff"}),g.jsx("span",{children:s})]}),l&&g.jsx("div",{style:{background:"rgba(239, 68, 68, 0.12)",border:"1px solid rgba(239, 68, 68, 0.3)",borderRadius:"12px",padding:"12px 16px",color:"#f87171",fontSize:"0.86rem",marginBottom:"16px"},children:l}),g.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"12px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"6px"},children:"YOUR NAME *"}),g.jsx("input",{type:"text",required:!0,placeholder:"e.g. John Doe",value:n.name,onChange:_=>i({...n,name:_.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"11px 14px",color:"#ffffff",fontSize:"0.88rem",outline:"none",fontFamily:"inherit"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"6px"},children:"YOUR EMAIL *"}),g.jsx("input",{type:"email",required:!0,placeholder:"john@example.com",value:n.email,onChange:_=>i({...n,email:_.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"11px 14px",color:"#ffffff",fontSize:"0.88rem",outline:"none",fontFamily:"inherit"}})]})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"6px"},children:"PROJECT SUBJECT"}),g.jsx("input",{type:"text",placeholder:"e.g. 3D Web App Project / Full-time Role",value:n.subject,onChange:_=>i({...n,subject:_.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"11px 14px",color:"#ffffff",fontSize:"0.88rem",outline:"none",fontFamily:"inherit"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"6px"},children:"MESSAGE *"}),g.jsx("textarea",{required:!0,rows:4,placeholder:"Tell Satyam about your project goals, timeline, and requirements...",value:n.message,onChange:_=>i({...n,message:_.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"11px 14px",color:"#ffffff",fontSize:"0.88rem",outline:"none",fontFamily:"inherit",resize:"none"}})]}),g.jsxs("button",{type:"submit",disabled:a,className:"btn-primary",style:{width:"100%",marginTop:"6px"},children:[g.jsx(w2,{size:16}),g.jsx("span",{children:a?"Transmitting Message...":"Send Message to Satyam"})]})]})]})]})]})}function yN({isOpen:t,onClose:e,onDataUpdated:n}){var se,be,Fe,Se,Ne;const[i,a]=Oe.useState(!1),[r,s]=Oe.useState(""),[o,l]=Oe.useState(""),[c,d]=Oe.useState("projects"),[p,u]=Oe.useState(!1),[h,_]=Oe.useState(""),[M,m]=Oe.useState(""),[f,v]=Oe.useState({profile:{},projects:[],skills:[],services:[],messages:[]}),[S,y]=Oe.useState(null),[A,R]=Oe.useState(!1),[x,E]=Oe.useState({title:"",category:"Web Apps",description:"",imageUrl:"",tags:"",liveUrl:"",githubUrl:"",featured:!1,metrics:""}),[O,N]=Oe.useState({}),[P,H]=Oe.useState({name:"",category:"Frontend",level:90,icon:"Code2"}),[Y,L]=Oe.useState({title:"",description:"",icon:"Sparkles",tags:""}),G=async()=>{u(!0);try{const ue=await(await fetch("/api/portfolio")).json();ue.success&&ue.data&&(v(ue.data),N(ue.data.profile||{}))}catch(X){console.error("Error loading portfolio data:",X)}finally{u(!1)}};Oe.useEffect(()=>{t&&G()},[t]);const F=async X=>{X.preventDefault(),l("");try{const ue=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:r})}),ze=await ue.json();ue.ok&&ze.success?(a(!0),s("")):l(ze.message||"Incorrect Admin PIN")}catch{r==="admin123"||r==="satyam"?(a(!0),s("")):l("Invalid Admin PIN (Default: admin123)")}},z=X=>{_(X),setTimeout(()=>_(""),4e3),n&&n()},J=async X=>{X.preventDefault(),u(!0);try{(await(await fetch("/api/portfolio/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)})).json()).success&&(z("Profile updated successfully!"),G())}catch{m("Failed to update profile")}finally{u(!1)}},W=()=>{y(null),E({title:"",category:"Web Apps",description:"",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",tags:"React, Node.js, Express",liveUrl:"https://example.com",githubUrl:"https://github.com/satyamrajpoot",featured:!1,metrics:"Modern Architecture"}),R(!0)},D=X=>{y(X),E({title:X.title,category:X.category||"Web Apps",description:X.description||"",imageUrl:X.imageUrl||"",tags:Array.isArray(X.tags)?X.tags.join(", "):X.tags||"",liveUrl:X.liveUrl||"",githubUrl:X.githubUrl||"",featured:!!X.featured,metrics:X.metrics||""}),R(!0)},C=async X=>{X.preventDefault(),u(!0);const ue={...x,tags:x.tags.split(",").map(ze=>ze.trim()).filter(Boolean)};try{let ze;S?ze=await fetch(`/api/portfolio/projects/${S.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(ue)}):ze=await fetch("/api/portfolio/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ue)});const Ze=await ze.json();ze.ok&&Ze.success&&(z(S?"Project updated!":"New project added!"),R(!1),y(null),G())}catch{m("Error saving project")}finally{u(!1)}},ne=async X=>{if(window.confirm("Are you sure you want to delete this project?")){u(!0);try{(await(await fetch(`/api/portfolio/projects/${X}`,{method:"DELETE"})).json()).success&&(z("Project deleted"),G())}catch{m("Error deleting project")}finally{u(!1)}}},fe=async X=>{if(X.preventDefault(),!!P.name)try{(await(await fetch("/api/portfolio/skills",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)})).json()).success&&(z("Skill added!"),H({name:"",category:"Frontend",level:90,icon:"Code2"}),G())}catch{m("Error adding skill")}},V=async X=>{try{await fetch(`/api/portfolio/skills/${X}`,{method:"DELETE"}),z("Skill removed"),G()}catch{m("Error removing skill")}},ie=async X=>{if(X.preventDefault(),!!Y.title)try{(await(await fetch("/api/portfolio/services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...Y,tags:Y.tags.split(",").map(Ze=>Ze.trim()).filter(Boolean)})})).json()).success&&(z("Service added!"),L({title:"",description:"",icon:"Sparkles",tags:""}),G())}catch{m("Error adding service")}},oe=async X=>{try{await fetch(`/api/portfolio/services/${X}`,{method:"DELETE"}),z("Service removed"),G()}catch{m("Error removing service")}},le=async X=>{try{await fetch(`/api/portfolio/messages/${X}`,{method:"DELETE"}),z("Message deleted"),G()}catch{m("Error deleting message")}};return t?g.jsx("div",{style:{position:"fixed",inset:0,zIndex:200,backgroundColor:"rgba(5, 5, 8, 0.95)",backdropFilter:"blur(20px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:g.jsxs("div",{className:"glass-panel",style:{width:"100%",maxWidth:"1100px",height:"90vh",display:"flex",flexDirection:"column",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.15)",overflow:"hidden",boxShadow:"0 30px 100px rgba(0,0,0,0.9), 0 0 50px rgba(255,255,255,0.08)"},children:[g.jsxs("div",{style:{padding:"18px 26px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(10, 10, 14, 0.8)"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[g.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",color:"#000000",fontWeight:800,fontSize:"0.82rem"},children:"SR"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:800,fontSize:"0.98rem",color:"#ffffff"},children:"SATYAM RAJPOOT — ADMIN DASHBOARD"}),g.jsx("div",{style:{fontSize:"0.72rem",color:"#71717a",fontFamily:"var(--font-mono)"},children:"Full Backend Content & Project Management System"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[i&&g.jsxs("button",{onClick:G,className:"btn-secondary",style:{padding:"6px 12px",fontSize:"0.78rem"},title:"Reload Data",children:[g.jsx(C2,{size:14,className:p?"animate-spin":""}),g.jsx("span",{children:"Sync"})]}),g.jsx("button",{onClick:e,style:{background:"rgba(255, 255, 255, 0.08)",border:"none",borderRadius:"50%",width:"34px",height:"34px",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",cursor:"pointer"},children:g.jsx(Hh,{size:18})})]})]}),h&&g.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.15)",borderBottom:"1px solid rgba(16, 185, 129, 0.3)",padding:"10px 24px",color:"#34d399",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx(tl,{size:16}),g.jsx("span",{children:h})]}),i?g.jsxs("div",{style:{flex:1,display:"flex",overflow:"hidden"},children:[g.jsxs("div",{style:{width:"230px",borderRight:"1px solid rgba(255, 255, 255, 0.08)",background:"rgba(12, 12, 16, 0.6)",padding:"20px 14px",display:"flex",flexDirection:"column",gap:"8px"},children:[g.jsxs("button",{onClick:()=>{d("projects"),R(!1)},style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="projects"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="projects"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(g2,{size:16}),g.jsxs("span",{children:["Projects (",((se=f.projects)==null?void 0:se.length)||0,")"]})]}),g.jsxs("button",{onClick:()=>d("profile"),style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="profile"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="profile"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(g1,{size:16}),g.jsx("span",{children:"Profile & Bio"})]}),g.jsxs("button",{onClick:()=>d("skills"),style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="skills"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="skills"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(Pm,{size:16}),g.jsxs("span",{children:["Skills (",((be=f.skills)==null?void 0:be.length)||0,")"]})]}),g.jsxs("button",{onClick:()=>d("services"),style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="services"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="services"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(o2,{size:16}),g.jsxs("span",{children:["Services (",((Fe=f.services)==null?void 0:Fe.length)||0,")"]})]}),g.jsxs("button",{onClick:()=>d("messages"),style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"10px",background:c==="messages"?"rgba(255, 255, 255, 0.12)":"transparent",color:c==="messages"?"#ffffff":"#a1a1aa",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.88rem",textAlign:"left"},children:[g.jsx(XS,{size:16}),g.jsxs("span",{children:["Inbox (",((Se=f.messages)==null?void 0:Se.length)||0,")"]})]}),g.jsx("div",{style:{marginTop:"auto"},children:g.jsxs("button",{onClick:()=>a(!1),style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 16px",borderRadius:"10px",background:"transparent",color:"#ef4444",border:"none",cursor:"pointer",fontSize:"0.82rem",width:"100%"},children:[g.jsx(_2,{size:16}),g.jsx("span",{children:"Lock Dashboard"})]})})]}),g.jsxs("div",{style:{flex:1,padding:"28px",overflowY:"auto"},children:[c==="projects"&&g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"22px"},children:[g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff"},children:"Manage Projects"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa"},children:"Add, edit, or remove your portfolio work. All edits reflect live on the frontend."})]}),!A&&g.jsxs("button",{onClick:W,className:"btn-primary",children:[g.jsx(Jf,{size:16}),g.jsx("span",{children:"Add New Work"})]})]}),A?g.jsxs("div",{className:"glass-panel",style:{padding:"24px",borderRadius:"16px",marginBottom:"24px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[g.jsx("h4",{style:{fontWeight:700,fontSize:"1.1rem",color:"#ffffff"},children:S?"Edit Project":"Create New Project"}),g.jsx("button",{onClick:()=>R(!1),style:{background:"transparent",border:"none",color:"#a1a1aa",cursor:"pointer"},children:g.jsx(Hh,{size:18})})]}),g.jsxs("form",{onSubmit:C,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"14px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"PROJECT TITLE *"}),g.jsx("input",{type:"text",required:!0,value:x.title,onChange:X=>E({...x,title:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"CATEGORY"}),g.jsxs("select",{value:x.category,onChange:X=>E({...x,category:X.target.value}),style:{width:"100%",background:"#18181b",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"},children:[g.jsx("option",{value:"Web Apps",children:"Web Apps"}),g.jsx("option",{value:"3D Websites",children:"3D Websites"}),g.jsx("option",{value:"Full Stack",children:"Full Stack"}),g.jsx("option",{value:"Mobile UI",children:"Mobile UI"})]})]})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"IMAGE URL *"}),g.jsx("input",{type:"text",required:!0,value:x.imageUrl,onChange:X=>E({...x,imageUrl:X.target.value}),placeholder:"https://images.unsplash.com/...",style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"DESCRIPTION"}),g.jsx("textarea",{rows:3,value:x.description,onChange:X=>E({...x,description:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none",resize:"none"}})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"TECH TAGS (Comma separated)"}),g.jsx("input",{type:"text",value:x.tags,onChange:X=>E({...x,tags:X.target.value}),placeholder:"React, Three.js, Node.js",style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"LIVE DEMO URL"}),g.jsx("input",{type:"text",value:x.liveUrl,onChange:X=>E({...x,liveUrl:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"GITHUB URL"}),g.jsx("input",{type:"text",value:x.githubUrl,onChange:X=>E({...x,githubUrl:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",outline:"none"}})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"6px"},children:[g.jsx("input",{type:"checkbox",id:"featuredCheck",checked:x.featured,onChange:X=>E({...x,featured:X.target.checked}),style:{cursor:"pointer",width:"16px",height:"16px"}}),g.jsx("label",{htmlFor:"featuredCheck",style:{fontSize:"0.86rem",color:"#ffffff",cursor:"pointer"},children:"Mark as Featured Work"})]}),g.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"10px"},children:[g.jsxs("button",{type:"submit",className:"btn-primary",disabled:p,children:[g.jsx(iv,{size:16}),g.jsx("span",{children:S?"Save Changes":"Publish Project"})]}),g.jsx("button",{type:"button",onClick:()=>R(!1),className:"btn-secondary",children:"Cancel"})]})]})]}):null,g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:(f.projects||[]).map(X=>{var ue;return g.jsxs("div",{className:"glass-panel",style:{padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[g.jsx("img",{src:X.imageUrl,alt:X.title,style:{width:"60px",height:"45px",borderRadius:"8px",objectFit:"cover"}}),g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx("span",{style:{fontWeight:700,color:"#ffffff"},children:X.title}),g.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-mono)",background:"rgba(255,255,255,0.08)",padding:"2px 6px",borderRadius:"4px",color:"#a1a1aa"},children:X.category}),X.featured&&g.jsx("span",{style:{fontSize:"0.64rem",fontWeight:700,background:"#ffffff",color:"#000000",padding:"1px 6px",borderRadius:"4px"},children:"FEATURED"})]}),g.jsx("div",{style:{fontSize:"0.78rem",color:"#71717a"},children:(ue=X.tags)==null?void 0:ue.slice(0,3).join(", ")})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[g.jsxs("button",{onClick:()=>D(X),style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"8px",padding:"8px 12px",color:"#ffffff",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",fontSize:"0.78rem"},children:[g.jsx(A2,{size:13}),g.jsx("span",{children:"Edit"})]}),g.jsx("button",{onClick:()=>ne(X.id),style:{background:"rgba(239, 68, 68, 0.15)",border:"1px solid rgba(239, 68, 68, 0.25)",borderRadius:"8px",padding:"8px 10px",color:"#f87171",cursor:"pointer"},children:g.jsx(uc,{size:14})})]})]},X.id)})})]}),c==="profile"&&g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff",marginBottom:"6px"},children:"Profile & Branding Content"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"24px"},children:"Edit your name, headline, bio, experience counters, and contact details."}),g.jsxs("form",{onSubmit:J,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"16px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"FULL NAME"}),g.jsx("input",{type:"text",value:O.name||"",onChange:X=>N({...O,name:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"PRIMARY TITLE"}),g.jsx("input",{type:"text",value:O.role||"",onChange:X=>N({...O,role:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"SECONDARY SUBTITLE"}),g.jsx("input",{type:"text",value:O.subRole||"",onChange:X=>N({...O,subRole:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"HERO TAGLINE"}),g.jsx("input",{type:"text",value:O.tagline||"",onChange:X=>N({...O,tagline:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"ABOUT BIO"}),g.jsx("textarea",{rows:4,value:O.bio||"",onChange:X=>N({...O,bio:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",resize:"none"}})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"EMAIL"}),g.jsx("input",{type:"email",value:O.email||"",onChange:X=>N({...O,email:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"PHONE / WHATSAPP"}),g.jsx("input",{type:"text",value:O.phone||"",onChange:X=>N({...O,phone:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{display:"block",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#a1a1aa",marginBottom:"4px"},children:"AVAILABILITY STATUS"}),g.jsx("input",{type:"text",value:O.status||"",onChange:X=>N({...O,status:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}})]})]}),g.jsx("div",{style:{marginTop:"10px"},children:g.jsxs("button",{type:"submit",className:"btn-primary",disabled:p,children:[g.jsx(iv,{size:16}),g.jsx("span",{children:"Update Profile Settings"})]})})]})]}),c==="skills"&&g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff",marginBottom:"6px"},children:"Skills Manager"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"22px"},children:"Add skills with proficiency levels."}),g.jsxs("form",{onSubmit:fe,style:{background:"rgba(255, 255, 255, 0.04)",padding:"16px",borderRadius:"12px",display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center",marginBottom:"24px"},children:[g.jsx("input",{type:"text",placeholder:"Skill Name (e.g. Next.js)",required:!0,value:P.name,onChange:X=>H({...P,name:X.target.value}),style:{flex:1,minWidth:"160px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}}),g.jsxs("select",{value:P.category,onChange:X=>H({...P,category:X.target.value}),style:{background:"#18181b",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"},children:[g.jsx("option",{value:"Frontend",children:"Frontend"}),g.jsx("option",{value:"Backend",children:"Backend"}),g.jsx("option",{value:"Creative & 3D",children:"Creative & 3D"}),g.jsx("option",{value:"Database",children:"Database"}),g.jsx("option",{value:"Tools",children:"Tools"})]}),g.jsx("input",{type:"number",min:"10",max:"100",value:P.level,onChange:X=>H({...P,level:X.target.value}),placeholder:"Level %",style:{width:"80px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}}),g.jsxs("button",{type:"submit",className:"btn-primary",style:{padding:"10px 18px"},children:[g.jsx(Jf,{size:16}),g.jsx("span",{children:"Add"})]})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"12px"},children:(f.skills||[]).map(X=>g.jsxs("div",{className:"glass-panel",style:{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#ffffff"},children:X.name}),g.jsxs("div",{style:{fontSize:"0.72rem",color:"#71717a"},children:[X.category," • ",X.level,"%"]})]}),g.jsx("button",{onClick:()=>V(X.id),style:{background:"transparent",border:"none",color:"#f87171",cursor:"pointer"},children:g.jsx(uc,{size:15})})]},X.id))})]}),c==="services"&&g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff",marginBottom:"6px"},children:"Services & Offerings"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"22px"},children:"Manage the services you offer to clients."}),g.jsxs("form",{onSubmit:ie,style:{background:"rgba(255, 255, 255, 0.04)",padding:"18px",borderRadius:"12px",display:"flex",flexDirection:"column",gap:"12px",marginBottom:"24px"},children:[g.jsx("input",{type:"text",placeholder:"Service Title (e.g. AI-Powered Web Apps)",required:!0,value:Y.title,onChange:X=>L({...Y,title:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}}),g.jsx("textarea",{placeholder:"Service Description...",rows:2,value:Y.description,onChange:X=>L({...Y,description:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff",resize:"none"}}),g.jsx("input",{type:"text",placeholder:"Tags (e.g. React, Next.js, OpenAI)",value:Y.tags,onChange:X=>L({...Y,tags:X.target.value}),style:{width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",padding:"10px 12px",color:"#ffffff"}}),g.jsxs("button",{type:"submit",className:"btn-primary",style:{alignSelf:"flex-start"},children:[g.jsx(Jf,{size:16}),g.jsx("span",{children:"Add Service"})]})]}),g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:(f.services||[]).map(X=>g.jsxs("div",{className:"glass-panel",style:{padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,color:"#ffffff",marginBottom:"4px"},children:X.title}),g.jsx("div",{style:{fontSize:"0.82rem",color:"#a1a1aa"},children:X.description})]}),g.jsx("button",{onClick:()=>oe(X.id),style:{background:"transparent",border:"none",color:"#f87171",cursor:"pointer"},children:g.jsx(uc,{size:16})})]},X.id))})]}),c==="messages"&&g.jsxs("div",{children:[g.jsxs("h3",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff",marginBottom:"6px"},children:["Contact Inquiries (",((Ne=f.messages)==null?void 0:Ne.length)||0,")"]}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"22px"},children:"Direct messages sent by visitors through your portfolio contact form."}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[(!f.messages||f.messages.length===0)&&g.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#71717a",fontFamily:"var(--font-mono)"},children:"No messages received yet."}),(f.messages||[]).map(X=>g.jsxs("div",{className:"glass-panel",style:{padding:"20px 24px",display:"flex",flexDirection:"column",gap:"10px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsxs("div",{children:[g.jsx("span",{style:{fontWeight:700,color:"#ffffff",fontSize:"1rem"},children:X.name}),g.jsx("span",{style:{margin:"0 8px",color:"#52525b"},children:"•"}),g.jsx("a",{href:`mailto:${X.email}`,style:{color:"#a1a1aa",fontSize:"0.86rem",textDecoration:"none"},children:X.email})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[g.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"#71717a"},children:X.date}),g.jsx("button",{onClick:()=>le(X.id),style:{background:"transparent",border:"none",color:"#f87171",cursor:"pointer"},children:g.jsx(uc,{size:15})})]})]}),g.jsxs("div",{style:{fontWeight:600,fontSize:"0.88rem",color:"#ffffff"},children:["Subject: ",X.subject]}),g.jsx("p",{style:{fontSize:"0.88rem",lineHeight:1.6,color:"#d4d4d8",background:"rgba(255,255,255,0.02)",padding:"12px",borderRadius:"8px"},children:X.message})]},X.id))]})]})]})]}):g.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px"},children:g.jsxs("div",{style:{maxWidth:"400px",width:"100%",background:"rgba(20, 20, 26, 0.7)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"20px",padding:"36px",textAlign:"center"},children:[g.jsx("div",{style:{width:"54px",height:"54px",borderRadius:"16px",background:"rgba(255, 255, 255, 0.07)",border:"1px solid rgba(255, 255, 255, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px auto"},children:g.jsx(x2,{size:24,color:"#ffffff"})}),g.jsx("h3",{style:{fontSize:"1.35rem",fontWeight:800,color:"#ffffff",marginBottom:"8px"},children:"Admin Authentication"}),g.jsx("p",{style:{fontSize:"0.84rem",color:"#a1a1aa",marginBottom:"24px"},children:"Please enter your administrator PIN to modify projects, profile, skills, and manage messages."}),o&&g.jsx("div",{style:{background:"rgba(239, 68, 68, 0.15)",border:"1px solid rgba(239, 68, 68, 0.3)",borderRadius:"10px",padding:"8px 12px",color:"#f87171",fontSize:"0.82rem",marginBottom:"18px"},children:o}),g.jsxs("form",{onSubmit:F,children:[g.jsx("input",{type:"password",placeholder:"Enter PIN (Default: admin123)",value:r,onChange:X=>s(X.target.value),autoFocus:!0,style:{width:"100%",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"12px",padding:"14px",color:"#ffffff",fontSize:"1.1rem",textAlign:"center",letterSpacing:"0.2em",outline:"none",marginBottom:"18px"}}),g.jsx("button",{type:"submit",className:"btn-primary",style:{width:"100%"},children:g.jsx("span",{children:"Access Dashboard"})})]}),g.jsxs("div",{style:{marginTop:"18px",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#71717a"},children:["Default Master PIN: ",g.jsx("code",{style:{color:"#ffffff"},children:"admin123"})]})]})})]})}):null}const SN={profile:{name:"Satyam Rajpoot",role:"Creative Web Developer",subRole:"Full-Stack Architect & 3D Interactive UI Crafter",tagline:"Crafting next-generation 3D interactive web experiences and robust full-stack applications with obsessive attention to design and performance.",bio:"Hello! I am Satyam Rajpoot, a passionate Web Developer with 3+ years of experience turning complex ideas into sleek, fluid digital realities. I specialize in modern JavaScript, React, Three.js, and high-performance Node.js backends.",location:"India",experienceYears:"3+",completedProjects:"35+",satisfiedClients:"28+",email:"satyamrajpoot.dev@gmail.com",phone:"+91 98765 43210",status:"Available for High-Impact Roles & Freelance",socials:{github:"https://github.com/satyamrajpoot",linkedin:"https://linkedin.com/in/satyamrajpoot",twitter:"https://x.com/satyamrajpoot"}},projects:[{id:"proj-1",title:"AuraSphere 3D Commerce",category:"3D Websites",description:"An award-winning luxury 3D e-commerce showcase featuring interactive WebGL product customization and 60FPS fluid physics.",imageUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",tags:["React","Three.js","WebGL","CSS Modules"],liveUrl:"https://aurasphere-demo.vercel.app",githubUrl:"https://github.com/satyamrajpoot/aurasphere-3d",featured:!0,metrics:"60 FPS 3D Engine • 99 Performance Score"},{id:"proj-2",title:"NexusAI Cloud Analytics",category:"Full Stack",description:"Enterprise-grade SaaS dashboard with real-time AI telemetry, custom workflow builders, and interactive charting.",imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",tags:["React","Node.js","Express","MongoDB","Chart.js"],liveUrl:"https://nexus-ai-cloud.vercel.app",githubUrl:"https://github.com/satyamrajpoot/nexus-ai-cloud",featured:!0,metrics:"Real-time WebSockets • 10k+ Events/sec"},{id:"proj-3",title:"VortexPay Digital Banking",category:"Web Apps",description:"Sleek dark-mode digital banking web application with instant cross-border transfers and virtual card issuing.",imageUrl:"https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",tags:["React","TypeScript","REST API","Tailwind"],liveUrl:"https://vortexpay-demo.vercel.app",githubUrl:"https://github.com/satyamrajpoot/vortexpay-fintech",featured:!0,metrics:"End-to-end Encryption • Sub-100ms APIs"},{id:"proj-4",title:"CyberFolio Obsidian",category:"3D Websites",description:"A high-concept monochrome 3D portfolio template designed for creative directors with spatial audio effects.",imageUrl:"https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",tags:["Three.js","React","GSAP Scroll","Audio API"],liveUrl:"https://cyberfolio-obsidian.vercel.app",githubUrl:"https://github.com/satyamrajpoot/cyberfolio-obsidian",featured:!1,metrics:"Cinematic Shaders • Adaptive Dark Theme"},{id:"proj-5",title:"Krypton DAO Protocol",category:"Web Apps",description:"Decentralized autonomous organization portal featuring proposal voting, treasury telemetry, and modern glassmorphism.",imageUrl:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",tags:["React","Ethers.js","Web3 UI","Node.js"],liveUrl:"https://krypton-dao.vercel.app",githubUrl:"https://github.com/satyamrajpoot/krypton-dao-ui",featured:!1,metrics:"Smart Contract Verified • Zero Gas Estimates"},{id:"proj-6",title:"PulseSync Team Workspaces",category:"Full Stack",description:"Collaborative project planner with real-time kanban boards, live multi-cursor presence, and sprint telemetry.",imageUrl:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",tags:["React","Node.js","Socket.io","Express","SQLite"],liveUrl:"https://pulsesync-work.vercel.app",githubUrl:"https://github.com/satyamrajpoot/pulsesync-app",featured:!0,metrics:"Live Multiplayer • Offline Sync"}],skills:[{id:"sk-1",name:"React.js & Next.js",category:"Frontend",level:95,icon:"Code2"},{id:"sk-2",name:"JavaScript (ES6+) & TS",category:"Frontend",level:94,icon:"FileCode"},{id:"sk-3",name:"Three.js & 3D WebGL",category:"Creative & 3D",level:88,icon:"Layers"},{id:"sk-4",name:"Node.js & Express",category:"Backend",level:92,icon:"Server"},{id:"sk-5",name:"RESTful APIs & Microservices",category:"Backend",level:93,icon:"Cpu"},{id:"sk-6",name:"HTML5 & Modern CSS3",category:"Frontend",level:98,icon:"Palette"},{id:"sk-7",name:"MongoDB & PostgreSQL",category:"Database",level:87,icon:"Database"},{id:"sk-8",name:"UI/UX & Glassmorphism",category:"Creative & 3D",level:90,icon:"Sparkles"},{id:"sk-9",name:"Git, GitHub & CI/CD",category:"Tools",level:92,icon:"GitBranch"},{id:"sk-10",name:"Vite & Performance Tuning",category:"Tools",level:95,icon:"Zap"}],services:[{id:"srv-1",title:"Custom Web Applications",description:"Architecting modern, lightning-fast Single Page Applications and Progressive Web Apps built with React and clean modular architecture.",icon:"Monitor",tags:["React","State Management","SPA","Clean Code"]},{id:"srv-2",title:"3D & Interactive Web Experiences",description:"Crafting unforgettable immersive 3D websites, particle systems, interactive avatars, and scroll-triggered spatial storytelling using Three.js.",icon:"Box",tags:["Three.js","WebGL","Scroll Animations","Shaders"]},{id:"srv-3",title:"Full-Stack Backend & REST APIs",description:"Developing robust Node.js/Express backend architectures, authentication systems, reliable REST APIs, and database schemas.",icon:"Server",tags:["Node.js","Express","MongoDB","Security","APIs"]},{id:"srv-4",title:"Performance & Aesthetic Redesign",description:"Transforming legacy websites into high-converting, luxury monochrome digital experiences with 90+ Lighthouse speed scores.",icon:"Sparkles",tags:["UI/UX Redesign","Lighthouse 95+","SEO","Micro-interactions"]}]},Ad=6;function MN(){const[t,e]=Oe.useState(0),[n,i]=Oe.useState(SN),[a,r]=Oe.useState(!1),s=Oe.useRef(!1),o=Oe.useRef(0),l=Oe.useCallback(async()=>{try{const u=await fetch("/api/portfolio");if(u.ok){const h=await u.json();h.success&&h.data&&i(h.data)}}catch{console.log("Backend syncing: using cached/fallback portfolio data")}},[]);Oe.useEffect(()=>{l()},[l]);const c=Oe.useCallback(()=>{e(u=>u<Ad-1?u+1:u)},[]),d=Oe.useCallback(()=>{e(u=>u>0?u-1:u)},[]);Oe.useEffect(()=>{const u=m=>{a||s.current||(m.deltaY>30?(s.current=!0,c(),setTimeout(()=>{s.current=!1},850)):m.deltaY<-30&&(s.current=!0,d(),setTimeout(()=>{s.current=!1},850)))},h=m=>{o.current=m.touches[0].clientY},_=m=>{if(a||s.current)return;const f=o.current-m.changedTouches[0].clientY;f>50?(s.current=!0,c(),setTimeout(()=>{s.current=!1},850)):f<-50&&(s.current=!0,d(),setTimeout(()=>{s.current=!1},850))},M=m=>{a||(m.key==="ArrowDown"||m.key==="PageDown"||m.key===" "?(m.preventDefault(),c()):(m.key==="ArrowUp"||m.key==="PageUp")&&(m.preventDefault(),d()))};return window.addEventListener("wheel",u,{passive:!0}),window.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("touchend",_,{passive:!0}),window.addEventListener("keydown",M),()=>{window.removeEventListener("wheel",u),window.removeEventListener("touchstart",h),window.removeEventListener("touchend",_),window.removeEventListener("keydown",M)}},[c,d,a]);const p=u=>u===t?"section-slide active":u<t?"section-slide prev":"section-slide next";return g.jsxs("div",{className:"presentation-viewport",children:[g.jsx("div",{className:"ambient-background",children:g.jsx("div",{className:"ambient-grid"})}),g.jsx(L2,{currentSection:t,totalSections:Ad,onSelectSection:u=>e(u),onNext:c,onPrev:d,onOpenAdmin:()=>r(!0)}),g.jsxs("main",{className:"stage-container",children:[g.jsx("section",{className:p(0),children:g.jsx(uN,{profile:n.profile,onExplore:()=>e(3),onContact:()=>e(5),onOpenAdmin:()=>r(!0)})}),g.jsx("section",{className:p(1),children:g.jsx(fN,{profile:n.profile})}),g.jsx("section",{className:p(2),children:g.jsx(hN,{skills:n.skills})}),g.jsx("section",{className:p(3),children:g.jsx(gN,{projects:n.projects,onOpenAdmin:()=>r(!0)})}),g.jsx("section",{className:p(4),children:g.jsx(xN,{services:n.services,onContact:()=>e(5)})}),g.jsx("section",{className:p(5),children:g.jsx(_N,{profile:n.profile})})]}),g.jsx(cN,{currentSection:t,totalSections:Ad,onNavigateNext:c}),g.jsx(yN,{isOpen:a,onClose:()=>r(!1),onDataUpdated:l})]})}ZT.createRoot(document.getElementById("root")).render(g.jsx(Oe.StrictMode,{children:g.jsx(MN,{})}));
