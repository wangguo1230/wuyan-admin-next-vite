import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    name:"login",
    path: "/",
    component: () => import("@/views/Login/login.vue"),
  },{
    name:"main",
    path:"/main",
    component:()=>import("@/layout/PageLayout"),
  }
]
const route = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default route
