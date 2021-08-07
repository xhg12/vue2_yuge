<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      keyWord: '', //用来存储文本框中输入的数据
    }
  },
  methods: {
    //点击按钮，分发绑定的search事件同时传入搜索的内容
    searchUsers() {
      //请求前更新List的数据
      this.$bus.$emit('updateListData', {
        firstView: false,
        isLoading: true,
        errorMsg: '',
        users: [],
      })
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then(
          (response) => {
            // console.log('请求成功了', response.data.items)
            //this.$bus.$emit('getUsers', response.data.items)
            //firstView后面一直是false，所以不写了
            //请求成功后更新List的数据
            this.$bus.$emit('updateListData', {
              isLoading: false,
              errorMsg: '',
              users: response.data.items,
            })
          },
          (error) => {
            console.log('请求失败了', error.message)
            //请求失败后更新List的数据
            this.$bus.$emit('updateListData', {
              isLoading: false,
              errorMsg: error.message,
              users: [],
            })
          }
        )

      //获取文本框中的数据
      // const txt = this.searchTxt.trim() //干掉两端的空格
      // if (txt) {
      //   this.$bus.$emit('search', txt)
      //   //清空文本框中的内容
      //   this.searchTxt = ''
      // }
    },
  },
}
</script>

<style scoped>
</style>
