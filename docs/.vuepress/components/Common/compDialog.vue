<!--
 * @Descripttion :
 * @version      :
 * @Author       : luoawai
 * @Date         : 2021-01-18 09:38:48
 * @LastEditors  : 罗德远
 * @LastEditTime : 2021-02-03 16:33:17
 * @FilePath     : \src\components\compDialog.vue
-->
<template>
  <div
  >
    <el-dialog
      v-dialogDrag
      ref="elDialog"
      :fullscreen="fullscreen"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :formData="formData"
      :BtnData="BtnData"
      :destroy-on-close="true"
      @close="close"
      v-on="$listeners"
      v-bind="$attrs"
      :custom-class="'customPoint'"
    >
      <template #title>
        <span style="font-size: 18px">{{ $attrs.title }}</span>
        <com-btn
          :content="fullscreen ? '退出全屏' : '全屏'"
          icon="el-icon-full-screen"
          class="el-dialog-header_full_btn"
          @click="fullscreen = !fullscreen"
          v-if="fullscreen"
        />
      </template>
      <slot name="body" v-bind:formData="formData"></slot>
      <span
        slot="footer"
        :class="[
          fullscreen ? 'el-dialog-footer_full_btn' : '',
          'dialog-footer',
        ]"
      >
        <slot name="footerBtn" v-bind:BtnData="BtnData">
          <el-button @click="$emit('update:dialogVisible', false)">{{
            cancelText
          }}</el-button>
          <el-button type="primary" @click="submit()">{{
            confirmText
          }}</el-button>
        </slot>
      </span>
    </el-dialog>
  </div>
</template>
/*
* 新增功能
* 拖拽
 */
<script>
import clickoutside from 'element-ui/lib/utils/clickoutside';
import comBtn from './compBtn';
export default {
  name: 'compDialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: () => false
    },
    cancelText: {
      type: String,
      default: () => '取 消'
    },
    confirmText: {
      type: String,
      default: () => '确 认'
    },
    formData: {
      type: [Array, Object],
      default: () => []
    },
    BtnData: {
      type: [Array],
      default: () => []
    },
    width: {
      type: String,
      default: '30%'
    }
  },
  directives: {
    clickoutside
  },
  components: { comBtn },
  data() {
    return {
      fullscreen: false
    };
  },
  computed: {

  },
  watch: {

  },
  mounted() {

  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$emit('update:dialogVisible', false);
        })
        .catch(_ => { });
    },
    close() {
      this.$emit('close');
      this.dialogClientX = 0;
      this.dialogClientY = 0;
    },
    submit() {
      this.$emit('submit');
    }
  }
};
</script>
<style lang="scss">
.el-dialog.customPoint {
  cursor: move;
  user-select: none;
}
</style>
<style lang="scss" scoped>
.el-dialog-header_full_btn {
  position: absolute;
  top: 20px;
  right: 50px;
  background: 0 0;
  outline: none;
  border: none;
  padding: 0;
  font-size: 16px;
}
</style>
