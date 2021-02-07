<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    :label-width="labelWidth"
    class="baseplat-form"
    :style="{ width: formWidth }"
  >
    <ul>
      <!-- 标题 -->
      <slot name="title" v-bind:title="title">
        <ol class="baseplat-form-title" v-if="title">
          <span>{{ title }}</span>
        </ol>
      </slot>

      <!-- 内容 -->
      <ol v-for="(olItem, i) in formOptions" :key="i">
        <!-- 小标题，传入String类型 -->
        <template v-if="typeof olItem === 'string'">
          <div class="subtitile"><span>&nbsp;</span> {{ olItem }}</div>
        </template>
        <!-- 需要传入Object类型 -->
        <template v-if="typeof olItem !== 'string'">
          <el-form-item
            v-for="item in olItem"
            :key="item.field"
            :label="item.label"
            :prop="item.field"
          >
            <!-- 输入框，{field, label, type, isDisabled?, placeholder?,show-password?,} -->
            <el-input
              v-if="item.type === 'input'"
              v-model="form[item.field]"
              :disabled="item.isDisabled"
              :placeholder="item.placeholder || '请输入'"
              :show-password="item.showPassword || false"
              :labelWidth="item.labelWidth"
            ></el-input>
            <!-- 选择器 {field: '', label: '', type: '', options: {value: '', label: ''}, isDisabled?, placeholder? } -->
            <el-select
              v-else-if="item.type === 'select'"
              v-model="form[item.field]"
              :disabled="item.isDisabled"
              :placeholder="item.placeholder"
            >
              <el-option
                v-for="option in item.options"
                :label="option.label || option"
                :value="option.value || option"
                :key="option.id || option.value || option"
              ></el-option>
            </el-select>
            <!-- 多重选择器 {field, label, type, options{value，label}, isDisabled?, placeholder? } -->
            <el-select
              v-else-if="item.type === 'multipleSelect'"
              v-model="form[item.field]"
              multiple
              :collapse-tags="item.isTags || false"
              :disabled="item.isDisabled"
              :placeholder="item.placeholder"
            >
              <el-option
                v-for="option in item.options"
                :disabled="item.isSubDisabled"
                :label="option.label || option"
                :value="option.value || option"
                :key="option.id || option.value || option"
              ></el-option>
            </el-select>
            <!-- 级联选择器 {field, label, type, options{value，label},config isDisabled?, } -->
            <el-cascader
              v-else-if="item.type === 'cascader'"
              v-model="form[item.field]"
              :disabled="item.isDisabled"
              :placeholder="item.placeholder"
              :collapse-tags="item.isTags"
              :options="item.options"
              :props="{ expandTrigger: 'hover', ...item.config }"
              :show-all-levels="item.showAllLevels"
              clearable
            ></el-cascader>
            <!-- 多选框 {field, label, type, options{value，label} } -->
            <el-checkbox-group
              v-else-if="item.type === 'checkbox'"
              v-model="form[item.field]"
            >
              <el-checkbox
                v-for="option in item.options"
                :label="option.value || option"
                :name="item.field"
                :key="option.id || option.value || option"
                >{{ option.label || option }}
              </el-checkbox>
            </el-checkbox-group>
            <!-- 单选框 {field, label, type, options{value，label} } -->
            <el-radio-group
              v-else-if="item.type === 'radio'"
              v-model="form[item.field]"
              :disabled="item.isDisabled"
            >
              <el-radio
                v-for="option in item.options"
                :label="
                  typeof option.value === 'undefine' ? option : option.value
                "
                :key="option.value + '' || option"
                >{{ option.label || option }}</el-radio
              >
            </el-radio-group>
            <!-- 日期/年份选择器 {field, label, type,format,picker-options} -->
            <el-date-picker
              v-else-if="
                item.type === 'date' ||
                  item.type === 'year' ||
                  item.type === 'datetime'
              "
              v-model="form[item.field]"
              :type="item.type"
              :placeholder="item.placeholder"
              :disabled="item.isDisabled"
              :format="item.format"
              :separator="item.separator || '-'"
              :value-format="
                item.type === 'date'
                  ? 'yyyy-MM-dd HH:mm:ss'
                  : item.type === 'datetime'
                  ? item.format
                  : item.valueFormat
              "
              :picker-options="
                item.type === 'year' ? pickerOptionsYear : pickerOptionsDate
              "
            >
            </el-date-picker>
            <!-- 带提示信息的输入框 {field, label, type, hintText, isDisabled?, placeholder? } -->
            <div v-else-if="item.type === 'hintInput'" class="hint-input">
              <el-input
                v-model="form[item.field]"
                :disabled="item.isDisabled"
                :placeholder="item.placeholder"
              ></el-input>
              <p>{{ item.hintText }}</p>
            </div>
            <!-- 文本框 {field, label, type, rows? } -->
            <el-input
              v-else-if="item.type === 'textInput'"
              v-model="form[item.field]"
              type="textarea"
              :disabled="item.isDisabled"
              :placeholder="item.placeholder || '请输入'"
              :rows="item.rows || 3"
            ></el-input>
            <!-- 附加自定义输入的单选框 {field, label, type, options{label}, specialField, unit } -->
            <el-radio-group
              v-else-if="item.type === 'customizableRadio'"
              v-model="form[item.field]"
              :disabled="item.isDisabled"
            >
              <el-radio
                v-for="option in item.options"
                :label="option.value || option"
                :key="option.id || option.value || option"
                >{{ option.label || option }}</el-radio
              >
              <el-input
                :disabled="form[item.field] !== item.special || item.isDisabled"
                v-model="form[item.specialField]"
                size="mini"
                class="radio-input"
              >
                <template slot="append">{{ item.unit }}</template>
              </el-input>
            </el-radio-group>
            <slot
              v-else-if="item.type === 'custom'"
              :name="item.customType || item.type"
              v-bind:form="form"
              v-bind:rules="rules"
              v-bind:itemData="item"
            ></slot>
          </el-form-item>
        </template>
      </ol>
      <!-- 页尾 -->
      <ol>
        <slot name="footer" v-bind:form="form"></slot>
      </ol>
    </ul>
  </el-form>
</template>

<script>
export default {
  name: 'compForm',
  props: {
    // 标题
    title: {
      type: String,
      default: () => ''
    },
    // 表单配置项，field字段用于关联form与rules
    formOptions: {
      type: Array,
      default: () => []
    },
    // 表单
    form: {
      type: Object,
      default: () => {}
    },
    // 检验规则
    rules: {
      type: Object,
      default: () => {}
    },
    // label宽
    labelWidth: {
      type: String,
      default: () => 'auto'
    },
    formWidth: {
      type: String
    }
  },
  data() {
    return {
      pickerOptionsYear: {
        disabledDate(time) {
          return time.getFullYear() < '1949';
        }
      },
      pickerOptionsDate: {
        disabledDate(time) {
          return time.getTime() < new Date('1949-01-01').getTime();
        }
      }
    };
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.baseplat-form {
  width: 100%;
  height: 100%;
  .baseplat-form-title {
    display: flex;
    justify-content: center;
    font-size: 26px;
    color: #666666;
    margin-bottom: 20px;
  }
  ol {
    display: flex;
    .subtitile {
      height: 20px;
      line-height: 20px;
      font-size: 18px;
      font-weight: 400;
      color: #666666;
      margin-bottom: 20px;
      span {
        display: inline-block;
        width: 3px;
        background: #467cd4;
        margin-right: 10px;
      }
    }
    .el-form-item {
      flex: 1;
      margin: 10px;
    }
    .hint-input {
      p {
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        line-height: 24px;
        height: 24px;
      }
    }
    .el-select {
      width: 100%;
    }
    .el-date-editor {
      width: 100%;
    }
    .el-cascader {
      width: 100%;
    }

    ::v-deep .el-form-item__label {
      font-size: 16px;
      color: rgba(102, 102, 102, 1);
      white-space: nowrap;
    }
    .radio-input {
      // flex: 1;
      width: 120px;
    }
    .el-radio {
      margin-right: 38px;
    }
    .el-form-item__content .el-input-group {
      vertical-align: baseline !important;
    }
  }
  .read-only {
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px 80px;

    span {
      display: inline-block;
    }
  }
  .from-bottom {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
