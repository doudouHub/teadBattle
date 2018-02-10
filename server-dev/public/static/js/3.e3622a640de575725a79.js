webpackJsonp([3],{546:function(t,e,n){function a(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./components/questions/edit/qaBattle.vue":627,"./components/questions/play/qaBattle.vue":630};a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=546},548:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(139),o=n.n(a),r=n(206);e.default={name:"battle_over",props:["battle_over","myScore"],data:function(){return{}},computed:o()({},n.i(r.a)("student",["otherScore"]),{battleResult:function(){return this.myScore===this.otherScore?"平局！":this.myScore>this.otherScore?"YOU WIN!":"YOU LOST!"}}),methods:o()({},n.i(r.c)(["backToHome"]))}},549:function(t,e,n){e=t.exports=n(533)(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},550:function(t,e,n){var a=n(549);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(534)("9092e174",a,!0)},551:function(t,e,n){n(550);var a=n(205)(n(548),n(552),"data-v-2de87492",null);t.exports=a.exports},552:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"对战结束",visible:t.battle_over,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,center:""},on:{"update:visible":function(e){t.battle_over=e}}},[n("h1",{staticClass:"text-center"},[t._v(t._s(t.battleResult))]),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.backToHome("student")}}},[t._v("确 定")])],1)])},staticRenderFns:[]}},564:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},567:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(207),o=n.n(a),r=n(139),s=n.n(r),l=n(206),i=n(551),c=n.n(i);e.default={components:{battleOver:c.a},data:function(){return{bgBlur:"bgBlur",ques_list:[{title:"",answer:"",options:[]}],total_score:0,full_marks_score:1,ques_run_index:0,count_down:10,count_down_left:10,count_down_timer:null,count_down_animate:"animate-none",cur_options_select:"",cur_check:!1,cur_alluser_selected:!1,cur_ques_loaded:!0,battle_over:!1}},computed:s()({},n.i(l.a)("student",["matching","otherChecks","otherScore","otherAnswer"]),n.i(l.b)("student",["allReadyStart"]),{count_down_percent:function(){return this.count_down_left===this.count_down?100:this.count_down_left?(this.count_down_left-1)/this.count_down*100:0},count_down_status:function(){return this.count_down_percent<50?"exception":this.count_down_percent<80?"":"success"},total_score_progress:function(){return this.total_score/this.full_marks_score*100}}),watch:{allReadyStart:function(){this.battleStart()},otherAnswer:function(t){this.cur_options_select&&"false"!==t[this.ques_run_index]&&this.nextQuestion()}},mounted:function(){var t=this;this.$http("GET",!1,"./static/dataJson/qaBattle.json",{},function(e){t.ques_list=e.list,t.count_down=e.pre_time,t.count_down_left=e.pre_time;for(var n=0,a=0;a<e.list.length;a++)n+=Number(e.list[a].score);t.full_marks_score=n,websocket.send(o()({type:"battle_isReady"})),t.otherIsReady&&t.battleStart()})},methods:{battleStart:function(){var t=this;this.bgBlur="",this.cur_options_select="",this.cur_alluser_selected=!1,this.count_down_timer=setInterval(function(){if(t.count_down_animate="",--t.count_down_left<=0){if(t.clearTimer(),t.cur_alluser_selected)return;t.nextQuestion()}},1e3)},nextQuestion:function(){var t=this;this.cur_options_select||this.confirmAnswer("false"),this.cur_alluser_selected=!0,setTimeout(function(){t.clearTimer(),t.count_down_animate="animate-none",t.ques_list.length===t.ques_run_index+1?t.battleOver():(t.toggleLoading(),t.ques_run_index++,t.count_down_left=t.count_down,t.battleStart())},2500)},clearTimer:function(){this.count_down_timer&&(clearInterval(this.count_down_timer),this.count_down_timer=null)},toggleLoading:function(){var t=this;this.cur_ques_loaded=!1,setTimeout(function(){t.cur_ques_loaded=!0},300)},battleOver:function(){this.battle_over=!0,this.bgBlur="bgBlur"},confirmAnswer:function(t){if(!this.cur_options_select){var e=this,n=this.ques_list[this.ques_run_index],a=n.answer===t;this.cur_options_select=t,this.cur_check=a,this.$set(n,"confirm",!0),this.$set(n,"check",a),this.total_score+=Number(a?n.score:0),websocket.send(o()({type:"result",data:{userId:e.$store.state.userInfo.id,index:this.ques_run_index,check:a,answer:t,total_score:e.total_score}})),this.otherAnswer[this.ques_run_index]&&"false"!==t&&this.nextQuestion()}}}}},582:function(t,e,n){e=t.exports=n(533)(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n",""])},587:function(t,e,n){e=t.exports=n(533)(!1),e.push([t.i,"\n@charset \"UTF-8\";\nhtml {\n  background-color: #f4f4f4;\n}\n\n/* 对战面板 */\n.battle-panel.qaBattle {\n  width: 100%;\n  max-width: 660px;\n  margin: 0 auto;\n  transition: filter .3s;\n}\n.battle-panel.qaBattle.bgBlur {\n    filter: blur(10px);\n}\n.battle-panel.qaBattle .battle-head {\n    position: relative;\n    text-align: center;\n    font-size: 32px;\n    font-weight: bold;\n    color: #666;\n    height: 50px;\n    background-color: #fff;\n    border-radius: 50px;\n    border: 1px solid #ddd;\n}\n.battle-panel.qaBattle .battle-head:before, .battle-panel.qaBattle .battle-head:after {\n      position: absolute;\n      top: 0;\n      line-height: 50px;\n      font-size: 16px;\n      z-index: 10;\n      padding: 0 15px;\n}\n.battle-panel.qaBattle .battle-head:before {\n      content: attr(data-myname);\n      left: 0;\n}\n.battle-panel.qaBattle .battle-head:after {\n      content: attr(data-othername);\n      right: 0;\n}\n.battle-panel.qaBattle .battle-head .battle-score {\n      position: absolute;\n      top: 0;\n      line-height: 50px;\n      font-size: 16px;\n      padding: 0 15px;\n}\n.battle-panel.qaBattle .battle-head .battle-score.mine {\n        right: 50%;\n        margin-right: 50px;\n}\n.battle-panel.qaBattle .battle-head .battle-score.other {\n        left: 50%;\n        margin-left: 50px;\n}\n.battle-panel.qaBattle .battle-head .el-progress {\n      position: relative;\n      z-index: 10;\n      background-color: #fff;\n      border-radius: 50%;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin: -40px auto auto -40px;\n}\n.battle-panel.qaBattle .battle-head .el-progress:after {\n        content: attr(aria-lefttime);\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -40px auto auto -40px;\n        width: 100%;\n        height: 100%;\n        line-height: 80px;\n        font-size: 30px;\n        text-align: center;\n}\n.battle-panel.qaBattle .battle-head .el-progress .el-progress-circle path {\n        transition-duration: 1s !important;\n        -webkit-transition-duration: 1s !important;\n        transition-timing-function: linear !important;\n        -webkit-transition-timing-function: linear !important;\n}\n.battle-panel.qaBattle .battle-head .el-progress.animate-none .el-progress-circle path {\n        transition-duration: 0s !important;\n        -webkit-transition-duration: 0s !important;\n}\n.battle-panel.qaBattle .battle-content {\n    position: relative;\n    height: 400px;\n}\n.battle-panel.qaBattle .battle-content .score-progress {\n      position: absolute;\n      top: 400px;\n      transform: rotateZ(-90deg);\n      -webkit-transform: rotateZ(-90deg);\n      transform-origin: 0 50%;\n      -webkit-transform-origin: 0 50%;\n      width: 300px;\n}\n.battle-panel.qaBattle .battle-content .score-progress .el-progress-bar__outer {\n        background-color: #fff;\n        border: 1px solid #eee;\n}\n.battle-panel.qaBattle .battle-content .score-progress .el-progress-bar__inner {\n        transition: width .3s;\n}\n.battle-panel.qaBattle .battle-content .score-progress.mine {\n        left: 0;\n        margin-left: 10px;\n}\n.battle-panel.qaBattle .battle-content .score-progress.other {\n        left: 100%;\n        margin-left: -10px;\n}\n.battle-panel.qaBattle .battle-options {\n    transition: transform .5s;\n}\n.battle-panel.qaBattle .battle-options li {\n      line-height: 44px;\n      border: 1px solid #ddd;\n      border-radius: 50px;\n      margin: 0 auto 20px;\n      background-color: #fff;\n      font-size: 18px;\n      width: 300px;\n      cursor: pointer;\n      transition: transform .5s, opacity .5s, background-color .5s;\n}\n.battle-panel.qaBattle .battle-options li .el-icon-close {\n        display: none;\n        position: absolute;\n        top: 50%;\n        z-index: 100;\n        color: #fff;\n        margin-top: -9px;\n        font-weight: bold;\n}\n.battle-panel.qaBattle .battle-options li.wrong-mine, .battle-panel.qaBattle .battle-options li.right-mine, .battle-panel.qaBattle .battle-options li.wrong-other, .battle-panel.qaBattle .battle-options li.right-other {\n        transform: scale3d(1.02, 1.02, 1);\n        -webkit-transform: scale3d(1.02, 1.02, 1);\n        opacity: 1 !important;\n        color: #fff;\n        font-weight: bold;\n}\n.battle-panel.qaBattle .battle-options li.wrong-mine, .battle-panel.qaBattle .battle-options li.wrong-other {\n        background-color: #f56c6c;\n        border-color: #f56c6c;\n}\n.battle-panel.qaBattle .battle-options li.wrong-mine .el-icon-close.left {\n        display: block;\n        left: 20px;\n}\n.battle-panel.qaBattle .battle-options li.wrong-other .el-icon-close.right {\n        display: block;\n        right: 20px;\n}\n.battle-panel.qaBattle .battle-options li.right-mine, .battle-panel.qaBattle .battle-options li.right-other {\n        background-color: #67c23a;\n        border-color: #67c23a;\n}\n.battle-panel.qaBattle .battle-options li.right-mine:before, .battle-panel.qaBattle .battle-options li.right-other:after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 50%;\n        z-index: 100;\n        width: 10px;\n        height: 10px;\n        border: 3px solid #fff;\n        border-radius: 50%;\n        margin-top: -8px;\n}\n.battle-panel.qaBattle .battle-options li.right-mine:before {\n        left: 20px;\n}\n.battle-panel.qaBattle .battle-options li.right-other:after {\n        right: 20px;\n}\n.battle-panel.qaBattle .battle-options.hasdone {\n      transform: scale3d(0.95, 0.95, 1);\n      -webkit-transform: scale3d(0.95, 0.95, 1);\n}\n.battle-panel.qaBattle .battle-options.hasdone li {\n        opacity: .5;\n}\n.battle-panel.qaBattle .battle-options.hasdone li.right {\n          transform: scale3d(1.06, 1.06, 1);\n          -webkit-transform: scale3d(1.06, 1.06, 1);\n          opacity: 1;\n          color: #fff;\n          font-weight: bold;\n          background-color: #67c23a;\n          border-color: #67c23a;\n}\n.battle-panel.qaBattle .battle-options.hasSelect li {\n      cursor: default;\n}\n",""])},604:function(t,e,n){var a=n(582);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(534)("6ec5dbaa",a,!0)},609:function(t,e,n){var a=n(587);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(534)("b3eabe68",a,!0)},627:function(t,e,n){n(604);var a=n(205)(n(564),n(638),"data-v-097a607e",null);t.exports=a.exports},630:function(t,e,n){n(609);var a=n(205)(n(567),n(643),null,null);t.exports=a.exports},638:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},643:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"battle-panel qaBattle",class:t.bgBlur},[n("h2",{staticClass:"text-center"},[t._v("对战面板")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"battle-head",attrs:{"data-myname":t.$store.state.userInfo.name,"data-othername":t.matching[0].name}},[n("div",{staticClass:"battle-score mine"},[t._v(t._s(t.total_score))]),t._v(" "),n("div",{staticClass:"battle-score other"},[t._v(t._s(t.otherScore))]),t._v(" "),n("el-progress",{class:t.count_down_animate,attrs:{type:"circle",percentage:t.count_down_percent,width:80,"stroke-width":10,"aria-lefttime":t.count_down_left,status:t.count_down_status,"show-text":!1}})],1),t._v(" "),n("div",{staticClass:"battle-content text-center"},[n("el-progress",{staticClass:"score-progress mine",attrs:{percentage:t.total_score_progress,status:"exception","stroke-width":10,"show-text":!1}}),t._v(" "),n("el-progress",{staticClass:"score-progress other",attrs:{percentage:t.otherScore/t.full_marks_score*100,"stroke-width":10,"show-text":!1}}),t._v(" "),n("br"),t._v(" "),n("transition",{attrs:{name:"fade","enter-active-class":"animated bounceIn","leave-active-class":"animated fadeOut"}},[t.cur_ques_loaded?n("div",[n("h2",[t._v(t._s(t.ques_list[t.ques_run_index].title))]),t._v(" "),n("br"),t._v(" "),n("ul",{staticClass:"battle-options list-none noselect",class:(t.cur_alluser_selected?"hasdone":"")+" "+(t.cur_options_select?"hasSelect":"")},t._l(t.ques_list[t.ques_run_index].options,function(e,a){return n("v-touch",{key:a,class:(t.cur_options_select===a?t.cur_check?"right-mine":"wrong-mine":"")+" "+(t.otherAnswer[t.ques_run_index]===a&&t.cur_alluser_selected?t.otherChecks[t.ques_run_index].check?"right-other":"wrong-other":"")+" "+(t.ques_list[t.ques_run_index].answer===a&&t.otherAnswer[t.ques_run_index]?"right":""),attrs:{tag:"li"},on:{tap:function(e){t.confirmAnswer(a)}}},[t._v("\n                            "+t._s(e)+"\n                            "),t.cur_options_select?n("i",{staticClass:"el-icon-close left"}):t._e(),t._v(" "),t.otherAnswer[t.ques_run_index]?n("i",{staticClass:"el-icon-close right"}):t._e()])}))]):t._e()])],1)]),t._v(" "),n("br"),n("br"),t._v(" "),n("battle-over",{attrs:{battle_over:t.battle_over,myScore:t.total_score}})],1)},staticRenderFns:[]}}});