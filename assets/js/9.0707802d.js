(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{715:function(t,i,e){var s=e(6),n=e(172);t.exports=function(t,i,e){var r,a;return n&&"function"==typeof(r=i.constructor)&&r!==e&&s(a=r.prototype)&&a!==e.prototype&&n(t,a),t}},716:function(t,i,e){"use strict";var s=e(7),n=e(4),r=e(291),a=e(30),c=e(8),o=e(38),l=e(715),u=e(72),h=e(2),d=e(50),f=e(105).f,m=e(39).f,g=e(10).f,v=e(292).trim,p=n.Number,b=p.prototype,w="Number"==o(d(b)),y=function(t){var i,e,s,n,r,a,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(43===(i=(l=v(l)).charCodeAt(0))||45===i){if(88===(e=l.charCodeAt(2))||120===e)return NaN}else if(48===i){switch(l.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+l}for(a=(r=l.slice(2)).length,c=0;c<a;c++)if((o=r.charCodeAt(c))<48||o>n)return NaN;return parseInt(r,s)}return+l};if(r("Number",!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var k,x=function(t){var i=arguments.length<1?0:t,e=this;return e instanceof x&&(w?h((function(){b.valueOf.call(e)})):"Number"!=o(e))?l(new p(y(i)),e,x):y(i)},N=s?f(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;N.length>I;I++)c(p,k=N[I])&&!c(x,k)&&g(x,k,m(p,k));x.prototype=b,b.constructor=x,a(n,"Number",x)}},729:function(t,i,e){},738:function(t,i,e){t.exports=e.p+"assets/img/img.8e167436.jpg"},739:function(t,i,e){t.exports=e.p+"assets/img/img1.f79e1d9e.jpg"},740:function(t,i,e){t.exports=e.p+"assets/img/img2.491a6170.jpg"},741:function(t,i,e){t.exports=e.p+"assets/img/img3.fed1c663.jpg"},742:function(t,i,e){t.exports=e.p+"assets/img/img4.397bc48e.jpg"},743:function(t,i,e){t.exports=e.p+"assets/img/img5.64c55a83.jpg"},744:function(t,i,e){"use strict";e(729)},788:function(t,i,e){"use strict";e.r(i);e(106),e(296),e(174),e(716),e(298),e(111);var s=e(738),n=e.n(s),r=e(739),a=e.n(r),c=e(740),o=e.n(c),l=e(741),u=e.n(l),h=e(742),d=e.n(h),f=e(743),m=e.n(f),g=Math.PI;function v(t,i){return t+i}function p(t){return t*t}var b={name:"SlideVerify",props:{l:{type:Number,default:42},r:{type:Number,default:10},w:{type:Number,default:340},h:{type:Number,default:155},sliderText:{type:String,default:"向右滑动"},accuracy:{type:Number,default:5},show:{type:Boolean,default:!0},imgs:{type:Array,default:function(){return[n.a,a.a,o.a,u.a,d.a,m.a]}}},data:function(){return{containerActive:!1,containerSuccess:!1,containerFail:!1,canvasCtx:null,blockCtx:null,block:null,block_x:void 0,block_y:void 0,L:this.l+2*this.r+3,img:void 0,originX:void 0,originY:void 0,isMouseDown:!1,trail:[],sliderLeft:0,sliderMaskWidth:0,success:!1,loadBlock:!0,timestamp:null}},mounted:function(){this.init()},methods:{init:function(){this.initDom(),this.initImg(),this.bindEvents()},initDom:function(){this.block=this.$refs.block,this.canvasCtx=this.$refs.canvas.getContext("2d"),this.blockCtx=this.block.getContext("2d")},initImg:function(){var t=this,i=this.createImg((function(){t.loadBlock=!1,t.drawBlock(),t.canvasCtx.drawImage(i,0,0,t.w,t.h),t.blockCtx.drawImage(i,0,0,t.w,t.h);var e=t.block_x,s=t.block_y,n=t.r,r=t.L,a=s-2*n-1,c=t.blockCtx.getImageData(e,a,r,r);t.block.width=r,t.blockCtx.putImageData(c,0,a)}));this.img=i},drawBlock:function(){this.block_x=this.getRandomNumberByRange(this.L+10,this.w-(this.L+10)),this.block_y=this.getRandomNumberByRange(10+2*this.r,this.h-(this.L+10)),this.draw(this.canvasCtx,this.block_x,this.block_y,"fill"),this.draw(this.blockCtx,this.block_x,this.block_y,"clip")},draw:function(t,i,e,s){var n=this.l,r=this.r;t.beginPath(),t.moveTo(i,e),t.arc(i+n/2,e-r+2,r,.72*g,2.26*g),t.lineTo(i+n,e),t.arc(i+n+r-2,e+n/2,r,1.21*g,2.78*g),t.lineTo(i+n,e+n),t.lineTo(i,e+n),t.arc(i+r-2,e+n/2,r+.4,2.76*g,1.24*g,!0),t.lineTo(i,e),t.lineWidth=2,t.fillStyle="rgba(255, 255, 255, 0.7)",t.strokeStyle="rgba(255, 255, 255, 0.7)",t.stroke(),t[s](),t.globalCompositeOperation="destination-over"},createImg:function(t){var i=this,e=document.createElement("img");return e.crossOrigin="Anonymous",e.onload=t,e.onerror=function(){e.src=i.getRandomImg()},e.src=this.getRandomImg(),e},getRandomImg:function(){var t=this.imgs.length;return t>0?this.imgs[this.getRandomNumberByRange(0,t)]:"https://picsum.photos/300/150/?image="+this.getRandomNumberByRange(0,1084)},getRandomNumberByRange:function(t,i){return Math.round(Math.random()*(i-t)+t)},refresh:function(){this.reset(),this.$emit("refresh")},sliderDown:function(t){this.success||(this.originX=t.clientX,this.originY=t.clientY,this.isMouseDown=!0,this.timestamp=+new Date)},touchStartEvent:function(t){this.success||(this.originX=t.changedTouches[0].pageX,this.originY=t.changedTouches[0].pageY,this.isMouseDown=!0,this.timestamp=+new Date)},bindEvents:function(){var t=this;document.addEventListener("mousemove",(function(i){if(!t.isMouseDown)return!1;var e=i.clientX-t.originX,s=i.clientY-t.originY;if(e<0||e+38>=t.w)return!1;t.sliderLeft=e+"px";var n=(t.w-40-20)/(t.w-40)*e;t.block.style.left=n+"px",t.containerActive=!0,t.sliderMaskWidth=e+"px",t.trail.push(s)})),document.addEventListener("mouseup",(function(i){if(!t.isMouseDown)return!1;if(t.isMouseDown=!1,i.clientX===t.originX)return!1;t.containerActive=!1,t.timestamp=+new Date-t.timestamp;var e=t.verify(),s=e.spliced,n=e.TuringTest;if(s){if(-1===t.accuracy)return t.containerSuccess=!0,t.success=!0,void t.$emit("success",t.timestamp);n?(t.containerSuccess=!0,t.success=!0,t.$emit("success",t.timestamp)):(t.containerFail=!0,t.$emit("again"))}else t.containerFail=!0,t.$emit("fail"),setTimeout((function(){t.reset()}),1e3)}))},touchMoveEvent:function(t){if(!this.isMouseDown)return!1;var i=t.changedTouches[0].pageX-this.originX,e=t.changedTouches[0].pageY-this.originY;if(i<0||i+38>=this.w)return!1;this.sliderLeft=i+"px";var s=(this.w-40-20)/(this.w-40)*i;this.block.style.left=s+"px",this.containerActive=!0,this.sliderMaskWidth=i+"px",this.trail.push(e)},touchEndEvent:function(t){var i=this;if(!this.isMouseDown)return!1;if(this.isMouseDown=!1,t.changedTouches[0].pageX===this.originX)return!1;this.containerActive=!1,this.timestamp=+new Date-this.timestamp;var e=this.verify(),s=e.spliced,n=e.TuringTest;if(s){if(-1===this.accuracy)return this.containerSuccess=!0,this.success=!0,void this.$emit("success",this.timestamp);n?(this.containerSuccess=!0,this.success=!0,this.$emit("success",this.timestamp)):(this.containerFail=!0,this.$emit("again"))}else this.containerFail=!0,this.$emit("fail"),setTimeout((function(){i.reset()}),1e3)},verify:function(){var t=this.trail,i=t.reduce(v)/t.length,e=t.map((function(t){return t-i})),s=Math.sqrt(e.map(p).reduce(v)/t.length),n=parseInt(this.block.style.left),r=this.accuracy<=1?1:this.accuracy>10?10:this.accuracy;return{spliced:Math.abs(n-this.block_x)<=r,TuringTest:i!==s}},reset:function(){this.success=!1,this.containerActive=!1,this.containerSuccess=!1,this.containerFail=!1,this.sliderLeft=0,this.block.style.left=0,this.sliderMaskWidth=0;var t=this.w,i=this.h;this.canvasCtx.clearRect(0,0,t,i),this.blockCtx.clearRect(0,0,t,i),this.block.width=t,this.img.src=this.getRandomImg(),this.$emit("fulfilled")}}},w=(e(744),e(25)),y=Object(w.a)(b,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"slide-verify",style:{width:t.w+"px"},attrs:{id:"slideVerify",onselectstart:"return false;"}},[e("transition",{attrs:{name:t.isMouseDown?"el-fade-in-linear":"el-fade-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMouseDown,expression:"isMouseDown"}],staticClass:"containerCanvas"},[e("div",{class:{"slider-verify-loading":t.loadBlock}}),t._v(" "),e("canvas",{ref:"canvas",attrs:{width:t.w,height:t.h}}),t._v(" "),t.show?e("div",{staticClass:"slide-verify-refresh-icon",on:{click:t.refresh}}):t._e(),t._v(" "),e("canvas",{ref:"block",staticClass:"slide-verify-block",attrs:{width:t.w,height:t.h}})])]),t._v(" "),e("div",{staticClass:"slide-verify-slider",class:{"container-active":t.containerActive,"container-success":t.containerSuccess,"container-fail":t.containerFail}},[e("div",{staticClass:"slide-verify-slider-mask",style:{width:t.sliderMaskWidth}},[e("div",{staticClass:"slide-verify-slider-mask-item",style:{left:t.sliderLeft},on:{mousedown:t.sliderDown,touchstart:t.touchStartEvent,touchmove:t.touchMoveEvent,touchend:t.touchEndEvent}},[e("div",{staticClass:"slide-verify-slider-mask-item-icon"})])]),t._v(" "),e("span",{staticClass:"slide-verify-slider-text"},[t._v(t._s(t.sliderText))])])],1)}),[],!1,null,"a461c5b0",null);i.default=y.exports}}]);