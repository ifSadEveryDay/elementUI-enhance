<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : 罗德远
 * @Date         : 2021-02-06 21:14:14
 * @LastEditors  : 罗德远
 * @LastEditTime : 2021-02-06 21:19:04
 * @FilePath     : \docs\.vuepress\components\Common\compSkeleton\skeletonItem.vue
-->
<template>
  <div>
    <div
      v-if="paragraph.type === 'row'"
      :class="paragraph.containerClass"
      class="ske-row-container"
    >
      <div
        class="ske ske-row"
        :style="row.rowStyle"
        v-for="row in paragraph.rows"
      >
        <skeleton-item :paragraph="row" :active="active"></skeleton-item>
      </div>
    </div>
    <div
      v-else-if="paragraph.type === 'col'"
      :class="paragraph.containerClass"
      class="ske-col-container"
    >
      <div
        class="ske ske-col"
        :style="col.colStyle"
        v-for="col in paragraph.cols"
      >
        <skeleton-item :paragraph="col" :active="active"></skeleton-item>
      </div>
    </div>
    <div
      v-else-if="paragraph.type === 'rect'"
      :class="paragraph.containerClass"
      class="ske-rect-container"
    >
      <div
        class="ske ske-rect"
        :class="{ 'ske-ani': active }"
        :style="paragraph.style"
      ></div>
    </div>
    <div
      v-else-if="paragraph.type === 'circle'"
      :class="paragraph.containerClass"
      class="ske-circle-container"
    >
      <div
        class="ske ske-circle"
        :class="{ 'ske-ani': active }"
        :style="paragraph.style"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skeletonItem',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    paragraph: {
      type: Object,
      default: () => { }
    }
  },
  components: {
  },
  filters: {

  },
  data () {
    return {

    };
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  destroyed () {

  },
};
</script>
<style scoped lang="scss">
</style>
