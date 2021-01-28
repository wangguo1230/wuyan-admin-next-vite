import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/Login.vue"),
  },
  {
    name: "/",
    path: "/",
    component: () => import("@/layout/BasicLayout"),
    children: [
      {
        name: "system",
        path: "/system",
        component: () => import("@/layout/PageLayout"),
        // redirect: "/system/user",
        children: [
          {
            name: "user",
            path: "/system/user",
            component: () => import("@/views/system/user/User.vue"),
          }
        ],
      }
    ],
  }
]
const route = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default route
