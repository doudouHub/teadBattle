webpackJsonp([4],{541:function(t,e,n){n(591);var o=n(205)(n(561),n(615),"data-v-1ee7d71e",null);t.exports=o.exports},552:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"count_down",props:["count_time","end_text","end_close"],data:function(){return{count_show:!0,time:0,timer:null}},mounted:function(){var t=this;this.time=this.count_time,this.timer=setInterval(function(){--t.time||(t.end_text?(t.time=t.end_text,setTimeout(function(){t.closeTimer()},500)):t.closeTimer())},1e3)},methods:{closeTimer:function(){this.end_close&&(this.count_show=!1),clearInterval(this.timer),this.$store.dispatch("student/updateMatching",{type:"count_over"})}}}},561:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(139),s=n.n(o),i=n(206),r=n(140),a=(n.n(r),n(603)),c=n.n(a);e.default={components:s()({vCountdown:c.a},r.battleTpl),data:function(){return{count_time:3}},computed:s()({},n.i(i.a)(["ques_type","battle_statu"])),mounted:function(){this.battle_statu||this.$router.push({path:"/student"})},methods:{}}},574:function(t,e,n){e=t.exports=n(533)(!1),e.push([t.i,"",""])},581:function(t,e,n){e=t.exports=n(533)(!1),e.push([t.i,"\n.v-countdown[data-v-5245fbc9] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n}\n.v-countdown .cuount-down-box[data-v-5245fbc9] {\n    width: 100px;\n    height: 100px;\n    line-height: 100px;\n    text-align: center;\n    background-color: #f2f2f2;\n    font-size: 45px;\n    font-weight: bold;\n    border-radius: 50%;\n    border: 1px solid #ddd;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -50px;\n    margin-top: -50px;\n    z-index: 100;\n}\n.v-countdown .cover[data-v-5245fbc9] {\n    position: relative;\n    z-index: 10;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n",""])},591:function(t,e,n){var o=n(574);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(534)("19f460d5",o,!0)},598:function(t,e,n){var o=n(581);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(534)("44ac80e4",o,!0)},603:function(t,e,n){n(598);var o=n(205)(n(552),n(622),"data-v-5245fbc9",null);t.exports=o.exports},615:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$store.state.student.otherIsReady?n("v-countdown",{attrs:{count_time:t.count_time,end_text:"Go!",end_close:!0}}):t._e(),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("h2",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.battle_statu&&!t.$store.state.student.otherIsReady,expression:"battle_statu && !$store.state.student.otherIsReady",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"text-center",attrs:{"element-loading-text":"等待对方准备就绪..."}},[t._v("\n        对战面板\n    ")]),t._v(" "),n("keep-alive",[n(t.ques_type,{tag:"component"})],1)],1)},staticRenderFns:[]}},622:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.count_show?n("div",{staticClass:"v-countdown"},[n("div",{staticClass:"cuount-down-box"},[t._v("\n        "+t._s(t.time)+"\n    ")]),t._v(" "),n("div",{staticClass:"cover"})]):t._e()},staticRenderFns:[]}}});