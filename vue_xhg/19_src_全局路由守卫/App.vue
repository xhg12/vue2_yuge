<template>
  <!-- <div> -->
  <!--路由链接-->
  <!-- <router-link to="/about">About</router-link> -->
  <!--路由视图-->
  <!-- <router-view></router-view> -->
  <!-- </div> -->
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a href="./about.html" class="list-group-item active">About</a> -->
          <!-- <a href="./home.html" class="list-group-item">Home</a> -->

          <!-- Vue中借助router-link实现路由的切换 -->
          <router-link to="/About" class="list-group-item" active-class="active"
            >About</router-link
          >
          <router-link to="/home" class="list-group-item" active-class="active"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--缓存路由组件-->
            <!-- <keep-alive> -->
            <!--路由视图是可以进行传递数据的,可以传到某个组件内部,
              该组件内部需要通过props来进行接收后,就可以使用了-->
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
            <!-- </keep-alive> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import Banner from './components/Banner.vue';
export default {
  name: 'App',
  components: {
    Banner,
  },
};
</script>
<style scoped></style>
