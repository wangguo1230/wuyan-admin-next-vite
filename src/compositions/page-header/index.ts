import { getMenus } from "@/api"
import { reactive, toRefs, ToRefs } from "vue"
import { User } from "./types"

export const menuCompositions = (): ToRefs<User> => {
  let user = reactive<User>({ logo: "", menus: [], })
  getMenus().then((res: any) => {
    user = Object.assign(user, res.result)
  })
  return toRefs(user)
}


