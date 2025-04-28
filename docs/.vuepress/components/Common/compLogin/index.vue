
<template>
  <div>
    <com-form
      ref="comForm"
      :form="form"
      :rules="rules"
      :formOptions="formOptions"
      v-bind="$attrs"
    >
      <template #Code="{ form, itemData }">
        <div class="flexStyle">
          <el-input
            v-model="form[itemData.field]"
            :disabled="itemData.isDisabled"
            :placeholder="itemData.placeholder || '请输入验证码'"
            props="CodeShow"
            style="margin-right: 10px;margin-left:-22%;"
          ></el-input>
          <canvas-code ref="codeRes" class="canvasFixStyle"></canvas-code>
        </div>
      </template>
      <template #verifyCode="{ form, itemData }">
        <div class="verifyCodeContainer">
          <verify-code
            class="verifyCode"
            ref="verifyCode"
            @success="onSuccess"
          ></verify-code>
          <span v-if="success">
            <i class="el-icon-circle-check iconStyle"></i>
          </span>
        </div>
      </template>
      <template #footer="{ form }">
        <div class="BtnStyle">
          <com-btn type="primary" :content="'登录'">登录</com-btn>
        </div>
      </template>
    </com-form>
  </div>
</template>
/*
* canvas 图片验证码模式
* 滑动验证模式
 */
<script>
import canvasCode from './code';
import comForm from '../compForm';
import comBtn from '../compBtn';
import verifyCode from './verify';
export default {
  name: 'LoginForm',
  props: {
    form: {
      type: Object,
      default: () => {

      }
    },
    rules: {
      type: Object,
      default: () => {
      }
    },
    // label宽
    labelWidth: {
      type: String,
      default: () => 'auto'
    },
    formWidth: {
      type: String
    },
    formOptions: {
      type: Array,
      default: () => [
        
      ]
    },
    isCheck: {
      type: Boolean,
      default: () => false
    },
    isCheckName: {
      type: String,
      default: () => 'Code'
    }
  },
  components: {
    comForm,
    canvasCode,
    comBtn,
    verifyCode
  },
  filters: {

  },
  data () {
    return {
      success: false
    };
  },
  computed: {
  },
  created () {
    if (this.isCheck) {
      switch (this.isCheckName) {
        case 'Code':
          this.formOptions.push(
            [
              {
                field: 'CodeShow',
                type: 'custom',
                customType: 'Code',
                label: '验证码',
                placeholder: '请输入验证码'
              }
            ]
          );
          break;
        case 'verifyCode':
          this.formOptions.push(
            [
              {
                field: 'verifyCode',
                type: 'custom',
                customType: 'verifyCode',
                label: '验证码'
              }
            ]
          );
          break;
        default:
          break;
      }

    }
  },
  mounted () {
  },
  watch: {

  },
  methods: {
    onSuccess () {
      this.success = true;
    }
  },
  destroyed () {

  }
};
</script>
<style scoped lang="scss">
.comp-form {
  width: 100%;
  height: 100%;
  .comp-form-title {
    display: flex;
    justify-content: center;
    font-size: 26px;
    color: #666666;
    margin-bottom: 20px;
  }
  .codeStyle {
    width: 100%;
  }
}
.flexStyle {
  display: flex;
  justify-content: space-around;
}
.BtnStyle {
  width: 100%;
  display: flex;
  margin-top: 10px;
  ::v-deep.el-button {
    margin-left:2%;
    width: 52%;
  }
}
.verifyCodeContainer {
  display: flex;
  width: 100%;
}
.verifyCode {
  margin-top: -15px;
}
.iconStyle {
  color: #467cd4;
  font-size: 20px;
  margin-left: 40%;
  margin-top: 60%;
}
.canvasFixStyle{
  margin-left:-40%;
}
</style>
