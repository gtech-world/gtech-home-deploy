(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4182:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(2759)}])},1854:function(e,t,s){"use strict";s.d(t,{z:function(){return a}});var l=s(1527);s(959);var n=s(4875),i=s.n(n);function a(e){let{text:t,className:s,onClick:n}=e;return(0,l.jsx)("div",{onClick:()=>n&&n(),className:i()("inline-block bg-green text-white text-lg py-2.5 px-8 rounded-lg cursor-pointer text-center hover:bg-green-hover",s),children:t})}},7420:function(e,t,s){"use strict";s.d(t,{T:function(){return N}});var l=s(1527),n=s(4875),i=s.n(n),a=s(959),r=s(3517),c=s.n(r),m=s(3190),o=s(367),x=s(2239),d=s(7994),h=s(7191),u=s(183);function f(e){let{t,i18n:s}=(0,u.$G)("common"),{data:n=[]}=e,{pathname:r}=(0,m.useRouter)(),x=(0,a.useRef)(),[h,f]=(0,a.useState)(""),g=()=>{s.changeLanguage("en"===s.language?"zh":"en")};return(0,o.Z)(x,()=>!!h&&f("")),(0,l.jsxs)("div",{className:"text-xl flex md:hidden",ref:x,children:[n.map((e,t)=>e.children&&e.children.length?(0,l.jsxs)("div",{className:"relative".concat(0===t?"":" ml-14"),children:[(0,l.jsxs)("div",{className:"cursor-pointer flex",onClick:()=>f(h?"":e.href),children:[(0,l.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(r)?" border-b-2 border-green font-bold":""),children:e.name}),(0,l.jsx)(d.kR5,{className:i()("ml-2 mt-1",h?"rotate-180":"")})]}),h===e.href&&(0,l.jsx)("ul",{style:{whiteSpace:"nowrap"},className:"w-auto shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,t)=>(0,l.jsx)("li",{children:(0,l.jsx)(c(),{href:e.href,className:i()(r===e.href?"text-green":""),children:e.name})},"nav-children-".concat(t)))})]},"nav-".concat(t)):(0,l.jsx)(c(),{className:"".concat(0===t?"":" ml-14"),href:e.href,children:(0,l.jsx)("span",{className:"pb-2.5".concat(e.href===r?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(t))),(0,l.jsx)("span",{className:"cursor-pointer ml-12",onClick:g,children:t("translation")})]})}function g(e){let{pathname:t}=(0,m.useRouter)(),{data:s=[]}=e;return(0,l.jsx)("ul",{className:"text-sm mt-3 leading-8",children:s.map((e,s)=>(0,l.jsx)("li",{children:(0,l.jsx)(c(),{href:e.href,className:i()("inline-block w-full",t===e.href?"text-green":""),children:e.name})},"MobileSubNav-".concat(s)))})}function p(e){let{data:t=[]}=e,{pathname:s}=(0,m.useRouter)(),[n,r]=(0,a.useState)("/"===s?"":s),u=(0,a.useRef)(),[f,p]=(0,x.Z)(!1);return(0,o.Z)(u,()=>f&&p(!1)),(0,l.jsxs)("div",{className:"hidden md:block",ref:u,children:[(0,l.jsx)(h.otZ,{className:"text-green text-4xl",onClick:p}),f&&(0,l.jsx)("div",{className:"absolute right-0 bg-white w-screen px-5 py-4",children:t.map((e,t)=>{let a=e.children&&e.children.length;return(0,l.jsxs)("div",{className:i()("mt-4",0===t?"mt-3":""),onClick:()=>r(n?"":e.href),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[a?(0,l.jsx)("span",{children:e.name}):(0,l.jsx)(c(),{className:i()("inline-block w-full",s===e.href?"text-green":""),href:e.href,children:e.name}),a&&(0,l.jsx)(d.kR5,{className:n?"rotate-180":""})]}),n.indexOf(e.href)>-1&&(0,l.jsx)(g,{data:e.children})]},"MobileNav-".concat(t))})})]})}function j(){let{t:e}=(0,u.$G)("common"),t=[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),children:[{href:"/solutions/web3",name:e("navigation.list.item2.children.child1.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/automotive",name:e("navigation.list.item2.children.child3.name")}]},{href:"/contact",name:e("navigation.list.item3.name")}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{data:t}),(0,l.jsx)(p,{data:t})]})}function b(e){let{sticky:t=!0,isTransparent:s,className:n}=(null==e?void 0:e.props)||{};return(0,l.jsxs)("div",{className:i()(t?"sticky":"","w-full z-10 flex justify-between items-center top-0 px-32 py-3 md:px-5",s?"bg-transparent":"bg-white",n),children:[(0,l.jsx)(c(),{href:"/",children:(0,l.jsx)("img",{className:"block w-16 h-11",alt:"",src:"/images/logo.svg"})}),(0,l.jsx)(j,{})]})}function N(e){let{className:t,headerProps:s,children:n,...a}=e;return(0,l.jsxs)("div",{className:"h-full w-full bg-slate-50",children:[(0,l.jsx)(b,{props:s}),(0,l.jsx)("div",{className:i()("w-full mx-auto text-lg md:text-sm",t),...a,children:n})]})}},2759:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var l=s(1527),n=s(7420),i=s(1854),a=s(4875),r=s.n(a),c=s(3190),m=s(183);function o(){let{t:e}=(0,m.$G)("home");return(0,l.jsxs)("div",{className:"w-full bg-[url(/images/home_banner.png)] bg-no-repeat bg-center bg-cover flex flex-col items-center",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center font-bold text-[4rem] leading-normal text-center md:text-[1.75rem]",children:[(0,l.jsx)("span",{className:"text-green mt-64 md:mt-36",children:e("banner.text1")}),(0,l.jsx)("span",{className:"",children:e("banner.text2")})]}),(0,l.jsx)("div",{className:"max-w-[34rem] px-3 text-lg text-center mt-[14.375rem] mb-5 md:text-sm md:mt-[8.375rem] md:mb-9",children:e("banner.tips")}),(0,l.jsx)("img",{alt:"",className:"pb-3 md:hidden",src:"images/home_head_arrow.svg"})]})}function x(){let{t:e}=(0,m.$G)("home"),t=[{title:e("technologies.list.item1.title"),text:e("technologies.list.item1.text"),image:"images/solution.svg"},{title:e("technologies.list.item2.title"),text:e("technologies.list.item2.text"),image:"images/eyes.svg"},{title:e("technologies.list.item3.title"),text:e("technologies.list.item3.text"),image:"images/traceability.svg"}];return(0,l.jsxs)("div",{className:"w-full bg-green flex flex-col items-center pt-16 md:pt-8 md:pb-4",children:[(0,l.jsxs)("h3",{className:"text-white text-center",children:[(0,l.jsxs)("span",{className:"text-yellow",children:["'",e("technologies.title.yellow"),"'"]})," ",e("technologies.title.text")]}),(0,l.jsx)("div",{className:"text-white max-w-[59.75rem] md:px-3 text-center mt-5",children:e("technologies.text")}),(0,l.jsx)("ul",{className:"w-container flex text-center justify-between mt-24 md:flex-col md:mt-16",children:t.map((e,t)=>(0,l.jsxs)("li",{className:"flex flex-col items-center pb-16 md:pb-12",children:[(0,l.jsx)("img",{className:"h-[8rem] md:h-[6.125rem]",src:e.image,alt:""}),(0,l.jsx)("h6",{className:"text-yellow text-xl font-semibold mt-7 mb-5 md:text-base",children:e.title}),(0,l.jsx)("p",{className:"w-[19.375rem] text-sm text-white",children:e.text})]},"technologies".concat(t)))})]})}function d(){let{t:e}=(0,m.$G)("home"),t=(0,c.useRouter)(),s=[{url:"/solutions/web3",layout:"left",imgUrl:"images/map.png",title:e("crossSolutions.list.item1.title"),text:e("crossSolutions.list.item1.text")},{url:"/solutions/governance",layout:"right",imgUrl:"images/governance_banner.png",title:e("crossSolutions.list.item2.title"),text:e("crossSolutions.list.item2.text")},{url:"/solutions/automotive",layout:"left",imgUrl:"images/automotive_banner.png",title:e("crossSolutions.list.item3.title"),text:e("crossSolutions.list.item3.text")}];return(0,l.jsxs)("div",{className:"flex flex-col items-center pb-32 mt-16 md:mt-8 md:pb-12",children:[(0,l.jsx)("h3",{className:"",children:e("crossSolutions.title")}),(0,l.jsx)("p",{className:"text-center mt-5 max-w-[56.25rem] md:px-3",children:e("crossSolutions.text")}),(0,l.jsx)("div",{className:"w-container md:w-full md:px-3",children:s.map((s,n)=>(0,l.jsxs)("div",{className:r()("mt-20 flex justify-between md:mt-12","left"===s.layout?"":"flex-row-reverse","md:flex-col"),children:[(0,l.jsx)("div",{className:"md:mx-auto",children:(0,l.jsx)("img",{className:"block w-[35rem] rounded-lg overflow-hidden md:max-w-full",src:s.imgUrl,alt:""})}),(0,l.jsxs)("div",{className:"w-[35rem] md:w-full md:text-center md:mt-8",children:[(0,l.jsx)("h5",{className:"md:px-12",children:s.title}),(0,l.jsx)("p",{className:r()("mt-5","left"===s.layout?"w-[36.5rem] md:w-full":""),children:s.text}),(0,l.jsx)(i.z,{onClick:()=>t.push(s.url),className:"mt-8 w-[19.25rem]",text:e("crossSolutions.list.button")})]})]},"data-".concat(n)))})]})}function h(){return(0,l.jsxs)(n.T,{headerProps:{sticky:!1,isTransparent:!0,className:"absolute"},className:"relative",children:[(0,l.jsx)(o,{}),(0,l.jsx)(x,{}),(0,l.jsx)(d,{})]})}}},function(e){e.O(0,[455,222,195,774,888,179],function(){return e(e.s=4182)}),_N_E=e.O()}]);