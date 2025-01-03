import{x as f,a4 as r,y as s,z as b,A as N,j as e,T as a,a3 as j}from"./index-BUwxSxoI.js";import"./vendor-CEFyliPi.js";import{T as I}from"./TopNavBar-BHdEOBDr.js";import"./change-casing-BoyW-fpY.js";const y=()=>{const d=f({demandeur_id:r().required("Veuillez entrer l'ID du demandeur"),intitule:s().required("Veuillez entrer l'intitulé"),paysInstitut:s().required("Veuillez entrer le pays de l'institut"),emailInstitut:s().email("Veuillez entrer un email valide").required("Veuillez entrer l'email de l'institut"),nameInstitut:s().required("Veuillez entrer le nom de l'institut"),phoneInstitut:s().required("Veuillez entrer le téléphone de l'institut"),adresseInstitut:s().required("Veuillez entrer l'adresse de l'institut"),anneeObtention:r().required("Veuillez entrer l'année d'obtention").min(1990,"Année invalide").max(new Date().getFullYear(),"Année invalide")}),{control:t,handleSubmit:u,setError:o}=b({resolver:N(d)}),m=async l=>{const c={demandeur_id:l.demandeur_id,resultat:"En cours",intitule:l.intitule,paysInstitut:l.paysInstitut,emailInstitut:l.emailInstitut,nameInstitut:l.nameInstitut,phoneInstitut:l.phoneInstitut,adresseInstitut:l.adresseInstitut,anneeObtention:l.anneeObtention};try{const n=await fetch("/api/create-demande",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!n.ok){const i=await n.json();throw i.errors&&Object.entries(i.errors).forEach(([x,h])=>{o(x,{type:"manual",message:h})}),new Error("Failed to create demande")}const p=await n.json();console.log(p.message)}catch(n){console.error("Error:",n)}};return e.jsx("section",{id:"Contact",className:"py-10 lg:py-20 bg-default-100 dark:bg-default-50",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-around gap-6",children:e.jsx("div",{className:"text-center text-3xl ",children:"Nouvelle Demande"})}),e.jsx("div",{className:"grid xl:grid-cols-1 grid-cols-1 gap-6 items-center",children:e.jsx("div",{className:"p-8 rounded-lg",children:e.jsxs("div",{className:"p-6 rounded-md bg-white dark:bg-default-100",children:[e.jsx("h3",{className:"text-2xl font-medium text-default-950",children:"N'hésitez pas à nous contacter !"}),e.jsx("p",{className:"text-base mt-3",children:"Nous sommes là pour répondre à toutes vos questions concernant nos services."}),e.jsxs("form",{onSubmit:u(m),className:"space-y-4 mt-6",children:[e.jsx(a,{name:"demandeur_id",label:"ID du Demandeur",labelClassName:"text-default-950",className:"h-12 rounded py-4 ps-4 text-default-950 dark:bg-default-50",placeholder:"ID du demandeur",control:t,fullWidth:!0}),e.jsx(a,{name:"intitule",label:"Intitulé",labelClassName:"text-default-950",className:"h-12 rounded py-4 ps-4 text-default-950 dark:bg-default-50",placeholder:"Intitulé de la demande",control:t,fullWidth:!0}),e.jsx(a,{name:"paysInstitut",label:"Pays de l'Institut",labelClassName:"text-default-950",className:"h-12 rounded py-4 ps-4 text-default-950 dark:bg-default-50",placeholder:"Pays de l'institut",control:t,fullWidth:!0}),e.jsx(a,{name:"emailInstitut",label:"Email de l'Institut",type:"email",labelClassName:"text-default-950",className:"h-12 rounded py-4 ps-4 text-default-950 dark:bg-default-50",placeholder:"Email de l'institut",control:t,fullWidth:!0}),e.jsx(a,{name:"nameInstitut",label:"Nom de l'Institut",labelClassName:"text-default-950",className:"h12 rounded py=4 ps=4 text-default=950 dark:bg-default=50",placeholder:"Nom de l'institut",control:t,fullWidth:!0}),e.jsx(a,{name:"phoneInstitut",label:"Téléphone de l'Institut",labelClassName:"text-default950",placeholder:"Téléphone de l'institut",control:t,fullWidth:!0}),e.jsx(a,{name:"adresseInstitut",label:"Adresse de l'Institut",labelClassName:"text-default950",placeholder:"Adresse de l'institut",control:t,fullWidth:!0}),e.jsx(a,{name:"anneeObtention",label:"Année d'Obtention",type:"number",min:1990,max:new Date().getFullYear(),labelClassName:"text-default950",placeholder:"Année d'obtention (ex : 2024)",control:t,fullWidth:!0}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"submit",className:"px6 py2 text-lg w-1/2 rounded text-white bg-black hover:bg-primary transition-all",children:"Envoyer"})})]})]})})})]})})},z=()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Nouvelle Demande"}),e.jsx(I,{menuItems:["Accueil","A propos","Fonctionnalités","Nos Services","Tarification","Contact","FAQ"],position:"fixed",hasDownloadButton:!0}),e.jsx(y,{})]});export{z as default};