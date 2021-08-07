<template>
  <div class="demo">
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试一个hello方法</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷abc',
      address: '深圳',
    }
  },
  methods: {
    test() {
      this.hello()
    },
  },
}
</script>

<style>
</style>