"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_2=self.webpackChunkgoit_react_hw_08_phonebook_2||[]).push([[294],{8294:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(2791),a=t(4420),o=t(3553),i=function(e){return e.contacts.items},c=function(e){return e.filter},u=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},s=(0,o.P1)([i,c],(function(e,n){var t=n.toLowerCase();return Array.isArray(e)?e.filter((function(e){return e.name.toLowerCase().includes(t)})):[]})),m=t(7966),d=t(4942),h=t(1413),f=t(9439),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},b="ContactForm_buttonAdd__Mr+ls",_="ContactForm_label__-cVXI",v=t(184),x=function(){var e=(0,r.useState)({name:"",number:""}),n=(0,f.Z)(e,2),t=n[0],o=n[1],c=p(),u=p(),l=(0,a.v9)(i),s=(0,a.I0)(),x=function(e){var n=e.target,t=n.name,r=n.value;o((function(e){return(0,h.Z)((0,h.Z)({},e),{},(0,d.Z)({},t,r))}))},j=function(){o({number:"",name:""})};return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()&&e.number===t.number}))?alert("This contact ".concat(t.name,": ").concat(t.number," is already in the book")):(s((0,m.el)({id:p(),name:t.name,number:t.number})),j())},children:[(0,v.jsxs)("label",{htmlFor:c,className:_,children:["Name",(0,v.jsx)("input",{type:"text",name:"name",value:t.name,onChange:x,placeholder:"Enter a contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"name",autoComplete:"on",required:!0})]}),(0,v.jsxs)("label",{htmlFor:u,className:_,children:["Number",(0,v.jsx)("input",{type:"tel",name:"number",value:t.number,onChange:x,placeholder:"Enter number phone",pattern:"[0-9\\+\\-]*",title:"+************",autoComplete:"on",required:!0})]}),(0,v.jsx)("button",{className:b,type:"submit",children:"Add contact"})]})},j="ContactList_list__csErn",C=function(){var e=(0,a.v9)(s),n=(0,a.I0)();return(0,v.jsx)("ul",{className:j,children:e.map((function(e){return(0,v.jsxs)("li",{children:[e.name+" : "+e.number,(0,v.jsx)("button",{type:"button",name:"delete",onClick:function(){return function(e){var t=(0,m._f)(e);n(t)}(e.id)},children:"delete"})]},e.id)}))})},y=t(5653),g={filter:"Filter_filter__vxThR",inputFilter:"Filter_inputFilter__8QMOp"},F=function(){var e=(0,a.v9)(c),n=(0,a.I0)();return(0,v.jsx)("div",{className:g.filter,children:(0,v.jsxs)("label",{className:g.labelFilter,children:["Find contacts by name",(0,v.jsx)("input",{className:g.inputFilter,type:"text",value:e,onChange:function(e){var t=e.target;return n((0,y.T)(t.value))},placeholder:"Search"})]})})},N="PhoneBook_container__qH1yN",k=t(4393),w=function(){var e=(0,a.v9)(i),n=(0,a.v9)(u),t=(0,a.v9)(l),o=(0,a.I0)();return(0,r.useEffect)((function(){o((0,m.yF)())}),[o]),(0,v.jsxs)("div",{className:N,children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(x,{}),(0,v.jsx)("h2",{children:"Contacts"}),e&&e.length>0?(0,v.jsx)(F,{}):(0,v.jsx)("div",{className:"style.wrapper",children:"Your phonebook is empty. Add first contact!"}),n&&(0,v.jsx)(k.Z,{}),t&&(0,v.jsx)("p",{children:t}),e&&e.length>0&&(0,v.jsx)(C,{})]})},A=function(){return(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Your contacts"}),(0,v.jsx)(w,{})]})}}}]);
//# sourceMappingURL=294.231332b9.chunk.js.map