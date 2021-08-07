<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <!-- 使用number修饰符也可以把"1"转成数字 -->
    <select v-model.number="n">
      <!-- 强制绑定数据会把"1"当成js表达式 --->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一会再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      n: 1, //用户选择的数字
      sum: 0, //当前的和
    }
  },
  methods: {
    increment() {
      this.sum += this.n
    },
    decrement() {
      this.sum -= this.n
    },
    incrementOdd() {
      if (this.sum % 2 != 0) {
        this.sum += this.n
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n
      }, 500)
    },
  },
}
</script>
<style scoped>
select {
  margin-right: 10px;
}
button {
  margin-right: 10px;
}
</style>
