
# 骨架屏
---

::: demo 
```html
<template>
  <div>
      <Common-compSkeleton-index
      :active="true"
      :paragraph="paragraph"
      >
      </Common-compSkeleton-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue',
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

|  参数   |   说明   |  类型  |           可选值           |  默认值  |
| :-----: | :------: | :----: | :------------------------: | :------: |
| desText | 提示文字 | string |             —              | 暂无数据 |
| imgList | 图片url  | Array  | [defaultPng, error, empty] |  empty   |
