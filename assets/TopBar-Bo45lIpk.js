import{L as h,a as f,d as m,aV as c,aW as p,j as e,g as b,h as g,i as j,u,l as w,aX as N,m as v,aY as y,aN as k,N as z}from"./index-CTPm-PFH.js";import{d as L,L as l,r as o}from"./vendor-CST6t91B.js";import{a as F}from"./img-1-C937Ve8g.js";const S=[{name:"Dashboard",link:"/institut/dashboard",icon:h},{name:"Demandes",link:"/institut/demandes",icon:f},{name:"Documents",link:"/institut/documents",icon:m},{name:"Authentifier",link:"/institut/authentifier",icon:c,color:"text-red-500"},{name:"Faire une vérification",link:"/institut/verification",icon:c,color:"text-blue-500"},{name:"Abonnements",link:"/institut/abonnements",icon:p}],D=()=>{const{pathname:n}=L();return e.jsx("nav",{className:"admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50",children:e.jsx("div",{className:"custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5",children:S.map((s,a)=>{const t=s.icon;return e.jsx("div",{className:"shrink-0 snap-center px-2",children:e.jsxs(l,{to:s.link,className:b("inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary",n===s.link&&"active"),children:[e.jsx(t,{className:"size-5"}),e.jsx("span",{children:s.name})]})},a)})})})},E=()=>{const[n,s]=o.useState(!1),a=()=>{const t=window.document;t.body.classList.add("fullscreen-enable"),!t.fullscreenElement&&!t.mozFullScreenElement&&!t.webkitFullscreenElement?(t.documentElement.requestFullscreen?t.documentElement.requestFullscreen():t.documentElement.mozRequestFullScreen?t.documentElement.mozRequestFullScreen():t.documentElement.webkitRequestFullscreen&&t.documentElement.webkitRequestFullscreen(),s(!0)):(t.cancelFullScreen?t.cancelFullScreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitCancelFullScreen&&t.webkitCancelFullScreen(),s(!1));const i=()=>{!t.webkitIsFullScreen&&!t.mozFullScreen&&!t.msFullscreenElement&&t.body.classList.remove("fullscreen-enable")};t.addEventListener("fullscreenchange",i),t.addEventListener("webkitfullscreenchange",i),t.addEventListener("mozfullscreenchange",i)};return e.jsx("button",{onClick:a,type:"button",className:"inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:n?e.jsx(g,{className:"size-5"}):e.jsx(j,{className:"size-5"})})},A=()=>{const{session:n,institut:s,profileImage:a,logout:t}=u();return e.jsxs("div",{className:"hs-dropdown relative inline-flex",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all",children:[e.jsx("img",{className:"inline-block size-9 rounded-full",src:a?`data:image/jpeg;base64,${a}`:F}),e.jsxs("div",{className:"hidden text-start lg:block",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:s.name}),e.jsx("p",{className:"mt-1 text-xs font-semibold text-zinc-400",children:"Institut"})]})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs(l,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/institut/profil",children:[e.jsx(w,{className:"size-4"}),"Mon Profil"]}),e.jsxs(l,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/institut/abonnements",children:[e.jsx(N,{className:"size-4"}),"Abonnements"]}),e.jsx("hr",{className:"-mx-2 my-2 border-default-200"}),e.jsxs(l,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10",to:"/auth/sign-in",onClick:()=>{t()},children:[e.jsx(v,{className:"size-4"}),"Déconnexion"]})]})]})},C=()=>{const{institut:n}=u(),[s,a]=o.useState([]),[t,i]=o.useState(!0);return o.useEffect(()=>{(async()=>{if(!n||!n.id){console.error("ID de l'institut non disponible"),i(!1);return}try{const r=await k(n.id);console.log("Données reçues:",r),a(r.filter(x=>x.resultat==="Pending"))}catch(r){console.error("Erreur lors de la récupération des demandes:",r)}finally{i(!1)}})()},[n]),o.useEffect(()=>{console.log("Demandes mises à jour:",s)},[s]),e.jsxs("div",{className:"hs-dropdown relative inline-flex [--placement:bottom-right]",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:[e.jsx(y,{className:"size-5"}),e.jsx("span",{className:"absolute -end-0 -top-0 size-4 rounded-full bg-blueLogo text-xs font-medium text-white",children:s.length})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[20rem] rounded-lg border border-default-200 bg-white opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("h6",{className:"text-base font-semibold text-default-900",children:"Demandes"}),e.jsx(l,{to:"/institut/demandes",className:"border-b border-dashed border-default-300 font-semibold text-default-800",children:e.jsx("small",{children:"Voir tout"})})]}),e.jsx("div",{className:"h-52 overflow-y-auto border-y border-dashed border-default-200 py-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1",children:t?e.jsx("div",{className:"text-center py-4",children:"Chargement..."}):s.length>0?s.map((d,r)=>e.jsxs(l,{to:`/institut/authentifier/${d.id}/demande`,className:"mx-2 flex items-center rounded px-2 py-4 transition-all duration-200 hover:bg-default-100",children:[e.jsx("span",{className:"inline-flex size-9 items-center justify-center rounded-full bg-yellow/20 text-yellow-500",children:e.jsx(m,{className:"size-5"})}),e.jsxs("span",{className:"px-3",children:[e.jsx("h6",{className:"text-sm font-semibold text-default-800",children:d.intitule}),e.jsxs("p",{className:"text-xs text-default-600",children:[d.demandeur.name," -  ",new Date(d.dateDemande).toLocaleDateString()]})]})]},r)):e.jsx("div",{className:"text-center py-4",children:"Aucune demande trouvée"})})]})]})},R=()=>{const{settings:n}=z();return e.jsxs("header",{className:"sticky top-0 z-50",children:[e.jsx("div",{className:"z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4",children:e.jsxs("nav",{className:"container flex w-full items-center justify-between gap-6",children:[e.jsx("div",{children:e.jsx(l,{to:"/",className:"block",children:e.jsx("span",{className:" text-bold text-2xl",children:n.theme==="dark"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-white",children:"Authentic"}),e.jsx("span",{className:"text-rougeLogo",children:"Page"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-blueLogo",children:"Authentic"}),e.jsx("span",{className:"text-rougeLogo",children:"Page"})]})})})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"hidden sm:flex",children:e.jsx(E,{})}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(C,{})}),e.jsx("div",{className:"flex",children:e.jsx(A,{})})]})]})}),e.jsx(D,{})]})};export{R as default};
