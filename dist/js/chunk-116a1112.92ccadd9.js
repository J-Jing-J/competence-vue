(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-116a1112"],{e9c4:function(t,e,n){var s=n("23e7"),a=n("da84"),i=n("d066"),r=n("2ba4"),u=n("e330"),l=n("d039"),o=a.Array,c=i("JSON","stringify"),d=u(/./.exec),p=u("".charAt),m=u("".charCodeAt),x=u("".replace),f=u(1..toString),v=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,_=function(t,e,n){var s=p(n,e-1),a=p(n,e+1);return d(g,t)&&!d(y,a)||d(y,t)&&!d(g,s)?"\\u"+f(m(t,0),16):t},h=l((function(){return'"\\udf06\\ud834"'!==c("\udf06\ud834")||'"\\udead"'!==c("\udead")}));c&&s({target:"JSON",stat:!0,forced:h},{stringify:function(t,e,n){for(var s=0,a=arguments.length,i=o(a);s<a;s++)i[s]=arguments[s];var u=r(c,null,i);return"string"==typeof u?x(u,v,_):u}})},f114:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-bottom":"100px"}},[n("div",{staticStyle:{margin:"20px 0"}},[n("span",{staticStyle:{"font-size":"20px",color:"#333"}},[t._v(t._s(t.exam.name))]),n("span",{staticStyle:{"font-size":"14px",color:"#333","margin-left":"20px"}},[t._v("开始时间："+t._s(t.exam.time))]),n("span",{staticStyle:{"font-size":"14px",color:"#333","margin-left":"20px"}},[t._v("持续时间："+t._s(t.exam.duration)+" 分")]),n("span",{staticStyle:{"font-size":"14px",color:"#333","margin-left":"20px"}},[t._v("教室："+t._s(t.exam.room))])]),n("div",{staticStyle:{margin:"10px 0"}},[n("el-card",t._l(t.questiones,(function(e,s){return n("div",{key:e.id,staticStyle:{margin:"20px 0"}},[n("div",{staticStyle:{margin:"10px 0","font-size":"20px"}},[n("span",[t._v(t._s(s+1)+".")]),t._v(" "+t._s(e.name)+" "),1===e.type?n("span",{staticStyle:{"font-size":"14px"}},[t._v("（选择题）")]):t._e(),2===e.type?n("span",{staticStyle:{"font-size":"14px"}},[t._v("（判断题）")]):t._e(),3===e.type?n("span",{staticStyle:{"font-size":"14px"}},[t._v("（问答题）")]):t._e()]),1===e.type?n("div",{staticStyle:{margin:"10px"}},[n("span",{staticStyle:{"margin-right":"20px"}},[n("el-radio",{attrs:{label:"A"},model:{value:e["studentAnswer"],callback:function(n){t.$set(e,"studentAnswer",n)},expression:"item['studentAnswer']"}},[t._v("A. "+t._s(e.a))])],1),n("span",{staticStyle:{"margin-right":"20px"}},[n("el-radio",{attrs:{label:"B"},model:{value:e["studentAnswer"],callback:function(n){t.$set(e,"studentAnswer",n)},expression:"item['studentAnswer']"}},[t._v("B. "+t._s(e.b))])],1),n("span",{staticStyle:{"margin-right":"20px"}},[n("el-radio",{attrs:{label:"C"},model:{value:e["studentAnswer"],callback:function(n){t.$set(e,"studentAnswer",n)},expression:"item['studentAnswer']"}},[t._v("C. "+t._s(e.c))])],1),n("span",{staticStyle:{"margin-right":"20px"}},[n("el-radio",{attrs:{label:"D"},model:{value:e["studentAnswer"],callback:function(n){t.$set(e,"studentAnswer",n)},expression:"item['studentAnswer']"}},[t._v("D. "+t._s(e.d))])],1)]):t._e(),2===e.type?n("div",{staticStyle:{margin:"10px"}},[n("span",{staticStyle:{"margin-right":"20px"}},[n("el-radio",{attrs:{label:"是"},model:{value:e["studentAnswer"],callback:function(n){t.$set(e,"studentAnswer",n)},expression:"item['studentAnswer']"}},[t._v("是")])],1),n("span",{staticStyle:{"margin-right":"20px"}},[n("el-radio",{attrs:{label:"否"},model:{value:e["studentAnswer"],callback:function(n){t.$set(e,"studentAnswer",n)},expression:"item['studentAnswer']"}},[t._v("否")])],1)]):t._e(),3===e.type?n("div",{staticStyle:{margin:"10px"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e["studentAnswer"],callback:function(n){t.$set(e,"studentAnswer",n)},expression:"item['studentAnswer']"}})],1):t._e()])})),0),n("div",{staticStyle:{margin:"20px","text-align":"center"}},[n("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.submitPaper}},[t._v("提 交")]),n("el-button",{attrs:{size:"medium",type:"warning"},on:{click:function(e){return t.$router.push("/front/home")}}},[t._v("取 消")])],1)],1)])},a=[],i=(n("e9c4"),{name:"Paper",data:function(){return{questiones:[],examId:this.$route.query.examId,exam:{}}},created:function(){var t=this;this.request.get("/exam/"+this.examId).then((function(e){t.exam=e.data})),this.request.get("/examPaper/exam/"+this.examId).then((function(e){e.data&&t.request.get("/paper/view/"+e.data.paperId).then((function(e){t.questiones=e.data}))}))},methods:{submitPaper:function(){var t=this;this.request.post("/studentpaper",{examId:this.examId,paper:JSON.stringify(this.questiones)}).then((function(e){"200"===e.code?t.$message.success("提交成功！"):t.$message.error(e.msg)}))}}}),r=i,u=n("2877"),l=Object(u["a"])(r,s,a,!1,null,"72cbaf1e",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-116a1112.92ccadd9.js.map