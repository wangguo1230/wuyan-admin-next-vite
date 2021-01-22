import axios from "@/utils/http"
import { login } from "./loginApi"

export function getMenus<T>() {
  return axios.post<T>("/system/menus")
}

export { login }
