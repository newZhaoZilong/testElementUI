<template>
  <div>
    我的拖动
    <div
      class="my-drag"
      draggable="true"
      @dragstart="dragstart"
      @dragend="dragend"
      @drop="onDrop1"
    ></div>
    <div class="my-container" @dragover.prevent @drop="onDrop2"></div>
  </div>
</template>
<script>
export default {
  name: "MyDrag",
  data() {
    return {
      offsetX: 0,
      offsetY: 0,
    };
  },
  created() {
    console.log("haha");
  },
  methods: {
    dragstart(e) {
      console.log("dragstart", e);
      e.dataTransfer.setData("index", 10);
      // let { target, clientX, clientY, offsetX, offsetY, screenX, screenY } = e;
      // this.offsetX = offsetX;
      // this.offsetY = offsetY;
    },
    dragend(e) {
      console.log("dragend", e);
      // let { target, clientX, clientY, offsetX, offsetY, screenX, screenY } = e;
      // let newNode = target.cloneNode();
      // newNode.style.position = "fixed";
      // newNode.style.left = clientX - this.offsetX + "px";
      // newNode.style.top = clientY - this.offsetY + "px";
      // let body = document.getElementsByTagName("body")[0];
      // body.appendChild(newNode);
    },
    onDrop1(e) {
      console.log("onDrop1", e);
    },
    onDragover(e) {
      console.log("onDragover", e);
    },
    onDrop2(e) {
      let index = e.dataTransfer.getData("index");
      console.log(index);
      console.log("onDrop2", e);
    },
  },
};
</script>
<style scoped>
.my-drag {
  width: 100px;
  height: 100px;
  background-color: pink;
  border: 10px solid #378b37;
}
.my-container {
  margin: 100px;
  width: 200px;
  height: 200px;
  background-color: yellow;
  border: 10px solid red;
}
</style>