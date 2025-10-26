import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/components/MyHome.vue'
import MyAbout from "@/components/MyAbout.vue";
import UserLogin from "@/components/UserLogin.vue";
import UserRegister from "@/components/UserRegister.vue";
import PageNotFound from "@/components/PageNotFound.vue";

Vue.use(VueRouter)

const routes = [
    {   path :'/',
        name : 'MyHome',
        component: MyHome
    },
    {
        path: '/about',
        name: 'MyAbout',
        component: MyAbout,
        meta:{
            //需要登录后访问
            requireAuth:true,
        }
    },
    {
        path: '/login',
        name: 'UserLogin',
        component: UserLogin
    },
    {
        path: '/register',
        name: 'UserRegister',
        component: UserRegister
    },
    {
      path: '/*',
      name: 'PageNotFound',
      component: PageNotFound
    }
]

const router = new VueRouter({
    mode:"history",
    routes
})

export default router
