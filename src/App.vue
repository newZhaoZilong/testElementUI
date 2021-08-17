<template>
  <div>
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>
    <div @click="getClick">
      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <el-button slot="reference">click 激活</el-button>
      </el-popover>
    </div>
    <el-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
    </el-popover>
    <el-button v-popover:popover>focus 激活</el-button>

    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible"
    >
      <el-button slot="reference" @click="visible = !visible"
        >手动激活</el-button
      >
    </el-popover>
    <el-button
      @click.stop="drawer = true"
      type="primary"
      style="margin-left: 16px"
    >
      点我打开
    </el-button>

    <el-drawer
      @click.stop
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
    >
      <span @click.stop>我来啦!</span>
    </el-drawer>
    <div ref="mydiv" class="my-div"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      visible: false,
      mydiv: null,
      drawer: false,
    };
  },
  created() {
    window.addEventListener("click", () => {
      console.log("haha");
    });
    document.addEventListener("click", () => {
      console.log("我去尼玛");
    });
    
  },
  mounted() {
    let draw = document.getElementsByClassName("el-drawer__wrapper")[0];
    draw.addEventListener("click",(e)=>{
      e.stopPropagation();
    })
    console.log(draw);
  },
  methods: {
    getClick(e) {
      console.log("iiiii", e);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.my-div {
  position: fixed;
  right: 200px;
  top: 200px;
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
