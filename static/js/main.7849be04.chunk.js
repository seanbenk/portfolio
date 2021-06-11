(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{49:function(e,t,o){},79:function(e,t,o){},80:function(e,t,o){},81:function(e,t,o){},88:function(e,t,o){},89:function(e,t,o){},90:function(e,t,o){},94:function(e,t,o){},95:function(e,t,o){},96:function(e,t,o){},97:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),s=o(30),i=o.n(s),c=(o(79),o(13)),r=(o(80),o(81),o(118)),j=o(28),l=o(7),h={hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:.2,staggerChildren:.2}}},d={hidden:{opacity:0,x:100},show:{opacity:1,x:0}};function b(e){var t=e.showNav,o=e.toggleShowNav,a=e.navItemClicked;return Object(l.jsxs)(r.a.nav,{className:t?"show-nav":"",initial:!1,animate:t?{right:0,top:0,height:"100vh",width:"50vw",borderRadius:0}:{right:"2.5vh",top:"2.5vh",height:"10vh",width:"10vh",borderRadius:"100vh"},children:[Object(l.jsx)("div",{className:"burger-wrapper",children:Object(l.jsxs)("div",{className:t?"burger-container  show-nav":"burger-container",onClick:o,children:[Object(l.jsx)("div",{className:"burger-1"}),Object(l.jsx)("div",{className:"burger-2"}),Object(l.jsx)("div",{className:"burger-3"})]})}),Object(l.jsxs)(r.a.ul,{variants:h,initial:"hidden",animate:t?"show":"hidden",children:[Object(l.jsx)(r.a.li,{onClick:a,variants:d,children:Object(l.jsx)(j.c,{exact:!0,to:"/",activeClassName:"selected",children:"Home"})}),Object(l.jsx)(r.a.li,{onClick:a,variants:d,children:Object(l.jsx)(j.c,{exact:!0,to:"/about",activeClassName:"selected",children:"About Me"})}),Object(l.jsx)(r.a.li,{onClick:a,variants:d,children:Object(l.jsx)(j.c,{exact:!0,to:"/contact",activeClassName:"selected",children:"Contact"})})]})]})}o(88);function u(e){return Object(l.jsxs)(r.a.div,{className:"home",id:"home",children:[Object(l.jsx)(r.a.h1,{animate:{opacity:[0,1],y:[-200,0]},transition:{type:"spring"},children:"Hi!"}),Object(l.jsxs)(r.a.h2,{animate:{opacity:[0,1],y:[-200,0]},children:["I'm Sean, a software engineer currently based in ",Object(l.jsx)("span",{children:"Sydney, Australia"})]}),Object(l.jsx)(r.a.span,{animate:{opacity:[0,1]},className:"material-icons down-arrow"}),Object(l.jsx)(j.b,{exact:!0,to:"/about",children:Object(l.jsx)("span",{class:"material-icons arrow right-arrow",children:"keyboard_arrow_right"})})]})}o(89);function m(){return Object(l.jsxs)("div",{className:"about",id:"about",children:[Object(l.jsx)("h1",{animate:{opacity:[0,1]},children:"About me"}),Object(l.jsx)("p",{animate:{opacity:[0,1]},children:"I have been coding as a hobby since high school and decided to take it a little more seriously mid 2020. I love diving into new projects and extending my knowledge of languages/frameworks and coding concepts. In my free time I rock climb and enjoy trying new sports and playing guitar. I am always looking for new projects and opportunities to grow myself both as a programmer and person."}),Object(l.jsx)(j.b,{exact:!0,to:"/",children:Object(l.jsx)("span",{class:"material-icons arrow left-arrow",children:"keyboard_arrow_left"})}),Object(l.jsx)(j.b,{exact:!0,to:"/contact",children:Object(l.jsx)("span",{class:"material-icons arrow right-arrow",children:"keyboard_arrow_right"})})]})}o(90);function p(){return Object(l.jsxs)("div",{className:"contact",id:"contact",children:[Object(l.jsxs)("div",{className:"contact-wrapper",children:[Object(l.jsx)("h1",{children:"Contact"}),Object(l.jsx)("h2",{children:"Email:"}),Object(l.jsx)("p",{children:"seanbenkenstein@gmail.com"}),Object(l.jsx)("h2",{children:"Phone:"}),Object(l.jsx)("p",{children:"0439 000 690"})]}),Object(l.jsx)(j.b,{exact:!0,to:"/about",children:Object(l.jsx)("span",{class:"material-icons arrow left-arrow",children:"keyboard_arrow_left"})})]})}o(49);var g=[{name:"TicTacToe",blurb:"this is a tic tac toe game I built with raw html, css and javascript",githubLink:"https://github.com/seanbenk/tictactoe",websiteLink:"https://seanbenk.github.io/tictactoe/"},{name:"Fish Finder",blurb:"this is a Restful Api app I made where people can post infomation about their favourite fishing spots and find new ones close to them using the google maps API",githubLink:"https://github.com/seanbenk/fishadvisor",websiteLink:"https://glacial-sands-22653.herokuapp.com/"},{name:"Widget Wizard",blurb:"Widget Wizards is a group project I worked on with the idea being a dashboard application you can use as your home page in your favourite browser",githubLink:"https://github.com/jtabba/Widget_Wizard",websiteLink:"https://widget-wizard.herokuapp.com/"},{name:"Path Finder",blurb:"this is an app that demonstrates path finding, dijkstra's algoruthm is used to find a path from point a to point b ",githubLink:"https://github.com/seanbenk/path-finder",websiteLink:"https://seanbenk.github.io/path-finder/"}];function O(e){var t=e.projectNumber,o=e.closeProjectInfo,a=g[t];return Object(l.jsxs)("section",{className:"project-info",children:[Object(l.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(l.jsxs)("div",{className:"project-info-wrapper",children:[Object(l.jsx)("h2",{children:a.name}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:a.blurb}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:a.githubLink,rel:"noreferrer",target:"_blank",children:Object(l.jsx)("i",{class:"fa fa-github git-icon"})}),Object(l.jsx)("a",{href:a.websiteLink,rel:"noreferrer",target:"_blank",children:Object(l.jsx)("span",{class:"material-icons website-icon",children:"language"})})]})]}),Object(l.jsx)("h3",{className:"close",onClick:o,children:"CLOSE"})]})]})}function x(e){var t=e.setCurrentProject,o=e.showSky;return Object(l.jsxs)("div",{className:"projects-list",children:[Object(l.jsx)("h4",{className:o?"dark-mode":null,children:"Projects Quick Nav"}),Object(l.jsx)("ul",{children:g.map((function(e,a){return Object(l.jsx)("li",{className:o?"dark-mode":null,onClick:function(){return t(a)},children:e.name},a)}))})]})}function f(e){var t=e.closeProjectsInstructions;return Object(l.jsx)("section",{className:"projects-instructions",children:Object(l.jsxs)("div",{className:"projects-instructions-wrapper",children:[Object(l.jsx)("h2",{children:"Instructions"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("i",{children:"Click and Drag"})," or ",Object(l.jsx)("i",{children:"Swipe"})," to move the model around.",Object(l.jsx)("br",{}),Object(l.jsx)("i",{children:"Click"})," on different sections or use the nav menu to open up a project of mine."]}),Object(l.jsx)("h3",{className:"close",onClick:t,children:"CLOSE"})]})})}var w=o(34),y=o(59),v=o(119),k=Object(w.a)({switchBase:{color:y.a[300],"&$checked":{color:y.a[500]},"&$checked + $track":{backgroundColor:y.a[500]}},checked:{},track:{}})(v.a);function P(e){var t=e.state,o=e.setState;return Object(l.jsx)(k,{checked:t,onChange:o})}var C=o(64),S=o(23),N=o(123),I=o(124),M=o(125),L=o(117),D=o(11),_=o(121);function F(e){var t=Object(a.useRef)(),o=Object(_.a)("/island.glb"),n=o.nodes,s=o.materials;s.islandMat.roughness=1,s.waterMat.transparent=!0,s.waterMat.opacity=.7;return Object(l.jsxs)("group",Object(D.a)(Object(D.a)({ref:t},e),{},{dispose:null,shadows:!0,children:[Object(l.jsx)("group",{position:[-.04,6.13,.64],children:Object(l.jsxs)("group",{position:[0,0,-.64],rotation:[0,0,0],children:[Object(l.jsx)("group",{position:[0,1.39,0],rotation:[0,0,.01],children:Object(l.jsx)("group",{position:[0,1.81,0],rotation:[0,0,-.01],children:Object(l.jsxs)("group",{position:[0,2.14,0],rotation:[0,0,0],children:[Object(l.jsx)("group",{position:[1.11,-.4,-.01],rotation:[0,.05,-1.62],children:Object(l.jsx)("group",{position:[0,1.96,0],rotation:[.25,.01,.06],scale:[1,1,1]})}),Object(l.jsx)("group",{position:[-1.06,-.4,-.01],rotation:[0,-.05,1.62],children:Object(l.jsx)("group",{position:[0,1.96,0],rotation:[.25,-.01,-.06],scale:[1,1,1]})})]})})}),Object(l.jsx)("group",{position:[.92,.09,-.09],rotation:[-.04,.04,-3.11],children:Object(l.jsx)("group",{position:[0,2.85,0],rotation:[-.08,0,-.03]})}),Object(l.jsx)("group",{position:[-.92,.09,-.09],rotation:[-.04,-.04,3.11],scale:[1,1,1],children:Object(l.jsx)("group",{position:[0,2.85,0],rotation:[-.08,0,.03],scale:[1,1,1]})})]})}),Object(l.jsx)("mesh",{geometry:n.Island.geometry,material:s.islandMat,receiveShadow:!0}),Object(l.jsx)("mesh",{geometry:n.Water.geometry,material:s.waterMat,position:[0,.56,-.01],scale:[2.22,2.22,2.22],receiveShadow:!0}),Object(l.jsx)("mesh",{geometry:n.tree1.geometry,material:n.tree1.material,position:[.98,1.15,.78],scale:[.05,.05,.05],castShadow:!0}),Object(l.jsx)("mesh",{geometry:n.tree2.geometry,material:n.tree2.material,position:[.92,1.19,-.12],rotation:[-Math.PI,.77,-Math.PI],scale:[.06,.06,.06],castShadow:!0}),Object(l.jsx)("mesh",{geometry:n.tree3.geometry,material:n.tree3.material,position:[.79,1.01,-1.59],rotation:[Math.PI,-1.02,Math.PI],scale:[.04,.04,.04],castShadow:!0}),Object(l.jsx)("mesh",{geometry:n.Car.geometry,material:s.carMat,position:[.63,.71,-1.45],rotation:[-.75,.86,2.23],scale:[.08,.08,.08],castShadow:!0,onPointerDown:function(t){t.stopPropagation(),e.setCurrentProject(3)},onPointerOver:function(e){e.object.material.emissive={r:.06,g:.06,b:.06},document.body.style.cursor="pointer"},onPointerOut:function(e){e.object.material.emissive={r:0,g:0,b:0},document.body.style.cursor="auto"}}),Object(l.jsx)("mesh",{geometry:n.Character001.geometry,material:s.characterMat,position:[.89,.91,.16],rotation:[0,1.44,0],scale:[.01,.01,.01],castShadow:!0,onClick:function(e){return console.log(e)}}),Object(l.jsx)("mesh",{geometry:n.WizardHat.geometry,material:s.wizardHatMat,position:[1.32,.82,-.1],rotation:[-.03,-.06,-.1],scale:[.03,.04,.03],castShadow:!0,onPointerDown:function(t){t.stopPropagation(),e.setCurrentProject(2)}}),Object(l.jsx)("mesh",{geometry:n.rock.geometry,material:s.rockMat,position:[1.39,.85,.04],scale:[.29,.29,.29],castShadow:!0,onPointerDown:function(t){t.stopPropagation(),e.setCurrentProject(2)}}),Object(l.jsxs)("group",{position:[1.11,.79,.66],rotation:[.75,.16,1.68],scale:[.01,.01,.01],children:[Object(l.jsx)("mesh",{geometry:n.Plane010.geometry,material:s.crossMat,onPointerDown:function(t){t.stopPropagation(),e.setCurrentProject(0)}}),Object(l.jsx)("mesh",{geometry:n.Plane010_1.geometry,material:s.naughtMat,onPointerDown:function(t){t.stopPropagation(),e.setCurrentProject(0)}}),Object(l.jsx)("mesh",{geometry:n.Plane010_2.geometry,material:s.tictactoeMat,castShadow:!0,onPointerDown:function(t){t.stopPropagation(),e.setCurrentProject(0)}})]}),Object(l.jsx)("mesh",{geometry:n.Cloud1.geometry,material:n.Cloud1.material,position:[.4,2.12,-1.74],scale:[.45,.36,.6],castShadow:!0}),Object(l.jsx)("mesh",{geometry:n.Cloud2.geometry,material:n.Cloud2.material,position:[1.05,2,1.95],scale:[.44,.35,.59],castShadow:!0}),Object(l.jsx)("mesh",{geometry:n.Cloud3.geometry,material:n.Cloud3.material,position:[.06,2.52,1.15],scale:[.47,.37,.63],castShadow:!0}),Object(l.jsx)("mesh",{geometry:n.Cloud4.geometry,material:n.Cloud4.material,position:[-1.15,2.65,-.73],scale:[.65,.51,.87],castShadow:!0}),Object(l.jsx)("mesh",{geometry:n.Fish1.geometry,material:s.fishRedMat,position:[.15,.64,-.47],rotation:[.27,.07,.45],scale:[.14,.14,.14],castShadow:!0,onPointerDown:function(t){t.stopPropagation(),e.setCurrentProject(1)}}),Object(l.jsx)("mesh",{geometry:n.Fish2.geometry,material:s.fishBlueMat,position:[.46,.72,-.43],rotation:[-.14,.2,-.03],scale:[.14,.14,.14],castShadow:!0,onPointerDown:function(t){t.stopPropagation(),e.setCurrentProject(1)}}),Object(l.jsx)("mesh",{geometry:n.Fish3.geometry,material:s.fishYellowMat,position:[.68,.63,-.72],rotation:[.43,.16,-.42],scale:[.14,.14,.14],castShadow:!0,onPointerDown:function(t){console.log(t),t.stopPropagation(),e.setCurrentProject(1)}})]}))}function W(e){var t=e.showProjects,o=e.showProjectsInstructions,n=e.setShowProjectsInstructions,s=Object(a.useState)(-1),i=Object(c.a)(s,2),j=i[0],h=i[1],d=Object(a.useState)(!1),b=Object(c.a)(d,2),u=b[0],m=b[1],p=Object(a.useRef)(),g=Object(C.useSpring)({pos:[2,1,.6],from:{pos:[4,4,0]},config:{duration:2500}});var w=Object(C.animated)(N.a);return Object(l.jsxs)(r.a.div,{className:"scene",animate:t?{y:"-100vh"}:{y:0},transition:{duration:.05,type:"tween"},children:[Object(l.jsxs)("div",{className:"show-sky-switch",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(P,{state:u,setState:function(){m((function(e){return!e}))}}),Object(l.jsx)("span",{className:u?"dark-mode":null,children:"Sky"})]}),o?null:Object(l.jsx)("span",{className:u?"material-icons info-btn dark-mode":"material-icons info-btn",onClick:function(){n(!0)},children:"help_outline"})]}),Object(l.jsx)(S.a,{style:{height:"100vh"},children:Object(l.jsxs)(a.Suspense,{fallback:"loading 3d Models",children:[Object(l.jsx)(w,{makeDefault:!0,fov:75,near:.1,far:1e3,position:g.pos}),Object(l.jsx)("directionalLight",{position:[10,8,0],castShadow:!0,intensity:.8,color:16777215}),Object(l.jsx)("ambientLight",{intensity:.6}),Object(l.jsx)(I.a,{minDistance:1,maxDistance:10,ref:p,target:[.89,.91,.16]}),u?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M.a,{rayleigh:20}),Object(l.jsx)(L.a,{radius:100,depth:50,count:5e3,factor:4,saturation:0})]}):null,Object(l.jsx)(F,{setCurrentProject:h})]})}),Object(l.jsx)(x,{setCurrentProject:h,showSky:u}),o?Object(l.jsx)(f,{closeProjectsInstructions:function(){n(!1),g.pos.reset()}}):null,j>=0?Object(l.jsx)(O,{projectNumber:j,closeProjectInfo:function(){h(-1)}}):null]})}_.a.preload("/island.glb");o(94);function z(){return Object(l.jsx)("div",{className:"not-found",children:Object(l.jsx)("h1",{children:"Page Not Found"})})}o(95);function R(e){return Object(l.jsxs)("footer",{onClick:e.toggleShowProjects,children:[Object(l.jsx)(r.a.div,{className:"footer-wrapper",animate:e.showProjects?{y:[0,300]}:{y:[300,0]},transition:{duration:.5},children:Object(l.jsx)("h2",{children:"See My Projects"})}),Object(l.jsx)(r.a.div,{className:"footer-wrapper",animate:e.showProjects?{y:[300,0]}:{y:[0,300]},transition:{duration:.5},children:Object(l.jsx)("h2",{children:"Hide Projects"})})]})}o(96);var A=o(21),H=o(122),T=o(120);function B(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),o=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(c.a)(s,2),r=i[0],j=i[1],h=Object(a.useState)(!0),d=Object(c.a)(h,2),g=d[0],O=d[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),Object(l.jsx)(b,{showNav:o,toggleShowNav:function(){n((function(e){return!e}))},navItemClicked:function(){n(!1),j(!1)}}),Object(l.jsx)(A.a,{render:function(e){var t=e.location;return Object(l.jsx)(H.a,{children:Object(l.jsx)(T.a,{in:!0,classNames:"page",timeout:500,children:Object(l.jsxs)(A.c,{location:t,children:[Object(l.jsx)(A.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(A.a,{path:"/about",component:m}),Object(l.jsx)(A.a,{path:"/contact",component:p}),Object(l.jsx)(A.a,{component:z})]})},t.key)})}}),Object(l.jsx)(W,{showProjects:r,showProjectsInstructions:g,setShowProjectsInstructions:O}),Object(l.jsx)(R,{showProjects:r,toggleShowProjects:function(){j((function(e){return!e}))}})]})}var E=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,126)).then((function(t){var o=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;o(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j.a,{children:Object(l.jsx)(B,{})})}),document.getElementById("root")),E()}},[[97,1,2]]]);
//# sourceMappingURL=main.7849be04.chunk.js.map