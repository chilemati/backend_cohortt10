import{r as s,b as N,l as S,u as b,j as e,L as C}from"./index-40141cf2.js";import{k as w,a as y,Q as F}from"./ReactToastify-2a9c7b1c.js";const E=()=>{let[n,p]=s.useState(""),[r,u]=s.useState(""),[i,h]=s.useState(""),[d,x]=s.useState(""),[g,o]=s.useState("male");s.useState({state:!1,err:""}),N(S);let j=b(),[f,m]=s.useState();//! toast step: 2
const c=()=>F.error(f,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});function v(a){a.preventDefault();let l=new FormData;l.append("email",n),l.append("password",r),l.append("firstName",i),l.append("lastName",d),l.append("gender",g),y({method:"post",url:"http://localhost:5000/api_cohort10/signup",data:l,headers:{"Content-Type":"application/json",Accept:"*/*"}}).then(t=>{console.log(t.data),t.data.status&&j("/login"),t.data.err&&(m(t.data.err),setTimeout(()=>{c()},10)),t.data.email&&(m(t.data.email),setTimeout(()=>{c()},10))}).catch(t=>{console.log(t.message)})}return e.jsxs("div",{id:"Signup",children:[e.jsx("h2",{children:"Create an Account"}),e.jsxs("form",{onSubmit:a=>v(a),encType:"multipart/form-data",children:[e.jsxs("fieldset",{children:[e.jsxs("label",{htmlFor:"email",children:["Email",e.jsx("span",{children:"*"})," "]}),e.jsx("input",{placeholder:"example@gmail.com",type:"email",name:"email",id:"email",value:n,onChange:a=>p(a.target.value)})]}),e.jsxs("fieldset",{children:[e.jsxs("label",{htmlFor:"password",children:["Password",e.jsx("span",{children:"*"})," "]}),e.jsx("input",{placeholder:"minimun of 8 characters",type:"password",name:"password",id:"password",minLength:8,value:r,onChange:a=>u(a.target.value)})]}),e.jsxs("fieldset",{children:[e.jsxs("label",{htmlFor:"firstName",children:["FirstName",e.jsx("span",{children:"*"})," "]}),e.jsx("input",{placeholder:"John",type:"text",name:"firstName",id:"firstName",value:i,onChange:a=>h(a.target.value),required:!0})]}),e.jsxs("fieldset",{children:[e.jsxs("label",{htmlFor:"lastName",children:["LastName",e.jsx("span",{children:"*"})," "]}),e.jsx("input",{placeholder:"Doe",type:"text",name:"lastName",id:"lastName",value:d,onChange:a=>x(a.target.value),required:!0})]}),e.jsxs("fieldset",{children:[e.jsxs("label",{htmlFor:"gender",children:["Gender",e.jsx("span",{children:"*"})," "]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Male"}),e.jsx("input",{type:"radio",name:"gender",id:"male",value:"male",checked:!0,onChange:a=>o(a.target.value)}),e.jsx("span",{children:"Female"}),e.jsx("input",{type:"radio",name:"gender",id:"female",value:"female",onChange:a=>o(a.target.value)})]})]}),e.jsxs("div",{className:"btns",children:[e.jsx("button",{children:"Signup"}),e.jsxs("span",{children:["Have an Account? ",e.jsx(C,{to:"/login",children:"Login"})," "]})]})]}),e.jsx(w,{})]})};export{E as default};