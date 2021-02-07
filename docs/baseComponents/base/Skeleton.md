
# 骨架屏
---

::: demo 
```html
<template>
  <div>
      <Common-compSkeleton-index
      :active="active"
      :paragraph="paragraph"
      >
      </Common-compSkeleton-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:true,
      paragraph: {
                type: "row",
                rows: [
                   {
                      type: 'rectangle',
                      style: {
                        width: '50%',
                        height: '16px'
                      }
                   },
                   {
                      type: 'rectangle',
                      rowStyle: {
                         marginTop: '24px'
                      },
                      style: {
                         width: '100%',
                         height: '16px'
                      }
                   },
                   {
                      type: 'rectangle',
                      rowStyle: {
                          marginTop: '16px'
                      },
                      style: {
                          width: '50%',
                          height: '16px'
                      }
                   },
                   {
                      type: 'rectangle',
                      rowStyle: {
                         marginTop: '16px'
                      },
                      style: {
                         width: '61%',
                         height: '16px'
                      }
                   }
                ]
             }
    }
  }
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>
```
:::

## Attributes

|   参数    |        说明        |  类型   | 可选值 | 默认值 |
| :-------: | :----------------: | :-----: | :----: | :----: |
|  active   | 是否渲染骨架屏动画 | Boolean |   —    | false  |
| paragraph |      渲染数据      | Object  |   —    |   —    |
