import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const mock = new MockAdapter(axios);
export axios=axios;
// export default { axios, mock }