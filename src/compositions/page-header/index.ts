import { getMenus } from "@/api"
import { ref } from "vue"
import type { Ref } from "vue"

interface Menu {
  name?: string
}

export const menuCompositions = (): Ref<Menu[]> => {
  const menus = ref<Menu[]>([])
  getMenus().then((res: any) => {
    menus.value = res.result
  })
  return menus
}
