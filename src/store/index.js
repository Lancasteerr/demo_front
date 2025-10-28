import {createStore} from "vuex";


export default createStore({
  state: {
      user: {
          //[]用于防止获取user对象失败返回的空数组
          //parse将字符串转换为json对象
          userName: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userName
      }
  },
  getters: {
  },
  mutations: {//用于同步修改state中的状态
    login(state,user){
        state.user = user
        window.localStorage.setItem('user',JSON.stringify(user))
    }
  },
  actions: {
  },
  modules: {
  }
})
