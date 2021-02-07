<!--
 * @Descripttion :
 * @version      :
 * @Author       : 罗德远
 * @Date         : 2021-01-31 16:55:07
 * @LastEditors  : 罗德远
 * @LastEditTime : 2021-02-01 09:22:16
 * @FilePath     : \src\components\compLogin\Code.vue
-->
<template>
 <div class="canvasStyle">
    <canvas ref="canvas" :width="w" :height="h" @click="Refresh"></canvas>
 </div>
</template>

<script>
const CodePool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
export default {
  name: 'canvasCode',
  props: {
    w: {
      type: Number,
      default: () => 130
    },
    h: {
      type: Number,
      default: () => 35
    },
    codeNum: {
      type: Number,
      default: () => 4
    }
  },
  components: {

  },
  filters: {

  },
  data() {
    return {
      canvasCtx: null,
      result: ''
    };
  },
  computed: {

  },
  created() {

  },
  mounted() {
    this.init();
  },
  watch: {

  },
  methods: {
    init() {
      this.canvasCtx = this.$refs.canvas.getContext('2d');;
      this.canvasCtx.fillStyle = this.getRandomColor(180, 230);
      this.canvasCtx.fillRect(0, 0, this.w, this.h);
      this.getText();
      this.getInterfere();
      this.getArc();
    },
    getText() {
      const resArray = [];
      for (let i = 0; i < this.codeNum; i++) {
        const code = CodePool[this.getRandomNum(0, CodePool.length)];
        const fontSize = this.getRandomNum(18, 40);
        const deg = this.getRandomNum(-30, 30);
        this.canvasCtx.font = fontSize + 'px Microsoft YaHei';
        this.canvasCtx.textBaseline = 'top';
        this.canvasCtx.fillStyle = this.getRandomColor(80, 150);
        this.canvasCtx.save();
        this.canvasCtx.translate(i * 30 + 15, 15);
        this.canvasCtx.rotate(deg * Math.PI / 180);
        this.canvasCtx.fillText(code, -5, -8);
        this.canvasCtx.restore();
        resArray.push(code);
      }
      this.result = resArray.join('').toLocaleLowerCase();
    },
    getRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    getRandomColor(min, max) {
      const r = this.getRandomNum(min, max);
      const g = this.getRandomNum(min, max);
      const b = this.getRandomNum(min, max);
      return `rgb(${r},${g},${b})`;
    },
    getInterfere() {
      for (let j = 0;j < 5;j++) {
        this.canvasCtx.beginPath();
        this.canvasCtx.moveTo(this.getRandomNum(0, this.w), this.getRandomNum(0, this.h));
        this.canvasCtx.lineTo(this.getRandomNum(0, this.w), this.getRandomNum(0, this.h));
        this.canvasCtx.strokeStyle = this.getRandomColor(180, 230);
        this.canvasCtx.closePath();
        this.canvasCtx.stroke();
      }
    },
    getArc() {
      for (let k = 0;k < 30;k++) {
        this.canvasCtx.beginPath();
        this.canvasCtx.arc(this.getRandomNum(0, this.w), this.getRandomNum(0, this.h), 1, 0, 2 * Math.PI);
        this.canvasCtx.closePath();
        this.canvasCtx.strokeStyle = this.getRandomColor(180, 230);
        this.canvasCtx.fill();
      }
    },
    Refresh() {
      this.init();
    }
  },
  destroyed() {

  }
};
</script>
<style scoped lang="scss">
.canvasStyle{
}
</style>
