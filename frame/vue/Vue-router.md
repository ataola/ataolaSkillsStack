## Vue-Router

> 关于Vue的插件Vue-Router的学习，学完以后，期望是遇见路由问题能完美解决, 其实还是根据业务逻辑去整理方法比较好一点

&nbsp;&nbsp;**基础配置:**
```
router文件夹下，有index.js和router.js,被引用写index,配置路由用router.js
index.js
    import Vue from 'vue'
    import Router from 'vue-router'
    import routes from './router'

    Vue.use(Router)

    export default new Router({
    routes: routes
    })

router.js
    import Home from '@/views/Home.vue'
    export default [
    {
        path: '/',
        alias: 'home_page',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/argu/:name',
        component: () => import('@/views/argu.vue')
    },
    {
        path: '/parent',
        name: 'parent',
        component: () => import('@/views/parent.vue'),
        children: [
        {
            path: 'child',
            component: () => import('@/views/child.vue')
        }
        ]
    },
    {
        path: '/named_view',
        components: {
        default: () => import('@/views/child.vue'),
        email: () => import('@/views/email.vue'),
        tel: () => import('@/views/tel.vue')
        }
    },
    {
        path: '/main',
        redirect: to => '/home'
    }
    ]
楼上这个例子很全面概括了一些例子的写法。
```

&nbsp;&nbsp;**指令:**

&nbsp;&nbsp;router-link:
```
#理解：肯定跟html的a链接有关，可能内部封装了啥(2019.07.02)
<router-link to="/home">Home</router-link>
<router-link v-bind:to="{name: 'home'}">Home</router-link>
<router-link :to="{name: 'home'}">Home</router-link>

差不多就楼上这三种写法，看你开心写
```
&nbsp;&nbsp;router-view:
```
#理解：这个就是显示xxx.vue里面的内容，可以传参数进去
<router-view>
<router-view name="user">
```

&nbsp;&nbsp;**路由:**

&nbsp;&nbsp;动态路由和静态路由：
```
#动态路由理解，说下啥是动态路由，就是例如我们输入些网址
        http://ataola.com/user/0a0b0c0d001,
        http://ataola.com/user/0a0b0c0d002,
        http://ataola.com/user/0a0b0c0d003,
        http://ataola.com/user/0a0b0c0d004
楼上这些到user为止都是不变的，后面的params是会变的，这个就是动态路由，联想一下，以前学Express和Koa的时候，在GET请求也遇见过这个，大致从数据库中查找到唯一的标识符，然后返回给前端，渲染到页面，就是楼上那些用户的实现思路

动态路由是这样子写的：
router.js:
 {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue')
  }

还有一种是这样的，这边还是输入网址看下
    http://ataola.com/user?id=1&name=aaa
    http://ataola.com/user?id=2&name=bbb
    http://ataola.com/user?id=3&name=ccc
历史总是惊人的相似，第一次还是在Express的Get请求的query参数遇到，具体的写法如下
router.js:
 {
    path: '/argu',
    query: {
        id: '01',
        name: 'aaa'
    }
    component: () => import('@/views/argu.vue')
  }
这里还可以使用ES6的模板语法

argu.vue:
里面的内容这样测试 $route.params.name

#静态路由理解，静态路由就是写死的嘛，它可以使楼下这些形式
    http://ataola.com/news/all
    http://ataola.com/news/weekly
    http://ataola.com/news/monthly
    http://ataola.com/news/yearly


如果是跳转，那么router.js里面要根据情况加name属性
```

&nbsp;&nbsp;嵌套路由与父子组件：
```
#嵌套路由的理解：一般说到嵌套路由，很容易想到的是爸爸和儿子的关系。你理解下就好，我能想到的场景是就是点击去一个页面，然后点击下面的菜单，上面的内容进行了变换，那么它就是的。
router.js
{
    path: '/father',
    name: 'father',
    component: () => import('@/views/father.vue'),
    children: [
      {
        path: 'son',
        component: () => import('@/views/son.vue')
      }
    ]
  }

也可以像楼下这样写
    {
        path: '/person',
        components: {
            header: () => import('@/views/header.vue'),
            body: () => import('@/views/body.vue'),
            footer: () => import('@/views/footer.vue')
        }
    }
```

&nbsp;&nbsp;其他路由：
```
给路由起个别名：
 {
    path: '/',
    alias: 'home_page',
    name: 'home',
    component: Home
  }
重定向路由：
{
    path: '/main',
    redirect: to => '/home'
}
```