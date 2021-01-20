import mock from "@/utils/mock"
import { success } from "./utils"
export interface User {
  logo: string
  menus: any[]
}
// 菜单
mock.onPost("/system/menus").reply(
  success<User>({
    logo: "wu-yan",
    menus: [
      {
        name: "首页",
      },
      {
        name: "特点",
      },
      {
        name: "介绍",
      }
    ],
  })
)
