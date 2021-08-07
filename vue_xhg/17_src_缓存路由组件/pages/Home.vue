<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link active-class="active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/home/message"
          >Message</router-link
        >
      </li>
    </ul>
    <!-- 缓存多个路由组件 -->
    <!-- <keep-alive :include="['News','Message']"> -->

    <!-- 缓存一个路由组件 -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style></style>
