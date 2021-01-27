import { UserEnum } from "@/enums/system"
import { reactive, ref, toRaw, toRefs, watch } from "vue"
import { useRequest } from "@/core"
import { useForm } from "@ant-design-vue/use"
import { getUserInfo, loginApi } from "@/api"
import { useRouter } from "vue-router"
import { storageUtil } from "@/utils"
import { UserInfo } from "@/types/system/user"

export function loginReactive() {
  const visibleRef = ref(false)
  const login = reactive({
    account: "1",
    password: "1",
  })
  const { loading, run, data, } = useRequest(loginApi, "", { immediate: false, })
  const rules = reactive({
    account: [
      {
        required: true,
        message: "Please input account",
      }
    ],
    password: [
      {
        required: true,
        message: "Please input password",
      }
    ],
  })

  const { validateInfos, validate, } = useForm(login, rules)

  const router = useRouter()

  const onSubmit = () => {
    validate().then(() => {
      run(toRaw(login)).then((res) => {
        storageUtil.setStorageItem(UserEnum.Token, res.result)
        router.push({ name: "main", })
      })
    })
  }
  return { loading, run, data, visibleRef, onSubmit, login, validateInfos, }
}

export const getUserInfoReactive = () => {
  const { data, } = useRequest<UserInfo>(getUserInfo, {
    id: "",
    name: "",
    account: "",
    password: "",
    sex: "",
    mobilePhone: "",
    email: "",
    idCard: "",
    isAdmin: false,
    status: "",
    menuList: [],
    permissionList: [],
  })
  return toRefs(data.value)
}
