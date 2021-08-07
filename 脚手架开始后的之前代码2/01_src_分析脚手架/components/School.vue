<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名字</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '深圳',
    }
  },
  methods: {
    showName() {
      alert(this.name)
    },
  },
}
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>