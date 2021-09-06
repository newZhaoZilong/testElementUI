<template>
  <div class="my-box">
    <slot name="header"></slot>
    <span class="box-icon">哈哈{{ age }}</span>
  
    <div class="bottom-buttons">
      <button class="button-left" @click="clickLeft">左按钮</button>
      <button class="button-right" @click="clickRight">右按钮</button>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>

export default {
  name: "ShanBox",
  props: {
    age: Number,
  },
  beforeMount() {
    debugger
  },
  methods: {
    clickLeft() {
      console.log("点击左边");
      this.$emit("left");
    },
    clickRight() {
      console.log("点击右边");
      this.$emit("right");
    },
  },
};
</script>
<style scoped>
.my-box {
  width: 200px;
  height: 200px;
  background-color: rgba(255, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-icon {
  margin: 20px;
}

.bottom-buttons {
  display: flex;
  align-items: center;
}
.button-left {
  width: 60px;
  height: 20px;
  padding: 0;
  line-height: 20px;
  background-color: white;
}
.button-right {
  margin-left: 20px;
  width: 60px;
  height: 20px;
  padding: 0;
  line-height: 20px;
  color: white;
  background-color: blue;
}
</style>