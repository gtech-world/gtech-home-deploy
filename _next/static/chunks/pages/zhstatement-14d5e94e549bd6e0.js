(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{1503:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zhstatement",function(){return n(6012)}])},2301:function(e,t,n){"use strict";n.d(t,{T:function(){return y}});var l=n(1527),s=n(4875),a=n.n(s),r=n(959),i=n(3517),c=n.n(i),o=n(3190),m=n(367),d=n(2239),h=n(7994),x=n(7191),f=n(183);let u=e=>[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),isSelected:!1,children:[{href:"/solutions/web3",name:e("navigation.list.item2.children.child1.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/automotive",name:e("navigation.list.item2.children.child3.name")}]}],p=["/enstatement","/zhstatement"];function g(e){let{t,i18n:n}=(0,f.$G)("common"),{data:s=[]}=e,{pathname:i,push:d}=(0,o.useRouter)(),x=(0,r.useRef)(),[u,g]=(0,r.useState)(""),j=()=>{let e="en"===n.language?"zh":"en";n.changeLanguage(e),p.indexOf(i)>-1&&d("en"===e?"/enstatement":"zhstatement")};return(0,m.Z)(x,()=>!!u&&g("")),(0,l.jsxs)("div",{className:"text-xl flex md:hidden",ref:x,children:[s.map((e,t)=>e.children&&e.children.length?(0,l.jsxs)("div",{className:"relative".concat(0===t?"":" ml-14"),children:[(0,l.jsxs)("div",{className:"cursor-pointer flex",onClick:()=>g(u?"":e.href),children:[(0,l.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(i)?" border-b-2 border-green font-bold":""),children:e.name}),(0,l.jsx)(h.kR5,{className:a()("ml-2 mt-1",u?"rotate-180":"")})]}),u===e.href&&(0,l.jsx)("ul",{style:{whiteSpace:"nowrap"},className:"w-auto text-black shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,t)=>(0,l.jsx)("li",{children:(0,l.jsx)(c(),{href:e.href,className:a()(i===e.href?"text-green":""),children:e.name})},"nav-children-".concat(t)))})]},"nav-".concat(t)):(0,l.jsx)(c(),{className:"".concat(0===t?"":" ml-14"),href:e.href,children:(0,l.jsx)("span",{className:"pb-2.5".concat(e.href===i?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(t))),(0,l.jsx)("span",{className:"cursor-pointer ml-12",onClick:j,children:t("translation")})]})}function j(e){let{pathname:t}=(0,o.useRouter)(),{data:n=[]}=e;return(0,l.jsx)("ul",{className:"text-sm mt-3 leading-8",children:n.map((e,n)=>(0,l.jsx)("li",{children:e.href?(0,l.jsx)(c(),{href:e.href,className:a()("inline-block w-full",t===e.href?"text-green":""),children:e.name}):(0,l.jsx)("span",{className:"inline-block w-full",onClick:()=>e.onClick(),children:e.name})},"MobileSubNav-".concat(n)))})}function b(e){let{t,i18n:n}=(0,f.$G)("common"),{data:s=[]}=e,{pathname:i,push:u}=(0,o.useRouter)(),g=(0,r.useRef)(),[b,N]=(0,r.useState)([]),[v,w]=(0,d.Z)(!1),k=s.concat({href:"language",name:t("translation_m"),children:[{name:"English",href:"",onClick:()=>{C("en"),w(!1)}},{name:"中文",href:"",onClick:()=>{C("zh"),w(!1)}}]});(0,m.Z)(g,()=>v&&w(!1));let C=e=>{n.changeLanguage(e),console.log(i),p.indexOf(i)>-1&&u("en"===e?"/enstatement":"zhstatement")},_=(e,t)=>{e.stopPropagation();let n=[...b];if(t){let l=n.indexOf(t);-1===l?n.push(t):n.splice(l,1),N(n)}};return(0,l.jsxs)("div",{className:"hidden md:block",ref:g,children:[(0,l.jsx)(x.otZ,{className:"text-green text-4xl",onClick:w}),v&&(0,l.jsx)("div",{className:"absolute text-black right-0 bg-white w-screen px-5 py-4",children:k.map((e,t)=>{let n=e.children&&e.children.length;return(0,l.jsxs)("div",{className:a()("mt-4",0===t?"mt-3":""),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[n?(0,l.jsx)("span",{onClick:t=>_(t,e.href),className:"inline-block; w-full",children:e.name}):(0,l.jsx)(c(),{className:a()("inline-block w-full",i===e.href?"text-green":""),href:e.href,children:e.name}),n&&(0,l.jsx)(h.kR5,{className:(null==b?void 0:b.indexOf(e.href))>-1?"rotate-180":""})]}),(null==b?void 0:b.indexOf(e.href))>-1&&(0,l.jsx)(j,{data:e.children})]},"MobileNav-".concat(t))})})]})}function N(){let{t:e}=(0,f.$G)("common"),t=u(e);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{data:t}),(0,l.jsx)(b,{data:t})]})}var v=n(2362);function w(e){let{sticky:t=!0,isTransparent:n,className:s}=(null==e?void 0:e.props)||{},[i,o]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=localStorage.getItem("tips");o(!e)},[]);let m=()=>{localStorage.setItem("tips","enable"),o(!1)};return(0,l.jsxs)("div",{className:a()(t?"sticky":"","w-full z-10 top-0 ",n?"bg-transparent":"bg-white",s),children:[i&&(0,l.jsxs)("div",{className:"bg-green text-white text-base h-[4.3125rem] flex justify-center px-8 items-center md:text-sm",children:["GTech’s official site is under development and this version is for demonstration purpose only. For more information, please contract email hi@gtech.world.",(0,l.jsx)(v.q5L,{onClick:m,className:"absolute right-6 text-xl cursor-pointer md:top-4 md:right-5"})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center px-32 py-3 md:px-5",children:[(0,l.jsx)(c(),{href:"/",children:(0,l.jsx)("img",{className:"block w-16 h-11",alt:"",src:"/images/logo.svg"})}),(0,l.jsx)(N,{})]})]})}function k(e){let{data:t}=e;return(0,l.jsx)("ul",{className:"flex flex-col text-base mt-4 leading-[2.2] font-normal md:text-[0.9375rem]",children:t.length&&t.map((e,t)=>e.href?(0,l.jsx)(c(),{href:e.href,children:e.name},"".concat(t)):(0,l.jsx)("span",{children:e.name}))})}function C(){let{t:e,i18n:t}=(0,f.$G)("common"),n=u(e).concat([{name:e("navigation.list.item3.name"),href:"",children:[{name:"hi@gtech.world"}]}]);return(0,l.jsx)("div",{className:"bg-bgc h-[21.875rem] md:h-auto md:px-8 md:py-12",children:(0,l.jsxs)("div",{className:"flex flex-col w-container mx-auto md:w-full",children:[(0,l.jsx)("div",{className:"flex flex-col mt-12",children:(0,l.jsxs)("div",{className:"flex md:flex-col",children:[(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"md:float-left",href:"/",children:(0,l.jsx)("img",{src:"/images/logo.svg"})})}),(0,l.jsx)("ul",{className:"flex justify-between ml-[14.375rem] mt-4 md:flex-col md:ml-0",children:n.map((e,t)=>(0,l.jsxs)("li",{className:"mr-24 md:mt-5",children:[e.href&&!e.children?(0,l.jsx)(c(),{className:"text-2xl font-bold md:text-xl",href:e.href,children:e.name}):(0,l.jsx)("span",{className:"text-2xl font-bold md:text-xl",children:e.name}),e.children&&(0,l.jsx)(k,{data:e.children})]},"".concat(t)))})]})}),(0,l.jsxs)("div",{className:"mt-16 pt-4 border-t border-black text-sm flex justify-between md:flex-col md:mt-8",children:[(0,l.jsx)("span",{children:e("footer.company")}),(0,l.jsx)("span",{onClick:()=>window.open("zh"===t.language?"/zhstatement":"/enstatement","_blank"),className:"cursor-pointer md:mt-5",children:e("footer.viewBtn")})]})]})})}var _=n(3191);function y(e){let{className:t,headerProps:n,children:s,...i}=e,{t:c,i18n:o}=(0,f.$G)("common"),m=(0,_.getCookie)("statement"),[d,h]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{h(!m)},[]),(0,l.jsxs)("div",{className:"h-full w-full bg-slate-50 relative",children:[(0,l.jsx)(w,{props:n}),(0,l.jsx)("div",{className:a()("w-full mx-auto text-lg md:text-sm",t),...i,children:s}),(0,l.jsx)(C,{}),d&&(0,l.jsxs)("div",{className:"sticky bottom-0 left-0 z-10 h-20 w-full z-10 flex justify-center items-center bg-white text-sm shadow-[0_-3px_15px_0_rgba(0,0,0,0.1)] md:flex-col md:px-5 md:h-auto md:pb-5",children:[(0,l.jsx)("span",{className:"md:px-8 md:text-center md:pb-8 md:pt-12",children:c("footer.text")}),(0,l.jsx)("div",{onClick:()=>{(0,_.setCookie)("statement","access"),h(!1)},className:"border border-black bg-black text-white px-4 h-11 rounded flex items-center justify-center ml-5 cursor-pointer md:w-full md:mb-4 md:ml-0",children:c("footer.acceptBtn")}),(0,l.jsx)("div",{onClick:()=>window.open("en"===o.language?"/enstatement":"/zhstatement","_blank"),className:"border border-black px-4 h-11 rounded ml-2.5 flex items-center justify-center cursor-pointer md:w-full md:ml-0",children:c("footer.viewBtn")}),(0,l.jsx)(v.q5L,{onClick:()=>h(!1),className:"absolute right-8 text-xl cursor-pointer md:top-4 md:right-5"})]})]})}},6012:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var l=n(1527),s=n(2301);function a(){return(0,l.jsx)(s.T,{className:"bg-white min-h-screen border-t-2 border-gray-100",children:(0,l.jsxs)("div",{className:"w-container mx-auto text-sm pb-12 md:w-full md:px-3",children:[(0,l.jsx)("h1",{className:"text-green text-center text-2xl mb-5 mt-8",children:"网站使用有关Cookie及隐私政策的声明"}),(0,l.jsx)("p",{children:"在使用本网站各项服务前，请您务必仔细阅读并透彻理解本政策的声明，当您浏览或使用我们提供的任一服务时，即表示您已充分理解并同意本政策的内容。可能适时随技术进步或服务的提升等进行相应调整或修订本政策内容，若您继续使用我们的服务，即表示同意受经修订的政策约束。"}),(0,l.jsx)("h4",{className:"mt-6 text-green text-lg",children:"1. 我们如何使用Cookie"}),(0,l.jsx)("p",{children:"为确保网站正常运转、更好地为您提供服务，我们会在您的计算机或移动设备上存储Cookie、Flash Cookie，或浏览器（或关联应用程序）提供的其他通常包含标识符、站点名称以及一些号码和字符的本地存储（统称“Cookie”）。我们使用Cookie的主要目的为：身份验证、偏好设置、保障数据和服务的安全性、为用户提供更好的服务、提高服务效率、了解与改善服务、广告优化等。"}),(0,l.jsx)("h4",{className:"mt-6 text-green text-lg",children:"2. 我们如何收集、处理、保留及使用您的信息"}),(0,l.jsx)("p",{children:"我们根据合法、正当、必要的原则，仅收集为向您提供服务所需的必要信息，如姓名、地址、联系方式、日志信息、软件信息、IP地址、服务及通讯日志信息、电子邮件等，另外，您根据本网站的明确说明而自行登录、申报之信息视为您自愿同意本网站收集。如您拒绝提供所述必要信息的，您将无法正常使用我们的服务。"}),(0,l.jsx)("p",{children:"我们严格遵守中华人民共和国大陆（为免歧义，不包括香港、澳门、台湾地区）法律法规的规定，收集的信息将被用于：向您提供服务、满足您的个性化需求、安全保障、向您推荐您可能感兴趣的资讯、分析与改善我们的服务等以及本政策未载明的其他用于改善我们服务等的相关用途。若我们将信息用于本政策未载明的其他用途，会事先获得您的同意。"}),(0,l.jsx)("p",{children:"我们对信息的处理、分享、使用、披露进行严格限制，但鉴于我们无法单独为您提供全部服务，我们需要向我们的关联公司、合作伙伴、供应商及其他为您提供必要服务的第三方等以共享或委托处理的方式提供您的相关个人信息。我们会采取必要的技术和管理措施尽可能地保护您的个人信息安全。"}),(0,l.jsx)("h4",{className:"mt-6 text-green text-lg",children:"3. 我们如何存储、保护您的信息"}),(0,l.jsx)("p",{children:"我们在中华人民共和国大陆境内运营中收集和产生的个人信息，将存储在中国境内。我们只会在达成目的所必需的期限内保留您的个人信息，除非法律有强制的留存要求。我们将为您的信息提供相应的安全保障，以防止信息的丢失、不当使用、未经授权访问或披露。"}),(0,l.jsx)("h4",{className:"mt-6 text-green text-lg",children:"4. 您如何管理您的信息"}),(0,l.jsx)("p",{children:"您可以在使用我们服务的过程中，访问、修改和删除您提供的信息，也可与我们联系进行操作。"}),(0,l.jsx)("h4",{className:"mt-6 text-green text-lg",children:"5. 未成年人保护"}),(0,l.jsx)("p",{children:"我们重视并致力于保护18周岁以下未成年人（以下简称“未成年人”）的隐私，且无意收集未成年人的个人信息。除非征得其法定监护人的同意，未成年人请不要注册帐户或向我们提供自己的姓名、联系地址、电话等个人信息。"})]})})}}},function(e){e.O(0,[455,222,431,774,888,179],function(){return e(e.s=1503)}),_N_E=e.O()}]);