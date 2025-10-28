import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mavonEditor from "mavon-editor";
import 'mavon-editor/dist/css/index.css'

import './assets/fonts/font.css'

// 创建应用实例
const app = createApp(App)

// 注册 mavonEditor
app.use(mavonEditor)

// 配置 axios
axios.defaults.baseURL = 'http://localhost:8443/api'

// 全局注册 axios
app.config.globalProperties.$axios = axios

// 使用 ElementPlus
app.use(ElementPlus)

// 使用 Vuex 状态管理
app.use(store)

// 使用 Vue Router
app.use(router)  // 在此时使用 router

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.state.user.userName) {
            next()
        } else {
            next({
                path: 'login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

// 挂载应用
app.mount('#app')
