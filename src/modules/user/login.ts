import { UserEnum } from "@/enums/system"
import { reactive, Ref, ref, toRaw } from "vue"
import { useRequest } from "@/core"
import { useForm } from "@ant-design-vue/use"
import { getUserInfo, loginApi, logout } from "@/api/system/user/loginApi"
import { useRouter } from "vue-router"
import { storageUtil } from "@/utils"
import { UserInfo } from "@/types/system/user"

function captchaRef() {
  const captcha = import.meta.env.VITE_APP_CAPTCHA

  const captchaSrc = ref(captcha)

  const clickCaptcha = () => {
    captchaSrc.value = captcha + "?time=" + new Date().getTime()
  }

  return { captchaSrc, clickCaptcha, }
}

export function loginReactive() {
  const visibleRef = ref(false)

  const login = reactive({
    username: "",
    password: "",
    captcha: "",
  })

  const { loading, run, data, } = useRequest(loginApi, { token: "", }, { immediate: false, })

  const rules = reactive({
    username: [
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
    captcha: [
      {
        required: true,
        message: "Please input captcha",
      }
    ],
  })

  const { validateInfos, validate, } = useForm(login, rules)

  const router = useRouter()

  const { captchaSrc, clickCaptcha, } = captchaRef()

  const onSubmit = () => {
    validate().then(() => {
      run(toRaw(login))
        .then((res) => {
          storageUtil.setStorageItem(UserEnum.Token, res.result.token)
          router.push({ name: "/", })
        })
        .catch(() => {
          clickCaptcha()
        })
    })
  }

  return {
    loading,
    run,
    data,
    visibleRef,
    onSubmit,
    login,
    validateInfos,
    captchaSrc,
    clickCaptcha,
  }
}

export const getUserInfoReactive: () => Ref<UserInfo> = () => {
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

  return data
}
