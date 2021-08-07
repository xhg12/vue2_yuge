<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo" />
      <MyList :todos="todos" />
      <MyFooter
        :todos="todos"
        :checkAllTodo="checkAllTodo"
        :clearAllTodo="clearAllTodo"
      />
    </div>
  </div>
</template>

<script>
//引入pubsub
import pubsub from 'pubsub-js'
//引入Header组件
import MyHeader from './components/MyHeader.vue'
//引入List组件
import MyList from './components/MyList.vue'
//引入Item组件
import MyItem from './components/MyItem.vue'
//引入Footer组件
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyItem,
    MyFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    }
  },
  methods: {
    //添加一个todo
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    //勾选或取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    //更新一个todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title
      })
    },
    //删除一个todo
    deleteTodo(msgName, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    //全选全不选
    checkAllTodo(value) {
      this.todos.forEach((todo) => {
        todo.done = value
      })
    },
    //清除所有已完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      },
    },
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    this.pid = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    // this.$bus.$off('deleteTodo')
    pubsub.unsubscribe(this.pid)
  },
}
</script>
<style scoped>
/* base */
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(81, 184, 224);
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
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