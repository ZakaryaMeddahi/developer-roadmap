import{j as e}from"./jsx-runtime.6940b965.js";import{r as o}from"./index.070054a4.js";import{p as x}from"./page.2efb91d4.js";import{u as D}from"./use-auth.93b31ecd.js";import{c as O,h as W,a as $}from"./http.3e3d4bea.js";import{u as G}from"./use-toast.dbd347db.js";import{C as B}from"./copy.22028783.js";import{u as _}from"./use-copy-text.77785bb1.js";import{D as T,A as Y}from"./AddedUserIcon.005917d9.js";import{T as q}from"./TrashIcon.d3634734.js";import{U as H}from"./user.e54d4f48.js";import{P as K,U as V,a as J}from"./UserProgressModal.c9e9575c.js";import{u as z}from"./use-outside-click.5adb83b9.js";import{u as Q}from"./use-keydown.bb1f91bb.js";import{t as E}from"./resource-progress.3efc99f3.js";import{C as X}from"./close.bb7a0ac2.js";import{g as Z,d as A}from"./browser.6245b9a5.js";import{R as ee}from"./readonly-editor.135cd3c5.js";import"./index.4b590221.js";import"./jwt.5556697d.js";import"./toast.5b8c89b6.js";import"./index.es.ebad3893.js";/* empty css                       */import"./ErrorIcon.977ee49a.js";import"./Spinner.799b0955.js";import"./roadmap.2126cc25.js";import"./index.1c368e68.js";import"./index.5f60dc5b.js";import"./createLucideIcon.3c9fdece.js";import"./bundle-mjs.58d1fad7.js";import"./trash-2.c5096478.js";function L(m){const{additionalClasses:s="mr-2 w-[20px] h-[20px]"}=m;return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:`relative ${s}`,children:[e.jsx("path",{d:"M14 19a6 6 0 0 0-12 0"}),e.jsx("circle",{cx:"8",cy:"9",r:"4"}),e.jsx("line",{x1:"19",x2:"19",y1:"8",y2:"14"}),e.jsx("line",{x1:"22",x2:"16",y1:"11",y2:"11"})]})}const se={src:"/_astro/user-plus.59c68015.svg",width:24,height:24,format:"svg"};function te(m){const{befriendUrl:s}=m,{isCopied:l,copyText:r}=_();return e.jsx("div",{className:"rounded-md",children:e.jsxs("div",{className:"mx-auto flex flex-col items-center p-7 text-center",children:[e.jsx("img",{alt:"no friends",src:se.src,className:"mb-2 h-[60px] w-[60px] opacity-10 sm:h-[120px] sm:w-[120px]"}),e.jsx("h2",{className:"text-lg font-bold sm:text-xl",children:"Invite your Friends"}),e.jsx("p",{className:"mb-4 mt-1 max-w-[400px] text-sm leading-relaxed text-gray-500",children:"Share the unique link below with your friends to track their skills and progress."}),e.jsxs("div",{className:"flex w-full max-w-[352px] items-center justify-center gap-2 rounded-lg border-2 p-1 text-sm",children:[e.jsx("input",{onClick:a=>{a.currentTarget.select(),r(s)},type:"text",value:s,className:"w-full border-none bg-transparent px-1.5 outline-none",readOnly:!0}),e.jsxs("button",{className:`flex items-center justify-center gap-1 rounded-md border-0 p-2 px-4 text-sm text-black ${l?"bg-green-300 hover:bg-green-300":"bg-gray-200 hover:bg-gray-300"}`,onClick:()=>{r(s)},children:[e.jsx("img",{src:B.src,className:"h-4 w-4",alt:"Invite Friends"}),l?"Copied":"Copy"]})]})]})})}function re(m){const{friend:s,onShowResourceProgress:l,onReload:r}=m,a=G(),[f,i]=o.useState();async function c(n,y){x.set("Please wait...");const{response:g,error:j}=await O(`https://api.roadmap.sh/v1-delete-friend/${n}`,{});if(j||!g){a.error(j?.message||"Something went wrong");return}a.success(y),r()}async function v(n,y){x.set("Please wait...");const{response:g,error:j}=await W(`https://api.roadmap.sh/v1-add-friend/${n}`,{});if(j||!g){a.error(j?.message||"Something went wrong");return}a.success(y),r()}const d=(s?.roadmaps||[]).sort((n,y)=>y.done-n.done),[w,N]=o.useState(!1);return s.status,e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex h-full min-h-[270px] flex-col overflow-hidden rounded-md border",children:[e.jsxs("div",{className:"relative flex items-center gap-3 border-b p-3",children:[e.jsx("img",{src:s.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${s.avatar}`:"/images/default-avatar.png",alt:s.name||"",className:"h-8 w-8 rounded-full"}),e.jsxs("div",{className:"inline-grid w-full",children:[e.jsx("h3",{className:"truncate font-medium",children:s.name}),e.jsx("p",{className:"truncate text-sm text-gray-500",children:s.email})]})]}),s.status==="accepted"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(w?d:d.slice(0,4)).map(n=>e.jsxs("button",{onClick:()=>l(n.resourceId,n.isCustomResource),className:"group relative overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none",children:[e.jsxs("span",{className:"relative z-10 flex items-center justify-between text-sm",children:[e.jsx("span",{className:"inline-grid",children:e.jsx("span",{className:"truncate",children:n.title})}),e.jsxs("span",{className:"ml-1.5 shrink-0 text-xs text-gray-400",children:[n.done," / ",n.total]})]}),e.jsx("span",{className:"absolute inset-0 bg-gray-100 group-hover:bg-gray-200",style:{width:`${n.done/n.total*100}%`}})]},n.resourceId)),d.length>4&&!w&&e.jsxs("button",{onClick:()=>N(!0),className:"text-xs text-gray-400 underline",children:["+ ",d.length-4," more"]}),w&&e.jsx("button",{onClick:()=>N(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),d.length===0&&e.jsx("div",{className:"text-sm text-gray-500",children:"No progress"})]}),e.jsxs(e.Fragment,{children:[f!=="accepted"&&e.jsxs("button",{className:"flex w-full items-center justify-center border-t py-2 text-sm font-medium text-red-700 hover:bg-red-50/50 hover:text-red-500",onClick:()=>{i("accepted")},children:[e.jsx(q,{className:"mr-1 h-4 w-4"}),"Remove Friend"]}),f==="accepted"&&e.jsxs("span",{className:"flex w-full items-center justify-center border-t py-2 text-sm text-red-700",children:["Are you sure?"," ",e.jsx("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{c(s.userId,"Friend removed").finally(()=>{x.set("")})},children:"Yes"})," ",e.jsx("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{i(void 0)},children:"No"})]})]})]}),s.status==="rejected"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex w-full flex-grow items-center justify-center",children:e.jsxs("span",{className:" flex flex-col items-center text-red-500",children:[e.jsx(T,{additionalClasses:"mr-2 h-8 w-8 mb-1"}),"Request Rejected"]})}),e.jsxs("span",{className:"flex cursor-default items-center justify-center border-t py-2 text-center text-sm",children:["Changed your mind?"," ",e.jsx("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{v(s.userId,"Friend request accepted").finally(()=>{x.set("")})},children:"Accept"})]})]}),s.status==="got_rejected"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex w-full flex-grow items-center justify-center",children:e.jsxs("span",{className:" flex flex-col items-center text-sm text-red-500",children:[e.jsx(T,{additionalClasses:"mr-2 h-8 w-8 mb-1"}),"Request Rejected"]})}),e.jsx("span",{className:"flex cursor-default items-center justify-center border-t py-2.5 text-center text-sm",children:e.jsxs("button",{className:"ml-2 flex items-center font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{c(s.userId,"Friend request removed").finally(()=>{x.set("")})},children:[e.jsx(q,{className:"mr-1 h-4 w-4"}),"Delete Request"]})})]}),s.status==="sent"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex w-full flex-grow items-center justify-center",children:e.jsxs("span",{className:" flex flex-col items-center text-green-500",children:[e.jsx(Y,{additionalClasses:"mr-2 h-8 w-8 mb-1"}),"Request Sent"]})}),e.jsxs(e.Fragment,{children:[f!=="sent"&&e.jsxs("button",{className:"flex w-full items-center justify-center border-t py-2 text-sm font-medium text-red-700 hover:bg-red-50/50 hover:text-red-500",onClick:()=>{i("sent")},children:[e.jsx(q,{className:"mr-1 h-4 w-4"}),"Withdraw Request"]}),f==="sent"&&e.jsxs("span",{className:"flex w-full items-center justify-center border-t py-2 text-sm text-red-700",children:["Are you sure?"," ",e.jsx("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{c(s.userId,"Friend request withdrawn").finally(()=>{x.set("")})},children:"Yes"})," ",e.jsx("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{i(void 0)},children:"No"})]})]})]}),s.status==="received"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex w-full flex-grow flex-col items-center justify-center px-4",children:[e.jsx(L,{additionalClasses:"mr-2 h-8 w-8 mb-1 text-green-500"}),e.jsx("span",{className:"mb-3 text-green-600",children:"Request Received"}),e.jsx("button",{onClick:()=>{v(s.userId,"Friend request accepted").finally(()=>{x.set("")})},className:"mb-1 block w-full max-w-[150px] rounded-md bg-black py-1.5 text-sm text-white",children:"Accept"}),e.jsx("button",{onClick:()=>{c(s.userId,"Friend request rejected").finally(()=>{x.set("")})},className:"block w-full max-w-[150px] rounded-md border border-red-500 py-1 text-sm text-red-500",children:"Reject"})]})})]},s.userId)})}function ne(m){const{onClose:s,befriendUrl:l}=m,{isCopied:r,copyText:a}=_(),f=o.useRef(null);return z(f,()=>{s()}),e.jsx("div",{className:"popup fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e.jsx("div",{className:"relative h-full w-full max-w-md p-4 md:h-auto",children:e.jsxs("div",{ref:f,className:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e.jsx("h3",{className:"mb-1.5 text-xl font-medium sm:text-2xl",children:"Invite URL"}),e.jsx("p",{className:"mb-3 hidden text-sm leading-none text-gray-400 sm:block",children:"Share the link below with your friends to invite them."}),e.jsxs("div",{className:"mt-4 flex flex-col gap-2 sm:mt-4",children:[e.jsx("input",{readOnly:!0,className:"mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:border-gray-400",value:l,onClick:c=>{c?.target?.select(),a(l)}}),e.jsxs("button",{className:`flex items-center justify-center gap-1 rounded-md border-0 px-3 py-2.5 text-sm text-black ${r?"bg-green-300 hover:bg-green-300":"bg-gray-200 hover:bg-gray-300"}`,onClick:()=>{a(l)},children:[e.jsx("img",{src:B.src,className:"h-4 w-4",alt:"Invite Friends"}),r?"Copied":"Copy URL"]})]})]})})})}function oe(m){const{resourceId:s,resourceType:l,userId:r,onClose:a,isCustomResource:f}=m,{s:i=r}=Z();if(!i)return null;const c=o.useRef(null),v=o.useRef(null),d=D(),[w,N]=o.useState(null),[n,y]=o.useState(!!i),[g,j]=o.useState(),[C,k]=o.useState(!0),[R,t]=o.useState("");async function p(u,h,U){const{error:F,response:b}=await $(`https://api.roadmap.sh/v1-get-user-progress/${u}?resourceType=${h}&resourceId=${U}`);if(F||!b)throw F||new Error("Something went wrong. Please try again!");return b}async function S(){const{error:u,response:h}=await $(`https://api.roadmap.sh/v1-get-roadmap/${s}`);if(u||!h)throw u||new Error("Something went wrong. Please try again!");return N(h),h}function P(){A("s"),t(""),y(!1),a?a():window.location.reload()}return Q("Escape",()=>{P()}),z(v,()=>{P()}),o.useEffect(()=>{!s||!l||!i||(k(!0),Promise.all([S(),p(i,l,s)]).then(([u,h])=>{h&&j(h)}).catch(u=>{t(u?.message||"Something went wrong. Please try again!")}).finally(()=>{k(!1)}))},[i]),d?.id===i?(A("s"),null):n?C||R?e.jsx(K,{isLoading:C,error:R||""}):e.jsx("div",{id:"user-progress-modal",className:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e.jsx("div",{className:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e.jsxs("div",{ref:v,className:"popup-body relative rounded-lg bg-white pt-[1px] shadow",children:[e.jsx(V,{isLoading:C,progressResponse:g}),e.jsx("div",{ref:c,className:"px-4 pb-2",children:e.jsx(ee,{variant:"modal",roadmap:w,className:"min-h-[400px]",onRendered:u=>{const{done:h=[],learning:U=[],skipped:F=[]}=g?.progress||{};h?.forEach(b=>{E(b,u?.current).forEach(I=>{I.classList.add("done")})}),U?.forEach(b=>{E(b,u?.current).forEach(I=>{I.classList.add("learning")})}),F?.forEach(b=>{E(b,u?.current).forEach(I=>{I.classList.add("skipped")})})},fontFamily:"Balsamiq Sans",fontURL:"/fonts/balsamiq.woff2"})}),e.jsxs("button",{type:"button",className:"absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-gray-100 bg-transparent p-1.5 text-sm text-gray-400 hover:text-gray-900 lg:hidden",onClick:P,children:[e.jsx("img",{alt:"close",src:X.src,className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]})})}):null}const M=[{label:"Active",value:"active",statuses:["accepted"]},{label:"Requests",value:"requests",statuses:["received","rejected"]},{label:"Sent",value:"sent",statuses:["sent","got_rejected"]}];function Ae(){const m=G(),[s,l]=o.useState(!1),[r,a]=o.useState(),[f,i]=o.useState(!0),[c,v]=o.useState([]),[d,w]=o.useState("active");async function N(){const{response:t,error:p}=await $("https://api.roadmap.sh/v1-list-friends");if(p||!t){m.error(p?.message||"Something went wrong");return}v(t)}o.useEffect(()=>{N().finally(()=>{x.set(""),i(!1)})},[]);const g=`https://roadmap.sh/befriend?u=${D()?.id}`,j=M.find(t=>t.value===d),C=c.filter(t=>j?.statuses.includes(t.status)),k=c.filter(t=>t.status==="received");if(f)return null;if(!c?.length)return e.jsx(te,{befriendUrl:g});const R=r&&r?.isCustomResource?e.jsx(oe,{userId:r?.friend.userId,resourceId:r.resourceId,resourceType:"roadmap",isCustomResource:!0,onClose:()=>a(void 0)}):e.jsx(J,{userId:r?.friend.userId,resourceId:r?.resourceId,resourceType:"roadmap",onClose:()=>a(void 0),isCustomResource:r?.isCustomResource});return e.jsxs("div",{children:[s&&e.jsx(ne,{befriendUrl:g,onClose:()=>l(!1)}),r&&R,e.jsxs("div",{className:"mb-4 flex flex-col items-stretch justify-between gap-2 sm:flex-row sm:items-center sm:gap-0",children:[e.jsx("div",{className:"flex items-center gap-2",children:M.map(t=>{let p=0;return t.value==="requests"&&(p=k.length),e.jsxs("button",{className:`relative flex items-center justify-center rounded-md border p-1 px-3 text-sm ${d===t.value?" border-gray-400 bg-gray-200 ":""} w-full sm:w-auto`,onClick:()=>w(t.value),children:[t.label,p>0&&e.jsx("span",{className:"ml-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white",children:p})]},t.value)})}),e.jsxs("button",{onClick:()=>{l(!0)},className:"flex items-center justify-center gap-1.5 rounded-md border border-gray-400 bg-gray-50 p-1 px-2 text-sm hover:border-gray-500 hover:bg-gray-100",children:[e.jsx(L,{additionalClasses:"w-4 h-4"}),"Invite Friends"]})]}),C.length>0&&e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:C.map(t=>e.jsx(re,{friend:t,onShowResourceProgress:(p,S)=>{a({resourceId:p,friend:t,isCustomResource:S})},onReload:()=>{x.set("Reloading friends .."),N().finally(()=>{x.set("")})}},t.userId))}),C.length===0&&e.jsxs("div",{className:"flex flex-col items-center justify-center py-12",children:[e.jsx("img",{src:H.src,alt:"Empty Friends",className:"mb-3 w-12 opacity-20"}),e.jsxs("h2",{className:"text-lg font-semibold",children:[d==="active"&&"No friends yet",d==="sent"&&"No requests sent",d==="requests"&&"No requests received"]}),e.jsx("p",{className:"text-sm text-gray-500",children:"Invite your friends to join you on Roadmap"}),e.jsxs("button",{onClick:()=>{l(!0)},className:"mt-4 flex items-center justify-center gap-1.5 rounded-md border border-gray-400 bg-gray-50 p-1 px-2 text-sm hover:border-gray-500 hover:bg-gray-100",children:[e.jsx(L,{additionalClasses:"w-4 h-4"}),"Invite Friends"]})]})]})}export{Ae as FriendsPage};
