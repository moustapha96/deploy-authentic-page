import{w as l,x as r,y as n,j as e,a6 as o,T as s,bR as m,z as c}from"./index-Djvi2iXK.js";import{L as d}from"./vendor-CRMiJ7ZJ.js";import{T as u}from"./ThirdPartyAuth-DyKNKoZ8.js";const h=()=>{const a=l({name:r().required("Veuillez entrer votre nom complet"),email:r().email("Veuillez entrer un email valide").required("Veuillez entrer votre email"),password:r().required("Veuillez entrer votre mot de passe")}),{control:t,handleSubmit:i}=n({resolver:c(a)});return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Inscription"}),e.jsxs("form",{onSubmit:i(()=>{}),className:"mt-2 shrink",children:[e.jsx(s,{containerClassName:"mb-4",label:"Nom complet",name:"name",labelClassName:"block text-base/normal text-zinc-200 font-semibold",className:"block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",fullWidth:!0,placeholder:"Entrez votre nom complet",control:t}),e.jsx(s,{containerClassName:"mb-4",label:"Adresse email",name:"email",labelClassName:"block text-base/normal text-zinc-200 font-semibold",className:"block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",placeholder:"Entrez votre email",fullWidth:!0,control:t}),e.jsx(m,{label:"Mot de passe",containerClassName:"mb-4",name:"password",labelClassName:"block text-base/normal text-zinc-200 font-semibold",placeholder:"Entrez votre mot de passe",fullWidth:!0,className:"block w-full rounded border-white/10 py-2.5 bg-transparent text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",control:t}),e.jsx("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2",children:e.jsxs("div",{className:"inline-flex items-center",children:[e.jsx("input",{type:"checkbox",className:"size-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0",id:"checkbox-signin"}),e.jsx("label",{className:"ms-2 select-none align-middle text-base/none text-zinc-200",htmlFor:"checkbox-signin",children:"Se souvenir de moi"})]})}),e.jsx("div",{className:"text-center",children:e.jsx("button",{className:"group mt-5 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-2.5 text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white",type:"submit",children:"S'inscrire"})})]}),e.jsx(u,{}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:["Vous avez déjà un compte ?",e.jsx(d,{to:"/auth/sign-in",className:"ms-1 text-primary",children:e.jsx("b",{children:"Connexion"})})]})]})};export{h as default};
