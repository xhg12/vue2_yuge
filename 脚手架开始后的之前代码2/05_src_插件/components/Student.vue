<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fBind:value="name" />
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '妲己',
      sex: '女',
    }
  },
}
</script>

<style>
</style>