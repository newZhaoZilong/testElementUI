<script>
import ShanBox from "./ShanBox";
export default {
  name: "ShanWrap",
  render(h) {
    let { _c, _v } = this;
    return _c(ShanBox, {
      props: this.$attrs,
      on: this.$listeners,
    });
  },
};
</script>