(function(t){function e(e){for(var o,l,c=e[0],s=e[1],a=e[2],u=0,f=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},i={app:0},r=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1092:function(t,e,n){},"250d":function(t,e,n){"use strict";n("d4d5")},"3e9c":function(t,e,n){"use strict";n("1092")},4628:function(t,e,n){"use strict";n("99a5")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h3",[t._v("仅仅是一个备忘录")]),n("div",{staticClass:"container"},[n("div",{staticClass:"warp"},[n("AdderBox",{attrs:{receive:t.receive}}),n("List",{attrs:{todos:t.todos,changeById:t.changeById,killById:t.killById}}),n("Overview",{attrs:{todos:t.todos,changeAll:t.changeAll,killAllFinished:t.killAllFinished}})],1)])])},r=[],l=(n("e9c4"),n("d3b7"),n("159b"),n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"adder-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入你的任务名称，按回车键确认"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)},input:function(e){e.target.composing||(t.title=e.target.value)}}})])}),c=[],s=(n("498a"),{name:"AdderBox",data:function(){return{title:""}},methods:{add:function(){if(""===this.title.trim())return alert("输入不能为空");this.receive(this.title),this.title=""}},props:["receive"]}),a=s,d=(n("4628"),n("2877")),u=Object(d["a"])(a,l,c,!1,null,"1eb03856",null),f=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list"},t._l(t.todos,(function(e){return n("Item",{key:e.id,attrs:{todoObj:e,changeById:t.changeById,killById:t.killById}})})),1)},h=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.todoObj.done},on:{change:function(e){return t.changeById(t.todoObj.id)}}}),n("span",[t._v(t._s(t.todoObj.title))])]),n("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.killById(t.todoObj.id)}}},[t._v("删除")])])},b=[],y={name:"Item",props:["todoObj","changeById","killById"]},g=y,m=(n("d92c"),Object(d["a"])(g,v,b,!1,null,"f77b3c88",null)),k=m.exports,O={name:"List",components:{Item:k},props:["todos","changeById","killById"]},_=O,j=(n("3e9c"),Object(d["a"])(_,p,h,!1,null,"64c76819",null)),w=j.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"overview"},[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.finished===t.todos.length},on:{change:t.changeAllHandler}})]),n("span",[n("span",[t._v("已完成 "+t._s(t.finished))]),t._v(" / 全部 "+t._s(t.todos.length)+" ")]),n("button",{staticClass:"btn btn-danger",on:{click:t.killAllFinished}},[t._v("清除已完成任务")])])},I=[],B={name:"Overview",props:["todos","changeAll","killAllFinished"],computed:{finished:function(){var t=0;return this.todos.forEach((function(e){e.done&&(t+=1)})),t}},methods:{changeAllHandler:function(t){this.changeAll(t.target.checked)}}},A=B,E=(n("250d"),Object(d["a"])(A,x,I,!1,null,"49ba1246",null)),P=E.exports,S=n("e1bd"),C={name:"App",components:{AdderBox:f,List:w,Overview:P},data:function(){return{todos:JSON.parse(localStorage.getItem("temp"))||[]}},watch:{todos:{deep:!0,handler:function(){localStorage.setItem("temp",JSON.stringify(this.todos))}}},methods:{receive:function(t){var e={id:Object(S["a"])(),title:t,done:!1};this.todos.unshift(e)},changeById:function(t){this.todos.forEach((function(e){e.id===t&&(e.done=!e.done)}))},killById:function(t){confirm("确认删除吗？")&&(this.todos=this.todos.filter((function(e){return e.id!==t})))},changeAll:function(t){t?this.todos.forEach((function(t){return t.done=!0})):this.todos.forEach((function(t){return t.done=!1}))},killAllFinished:function(){confirm("确定删除吗？")&&(this.todos=this.todos.filter((function(t){return!t.done})))}}},$=C,F=(n("034f"),Object(d["a"])($,i,r,!1,null,null,null)),J=F.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(J)}}).$mount("#app")},"694a":function(t,e,n){},"85ec":function(t,e,n){},"99a5":function(t,e,n){},d4d5:function(t,e,n){},d92c:function(t,e,n){"use strict";n("694a")}});
//# sourceMappingURL=app.6eb14b25.js.map