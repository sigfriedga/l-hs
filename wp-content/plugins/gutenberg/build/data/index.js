window.wp=window.wp||{},window.wp.data=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=407)}({0:function(e,t){e.exports=window.wp.element},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(12);function o(e,t){var r=Object(n.useState)((function(){return{inputs:t,result:e()}}))[0],o=Object(n.useRef)(r),c=Boolean(t&&o.current.inputs&&function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.current.inputs))?o.current:{inputs:t,result:e()};return Object(n.useEffect)((function(){o.current=c}),[c]),c.result}},12:function(e,t){e.exports=window.React},139:function(e,t){e.exports=window.wp.priorityQueue},140:function(e,t){function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}e.exports=r,e.exports.default=r},159:function(e,t){e.exports=function(e){var t,r=Object.keys(e);return t=function(){var e,t,n;for(e="return {",t=0;t<r.length;t++)e+=(n=JSON.stringify(r[t]))+":r["+n+"](s["+n+"],a),";return e+="}",new Function("r,s,a",e)}(),function(n,o){var c,i,s;if(void 0===n)return t(e,{},o);for(c=t(e,n,o),i=r.length;i--;)if(n[s=r[i]]!==c[s])return c;return n}}},2:function(e,t){e.exports=window.lodash},23:function(e,t){e.exports=window.wp.deprecated},265:function(e,t){e.exports=window.wp.reduxRoutine},407:function(e,t,r){"use strict";r.r(t),r.d(t,"withSelect",(function(){return Ee})),r.d(t,"withDispatch",(function(){return Te})),r.d(t,"withRegistry",(function(){return Ie})),r.d(t,"RegistryProvider",(function(){return ye})),r.d(t,"RegistryConsumer",(function(){return he})),r.d(t,"useRegistry",(function(){return ve})),r.d(t,"useSelect",(function(){return _e})),r.d(t,"useDispatch",(function(){return Ne})),r.d(t,"AsyncModeProvider",(function(){return Re})),r.d(t,"createRegistry",(function(){return J})),r.d(t,"createRegistrySelector",(function(){return j})),r.d(t,"createRegistryControl",(function(){return _})),r.d(t,"controls",(function(){return E})),r.d(t,"createReduxStore",(function(){return B})),r.d(t,"plugins",(function(){return c})),r.d(t,"combineReducers",(function(){return s.a})),r.d(t,"select",(function(){return Ae})),r.d(t,"resolveSelect",(function(){return Le})),r.d(t,"dispatch",(function(){return xe})),r.d(t,"subscribe",(function(){return Pe})),r.d(t,"registerGenericStore",(function(){return Ce})),r.d(t,"registerStore",(function(){return ke})),r.d(t,"use",(function(){return Ue})),r.d(t,"register",(function(){return Me}));var n={};r.r(n),r.d(n,"getIsResolving",(function(){return C})),r.d(n,"hasStartedResolution",(function(){return k})),r.d(n,"hasFinishedResolution",(function(){return U})),r.d(n,"isResolving",(function(){return M})),r.d(n,"getCachedResolvers",(function(){return D}));var o={};r.r(o),r.d(o,"startResolution",(function(){return F})),r.d(o,"finishResolution",(function(){return V})),r.d(o,"startResolutions",(function(){return G})),r.d(o,"finishResolutions",(function(){return H})),r.d(o,"invalidateResolution",(function(){return K})),r.d(o,"invalidateResolutionForStore",(function(){return W})),r.d(o,"invalidateResolutionForStoreSelector",(function(){return X}));var c={};r.r(c),r.d(c,"controls",(function(){return $})),r.d(c,"persistence",(function(){return ie}));var i=r(159),s=r.n(i),u=r(2);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var d="function"==typeof Symbol&&Symbol.observable||"@@observable",b=function(){return Math.random().toString(36).substring(7).split("").join(".")},O={INIT:"@@redux/INIT"+b(),REPLACE:"@@redux/REPLACE"+b(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+b()}};function g(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function h(e,t,r){var n;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(p(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(p(1));return r(h)(e,t)}if("function"!=typeof e)throw new Error(p(2));var o=e,c=t,i=[],s=i,u=!1;function a(){s===i&&(s=i.slice())}function l(){if(u)throw new Error(p(3));return c}function f(e){if("function"!=typeof e)throw new Error(p(4));if(u)throw new Error(p(5));var t=!0;return a(),s.push(e),function(){if(t){if(u)throw new Error(p(6));t=!1,a();var r=s.indexOf(e);s.splice(r,1),i=null}}}function b(e){if(!g(e))throw new Error(p(7));if(void 0===e.type)throw new Error(p(8));if(u)throw new Error(p(9));try{u=!0,c=o(c,e)}finally{u=!1}for(var t=i=s,r=0;r<t.length;r++)(0,t[r])();return e}function y(e){if("function"!=typeof e)throw new Error(p(10));o=e,b({type:O.REPLACE})}function v(){var e,t=f;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(p(11));function r(){e.next&&e.next(l())}return r(),{unsubscribe:t(r)}}})[d]=function(){return this},e}return b({type:O.INIT}),(n={dispatch:b,subscribe:f,getState:l,replaceReducer:y})[d]=v,n}function y(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function v(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(p(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},c=t.map((function(e){return e(o)}));return n=y.apply(void 0,c)(r.dispatch),f(f({},r),{},{dispatch:n})}}}var S=r(84),m=r.n(S),w=r(265),R=r.n(w);function j(e){const t=(...r)=>e(t.registry.select)(...r);return t.isRegistrySelector=!0,t}function _(e){return e.isRegistryControl=!0,e}const E={select:function(e,t,...r){return{type:"@@data/SELECT",storeKey:e,selectorName:t,args:r}},resolveSelect:function(e,t,...r){return{type:"@@data/RESOLVE_SELECT",storeKey:e,selectorName:t,args:r}},dispatch:function(e,t,...r){return{type:"@@data/DISPATCH",storeKey:e,actionName:t,args:r}}},T={"@@data/SELECT":_(e=>({storeKey:t,selectorName:r,args:n})=>e.select(t)[r](...n)),"@@data/RESOLVE_SELECT":_(e=>({storeKey:t,selectorName:r,args:n})=>{const o=e.select(t)[r].hasResolver?"resolveSelect":"select";return e[o](t)[r](...n)}),"@@data/DISPATCH":_(e=>({storeKey:t,actionName:r,args:n})=>e.dispatch(t)[r](...n))};var I=r(140),N=r.n(I),A=()=>e=>t=>N()(t)?t.then(t=>{if(t)return e(t)}):e(t),L=(e,t)=>()=>r=>n=>{const o=e.select("core/data").getCachedResolvers(t);return Object.entries(o).forEach(([r,o])=>{const c=Object(u.get)(e.stores,[t,"resolvers",r]);c&&c.shouldInvalidate&&o.forEach((o,i)=>{!1===o&&c.shouldInvalidate(n,...i)&&e.dispatch("core/data").invalidateResolution(t,r,i)})}),r(n)};const x=("selectorName",e=>(t={},r)=>{const n=r.selectorName;if(void 0===n)return t;const o=e(t[n],r);return o===t[n]?t:{...t,[n]:o}})((e=new m.a,t)=>{switch(t.type){case"START_RESOLUTION":case"FINISH_RESOLUTION":{const r="START_RESOLUTION"===t.type,n=new m.a(e);return n.set(t.args,r),n}case"START_RESOLUTIONS":case"FINISH_RESOLUTIONS":{const r="START_RESOLUTIONS"===t.type,n=new m.a(e);for(const e of t.args)n.set(e,r);return n}case"INVALIDATE_RESOLUTION":{const r=new m.a(e);return r.delete(t.args),r}}return e});var P=(e={},t)=>{switch(t.type){case"INVALIDATE_RESOLUTION_FOR_STORE":return{};case"INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR":return Object(u.has)(e,[t.selectorName])?Object(u.omit)(e,[t.selectorName]):e;case"START_RESOLUTION":case"FINISH_RESOLUTION":case"START_RESOLUTIONS":case"FINISH_RESOLUTIONS":case"INVALIDATE_RESOLUTION":return x(e,t)}return e};function C(e,t,r){const n=Object(u.get)(e,[t]);if(n)return n.get(r)}function k(e,t,r=[]){return void 0!==C(e,t,r)}function U(e,t,r=[]){return!1===C(e,t,r)}function M(e,t,r=[]){return!0===C(e,t,r)}function D(e){return e}function F(e,t){return{type:"START_RESOLUTION",selectorName:e,args:t}}function V(e,t){return{type:"FINISH_RESOLUTION",selectorName:e,args:t}}function G(e,t){return{type:"START_RESOLUTIONS",selectorName:e,args:t}}function H(e,t){return{type:"FINISH_RESOLUTIONS",selectorName:e,args:t}}function K(e,t){return{type:"INVALIDATE_RESOLUTION",selectorName:e,args:t}}function W(){return{type:"INVALIDATE_RESOLUTION_FOR_STORE"}}function X(e){return{type:"INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR",selectorName:e}}function B(e,t){return{name:e,instantiate:r=>{const c=t.reducer,i=function(e,t,r,n){const o={...t.controls,...T},c=Object(u.mapValues)(o,e=>e.isRegistryControl?e(r):e),i=[L(r,e),A,R()(c)];var a;t.__experimentalUseThunks&&i.push((a=n,()=>e=>t=>"function"==typeof t?t(a):e(t)));const l=[v(...i)];"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&l.push(window.__REDUX_DEVTOOLS_EXTENSION__({name:e,instanceId:e}));const{reducer:f,initialState:p}=t;return h(s()({metadata:P,root:f}),{root:p},Object(u.flowRight)(l))}(e,t,r,{registry:r,get dispatch(){return Object.assign(e=>i.dispatch(e),O())},get select(){return Object.assign(e=>e(i.__unstableOriginalGetState()),b())},get resolveSelect(){return g()}}),a=function(){const e={};return{isRunning:(t,r)=>e[t]&&e[t].get(r),clear(t,r){e[t]&&e[t].delete(r)},markAsRunning(t,r){e[t]||(e[t]=new m.a),e[t].set(r,!0)}}}();let l;const f=function(e,t){return Object(u.mapValues)(e,e=>(...r)=>Promise.resolve(t.dispatch(e(...r))))}({...o,...t.actions},i);let p=function(e,t){return Object(u.mapValues)(e,e=>{const r=function(){const r=arguments.length,n=new Array(r+1);n[0]=t.__unstableOriginalGetState();for(let e=0;e<r;e++)n[e+1]=arguments[e];return e(...n)};return r.hasResolver=!1,r})}({...Object(u.mapValues)(n,e=>(t,...r)=>e(t.metadata,...r)),...Object(u.mapValues)(t.selectors,e=>(e.isRegistrySelector&&(e.registry=r),(t,...r)=>e(t.root,...r)))},i);if(t.resolvers){const e=function(e,t,r,n){const o=Object(u.mapValues)(e,e=>e.fulfill?e:{...e,fulfill:e});return{resolvers:o,selectors:Object(u.mapValues)(t,(t,c)=>{const i=e[c];if(!i)return t.hasResolver=!1,t;const s=(...e)=>(async function(){const t=r.getState();if(n.isRunning(c,e)||"function"==typeof i.isFulfilled&&i.isFulfilled(t,...e))return;const{metadata:s}=r.__unstableOriginalGetState();k(s,c,e)||(n.markAsRunning(c,e),setTimeout(async()=>{n.clear(c,e),r.dispatch(F(c,e)),await async function(e,t,r,...n){const o=Object(u.get)(t,[r]);if(!o)return;const c=o.fulfill(...n);c&&await e.dispatch(c)}(r,o,c,...e),r.dispatch(V(c,e))}))}(...e),t(...e));return s.hasResolver=!0,s})}}(t.resolvers,p,i,a);l=e.resolvers,p=e.selectors}const d=function(e,t){return Object(u.mapValues)(Object(u.omit)(e,["getIsResolving","hasStartedResolution","hasFinishedResolution","isResolving","getCachedResolvers"]),(r,n)=>(...o)=>new Promise(c=>{const i=()=>e.hasFinishedResolution(n,o),s=()=>r.apply(null,o),u=s();if(i())return c(u);const a=t.subscribe(()=>{i()&&(a(),c(s()))})}))}(p,i),b=()=>p,O=()=>f,g=()=>d;i.__unstableOriginalGetState=i.getState,i.getState=()=>i.__unstableOriginalGetState().root;const y=i&&(e=>{let t=i.__unstableOriginalGetState();return i.subscribe(()=>{const r=i.__unstableOriginalGetState(),n=r!==t;t=r,n&&e()})});return{reducer:c,store:i,actions:f,selectors:p,resolvers:l,getSelectors:b,getResolveSelectors:g,getActions:O,subscribe:y}}}}function J(e={},t=null){const r={};let n=[];const o=new Set;function c(){n.forEach(e=>e())}const i=e=>(n.push(e),()=>{n=Object(u.without)(n,e)});function s(e,t){if("function"!=typeof t.getSelectors)throw new TypeError("config.getSelectors must be a function");if("function"!=typeof t.getActions)throw new TypeError("config.getActions must be a function");if("function"!=typeof t.subscribe)throw new TypeError("config.subscribe must be a function");r[e]=t,t.subscribe(c)}let a={registerGenericStore:s,stores:r,namespaces:r,subscribe:i,select:function(e){const n=Object(u.isObject)(e)?e.name:e;o.add(n);const c=r[n];return c?c.getSelectors():t&&t.select(n)},resolveSelect:function(e){const n=Object(u.isObject)(e)?e.name:e;o.add(n);const c=r[n];return c?c.getResolveSelectors():t&&t.resolveSelect(n)},dispatch:function(e){const n=Object(u.isObject)(e)?e.name:e,o=r[n];return o?o.getActions():t&&t.dispatch(n)},use:function(e,t){return a={...a,...e(a,t)},a},register:function(e){s(e.name,e.instantiate(a))},__experimentalMarkListeningStores:function(e,t){o.clear();const r=e.call(this);return t.current=Array.from(o),r},__experimentalSubscribeStore:function(e,n){return e in r?r[e].subscribe(n):t?t.__experimentalSubscribeStore(e,n):i(n)},registerStore:(e,t)=>{if(!t.reducer)throw new TypeError("Must specify store reducer");const r=B(e,t).instantiate(a);return s(e,r),r.store}};return s("core/data",function(e){const t=t=>(r,...n)=>e.select(r)[t](...n),r=t=>(r,...n)=>e.dispatch(r)[t](...n);return{getSelectors:()=>["getIsResolving","hasStartedResolution","hasFinishedResolution","isResolving","getCachedResolvers"].reduce((e,r)=>({...e,[r]:t(r)}),{}),getActions:()=>["startResolution","finishResolution","invalidateResolution","invalidateResolutionForStore","invalidateResolutionForStoreSelector"].reduce((e,t)=>({...e,[t]:r(t)}),{}),subscribe:()=>()=>{}}}(a)),Object.entries(e).forEach(([e,t])=>a.registerStore(e,t)),t&&t.subscribe(c),l=a,Object(u.mapValues)(l,(e,t)=>"function"!=typeof e?e:function(){return a[t].apply(null,arguments)});var l}var q=J(),z=r(23),Q=r.n(z),$=e=>(Q()("wp.data.plugins.controls",{since:"5.4",hint:"The controls plugins is now baked-in."}),e);let Y;const Z={getItem:e=>Y&&Y[e]?Y[e]:null,setItem(e,t){Y||Z.clear(),Y[e]=String(t)},clear(){Y=Object.create(null)}};var ee=Z;let te;try{te=window.localStorage,te.setItem("__wpDataTestLocalStorage",""),te.removeItem("__wpDataTestLocalStorage")}catch(e){te=ee}const re=te,ne="WP_DATA";function oe(e){const{storage:t=re,storageKey:r=ne}=e;let n;return{get:function(){if(void 0===n){const e=t.getItem(r);if(null===e)n={};else try{n=JSON.parse(e)}catch(e){n={}}}return n},set:function(e,o){n={...n,[e]:o},t.setItem(r,JSON.stringify(n))}}}function ce(e,t){const r=oe(t);return{registerStore(t,n){if(!n.persist)return e.registerStore(t,n);const o=r.get()[t];if(void 0!==o){let e=n.reducer(n.initialState,{type:"@@WP/PERSISTENCE_RESTORE"});e=Object(u.isPlainObject)(e)&&Object(u.isPlainObject)(o)?Object(u.merge)({},e,o):o,n={...n,initialState:e}}const c=e.registerStore(t,n);return c.subscribe(function(e,t,n){let o;if(Array.isArray(n)){const e=n.reduce((e,t)=>Object.assign(e,{[t]:(e,r)=>r.nextState[t]}),{});c=s()(e),o=(e,t)=>t.nextState===e?e:c(e,t)}else o=(e,t)=>t.nextState;var c;let i=o(void 0,{nextState:e()});return()=>{const n=o(i,{nextState:e()});n!==i&&(r.set(t,n),i=n)}}(c.getState,t,n.persist)),c}}}ce.__unstableMigrate=e=>{var t,r;const n=oe(e),o=n.get(),c=null===(t=o["core/editor"])||void 0===t||null===(r=t.preferences)||void 0===r?void 0:r.insertUsage;if(c){var i,s;const e=null===(i=o["core/block-editor"])||void 0===i||null===(s=i.preferences)||void 0===s?void 0:s.insertUsage;n.set("core/block-editor",{preferences:{insertUsage:{...c,...e}}})}let a=o["core/edit-post"];const l=Object.keys(o).length>0,f=Object(u.has)(o,["core/edit-post","preferences","features","fullscreenMode"]);l&&!f&&(a=Object(u.merge)({},a,{preferences:{features:{fullscreenMode:!1}}}));const p=Object(u.get)(o,["core/nux","preferences","areTipsEnabled"]),d=Object(u.has)(o,["core/edit-post","preferences","features","welcomeGuide"]);void 0===p||d||(a=Object(u.merge)({},a,{preferences:{features:{welcomeGuide:p}}})),a!==o["core/edit-post"]&&n.set("core/edit-post",a)};var ie=ce,se=r(7),ue=r(0),ae=r(9),le=r(115),fe=r(139),pe=r(45),de=r.n(pe);const be=Object(ue.createContext)(q),{Consumer:Oe,Provider:ge}=be,he=Oe;var ye=ge;function ve(){return Object(ue.useContext)(be)}const Se=Object(ue.createContext)(!1),{Consumer:me,Provider:we}=Se;var Re=we;const je=Object(fe.createQueue)();function _e(e,t){const r="function"!=typeof e;r&&(t=[]);const n=Object(ue.useCallback)(e,t),o=ve(),c=Object(ue.useContext)(Se),i=Object(le.a)(()=>({queue:!0}),[o]),[,s]=Object(ue.useReducer)(e=>e+1,0),u=Object(ue.useRef)(),a=Object(ue.useRef)(c),l=Object(ue.useRef)(),f=Object(ue.useRef)(),p=Object(ue.useRef)(),d=Object(ue.useRef)([]),b=Object(ue.useCallback)(e=>o.__experimentalMarkListeningStores(e,d),[o]),O=Object(ue.useMemo)(()=>({}),t||[]);let g;if(!r)try{g=u.current!==n||f.current?b(()=>n(o.select,o)):l.current}catch(e){let t="An error occurred while running 'mapSelect': "+e.message;if(f.current)throw t+="\nThe error may be correlated with this previous error:\n",t+=f.current.stack+"\n\n",t+="Original stack trace:",new Error(t);console.error(t)}return Object(ae.useIsomorphicLayoutEffect)(()=>{r||(u.current=n,l.current=g,f.current=void 0,p.current=!0,a.current!==c&&(a.current=c,je.flush(i)))}),Object(ae.useIsomorphicLayoutEffect)(()=>{if(r)return;const e=()=>{if(p.current){try{const e=b(()=>u.current(o.select,o));if(de()(l.current,e))return;l.current=e}catch(e){f.current=e}s()}};a.current?je.add(i,e):e();const t=()=>{a.current?je.add(i,e):e()},n=d.current.map(e=>o.__experimentalSubscribeStore(e,t));return()=>{p.current=!1,n.forEach(e=>null==e?void 0:e()),je.flush(i)}},[o,b,O,r]),r?o.select(e):g}var Ee=e=>Object(ae.createHigherOrderComponent)(t=>Object(ae.pure)(r=>{const n=_e((t,n)=>e(t,r,n));return Object(ue.createElement)(t,Object(se.a)({},r,n))}),"withSelect"),Te=e=>Object(ae.createHigherOrderComponent)(t=>r=>{const n=((e,t)=>{const r=ve(),n=Object(ue.useRef)(e);return Object(ae.useIsomorphicLayoutEffect)(()=>{n.current=e}),Object(ue.useMemo)(()=>{const e=n.current(r.dispatch,r);return Object(u.mapValues)(e,(e,t)=>("function"!=typeof e&&console.warn(`Property ${t} returned from dispatchMap in useDispatchWithMap must be a function.`),(...e)=>n.current(r.dispatch,r)[t](...e)))},[r,...t])})((t,n)=>e(t,r,n),[]);return Object(ue.createElement)(t,Object(se.a)({},r,n))},"withDispatch"),Ie=Object(ae.createHigherOrderComponent)(e=>t=>Object(ue.createElement)(he,null,r=>Object(ue.createElement)(e,Object(se.a)({},t,{registry:r}))),"withRegistry"),Ne=e=>{const{dispatch:t}=ve();return void 0===e?t:t(e)};const Ae=q.select,Le=q.resolveSelect,xe=q.dispatch,Pe=q.subscribe,Ce=q.registerGenericStore,ke=q.registerStore,Ue=q.use,Me=q.register},45:function(e,t){e.exports=window.wp.isShallowEqual},7:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},84:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){var r=e._map,n=e._arrayTreeMap,o=e._objectTreeMap;if(r.has(t))return r.get(t);for(var c=Object.keys(t).sort(),i=Array.isArray(t)?n:o,s=0;s<c.length;s++){var u=c[s];if(void 0===(i=i.get(u)))return;var a=t[u];if(void 0===(i=i.get(a)))return}var l=i.get("_ekm_value");return l?(r.delete(l[0]),l[0]=t,i.set("_ekm_value",l),r.set(t,l),l):void 0}var i=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clear(),t instanceof e){var r=[];t.forEach((function(e,t){r.push([t,e])})),t=r}if(null!=t)for(var n=0;n<t.length;n++)this.set(t[n][0],t[n][1])}var t,r;return t=e,(r=[{key:"set",value:function(t,r){if(null===t||"object"!==n(t))return this._map.set(t,r),this;for(var o=Object.keys(t).sort(),c=[t,r],i=Array.isArray(t)?this._arrayTreeMap:this._objectTreeMap,s=0;s<o.length;s++){var u=o[s];i.has(u)||i.set(u,new e),i=i.get(u);var a=t[u];i.has(a)||i.set(a,new e),i=i.get(a)}var l=i.get("_ekm_value");return l&&this._map.delete(l[0]),i.set("_ekm_value",c),this._map.set(t,c),this}},{key:"get",value:function(e){if(null===e||"object"!==n(e))return this._map.get(e);var t=c(this,e);return t?t[1]:void 0}},{key:"has",value:function(e){return null===e||"object"!==n(e)?this._map.has(e):void 0!==c(this,e)}},{key:"delete",value:function(e){return!!this.has(e)&&(this.set(e,void 0),!0)}},{key:"forEach",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;this._map.forEach((function(o,c){null!==c&&"object"===n(c)&&(o=o[1]),e.call(r,o,c,t)}))}},{key:"clear",value:function(){this._map=new Map,this._arrayTreeMap=new Map,this._objectTreeMap=new Map}},{key:"size",get:function(){return this._map.size}}])&&o(t.prototype,r),e}();e.exports=i},9:function(e,t){e.exports=window.wp.compose}});