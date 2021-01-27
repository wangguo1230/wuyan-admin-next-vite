import axios from "@/utils/httpUtil"
import { AxiosResponse } from "axios"
import { Login, UserInfo } from "@/types/system/user"
import { Service } from "@/enums"

export const api = {
  login: "/login",
  userInfo: `${Service.system}/user/getUserInfo`,
}

export function loginApi(params: Login): Promise<AxiosResponse<string>> {
  return axios.post<string>(api.login, params)
}

export function getUserInfo(): Promise<AxiosResponse<UserInfo>> {
  console.log(api.userInfo)
  
  return axios.post<UserInfo>(api.userInfo)
}
