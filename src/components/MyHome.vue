<script>
import BackgroundImg from "@/components/BackgroundImg.vue";
import HomeHeader from "@/components/HomeHeader.vue";
export default {
  name: 'MyHome',
  components: {
    BackgroundImg,
    HomeHeader,
  },
};
</script>

<template>
  <div class="home-container">
    <!-- Header 组件 -->
    <HomeHeader></HomeHeader>

    <!-- 轮播背景组件 -->
    <BackgroundImg></BackgroundImg>
  </div>
</template>

<style scoped lang="scss">


.home-container {
  position: relative;
  width: 100%;
  height: 100vh; /* 设置容器高度为视口高度 */
}

/* 使 header 固定在页面顶部，并确保其层级高于轮播图 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0; /* 设置左右内边距 */
}

/* 确保 BackgroundImg 占满整个页面，并处于最底层 */
.page-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* 使其位于最底层 */
}
</style>
