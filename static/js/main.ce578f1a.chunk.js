(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c.n(o),r=c(10),i=c.n(r),j=c(7),s=c(4),b=c(12),a=c(16),l=c.n(a),O=c(17),d="bookStore/books/ADD_BOOK",u="bookStore/books/REMOVE_BOOK",h=[],x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return[].concat(Object(O.a)(e),[t.payload]);case u:return e.filter((function(e){return e.id!==t.payload}));default:return e}},p=Object(b.b)({booksReducer:x}),k=Object(b.c)(p,Object(b.a)(l.a)),m=c(2),f=c(11),v=c(8),y=c(5),g=c(33),C=c(1),B=function(){var e=Object(o.useState)({booktitle:"",category:""}),t=Object(y.a)(e,2),c=t[0],n=t[1],r=Object(s.b)(),i=function(e){e.preventDefault();var t=Object(g.a)(),o=c.booktitle,n=c.category;r({type:d,payload:{booktitle:o,id:t,category:n}})},j=function(e){n(Object(v.a)(Object(v.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(C.jsxs)("form",{className:"add-book-section",onSubmit:i,children:[Object(C.jsx)("h1",{children:"ADD NEW BOOK"}),Object(C.jsx)("input",{type:"text",placeholder:"Book title",name:"booktitle",onChange:j,required:!0}),Object(C.jsxs)("select",{placeholder:"categories",name:"category",onChange:j,required:!0,children:[Object(C.jsx)("option",{children:"Category"}),Object(C.jsx)("option",{value:"Romance",children:"Romance"}),Object(C.jsx)("option",{value:"Documentary",children:"Documentary"}),Object(C.jsx)("option",{value:"Fiction",children:"Fiction"}),Object(C.jsx)("option",{value:"Crime",children:"Crime"})]}),Object(C.jsx)("button",{type:"submit",onClick:i,children:"Add Book"})]})},S=function(e){var t=e.book,c=t.booktitle,o=t.id,n=t.category,r=Object(s.b)();return Object(C.jsxs)("li",{children:[Object(C.jsxs)("p",{children:["Book:"," ",c]}),Object(C.jsxs)("p",{children:["Category:"," ",n]}),Object(C.jsx)("button",{type:"button",onClick:function(){return r({type:u,payload:o})},children:"Remove"})]},o)},D=function(e){var t=e.bookList;return Object(C.jsx)("ul",{className:"books-list-section",children:t.map((function(e){return Object(C.jsx)(S,{book:e},e.id)}))})},R=function(){var e=Object(s.c)((function(e){return e.booksReducer}));return Object(C.jsxs)("div",{className:"books",children:[Object(C.jsx)(D,{bookList:e}),Object(C.jsx)(B,{})]})},E=function(){return Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:"Under construction!!"})})},N=function(){return Object(C.jsxs)("nav",{className:"navigation",children:[Object(C.jsx)("h1",{children:"Bookstore CMS"}),Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)(j.b,{to:"/",children:"BOOKS"})}),Object(C.jsx)("li",{children:Object(C.jsx)(j.b,{to:"/categories",children:"CATEGORIES"})})]})]})},A=(c(30),function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(N,{}),Object(C.jsxs)(m.c,{children:[Object(C.jsx)(m.a,{exact:!0,path:"/",element:Object(C.jsx)(R,{})}),Object(C.jsx)(m.a,{path:"/categories",element:Object(C.jsx)(E,{})})]})]})});i.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(j.a,{children:Object(C.jsx)(s.a,{store:k,children:Object(C.jsx)(A,{})})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ce578f1a.chunk.js.map