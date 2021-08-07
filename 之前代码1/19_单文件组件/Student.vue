<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '褒姒',
      age: 19,
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    },
  },
}
</script>

<style>
.demo {
  background-color: seagreen;
}
</style>