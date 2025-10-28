<script setup>
import ManageHeader from "@/components/manage/ManageHeader.vue";
import ManageBackground from "@/components/manage/ManageBackground.vue";
import ManageIndex from "@/components/manage/manage-index/Manage-Index.vue";

</script>

<template>
  <div class="Manager-Container">
    <!-- 管理页面背景 -->
    <ManageBackground></ManageBackground>
    <!-- 管理页面Header -->
    <ManageHeader></ManageHeader>
    <!-- 主管理页面 -->
    <ManageIndex></ManageIndex>
  </div>
</template>

<style scoped lang="scss">
.Manager-Container{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
