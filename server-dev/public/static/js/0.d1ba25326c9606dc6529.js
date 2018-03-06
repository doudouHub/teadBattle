webpackJsonp([0],{555:function(e,t,n){n(638);var a=n(192)(n(590),n(671),null,null);e.exports=a.exports},568:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(133),s=n.n(a),o=n(193);t.default={name:"monitor_window",computed:s()({},n.i(o.a)(["websocket_statu","battle_statu","userInfo"]))}},569:function(e,t,n){"use strict";var a=n(194),s=n.n(a),o=n(195),r=n.n(o),i=n(196),c=n(67),u=function(e){window.websocket=new WebSocket(r.a.socket);var t=null;websocket.onopen=function(){var t={type:"connect",userId:e?e.id:i.a.state.userInfo.id,userName:e?e.name:i.a.state.userInfo.name};websocket.send(s()(t).toString(2))},websocket.onmessage=function(e){var n=JSON.parse(e.data);switch(n.code){case"connected":console.info("%cwebsocket连接成功","color:#96b97d;"),i.a.commit("UPDATE_WEBSOCKET_STATU",!0),t=setInterval(function(){websocket.send(0)},5e3);break;case"error":websocket.close(),Notification.error({title:"连接失败",message:n.msg});break;case"deliver":i.a.dispatch("teacher/viewBattle",null,{root:!0}),i.a.dispatch("student/updateMatching",{type:"battle_init",data:n.data.ques_length}),i.a.commit("UPADATE_BATTLE_STATU",{statu:!0,ques_type:n.data.ques_type});break;case"matched":i.a.dispatch("student/updateMatching",{type:"matched",data:n.data});break;case"battle_isReady":i.a.dispatch("student/updateMatching",{type:"ready"});break;case"update_result":i.a.dispatch("student/updateMatching",{type:"answering",data:n.data});break;case"matched_mem":i.a.dispatch("teacher/updateRanking",{type:"member",data:n.data});break;case"updata_rank":i.a.dispatch("teacher/updateRanking",{type:"rankings",data:n.data})}},websocket.onclose=function(){clearInterval(t),console.warn("ws连接断开"),i.a.commit("UPDATE_WEBSOCKET_STATU",!1),i.a.commit("UPADATE_BATTLE_STATU",!1)}};if(!window.websocket)if(""===i.a.state.userInfo.id){var d=JSON.parse(sessionStorage.getItem("userInfo"));d?(i.a.dispatch("loginTo",d),u(d)):c.a.push({path:"/login"})}else u(!1)},570:function(e,t,n){t=e.exports=n(548)(!1),t.push([e.i,"\n.monitor-window[data-v-c6f3e128] {\n    position: fixed;\n    top: 5px;\n    right: 5px;\n    z-index: 1000;\n    width: 300px;\n    min-height: 200px;\n    padding: 10px 15px;\n    border: 1px solid #333;\n    background-color: rgba(0, 0, 0, .6);\n    color: #fff;\n    line-height: 30px;\n    border-radius: 5px;\n}\n",""])},571:function(e,t,n){var a=n(570);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(549)("68311c10",a,!0)},572:function(e,t,n){n(571);var a=n(192)(n(568),n(573),"data-v-c6f3e128",null);e.exports=a.exports},573:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"monitor-window"},[e._v("\n    websocket连接状态："+e._s(e.websocket_statu?"开启":"未连接")+" "),n("br"),e._v("\n    对战赛状态："+e._s(e.battle_statu?"已开启":"未开启")+" "),n("br"),e._v("\n    用户名："+e._s(e.userInfo.name)),n("br"),e._v("\n    用户ID："+e._s(e.userInfo.id)),n("br"),e._v("\n    身份："+e._s(e.userInfo.account_type)+"\n")])},staticRenderFns:[]}},588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:""}},methods:{}}},589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},mounted:function(){},methods:{}}},590:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(n(569),n(572)),s=n.n(a),o=n(648),r=n.n(o),i=n(649),c=n.n(i),u=n(195),d=(n.n(u),n(193));t.default={components:{vHead:r.a,vSidebar:c.a,monitorWindow:s.a},data:function(){return{}},computed:n.i(d.a)(["userInfo"]),mounted:function(){},methods:{}}},605:function(e,t,n){t=e.exports=n(548)(!1),t.push([e.i,"",""])},612:function(e,t,n){t=e.exports=n(548)(!1),t.push([e.i,"",""])},616:function(e,t,n){t=e.exports=n(548)(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},627:function(e,t,n){var a=n(605);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(549)("09220886",a,!0)},634:function(e,t,n){var a=n(612);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(549)("187448a0",a,!0)},638:function(e,t,n){var a=n(616);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(549)("11951936",a,!0)},648:function(e,t,n){n(627);var a=n(192)(n(588),n(661),null,null);e.exports=a.exports},649:function(e,t,n){n(634);var a=n(192)(n(589),n(667),null,null);e.exports=a.exports},661:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"header"})},staticRenderFns:[]}},667:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"sidebar"})},staticRenderFns:[]}},671:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("monitor-window"),e._v(" "),n("v-head"),e._v(" "),n("v-sidebar"),e._v(" "),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"move",mode:"out-in"}},[n("router-view")],1)],1)],1)},staticRenderFns:[]}}});