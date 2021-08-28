<template>
  <div>
    我的拖动
    <div
      class="my-drag"
      draggable="true"
      @dragstart="dragstart"
      @dragend="dragend"
    ></div>
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
      let { target, clientX, clientY, offsetX, offsetY, screenX, screenY } = e;
      this.offsetX = offsetX;
      this.offsetY = offsetY;
    },
    dragend(e) {
      console.log("dragend", e);
      let { target, clientX, clientY, offsetX, offsetY, screenX, screenY } = e;
      let newNode = target.cloneNode();
      newNode.style.position = "fixed";
      newNode.style.left = clientX - this.offsetX + "px";
      newNode.style.top = clientY - this.offsetY + "px";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(newNode);
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
</style>