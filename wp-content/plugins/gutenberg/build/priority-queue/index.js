window.wp=window.wp||{},window.wp.priorityQueue=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=433)}({433:function(e,t,n){"use strict";n.r(t),n.d(t,"createQueue",(function(){return o}));var r="undefined"==typeof window?e=>{setTimeout(()=>e(Date.now()),0)}:window.requestIdleCallback||window.requestAnimationFrame;const o=()=>{let e=[],t=new WeakMap,n=!1;const o=u=>{const i="number"==typeof u?()=>!1:()=>u.timeRemaining()>0;do{if(0===e.length)return void(n=!1);const r=e.shift();t.get(r)(),t.delete(r)}while(i());r(o)};return{add:(u,i)=>{t.has(u)||e.push(u),t.set(u,i),n||(n=!0,r(o))},flush:n=>{if(!t.has(n))return!1;const r=e.indexOf(n);e.splice(r,1);const o=t.get(n);return t.delete(n),o(),!0},reset:()=>{e=[],t=new WeakMap,n=!1}}}}});