<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
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
.demo {
  background-color: pink;
}
</style>