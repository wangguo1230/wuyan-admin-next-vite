import axios from "@/utils/http"

export function getMenus() {
  return axios.post("/system/menus")
}
