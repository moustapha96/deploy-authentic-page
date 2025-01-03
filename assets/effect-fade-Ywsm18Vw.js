import{aw as x,ax as y,ay as E}from"./index-Dfc-6JsL.js";function A(m){let{swiper:e,extendParams:s,on:c}=m;s({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function h(t,i){const r=function(){let l,o,w;return(g,v)=>{for(o=-1,l=g.length;l-o>1;)w=l+o>>1,g[w]<=v?o=w:l=w;return l}}();this.x=t,this.y=i,this.lastIndex=t.length-1;let n,a;return this.interpolate=function(l){return l?(a=r(this.x,l),n=a-1,(l-this.x[n])*(this.y[a]-this.y[n])/(this.x[a]-this.x[n])+this.y[n]):0},this}function T(t){e.controller.spline=e.params.loop?new h(e.slidesGrid,t.slidesGrid):new h(e.snapGrid,t.snapGrid)}function p(t,i){const r=e.controller.control;let n,a;const u=e.constructor;function l(o){if(o.destroyed)return;const w=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(T(o),a=-e.controller.spline.interpolate(-w)),(!a||e.params.controller.by==="container")&&(n=(o.maxTranslate()-o.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(n)||!Number.isFinite(n))&&(n=1),a=(w-e.minTranslate())*n+o.minTranslate()),e.params.controller.inverse&&(a=o.maxTranslate()-a),o.updateProgress(a),o.setTranslate(a,e),o.updateActiveIndex(),o.updateSlidesClasses()}if(Array.isArray(r))for(let o=0;o<r.length;o+=1)r[o]!==i&&r[o]instanceof u&&l(r[o]);else r instanceof u&&i!==r&&l(r)}function d(t,i){const r=e.constructor,n=e.controller.control;let a;function u(l){l.destroyed||(l.setTransition(t,e),t!==0&&(l.transitionStart(),l.params.autoHeight&&x(()=>{l.updateAutoHeight()}),y(l.wrapperEl,()=>{n&&l.transitionEnd()})))}if(Array.isArray(n))for(a=0;a<n.length;a+=1)n[a]!==i&&n[a]instanceof r&&u(n[a]);else n instanceof r&&i!==n&&u(n)}function f(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}c("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){const t=document.querySelector(e.params.controller.control);if(t&&t.swiper)e.controller.control=t.swiper;else if(t){const i=r=>{e.controller.control=r.detail[0],e.update(),t.removeEventListener("init",i)};t.addEventListener("init",i)}return}e.controller.control=e.params.controller.control}),c("update",()=>{f()}),c("resize",()=>{f()}),c("observerUpdate",()=>{f()}),c("setTranslate",(t,i,r)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(i,r)}),c("setTransition",(t,i,r)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(i,r)}),Object.assign(e.controller,{setTranslate:p,setTransition:d})}function b(m){const{effect:e,swiper:s,on:c,setTranslate:h,setTransition:T,overwriteParams:p,perspective:d,recreateShadows:f,getEffectParams:t}=m;c("beforeInit",()=>{if(s.params.effect!==e)return;s.classNames.push(`${s.params.containerModifierClass}${e}`),d&&d()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const r=p?p():{};Object.assign(s.params,r),Object.assign(s.originalParams,r)}),c("setTranslate",()=>{s.params.effect===e&&h()}),c("setTransition",(r,n)=>{s.params.effect===e&&T(n)}),c("transitionEnd",()=>{if(s.params.effect===e&&f){if(!t||!t().slideShadows)return;s.slides.forEach(r=>{r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(n=>n.remove())}),f()}});let i;c("virtualUpdate",()=>{s.params.effect===e&&(s.slides.length||(i=!0),requestAnimationFrame(()=>{i&&s.slides&&s.slides.length&&(h(),i=!1)}))})}function S(m,e){const s=E(e);return s!==e&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function P(m){let{swiper:e,duration:s,transformElements:c,allSlides:h}=m;const{activeIndex:T}=e,p=d=>d.parentElement?d.parentElement:e.slides.filter(t=>t.shadowRoot&&t.shadowRoot===d.parentNode)[0];if(e.params.virtualTranslate&&s!==0){let d=!1,f;h?f=c:f=c.filter(t=>{const i=t.classList.contains("swiper-slide-transform")?p(t):t;return e.getSlideIndex(i)===T}),f.forEach(t=>{y(t,()=>{if(d||!e||e.destroyed)return;d=!0,e.animating=!1;const i=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(i)})})}}function M(m){let{swiper:e,extendParams:s,on:c}=m;s({fadeEffect:{crossFade:!1}}),b({effect:"fade",swiper:e,on:c,setTranslate:()=>{const{slides:p}=e,d=e.params.fadeEffect;for(let f=0;f<p.length;f+=1){const t=e.slides[f];let r=-t.swiperSlideOffset;e.params.virtualTranslate||(r-=e.translate);let n=0;e.isHorizontal()||(n=r,r=0);const a=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t.progress),0):1+Math.min(Math.max(t.progress,-1),0),u=S(d,t);u.style.opacity=a,u.style.transform=`translate3d(${r}px, ${n}px, 0px)`}},setTransition:p=>{const d=e.slides.map(f=>E(f));d.forEach(f=>{f.style.transitionDuration=`${p}ms`}),P({swiper:e,duration:p,transformElements:d,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}export{A as C,M as E};
