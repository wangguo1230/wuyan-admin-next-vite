import http from ''
import MockAdapter from "axios-mock-adapter"


const mock = new MockAdapter(http)

export { mock, http as axios }
