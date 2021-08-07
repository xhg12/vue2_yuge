//引入Vue
import Vue from 'vue';
//引入App组件，它是所有组件的父组件
import App from './App.vue';
//关闭Vue的生产提示
Vue.config.productionTip = false;

//创建Vue的实例对象vm
new Vue({
  el: '#app',
  render: (h) => h(App),
  // mounted() {
  //   setTimeout(() => {
  //     this.$destroy();
  //   }, 5000);
  // },
});
