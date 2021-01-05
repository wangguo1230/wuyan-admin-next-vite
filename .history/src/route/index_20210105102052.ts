
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("/@/layout/PageLayout.tsx"),
  },
]
const route = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default route
