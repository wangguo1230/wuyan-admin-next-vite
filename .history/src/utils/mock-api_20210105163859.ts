import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const http = axios.create({
  baseURL: "",
  timeout: 3000
})
const mock = new MockAdapter(http)

export { mock, http as axios }
