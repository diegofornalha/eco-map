(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{9232:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create/ft_drop",function(){return n(6819)}])},6819:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var l=n(5893),r=n(4051),a=n.n(r),o=n(7294),i=n(1163),s=n(9491),c=n(3776),d=n.n(c),u=n(5675),f=n.n(u),m=n(1013),x=n(8057),h=n(7758),g=n(9099),b=n(4496),v=n(5985);function p(e,t,n,l,r,a,o){try{var i=e[a](o),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(l,r)}function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function y(e){var t=(0,o.useState)(""),n=t[0],r=t[1],i=(0,o.useState)(),s=i[0],c=i[1],u=(0,o.useState)(new(d())(0)),y=u[0],k=u[1],j=(0,o.useState)([]),N=j[0],z=j[1],S=(0,o.useState)([]),A=S[0],F=S[1];return(0,o.useEffect)((function(){var e=b.Vi.Mainnet;"testnet"==v.Z.chainEnv&&(e=b.Vi.Testnet),(new b.DK).resolve(b._S.CDN,e).then((function(e){var t=e.getList().map((function(e){return e.id="".concat(e.address,".").concat(e.contractName),e}));z(t)}))}),[z]),(0,o.useEffect)((function(){F(""===n?N:N.filter((function(e){return"".concat(e.name," (").concat(e.symbol,")").toLowerCase().includes(n.toLowerCase())})))}),[n,N]),(0,l.jsxs)(h.h,{as:"div",className:e.className,value:e.user&&e.user.loggedIn&&s,onChange:function(){var t,n=(t=a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.user&&e.user.loggedIn&&(k(new(d())(0)),(0,g.qA)(n,e.user.addr).then((function(t){k(new(d())(t)),e.onBalanceFetched&&e.onBalanceFetched(t)})),c(n),e.onTokenSelected(n));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(l,r){var a=t.apply(e,n);function o(e){p(a,l,r,o,i,"next",e)}function i(e){p(a,l,r,o,i,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}(),children:[(0,l.jsxs)(h.h.Label,{className:"block text-2xl font-flow font-bold",children:["Token",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),e.user&&e.user.loggedIn?s?(0,l.jsxs)(h.h.Label,{className:"block text-md font-flow leading-6 mt-2 mb-2",children:["Seu saldo \xe9 ",y.toString()," ",s.symbol]}):(0,l.jsx)(h.h.Label,{className:"block text-md font-flow leading-6 mt-2 mb-2",children:"Selecione o token para adicionar ao DROP"}):(0,l.jsx)(h.h.Label,{className:"block text-md font-flow leading-6 mt-2 mb-2",children:"Conecte a carteira para selecionar o token"}),(0,l.jsxs)("div",{className:"relative mt-1",children:[(0,l.jsx)(h.h.Input,{className:"w-full h-[50px] text-lg font-flow rounded-2xl border border-drizzle-green bg-drizzle-green-ultralight py-2 pl-3 pr-10 focus:border-drizzle-green-dark focus:outline-none focus:ring-1 focus:ring-drizzle-green-dark",onChange:function(e){r(e.target.value)},displayValue:function(e){return e&&"".concat(e.name," (").concat(e.symbol,")")}}),(0,l.jsx)(h.h.Button,{className:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",children:(0,l.jsx)(m.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),A.length>0&&(0,l.jsx)(h.h.Options,{className:"absolute z-10 rounded-2xl mt-1 max-h-56 w-full overflow-auto bg-white py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:A.map((function(e){return(0,l.jsx)(h.h.Option,{value:e,className:function(e){return w("relative cursor-default select-none py-2 pl-3 pr-9",e.active?"bg-drizzle-green-light":"text-black")},children:function(t){var n=t.active,r=t.selected;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-6 h-6 relative",children:(0,l.jsx)(f(),{src:e.logoURI,alt:"",layout:"fill",objectFit:"cover",className:"rounded-full"})}),(0,l.jsx)("span",{className:w("ml-3 truncate",r&&"font-semibold"),children:"".concat(e.name," (").concat(e.symbol,")")})]}),r&&(0,l.jsx)("span",{className:w("absolute inset-y-0 right-0 flex items-center pr-4",n?"text-black":"text-drizzle-green-dark"),children:(0,l.jsx)(x.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})}},e.id)}))})]})]})}var k=n(4278),j=n(2874);function N(e){var t=e.mode,n=e.setMode,r=e.capacity,a=e.setCapacity,i=e.identicalAmount,s=e.setIdenticalAmount,c=e.totalAmount,d=e.setTotalAmount,u=e.disabled||!1;(0,o.useEffect)((function(){a(""),d(""),s("")}),[t]);var f;return(0,l.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,l.jsxs)("label",{className:"block text-2xl font-bold font-flow",children:["Distribution",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,l.jsx)(j.ZP,{mode:t,setMode:n}),(f=t,f?"Random"===f.key?(0,l.jsxs)("div",{className:"w-full flex flex-col gap-y-2 mt-1",children:[(0,l.jsx)(k.Z,{content:"Someone may get higher reward than expected value by Try & Abort. This mode should only be used for fun!"}),(0,l.jsxs)("div",{className:"flex items-center gap-x-2 sm:justify-between sm:w-full",children:[(0,l.jsx)("label",{className:"block w-[75px] shrink-0 font-flow font-bold",children:"Capacity"}),(0,l.jsx)("input",{type:"number",disabled:u,id:"capacity",min:"1",value:r,className:"grow w-full rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark bg-drizzle-green-ultralight border-drizzle-green font-flow text-lg placeholder:text-gray-300",onWheel:function(e){return e.target.blur()},onChange:function(e){a(e.target.value)}})]}),(0,l.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,l.jsx)("label",{className:"block w-[75px] shrink-0 font-flow font-bold",children:"Total Amount"}),(0,l.jsx)("input",{type:"number",disabled:u,id:"total_amount",min:"0",value:c,className:"grow w-full rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark bg-drizzle-green-ultralight border-drizzle-green font-flow text-lg placeholder:text-gray-300",onWheel:function(e){return e.target.blur()},onChange:function(e){d(e.target.value)}})]})]}):"Identical"===f.key?(0,l.jsxs)("div",{className:"flex flex-col gap-y-2 mt-1",children:[(0,l.jsxs)("div",{className:"flex items-center gap-x-2 sm:justify-between sm:w-full",children:[(0,l.jsx)("label",{className:"block w-[75px] shrink-0 font-flow font-bold",children:"Capacity"}),(0,l.jsx)("input",{type:"number",disabled:u,id:"capacity",value:r,min:"1",className:"grow w-full rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark bg-drizzle-green-ultralight border-drizzle-green font-flow text-lg placeholder:text-gray-300",onWheel:function(e){return e.target.blur()},onChange:function(e){a(e.target.value)}})]}),(0,l.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,l.jsx)("label",{className:"block w-[75px] shrink-0 font-flow font-bold",children:"Amt Per Account"}),(0,l.jsx)("input",{type:"number",disabled:u,id:"per_amount",value:i,min:"0",className:"grow w-full rounded-2xl focus:ring-drizzle-green-dark focus:border-drizzle-green-dark bg-drizzle-green-ultralight border-drizzle-green font-flow text-lg placeholder:text-gray-300",onWheel:function(e){return e.target.blur()},onChange:function(e){s(e.target.value)}})]})]}):null:null)]})}var z=n(6513),S=n(2618),A=n(5023),F=n(4480),I=n(5496),E=n(7798),P=n(4999);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function C(e,t,n,l,r,a,o){try{var i=e[a](o),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(l,r)}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(a.push(l.value),!t||a.length!==t);o=!0);}catch(s){i=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e){var t,n=R((0,F.FV)(I.lo),2)[1],r=R((0,F.FV)(I.VQ),2)[1],i=R((0,F.FV)(I.xr),1)[0],s=e.token,c=e.tokenBalance,u=e.callback,f=(0,o.useState)(""),m=f[0],x=f[1],h=(0,o.useState)([]),g=h[0],b=h[1],v=(0,o.useState)([]),p=v[0],w=v[1],y=(0,o.useState)(new(d())(0)),k=y[0],j=y[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-2xl font-bold font-flow",children:"Addresses & Amounts"}),(0,l.jsx)("label",{className:"block font-flow text-md leading-6 mt-2 mb-2",children:"For each line, enter one address and the token amount, seperate with comma. Duplicate addresses are not allowed."}),(0,l.jsxs)("div",{className:"mt-1",children:[(0,l.jsx)("textarea",{rows:8,name:"recipients",id:"recipients",className:"focus:ring-drizzle-green-dark focus:border-drizzle-green-dark rounded-2xl bg-drizzle-green-ultralight resize-none block w-full border-drizzle-green font-flow text-lg placeholder:text-gray-300",spellCheck:!1,value:m,placeholder:"0xf8d6e0586b0a20c7,1.6",onChange:function(e){(g.length>0||p.length>0)&&(b([]),w([]),j(new(d())(0))),x(e.target.value)}}),(0,l.jsxs)("div",{className:"w-full flex mt-4 gap-x-2 justify-between",children:[(0,l.jsx)("button",{type:"button",className:(0,A.AK)(i?"bg-drizzle-green-light":"bg-drizzle-green hover:bg-drizzle-green-dark","h-12 w-40 px-6 text-base rounded-2xl font-medium shadow-md text-black"),disabled:i,onClick:(t=a().mark((function e(){var t,l,o,i,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=4;break}return n(!0),r({type:"exclamation",title:"Invalid Params",detail:"Token is not selected"}),e.abrupt("return");case 4:if(0!=m.trim().length){e.next=8;break}return n(!0),r({type:"exclamation",title:"Invalid Params",detail:"NO addresses provided"}),e.abrupt("return");case 8:return e.t0=R,e.next=11,(0,A.xN)(m.trim());case 11:e.t1=e.sent,t=(0,e.t0)(e.t1,2),l=t[0],o=t[1],b(l),w(o),i=l.map((function(e){return e.amount})).reduce((function(e,t){return e.add(t)}),new(d())(0)),j(i),c=(0,A.br)(l),u({whitelist:c,tokenAmount:i,invalidRecordsCount:o.length});case 21:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(l,r){var a=t.apply(e,n);function o(e){C(a,l,r,o,i,"next",e)}function i(e){C(a,l,r,o,i,"throw",e)}o(void 0)}))}),children:"Process"}),(0,l.jsx)(P.Z,{onChange:function(e){u(null);var t=e.target.files[0],n=new FileReader;n.addEventListener("load",(function(t){var n=t.target.result;x(n),e.target.value=null})),n.readAsText(t)}})]})]})]}),g.length>0||p.length>0?(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-2xl font-bold font-flow",children:"Summary"}),(0,l.jsx)("div",{className:"mt-1 mb-30",children:(0,l.jsxs)("ul",{role:"list",children:[(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:"# of Valid Records"}),(0,l.jsx)("div",{className:"grow"}),(0,l.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:g.length})]})},"valid count"),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:"# of Invalid Records"}),(0,l.jsx)("div",{className:"grow"}),(0,l.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:p.length})]})},"invalid count"),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:"Total Token"}),(0,l.jsx)("div",{className:"grow"}),(0,l.jsxs)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:[k.toString()," ",s&&s.symbol]})]})},"total"),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:"Your Balance"}),(0,l.jsx)("div",{className:"grow"}),(0,l.jsxs)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:[c.toString()," ",s&&s.symbol]})]})},"balance"),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:"Remaining"}),(0,l.jsx)("div",{className:"grow"}),c.sub(k).isNegative()?(0,l.jsxs)("div",{className:"flex-none w-30 text-md text-rose-500 font-flow font-semibold leading-10",children:[c.sub(k).toString()," ",s&&s.symbol]}):(0,l.jsxs)("div",{className:"flex-none w-30 text-md font-flow font-semibold leading-10",children:[c.sub(k).toString()," ",s&&s.symbol]})]})},"remaining")]})})]}):null,p.length>0&&(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-2xl font-bold font-flow",children:"Invalid records"}),(0,l.jsx)("label",{className:"block font-flow text-md leading-8 mt-2",children:"Invalid format or invalid amount or duplicate accounts"}),(0,l.jsx)("div",{className:"mt-1",children:(0,l.jsx)("textarea",{rows:p.length>8?8:p.length,name:"invalid",id:"invalid",className:"focus:ring-rose-700 focus:border-rose-700 bg-rose-300/10 resize-none block w-full border-rose-700 font-flow text-lg placeholder:text-gray-300",disabled:!0,value:p.reduce((function(e,t){return"".concat(e,"\n").concat(t)}),"").trim(),spellCheck:!1})})]})]})}function Z(e){var t=e.token,n=e.tokenBalance,r=e.callback;return(0,l.jsx)("div",{className:"p-4 sm:p-8 flex flex-col gap-y-10 rounded-3xl border-4 border-drizzle-green-light border-dashed",children:(0,l.jsx)(D,{token:t,tokenBalance:n,callback:r})})}var L=n(3749),O=n(7665),_=n(500),V=n(9305),B=n(3320),H=n(3947);function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function U(e,t,n,l,r,a,o){try{var i=e[a](o),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(l,r)}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(a.push(l.value),!t||a.length!==t);o=!0);}catch(s){i=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return a}}(e,t)||G(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||G(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){if(e){if("string"===typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}var K="DROP NAME",X="Detailed information about this DROP",Y={symbol:"FLOW"},Q=new(d())(42),$=new Date("2020-08-01T08:16:16Z");function J(e){var t=(0,i.useRouter)().query,n=t.float,r=t.float_group,c=W((0,F.FV)(I.lo),2)[1],u=W((0,F.FV)(I.VQ),2)[1],f=W((0,F.FV)(I.xr),2),m=f[0],x=f[1],h=W((0,F.FV)(I.cY),2),g=(h[0],h[1]),b=(0,o.useState)(null),p=b[0],w=b[1],k=(0,o.useState)(0),P=k[0],T=k[1],C=(0,o.useState)(null),R=C[0],D=C[1],M=(0,o.useState)(null),G=M[0],J=M[1],ee=(0,o.useState)(null),te=ee[0],ne=ee[1],le=(0,o.useState)(null),re=le[0],ae=le[1],oe=(0,o.useState)(new(d())(0)),ie=oe[0],se=oe[1],ce=(0,o.useState)(!1),de=ce[0],ue=ce[1],fe=(0,o.useState)(null),me=fe[0],xe=fe[1],he=(0,o.useState)(null),ge=he[0],be=he[1],ve=(0,o.useState)(null),pe=ve[0],we=ve[1],ye=(0,o.useState)(!1),ke=ye[0],je=ye[1],Ne=(0,o.useState)(null),ze=Ne[0],Se=Ne[1],Ae=(0,o.useState)(null),Fe=Ae[0],Ie=Ae[1],Ee=(0,o.useState)([]),Pe=Ee[0],Te=Ee[1],Ce=(0,o.useState)([]),Re=Ce[0],De=Ce[1],Ze=(0,o.useState)(null),Le=Ze[0],Oe=Ze[1],_e=(0,o.useState)(""),Ve=_e[0],Be=_e[1],He=(0,o.useState)(null),Me=He[0],Ue=He[1],We=(0,o.useState)(""),qe=We[0],Ge=We[1],Ke=(0,o.useState)(""),Xe=Ke[0],Ye=Ke[1],Qe=(0,o.useState)(""),$e=Qe[0],Je=Qe[1],et=(0,o.useState)(!1),tt=et[0],nt=et[1],lt=(0,o.useState)(!1),rt=lt[0],at=lt[1],ot=(0,o.useState)(null),it=ot[0],st=ot[1];(0,o.useEffect)((function(){pe?pe.key==E.FF.key?je(!1):je(!0):je(!1)}),[pe]),(0,o.useEffect)((function(){n&&""!=n.trim()&&(0,A.DX)(n).then((function(e){De(e),we(E.HU)})).catch(console.error),r&&""!=r.trim()&&(0,A.uw)(r).then((function(e){Oe(e),we(E.qE)}))}),[n,r]);var ct,dt=function(){var t,n=(t=a().mark((function t(n){var l,r,o,i,f,m,h,b,w,y,k,N,z,F,I,T,C;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.user&&e.user.loggedIn){t.next=3;break}return s.YR(),t.abrupt("return");case 3:if(c(!1),l=W(R&&""!=R.trim()?G&&!(0,A.HH)(G)?[!1,_.Z.InvalidURL]:re?P>v.Z.bannerSizeLimit?[!1,_.Z.BannerOversize]:ge&&isFinite(ge)&&ge.getTime()<(new Date).getTime()?[!1,_.Z.DropEnded]:me&&ge&&isFinite(me)&&isFinite(ge)&&me.getTime()>=ge.getTime()?[!1,_.Z.InvalidTimeLimit]:[!0,null]:[!1,_.Z.InvalidToken]:[!1,_.Z.InvalidName],2),r=l[0],o=l[1],r){t.next=9;break}return c(!0),u({type:"exclamation",title:"Invalid Params",detail:o}),t.abrupt("return");case 9:if(i=W(pe.key===E.qE.key?E.qE.checkParams(Pe,Ve,Me,ie,qe,{identicalAmount:Xe,totalAmount:$e}):pe.key===E.HU.key?E.HU.checkParams(Pe,Ve,Me,ie,qe,{identicalAmount:Xe,totalAmount:$e}):pe.key===E.FF.key?E.FF.checkParams(ze,ie):pe.key===E.P1.key?E.P1.checkParams(Fe,Me,ie,qe,{identicalAmount:Xe,totalAmount:$e}):void 0,2),f=i[0],m=i[1],f){t.next=14;break}return c(!0),u({type:"exclamation",title:"Invalid Params",detail:m}),t.abrupt("return");case 14:if(tt){t.next=17;break}return nt(!0),t.abrupt("return");case 17:return h={name:R,description:null!==te&&void 0!==te?te:"",image:p,url:G,startAt:me&&isFinite(me)?"".concat(me.getTime()/1e3,".0"):null,endAt:ge&&isFinite(ge)?"".concat(ge.getTime()/1e3,".0"):null,token:re,withExclusiveWhitelist:!1,exclusiveWhitelist:[],whitelistTokenAmount:null,withWhitelist:!1,whitelist:[],withIdenticalDistributor:!1,capacity:null,amountPerEntry:null,withRandomDistributor:!1,totalRandomAmount:null,withFloats:!1,threshold:null,eventIDs:[],eventHosts:[],withFloatGroup:!1,floatGroupName:null,floatGroupHost:null},pe.key===E.FF.key?(b=ze.whitelist,w=ze.tokenAmount,y=w.toFixed(8).toString(),h.withExclusiveWhitelist=!0,h.exclusiveWhitelist=b,h.whitelistTokenAmount=y):pe.key===E.P1.key?(k=Fe.whitelist,h.withWhitelist=!0,h.whitelist=k):pe.key===E.HU.key?(N=[Re[0].eventID],z=[Re[0].eventHost],h.withFloats=!0,h.threshold="".concat(N.length),h.eventIDs=N,h.eventHosts=z):pe.key===E.qE.key&&(h.withFloatGroup=!0,h.threshold=Ve,h.floatGroupName=Le.groupName,h.floatGroupHost=Le.groupHost),Me&&Me.key===j.Tq.key?(F=new(d())(Xe).toFixed(8).toString(),h.withIdenticalDistributor=!0,h.capacity=qe,h.amountPerEntry=F):Me&&Me.key===j.pf.key&&(I=new(d())($e).toFixed(8).toString(),h.withRandomDistributor=!0,h.capacity=qe,h.totalRandomAmount=I),T=Object.values(h),t.next=23,S._s.apply(void 0,q(T).concat([x,g]));case 23:C=t.sent,ut(C);case 25:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(l,r){var a=t.apply(e,n);function o(e){U(a,l,r,o,i,"next",e)}function i(e){U(a,l,r,o,i,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}(),ut=function(t){if(t&&4===t.status&&0===t.statusCode){var n=t.events.find((function(e){return e.data.dropID}));if(n){var l="".concat(v.Z.appURL,"/").concat(e.user&&e.user.addr,"/drops/").concat(n.data.dropID);st(l),at(!0)}}};return(0,l.jsxs)(l.Fragment,{children:[tt?(0,l.jsx)("h1",{className:"font-flow font-semibold text-2xl sm:text-4xl text-center mb-10",children:"PREVIEW"}):(0,l.jsx)("h1",{className:"font-flow font-semibold text-2xl sm:text-4xl text-center mb-10",children:"CRIAR SORTEIO DE COIN"}),tt?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex justify-center mb-10",children:(0,l.jsx)(z.Z,{isPreview:!0,banner:p,name:R&&0!=R.length?R:K,url:G,host:e.user.addr||"0x0042",createdAt:$,description:null!==te&&void 0!==te?te:X,token:re||Y,timeLockEnabled:de,startAt:me,endAt:ge,amount:Q,eligibilityMode:pe,packetMode:Me,floatGroup:Le,floatEventPairs:Re,threshold:Ve})}),(0,l.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,l.jsx)(H.Z,{isPreview:!0,token:re,packetMode:Me,randomTotalAmount:$e,identicalAmount:Xe,totalTokenAmount:ze&&ze.tokenAmount,capacity:qe})})]}):null,(0,l.jsxs)("div",{className:"".concat(tt?"hidden":""," flex flex-col gap-y-10 shadow-drizzle p-4 sm:p-8 rounded-3xl bg-white"),children:[(0,l.jsx)(O.Z,{banner:p,setBanner:w,setBannerSize:T,setName:D,setURL:J,setDescription:ne,timeLockEnabled:de,setTimeLockEnabled:ue,setStartAt:xe,setEndAt:be,NamePlaceholder:K,DescriptionPlaceholder:X,withTimeLimitPicker:!0}),(0,l.jsx)(y,{user:e.user,className:"w-full",onTokenSelected:ae,onBalanceFetched:se}),(0,l.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,l.jsxs)("label",{className:"block text-2xl font-bold font-flow",children:["Eligibility",(0,l.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,l.jsx)(E.ZP,{mode:pe,setMode:we,setPacketMode:Ue})]}),(ct=pe,ct?ct.key==E.FF.key?(0,l.jsx)(Z,{token:re,tokenBalance:ie,callback:Se}):ct.key===E.P1.key?(0,l.jsx)(V.Z,{callback:Ie}):ct.key===E.HU.key||ct.key===E.qE.key?(0,l.jsx)(L.Z,{floatMode:ct.detail,threshold:Ve,setThreshold:Be,rawFloatInput:n||r,floatEvents:Pe,setFloatEvents:Te,setFloatEventPairs:De,setFloatGroup:Oe}):null:null),ke?(0,l.jsx)(N,{mode:Me,setMode:Ue,capacity:qe,setCapacity:Ge,identicalAmount:Xe,setIdenticalAmount:Ye,totalAmount:$e,setTotalAmount:Je}):null]}),(0,l.jsxs)("div",{className:"w-full mt-16 flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:gap-x-10 items-center",children:[tt?(0,l.jsx)("button",{type:"button",className:(0,A.AK)(m?"bg-drizzle-green-light":"bg-drizzle-green hover:bg-drizzle-green-dark","w-full h-[60px] text-xl font-semibold rounded-3xl text-black shadow-drizzle"),disabled:m,onClick:function(){nt(!1)},children:"BACK"}):null,(0,l.jsx)("button",{type:"button",className:(0,A.AK)(m||!pe?"bg-drizzle-green-light":"bg-drizzle-green hover:bg-drizzle-green-dark","w-full h-[60px] text-xl font-semibold rounded-3xl text-black shadow-drizzle"),disabled:m||!pe,onClick:function(){dt()},children:e.user.loggedIn?pe?tt?"CRIAR":"VISUALIZAR":"Selecione um modo":"Conectar carteira"})]}),(0,l.jsx)(B.Z,{open:rt,setOpen:at,url:it})]})}function ee(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"container mx-auto max-w-[920px] min-w-[380px] px-6",children:(0,l.jsx)(J,{user:e.user})})})}}},function(e){e.O(0,[728,297,915,3,585,774,888,179],(function(){return t=9232,e(e.s=t);var t}));var t=e.O();_N_E=t}]);