<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="getName(name)">点我给App传学校名</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  props: ['getSchoolName'],
  data() {
    return {
      name: '尚硅谷',
      address: '深圳',
    }
  },
  methods: {
    getName(name) {
      this.getSchoolName(name)
    },
  },
}
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>