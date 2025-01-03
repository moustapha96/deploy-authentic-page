import{u as p,ab as h,v as b,w,x as y,j as e,aa as j,T as P,a7 as N,y as v,a9 as i}from"./index-DoZmDtc-.js";import{u as S,r as l,L as k}from"./vendor-CST6t91B.js";const F=()=>{const{t:s}=p(),c=S(),[o,a]=l.useState(!1),{urlApi:m}=l.useContext(h),u=b({email:w().required("Please enter your email")}),{control:d,handleSubmit:f,reset:g}=y({resolver:v(u),defaultValues:{email:""}}),x=async n=>{a(!0);try{const t=await fetch(m+"password-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});console.log(JSON.stringify(n));const r=await t.json();if(console.log(r),r){a(!1),i.success(r.message),g(),c("/auth/sign-in");return}if(!t.ok)throw a(!1),i.error(r.message),new Error(`Erreur ${t.status}: ${t.statusText}`)}catch(t){console.log(t.message),console.error(t),a(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:s("forgotPassword.title")}),e.jsxs("form",{onSubmit:f(x),className:"mt-10 shrink",children:[e.jsx(P,{containerClassName:"mb-4",label:s("forgotPassword.emailLabel"),name:"email",labelClassName:"block text-base/normal text-zinc-200 font-semibold",className:"block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",placeholder:s("forgotPassword.emailPlaceholder"),fullWidth:!0,control:d}),e.jsx("div",{className:"mb-6 flex flex-col justify-center gap-4",children:e.jsxs("button",{type:"submit",className:"relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700",children:[s(o?"forgotPassword.loading":"forgotPassword.forgotPasswordButton"),o&&e.jsx(N,{className:"animate-spin"})]})})]}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:[s("forgotPassword.alreadyHaveAccount"),e.jsx(k,{to:"/auth/sign-in",className:"ms-1 text-primary",children:e.jsx("b",{children:s("forgotPassword.signIn")})})]})]})};export{F as default};