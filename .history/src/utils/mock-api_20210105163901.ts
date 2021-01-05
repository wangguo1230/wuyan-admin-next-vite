import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const http = axios.create({
  baseURL: "",
  timeout: 3000
})http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
const mock = new MockAdapter(http)

export { mock, http as axios }
