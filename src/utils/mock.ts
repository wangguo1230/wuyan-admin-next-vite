import  MockAdapter  from "axios-mock-adapter"
import http from "./http"


const mock = new MockAdapter(http)

export default mock