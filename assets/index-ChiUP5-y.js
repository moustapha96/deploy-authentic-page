import{S as R,U,V as $,W as M,X as E,j as e,Y,Z as Q,_,$ as H,a0 as W,B as T,a1 as G,a2 as X,a3 as Z,i as L,a4 as J,P as K,w as ee,x as I,y as te,z as se,a5 as ae,m as ie,a6 as ne,a7 as re,T as P,a8 as oe,a9 as le,aa as B,ab as D,u as de,ac as ce,R as ue}from"./index-kfaY0N8s.js";import{L as y,r as V}from"./vendor-CRMiJ7ZJ.js";function me(i){let{swiper:t,extendParams:b,on:o}=i;b({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let f=!1,g=!1;t.thumbs={swiper:null};function v(){const a=t.thumbs.swiper;if(!a||a.destroyed)return;const s=a.clickedIndex,c=a.clickedSlide;if(c&&c.classList.contains(t.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let u;a.params.loop?u=parseInt(a.clickedSlide.getAttribute("data-swiper-slide-index"),10):u=s,t.params.loop?t.slideToLoop(u):t.slideTo(u)}function p(){const{thumbs:a}=t.params;if(f)return!1;f=!0;const s=t.constructor;if(a.swiper instanceof s)t.thumbs.swiper=a.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(U(a.swiper)){const c=Object.assign({},a.swiper);Object.assign(c,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(c),g=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",v),!0}function d(a){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const c=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let u=1;const l=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(u=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),s.slides.forEach(x=>x.classList.remove(l)),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let x=0;x<u;x+=1)$(s.slidesEl,`[data-swiper-slide-index="${t.realIndex+x}"]`).forEach(r=>{r.classList.add(l)});else for(let x=0;x<u;x+=1)s.slides[t.realIndex+x]&&s.slides[t.realIndex+x].classList.add(l);const m=t.params.thumbs.autoScrollOffset,N=m&&!s.params.loop;if(t.realIndex!==s.realIndex||N){const x=s.activeIndex;let r,w;if(s.params.loop){const n=s.slides.filter(k=>k.getAttribute("data-swiper-slide-index")===`${t.realIndex}`)[0];r=s.slides.indexOf(n),w=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,w=r>t.previousIndex?"next":"prev";N&&(r+=w==="next"?m:-1*m),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(r)<0&&(s.params.centeredSlides?r>x?r=r-Math.floor(c/2)+1:r=r+Math.floor(c/2)-1:r>x&&s.params.slidesPerGroup,s.slideTo(r,a?0:void 0))}}o("beforeInit",()=>{const{thumbs:a}=t.params;if(!(!a||!a.swiper))if(typeof a.swiper=="string"||a.swiper instanceof HTMLElement){const s=R(),c=()=>{const l=typeof a.swiper=="string"?s.querySelector(a.swiper):a.swiper;if(l&&l.swiper)a.swiper=l.swiper,p(),d(!0);else if(l){const m=N=>{a.swiper=N.detail[0],l.removeEventListener("init",m),p(),d(!0),a.swiper.update(),t.update()};l.addEventListener("init",m)}return l},u=()=>{if(t.destroyed)return;c()||requestAnimationFrame(u)};requestAnimationFrame(u)}else p(),d(!0)}),o("slideChange update resize observerUpdate",()=>{d()}),o("setTransition",(a,s)=>{const c=t.thumbs.swiper;!c||c.destroyed||c.setTransition(s)}),o("beforeDestroy",()=>{const a=t.thumbs.swiper;!a||a.destroyed||g&&a.destroy()}),Object.assign(t.thumbs,{init:p,update:d})}function xe(i){let{swiper:t,extendParams:b,emit:o,once:f}=i;b({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function g(){if(t.params.cssMode)return;const d=t.getTranslate();t.setTranslate(d),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function v(){if(t.params.cssMode)return;const{touchEventsData:d,touches:a}=t;d.velocities.length===0&&d.velocities.push({position:a[t.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:a[t.isHorizontal()?"currentX":"currentY"],time:M()})}function p(d){let{currentPos:a}=d;if(t.params.cssMode)return;const{params:s,wrapperEl:c,rtlTranslate:u,snapGrid:l,touchEventsData:m}=t,x=M()-m.touchStartTime;if(a<-t.minTranslate()){t.slideTo(t.activeIndex);return}if(a>-t.maxTranslate()){t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1);return}if(s.freeMode.momentum){if(m.velocities.length>1){const h=m.velocities.pop(),j=m.velocities.pop(),O=h.position-j.position,z=h.time-j.time;t.velocity=O/z,t.velocity/=2,Math.abs(t.velocity)<s.freeMode.minimumVelocity&&(t.velocity=0),(z>150||M()-h.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeMode.momentumVelocityRatio,m.velocities.length=0;let r=1e3*s.freeMode.momentumRatio;const w=t.velocity*r;let n=t.translate+w;u&&(n=-n);let k=!1,S;const C=Math.abs(t.velocity)*20*s.freeMode.momentumBounceRatio;let q;if(n<t.maxTranslate())s.freeMode.momentumBounce?(n+t.maxTranslate()<-C&&(n=t.maxTranslate()-C),S=t.maxTranslate(),k=!0,m.allowMomentumBounce=!0):n=t.maxTranslate(),s.loop&&s.centeredSlides&&(q=!0);else if(n>t.minTranslate())s.freeMode.momentumBounce?(n-t.minTranslate()>C&&(n=t.minTranslate()+C),S=t.minTranslate(),k=!0,m.allowMomentumBounce=!0):n=t.minTranslate(),s.loop&&s.centeredSlides&&(q=!0);else if(s.freeMode.sticky){let h;for(let j=0;j<l.length;j+=1)if(l[j]>-n){h=j;break}Math.abs(l[h]-n)<Math.abs(l[h-1]-n)||t.swipeDirection==="next"?n=l[h]:n=l[h-1],n=-n}if(q&&f("transitionEnd",()=>{t.loopFix()}),t.velocity!==0){if(u?r=Math.abs((-n-t.translate)/t.velocity):r=Math.abs((n-t.translate)/t.velocity),s.freeMode.sticky){const h=Math.abs((u?-n:n)-t.translate),j=t.slidesSizesGrid[t.activeIndex];h<j?r=s.speed:h<2*j?r=s.speed*1.5:r=s.speed*2.5}}else if(s.freeMode.sticky){t.slideToClosest();return}s.freeMode.momentumBounce&&k?(t.updateProgress(S),t.setTransition(r),t.setTranslate(n),t.transitionStart(!0,t.swipeDirection),t.animating=!0,E(c,()=>{!t||t.destroyed||!m.allowMomentumBounce||(o("momentumBounce"),t.setTransition(s.speed),setTimeout(()=>{t.setTranslate(S),E(c,()=>{!t||t.destroyed||t.transitionEnd()})},0))})):t.velocity?(o("_freeModeNoMomentumRelease"),t.updateProgress(n),t.setTransition(r),t.setTranslate(n),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,E(c,()=>{!t||t.destroyed||t.transitionEnd()}))):t.updateProgress(n),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeMode.sticky){t.slideToClosest();return}else s.freeMode&&o("_freeModeNoMomentumRelease");(!s.freeMode.momentum||x>=s.longSwipesMs)&&(o("_freeModeStaticRelease"),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}Object.assign(t,{freeMode:{onTouchStart:g,onTouchMove:v,onTouchEnd:p}})}const pe="/assets/41-G5WtRRge.png",F=({to:i,children:t,icon:b,bgColor:o,hoverColor:f})=>e.jsxs(y,{to:i,className:`flex items-center justify-center px-6 py-3 text-sm md:text-base text-white ${o} ${f} transition-transform transform hover:scale-105 duration-200 rounded-lg shadow-lg`,"aria-label":t,children:[b&&e.jsx(b,{className:"mr-2 h-5 w-5"}),t]});function fe(){return e.jsxs("section",{id:"Accueil",className:"py-20 md:py-20 lg:py-44 flex items-center justify-center bg-default-100 dark:bg-default-50 relative bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url(${pe})`},children:[e.jsx("div",{className:"container px-4 mx-auto",children:e.jsx("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("span",{className:"inline-block px-3 py-2 text-xs md:text-sm border border-default-200 text-default-950 rounded-full animate-fade-in",children:"Offrez-vous une tranquillité d'esprit : Vérifiez vos diplômes en toute simplicité."}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-[#24377A] animate-fade-in-up",children:"Authentifiez vos documents académiques en toute confiance."})," ",e.jsx("br",{}),e.jsx("p",{className:"text-base md:text-lg text-default-600 animate-fade-in-up",children:"Simplifiez le processus de validation des diplômes pour les étudiants et les institutions."})," ",e.jsx("br",{}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsx(F,{to:"/inscription",type:"demandeur",icon:Y,bgColor:"bg-primary",hoverColor:"hover:bg-primary-dark",children:"Faire une demande d'authentification"}),e.jsx(F,{to:"/inscription",type:"institut",icon:Q,bgColor:"bg-red-600",hoverColor:"hover:bg-red-700",children:"Vérifier l'authenticité d'un document"})]})]})})}),e.jsx("style",{jsx:!0,children:`
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
            font-size: 2rem; /* taille réduite sur mobile */
          }
        }
      `})]})}const he="/assets/1-jg6ak9OC.png",ge="/assets/2-Cwoqmxj3.png",be="/assets/3-azZlzWdS.png",ve="/assets/4-CirBbC_M.png",je="/assets/5-CPOT8r6N.png",ye="/assets/6-BqUhSAHC.png",Ne=[he,ge,be,ve,je,ye],we=()=>e.jsx("section",{className:"py-10 lg:py-20",children:e.jsx("div",{className:"container",children:e.jsx(_,{modules:[me,xe],slidesPerView:1,spaceBetween:30,centeredSlides:!0,loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},breakpoints:{400:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:50}},id:"testimonial_directory",children:Ne.map((i,t)=>e.jsx(H,{children:e.jsx("img",{src:i})},t))})})});function A(i){return W({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(i)}const ke=()=>e.jsx("section",{id:"Tarification",className:"py-16 lg:py-24 bg-gray-50 dark:bg-gray-900",children:e.jsxs("div",{className:"container mx-auto px-4 lg:px-0",children:[e.jsxs("div",{className:"max-w-2xl mx-auto text-center mb-12",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:"Tarification"}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:"L’authentification est gratuite pour toutes les écoles."})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform hover:-translate-y-[5px] hover:shadow-xl duration-300 relative overflow-hidden",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white flex items-center mb-4",children:[e.jsx(A,{className:"text-[#012C4E] mr-2"}),"Abonnement pour Universités et Embassades"]}),e.jsxs("p",{className:"text-xl text-[#012C4E] font-bold mt-4",children:["$1000 ",e.jsx("span",{className:"text-lg font-normal",children:"par mois"})]}),e.jsx("p",{className:"text-base text-gray-600 dark:text-gray-300 mt-4",children:"Accès illimité aux vérifications de diplômes, attestations bancaires et autres, ainsi qu'une authentification illimitée de documents."}),e.jsx("p",{className:"text-sm text-red-600 mt-2 italic",children:"NB: l’authentification est gratuite pour toutes les écoles et universités. Seule la vérification est tarifée."}),e.jsxs("div",{className:"flex justify-between items-center mt-6",children:[e.jsxs(y,{to:"/inscription",className:"bg-[#012C4E] hover:bg-[#011A34] text-white font-medium inline-flex items-center px-4 py-2 rounded transition duration-200",children:["Créer un compte ",e.jsx(T,{className:"ml-1"})]}),e.jsx("span",{className:"text-lg text-gray-900 dark:text-gray-300",children:"Tous utilisateurs"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform hover:-translate-y-[5px] hover:shadow-xl duration-300 relative overflow-hidden",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white flex items-center mb-4",children:[e.jsx(A,{className:"text-[#012C4E] mr-2"}),"Plan Entreprise"]}),e.jsxs("p",{className:"text-xl text-[#012C4E] font-bold mt-4",children:["$100 ",e.jsx("span",{className:"text-lg font-normal",children:"par document"})]}),e.jsx("p",{className:"text-base text-gray-600 dark:text-gray-300 mt-4",children:"Cette option est pour les entreprises et organisations pour l’obtention de tout sorte de document : attestation de solde, attestation de travail, documents bancaires, et autres. Recevez ces documents directement venant de l’attestaire avec une sécurité optimale et une flexibilité inégalée."}),e.jsxs("div",{className:"flex justify-between items-center mt-6",children:[e.jsxs(y,{to:"/enterprise",className:"bg-[#012C4E] hover:bg-[#011A34] text-white font-medium inline-flex items-center px-4 py-2 rounded transition duration-200",children:["En savoir plus ",e.jsx(T,{className:"ml-1"})]}),e.jsx("span",{className:"text-lg text-gray-900 dark:text-gray-300",children:"Utilisateurs illimités"})]})]})]})]})}),Ae="/assets/services-CHeQL_DP.jpg",Te=[{title:"1. Outil d'authentification et de vérification",description:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Système avancé de vérification des fraudes"})," : AuthenticPage ne s'appuie pas vraiment sur un algorithme pour vérifier un document. Notre système tangible de détection de la fraude utilise des technologies avancées telles que le micro-clouding pour prouver la provenance des documents à travers un numéro de document d'authentification (ADN), préalablement stocké dans un micro-cloud et accessible via un numéro d'accès unique, garantissant la provenance au plus haut niveau de sécurité et de confidentialité des documents."]}),icon:G,moreInfo:e.jsxs(e.Fragment,{children:["AuthenticPage fournit une solution complète et orientée vers l'avenir au problème de la fraude documentaire, offrant aux institutions gouvernementales, aux ambassades, aux écoles, aux institutions financières, aux entreprises et aux particuliers l'assurance que les documents qu'ils reçoivent sont authentiques et valides.",e.jsx("strong",{children:" Intégration sécurisée du stockage en nuage"})," : Nous proposons une intégration sécurisée du stockage en nuage, ce qui permet aux utilisateurs de stocker leurs documents importants dans un endroit centralisé. Cela permet non seulement de faciliter l'accès et la sauvegarde, mais aussi de renforcer la sécurité et la redondance. Accès facile : Notre interface conviviale permet une vérification rapide et pratique des documents, rendant le processus transparent et sans tracas. Avec notre technologie de pointe et notre engagement à satisfaire nos clients, nous sommes convaincus qu'AuthenticPage est le choix idéal pour tous les besoins de vérification de documents.",e.jsx("strong",{children:" Mises à jour de l'authentification en temps réel"})," : Notre plateforme fournit des mises à jour d'authentification en temps réel, permettant aux utilisateurs de recevoir des notifications instantanées concernant le statut et la vérification (ou l'application) de leurs documents. Ceci élimine le besoin d'un suivi manuel et procure une tranquillité d'esprit."]})},{title:"2. Outil d'authentification de masse",description:"Cet outil est principalement destiné aux écoles afin de les aider à authentifier des milliers de diplômes, de certificats et de bulletins de note en un clic en générant des numéros de documents d'authentification (connus sous le nom de AND) pour chacun d'entre eux. La génération de numéros de documents d'authentification fait référence au processus de création de numéros d'identification uniques pour des documents importants afin de garantir leur authenticité et de prévenir la fraude.",icon:X,moreInfo:`Le numéro de document d'authentification est un identifiant unique qui peut être utilisé pour vérifier la validité et l'origine du document à travers AuthenticPage.com. Il peut aider à établir l'authenticité et l'intégrité du document, en particulier lorsqu'il est combiné avec d'autres mesures de sécurité telles que le cryptage, les signatures numériques, ou le filigrane.
    En générant des numéros de documents d'authentification, les universités, les entreprises et les particuliers disposent d'un moyen fiable de suivre et de vérifier l'authenticité de documents importants, tels que les contrats, les documents financiers, les pièces d'identité délivrées par le gouvernement, les diplômes ou tout autre certificat académique. Cela permet de réduire le risque de fraude et de garantir la fiabilité des documents dans le cadre de diverses procédures juridiques, financières ou administratives.`},{title:"3. Outil de demande (fonctionnalité)",description:"Recevoir le document de la source : Recevez les documents des candidats auprès des institutions émettrices en un seul clic. Suivez la progression sur le tableau de la liste de contrôle et recevez une notification lorsqu'une demande est prête à être examinée.",icon:Z,moreInfo:"AuthenticPage-Application est un outil de transmission de documents qui aide les écoles, les banques, les ambassades ou toutes les institutions ou entreprises qui ont besoin de documents de la part des candidats et qui veulent s'assurer qu'ils ne sont pas faux, à les obtenir directement de la source (l'émetteur), et non venant des candidats."}],Se=()=>{const[i,t]=V.useState(null),b=o=>{t(o===i?null:o)};return e.jsxs("section",{id:"Nos Services",className:"py-14 lg:py-24 bg-cover bg-center",style:{backgroundImage:`url(${Ae})`},children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"max-w-2xl mx-auto text-center mb-16",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A] animate-fade-in-up",children:"Nos Services"}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"text-lg text-default-600",children:"AuthenticPage est une solution logicielle documentaire composée de 3 outils :"})]}),e.jsx("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12",children:Te.map((o,f)=>{const g=o.icon,v=i===f;return e.jsxs("div",{className:"relative group hover:scale-105 transition-transform duration-300 h-auto overflow-visible",children:[e.jsxs("div",{className:"relative border border-default-200 rounded-lg p-8 bg-white text-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500 min-h-[450px]",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx(g,{className:"h-14 w-14 text-[#E41021]"})}),e.jsx("h3",{className:"text-2xl font-semibold text-[#24377A] mb-4",children:o.title}),e.jsx("p",{className:"text-justify text-base text-default-600 leading-relaxed mb-4",children:o.description}),v&&e.jsx("p",{className:"text-justify text-base text-default-600 leading-relaxed",children:o.moreInfo}),e.jsx("button",{onClick:()=>b(f),className:"mt-4 inline-block px-4 py-2 text-sm font-semibold text-white bg-[#24377A] rounded hover:bg-[#1d2f69] transition-colors",children:v?"Réduire":"En savoir plus"})]}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#012C4E] to-[#012C4E]/80 opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 rounded-lg"})]},f)})})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},Ce="/assets/img-12-COUTP3IP.png",Ie="/assets/img-14-m-1AvgXn.png",Pe=[{title:"Comment puis-je authentifier mon diplôme ?",description:"Pour authentifier votre diplôme, créez un compte sur notre plateforme et soumettez une demande d'authentification. Un frais de 50 $ sera appliqué pour chaque demande."},{title:"Quelles institutions peuvent utiliser AuthenticPage ?",description:"AuthenticPage est conçu pour être utilisé par des universités, écoles et autres institutions académiques qui souhaitent vérifier les diplômes et certificats de leurs étudiants."},{title:"Quel est le coût de l'abonnement pour les structures ?",description:"Les structures peuvent s'abonner à notre service pour 100 $ par mois, ce qui leur permet de soumettre un nombre illimité de demandes d'authentification."},{title:"Les données sont-elles sécurisées ?",description:"Oui, nous mettons en œuvre des mesures de sécurité avancées pour protéger les données sensibles de nos utilisateurs et garantir la confidentialité des informations."},{title:"Que faire si j'ai des problèmes avec ma demande d'authentification ?",description:"Si vous rencontrez des problèmes, veuillez contacter notre service client via la page de contact. Nous sommes là pour vous aider."}],qe=()=>e.jsx("section",{id:"FAQ",className:"py-16 lg:py-24 bg-gray-50 dark:bg-gray-900",children:e.jsxs("div",{className:"container mx-auto px-6 lg:px-12",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("span",{className:"inline-block bg-primary-100 text-primary-600 py-1 px-4 rounded-full text-xs font-semibold uppercase tracking-wider",children:"Notre FAQ"}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:"Questions Fréquemment Posées"}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-start",children:[e.jsx("div",{children:e.jsx("div",{className:"space-y-6",children:Pe.map((i,t)=>e.jsxs("div",{className:L("border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm",{"shadow-lg":t===0}),children:[e.jsxs("button",{className:"w-full text-left px-6 py-5 flex items-center justify-between text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300","aria-controls":`faq-accordion-${t}`,children:[i.title,e.jsx(J,{className:"h-5 w-5 transition-transform duration-300"})]}),e.jsx("div",{id:`faq-accordion-${t}`,className:L("px-6 py-4 text-gray-600 dark:text-gray-300 text-sm",{hidden:t!==0}),children:i.description})]},t))})}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"relative rounded-lg overflow-hidden shadow-lg",children:e.jsx("img",{src:Ie,alt:"Illustration principale",className:"w-full rounded-lg"})}),e.jsx("div",{className:"absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-3/4 sm:w-1/2 lg:w-2/3 xl:w-1/2",children:e.jsx("img",{src:Ce,alt:"Illustration secondaire",className:"rounded-lg shadow-lg"})})]})]})]})}),Me="/assets/3-hbgrr-uT.png",Ee="/assets/5-BrZb5l51.png",ze=()=>(K(),e.jsxs(e.Fragment,{children:[e.jsx("section",{id:"Fonctionnalités",className:"py-10 lg:py-20 bg-gray-100",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:Ee,alt:"Authentification sécurisée avec AuthenticPage",className:"rounded-lg shadow-lg animate-fadeIn"})}),e.jsxs("div",{className:"text-justify",children:[e.jsx("span",{className:"text-sm uppercase text-primary font-semibold tracking-widest",children:"Sécurité de Confiance"}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:"Une Authentification Fiable Dès le Départ"}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"text-base text-default-600 mb-5 leading-relaxed",children:"AuthenticPage est votre solution de confiance pour valider vos diplômes et documents importants. Notre technologie avancée de vérification des fraudes garantit que chaque document est authentique et sécurisé. Nous ne nous contentons pas d'utiliser des algorithmes ; nous utilisons un système tangible de détection de la fraude qui assure l'intégrité de chaque document en toute confidentialité."}),e.jsx("p",{className:"text-base text-default-600 mb-5 leading-relaxed",children:"Avec des fonctionnalités telles que la boîte aux lettres électronique avancée, le stockage sécurisé dans le cloud et les mises à jour d'authentification en temps réel, AuthenticPage offre une sécurité inégalée, simplifiant le processus de gestion et de vérification documentaire."}),e.jsxs(y,{to:"/authentification",className:"inline-flex gap-2 text-xl items-center relative text-primary group font-medium",children:[e.jsx("span",{className:"absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"}),"Découvrez Comment ça Fonctionne",e.jsx(T,{className:"h-5 w-5"})]})]})]})})}),e.jsx("section",{className:"py-10 lg:py-20 bg-white",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"text-justify",children:[e.jsx("span",{className:"text-sm uppercase text-primary font-semibold tracking-widest",children:"Processus Simplifié"}),e.jsx("br",{}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:"Migration Rapide et Efficace"}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"text-base text-default-600 mb-5 leading-relaxed",children:"AuthenticPage vous permet de migrer et authentifier vos documents avec une rapidité et une efficacité sans précédent. Notre plateforme est conçue pour réduire les temps d'arrêt et maximiser la productivité, en rendant le processus aussi fluide que possible."}),e.jsx("p",{className:"text-base text-default-600 mb-5 leading-relaxed",children:"Profitez d'une intégration complète avec des mises à jour en temps réel et une sécurité renforcée par notre système unique d'ADN de document. Nos solutions vous offrent une sérénité totale face aux risques de fraude documentaire et d'usurpation d'identité."}),e.jsxs(y,{to:"/contact",className:"inline-flex gap-2 text-xl items-center relative text-primary group font-medium",children:[e.jsx("span",{className:"absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"}),"Contactez-nous pour en Savoir Plus",e.jsx(T,{className:"h-5 w-5"})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:Me,alt:"Processus d'authentification rapide et sécurisé",className:"rounded-lg shadow-lg animate-fadeIn h-96"})})]})})})]})),Le=()=>{const i=ee({email:I().email("Veuillez entrer un email valide").required("Veuillez entrer votre email"),name:I().required("Veuillez entrer votre nom"),subject:I().required("Veuillez entrer le sujet de votre message"),object:I().required("Veuillez entrer vos besoins")}),{control:t,handleSubmit:b,reset:o}=te({resolver:se(i)}),f=async p=>{console.log(p),v(!0);const d=await le(p);console.log(d),d.ok?(B.success("Message envoyé avec succés!"),v(!1),o()):(v(!1),B.error("Une erreur s'est produite!"))},[g,v]=V.useState(!1);return e.jsx("section",{id:"Contact",className:"py-16 lg:py-24 bg-default-100 dark:bg-default-50 bg-no-repeat bg-cover bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]",children:e.jsxs("div",{className:"container mx-auto px-6 lg:px-12",children:[e.jsx("div",{className:"flex flex-wrap justify-around gap-8 mb-12",children:[{icon:ae,title:"Appelez-nous",details:"+0088 66956 66"},{icon:ie,title:"Envoyez-nous un email",details:"support@authenticpage.com"},{icon:ne,title:"Suivez-nous",details:"Facebook.com/AuthenticPage"},{icon:re,title:"Découvrez notre travail",details:"authenticpage.com"}].map((p,d)=>e.jsxs("div",{className:"flex flex-col items-center p-6 bg-white dark:bg-default-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",children:[e.jsx("div",{className:"h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center mb-4",children:e.jsx(p.icon,{className:"h-10 w-10 text-primary-600"})}),e.jsx("h4",{className:"text-lg font-semibold text-gray-900 dark:text-gray-200",children:p.title}),e.jsx("p",{className:"text-base text-gray-600 dark:text-gray-400 mt-2",children:p.details})]},d))}),e.jsxs("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-12 items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white",children:"Nous vous aidons à sécuriser un avantage concurrentiel"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-6",children:"Avec AuthenticPage, validez vos diplômes en toute simplicité et sécurité."}),e.jsxs(y,{to:"/services",className:"inline-flex items-center justify-center mt-6 px-6 py-3 bg-blueLogo text-white rounded-lg hover:bg-rougeLogo transition-colors",children:["En savoir plus",e.jsx(T,{className:"h-6 w-6 ml-2"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:"N'hésitez pas à nous contacter !"}),e.jsx("p",{className:"text-base text-gray-600 dark:text-gray-300 mt-4",children:"Nous sommes là pour répondre à toutes vos questions concernant nos services."}),e.jsxs("form",{onSubmit:b(f),className:"space-y-6 mt-8",children:[e.jsx(P,{name:"name",label:"Nom",labelClassName:"text-gray-900 dark:text-white",className:"h-12 rounded-md py-4 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",placeholder:"Votre nom",control:t,fullWidth:!0}),e.jsx(P,{name:"email",label:"Email",type:"email",labelClassName:"text-gray-900 dark:text-white",className:"h-12 rounded-md py-4 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",placeholder:"Votre email",control:t,fullWidth:!0}),e.jsx(P,{name:"subject",label:"Sujet",labelClassName:"text-gray-900 dark:text-white",className:"h-12 rounded-md py-4 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",placeholder:"Sujet de votre message",control:t,fullWidth:!0}),e.jsx(P,{name:"object",label:"Vos besoins",labelClassName:"text-gray-900 dark:text-white",className:"h-24 rounded-md py-4 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",placeholder:"Dites-nous ce dont vous avez besoin",control:t,fullWidth:!0,multiline:!0}),e.jsxs("button",{type:"submit",disabled:g,className:`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blueLogo focus:outline-none  ${g?"cursor-not-allowed":"cursor-pointer hover:bg-rougeLogo"}  `,children:[g?"Enregistrement...":"Envoyer",g&&e.jsx(oe,{className:"animate-spin"})]})]})]})]})]})})},Be="/assets/about-us1-x8HCpDzE.jpg",Fe=()=>{const{t:i,i18n:t}=D();return e.jsxs("section",{id:"A propos",className:"py-20 bg-default-100 dark:bg-default-50",children:[e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#24377A]",children:i("aboutUs.title")}),e.jsx("div",{className:"w-16 h-1 bg-[#24377A] mx-auto my-4 rounded"}),e.jsx("p",{className:"text-base text-default-600 mt-4 text-justify",children:i("aboutUs.content")})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-10 items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("h3",{className:"text-2xl font-semibold text-default-950 mb-4",children:i("mission.title")}),e.jsx("p",{className:"text-base text-default-600 text-justify",children:i("mission.content")})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("h3",{className:"text-2xl font-semibold text-default-950 mb-4",children:i("vision.title")}),e.jsx("p",{className:"text-base text-default-600 text-justify",children:i("vision.content")})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:Be,alt:"Illustration à propos de nous",className:"rounded-lg shadow-lg"})})]}),e.jsxs("div",{className:"grid lg:grid-cols-3 gap-8 mt-16",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center",children:[e.jsx(A,{className:"text-red-600 text-3xl mb-4 mx-auto"}),e.jsx("h4",{className:"text-xl font-semibold text-default-950 mb-2",children:"Intégrité"}),e.jsx("p",{className:"text-base text-default-600 text-justify",children:i("values.integrity")})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center",children:[e.jsx(A,{className:"text-red-600 text-3xl mb-4 mx-auto"}),e.jsx("h4",{className:"text-xl font-semibold text-default-950 mb-2",children:"Innovation"}),e.jsx("p",{className:"text-base text-default-600 text-justify",children:i("values.innovation")})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center",children:[e.jsx(A,{className:"text-red-600 text-3xl mb-4 mx-auto"}),e.jsx("h4",{className:"text-xl font-semibold text-default-950 mb-2",children:"Accessibilité"}),e.jsx("p",{className:"text-base text-default-600 text-justify",children:i("values.accessibility")})]})]})]}),e.jsx("style",{jsx:!0,children:`
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
            `})]})},Oe=()=>{de();const{t:i,i18n:t}=D();return e.jsxs(e.Fragment,{children:[e.jsx(ce,{title:"AuthenticPage"}),e.jsx(ue,{menuItems:[i("Accueil"),i("A propos"),"Fonctionnalités","Services","Tarification","Contact","FAQ"],position:"fixed",hasDownloadButton:!0}),e.jsx(fe,{}),e.jsx(Fe,{}),e.jsx(ze,{}),e.jsx(we,{}),e.jsx(Se,{}),e.jsx(ke,{}),e.jsx(Le,{}),e.jsx(qe,{})]})};export{Oe as default};
