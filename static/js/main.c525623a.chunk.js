(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3UAFq",BreadTop:"BurgerIngredient_BreadTop__2Q7UF",Seeds1:"BurgerIngredient_Seeds1__1ozMd",Seeds2:"BurgerIngredient_Seeds2__-bljn",Meat:"BurgerIngredient_Meat__2wjMs",Cheese:"BurgerIngredient_Cheese__i_8-g",Salad:"BurgerIngredient_Salad__32LuP",Bacon:"BurgerIngredient_Bacon__k0KAB"}},,,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3jA3V",Open:"SideDrawer_Open__5O76O",Close:"SideDrawer_Close__1u36l",Logo:"SideDrawer_Logo__1UIln"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__aRg20",Label:"BuildControl_Label__117Ld",Less:"BuildControl_Less__23EUW",More:"BuildControl_More__3NJhr"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__2epNW",Logo:"Toolbar_Logo__5dEAm",DesktopOnly:"Toolbar_DesktopOnly__QI1Z7"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__1V-gH",active:"NavigationItem_active__2Uiqa"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1K5F9",OrderButton:"BuildControls_OrderButton__2NDbX",enable:"BuildControls_enable__2mVLN"}},function(e,t,a){e.exports={Button:"Button_Button__2qU4t",Success:"Button_Success__HnyIU",Danger:"Button_Danger__3qZPA"}},,,function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__2aRcF"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1DHYd"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__373RS"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3xyYk"}},function(e,t,a){e.exports={content:"Layout_content__Bxthi"}},function(e,t,a){e.exports={Burger:"Burger_Burger__2MyBd"}},function(e,t,a){e.exports={Modal:"Modal_Modal__i2tnp"}},,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(29),a(2)),i=a(3),s=a(5),d=a(4),u=function(e){return e.children},m=a(15),p=a.n(m),g=a(16),_=a.n(g),h=function(e){return r.a.createElement("div",{className:_.a.Logo},r.a.createElement("img",{src:p.a,alt:"MyBurger"}))},E=a(10),b=a.n(E),v=function(e){return r.a.createElement("li",{className:b.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?b.a.active:null},e.children))},f=a(17),B=a.n(f),C=function(e){return r.a.createElement("ul",{className:B.a.NavigationItems},r.a.createElement(v,{link:"/",active:!0},"Burger Builder"),r.a.createElement(v,{link:"/"},"Checkout"))},k=a(8),w=a.n(k),N=a(18),y=a.n(N),S=function(e){return r.a.createElement("div",{className:y.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},O=function(e){return r.a.createElement("header",{className:w.a.Toolbar},r.a.createElement(S,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:w.a.Logo},r.a.createElement(h,null)),r.a.createElement("nav",{className:w.a.DesktopOnly},r.a.createElement(C,null)))},D=a(6),I=a.n(D),j=a(19),T=a.n(j),L=function(e){return e.show?r.a.createElement("div",{className:T.a.Backdrop,onClick:e.clicked}):null},x=function(e){var t=[I.a.SideDrawer,I.a.Close];return e.open&&(t=[I.a.SideDrawer,I.a.Open]),r.a.createElement(u,null,r.a.createElement(L,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:I.a.Logo},r.a.createElement(h,null)),r.a.createElement("nav",null,r.a.createElement(C,null))))},H=a(20),M=a.n(H),P=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.SideDrawerCloseHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(O,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(x,{open:this.state.showSideDrawer,closed:this.SideDrawerCloseHandler}),r.a.createElement("main",{className:M.a.content},this.props.children))}}]),a}(n.Component),A=a(9),U=a(23),R=a(21),F=a.n(R),W=a(1),Y=a.n(W),q=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-buttom":e=r.a.createElement("div",{className:Y.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Y.a.BreadTop},r.a.createElement("div",{className:Y.a.Seeds1}),r.a.createElement("div",{className:Y.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Y.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Y.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:Y.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:Y.a.Bacon});break;default:e=null}return e}}]),a}(n.Component),J=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(U.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(q,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add some ingredients.")),r.a.createElement("div",{className:F.a.Burger},r.a.createElement(q,{type:"bread-top"}),t,r.a.createElement(q,{type:"bread-buttom"}))},V=a(11),z=a.n(V),K=a(7),Q=a.n(K),Z=function(e){return r.a.createElement("div",{className:Q.a.BuildControl},r.a.createElement("div",{className:Q.a.Label},e.label),r.a.createElement("button",{className:Q.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:Q.a.More,onClick:e.added},"More"))},X=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],$=function(e){return r.a.createElement("div",{className:z.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),X.map((function(t){return r.a.createElement(Z,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},G=a(22),ee=a.n(G),te=function(e){return r.a.createElement(u,null,r.a.createElement(L,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:ee.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},ae=a(12),ne=a.n(ae),re=function(e){return r.a.createElement("button",{className:[ne.a.Button,ne.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},le=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t,":")," ",e.ingredients[t])}));return r.a.createElement(u,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price)),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(re,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(re,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},ce={salad:.5,bacon:.7,cheese:.4,meat:1.3},oe=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(A.a)({},e.state.ingredients);n[t]=a;var r=ce[t],l=e.state.totalPrice+r;e.setState({ingredients:n,totalPrice:l}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var l=ce[t],c=e.state.totalPrice-l;e.setState({ingredients:r,totalPrice:c}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){alert("purchase continue!")},e}return Object(i.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(u,null,r.a.createElement(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(le,{ingredients:this.state.ingredients,price:this.state.totalPrice.toFixed(2),purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(J,{ingredients:this.state.ingredients}),r.a.createElement($,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),a}(n.Component);var ie=function(){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.c525623a.chunk.js.map