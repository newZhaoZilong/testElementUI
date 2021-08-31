import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)

function getComponent(name) {
    return function () {
        return import(`@/pages/${name}/${name}`)
    }
}
const routes = [
    { path: '/', component: getComponent("Main"), alias: '/Main' },
    { path: '/Foo', component: getComponent("Foo") },
    { path: '/Bar', component: getComponent("Bar") },
    { path: '/TestDrag', component: getComponent("TestDrag") },
    { path: '/TestSortable', component: getComponent("TestSortable") },
    { path: '/MyDrag', component: getComponent("MyDrag") },
    { path: '/TestRender', component: getComponent("TestRender") },
]

export default new VueRouter({
    mode: "hash",
    routes // (缩写) 相当于 routes: routes
})