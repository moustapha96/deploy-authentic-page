import{u as l,j as a,aC as c,aZ as g,a_ as i,a$ as m,b0 as u,b1 as x}from"./index-DoZmDtc-.js";import{r as h}from"./vendor-CST6t91B.js";const f=()=>{const{t:p,i18n:e}=l(),[n,r]=h.useState(!1),t={fr:g,en:i,es:m,de:u,it:x},o=s=>{e.changeLanguage(s),r(!1)};return a.jsxs("div",{className:"relative",children:[a.jsxs("button",{onClick:()=>r(!n),className:"flex items-center space-x-1 focus:outline-none",children:[a.jsx("img",{src:t[e.language],alt:`Drapeau ${e.language}`,className:"w-6 h-6"}),a.jsx(c,{className:"w-4 h-4"})]}),n&&a.jsx("div",{className:"absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-20",children:Object.keys(t).map(s=>a.jsxs("button",{onClick:()=>o(s),className:"flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full",children:[a.jsx("img",{src:t[s],alt:s,className:"w-5 h-5 mr-2"}),a.jsx("span",{children:s.toUpperCase()})]},s))})]})};export{f as L};
