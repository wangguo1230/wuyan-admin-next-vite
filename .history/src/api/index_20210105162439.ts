import { axios } from "@/utils/"

export function getMenus() {
  return axios.post("/system/menus")
}
