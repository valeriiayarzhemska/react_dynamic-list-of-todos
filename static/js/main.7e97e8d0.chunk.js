(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a,s=c(9),n=c.n(s),r=c(4),l=c(2),i=c(3),o=c.n(i),d=c(1),j=c.n(d),u=(c(16),c(17),c(7)),b=c.n(u),h=c(0),O=function(e){var t=e.todos,c=e.selectedTodo,a=e.onSelect;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed,r=(null===c||void 0===c?void 0:c.id)===t;return Object(h.jsxs)("tr",{"data-cy":"todo",className:b()({"has-background-info-light":r}),children:[Object(h.jsx)("td",{className:"is-vcentered",children:t}),Object(h.jsx)("td",{className:"is-vcentered",children:n&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-danger":!n,"has-text-success":n}),children:s})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:b()("far",{"fa-eye":!r,"fa-eye-slash":r})})})})})]},t)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(a||(a={}));var m=j.a.memo((function(e){var t=e.query,c=e.onQueryChange,s=e.filterType,n=e.onFilterChange;return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsx)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){n(e.target.value)},children:Object.values(a).map((function(e){return Object(h.jsx)("option",{value:e,children:e.slice(0,1).toUpperCase()+e.slice(1)},e)}))})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"aria-label":"clear","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})})),x=(c(19),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),f=j.a.memo((function(){return Object(h.jsx)("div",{style:{color:"red"},children:"Sorry, something went wrong :C"})}));function p(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then(Object(r.a)(o.a.mark((function e(){var t,a,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c);case 2:if(t=e.sent,a=t.ok,s=t.status,n=t.statusText,a){e.next=6;break}throw new Error("".concat(s," - ").concat(n));case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)}))))}var v=function(e){return p("/users/".concat(e))},N=function(e){var t=e.selectedTodo,c=e.onClose,a=t.id,s=t.title,n=t.userId,i=t.completed,j=Object(d.useState)(null),u=Object(l.a)(j,2),b=u[0],O=u[1],m=Object(d.useState)(!1),p=Object(l.a)(m,2),N=p[0],y=p[1],g=Object(d.useState)(!1),k=Object(l.a)(g,2),C=k[0],w=k[1];return Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,v(n);case 4:t=e.sent,O(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(!0);case 11:y(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),N?Object(h.jsx)(x,{}):Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(h.jsx)("button",{"aria-label":"close",type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),b&&Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[i?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(b.email),children:b.name})]})]})]}),C&&Object(h.jsx)(f,{})]})},y=c(10),g=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(d.useState)(!1),i=Object(l.a)(n,2),j=i[0],u=i[1],b=Object(d.useState)(!1),v=Object(l.a)(b,2),g=v[0],k=v[1],C=Object(d.useState)(a.ALL),w=Object(l.a)(C,2),S=w[0],T=w[1],E=Object(d.useState)(""),L=Object(l.a)(E,2),I=L[0],_=L[1],A=Object(d.useState)(null),F=Object(l.a)(A,2),P=F[0],B=F[1],D=Object(d.useMemo)((function(){return function(e,t,c){return Object(y.a)(e).filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})).filter((function(e){switch(t){case a.ACTIVE:return!e.completed;case a.COMPLETED:return e.completed;default:return e}}))}(c,S,I)}),[c,S,I]);Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,p("/todos");case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),k(!0);case 11:u(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var M=Object(d.useCallback)((function(e){B(e)}),[P]),q=Object(d.useCallback)((function(){B(null)}),[P]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(m,{query:I,onQueryChange:_,filterType:S,onFilterChange:T})}),Object(h.jsx)("div",{className:"block",children:j?Object(h.jsx)(x,{}):Object(h.jsxs)(h.Fragment,{children:[g&&Object(h.jsx)(f,{}),Object(h.jsx)(O,{todos:D,selectedTodo:P,onSelect:M})]})})]})})}),P&&Object(h.jsx)(N,{selectedTodo:P,onClose:q})]})};n.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7e97e8d0.chunk.js.map