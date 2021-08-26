<template>
  <router-view />
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
  created() {},
  mounted() {},
  methods: {},
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
