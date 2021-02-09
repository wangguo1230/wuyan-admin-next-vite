import { ResponseCode, ResponseResult } from "./types"
import Axios from "axios"
import { AxiosResponse } from "axios"
import { message, notification } from "ant-design-vue"
import { storageUtil } from "."
import { UserEnum } from "@/enums/system"

const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_API as string,
  timeout: 30000,
})

axios.interceptors.request.use(
  (config) => {
    config.headers[UserEnum.Token] = storageUtil.getStorageItem(UserEnum.Token)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response: AxiosResponse<ResponseResult>) {
    if (response.data.code != ResponseCode.SUCCESS) {
      notification.error({
        message: response.data.code,
        description: response.data.message,
      })
      return Promise.reject(response.data)
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axios
