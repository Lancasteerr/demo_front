<script setup>

import ArticleCard from "@/components/ArticleDetails/ArticleCard.vue";
</script>

<template>
  <div class="ArticleDetail-Container">
    <ArticleCard></ArticleCard>
  </div>
</template>

<style scoped lang="scss">
.ArticleDetail-Container{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 0;
  top: 0;
  left: 0;
  background-image: url("@/assets/ManageBackground/1.jpg");
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
}
</style>
