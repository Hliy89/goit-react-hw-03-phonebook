(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={phonebook:"Phonebook_phonebook__JcvIU",contactsTitle:"Phonebook_contactsTitle__33SQd"}},12:function(t,e,n){t.exports={contactText:"Filter_contactText__3g0vL",findInput:"Filter_findInput__9-weO"}},15:function(t,e,n){t.exports={App:"App_App__9QruW"}},2:function(t,e,n){t.exports={form:"Form_form__5VOC1",label:"Form_label__1K6Ou",formInput:"Form_formInput__31PYl",btn:"Form_btn__Uabxu"}},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(14),o=n.n(r),s=(n(21),n(15)),i=n.n(s),l=n(13),u=n(5),m=n(6),b=n(8),h=n(7),p=n(16),d=n(3),j=n.n(d),f=n(2),O=n.n(f),x=n(0),_=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmitForm=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;(0,t.props.onSubmit)(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmitForm,children:[Object(x.jsxs)("label",{className:O.a.label,htmlFor:this.nameInputId,children:["Name",Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:O.a.formInput,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"enter name",onChange:this.handleChange,id:this.nameInputId,required:!0})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("label",{className:O.a.label,htmlFor:this.numberInputId,children:["Number",Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:O.a.formInput,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"enter number",onChange:this.handleChange,id:this.numberInputId,required:!0})]}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{type:"submit",className:O.a.btn,children:"Add contact"})]})}}]),n}(a.Component);_.defaultProps={name:"",number:""};var v=_,g=n(9),I=n.n(g),C=function(t){var e=t.contacts,n=t.filter,a=t.onDelete,c=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){var e=t.name,n=t.number,c=t.id;return Object(x.jsxs)("li",{className:I.a.contactListItem,children:[e,": ",n,Object(x.jsx)("span",{onClick:function(){return a(e)},className:I.a.closeButton})]},c)}));return Object(x.jsx)("ul",{className:I.a.contactList,children:c})},N=n(12),F=n.n(N),S=function(t){var e=t.filter,n=t.changeFilter;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{className:F.a.contactText,children:"Find contacts by name"}),Object(x.jsx)("input",{className:F.a.findInput,onChange:n,type:"text",value:e})]})},y=n(10),k=n.n(y),L=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a={id:j.a.generate(),name:e,number:n},c=t.state.contacts;if(c.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in contacts"));else{var r=Object(l.a)(c);r.push(a),t.setState({contacts:r})}},t.onDelete=function(e){t.setState((function(t){var n=t.contacts,a=Object(l.a)(n),c=a.map((function(t){return t.name})).indexOf(e);return c>-1&&a.splice(c,1),{contacts:a}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t||[]})}},{key:"componentDidUpdate",value:function(){var t=this.state.contacts,e=JSON.stringify(t);localStorage.setItem("contacts",e)}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:k.a.phonebook,children:[Object(x.jsx)("h1",{className:k.a.title,children:"Phonebook"}),Object(x.jsx)(v,{onSubmit:this.addContact}),Object(x.jsx)("h2",{className:k.a.contactsTitle,children:"Contacts"}),Object(x.jsx)(S,{filter:n,changeFilter:this.changeFilter}),Object(x.jsx)(C,{contacts:e,filter:n,onDelete:this.onDelete})]})})}}]),n}(a.Component);L.defaultProps={contacts:[],filter:""};var w=L;var A=function(){return Object(x.jsx)("div",{className:i.a.App,children:Object(x.jsx)(w,{})})};o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__2tVO5",contactListItem:"ContactList_contactListItem__2Prul",closeButton:"ContactList_closeButton__3z0R4"}}},[[31,1,2]]]);
//# sourceMappingURL=main.5ce793c5.chunk.js.map