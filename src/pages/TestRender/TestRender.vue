<template>
  <div>
    <ShanBox />
    <anchored-heading :level="1"> </anchored-heading>
  </div>
</template>
<script>
import ShanBox from "./components/ShanBox";

export default {
  components: {
    ShanBox,
    "anchored-heading": {
      props: {
        level: {
          type: Number,
          required: true,
        },
      },
      // let node = this.$scopedSlots;
      // debugger;
      render: function () {
        let { _c, _v } = this;
        debugger;
        let vnode = _c("div", [
          _c("h1", { class: "my-h1" }, [_v("我是头")]),
          _c("h1", [_v("我是尾")]),
        ]);
        debugger;
        return vnode;
      },
    },
  },
};
</script>
<style scoped>
</style>