import{bg as v,ax as h}from"./index-Dfc-6JsL.js";function z(g){let{swiper:e,extendParams:x,emit:c,once:S}=g;x({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function E(){if(e.params.cssMode)return;const s=e.getTranslate();e.setTranslate(s),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function b(){if(e.params.cssMode)return;const{touchEventsData:s,touches:m}=e;s.velocities.length===0&&s.velocities.push({position:m[e.isHorizontal()?"startX":"startY"],time:s.touchStartTime}),s.velocities.push({position:m[e.isHorizontal()?"currentX":"currentY"],time:v()})}function B(s){let{currentPos:m}=s;if(e.params.cssMode)return;const{params:o,wrapperEl:f,rtlTranslate:p,snapGrid:a,touchEventsData:r}=e,w=v()-r.touchStartTime;if(m<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(m>-e.maxTranslate()){e.slides.length<a.length?e.slideTo(a.length-1):e.slideTo(e.slides.length-1);return}if(o.freeMode.momentum){if(r.velocities.length>1){const i=r.velocities.pop(),n=r.velocities.pop(),P=i.position-n.position,y=i.time-n.time;e.velocity=P/y,e.velocity/=2,Math.abs(e.velocity)<o.freeMode.minimumVelocity&&(e.velocity=0),(y>150||v()-i.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=o.freeMode.momentumVelocityRatio,r.velocities.length=0;let l=1e3*o.freeMode.momentumRatio;const D=e.velocity*l;let t=e.translate+D;p&&(t=-t);let M=!1,u;const d=Math.abs(e.velocity)*20*o.freeMode.momentumBounceRatio;let T;if(t<e.maxTranslate())o.freeMode.momentumBounce?(t+e.maxTranslate()<-d&&(t=e.maxTranslate()-d),u=e.maxTranslate(),M=!0,r.allowMomentumBounce=!0):t=e.maxTranslate(),o.loop&&o.centeredSlides&&(T=!0);else if(t>e.minTranslate())o.freeMode.momentumBounce?(t-e.minTranslate()>d&&(t=e.minTranslate()+d),u=e.minTranslate(),M=!0,r.allowMomentumBounce=!0):t=e.minTranslate(),o.loop&&o.centeredSlides&&(T=!0);else if(o.freeMode.sticky){let i;for(let n=0;n<a.length;n+=1)if(a[n]>-t){i=n;break}Math.abs(a[i]-t)<Math.abs(a[i-1]-t)||e.swipeDirection==="next"?t=a[i]:t=a[i-1],t=-t}if(T&&S("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(p?l=Math.abs((-t-e.translate)/e.velocity):l=Math.abs((t-e.translate)/e.velocity),o.freeMode.sticky){const i=Math.abs((p?-t:t)-e.translate),n=e.slidesSizesGrid[e.activeIndex];i<n?l=o.speed:i<2*n?l=o.speed*1.5:l=o.speed*2.5}}else if(o.freeMode.sticky){e.slideToClosest();return}o.freeMode.momentumBounce&&M?(e.updateProgress(u),e.setTransition(l),e.setTranslate(t),e.transitionStart(!0,e.swipeDirection),e.animating=!0,h(f,()=>{!e||e.destroyed||!r.allowMomentumBounce||(c("momentumBounce"),e.setTransition(o.speed),setTimeout(()=>{e.setTranslate(u),h(f,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(c("_freeModeNoMomentumRelease"),e.updateProgress(t),e.setTransition(l),e.setTranslate(t),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,h(f,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(t),e.updateActiveIndex(),e.updateSlidesClasses()}else if(o.freeMode.sticky){e.slideToClosest();return}else o.freeMode&&c("_freeModeNoMomentumRelease");(!o.freeMode.momentum||w>=o.longSwipesMs)&&(c("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:E,onTouchMove:b,onTouchEnd:B}})}export{z as f};
