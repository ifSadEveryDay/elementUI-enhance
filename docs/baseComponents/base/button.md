# 按钮
---
::: demo 默认特性：增加水波纹点击效果，TIp文字提示
```html
<template>
  <div class="Btn">
  <Common-compBtn
  type="success"
  :content="'成功按钮'"
  >成功按钮</Common-compBtn>
  <Common-compBtn
  type="primary"
  :content="'主要按钮'"
  >主要按钮</Common-compBtn>
  <Common-compBtn
  type="danger"
  :content="'危险按钮'"
  >危险按钮</Common-compBtn>
  <Common-compBtn
  type="warning"
  :content="'警告按钮'"
  >警告按钮</Common-compBtn>
  <Common-compBtn
  type="info"
  :content="'信息按钮'"
  >信息按钮</Common-compBtn>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style>
.Btn{
   display: flex;
  justify-content: center;
}

</style>
```
:::

## Attributes

| 参数          | 说明            | 类型            | 可选值 | 默认值 |
|:-----------:  |:--------------: |:--------------: |:--------------------: |:------: |
| debounce    | 是否启用防抖 | boolean    | — | false |
| debounceTime | 防抖延迟时间 | number | — | 500 |
| loading | 点击后自动开启loading(按钮上) | boolean | — | false |
| fullscreenLoading | 点击后自动开启loading(全屏) | boolean |       —       | false |
| confirmType | 操作按钮确认方式,可自动渲染`el-popconfirm`或`element-ui`的`confirm`弹窗 | pop/confirm | — | — |
| popConfig | 当传入confirmType为pop时,`el-popconfirm`属性的对象,可传入`el-popconfirm`组件支持的所有属性值           | object  | — | — |
| confirmConfig      | 当传入confirmType为confirm时,`element-ui`的`Messagebox.confirm`的属性值对象            | —  | — | —   |
| content | tip提示的内容 | string | — | — |
| tipConfig | tip的配置属性 | object | — | — |
| isLink | 点击跳转 | boolean | — | false |
| toPath | 跳转路径 | string | — | '/' |
::: tip  温馨提示
除以上列出的为本组件封装的新属性,其他`el-input`的任何属性均可直接继承
::: 