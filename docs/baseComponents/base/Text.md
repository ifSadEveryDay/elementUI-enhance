# 文本省略号
---
::: demo 
```html
<template>
  <Common-compTextFix
    :text="text"
    ></Common-compTextFix>
</template>
<script>
  export default {
    data() {
      return {
        text:'就你，别看了，快到碗里来。就你，别看了，快到碗里来。就你，别看了，快到碗里来。就你，别看了，快到碗里来。就你，别看了，快到碗里来。就你，别看了，快到碗里来。'
      } 
    }
  }
</script>
```
::: 

::: tip 原生文本省略增强

* 1.自定义高度溢出
* 2.高可定制性

:::



## Attributes

|     参数      |          说明           |        类型         |  可选值   | 默认值 |
| :-----------: | :---------------------: | :-----------------: | :-------: | :----: |
|     text      |       处理的文本        |       String        |     —     |   —    |
|    height     |        文本高度         |       Number        |     —     |   —    |
| isLimitHeight |  是否通过高度限制文本   |       Boolean       |     —     | false  |
|   textStyle   |      文本行内样式       |       Object        |     —     |   —    |
|   textClass   |       文本类样式        | String/Object/Array |     —     |   —    |
|     more      |      溢出部分显示       |       string        |     —     |  ...   |
|     type      |    文本溢出处理方式     |       String        | ['1','2'] |  '2'   |
|    lineNum    | 方式2的限制行数溢出处理 |       Number        |     —     |   1    |

## Solt
|  参数  |      说明      |
| :----: | :------------: |
| before | 文本前面的slot |
| after  | 文本后面的slot |
|  more  |  省略显示slot  |