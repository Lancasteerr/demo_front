<script setup>

import ArticleListContainer from "@/components/articlelist-index/ArticleList-container.vue";
</script>

<template>
  <div class="ArticleListImg-Container">
    <ArticleListContainer></ArticleListContainer>
  </div>
</template>

<style scoped lang="scss">
.ArticleListImg-Container{
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
