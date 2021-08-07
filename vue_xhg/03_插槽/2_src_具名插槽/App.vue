<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="	https://img1.baidu.com/it/u=3635025594,2011507055&fm=26&fmt=auto&gp=0.jpg"
        alt=""
      />
      <a slot="footer" class="header" href="http://www.atguigu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul v-for="(g, index) in games" :key="index" slot="center">
        <li>{{ g }}</li>
      </ul>
      <div class="center" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <img
        slot="center"
        src="	https://img1.baidu.com/it/u=3635025594,2011507055&fm=26&fmt=auto&gp=0.jpg"
        alt=""
      />
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h3>欢迎前来观影</h3>
      </template>
    </Category>
  </div>
</template>

<script>
//引入Category组件
import Category from './components/Category.vue'

export default {
  name: 'App',
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['QQ飞车', '王者荣耀', '穿越火线', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《蛇王》', '《金瓶梅》'],
    }
  },
  components: {
    Category,
  },
}
</script>
<style scoped>
.container,
.header,
.center,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>