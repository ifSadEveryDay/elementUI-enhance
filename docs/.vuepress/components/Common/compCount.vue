<!--
 * @Descripttion :
 * @version      :
 * @Author       : 罗德远
 * @Date         : 2021-02-05 16:51:30
 * @LastEditors  : 罗德远
 * @LastEditTime : 2021-02-07 09:20:22
 * @FilePath     : \docs\.vuepress\components\Common\compCount.vue
-->
<script>
import CountUp from 'countup.js'
export default {
  name: 'Countup',
  mounted () {
    this.$nextTick(() => {
      this._countup = new CountUp(this.$el, this.startVal, this.endVal, this.decimals, this.duration, this.options)
      if (this.start) {
        this._countup.start()
      }
    })
  },
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    start: {
      type: Boolean,
      default: true
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    // number of decimal places in number
    decimals: {
      type: Number,
      default: 0
    },
    // duration in seconds
    duration: {
      type: Number,
      default: 2
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    CountStyle:{
      type: Object,
      default:()=>{}
    }
  },
  render (h) {
    return h(this.tag, {}, [this.startVal])
  },
  watch: {
    start (val) {
      if (val) {
        this._countup.start()
      }
    },
    endVal (val) {
      this._countup.update(val)
    }
  }
}
</script>
<style scoped lang="scss">

</style>
