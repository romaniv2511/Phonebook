"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{86:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var s,r=t(9439),a=t(2791),o=t(9434),i=t(1047),c=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},d=t(745),u=t(511),m=t(3821),h=t(7886),x=t(184),p=function(e){var n=e.setFilter,t=(0,o.v9)(c).length,s="search among ".concat(t," contacts");return(0,x.jsxs)(u.B,{children:[(0,x.jsx)(m.Z,{pointerEvents:"none",children:(0,x.jsx)(d.W,{color:"teal"})}),(0,x.jsx)(h.I,{w:"400px",name:"filter",type:"text",placeholder:s,onChange:function(e){return n(e.target.value)}})]})},j=t(168),f=t(7691).ZP.span(s||(s=(0,j.Z)(["\n  font-weight: bold;\n"]))),v=function(e){var n=e.name,t=e.number;return(0,x.jsxs)("div",{children:[(0,x.jsxs)(f,{children:[n,":"]}),(0,x.jsxs)("span",{children:[" ",t]})]})},b=t(8348),C=t(3306),g=t(3321),y=t(9671),k=t(7630),Z=t(7705),w=t(4090),S=t(7496),z=t(114),I=t(1413),O=t(1134),F=t(4695),_=t(1724),L=t(2701),A=t(4585),q=t(5341),N=t(176),P=t(2536),B=_.Ry().shape({name:_.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore").max(25).required(),number:_.Z_().min(5).max(16).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be at digits and can contain spaces, dashes, parentheses and can start with +").required()}),E=function(e){var n,t,s=e.onClose,l=e.contact,d=void 0===l?{name:"",number:""}:l,u=e.type,m=(0,a.useState)(d.name),p=(0,r.Z)(m,2),j=p[0],f=p[1],v=(0,a.useState)(d.number),b=(0,r.Z)(v,2),g=b[0],y=b[1],k=(0,O.cI)({resolver:(0,F.X)(B)}),Z=k.register,w=k.handleSubmit,S=k.reset,z=k.formState.errors,_=(0,o.I0)(),E=(0,o.v9)(c),J=(0,P.p)(),K=function(e){var n=e.target,t=n.name,s=n.value;switch(t){case"name":f(s);break;case"number":y(s)}};return(0,x.jsx)("form",{onSubmit:w((function(e){var n=e.name,t=e.number;if("add"===u){if(E.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return void J({title:'"'.concat(n,'" '),description:"is already in contacts",position:"top",status:"info",duration:3e3,isClosable:!0});_((0,i.uK)(e))}"edit"===u&&_((0,i.mP)({id:d.id,name:n,number:t})),S(),s()})),children:(0,x.jsxs)(L.NI,{isInvalid:z.name,children:[(0,x.jsxs)(A.l,{htmlFor:"name",children:["Name",(0,x.jsx)(h.I,(0,I.Z)((0,I.Z)({id:"name"},Z("name")),{},{type:"text",onChange:K,value:j})),(0,x.jsx)(q.J1,{children:null===(n=z.name)||void 0===n?void 0:n.message})]}),(0,x.jsxs)(A.l,{htmlFor:"number",children:["Number",(0,x.jsx)(h.I,(0,I.Z)((0,I.Z)({id:"number"},Z("number")),{},{type:"tel",onChange:K,value:g})),(0,x.jsx)(q.J1,{children:null===(t=z.number)||void 0===t?void 0:t.message})]}),(0,x.jsxs)(N.k,{mt:"40px",justifyContent:"right",children:[(0,x.jsx)(C.z,{type:"submit",colorScheme:"blue",mr:3,children:"Save"}),(0,x.jsx)(C.z,{onClick:s,children:"Cancel"})]})]})})},J=function(e){var n=e.contact,t=(0,b.q)(),s=t.isOpen,r=t.onOpen,a=t.onClose;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C.z,{onClick:r,colorScheme:"teal",variant:"ghost",p:"8px",children:(0,x.jsx)(z.d,{color:"teal"})}),(0,x.jsxs)(g.u_,{closeOnOverlayClick:!1,isOpen:s,onClose:a,children:[(0,x.jsx)(y.Z,{}),(0,x.jsxs)(k.h,{children:[(0,x.jsx)(Z.x,{children:"Edit contact"}),(0,x.jsx)(w.o,{}),(0,x.jsx)(S.f,{pb:6,children:(0,x.jsx)(E,{contact:n,onClose:a,type:"edit"})})]})]})]})},K=t(1243),R=t(3541),W=function(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],s=n[1],d=(0,a.useState)(""),u=(0,r.Z)(d,2),m=u[0],h=u[1],j=(0,o.I0)(),f=(0,o.v9)(c),b=(0,o.v9)(l);if(f.length){var g=f.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.number.includes(t)}));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p,{setFilter:function(e){return s(e)}}),(0,x.jsx)(R.aV,{children:g.map((function(e){var n=e.id,t=e.name,s=e.number,r=b&&m===n;return(0,x.jsxs)(N.k,{alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid black",children:[(0,x.jsx)(v,{name:t,number:s}),(0,x.jsxs)("div",{children:[(0,x.jsx)(J,{contact:{id:n,name:t,number:s}}),(0,x.jsx)(C.z,{isLoading:r,spinnerPlacement:"start",colorScheme:"teal",variant:"ghost",onClick:function(){h(n),j((0,i.GK)(n))},children:(0,x.jsx)(K.p,{})})]})]},n)}))})]})}},$=t(8652),G=function(){var e=(0,b.q)(),n=e.isOpen,t=e.onOpen,s=e.onClose;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(C.z,{onClick:t,colorScheme:"teal",borderRadius:"8px",p:"8px",mt:"8px",mb:"8px",children:[(0,x.jsx)($.d,{mr:"4px"}),"Add contact"]}),(0,x.jsxs)(g.u_,{closeOnOverlayClick:!1,isOpen:n,onClose:s,children:[(0,x.jsx)(y.Z,{}),(0,x.jsxs)(k.h,{children:[(0,x.jsx)(Z.x,{children:"Create new contact"}),(0,x.jsx)(w.o,{}),(0,x.jsx)(S.f,{pb:6,children:(0,x.jsx)(E,{onClose:s,type:"add"})})]})]})]})},M=t(8308),V=t(3204),X=function(){var e=(0,o.I0)(),n=(0,o.v9)(l);return(0,a.useEffect)((function(){e((0,i.yF)())}),[e]),(0,x.jsxs)(M.W,{children:[(0,x.jsx)(G,{}),n&&(0,x.jsx)(V.$,{display:"block",thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"teal",size:"xl"}),(0,x.jsx)(W,{})]})}}}]);
//# sourceMappingURL=86.9c625b8f.chunk.js.map