import {createRouter, createWebHistory} from 'vue-router'
import MyHome from '@/components/MyHome.vue'
import MyAbout from "@/components/MyAbout.vue";
import UserLogin from "@/components/UserLogin.vue";
import UserRegister from "@/components/UserRegister.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import ManagePage from "@/components/manage/ManagePage.vue";
import {createApp} from "vue";
import App from "@/App.vue";

//Vue.use(VueRouter)
//createApp(App).use(router).mount('#app')

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
      path:'/manage',
      name: 'manage',
      component: ManagePage,
      meta:{
          //requireAuth:true,
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
    // {
    //   path: '/*',
    //   name: 'PageNotFound',
    //   component: PageNotFound
    // },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

export default router
