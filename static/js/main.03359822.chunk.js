(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var o=a(1),i=a.n(o),s=a(31),n=a.n(s),r=(a(58),a(14)),c=(a(59),a(60),a(82)),j=a(26),l=a(6),h={hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:.2,staggerChildren:.2}}},d={hidden:{opacity:0,x:100},show:{opacity:1,x:0}};function m(e){var t=e.showNav,a=e.toggleShowNav,o=e.navItemClicked;return Object(l.jsxs)(c.a.nav,{className:t?"show-nav":"",initial:!1,animate:t?{right:0,top:0,height:"100vh",width:"50vw",borderRadius:0}:{right:"2.5vh",top:"2.5vh",height:"10vh",width:"10vh",borderRadius:"100vh"},children:[Object(l.jsx)("div",{className:"burger-wrapper",children:Object(l.jsxs)("div",{className:t?"burger-container  show-nav":"burger-container",onClick:a,children:[Object(l.jsx)("div",{className:"burger-1"}),Object(l.jsx)("div",{className:"burger-2"}),Object(l.jsx)("div",{className:"burger-3"})]})}),Object(l.jsxs)(c.a.ul,{variants:h,initial:"hidden",animate:t?"show":"hidden",children:[Object(l.jsx)(c.a.li,{onClick:o,variants:d,children:Object(l.jsx)(j.b,{to:"/",children:"Home"})}),Object(l.jsx)(c.a.li,{onClick:o,variants:d,children:Object(l.jsx)(j.b,{to:"/about",children:"About Me"})}),Object(l.jsx)(c.a.li,{onClick:o,variants:d,children:Object(l.jsx)(j.b,{to:"/contact",children:"Contact"})})]})]})}a(67);function b(e){return Object(l.jsxs)("div",{className:"home",id:"home",children:[Object(l.jsx)("h1",{animate:{opacity:[0,1],y:[-200,0]},transition:{type:"spring"},children:"Hi!"}),Object(l.jsxs)("h2",{animate:{opacity:[0,1],y:[-200,0]},children:["I'm Sean, a software engineer currently based in ",Object(l.jsx)("span",{children:"Sydney, Australia"})]})]})}a(68);function g(){return Object(l.jsxs)("div",{className:"about",id:"about",children:[Object(l.jsx)("h1",{animate:{opacity:[0,1]},children:"About me"}),Object(l.jsx)("p",{animate:{opacity:[0,1]},children:"I have been coding as a hobby since high school and decided to take it a little more seriously mid 2020. I love diving into new projects and extending my knowledge of languages/frameworks and coding concepts. In my free time I rock climb and enjoy trying new sports and playing guitar. I am always looking for new projects and oppotunities to grow myself both as a programmer and person."})]})}a(69);function u(){return Object(l.jsx)("div",{className:"contact",id:"contact",children:Object(l.jsx)("h1",{children:"Contact"})})}a(70);var p=a(17),O=a(86),x=a(87),y=a(88),w=a(81),f=a(10),v=a(84);function S(e){Object(p.d)().camera;var t=Object(o.useRef)(),a=Object(v.a)("/island.glb"),i=a.nodes,s=a.materials;return s.islandMat.roughness=1,s.waterMat.transparent=!0,s.waterMat.opacity=.7,Object(l.jsxs)("group",Object(f.a)(Object(f.a)({ref:t},e),{},{dispose:null,shadows:!0,children:[Object(l.jsx)("group",{position:[-.04,6.13,.64],children:Object(l.jsxs)("group",{position:[0,0,-.64],rotation:[0,0,0],children:[Object(l.jsx)("group",{position:[0,1.39,0],rotation:[0,0,.01],children:Object(l.jsx)("group",{position:[0,1.81,0],rotation:[0,0,-.01],children:Object(l.jsxs)("group",{position:[0,2.14,0],rotation:[0,0,0],children:[Object(l.jsx)("group",{position:[1.11,-.4,-.01],rotation:[0,.05,-1.62],children:Object(l.jsx)("group",{position:[0,1.96,0],rotation:[.25,.01,.06],scale:[1,1,1]})}),Object(l.jsx)("group",{position:[-1.06,-.4,-.01],rotation:[0,-.05,1.62],children:Object(l.jsx)("group",{position:[0,1.96,0],rotation:[.25,-.01,-.06],scale:[1,1,1]})})]})})}),Object(l.jsx)("group",{position:[.92,.09,-.09],rotation:[-.04,.04,-3.11],children:Object(l.jsx)("group",{position:[0,2.85,0],rotation:[-.08,0,-.03]})}),Object(l.jsx)("group",{position:[-.92,.09,-.09],rotation:[-.04,-.04,3.11],scale:[1,1,1],children:Object(l.jsx)("group",{position:[0,2.85,0],rotation:[-.08,0,.03],scale:[1,1,1]})})]})}),Object(l.jsx)("mesh",{geometry:i.Island.geometry,material:s.islandMat,receiveShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Water.geometry,material:s.waterMat,position:[0,.56,-.01],scale:[2.22,2.22,2.22],receiveShadow:!0}),Object(l.jsx)("mesh",{geometry:i.tree1.geometry,material:i.tree1.material,position:[.98,1.15,.78],scale:[.05,.05,.05],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.tree2.geometry,material:i.tree2.material,position:[.92,1.19,-.12],rotation:[-Math.PI,.77,-Math.PI],scale:[.06,.06,.06],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.tree3.geometry,material:i.tree3.material,position:[.79,1.01,-1.59],rotation:[Math.PI,-1.02,Math.PI],scale:[.04,.04,.04],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Car.geometry,material:s.carMat,position:[.63,.71,-1.45],rotation:[-.75,.86,2.23],scale:[.08,.08,.08],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Character001.geometry,material:s.characterMat,position:[.89,.91,.16],rotation:[0,1.44,0],scale:[.01,.01,.01],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.WizardHat.geometry,material:s.wizardHatMat,position:[1.32,.82,-.1],rotation:[-.03,-.06,-.1],scale:[.03,.04,.03],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.rock.geometry,material:s.rockMat,position:[1.39,.85,.04],scale:[.29,.29,.29],castShadow:!0}),Object(l.jsxs)("group",{position:[1.37,.76,-.11],rotation:[-1.62,.13,-.46],scale:[0,-.04,0],children:[Object(l.jsx)("mesh",{geometry:i.Cylinder.geometry,material:s.wandWhiteMat,castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Cylinder_1.geometry,material:s.wandBlackMat,castShadow:!0})]}),Object(l.jsxs)("group",{position:[1.11,.79,.66],rotation:[.75,.16,1.68],scale:[.01,.01,.01],children:[Object(l.jsx)("mesh",{geometry:i.Plane010.geometry,material:s.crossMat}),Object(l.jsx)("mesh",{geometry:i.Plane010_1.geometry,material:s.naughtMat}),Object(l.jsx)("mesh",{geometry:i.Plane010_2.geometry,material:s.tictactoeMat,castShadow:!0})]}),Object(l.jsx)("mesh",{geometry:i.Cloud1.geometry,material:i.Cloud1.material,position:[.4,2.12,-1.74],scale:[.45,.36,.6],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Cloud2.geometry,material:i.Cloud2.material,position:[1.05,2,1.95],scale:[.44,.35,.59],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Cloud3.geometry,material:i.Cloud3.material,position:[.06,2.52,1.15],scale:[.47,.37,.63],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Cloud4.geometry,material:i.Cloud4.material,position:[-1.15,2.65,-.73],scale:[.65,.51,.87],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Fish1.geometry,material:s.fishRedMat,position:[.15,.64,-.47],rotation:[.27,.07,.45],scale:[.14,.14,.14],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Fish2.geometry,material:s.fishBlueMat,position:[.46,.72,-.43],rotation:[-.14,.2,-.03],scale:[.14,.14,.14],castShadow:!0}),Object(l.jsx)("mesh",{geometry:i.Fish3.geometry,material:s.fishYellowMat,position:[.68,.63,-.72],rotation:[.43,.16,-.42],scale:[.14,.14,.14],castShadow:!0})]}))}function C(e){return Object(l.jsx)(c.a.div,{className:"scene",animate:e.showProjects?{y:"-100vh"}:{y:0},transition:{duration:.05,type:"tween"},children:Object(l.jsx)(p.a,{style:{height:"100vh"},shadows:!0,children:Object(l.jsxs)(o.Suspense,{fallback:"loading 3d Models",children:[Object(l.jsx)(O.a,{makeDefault:!0,fov:75,near:.1,far:1e3,position:[4,2,0]}),Object(l.jsx)("directionalLight",{position:[10,8,0],castShadow:!0,intensity:.8,color:16777215}),Object(l.jsx)("ambientLight",{intensity:.6}),Object(l.jsx)(x.a,{minDistance:1,maxDistance:10}),Object(l.jsx)(y.a,{azimuth:180,elevation:0,exposure:.5,rayleigh:.035}),Object(l.jsx)(w.a,{radius:100,depth:50,count:5e3,factor:4,saturation:0}),Object(l.jsx)(S,{})]})})})}v.a.preload("/island.glb");a(74);function M(){return Object(l.jsx)("div",{className:"not-found",children:Object(l.jsx)("h1",{children:"Page Not Found"})})}a(75);function k(e){return Object(l.jsxs)("footer",{onClick:e.toggleShowProjects,children:[Object(l.jsx)(c.a.div,{className:"footer-wrapper",animate:e.showProjects?{y:[0,300]}:{y:[300,0]},transition:{duration:.5},children:Object(l.jsx)("h2",{children:"See Projects"})}),Object(l.jsx)(c.a.div,{className:"footer-wrapper",animate:e.showProjects?{y:[300,0]}:{y:[0,300]},transition:{duration:.5},children:Object(l.jsx)("h2",{children:"YES"})})]})}var N=a(15),P=a(85),I=a(83);function F(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],s=Object(o.useState)(!1),n=Object(r.a)(s,2),c=n[0],j=n[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),Object(l.jsx)(m,{showNav:a,toggleShowNav:function(){i((function(e){return!e}))},navItemClicked:function(){i(!1),j(!1)}}),Object(l.jsx)(N.a,{render:function(e){var t=e.location;return Object(l.jsx)(P.a,{children:Object(l.jsx)(I.a,{in:!0,classNames:"page",timeout:500,children:Object(l.jsxs)(N.c,{location:t,children:[Object(l.jsx)(N.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(N.a,{path:"/about",component:g}),Object(l.jsx)(N.a,{path:"/contact",component:u}),Object(l.jsx)(N.a,{component:M})]})},t.key)})}}),Object(l.jsx)(C,{showProjects:c}),Object(l.jsx)(k,{showProjects:c,toggleShowProjects:function(){j((function(e){return!e}))}})]})}var B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),o(e),i(e),s(e),n(e)}))};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(j.a,{children:Object(l.jsx)(F,{})})}),document.getElementById("root")),B()}},[[76,1,2]]]);
//# sourceMappingURL=main.03359822.chunk.js.map