import{s as y,t as M,v as k,w as O,j as e,ak as S,a3 as T,al as U,b as C,am as L,T as z,an as D,ao as H,g as m,ap as A,af as B}from"./index-MHVg9YUp.js";import{r as i,L as d}from"./vendor-CST6t91B.js";import{a as f}from"./img-1-C937Ve8g.js";import{a as I,b as R,c as P,d as E,e as F,f as J,g as h,h as V}from"./img-6-CMUMlPaw.js";const u=[{id:1,name:"Brandon Smith",avatar:I,lastMessage:"How are you today?",totalUnread:3,lastMessageOn:"4:30am"},{id:2,name:"John Kish",avatar:R,lastMessage:"typing...",totalUnread:0,lastMessageOn:"5:30am"},{id:3,name:"Dominic A",avatar:P,lastMessage:"Are we going to have planning meeting today?",totalUnread:2,lastMessageOn:"Thu"},{id:4,name:"Ronda D",avatar:E,lastMessage:"Please check these design assets..",totalUnread:0,lastMessageOn:"Wed"},{id:5,name:"Michael H",avatar:F,lastMessage:"I something have awesome...",totalUnread:6,lastMessageOn:"Tue"},{id:6,name:"Thomas R",avatar:J,lastMessage:"You and Tony Meet Today...",totalUnread:0,lastMessageOn:"Tue"},{id:7,name:"Thomas J",avatar:h,lastMessage:"Howdy?",totalUnread:0,lastMessageOn:"Tue"},{id:8,name:"Rikcy J",avatar:V,lastMessage:"Are you interested in learning?",totalUnread:28,lastMessageOn:"Mon"},{id:9,name:"Jonsy K",avatar:h,lastMessage:"Howdy?",totalUnread:0,lastMessageOn:"tue"}],g=[],r={id:9,name:"Diane B",avatar:f};for(const a of u)g.push({id:1,message:{type:"text",value:"Hello!"},to:r,from:a,sendOn:"10:00"},{id:2,message:{type:"text",value:"Hi, How are you? What about our next meeting?"},to:a,from:r,sendOn:"10:01"},{id:3,message:{type:"text",value:"Yeah everything is fine"},to:r,from:a,sendOn:"10:01"},{id:4,message:{type:"text",value:"Awesome!"},to:a,from:r,sendOn:"10:02"},{id:5,message:{type:"text",value:"Let's have it today if you are free"},to:r,from:a,sendOn:"10:03"},{id:6,message:{type:"text",value:"Sure thing! let me know if 2pm works for you"},to:a,from:r,sendOn:"10:03"},{id:7,message:{type:"text",value:"Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?"},to:r,from:a,sendOn:"10:04"},{id:8,message:{type:"text",value:"We can also discuss about the presentation talk format if you have some extra mins"},to:r,from:a,sendOn:"10:04"},{id:9,message:{type:"text",value:"3pm it is. Sure, let's discuss about presentation format, it would be great to finalize today. I am attaching the last year format and assets here.."},to:a,from:r,sendOn:"10:05"},{id:10,message:{type:"file",value:{file:"AeroPage-sketch.zip",size:"2.3MB"}},to:a,from:r,sendOn:"10:05"});const W=({message:a,toUser:l})=>e.jsxs("div",{className:`${a.from.id===l.id?"ms-auto  flex-row-reverse  text-end":"text-start"} group flex w-11/12 items-start gap-3`,children:[e.jsxs("div",{className:"text-center",children:[e.jsx("img",{src:a.from.avatar,className:"h-8 rounded-md"}),e.jsx("p",{className:"pt-0.5 text-xs",children:a.sendOn})]}),a.message.type==="text"&&e.jsxs("div",{className:m("max-w-3/4 rounded p-3",a.from.id===l.id?"bg-primary":"bg-default-100"),children:[e.jsx("p",{className:m("relative text-xs font-bold",a.from.id===l.id?"text-white block":"text-default-700"),children:a.from.name}),e.jsx("p",{className:m("pt-1",a.from.id===l.id&&"text-white/90"),children:a.message.value})]}),a.message.type==="file"&&e.jsx("div",{className:"mt-3 rounded border border-default-200",children:e.jsx("div",{className:"p-3",children:e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"size-12",children:e.jsx("span",{className:"inline-flex h-full w-full items-center justify-center rounded bg-primary text-white",children:".ZIP"})}),e.jsxs("div",{className:"text-start text-default-400",children:[e.jsx(d,{to:"",className:"text-sm font-bold",children:a.message.value.file}),e.jsx("p",{className:"text-sm",children:a.message.value.size})]})]}),e.jsx(d,{to:"",className:"btn !text-xl",children:e.jsx(A,{})})]})})})]}),$=({selectedUser:a})=>{const[l,n]=i.useState([]),s=i.useMemo(()=>({id:9,name:"Diane B",avatar:f}),[]),c=i.useCallback(()=>{a&&n([...g].filter(t=>t.to.id===s.id&&t.from.id===a.id||s.id===t.from.id&&t.to.id===a.id))},[a,s]);i.useEffect(()=>{c()},[c]);const p=y({newMessage:M().required("Please enter your messsage")}),{control:v,handleSubmit:j,reset:b}=k({resolver:O(p)}),N=t=>{const o=[...l];o.push({id:l.length+1,from:s,to:a,message:{type:"text",value:t.newMessage},sendOn:new Date().getHours()+":"+new Date().getMinutes()}),setTimeout(()=>{const x=[...o];x.push({id:l.length+1,from:a,to:s,message:{type:"text",value:t.newMessage},sendOn:new Date().getHours()+":"+new Date().getMinutes()}),n(x)},1e3),n(o),b()},w=()=>{const t=i.useRef(null);return i.useEffect(()=>{t&&t.current&&t.current.scrollIntoView&&t.current.scrollIntoView({behavior:"smooth"})}),e.jsx("div",{ref:t})};return e.jsxs("div",{className:"w-full overflow-hidden rounded-xl border border-default-200 bg-white dark:bg-default-50",children:[e.jsx("div",{className:"border-b border-default-200 px-6 py-3",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 py-1.5",children:[e.jsx("div",{className:"sm:w-7/12",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:a.avatar,className:"me-2 h-9 rounded-full",alt:"Brandon Smith"}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-base font-medium text-default-700",children:a.name}),e.jsxs("p",{className:"mt-1.5 flex items-center text-xs text-default-400",children:[e.jsx(S,{fill:"orange",size:10,className:"me-1 text-red-400"}),"Offline"]})]})]})}),e.jsxs("div",{className:"w-auto",children:[e.jsx(d,{to:"",className:"inline-block p-1.5",children:e.jsx(T,{size:18,className:"text-default-900"})}),e.jsx(d,{to:"",className:"inline-block p-1.5",children:e.jsx(U,{size:18,className:"text-default-900"})}),e.jsx(d,{to:"",className:"inline-block p-1.5",children:e.jsx(C,{size:18,className:"text-default-900"})}),e.jsx(d,{to:"",className:"inline-block p-1.5",children:e.jsx(L,{size:18,className:"text-default-900"})})]})]})}),e.jsx("div",{className:"h-[calc(100vh-480px)] overflow-y-auto p-6 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1",children:e.jsxs("div",{className:"space-y-4",children:[l.map((t,o)=>e.jsx(W,{message:t,toUser:s},o)),e.jsx(w,{})]})}),e.jsx("div",{className:"border-t border-default-200 bg-white p-6 dark:bg-default-50",children:e.jsxs("form",{name:"chat-form",className:"flex items-center gap-2",onSubmit:j(N),children:[e.jsx(z,{name:"newMessage",className:"rounded border-none bg-default-100 text-default-900 placeholder:text-default-600 focus:ring-primary",placeholder:"Enter your text",control:v,fullWidth:!0,noValidate:!0,autoFocus:!0}),e.jsxs("div",{className:"flex w-auto gap-1",children:[e.jsx(d,{to:"",className:"rounded bg-default-200 px-3 py-3 text-default-800 hover:bg-default-800/20",children:e.jsx(D,{})}),e.jsxs("button",{className:"inline-flex items-center justify-center gap-2 rounded bg-primary px-3 py-2 text-white transition-all duration-300 hover:bg-primary-700",children:["Send ",e.jsx(H,{})]})]})]})})]})},K=({onUserSelect:a,selectedUser:l})=>{const n=s=>{a&&a(s)};return e.jsxs("div",{className:"overflow-hidden rounded-xl border border-default-200 bg-white dark:bg-default-50 lg:min-w-96",children:[e.jsx("div",{className:"border-b border-default-200 px-6 py-4",children:e.jsx("h6",{className:"text-lg font-medium text-default-900",children:"Contacts"})}),e.jsx("div",{className:"h-[calc(100vh-370px)] divide-y divide-default-200 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-default-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1",children:u.map((s,c)=>e.jsx("div",{className:"cursor-pointer",onClick:()=>{n(s)},children:e.jsxs("div",{className:m("flex items-center gap-3 px-4 py-3",l===s&&"bg-default-100"),children:[e.jsx("img",{src:s.avatar,className:"h-10 rounded-full",alt:"Brandon Smith"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h6",{className:"text-default-900",children:s.name}),e.jsx("small",{className:"text-default-400",children:s.lastMessageOn})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-light text-default-400",children:s.lastMessage}),e.jsx("span",{children:s.totalUnread!==0&&e.jsx("span",{className:"rounded-full bg-red-500/25 px-1 py-0.5 text-xs text-red-500",children:s.totalUnread})})]})]})]})},c))})]})},Q=()=>{const[a,l]=i.useState(u[1]),n=s=>{l(s)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Chat"}),e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"my-6 space-y-6",children:e.jsxs("div",{className:"grid gap-4 lg:grid-cols-3",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsx(K,{onUserSelect:n,selectedUser:a})}),e.jsx("div",{className:"lg:col-span-2",children:e.jsx($,{selectedUser:a})})]})})})})]})};export{Q as default};
