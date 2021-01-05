import axios from "axios"
import MockAdapter from "axios-mock-adapter"
// var MockAdapter = require("axios-mock-adapter")
const mock = new MockAdapter(axios.create())

export { mock, axios }
