import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { storageUtil } from "@/utils"
import { UserEnum } from "@/enums/system"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"
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

route.beforeEach((to) => {
  Nprogress.start()
  const token = storageUtil.getStorageItem(UserEnum.Token)
  if (!token && to.name !== "login") {
    return "/login"
  }
  return true
})

route.afterEach(Nprogress.done)

export default route
