<script>
export default {
  name:"ArticleListDraggable",
  data(){
    return {
      position: {
        x: 1250,
        y: 190,
      },
      dragging: false,
      offset: {
        x: 0,
        y: 0,
      },
      ArticleCoverData:[
        {url:require("@/assets/ArticleCoverImg/1.png"), link:"http://localhost:8080/asd"},
        {url:require("@/assets/ArticleCoverImg/2.jpg"), link:"http://localhost:8080/asd"},
        {url:require("@/assets/ArticleCoverImg/3.jpg"), link:"http://localhost:8080/asd"},
        {url:require("@/assets/ArticleCoverImg/4.jpg"), link:"http://localhost:8080/aboasdut"},
      ]
    }
  },
  methods:{
    onMouseDown(event){
      document.body.style.userSelect = 'none';//禁止文本选中
      this.dragging = true;
      this.offset.x = event.clientX - this.position.x;//给相对位置初值
      this.offset.y = event.clientY - this.position.y;
      //event.target.setPointerCapture(event.pointerId);//追踪指针直到离开窗口
      document.addEventListener("pointermove",this.onMouseMove);
      document.addEventListener("pointerup",this.onMouseUp);
    },
    onMouseMove(event){
      if(this.dragging){
        this.position.x = event.clientX - this.offset.x;//更新组件位置
        this.position.y = event.clientY - this.offset.y;
      }
    },
    onMouseUp(){
      this.dragging=false;
      //event.target.releasePointerCapture(event.pointerId);
      document.removeEventListener("pointermove", this.onMouseMove);//移除鼠标移动监听器
      document.removeEventListener("pointerup", this.onMouseUp);//移除鼠标释放监听器
      document.body.style.userSelect = '';
    }
  }
}

</script>

<template>
  <div class="ArticleList-Draggable" :style="{left:position.x + 'px' , top:position.y + 'px'}" @pointerdown = "onMouseDown" v-bind="$attrs">
    <div class="ArticleList">
      <div class="ArticleListtitle">
        <div style="display: flex;font-size: 16px;justify-content: center;">
          <div>文章</div>
          <div class="ArticleListStitle">ARTICLE</div>
        </div>
      </div>
      <div class="ArticleListcontext">
        <el-carousel trigger="click" height="200px" indicator-position="none" interval="10000">
          <el-carousel-item v-for="item in ArticleCoverData" :key="item">
            <a :href="item.link">
              <div class="ArticleCoverImgItem" :style="{backgroundImage : 'url('+item.url+')'}"></div>
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ArticleList-Draggable{
  position: absolute;
  cursor:move;
  width: 400px;
  height: 250px;
  background-color: rgba(0,0,0,.88);
  box-shadow: 0 0 15px #000000;
}
.ArticleList{
  width: 100%;
  height: 100%;
}
.ArticleListtitle{
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 15px;
  color: #ffffff;
  font-family: "Source Han Sans Bold" , sans-serif;
}
.ArticleListStitle{
  box-sizing: border-box;
  font-size: 12px;
  padding-left: 6px;
  line-height: 28px;
  font-family: Source Han Sans Regular , sans-serif;
}
.ArticleCoverImgItem{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
</style>

