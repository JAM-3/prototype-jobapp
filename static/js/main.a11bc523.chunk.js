(this["webpackJsonpgithub-jobs-react-project"]=this["webpackJsonpgithub-jobs-react-project"]||[]).push([[0],{154:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=t(13),m=t.n(o);const s="make-request",u="get-data",i="error",p="update-has-next-page",E="https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/search?keywords=software";function g(e,a){switch(a.type){case s:return{loading:!0,jobs:[]};case u:return{...e,loading:!1,jobs:a.payload.jobs};case i:return{...e,loading:!1,error:a.payload.error,jobs:[]};case p:return{...e,hasNextPage:a.payload.hasNextPage};default:return e}}var d=t(158),h=t(161),b=t(156),y=t(157),k=t(160),C=t(45),f=t.n(C);function v({job:e}){const[a,t]=Object(n.useState)(!1);return r.a.createElement(h.a,{className:"mb-3"},r.a.createElement(h.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(h.a.Title,null,e.jobTitle," - ",r.a.createElement("span",{className:"text-muted font-weight-light"},e.employerName)),r.a.createElement(h.a.Subtitle,{className:"text-muted mb-2"},new Date(e.date).toLocaleDateString()),r.a.createElement(b.a,{variant:"secondary"},e.locationName),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement("a",{href:e.jobUrl,target:"_blank",rel:"noopener noreferrer"},"Apply Here")))),r.a.createElement(h.a.Text,null,r.a.createElement(y.a,{onClick:()=>t(e=>!e),variant:"primary"},a?"Hide Details":"View Details")),r.a.createElement(k.a,{in:a},r.a.createElement("div",{className:"mt-4"},r.a.createElement(f.a,null,e.jobDescription)))))}var x=t(162);function j({page:e,setPage:a,hasNextPage:t}){function n(e){a(a=>a+e)}return r.a.createElement(x.a,null,1!==e&&r.a.createElement(x.a.Prev,{onClick:()=>n(-1)}),1!==e&&r.a.createElement(x.a.Item,{onClick:()=>a(1)},"1"),e>2&&r.a.createElement(x.a.Ellipsis,null),e>2&&r.a.createElement(x.a.Item,{onClick:()=>n(-1)},e-1),r.a.createElement(x.a.Item,{active:!0},e),t&&r.a.createElement(x.a.Item,{onClick:()=>n(1)},e+1),t&&r.a.createElement(x.a.Next,{onClick:()=>n(1)}))}var N=t(159),w=t(48);function P({params:e,onParamChange:a}){return r.a.createElement(N.a,{className:"mb-4"},r.a.createElement(N.a.Row,{className:"align-items-end"},r.a.createElement(N.a.Group,{as:w.a},r.a.createElement(N.a.Label,null,"Keywords"),r.a.createElement(N.a.Control,{type:"text",name:"keywords",value:e.keywords||"",onChange:a})),r.a.createElement(N.a.Group,{as:w.a},r.a.createElement(N.a.Label,null,"Location"),r.a.createElement(N.a.Control,{onChange:e=>a(e.target.name,e.target.value),value:e.locationName||"",name:"locationName",type:"text"})),r.a.createElement(N.a.Group,{as:w.a},r.a.createElement(N.a.Label,null,"Distance (miles)"),r.a.createElement(N.a.Control,{onChange:e=>a(e.target.name,e.target.value),value:e.distanceFromLocation||"",name:"distanceFromLocation",type:"number"}))),r.a.createElement(N.a.Row,null,r.a.createElement(N.a.Group,{as:w.a,xs:"auto"},r.a.createElement(N.a.Check,{onChange:e=>a(e.target.name,e.target.checked?"true":"false"),checked:"true"===e.permanent,name:"permanent",label:"Permanent",type:"checkbox"})),r.a.createElement(N.a.Group,{as:w.a,xs:"auto"},r.a.createElement(N.a.Check,{onChange:e=>a(e.target.name,e.target.checked?"true":"false"),checked:"true"===e.contract,name:"contract",label:"Contract",type:"checkbox"})),r.a.createElement(N.a.Group,{as:w.a},r.a.createElement(N.a.Label,null,"Min Salary"),r.a.createElement(N.a.Control,{onChange:e=>a(e.target.name,e.target.value),value:e.minimumSalary||"",name:"minimumSalary",type:"number"})),r.a.createElement(N.a.Group,{as:w.a},r.a.createElement(N.a.Label,null,"Max Salary"),r.a.createElement(N.a.Control,{onChange:e=>a(e.target.name,e.target.value),value:e.maximumSalary||"",name:"maximumSalary",type:"number"}))))}var S=function(){const[e,a]=Object(n.useState)({}),[t,l]=Object(n.useState)(1),{jobs:c,loading:o,error:h,hasNextPage:b}=function(e,a){const[t,r]=Object(n.useReducer)(g,{jobs:[],loading:!0});return Object(n.useEffect)(()=>{const t=m.a.CancelToken.source();r({type:s}),m.a.get(E,{cancelToken:t.token,params:{...e,resultsToTake:50,resultsToSkip:50*a},headers:{Authorization:"Basic ".concat(btoa("14ced952-950e-403c-b5d4-c69fa6fe3511:"))}}).then(e=>{r({type:u,payload:{jobs:e.data.results}})}).catch(e=>{m.a.isCancel(e)||r({type:i,payload:{error:e}})});return m.a.get(E,{cancelToken:t.token,params:{...e,resultsToTake:50,resultsToSkip:50*(a+1)},headers:{Authorization:"Bearer your_api_key"}}).then(e=>{var t;r({type:p,payload:{hasNextPage:(t=e.data,t.totalResults>50*(a+1))}})}).catch(e=>{m.a.isCancel(e)}),()=>{t.cancel()}},[e,a]),t}(e,t);return r.a.createElement(d.a,{className:"my-4"},r.a.createElement("h1",{className:"mb-4"},"Reed Jobs"),r.a.createElement(P,{params:e,onParamChange:function(e){const t=e.target.name,n="checkbox"===e.target.type?e.target.checked:e.target.value;l(1),a(e=>({...e,[t]:n}))}}),r.a.createElement(j,{page:t,setPage:l,hasNextPage:b}),o&&r.a.createElement("h1",null,"Loading..."),h&&r.a.createElement("h1",null,"Error. Try Refreshing."),c.map(e=>r.a.createElement(v,{key:e.jobId,job:e})),r.a.createElement(j,{page:t,setPage:l,hasNextPage:b}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))},49:function(e,a,t){e.exports=t(154)}},[[49,1,2]]]);
//# sourceMappingURL=main.a11bc523.chunk.js.map