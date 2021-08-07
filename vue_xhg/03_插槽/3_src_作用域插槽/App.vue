<template>
  <!-- 
    插槽
        1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 父组件 ==> 子组件

        2.分类：默认插槽、具名插槽、作用域插槽

        3.使用方式：
            1.默认插槽：
                父组件中：
                    <Category>
                      <div>html结构1</div>
                    </Category>
                子组件中：
                    <template>
                      <div>
                        定义插槽
                        <slot>插槽默认内容...</slot>
                      </div>
                    </template>

            2.具名插槽：
                 父组件中：
                    <Category slot="center">
                      <template>
                       <div>html结构1</div>
                      </template>

                      <template v-slot:footer>
                        <div>html结构2</div>
                      </template>
                      
                    </Category>
                子组件中：
                    <template>
                      <div>
                        定义插槽
                        <slot name="center">插槽默认内容...</slot>
                        <slot name="footer">插槽默认内容...</slot>
                      </div>
                    </template>

            3.作用域插槽：

                1.理解：数据在组件自身，但根据数据生成的结构需要组件的使用者来决定。
                      （games数据在Category组件中，但使用数据所遍历出来的结构由App组件来决定）
                
                2.具体编码：
                    父组件中：
                        生成的是ul列表
                        <Category title="游戏">
                          <template scope="atguigu">
                            <ul>
                              <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
                            </ul>
                          </template>
                        </Category>

                        生成的是h4标题
                        <Category title="游戏">
                          <template scope="{games}">
                            <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
                          </template>
                        </Category>
                    子组件中：
                        <template>
                          <div class="category">
                            <h3>{{ title }}分类</h3>
                            <slot :games="games"
                              >我是一些默认值，当使用者没有传递具体结构时，我会出现</slot
                            >
                          </div>
                        </template>

                        <script>
                        export default {
                          name: 'Category',
                          数据在子组件自身
                          data() {
                            return {
                              games: ['QQ飞车', '王者荣耀', '穿越火线', '超级玛丽'],
                            }
                          },
                          props: ['title'],
                        }
                        </script>
                        

   -->
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!-- <template scope="atguigu">
        <ol>
          <li
            style="color: red"
            v-for="(g, index) in atguigu.games"
            :key="index"
          >
            {{ g }}
          </li>
        </ol> -->
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(g, index) in games" :key="index">
            {{ g }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
//引入Category组件
import Category from './components/Category.vue'

export default {
  name: 'App',
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
h4 {
  text-align: center;
}
</style>