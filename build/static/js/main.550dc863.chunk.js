(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,t,a){"use strict";(function(e){var s=a(5),c=a(18),n=a(19),r=a(22),l=a(21),o=a(2),i=a(134),d=(a(55),a(1)),h=function(t){Object(r.a)(o,t);var a=Object(l.a)(o);function o(){var t;Object(c.a)(this,o);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=a.call.apply(a,[this].concat(r))).state={authSel:"",headers:{},header:{key:"",value:""},showPass:!1,Addto:"Headers"},t.handleChange=function(e){var a=e.currentTarget,c=Object(s.a)({},t.state);c.authSel=a.value,c.header={key:"",value:""},t.setState(c)},t.handleChangeHeader=function(a){var c=a.currentTarget,n=Object(s.a)({},t.state);if("Bearer Token"==n.authSel)n.header[c.name]=c.value,n.headers={Authorization:"Bearer "+c.value};else if("Basic Auth"==n.authSel)if("showPass"==c.name)console.log(c.checked),n.showPass=1==c.checked;else{n.header[c.name]=c.value;var r="Basic "+new e(n.header.key+":"+n.header.value).toString("base64");n.headers={Authorization:r}}else if("API Key"==n.authSel&&(n.header[c.name]=c.value,"Headers"==n.Addto)){var l=[];l.push(n.header.key),l.push(n.header.value),console.log(l);var o=Object.assign(l);n.headers=o}t.props.onPutAuth(n.headers),console.log(n.headers),t.setState(n)},t.showBearerField=function(e,a,s){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-2 mt-1",children:"Token"}),Object(d.jsx)("div",{className:"col-2"}),Object(d.jsx)("div",{className:"col-8 pb-4",children:Object(d.jsx)("input",{type:"text",value:e,name:"value",placeholder:"Token",className:"form-control",onChange:t.handleChangeHeader})})]})},t.showinputField=function(e,a,s,c){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-3 col-lg-3",children:e}),Object(d.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-3 col-lg-3"}),Object(d.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-3 col-lg-3 form-group",children:Object(d.jsx)("input",{className:"form-control ",style:{height:"28px"},type:1==c?"text":"password",name:s,value:a,onChange:t.handleChangeHeader})})]})},t.checkPass=function(e,a){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-4 col-xs-6"}),Object(d.jsxs)("div",{className:"ccol-lg-5 col-md-4 col-sm-6 col-xs-6 mx-3 form-check pb-3",children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",name:e,value:a,checked:1==a,onChange:t.handleChangeHeader}),Object(d.jsx)("label",{className:"form-check-label mx-2",children:" Show Password"})]})]})},t.showDropDown=function(e,a,s){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-3",children:e}),Object(d.jsx)("div",{className:"col-3 col-sm3"}),Object(d.jsx)("div",{className:"col-5 col-sm-5",children:Object(d.jsx)(i.a.Select,{className:"auth-drop","aria-label":"Default select example",value:"value",name:"Addto",onChange:t.handleChangeHeader,style:{height:"33px"},children:a.map((function(e){return Object(d.jsx)("option",{value:e,children:e})}))})})]})},t}return Object(n.a)(o,[{key:"render",value:function(){var e=this.props.authHeader,t=this.state,a=t.authSel,s=t.header,c=t.showPass;console.log(e.value);return Object(d.jsx)("div",{className:"container border auth-height",children:Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4",children:[Object(d.jsxs)("div",{className:"row ",children:[Object(d.jsx)("div",{className:"col-4  mt-2",children:"Type"}),Object(d.jsx)("div",{className:"col-8",children:Object(d.jsx)(i.a.Select,{className:"auth-drop","aria-label":"Default select example",value:a,name:"status",onChange:this.handleChange,children:["No Auth","Bearer Token","Basic Auth"].map((function(e){return Object(d.jsx)("option",{value:e,children:e})}))})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"The authorization header will be automatically generated when you send the request. "})]}),Object(d.jsx)("div",{className:"col-xs-8  col-sm-12 col-md-8 col-lg-8",children:"No Auth"==a?Object(d.jsx)("span",{className:"pb-4",children:"This request does not use any authorization"}):"Bearer Token"==a?this.showBearerField(s.value,s.key):"Basic Auth"==a?Object(d.jsxs)("div",{children:[this.showinputField("UserName",s.key,"key",!0),Object(d.jsx)("br",{}),this.showinputField("Password",s.value,"value",c),Object(d.jsx)("br",{}),this.checkPass("showPass",c)]}):"API Key"==a?Object(d.jsxs)("div",{children:[this.showinputField("Key",s.key,"key",!0),Object(d.jsx)("br",{}),this.showinputField("Value",s.value,"value",!0),Object(d.jsx)("br",{}),this.showDropDown("API Key",["Headers","Query Params"])]}):Object(d.jsx)("p",{className:"mt-3  pb-3",children:"This request does not use any authorization"})})]})})}}]),o}(o.Component);t.a=h}).call(this,a(182).Buffer)},143:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(35),r=a.n(n),l=(a(143),a(115)),o=a(45),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,244)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))},d=(a(147),a(18)),h=a(19),j=a(22),b=a(21),u=a(67),m=a(1),x=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",style:{backgroundColor:"#f58142"},children:[Object(m.jsxs)("a",{className:"navbar-brand mx-2 text-danger",href:"#",children:[Object(m.jsx)(u.a,{className:"left-icon"}),Object(m.jsx)("span",{className:"mx-2 mt-3",children:"PostMan"})]}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(m.jsx)("div",{className:"navbar-nav",children:Object(m.jsx)("a",{className:"nav-item nav-link active",href:"#",children:"Home"})})})]})})}}]),a}(s.Component),p=x,O=a(5),v=(a(55),a(39)),g=a(116),f=a(117),y=a(68),N=a(34),k=a(118),w="DELETE_SAVE_REQEST",C="DELETE_HISTORY",V="SEND_REQUEST_HISTORY",A="SENT_HISTORY_ACTIVE",S="SAVE_REQUEST",P=function(e){return{type:C,payload:{index:e}}},R=function(e){return{type:w,payload:{index:e}}},T=function(e,t,a){return{type:A,payload:{active:e,json:t,index:a}}},q=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={click:"Place",active:-1},e.changeClick=function(t){var a=Object(O.a)({},e.state);a.click=t,e.setState(a)},e.pushHistVal=function(t){Object(O.a)({},e.state).active=t,e.props.dispatch(T(t,e.props.historyArr[t],t))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state.click;return console.log(this.props.historyArr),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-8 col-sm-8  mt-2",onClick:function(){return e.changeClick("Place")},children:[Object(m.jsx)(g.a,{className:"mx-2 left-icon"}),Object(m.jsx)("span",{className:"",children:"My WorkPlace"})]}),Object(m.jsx)("div",{className:"col-4 col-sm-4 mt-2",children:Object(m.jsxs)("span",{className:"left-new",children:["New ",Object(m.jsx)(N.c,{})]})})]}),Object(m.jsxs)("div",{className:"row mt-2 border",children:[Object(m.jsx)("div",{className:"col-3 border   text-center col-sm-3",children:Object(m.jsxs)("div",{className:"",style:{height:"600px"},children:[Object(m.jsxs)("div",{className:"mt-4",onClick:function(){return e.changeClick("Save")},style:"Save"==t?{borderLeft:"3px solid #f75611",backgroundColor:"lightgrey"}:{},children:[Object(m.jsx)(f.a,{className:"left-icon"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"left-text-font",children:"Collections"})]}),Object(m.jsxs)("div",{className:"mt-4",onClick:function(){return e.changeClick("api")},style:"api"==t?{borderLeft:"3px solid #f75611",backgroundColor:"lightgrey"}:{},children:[Object(m.jsx)(N.b,{className:"left-icon"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"left-text-font",children:"API's"})]}),Object(m.jsxs)("div",{className:"mt-4",onClick:function(){return e.changeClick("env")},style:"env"==t?{borderLeft:"3px solid #f75611",backgroundColor:"lightgrey"}:{},children:[Object(m.jsx)(v.b,{className:"left-icon"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"left-text-font",children:"Environments"})]}),Object(m.jsxs)("div",{className:"mt-4",onClick:function(){return e.changeClick("mon")},style:"mon"==t?{borderLeft:"3px solid #f75611",backgroundColor:"lightgrey"}:{},children:[Object(m.jsx)(v.e,{className:"left-icon"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"left-text-font",children:"Monitors"})]}),Object(m.jsxs)("div",{className:"mt-4",onClick:function(){return e.changeClick("moc")},style:"moc"==t?{borderLeft:"3px solid #f75611",backgroundColor:"lightgrey"}:{},children:[Object(m.jsx)(k.a,{className:"left-icon"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"left-text-font",children:"Mock Servers"})]}),Object(m.jsxs)("div",{className:"mt-4",onClick:function(){return e.changeClick("History")},style:"History"==t?{borderLeft:"3px solid #f75611",backgroundColor:"lightgrey"}:{},children:[Object(m.jsx)(v.d,{className:"left-icon"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"left-text-font",children:"History"})]})]})}),"Save"==t?Object(m.jsx)("div",{className:"col-9 col-sm-9 hist-Scrol ",children:0==this.props.saveRequest.length?Object(m.jsx)("img",{className:"mt-5 img-fluid ",src:"https://assets.materialup.com/uploads/c83a9663-be0b-4397-b1af-67f520e44ef1/preview.png",width:"300px",height:"200px"}):this.props.saveRequest.map((function(t,a){return Object(m.jsxs)("div",{className:"row text-center border",children:[Object(m.jsx)("div",{className:"col-3 col-sm-3 mt-2 text-success",children:t.status}),Object(m.jsx)("div",{className:"col-6 col-sm-6 mt-2 hist-Val",children:t.sendVal}),Object(m.jsx)("div",{className:"col-3  col-sm-3",children:Object(m.jsx)("button",{className:"btn btn-light",children:Object(m.jsx)(y.a,{onClick:function(){return e.props.dispatch(R(a))}})})})]})}))}):"History"==t?Object(m.jsx)("div",{className:"col-9 col-sm-9  hist-Scrol",children:0==this.props.historyArr.length?Object(m.jsx)("img",{className:"mt-5 img-fluid ",src:"https://s3.amazonaws.com/www-inside-design/uploads/2015/06/emptystates-feature.jpg",width:"300px",height:"200px"}):this.props.historyArr.map((function(t,a){return Object(m.jsxs)("div",{className:"row text-center border",style:e.props.histVal.index==a?{borderLeft:"3px solid #f75611",backgroundColor:"lightgrey"}:{},children:[Object(m.jsx)("div",{className:"col-3 col-sm-3 mt-2 text-success",children:t.status}),Object(m.jsx)("div",{className:"col-6 col-sm-6 mt-2 hist-Val",onClick:function(){return e.pushHistVal(a)},style:{overflow:"hidden",whiteSpace:"nowrap"},children:t.sendVal}),Object(m.jsx)("div",{className:"col-3  col-sm-3",children:Object(m.jsx)("button",{className:"btn btn-ligth btn-without-border",children:Object(m.jsx)(y.a,{onClick:function(){return e.props.dispatch(P(a))}})})})]})}))}):"Place"==t?Object(m.jsx)("div",{className:"col-9 col-sm-9 mt-3",children:Object(m.jsx)("img",{className:"img-fluid",src:"https://www.postman.com/assets/postman-api-platform-social-preview.jpg",width:"310px",height:"200px"})}):""]})]})}}]),a}(s.Component),H=Object(o.b)((function(e){return{historyArr:e.historyArr,saveRequest:e.saveRequest,histVal:e.histVal}}))(q),E=a(243),L=a(231),B=a(238),D=a(242),M=a(240),z=a(123),F=a.n(z),U=a(234),G=a(241),I=a(236),K=a(120),_=a.n(K),J=a(121),W=a.n(J),Q=a(93),Y=a.n(Q),X=a(122),Z=a.n(X),$=a(94),ee=a.n($),te=a(124),ae=a.n(te),se=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={state:{left:!1},active:-1,click:"My WorkPlace"},e.pushHistVal=function(t){Object(O.a)({},e.state).active=t,e.props.dispatch(T(t,e.props.historyArr[t],t))},e.toggleDrawer=function(t,a){return function(s){var c=Object(O.a)({},e.state);console.log(t),(!s||"keydown"!==s.type||"Tab"!==s.key&&"Shift"!==s.key)&&(c.state.left=a,e.setState(c))}},e.changeClick=function(t){var a=Object(O.a)({},e.state);console.log(t),a.click=t,e.setState(a)},e.removeHist=function(t){var a=Object(O.a)({},e.state);e.props.dispatch(P(t)),e.setState(a)},e.removeSave=function(t){var a=Object(O.a)({},e.state);e.props.dispatch(R(t)),e.setState(a)},e.list=function(t){var a=e.state.click;return Object(m.jsxs)(E.a,{sx:{width:"top"===t||"bottom"===t?"auto":300,height:20},role:"presentation",onKeyDown:e.toggleDrawer(t,!1),children:["My WorkPlace"==a?Object(m.jsx)(D.a,{children:["My WorkPlace","Collections","History"].map((function(t,a){return Object(m.jsxs)(U.a,{button:!0,onClick:function(){return e.changeClick(t)},children:[Object(m.jsx)(G.a,{children:a%2===0?Object(m.jsx)(_.a,{}):Object(m.jsx)(W.a,{})}),Object(m.jsx)(I.a,{primary:t})]},t)}))}):"History"==a?Object(m.jsxs)(D.a,{children:[" ",Object(m.jsxs)("div",{className:"",children:[Object(m.jsxs)("div",{className:"row border",children:[Object(m.jsx)("div",{className:"col-9",children:Object(m.jsxs)(U.a,{children:[Object(m.jsx)(Z.a,{})," ",Object(m.jsx)("span",{className:"mx-1",children:"History"})]})}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)(U.a,{button:!0,onClick:function(){return e.changeClick("My WorkPlace")},children:Object(m.jsx)(G.a,{children:Object(m.jsx)(Y.a,{})})})})]}),0==e.props.historyArr.length?Object(m.jsx)("img",{className:"",style:{marginLeft:"50px"},src:"https://s3.amazonaws.com/www-inside-design/uploads/2015/06/emptystates-feature.jpg",width:"200px",height:"120px"}):Object(m.jsx)(D.a,{children:e.props.historyArr.map((function(a,s){return Object(m.jsxs)("div",{className:"row text-center border",onClick:e.toggleDrawer(t,!1),style:e.props.histVal.index==s?{borderLeft:"3px solid #f75611",backgroundColor:"lightgrey"}:{},children:[Object(m.jsx)("div",{className:"col-3   mt-2 text-success",children:Object(m.jsx)(I.a,{button:!0,primary:a.status})}),Object(m.jsx)("div",{className:"col-6  mt-2",RemHistory:!0,style:{fontSize:"14px",overflow:"hidden",whiteSpace:"nowrap"},onClick:function(){return e.pushHistVal(s)},children:Object(m.jsx)(I.a,{primary:a.sendVal})}),Object(m.jsx)("div",{className:"col-2 mt-1  mx-2",children:Object(m.jsx)(U.a,{button:!0,onClick:function(){return e.removeHist(s)},children:Object(m.jsx)(G.a,{children:Object(m.jsx)(ee.a,{})})})})]})}))})]})]}):"Collections"==a?Object(m.jsxs)(D.a,{children:[" ",Object(m.jsxs)("div",{className:"",children:[Object(m.jsxs)("div",{className:"row border",children:[Object(m.jsx)("div",{className:"col-9",children:Object(m.jsxs)(U.a,{children:[Object(m.jsx)(F.a,{})," ",Object(m.jsx)("span",{className:"mx-1",children:"Collections"})]})}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)(U.a,{button:!0,onClick:function(){return e.changeClick("My WorkPlace")},children:Object(m.jsx)(G.a,{children:Object(m.jsx)(Y.a,{})})})})]}),0==e.props.saveRequest.length?Object(m.jsx)("img",{className:"",style:{marginLeft:"50px"},src:"https://s3.amazonaws.com/www-inside-design/uploads/2015/06/emptystates-feature.jpg",width:"200px",height:"120px"}):Object(m.jsx)(D.a,{children:e.props.saveRequest.map((function(t,a){return Object(m.jsxs)("div",{className:"row text-center border",style:e.props.histVal.index==a?{borderLeft:"3px solid #f75611",backgroundColor:"lightgrey"}:{},children:[Object(m.jsx)("div",{className:"col-3   mt-2 text-success",children:Object(m.jsx)(I.a,{primary:t.status})}),Object(m.jsx)("div",{className:"col-6  mt-2",style:{fontSize:"14px",overflow:"hidden",whiteSpace:"nowrap"},onClick:function(){return e.pushHistVal(a)},children:Object(m.jsx)(I.a,{primary:t.sendVal})}),Object(m.jsx)("div",{className:"col-2 mt-1  mx-2",children:Object(m.jsx)(U.a,{button:!0,onClick:function(){return e.removeSave(a)},children:Object(m.jsx)(G.a,{children:Object(m.jsx)(ee.a,{})})})})]})}))})]})]}):"",Object(m.jsx)(M.a,{})]})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state.state;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-10",children:Object(m.jsxs)("a",{className:"navbar-brand mx-2 text-danger",href:"#",children:[Object(m.jsx)(u.a,{className:"left-icon"}),Object(m.jsx)("span",{className:"mx-2 mt-3",children:"PostMan"})]})}),Object(m.jsx)("div",{className:"col-2",children:["left"].map((function(a){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(B.a,{onClick:e.toggleDrawer(a,!0),children:Object(m.jsx)(ae.a,{})}),Object(m.jsx)(L.a,{anchor:a,open:t[a],onClose:e.toggleDrawer(a,!1),onOpen:e.toggleDrawer(a,!0),children:e.list(a)})]},a)}))})]})})}}]),a}(c.a.Component),ce=Object(o.b)((function(e){return{historyArr:e.historyArr,saveRequest:e.saveRequest,histVal:e.histVal}}))(se),ne=a(95),re=a.n(ne),le=a(125),oe=a(7),ie=a(61),de=a.n(ie),he="https://murmuring-ocean-86166.herokuapp.com";var je={GET:function(e){return de.a.get(he+e)},POST:function(e,t){return console.log(he+e),de.a.post(he+e,t)},DELETEAPI:function(e){return de.a.delete(e)},PUT:function(e,t){return de.a.put(he+e,t)}},be=a(96),ue=a.n(be),me=a(134),xe=a(233),pe=a(62),Oe=a(239),ve=a(237),ge=a(112),fe=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t){var a=t.currentTarget;e.props.onChangeBody(a.name,a.value)},e.showRadio=function(t,a,s){return Object(m.jsxs)("div",{className:"form-check-inline ",children:[Object(m.jsx)("input",{className:"form-check-input mt-2",style:{fontSize:"12px"},type:"radio",name:a,value:t,checked:s==t,onChange:e.handleChange}),Object(m.jsxs)("label",{className:"form-check-label-inline mx-1",children:[" ",t]})]})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.changeVal;return Object(m.jsxs)("div",{className:"mx-1 mt-1 danger",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm-12 col-md-2 col-lg-3  col-xl-3   mt-2",children:this.showRadio("none","radioVal",e.radioVal)}),Object(m.jsx)("div",{className:"col-sm-12 col-md-4 col-lg-3  col-xl-3  mt-2",children:this.showRadio("form-data","radioVal",e.radioVal)}),Object(m.jsx)("div",{className:"col-sm-6 col-md-3 col-lg-3  col-xl-3  mt-2",children:this.showRadio("raw","radioVal",e.radioVal)}),Object(m.jsx)("div",{className:"col-sm-6  col-md-4 col-lg-3  col-xl-3 ",children:"raw"==e.radioVal&&Object(m.jsx)("span",{children:Object(m.jsxs)(me.a.Select,{"aria-label":"Default select example",onChange:this.handleChange,value:e.selType,name:"selType",style:{border:"none",outline:"none",width:"90px",verticalAlign:"middle"},children:[Object(m.jsx)("option",{value:"JSON",children:"JSON"}),Object(m.jsx)("option",{value:"TEXT",children:"Text"}),Object(m.jsx)("option",{value:"HTML",children:"HTML"})]})})})]}),"none"==e.radioVal?Object(m.jsx)("div",{className:"hight-150"}):"raw"==e.radioVal?Object(m.jsx)("div",{className:"hight-150",children:Object(m.jsx)("textarea",{className:"form-control",rows:"5",value:e.textVal,name:"textVal",onChange:this.handleChange})}):Object(m.jsx)("div",{className:"hight-150"})]})}}]),a}(s.Component),ye=fe,Ne=a(128),ke=a(74),we=a(48),Ce=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={click:0},e.handleSelectChange=function(t,a,s){var c=t.currentTarget;c.name,c.value;e.props.onHeader(a),s(t)},e.onChangeClick=function(t){var a=Object(O.a)({},e.state);console.log(t),a.click=0==t?1:0,e.setState(a)},e.headerValues=function(e,t,a){return Object(m.jsxs)("div",{className:"row ",children:[Object(m.jsx)("div",{className:"col-1 col-sm-1"}),Object(m.jsx)("div",{className:"col-5 col-sm-5 border",children:Object(m.jsxs)("span",{children:[e,a?Object(m.jsx)(Ne.a,{}):""]})}),Object(m.jsx)("div",{className:"col-5 col-sm-5 border",children:Object(m.jsx)("span",{children:t})}),Object(m.jsx)("div",{className:"col-1 col-sm-1"})]})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.header;return Object(m.jsxs)("div",{className:" mt-1 container header-data",style:{height:"190px"},children:[Object(m.jsx)("span",{className:" mt-2 header-side",children:"Headers"}),0==this.state.click?Object(m.jsxs)("span",{className:"mx-3 header-eye-icon",onClick:function(){return e.onChangeClick(e.state.click)},children:[Object(m.jsx)(N.e,{}),"Show auto-generated headers "]}):Object(m.jsxs)("span",{className:"mx-3 header-eye-icon",onClick:function(){return e.onChangeClick(e.state.click)},children:[Object(m.jsx)(N.a,{}),"Hide auto-generated headers "]}),1==this.state.click?Object(m.jsxs)("div",{children:[this.headerValues("Key","Value"),this.headerValues("Postman-Token","<calculated when request is sent>","info"),this.headerValues("Host","<calculated when request is sent>","info"),this.headerValues("User-Agent","PostmanRuntime/7.28.4","info"),this.headerValues("Accept","*/*","info"),this.headerValues("Accept-Encoding","gzip, deflate, br","info")]}):"",Object(m.jsx)(we.d,{initialValues:{header:t||[]},onSubmit:function(e){},children:function(t){var a=t.values,s=t.handleChange;return Object(m.jsx)(we.c,{children:Object(m.jsx)(we.b,{name:"header",render:function(t){return a.header.map((function(c,n){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-1 col-sm-1 mt-1 text-center",children:Object(m.jsx)(ke.a,{onClick:function(){return t.push("")}})}),Object(m.jsx)("div",{className:"col-5 col-sm-5 border",children:Object(m.jsx)(we.a,{name:"header[".concat(n,"].key"),type:"text",style:{border:"none",outline:"none",verticalAlign:"middle"},placeholder:"Key",onChange:function(t){e.handleSelectChange(t,a,s)},className:"form-control"})}),Object(m.jsx)("div",{className:" col-5 col-sm-5 border",children:Object(m.jsx)(we.a,{name:"header[".concat(n,"].value"),type:"text",style:{border:"none",outline:"none",verticalAlign:"middle"},placeholder:"Value",onChange:function(t){e.handleSelectChange(t,a,s)},className:"form-control"})}),Object(m.jsx)("div",{className:"col-1 mt-1 col-sm-1 align-middle",children:Object(m.jsx)(v.c,{onClick:function(){return t.remove(n)}})})]},n)}))}})})}})]})}}]),a}(s.Component),Ve=Ce,Ae=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={},e.handleChange=function(t,a,s){var c=t.currentTarget;console.log(c.value,s,a),e.props.onParams(c.value,s,a)},e.checkboxHandle=function(t,a){t.currentTarget.checked?e.props.onhandle(e.props.paramsArr[a],"checkop",a):(console.log(e.props.paramsArr[a]),e.props.onhandle(e.props.paramsArr[a],"check",a))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.paramsArr,s=t.delParm;return s.map((function(e,t){return console.log(t)})),Object(m.jsxs)("div",{className:"border container response-data",children:[Object(m.jsxs)("h6",{className:"mx-1 mt-2",children:["Quary Params",Object(m.jsxs)("button",{className:"mx-3 btn btn-new",onClick:function(){return e.props.addParam(1)},children:[Object(m.jsx)(ke.a,{}),"New"]})]}),Object(m.jsxs)("div",{className:"row text-center",children:[Object(m.jsx)("div",{className:"col-1 border"}),Object(m.jsx)("div",{className:"col-5 border",children:"Key"}),Object(m.jsx)("div",{className:"col-5 border",children:"Value"}),Object(m.jsx)("div",{className:"col-1 border"})]}),a.map((function(t,a){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-1 border from-group",style:s.find((function(e,t){return a==t}))?{backgroundColor:"#d7ded9"}:{},children:Object(m.jsx)("input",{checked:!s.find((function(e,t){return a==t})),className:"mt-2 from-control check-box",type:"checkbox",onChange:function(t){e.checkboxHandle(t,a)}})}),t.map((function(t,c){return Object(m.jsx)("div",{className:"col-5 border",style:s.find((function(e,t){return a==t}))?{backgroundColor:"#d7ded9"}:{},children:Object(m.jsx)("input",{className:"form-control",value:null==t?"":t,name:t,disabled:!!s.find((function(e,t){return a==t})),style:{border:"none",outline:"none",verticalAlign:"middle"},onChange:function(t){e.handleChange(t,c,a)},placeholder:0==c?"Key":"Value"})})}))," ",Object(m.jsx)("div",{className:"col-1 border"})]})})).reverse()]})}}]),a}(s.Component),Se=Ae,Pe=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={header:[{key:"",value:""}],authHeader:{key:"",value:""},delParm:[],sendReq:{sendVal:"",status:"GET"},paramsArr:[],countParams:2,params:0,data:{},click:0,headers:{},headersAuth:{},changeVal:{radioVal:"",selType:"Text",textVal:""}},e.handleChange=function(t){var a=t.currentTarget,s=Object(O.a)({},e.state);s.sendReq[a.name]=a.value;var c=a.value.indexOf("?");if(s.sendReq.sendVal.indexOf("?")>-1){for(var n="",r=c;r<s.sendReq.sendVal.length;r++)n+=s.sendReq.sendVal[r];var l=ue.a.parse(n);s.paramsArr=Object.entries(l)}e.setState(s)},e.sendRequset=function(){var t=Object(O.a)({},e.state);if("POST"==t.sendReq.status||"PUT"==t.sendReq.status){if("Text"==t.changeVal.selType)e.Api(t.sendReq.sendVal,t.changeVal.textVal);else if("JSON"==t.changeVal.selType){var a=JSON.parse(t.changeVal.textVal);console.log(a),e.Api(t.sendReq.sendVal,a)}}else e.Api(t.sendReq.sendVal)},e.clickChange=function(t){var a=Object(O.a)({},e.state);a.click=t,e.setState(a)},e.handleChangeBodyVal=function(t,a){var s=Object(O.a)({},e.state);s.changeVal[t]=a,e.setState(s)},e.convertArrayToObject=function(e,t){return e.reduce((function(e,a){return Object(O.a)(Object(O.a)({},e),{},Object(oe.a)({},a[t],a.value))}),{})},e.onChangeHeaders=function(t){var a=Object(O.a)({},e.state),s=[];t.header.map((function(e){s.push({key:e.key,value:e.value})})),console.log(s);var c=e.convertArrayToObject(s,"key");a.header=t,a.headers=c;var n=Object(O.a)(Object(O.a)({},a.headers),a.headersAuth);console.log(n),e.setState(a)},e.handleChangeParams=function(t,a,s){var c=Object(O.a)({},e.state);c.paramsArr[a][s]=t;var n=new URLSearchParams;c.paramsArr.map((function(e,t){n.append(e[0],null==e[1]?"":e[1])})),console.log(n.toString());var r=c.sendReq.sendVal.indexOf("?"),l="";if(r>=0)for(var o=0;o<=r;o++)l+=c.sendReq.sendVal[o];c.sendReq.sendVal=l+n.toString(),e.setState(c)},e.onChangeParamsString=function(t,a,s){var c=Object(O.a)({},e.state),n=c.sendReq.sendVal.indexOf("?"),r=c.sendReq.sendVal.substr(n+1,c.sendReq.sendVal.length);if("check"==a){var l=new URLSearchParams(r);l.delete(t[0]),console.log(l.toString());var o=c.sendReq.sendVal.substr(0,n+1),i=l.toString();console.log(o,i),c.delParm[s]={val1:t[0],val2:t[1],url:c.sendReq.sendVal},c.sendReq.sendVal=o+i}else{console.log("hy");var d=new URL("https://"+c.delParm[s].url);d.searchParams.set(c.delParm[s].val1,c.delParm[s].val1);var h=d.hostname+d.search;c.delParm.splice(s,1),c.sendReq.sendVal=h}e.setState(c)},e.addNewParam=function(t){var a=Object(O.a)({},e.state);a.paramsArr.push(["",""]),e.setState(a)},e.callForHistComes=function(){var t=Object(O.a)({},e.state);t.sendReq=e.props.histVal.json;var a=t.sendReq.sendVal.indexOf("?"),s=null;if(t.sendReq.sendVal.indexOf("?")>-1){for(var c="",n=a;n<t.sendReq.sendVal.length;n++)c+=t.sendReq.sendVal[n];s=ue.a.parse(c)}console.log(s),s?(console.log("by"),t.paramsArr=Object.entries(s)):(console.log("hy"),t.paramsArr=[["",""]]),e.props.dispatch(T(-1,{},e.props.histVal.index)),e.setState(t)},e.onPutAuthHeader=function(t){var a=Object(O.a)({},e.state),s=Object.entries(t),c=[];s.map((function(e){c.push({key:e[0],value:e[1]})})),console.log(c);var n=e.convertArrayToObject(c,"key");console.log(n),a.headersAuth=t,e.setState(a)},e}return Object(h.a)(a,[{key:"Api",value:function(){var e=Object(le.a)(re.a.mark((function e(t,a){var s,c,n,r,l;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(O.a)({},this.state),c=Object(O.a)(Object(O.a)({},s.headers),s.headersAuth),n={method:s.sendReq.status,url:s.sendReq.sendVal,headers:c,body:a},r=null,e.prev=4,e.next=7,je.POST("/postUrl",n);case 7:r=e.sent,console.log(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),e.t0.response&&404===e.t0.response.status&&(console.log(e.t0.response.data),r=e.t0.response);case 14:l=Object.entries(r.data),console.log(l),this.props.dispatch((t=s.sendReq.status,o=s.sendReq.sendVal,{type:V,payload:{status:t,sendVal:o}})),this.setState({data:r});case 18:case"end":return e.stop()}var t,o}),e,this,[[4,11]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.sendReq,s=t.delParm,c=t.data,n=t.click,r=t.authHeader,l=t.changeVal,o=t.header,i=t.paramsArr;t.countParams;return console.log(this.props.historyArr),this.props.histVal.active>=0&&(console.log(this.props.histVal.active),this.callForHistComes()),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:" border",style:{flexGrow:1,height:45},children:Object(m.jsxs)(ve.a,{container:!0,spacing:3,children:[Object(m.jsx)(ve.a,{item:!0,xs:1,sm:1,lg:1,md:1,children:Object(m.jsx)(v.a,{className:"mx-2 mt-3"})}),Object(m.jsx)(ve.a,{item:!0,xs:2,sm:2,lg:5,md:5}),Object(m.jsx)(ve.a,{item:!0,xs:6,sm:6,lg:4,md:4,children:Object(m.jsxs)("div",{className:"mt-2 mx-3",children:["No Environment ",Object(m.jsx)(N.d,{})]})}),Object(m.jsx)(ve.a,{item:!0,xs:1,sm:1,lg:1,md:1,children:Object(m.jsx)(N.e,{className:"mx-5 mt-3"})})]})}),Object(m.jsx)(E.a,{className:"mt-2",sx:{flexGrow:1},children:Object(m.jsxs)(ve.a,{container:!0,spacing:3,children:[Object(m.jsx)(ve.a,{item:!0,xs:9,sm:9,lg:10,md:10,children:Object(m.jsx)("h6",{className:"mx-2 mt-2 ",children:""==a.sendVal?"Untitled Request":"h"==a.sendVal.charAt(0)?a.sendVal:"https://"+a.sendVal})}),Object(m.jsx)(ve.a,{item:!0,xs:3,sm:3,lg:2,md:2,children:Object(m.jsxs)("button",{className:"btn btn-save",style:{fontSize:"12px"},onClick:function(){return e.props.dispatch((t=a.status,s=a.sendVal,{type:S,payload:{status:t,sendVal:s}}));var t,s},children:[Object(m.jsx)(N.g,{}),Object(m.jsx)("span",{className:"mx-1",children:"Save"})]})})]})}),Object(m.jsxs)("div",{className:"row mt-2",children:[Object(m.jsx)("div",{className:"col-lg-10 col-md-10 col-sm-10 col-xs-10 ",children:Object(m.jsxs)("div",{class:"input-group mx-2",style:{paddingRight:"18px"},children:[Object(m.jsx)("div",{className:"input-group-select ",children:Object(m.jsx)(me.a.Select,{"aria-label":"Default select example",value:a.status,name:"status",onChange:this.handleChange,children:["GET","POST","PUT","DELETE"].map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))})}),Object(m.jsx)("input",{className:"form-control",type:"text",placeholder:"Enter Request URL",name:"sendVal",onChange:this.handleChange,value:a.sendVal})]})}),Object(m.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center",children:Object(m.jsx)("div",{class:"row input-group-btn send-btn mx-2",children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.sendRequset()},children:"Send"})})})]}),Object(m.jsx)(E.a,{className:"mt-2",sx:{flexGrow:1},children:Object(m.jsxs)(ve.a,{container:!0,spacing:3,children:[Object(m.jsx)(ve.a,{item:!0,xs:9,sm:9,lg:10,md:10,children:Object(m.jsx)(E.a,{sx:{flexGrow:1,maxWidth:680,bgcolor:"background.paper"},children:Object(m.jsxs)(xe.a,{value:n,variant:"scrollable",scrollButtons:!0,"aria-label":"visible arrows tabs example",sx:Object(oe.a)({},"& .".concat(pe.a.scrollButtons),{"&.Mui-disabled":{opacity:.3}}),children:[Object(m.jsx)(Oe.a,{label:"Params",onClick:function(){return e.clickChange(0)}}),Object(m.jsx)(Oe.a,{label:"Authorization",onClick:function(){return e.clickChange(1)}}),Object(m.jsx)(Oe.a,{label:"Headers",onClick:function(){return e.clickChange(2)}}),Object(m.jsx)(Oe.a,{label:"Pre-request Script",onClick:function(){return e.clickChange(3)}}),Object(m.jsx)(Oe.a,{label:"Body",onClick:function(){return e.clickChange(4)}}),Object(m.jsx)(Oe.a,{label:"Tests",onClick:function(){return e.clickChange(5)}}),Object(m.jsx)(Oe.a,{label:"Setting",onClick:function(){return e.clickChange(6)}})]})})}),Object(m.jsx)(ve.a,{style:{paddingTop:"35px"},item:!0,xs:3,sm:3,lg:2,md:2,children:Object(m.jsx)("span",{style:{color:"blue",paddingLeft:"10px"},children:"Cookie"})})]})}),Object(m.jsx)(E.a,{children:0==n?Object(m.jsx)(Se,{delParm:s,addParam:this.addNewParam,onhandle:this.onChangeParamsString,onParams:this.handleChangeParams,paramsArr:i}):4==n?Object(m.jsx)(ye,{changeVal:l,onChangeBody:this.handleChangeBodyVal}):2==n?Object(m.jsx)(Ve,{header:o,onHeader:this.onChangeHeaders}):3==n||6==n||5==n?Object(m.jsx)("div",{className:"border container response-data",style:{height:"190px"}}):1==n?Object(m.jsx)(ge.a,{authHeader:r,onPutAuth:this.onPutAuthHeader}):""}),Object(m.jsx)(E.a,{sx:{flexGrow:1},children:void 0==c.data?Object(m.jsxs)("div",{className:"border response-data",children:[Object(m.jsx)("span",{className:"m-3",children:"Response"}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{className:"img-response",src:"https://crowtrader.com/wp-content/uploads/2020/01/demo-10-left-image.png"})]}):null==c.data?Object(m.jsx)("h6",{children:"404"}):Object(m.jsxs)(E.a,{sx:{flexGrow:1},children:[Object(m.jsxs)(ve.a,{container:!0,children:[Object(m.jsx)(ve.a,{item:!0,xs:5,md:7,lg:7,className:"mx-2 pt-1",style:{borderBottom:"1px"},children:"Body"}),Object(m.jsxs)(ve.a,{item:!0,xs:5,md:7,lg:4,className:"pt-1 text-success",children:[Object(m.jsx)(N.f,{}),Object(m.jsxs)("span",{className:"mx-2",children:[c.status," ",c.statusText]})]})]}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("textarea",{className:"mt-1 form-control",rows:"7",value:JSON.stringify(c.data,null,2)})})]})})]})}}]),a}(s.Component),Re=Object(o.b)((function(e){return{histVal:e.histVal,historyArr:e.historyArr}}))(Pe),Te=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{style:{overflowY:"hidden",overflowX:"hidden"},children:[Object(m.jsx)("div",{className:"left-desk",children:Object(m.jsx)(ce,{})}),Object(m.jsx)("div",{className:"left-mob",children:Object(m.jsx)(p,{})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-4 col-lg-4  left-mob  border",children:Object(m.jsx)(H,{})}),Object(m.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-8 col-lg-8   border",children:Object(m.jsx)(Re,{})})]})]})}}]),a}(s.Component),qe=Te,He=a(52),Ee=a(97),Le=a(129),Be=a.n(Le),De=a(17),Me={historyArr:[{status:"GET",sendVal:"/weather/cityName/noida"},{status:"GET",sendVal:"www.google.com"},{status:"GET",sendVal:"https://quiet-springs-47127.herokuapp.com/productServer/myserver/customers"}],saveRequest:[],histVal:{active:-1}},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;console.log(e);var a=e.historyArr,s=e.saveRequest,c=e.histVal;switch(t.type){case V:a.unshift(t.payload);var n=Object(De.a)(a);return{historyArr:n,saveRequest:s,histVal:c};case S:var r=[].concat(Object(De.a)(s),[t.payload]);return{saveRequest:r,historyArr:a,histVal:c};case C:return a.splice(t.payload.index,1),{historyArr:Object(De.a)(a),saveRequest:s,histVal:c};case w:return s.splice(t.payload.index,1),{saveRequest:s,historyArr:a,histVal:c};case A:var l={active:t.payload.active,json:t.payload.json,index:t.payload.index};console.log(l,"hy");var o=Object(O.a)({},l);return{saveRequest:s,historyArr:a,histVal:o};default:var i=Object(De.a)(a);return{saveRequest:s,historyArr:i,histVal:c}}return e},Fe={key:"root",storage:Be.a},Ue=Object(Ee.a)(Fe,ze),Ge=Object(He.b)(Ue),Ie=Object(Ee.b)(Ge);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(o.a,{store:Ge,children:Object(m.jsx)(l.a,{persistor:Ie,children:Object(m.jsx)(qe,{})})})}),document.getElementById("root")),i()},55:function(e,t,a){}},[[190,1,2]]]);
//# sourceMappingURL=main.550dc863.chunk.js.map