import { UserEnum } from "@/enums/system"
import { reactive, ref, toRaw } from "vue"
import { useRequest } from "@/core"
import { useForm } from "@ant-design-vue/use"
import { loginApi } from "@/api"
import { useRouter } from "vue-router"
import { storageUtil } from "@/utils"
export function loginReactive() {
  let visibleRef = ref(false)
  let login = reactive({
    account: "",
    password: "",
  })
  let { loading, run, data, } = useRequest(loginApi, "", { immediate: false, })

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
    validate()
      .then((res) => {
        run(toRaw(login)).then((res) => {
          storageUtil.setStorageItem(UserEnum.Token, res.result)
          router.push({ name: "main", })
        })
      })
  }
  return { loading, run, data, visibleRef, onSubmit, login, validateInfos, }
}
