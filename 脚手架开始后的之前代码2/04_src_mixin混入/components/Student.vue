<template>
  <div class="demo">
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
//引入一个hunhe（混合）
// import { mixin, mixin2 } from '../mixin'
export default {
  name: 'Student',
  data() {
    return {
      name: '妲己',
      sex: '女',
      x: 300,
      y: 666, //已自己定义为主
    }
  },
  // 使用hunhe（混合）
  // mixins: [mixin, mixin2],
  // mounted() {
  //   console.log('你好啊！！！')
  // },
}
</script>

<style>
</style>