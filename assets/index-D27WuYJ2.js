import{j as e,ae as l,g as b,d as v,af as k,ag as D,ah as A,ai as R,aj as z}from"./index-BLHG2q5c.js";import{L as r,r as a}from"./vendor-CST6t91B.js";import{F as m,U as o}from"./react-apexcharts.min-D6INIFKC.js";const S=({demandesCount:t,demandeursCount:s,institutsCount:i,documentsCount:d})=>e.jsxs("div",{className:"grid gap-6 lg:grid-cols-3",children:[e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandes"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),t,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:t}),e.jsx(m,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de demandeurs"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),s,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:s}),e.jsx(o,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre d'instituts"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),i,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:i}),e.jsx(o,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:"Nombre de documents"}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(l,{className:"me-1 inline size-4"}),d,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:d}),e.jsx(m,{size:70})]})]})})})]}),I=({demandeurs:t})=>e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-default-200 px-4 py-3",children:e.jsx("h4",{className:"uppercase",children:"Demandeurs"})}),e.jsx("div",{className:"overflow-auto",children:e.jsx("div",{className:"inline-block min-w-full align-middle",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"#"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nom"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Téléphone"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Pays de Résidence"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Profession"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(s=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:["#",s.id]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.email}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.phone}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.paysResidence}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.profession}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:e.jsx(r,{to:`/admin/demandeur/${s.id}/details`,className:"text-indigo-600 hover:text-indigo-900",children:"Détails"})})]},s.id))})]})})})})]}),E=({demandes:t})=>e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-default-200 px-4 py-3",children:e.jsx("h4",{className:"uppercase",children:"Demandes"})}),e.jsx("div",{className:"overflow-auto",children:e.jsx("div",{className:"inline-block min-w-full align-middle",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"#"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Intitulé"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Institut"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Demandeur"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date de Demande"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Année d'Obtention"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Résultat"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(s=>e.jsxs("tr",{className:"hover:bg-gray-50 transition-colors duration-200",children:[e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:["#",s.id]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.intitule}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.institut?e.jsx(r,{to:`/admin/institut/${s.institut.id}/details`,className:"text-primary hover:text-primary-700 transition-colors duration-200",children:s.institut.name}):s.nameInstitut||"N/A"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.demandeur.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(s.dateDemande).toLocaleDateString()}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.anneeObtention}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:b("px-2 inline-flex text-xs leading-5 font-semibold rounded-full",s.resultat==="Accepted"?"bg-green-100 text-green-800":s.resultat==="Declined"?"bg-red-100 text-red-800":s.resultat==="Pending"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"),children:s.resultat})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:e.jsx(r,{to:`/admin/demandes/${s.id}/details`,className:"text-primary hover:text-primary-700 transition-colors duration-200",children:"Détails"})})]},s.id))})]})})})})]}),L=({instituts:t})=>e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-default-200 px-4 py-3",children:e.jsx("h4",{className:"uppercase",children:"Instituts"})}),e.jsx("div",{className:"overflow-auto",children:e.jsx("div",{className:"inline-block min-w-full align-middle",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"#"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nom"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Type"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Pays Résidence"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nombre de Demandes"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(s=>e.jsxs("tr",{className:"hover:bg-gray-50 transition-colors duration-200",children:[e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:["#",s.id]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.type}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:s.paysResidence}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs(r,{to:`/admin/institut/${s.id}/demandes`,className:"inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:[e.jsx(v,{className:"mr-1.5 h-4 w-4"}),s.demandes&&s.demandes.length," Demandes"]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:e.jsx(r,{to:`/admin/institut/${s.id}/details`,className:"text-primary-600 hover:text-primary-900 transition-colors duration-200",children:"Détails"})})]},s.id))})]})})})})]}),U=()=>{const[t,s]=a.useState([]),[i,d]=a.useState([]),[n,p]=a.useState([]),[h,u]=a.useState([]),[j,f]=a.useState(!0),[x,g]=a.useState(null);return a.useEffect(()=>{(async()=>{try{const[c,y,N,w]=await Promise.all([D(),A(),R(),z()]);s(c),d(y),p(N),u(w)}catch(c){g(c.message)}finally{f(!1)}})()},[]),j?e.jsx("div",{className:"flex justify-center items-center h-screen",children:"Chargement du tableau de bord..."}):x?e.jsxs("div",{className:"flex justify-center items-center h-screen text-red-600",children:["Erreur: ",x]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Tableau de bord"}),e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"my-6 space-y-6",children:[e.jsx(S,{demandesCount:t.length,demandeursCount:i.length,institutsCount:n.length,documentsCount:h.length}),e.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[e.jsx(L,{instituts:n.slice(0,5)}),e.jsx(I,{demandeurs:i.slice(0,5)})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(E,{demandes:t.slice(0,5)})})]})})})]})};export{U as default};
