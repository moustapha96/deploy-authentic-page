import{R as V,S as z,U as _,V as L,W as U,u as v,j as e,X as R,Y as W,Z as Y,_ as H,$ as G,A as N,a0 as Q,a1 as X,a2 as Z,g as B,a3 as J,O as K,v as ee,w as M,x as te,y as se,a4 as ae,p as ie,a5 as ne,a6 as re,T as E,a7 as oe,a8 as le,a9 as q,aa as ce,Q as de}from"./index-Cua2qDJq.js";import{L as w,r as C}from"./vendor-CST6t91B.js";function me(s){let{swiper:t,extendParams:o,on:m}=s;o({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let u=!1,d=!1;t.thumbs={swiper:null};function y(){const i=t.thumbs.swiper;if(!i||i.destroyed)return;const a=i.clickedIndex,x=i.clickedSlide;if(x&&x.classList.contains(t.params.thumbs.slideThumbActiveClass)||typeof a>"u"||a===null)return;let h;i.params.loop?h=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10):h=a,t.params.loop?t.slideToLoop(h):t.slideTo(h)}function f(){const{thumbs:i}=t.params;if(u)return!1;u=!0;const a=t.constructor;if(i.swiper instanceof a)t.thumbs.swiper=i.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(z(i.swiper)){const x=Object.assign({},i.swiper);Object.assign(x,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new a(x),d=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",y),!0}function l(i){const a=t.thumbs.swiper;if(!a||a.destroyed)return;const x=a.params.slidesPerView==="auto"?a.slidesPerViewDynamic():a.params.slidesPerView;let h=1;const c=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(h=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),a.slides.forEach(g=>g.classList.remove(c)),a.params.loop||a.params.virtual&&a.params.virtual.enabled)for(let g=0;g<h;g+=1)_(a.slidesEl,`[data-swiper-slide-index="${t.realIndex+g}"]`).forEach(r=>{r.classList.add(c)});else for(let g=0;g<h;g+=1)a.slides[t.realIndex+g]&&a.slides[t.realIndex+g].classList.add(c);const p=t.params.thumbs.autoScrollOffset,T=p&&!a.params.loop;if(t.realIndex!==a.realIndex||T){const g=a.activeIndex;let r,A;if(a.params.loop){const n=a.slides.filter(S=>S.getAttribute("data-swiper-slide-index")===`${t.realIndex}`)[0];r=a.slides.indexOf(n),A=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,A=r>t.previousIndex?"next":"prev";T&&(r+=A==="next"?p:-1*p),a.visibleSlidesIndexes&&a.visibleSlidesIndexes.indexOf(r)<0&&(a.params.centeredSlides?r>g?r=r-Math.floor(x/2)+1:r=r+Math.floor(x/2)-1:r>g&&a.params.slidesPerGroup,a.slideTo(r,i?0:void 0))}}m("beforeInit",()=>{const{thumbs:i}=t.params;if(!(!i||!i.swiper))if(typeof i.swiper=="string"||i.swiper instanceof HTMLElement){const a=V(),x=()=>{const c=typeof i.swiper=="string"?a.querySelector(i.swiper):i.swiper;if(c&&c.swiper)i.swiper=c.swiper,f(),l(!0);else if(c){const p=T=>{i.swiper=T.detail[0],c.removeEventListener("init",p),f(),l(!0),i.swiper.update(),t.update()};c.addEventListener("init",p)}return c},h=()=>{if(t.destroyed)return;x()||requestAnimationFrame(h)};requestAnimationFrame(h)}else f(),l(!0)}),m("slideChange update resize observerUpdate",()=>{l()}),m("setTransition",(i,a)=>{const x=t.thumbs.swiper;!x||x.destroyed||x.setTransition(a)}),m("beforeDestroy",()=>{const i=t.thumbs.swiper;!i||i.destroyed||d&&i.destroy()}),Object.assign(t.thumbs,{init:f,update:l})}function ue(s){let{swiper:t,extendParams:o,emit:m,once:u}=s;o({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function d(){if(t.params.cssMode)return;const l=t.getTranslate();t.setTranslate(l),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function y(){if(t.params.cssMode)return;const{touchEventsData:l,touches:i}=t;l.velocities.length===0&&l.velocities.push({position:i[t.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:i[t.isHorizontal()?"currentX":"currentY"],time:L()})}function f(l){let{currentPos:i}=l;if(t.params.cssMode)return;const{params:a,wrapperEl:x,rtlTranslate:h,snapGrid:c,touchEventsData:p}=t,g=L()-p.touchStartTime;if(i<-t.minTranslate()){t.slideTo(t.activeIndex);return}if(i>-t.maxTranslate()){t.slides.length<c.length?t.slideTo(c.length-1):t.slideTo(t.slides.length-1);return}if(a.freeMode.momentum){if(p.velocities.length>1){const b=p.velocities.pop(),j=p.velocities.pop(),$=b.position-j.position,O=b.time-j.time;t.velocity=$/O,t.velocity/=2,Math.abs(t.velocity)<a.freeMode.minimumVelocity&&(t.velocity=0),(O>150||L()-b.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=a.freeMode.momentumVelocityRatio,p.velocities.length=0;let r=1e3*a.freeMode.momentumRatio;const A=t.velocity*r;let n=t.translate+A;h&&(n=-n);let S=!1,I;const P=Math.abs(t.velocity)*20*a.freeMode.momentumBounceRatio;let F;if(n<t.maxTranslate())a.freeMode.momentumBounce?(n+t.maxTranslate()<-P&&(n=t.maxTranslate()-P),I=t.maxTranslate(),S=!0,p.allowMomentumBounce=!0):n=t.maxTranslate(),a.loop&&a.centeredSlides&&(F=!0);else if(n>t.minTranslate())a.freeMode.momentumBounce?(n-t.minTranslate()>P&&(n=t.minTranslate()+P),I=t.minTranslate(),S=!0,p.allowMomentumBounce=!0):n=t.minTranslate(),a.loop&&a.centeredSlides&&(F=!0);else if(a.freeMode.sticky){let b;for(let j=0;j<c.length;j+=1)if(c[j]>-n){b=j;break}Math.abs(c[b]-n)<Math.abs(c[b-1]-n)||t.swipeDirection==="next"?n=c[b]:n=c[b-1],n=-n}if(F&&u("transitionEnd",()=>{t.loopFix()}),t.velocity!==0){if(h?r=Math.abs((-n-t.translate)/t.velocity):r=Math.abs((n-t.translate)/t.velocity),a.freeMode.sticky){const b=Math.abs((h?-n:n)-t.translate),j=t.slidesSizesGrid[t.activeIndex];b<j?r=a.speed:b<2*j?r=a.speed*1.5:r=a.speed*2.5}}else if(a.freeMode.sticky){t.slideToClosest();return}a.freeMode.momentumBounce&&S?(t.updateProgress(I),t.setTransition(r),t.setTranslate(n),t.transitionStart(!0,t.swipeDirection),t.animating=!0,U(x,()=>{!t||t.destroyed||!p.allowMomentumBounce||(m("momentumBounce"),t.setTransition(a.speed),setTimeout(()=>{t.setTranslate(I),U(x,()=>{!t||t.destroyed||t.transitionEnd()})},0))})):t.velocity?(m("_freeModeNoMomentumRelease"),t.updateProgress(n),t.setTransition(r),t.setTranslate(n),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,U(x,()=>{!t||t.destroyed||t.transitionEnd()}))):t.updateProgress(n),t.updateActiveIndex(),t.updateSlidesClasses()}else if(a.freeMode.sticky){t.slideToClosest();return}else a.freeMode&&m("_freeModeNoMomentumRelease");(!a.freeMode.momentum||g>=a.longSwipesMs)&&(m("_freeModeStaticRelease"),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}Object.assign(t,{freeMode:{onTouchStart:d,onTouchMove:y,onTouchEnd:f}})}const xe="/assets/41-BrAeIE5A.png",D=({to:s,children:t,icon:o,bgColor:m,hoverColor:u})=>e.jsxs(w,{to:s,className:`flex items-center justify-center px-6 py-3 text-sm md:text-base text-white ${m} ${u} transition-transform transform hover:scale-105 duration-200 rounded-lg shadow-lg`,"aria-label":t,children:[o&&e.jsx(o,{className:"mr-2 h-5 w-5"}),t]});function he(){const{t:s}=v();return e.jsxs("section",{id:`${s("Accueil")}`,className:"py-20 md:py-20 lg:py-44 flex items-center justify-center bg-default-100 dark:bg-default-50 relative bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url(${xe})`},children:[e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("span",{className:"inline-block px-3 py-2 text-xs md:text-sm border border-default-200 text-default-950 rounded-full animate-fade-in",children:s("Accueil_content.title")}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-[#24377A] animate-fade-in-up",children:s("Accueil_content.subTitle")})," ",e.jsx("br",{}),e.jsx("p",{className:"text-base md:text-lg text-default-600 animate-fade-in-up",children:s("Accueil_content.description")})," ",e.jsx("br",{}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsx(D,{to:"/registration?type=demandeur",type:"demandeur",icon:R,bgColor:"bg-primary",hoverColor:"hover:bg-primary-dark",children:s("Accueil_content.buttonText1")}),e.jsx(D,{to:"/registration?type=institut",type:"institut",icon:W,bgColor:"bg-red-600",hoverColor:"hover:bg-red-700",children:s("Accueil_content.buttonText2")})]})]})})}),e.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        section {
          font-family: 'Roboto', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.7s ease-out forwards; animation-delay: 0.2s; }

        /* Responsive Styles */
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem; /* reduced size on mobile */
          }
        }
      `})]})}const pe="/assets/1-jg6ak9OC.png",ge="/assets/2-Cwoqmxj3.png",fe="/assets/3-azZlzWdS.png",be="/assets/4-CirBbC_M.png",ye="/assets/5-CPOT8r6N.png",je="/assets/6-BqUhSAHC.png",ve=[pe,ge,fe,be,ye,je],we=()=>e.jsx("section",{className:"py-10 lg:py-20",children:e.jsx("div",{className:"container",children:e.jsx(Y,{modules:[me,ue],slidesPerView:1,spaceBetween:30,centeredSlides:!0,loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},breakpoints:{400:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:50}},id:"testimonial_directory",children:ve.map((s,t)=>e.jsx(H,{children:e.jsx("img",{src:s})},t))})})});function k(s){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(s)}const Ne=()=>{const{t:s}=v();return C.useState(0),C.useState(0),C.useEffect(()=>{},[]),e.jsx("section",{id:`${s("Tarification")}`,className:"py-20 md:py-20 lg:py-44 bg-gray-50 dark:bg-gray-900",children:e.jsxs("div",{className:"container mx-auto ",children:[e.jsxs("div",{className:"max-w-2xl mx-auto text-center mb-12",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:s("PricingContent.title")}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:s("PricingContent.subTitle")})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform hover:-translate-y-[5px] hover:shadow-xl duration-300 relative overflow-hidden",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white flex items-center mb-4",children:[e.jsx(k,{className:"text-[#012C4E] mr-2"}),s("PricingContent.Student.title")]}),e.jsxs("p",{className:"text-xl text-[#012C4E] font-bold mt-4",children:["$ ",49," ",e.jsx("span",{className:"text-lg font-normal",children:"per request"})]}),e.jsx("p",{className:"text-base text-gray-600 dark:text-gray-300 mt-4",children:s("PricingContent.Student.content")}),e.jsxs("div",{className:"flex justify-between items-center mt-6",children:[e.jsxs(w,{to:"/signup",className:"bg-[#012C4E] hover:bg-[#011A34] text-white font-medium inline-flex items-center px-4 py-2 rounded transition duration-200",children:["Create Student Account ",e.jsx(N,{className:"ml-1"})]}),e.jsx("span",{className:"text-lg text-gray-900 dark:text-gray-300",children:"Per request"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform hover:-translate-y-[5px] hover:shadow-xl duration-300 relative overflow-hidden",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white flex items-center mb-4",children:[e.jsx(k,{className:"text-[#012C4E] mr-2"}),s("PricingContent.Enterprise.title")]}),e.jsxs("p",{className:"text-xl text-[#012C4E] font-bold mt-4",children:["$99 ",e.jsx("span",{className:"text-lg font-normal",children:"per month"})]}),e.jsx("p",{className:"text-base text-gray-600 dark:text-gray-300 mt-4",children:s("PricingContent.Enterprise.content")}),e.jsxs("div",{className:"flex justify-between items-center mt-6",children:[e.jsxs(w,{to:"/enterprise",className:"bg-[#012C4E] hover:bg-[#011A34] text-white font-medium inline-flex items-center px-4 py-2 rounded transition duration-200",children:["Learn More ",e.jsx(N,{className:"ml-1"})]}),e.jsx("span",{className:"text-lg text-gray-900 dark:text-gray-300",children:"Unlimited users"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform hover:-translate-y-[5px] hover:shadow-xl duration-300 relative overflow-hidden lg:col-span-2",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white flex items-center mb-4",children:[e.jsx(k,{className:"text-[#012C4E] mr-2"}),s("PricingContent.Universities.title")]}),e.jsx("p",{className:"text-xl text-[#012C4E] font-bold mt-4",children:s("PricingContent.Universities.contact")}),e.jsx("p",{className:"text-base text-gray-600 dark:text-gray-300 mt-4",children:s("PricingContent.Universities.content")}),e.jsxs("p",{className:"text-sm text-red-600 mt-2 italic",children:[" ",s("PricingContent.Universities.Note")," "]}),e.jsxs("div",{className:"flex justify-between items-center mt-6",children:[e.jsxs(w,{to:"mailto:support.authenticpage.com",className:"bg-[#012C4E] hover:bg-[#011A34] text-white font-medium inline-flex items-center px-4 py-2 rounded transition duration-200",children:["Contact Sales ",e.jsx(N,{className:"ml-1"})]}),e.jsx("span",{className:"text-lg text-gray-900 dark:text-gray-300",children:"All users"})]})]})]})]})})},Ce="/assets/services-CHeQL_DP.jpg",ke=[{title:"1. Authentication and Verification Tool:",description:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Advanced Fraud verification System"}),": AuthenticPage does not really rely on an algorithm to verify a document. Our tangible fraud detection system utilizes advanced technologies such as micro-clouding to prove the provenance of documents through an authentication document number (ADN), previously stored in a micro-cloud and accessible via a unique access number, ensuring the provenance at the highest level of document security and privacy."]}),icon:Q,moreInfo:e.jsxs(e.Fragment,{children:["AuthenticPage provides a comprehensive and future-focused solution to the problem of document fraud, offering government institutions, embassies, schools, financial institutions, businesses, and individuals the assurance that the documents they receive are genuine and valid.",e.jsx("br",{}),e.jsx("strong",{children:"Secure Cloud Storage Integration"}),": We offer secure cloud storage integration, enabling users to store their important documents in a centralized location. This not only ensures easy access and backup but also enhances security and redundancy.",e.jsx("br",{}),e.jsx("strong",{children:"Easy access"}),": Our user-friendly interface allows for quick and convenient document verification, making the process seamless and hassle-free. With our cutting-edge technology and commitment to customer satisfaction, we are confident that AuthenticPage is the ideal choice for all document verification needs.",e.jsx("br",{}),e.jsx("strong",{children:"Real-Time Authentication Updates"}),": Our platform provides real-time authentication updates, allowing users to receive instant notifications regarding the status and verification (or application) of their documents. This eliminates the need for manual follow-ups and provides peace of mind."]})},{title:"2. Mass Authentication Tool:",description:e.jsx(e.Fragment,{children:"This tool is primarily for schools to help them authenticate thousands of diploma, certificates, and exam records in one click by generating Authentication Document Numbers (known as AND) for each of them. The Authentication Document Number generation refers to the process of creating unique identification numbers for important documents to ensure their authenticity and prevent fraud. These document numbers are typically generated using specific algorithms or formats that make them difficult to replicate or tamper with."}),icon:X,moreInfo:e.jsxs(e.Fragment,{children:["The authentication document number serves as a unique identifier that can be used to verify the validity and origin of the document through AuthenticPage.com. It can help establish the document's authenticity and integrity, especially when combined with other security measures such as encryption, digital signatures, or watermarking.",e.jsx("br",{}),"By generating authentication document numbers, universities, businesses, and individuals can have a reliable way to track and verify the authenticity of important documents, such as contracts, financial records, government-issued IDs, diplomas, or any academic certificates. This helps to reduce the risk of fraud and ensures that documents can be trusted in various legal, financial, or administrative processes."]})},{title:"3. Application Tool (feature): Get it from the source",description:e.jsx(e.Fragment,{children:"Get your applicant document from the issuer in one click. See the progression on the checklist board and get notified when an application is ready for review."}),icon:Z,moreInfo:e.jsx(e.Fragment,{children:"Authentic Application is a document-forwarding tool that helps schools, banks, embassies, or any institutions or companies that require documents from applicants and care that they are not fake, to get them from the source (The issuer), not from the applicants."})}],Te=()=>{const[s,t]=C.useState(null),{t:o}=v(),m=u=>{t(u===s?null:u)};return e.jsx("section",{id:`${o("Services")}`,className:"py-20 md:py-20 lg:py-44 bg-cover bg-center",style:{backgroundImage:`url(${Ce})`},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"max-w-2xl mx-auto text-center mb-16",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A] animate-fade-in-up",children:o("ServicesContent.title")}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"text-lg text-default-600",children:o("ServicesContent.subTitle")})]}),e.jsx("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12",children:ke.map((u,d)=>{const y=u.icon,f=s===d;return e.jsxs("div",{className:"relative group hover:scale-105 transition-transform duration-300 h-auto overflow-visible",children:[e.jsxs("div",{className:"relative border border-default-200 rounded-lg p-8 bg-white text-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500 min-h-[450px]",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx(y,{className:"h-14 w-14 text-[#24377A]"})}),e.jsx("h3",{className:"text-2xl font-semibold text-[#24377A] mb-4",children:o(`ServicesContent.contenu.${d+1}.title`)}),e.jsx("p",{className:"text-justify text-base text-default-600 leading-relaxed mb-4",children:o(`ServicesContent.contenu.${d+1}.content`)}),f&&e.jsx("p",{className:"text-justify text-base text-default-600 leading-relaxed",children:o("ServicesContent.contenu.moreInfo")}),e.jsx("button",{onClick:()=>m(d),className:"mt-4 inline-block px-4 py-2 text-sm font-semibold text-white bg-[#24377A] rounded hover:bg-[#1d2f69] transition-colors",children:o("ServicesContent.contenu.moreInfo")})]}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#012C4E] to-[#012C4E]/80 opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 rounded-lg"})]},d)})})]})})},Ae="/assets/img-12-aS48TXxN.png",Se="/assets/img-14-DzDVYudg.png",Ie=[{title:"How can I authenticate my diploma?",description:"To authenticate your diploma, create an account on our platform and submit an authentication request. A fee of $50 will be charged for each request."},{title:"Which institutions can use AuthenticPage?",description:"AuthenticPage can be used by a variety of institutions, including universities, academic schools, embassies, financial institutions, and businesses. Any organization or entity that needs to verify academic or official documents can benefit from using AuthenticPage."},{title:"What is the subscription cost for institutions?",description:"Institutions can subscribe to AuthenticPage for $100 per month, providing them with unlimited access to document verification services. This subscription allows institutions to submit unlimited authentication requests for various types of documents."},{title:"Are the data secure?",description:"Yes, AuthenticPage employs advanced security measures to protect sensitive data. We ensure the confidentiality of all user information through encryption, secure cloud storage, and real-time updates. Our platform adheres to high standards of data protection to prevent unauthorized access and ensure privacy."},{title:"What should I do if I have issues with my authentication request?",description:"If you encounter any issues with your authentication request, please contact our customer support team via the contact page on our website. Our support team is ready to assist you and resolve any problems or questions you may have regarding the authentication process."}],Pe=()=>{const[s,t]=C.useState(0),o=u=>{t(s===u?null:u)},{t:m}=v();return e.jsx("section",{id:`${m("FAQ")}`,className:"py-16 lg:py-24 bg-gray-50 dark:bg-gray-900",children:e.jsxs("div",{className:"container mx-auto px-6 lg:px-12",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("span",{className:"inline-block bg-primary-100 text-primary-600 py-1 px-4 rounded-full text-xs font-semibold uppercase tracking-wider",children:m("FAQContent.title")}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:m("FAQContent.description")}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-start",children:[e.jsx("div",{children:e.jsx("div",{className:"space-y-6",children:Ie.map((u,d)=>e.jsxs("div",{className:B("border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm",{"shadow-lg":d===0}),children:[e.jsxs("button",{className:"w-full text-left px-6 py-5 flex items-center justify-between text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300",onClick:()=>o(d),"aria-controls":`faq-accordion-${d}`,children:[u.title,e.jsx(J,{className:B("h-5 w-5 transition-transform duration-300",{"rotate-180":s===d})})]}),e.jsx("div",{id:`faq-accordion-${d}`,className:B("px-6 py-4 text-gray-600 dark:text-gray-300 text-sm",{hidden:s!==d}),children:u.description})]},d))})}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"relative rounded-lg overflow-hidden shadow-lg",children:e.jsx("img",{src:Se,alt:"Main Illustration Authentic page",className:"w-full rounded-lg"})}),e.jsx("div",{className:"absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-3/4 sm:w-1/2 lg:w-2/3 xl:w-1/2",children:e.jsx("img",{src:Ae,alt:"Secondary Illustration Authentic page",className:"rounded-lg shadow-lg"})})]})]})]})})},Me="/assets/3-hbgrr-uT.png",Ee="/assets/5-BrZb5l51.png",Fe=()=>{K();const{t:s}=v();return e.jsxs(e.Fragment,{children:[e.jsx("section",{id:`${s("Fonctionnalités")}`,className:"py-10 lg:py-20 bg-gray-100",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:Ee,alt:"Secure authentication with AuthenticPage",className:"rounded-lg shadow-lg animate-fadeIn"})}),e.jsxs("div",{className:"text-justify",children:[e.jsx("span",{className:"text-sm uppercase text-primary font-semibold tracking-widest",children:s("Fonctionnality.premier.subTitle")}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:s("Fonctionnality.premier.title")}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"text-base text-default-600 mb-5 leading-relaxed",children:s("Fonctionnality.premier.description1")}),e.jsx("p",{className:"text-base text-default-600 mb-5 leading-relaxed",children:s("Fonctionnality.premier.description2")}),e.jsxs(w,{to:"/authentication",className:"inline-flex gap-2 text-xl items-center relative text-primary group font-medium",children:[e.jsx("span",{className:"absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"}),s("Fonctionnality.premier.learn"),e.jsx(N,{className:"h-5 w-5"})]})]})]})})}),e.jsx("section",{className:"py-10 lg:py-20 bg-white",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"text-justify",children:[e.jsx("span",{className:"text-sm uppercase text-primary font-semibold tracking-widest",children:s("Fonctionnality.deuxieme.subTitle")}),e.jsx("br",{}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:s("Fonctionnality.deuxieme.title")}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"text-base text-default-600 mb-5 leading-relaxed",children:s("Fonctionnality.deuxieme.description1")}),e.jsx("p",{className:"text-base text-default-600 mb-5 leading-relaxed",children:s("Fonctionnality.deuxieme.description2")}),e.jsxs(w,{to:"/contact",className:"inline-flex gap-2 text-xl items-center relative text-primary group font-medium",children:[e.jsx("span",{className:"absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"}),s("Fonctionnality.deuxieme.learn"),e.jsx(N,{className:"h-5 w-5"})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:Me,alt:"Fast and secure authentication process",className:"rounded-lg shadow-lg animate-fadeIn h-96"})})]})})})]})},Le=()=>{const{t:s}=v(),t=ee({email:M().email("Please enter a valid email").required("Please enter your email"),name:M().required("Please enter your name"),subject:M().required("Please enter the subject of your message"),object:M().required("Please enter your needs")}),{control:o,handleSubmit:m,reset:u}=te({resolver:se(t)}),d=async l=>{console.log(l),f(!0),(await le(l)).ok?(q.success("Message sent successfully!"),f(!1),u()):(f(!1),q.error("An error occurred!"))},[y,f]=C.useState(!1);return e.jsx("section",{id:"Contact",className:"py-20 md:py-20 lg:py-44 bg-default-100 dark:bg-default-50 bg-no-repeat bg-cover bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"max-w-2xl mx-auto text-center mb-12",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:s("ContactContent.title")}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:s("ContactContent.description")})]}),e.jsx("div",{className:"flex flex-wrap justify-around gap-8 mb-12",children:[{icon:ae,title:"Call us",details:"+1 (929) 637-0971"},{icon:ie,title:"Email us",details:"support@authenticpage.com"},{icon:ne,title:"Follow us",details:"Facebook.com/AuthenticPage"},{icon:re,title:"Discover our work",details:"authenticpage.com"}].map((l,i)=>e.jsxs("div",{className:"flex flex-col items-center p-6 bg-white dark:bg-default-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",children:[e.jsx("div",{className:"h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center mb-4",children:e.jsx(l.icon,{className:"h-10 w-10 text-[#24377A]"})}),e.jsx("h4",{className:"text-lg font-semibold text-gray-900 dark:text-gray-200",children:l.title}),e.jsx("p",{className:"text-base text-gray-600 dark:text-gray-400 mt-2",children:l.details})]},i))}),e.jsxs("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-12 items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white",children:e.jsx("span",{className:"text-[#24377A]",children:s("ContactContent.subTitle2")})}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-6",children:s("ContactContent.subTitle3")}),e.jsxs(w,{to:"/services",className:"inline-flex items-center justify-center mt-6 px-6 py-3 bg-blueLogo text-white rounded-lg hover:bg-rougeLogo transition-colors",children:[s("ContactContent.showMore"),e.jsx(N,{className:"h-6 w-6 ml-2 text-[#24377A]"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:s("ContactContent.subTitle4")}),e.jsx("p",{className:"text-base text-gray-600 dark:text-gray-300 mt-4",children:s("ContactContent.subTitle5")}),e.jsxs("form",{onSubmit:m(d),className:"space-y-6 mt-8",children:[e.jsx(E,{name:"name",label:s("ContactContent.name"),labelClassName:"text-gray-900 dark:text-white",className:"h-12 rounded-md py-4 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",placeholder:s("ContactContent.name"),control:o,fullWidth:!0}),e.jsx(E,{name:"email",label:s("ContactContent.email"),type:"email",labelClassName:"text-gray-900 dark:text-white",className:"h-12 rounded-md py-4 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",placeholder:s("ContactContent.email"),control:o,fullWidth:!0}),e.jsx(E,{name:"subject",label:s("ContactContent.subject"),labelClassName:"text-gray-900 dark:text-white",className:"h-12 rounded-md py-4 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",placeholder:s("ContactContent.subject"),control:o,fullWidth:!0}),e.jsx(E,{name:"object",label:s("ContactContent.needs"),labelClassName:"text-gray-900 dark:text-white",className:"h-24 rounded-md py-4 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",placeholder:s("ContactContent.needs"),control:o,fullWidth:!0,multiline:!0}),e.jsxs("button",{type:"submit",disabled:y,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blueLogo focus:outline-none ${y?"cursor-not-allowed":"cursor-pointer hover:bg-rougeLogo"} `,children:[s(y?"ContactContent.Submitting":"ContactContent.send"),y&&e.jsx(oe,{className:"animate-spin text-[#24377A]"})]})]})]})]})]})})},Ue="/assets/about-us1-C2r8xhWp.jpg",Be=()=>{const{t:s}=v();return e.jsxs("section",{id:`${s("A propos")}`,className:"py-20 bg-default-100 dark:bg-default-50",children:[e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A] animate-fade-in-up",children:s("aboutUs.title")}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded animate-underline"}),e.jsxs("p",{className:"text-base text-default-600 mt-4 leading-relaxed text-justify",children:[s("aboutUs.premierTxt"),e.jsx("br",{}),e.jsx("br",{}),s("aboutUs.secondTxt")]})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("h3",{className:"text-2xl font-semibold text-default-950 mb-4",children:s("aboutUs.Our_Mission.title")}),e.jsx("p",{className:"text-base text-default-600 leading-relaxed text-justify",children:s("aboutUs.Our_Mission.content")})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("h3",{className:"text-2xl font-semibold text-default-950 mb-4",children:s("aboutUs.Our_Vision.title")}),e.jsx("p",{className:"text-base text-default-600 leading-relaxed text-justify",children:s("aboutUs.Our_Vision.content")})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:Ue,alt:"Illustration about us",className:"rounded-lg shadow-lg"})})]}),e.jsxs("div",{className:"grid lg:grid-cols-3 gap-8 mt-16",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center",children:[e.jsx(k,{className:"text-[#24377A] text-3xl mb-4 mx-auto"}),e.jsx("h4",{className:"text-xl font-semibold text-default-950 mb-2",children:s("aboutUs.Integrity.title")}),e.jsx("p",{className:"text-base text-default-600 text-justify",children:s("aboutUs.Integrity.content")})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center",children:[e.jsx(k,{className:"text-[#24377A] text-3xl mb-4 mx-auto"}),e.jsx("h4",{className:"text-xl font-semibold text-default-950 mb-2",children:s("aboutUs.Innovation.title")}),e.jsx("p",{className:"text-base text-default-600 text-justify",children:s("aboutUs.Innovation.content")})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center",children:[e.jsx(k,{className:"text-[#24377A] text-3xl mb-4 mx-auto"}),e.jsx("h4",{className:"text-xl font-semibold text-default-950 mb-2",children:s("aboutUs.Accessibility.title")}),e.jsx("p",{className:"text-base text-default-600 text-justify",children:s("aboutUs.Accessibility.content")})]})]})]}),e.jsx("style",{jsx:!0,children:`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.7s ease-in-out;
                }

                .animate-underline {
                    animation: fadeInUp 1s ease-in-out 0.5s;
                    animation-fill-mode: both;
                }
            `})]})},De=()=>{const{t:s}=v();return e.jsxs(e.Fragment,{children:[e.jsx(ce,{title:"AuthenticPage"}),e.jsx(de,{menuItems:[s("nav.home"),s("nav.about"),s("nav.features"),s("nav.services"),s("nav.pricing"),s("nav.contact"),s("nav.faq")],position:"fixed",hasDownloadButton:!0}),e.jsx(he,{}),e.jsx(Be,{}),e.jsx(Fe,{}),e.jsx(we,{}),e.jsx(Te,{}),e.jsx(Ne,{}),e.jsx(Le,{}),e.jsx(Pe,{})]})};export{De as default};
