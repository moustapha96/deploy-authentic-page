import{L as o,a as c,b as m,c as u,d as x,e as d,f as h,g as r,j as e,h as f,i as p,k as b,l as g,m as j,u as w,n as N,o as v,p as y}from"./index-BtVRznd4.js";import{u as k,L as a,r as z}from"./vendor-CRMiJ7ZJ.js";import{g as L,b as S,d as F,s as E,a as A,c as C}from"./behance-BoTH3x90.js";import{a as D}from"./img-1-C937Ve8g.js";const M=[{name:"Dashboard",link:"/admin/dashboard",icon:o},{name:"Demandes",link:"/admin/demandes",icon:c},{name:"Demandeurs",link:"/admin/demandeurs",icon:m},{name:"Instituts",link:"/admin/instituts",icon:u},{name:"Documents",link:"/admin/documents",icon:x},{name:"Configuration",link:"/admin/configurations",icon:d},{name:"Contacts",link:"/admin/contacts",icon:d}],q=[{title:"Check this out!",description:" Please review this file.",variant:"primary",icon:h},{title:"Congratulations!",description:"Your OS System successfully updated.",variant:"teal-500",icon:r},{title:"An error occurred",description:" There was a problem in your code.",variant:"red-500",icon:r},{title:"An error occurred",description:" There was a problem in your code.",variant:"red-500",icon:r}],O=[{name:"GitHub",image:L},{name:"Bitbucket",image:S},{name:"Dropbox",image:F},{name:"Slack",image:E},{name:"Dribble",image:A},{name:"Behance",image:C}],R=()=>{const{pathname:t}=k();return e.jsx("nav",{className:"admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50",children:e.jsx("div",{className:"custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5",children:M.map((n,l)=>{const s=n.icon;return e.jsx("div",{className:"shrink-0 snap-center px-2",children:e.jsxs(a,{to:n.link,className:f("inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary",t===n.link&&"active"),children:[e.jsx(s,{className:"size-5"}),e.jsx("span",{children:n.name})]})},l)})})})},I=()=>{const[t,n]=z.useState(!1),l=()=>{const s=window.document;s.body.classList.add("fullscreen-enable"),!s.fullscreenElement&&!s.mozFullScreenElement&&!s.webkitFullscreenElement?(s.documentElement.requestFullscreen?s.documentElement.requestFullscreen():s.documentElement.mozRequestFullScreen?s.documentElement.mozRequestFullScreen():s.documentElement.webkitRequestFullscreen&&s.documentElement.webkitRequestFullscreen(),n(!0)):(s.cancelFullScreen?s.cancelFullScreen():s.mozCancelFullScreen?s.mozCancelFullScreen():s.webkitCancelFullScreen&&s.webkitCancelFullScreen(),n(!1));const i=()=>{!s.webkitIsFullScreen&&!s.mozFullScreen&&!s.msFullscreenElement&&s.body.classList.remove("fullscreen-enable")};s.addEventListener("fullscreenchange",i),s.addEventListener("webkitfullscreenchange",i),s.addEventListener("mozfullscreenchange",i)};return e.jsx("button",{onClick:l,type:"button",className:"inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:t?e.jsx(p,{className:"size-5"}):e.jsx(b,{className:"size-5"})})},P=()=>e.jsxs("div",{className:"hs-dropdown relative inline-flex [--placement:bottom-right]",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:[e.jsx(g,{className:"size-5"}),e.jsx("span",{className:"absolute -end-0 -top-0 size-4 rounded-full bg-blueLogo text-xs font-medium text-white",children:"2"})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[20rem] rounded-lg border border-default-200 bg-white opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("h6",{className:"text-base font-semibold text-default-900",children:"Messages"}),e.jsx(a,{to:"",className:"border-b border-dashed border-default-300 font-semibold text-default-800",children:e.jsx("small",{children:"Clear All"})})]}),e.jsx("div",{className:"h-52 overflow-y-auto border-y border-dashed border-default-200 py-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1",children:q.map((t,n)=>{const l=t.icon;return e.jsxs(a,{to:"",className:"mx-2 flex items-center rounded px-2 py-4 transition-all duration-200 hover:bg-default-100",children:[e.jsx("span",{className:`inline-flex size-9 items-center justify-center rounded-full bg-${t.variant}/20 text-${t.variant}`,children:e.jsx(l,{className:"size-5"})}),e.jsxs("span",{className:"px-3",children:[e.jsx("h6",{className:"text-sm font-semibold text-default-800",children:t.title}),e.jsx("p",{className:"text-xs text-default-600",children:t.description})]})]},n)})}),e.jsx(a,{to:"",className:"block px-4 py-3 text-center text-sm font-medium text-blueLogo",children:"View All"})]})]}),T=()=>e.jsxs("div",{className:"hs-dropdown relative inline-flex [--placement:bottom-right]",children:[e.jsx("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:e.jsx(j,{className:"size-5"})}),e.jsx("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:e.jsx("div",{className:"grid grid-cols-3 gap-3",children:O.map((t,n)=>e.jsxs(a,{className:"flex flex-col items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm text-default-800 hover:bg-default-100",to:"",children:[e.jsx("img",{src:t.image,className:"h-6",alt:"Github"}),e.jsx("span",{children:t.name})]},n))})})]}),B=()=>{const{isAuthenticated:t,role:n,session:l}=w();return e.jsxs("div",{className:"hs-dropdown relative inline-flex",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all",children:[e.jsx("img",{className:"inline-block size-9 rounded-full",src:D}),e.jsxs("div",{className:"hidden text-start lg:block",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:l.email}),e.jsx("p",{className:"mt-1 text-xs font-semibold text-zinc-400",children:"Admin"})]})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs(a,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/admin/profil",children:[e.jsx(N,{className:"size-4"}),"Mon Profil"]}),e.jsxs(a,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/admin/configurations",children:[e.jsx(d,{className:"size-4"}),"Configuration"]}),e.jsx("hr",{className:"-mx-2 my-2 border-default-200"}),e.jsxs(a,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10",to:"/auth/logout",children:[e.jsx(v,{className:"size-4"}),"Déconnexion"]})]})]})},V=()=>e.jsxs("header",{className:"sticky top-0 z-50",children:[e.jsx("div",{className:"z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4",children:e.jsxs("nav",{className:"container flex w-full items-center justify-between gap-6",children:[e.jsx("div",{children:e.jsx(a,{to:"/",className:"block",children:e.jsxs("span",{className:" text-bold text-2xl",children:[e.jsx("span",{className:"text-blueLogo",children:"Authentic"}),e.jsx("span",{className:"text-rougeLogo",children:"Page"})]})})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"relative hidden lg:block",children:[e.jsx(y,{className:"absolute start-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400"}),e.jsx("input",{type:"search",className:"h-10 w-full rounded-full border-0 bg-zinc-800 pe-4 ps-11 text-zinc-300 placeholder-zinc-400 focus:ring-0 sm:text-sm",placeholder:"Search..."})]}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(I,{})}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(P,{})}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(T,{})}),e.jsx("div",{className:"flex",children:e.jsx(B,{})})]})]})}),e.jsx(R,{})]});export{V as default};
