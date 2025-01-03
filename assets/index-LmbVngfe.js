import{u as k,w as S,x as b,y as z,z as v,bG as d,j as e,$ as T,bH as C}from"./index-kUS121tA.js";import{T as E}from"./TextFormInput-DOtCl40r.js";import{r as I,d as L,i as F,L as u}from"./vendor-CEFyliPi.js";import{T as P}from"./ThirdPartyAuth-BSdAus1N.js";const U=()=>{const[r,o]=I.useState(!1),s=L(),[g]=F(),{saveSession:f,role:i}=k(),j=S({email:b().email("Veuillez entrer un email valide").required("Veuillez entrer votre email"),password:b().required("Veuillez entrer votre mot de passe")}),{control:w,handleSubmit:N}=z({resolver:v(j),defaultValues:{email:"",password:""}}),l=g.get("redirectTo")??"/admin/dashboard",y=N(async c=>{var m,h,x,p;o(!0);try{const a=await fetch("http://test.authenticpage.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});console.log(JSON.stringify(c));const t=await a.json();if(!a.ok)throw new Error(`Erreur ${a.status}: ${a.statusText}`);console.log(t.user.roles),console.log(c),t.token&&(f({token:t.token,user:t.user,role:t.user.roles,institut:((m=t.user)==null?void 0:m.institut)??null,demandeur:((h=t.user)==null?void 0:h.demandeur)??null}),d.success("Connexion réussie. Redirection...",{position:"top-right",duration:2e3}),console.log("redirectUrl",l),console.log("role",i),i==="ROLE_INSTITUT"?s("/institut/dashboard"):i==="ROLE_DEMANDEUR"?s("/demandeur/dashboard"):l!="/admin/dashboard"?s(l):s("/admin/dashboard"))}catch(n){console.log(n),(p=(x=n.response)==null?void 0:x.data)!=null&&p.error?d.error(n.response.data.error,{position:"top-right",duration:2e3}):d.error("Une erreur s'est produite lors de la connexion.",{position:"top-right",duration:2e3})}finally{o(!1)}});return{loading:r,login:y,control:w}},A=()=>{const{loading:r,login:o,control:s}=U();return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Connexion"}),e.jsxs("form",{className:"mt-2 shrink",onSubmit:o,children:[e.jsx(E,{containerClassName:"mb-4",label:"Adresse email",name:"email",labelClassName:"block text-base/normal text-zinc-200 font-semibold",className:"block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",fullWidth:!0,control:s}),e.jsx(C,{label:"Mot de passe",containerClassName:"mb-4",name:"password",labelClassName:"block text-base/normal text-zinc-200 font-semibold",fullWidth:!0,className:"block w-full rounded border-white/10 py-2.5 bg-transparent text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",control:s}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2",children:[e.jsxs("div",{className:"inline-flex items-center",children:[e.jsx("input",{type:"checkbox",className:"size-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0",id:"checkbox-signin"}),e.jsx("label",{className:"ms-2 select-none align-middle text-base/none text-zinc-200",htmlFor:"checkbox-signin",children:"Se souvenir de moi"})]}),e.jsx(u,{to:"/auth/forgot-pass",className:"border-b border-dashed text-zinc-200",children:e.jsx("small",{children:"Mot de passe oublié ?"})})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{type:"submit",disabled:r,className:"group mt-5 inline-flex w-full items-center justify-center rounded bg-blueLogo  px-6 py-2.5 text-white backdrop-blur-2xl transition-all  hover:text-white",children:r?"Chargement...":"Se connecter"})})]}),e.jsx(P,{}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:["Vous n'avez pas de compte ?",e.jsx(u,{to:"/auth/sign-up",className:"ms-1 text-primary",children:e.jsx("b",{children:"Inscription"})})]}),e.jsx("br",{}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:["créer un compte instituteur ?",e.jsx(u,{to:"/auth/institut",className:"ms-1 text-primary",children:e.jsx("b",{children:"Institut"})})]})]})};export{A as default};
