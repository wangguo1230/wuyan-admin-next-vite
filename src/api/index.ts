
import axios from "@/utils/http"
export function getMenus<T>() {
  return axios.post<T>("/system/menus")
}
