# 粘性布局
---
::: demo 
```html
<template>
  <Common-compStep-index
    ></Common-compStep-index>
</template>
```
::: 

::: tip 默认特性
  1.导航条默认跟随步骤(变色龙制)
  2.到达默认Scroll后固定在顶部
  3.点击即可滚动到指定条目
:::

## Attributes

|      参数      |                             说明                             |  类型  | 可选值 |                            默认值                            |
| :------------: | :----------------------------------------------------------: | :----: | :----: | :----------------------------------------------------------: |
| StepContainer  | 条目内容[基于ElementUId的步骤条内容，附加scroll属性，滚动进度，number] | Array  |   —    | [<br/>        { title: '步骤一', icon: 'el-icon-edit', description: '', scroll: 0 },<br/>        { title: '步骤二', icon: 'el-icon-upload', description: '', scroll: 200 },<br/>        {<br/>          title: '步骤三',<br/>          icon: 'el-icon-picture',<br/>          description: '',<br/>          scroll: 400<br/>        }<br/>      ] |
| nProcessConfig |                     qier-prog的剩余参数                      | Object |   —    |                              {}                              |