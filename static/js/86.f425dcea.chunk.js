"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{86:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var s,r=t(2791),a=t(9434),o=t(3204),i=t(1047),c=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},d=t(8348),u=t(3306),m=t(3321),h=t(9671),x=t(7630),p=t(7705),j=t(4090),f=t(7496),v=t(8652),b=t(1413),C=t(9439),g=t(1134),y=t(4695),k=t(1724),Z=t(2701),w=t(4585),S=t(7886),z=t(5341),I=t(176),O=t(2536),F=t(3329),_=k.Ry().shape({name:k.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore").max(25).required(),number:k.Z_().min(5).max(16).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be at digits and can contain spaces, dashes, parentheses and can start with +").required()}),L=function(e){var n,t,s=e.onClose,o=e.contact,l=void 0===o?{name:"",number:""}:o,d=e.type,m=(0,r.useState)(l.name),h=(0,C.Z)(m,2),x=h[0],p=h[1],j=(0,r.useState)(l.number),f=(0,C.Z)(j,2),v=f[0],k=f[1],L=(0,g.cI)({resolver:(0,y.X)(_)}),A=L.register,q=L.handleSubmit,N=L.reset,B=L.formState.errors,E=(0,a.I0)(),J=(0,a.v9)(c),P=(0,O.p)(),K=function(e){var n=e.target,t=n.name,s=n.value;switch(t){case"name":p(s);break;case"number":k(s)}};return(0,F.jsx)("form",{onSubmit:q((function(e){var n=e.name,t=e.number;if("add"===d){if(J.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return void P({title:'"'.concat(n,'" '),description:"is already in contacts",position:"top",status:"info",duration:3e3,isClosable:!0});E((0,i.uK)(e))}"edit"===d&&E((0,i.mP)({id:l.id,name:n,number:t})),N(),s()})),children:(0,F.jsxs)(Z.NI,{isInvalid:B.name,children:[(0,F.jsxs)(w.l,{htmlFor:"name",children:["Name",(0,F.jsx)(S.I,(0,b.Z)((0,b.Z)({id:"name"},A("name")),{},{type:"text",onChange:K,value:x})),(0,F.jsx)(z.J1,{children:null===(n=B.name)||void 0===n?void 0:n.message})]}),(0,F.jsxs)(w.l,{htmlFor:"number",children:["Number",(0,F.jsx)(S.I,(0,b.Z)((0,b.Z)({id:"number"},A("number")),{},{type:"tel",onChange:K,value:v})),(0,F.jsx)(z.J1,{children:null===(t=B.number)||void 0===t?void 0:t.message})]}),(0,F.jsxs)(I.k,{mt:"40px",justifyContent:"right",children:[(0,F.jsx)(u.z,{type:"submit",colorScheme:"blue",mr:3,children:"Save"}),(0,F.jsx)(u.z,{onClick:s,children:"Cancel"})]})]})})},A=function(){var e=(0,d.q)(),n=e.isOpen,t=e.onOpen,s=e.onClose;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(u.z,{onClick:t,colorScheme:"teal",borderRadius:"8px",p:"8px",mt:"8px",mb:"8px",children:[(0,F.jsx)(v.d,{mr:"4px"}),"Add contact"]}),(0,F.jsxs)(m.u_,{closeOnOverlayClick:!1,isOpen:n,onClose:s,children:[(0,F.jsx)(h.Z,{}),(0,F.jsxs)(x.h,{children:[(0,F.jsx)(p.x,{children:"Create new contact"}),(0,F.jsx)(j.o,{}),(0,F.jsx)(f.f,{pb:6,children:(0,F.jsx)(L,{onClose:s,type:"add"})})]})]})]})},q=t(1243),N=t(3541),B=t(745),E=t(8455),J=t(3821),P=function(e){var n=e.setFilter,t=(0,a.v9)(c).length,s="search among ".concat(t," contacts");return(0,F.jsxs)(E.B,{children:[(0,F.jsx)(J.Z,{pointerEvents:"none",children:(0,F.jsx)(B.W,{color:"teal"})}),(0,F.jsx)(S.I,{w:"400px",name:"filter",type:"text",placeholder:s,onChange:function(e){return n(e.target.value)}})]})},K=t(168),R=t(225).Z.span(s||(s=(0,K.Z)(["\n  font-weight: bold;\n"]))),W=function(e){var n=e.name,t=e.number;return(0,F.jsxs)("div",{children:[(0,F.jsxs)(R,{children:[n,":"]}),(0,F.jsxs)("span",{children:[" ",t]})]})},$=t(114),G=function(e){var n=e.contact,t=(0,d.q)(),s=t.isOpen,r=t.onOpen,a=t.onClose;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u.z,{onClick:r,colorScheme:"teal",variant:"ghost",p:"8px",children:(0,F.jsx)($.d,{color:"teal"})}),(0,F.jsxs)(m.u_,{closeOnOverlayClick:!1,isOpen:s,onClose:a,children:[(0,F.jsx)(h.Z,{}),(0,F.jsxs)(x.h,{children:[(0,F.jsx)(p.x,{children:"Edit contact"}),(0,F.jsx)(j.o,{}),(0,F.jsx)(f.f,{pb:6,children:(0,F.jsx)(L,{contact:n,onClose:a,type:"edit"})})]})]})]})},M=function(){var e=(0,r.useState)(""),n=(0,C.Z)(e,2),t=n[0],s=n[1],o=(0,r.useState)(""),d=(0,C.Z)(o,2),m=d[0],h=d[1],x=(0,a.I0)(),p=(0,a.v9)(c),j=(0,a.v9)(l);if(p.length){var f=p.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.number.includes(t)}));return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(P,{setFilter:function(e){return s(e)}}),(0,F.jsx)(N.aV,{children:f.map((function(e){var n=e.id,t=e.name,s=e.number,r=j&&m===n;return(0,F.jsxs)(I.k,{alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid black",children:[(0,F.jsx)(W,{name:t,number:s}),(0,F.jsxs)("div",{children:[(0,F.jsx)(G,{contact:{id:n,name:t,number:s}}),(0,F.jsx)(u.z,{isLoading:r,spinnerPlacement:"start",colorScheme:"teal",variant:"ghost",onClick:function(){h(n),x((0,i.GK)(n))},children:(0,F.jsx)(q.p,{})})]})]},n)}))})]})}},V=t(8308),X=function(){var e=(0,a.I0)(),n=(0,a.v9)(l);return(0,r.useEffect)((function(){e((0,i.yF)())}),[e]),(0,F.jsxs)(V.W,{children:[(0,F.jsx)(A,{}),n&&(0,F.jsx)(o.$,{display:"block",thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"teal",size:"xl"}),(0,F.jsx)(M,{})]})}}}]);
//# sourceMappingURL=86.f425dcea.chunk.js.map