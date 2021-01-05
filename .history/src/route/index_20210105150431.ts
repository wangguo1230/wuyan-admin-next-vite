// import { h } from 'vue';
import { createRouter, createWebHistory } from "vue-router"
import typeof { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw = [
  {
    path: "/",
    component: () => import("@/layout/PageLayout"),
  },
]
const route = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default route
