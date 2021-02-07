# 上传
---
::: demo 
```html
<template>
  <Common-compUpload-index
    :type="type"
    ></Common-compUpload-index>
</template>
<script>
  export default {
    data() {
      return {
       type:'thumbnail'
      } 
    }
  }
</script>
```
::: 

::: tip 原生文本省略增强

* 1.修复二次上传文件需要刷新
* 2.加强上传文件类型大小验证
* 3.替换文件
* 4.上传前修改文件名字
* 5.显示文件名
* 6.图片适应度
* 7.预览操作度提升
* 8.图片裁剪

:::



## Attributes

|   参数    |       说明       |  类型  |               可选值               |             默认值              |
| :-------: | :--------------: | :----: | :--------------------------------: | :-----------------------------: |
|   type    |  兼容的上传类型  | String | ['thumbnail','primary','imageUrl'] |                —                |
| Tipstyle  |   描述的样式类   | Object |                 —                  |                —                |
|   limit   | 限制上传的文件数 | Number |                 —                  |                4                |
|  tipText  |    提示的文本    | String |                 —                  | 只能上传jpg/png文件，且不超过1M |
|  accept   |  上传的类型过滤  | String |                 —                  |            .jpg,.png            |
| limitSize |   上传文件大小   | Number |                 —                  |                1                |

