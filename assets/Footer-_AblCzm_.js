import{q as u,r as x,s as p,t as h,u as f,v as g,w as j,x as b,y as N,j as e,z as v,T as k,A as y}from"./index-aoU7czEV.js";import{L as n,r as w}from"./vendor-CST6t91B.js";const L=[{title:"Liens utiles",items:[{name:"A propos",link:"A propos",page:!1},{name:"Services",link:"Services",page:!1},{name:"Tarification",link:"Tarification",page:!1},{name:"Contact",link:"Contact",page:!1}]},{title:"Social Media",items:[{name:"Facebook",icon:u},{name:"Instagram",icon:x,link:"https://www.instagram.com/authenticpageusa/"},{name:"Twitter",icon:p,link:"https://x.com/authenticpage"},{name:"Linkedin",icon:h,link:"https://www.linkedin.com/in/authentic-page-2274b5340/"}]},{title:"Mentions légales",items:[{name:"politique de confidentialité",link:"/privacy-policy",page:!0},{name:"Conditions générales",link:"/terms-and-conditions",page:!0}]}],A="/assets/logo_authentic_page-4piqBzUh.png",F=()=>{const{t}=f(),o=g({email:j().email(t("validation.emailValid")).required(t("validation.emailRequired"))}),{control:c,handleSubmit:m}=b({resolver:N(o)}),d=r=>{console.log(r)};return e.jsxs("footer",{children:[e.jsx("div",{className:"border-y border-default-200",children:e.jsx("div",{className:"container py-20",children:e.jsxs("div",{className:"grid xl:grid-cols-5 md:grid-cols-3 gap-10 lg:gap-16",children:[e.jsx("div",{className:"xl:col-span-2 md:col-span-3",children:e.jsxs("div",{children:[e.jsxs(n,{to:"/",children:[e.jsx("img",{src:A,alt:"Authentic Page ADN",className:"h-10 flex dark:hidden"}),e.jsx("img",{src:v,alt:"Authentic Page ADN",className:"h-10 hidden dark:flex"})]}),e.jsx("p",{className:"text-base text-default-800 mt-6",children:t("footerContent.description")}),e.jsx("form",{onSubmit:m(d),className:"space-y-2 mt-6",children:e.jsx(k,{name:"email",type:"email",fullWidth:!0,className:"py-4 ps-4 pe-16 w-full h-12 placeholder:text-default-600 text-default-950 rounded-lg bg-default-100",placeholder:t("footerContent.email"),endButton:e.jsx("button",{type:"submit",className:"inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 bg-primary/20 text-primary rounded-md transition-all duration-500 hover:bg-primary hover:text-white",children:e.jsx(y,{className:"h-6 w-6"})}),control:c})})]})}),L.map((r,a)=>e.jsx("div",{children:e.jsxs("ul",{className:"flex flex-col gap-3",children:[e.jsx("h5",{className:"xl:text-xl lg:text-lg font-medium text-default-800 mb-2",children:t(`footerContent.footerLinks.${a}.title`)}),r.items.map((s,i)=>{const l=s.icon;return e.jsx(w.Fragment,{children:l?e.jsxs("li",{className:"flex items-center gap-5 group",children:[e.jsx(n,{to:s.link||"",className:"h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary",children:e.jsx(l,{className:"h-5 w-5"})}),e.jsx("h5",{className:"text-base font-medium text-default-800",children:t(`footerContent.footerLinks.${a}.items.${i}.name`)})]}):e.jsx("li",{children:s.page?e.jsx(n,{to:s.link,target:"_blank",rel:"noopener noreferrer",className:"text-base text-default-700 hover:text-default-950 transition-all",children:t(`footerContent.footerLinks.${a}.items.${i}.name`)}):e.jsx("a",{href:`/#${s.link}`,className:"text-base text-default-700 hover:text-default-950 transition-all",children:t(`footerContent.footerLinks.${a}.items.${i}.name`)})})},i)})]})},a))]})})}),e.jsx("div",{className:"py-4",children:e.jsxs("div",{className:"container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start",children:[e.jsxs("p",{className:"text-base text-default-900",children:[new Date().getFullYear()," ©"," ",e.jsx(n,{className:"text-primary",to:"https://authenticpage.com/",target:"_blank",children:"AuthenticPage"})]}),e.jsx("p",{className:"text-base",children:e.jsx(n,{to:"/terms-and-conditions",children:t("footerContent.termsLink")})})]})})]})};export{F as default};
