const menuList: Array<any> = [
  {
    id: "1",
    permissionName: "首页",
    permissionCode: "index",
    permissionUrl: "/",
    permissionIcon: null,
    parentId: "0",
    permission: null,
    status: "1",
    displayOrder: 1,
    permissionType: "menu",
    component: "BasicLayout",
    redirect: "/system/user",
    children: [
      {
        id: "2",
        permissionName: "系统管理",
        permissionCode: "system",
        permissionUrl: "system",
        permissionIcon: "table",
        parentId: "1",
        permission: null,
        status: "1",
        displayOrder: 2,
        permissionType: "menu",
        component: "PageView",
        redirect: "/system/user",
        children: [
          {
            id: "3",
            permissionName: "人员管理",
            permissionCode: "user",
            permissionUrl: "user",
            permissionIcon: "user",
            parentId: "2",
            permission: null,
            status: "1",
            displayOrder: 3,
            permissionType: "menu",
            component: "system/user/UserList",
            redirect: "",
            children: null,
          }
        ],
      }
    ],
  }
]

function joinPath(menuList: Array<any>, parent: any) {
  menuList.forEach((item) => {
    if (parent) {
      if (!item.permissionUrl.startsWith("/")) {
        const prefix = parent.permissionUrl === "/" ? "" : parent.permissionUrl
        item.permissionUrl = prefix + "/" + item.permissionUrl
      }
    }
    if (item.children) {
      joinPath(item.children, item)
    }
  })
}

joinPath(menuList, null)

console.log(JSON.stringify(menuList))
