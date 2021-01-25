import { reactive, ref, toRaw } from "vue"
import { useRequest } from "@/core"
import { useForm } from "@ant-design-vue/use"
import { loginApi } from "@/api"
import { message } from "ant-design-vue"
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
  const onSubmit = () => {
    validate()
      .then((res) => {
        console.log(res)

        run(toRaw(login)).then((res) => {
          message.info(res.result)
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return { loading, run, data, visibleRef, onSubmit, login, validateInfos, }
}
