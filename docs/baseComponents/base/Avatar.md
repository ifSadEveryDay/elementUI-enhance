# 头像组
---
::: demo 默认特性：单个头像自动开启动画模式
```html
<template>
  <Common-compAvatar-index
    ></Common-compAvatar-index>
     <Common-compAvatar-index
     :imgArr="['https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png','https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png','https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png']"
     :isShowNum="2"
    ></Common-compAvatar-index>
</template>
```
:::

## Attributes

|   参数    |       说明       |  类型   | 可选值 |                            默认值                            |
| :-------: | :--------------: | :-----: | :----: | :----------------------------------------------------------: |
|    src    |   默认头像url    | string  |   —    | https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png |
|  imgArr   |    头像组url     |  Array  |   —    |                              —                               |
|   isDot   |     动画徽标     | boolean |   —    |                             true                             |
| isShowNum | 头像组显示的个数 | number  |   —    |                              2                               |