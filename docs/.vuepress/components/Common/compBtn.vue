
<template>
  <el-tooltip :content="content" v-bind="attrs">
    <el-popconfirm
      v-if="confirmType === 'pop'"
      v-bind="popConfig"
      @onConfirm="confirm"
      @onCancel="$emit('cancel')"
    >
      <el-button
        slot="reference"
        v-loading.fullscreen.lock="fullscreenLoadingStatus"
        v-bind="$attrs"
        :type="type"
        @click="handleClick"
      >
        <slot />
      </el-button>
    </el-popconfirm>
    <el-button
      v-else
      v-loading.fullscreen.lock="fullscreenLoadingStatus"
      v-bind="$attrs"
      :loading="loadingStatus"
      :type="type"
      :to="toPath"
      :isLink="isLink"
      @click="handleClick"
    >
      <slot />
    </el-button>
  </el-tooltip>
</template>
/*
* 新增功能
* 水波纹点击
* 防抖
* 点击确认弹框
* 文字提示
* 加载中
* link
 */
<script>
let debounceTimeFix
export default {
  name: 'compBtn',
  inheritAttrs: false,
  props: {
    content: {
      type: String,
      required: true,
      default: () => ''
    },
    tipConfig: {
      type: Object,
      default: null
    },
    debounce: {
      type: Boolean,
      default: false
    },
    debounceTime: {
      type: Number,
      default: () => 500
    },
    loading: {
      type: Boolean,
      default: false
    },
    fullscreenLoading: {
      type: Boolean,
      default: false
    },
    confirmType: {
      type: String,
      default: ''
    },
    popConfig: {
      type: Object,
      default: () => ({ title: '确定删除吗？' })
    },
    type: {
      type: String,
      default: ''
    },
    confirmConfig: {
      type: Object,
      default: () => ({})
    },
    isLink: {
      type: Boolean,
      default: false
    },
    toPath: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      loadingStatus: false,
      fullscreenLoadingStatus: false
    };
  },
  computed: {
    attrs() {
      return {
        effect: 'dark',
        placement: 'top',
        ...this.tipConfig
      };
    }
  },
  methods: {
    handleClick() {
      if (this.isLink) {
        this.$router.push(this.toPath);
        return false;
      }
      if (this.confirmType && this.confirmType === 'confirm') {
        this.messageConfirm();
        return;
      }
      if (!this.debounce) {
        if (this.loading) {
          this.loadingStatus = true;
        }
        if (this.fullscreenLoading) {
          this.fullscreenLoadingStatus = true;
        }
        this.$emit('click', () => {
          this.loadingStatus = false;
          this.fullscreenLoadingStatus = false;
        });
        return;
      }
      this.debounceClick();
    },
    messageConfirm() {
      const {
        message = '此操作将永久删除该数据, 是否继续?',
        title = '提示',
        confirmButtonText = '确定',
        cancelButtonText = '取消',
        type = 'warning'
      } = this.confirmConfig;
      this.$confirm(message, title, {
        confirmButtonText,
        cancelButtonText,
        type
      })
        .then(() => {
          this.confirm();
        })
        .catch(() => {
          this.$emit('cancel');
        });
    },
    confirm() {
      if (this.fullscreenLoading) {
        this.fullscreenLoadingStatus = true;
      }
      this.$emit('confirm', () => {
        this.fullscreenLoadingStatus = false;
      });
    }
  }
};
</script>
<style lang="scss">
.el-button {
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 11%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(12, 12);
    opacity: 0;
    transition: transform 0.6s, opacity 0.6s;
  }
  &:active::after {
    transform: scale(0, 0);
    opacity: 0.3;
    //设置初始状态
    transition: 0s;
  }
}
</style>
