//引入Vue
import Vue from 'vue';
//引入App组件，它是所有组件的父组件
import App from './App.vue';
//引入混合
import { mixin, mixin2 } from './mixin';
//关闭Vue的生产提示
Vue.config.productionTip = false;
Vue.mixin(mixin);
Vue.mixin(mixin2);

//创建Vue的实例对象vm
new Vue({
  el: '#app',
  render: (h) => h(App),
});
