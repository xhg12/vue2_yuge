<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>和为：{{ number }}</h2>
    <button @click="getName(name)">点我给App发送学生名</button>
    <button @click="unbind">解绑事件</button>
    <button @click="sum">点我number++</button>
    <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '妲己',
      sex: '女',
      number: 0,
    }
  },
  methods: {
    getName(name) {
      this.$emit('atguigu', name, 333, 666, 888, 999)
    },
    unbind() {
      this.$off('atguigu') //解绑一个自定义事件
      // this.$off(['atguigu', ''])
    },
    sum() {
      this.number++
      console.log('数字加起来了')
    },
    death() {
      this.$destroy() //销毁当前Student组件的实例 销毁后所有Student实例的自定义事件全都不奏效了
    },
  },
}
</script>

<style scoped>
.demo {
  background-color: pink;
}
</style>