import { axios } from "@/mocks"

export function getMenus() {
  return axios.post("/system/menus")
}
