<script>

export default {
  name : 'UserLogin',
  data() {
    return {
      loginForm : {
        userName :'',
        password : ''
      },
      responseResult : []
    }
  },
  methods: {
    login() {
      this.$axios
          .post('/login',{
            userName : this.loginForm.userName,
            password : this.loginForm.password
          })
          .then(successResponse => {
            if(successResponse.data.code === 200) {
              this.$router.replace('/about')
            }
          })
          .catch(failResponse => {
            failResponse
          })
    }
  }
}

</script>

<template>
  <div id="poster">
      <el-form class = "login-container" label-position="left" label-width="0px">
        <h3 class = "login_title" style="text-align: center">系统登录</h3>
        <el-form-item>
          <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 100%;background:#505458;border:none" v-on:click="login">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<style scoped lang="scss">
  .login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #eaeaea;
    //box-shadow: 0 0 15px #cac6c6;
  }
  #poster{
    background-image: url("../assets/loginbg.png");
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
  }
</style>
