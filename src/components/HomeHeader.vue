<script setup>

</script>

<template>
  <el-header class="header">
    <div id="header-div">
      <div id="logo">
        <img src="../assets/nikoicon.png" alt="Logo">
      </div>
      <el-button>登录</el-button>
    </div>
  </el-header>
</template>

<style scoped lang="scss">
#header-div {
  height: 80px;
  width: 100%;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 10px;
}

#logo img {
  height: 60px;
  padding: 10px;
}
</style>
