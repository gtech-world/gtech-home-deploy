(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{4550:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions/governance",function(){return l(5679)}])},2301:function(e,t,l){"use strict";l.d(t,{T:function(){return D}});var n=l(1527),s=l(4875),a=l.n(s),i=l(959),r=l(3517),m=l.n(r),c=l(3190),d=l(367),o=l(2239),x=l(7994),h=l(7191),f=l(183);let u=e=>[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),isSelected:!1,children:[{href:"/solutions/web3",name:e("navigation.list.item2.children.child1.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/automotive",name:e("navigation.list.item2.children.child3.name")}]}],g=["/enstatement","/zhstatement"];function p(e){let{t,i18n:l}=(0,f.$G)("common"),{data:s=[]}=e,{pathname:r,push:o}=(0,c.useRouter)(),h=(0,i.useRef)(),[u,p]=(0,i.useState)(""),j=()=>{let e="en"===l.language?"zh":"en";l.changeLanguage(e),g.indexOf(r)>-1&&o("en"===e?"/enstatement":"zhstatement")};return(0,d.Z)(h,()=>!!u&&p("")),(0,n.jsxs)("div",{className:"text-xl flex md:hidden",ref:h,children:[s.map((e,t)=>e.children&&e.children.length?(0,n.jsxs)("div",{className:"relative".concat(0===t?"":" ml-14"),children:[(0,n.jsxs)("div",{className:"cursor-pointer flex",onClick:()=>p(u?"":e.href),children:[(0,n.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(r)?" border-b-2 border-green font-bold":""),children:e.name}),(0,n.jsx)(x.kR5,{className:a()("ml-2 mt-1",u?"rotate-180":"")})]}),u===e.href&&(0,n.jsx)("ul",{style:{whiteSpace:"nowrap"},className:"w-auto text-black shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)(m(),{href:e.href,className:a()(r===e.href?"text-green":""),children:e.name})},"nav-children-".concat(t)))})]},"nav-".concat(t)):(0,n.jsx)(m(),{className:"".concat(0===t?"":" ml-14"),href:e.href,children:(0,n.jsx)("span",{className:"pb-2.5".concat(e.href===r?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(t))),(0,n.jsx)("span",{className:"cursor-pointer ml-12",onClick:j,children:t("translation")})]})}function j(e){let{pathname:t}=(0,c.useRouter)(),{data:l=[]}=e;return(0,n.jsx)("ul",{className:"text-sm mt-3 leading-8",children:l.map((e,l)=>(0,n.jsx)("li",{children:e.href?(0,n.jsx)(m(),{href:e.href,className:a()("inline-block w-full",t===e.href?"text-green":""),children:e.name}):(0,n.jsx)("span",{className:"inline-block w-full",onClick:()=>e.onClick(),children:e.name})},"MobileSubNav-".concat(l)))})}function b(e){let{t,i18n:l}=(0,f.$G)("common"),{data:s=[]}=e,{pathname:r,push:u}=(0,c.useRouter)(),p=(0,i.useRef)(),[b,N]=(0,i.useState)([]),[v,w]=(0,o.Z)(!1),k=s.concat({href:"language",name:t("translation_m"),children:[{name:"English",href:"",onClick:()=>{_("en"),w(!1)}},{name:"中文",href:"",onClick:()=>{_("zh"),w(!1)}}]});(0,d.Z)(p,()=>v&&w(!1));let _=e=>{l.changeLanguage(e),console.log(r),g.indexOf(r)>-1&&u("en"===e?"/enstatement":"zhstatement")},y=(e,t)=>{e.stopPropagation();let l=[...b];if(t){let n=l.indexOf(t);-1===n?l.push(t):l.splice(n,1),N(l)}};return(0,n.jsxs)("div",{className:"hidden md:block",ref:p,children:[(0,n.jsx)(h.otZ,{className:"text-green text-4xl",onClick:w}),v&&(0,n.jsx)("div",{className:"absolute text-black right-0 bg-white w-screen px-5 py-4",children:k.map((e,t)=>{let l=e.children&&e.children.length;return(0,n.jsxs)("div",{className:a()("mt-4",0===t?"mt-3":""),children:[(0,n.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[l?(0,n.jsx)("span",{onClick:t=>y(t,e.href),className:"inline-block; w-full",children:e.name}):(0,n.jsx)(m(),{className:a()("inline-block w-full",r===e.href?"text-green":""),href:e.href,children:e.name}),l&&(0,n.jsx)(x.kR5,{className:(null==b?void 0:b.indexOf(e.href))>-1?"rotate-180":""})]}),(null==b?void 0:b.indexOf(e.href))>-1&&(0,n.jsx)(j,{data:e.children})]},"MobileNav-".concat(t))})})]})}function N(){let{t:e}=(0,f.$G)("common"),t=u(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{data:t}),(0,n.jsx)(b,{data:t})]})}var v=l(2362);function w(e){let{sticky:t=!0,isTransparent:l,className:s}=(null==e?void 0:e.props)||{},[r,c]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=localStorage.getItem("tips");c(!e)},[]);let d=()=>{localStorage.setItem("tips","enable"),c(!1)};return(0,n.jsxs)("div",{className:a()(t?"sticky":"","w-full z-10 top-0 ",l?"bg-transparent":"bg-white",s),children:[r&&(0,n.jsxs)("div",{className:"bg-green text-white text-base h-[4.3125rem] flex justify-center px-8 items-center md:text-sm",children:["GTech’s official site is under development and this version is for demonstration purpose only. For more information, please contract email hi@gtech.world.",(0,n.jsx)(v.q5L,{onClick:d,className:"absolute right-6 text-xl cursor-pointer md:top-4 md:right-5"})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center px-32 py-3 md:px-5",children:[(0,n.jsx)(m(),{href:"/",children:(0,n.jsx)("img",{className:"block w-16 h-11",alt:"",src:"/images/logo.svg"})}),(0,n.jsx)(N,{})]})]})}function k(e){let{data:t}=e;return(0,n.jsx)("ul",{className:"flex flex-col text-base mt-4 leading-[2.2] font-normal md:text-[0.9375rem]",children:t.length&&t.map((e,t)=>e.href?(0,n.jsx)(m(),{href:e.href,children:e.name},"".concat(t)):(0,n.jsx)("span",{children:e.name}))})}function _(){let{t:e,i18n:t}=(0,f.$G)("common"),l=u(e).concat([{name:e("navigation.list.item3.name"),href:"",children:[{name:"hi@gtech.world"}]}]);return(0,n.jsx)("div",{className:"bg-bgc h-[21.875rem] md:h-auto md:px-8 md:py-12",children:(0,n.jsxs)("div",{className:"flex flex-col w-container mx-auto md:w-full",children:[(0,n.jsx)("div",{className:"flex flex-col mt-12",children:(0,n.jsxs)("div",{className:"flex md:flex-col",children:[(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"md:float-left",href:"/",children:(0,n.jsx)("img",{src:"/images/logo.svg"})})}),(0,n.jsx)("ul",{className:"flex justify-between ml-[14.375rem] mt-4 md:flex-col md:ml-0",children:l.map((e,t)=>(0,n.jsxs)("li",{className:"mr-24 md:mt-5",children:[e.href&&!e.children?(0,n.jsx)(m(),{className:"text-2xl font-bold md:text-xl",href:e.href,children:e.name}):(0,n.jsx)("span",{className:"text-2xl font-bold md:text-xl",children:e.name}),e.children&&(0,n.jsx)(k,{data:e.children})]},"".concat(t)))})]})}),(0,n.jsxs)("div",{className:"mt-16 pt-4 border-t border-black text-sm flex justify-between md:flex-col md:mt-8",children:[(0,n.jsx)("span",{children:e("footer.company")}),(0,n.jsx)("span",{onClick:()=>window.open("zh"===t.language?"/zhstatement":"/enstatement","_blank"),className:"cursor-pointer md:mt-5",children:e("footer.viewBtn")})]})]})})}var y=l(3191);function D(e){let{className:t,headerProps:l,children:s,...r}=e,{t:m,i18n:c}=(0,f.$G)("common"),d=(0,y.getCookie)("statement"),[o,x]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{x(!d)},[]),(0,n.jsxs)("div",{className:"h-full w-full bg-slate-50 relative",children:[(0,n.jsx)(w,{props:l}),(0,n.jsx)("div",{className:a()("w-full mx-auto text-lg md:text-sm",t),...r,children:s}),(0,n.jsx)(_,{}),o&&(0,n.jsxs)("div",{className:"sticky bottom-0 left-0 z-10 h-20 w-full z-10 flex justify-center items-center bg-white text-sm shadow-[0_-3px_15px_0_rgba(0,0,0,0.1)] md:flex-col md:px-5 md:h-auto md:pb-5",children:[(0,n.jsx)("span",{className:"md:px-8 md:text-center md:pb-8 md:pt-12",children:m("footer.text")}),(0,n.jsx)("div",{onClick:()=>{(0,y.setCookie)("statement","access"),x(!1)},className:"border border-black bg-black text-white px-4 h-11 rounded flex items-center justify-center ml-5 cursor-pointer md:w-full md:mb-4 md:ml-0",children:m("footer.acceptBtn")}),(0,n.jsx)("div",{onClick:()=>window.open("en"===c.language?"/enstatement":"/zhstatement","_blank"),className:"border border-black px-4 h-11 rounded ml-2.5 flex items-center justify-center cursor-pointer md:w-full md:ml-0",children:m("footer.viewBtn")}),(0,n.jsx)(v.q5L,{onClick:()=>x(!1),className:"absolute right-8 text-xl cursor-pointer md:top-4 md:right-5"})]})]})}},5679:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return o}});var n=l(1527),s=l(2301),a=l(4875),i=l.n(a),r=l(183);function m(){let{t:e}=(0,r.$G)("governance");return(0,n.jsx)("div",{className:"h-[44.625rem] text-white w-full bg-[url(/images/governance_banner.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center px-9 md:h-[28rem]",children:(0,n.jsxs)("div",{className:"bg-blue-1/[.8] flex flex-col justify-center w-[58.5rem] px-8 py-10 h-[13.125rem] text-[2rem] leading-[2.75rem] md:text-lg md:text-center md:px-4 md:py-11 md:w-auto md:h-auto",children:[(0,n.jsx)("h3",{className:"font-bold text-5xl md:text-[1.75rem] md:leading-9",children:e("banner.title")}),(0,n.jsx)("p",{className:"mt-3",children:e("banner.subtitle")})]})})}function c(){let{t:e}=(0,r.$G)("governance");return(0,n.jsxs)("div",{className:"flex flex-col items-center bg-bgc pb-16 md:pb-8",children:[(0,n.jsx)("h3",{className:"w-[61.5rem] my-16 text-center leading-[65px] md:leading-6 md:w-full md:my-8 md:px-12",children:e("powerManagement.title")}),(0,n.jsxs)("div",{className:"flex flex-col w-container md:w-full",children:[(0,n.jsx)("div",{className:"h-[13rem] bg-[url(/images/industrial.svg)] bg-no-repeat bg-center"}),(0,n.jsxs)("div",{className:"mt-11 md:px-3 md:text-center md:mt-8",children:[(0,n.jsx)("p",{className:"mb-5",children:e("powerManagement.text1")}),(0,n.jsx)("p",{children:e("powerManagement.text2")})]})]})]})}function d(){let{t:e}=(0,r.$G)("governance"),t=[{title:e("greenData.item1.list.item1.title"),text:e("greenData.item1.list.item1.text")},{title:e("greenData.item1.list.item2.title"),text:e("greenData.item1.list.item2.text")},{title:e("greenData.item1.list.item3.title"),text:e("greenData.item1.list.item3.text")},{title:e("greenData.item1.list.item4.title"),text:e("greenData.item1.list.item4.text")}],l=[{title:e("greenData.item2.list.item1.title"),text:e("greenData.item2.list.item1.text")},{title:e("greenData.item2.list.item2.title"),text:e("greenData.item2.list.item2.text")},{title:e("greenData.item2.list.item3.title"),text:e("greenData.item2.list.item3.text")}];return(0,n.jsxs)("div",{className:"w-full flex flex-col items-center pt-16 pb-20 md:py-8",children:[(0,n.jsxs)("h3",{className:"px-12 text-center",children:[(0,n.jsx)("span",{className:"text-green",children:e("greenData.title.green")})," ",e("greenData.title.text")]}),(0,n.jsxs)("div",{className:"flex mt-20 md:flex-col-reverse md:mt-8",children:[(0,n.jsxs)("div",{className:"w-[38.625rem] mr-[5.75rem] md:w-full md:text-center md:px-3",children:[(0,n.jsx)("h4",{className:"text-[1.75rem] leading-[32px] font-bold mb-10 md:text-base",children:e("greenData.item1.subtitle")}),t.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("h6",{className:i()("font-bold",0!==t?"mt-6":""),children:e.title}),(0,n.jsx)("p",{children:e.text})]},"powerManagement-".concat(t)))]}),(0,n.jsx)("img",{className:"w-[30.625rem] mx-auto md:max-w-[18.375rem] md:w-full md:mb-8",src:"/images/platform.svg",alt:""})]}),(0,n.jsxs)("div",{className:"flex mt-24 md:flex-col md:mt-12",children:[(0,n.jsxs)("div",{className:"flex flex-col md:flex-col-reverse",children:[(0,n.jsx)("h4",{className:"text-[1.75rem] font-bold mb-8 md:text-base md:text-center md:mt-8",children:e("greenData.item2.subtitle")}),(0,n.jsx)("img",{className:"mx-auto w-[34.625rem] md:max-w-[20.875rem] md:w-full",src:"/images/green_data.svg",alt:""})]}),(0,n.jsx)("div",{className:"ml-[4.75rem] w-[35.56rem] px-3 md:w-full md:ml-0 md:text-center",children:l.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("h6",{className:"font-bold",children:e.title}),(0,n.jsx)("p",{className:"mb-5",children:e.text})]},"greenData-".concat(t)))})]})]})}function o(){return(0,n.jsxs)(s.T,{children:[(0,n.jsx)(m,{}),(0,n.jsx)(c,{}),(0,n.jsx)(d,{})]})}}},function(e){e.O(0,[455,222,431,774,888,179],function(){return e(e.s=4550)}),_N_E=e.O()}]);