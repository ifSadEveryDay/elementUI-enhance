<!--
 * @Descripttion :
 * @version      :
 * @Author       : 罗德远
 * @Date         : 2021-02-01 13:27:30
 * @LastEditors  : 罗德远
 * @LastEditTime : 2021-02-06 23:06:58
 * @FilePath     : \docs\.vuepress\components\Common\compStep\index.vue
-->
<template>
  <div class="sticky">
    <el-steps
      :active="active"
      finish-status="success"
      style="margin-top: 20px"
      direction="vertical"
      v-bind="$attrs"
    >
      <el-step
        v-for="(item, index) in StepContainer"
        :title="item.title"
        :icon="item.icon"
        :description="item.description"
        :key="index"
        @click.stop.native="scrollLoad(item.scroll)"
      >
      </el-step>
    </el-steps>
  </div>
</template>
/*
* 粘性布局
 */
<script>
import QProgress from 'qier-progress';
let qprogress;
export default {
  name: 'compStep',
  props: {
    StepContainer: {
      type: Array,
      default: () => [
        { title: '步骤一', icon: 'el-icon-edit', description: '', scroll: 0 },
        { title: '步骤二', icon: 'el-icon-upload', description: '', scroll: 200 },
        {
          title: '步骤三',
          icon: 'el-icon-picture',
          description: '',
          scroll: 400
        }
      ]
    },
    nProcessConfig: {
      type: Object,
      default: () => {

      }
    }
  },
  components: {

  },
  filters: {

  },
  data () {
    return {
      objMap: null,
      active: 1
    };
  },
  computed: {

  },
  created () {
  },
  mounted () {
    qprogress = new QProgress({
      height: 3,
      trickle: false,
      ...(this.nProcessConfig)
    });
    window.addEventListener('scroll', this.handleScroll);
    this.$on('hook:beforeDestroy', function () {
      window.removeEventListener('scroll', this.handleScroll);
      qprogress.set(1);
    });
    this.init();
  },
  watch: {
    active: {
      handler (newVal, oldVal) {
        if (newVal !== oldVal) {
          // 进度条
          qprogress.set(newVal * 1 / this.StepContainer.length);
        }
      }
    }
  },
  methods: {
    init () {
      this.objMap = new Map();
      this.StepContainer.forEach((item, index) => {
        this.objMap.set(item.scroll, () => {
          // Step进度
          this.active = index + 1;
        });
      });
    },
    scrollLoad (top) {
      window.scrollTo(0, top);
    },
    handleScroll () {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      this.objMap.forEach((item, index) => {
        if (scroll >= index) {
          this.objMap.get(index)();
        }
      });
    }
  },
  destroyed () {

  }
};
</script>
<style scoped lang="scss">
.sticky {
  position: sticky;
  top: 0px;
  height: 300px;
}
::v-deep.el-step {
  cursor: pointer;
}
</style>
