(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{4485:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(9388)}])},2301:function(e,t,n){"use strict";n.d(t,{T:function(){return C}});var l=n(1527),s=n(4875),a=n.n(s),c=n(959),r=n(3517),i=n.n(r),o=n(3190),m=n(367),d=n(2239),h=n(7994),x=n(7191),f=n(183);let u=e=>[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),isSelected:!1,children:[{href:"/solutions/web3",name:e("navigation.list.item2.children.child1.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/automotive",name:e("navigation.list.item2.children.child3.name")}]}],p=["/enstatement","/zhstatement"];function g(e){let{t,i18n:n}=(0,f.$G)("common"),{data:s=[]}=e,{pathname:r,push:d}=(0,o.useRouter)(),x=(0,c.useRef)(),[u,g]=(0,c.useState)(""),j=()=>{let e="en"===n.language?"zh":"en";n.changeLanguage(e),p.indexOf(r)>-1&&d("en"===e?"/enstatement":"zhstatement")};return(0,m.Z)(x,()=>!!u&&g("")),(0,l.jsxs)("div",{className:"text-xl flex md:hidden",ref:x,children:[s.map((e,t)=>e.children&&e.children.length?(0,l.jsxs)("div",{className:"relative".concat(0===t?"":" ml-14"),children:[(0,l.jsxs)("div",{className:"cursor-pointer flex",onClick:()=>g(u?"":e.href),children:[(0,l.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(r)?" border-b-2 border-green font-bold":""),children:e.name}),(0,l.jsx)(h.kR5,{className:a()("ml-2 mt-1",u?"rotate-180":"")})]}),u===e.href&&(0,l.jsx)("ul",{style:{whiteSpace:"nowrap"},className:"w-auto text-black shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,t)=>(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:e.href,className:a()(r===e.href?"text-green":""),children:e.name})},"nav-children-".concat(t)))})]},"nav-".concat(t)):(0,l.jsx)(i(),{className:"".concat(0===t?"":" ml-14"),href:e.href,children:(0,l.jsx)("span",{className:"pb-2.5".concat(e.href===r?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(t))),(0,l.jsx)("span",{className:"cursor-pointer ml-12",onClick:j,children:t("translation")})]})}function j(e){let{pathname:t}=(0,o.useRouter)(),{data:n=[]}=e;return(0,l.jsx)("ul",{className:"text-sm mt-3 leading-8",children:n.map((e,n)=>(0,l.jsx)("li",{children:e.href?(0,l.jsx)(i(),{href:e.href,className:a()("inline-block w-full",t===e.href?"text-green":""),children:e.name}):(0,l.jsx)("span",{className:"inline-block w-full",onClick:()=>e.onClick(),children:e.name})},"MobileSubNav-".concat(n)))})}function b(e){let{t,i18n:n}=(0,f.$G)("common"),{data:s=[]}=e,{pathname:r,push:u}=(0,o.useRouter)(),g=(0,c.useRef)(),[b,N]=(0,c.useState)([]),[v,w]=(0,d.Z)(!1),k=s.concat({href:"language",name:t("translation_m"),children:[{name:"English",href:"",onClick:()=>{_("en"),w(!1)}},{name:"中文",href:"",onClick:()=>{_("zh"),w(!1)}}]});(0,m.Z)(g,()=>v&&w(!1));let _=e=>{n.changeLanguage(e),console.log(r),p.indexOf(r)>-1&&u("en"===e?"/enstatement":"zhstatement")},y=(e,t)=>{e.stopPropagation();let n=[...b];if(t){let l=n.indexOf(t);-1===l?n.push(t):n.splice(l,1),N(n)}};return(0,l.jsxs)("div",{className:"hidden md:block",ref:g,children:[(0,l.jsx)(x.otZ,{className:"text-green text-4xl",onClick:w}),v&&(0,l.jsx)("div",{className:"absolute text-black right-0 bg-white w-screen px-5 py-4",children:k.map((e,t)=>{let n=e.children&&e.children.length;return(0,l.jsxs)("div",{className:a()("mt-4",0===t?"mt-3":""),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[n?(0,l.jsx)("span",{onClick:t=>y(t,e.href),className:"inline-block; w-full",children:e.name}):(0,l.jsx)(i(),{className:a()("inline-block w-full",r===e.href?"text-green":""),href:e.href,children:e.name}),n&&(0,l.jsx)(h.kR5,{className:(null==b?void 0:b.indexOf(e.href))>-1?"rotate-180":""})]}),(null==b?void 0:b.indexOf(e.href))>-1&&(0,l.jsx)(j,{data:e.children})]},"MobileNav-".concat(t))})})]})}function N(){let{t:e}=(0,f.$G)("common"),t=u(e);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{data:t}),(0,l.jsx)(b,{data:t})]})}var v=n(2362);function w(e){let{sticky:t=!0,isTransparent:n,className:s}=(null==e?void 0:e.props)||{},[r,o]=(0,c.useState)(!1),{t:m}=(0,f.$G)("common");(0,c.useEffect)(()=>{let e=localStorage.getItem("tips");o(!e)},[]);let d=()=>{localStorage.setItem("tips","enable"),o(!1)};return(0,l.jsxs)("div",{className:a()(t?"sticky":"","w-full z-10 top-0 ",n?"bg-transparent":"bg-white",s),children:[r&&(0,l.jsxs)("div",{className:"bg-green text-white text-base py-5 flex justify-center px-8 items-center md:text-sm",children:[(0,l.jsxs)("span",{className:"inline-block",children:[m("header.tips"),(0,l.jsx)("span",{className:"underline inline-block ml-1.5",children:" hi@gtech.world"}),"."]}),(0,l.jsx)(v.q5L,{onClick:d,className:"absolute right-6 text-xl cursor-pointer md:top-4 md:right-5"})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center px-32 py-5 md:px-5",children:[(0,l.jsx)(i(),{href:"/",children:(0,l.jsx)("img",{className:"block w-16 w-[7.5rem]",alt:"",src:"/images/logo.svg"})}),(0,l.jsx)(N,{})]})]})}function k(e){let{data:t}=e;return(0,l.jsx)("ul",{className:"flex flex-col text-base mt-4 leading-[2.2] font-normal md:text-[0.9375rem]",children:t.length&&t.map((e,t)=>e.href?(0,l.jsx)(i(),{href:e.href,children:e.name},"".concat(t)):(0,l.jsx)("span",{children:e.name}))})}function _(){let{t:e,i18n:t}=(0,f.$G)("common"),n=u(e).concat([{name:e("navigation.list.item3.name"),href:"",children:[{name:"hi@gtech.world"}]}]);return(0,l.jsx)("div",{className:"bg-bgc h-[21.875rem] md:h-auto md:px-8 md:py-12",children:(0,l.jsxs)("div",{className:"flex flex-col w-container mx-auto md:w-full",children:[(0,l.jsx)("div",{className:"flex flex-col mt-12",children:(0,l.jsxs)("div",{className:"flex md:flex-col",children:[(0,l.jsx)("div",{children:(0,l.jsx)(i(),{className:"md:float-left",href:"/",children:(0,l.jsx)("img",{src:"/images/logo.svg"})})}),(0,l.jsx)("ul",{className:"flex justify-between ml-[14.375rem] mt-4 md:flex-col md:ml-0",children:n.map((e,t)=>(0,l.jsxs)("li",{className:"mr-24 md:mt-5",children:[e.href&&!e.children?(0,l.jsx)(i(),{className:"text-2xl font-bold md:text-xl",href:e.href,children:e.name}):(0,l.jsx)("span",{className:"text-2xl font-bold md:text-xl",children:e.name}),e.children&&(0,l.jsx)(k,{data:e.children})]},"".concat(t)))})]})}),(0,l.jsxs)("div",{className:"mt-16 pt-4 border-t border-black text-sm flex justify-between md:flex-col md:mt-8",children:[(0,l.jsx)("span",{children:e("footer.company")}),(0,l.jsx)("span",{onClick:()=>window.open("zh"===t.language?"/zhstatement":"/enstatement","_blank"),className:"cursor-pointer md:mt-5",children:e("footer.viewBtn")})]})]})})}var y=n(3191);function C(e){let{className:t,headerProps:n,children:s,...r}=e,{t:i,i18n:o}=(0,f.$G)("common"),m=(0,y.getCookie)("statement"),[d,h]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{h(!m)},[]),(0,l.jsxs)("div",{className:"h-full w-full bg-slate-50 relative",children:[(0,l.jsx)(w,{props:n}),(0,l.jsx)("div",{className:a()("w-full mx-auto text-lg md:text-sm",t),...r,children:s}),(0,l.jsx)(_,{}),d&&(0,l.jsxs)("div",{className:"sticky bottom-0 left-0 z-10 h-20 w-full z-10 flex justify-center items-center bg-white text-sm shadow-[0_-3px_15px_0_rgba(0,0,0,0.1)] md:flex-col md:px-5 md:h-auto md:pb-5",children:[(0,l.jsx)("span",{className:"md:px-8 md:text-center md:pb-8 md:pt-12",children:i("footer.text")}),(0,l.jsx)("div",{onClick:()=>{(0,y.setCookie)("statement","access"),h(!1)},className:"border border-black bg-black text-white px-4 h-11 rounded flex items-center justify-center ml-5 cursor-pointer md:w-full md:mb-4 md:ml-0",children:i("footer.acceptBtn")}),(0,l.jsx)("div",{onClick:()=>window.open("en"===o.language?"/enstatement":"/zhstatement","_blank"),className:"border border-black px-4 h-11 rounded ml-2.5 flex items-center justify-center cursor-pointer md:w-full md:ml-0",children:i("footer.viewBtn")}),(0,l.jsx)(v.q5L,{onClick:()=>h(!1),className:"absolute right-8 text-xl cursor-pointer md:top-4 md:right-5"})]})]})}},9388:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var l=n(1527),s=n(2301);function a(){return(0,l.jsx)(s.T,{})}}},function(e){e.O(0,[455,222,431,774,888,179],function(){return e(e.s=4485)}),_N_E=e.O()}]);