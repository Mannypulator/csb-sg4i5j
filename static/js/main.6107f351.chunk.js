(this["webpackJsonpmonster-rolodex-class"]=this["webpackJsonpmonster-rolodex-class"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n(2),o=n(3),a=n(5),i=n(4),u=(n(16),n(0)),l=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.monster,t=e.id,n=e.name,r=e.email;return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(t,"?set=set2&size=180x180"),alt:"monster ".concat(n)}),Object(u.jsx)("h2",{children:n}),Object(u.jsx)("p",{children:r})]},t)}}]),n}(r.Component),h=(n(18),function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.monsters;return Object(u.jsx)("div",{className:"card-list",children:e.map((function(e){return Object(u.jsx)(l,{monster:e},e.id)}))})}}]),n}(r.Component)),j=(n(19),function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("input",{type:"search",placeholder:this.props.placeholder,className:"search-box ".concat(this.props.className),onChange:this.props.onChangeHandler})}}]),n}(r.Component)),p=(n(20),function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchField=function(t){var n=t.target.value.toLocaleLowerCase().trim();e.setState((function(){return{searchField:n}}))},e.state={monsters:[],searchField:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/").then((function(e){return e.json()})).then((function(t){return e.setState((function(){return{monsters:t}}),(function(){console.log(e.state.monsters)}))}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=this.onSearchField,c=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"App-title",children:"Monster Rolodex"}),Object(u.jsx)(j,{onChangeHandler:r,placeholder:"search monsters",className:"monster-search-box"}),Object(u.jsx)(h,{monsters:c})]})}}]),n}(r.Component)),d=document.getElementById("root");Object(c.createRoot)(d).render(Object(u.jsx)(r.StrictMode,{children:Object(u.jsx)(p,{})}))}},[[21,1,2]]]);
//# sourceMappingURL=main.6107f351.chunk.js.map