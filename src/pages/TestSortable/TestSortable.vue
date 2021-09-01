<template>
  <div>
    <ul id="items1" class="items1">
      <li class="li-item">item 1</li>
      <li class="li-item">item 2</li>
      <li class="li-item">item 3</li>
    </ul>
    <div id="items2" class="items2">
      <div class="div-item">item 4</div>
      <div class="div-item">item 5</div>
      <div class="div-item">item 6</div>
      <div class="div-item">item 7</div>
      <div class="div-item">item 8</div>
      <div class="div-item">item 9</div>
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
    let sortable1 = new Sortable(el1, {
      //   draggable: ".item",
      sort: false,
      group: {
        name: "share",
        put: false,
        pull: "clone",
      },
      onStart(e) {
        console.log("onStart1", e);
      },
      //, /**Event*/ originalEvent
      onMove: function (/**Event*/ e) {
        // Example: https://jsbin.com/nawahef/edit?js,output
        // evt.dragged; // dragged HTMLElement
        // evt.draggedRect; // DOMRect {left, top, right, bottom}
        // evt.related; // HTMLElement on which have guided
        // evt.relatedRect; // DOMRect
        // evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        // originalEvent.clientY; // mouse position
        // debugger;
        // console.log("dragged", evt.dragged);
        // console.log("draggedRect", evt.draggedRect);
        // console.log("related", evt.related);
        // console.log("relatedRect", evt.relatedRect);
        // console.log("willInsertAfter", evt.willInsertAfter);
        // console.log("clientY", evt.clientY);
        // return false; — for cancel
        // return -1; — insert before target
        // return 1; — insert after target
        let createNodeByOld = function (old) {
          let innerText = old.innerText;
          let newNode = document.createElement("div");
          newNode.innerText = innerText + "haha";
          return newNode;
        };
        //创建一个新的节点
        let newnode = createNodeByOld(e.dragged);
        // debugger;
        e.dragged = newnode;
        console.log("onMove1", e);
      },
      onAdd(e) {
        console.log("onAdd1", e);
      },
      onEnd(e) {
        // debugger;
        console.log("onEnd1", e);
      },
    });
    let pre = sortable1._prepareDragStart;
    sortable1._prepareDragStart = function (evt, touch, target) {
      let createNodeByOld = function (old) {
        let innerText = old.innerText;
        let newNode = document.createElement("div");
        newNode.innerText = "你大爷";
        return newNode;
      };
      let newTarget = createNodeByOld(target);
      newTarget.parentNode = target.parentNode
      debugger
      return pre.call(this, evt, touch, newTarget);
    };

    var el2 = document.getElementById("items2");
    new Sortable(el2, {
      group: "share",
      onStart: function (e) {
        console.log("onStart2", e);
      },
      //, /**Event*/ originalEvent
      onMove: function (/**Event*/ e) {
        // debugger;
        // Example: https://jsbin.com/nawahef/edit?js,output
        // evt.dragged; // dragged HTMLElement
        // evt.draggedRect; // DOMRect {left, top, right, bottom}
        // evt.related; // HTMLElement on which have guided
        // evt.relatedRect; // DOMRect
        // evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        // originalEvent.clientY; // mouse position
        // return false; — for cancel
        // return -1; — insert before target
        // return 1; — insert after target
        // console.log("dragged", evt.dragged);
        // console.log("draggedRect", evt.draggedRect);
        // console.log("related", evt.related);
        // console.log("relatedRect", evt.relatedRect);
        // console.log("willInsertAfter", evt.willInsertAfter);
        // console.log("clientY", evt.clientY);
        console.log("onMove2", e);
        e.dragged.style.width = 100;
        e.dragged.style.height = 100;
      },
      onAdd(e) {
        // debugger;
        console.log("onAdd2", e);
        return;
        // //, clone
        // let { target, item } = e;
        // let createNodeByOld = function (old) {
        //   let innerText = old.innerText;
        //   let newNode = document.createElement("div");
        //   newNode.innerText = innerText;
        //   return newNode;
        // };
        // //创建一个新的节点
        // let newnode = createNodeByOld(item);
        // // target.insertBefore(newnode,clone);
        // // //通过replaceChild方法替换节点
        // target.replaceChild(newnode, item);
        // return newnode;
      },
      onEnd(e) {
        console.log("onEnd2", e);
      },

      //   draggable: ".item",
    });
  },
  methods: {},
};
</script>
<style scoped>
.items2 {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}

.div-item {
  margin: 10px;
  width: 100px;
  height: 100px;
  background: red;
  border: 10px solid green;
}
</style>