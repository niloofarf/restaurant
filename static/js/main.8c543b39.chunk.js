(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3UAFq",BreadTop:"BurgerIngredient_BreadTop__2Q7UF",Seeds1:"BurgerIngredient_Seeds1__1ozMd",Seeds2:"BurgerIngredient_Seeds2__-bljn",Meat:"BurgerIngredient_Meat__2wjMs",Cheese:"BurgerIngredient_Cheese__i_8-g",Salad:"BurgerIngredient_Salad__32LuP",Bacon:"BurgerIngredient_Bacon__k0KAB"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__aRg20",Label:"BuildControl_Label__117Ld",Less:"BuildControl_Less__23EUW",More:"BuildControl_More__3NJhr"}},,,,,,function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1K5F9",OrderButton:"BuildControls_OrderButton__2NDbX",enable:"BuildControls_enable__2mVLN"}},,,function(e,t,a){e.exports={content:"Layout_content__Bxthi"}},function(e,t,a){e.exports={Burger:"Burger_Burger__2MyBd"}},function(e,t,a){e.exports={Modal:"Modal_Modal__i2tnp"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3xyYk"}},,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=(a(21),function(e){return e.children}),o=a(11),s=a.n(o),d=function(e){return r.a.createElement("div",null,r.a.createElement("header",null,"Toolbar, Side Drawer, Backdrop"),r.a.createElement("main",{className:s.a.content},e.children))},u=a(7),m=a(3),p=a(4),h=a(6),b=a(5),g=a(1),_=a.n(g),B=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-buttom":e=r.a.createElement("div",{className:_.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:_.a.BreadTop},r.a.createElement("div",{className:_.a.Seeds1}),r.a.createElement("div",{className:_.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:_.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:_.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:_.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:_.a.Bacon});break;default:e=null}return e}}]),a}(n.Component),E=a(15),f=a(12),v=a.n(f),k=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(E.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(B,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add some ingredients.")),r.a.createElement("div",{className:v.a.Burger},r.a.createElement(B,{type:"bread-top"}),t,r.a.createElement(B,{type:"bread-buttom"}))},y=a(8),C=a.n(y),N=a(2),O=a.n(N),w=function(e){return r.a.createElement("div",{className:O.a.BuildControl},r.a.createElement("div",{className:O.a.Label},e.label),r.a.createElement("button",{className:O.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:O.a.More,onClick:e.added},"More"))},S=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],j=function(e){return r.a.createElement("div",{className:C.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),S.map((function(t){return r.a.createElement(w,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:C.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},M=a(13),I=a.n(M),x=a(14),P=a.n(x),L=function(e){return e.show?r.a.createElement("div",{className:P.a.Backdrop,onClick:e.clicked}):null},H=function(e){return r.a.createElement(i,null,r.a.createElement(L,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:I.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},A=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t,":")," ",e.ingredients[t])}));return r.a.createElement(i,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Continue to Checkout?"))},R={salad:.5,bacon:.7,cheese:.4,meat:1.3},T=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(u.a)({},e.state.ingredients);n[t]=a;var r=R[t],l=e.state.totalPrice+r;e.setState({ingredients:n,totalPrice:l}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(u.a)({},e.state.ingredients);r[t]=n;var l=R[t],c=e.state.totalPrice-l;e.setState({ingredients:r,totalPrice:c}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e}return Object(p.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(u.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(i,null,r.a.createElement(H,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(A,{ingredients:this.state.ingredients})),r.a.createElement(k,{ingredients:this.state.ingredients}),r.a.createElement(j,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),a}(n.Component);var F=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.8c543b39.chunk.js.map