import{j as e,i,A as v,bd as u,be as j,bf as w}from"./index-kUS121tA.js";import{t as f}from"./change-casing-BoyW-fpY.js";import{r as n,e as y,L as r}from"./vendor-CEFyliPi.js";const o="/assets/logo_256-C2s9d12l.png",z=({menuItems:l,position:p,hasDownloadButton:g})=>{const t=n.useRef(null),{hash:c,pathname:N}=y();n.useEffect(()=>{document.addEventListener("scroll",a=>{a.preventDefault(),x(),t.current&&(window.scrollY>=80?t.current.classList.add("nav-sticky"):t.current.classList.remove("nav-sticky"))});const s=setTimeout(()=>{if(c){const a=document.querySelector(c);a&&a.scrollIntoView({behavior:"instant"})}},0);return()=>{clearTimeout(s),window.removeEventListener("scroll",x)}},[]);const[d,b]=n.useState(l[0]),x=()=>{const s=window.scrollY;for(let a=l.length-1;a>=0;a--){const m=l[a],h=document.getElementById(m);if(h&&h.offsetTop<=s+100){b(m);return}}};return e.jsxs(e.Fragment,{children:[e.jsx("header",{ref:t,id:"navbar",className:i(p,"inset-x-0 top-0 z-[60] w-full  border-b border-transparent bg-white transition-all duration-300 dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/80"),children:e.jsx("div",{className:"flex h-full items-center py-4",children:e.jsx("div",{className:"container",children:e.jsxs("nav",{className:"flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap",children:[e.jsxs("div",{className:"flex w-full items-center justify-between lg:w-auto",children:[e.jsxs(r,{to:"/",children:[e.jsx("img",{src:o,alt:"logo",className:"flex h-20 dark:hidden"}),e.jsx("img",{src:v,alt:"logo",className:"hidden h-10 dark:flex"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[g&&e.jsx("div",{className:"inline-flex shrink gap-2 lg:hidden",children:e.jsxs(r,{to:"/auth/sign-in",className:"inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700",children:[e.jsx(u,{className:"h-4 w-4 fill-white/40"}),e.jsx("span",{className:"hidden sm:block",children:"Connexion"})]})}),e.jsx("button",{className:"hs-collapse-toggle inline-block lg:hidden","data-hs-overlay":"#mobile-menu",children:e.jsx(j,{className:"h-7 w-7 text-default-600 hover:text-default-900"})})]})]}),e.jsx("ul",{className:"menu relative mx-auto hidden grow items-center justify-center lg:flex",children:l.map((s,a)=>e.jsx("li",{className:i("menu-item mx-2 text-default-800 transition-all duration-300 hover:text-primary [&.active]:text-primary",d===s&&"active"),children:e.jsx("a",{className:"inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base",href:`#${s}`,children:f(s)})},a))}),e.jsx("div",{className:"ms-auto hidden shrink gap-2 lg:inline-flex",children:e.jsxs(r,{to:"/auth/sign-in",className:"inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700",children:[e.jsx(u,{className:"h-4 w-4 fill-white/40"}),e.jsx("span",{className:"hidden sm:block",children:"Connexion"})]})})]})})})}),e.jsxs("div",{id:"mobile-menu",className:"hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 dark:bg-default-50",tabIndex:-1,children:[e.jsxs("div",{className:"flex h-[74px]  items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300",children:[e.jsxs(r,{to:"/",children:[e.jsx("img",{src:o,alt:"logo",className:"flex h-20 dark:hidden "}),e.jsx("img",{src:o,alt:"logo",className:"hidden h-20 dark:flex"})]}),e.jsx("div",{"data-hs-overlay":"#mobile-menu",className:"hs-collapse-toggle",children:e.jsx(w,{size:24})})]}),e.jsx("div",{className:"h-[calc(100%-4rem)] overflow-y-auto",children:e.jsx("nav",{className:"hs-accordion-group flex h-full w-full flex-col flex-wrap p-4",children:e.jsx("ul",{className:"space-y-1",children:l.map((s,a)=>e.jsx("li",{className:i("rounded text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary",d==`${s}`&&"active"),children:e.jsx("a",{className:"block w-full px-4 py-2.5",href:`#${s}`,children:f(s)})},a))})})})]})]})};export{z as T};