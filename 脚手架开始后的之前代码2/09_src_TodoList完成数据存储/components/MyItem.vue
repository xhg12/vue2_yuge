<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- <input type="checkbox" v-model="todo.done" /> 
            也能实现以上代码的功能，不过不建议这样做，props里的代码Vue不建议我们修改
            Vue监视只是浅层监视（相当于浅拷贝）不能发现你修改对象里的属性的值
       -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo', 'checkTodo', 'deleteTodo'],
  methods: {
    //勾选或取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      this.checkTodo(id)
    },
    //删除
    delTodo(id) {
      if (confirm('您确认删除吗？')) {
        this.deleteTodo(id)
      }
    },
  },
}
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: pink;
}

li:hover button {
  display: block;
}
</style>