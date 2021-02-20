import type { ResponseResult } from "@/utils/types"
import { ref } from "vue"
import { UseRequest, Service, UseOption, UseRequestResult } from "./types"
import { isObject } from "lodash"

/**
 * 使用request 请求,自动包装loading以及数据。
 * @param {Service} service 返回promise对象的接口服务
 * @param {T} initialState data的初始值,用于初始化
 * @param {UseOption} options 自定义参数
 */
const useRequest: UseRequest = function useRequest<T>(
  service: Service,
  initialState: T,
  options: UseOption<T> = { immediate: true, debounce: false, }
) {
  const loading = ref(false)

  const data = ref(initialState)

  const { immediate, callback, } = options

  const run: UseRequestResult<T>["run"] = (args = undefined) => {
    loading.value = true
    return new Promise((resolve, reject) => {
      service(args)
        .then((res) => {
          // @ts-ignore
          // 兼容object
          data.value = isObject(data.value)
            ? Object.assign(data.value, res.data.result)
            : res.data.result
          resolve(res.data)
        })
        .catch((res: ResponseResult<T>) => {
          reject(res)
        })
        .finally(() => (loading.value = false))
    })
  }
  if (immediate) {
    loading.value = true
    service()
      .then((res) => {
        // @ts-ignore
        // 兼容object
        data.value = isObject(data.value)
          ? Object.assign(data.value, res.data.result)
          : res.data.result
        callback && callback(data, res.data)
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
export { useRequest }
