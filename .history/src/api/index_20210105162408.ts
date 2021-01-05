import { axios } from '@/mocks';

export function getMenus() {
  return axios.post(url,params)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err); 
  })
}