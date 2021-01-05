import axios from "axios"
import MockAdapter from "axios-mock-adapter"
// var MockAdapter = require("axios-mock-adapter")
const mock = new MockAdapter(axios)
axios
export { mock, axios }
