<!--
 * @Descripttion :
 * @version      :
 * @Author       : 罗德远
 * @Date         : 2021-02-01 15:30:23
 * @LastEditors  : 罗德远
 * @LastEditTime : 2021-02-01 15:51:51
 * @FilePath     : \src\components\comEmpty\index.vue
-->
<template>
    <div v-bind="$attrs">
      <div>
        <img :src="randomUrl" alt="">
      </div>
      <span class="desText">{{desText}}</span>
    </div>
</template>

<script>
import defaultPng from './assets/empty-image-default.png'
import error from './assets/empty-image-error.png'
import empty from './assets/custom-empty-image.png'
export default {
    name: 'comEmpty',
    props: {
      desText: {
        type: String,
        default: '暂无数据'
      },
      imgList: {
        type: Array,
        default: ()=>[defaultPng, error, empty]
      }
    },
    components: {

    },
    filters: {

    },
    data () {
        return {

        }
    },
    computed: {
      randomUrl () {
        return this.imgList[this.getRandomNum(0, this.imgList.length)]
      }
    },
    created () {

    },
    mounted () {

    },
    watch: {

    },
    methods: {
      getRandomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }
    },
    destroyed () {

    }
}
</script>
<style scoped lang="scss">
.desText{
  display: block;
  margin-top:20px;
  color:#969686;
  font-family: "Microsoft YaHei";
  font-size:20px;
}
</style>
