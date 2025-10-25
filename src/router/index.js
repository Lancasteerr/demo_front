import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/components/MyHome.vue'
import MyAbout from "@/components/MyAbout.vue";
import UserLogin from "@/components/UserLogin.vue";
import UserRegister from "@/components/UserRegister.vue";

Vue.use(VueRouter)

const routes = [
    {   path :'/',
        name : 'MyHome',
        component: MyHome
    },
    {
        path: '/about',
        name: 'MyAbout',
        component: MyAbout
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
    }
]

const router = new VueRouter({
  routes
})

export default router
