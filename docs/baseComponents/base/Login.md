
# 登录组件
---
::: demo 
```html
<template>
  <Common-compLogin-index
  :form="form"
  :formOptions="formOptions"
  class="LoginClass"
    >
    </Common-compLogin-index>
</template>
<script>
export default {
  data() {
    return {
      form:{
        userName:'',
        passWord:''
      },
      formOptions:[
        [{
          field: 'userName',
          type: 'input',
          placeholder: '请输入用户名'
        }],
        [{
          field: 'passWord',
          type: 'input',
          placeholder: '请输入密码',
          showPassword: true
        }],[
          {
          field: 'CodeShow',
          type: 'custom',
          customType:'verifyCode'
          }
        ]
      ]
    }
  }
}
</script>
<style>
.el-input{
  width:340px;
}
</style>
```
:::

::: demo 
```html
<template>
  <Common-compLogin-index
  :form="form"
  :formOptions="formOptions"
  :class="LoginClass"
    >
    </Common-compLogin-index>
</template>
<script>
export default {
  data() {
    return {
      form:{
        userName:'',
        passWord:''
      },
      formOptions:[
        [{
          field: 'userName',
          type: 'input',
          placeholder: '请输入用户名'
        }],
        [{
          field: 'passWord',
          type: 'input',
          placeholder: '请输入密码',
          showPassword: true
        }],[
          {
          field: 'CodeShow',
          type: 'custom',
          customType:'Code'
          }
        ]
      ]
    }
  }
}
</script>
<style>

</style>
```
:::

## Attributes

|    参数    |     说明     |  类型  | 可选值 | 默认值 |
| :--------: | :----------: | :----: | :----: | :----: |
|    Code    | canvas验证码 | string |   —    |   —    |
| verifyCode |   滑动验证   | string |   —    |   —    |