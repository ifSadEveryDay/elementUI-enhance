# Empty
---
::: demo 默认特性：随机选取图片
```html
<template>
  <Common-compEmpty-index
  class="center-text"
    ></Common-compEmpty-index>
</template>
<style>
.center-text { 
  text-align: center;
}
</style>
```
:::

## Attributes

|  参数   |   说明   |  类型  |           可选值           |  默认值  |
| :-----: | :------: | :----: | :------------------------: | :------: |
| desText | 提示文字 | string |             —              | 暂无数据 |
| imgList | 图片url  | Array  | [defaultPng, error, empty] |  empty   |