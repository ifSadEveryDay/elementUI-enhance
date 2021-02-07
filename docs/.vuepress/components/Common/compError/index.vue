{<!--
 * @Descripttion :
 * @version      :
 * @Author       : 罗德远
 * @Date         : 2021-01-14 17:57:31
 * @LastEditors  : 罗德远
 * @LastEditTime : 2021-01-31 14:33:38
 * @FilePath     : \src\components\404.vue
-->
<template>
  <div class="flexContainer" v-bind="$attrs" v-on="$listeners">
    <div class="flexImg">
      <img :src="img[imgNum]" alt="404" />
    </div>
    <slot name="textTip">
      <div class="exceptionTip">
        <div>
          <h1 class="exceptionStatus">{{ exceptionStatus }}</h1>
        </div>
        <div class="exceptionMes">{{ exceptionMes }}</div>
        <el-button @click="gotoHome" type="primary" size="medium"
          >返回首页</el-button
        >
      </div>
    </slot>
  </div>
</template>

<script>
import img1 from './assets/img/exception1.png';
import img2 from './assets/img/exception2.png';
import img3 from './assets/img/exception3.png';
import img4 from './assets/img/exception4.png';
import img5 from './assets/img/exception5.png';
import img6 from './assets/img/exception6.png';
import img7 from './assets/img/exception7.png';
export default {
  name: 'compError',
  props: {
    imgNum: {
      type: Number,
      default: () => 6
    },
    exceptionStatus: {
      type: String,
      default: () => '404'
    },
    isRandom: {
      type: Boolean,
      default: () => false
    }
  },
  components: {

  },
  filters: {

  },
  data() {
    return {
      img: [img1, img2, img3, img4, img5, img6, img7]
    };
  },
  computed: {
    exceptionMes() {
      const objStatus = {
        404: '抱歉，你访问的页面不存在',
        403: '抱歉，你无权访问该界面',
        500: '抱歉服务器出错了哎'
      };
      return objStatus[this.exceptionStatus];
    }
  },
  created() {

  },
  mounted() {
    if (this.isRandom) {
      this.imgNum = this.getMathRoandom(0, this.img.length);
    }
  },
  watch: {

  },
  methods: {
    getMathRoandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    gotoHome() {
      this.$router.push('/');
    }
  },
  destroyed() {

  }
};
</script>
<style scoped lang="scss">
.flexContainer {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  .flexImg {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-left: 5%;
    margin-top: -8%;
    overflow: hidden;
  }
  .exceptionTip {
    flex: 1;
    margin: -00% 0 0 10%;
    .exceptionStatus {
      font-size: 5vw;
      font-weight: bold;
      color: #636d71;
      font-family: "Microsoft YaHei";
    }
    .exceptionMes {
      font-size: 2vw;
      font-weight: bold;
      color: #999C97;
      margin-bottom: 5%;
      font-family: "Microsoft YaHei";
    }
  }
}
</style>

