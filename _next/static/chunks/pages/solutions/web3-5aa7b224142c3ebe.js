(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[984],{7349:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions/web3",function(){return s(6382)}])},1854:function(e,t,s){"use strict";s.d(t,{z:function(){return i}});var l=s(1527);s(959);var a=s(4875),n=s.n(a);function i(e){let{text:t,className:s,onClick:a}=e;return(0,l.jsx)("div",{onClick:()=>a&&a(),className:n()("inline-block bg-green text-white text-lg py-2.5 px-8 rounded-lg cursor-pointer text-center hover:bg-green-hover",s),children:t})}},2301:function(e,t,s){"use strict";s.d(t,{T:function(){return C}});var l=s(1527),a=s(4875),n=s.n(a),i=s(959),r=s(3517),m=s.n(r),c=s(3190),d=s(367),o=s(2239),x=s(7994),h=s(7191),f=s(183);let u=e=>[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),isSelected:!1,children:[{href:"/solutions/web3",name:e("navigation.list.item2.children.child1.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/automotive",name:e("navigation.list.item2.children.child3.name")}]}],g=["/enstatement","/zhstatement"];function p(e){let{t,i18n:s}=(0,f.$G)("common"),{data:a=[]}=e,{pathname:r,push:o}=(0,c.useRouter)(),h=(0,i.useRef)(),[u,p]=(0,i.useState)(""),b=()=>{let e="en"===s.language?"zh":"en";s.changeLanguage(e),g.indexOf(r)>-1&&o("en"===e?"/enstatement":"zhstatement")};return(0,d.Z)(h,()=>!!u&&p("")),(0,l.jsxs)("div",{className:"text-xl flex md:hidden",ref:h,children:[a.map((e,t)=>e.children&&e.children.length?(0,l.jsxs)("div",{className:"relative".concat(0===t?"":" ml-14"),children:[(0,l.jsxs)("div",{className:"cursor-pointer flex",onClick:()=>p(u?"":e.href),children:[(0,l.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(r)?" border-b-2 border-green font-bold":""),children:e.name}),(0,l.jsx)(x.kR5,{className:n()("ml-2 mt-1",u?"rotate-180":"")})]}),u===e.href&&(0,l.jsx)("ul",{style:{whiteSpace:"nowrap"},className:"w-auto text-black shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,t)=>(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:e.href,className:n()(r===e.href?"text-green":""),children:e.name})},"nav-children-".concat(t)))})]},"nav-".concat(t)):(0,l.jsx)(m(),{className:"".concat(0===t?"":" ml-14"),href:e.href,children:(0,l.jsx)("span",{className:"pb-2.5".concat(e.href===r?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(t))),(0,l.jsx)("span",{className:"cursor-pointer ml-12",onClick:b,children:t("translation")})]})}function b(e){let{pathname:t}=(0,c.useRouter)(),{data:s=[]}=e;return(0,l.jsx)("ul",{className:"text-sm mt-3 leading-8",children:s.map((e,s)=>(0,l.jsx)("li",{children:e.href?(0,l.jsx)(m(),{href:e.href,className:n()("inline-block w-full",t===e.href?"text-green":""),children:e.name}):(0,l.jsx)("span",{className:"inline-block w-full",onClick:()=>e.onClick(),children:e.name})},"MobileSubNav-".concat(s)))})}function j(e){let{t,i18n:s}=(0,f.$G)("common"),{data:a=[]}=e,{pathname:r,push:u}=(0,c.useRouter)(),p=(0,i.useRef)(),[j,N]=(0,i.useState)([]),[w,v]=(0,o.Z)(!1),k=a.concat({href:"language",name:t("translation_m"),children:[{name:"English",href:"",onClick:()=>{y("en"),v(!1)}},{name:"中文",href:"",onClick:()=>{y("zh"),v(!1)}}]});(0,d.Z)(p,()=>w&&v(!1));let y=e=>{s.changeLanguage(e),console.log(r),g.indexOf(r)>-1&&u("en"===e?"/enstatement":"zhstatement")},_=(e,t)=>{e.stopPropagation();let s=[...j];if(t){let l=s.indexOf(t);-1===l?s.push(t):s.splice(l,1),N(s)}};return(0,l.jsxs)("div",{className:"hidden md:block",ref:p,children:[(0,l.jsx)(h.otZ,{className:"text-green text-4xl",onClick:v}),w&&(0,l.jsx)("div",{className:"absolute text-black right-0 bg-white w-screen px-5 py-4",children:k.map((e,t)=>{let s=e.children&&e.children.length;return(0,l.jsxs)("div",{className:n()("mt-4",0===t?"mt-3":""),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[s?(0,l.jsx)("span",{onClick:t=>_(t,e.href),className:"inline-block; w-full",children:e.name}):(0,l.jsx)(m(),{className:n()("inline-block w-full",r===e.href?"text-green":""),href:e.href,children:e.name}),s&&(0,l.jsx)(x.kR5,{className:(null==j?void 0:j.indexOf(e.href))>-1?"rotate-180":""})]}),(null==j?void 0:j.indexOf(e.href))>-1&&(0,l.jsx)(b,{data:e.children})]},"MobileNav-".concat(t))})})]})}function N(){let{t:e}=(0,f.$G)("common"),t=u(e);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{data:t}),(0,l.jsx)(j,{data:t})]})}var w=s(2362);function v(e){let{sticky:t=!0,isTransparent:s,className:a}=(null==e?void 0:e.props)||{},[r,c]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=localStorage.getItem("tips");c(!e)},[]);let d=()=>{localStorage.setItem("tips","enable"),c(!1)};return(0,l.jsxs)("div",{className:n()(t?"sticky":"","w-full z-10 top-0 ",s?"bg-transparent":"bg-white",a),children:[r&&(0,l.jsxs)("div",{className:"bg-green text-white text-base h-[4.3125rem] flex justify-center px-8 items-center md:text-sm",children:["GTech’s official site is under development and this version is for demonstration purpose only. For more information, please contract email hi@gtech.world.",(0,l.jsx)(w.q5L,{onClick:d,className:"absolute right-6 text-xl cursor-pointer md:top-4 md:right-5"})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center px-32 py-5 md:px-5",children:[(0,l.jsx)(m(),{href:"/",children:(0,l.jsx)("img",{className:"block w-16 w-[7.5rem]",alt:"",src:"/images/logo.svg"})}),(0,l.jsx)(N,{})]})]})}function k(e){let{data:t}=e;return(0,l.jsx)("ul",{className:"flex flex-col text-base mt-4 leading-[2.2] font-normal md:text-[0.9375rem]",children:t.length&&t.map((e,t)=>e.href?(0,l.jsx)(m(),{href:e.href,children:e.name},"".concat(t)):(0,l.jsx)("span",{children:e.name}))})}function y(){let{t:e,i18n:t}=(0,f.$G)("common"),s=u(e).concat([{name:e("navigation.list.item3.name"),href:"",children:[{name:"hi@gtech.world"}]}]);return(0,l.jsx)("div",{className:"bg-bgc h-[21.875rem] md:h-auto md:px-8 md:py-12",children:(0,l.jsxs)("div",{className:"flex flex-col w-container mx-auto md:w-full",children:[(0,l.jsx)("div",{className:"flex flex-col mt-12",children:(0,l.jsxs)("div",{className:"flex md:flex-col",children:[(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"md:float-left",href:"/",children:(0,l.jsx)("img",{src:"/images/logo.svg"})})}),(0,l.jsx)("ul",{className:"flex justify-between ml-[14.375rem] mt-4 md:flex-col md:ml-0",children:s.map((e,t)=>(0,l.jsxs)("li",{className:"mr-24 md:mt-5",children:[e.href&&!e.children?(0,l.jsx)(m(),{className:"text-2xl font-bold md:text-xl",href:e.href,children:e.name}):(0,l.jsx)("span",{className:"text-2xl font-bold md:text-xl",children:e.name}),e.children&&(0,l.jsx)(k,{data:e.children})]},"".concat(t)))})]})}),(0,l.jsxs)("div",{className:"mt-16 pt-4 border-t border-black text-sm flex justify-between md:flex-col md:mt-8",children:[(0,l.jsx)("span",{children:e("footer.company")}),(0,l.jsx)("span",{onClick:()=>window.open("zh"===t.language?"/zhstatement":"/enstatement","_blank"),className:"cursor-pointer md:mt-5",children:e("footer.viewBtn")})]})]})})}var _=s(3191);function C(e){let{className:t,headerProps:s,children:a,...r}=e,{t:m,i18n:c}=(0,f.$G)("common"),d=(0,_.getCookie)("statement"),[o,x]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{x(!d)},[]),(0,l.jsxs)("div",{className:"h-full w-full bg-slate-50 relative",children:[(0,l.jsx)(v,{props:s}),(0,l.jsx)("div",{className:n()("w-full mx-auto text-lg md:text-sm",t),...r,children:a}),(0,l.jsx)(y,{}),o&&(0,l.jsxs)("div",{className:"sticky bottom-0 left-0 z-10 h-20 w-full z-10 flex justify-center items-center bg-white text-sm shadow-[0_-3px_15px_0_rgba(0,0,0,0.1)] md:flex-col md:px-5 md:h-auto md:pb-5",children:[(0,l.jsx)("span",{className:"md:px-8 md:text-center md:pb-8 md:pt-12",children:m("footer.text")}),(0,l.jsx)("div",{onClick:()=>{(0,_.setCookie)("statement","access"),x(!1)},className:"border border-black bg-black text-white px-4 h-11 rounded flex items-center justify-center ml-5 cursor-pointer md:w-full md:mb-4 md:ml-0",children:m("footer.acceptBtn")}),(0,l.jsx)("div",{onClick:()=>window.open("en"===c.language?"/enstatement":"/zhstatement","_blank"),className:"border border-black px-4 h-11 rounded ml-2.5 flex items-center justify-center cursor-pointer md:w-full md:ml-0",children:m("footer.viewBtn")}),(0,l.jsx)(w.q5L,{onClick:()=>x(!1),className:"absolute right-8 text-xl cursor-pointer md:top-4 md:right-5"})]})]})}},6382:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var l=s(1527),a=s(2301),n=s(1854),i=s(183);function r(){let{t:e}=(0,i.$G)("web3");return(0,l.jsx)("div",{className:"h-[44.625rem] w-full bg-[url(/images/map.png)] bg-no-repeat bg-[length:auto_100%] bg-center flex justify-center items-center px-9 md:h-[26rem]",children:(0,l.jsxs)("div",{className:"bg-green/[.92] flex flex-col justify-center w-[58.5rem] px-8 py-10 text-[2rem] leading-[2.75rem] text-yellow md:text-lg md:text-center md:px-4 md:py-11 md:w-auto md:h-auto",children:[(0,l.jsx)("h3",{className:"text-white font-bold text-5xl md:text-[1.75rem] md:leading-9",children:e("banner.title")}),(0,l.jsx)("p",{className:"mt-3",children:e("banner.subtitle")})]})})}function m(){let{t:e}=(0,i.$G)("web3");return(0,l.jsxs)("div",{className:"flex flex-col items-center pb-20 md:pb-8",children:[(0,l.jsx)("h3",{className:"my-16 text-center md:px-8 md:my-12",children:e("storageInitiative.title")}),(0,l.jsxs)("div",{className:"flex md:flex-col md:px-3",children:[(0,l.jsx)("img",{className:"mx-auto w-[29.875rem] md:w-full md:max-w-[20.875rem]",src:"/images/web3_pic.svg",alt:""}),(0,l.jsxs)("div",{className:"ml-14 w-[39.75rem] leading-6 md:w-full md:ml-0 md:text-center md:mt-8",children:[(0,l.jsx)("h4",{className:"text-2xl font-bold md:text-base",children:e("storageInitiative.list.item1.title")}),(0,l.jsx)("p",{className:"mt-5",children:e("storageInitiative.list.item1.text.p1")}),(0,l.jsx)("p",{children:e("storageInitiative.list.item1.text.p2")}),(0,l.jsx)("h4",{className:"text-2xl font-bold mb-5 mt-8 md:text-base",children:e("storageInitiative.list.item2.title")}),(0,l.jsx)("p",{children:e("storageInitiative.list.item2.text.p1")}),(0,l.jsx)("p",{children:e("storageInitiative.list.item2.text.p2")})]})]})]})}function c(){let{t:e}=(0,i.$G)("web3");return(0,l.jsxs)("div",{className:"w-full bg-bgc flex flex-col items-center pt-16 pb-16 md:pt-8 md:pb-10",children:[(0,l.jsx)("h3",{className:"text-green mb-20 px-12 text-center md:mb-8",children:e("storageMiddlewares.title")}),(0,l.jsxs)("div",{className:"flex items-center md:flex-col-reverse text-base",children:[(0,l.jsx)("div",{className:"w-[29.875rem] md:w-full md:text-center md:mt-8",children:(0,l.jsxs)("div",{className:"px-7",children:[(0,l.jsx)("p",{children:e("storageMiddlewares.text")}),(0,l.jsx)("h5",{className:"mt-8 mb-5",children:e("storageMiddlewares.list.item1.title")}),(0,l.jsx)("p",{children:e("storageMiddlewares.list.item1.text")}),(0,l.jsx)("h5",{className:"mt-8 mb-5",children:e("storageMiddlewares.list.item2.title")}),(0,l.jsx)("p",{children:e("storageMiddlewares.list.item2.text")})]})}),(0,l.jsxs)("div",{className:"flex ml-24 md:flex-col md:px-8 md:ml-0",children:[(0,l.jsxs)("div",{className:"w-[19.625rem] h-[23.5rem] border-2 border-black bg-white rounded-l-xl md:rounded-t-xl md:rounded-b-none md:pb-2",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center border-b-2 border-black pt-6 pb-5",children:[(0,l.jsx)("div",{className:"text-[1.75rem] font-medium",children:"PaaS"}),(0,l.jsx)("span",{className:"leading-[1.3125rem] mt-[.625rem]",children:e("storageMiddlewares.table.paas.text")})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center py-7",children:[(0,l.jsxs)("div",{className:"flex items-center text-4xl mb-8",children:[(0,l.jsx)("span",{className:"mr-2",children:"W3"}),(0,l.jsx)("img",{src:"/images/container.svg"}),(0,l.jsx)("span",{className:"px-3",children:"+"}),(0,l.jsx)("span",{className:"mr-2",children:"W3"}),(0,l.jsx)("img",{src:"/images/upload.svg"})]}),(0,l.jsx)("h6",{className:"text-[1.35rem] leading-5 font-medium leading-7 mb-2 underline no-skip-ink",children:"W3Buckets"}),(0,l.jsx)("span",{className:"leading-[1.375rem]",children:e("storageMiddlewares.table.paas.w3bucket")}),(0,l.jsx)("h6",{className:"text-[1.35rem] leading-5 font-medium leading-7 mt-6 mb-2 underline no-skip-ink",children:"W3Gateways"}),(0,l.jsx)("span",{className:"leading-[1.375rem]",children:e("storageMiddlewares.table.paas.w3gateways")})]})]}),(0,l.jsxs)("div",{className:"w-[19.625rem] h-[23.5rem] border-l-2 border-black border-2 border-black bg-white rounded-r-xl md:mt-3 md:rounded-b-xl md:rounded-t-none md:pb-12",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center border-b-2 border-black pt-6 pb-5",children:[(0,l.jsx)("div",{className:"text-[1.75rem] font-medium",children:"SaaS"}),(0,l.jsx)("span",{className:"leading-[1.3125rem] mt-[.625rem]",children:e("storageMiddlewares.table.saas.text")})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center py-7 px-7",children:[(0,l.jsxs)("div",{className:"flex items-center text-4xl",children:[(0,l.jsx)("span",{className:"mr-2",children:"W3"}),(0,l.jsx)("img",{src:"/images/widget.svg",alt:""})]}),(0,l.jsx)("h6",{className:"text-[1.35rem] leading-5 font-medium leading-7 mt-8 mb-2 underline no-skip-ink",children:"Web3 Storage Widgets"}),(0,l.jsx)("p",{className:"leading-[1.375rem] text-center",children:e("storageMiddlewares.table.saas.p1")}),(0,l.jsx)("p",{className:"leading-[1.375rem] text-center",children:e("storageMiddlewares.table.saas.p2")}),(0,l.jsx)("p",{className:"leading-[1.375rem] text-center",children:e("storageMiddlewares.table.saas.p3")}),(0,l.jsx)("p",{className:"leading-[1.375rem] text-center",children:e("storageMiddlewares.table.saas.p4")})]})]})]})]}),(0,l.jsx)(n.z,{onClick:()=>window.open("https://cloud3.cc/","_blank"),className:"w-96 mt-16 md:max-w-[19.375rem] md:mt-8",text:e("storageMiddlewares.button")})]})}function d(){let{t:e}=(0,i.$G)("web3"),t=[{title:e("storageCases.list.item1.title"),text:e("storageCases.list.item1.text"),imgUrl:"/images/uniswap.svg"},{title:e("storageCases.list.item2.title"),text:e("storageCases.list.item2.text"),imgUrl:"/images/aave.svg"}];return(0,l.jsxs)("div",{className:"flex flex-col items-center bg-white",children:[(0,l.jsx)("h3",{className:"text-center my-16 px-12 md:my-8",children:e("storageCases.title")}),(0,l.jsx)("div",{className:"flex flex-col mt-10 md:mt-0",children:t.map((e,t)=>(0,l.jsxs)("div",{className:"mb-20 flex px-3 md:flex-col md:mb-10",children:[(0,l.jsx)("img",{className:"mx-auto w-[21.375rem] md:w-[17.125rem]",src:e.imgUrl,alt:""}),(0,l.jsxs)("div",{className:"w-[50.75rem] ml-12 md:w-full md:ml-0 md:text-center",children:[(0,l.jsx)("h5",{className:"md:px-12 md:mt-4",children:e.title}),(0,l.jsx)("p",{className:"mt-5",children:e.text})]})]},"data-".concat(t)))})]})}function o(){return(0,l.jsxs)(a.T,{children:[(0,l.jsx)(r,{}),(0,l.jsx)(m,{}),(0,l.jsx)(c,{}),(0,l.jsx)(d,{})]})}}},function(e){e.O(0,[455,222,431,774,888,179],function(){return e(e.s=7349)}),_N_E=e.O()}]);