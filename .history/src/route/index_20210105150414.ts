// import { h } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
imp

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
