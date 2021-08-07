<template>
  <div>
    <h2>About</h2>
    <input type="text" v-model="xyz" />
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      xyz: '',
    };
  },

  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, form, next) {
    console.log('About-beforeRouteEnter 组件内路由守卫', to, form);
    if (to.meta.isAuth) {
      //判断是否需要鉴权
      if (localStorage.getItem('school') === 'atguigu') {
        next();
      } else {
        alert('学校名不对，无权限查看！');
      }
    } else {
      next();
    }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, form, next) {
    console.log('About-beforeRouteLeave 组件内路由守卫', to, form);
    next();
  },
};
</script>

<style></style>
