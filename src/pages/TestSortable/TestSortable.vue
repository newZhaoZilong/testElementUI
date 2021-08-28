<template>
  <div>
    <ul id="items1">
      <li class="li-item">item 1</li>
      <li class="li-item">item 2</li>
      <li class="li-item">item 3</li>
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
      sort: false,
      group: {
        name: "share",
        put: false,
        pull: "clone",
      },
      onAdd(e) {
        console.log("sortables1===>onAdd", e);
      },
      onMove: function (/**Event*/ evt, /**Event*/ originalEvent) {
        // Example: https://jsbin.com/nawahef/edit?js,output
        evt.dragged; // dragged HTMLElement
        evt.draggedRect; // DOMRect {left, top, right, bottom}
        evt.related; // HTMLElement on which have guided
        evt.relatedRect; // DOMRect
        evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        originalEvent.clientY; // mouse position
        // debugger;
        console.log("dragged", evt.dragged);
        console.log("draggedRect", evt.draggedRect);
        console.log("related", evt.related);
        console.log("relatedRect", evt.relatedRect);
        console.log("willInsertAfter", evt.willInsertAfter);
        console.log("clientY", evt.clientY);
        // return false; — for cancel
        // return -1; — insert before target
        // return 1; — insert after target
      },
      onEnd(e) {
        // debugger;
        console.log("sortables1===>onEnd", e);
      },
    });
    var el2 = document.getElementById("items2");
    var sortables2 = new Sortable(el2, {
      group: "share",
      onAdd(e) {
        // debugger;
        console.log("sortables2===>onAdd", e);

        let { target, clone, item } = e;
        let createNodeByOld = function (old) {
          let innerText = old.innerText;
          let newNode = document.createElement("div");
          newNode.innerText = innerText;
          return newNode;
        };
        //创建一个新的节点
        let newnode = createNodeByOld(item);
        // target.insertBefore(newnode,clone);
        // //通过replaceChild方法替换节点
        target.replaceChild(newnode, item);
        return newnode;
      },
      onMove: function (/**Event*/ evt, /**Event*/ originalEvent) {
        // debugger;
        // Example: https://jsbin.com/nawahef/edit?js,output
        evt.dragged; // dragged HTMLElement
        evt.draggedRect; // DOMRect {left, top, right, bottom}
        evt.related; // HTMLElement on which have guided
        evt.relatedRect; // DOMRect
        evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        originalEvent.clientY; // mouse position
        // return false; — for cancel
        // return -1; — insert before target
        // return 1; — insert after target
        console.log("dragged", evt.dragged);
        console.log("draggedRect", evt.draggedRect);
        console.log("related", evt.related);
        console.log("relatedRect", evt.relatedRect);
        console.log("willInsertAfter", evt.willInsertAfter);
        console.log("clientY", evt.clientY);
      },
      onEnd(e) {
        console.log("sortables2===>onEnd", e);
      },

      //   draggable: ".item",
    });
  },
  methods: {},
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