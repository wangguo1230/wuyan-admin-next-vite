import axios from "axios"
import { AxiosResponse } from "axios"
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 3000,
})

http.interceptors.response.use(
  function (response: AxiosResponse<AxiosResponse>) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default http
