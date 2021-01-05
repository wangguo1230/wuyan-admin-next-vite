import axios from "axios"
import MockAdapter from "axios-mock-adapter"
// var MockAdapter = require("axios-mock-adapter")
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
const http = axios.cre
const mock = new MockAdapter()

export { mock, axios }
