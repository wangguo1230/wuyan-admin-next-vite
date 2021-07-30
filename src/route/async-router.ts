import { Menu } from "@/types/system/menu"
import { DefineComponent } from "vue"
import route from "./index"
interface constantRouterComponents {
  [index: string]: object
}
// 前端路由表
const constantRouterComponents: constantRouterComponents = {
  // 基础页面 layout 必须引入
  BasicLayout: ()=>import("@/layout/BasicLayout"),
  PageView: ()=>import("@/layout/PageLayout"),
}

// 前端未找到页面路由（固定不用改）
const notFoundRouter = {
  path: "*",
  redirect: "/404",
  hidden: true,
}

// 生成路由
function generatorRouter(menuList: Menu[]): { path: string }[] {
  const result =menuList.map((item) => {
    const currentRoute = {
      // name: item.permissionCode,
      path: item.permissionUrl,
      component:constantRouterComponents[item.component] || (() => import(`../views/${item.component}`))||(()=>import("@/views/system/user/User.vue")),
      redirect: item.redirect,
      meta: {
        title: item.permissionName,
      },
    }
    // 判断递归
    if (item.children && item.children.length > 0) {
      currentRoute.children = generatorRouter(item.children)
    }
    return currentRoute
  })
  return result
}
// todo 刷新导致的路由重置问题
export function addRoutes(menuList: Menu[]) {
  console.log("添加路由")
  const routes = generatorRouter(menuList)
  route.addRoute(routes[0])
  console.log(route.getRoutes())
}
