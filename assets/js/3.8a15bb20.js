(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9,12,15,19],{715:function(t,e,i){var s=i(6),n=i(172);t.exports=function(t,e,i){var a,o;return n&&"function"==typeof(a=e.constructor)&&a!==i&&s(o=a.prototype)&&o!==i.prototype&&n(t,o),t}},716:function(t,e,i){"use strict";var s=i(7),n=i(4),a=i(291),o=i(30),r=i(8),l=i(38),c=i(715),u=i(72),f=i(2),d=i(50),h=i(105).f,m=i(39).f,p=i(10).f,v=i(292).trim,g=n.Number,y=g.prototype,b="Number"==l(d(y)),k=function(t){var e,i,s,n,a,o,r,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=v(c)).charCodeAt(0))||45===e){if(88===(i=c.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+c}for(o=(a=c.slice(2)).length,r=0;r<o;r++)if((l=a.charCodeAt(r))<48||l>n)return NaN;return parseInt(a,s)}return+c};if(a("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var C,x=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof x&&(b?f((function(){y.valueOf.call(i)})):"Number"!=l(i))?c(new g(k(e)),i,x):k(e)},w=s?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;w.length>_;_++)r(g,C=w[_])&&!r(x,C)&&p(x,C,m(g,C));x.prototype=y,y.constructor=x,o(n,"Number",x)}},717:function(t,e,i){},718:function(t,e,i){"use strict";i(717)},722:function(t,e,i){},723:function(t,e,i){"use strict";i.r(e);i(716);var s=i(171),n={name:"compBtn",inheritAttrs:!1,props:{content:{type:String,required:!0,default:function(){return""}},tipConfig:{type:Object,default:null},debounce:{type:Boolean,default:!1},debounceTime:{type:Number,default:function(){return 500}},loading:{type:Boolean,default:!1},fullscreenLoading:{type:Boolean,default:!1},confirmType:{type:String,default:""},popConfig:{type:Object,default:function(){return{title:"确定删除吗？"}}},type:{type:String,default:""},confirmConfig:{type:Object,default:function(){return{}}},isLink:{type:Boolean,default:!1},toPath:{type:String,default:"/"}},data:function(){return{loadingStatus:!1,fullscreenLoadingStatus:!1}},computed:{attrs:function(){return Object(s.a)({effect:"dark",placement:"top"},this.tipConfig)}},methods:{handleClick:function(){var t=this;return this.isLink?(this.$router.push(this.toPath),!1):this.confirmType&&"confirm"===this.confirmType?void this.messageConfirm():this.debounce?void this.debounceClick():(this.loading&&(this.loadingStatus=!0),this.fullscreenLoading&&(this.fullscreenLoadingStatus=!0),void this.$emit("click",(function(){t.loadingStatus=!1,t.fullscreenLoadingStatus=!1})))},messageConfirm:function(){var t=this,e=this.confirmConfig,i=e.message,s=void 0===i?"此操作将永久删除该数据, 是否继续?":i,n=e.title,a=void 0===n?"提示":n,o=e.confirmButtonText,r=void 0===o?"确定":o,l=e.cancelButtonText,c=void 0===l?"取消":l,u=e.type,f=void 0===u?"warning":u;this.$confirm(s,a,{confirmButtonText:r,cancelButtonText:c,type:f}).then((function(){t.confirm()})).catch((function(){t.$emit("cancel")}))},confirm:function(){var t=this;this.fullscreenLoading&&(this.fullscreenLoadingStatus=!0),this.$emit("confirm",(function(){t.fullscreenLoadingStatus=!1}))}}},a=(i(718),i(25)),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-tooltip",t._b({attrs:{content:t.content}},"el-tooltip",t.attrs,!1),["pop"===t.confirmType?i("el-popconfirm",t._b({on:{onConfirm:t.confirm,onCancel:function(e){return t.$emit("cancel")}}},"el-popconfirm",t.popConfig,!1),[i("el-button",t._b({directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoadingStatus,expression:"fullscreenLoadingStatus",modifiers:{fullscreen:!0,lock:!0}}],attrs:{slot:"reference",type:t.type},on:{click:t.handleClick},slot:"reference"},"el-button",t.$attrs,!1),[t._t("default")],2)],1):i("el-button",t._b({directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoadingStatus,expression:"fullscreenLoadingStatus",modifiers:{fullscreen:!0,lock:!0}}],attrs:{loading:t.loadingStatus,type:t.type,to:t.toPath,isLink:t.isLink},on:{click:t.handleClick}},"el-button",t.$attrs,!1),[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=o.exports},727:function(t,e,i){"use strict";i(722)},728:function(t,e,i){},729:function(t,e,i){},732:function(t,e,i){"use strict";i.r(e);i(174);var s={name:"compForm",props:{title:{type:String,default:function(){return""}},formOptions:{type:Array,default:function(){return[]}},form:{type:Object,default:function(){}},rules:{type:Object,default:function(){}},labelWidth:{type:String,default:function(){return"auto"}},formWidth:{type:String}},data:function(){return{pickerOptionsYear:{disabledDate:function(t){return t.getFullYear()<"1949"}},pickerOptionsDate:{disabledDate:function(t){return t.getTime()<new Date("1949-01-01").getTime()}}}},mounted:function(){}},n=(i(727),i(25)),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-form",{ref:"form",staticClass:"baseplat-form",style:{width:t.formWidth},attrs:{model:t.form,rules:t.rules,"label-width":t.labelWidth}},[i("ul",[t._t("title",[t.title?i("ol",{staticClass:"baseplat-form-title"},[i("span",[t._v(t._s(t.title))])]):t._e()],{title:t.title}),t._v(" "),t._l(t.formOptions,(function(e,s){return i("ol",{key:s},["string"==typeof e?[i("div",{staticClass:"subtitile"},[i("span",[t._v(" ")]),t._v(" "+t._s(e))])]:t._e(),t._v(" "),"string"!=typeof e?t._l(e,(function(e){return i("el-form-item",{key:e.field,attrs:{label:e.label,prop:e.field}},["input"===e.type?i("el-input",{attrs:{disabled:e.isDisabled,placeholder:e.placeholder||"请输入","show-password":e.showPassword||!1,labelWidth:e.labelWidth},model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}}):"select"===e.type?i("el-select",{attrs:{disabled:e.isDisabled,placeholder:e.placeholder},model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}},t._l(e.options,(function(t){return i("el-option",{key:t.id||t.value||t,attrs:{label:t.label||t,value:t.value||t}})})),1):"multipleSelect"===e.type?i("el-select",{attrs:{multiple:"","collapse-tags":e.isTags||!1,disabled:e.isDisabled,placeholder:e.placeholder},model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}},t._l(e.options,(function(t){return i("el-option",{key:t.id||t.value||t,attrs:{disabled:e.isSubDisabled,label:t.label||t,value:t.value||t}})})),1):"cascader"===e.type?i("el-cascader",{attrs:{disabled:e.isDisabled,placeholder:e.placeholder,"collapse-tags":e.isTags,options:e.options,props:Object.assign({},{expandTrigger:"hover"},e.config),"show-all-levels":e.showAllLevels,clearable:""},model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}}):"checkbox"===e.type?i("el-checkbox-group",{model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}},t._l(e.options,(function(s){return i("el-checkbox",{key:s.id||s.value||s,attrs:{label:s.value||s,name:e.field}},[t._v(t._s(s.label||s)+"\n            ")])})),1):"radio"===e.type?i("el-radio-group",{attrs:{disabled:e.isDisabled},model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}},t._l(e.options,(function(e){return i("el-radio",{key:e.value+""||e,attrs:{label:"undefine"==typeof e.value?e:e.value}},[t._v(t._s(e.label||e))])})),1):"date"===e.type||"year"===e.type||"datetime"===e.type?i("el-date-picker",{attrs:{type:e.type,placeholder:e.placeholder,disabled:e.isDisabled,format:e.format,separator:e.separator||"-","value-format":"date"===e.type?"yyyy-MM-dd HH:mm:ss":"datetime"===e.type?e.format:e.valueFormat,"picker-options":"year"===e.type?t.pickerOptionsYear:t.pickerOptionsDate},model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}}):"hintInput"===e.type?i("div",{staticClass:"hint-input"},[i("el-input",{attrs:{disabled:e.isDisabled,placeholder:e.placeholder},model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}}),t._v(" "),i("p",[t._v(t._s(e.hintText))])],1):"textInput"===e.type?i("el-input",{attrs:{type:"textarea",disabled:e.isDisabled,placeholder:e.placeholder||"请输入",rows:e.rows||3},model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}}):"customizableRadio"===e.type?i("el-radio-group",{attrs:{disabled:e.isDisabled},model:{value:t.form[e.field],callback:function(i){t.$set(t.form,e.field,i)},expression:"form[item.field]"}},[t._l(e.options,(function(e){return i("el-radio",{key:e.id||e.value||e,attrs:{label:e.value||e}},[t._v(t._s(e.label||e))])})),t._v(" "),i("el-input",{staticClass:"radio-input",attrs:{disabled:t.form[e.field]!==e.special||e.isDisabled,size:"mini"},model:{value:t.form[e.specialField],callback:function(i){t.$set(t.form,e.specialField,i)},expression:"form[item.specialField]"}},[i("template",{slot:"append"},[t._v(t._s(e.unit))])],2)],2):"custom"===e.type?t._t(e.customType||e.type,null,{form:t.form,rules:t.rules,itemData:e}):t._e()],2)})):t._e()],2)})),t._v(" "),i("ol",[t._t("footer",null,{form:t.form})],2)],2)])}),[],!1,null,"cb799fe6",null);e.default=a.exports},735:function(t,e,i){var s=i(1),n=i(736),a=i(175);s({target:"Array",proto:!0},{fill:n}),a("fill")},736:function(t,e,i){"use strict";var s=i(19),n=i(173),a=i(18);t.exports=function(t){for(var e=s(this),i=a(e.length),o=arguments.length,r=n(o>1?arguments[1]:void 0,i),l=o>2?arguments[2]:void 0,c=void 0===l?i:n(l,i);c>r;)e[r++]=t;return e}},737:function(t,e,i){"use strict";i(728)},738:function(t,e,i){t.exports=i.p+"assets/img/img.8e167436.jpg"},739:function(t,e,i){t.exports=i.p+"assets/img/img1.f79e1d9e.jpg"},740:function(t,e,i){t.exports=i.p+"assets/img/img2.491a6170.jpg"},741:function(t,e,i){t.exports=i.p+"assets/img/img3.fed1c663.jpg"},742:function(t,e,i){t.exports=i.p+"assets/img/img4.397bc48e.jpg"},743:function(t,e,i){t.exports=i.p+"assets/img/img5.64c55a83.jpg"},744:function(t,e,i){"use strict";i(729)},775:function(t,e,i){},787:function(t,e,i){"use strict";i.r(e);i(108),i(735),i(295),i(716);var s="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",n={name:"canvasCode",props:{w:{type:Number,default:function(){return 130}},h:{type:Number,default:function(){return 35}},codeNum:{type:Number,default:function(){return 4}}},components:{},filters:{},data:function(){return{canvasCtx:null,result:""}},computed:{},created:function(){},mounted:function(){this.init()},watch:{},methods:{init:function(){this.canvasCtx=this.$refs.canvas.getContext("2d"),this.canvasCtx.fillStyle=this.getRandomColor(180,230),this.canvasCtx.fillRect(0,0,this.w,this.h),this.getText(),this.getInterfere(),this.getArc()},getText:function(){for(var t=[],e=0;e<this.codeNum;e++){var i=s[this.getRandomNum(0,s.length)],n=this.getRandomNum(18,40),a=this.getRandomNum(-30,30);this.canvasCtx.font=n+"px Microsoft YaHei",this.canvasCtx.textBaseline="top",this.canvasCtx.fillStyle=this.getRandomColor(80,150),this.canvasCtx.save(),this.canvasCtx.translate(30*e+15,15),this.canvasCtx.rotate(a*Math.PI/180),this.canvasCtx.fillText(i,-5,-8),this.canvasCtx.restore(),t.push(i)}this.result=t.join("").toLocaleLowerCase()},getRandomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getRandomColor:function(t,e){var i=this.getRandomNum(t,e),s=this.getRandomNum(t,e),n=this.getRandomNum(t,e);return"rgb(".concat(i,",").concat(s,",").concat(n,")")},getInterfere:function(){for(var t=0;t<5;t++)this.canvasCtx.beginPath(),this.canvasCtx.moveTo(this.getRandomNum(0,this.w),this.getRandomNum(0,this.h)),this.canvasCtx.lineTo(this.getRandomNum(0,this.w),this.getRandomNum(0,this.h)),this.canvasCtx.strokeStyle=this.getRandomColor(180,230),this.canvasCtx.closePath(),this.canvasCtx.stroke()},getArc:function(){for(var t=0;t<30;t++)this.canvasCtx.beginPath(),this.canvasCtx.arc(this.getRandomNum(0,this.w),this.getRandomNum(0,this.h),1,0,2*Math.PI),this.canvasCtx.closePath(),this.canvasCtx.strokeStyle=this.getRandomColor(180,230),this.canvasCtx.fill()},Refresh:function(){this.init()}},destroyed:function(){}},a=(i(737),i(25)),o=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvasStyle"},[e("canvas",{ref:"canvas",attrs:{width:this.w,height:this.h},on:{click:this.Refresh}})])}),[],!1,null,"1b0f6a7e",null);e.default=o.exports},788:function(t,e,i){"use strict";i.r(e);i(106),i(296),i(174),i(716),i(298),i(111);var s=i(738),n=i.n(s),a=i(739),o=i.n(a),r=i(740),l=i.n(r),c=i(741),u=i.n(c),f=i(742),d=i.n(f),h=i(743),m=i.n(h),p=Math.PI;function v(t,e){return t+e}function g(t){return t*t}var y={name:"SlideVerify",props:{l:{type:Number,default:42},r:{type:Number,default:10},w:{type:Number,default:340},h:{type:Number,default:155},sliderText:{type:String,default:"向右滑动"},accuracy:{type:Number,default:5},show:{type:Boolean,default:!0},imgs:{type:Array,default:function(){return[n.a,o.a,l.a,u.a,d.a,m.a]}}},data:function(){return{containerActive:!1,containerSuccess:!1,containerFail:!1,canvasCtx:null,blockCtx:null,block:null,block_x:void 0,block_y:void 0,L:this.l+2*this.r+3,img:void 0,originX:void 0,originY:void 0,isMouseDown:!1,trail:[],sliderLeft:0,sliderMaskWidth:0,success:!1,loadBlock:!0,timestamp:null}},mounted:function(){this.init()},methods:{init:function(){this.initDom(),this.initImg(),this.bindEvents()},initDom:function(){this.block=this.$refs.block,this.canvasCtx=this.$refs.canvas.getContext("2d"),this.blockCtx=this.block.getContext("2d")},initImg:function(){var t=this,e=this.createImg((function(){t.loadBlock=!1,t.drawBlock(),t.canvasCtx.drawImage(e,0,0,t.w,t.h),t.blockCtx.drawImage(e,0,0,t.w,t.h);var i=t.block_x,s=t.block_y,n=t.r,a=t.L,o=s-2*n-1,r=t.blockCtx.getImageData(i,o,a,a);t.block.width=a,t.blockCtx.putImageData(r,0,o)}));this.img=e},drawBlock:function(){this.block_x=this.getRandomNumberByRange(this.L+10,this.w-(this.L+10)),this.block_y=this.getRandomNumberByRange(10+2*this.r,this.h-(this.L+10)),this.draw(this.canvasCtx,this.block_x,this.block_y,"fill"),this.draw(this.blockCtx,this.block_x,this.block_y,"clip")},draw:function(t,e,i,s){var n=this.l,a=this.r;t.beginPath(),t.moveTo(e,i),t.arc(e+n/2,i-a+2,a,.72*p,2.26*p),t.lineTo(e+n,i),t.arc(e+n+a-2,i+n/2,a,1.21*p,2.78*p),t.lineTo(e+n,i+n),t.lineTo(e,i+n),t.arc(e+a-2,i+n/2,a+.4,2.76*p,1.24*p,!0),t.lineTo(e,i),t.lineWidth=2,t.fillStyle="rgba(255, 255, 255, 0.7)",t.strokeStyle="rgba(255, 255, 255, 0.7)",t.stroke(),t[s](),t.globalCompositeOperation="destination-over"},createImg:function(t){var e=this,i=document.createElement("img");return i.crossOrigin="Anonymous",i.onload=t,i.onerror=function(){i.src=e.getRandomImg()},i.src=this.getRandomImg(),i},getRandomImg:function(){var t=this.imgs.length;return t>0?this.imgs[this.getRandomNumberByRange(0,t)]:"https://picsum.photos/300/150/?image="+this.getRandomNumberByRange(0,1084)},getRandomNumberByRange:function(t,e){return Math.round(Math.random()*(e-t)+t)},refresh:function(){this.reset(),this.$emit("refresh")},sliderDown:function(t){this.success||(this.originX=t.clientX,this.originY=t.clientY,this.isMouseDown=!0,this.timestamp=+new Date)},touchStartEvent:function(t){this.success||(this.originX=t.changedTouches[0].pageX,this.originY=t.changedTouches[0].pageY,this.isMouseDown=!0,this.timestamp=+new Date)},bindEvents:function(){var t=this;document.addEventListener("mousemove",(function(e){if(!t.isMouseDown)return!1;var i=e.clientX-t.originX,s=e.clientY-t.originY;if(i<0||i+38>=t.w)return!1;t.sliderLeft=i+"px";var n=(t.w-40-20)/(t.w-40)*i;t.block.style.left=n+"px",t.containerActive=!0,t.sliderMaskWidth=i+"px",t.trail.push(s)})),document.addEventListener("mouseup",(function(e){if(!t.isMouseDown)return!1;if(t.isMouseDown=!1,e.clientX===t.originX)return!1;t.containerActive=!1,t.timestamp=+new Date-t.timestamp;var i=t.verify(),s=i.spliced,n=i.TuringTest;if(s){if(-1===t.accuracy)return t.containerSuccess=!0,t.success=!0,void t.$emit("success",t.timestamp);n?(t.containerSuccess=!0,t.success=!0,t.$emit("success",t.timestamp)):(t.containerFail=!0,t.$emit("again"))}else t.containerFail=!0,t.$emit("fail"),setTimeout((function(){t.reset()}),1e3)}))},touchMoveEvent:function(t){if(!this.isMouseDown)return!1;var e=t.changedTouches[0].pageX-this.originX,i=t.changedTouches[0].pageY-this.originY;if(e<0||e+38>=this.w)return!1;this.sliderLeft=e+"px";var s=(this.w-40-20)/(this.w-40)*e;this.block.style.left=s+"px",this.containerActive=!0,this.sliderMaskWidth=e+"px",this.trail.push(i)},touchEndEvent:function(t){var e=this;if(!this.isMouseDown)return!1;if(this.isMouseDown=!1,t.changedTouches[0].pageX===this.originX)return!1;this.containerActive=!1,this.timestamp=+new Date-this.timestamp;var i=this.verify(),s=i.spliced,n=i.TuringTest;if(s){if(-1===this.accuracy)return this.containerSuccess=!0,this.success=!0,void this.$emit("success",this.timestamp);n?(this.containerSuccess=!0,this.success=!0,this.$emit("success",this.timestamp)):(this.containerFail=!0,this.$emit("again"))}else this.containerFail=!0,this.$emit("fail"),setTimeout((function(){e.reset()}),1e3)},verify:function(){var t=this.trail,e=t.reduce(v)/t.length,i=t.map((function(t){return t-e})),s=Math.sqrt(i.map(g).reduce(v)/t.length),n=parseInt(this.block.style.left),a=this.accuracy<=1?1:this.accuracy>10?10:this.accuracy;return{spliced:Math.abs(n-this.block_x)<=a,TuringTest:e!==s}},reset:function(){this.success=!1,this.containerActive=!1,this.containerSuccess=!1,this.containerFail=!1,this.sliderLeft=0,this.block.style.left=0,this.sliderMaskWidth=0;var t=this.w,e=this.h;this.canvasCtx.clearRect(0,0,t,e),this.blockCtx.clearRect(0,0,t,e),this.block.width=t,this.img.src=this.getRandomImg(),this.$emit("fulfilled")}}},b=(i(744),i(25)),k=Object(b.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-verify",style:{width:t.w+"px"},attrs:{id:"slideVerify",onselectstart:"return false;"}},[i("transition",{attrs:{name:t.isMouseDown?"el-fade-in-linear":"el-fade-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isMouseDown,expression:"isMouseDown"}],staticClass:"containerCanvas"},[i("div",{class:{"slider-verify-loading":t.loadBlock}}),t._v(" "),i("canvas",{ref:"canvas",attrs:{width:t.w,height:t.h}}),t._v(" "),t.show?i("div",{staticClass:"slide-verify-refresh-icon",on:{click:t.refresh}}):t._e(),t._v(" "),i("canvas",{ref:"block",staticClass:"slide-verify-block",attrs:{width:t.w,height:t.h}})])]),t._v(" "),i("div",{staticClass:"slide-verify-slider",class:{"container-active":t.containerActive,"container-success":t.containerSuccess,"container-fail":t.containerFail}},[i("div",{staticClass:"slide-verify-slider-mask",style:{width:t.sliderMaskWidth}},[i("div",{staticClass:"slide-verify-slider-mask-item",style:{left:t.sliderLeft},on:{mousedown:t.sliderDown,touchstart:t.touchStartEvent,touchmove:t.touchMoveEvent,touchend:t.touchEndEvent}},[i("div",{staticClass:"slide-verify-slider-mask-item-icon"})])]),t._v(" "),i("span",{staticClass:"slide-verify-slider-text"},[t._v(t._s(t.sliderText))])])],1)}),[],!1,null,"a461c5b0",null);e.default=k.exports},831:function(t,e,i){"use strict";i(775)},876:function(t,e,i){"use strict";i.r(e);var s=i(787),n=i(732),a=i(723),o=i(788),r={name:"LoginForm",props:{form:{type:Object,default:function(){}},rules:{type:Object,default:function(){}},labelWidth:{type:String,default:function(){return"auto"}},formWidth:{type:String},formOptions:{type:Array,default:function(){return[]}},isCheck:{type:Boolean,default:function(){return!1}},isCheckName:{type:String,default:function(){return"Code"}}},components:{comForm:n.default,canvasCode:s.default,comBtn:a.default,verifyCode:o.default},filters:{},data:function(){return{success:!1}},computed:{},created:function(){if(this.isCheck)switch(this.isCheckName){case"Code":this.formOptions.push([{field:"CodeShow",type:"custom",customType:"Code",label:"验证码",placeholder:"请输入验证码"}]);break;case"verifyCode":this.formOptions.push([{field:"verifyCode",type:"custom",customType:"verifyCode",label:"验证码"}])}},mounted:function(){},watch:{},methods:{onSuccess:function(){this.success=!0}},destroyed:function(){}},l=(i(831),i(25)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("com-form",t._b({ref:"comForm",attrs:{form:t.form,rules:t.rules,formOptions:t.formOptions},scopedSlots:t._u([{key:"Code",fn:function(e){var s=e.form,n=e.itemData;return[i("div",{staticClass:"flexStyle"},[i("el-input",{staticStyle:{"margin-right":"10px","margin-left":"-22%"},attrs:{disabled:n.isDisabled,placeholder:n.placeholder||"请输入验证码",props:"CodeShow"},model:{value:s[n.field],callback:function(e){t.$set(s,n.field,e)},expression:"form[itemData.field]"}}),t._v(" "),i("canvas-code",{ref:"codeRes",staticClass:"canvasFixStyle"})],1)]}},{key:"verifyCode",fn:function(e){e.form,e.itemData;return[i("div",{staticClass:"verifyCodeContainer"},[i("verify-code",{ref:"verifyCode",staticClass:"verifyCode",on:{success:t.onSuccess}}),t._v(" "),t.success?i("span",[i("i",{staticClass:"el-icon-circle-check iconStyle"})]):t._e()],1)]}},{key:"footer",fn:function(e){e.form;return[i("div",{staticClass:"BtnStyle"},[i("com-btn",{attrs:{type:"primary",content:"登录"}},[t._v("登录")])],1)]}}])},"com-form",t.$attrs,!1))],1)}),[],!1,null,"ceaadc66",null);e.default=c.exports}}]);