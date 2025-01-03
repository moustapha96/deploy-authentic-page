import{L as r,a as c,aW as d,d as o,j as e,g as m,h as u,i as x,u as f,l as h,m as p}from"./index-BIhMQTai.js";import{d as b,L as i,r as j}from"./vendor-CST6t91B.js";import{a as g}from"./img-1-C937Ve8g.js";const w=[{name:"Dashboard",link:"/demandeur/dashboard",icon:r},{name:"Demandes",link:"/demandeur/demandes",icon:c},{name:"Transaction",link:"/demandeur/transactions",icon:d},{name:"Documents",link:"/demandeur/documents",icon:o}],N=()=>{const{pathname:t}=b();return e.jsx("nav",{className:"admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50",children:e.jsx("div",{className:"custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5",children:w.map((n,a)=>{const s=n.icon;return e.jsx("div",{className:"shrink-0 snap-center px-2",children:e.jsxs(i,{to:n.link,className:m("inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary",t===n.link&&"active"),children:[e.jsx(s,{className:"size-5"}),e.jsx("span",{children:n.name})]})},a)})})})},v=()=>{const[t,n]=j.useState(!1),a=()=>{const s=window.document;s.body.classList.add("fullscreen-enable"),!s.fullscreenElement&&!s.mozFullScreenElement&&!s.webkitFullscreenElement?(s.documentElement.requestFullscreen?s.documentElement.requestFullscreen():s.documentElement.mozRequestFullScreen?s.documentElement.mozRequestFullScreen():s.documentElement.webkitRequestFullscreen&&s.documentElement.webkitRequestFullscreen(),n(!0)):(s.cancelFullScreen?s.cancelFullScreen():s.mozCancelFullScreen?s.mozCancelFullScreen():s.webkitCancelFullScreen&&s.webkitCancelFullScreen(),n(!1));const l=()=>{!s.webkitIsFullScreen&&!s.mozFullScreen&&!s.msFullscreenElement&&s.body.classList.remove("fullscreen-enable")};s.addEventListener("fullscreenchange",l),s.addEventListener("webkitfullscreenchange",l),s.addEventListener("mozfullscreenchange",l)};return e.jsx("button",{onClick:a,type:"button",className:"inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:t?e.jsx(u,{className:"size-5"}):e.jsx(x,{className:"size-5"})})},k=()=>{const{isAuthenticated:t,role:n,session:a,demandeur:s,profileImage:l}=f();return e.jsxs("div",{className:"hs-dropdown relative inline-flex",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all",children:[e.jsx("img",{className:"inline-block size-9 rounded-full",src:l?`data:image/jpeg;base64,${l}`:g}),e.jsxs("div",{className:"hidden text-start lg:block",children:[e.jsxs("p",{className:"text-sm font-bold text-white",children:[" ",s.name," "]}),e.jsx("p",{className:"mt-1 text-xs font-semibold text-zinc-400",children:"Demandeur"})]})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs(i,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/demandeur/profil",children:[e.jsx(h,{className:"size-4"}),"Mon Profil"]}),e.jsx("hr",{className:"-mx-2 my-2 border-default-200"}),e.jsxs(i,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10",to:"/auth/sign-in",children:[e.jsx(p,{className:"size-4"}),"Déconnexion"]})]})]})},L=()=>e.jsxs("header",{className:"sticky top-0 z-50",children:[e.jsx("div",{className:"z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4",children:e.jsxs("nav",{className:"container flex w-full items-center justify-between gap-6",children:[e.jsx("div",{children:e.jsx(i,{to:"/",className:"block",children:e.jsxs("span",{className:" text-bold text-2xl",children:[e.jsx("span",{className:"text-blueLogo",children:"Authentic"}),e.jsx("span",{className:"text-rougeLogo",children:"Page"})]})})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"hidden sm:flex",children:e.jsx(v,{})}),e.jsx("div",{className:"flex",children:e.jsx(k,{})})]})]})}),e.jsx(N,{})]});export{L as default};
