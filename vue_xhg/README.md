# 笔记

## 脚手架文件结构：

## 关于不同版本的 Vue

## vue.config.js 配置文件

## ref 属性

1.被用来给元素或子组件注册引用信息（id 的替代者） 2.应用在 html 标签上获取的是真实的 DOM 元素，应用在件标签上是组件实例对象（vc） 3.使用方式：
打标识：<h1 ref="xxx">....</h1> 或 <School ref="xxx"><School>
获取：this.\$refs.xxx

## 配置项 props

功能：让组件接收外部传过来的数据
(1).传递数据：
<Demo name="xxx" >
(2).接收数据：
第一种方式（只接收）：
props:['name']

        第二种方式（限制类型）：
          props:{
            name:Number
          }

        第三种方式（限制类型、限制必要性、指定默认值）：
          props:{
            name:{
              type:String,  //类型
              required:true,  //必要性
              default:'老王'  //默认值
            }
          }

        备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

## mixin(混入)

    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步：定义混合，例如：
            {
              data(){...}
              methods:{...}
              ...
            }
        第二步使用混入，例如：
            (1).全局混入：Vue.mixin(xxx)
            (2).局部混入：mixin:['xxx','xxx']

## 插件

    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件：
      对象.install = function(Vue,options){
        //1.添加一个全局过滤器
        Vue.filter(...)

        //2.添加全局指令
        Vue.directive(...)

        //3.配置全局混入（合）
        Vue.mixin(...)

        //4.添加实例方法
        Vue.prototype.$myMethods = function(){...}
        Vue.prototype.$myProperty = xxx
      }
    使用插件：
      Vue.use()

## scoped 样式

    作用：让样式在局部生效，防止冲突。
    写法：<style scoped>

## 总结 TodoList 案例

1.组件化编码流程:
(1).拆分静态组件：组件要按照功能点拆分，命名不要与 html 元素冲突。

      (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在使用，还是一些组件在使用。

          1).一个组件在用：放在组件自身即可。
          2).一些组件在用：放在他们共同的父元素上(<span style="color:red" >状态提升</span>).

      (3).实现交互：从绑定事件开始。

2.props 适用于：

      (1).父组件 ===> 子组件 通信
      (2).子组件 ===> 父组件 通信 （要求父组件先给子组件一个函数）

3.使用 v-model 时要切记：v-model 绑定的值不能是 props 传过来的值，因为 props 是不可以被修改的！

4.props 传过来的若是对象类型的值，修改对象中的属性是 Vue 不会报错，但不推荐这样做。

## 组件的自定义事件

1.一种组件间通信的方式，适用于：子组件 ===> 父组件

2.使用场景：A 是父组件，B 是子组件，B 想给 A 传递数据，那么就要在 A 中给 B 绑定自定义事件（事件的回调在 A 中）。

3.绑定自定义事件：

    1.第一种方式:

    在父组件中：<Demo @atguigu="test" /> 或 <Demo v-on:atguigu="test"/>
              test写在父组件的methods中
    在子组件中：this.$emit('atguigu', name, 333, 666, 888, 999)

    2.第二种方式，在父组件中：
                  <Demo ref="demo"/>
                  ......
                  mounted(){
                    this.$refs.xxx.$on('atguigu',this.test)
                  }

    3.若想让自定义事件只能触发一次可以使用once修饰符，或$once方法。

4.触发自定义事件：this.\$emit('atguigu',数据)

5.解绑自定义事件：this.\$off('atguigu')

6.组件上也可以绑定原生 DOM 事件，需要使用 native 修饰符。

7.注意：通过 this.$ref.xxx.$on('atguigu',回调)绑定自定义事件时，回调要么配置在 methods 中，要么用箭头函数，否则 this 指向会出问题！
