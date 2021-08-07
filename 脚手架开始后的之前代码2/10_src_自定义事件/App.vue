<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName" />

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
      <Student v-on:atguigu.once="getStudentlName" />

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法：使用ref） -->
      <!-- 更灵活，可以加定时器延时调用 -->
      <!-- <Student ref="student" /> -->
    </div>
  </div>
</template>

<script>
//引入School组件
import School from './components/School.vue'
//引入Student组件
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    School,
    Student,
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名', name)
    },
    getStudentlName(name, ...params) {
      console.log('App收到了学生名', name, params)
    },
  },
  mounted() {
    //this.$refs.student.$once('atguigu', this.getStudentlName) //绑定自定义事件（只调用一次）
    //this.$refs.student.$on('atguigu', this.getStudentlName) //绑定自定义事件
  },
}
</script>
<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>