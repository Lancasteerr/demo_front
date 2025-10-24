<script>
export default {
  name: "BackgroundImg",
  data() {
    return {
      carouseData: [
        {url:require('@/assets/BackgroundImgs/1.jpg')},
        {url:require('@/assets/BackgroundImgs/2.jpg')},
        {url:require('@/assets/BackgroundImgs/3.jpg')},
        {url:require('@/assets/BackgroundImgs/4.jpg')},
        {url:require('@/assets/BackgroundImgs/5.jpg')}
      ]
    };
  }
};
</script>

<template>
  <div class="page-background">
    <el-carousel trigger="click" height=100vh interval="5000">
      <el-carousel-item v-for="item in carouseData" :key="item">
        <div class="carousel-item" :style="{backgroundImage: 'url('+item.url+')'}"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<style scoped lang="scss">
.page-background{
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 0;
}
.carousel-item{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
