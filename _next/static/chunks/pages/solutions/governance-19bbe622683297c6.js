(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{4550:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions/governance",function(){return n(5679)}])},9767:function(e,t,n){"use strict";n.d(t,{T:function(){return k}});var l=n(1527),s=n(4875),a=n.n(s),i=n(959),r=n(3517),m=n.n(r),c=n(3190),d=n(367),o=n(2239),x=n(7994),h=n(7191),u=n(183);function f(e){let{t,i18n:n}=(0,u.$G)("common"),{data:s=[]}=e,{pathname:r}=(0,c.useRouter)(),o=(0,i.useRef)(),[h,f]=(0,i.useState)(""),g=()=>{n.changeLanguage("en"===n.language?"zh":"en")};return(0,d.Z)(o,()=>!!h&&f("")),(0,l.jsxs)("div",{className:"text-xl flex md:hidden",ref:o,children:[s.map((e,t)=>e.children&&e.children.length?(0,l.jsxs)("div",{className:"relative".concat(0===t?"":" ml-14"),children:[(0,l.jsxs)("div",{className:"cursor-pointer flex",onClick:()=>f(h?"":e.href),children:[(0,l.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(r)?" border-b-2 border-green font-bold":""),children:e.name}),(0,l.jsx)(x.kR5,{className:a()("ml-2 mt-1",h?"rotate-180":"")})]}),h===e.href&&(0,l.jsx)("ul",{style:{whiteSpace:"nowrap"},className:"w-auto shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,t)=>(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:e.href,className:a()(r===e.href?"text-green":""),children:e.name})},"nav-children-".concat(t)))})]},"nav-".concat(t)):(0,l.jsx)(m(),{className:"".concat(0===t?"":" ml-14"),href:e.href,children:(0,l.jsx)("span",{className:"pb-2.5".concat(e.href===r?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(t))),(0,l.jsx)("span",{className:"cursor-pointer ml-12",onClick:g,children:t("translation")})]})}function g(e){let{pathname:t}=(0,c.useRouter)(),{data:n=[]}=e;return(0,l.jsx)("ul",{className:"text-sm mt-3 leading-8",children:n.map((e,n)=>(0,l.jsx)("li",{children:e.href?(0,l.jsx)(m(),{href:e.href,className:a()("inline-block w-full",t===e.href?"text-green":""),children:e.name}):(0,l.jsx)("span",{className:"inline-block w-full",onClick:()=>e.onClick(),children:e.name})},"MobileSubNav-".concat(n)))})}function p(e){let{t,i18n:n}=(0,u.$G)("common"),{data:s=[]}=e,{pathname:r}=(0,c.useRouter)(),f=(0,i.useRef)(),[p,b]=(0,i.useState)([]),[j,N]=(0,o.Z)(!1),v=s.concat({href:"language",name:t("translation_m"),children:[{name:"English",href:"",onClick:()=>{w("en"),N(!1)}},{name:"中文",href:"",onClick:()=>{w("zh"),N(!1)}}]});(0,d.Z)(f,()=>j&&N(!1));let w=e=>{n.changeLanguage(e)},k=(e,t)=>{e.stopPropagation();let n=[...p];if(t){let l=n.indexOf(t);-1===l?n.push(t):n.splice(l,1),b(n)}};return(0,l.jsxs)("div",{className:"hidden md:block",ref:f,children:[(0,l.jsx)(h.otZ,{className:"text-green text-4xl",onClick:N}),j&&(0,l.jsx)("div",{className:"absolute right-0 bg-white w-screen px-5 py-4",children:v.map((e,t)=>{let n=e.children&&e.children.length;return(0,l.jsxs)("div",{className:a()("mt-4",0===t?"mt-3":""),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[n?(0,l.jsx)("span",{onClick:t=>k(t,e.href),className:"inline-block; w-full",children:e.name}):(0,l.jsx)(m(),{className:a()("inline-block w-full",r===e.href?"text-green":""),href:e.href,children:e.name}),n&&(0,l.jsx)(x.kR5,{className:(null==p?void 0:p.indexOf(e.href))>-1?"rotate-180":""})]}),(null==p?void 0:p.indexOf(e.href))>-1&&(0,l.jsx)(g,{data:e.children})]},"MobileNav-".concat(t))})})]})}function b(){let{t:e}=(0,u.$G)("common"),t=[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),isSelected:!1,children:[{href:"/solutions/web3",name:e("navigation.list.item2.children.child1.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/automotive",name:e("navigation.list.item2.children.child3.name")}]}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{data:t}),(0,l.jsx)(p,{data:t})]})}function j(e){let{sticky:t=!0,isTransparent:n,className:s}=(null==e?void 0:e.props)||{};return(0,l.jsxs)("div",{className:a()(t?"sticky":"","w-full z-10 flex justify-between items-center top-0 px-32 py-3 md:px-5",n?"bg-transparent":"bg-white",s),children:[(0,l.jsx)(m(),{href:"/",children:(0,l.jsx)("img",{className:"block w-16 h-11",alt:"",src:"/images/logo.svg"})}),(0,l.jsx)(b,{})]})}var N=n(2362),v=n(3191);function w(){let e=(0,v.getCookie)("statement"),{t,i18n:n}=(0,u.$G)("common"),[s,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{a(!e)},[]),s?(0,l.jsxs)("div",{className:"fixed bottom-0 left-0 z-10 h-20 w-full z-10 flex justify-center items-center bg-white text-sm md:flex-col md:px-5 md:h-auto md:pb-5",children:[(0,l.jsx)("span",{className:"md:px-8 md:text-center md:pb-8 md:pt-12",children:t("footer.text")}),(0,l.jsx)("div",{onClick:()=>{(0,v.setCookie)("statement","access"),a(!1)},className:"border border-black bg-black text-white px-4 h-11 rounded flex items-center justify-center ml-5 cursor-pointer md:w-full md:mb-4 md:ml-0",children:t("footer.acceptBtn")}),(0,l.jsx)("div",{onClick:()=>window.open("en"===n.language?"/enstatement":"/zhstatement","_blank"),className:"border border-black px-4 h-11 rounded ml-2.5 flex items-center justify-center cursor-pointer md:w-full md:ml-0",children:t("footer.viewBtn")}),(0,l.jsx)(N.q5L,{onClick:()=>a(!1),className:"absolute right-8 text-xl cursor-pointer md:top-4 md:right-5"})]}):(0,l.jsx)("div",{})}function k(e){let{className:t,headerProps:n,children:s,...i}=e;return(0,l.jsxs)("div",{className:"h-full w-full bg-slate-50 relative",children:[(0,l.jsx)(j,{props:n}),(0,l.jsx)("div",{className:a()("w-full mx-auto text-lg md:text-sm",t),...i,children:s}),(0,l.jsx)(w,{})]})}},5679:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var l=n(1527),s=n(9767),a=n(4875),i=n.n(a),r=n(183);function m(){let{t:e}=(0,r.$G)("governance");return(0,l.jsx)("div",{className:"h-[44.625rem] text-white w-full bg-[url(/images/governance_banner.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center px-9 md:h-[28rem]",children:(0,l.jsxs)("div",{className:"bg-blue-1/[.8] flex flex-col justify-center w-[58.5rem] px-8 py-10 h-[13.125rem] text-[2rem] leading-[2.75rem] md:text-lg md:text-center md:px-4 md:py-11 md:w-auto md:h-auto",children:[(0,l.jsx)("h3",{className:"font-bold text-5xl md:text-[1.75rem] md:leading-9",children:e("banner.title")}),(0,l.jsx)("p",{className:"mt-3",children:e("banner.subtitle")})]})})}function c(){let{t:e}=(0,r.$G)("governance");return(0,l.jsxs)("div",{className:"flex flex-col items-center bg-bgc pb-16 md:pb-8",children:[(0,l.jsx)("h3",{className:"w-[61.5rem] my-16 text-center leading-[65px] md:leading-6 md:w-full md:my-8 md:px-12",children:e("powerManagement.title")}),(0,l.jsxs)("div",{className:"flex flex-col w-container md:w-full",children:[(0,l.jsx)("div",{className:"h-[13rem] bg-[url(/images/industrial.svg)] bg-no-repeat bg-center"}),(0,l.jsxs)("div",{className:"mt-11 md:px-3 md:text-center md:mt-8",children:[(0,l.jsx)("p",{className:"mb-5",children:e("powerManagement.text1")}),(0,l.jsx)("p",{children:e("powerManagement.text2")})]})]})]})}function d(){let{t:e}=(0,r.$G)("governance"),t=[{title:e("greenData.item1.list.item1.title"),text:e("greenData.item1.list.item1.text")},{title:e("greenData.item1.list.item2.title"),text:e("greenData.item1.list.item2.text")},{title:e("greenData.item1.list.item3.title"),text:e("greenData.item1.list.item3.text")},{title:e("greenData.item1.list.item4.title"),text:e("greenData.item1.list.item4.text")}],n=[{title:e("greenData.item2.list.item1.title"),text:e("greenData.item2.list.item1.text")},{title:e("greenData.item2.list.item2.title"),text:e("greenData.item2.list.item2.text")},{title:e("greenData.item2.list.item3.title"),text:e("greenData.item2.list.item3.text")}];return(0,l.jsxs)("div",{className:"w-full flex flex-col items-center pt-16 pb-20 md:py-8",children:[(0,l.jsxs)("h3",{className:"px-12 text-center",children:[(0,l.jsxs)("span",{className:"text-green",children:["'",e("greenData.title.green"),"'"]})," ",e("greenData.title.text")]}),(0,l.jsxs)("div",{className:"flex mt-20 md:flex-col-reverse md:mt-8",children:[(0,l.jsxs)("div",{className:"w-[38.625rem] mr-[5.75rem] md:w-full md:text-center md:px-3",children:[(0,l.jsx)("h4",{className:"text-[1.75rem] leading-[32px] font-bold mb-10 md:text-base",children:e("greenData.item1.subtitle")}),t.map((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h6",{className:i()("font-bold",0!==t?"mt-6":""),children:e.title}),(0,l.jsx)("p",{children:e.text})]},"powerManagement-".concat(t)))]}),(0,l.jsx)("img",{className:"w-[30.625rem] mx-auto md:max-w-[18.375rem] md:w-full md:mb-8",src:"/images/platform.svg",alt:""})]}),(0,l.jsxs)("div",{className:"flex mt-24 md:flex-col md:mt-12",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-col-reverse",children:[(0,l.jsx)("h4",{className:"text-[1.75rem] font-bold mb-8 md:text-base md:text-center md:mt-8",children:e("greenData.item2.subtitle")}),(0,l.jsx)("img",{className:"mx-auto w-[34.625rem] md:max-w-[20.875rem] md:w-full",src:"/images/green_data.svg",alt:""})]}),(0,l.jsx)("div",{className:"ml-[4.75rem] w-[35.56rem] px-3 md:w-full md:ml-0 md:text-center",children:n.map((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h6",{className:"font-bold",children:e.title}),(0,l.jsx)("p",{className:"mb-5",children:e.text})]},"greenData-".concat(t)))})]})]})}function o(){return(0,l.jsxs)(s.T,{children:[(0,l.jsx)(m,{}),(0,l.jsx)(c,{}),(0,l.jsx)(d,{})]})}}},function(e){e.O(0,[455,222,431,774,888,179],function(){return e(e.s=4550)}),_N_E=e.O()}]);