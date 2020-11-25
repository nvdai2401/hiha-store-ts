(this["webpackJsonphiha-store-ts"]=this["webpackJsonphiha-store-ts"]||[]).push([[0],{136:function(e,a,t){"use strict";t.r(a),t.d(a,"UserInfo",(function(){return m})),t.d(a,"SignIn",(function(){return h})),t.d(a,"SignUp",(function(){return E})),t.d(a,"Contact",(function(){return f}));var n=t(0),l=t.n(n),s=t(32),r=t(33),c=t(67),m=function(){var e=Object(s.b)(),a=Object(r.g)(),t=Object(r.f)(),n=Object(r.a)(),m=Object(r.d)(),i=Object(r.b)();return l.a.createElement("div",{className:"c-user-info"},l.a.createElement("h1",{className:"m-t-b-0 m-b-24"},"User Information"),l.a.createElement("p",{className:"bold"},"Your information"),l.a.createElement("ul",null,l.a.createElement("li",{className:"m-l-24"},"Display name: ",l.a.createElement("span",null,e.displayName)),l.a.createElement("li",{className:"m-l-24"},"Email: ",l.a.createElement("span",null,e.email)),l.a.createElement("li",{className:"m-l-24"},"Created at: ",l.a.createElement("span",null,e.createdAt))),l.a.createElement("p",{className:"m-t-24 bold"},"Your cart"),l.a.createElement(c.f,{items:a,total:t,addItem:n,removeItem:m,clearItems:i}),l.a.createElement(c.e,{total:t}))},i=t(66),o=t(19),u=t(50),d=t(24),b=t(16),p=function(e){var a=e.value,t=void 0===a?"":a,n=e.name,s=void 0===n?"":n,r=e.label,c=void 0===r?"":r,m=e.type,i=e.required,o=void 0!==i&&i,u=e.autoFocus,d=void 0!==u&&u,b=e.classes,p=void 0===b?"":b,h=e.handleChange;return l.a.createElement("div",{className:"c-text-field ".concat(p)},l.a.createElement("input",{id:"c-text-field-".concat(s),value:t,name:s,className:"c-text-field__input",onChange:h,type:m,required:o,autoFocus:d}),c?l.a.createElement("label",{htmlFor:"c-text-field-".concat(s),className:"".concat(t.length?"is-shrink":""," c-text-field__label")},c):null)},h=function(){var e=Object(n.useState)({email:"",password:""}),a=Object(u.a)(e,2),t=a[0],r=a[1],c=t.email,m=t.password,h=Object(s.e)(),E=Object(s.c)(),f=Object(s.f)(),v=Object(s.d)(),g=function(e){var a=e.target,n=a.name,l=a.value;r(Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},n,l)))};return l.a.createElement("div",{className:"c-sign-in m-t-b-0"},l.a.createElement("h1",{className:"m-t-b-0 m-b-24"},"Sign In"),l.a.createElement("span",null,"Sign in with your email and password."),l.a.createElement("span",{className:"m-b-18"},"No account?"," ",l.a.createElement(d.a,{to:"/sign-up",className:"bold"},"Create here.")),l.a.createElement("form",{className:"c-sign-in__form",onSubmit:function(e){e.preventDefault(),v({email:c,password:m})}},l.a.createElement(p,{type:"email",name:"email",label:"Email",value:c,required:!0,autoFocus:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(p,{type:"password",name:"password",label:"Password",value:m,required:!0,classes:"m-b-30",handleChange:g}),l.a.createElement("div",{className:"c-sign-in__form__group-button"},l.a.createElement(b.a,{type:"submit"},E?l.a.createElement(b.h,{width:"30px",height:"30px",isInverted:!0}):"Sign in"),l.a.createElement(b.a,{classes:"google-sign-in-button",onClick:f},h?l.a.createElement(b.h,{width:"30px",height:"30px"}):"Continue with Google"))),l.a.createElement("div",null))},E=function(){var e=Object(n.useState)({displayName:"",email:"",password:"",confirmPassword:""}),a=Object(u.a)(e,2),t=a[0],r=a[1],c=t.displayName,m=t.email,h=t.password,E=t.confirmPassword,f=Object(s.h)(),v=Object(s.i)(),g=function(e){var a=e.target,n=a.name,l=a.value;r(Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},n,l)))};return l.a.createElement("div",{className:"c-sign-up m-t-b-0"},l.a.createElement("h1",{className:"m-t-b-0 m-b-24"},"Sign Up"),l.a.createElement("span",null,"Sign up with your email, name and password."),l.a.createElement("span",{className:"m-b-24"},"Already have account?"," ",l.a.createElement(d.a,{to:"/sign-in",className:"bold"},"Sign in here.")),l.a.createElement("form",{className:"c-sign-up__form",onSubmit:function(){h.length<6?alert("Password should be at least 6 characters"):h===E?v({email:m,password:h,displayName:c}):alert("Password don't match")}},l.a.createElement(p,{type:"text",name:"displayName",label:"Display Name",value:c,required:!0,autoFocus:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(p,{type:"email",name:"email",label:"Email",value:m,required:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(p,{type:"password",name:"password",label:"Password",value:h,required:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(p,{type:"password",name:"confirmPassword",label:"Confirm Password",value:E,required:!0,classes:"m-b-30",handleChange:g}),l.a.createElement(b.a,{type:"submit",classes:"sign-up-button"},f?l.a.createElement(b.h,{width:"30px",height:"30px",isInverted:!0}):"Sign up")),l.a.createElement("div",null))},f=function(){return l.a.createElement("div",{className:"c-contact"},l.a.createElement("h1",{className:"m-t-b-0 m-b-24"},"Contact information"),l.a.createElement("p",{className:"bold"},"Contact with me via:"),l.a.createElement("ul",null,l.a.createElement("li",{className:"m-l-24"},"LinkedIn:"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/nvdai2401/",target:"_blank",rel:"noopener noreferrer"},"https://www.linkedin.com/in/nvdai2401/")),l.a.createElement("li",{className:"m-l-24"},"Github:"," ",l.a.createElement("a",{href:"https://github.com/nvdai2401",target:"_blank",rel:"noopener noreferrer"},"https://github.com/nvdai2401")),l.a.createElement("li",{className:"m-l-24"},"Stackoverflow:"," ",l.a.createElement("a",{href:"https://stackoverflow.com/users/9548285/michael",target:"_blank",rel:"noopener noreferrer"},"https://stackoverflow.com/users/9548285"))))}}}]);
//# sourceMappingURL=0.ee0c4e69.chunk.js.map