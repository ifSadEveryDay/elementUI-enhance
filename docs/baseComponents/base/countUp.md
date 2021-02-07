# 动画数字
---
::: demo 
```html
<template>
  <div class="Container">
  <Common-compCount
    :tag="span"
    :startVal="66"
    :endVal="1888"
    :duration="10"
    class="TextColorRed"
    ></Common-compCount>
    <Common-compCount
    :tag="span"
    :startVal="66"
    :endVal="1888"
    :duration="10"
    class="TextColorGreen"
    ></Common-compCount>
  </div>
</template>
<style>
.Container{
   display: flex;
  justify-content: space-around;
}
.TextColorGreen{
font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
font-size: 6em;
color: #04BE02;
}
.TextColorRed{
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
font-size: 6em;
color: red;
}
</style>
```
:::

## Attributes

|   参数   |       说明        |  类型   | 可选值 | 默认值 |
| :------: | :---------------: | :-----: | :----: | :----: |
|   tag    |   渲染成的标签    | string  |   —    |  span  |
|  start   |   是否自动开始    | boolean |   —    | false  |
| startVal |  开始计数的数字   | number  |   —    |   0    |
|  endVal  |  结束计数的数字   | number  |   —    |   —    |
| decimals |    小数点位数     | number  |   —    |   0    |
| duration |   动画持续时间    | number  |   —    |   2    |
| options  | countup的剩余参数 | object  |   —    |   —    |