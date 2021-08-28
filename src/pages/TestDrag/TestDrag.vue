<template>
  <div>
    <!--使用draggable组件-->
    <div class="itxst">
      <span>A、B列可以相互拖动，无法拖到C列</span>
      <div class="col">
        <div class="title">A列</div>
        <!-- <draggable
          v-model="arr1"
          :group="group1"
          :sort="false"
          dragClass="dragClass"
          ghostClass="ghostClass"
          chosenClass="chosenClass"
          @start="onStart"
          @end="onEnd"
        > -->
        <!-- <transition-group> -->
        <!-- <div class="item" v-for="item in arr1" :key="item.id">
              {{ item.name }}
            </div> -->
        <draggable
          v-model="arr1"
          :group="group1"
          :sort="false"
          dragClass="dragClass"
          ghostClass="ghostClass"
          chosenClass="chosenClass"
          @start="onStart"
          @end="onEnd"
        >
          <!-- <el-tree
            :data="treeData"
            :props="defaultProps"
            @node-click="handleNodeClick"
          >
            <template class="custom-tree-node" slot-scope="{ node, data }">
              <span data-self="1">{{ node.label }}</span>
            </template>
          </el-tree> -->
          <span>哈哈</span>
        </draggable>
        <!-- </transition-group> -->
        <!-- </draggable> -->
      </div>
      <div class="col">
        <div class="title">B列</div>
        <draggable
          v-model="arr2"
          :group="group2"
          dragClass="dragClass"
          ghostClass="ghostClass"
          chosenClass="chosenClass"
          @start="onStart"
          @add="onAdd"
          @end="onEnd"
        >
          <transition-group>
            <div class="item" v-for="item in arr2" :key="item.id">
              {{ item.name }}
            </div>
          </transition-group>
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
    onStart(e) {
      console.log("onStart", e);
      this.drag = true;
    },
    onAdd(e) {
      console.log("onAdd", e);
    },
    //拖拽结束事件
    onEnd(e) {
      console.log("onEnd", e);
      this.drag = false;
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
.col {
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.col + .col {
  margin-left: 10px;
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
</style>
