<template>
  <div >
    <el-badge :is-dot="isDot" class="item" v-if="imgArr.length===0 ">
      <el-avatar
        :src="src"
      ></el-avatar>
    </el-badge>
    <div v-else>
       <el-avatar
        v-for="(item,index) in showImgArr"
        :key="index"
        :style="'margin-left:'+index*-10+'px;z-index:'+(showImgArr.length-index)*100+';border:1px solid #FFF;position:relative'"
        :src="item"
      ></el-avatar>
      <el-avatar style="margin-left:-10px;border:1px solid #FFF;color:#fff;background:#ccc;">+{{restNum}}</el-avatar>
    </div>
  </div>
</template>
/*
* 新增功能
* 头像式组件
* 聚合头像
 */
<script>
export default {
  name: 'compAvatar',
  props: {
    src: {
      type: String,
      default: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    },
    imgArr: {
      type: Array,
      default: ()=>[]
    },
    isDot: {
      type: Boolean,
      default: true
    },
    isShowNum: {
      type: Number,
      default: 3
    }
  },
  components: {

  },
  filters: {

  },
  data() {
    return {

    };
  },
  computed: {
    showImgArr() {
      const deepImgArr = JSON.parse(JSON.stringify(this.imgArr));
      return deepImgArr.splice(0, this.isShowNum);
    },
    restNum() {
      return this.imgArr.length - this.isShowNum;
    }
  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {

  },
  destroyed() {

  }
};
</script>
<style  lang="scss" scoped>
/deep/.el-badge__content {
  background: #44b700;
  box-shadow: 0 0 2px rgb(189, 186, 186);
  &::after{
    content:'';
    width:100%;
    height: 100%;
    background: #44b700;
    border-radius: 50%;
    top: 0%;
    left:0%;
    position: absolute;
    animation: ripple 1.2s infinite ease-in-out,
  }
}
@keyframes ripple {
    0% {
      transform: scale(.8);
      opacity: 1
    }
    100% {
      transform: scale(2.4);
      opacity: 0,
    }
  }
/deep/.el-badge__content.is-dot {
  width: 10px;
  height: 10px;
}
/deep/ .el-badge__content.is-fixed {
  position: absolute;
  top: 80%;
  right: 10px;
  transform: translateY(-50%) translateX(100%);
}
</style>
