import { axios } from "@utils/mock"

export function getMenus() {
  return axios.post("/system/menus")
}
