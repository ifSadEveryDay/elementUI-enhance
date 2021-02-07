<!--
 * @Descripttion :
 * @version      :
 * @Author       : 罗德远
 * @Date         : 2021-02-04 09:20:25
 * @LastEditors  : 罗德远
 * @LastEditTime : 2021-02-06 21:16:45
 * @FilePath     : \docs\.vuepress\components\Common\compSkeleton\index.vue
-->
<template>
  <div class="skeleton-wrapper">
    <div class="skeleton-content">
      <skeleton-item 
      :paragraph="paragraph" 
      :active="active">
      </skeleton-item>
    </div>
  </div>
</template>

<script>
import skeletonItem from './skeletonItem.vue'

export default {
  name: 'Skeleton',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    paragraph: {
      type: Object,
      default: ()=>{}
    }
  },
   components: {
     skeletonItem
  },
};
</script>

<style>
  @keyframes skeleton-stripes {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 20rem 0;
    }
  }

  .ske-rect, .ske-circle {
    background-size: 400% 100%;
    background-color: #f2f2f2;
    margin: 0;
  }

  .ske-rect.ske-ani, .ske-circle.ske-ani {
    animation: skeleton-stripes 1s linear infinite;
    background: #F1F3F4 linear-gradient(90deg, rgba(255, 255, 255, 0.39) 25%, transparent 25%);
    background-size: 20rem 20rem;
  }

  .ske-col-container {
    display: flex;
  }

  .ske-col, .ske-row {
    margin: 0;
  }

  .ske-circle {
    border-radius: 100%;
  }
</style>
