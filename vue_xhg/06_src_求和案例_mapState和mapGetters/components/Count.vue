<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大十倍为：{{ bigSum }}</h1>
    <h1>我在{{ school }}，学{{ subject }}</h1>
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
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  computed: {
    //靠程序员自己亲自去写计算属性
    // sum() {
    //   return this.$store.state.sum
    // },

    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },

    //借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
    // ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),

    //借助mapState生成计算属性，从state中读取数据。（数组写法{计算属性名与要读取的值同名}）
    ...mapState(['sum', 'school', 'subject']),

    /*************************************************************************** */
    //靠程序员自己亲自去写计算属性
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },

    //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    // ...mapGetters({ bigSum: 'bigSum' }),

    //借助mapGetters生成计算属性，从getters中读取数据。（数组写法{计算属性名与要读取的值同名}）
    ...mapGetters(['bigSum']),
  },

  methods: {
    increment() {
      this.$store.commit('JIA', this.n)
      // console.log(this)
    },
    decrement() {
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
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
