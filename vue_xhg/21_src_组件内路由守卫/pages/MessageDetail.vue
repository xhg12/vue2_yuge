<template>
  <ul>
    <!-- <li>id:{{$route.params.id}}</li> -->
    <li>消息编号:{{ id }}</li>
    <li>消息标题:{{ title }}</li>
    <!-- <li>content:{{detail.content}}</li> -->
  </ul>
</template>

<script>
export default {
  name: 'MessageDetail',
  props: ['id', 'title'],
  // mounted() {
  //   console.log(this.$route);
  // },
};
</script>

<style></style>
