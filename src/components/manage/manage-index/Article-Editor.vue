<script setup>
import {onMounted, reactive} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import { ElMessage, ElMessageBox } from 'element-plus'

  const article = reactive({
    id: null,
    articleTitle: '',
    articleAbstract: '',
    articleContentMd: '',
    articleContentHtml: '',
    articleDate: ''
  })

  onMounted(() =>{
    const route = useRoute();
    if(route.params.article){
      article.value = route.params.article;
    }
  })

  const saveArticles = async (value,render) => {
    try {
      await ElMessageBox.confirm('是否保存并发布文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })

      const response = await axios.post('/admin/content/article', {
        id: article.id,
        articleTitle: article.articleTitle,
        articleContentMd: value,
        articleContentHtml: render,
        articleAbstract: article.articleAbstract,
        articleDate: article.articleDate
      })

      if (response && response.status === 200) {
        ElMessage('已保存成功')
      }
    } catch (error) {
      ElMessage('已取消发布')
    }
  }

</script>

<template>
  <div class="editor">
    <el-input v-model="article.articleTitle" style="width: 100%;height: 4%; padding-bottom: 1px;box-sizing: border-box;" placeholder="请输入文章标题" />
    <el-input v-model="article.articleAbstract" style="width: 100%;height: 4%;padding-bottom: 3px;box-sizing: border-box;" placeholder="请输入文章概要" />
    <mavon-editor v-model="article.articleContentMd" boxShadow="true" @save="saveArticles" style="height: 91%;"/>
  </div>
</template>

<style scoped lang="scss">
.editor{
  width: 99%;
  height: 99%;
}
</style>
