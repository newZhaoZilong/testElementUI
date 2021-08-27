<template>
  <div>
    <ul id="items1">
      <li class="item">item 1</li>
      <li class="item">item 2</li>
      <li class="item">item 3</li>
    </ul>
    <div id="items2">
      <div class="div-item">item 1</div>
      <div class="div-item">item 2</div>
      <div class="div-item">item 3</div>
    </div>
  </div>
</template>
<script>
import Sortable from "../../components/draggable/Sortable";
export default {
  name: "TestSortable",
  mounted() {
    console.log("haha");
    var el1 = document.getElementById("items1");
    var sortable1 = new Sortable(el1, {
      //   draggable: ".item",
      group: "share",
      onAdd(e) {
        console.log("sortables1===>onAdd", e);
      },
      onEnd(e) {
        console.log("sortables1===>onEnd", e);
      },
    });
    var el2 = document.getElementById("items2");
    var sortables2 = new Sortable(el2, {
      group: "share",
      onAdd(e) {
          debugger
        console.log("sortables2===>onAdd", e);
      },
      onEnd(e) {
        console.log("sortables2===>onEnd", e);
      },
      //   draggable: ".item",
    });
  },
};
</script>
<style scoped>
.div-item {
  width: 100px;
  height: 100px;
  background: red;
  border: 10px solid green;
}
</style>