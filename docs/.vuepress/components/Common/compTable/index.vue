<template>
  <div class="comp-table">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      highlight-current-row
      stripe
      style="width: 100%"
      :default-sort="defaultSort"
      row-key="id"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      v-on="$listeners"
      @cell-click="handleCellClick"
    >
      <!-- 多选框 -->
      <el-table-column v-if="selection" type="selection" width="55">
      </el-table-column>
      <!-- 序号 -->
      <el-table-column
        v-if="index"
        type="index"
        label="序号"
        width="50"
        align="center"
      >
      </el-table-column>
      <!-- 内容项 -->
      <el-table-column
        v-for="(item, index) in tableItems"
        :prop="item.name"
        :label="item.label"
        :sortable="item.sortable"
        :key="item.name + index"
        :width="item.width"
        align="center"
        :sort-by="item.sortBy"
        show-overflow-tooltip
      >
        <!-- <template slot="header" slot-scope="scope">
          <span>{{ item.label }}</span>
          <span class="caret-wrapper"
            ><i class="sort-caret ascending" @click="addClassIconTop"></i
            ><i class="sort-caret descending" @click="addClassIconBottom"></i
          ></span>
        </template> -->
        <template slot-scope="scope">
          <!--文本转动态文本框 -->
          <span
            class="item-content"
            v-if="item.type === 'string'"
            :class="
              (item.style && item.style[scope.row[item.name]]) || 'default'
            "
            :title="scope.row[item.name]"
          >
            <span v-if="!scope.row.isedit">
              {{
                item.formatter
                  ? formatCell(scope.row[item.name], item.formatter)
                  : scope.row[item.name]
              }}
            </span>
            <el-input
              v-model="scope.row[item.name]"
              v-else
              @keyup.enter.native.stop="submitSave(scope.row, scope.$index)"
            >
            </el-input>
          </span>
          <!-- link -->
          <span class="item-content" v-if="item.type === 'href'">
            <a :href="scope.row[item.name]" target="_blank" class="hrefColor">{{
              scope.row[item.name]
            }}</a>
          </span>
          <!-- 多图显示 -->
          <span
            v-if="item.type === 'img'"
            class="img-type"
            @click="visible = true"
          >
            <template v-for="(item, index) in scope.row[item.name]">
              <el-popover
                placement="right"
                title=""
                trigger="hover"
                @click.native="item.visible = true"
                :key="index"
              >
                <img
                  :src="item.url"
                  style="max-width: 200px; max-height: 100px"
                />
                <img
                  slot="reference"
                  :src="item.url"
                  :alt="item.title"
                  style="max-height: 50px; max-width: 130px"
                />
              </el-popover>
              <transition name="fade" :key="item.url">
                <com-dialog
                  ref="dialogRef"
                  :title="item.title"
                  :dialogVisible.sync="item.visible"
                  :formData="item"
                  center
                  :key="item.title"
                  @close="initImg"
                  style="position: relative"
                >
                  <template #body="{ formData }">
                    <img
                      :src="formData.url"
                      ref="imgRef"
                      @mousedown="mousedown"
                      @mouseup="mouseUp"
                      @mousemove="moveFunc"
                      @mousewheel="scrollFunc"
                      class="imgStyle"
                      :style="
                        'transform: scale(' +
                        imgScale +
                        ') rotate(' +
                        imgRotate +
                        'deg);margin-top:' +
                        imgTop +
                        'px;margin-left:' +
                        imgLeft +
                        'px;max-height:300px;max-width:400px;'
                      "
                    />
                  </template>
                  <template #footerBtn>
                    <div class="imgIconOprate">
                      <div>
                        <i
                          class="el-icon-zoom-in"
                          @click.stop="scaleFunc(0.15)"
                        ></i>
                      </div>
                      <div>
                        <i
                          class="el-icon-zoom-out"
                          @click.stop="scaleFunc(-0.15)"
                        ></i>
                      </div>
                      <div>
                        <i
                          class="el-icon-refresh-right"
                          @click.stop="rotateFunc(90)"
                        ></i>
                      </div>
                      <div>
                        <i
                          class="el-icon-refresh-left"
                          @click.stop="rotateFunc(-90)"
                        ></i>
                      </div>
                      <div>
                        <i class="el-icon-info" @click.stop="initImg"></i>
                      </div>
                    </div>
                  </template>
                </com-dialog>
              </transition>
            </template>
          </span>
          <!-- 文字 tableData对应项应为string -->
          <span
            class="item-content"
            v-if="!item.type"
            :class="
              (item.style && item.style[scope.row[item.name]]) || 'default'
            "
            :title="scope.row[item.name]"
          >
            {{
              item.formatter
                ? formatCell(scope.row[item.name], item.formatter)
                : scope.row[item.name]
                ? scope.row[item.name]
                : "-"
            }}
            <i
              class="el-icon-document-copy iconClass"
              v-if="item.copy"
              @click="copyToClipboard(scope.row[item.name])"
            ></i>
          </span>
          <!-- 开关 tableData对应项应为Boolean -->
          <span v-else-if="item.type === 'switch'">
            <el-switch v-model="scope.row[item.name]"></el-switch>
          </span>
          <!-- 输入框 tableData对应项应为Object{ value, clearable = true, default? } -->
          <span v-else-if="item.type === 'input'">
            <el-input
              size="medium"
              v-model="scope.row[item.name].value"
              :placeholder="scope.row[item.name].default"
              :clearable="scope.row[item.name].clearable || true"
              :disabled="scope.row[item.name].isDisabled"
            ></el-input>
          </span>
          <!-- 下拉框 tableData对应项应为Object{ value, options{ label, value },clearable = true, default? }-->
          <span v-else-if="item.type === 'multSelect'">
            <el-select
              size="medium"
              v-model="scope.row[item.name].value"
              :placeholder="scope.row[item.name].default"
              :clearable="scope.row[item.name].clearable || true"
              :disabled="scope.row[item.name].isDisabled"
              multiple
              collapse-tags
            >
              <el-option
                v-for="option in scope.row[item.name].options"
                :label="option.label || option"
                :value="option.value || option"
                :key="option.value || option"
              ></el-option>
            </el-select>
          </span>
          <span v-else-if="item.type === 'select'">
            <el-select
              size="medium"
              v-model="scope.row[item.name]"
              :placeholder="scope.row[item.name].default"
              :clearable="scope.row[item.name].clearable || true"
              :disabled="scope.row[item.name].isDisabled"
            >
              <el-option
                v-for="option in item.options"
                :label="option.label || option"
                :value="option.value || option"
                :key="option.value || option"
              ></el-option>
            </el-select>
          </span>
          <span v-else-if="item.type === 'uniqueSelect'">
            <el-select
              size="medium"
              v-model="scope.row[item.name]"
              :placeholder="scope.row[item.name].default"
              :clearable="scope.row[item.name].clearable || true"
              @change="changeRow"
            >
              <el-option
                v-for="option in uniqueSelectData"
                :label="option.label || option"
                :value="option.value || option"
                :key="option.value || option"
                :disabled="option.disabled"
              ></el-option>
            </el-select>
          </span>
          <!-- 显示弹窗 -->
          <span v-else-if="item.type === 'modal'">
            <slot :name="item.customType || item.type" v-bind:row="scope.row">
              {{ scope.row[item.name] }}
              <!-- <el-button type="text" @click="clickedItem(scope.row)">
                {{ scope.row[item.name] }}
              </el-button>
              <el-button type="text" @click="deleteItem(scope.row)">
                删除
              </el-button> -->
            </slot>
          </span>
          <!-- 自定义内容 -->
          <span v-else-if="item.type === 'custom'">
            <slot
              :name="item.customType || item.type"
              v-bind:row="scope.row"
            ></slot>
          </span>
        </template>
      </el-table-column>
      <!-- 操作 [{options{text,icon,type},label,width,}]-->
      <el-table-column
        v-if="buttonItems"
        :label="buttonItems.label"
        align="center"
        :width="buttonItems.width"
      >
        <template slot-scope="scope">
          <slot name="buttonItem" v-bind:row="scope.row">
            <div class="table-button">
              <el-button
                type="text"
                v-for="item in buttonItems.options"
                :class="item.type"
                :key="item.text || item.icon"
                @click="handleClick(item.cb, scope.row, scope.$index)"
              >
                <i :class="item.icon"></i>
                {{ distinguishCode(scope.row, item) }}
              </el-button>
            </div>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
/*
  新增功能
  点击行，勾选行，行高亮
  点击文本行后图标复制到剪切板
  文本格式化增强
  支持图片预览
  支持行列拖拽(修复版本)
 */
<script>
import comDialog from '../compDialog';
import {addCalss, removeClass} from 'element-ui/lib/utils/dom';
import { isInContainer } from 'element-ui/src/utils/dom';
import NP from 'number-precision';
import { formatDate } from 'element-ui/lib/utils/date-util';
import Sortable from 'sortablejs';
export default {
  name: 'compTable',
  components: { comDialog },
  props: {
    // 是否多选
    selection: {
      type: Boolean,
      default: () => false
    },
    // 是否展示序号
    index: {
      type: Boolean,
      default: () => false
    },
    // 列表配置项 [{name,label,sortable?,style?,width? }]
    tableItems: {
      type: Array,
      default: () => []
    },
    // 操作按钮
    buttonItems: {
      type: Object
    },
    // 列表内容
    tableData: {
      type: Array,
      default: () => [
      ]
    },
    uniqueSelectData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showId: '',
      visible: false,
      defaultSort: {},
      clientX: 0,
      clientY: 0,
      imgScale: 1,
      imgTop: 0,
      imgLeft: 0,
      imgRotate: 0,
      canDrag: false
    };
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.rowDrop();
    this.columnDrop();
  },
  methods: {
    // 行拖拽
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody');
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          // console.log('newIndex, oldIndex : ', newIndex, oldIndex);
          // console.log(_this.tableData[newIndex]);
          // // const currRow = _this.tableData.splice(oldIndex, 1)[0];
          // // const currRow = _this.tableData.splice(oldIndex, 1)[0];
          // // console.log('currRow: ', currRow);
          // // _this.tableData.splice(newIndex, 0, currRow);
          // _this.$forceUpdate();
        }
      });
    },
    // 列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr');
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          if (evt.oldIndex === 4) return false;
          const oldItem = this.tableItems[evt.oldIndex - 1];
          console.log('oldItem: ', oldItem, evt.newIndex, evt.oldIndex);
          this.tableItems.splice(evt.oldIndex - 1, 1);
          this.tableItems.splice(evt.newIndex - 1, 0, oldItem);
        }
      });
    },
    initImg() {
      this.imgScale = 1;
      this.imgRotate = 0;
      this.imgTop = 0;
      this.imgLeft = 0;
    },
    submitSave(data, index) {
      this.$emit('submitSave', { data, index });
    },
    formatCell(cellValue, formatter) {
      switch (formatter) {
        case 'date':
          return formatDate(cellValue, 'yyyy-MM-dd');
        case 'datetime':
          return formatDate(cellValue, 'yyyy-MM-dd HH:mm:ss');
        case 'time':
          return formatDate(cellValue, 'HH:mm:ss');
        case 'date-hm':
          return formatDate(cellValue, 'yyyy-MM-dd HH:mm');
        case 'money': // 金额三位分割
          return cellValue.toLocaleString();
        case 'point2': // 保留两位小数
          return NP.round(cellValue, 2).toFixed(2);
        case 'rmb': // 人民币分变成元
          return NP.round(NP.divide(cellValue, 100), 2);
        case 'yuan':
          return cellValue && `￥${cellValue}`;
        case 'percent': // 小数转百分比
          return NP.round(NP.times(cellValue, 100), 2);
        default:
          return cellValue;
      }
    },
    mousedown(e) {
      e = e || window.event;
      this.clientX = e.clientX;
      this.canDrag = true;
      console.log('clientX: ', this.clientX);
      this.clientY = e.clientY;
      this.$refs.imgRef.onmousemove = this.moveFunc;
    },
    mouseUp(e) {
      e = e || window.event;
      this.canDrag = false;
    },
    moveFunc(e) {
      e = e || window.event;
      e.preventDefault();
      if (this.canDrag) {
        console.log(e);
        if (isInContainer(e.target, e.path[2])) {
          const movementX = e.clientX - this.clientX;
          console.log('movementX: ', movementX);
          const movementY = e.clientY - this.clientY;
          this.imgLeft += movementX;
          this.imgTop += movementY;
          this.clientX = e.clientX;
          this.clientY = e.clientY;
        } else {
          this.canDrag = false;
          this.initImg();
          this.$message.error('不能拖拽出弹窗框哦！');
        }
      } else {
        return false;
      }
      // } else {
      //   this.$message.error('不能拖拽出弹窗框哦！');
      // }

    },
    scaleFunc(num, bool = false) {
      if (this.imgScale > 2 && num > 0) return;
      if (bool) {
        this.imgScale = num;
      } else {
        this.imgScale += num;
      }
    },
    rotateFunc(deg) {
      this.imgRotate += deg;
    },
    scrollFunc(e) {
      e = e || window.event;
      // e.returnValue = false // ie
      // 火狐下没有wheelDelta，用detail代替，由于detail值的正负和wheelDelta相反，所以取反
      e.delta = e.wheelDelta || -e.detail;
      console.log('e.delta: ', e.delta);
      e.preventDefault();
      if (e.delta > 0) {
        this.scaleFunc(0.05);
      }
      if (e.delta < 0) {
        this.scaleFunc(-0.05);
      }
    },
    copy(row, column, cell) {
      if (column.type === 'default') {
        const val = cell.querySelector('.cell').innerText;
        this.copyToClipboard(val);
      }
    },
    copyToClipboard(textToCopy) {
      if (!textToCopy || textToCopy === '-') {
        return;
      }
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.value = textToCopy;
      input.select();
      document.execCommand('Copy');
      input.remove();
      this.$message.success('复制成功：' + textToCopy);
    },
    // 单击单元格
    handleCellClick(row, column, cell, e) {
      this.$refs.multipleTable.toggleRowSelection(row);
    },
    distinguishCode(tableData, itemData) {
      // hack
      switch (itemData.cb) {
        case 'audit':
          return tableData.current_status &&
            tableData.current_status === '待审核'
            ? itemData.text
            : '';
        case 'deleteApplyCart':
          return tableData.status && tableData.status === '审核中'
            ? itemData.text
            : '';
        default:
          return itemData.text;
      }
    },
    changeRow(data) {
      console.log('data: ', data);
      this.uniqueSelectData = this.uniqueSelectData.reduce((arr, item, index) => {
        if (item.label == data) {
          item.disabled = true;
        }
        arr.push(item);
        return arr;
      }, []);
    },
    // 操作按钮回调
    handleClick(cb, row, index) {
      this.$emit('handleClick', { cb: cb, row: row, index: index });
    },
    // 显示弹窗显示操作
    clickedItem(item) {
      this.$emit('clickedItem', item);
    },
    // 删除
    deleteItem(item) {
      this.$emit('deleteItem', item);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/table{
  margin:0  !important;
}
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.comp-table {
  width: 100%;
  height: calc(100% - 56px);
  overflow: auto;
  .table-button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .default {
    color: #666666;
  }
  .danger {
    color: #ea5857;
  }
  .info {
    color: #999899;
  }
  .primary {
    color: #467cd4;
  }
  .item-content {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .img-type {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .hrefColor {
    color:#467cd4;
  }
  .iconClass {
    color: #467cd4;
  }
  .imgIconOprate {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(140, 143, 138);
    border-radius: 20px;
    color: white;
    width: 12%;
    height: 40px;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.imgStyle {
  position: absolute;
  top: 20%;
  left: 30%;
}
::v-deep .el-dialog__body {
  min-height: 400px;
}
.headerStyle {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.iconSearch {
  cursor: pointer;
}
</style>

<style lang="scss">
body .el-table th.gutter{
    display: table-cell!important;
}
 
body .el-table colgroup.gutter{
    display: table-cell!important;
}
.el-table--border th.gutter:last-of-type {
    display: block!important;
    width: 17px!important;
}
.comp-table {
  .el-table-column--selection .cell {
    padding-left: 0.875rem !important;
    padding-right: 0.875rem !important;
  }
  .el-table th {
    background: #fafafa;
  }
}
.el-button:focus {
  outline: none;
}
</style>
