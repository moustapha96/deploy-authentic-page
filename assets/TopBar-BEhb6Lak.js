import{L as d,a as o,bP as c,d as m,f as u,g as r,j as e,h as x,i as h,k as f,l as p,m as b,u as g,n as j,p as w}from"./index-LViY93sK.js";import{u as N,L as a,r as v}from"./vendor-CRMiJ7ZJ.js";import{g as y,b as k,d as z,s as L,a as S,c as F}from"./behance-BoTH3x90.js";import{a as E}from"./img-1-C937Ve8g.js";const A=[{name:"Dashboard",link:"/demandeur/dashboard",icon:d},{name:"Demandes",link:"/demandeur/demandes",icon:o},{name:"Transaction",link:"/demandeur/transactions",icon:c},{name:"Documents",link:"/demandeur/documents",icon:m}],D=[{title:"Check this out!",description:" Please review this file.",variant:"primary",icon:u},{title:"Congratulations!",description:"Your OS System successfully updated.",variant:"teal-500",icon:r},{title:"An error occurred",description:" There was a problem in your code.",variant:"red-500",icon:r},{title:"An error occurred",description:" There was a problem in your code.",variant:"red-500",icon:r}],C=[{name:"GitHub",image:y},{name:"Bitbucket",image:k},{name:"Dropbox",image:z},{name:"Slack",image:L},{name:"Dribble",image:S},{name:"Behance",image:F}],M=()=>{const{pathname:t}=N();return e.jsx("nav",{className:"admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50",children:e.jsx("div",{className:"custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5",children:A.map((n,l)=>{const s=n.icon;return e.jsx("div",{className:"shrink-0 snap-center px-2",children:e.jsxs(a,{to:n.link,className:x("inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary",t===n.link&&"active"),children:[e.jsx(s,{className:"size-5"}),e.jsx("span",{children:n.name})]})},l)})})})},q=()=>{const[t,n]=v.useState(!1),l=()=>{const s=window.document;s.body.classList.add("fullscreen-enable"),!s.fullscreenElement&&!s.mozFullScreenElement&&!s.webkitFullscreenElement?(s.documentElement.requestFullscreen?s.documentElement.requestFullscreen():s.documentElement.mozRequestFullScreen?s.documentElement.mozRequestFullScreen():s.documentElement.webkitRequestFullscreen&&s.documentElement.webkitRequestFullscreen(),n(!0)):(s.cancelFullScreen?s.cancelFullScreen():s.mozCancelFullScreen?s.mozCancelFullScreen():s.webkitCancelFullScreen&&s.webkitCancelFullScreen(),n(!1));const i=()=>{!s.webkitIsFullScreen&&!s.mozFullScreen&&!s.msFullscreenElement&&s.body.classList.remove("fullscreen-enable")};s.addEventListener("fullscreenchange",i),s.addEventListener("webkitfullscreenchange",i),s.addEventListener("mozfullscreenchange",i)};return e.jsx("button",{onClick:l,type:"button",className:"inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:t?e.jsx(h,{className:"size-5"}):e.jsx(f,{className:"size-5"})})},O=()=>e.jsxs("div",{className:"hs-dropdown relative inline-flex [--placement:bottom-right]",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:[e.jsx(p,{className:"size-5"}),e.jsx("span",{className:"absolute -end-0 -top-0 size-4 rounded-full bg-blueLogo text-xs font-medium text-white",children:"2"})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[20rem] rounded-lg border border-default-200 bg-white opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("h6",{className:"text-base font-semibold text-default-900",children:"Messages"}),e.jsx(a,{to:"",className:"border-b border-dashed border-default-300 font-semibold text-default-800",children:e.jsx("small",{children:"Clear All"})})]}),e.jsx("div",{className:"h-52 overflow-y-auto border-y border-dashed border-default-200 py-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1",children:D.map((t,n)=>{const l=t.icon;return e.jsxs(a,{to:"",className:"mx-2 flex items-center rounded px-2 py-4 transition-all duration-200 hover:bg-default-100",children:[e.jsx("span",{className:`inline-flex size-9 items-center justify-center rounded-full bg-${t.variant}/20 text-${t.variant}`,children:e.jsx(l,{className:"size-5"})}),e.jsxs("span",{className:"px-3",children:[e.jsx("h6",{className:"text-sm font-semibold text-default-800",children:t.title}),e.jsx("p",{className:"text-xs text-default-600",children:t.description})]})]},n)})}),e.jsx(a,{to:"",className:"block px-4 py-3 text-center text-sm font-medium text-blueLogo",children:"View All"})]})]}),R=()=>e.jsxs("div",{className:"hs-dropdown relative inline-flex [--placement:bottom-right]",children:[e.jsx("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:e.jsx(b,{className:"size-5"})}),e.jsx("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:e.jsx("div",{className:"grid grid-cols-3 gap-3",children:C.map((t,n)=>e.jsxs(a,{className:"flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100",to:"",children:[e.jsx("img",{src:t.image,className:"h-6",alt:"Github"}),e.jsx("span",{children:t.name})]},n))})})]}),P=()=>{const{isAuthenticated:t,role:n,session:l,demandeur:s}=g();return console.log(l),e.jsxs("div",{className:"hs-dropdown relative inline-flex",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all",children:[e.jsx("img",{className:"inline-block size-9 rounded-full",src:E}),e.jsxs("div",{className:"hidden text-start lg:block",children:[e.jsxs("p",{className:"text-sm font-bold text-white",children:[" ",s.name," "]}),e.jsx("p",{className:"mt-1 text-xs font-semibold text-zinc-400",children:"Demandeur"})]})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs(a,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/demandeur/profil",children:[e.jsx(j,{className:"size-4"}),"Mon Profil"]}),e.jsx("hr",{className:"-mx-2 my-2 border-default-200"}),e.jsxs(a,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10",to:"/auth/logout",children:[e.jsx(w,{className:"size-4"}),"Déconnexion"]})]})]})},H=()=>e.jsxs("header",{className:"sticky top-0 z-50",children:[e.jsx("div",{className:"z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4",children:e.jsxs("nav",{className:"container flex w-full items-center justify-between gap-6",children:[e.jsx("div",{children:e.jsx(a,{to:"/",className:"block",children:e.jsxs("span",{className:" text-bold text-2xl",children:[e.jsx("span",{className:"text-blueLogo",children:"Authentic"}),e.jsx("span",{className:"text-rougeLogo",children:"Page"})]})})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"hidden sm:flex",children:e.jsx(q,{})}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(O,{})}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(R,{})}),e.jsx("div",{className:"flex",children:e.jsx(P,{})})]})]})}),e.jsx(M,{})]});export{H as default};
