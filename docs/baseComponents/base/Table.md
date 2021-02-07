
# 表单
---
::: demo 
```html
<template>
  <Common-compTable-index
  :tableData="tableData"
  :tableItems="tableItems"
  :buttonItems="buttonItems"
    ></Common-compTable-index>
</template>
<script>
  export default {
    data() {
      return {
         tableData: [{
        name: 890899090987,
        realname: '第一个测试工程',
      },
      {
        name: 89223322387,
        realname: '第二个测试工程',
      }, {
        name: 89089999999,
        realname: '第三个测试工程',
      }],
         buttonItems: {
        label: '操作',
        options: [
          {
            text: '打开',
            cb: 'open',
            type: 'success'
          },
          {
            text: '编辑',
            cb: 'edit',
            type: 'primary'
          },
          {
            text: '删除',
            cb: 'delete',
            type: 'danger'
          }
        ]
      },
      tableItems: [
        { label: '工程名称', name: 'name', sortable: true, formatter: 'datetime' },
        { label: '详细信息', name: 'realname', sortable: true, copy: true }
      ]
      }
    }
  }
</script>
```
::: 

::: tip 新增功能

* 1.默认行操作高亮上设置
* 2.点击文本行后图标复制到剪切板
* 3.文本格式化增强
* 4.支持图片预览(拖拽，放大，旋转等)
* 5.支持行列拖拽
* 6.启动数据驱动型操作，去除原生态的CV

:::



## Attributes

|   参数    |      说明      |  类型   |                            可选值                            | 默认值 |
| :-------: | :------------: | :-----: | :----------------------------------------------------------: | :----: |
| formatter |   文本格式化   | String  | ['date','datetime','time','date-hm','money','point2','rmb','yuan','percent'] |   —    |
|   copy    | 文本格式化图标 | Boolean |                              —                               | false  |