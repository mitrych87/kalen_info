(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){e.exports=a(189)},187:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);a(146),a(171);var n=a(0),c=a.n(n),i=a(65),r=a.n(i),l=a(23),o=a.n(l),s=a(66),u=a(67),d=a(73),m=a(68),p=a(74),h=a(5),f=(a(186),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(h.g,{id:t},c.a.createElement(h.h,null,"Example"),n&&c.a.createElement(h.d,{title:"User Data Fetched with VK Connect"},c.a.createElement(h.f,{before:n.photo_200?c.a.createElement(h.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(h.d,{title:"Navigation Example"},c.a.createElement(h.c,null,c.a.createElement(h.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))}),E=a(70),b=a.n(E),g=(a(187),a(71)),k=a.n(g),v=a(72),w=a.n(v),y=Object(h.k)(),P=function(e){return c.a.createElement(h.g,{id:e.id},c.a.createElement(h.h,{left:c.a.createElement(h.i,{onClick:e.go,"data-to":"home"},y===h.e?c.a.createElement(k.a,null):c.a.createElement(w.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(h.j,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(P,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(c.a.createElement(U,null),document.getElementById("root"))},70:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[145,1,2]]]);
//# sourceMappingURL=main.eaafb770.chunk.js.map