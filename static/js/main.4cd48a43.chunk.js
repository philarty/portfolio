(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(1),r=n.n(s),a=n(2),o=n(21),c=n.n(o),d=n(23),l=n(3),h=(n(29),n(8)),p=n(12),u=n(13),j=n(11),b=n(15),m=n(14),x=function(e){switch(e.icon){case"sun":return Object(i.jsx)("svg",{className:"icon icon--sun",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(i.jsxs)("g",{children:[Object(i.jsx)("path",{d:"M12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"}),Object(i.jsx)("path",{d:"M12,5.5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4.5A1,1,0,0,1,12,5.5Z"}),Object(i.jsx)("path",{d:"M12,22a1,1,0,0,1-1-1V19.5a1,1,0,0,1,2,0V21A1,1,0,0,1,12,22Z"}),Object(i.jsx)("path",{d:"M21,13H19.5a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"}),Object(i.jsx)("path",{d:"M4.5,13H3a1,1,0,0,1,0-2H4.5a1,1,0,0,1,0,2Z"}),Object(i.jsx)("path",{d:"M17.3,7.7a1,1,0,0,1-.7-.3A1,1,0,0,1,16.6,6l1.06-1.06a1,1,0,1,1,1.41,1.41L18,7.4A1,1,0,0,1,17.3,7.7Z"}),Object(i.jsx)("path",{d:"M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L6,16.6A1,1,0,1,1,7.4,18L6.34,19.07A1,1,0,0,1,5.64,19.36Z"}),Object(i.jsx)("path",{d:"M18.36,19.36a1,1,0,0,1-.7-.29L16.6,18A1,1,0,1,1,18,16.6l1.06,1.06a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z"}),Object(i.jsx)("path",{d:"M6.7,7.7A1,1,0,0,1,6,7.4L4.93,6.34A1,1,0,0,1,6.34,4.93L7.4,6a1,1,0,0,1,0,1.41A1,1,0,0,1,6.7,7.7Z"})]})});case"moon":return Object(i.jsx)("svg",{className:"icon icon--moon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M12.5,21A9.5,9.5,0,0,1,9.77,2.4a1,1,0,0,1,1.14.44,1,1,0,0,1-.13,1.21A6.4,6.4,0,0,0,9,8.5,6.51,6.51,0,0,0,15.5,15,6.4,6.4,0,0,0,20,13.22a1,1,0,0,1,1.65,1A9.57,9.57,0,0,1,12.5,21ZM7.36,6.05A7.49,7.49,0,1,0,18,16.64,8.4,8.4,0,0,1,15.5,17,8.51,8.51,0,0,1,7,8.5,8.4,8.4,0,0,1,7.36,6.05Z"})})});case"menu":return Object(i.jsx)("svg",{className:"icon icon--menu",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(i.jsxs)("g",{id:"Symbol",children:[Object(i.jsx)("path",{d:"M18,8H6A1,1,0,0,1,6,6H18a1,1,0,0,1,0,2Z"}),Object(i.jsx)("path",{d:"M18,18H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z"}),Object(i.jsx)("path",{d:"M18,13H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z"})]})});default:return null}},g=n(16),f=r.a.forwardRef((function(e,t){var n=e.btnSize,s=e.btnStyle,r=e.btnColor,a=e.block,o=e.icon,c=e.children,d=e.onClick,l=e.className,p=Object(g.a)(e,["btnSize","btnStyle","btnColor","block","icon","children","onClick","className"]);return Object(i.jsx)("button",Object(h.a)(Object(h.a)({ref:t,className:"btn"+(n?" btn-"+n:" btn-md")+(o?" btn-icon":"")+(s?" btn-"+s:" btn-solid")+(r?"-"+r:"-default")+(a?" btn-block":"")+(l?" "+l:""),onClick:d},p),{},{children:c}))})),O=[{text:"Projects",url:"/projects"},{text:"About",url:"/about"},{text:"Aiya",url:"/404"}],v=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(p.a)(this,n),(i=t.call(this,e)).handleScroll=function(){i.setState({scroll:window.scrollY>0})},i.state={scroll:!1,expandedMenu:!1},i.setWrapperRef=i.setWrapperRef.bind(Object(j.a)(i)),i.handleClickOutside=i.handleClickOutside.bind(Object(j.a)(i)),i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousedown",this.handleClickOutside),window.addEventListener("touchstart",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousedown",this.handleClickOutside),window.removeEventListener("touchstart",this.handleClickOutside)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.setState({expandedMenu:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.scroll,s=t.expandedMenu,o=this.props,c=o.location,d=o.isDarkTheme,l=c&&c.pathname;return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsxs)("header",{ref:this.setWrapperRef,className:"main-header"+(n||s?" main-header--scroll":""),children:[Object(i.jsxs)("div",{className:"main-header__wrapper",children:[Object(i.jsx)(f,{onClick:function(){return e.setState({expandedMenu:!s})},icon:!0,btnStyle:"link",className:"main-header__mobile-nav-button",children:Object(i.jsx)(x,{icon:"menu"})}),Object(i.jsx)(a.b,{className:"main-header__logo",to:"/",onClick:function(){window.scrollTo(0,0),e.setState({expandedMenu:!1})},children:"Philarty"}),Object(i.jsxs)("nav",{className:"main-header__desktop-nav",children:[O.map((function(e){return Object(i.jsx)(a.b,{to:e.url,className:l.includes(e.url)?"active":"",onClick:function(){return window.scrollTo(0,0)},children:e.text},e.text)})),Object(i.jsx)(f,{onClick:this.props.onToggleTheme,btnStyle:"link",icon:!0,children:Object(i.jsx)(x,{icon:d?"sun":"moon"})})]})]}),Object(i.jsx)("nav",{className:"main-header__mobile-nav "+(s?" main-header__mobile-nav--show":""),children:O.map((function(t){return Object(i.jsx)(a.b,{to:t.url,className:l.includes(t.url)?"active":"",onClick:function(){e.setState({expandedMenu:!1}),window.scrollTo(0,0)},children:t.text},t.text)}))})]}),Object(i.jsx)("div",{className:"header__pseudo"})]})}}]),n}(r.a.Component);var y=function(e){var t=Object(l.g)(),n=Object.assign({},e);return Object(i.jsx)(v,Object(h.a)({location:t},n))},w=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("div",{className:"footer__wrapper",children:Object(i.jsx)("p",{children:"thanks for checking out my site! bye! "})})})},k=n.p+"static/media/HeadShot.c331daf2.jpg",S=function(){return Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsx)("img",{src:k,alt:"Profile"}),Object(i.jsx)("h1",{children:"Hi. It's Phil!"}),Object(i.jsxs)("h2",{className:"h1",children:["I ",Object(i.jsx)(a.b,{to:"/projects/design",children:"Design"}),","," ",Object(i.jsx)(a.b,{to:"/projects/code",children:"Code"}),", &"," ",Object(i.jsx)(a.b,{to:"/projects/make",children:"Make"})," Stuff"]}),Object(i.jsx)("p",{children:"Here is a little paragraph about myself, I'm not 100% what to put in here yet, but if you are reading this, feel free to send me a message about why you think im hirable. it would probably be around four to five lines, so which is the length of this little snippet. Thanks for your input!"})]})},C=function(){return Object(i.jsxs)("section",{className:"four-oh-four",children:[Object(i.jsx)("h1",{children:"AIYA"}),Object(i.jsx)("h3",{children:"Seems like you are lost."}),Object(i.jsx)("img",{src:"https://source.unsplash.com/600x600?cute-animals",alt:"Cute Animals"}),Object(i.jsx)("p",{children:"here are some cute animals for your troubles"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"http://philarty.github.io/portfolio#/404",className:"btn btn-lg btn-solid-red",children:"I want more cutness"}),Object(i.jsx)(a.b,{to:"/",className:"btn btn-lg btn-solid-green",children:"Go back to Portfolio"})]})]})},_=[{header:"Education",contents:[{sub_header:"Rhode Island School of Design - RISD",title:"BFA Industrial Design",period:"2014-2018"},{sub_header:"Brown University",title:"Spanish Studies",period:"2017-2018"},{sub_header:"Edinburgh College of Arts - ECA",title:"Product Design",period:"Spring 2017"}]},{header:"Work Experience",contents:[{sub_header:"Chronicle Books",title:"Industrial Design Fellow",period:"2018-2019",description:["Worked across different publishing-groups and cross functional teams to develop novel products and packagings from conception to market. Considered point of purchase, perceived value, shipping and cost.","Created low fidelity physical prototypes and visual renderings of new concepts. Taught other designers how to utilize 3D modeling and rendering softwares and programs to realize concepts.","Managed international vendor relationships to ensure high production quality while maintaining margins."]},{sub_header:"Praise HK",title:"UIUX Designer",period:"2018-2019",description:["Commissioned by HKUST to develop a user centric smart city app to summarize complex street level pollution data and health risk information.","Mobile app aims to empower people affected by COPD or asthma to reduce individual pollution exposure in their daily life and provide personalized analytics.","Created user experience maps, wire-frames, user interface, and background illustrations."]},{sub_header:"PBteen",title:"DecAcc Design Intern",period:"Summer 2017",description:["Expanded product line for college students and dorm rooms. Developed a variety of space-saving solutions to management team which were brought to market.","Assisted designers to iterate on product ideas and produce design specs to be sent to overseas vendors."]}]},{header:"Skills",contents:[{sub_header:"Software - Mac & PC",description:["Illustrator","Sketch","HTML","CSS","Rhino","SolidWorks","KeyShot","Fusion360","Brazil","Grasshopper","InDesign","Photoshop"]},{sub_header:"Prototype",description:["Metal machining","Wood forming ","Sketching","Marker Rendering","Hacking","CNC milling","Glass Blowing","Drafting"]}]},{header:"Relevant Experience",contents:[{sub_header:"Design Fellowship Recruitment Campaign",title:"Chronicle Books",period:"2018",description:["Designed a poster and interactive postcard inspired by Chronicle Books\u2019 logo, the spectacles. Provided art direction and designed additional campaign materials such as social media assets, website landing page, and email banner to advertise their fellowship program."]},{sub_header:"Gap UrbanLite Arox Bra",title:"MIT and Gap Inc",period:"MIT and Gap Inc",description:["Collaborated with an interdisciplinary team at MIT to develop a user friendly, versatile, comfortable day-tonight bra that allows women to transition seamlessly between different activities.","Performed user research to discover pain point of currently available sports bra. Created high fidelity prototype and conducted user testing to refine solution."]},{sub_header:"First Responder Headlamp",title:"Brown University and RI Hospita",period:"Fall 2017",description:["Partnered with RI hospital EMT team and Brown University engineers to develop and design a headlamp to ease airway examination during emergency situations. Headlamp aligns light with vision to improve illumination of mouth and airway.","Conducted qualitative user research to discover challenges of lighting equipment. Created a functional, high fidelity prototype that received positive reviews during final user testing.Conducted qualitative user research to discover challenges of lighting equipment. Created a functional, high fidelity prototype that received positive reviews during final user testing."]}]},{header:"Languages",contents:[{title:"English",period:"Native proficiency"},{title:"Chinese",period:"Native proficiency"},{title:"Mandarin",period:"Working proficiency"}]},{header:"Personal Interest",contents:[{description:["Jumping Photos","LGBT Films","Bike Share","Dancing"]}]},{header:"Exhibitions",contents:[{description:["2018 Industrial Design Senior Show","2017 ECA Product Design Exhibition","2015 Foundation Studies Triennial"]}]},{header:"Awards And Scholarship",contents:[{description:["Fred M. Roddy Memorial Scholarship","MIT Hacking Medicine Sponsor Award","The Clive Lambourn Memorial Prize","Roivant Science Sponsorship Award","Thomas Alva Edison Industrial Design Award"]}]}],I=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(i.jsx)("div",{className:"resume__section",children:e})}}]),n}(r.a.Component);I.Header=function(e){var t=e.children;return Object(i.jsx)("h3",{children:t})},I.SubSection=function(e){var t=e.children,n=Object(g.a)(e,["children"]);return Object(i.jsx)("div",Object(h.a)(Object(h.a)({className:"resume__item"},n),{},{children:t}))},I.SubHeader=function(e){var t=e.children;return Object(i.jsx)("h4",{children:t})},I.Detail=function(e){var t=e.title,n=e.period;return Object(i.jsxs)("div",{className:"resume__detail",children:[Object(i.jsx)("h5",{children:t}),Object(i.jsx)("span",{}),n&&Object(i.jsx)("p",{children:n})]})},I.Content=function(e){var t=e.children;return Object(i.jsx)("div",{className:"resume__content",children:t})},I.Description=function(e){var t=e.children;return t.length<20?Object(i.jsx)("span",{children:t}):Object(i.jsx)("p",{children:t})};var M=function(){return Object(i.jsxs)("div",{className:"resume",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Philip Lau"}),Object(i.jsx)("p",{children:"UIUX Engineer"}),Object(i.jsx)(a.b,{to:"/",children:"philarty.github.io/portfolio"})]}),Object(i.jsx)("div",{children:_.slice(0,3).map((function(e){return Object(i.jsxs)(I,{children:[Object(i.jsx)(I.Header,{children:e.header}),e.contents.map((function(e){return Object(i.jsxs)(I.SubSection,{children:[Object(i.jsx)(I.SubHeader,{children:e.sub_header}),(e.title||e.period)&&Object(i.jsx)(I.Detail,{title:e.title,period:e.period}),e.description&&Object(i.jsx)(I.Content,{children:e.description&&e.description.map((function(e){return Object(i.jsx)(I.Description,{children:e},e)}))})]},e.sub_header||e.title||e.description)}))]},e.header)}))}),Object(i.jsx)("div",{children:_.slice(3).map((function(e){return Object(i.jsxs)(I,{children:[Object(i.jsx)(I.Header,{children:e.header}),e.contents.map((function(e){return Object(i.jsxs)(I.SubSection,{children:[Object(i.jsx)(I.SubHeader,{children:e.sub_header}),(e.title||e.period)&&Object(i.jsx)(I.Detail,{title:e.title,period:e.period}),Object(i.jsx)(I.Content,{children:e.description&&e.description.map((function(e){return Object(i.jsx)(I.Description,{children:e},e)}))})]},e.sub_header||e.title||e.description)}))]},e.header)}))})]})},N=function(){return Object(i.jsxs)("section",{className:"about",children:[Object(i.jsx)(S,{}),Object(i.jsx)(M,{})]})},A=function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project-preview",children:[Object(i.jsx)(a.b,{to:"/project/"+t.id,className:"project-preview__link"}),Object(i.jsx)("div",{className:"project-preview__img",children:Object(i.jsx)("img",{src:t.imageSrc,alt:t.title})}),Object(i.jsx)("h3",{children:t.title}),Object(i.jsx)("p",{children:t.description}),Object(i.jsx)("div",{className:"project-preview__tags",children:t.tags.map((function(e){return Object(i.jsx)(a.b,{to:"/projects/"+e,onClick:function(){return window.scrollTo(0,0)},children:e},e)}))})]})},D=[{title:"Design Project",id:"test1",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",imageSrc:"https://picsum.photos/seed/1/500/300",tags:["design"]},{title:"Code Project",id:"test2",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",imageSrc:"https://picsum.photos/seed/2/500/300",tags:["code"]},{title:"Make Project",id:"test3",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",imageSrc:"https://picsum.photos/seed/3/500/300",tags:["make"]},{title:"Design Project 2",id:"test4",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",imageSrc:"https://picsum.photos/seed/4/500/300",tags:["design","make"]},{title:"Code Project 3",id:"test5",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",imageSrc:"https://picsum.photos/seed/5/500/300",tags:["code","design"]},{title:"Make Project2",id:"test6",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ",imageSrc:"https://picsum.photos/seed/6/500/300",tags:["make","code"]}];var L=function(){var e=Object(l.g)(),t=(e&&e.pathname).replace("/projects","").replace(/^\/|/g,""),n=t?D.filter((function(e){return e.tags.includes(t)})):D;return Object(i.jsxs)("section",{className:"project-index",children:[t&&Object(i.jsx)("h1",{className:"project-index__title",children:t.charAt(0).toUpperCase()+t.slice(1)}),Object(i.jsx)("div",{className:"project-index__grid",children:n.map((function(e){return Object(i.jsx)(A,{project:e},e.title)}))})]})},P=function(){var e=Object(l.h)().projectId,t=D.find((function(t){return t.id===e}));return t?Object(i.jsxs)("section",{className:"project",children:[Object(i.jsx)("div",{children:t.title}),Object(i.jsxs)("div",{children:["This is a functional page for ",t.id," "]}),Object(i.jsx)("img",{src:t.imageSrc,alt:t.title})]}):Object(i.jsx)(C,{})};function H(){var e=Object(l.g)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var T=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=Object(s.useState)(e),n=Object(d.a)(t,2),r=n[0],a=n[1];return Object(i.jsxs)("div",{className:"app"+(r?" dark":" light"),children:[Object(i.jsx)(H,{}),Object(i.jsx)(y,{onToggleTheme:function(){return a(!r)},isDarkTheme:r}),Object(i.jsxs)(l.d,{children:[Object(i.jsxs)(l.b,{exact:!0,path:"/",children:[Object(i.jsx)("section",{className:"about",children:Object(i.jsx)(S,{})}),Object(i.jsx)(L,{})]}),Object(i.jsx)(l.b,{exact:!0,path:"/projects",component:L}),Object(i.jsx)(l.b,{exact:!0,path:"/projects/design",component:L}),Object(i.jsx)(l.b,{exact:!0,path:"/projects/code",component:L}),Object(i.jsx)(l.b,{exact:!0,path:"/projects/make",component:L}),Object(i.jsx)(l.b,{exact:!0,path:"/about",component:N}),Object(i.jsx)(l.b,{path:"/project/:projectId",component:P}),Object(i.jsx)(l.b,{exact:!0,path:"/404",component:C}),Object(i.jsx)(l.a,{to:"/404"})]}),Object(i.jsx)(w,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),r(e),a(e)}))};c.a.render(Object(i.jsx)(a.a,{basename:"/",children:Object(i.jsx)(T,{})}),document.getElementById("root")),E()}},[[38,1,2]]]);
//# sourceMappingURL=main.4cd48a43.chunk.js.map