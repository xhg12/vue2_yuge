<template>
  <ul>
    <!-- <li>id:{{$route.params.id}}</li> -->
    <li>消息编号:{{ $route.params.id }}</li>
    <li>消息标题:{{ $route.params.title }}</li>
    <!-- <li>content:{{detail.content}}</li> -->
  </ul>
</template>

<script>
export default {
  name: "MessageDetail",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>