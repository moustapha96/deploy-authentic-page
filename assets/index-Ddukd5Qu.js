import{j as e,ag as y,Q as w,i as D,ah as i,u as S,aQ as k,aR as z,aS as P}from"./index-B_yS4Ol3.js";import{L as R,r as a}from"./vendor-CRMiJ7ZJ.js";import{d as L,F as m,U as x}from"./react-apexcharts.min-BPXiBqQB.js";const A=()=>e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsxs("div",{className:"inline-flex w-full items-center bg-green-600/10 px-4 py-3 text-sm text-green-600",role:"alert",children:[e.jsx(y,{className:"me-2 size-4"}),e.jsx("span",{children:"Congratulations John."})]}),e.jsx("div",{className:"p-5",children:e.jsxs("div",{className:"grid grid-cols-4 items-center justify-between",children:[e.jsx("div",{className:"col-span-3 h-full",children:e.jsxs("div",{className:"flex h-full flex-col items-start",children:[e.jsxs("div",{className:"mb-4 grow",children:[e.jsxs("p",{className:"text-lg text-default-900",children:["You have done ",e.jsx("span",{children:"68%"}),"😎 more sales today"]}),e.jsx("p",{className:"text-base text-default-600",children:"Check your new badge in your profile."})]}),e.jsxs(R,{to:"",className:"inline-flex shrink-0 items-center justify-center rounded-full bg-primary-500 px-6 py-2 text-center text-sm text-white transition-all hover:bg-primary-600",children:["View Profile",e.jsx(w,{className:"ms-1 size-4"})]})]})}),e.jsx("div",{children:e.jsx("img",{src:L,className:"h-full max-w-full"})})]})})]}),C=[{id:98754,product:"ASOS Ridley High",customer:"Otto B",price:79.49,status:"Pending"},{id:98753,product:"Marco Lightweight Shirt",customer:"Mark P",price:125.49,status:"Delivered"}],E=()=>e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-default-200 px-4 py-3",children:e.jsx("h4",{className:"uppercase",children:"Recent Orders"})}),e.jsx("div",{className:"overflow-auto",children:e.jsx("div",{className:"inline-block min-w-full align-middle",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full divide-y divide-default-200",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-default-100",children:[e.jsx("th",{scope:"col",className:"px-4 py-4 text-start text-sm font-semibold text-default-900",children:"#"}),e.jsx("th",{scope:"col",className:"px-4 py-4 text-start text-sm font-semibold text-default-900",children:"Product"}),e.jsx("th",{scope:"col",className:"px-4 py-4 text-start text-sm font-semibold text-default-900",children:"Customer"}),e.jsx("th",{scope:"col",className:"px-4 py-4 text-start text-sm font-semibold text-default-900",children:"Price"}),e.jsx("th",{scope:"col",className:"px-4 py-4 text-start text-sm font-semibold text-default-900",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-default-200",children:C.map((s,d)=>e.jsxs("tr",{className:"hover:bg-default-100",children:[e.jsxs("td",{className:"whitespace-nowrap px-4 py-4 text-sm font-medium text-default-600",children:["#",s.id]}),e.jsx("td",{className:"whitespace-nowrap px-4 py-4 text-sm text-default-600",children:s.product}),e.jsx("td",{className:"whitespace-nowrap px-4 py-4 text-sm text-default-600",children:s.customer}),e.jsxs("td",{className:"whitespace-nowrap px-4 py-4 text-start text-default-600",children:["$",s.price]}),e.jsx("td",{className:"whitespace-nowrap px-4 py-4 text-start text-default-600",children:e.jsx("span",{className:D("inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 text-xs font-medium",s.status==="Declined"?"text-red-500 bg-red-500/10":s.status==="Pending"?"text-yellow-500 bg-yellow-500/10":"text-teal-500 bg-teal-500/10"),children:s.status})})]},d))})]})})})})]}),O=({demandesCount:s,demandesRejeteCount:d,demandesAccepteCount:r,documentsCount:t})=>e.jsxs("div",{className:"grid gap-6 lg:grid-cols-3",children:[e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandes"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(i,{className:"me-1 inline size-4"}),s,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:s}),e.jsx(m,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandes acceptées"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(i,{className:"me-1 inline size-4"}),r,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:r}),e.jsx(x,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandes rejetées"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(i,{className:"me-1 inline size-4"}),d,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:d}),e.jsx(x,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de documents"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(i,{className:"me-1 inline size-4"}),t,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:t}),e.jsx(m,{size:70})]})]})})})]}),T=()=>{const{isAuthenticated:s,role:d,session:r,demandeur:t}=S(),[o,u]=a.useState([]),[h,j]=a.useState([]),[f,p]=a.useState([]),[N,b]=a.useState([]),[B,g]=a.useState(!0),[F,v]=a.useState(null);return a.useEffect(()=>{(async()=>{try{const[l,c]=await Promise.all([z(t.id),P(t.id)]);p(l.filter(n=>n.status==="Accepted")),j(l.filter(n=>n.status==="Rejected")),u(l),b(c),console.log("documents "+c.length)}catch(l){v(l.message)}finally{g(!1)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Dashboard",SubTitle:`Demandeur =>  ${t==null?void 0:t.name} `}),e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"my-6 space-y-6",children:[e.jsx(O,{demandesCount:o.length,demandesRejeteCount:h.length,demandesAccepteCount:f.length,documentsCount:N.length}),e.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[e.jsx(A,{}),e.jsx(E,{})]})]})})})]})};export{T as default};