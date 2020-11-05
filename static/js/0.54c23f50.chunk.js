(this["webpackJsonphiha-store-ts"]=this["webpackJsonphiha-store-ts"]||[]).push([[0],{134:function(e,a,t){"use strict";t.r(a),t.d(a,"UserInfo",(function(){return m})),t.d(a,"SignIn",(function(){return h})),t.d(a,"SignUp",(function(){return E})),t.d(a,"Contact",(function(){return v}));var n=t(0),l=t.n(n),r=t(32),s=t(31),c=t(65);var m=function(){var e=Object(r.b)(),a=Object(s.g)(),t=Object(s.f)(),n=Object(s.a)(),m=Object(s.d)(),i=Object(s.b)();return l.a.createElement("div",{className:"c-user-info"},l.a.createElement("h1",{className:"m-t-b-0 m-b-24"},"User Information"),l.a.createElement("p",{className:"bold"},"Your information"),l.a.createElement("ul",null,l.a.createElement("li",{className:"m-l-24"},"Display name: ",l.a.createElement("span",null,e.displayName)),l.a.createElement("li",{className:"m-l-24"},"Email: ",l.a.createElement("span",null,e.email)),l.a.createElement("li",{className:"m-l-24"},"Created at: ",l.a.createElement("span",null,e.createdAt))),l.a.createElement("p",{className:"m-t-24 bold"},"Your cart"),l.a.createElement(c.f,{items:a,total:t,addItem:n,removeItem:m,clearItems:i}),l.a.createElement(c.e,{total:t}))},i=t(64),o=t(23),u=t(48),d=t(21),b=t(15);var p=function(e){var a=e.value,t=void 0===a?"":a,n=e.name,r=void 0===n?"":n,s=e.label,c=void 0===s?"":s,m=e.type,i=e.required,o=void 0!==i&&i,u=e.autoFocus,d=void 0!==u&&u,b=e.classes,p=void 0===b?"":b,h=e.handleChange;return l.a.createElement("div",{className:"c-text-field ".concat(p)},l.a.createElement("input",{id:"c-text-field-".concat(r),value:t,name:r,className:"c-text-field__input",onChange:h,type:m,required:o,autoFocus:d}),c?l.a.createElement("label",{htmlFor:"c-text-field-".concat(r),className:"".concat(t.length?"is-shrink":""," c-text-field__label")},c):null)};var h=function(){var e=Object(n.useState)({email:"",password:""}),a=Object(u.a)(e,2),t=a[0],s=a[1],c=t.email,m=t.password,h=Object(r.e)(),E=Object(r.c)(),v=Object(r.f)(),f=Object(r.d)(),g=function(e){var a=e.target,n=a.name,l=a.value;s(Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},n,l)))};return l.a.createElement("div",{className:"c-sign-in m-t-b-0"},l.a.createElement("h1",{className:"m-t-b-0 m-b-24"},"Sign In"),l.a.createElement("span",null,"Sign in with your email and password."),l.a.createElement("span",{className:"m-b-18"},"No account?"," ",l.a.createElement(d.a,{to:"/sign-up",className:"bold"},"Create here.")),l.a.createElement("form",{className:"c-sign-in__form",onSubmit:function(e){e.preventDefault(),f({email:c,password:m})}},l.a.createElement(p,{type:"email",name:"email",label:"Email",value:c,required:!0,autoFocus:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(p,{type:"password",name:"password",label:"Password",value:m,required:!0,classes:"m-b-30",handleChange:g}),l.a.createElement("div",{className:"c-sign-in__form__group-button"},l.a.createElement(b.a,{type:"submit"},E?l.a.createElement(b.h,{width:"30px",height:"30px",isInverted:!0}):"Sign in"),l.a.createElement(b.a,{classes:"google-sign-in-button",onClick:v},h?l.a.createElement(b.h,{width:"30px",height:"30px"}):"Continue with Google"))),l.a.createElement("div",null))};var E=function(){var e=Object(n.useState)({displayName:"",email:"",password:"",confirmPassword:""}),a=Object(u.a)(e,2),t=a[0],s=a[1],c=t.displayName,m=t.email,h=t.password,E=t.confirmPassword,v=Object(r.h)(),f=Object(r.i)(),g=function(e){var a=e.target,n=a.name,l=a.value;s(Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},n,l)))};return l.a.createElement("div",{className:"c-sign-up m-t-b-0"},l.a.createElement("h1",{className:"m-t-b-0 m-b-24"},"Sign Up"),l.a.createElement("span",null,"Sign up with your email, name and password."),l.a.createElement("span",{className:"m-b-24"},"Already have account?"," ",l.a.createElement(d.a,{to:"/sign-in",className:"bold"},"Sign in here.")),l.a.createElement("form",{className:"c-sign-up__form",onSubmit:function(){h.length<6?alert("Password should be at least 6 characters"):h===E?f({email:m,password:h,displayName:c}):alert("Password don't match")}},l.a.createElement(p,{type:"text",name:"displayName",label:"Display Name",value:c,required:!0,autoFocus:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(p,{type:"email",name:"email",label:"Email",value:m,required:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(p,{type:"password",name:"password",label:"Password",value:h,required:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(p,{type:"password",name:"confirmPassword",label:"Confirm Password",value:E,required:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(b.a,{type:"submit",classes:"sign-up-button"},v?l.a.createElement(b.h,{width:"30px",height:"30px",isInverted:!0}):"Sign up")),l.a.createElement("div",null))};var v=function(){return l.a.createElement("div",{className:"c-contact"},l.a.createElement("h1",{className:"m-t-b-0 m-b-24"},"Contact information"),l.a.createElement("p",{className:"bold"},"Contact with me via:"),l.a.createElement("ul",null,l.a.createElement("li",{className:"m-l-24"},"LinkedIn:"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/nvdai2401/",target:"_blank",rel:"noopener noreferrer"},"https://www.linkedin.com/in/nvdai2401/")),l.a.createElement("li",{className:"m-l-24"},"Github:"," ",l.a.createElement("a",{href:"https://github.com/nvdai2401",target:"_blank",rel:"noopener noreferrer"},"https://github.com/nvdai2401")),l.a.createElement("li",{className:"m-l-24"},"Stackoverflow:"," ",l.a.createElement("a",{href:"https://stackoverflow.com/users/9548285/michael",target:"_blank",rel:"noopener noreferrer"},"https://stackoverflow.com/users/9548285"))))}}}]);
//# sourceMappingURL=0.54c23f50.chunk.js.map