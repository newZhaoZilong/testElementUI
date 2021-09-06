<script>
import ShanBox from "./ShanBox";
export default {
  name: "ShanWrap",
  render() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    debugger;
    this.$slots.header[0].attrs.slot = this.$slots.header[0].slot;
    this.$slots.footer[0].attrs.slot = this.$slots.footer[0].slot;
    
    return _c(ShanBox, { attrs: _vm.$attrs, on: _vm.$listeners }, [
      _c("span", { attrs: { slot: "header" }, slot: "header" }, [
        _vm._v("我是头"),
      ]),
      _c("span", { attrs: { slot: "footer" }, slot: "footer" }, [
        _vm._v("我是脚"),
      ]),
      //  this.$slots.header[0],
      // this.$slots.footer[0],
    ]);
  },
};
</script>