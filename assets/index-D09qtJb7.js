import{ab as l,s as n,t as o,v as m,j as e,aa as c,T as u,a7 as d,w as x}from"./index-gukRpgcL.js";import{u as p,r as s,L as b}from"./vendor-CST6t91B.js";const N=()=>{p();const[t,h]=s.useState(!1);s.useContext(l);const a=n({email:o().required("Please enter your email")}),{control:r,handleSubmit:i,reset:f}=m({resolver:x(a),defaultValues:{email:""}});return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Mot de passe oublié"}),e.jsxs("form",{onSubmit:i(),className:"mt-10 shrink",children:[e.jsx(u,{containerClassName:"mb-4",label:"Adresse email",name:"email",labelClassName:"block text-base/normal text-zinc-200 font-semibold",className:"block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",placeholder:"Entrez votre email",fullWidth:!0,control:r}),e.jsx("div",{className:"mb-6 flex flex-col justify-center gap-4",children:e.jsxs("button",{type:"submit",className:"relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700",children:[t?"Chargement...":"  Mot de passe oublié",t&&e.jsx(d,{className:"animate-spin"})]})})]}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:["Vous avez déjà un compte ?",e.jsx(b,{to:"/auth/sign-in",className:"ms-1 text-primary",children:e.jsx("b",{children:"Se connecter"})})]})]})};export{N as default};
