import{a7 as S,u as C,w as v,x,y as z,z as T,a5 as a,j as e,a6 as E,T as L,bR as F,a3 as I}from"./index-Djvi2iXK.js";import{r as p,e as R,i as U,L as h}from"./vendor-CRMiJ7ZJ.js";const A=()=>{const[o,n]=p.useState(!1),r=R(),[b]=U(),{urlApi:g}=p.useContext(S),{saveSession:f,role:j}=C(),w=v({email:x().email("Veuillez entrer un email valide").required("Veuillez entrer votre email"),password:x().required("Veuillez entrer votre mot de passe")}),{control:N,handleSubmit:y}=z({resolver:T(w),defaultValues:{email:"",password:""}}),l=b.get("redirectTo")??"/admin/dashboard",k=y(async i=>{var c,d,u,m;n(!0);try{const t=await fetch(g+"login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});console.log(JSON.stringify(i));const s=await t.json();if(console.log(s),s.status){a.error(s.status,{position:"top-right",duration:2e3});return}if(!t.ok)throw new Error(`Erreur ${t.status}: ${t.statusText}`);console.log(s.user.roles),console.log(i),s.token&&(f({token:s.token,user:s.user,role:s.user.roles,institut:((c=s.user)==null?void 0:c.institut)??null,demandeur:((d=s.user)==null?void 0:d.demandeur)??null}),a.success("Connexion réussie. Redirection...",{position:"top-right",duration:2e3}),console.log("redirectUrl",l),console.log("role",j),s.user.roles.includes("ROLE_INSTITUT")?r("/institut/dashboard"):s.user.roles.includes("ROLE_DEMANDEUR")?r("/demandeur/dashboard"):r(l))}catch(t){console.log(t),(m=(u=t.response)==null?void 0:u.data)!=null&&m.error?a.error(t.response.data.error,{position:"top-right",duration:2e3}):a.error("Une erreur s'est produite lors de la connexion.",{position:"top-right",duration:2e3})}finally{n(!1)}});return{loading:o,login:k,control:N}},V=()=>{const{loading:o,login:n,control:r}=A();return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Connexion"}),e.jsxs("form",{className:"mt-2 shrink",onSubmit:n,children:[e.jsx(L,{containerClassName:"mb-4",label:"Adresse email",name:"email",labelClassName:"block text-base/normal text-zinc-200 font-semibold",className:"block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",fullWidth:!0,control:r}),e.jsx(F,{label:"Mot de passe",containerClassName:"mb-4",name:"password",labelClassName:"block text-base/normal text-zinc-200 font-semibold",fullWidth:!0,className:"block w-full rounded border-white/10 py-2.5 bg-transparent text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",control:r}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2",children:[e.jsxs("div",{className:"inline-flex items-center",children:[e.jsx("input",{type:"checkbox",className:"size-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0",id:"checkbox-signin"}),e.jsx("label",{className:"ms-2 select-none align-middle text-base/none text-zinc-200",htmlFor:"checkbox-signin",children:"Se souvenir de moi"})]}),e.jsx(h,{to:"/auth/forgot-pass",className:"border-b border-dashed text-zinc-200",children:e.jsx("small",{children:"Mot de passe oublié ?"})})]}),e.jsx("div",{className:"text-center",children:e.jsxs("button",{type:"submit",disabled:o,className:"group mt-5 inline-flex w-full items-center justify-center rounded bg-blueLogo  px-6 py-2.5 text-white backdrop-blur-2xl transition-all  hover:text-white",children:[o?"Chargement...":"Se connecter",o&&e.jsx(I,{className:"animate-spin"})]})})]}),e.jsx("br",{}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:["Vous n'avez pas de compte ?",e.jsx(h,{to:"/inscription",className:"ms-1 text-primary",children:e.jsx("b",{children:"Inscription"})})]}),e.jsx("br",{})]})};export{V as default};
