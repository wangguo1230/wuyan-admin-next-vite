import axios from "@/utils/http"

export const api = {
  login: "/login",
}
interface Login {
  account: string
  password: string
}
export function login(params: Login) {
  return axios.post<string>(api.login, params)
}
