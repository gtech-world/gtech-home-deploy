(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{1805:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions/automotive",function(){return l(2639)}])},1854:function(e,t,l){"use strict";l.d(t,{z:function(){return i}});var s=l(1527);l(959);var n=l(4875),r=l.n(n);function i(e){let{text:t,className:l,onClick:n}=e;return(0,s.jsx)("div",{onClick:()=>n&&n(),className:r()("inline-block bg-green text-white text-lg py-2.5 px-8 rounded-lg cursor-pointer text-center hover:bg-green-hover",l),children:t})}},2301:function(e,t,l){"use strict";l.d(t,{T:function(){return C}});var s=l(1527),n=l(4875),r=l.n(n),i=l(959),m=l(3517),a=l.n(m),c=l(3190),d=l(367),o=l(2239),x=l(7994),h=l(7191),u=l(183);let f=e=>[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),isSelected:!1,children:[{href:"/solutions/web3",name:e("navigation.list.item2.children.child1.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/automotive",name:e("navigation.list.item2.children.child3.name")}]}],g=["/enstatement","/zhstatement"];function j(e){let{t,i18n:l}=(0,u.$G)("common"),{data:n=[]}=e,{pathname:m,push:o}=(0,c.useRouter)(),h=(0,i.useRef)(),[f,j]=(0,i.useState)(""),b=()=>{let e="en"===l.language?"zh":"en";l.changeLanguage(e),g.indexOf(m)>-1&&o("en"===e?"/enstatement":"zhstatement")};return(0,d.Z)(h,()=>!!f&&j("")),(0,s.jsxs)("div",{className:"text-xl flex md:hidden",ref:h,children:[n.map((e,t)=>e.children&&e.children.length?(0,s.jsxs)("div",{className:"relative".concat(0===t?"":" ml-14"),children:[(0,s.jsxs)("div",{className:"cursor-pointer flex",onClick:()=>j(f?"":e.href),children:[(0,s.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(m)?" border-b-2 border-green font-bold":""),children:e.name}),(0,s.jsx)(x.kR5,{className:r()("ml-2 mt-1",f?"rotate-180":"")})]}),f===e.href&&(0,s.jsx)("ul",{style:{whiteSpace:"nowrap"},className:"w-auto shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:e.href,className:r()(m===e.href?"text-green":""),children:e.name})},"nav-children-".concat(t)))})]},"nav-".concat(t)):(0,s.jsx)(a(),{className:"".concat(0===t?"":" ml-14"),href:e.href,children:(0,s.jsx)("span",{className:"pb-2.5".concat(e.href===m?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(t))),(0,s.jsx)("span",{className:"cursor-pointer ml-12",onClick:b,children:t("translation")})]})}function b(e){let{pathname:t}=(0,c.useRouter)(),{data:l=[]}=e;return(0,s.jsx)("ul",{className:"text-sm mt-3 leading-8",children:l.map((e,l)=>(0,s.jsx)("li",{children:e.href?(0,s.jsx)(a(),{href:e.href,className:r()("inline-block w-full",t===e.href?"text-green":""),children:e.name}):(0,s.jsx)("span",{className:"inline-block w-full",onClick:()=>e.onClick(),children:e.name})},"MobileSubNav-".concat(l)))})}function p(e){let{t,i18n:l}=(0,u.$G)("common"),{data:n=[]}=e,{pathname:m,push:f}=(0,c.useRouter)(),j=(0,i.useRef)(),[p,v]=(0,i.useState)([]),[N,w]=(0,o.Z)(!1),k=n.concat({href:"language",name:t("translation_m"),children:[{name:"English",href:"",onClick:()=>{y("en"),w(!1)}},{name:"中文",href:"",onClick:()=>{y("zh"),w(!1)}}]});(0,d.Z)(j,()=>N&&w(!1));let y=e=>{l.changeLanguage(e),console.log(m),g.indexOf(m)>-1&&f("en"===e?"/enstatement":"zhstatement")},_=(e,t)=>{e.stopPropagation();let l=[...p];if(t){let s=l.indexOf(t);-1===s?l.push(t):l.splice(s,1),v(l)}};return(0,s.jsxs)("div",{className:"hidden md:block",ref:j,children:[(0,s.jsx)(h.otZ,{className:"text-green text-4xl",onClick:w}),N&&(0,s.jsx)("div",{className:"absolute right-0 bg-white w-screen px-5 py-4",children:k.map((e,t)=>{let l=e.children&&e.children.length;return(0,s.jsxs)("div",{className:r()("mt-4",0===t?"mt-3":""),children:[(0,s.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[l?(0,s.jsx)("span",{onClick:t=>_(t,e.href),className:"inline-block; w-full",children:e.name}):(0,s.jsx)(a(),{className:r()("inline-block w-full",m===e.href?"text-green":""),href:e.href,children:e.name}),l&&(0,s.jsx)(x.kR5,{className:(null==p?void 0:p.indexOf(e.href))>-1?"rotate-180":""})]}),(null==p?void 0:p.indexOf(e.href))>-1&&(0,s.jsx)(b,{data:e.children})]},"MobileNav-".concat(t))})})]})}function v(){let{t:e}=(0,u.$G)("common"),t=f(e);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{data:t}),(0,s.jsx)(p,{data:t})]})}function N(e){let{sticky:t=!0,isTransparent:l,className:n}=(null==e?void 0:e.props)||{};return(0,s.jsxs)("div",{className:r()(t?"sticky":"","w-full z-10 flex justify-between items-center top-0 px-32 py-3 md:px-5",l?"bg-transparent":"bg-white",n),children:[(0,s.jsx)(a(),{href:"/",children:(0,s.jsx)("img",{className:"block w-16 h-11",alt:"",src:"/images/logo.svg"})}),(0,s.jsx)(v,{})]})}function w(e){let{data:t}=e;return(0,s.jsx)("ul",{className:"flex flex-col text-base mt-4 leading-[2.2] font-normal",children:t.length&&t.map((e,t)=>e.href?(0,s.jsx)(a(),{href:e.href,children:e.name},"".concat(t)):(0,s.jsx)("span",{children:e.name}))})}function k(){let{t:e}=(0,u.$G)("common"),t=f(e).concat([{name:e("navigation.list.item3.name"),href:"",children:[{name:"hi@gtech.world"}]}]);return(0,s.jsx)("div",{className:"bg-bgc h-[21.875rem]",children:(0,s.jsxs)("div",{className:"flex flex-col w-container mx-auto",children:[(0,s.jsx)("div",{className:"flex flex-col mt-12",children:(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"/images/logo.svg"})}),(0,s.jsx)("ul",{className:"flex justify-between ml-[14.375rem] mt-4",children:t.map((e,t)=>(0,s.jsxs)("li",{className:"mr-24",children:[e.href&&!e.children?(0,s.jsx)(a(),{className:"text-2xl font-bold",href:e.href,children:e.name}):(0,s.jsx)("span",{className:"text-2xl font-bold",children:e.name}),e.children&&(0,s.jsx)(w,{data:e.children})]},"".concat(t)))})]})}),(0,s.jsx)("div",{className:"mt-16 pt-4 border-t-2 text-sm",children:"GTech International, LTD."})]})})}var y=l(3191),_=l(2362);function C(e){let{className:t,headerProps:l,children:n,...m}=e,{t:a,i18n:c}=(0,u.$G)("common"),d=(0,y.getCookie)("statement"),[o,x]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{x(!d)},[]),(0,s.jsxs)("div",{className:"h-full w-full bg-slate-50 relative",children:[(0,s.jsx)(N,{props:l}),(0,s.jsx)("div",{className:r()("w-full mx-auto text-lg md:text-sm",t),...m,children:n}),(0,s.jsx)(k,{}),o&&(0,s.jsxs)("div",{className:"sticky bottom-0 left-0 z-10 h-20 w-full z-10 flex justify-center items-center bg-white text-sm shadow-[0_-3px_15px_0_rgba(0,0,0,0.1)] md:flex-col md:px-5 md:h-auto md:pb-5",children:[(0,s.jsx)("span",{className:"md:px-8 md:text-center md:pb-8 md:pt-12",children:a("footer.text")}),(0,s.jsx)("div",{onClick:()=>{(0,y.setCookie)("statement","access"),x(!1)},className:"border border-black bg-black text-white px-4 h-11 rounded flex items-center justify-center ml-5 cursor-pointer md:w-full md:mb-4 md:ml-0",children:a("footer.acceptBtn")}),(0,s.jsx)("div",{onClick:()=>window.open("en"===c.language?"/enstatement":"/zhstatement","_blank"),className:"border border-black px-4 h-11 rounded ml-2.5 flex items-center justify-center cursor-pointer md:w-full md:ml-0",children:a("footer.viewBtn")}),(0,s.jsx)(_.q5L,{onClick:()=>x(!1),className:"absolute right-8 text-xl cursor-pointer md:top-4 md:right-5"})]})]})}},2639:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return f}});var s=l(1527),n=l(2301),r=l(1854);l(959);var i=l(4875),m=l.n(i);function a(e){let{className:t}=e;return(0,s.jsx)("div",{className:"w-[18.375rem] mx-auto md:w-full md:max-w-[22rem]",children:(0,s.jsxs)("div",{className:m()("py-2 rounded-[2.25rem] outline outline-[5px] outline-green outline-offset-4 border-[1.75px] border-green flex justify-center items-center mr-[8px]",t),children:[(0,s.jsxs)("div",{className:"border-r-[3px] border-green-2 pr-5 mr-5",children:[(0,s.jsx)("img",{className:"mb-4",src:"/images/carbon3_name.svg",alt:""}),(0,s.jsx)("img",{className:"w-[6.25rem]",src:"/images/earth.png",alt:""})]}),(0,s.jsxs)("div",{className:"w-[6.125rem]",children:[(0,s.jsx)("p",{className:"text-[0.6875rem] text-center mb-2 leading-[1rem]",children:"Product Carbon Footprint Certified by AIAG"}),(0,s.jsx)("img",{className:"w-[5.75rem]",src:"/images/qrcode.svg",alt:""})]})]})})}var c=l(183);function d(){let{t:e,i18n:t}=(0,c.$G)("automotive");return(0,s.jsx)("div",{className:"h-[44.625rem] text-white w-full bg-[url(/images/automotive_banner.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center px-9 md:h-[28rem]",children:(0,s.jsxs)("div",{className:m()("bg-black/[.8] flex flex-col justify-center w-[58.5rem] pl-8 text-[2rem] py-10 text-green-1 leading-[2.75rem] md:text-lg md:text-center md:px-4 md:w-auto"),children:[(0,s.jsx)("h3",{className:m()("font-bold text-white md:text-[1.75rem] md:leading-9","zh"===t.language?"text-[2.6rem]":"text-5xl"),children:e("banner.title")}),(0,s.jsx)("p",{className:"mt-3",children:e("banner.subtitle")})]})})}function o(){let{t:e}=(0,c.$G)("automotive");return(0,s.jsxs)("div",{className:"flex flex-col items-center pb-20 md:text-center md:pb-8",children:[(0,s.jsx)("h3",{className:"my-16 md:my-6 md:px-12",children:e("boostingAutomotive.title")}),(0,s.jsxs)("div",{className:"flex md:flex-col-reverse px-3",children:[(0,s.jsx)("img",{className:"w-[34.5rem] md:mx-auto md:mt-8 rounded-lg",src:"/images/solution_intro.svg",alt:""}),(0,s.jsxs)("div",{className:"w-[36.875rem] ml-14 text-lg md:text-sm md:w-full md:ml-0",children:[(0,s.jsx)("p",{className:"mb-5",children:e("boostingAutomotive.text1")}),(0,s.jsx)("p",{className:"mb-5",children:e("boostingAutomotive.text2")}),(0,s.jsx)("p",{children:e("boostingAutomotive.text3")})]})]})]})}function x(){let{t:e}=(0,c.$G)("automotive");return(0,s.jsxs)("div",{className:"w-full bg-green flex flex-col items-center text-white text-lg md:text-sm md:pb-10",children:[(0,s.jsx)("h3",{className:"text-center px-12 mt-16 md:mt-8",children:e("industryLevel.title")}),(0,s.jsx)("p",{className:"mt-5 max-w-[54.125rem] text-center",children:e("industryLevel.text")}),(0,s.jsxs)("div",{className:"flex justify-center items-center mt-20 pb-20 ml-[4.8rem] md:flex-col md:ml-0 md:mt-5 md:text-center md:pb-0",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"h-11"}),(0,s.jsx)("div",{className:"bg-white text-black text-1.5xl font-bold rounded-lg h-20 w-[16.25rem] flex justify-center items-center text-center",children:e("industryLevel.group.item1.name")}),(0,s.jsx)("p",{className:"w-64 h-[5.25rem] mt-5 md:h-auto",children:e("industryLevel.group.item1.text")})]}),(0,s.jsx)("img",{className:"mt-[-3.7rem] w-[6.25rem] md:hidden",src:"/images/arrow_lg.svg",alt:""}),(0,s.jsx)("img",{className:"hidden md:block w-10 my-6 h-[2.25rem]",src:"/images/arrow_down.svg",alt:""}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("p",{className:"text-2xl font-bold text-yellow h-11",children:"AICD"}),(0,s.jsx)("div",{className:"bg-white text-black text-1.5xl leading-[1.875rem] font-bold rounded-lg h-20 w-[18.75rem] flex justify-center items-center text-center",children:e("industryLevel.group.item2.name")}),(0,s.jsx)("p",{className:"w-[18.75rem] h-[5.25rem] mt-5 md:h-auto",children:e("industryLevel.group.item2.text")})]}),(0,s.jsxs)("div",{className:"flex md:mt-0 md:flex-col items-center",children:[(0,s.jsx)("img",{className:"hidden md:block w-10 my-6 h-[2.25rem]",src:"/images/arrow_down.svg",alt:""}),(0,s.jsx)("img",{className:"mt-[-4rem] h-[9.625rem] md:hidden",src:"/images/arrow2_lg.svg",alt:""}),(0,s.jsxs)("div",{className:"ml-[-4.8rem] md:ml-0",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("p",{className:"text-2xl font-bold text-yellow h-10",children:"Traceability"}),(0,s.jsx)("div",{className:"bg-white text-black text-1.5xl leading-[1.875rem] font-bold rounded-lg h-20 w-[16.25rem] flex justify-center items-center text-center",children:e("industryLevel.group.item3.group.item1.name")})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("p",{className:"text-2xl font-bold text-yellow h-10 mt-4",children:"Trust Label"}),(0,s.jsx)("div",{className:"bg-white text-black text-1.5xl font-bold rounded-lg h-20 w-[16.25rem] flex justify-center items-center text-center",children:e("industryLevel.group.item3.group.item2.name")})]}),(0,s.jsx)("p",{className:"w-[26rem] mt-5 md:w-[16.25rem]",children:e("industryLevel.group.item3.group.text")})]})]})]})]})}function h(){let{t:e}=(0,c.$G)("automotive"),t=[{title:e("mainProduct.list.item1.title"),text:[e("mainProduct.list.item1.p1"),e("mainProduct.list.item1.p2")],btn:{text:e("mainProduct.list.item1.button"),onClick:()=>{window.open("https://aicd.gtech.world/","_blank")}},imgUrl:"/images/roboat.svg"},{title:e("mainProduct.list.item2.title"),text:[e("mainProduct.list.item2.p1")],btn:{text:e("mainProduct.list.item2.button"),onClick:()=>{window.open("https://aicd.gtech.world/login","_blank")}},imgUrl:"/images/find.svg"}];return(0,s.jsxs)("div",{className:"flex flex-col items-center px-3",children:[(0,s.jsx)("h3",{className:"my-16 md:my-8",children:e("mainProduct.title")}),(0,s.jsx)("div",{className:"flex justify-center md:flex-col",children:t.map((e,t)=>(0,s.jsxs)("div",{className:m()("w-[36.25rem] pb-5 border-4 border-black rounded-2xl flex flex-col justify-center px-5 md:w-full md:mt-8",0===t?"ml-0 md:mt-0":"ml-10 md:ml-0"),children:[(0,s.jsx)("h4",{className:"font-bold text-[2rem] leading-9 px-5 text-center pt-6 pb-8 text-green md:text-base md:mt-3 md:pt-3",children:e.title}),(0,s.jsx)("img",{className:"h-[6.125rem] mb-10 md:h-[5rem] md:mb-8",src:e.imgUrl,alt:""}),(0,s.jsx)("div",{className:"w-[29.25rem] text-center mx-auto leading-6 md:w-full md:leading-5",children:e.text.map((e,t)=>(0,s.jsx)("p",{children:e},"child-".concat(t)))}),(0,s.jsx)(r.z,{onClick:()=>e.btn.onClick(),className:"mt-8",text:e.btn.text})]},"product-".concat(t)))})]})}function u(){let{t:e}=(0,c.$G)("automotive");return(0,s.jsx)("div",{className:"mt-10 pb-20 px-3",children:(0,s.jsxs)("div",{className:"w-container m-auto border-4 pb-5 border-black rounded-2xl md:w-full md:h-auto",children:[(0,s.jsx)("h3",{className:"text-3.5xl font-bold text-green text-center mt-8 pb-6 md:text-base",children:e("mainProduct.qrcode.title")}),(0,s.jsxs)("div",{className:"px-6 flex md:flex-col-reverse md:px-3",children:[(0,s.jsx)("img",{className:"w-[50.625rem] md:w-full",src:"/images/car.png",alt:""}),(0,s.jsxs)("div",{className:"ml-6 md:ml-2",children:[(0,s.jsx)(a,{className:"mt-20 md:mt-8"}),(0,s.jsx)("p",{className:"mt-8 md:text-center",children:e("mainProduct.qrcode.qrIntro")})]})]})]})})}function f(){return(0,s.jsxs)(n.T,{children:[(0,s.jsx)(d,{}),(0,s.jsx)(o,{}),(0,s.jsx)(x,{}),(0,s.jsx)(h,{}),(0,s.jsx)(u,{})]})}}},function(e){e.O(0,[455,222,431,774,888,179],function(){return e(e.s=1805)}),_N_E=e.O()}]);