import{r as s,a as u,l as h,u as p,j as e,L as g}from"./index-40141cf2.js";import{a as m,k as x,Q as f}from"./ReactToastify-2a9c7b1c.js";const v=()=>{let[o,r]=s.useState(null),a=u(h),i=p(),[l,d]=s.useState();//! toast step: 2
const n=()=>f.success(l,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});return s.useEffect(()=>{a.state||i("/login")},[a]),s.useEffect(()=>{m({method:"get",url:"http://localhost:5000/api_cohort10/blog",headers:{"Content-Type":"application/json",Accept:"*/*",jwt:a.data.token}}).then(t=>{t.data.status&&r(t.data.data),t.data.err&&(d(t.data.err),setTimeout(()=>{n()},10))}).catch(t=>{console.log(t.message)})},[]),e.jsxs("div",{id:"Blogs",children:[e.jsx("h1",{children:"Latest Blogs"}),o&&o.sort((t,c)=>t.updatedAt-c.updatedAt).map(t=>e.jsxs(g,{to:`/details/${t._id}`,className:"blog",children:[e.jsxs("h3",{children:[" ",t.title," "]}),e.jsxs("p",{children:[" ",String(t.content).slice(0,100),"... "]}),e.jsxs("div",{className:"info",children:[e.jsxs("span",{className:"author",children:["Author: ",t.author," "]}),e.jsxs("span",{className:"date",children:["Last Updated: ",t.date," "]})]})]},t._id)),e.jsx(x,{})]})};export{v as default};