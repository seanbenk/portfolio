(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a.n(n),s=a(35),r=a.n(s),c=(a(44),a(12)),o=(a(45),a(46),a(60)),l=a(8),j={hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:.2,staggerChildren:.2}}},h={hidden:{opacity:0,x:100},show:{opacity:1,x:0}};function d(e){function t(t){return t===e.navState?"selected":""}return Object(l.jsxs)(o.a.nav,{className:e.showNav?"show-nav":"",initial:!1,animate:e.showNav?{right:0,top:0,height:"100vh",width:"50vw",borderRadius:0}:{right:"2.5vh",top:"2.5vh",height:"10vh",width:"10vh",borderRadius:"100vh"},children:[Object(l.jsx)("div",{className:"burger-wrapper",children:Object(l.jsxs)("div",{className:e.showNav?"burger-container  show-nav":"burger-container",onClick:e.toggleShowNav,children:[Object(l.jsx)("div",{className:"burger-1"}),Object(l.jsx)("div",{className:"burger-2"}),Object(l.jsx)("div",{className:"burger-3"})]})}),Object(l.jsxs)(o.a.ul,{variants:j,initial:"hidden",animate:e.showNav?"show":"hidden",children:[Object(l.jsx)(o.a.li,{variants:h,onClick:function(){return e.setCurrPage(1)},className:t(1),children:"Home"}),Object(l.jsx)(o.a.li,{variants:h,onClick:function(){return e.setCurrPage(2)},className:t(2),children:"About Me"}),Object(l.jsx)(o.a.li,{variants:h,onClick:function(){return e.setCurrPage(3)},className:t(3),children:"Contact"})]})]})}a(48);function u(e){return Object(l.jsxs)(o.a.div,{className:"home",id:"home",children:[Object(l.jsx)(o.a.h1,{animate:{opacity:[0,1],y:[-200,0]},transition:{type:"spring"},children:"Hi!"}),Object(l.jsxs)(o.a.h2,{animate:{opacity:[0,1],y:[-200,0]},children:["I'm Sean, a software engineer currently based in ",Object(l.jsx)("span",{children:"Sydney, Australia"})]}),Object(l.jsx)(o.a.span,{animate:{opacity:[0,1]},className:"material-icons down-arrow",onClick:function(){return e.setCurrPage(2)},children:"expand_more"})]})}a(49);function b(){return Object(l.jsxs)("div",{className:"about",id:"about",children:[Object(l.jsx)(o.a.h1,{animate:{opacity:[0,1]},children:"About me"}),Object(l.jsx)(o.a.p,{animate:{opacity:[0,1]},children:"I have been coding as a hobby since high school and decided to take it a little  more seriously at the start of 2021. I love diving into new projects and extending my knowledge of languages/frameworks and coding concepts. In my free time I rock climb and enjoy trying new sports and food."})]})}a(50);function m(){return Object(l.jsx)("div",{className:"contact",id:"about-me",children:Object(l.jsx)(o.a.h1,{children:"Contact"})})}a(51);var g=a(13),O=a(63),f=a(62),x=a(10),v=a(61);function p(e){var t=Object(n.useRef)(),a=Object(v.a)("/portfoliotest2/island-1.glb"),i=a.nodes,s=a.materials;return Object(l.jsxs)("group",Object(x.a)(Object(x.a)({ref:t},e),{},{dispose:null,children:[Object(l.jsx)("mesh",{geometry:i.Island.geometry,material:s.islandMat,receiveShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Water.geometry,material:s.waterMat,position:[0,.56,-.01],scale:[2.22,2.22,2.22],receiveShadow:!0}),Object(l.jsx)("mesh",{geometry:i.tree1.geometry,material:i.tree1.material,position:[.98,1.15,.78],scale:[.05,.05,.05],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.tree2.geometry,material:i.tree2.material,position:[.92,1.19,-.12],rotation:[-Math.PI,.77,-Math.PI],scale:[.06,.06,.06],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.tree3.geometry,material:i.tree3.material,position:[.79,1.01,-1.59],rotation:[Math.PI,-1.02,Math.PI],scale:[.04,.04,.04],castShadow:!0})]}))}function w(e){return Object(l.jsx)(o.a.div,{className:"scene",animate:e.showProjects?{y:"-100vh"}:{y:0},transition:{duration:.05,type:"tween"},children:Object(l.jsxs)(g.a,{style:{height:"100vh"},shadows:!0,children:[Object(l.jsx)(O.a,{makeDefault:!0,fov:75,near:.1,far:1e3,position:[4,2,0],children:Object(l.jsx)("directionalLight",{castShadow:!0,intensity:2,color:16777215})}),Object(l.jsx)(f.a,{minDistance:1,maxDistance:10}),Object(l.jsx)(n.Suspense,{fallback:"loading 3d Models",children:Object(l.jsx)(p,{})})]})})}v.a.preload("/portfoliotest2/island-1.glb");a(55);function y(e){return Object(l.jsxs)("footer",{onClick:e.toggleShowProjects,children:[Object(l.jsx)(o.a.div,{className:"footer-wrapper",animate:e.showProjects?{y:[0,300]}:{y:[300,0]},transition:{duration:.5},children:Object(l.jsx)("h2",{children:"See Projects"})}),Object(l.jsx)(o.a.div,{className:"footer-wrapper",animate:e.showProjects?{y:[300,0]}:{y:[0,300]},transition:{duration:.5},children:Object(l.jsx)("h2",{children:"Hide Projects"})})]})}function N(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)(!0),r=Object(c.a)(s,2),o=r[0],j=r[1],h=Object(n.useState)(1),g=Object(c.a)(h,2),O=g[0],f=g[1];var x=function(e){f(e),i(!1),j(!1)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),Object(l.jsx)(d,{showNav:a,toggleShowNav:function(){i((function(e){return!e}))},navState:O,setCurrPage:x}),function(){switch(O){case 1:return Object(l.jsx)(u,{setCurrPage:x});case 2:return Object(l.jsx)(b,{});case 3:return Object(l.jsx)(m,{});default:return Object(l.jsx)(u,{})}}(),Object(l.jsx)(w,{showProjects:o}),Object(l.jsx)(y,{showProjects:o,toggleShowProjects:function(){j((function(e){return!e}))}})]})}var P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),P()}},[[56,1,2]]]);
//# sourceMappingURL=main.45bf5545.chunk.js.map