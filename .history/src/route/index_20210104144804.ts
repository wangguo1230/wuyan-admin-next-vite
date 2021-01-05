import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('/src/')
  }
]
const route = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default route
