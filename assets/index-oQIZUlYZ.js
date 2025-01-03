import{u,j as e,af as l,g as D,k,aP as S,aQ as z,aR as A}from"./index-uqWBUhkX.js";import{L as x,r as d}from"./vendor-CST6t91B.js";import{F as m,U as o}from"./users-Bm7CrERO.js";const R=({demandesCount:i,demandesRejeteCount:s,demandesAccepteCount:t,documentsCount:a})=>{const{t:r}=u();return e.jsxs("div",{className:"grid gap-6 lg:grid-cols-3",children:[e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:r("demandeur.demandesCount")}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),i,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:i}),e.jsx(m,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:r("demandeur.demandesAccepteCount")}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),t,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:t}),e.jsx(o,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:r("demandeur.demandesRejeteCount")}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),s,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:s}),e.jsx(o,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:r("demandeur.documentsCount")}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),a,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:a}),e.jsx(m,{size:70})]})]})})})]})},E=({demandes:i})=>{const{t:s}=u();return console.log(i),e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-default-200 px-4 py-3",children:e.jsx("h4",{className:"uppercase",children:s("recentDemandes.recentOrders")})}),e.jsx("div",{className:"overflow-auto",children:e.jsx("div",{className:"inline-block min-w-full align-middle",children:e.jsx("div",{className:"overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("demandeur.id")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("demandeur.intitule")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("demandeur.institut")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("demandeur.institutDemandeur")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("demandeur.dateDemande")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("demandeur.resultat")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("demandeur.actions")})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:i&&i.map(t=>e.jsxs("tr",{className:"hover:bg-gray-50 transition-colors duration-200",children:[e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:["#",t.id]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.intitule}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.institut?e.jsx(x,{to:`/demandeur/institut/${t.institut.id}/details`,className:"text-primary hover:text-primary-700 transition-colors duration-200",children:t.institut.name}):t.nameInstitut}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.institutDemandeur?e.jsx(x,{to:`/demandeur/institut/${t.institutDemandeur.id}/details`,className:"text-primary hover:text-primary-700 transition-colors duration-200",children:t.institutDemandeur.name}):e.jsx("p",{className:"text-gray-500",children:s("recentDemandes.unknown")})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(t.dateDemande).toLocaleDateString()}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:D("px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.resultat==="Accepted"?"bg-green-100 text-green-800":t.resultat==="Declined"?"bg-red-100 text-red-800":t.resultat==="Pending"||t.resultat==="En cours"||t.resultat==="En attente"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"),children:t.resultat})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:e.jsx(x,{to:`/demandeur/demande/${t.id}/details`,className:"text-primary hover:text-primary-700 transition-colors duration-200",children:s("demandeur.details")})})]},t.id))})]})})})})})]})},T=()=>{const{isAuthenticated:i,role:s,session:t,demandeur:a}=k(),[r,h]=d.useState([]),[p,j]=d.useState([]),[f,g]=d.useState([]),[N,y]=d.useState([]),[C,b]=d.useState(!0),[L,w]=d.useState(null);return d.useEffect(()=>{(async()=>{try{const[n,v]=await Promise.all([z(a.id),A(a.id)]);g(n.filter(c=>c.status==="Accepted")),j(n.filter(c=>c.status==="Rejected")),h(n),y(v)}catch(n){w(n.message)}finally{b(!1)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"Dashboard",SubTitle:`Demandeur =>  ${a==null?void 0:a.name} `}),e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"my-6 space-y-6",children:[e.jsx(R,{demandesCount:r.length,demandesRejeteCount:p.length,demandesAccepteCount:f.length,documentsCount:N.length}),e.jsx("div",{className:"grid gap-6 lg:grid-cols-1",children:e.jsx(E,{demandes:r.slice(0,5)})})]})})})]})};export{T as default};
