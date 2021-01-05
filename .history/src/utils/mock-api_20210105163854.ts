import axios from "axios"
import MockAdapter from "axios-mock-adapter"
// var MockAdapter = require("axios-mock-adapter")
http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
const http = axios.create({
  baseURL: "",
  timeout: 3000
})
const mock = new MockAdapter(http)

export { mock, http as axios }
