import{aD as L,k as T,v,w as g,x as S,y as C,X as d,u as R,j as e,Y as z,T as A,aE as D,V as O}from"./index-C7kRYcZG.js";import{r as m,u as U,f as F,L as f}from"./vendor-Q6Ve1T67.js";const M=()=>{const[o,c]=m.useState(!1),r=U(),[t]=F(),{urlApi:w}=m.useContext(L),{saveSession:j,role:a,isAuthenticated:u}=T(),N=v({email:g().email("Veuillez entrer un email valide").required("Veuillez entrer votre email"),password:g().required("Veuillez entrer votre mot de passe")}),{control:y,handleSubmit:I}=S({resolver:C(N),defaultValues:{email:"",password:""}}),l=t.get("redirectTo")??"/admin/dashboard";m.useEffect(()=>{u&&a&&a=="ROLE_ADMIN"&&l=="/admin/dashboard"&&r("/admin/dashboard"),u&&a&&a=="ROLE_DEMANDEUR"&&l=="/demandeur/dashboard"&&r("/demandeur/dashboard"),u&&a&&a=="ROLE_INSTITUT"&&l=="/institut/dashboard"&&r("/institut/dashboard")},[u,r,l]);const k=I(async E=>{var h,b,x,p;c(!0);try{const n=await fetch(w+"login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)}),s=await n.json();if(s.code=="401"){d.error(s.message,{position:"top-right",duration:2e3});return}if(s.code=="403"){d.error(s.status,{position:"top-right",duration:2e3});return}if(!n.ok)throw new Error(`Erreur ${n.status}: ${n.statusText}`);if(s.token){j({token:s.token,user:s.user,role:s.user.roles,institut:((h=s.user)==null?void 0:h.institut)??null,demandeur:((b=s.user)==null?void 0:b.demandeur)??null}),d.success("Connexion réussie. Redirection...",{position:"top-right",duration:2e3});let i=l;s.user.roles.includes("ROLE_INSTITUT")?(i="/institut/dashboard",r(i)):s.user.roles.includes("ROLE_DEMANDEUR")?(i="/demandeur/dashboard",r(i)):s.user.roles.includes("ROLE_ADMIN")&&(i="/admin/dashboard",r(i))}}catch(n){(p=(x=n.response)==null?void 0:x.data)!=null&&p.error?d.error(n.response.data.error,{position:"top-right",duration:2e3}):d.error("Une erreur s'est produite lors de la connexion.",{position:"top-right",duration:2e3})}finally{c(!1)}});return{loading:o,login:k,control:y}},V=()=>{const{loading:o,login:c,control:r}=M(),{t}=R();return e.jsxs(e.Fragment,{children:[e.jsx(z,{title:t("signIn.title")}),e.jsxs("form",{className:"mt-2 shrink",onSubmit:c,children:[e.jsx(A,{containerClassName:"mb-4",label:t("signIn.emailLabel"),name:"email",labelClassName:"block text-base/normal text-zinc-200 font-semibold",className:"block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",fullWidth:!0,control:r}),e.jsx(D,{label:t("signIn.passwordLabel"),containerClassName:"mb-4",name:"password",labelClassName:"block text-base/normal text-zinc-200 font-semibold",fullWidth:!0,className:"block w-full rounded border-white/10 py-2.5 bg-transparent text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",control:r}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2",children:[e.jsxs("div",{className:"inline-flex items-center",children:[e.jsx("input",{type:"checkbox",className:"size-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0",id:"checkbox-signin"}),e.jsx("label",{className:"ms-2 select-none align-middle text-base/none text-zinc-200",htmlFor:"checkbox-signin",children:t("signIn.rememberMe")})]}),e.jsx(f,{to:"/auth/forgot-pass",className:"border-b border-dashed text-zinc-200",children:e.jsx("small",{children:t("signIn.forgotPassword")})})]}),e.jsx("div",{className:"text-center",children:e.jsxs("button",{type:"submit",disabled:o,className:"group mt-5 inline-flex w-full items-center justify-center rounded bg-blueLogo  px-6 py-2.5 text-white backdrop-blur-2xl transition-all  hover:text-white",children:[t(o?"signIn.loading":"signIn.signInButton"),o&&e.jsx(O,{className:"animate-spin"})]})})]}),e.jsx("br",{}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:[t("signIn.noAccount"),e.jsx(f,{to:"/registration?type=demandeur",className:"ms-1 text-primary",children:e.jsx("b",{children:t("signIn.signUp")})})]}),e.jsx("br",{})]})};export{V as default};
