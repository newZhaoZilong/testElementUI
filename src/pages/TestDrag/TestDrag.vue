<template>
  <div>
    <!--使用draggable组件-->
    <div class="itxst">
      <span>A、B列可以相互拖动，无法拖到C列</span>
      <div class="col">
        <div class="title">A列</div>
        <el-tree
          :data="treeData"
          :props="defaultProps"
          @node-click="handleNodeClick"
        >
          <template class="custom-tree-node" slot-scope="{ node, data }">
            <draggable
              v-if="node.isLeaf"
              v-model="data.arr"
              :group="group1"
              :sort="false"
              dragClass="dragClass"
              ghostClass="ghostClass"
              chosenClass="chosenClass"
              @start="onStart1"
              @add="onAdd1"
              @move="onMove1"
              @end="onEnd1"
            >
              <span>{{ node.label }}</span>
            </draggable>
            <span v-else>{{ node.label }}</span>
            <!-- <span >{{ node.label }}</span> -->
          </template>
        </el-tree>
      </div>
      <div class="col">
        <div class="title">B列</div>
        <draggable
          v-model="arr2"
          :group="group2"
          class="my-drag-container"
          dragClass="dragClass"
          ghostClass="ghostClass"
          chosenClass="chosenClass"
          @start="onStart2"
          @add="onAdd2"
          @move="onMove2"
          @end="onEnd2"
        >
          <!-- <transition-group> -->
          <div class="item2" v-for="item in arr2" :key="item.id">
            {{ item.name }}
          </div>
          <!-- </transition-group> -->
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TestDrag",
  //注册draggable组件
  data() {
    return {
      drag: false,
      //定义要被拖拽对象的数组
      arr1: [
        // { id: 1, name: "www.itxst.com" },
        // { id: 2, name: "www.jd.com" },
        // { id: 3, name: "www.baidu.com" },
        // { id: 4, name: "www.taobao.com" },
      ],
      arr2: [
        { id: 5, name: "www.google.com" },
        { id: 6, name: "www.msn.com" },
        { id: 7, name: "www.ebay.com" },
        { id: 8, name: "www.yahoo.com" },
        { id: 9, name: "www.ebay.com" },
        { id: 10, name: "www.yahoo.com" },
      ],
      group1: {
        name: "shared",
        pull: "clone",
      },
      group2: {
        name: "shared",
      },

      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  tid: 1,
                  label: "三级 1-1-1",
                  arr: [{ id: 1, name: "www.itxst.com" }],
                },
                {
                  tid: 2,
                  label: "三级 1-1-2",
                  arr: [{ id: 2, name: "www.itxst2.com" }],
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    //开始拖拽事件
    onStart1(e) {
      console.log("onStart1", e);
      e.item._underlying_vm_ = {
        id: 3,
        name: "卧槽",
      };
    },
    onAdd1(e) {
      console.log("onAdd1", e);
    },
    onMove1(e) {
      console.log("onMove1", e);
    },
    //拖拽结束事件
    onEnd1(e) {
      console.log("onEnd1", e);
    },
    //开始拖拽事件
    onStart2(e) {
      console.log("onStart2", e);
    },
    onAdd2(e) {
      console.log("onAdd2", e);
    },
    onMove2(e) {
      console.log("onMove2", e);
    },
    //拖拽结束事件
    onEnd2(e) {
      console.log("onEnd2", e);
    },
  },
};
</script>
<style scoped>
/*定义要拖拽元素的样式*/
.ghostClass {
  background-color: blue !important;
}
.chosenClass {
  background-color: red !important;
  opacity: 1 !important;
}
.dragClass {
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow: none !important;
  outline: none !important;
  background-image: none !important;
}
.itxst {
  margin: 10px;
}
.title {
  padding: 6px 12px;
}

.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
}
.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}
.item + .item {
  border-top: none;
  margin-top: 6px;
}
.my-drag-container {
  width: 500px;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
}

.item2 {
  margin: 10px;
  width: 100px;
  height: 100px;
  background: red;
}
</style>
