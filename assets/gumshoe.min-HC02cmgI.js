import{j as m}from"./index-kkg-nI6U.js";import{c as g,g as I}from"./vendor-CST6t91B.js";const P=({title:v,children:b})=>m.jsxs("div",{className:"rounded-lg border border-default-200 bg-white dark:bg-default-50",children:[m.jsx("div",{className:"border-b border-default-200 px-6 py-3",children:m.jsx("h4",{className:"text-lg text-default-900",children:v})}),m.jsx("div",{className:"p-6",children:b})]});var A={exports:{}};/*! gumshoejs v5.1.2 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */(function(v,b){(function(r,p){v.exports=p(r)})(typeof g<"u"?g:typeof window<"u"?window:g,function(r){var p={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},x=function(t,n,e){if(e.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:e});n.dispatchEvent(o)}},C=function(t){var n=0;if(t.offsetParent)for(;t;)n+=t.offsetTop,t=t.offsetParent;return n>=0?n:0},E=function(t){t&&t.sort(function(n,e){return C(n.content)<C(e.content)?-1:1})},y=function(t,n,e){var o=t.getBoundingClientRect(),s=function(a){return typeof a.offset=="function"?parseFloat(a.offset()):parseFloat(a.offset)}(n);return e?parseInt(o.bottom,10)<(r.innerHeight||document.documentElement.clientHeight):parseInt(o.top,10)<=s},F=function(){return r.innerHeight+r.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},N=function(t,n){var e=t[t.length-1];if(function(s,a){return!(!F()||!y(s.content,a,!0))}(e,n))return e;for(var o=t.length-1;o>=0;o--)if(y(t[o].content,n))return t[o]},w=function(t,n){if(n.nested&&t.parentNode){var e=t.parentNode.closest("li");e&&(e.classList.remove(n.nestedClass),w(e,n))}},h=function(t,n){if(t){var e=t.nav.closest("li");e&&(e.classList.remove(n.navClass),t.content.classList.remove(n.contentClass),w(e,n),x("gumshoeDeactivate",e,{link:t.nav,content:t.content,settings:n}))}},L=function(t,n){if(n.nested){var e=t.parentNode.closest("li");e&&(e.classList.add(n.nestedClass),L(e,n))}};return function(t,n){var e,o,s,a,l,u={};u.setup=function(){e=document.querySelectorAll(t),o=[],Array.prototype.forEach.call(e,function(c){var i=document.getElementById(decodeURIComponent(c.hash.substr(1)));i&&o.push({nav:c,content:i})}),E(o)},u.detect=function(){var c=N(o,l);c?s&&c.content===s.content||(h(s,l),function(i,f){if(i){var d=i.nav.closest("li");d&&(d.classList.add(f.navClass),i.content.classList.add(f.contentClass),L(d,f),x("gumshoeActivate",d,{link:i.nav,content:i.content,settings:f}))}}(c,l),s=c):s&&(h(s,l),s=null)};var H=function(c){a&&r.cancelAnimationFrame(a),a=r.requestAnimationFrame(u.detect)},j=function(c){a&&r.cancelAnimationFrame(a),a=r.requestAnimationFrame(function(){E(o),u.detect()})};return u.destroy=function(){s&&h(s,l),r.removeEventListener("scroll",H,!1),l.reflow&&r.removeEventListener("resize",j,!1),o=null,e=null,s=null,a=null,l=null},l=function(){var c={};return Array.prototype.forEach.call(arguments,function(i){for(var f in i){if(!i.hasOwnProperty(f))return;c[f]=i[f]}}),c}(p,n||{}),u.setup(),u.detect(),r.addEventListener("scroll",H,!1),l.reflow&&r.addEventListener("resize",j,!1),u}})})(A);var k=A.exports;const R=I(k);export{P as C,R as G};
