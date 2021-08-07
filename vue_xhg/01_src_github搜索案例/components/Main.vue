<template>
  <div class="row">
    <div class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <h2 v-show="info.firstView">请输入搜索关键字</h2>
    <h2 v-show="info.loading">正在加载中...</h2>
    <h2 v-show="info.errorMsg">错误信息为:{{ info.errorMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      info: {
        firstView: true, //默认是true,表示的是显示提示信息
        isLoading: false, //默认是false,不显示提示信息
        errorMsg: '', //默认为空,没有任何提示的错误信息
        users: [], //用来存储用户对象信息的
      },
    }
  },
  //页面加载后
  mounted() {
    this.$bus.$on('updateListData', (dataObj) => {
      // console.log('我是List组件，收到了数据：', users)
      this.info = { ...this.info, ...dataObj }
    })

    //通过事件总线绑定事件
    // this.$bus.$on('search', async (searchName) => {
    //   const url = `地址`
    //   //第一次更改状态数据
    //   this.firstView = false
    //   this.loading = true
    //   try {
    //     //发送异步请求
    //     const response = await axios.get(url)
    //   } catch (error) {}
    // })
  },
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
