import { mock } from "@/utils/mock-api.ts"
import { success } from "./utils"
mock.onPost("/system/menus").reply(
  success([
    {
      name: "首页",
    },
    {
      name: "特点",
    },
    {
      name: "介绍",
    },
  ])
)
