import{L as d,a as c,b as o,c as m,d as u,e as r,f as x,u as f,j as e,g as h,h as p,i as g,k as j,l as b,m as N,n as w,o as v,p as k}from"./index-CakHYcA3.js";import{d as z,L as l,r as L}from"./vendor-Q6Ve1T67.js";import{L as y}from"./LanguageSelector-2LVC7S3D.js";const F=[{name:"dashboard",link:"/admin/dashboard",icon:d},{name:"demandes",link:"/admin/demandes",icon:c},{name:"demandeurs",link:"/admin/demandeurs",icon:o},{name:"instituts",link:"/admin/instituts",icon:m},{name:"documents",link:"/admin/documents",icon:u},{name:"configuration",link:"/admin/configurations",icon:r},{name:"contacts",link:"/admin/g-contact",icon:x}],S=()=>{const{t:a}=f(),{pathname:t}=z();return e.jsx("nav",{className:"admin-menu border-b border-default-200 bg-white text-sm font-medium shadow-sm shadow-default-100 dark:bg-default-50",children:e.jsx("div",{className:"custom-scroll container mx-auto flex w-full snap-x items-center overflow-x-auto py-2.5",children:F.map((n,s)=>{const i=n.icon;return e.jsx("div",{className:"shrink-0 snap-center px-2",children:e.jsxs(l,{to:n.link,className:h("inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-default-600 transition-all hover:bg-default-100 hover:text-default-800 [&.active]:bg-primary/10 [&.active]:text-primary",t===n.link&&"active"),children:[e.jsx(i,{className:"size-5"}),e.jsx("span",{children:a(`adminMenu.${n.name}`)})]})},s)})})})},E=()=>{const[a,t]=L.useState(!1),n=()=>{const s=window.document;s.body.classList.add("fullscreen-enable"),!s.fullscreenElement&&!s.mozFullScreenElement&&!s.webkitFullscreenElement?(s.documentElement.requestFullscreen?s.documentElement.requestFullscreen():s.documentElement.mozRequestFullScreen?s.documentElement.mozRequestFullScreen():s.documentElement.webkitRequestFullscreen&&s.documentElement.webkitRequestFullscreen(),t(!0)):(s.cancelFullScreen?s.cancelFullScreen():s.mozCancelFullScreen?s.mozCancelFullScreen():s.webkitCancelFullScreen&&s.webkitCancelFullScreen(),t(!1));const i=()=>{!s.webkitIsFullScreen&&!s.mozFullScreen&&!s.msFullscreenElement&&s.body.classList.remove("fullscreen-enable")};s.addEventListener("fullscreenchange",i),s.addEventListener("webkitfullscreenchange",i),s.addEventListener("mozfullscreenchange",i)};return e.jsx("button",{onClick:n,type:"button",className:"inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:a?e.jsx(p,{className:"size-5"}):e.jsx(g,{className:"size-5"})})},C=()=>{const{session:a,profileImage:t,logout:n}=j();return e.jsxs("div",{className:"hs-dropdown relative inline-flex",children:[e.jsxs("button",{id:"hs-dropdown-with-header",type:"button",className:"hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 align-middle text-xs font-medium transition-all",children:[e.jsx("img",{className:"inline-block size-9 rounded-full",src:t?`data:image/jpeg;base64,${t}`:b}),e.jsxs("div",{className:"hidden text-start lg:block",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:a&&a.email}),e.jsx("p",{className:"mt-1 text-xs font-semibold text-zinc-400",children:"Admin"})]})]}),e.jsxs("div",{className:"hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",children:[e.jsxs(l,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/admin/profil",children:[e.jsx(N,{className:"size-4"}),"Mon Profil"]}),e.jsxs(l,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-default-800 transition-all hover:bg-default-100",to:"/admin/configurations",children:[e.jsx(r,{className:"size-4"}),"Configuration"]}),e.jsx("hr",{className:"-mx-2 my-2 border-default-200"}),e.jsxs(l,{className:"flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10",to:"/auth/sign-in",onClick:()=>{n()},children:[e.jsx(w,{className:"size-4"}),"Déconnexion"]})]})]})},A=()=>e.jsxs("header",{className:"sticky top-0 z-50",children:[e.jsx("div",{className:"z-50 flex w-full flex-wrap border-b border-default-200 bg-zinc-950 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4",children:e.jsxs("nav",{className:"container flex w-full items-center justify-between gap-6",children:[e.jsx("div",{children:e.jsx(l,{to:"/",className:"block",children:e.jsxs("span",{className:" text-bold text-2xl",children:[e.jsx("span",{className:"text-blueLogo",children:"Authentic"}),e.jsx("span",{className:"text-rougeLogo",children:"Page"})]})})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"hidden sm:flex",children:e.jsx(E,{})}),e.jsx("div",{className:"flex",children:e.jsx(y,{})}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(l,{to:"/admin/profil",className:"hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:e.jsx(v,{className:"size-5"})})}),e.jsx("div",{className:"hidden sm:flex",children:e.jsx(l,{to:"/admin/mailer",className:"hs-dropdown-toggle inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10",children:e.jsx(k,{className:"size-5"})})}),e.jsx("div",{className:"flex",children:e.jsx(C,{})})]})]})}),e.jsx(S,{})]});export{A as default};
