import{b9 as v,ba as I,bb as g}from"./index-CqSriyhg.js";function P(h){let{swiper:e,extendParams:w,on:u}=h;w({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let b=!1,f=!1;e.thumbs={swiper:null};function x(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const s=i.clickedIndex,t=i.clickedSlide;if(t&&t.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let r;i.params.loop?r=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10):r=s,e.params.loop?e.slideToLoop(r):e.slideTo(r)}function m(){const{thumbs:i}=e.params;if(b)return!1;b=!0;const s=e.constructor;if(i.swiper instanceof s)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(I(i.swiper)){const t=Object.assign({},i.swiper);Object.assign(t,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(t),f=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",x),!0}function o(i){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const t=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let r=1;const n=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(r=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(r=1),r=Math.floor(r),s.slides.forEach(l=>l.classList.remove(n)),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let l=0;l<r;l+=1)g(s.slidesEl,`[data-swiper-slide-index="${e.realIndex+l}"]`).forEach(a=>{a.classList.add(n)});else for(let l=0;l<r;l+=1)s.slides[e.realIndex+l]&&s.slides[e.realIndex+l].classList.add(n);const d=e.params.thumbs.autoScrollOffset,p=d&&!s.params.loop;if(e.realIndex!==s.realIndex||p){const l=s.activeIndex;let a,c;if(s.params.loop){const T=s.slides.filter(S=>S.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];a=s.slides.indexOf(T),c=e.activeIndex>e.previousIndex?"next":"prev"}else a=e.realIndex,c=a>e.previousIndex?"next":"prev";p&&(a+=c==="next"?d:-1*d),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(a)<0&&(s.params.centeredSlides?a>l?a=a-Math.floor(t/2)+1:a=a+Math.floor(t/2)-1:a>l&&s.params.slidesPerGroup,s.slideTo(a,i?0:void 0))}}u("beforeInit",()=>{const{thumbs:i}=e.params;if(!(!i||!i.swiper))if(typeof i.swiper=="string"||i.swiper instanceof HTMLElement){const s=v(),t=()=>{const n=typeof i.swiper=="string"?s.querySelector(i.swiper):i.swiper;if(n&&n.swiper)i.swiper=n.swiper,m(),o(!0);else if(n){const d=p=>{i.swiper=p.detail[0],n.removeEventListener("init",d),m(),o(!0),i.swiper.update(),e.update()};n.addEventListener("init",d)}return n},r=()=>{if(e.destroyed)return;t()||requestAnimationFrame(r)};requestAnimationFrame(r)}else m(),o(!0)}),u("slideChange update resize observerUpdate",()=>{o()}),u("setTransition",(i,s)=>{const t=e.thumbs.swiper;!t||t.destroyed||t.setTransition(s)}),u("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||f&&i.destroy()}),Object.assign(e.thumbs,{init:m,update:o})}export{P as T};
