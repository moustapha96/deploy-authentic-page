import{w as i,x as o,y as l,j as e,a2 as n,z as m}from"./index-Dfc-6JsL.js";import{L as t}from"./vendor-CRMiJ7ZJ.js";import{T as c}from"./TextFormInput-BN8F2NGX.js";import{T as d}from"./ThirdPartyAuth-D1G_Vymm.js";const b=()=>{const r=i({email:o().required("Please enter your email")}),{control:a,handleSubmit:s}=l({resolver:m(r),defaultValues:{email:"user@demo.com"}});return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Forgot Password"}),e.jsxs("form",{onSubmit:s(()=>{}),className:"mt-10 shrink",children:[e.jsx(c,{containerClassName:"mb-4",label:"Email address",name:"email",labelClassName:"block text-base/normal text-zinc-200 font-semibold",className:"block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",placeholder:"Enter your email",fullWidth:!0,control:a}),e.jsxs("div",{className:"mb-6 flex flex-col justify-center gap-4",children:[e.jsx("button",{type:"submit",className:"relative inline-flex w-full items-center justify-center rounded bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-700",children:"Forgot Password"}),e.jsx(t,{to:"/auth/sign-in",className:"relative inline-flex w-full items-center justify-center rounded border border-primary px-6 py-3 text-base capitalize text-primary transition-all hover:bg-primary hover:text-white",children:"Go to Login"})]})]}),e.jsx(d,{}),e.jsxs("p",{className:"shrink text-center text-zinc-200",children:["Already have an account ?",e.jsx(t,{to:"/auth/sign-in",className:"ms-1 text-primary",children:e.jsx("b",{children:"Login"})})]})]})};export{b as default};
