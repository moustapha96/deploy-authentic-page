import{r as m,s as u,t as x,v as h,w as p,x as f,y as g,z as j,j as e,A as b,B as N}from"./index-LViY93sK.js";import{L as s,r as v}from"./vendor-CRMiJ7ZJ.js";import{T as y}from"./TextFormInput-g3KM2f_R.js";const L=[{title:"Liens utiles",items:[{name:"A propos",link:"A propos",page:!1},{name:"Nos Services",link:"Nos Services",page:!1},{name:"Tarification",link:"Tarification",page:!1},{name:"Contact",link:"Contact",page:!1}]},{title:"Social Media",items:[{name:"Facebook",icon:m},{name:"Instagram",icon:u},{name:"Twitter",icon:x},{name:"Linkedin",icon:h}]},{title:"Mentions légales",items:[{name:"politique de confidentialité",link:"/privacy-policy",page:!0},{name:"Conditions générales",link:"/terms-and-conditions",page:!0}]}],k="/assets/logo_authentic_page-4piqBzUh.png",P=()=>{const l=p({email:f().email("Veuillez entrer un email valide").required("Veuillez entrer votre email")}),{control:r,handleSubmit:n}=g({resolver:j(l)}),o=a=>{console.log(a)};return e.jsxs("footer",{children:[e.jsx("div",{className:"border-y border-default-200",children:e.jsx("div",{className:"container py-20",children:e.jsxs("div",{className:"grid xl:grid-cols-5 md:grid-cols-3 gap-10 lg:gap-16",children:[e.jsx("div",{className:"xl:col-span-2 md:col-span-3",children:e.jsxs("div",{children:[e.jsxs(s,{to:"/",children:[e.jsx("img",{src:k,alt:"AuthenticPage Logo",className:"h-10 flex dark:hidden"}),e.jsx("img",{src:b,alt:"AuthenticPage Logo",className:"h-10 hidden dark:flex"})]}),e.jsx("p",{className:"text-base text-default-800 mt-6",children:"AuthenticPage est dédié à fournir une solution sécurisée et efficace pour l'authentification des diplômes et certificats académiques."}),e.jsx("form",{onSubmit:n(o),className:"space-y-2 mt-6",children:e.jsx(y,{name:"email",type:"email",fullWidth:!0,className:"py-4 ps-4 pe-16 w-full h-12 placeholder:text-default-600 text-default-950 rounded-lg bg-default-100",placeholder:"Entrez votre email",endButton:e.jsx("button",{type:"submit",className:"inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 bg-primary/20 text-primary rounded-md transition-all duration-500 hover:bg-primary hover:text-white",children:e.jsx(N,{className:"h-6 w-6"})}),control:r})})]})}),L.map((a,c)=>e.jsx("div",{children:e.jsxs("ul",{className:"flex flex-col gap-3",children:[e.jsx("h5",{className:"xl:text-xl lg:text-lg font-medium text-default-800 mb-2",children:a.title}),a.items.map((t,d)=>{const i=t.icon;return e.jsx(v.Fragment,{children:i?e.jsxs("li",{className:"flex items-center gap-5 group",children:[e.jsx(s,{to:`${t.link?t.link:""}`,className:"h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary",children:e.jsx(i,{className:"h-5 w-5"})}),e.jsx("h5",{className:"text-base font-medium text-default-800",children:t.name})]}):e.jsx("li",{children:t.page?e.jsx("a",{href:`${t.link}`,className:"text-base text-default-700 hover:text-default-950 transition-all",children:t.name}):e.jsx("a",{href:`/#${t.link}`,className:"text-base text-default-700 hover:text-default-950 transition-all",children:t.name})})},d)})]})},c))]})})}),e.jsx("div",{className:"py-4",children:e.jsxs("div",{className:"container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start",children:[e.jsxs("p",{className:"text-base text-default-900",children:[new Date().getFullYear()," ©",e.jsx(s,{className:"text-primary",to:"https://authenticpage.com/",target:"_blank",children:"AuthenticPage"})]}),e.jsx("p",{className:"text-base",children:e.jsx(s,{to:"/terms",children:"Conditions d'utilisation & Politique"})})]})})]})};export{P as default};
