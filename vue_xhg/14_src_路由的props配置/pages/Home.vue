<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link active-class="active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style>

</style>