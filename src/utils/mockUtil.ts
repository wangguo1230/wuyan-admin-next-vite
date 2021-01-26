import  MockAdapter  from "axios-mock-adapter"
import http from "./httpUtil"


const mock = new MockAdapter(http)

export default mock