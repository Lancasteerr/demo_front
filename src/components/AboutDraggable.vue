<script>

export default {
  name:"AboutDraggable",
  data(){
    return {
      position: {
        x: 0,
        y: 0,
      },
      dragging: false,
      offset: {
        x: 0,
        y: 0,
      }
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
  <div class="About-Draggable" :style="{left:position.x + 'px' , top:position.y + 'px'}" @pointerdown = "onMouseDown" v-bind="$attrs">
    <p class="About-Par">这是一个可拖拽组件</p>
  </div>
</template>

<style scoped lang="scss">
.About-Draggable{
  position: absolute;
  cursor:move;
  width: 400px;
  height: 135px;
  background-color: rgba(0,0,0,.88);
  box-shadow: 0 0 15px #000000;
}
.About-Par{
  padding: 15px;
  color: #ffffff;
  margin: 0px;
}
</style>
