webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},s,!1,function(e){a("ZR1B")},null,null).exports,r=a("/ocq"),i={name:"HelloWorld",data:function(){return{thatTime:0,inputNumber:"",dataValue:"",scale1:"10",scale2:"20",scale3:"30",scale4:"40",list:[]}},methods:{getTimeList:function(){this.list=[];var e=(Date.parse(this.dataValue[1])-Date.parse(this.dataValue[0]))/1e3/60/60/24+1,t=this.inputNumber/e;this.thatTime=Date.parse(this.dataValue[0]);for(var a=0;a<e;a++)this.getDateFun(t,a)},getDateFun:function(e,t){for(var a=[],l=0;l<e;l++){var s=0,n=36e5;l<=Number(this.scale1)/100*e?n*=6:l>Number(this.scale1)/100*e&&l<=(Number(this.scale2)+Number(this.scale1))/100*e?(s=216e5,n*=12):l>(Number(this.scale2)+Number(this.scale1))/100*e&&l<=(Number(this.scale2)+Number(this.scale1)+Number(this.scale3))/100*e?(s=432e5,n*=18):l>(Number(this.scale2)+Number(this.scale1)+Number(this.scale3))/100*e&&l<=e&&(s=648e5,n*=24);var r=new Date(this.randomNum(s,n)+this.thatTime),i=r.getFullYear()+"-",u=(r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1)+"-",c=r.getDate()<10?"0"+r.getDate():r.getDate(),o=r.getHours()<10?"0"+r.getHours():r.getHours(),p=r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes(),h=r.getSeconds()<10?"0"+r.getSeconds():r.getSeconds();a.push(i+u+c+" "+o+":"+p+":"+h)}console.log(a),this.list.push(a.sort()),console.log(this.list),this.thatTime+=864e5},randomNum:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"left"},[a("el-input",{attrs:{placeholder:"需要的数量:3000"},model:{value:e.inputNumber,callback:function(t){e.inputNumber=t},expression:"inputNumber"}}),e._v(" "),a("h3",[e._v("日期区间")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dataValue,callback:function(t){e.dataValue=t},expression:"dataValue"}}),e._v(" "),a("h3",[e._v("时间占比")]),e._v(" "),a("label",[a("el-input",{attrs:{placeholder:"0时~6时的占比（单位%）"},model:{value:e.scale1,callback:function(t){e.scale1=t},expression:"scale1"}})],1),e._v(" "),a("label",[a("el-input",{attrs:{placeholder:"6时~12时的占比（单位%）"},model:{value:e.scale2,callback:function(t){e.scale2=t},expression:"scale2"}})],1),e._v(" "),a("label",[a("el-input",{attrs:{placeholder:"12时~18时的占比（单位%）"},model:{value:e.scale3,callback:function(t){e.scale3=t},expression:"scale3"}})],1),e._v(" "),a("label",[a("el-input",{attrs:{placeholder:"18时~24时的占比（单位%）"},model:{value:e.scale4,callback:function(t){e.scale4=t},expression:"scale4"}})],1),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:e.getTimeList}},[e._v("生成随机时间段")])],1),e._v(" "),a("div",{staticClass:"right"},e._l(e.list,function(t,l){return a("ul",{key:l},e._l(t,function(t){return a("li",{key:t},[e._v(e._s(t))])}),0)}),0)])},staticRenderFns:[]};var c=a("VU/8")(i,u,!1,function(e){a("Qr5s")},"data-v-73578ba2",null).exports;l.default.use(r.a);var o=new r.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),p=a("zL8q"),h=a.n(p);a("tvR6");l.default.use(h.a),l.default.config.productionTip=!1,new l.default({el:"#app",router:o,components:{App:n},template:"<App/>"})},Qr5s:function(e,t){},ZR1B:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.565eb7f5fadae29d8776.js.map