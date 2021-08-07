<template>
  <div>
    <ul>
      <!-- <li>id:{{$route.params.id}}</li> -->
      <li>消息编号:{{ $route.query.id }}</li>
      <li>消息标题:{{ $route.query.title }}</li>
      <!-- <li>content:{{detail.content}}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "MessageDetail",
};
</script>

<style>
</style>