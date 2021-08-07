//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
//引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import MessageDetail from '../pages/MessageDetail.vue';

//创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: { title: '关于' },
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        {
          //path:'/news',不要加/
          name: 'xinwen',
          path: 'news',
          component: News,
          meta: { isAuth: true, title: '新闻' },
        },
        {
          // path:'/message',不要加/
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              name: 'xiangqing',
              path: 'messageDetail',
              component: MessageDetail,
              meta: { isAuth: true, title: '详情' },

              //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
              //props:{a:1,b:'hello'}

              //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
              // props: true,

              //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                };
              },
            },
          ],
        },
      ],
    },
  ],
});

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, form, next) => {
  console.log('前置路由守卫', to, form);
  // if (to.path === '/home/news' || to.path === '/home/message') {
  //   if (localStorage.getItem('school') === 'atguigu') {
  //     next();
  //   } else {
  //     alert('学校名不对，无权限查看！');
  //   }
  // } else {
  //   next();
  // }

  //全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
  //   if (to.name === 'xinwen' || to.name === 'xiaoxi') {
  //     if (localStorage.getItem('school') === 'atguigu') {
  //       next();
  //     } else {
  //       alert('学校名不对，无权限查看！');
  //     }
  //   } else {
  //     next();
  //   }
  // });

  //全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
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
});

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, form) => {
  console.log('后置路由守卫', to, form);
  if (to.meta.title) {
    document.title = to.meta.title; //修改网页的title
  } else {
    document.title = 'vue_xhg';
  }
});

export default router;
