"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_2=self.webpackChunkgoit_react_hw_08_phonebook_2||[]).push([[294],{8294:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(2791),a=t(4420),o=t(3553),c=function(e){return e.contacts.items},s=function(e){return e.filter},i=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},l=(0,o.P1)([c,s],(function(e,n){var t=n.toLowerCase();return Array.isArray(e)?e.filter((function(e){return e.name.toLowerCase().includes(t)})):[]})),d=t(7966),m=t(4942),h=t(1413),f=t(9439),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},b="ContactForm_buttonAdd__Mr+ls",v=t(184),x=function(){var e=(0,r.useState)({name:"",number:""}),n=(0,f.Z)(e,2),t=n[0],o=n[1],s=p(),i=p(),u=(0,a.v9)(c),l=(0,a.I0)(),x=function(e){var n=e.target,t=n.name,r=n.value;o((function(e){return(0,h.Z)((0,h.Z)({},e),{},(0,m.Z)({},t,r))}))},j=function(){o({number:"",name:""})};return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()&&e.number===t.number}))?alert("This contact ".concat(t.name,": ").concat(t.number," is already in the book")):(l((0,d.el)({id:p(),name:t.name,number:t.number})),j())},children:[(0,v.jsxs)("label",{htmlFor:s,children:["Name",(0,v.jsx)("input",{type:"text",name:"name",value:t.name,onChange:x,placeholder:"Enter a contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",autoComplete:"on",required:!0})]}),(0,v.jsxs)("label",{htmlFor:i,children:["Number",(0,v.jsx)("input",{type:"tel",name:"number",value:t.number,onChange:x,placeholder:"Enter a contact number",pattern:"[0-9\\+\\-]*",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",autoComplete:"on",required:!0})]}),(0,v.jsx)("button",{className:b,type:"submit",children:"Add contact"})]})},j="ContactList_list__csErn",_=function(){var e=(0,a.v9)(l),n=(0,a.I0)();return(0,v.jsx)("ul",{className:j,children:e.map((function(e){return(0,v.jsxs)("li",{children:[e.name+" : "+e.number,(0,v.jsx)("button",{type:"button",name:"delete",onClick:function(){return function(e){var t=(0,d._f)(e);n(t)}(e.id)},children:"delete"})]},e.id)}))})},C=t(5653),y="Filter_filter__vxThR",g=function(){var e=(0,a.v9)(s),n=(0,a.I0)();return(0,v.jsx)("div",{className:y,children:(0,v.jsxs)("label",{children:["Find contacts by name",(0,v.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.target;return n((0,C.T)(t.value))},placeholder:"Search"})]})})},k="PhoneBook_container__qH1yN",w=t(4393),A=function(){var e=(0,a.v9)(c),n=(0,a.v9)(i),t=(0,a.v9)(u),o=(0,a.I0)();return(0,r.useEffect)((function(){o((0,d.yF)())}),[o]),(0,v.jsxs)("div",{className:k,children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(x,{}),(0,v.jsx)("h2",{children:"Contacts"}),e&&e.length>0?(0,v.jsx)(g,{}):(0,v.jsx)("div",{className:"style.wrapper",children:"Your phonebook is empty. Add first contact!"}),n&&(0,v.jsx)(w.Z,{}),t&&(0,v.jsx)("p",{children:t}),e&&e.length>0&&(0,v.jsx)(_,{})]})},N=function(){return(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Your contacts"}),(0,v.jsx)(A,{})]})}}}]);
//# sourceMappingURL=294.461da63d.chunk.js.map