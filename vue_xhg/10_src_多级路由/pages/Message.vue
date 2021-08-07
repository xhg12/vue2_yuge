<template>
  <div>
    <ul>
      <li>message001</li>
      <li>message002</li>
      <li>message003</li>
      <!-- <li v-for="(m, index) in messages" :key="index">
        <router-link replace :to="`/home/message/detail/${m.id}`">{{
          m.title
        }}</router-link
        >---
        <button @click="pushHandle(m.id)">push查看</button>
        ---
        <button @click="replaceHandle(m.id)">replace查看</button>
      </li> -->
    </ul>
    <button @click="$router.back()">返回</button>
    <!-- back回调中: this.$router.back() -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
};
</script>

<style>
</style>