webpackJsonp([0],{540:function(e,t,n){n(597);var a=n(205)(n(562),n(619),null,null);e.exports=a.exports},544:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(139),s=n.n(a),o=n(206);t.default={name:"monitor_window",computed:s()({},n.i(o.a)(["websocket_statu","battle_statu","userInfo"]))}},545:function(e,t,n){"use strict";var a=n(207),s=n.n(a),o=n(140),r=n.n(o),i=n(208),c=n(67),u=function(e){window.websocket=new WebSocket(r.a.socket);var t=null;websocket.onopen=function(){var t={type:"connect",userId:e?e.id:i.a.state.userInfo.id,userName:e?e.name:i.a.state.userInfo.name};websocket.send(s()(t).toString(2))},websocket.onmessage=function(e){var n=JSON.parse(e.data);switch(n.code){case"connected":console.info("%cwebsocket连接成功","color:#96b97d;"),i.a.commit("UPDATE_WEBSOCKET_STATU",!0),t=setInterval(function(){websocket.send(0)},5e3);break;case"error":websocket.close(),Notification.error({title:"连接失败",message:n.msg});break;case"deliver":i.a.dispatch("teacher/viewBattle",null,{root:!0}),i.a.dispatch("student/updateMatching",{type:"battle_init",data:n.data.ques_length}),i.a.commit("UPADATE_BATTLE_STATU",{statu:!0,ques_type:n.data.ques_type});break;case"matched":i.a.dispatch("student/updateMatching",{type:"matched",data:n.data});break;case"battle_isReady":console.log("准备就绪"),i.a.dispatch("student/updateMatching",{type:"ready"});break;case"update_result":i.a.dispatch("student/updateMatching",{type:"answering",data:n.data});break;case"matched_mem":i.a.dispatch("teacher/updateRanking",{type:"member",data:n.data});break;case"updata_rank":i.a.dispatch("teacher/updateRanking",{type:"rankings",data:n.data})}},websocket.onclose=function(){clearInterval(t),console.warn("ws连接断开"),i.a.commit("UPDATE_WEBSOCKET_STATU",!1),i.a.commit("UPADATE_BATTLE_STATU",!1)}};if(!window.websocket)if(""===i.a.state.userInfo.id){var d=JSON.parse(sessionStorage.getItem("userInfo"));d?(i.a.dispatch("loginTo",d),u(d)):c.a.push({path:"/login"})}else u(!1)},546:function(e,t,n){t=e.exports=n(531)(!1),t.push([e.i,"\n.monitor-window[data-v-c6f3e128] {\n    position         : fixed;\n    top              : 5px;\n    right            : 5px;\n    width            : 300px;\n    min-height       : 200px;\n    padding          : 10px 15px;\n    background-color : rgba(0, 0, 0, .6);\n    color            : #fff;\n    border           : 1px solid #333;\n    border-radius    : 5px;\n    line-height      : 30px;\n}\n",""])},547:function(e,t,n){var a=n(546);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(532)("68311c10",a,!0)},548:function(e,t,n){n(547);var a=n(205)(n(544),n(549),"data-v-c6f3e128",null);e.exports=a.exports},549:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"monitor-window"},[e._v("\n    websocket连接状态："+e._s(e.websocket_statu?"开启":"未连接")+" "),n("br"),e._v("\n    对战赛状态："+e._s(e.battle_statu?"已开启":"未开启")+" "),n("br"),e._v("\n    用户名："+e._s(e.userInfo.name)),n("br"),e._v("\n    用户ID："+e._s(e.userInfo.id)),n("br"),e._v("\n    身份："+e._s(e.userInfo.account_type)+"\n")])},staticRenderFns:[]}},560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"linxin"}},methods:{}}},561:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},mounted:function(){},methods:{}}},562:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(n(545),n(548)),s=n.n(a),o=n(601),r=n.n(o),i=n(602),c=n.n(i),u=n(140),d=(n.n(u),n(206));t.default={components:{vHead:r.a,vSidebar:c.a,monitorWindow:s.a},data:function(){return{}},computed:n.i(d.a)(["userInfo"]),mounted:function(){},methods:{}}},573:function(e,t,n){t=e.exports=n(531)(!1),t.push([e.i,"",""])},578:function(e,t,n){t=e.exports=n(531)(!1),t.push([e.i,"",""])},581:function(e,t,n){t=e.exports=n(531)(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},589:function(e,t,n){var a=n(573);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(532)("09220886",a,!0)},594:function(e,t,n){var a=n(578);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(532)("187448a0",a,!0)},597:function(e,t,n){var a=n(581);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(532)("11951936",a,!0)},601:function(e,t,n){n(589);var a=n(205)(n(560),n(611),null,null);e.exports=a.exports},602:function(e,t,n){n(594);var a=n(205)(n(561),n(616),null,null);e.exports=a.exports},611:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"header"})},staticRenderFns:[]}},616:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"sidebar"})},staticRenderFns:[]}},619:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("monitor-window"),e._v(" "),n("v-head"),e._v(" "),n("v-sidebar"),e._v(" "),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"move",mode:"out-in"}},[n("router-view")],1)],1)],1)},staticRenderFns:[]}}});