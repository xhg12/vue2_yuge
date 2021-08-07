<template>
  <div class="container">
    <Search />
    <Main />
  </div>
</template>

<script>
//引入样式文件
// import './assets/bootstrap.css'
//引入Search组件
import Search from './components/Search.vue'
//引入Main组件
import Main from './components/Main.vue'
export default {
  name: 'App',
  components: {
    Search,
    Main,
  },
}
</script>