(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d34b1"],{"5bc1":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-table",{attrs:{data:e.paper,border:"",stripe:"","header-cell-class-name":"headerBg"}},[r("el-table-column",{attrs:{prop:"id",label:"题目ID",width:"80",sortable:""}}),r("el-table-column",{attrs:{prop:"name",label:"题目名称"}}),r("el-table-column",{attrs:{prop:"type",label:"题目类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.type?r("span",[e._v("选择题")]):e._e(),2===t.row.type?r("span",[e._v("判断题")]):e._e(),3===t.row.type?r("span",[e._v("问答题")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"a",label:"a选项"}}),r("el-table-column",{attrs:{prop:"b",label:"b选项"}}),r("el-table-column",{attrs:{prop:"c",label:"c选项"}}),r("el-table-column",{attrs:{prop:"d",label:"d选项"}}),r("el-table-column",{attrs:{prop:"score",label:"标准分数"}}),r("el-table-column",{attrs:{prop:"answer",label:"标准答案"}}),r("el-table-column",{attrs:{prop:"studentAnswer",label:"学生答案"}}),r("el-table-column",{attrs:{prop:"detail",label:"解析"}}),r("el-table-column",{attrs:{prop:"studentScore",label:"得分"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.studentScore,callback:function(r){e.$set(t.row,"studentScore",r)},expression:"scope.row.studentScore"}})]}}])})],1),r("div",{staticStyle:{margin:"20px 0"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitScore}},[e._v("提 交")])],1)],1)},l=[],n=(r("d3b7"),r("159b"),{name:"HandlePaper",data:function(){return{sp:this.$route.query.sp,paper:[]}},created:function(){var e=this;this.request.get("/studentpaper/"+this.sp).then((function(t){e.paper=JSON.parse(t.data.paper),e.paper&&e.paper.length&&e.paper.forEach((function(e){e.answer===e.studentAnswer&&(e.studentScore=e.score)}))}))},methods:{submitScore:function(){var e=this,t=0;this.paper.forEach((function(e){null==e.studentScore&&(e.studentScore=0),t+=parseInt(e.studentScore)})),this.request.post("/studentpaper/",{id:this.sp,score:t}).then((function(t){e.$message.success("打分成功"),e.$router.push("/studenpaper")}))}}}),s=n,o=r("2877"),p=Object(o["a"])(s,a,l,!1,null,"28f0ae4b",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d34b1.f4f473dc.js.map