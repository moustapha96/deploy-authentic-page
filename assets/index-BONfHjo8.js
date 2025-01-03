import{j as e,ae as l,g as v,u as D,aO as k,aP as S,aQ as z}from"./index-BzrRwJpD.js";import{L as c,r as i}from"./vendor-CST6t91B.js";import{F as m,U as o}from"./react-apexcharts.min-CMdQNyf7.js";const A=({demandesCount:a,demandesRejeteCount:s,demandesAccepteCount:d,documentsCount:t})=>e.jsxs("div",{className:"grid gap-6 lg:grid-cols-3",children:[e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandes"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),a,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:a}),e.jsx(m,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandes acceptées"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),d,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:d}),e.jsx(o,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandes rejetées"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),s,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:s}),e.jsx(o,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de documents"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),t,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:t}),e.jsx(m,{size:70})]})]})})})]}),R=({demandes:a})=>(console.log(a),e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-default-200 px-4 py-3",children:e.jsx("h4",{className:"uppercase",children:"Recent Orders"})}),e.jsx("div",{className:"overflow-auto",children:e.jsx("div",{className:"inline-block min-w-full align-middle",children:e.jsx("div",{className:"overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"#"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Intitulé"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Institut"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Institut Demandeur"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date de Demande"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Résultat"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:a&&a.map(s=>e.jsxs("tr",{className:"hover:bg-gray-50 transition-colors duration-200",children:[e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:["#",s.id]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.intitule}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.institut?e.jsx(c,{to:`/demandeur/institut/${s.institut.id}/details`,className:"text-primary hover:text-primary-700 transition-colors duration-200",children:s.institut.name}):s.nameInstitut}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.institutDemandeur?e.jsx(c,{to:`/demandeur/institut/${s.institutDemandeur.id}/details`,className:"text-primary hover:text-primary-700 transition-colors duration-200",children:s.institutDemandeur.name}):e.jsx("p",{className:"text-gray-500",children:" Inconnue "})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(s.dateDemande).toLocaleDateString()}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:v("px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.resultat==="Accepted"?"bg-green-100 text-green-800":s.resultat==="Declined"?"bg-red-100 text-red-800":s.resultat==="Pending"||s.resultat==="En cours"||s.resultat==="En attente"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"),children:s.resultat})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:e.jsx(c,{to:`/demandeur/demande/${s.id}/details`,className:"text-primary hover:text-primary-700 transition-colors duration-200",children:"Détails"})})]},s.id))})]})})})})})]})),P=()=>{const{isAuthenticated:a,role:s,session:d,demandeur:t}=D(),[x,u]=i.useState([]),[h,p]=i.useState([]),[j,f]=i.useState([]),[g,N]=i.useState([]),[E,y]=i.useState(!0),[I,b]=i.useState(null);return i.useEffect(()=>{(async()=>{try{const[r,w]=await Promise.all([S(t.id),z(t.id)]);f(r.filter(n=>n.status==="Accepted")),p(r.filter(n=>n.status==="Rejected")),u(r),N(w)}catch(r){b(r.message)}finally{y(!1)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Dashboard",SubTitle:`Demandeur =>  ${t==null?void 0:t.name} `}),e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"my-6 space-y-6",children:[e.jsx(A,{demandesCount:x.length,demandesRejeteCount:h.length,demandesAccepteCount:j.length,documentsCount:g.length}),e.jsx("div",{className:"grid gap-6 lg:grid-cols-1",children:e.jsx(R,{demandes:x.slice(0,5)})})]})})})]})};export{P as default};
