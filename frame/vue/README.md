## Vue

> 对Vue的学习

&nbsp;&nbsp;**一些前期的工作:**
```
#vue-cli3.0脚手架的安装
npm i @vue/cli -g
打开它的ui管理界面
PS D:\Project\Vue> vue ui
🚀  Starting GUI...
🌠  Ready on http://localhost:8000

Create ==> Create a new project here ==> vue-test(Project folder) ==> location Path

Package manager: npm
Git repository: yes
Select a preset：Manual
Enable  features: 
        Babel(ES6/7/8/9 ==> ES3/5)
        Router
        Vuex
        CSS Pre-processors: LESS ==> Lint on save | Lint and fix on commit
        Linter/Formatter: ESLint 
        Use config files: Standard config
        Save as a new Preset: vue_template_preset
oh,好幸运啊，领了一个error：Cannot read property 'indexOf' of undefined
原因是我那台电脑连不上网，所以这样。


vue.config.js: vue的配置文件
    const path = require('path')
    const resolve => dir => path.join(__dirname, dir)
    const BASE_URL = process.env.NODE_ENV ==='production' ? '/iview-admin/' : '/'
    module.exports ={
        lintOnSave: true,
        baseUrl: BASE_URL,
        chainWebpack: config => {
            config.reslove.alias
                .set('@', resolve('src'))
                .set('_c', resolve('src/components'))
        },
        //打包不生成.map文件
        productionMap: false,
        devServer: {
            proxy: 'http://localhost:4000'
        }
    }
package.json: npm包管理文件
babel.config.js: babel的配置文件
.postcssrc.js: css自动补充一些兼容性代码的配置
.gitignore: git提交的忽略文件
.eslintrc.js: 配置eslint规则
public文件夹下的文件: 编译打包后的文件
src主开发目录文件
    assets: 静态资源目录文件
        img: 图片文件夹
        font: 图标文件夹
    config: 配置文件夹
        index.js: 配置文件
            export default {

            }
    components：组件
    views: 视图文件
    api: 接口目录文件(ajax 请求)
    directive: Vue自定义指令
        index.js
    lib: 
        util.js 业务有关
        tools.js 业务无关
    mock: 请求模拟，模拟数据
        index.js
            npm i mockjs -D
            import Mock from 'mockjs'
            export default Mock {

            }
    router: 路由文件
        index.js
            import Vue from 'vue'
            import Router from 'vue-router'
            import routes from './router'

            Vue.use(Router)

            export default new Router({
                routes: routes;
            })
        router.js
            import Home from './views/Home.vue'
            export default [
                   {
                path: '/',
                name: 'home',
                component: Home
                },
                {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                }
            ]
    store:
        module: 模块板块
            user.js  用户相关的一些信息（用户名，密码啥的）
                const state = {

                }
                const mutations ={

                }
                const actions = {

                }

                export default {
                    state,
                    mutations,
                    actions
                }

        index.js
            import Vue from 'vue'
            import Vuex from 'vuex'
            import state from './state'
            import mutations from './mutations'
            import actions from './actions'
            import user from './module/user'
            Vue.use(Vuex)

            export default new Vuex.Store({
            state,
            mutations,
            actions,
            modules: {
                user
            }
            })

        state.js
        mutations.js
        actions.js        
    App.vue: 基础组件
    main.js: 项目入口文件
    router.js：路由文件(请移步到router下报道)
    store.js: vuex状态管理文件(楼下两位的引入方式任选一位)(请移步到store下报道,并使用新名字 index)
        import config from './config'
        import config from './config/index'
    
VSCode开发编辑器配置：
.editorcofig: 配置编辑器使用习惯(要安装EditorConfig插件)
root = true
[*]
charset = utf-8
indent_style = tab
indent_size = 2
```

&nbsp;&nbsp;**总结思考:**
```
阿涛啦提倡映射的学习方法，就是减去不要的废话，上面的信息能够反映出对于的项目在脑子里
```