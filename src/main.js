import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import draggable from './components/draggable/vuedraggable';
Vue.component("draggable", draggable);
Vue.config.productionTip = false;


import router from "../router";


Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

