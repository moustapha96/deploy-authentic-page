import{j as e,bl as v,P as y,bm as i,bn as w,bo as D,bp as k,bq as z,br as S}from"./index-KgXPvRKN.js";import{L as E,r as t}from"./vendor-CRMiJ7ZJ.js";import{d as L,F as m,U as x}from"./react-apexcharts.min-Dsv9pI3j.js";const P=()=>e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsxs("div",{className:"inline-flex w-full items-center bg-green-600/10 px-4 py-3 text-sm text-green-600",role:"alert",children:[e.jsx(v,{className:"me-2 size-4"}),e.jsx("span",{children:"Congratulations John."})]}),e.jsx("div",{className:"p-5",children:e.jsxs("div",{className:"grid grid-cols-4 items-center justify-between",children:[e.jsx("div",{className:"col-span-3 h-full",children:e.jsxs("div",{className:"flex h-full flex-col items-start",children:[e.jsxs("div",{className:"mb-4 grow",children:[e.jsxs("p",{className:"text-lg text-default-900",children:["You have done ",e.jsx("span",{children:"68%"}),"😎 more sales today"]}),e.jsx("p",{className:"text-base text-default-600",children:"Check your new badge in your profile."})]}),e.jsxs(E,{to:"",className:"inline-flex shrink-0 items-center justify-center rounded-full bg-primary-500 px-6 py-2 text-center text-sm text-white transition-all hover:bg-primary-600",children:["View Profile",e.jsx(y,{className:"ms-1 size-4"})]})]})}),e.jsx("div",{children:e.jsx("img",{src:L,className:"h-full max-w-full"})})]})})]}),A=[{type:"Direct",session:358,view:250},{type:"Referral",session:501,view:50},{type:"Email",session:460,view:600},{type:"Organic",session:920,view:150}],C=()=>e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-default-200 px-4 py-3",children:e.jsx("h4",{className:"text-lg text-default-900",children:"Sources"})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"border-b border-default-200 bg-default-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-start text-sm font-semibold text-default-900",children:"Types"}),e.jsx("th",{className:"p-2 text-start text-sm font-semibold text-default-900",children:"Sessions"}),e.jsx("th",{className:"p-2 text-start text-sm font-semibold text-default-900",children:"Views"})]})}),e.jsx("tbody",{className:"divide-y dark:divide-default-200",children:A.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-2",children:s.type}),e.jsx("td",{className:"p-2",children:s.session}),e.jsx("td",{className:"p-2",children:s.view})]},a))})]})})]}),F=({demandesCount:s,demandeursCount:a,institutsCount:d,documentsCount:l})=>e.jsxs("div",{className:"grid gap-6 lg:grid-cols-3",children:[e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandes"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(i,{className:"me-1 inline size-4"}),s,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:s}),e.jsx(m,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandeurs"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(i,{className:"me-1 inline size-4"}),a,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:a}),e.jsx(x,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre d'instituts"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(i,{className:"me-1 inline size-4"}),d,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:d}),e.jsx(x,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de documents"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(i,{className:"me-1 inline size-4"}),l,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:l}),e.jsx(m,{size:70})]})]})})})]}),V=()=>{const[s,a]=t.useState([]),[d,l]=t.useState([]),[n,o]=t.useState([]),[u,h]=t.useState([]),[j,f]=t.useState(!0),[c,b]=t.useState(null);return t.useEffect(()=>{(async()=>{try{const[r,N,p,g]=await Promise.all([D(),k(),z(),S()]);a(r),l(N),o(p),h(g)}catch(r){b(r.message)}finally{f(!1)}})()},[]),j?e.jsx("div",{className:"flex justify-center items-center h-screen",children:"Chargement du tableau de bord..."}):c?e.jsxs("div",{className:"flex justify-center items-center h-screen text-red-600",children:["Erreur: ",c]}):e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Tableau de bord"}),e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"my-6 space-y-6",children:[e.jsx(F,{demandesCount:s.length,demandeursCount:d.length,institutsCount:n.length,documentsCount:u.length}),e.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[e.jsx(P,{demandes:s}),e.jsx(C,{instituts:n})]})]})})})]})};export{V as default};
