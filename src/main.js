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

    if(localStorage.getItem("token") && to.path === '/login'){
        next('/manage')
    }

    if (to.meta.requireAuth) {
        if (localStorage.getItem("token")) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

//创建axios请求拦截器 为所有请求带上JWT
axios.interceptors.request.use((config) =>{
    //获取本地token
    const token = localStorage.getItem("token");

    if(token){
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    //返回修改后配置
    return config;
})

//创建响应拦截器 处理401（token过期或未登录）
axios.interceptors.response.use(
    (response)=> response,
    (error)=>{
        if(error.response && error.response.status === 401) {
            router.push('/login');
            return ;
        }else if(error.response && error.response.status === 403) {
            localStorage.removeItem("token");
            //store.commit('logout');
            router.push('/login');
            return ;
        }
        return Promise.reject(error);
    })

// 挂载应用
app.mount('#app')
