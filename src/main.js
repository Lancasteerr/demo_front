import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/font.css'

axios.defaults.baseURL = 'http://localhost:8443/api'

Vue.config.productionTip = false
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
        if(store.state.user.userName) {
            //console.log(this.$store.state)
            next()
        }
        else {
            //console.log(this.$store.state)
            next({
                path:'login',
                query:{redirect:to.fullPath}
            })
        }
    }
    else {
        next()
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
