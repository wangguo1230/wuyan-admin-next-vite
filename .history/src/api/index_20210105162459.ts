import { axios } from "@/utils/mock-api"

export function getMenus() {
  return axios.post("/system/menus")
}
