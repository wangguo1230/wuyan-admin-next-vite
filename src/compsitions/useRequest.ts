
import { ResponseResult } from "@/mocks/utils"
import { ref } from "vue"
import { UseRequest,Service,UseOption,UseRequestResult } from "./types"



export let useRequest: UseRequest = function useRequest<T>(
  service: Service,
  initialState: T,
  options: UseOption = { manual: false, debounce: false, }
) {
  let loading = ref(false)

  let data = ref(initialState)

  const { manual, } = options

  let run = () => new Promise(() => {})

  if (manual) {
    run = (...args: any) => {
      loading.value = true
      return new Promise((resolve, reject) => {
        service(...args)
          .then((res: ResponseResult<T>) => {
            // @ts-ignore
            data.value = res.result
            resolve(res)
          })
          .catch((res: ResponseResult<T>) => {
            reject(res)
          })
          .finally(() => (loading.value = false))
      })
    }
  } else {
    loading.value = true
    service()
      .then((res: ResponseResult<T>) => {
        // @ts-ignore
        data.value = ref(res.result)
      })
      .finally(() => (loading.value = false))
  }
  
  const _default: UseRequestResult<T> = {
    loading,
    data,
    run,
  }
  return _default
}
