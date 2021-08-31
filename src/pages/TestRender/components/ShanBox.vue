<template>
  <div class="my-box">
    <span class="box-icon">哈哈{{ age }}</span>
    <div class="bottom-buttons">
      <button class="button-left" @click="clickLeft">左按钮</button>
      <button class="button-right" @click="clickRight">右按钮</button>
    </div>
  </div>
</template>

<script>
//   var _vm = this
//   var _h = _vm.$createElement
//   var _c = _vm._self._c || _h
//   return _c("div", { staticClass: "my-box" }, [
//     _c("span", { staticClass: "box-icon" }, [_vm._v("哈哈")]),
//     _c("div", { staticClass: "bottom-buttons" }, [
//       _c(
//         "button",
//         { staticClass: "button-left", on: { click: _vm.clickLeft } },
//         [_vm._v("左按钮")]
//       ),
//       _c(
//         "button",
//         { staticClass: "button-right", on: { click: _vm.clickRight } },
//         [_vm._v("右按钮")]
//       )
//     ])
//   ])
export default {
  name: "ShanBox",
  props: {
    age: Number,
  },
  beforeMount() {

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