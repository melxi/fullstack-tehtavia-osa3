(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(40)},21:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(13),u=t.n(r),o=(t(21),t(14)),l=t(2),i=t(3),m=t.n(i),f="/api/persons",s=function(){return m.a.get(f).then(function(e){return e.data})},d=function(e){return m.a.post(f,e).then(function(e){return e.data})},h=function(e){return m.a.delete("".concat(f,"/").concat(e),e)},b=function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},E=function(e){var n=e.searchName,t=e.handleSearch;return c.a.createElement("div",null,"filter shown with ",c.a.createElement("input",{onChange:t,value:n}))},v=function(e){var n=e.handleSubmit,t=e.newName,a=e.handleNameChange,r=e.newNumber,u=e.handleNumberChange;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"name: ",c.a.createElement("input",{onChange:a,value:t})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{onChange:u,value:r})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add"))))},p=function(e){var n=e.persons,t=e.searchName,a=e.handleDelete,r=n.filter(function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>=0});return c.a.createElement("div",null,c.a.createElement("div",null,r.map(function(e,n){return c.a.createElement("p",{key:n},e.name," ",e.number,c.a.createElement("button",{onClick:function(){a(e.id)}},"delete"))})))},w=function(e){var n=e.message;return null===n?null:c.a.createElement("div",{className:n.success?"notification":"error"},n.message)},g=(t(39),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),m=i[0],f=i[1],g=Object(a.useState)(""),N=Object(l.a)(g,2),O=N[0],j=N[1],C=Object(a.useState)(""),S=Object(l.a)(C,2),k=S[0],y=S[1],D=Object(a.useState)(null),T=Object(l.a)(D,2),x=T[0],A=T[1];Object(a.useEffect)(function(){s().then(function(e){return r(e)})},[]);return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(w,{message:x}),c.a.createElement(E,{handleSearch:function(e){y(e.target.value)}}),c.a.createElement("h3",null,"Add a new"),c.a.createElement(v,{handleSubmit:function(e){e.preventDefault(),1===t.filter(function(e){return e.name===m}).length?t.forEach(function(e){if(e.name===m){var n=e.id;window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a nwe one?"))&&b(n,Object(o.a)({},e,{number:O})).then(function(e){r(t.map(function(t){return t.id!==n?t:e})),A("Replaced number for ".concat(e.name)),setTimeout(function(){A(null)},3e3)}).catch(function(e){A({message:"Information of ".concat(t[n-1].name," has already been removed from server"),success:!1}),setTimeout(function(){A(null),r(t.filter(function(e){return e.id!==n}))},3e3)})}}):d({name:m,number:O}).then(function(e){r(t.concat(e)),A({message:"Added ".concat(e.name),success:!0}),setTimeout(function(){A(null)},3e3)}),f(""),j("")},newName:m,handleNameChange:function(e){f(e.target.value)},newNumber:O,handleNumberChange:function(e){j(e.target.value)}}),c.a.createElement("h3",null,"Numbers"),c.a.createElement(p,{persons:t,searchName:k,handleDelete:function(e){var n=t.find(function(n){return n.id===e});window.confirm("Delete ".concat(n.name,"?"))&&h(e).then(function(){r(t.filter(function(n){return n.id!==e})),A({message:"Deleted ".concat(n.name),success:!0}),setTimeout(function(){A(null)},3e3)})}}))});u.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f21fecc0.chunk.js.map