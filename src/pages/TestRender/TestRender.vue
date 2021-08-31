<template>
  <div>
    <ShanWrap :age="18" @left="leftBt" @right="rightBt" />
    <anchored-heading :level="1"> </anchored-heading>
  </div>
</template>
<script>
import ShanWrap from "./components/ShanWrap";

export default {
  components: {
    ShanWrap,
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

        let vnode = _c("div", [
          _c("h1", { class: "my-h1" }, [_v("我是头")]),
          _c("h1", [_v("我是尾")]),
        ]);

        return vnode;
      },
    },
  },

  methods: {
    leftBt(e) {
      console.log("leftBt", e);
    },
    rightBt(e) {
      console.log("rightBt", e);
    },
  },
};
</script>
<style scoped>
</style>