import{L as d,a as c,d as m,aX as o,aY as u,g as x,h as r,j as e,i as h,k as f,l as p,m as b,n as g,u as j,o as w,aZ as N,p as v,P as y}from"./index-B_yS4Ol3.js";import{u as k,L as a,r as z}from"./vendor-CRMiJ7ZJ.js";import{g as L,b as F,d as S,s as E,a as A,c as C}from"./behance-BoTH3x90.js";import{a as D}from"./img-1-C937Ve8g.js";const M=[{name:"Dashboard",link:"/institut/dashboard",icon:d},{name:"Demandes",link:"/institut/demandes",icon:c},{name:"Documents",link:"/institut/documents",icon:m},{name:"Authentifier",link:"/institut/authentifier",icon:o},{name:"Faire une vérification",link:"/institut/verification",icon:o},{name:"Transaction",link:"/institut/transactions",icon:u}],q=[{title:"Check this out!",description:" Please review this file.",variant:"primary",icon:x},{title:"Congratulations!",description:"Your OS System successfully updated.",variant:"teal-500",icon:r},{title:"An error occurred",description:" There was a problem in your code.",variant:"red-500",icon:r},{title:"An error occurred",description:" There was a problem in your code.",variant:"red-500",icon:r}],O=[{name:"GitHub",image:L},{name:"Bitbucket",image:F},{name:"Dropbox",image:S},{name:"Slack",image:E},{name:"Dribble",image:A},{name:"Behance",image:C}],P=()=>{const{pathname:s}=k();return e.jsx("nav",{className:"admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50",children:e.jsx("div",{className:"custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5",children:M.map((n,i)=>{const t=n.icon;return e.jsx("div",{className:"shrink-0 snap-center px-2",children:e.jsxs(a,{to:n.link,className:h("inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary",s===n.link&&"active"),children:[e.jsx(t,{className:"size-5"}),e.jsx("span",{children:n.name})]})},i)})})})},R=()=>{const[s,n]=z.useState(!1),i=()=>{const t=window.document;t.body.classList.add("fullscreen-enable"),!t.fullscreenElement&&!t.mozFullScreenElement&&!t.webkitFullscreenElement?(t.documentElement.requestFullscreen?t.documentElement.requestFullscreen():t.documentElement.mozRequestFullScreen?t.documentElement.mozRequestFullScreen():t.documentElement.webkitRequestFullscreen&&t.documentElement.webkitRequestFullscreen(),n(!0)):(t.cancelFullScreen?t.cancelFullScreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitCancelFullScreen&&t.webkitCancelFullScreen(),n(!1));const l=()=>{!t.webkitIsFullScreen&&!t.mozFullScreen&&!t.msFullscreenElement&&t.body.classList.remove("fullscreen-enable")};t.addEventListener("fullscreenchange",l),t.addEventListener("webkitfullscreenchange",l),t.addEventListener("mozfullscreenchange",l)};return e.jsx("button",{onClick:i,type:"button",className:"inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:s?e.jsx(f,{className:"size-5"}):e.jsx(p,{className:"size-5"})})},I=()=>e.jsxs("div",{className:"hs-dropdown relative inline-flex [--placement:bottom-right]",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:[e.jsx(b,{className:"size-5"}),e.jsx("span",{className:"absolute -end-0 -top-0 size-4 rounded-full bg-blueLogo text-xs font-medium text-white",children:"2"})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[20rem] rounded-lg border border-default-200 bg-white opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("h6",{className:"text-base font-semibold text-default-900",children:"Messages"}),e.jsx(a,{to:"",className:"border-b border-dashed border-default-300 font-semibold text-default-800",children:e.jsx("small",{children:"Clear All"})})]}),e.jsx("div",{className:"h-52 overflow-y-auto border-y border-dashed border-default-200 py-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1",children:q.map((s,n)=>{const i=s.icon;return e.jsxs(a,{to:"",className:"mx-2 flex items-center rounded px-2 py-4 transition-all duration-200 hover:bg-default-100",children:[e.jsx("span",{className:`inline-flex size-9 items-center justify-center rounded-full bg-${s.variant}/20 text-${s.variant}`,children:e.jsx(i,{className:"size-5"})}),e.jsxs("span",{className:"px-3",children:[e.jsx("h6",{className:"text-sm font-semibold text-default-800",children:s.title}),e.jsx("p",{className:"text-xs text-default-600",children:s.description})]})]},n)})}),e.jsx(a,{to:"",className:"block px-4 py-3 text-center text-sm font-medium text-blueLogo",children:"View All"})]})]}),T=()=>e.jsxs("div",{className:"hs-dropdown relative inline-flex [--placement:bottom-right]",children:[e.jsx("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:e.jsx(g,{className:"size-5"})}),e.jsx("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:e.jsx("div",{className:"grid grid-cols-3 gap-3",children:O.map((s,n)=>e.jsxs(a,{className:"flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100",to:"",children:[e.jsx("img",{src:s.image,className:"h-6",alt:"Github"}),e.jsx("span",{children:s.name})]},n))})})]}),B=()=>{const{session:s,institut:n}=j();return console.log(s),console.log(n),e.jsxs("div",{className:"hs-dropdown relative inline-flex",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all",children:[e.jsx("img",{className:"inline-block size-9 rounded-full",src:D}),e.jsxs("div",{className:"hidden text-start lg:block",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:n.name}),e.jsx("p",{className:"mt-1 text-xs font-semibold text-zinc-400",children:"Institut"})]})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs(a,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/institut/profil",children:[e.jsx(w,{className:"size-4"}),"Mon Profil"]}),e.jsxs(a,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/institut/abonnements",children:[e.jsx(N,{className:"size-4"}),"Abonnements"]}),e.jsx("hr",{className:"-mx-2 my-2 border-default-200"}),e.jsxs(a,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10",to:"/auth/sign-in",children:[e.jsx(v,{className:"size-4"}),"Déconnexion"]})]})]})},U=()=>{const{settings:s}=y();return e.jsxs("header",{className:"sticky top-0 z-50",children:[e.jsx("div",{className:"z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4",children:e.jsxs("nav",{className:"container flex w-full items-center justify-between gap-6",children:[e.jsx("div",{children:e.jsx(a,{to:"/",className:"block",children:e.jsx("span",{className:" text-bold text-2xl",children:s.theme==="dark"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-white",children:"Authentic"}),e.jsx("span",{className:"text-rougeLogo",children:"Page"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-blueLogo",children:"Authentic"}),e.jsx("span",{className:"text-rougeLogo",children:"Page"})]})})})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"hidden sm:flex",children:e.jsx(R,{})}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(I,{})}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(T,{})}),e.jsx("div",{className:"flex",children:e.jsx(B,{})})]})]})}),e.jsx(P,{})]})};export{U as default};
