
export interface Menu {
  id: string
  permissionName: string
  permissionCode: string
  permissionUrl: string
  permissionIcon: string
  parentId: string
  permission: string
  status: string
  displayOrder: string
  permissionType: string
  component: string
  redirect: string
  children: Menu[]
}
