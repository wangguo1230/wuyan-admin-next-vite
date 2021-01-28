export interface Menu {
  id: string
  permissionName: string
  permissionCode: string
  permissionUrl: string
  permissionIcon: string | null
  parentId: string
  permission: string |null
  status: string
  displayOrder: string | null |number
  permissionType: string
  component: string
  redirect: string | null
  children: Menu[] | null
}
