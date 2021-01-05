import axios from "axios"

const axios = axios.create({
  baseURL: "",
  timeout: 3000,
})

http.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default http
