import{ab as P,t as j,v as l,aU as y,w as N,j as e,aa as k,aT as m,a7 as v,x as C,a9 as o}from"./index-BGQ1uO8q.js";import{u as S,r as u,d as L,L as z}from"./vendor-CST6t91B.js";const M=()=>{const d=S(),{urlApi:w}=u.useContext(P),f=L(),x=new URLSearchParams(f.search).get("token"),[n,s]=u.useState(!1),b=j({newPassword:l().required("Please enter your new password"),confirmPassword:l().oneOf([y("newPassword")],"Passwords must match")}),{control:i,handleSubmit:h,reset:p}=N({resolver:C(b),defaultValues:{newPassword:"",confirmPassword:""}}),g=async c=>{s(!0);try{const a={password:c.newPassword,confirmPassword:c.confirmPassword,token:x};console.log(a);const t=await fetch(w+"password-reset/new",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),r=await t.json();if(r){o.success(r.message),p(),d("/auth/sign-in"),s(!1);return}if(!t.ok)throw o.error(r.message),new Error(`Erreur ${t.status}: ${t.statusText}`);s(!1)}catch(a){o.error(a.message),s(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Nouveau Mot de Passe"}),e.jsxs("form",{onSubmit:h(g),className:"mt-10 shrink",children:[e.jsx(m,{label:"Nouveau Mot de Passe",containerClassName:"mb-4",name:"newPassword",labelClassName:"block text-base/normal text-zinc-200 font-semibold",fullWidth:!0,className:"block w-full rounded border-white/10 py-2.5 bg-transparent text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",control:i}),e.jsx(m,{label:"Confirmer le Mot de Passe",containerClassName:"mb-4",name:"confirmPassword",labelClassName:"block text-base/normal text-zinc-200 font-semibold",fullWidth:!0,className:"block w-full rounded border-white/10 py-2.5 bg-transparent text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",control:i}),e.jsx("div",{className:"mb-6 flex flex-col justify-center gap-4",children:e.jsxs("button",{type:"submit",className:"relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700",children:[n?"Chargement...":"Enregistrer",n&&e.jsx(v,{className:"animate-spin"})]})})]}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:["Vous avez déjà un compte ?",e.jsx(z,{to:"/auth/sign-in",className:"ms-1 text-primary",children:e.jsx("b",{children:"Se connecter"})})]})]})};export{M as default};
