import{s as h,j as e,af as r,g as D,u as k,ag as L,aN as z,aO as A}from"./index-BFzsQWWe.js";import{L as o,r as n}from"./vendor-CST6t91B.js";import{F as m,U as u}from"./users-r1GvFkaV.js";const S=({demandesCount:a,demandesRejeteCount:s,demandesAccepteCount:t,documentsCount:d})=>{const{t:i}=h();return e.jsxs("div",{className:"grid gap-6 lg:grid-cols-3",children:[e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:i("institut.demandesCount")}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(r,{className:"me-1 inline size-4"}),a,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:a}),e.jsx(m,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:i("institut.demandesAccepteCount")}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(r,{className:"me-1 inline size-4"}),t,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:t}),e.jsx(u,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:i("institut.demandesRejeteCount")}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(r,{className:"me-1 inline size-4"}),s,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:s}),e.jsx(u,{size:70})]})]})})}),e.jsx("div",{className:"rounded-md border border-default-200 bg-white dark:bg-default-50",children:e.jsx("div",{className:"p-5",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-default-600",children:i("institut.documentsCount")}),e.jsxs("span",{className:"text-teal-500",children:[e.jsx(r,{className:"me-1 inline size-4"}),d,"%"]})]}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("h3",{className:"text-3xl font-medium text-default-800",children:d}),e.jsx(m,{size:70})]})]})})})]})},C=({demandes:a})=>{const{t:s}=h();return console.log(a),e.jsxs("div",{className:"overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-default-200 px-4 py-3",children:e.jsx("h4",{className:"uppercase",children:s("recentDemandes.recentOrders")})}),e.jsx("div",{className:"overflow-auto",children:e.jsx("div",{className:"inline-block min-w-full align-middle",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("institut.id")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("institut.intitule")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("institut.demandeur")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("institut.dateDemande")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("institut.anneeObtention")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("institut.resultat")}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:s("institut.actions")})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:a&&a.map(t=>e.jsxs("tr",{className:"hover:bg-gray-50 transition-colors duration-200",children:[e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:["#",t.id]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.intitule}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.demandeur.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(t.dateDemande).toLocaleDateString()}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.anneeObtention}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:D("px-2 inline-flex text-xs leading-5 font-semibold rounded-full",t.resultat==="Accepted"?"bg-green-100 text-green-800":t.resultat==="Declined"?"bg-red-100 text-red-800":t.resultat==="Pending"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"),children:s(`institut.${t.resultat.toLowerCase()}`)})}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-between gap-4",children:[t.resultat==="Pending"&&e.jsx(o,{to:`/institut/authentifier/${t.id}/demande`,className:"text-rougeLogo hover:bg-rougeLogo hover:text-white transition-colors duration-200 border-2 border-rougeLogo rounded-md px-2 py-1",children:s("institut.authentifier")}),e.jsx(o,{to:`/institut/demande/${t.id}/details`,className:"text-primary hover:text-white hover:bg-blueLogo transition-colors duration-200 border-2 border-blueLogo rounded-md px-2 py-1",children:s("institut.details")})]})]},t.id))})]})})})})]})},P=()=>{const{isAuthenticated:a,role:s,session:t,institut:d}=k();console.log(d);const[i,p]=n.useState([]),[j,g]=n.useState([]),[f,N]=n.useState([]),[y,b]=n.useState([]),[R,w]=n.useState(!0),[E,v]=n.useState(null);return n.useEffect(()=>{(async()=>{try{const[l,x]=await Promise.all([z(d.id),A(d.id)]);N(l.filter(c=>c.status==="Accepted")),g(l.filter(c=>c.status==="Rejected")),p(l),b(x),console.log("documents "+x.length)}catch(l){v(l.message)}finally{w(!1)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"Dashboard"}),e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"my-6 space-y-6",children:[e.jsx(S,{demandesCount:i.length,demandesRejeteCount:j.length,demandesAccepteCount:f.length,documentsCount:y.length}),e.jsx("div",{className:"grid gap-6 lg:grid-cols-1",children:e.jsx(C,{demandes:i.slice(0,3)})})]})})})]})};export{P as default};
