import axios from "@/utils/http"
import { Login } from "./types"

export const api = {
  login: "/login",
}

export function loginApi(params: Login) {
  return axios.post<string>(api.login, params)
}
