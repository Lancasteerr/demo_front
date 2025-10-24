<script>
export default {
  methods:{
    goToLoginpage(){
      this.$router.push('/login')
    },
  }
}
</script>

<template>
  <el-header class="header">
    <div id="header-div">
      <div id="logo">
        <img src="../assets/nikoicon.png" alt="Logo">
      </div>
        <div class="butten-container">
          <el-button class="Loginbutton" type="text" @click="goToLoginpage">登录</el-button>
          <div class="separator"></div>
          <el-button class="Register" type="text">注册</el-button>
        </div>
    </div>
  </el-header>
</template>

<style scoped lang="scss">
#header-div {
  box-sizing: border-box;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  backdrop-filter: blur(8px);
  background-color: rgba(51,51,51,.88);
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 20px;
  box-shadow: 0 0 15px #000;
}

#logo img {
  height: 70px;
  padding: 0px;
}

.butten-container{
  display: flex;
  align-items: center;
}
.separator{
  width: 2px;
  height: 18px;
  background-color: #ffffff;
  margin: 0 13px;
}
.Loginbutton{
  font-size: 16px;
  color: #ffffff;
}
.Register{
  font-size: 16px;
  color: #ffffff;
}
</style>
