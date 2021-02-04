import { Menu } from "./menu"

export interface Login {
  account: string
  password: string
}

export interface UserInfo {
  id: string
  name: string
  account: string
  password: string
  sex: string
  mobilePhone: string
  email: string
  idCard: string
  isAdmin: boolean
  status: string
  avatar?:string,
  menuList: Menu[]
  permissionList: Menu[]
}
