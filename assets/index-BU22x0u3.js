import{ae as h,w as f,x as b,y as g,j as e,ad as j,T as y,a9 as w,z as N,ab as n}from"./index-YRYbpFoY.js";import{u as S,r as i,L as v}from"./vendor-iLaNCrNf.js";const z=()=>{const l=S(),[r,t]=i.useState(!1),{urlApi:c}=i.useContext(h),m=f({email:b().required("Please enter your email")}),{control:u,handleSubmit:d,reset:x}=g({resolver:N(m),defaultValues:{email:""}}),p=async o=>{t(!0);try{const s=await fetch(c+"password-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});console.log(JSON.stringify(o));const a=await s.json();if(console.log(a),a){t(!1),n.success(a.message),x(),l("/auth/sign-in");return}if(!s.ok)throw t(!1),n.error(a.message),new Error(`Erreur ${s.status}: ${s.statusText}`)}catch(s){console.log(s.message),console.error(s),t(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Mot de passe oublié"}),e.jsxs("form",{onSubmit:d(p),className:"mt-10 shrink",children:[e.jsx(y,{containerClassName:"mb-4",label:"Adresse email",name:"email",labelClassName:"block text-base/normal text-zinc-200 font-semibold",className:"block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",placeholder:"Entrez votre email",fullWidth:!0,control:u}),e.jsx("div",{className:"mb-6 flex flex-col justify-center gap-4",children:e.jsxs("button",{type:"submit",className:"relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700",children:[r?"Chargement...":"  Mot de passe oublié",r&&e.jsx(w,{className:"animate-spin"})]})})]}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:["Vous avez déjà un compte ?",e.jsx(v,{to:"/auth/sign-in",className:"ms-1 text-primary",children:e.jsx("b",{children:"Se connecter"})})]})]})};export{z as default};
