import { isUndefined } from "lodash"
import { inject, InjectionKey, isReactive, isRef, provide, ref, Ref, UnwrapRef, watch } from "vue"

export const useProvide = <T>(key: InjectionKey<T> | string, value: T): void => {
  provide(key, value)
}

// todo 需要使用customRef 来解决不统一的问题
export const useInject = <T>(
  key: InjectionKey<T> | string,
  defaultVal: Ref<T>,
  path?: string
): Ref<T> => {
  // 初始值
  const injectValue: any = inject(key)

  if (!injectValue) {
    return defaultVal
  }

  // 要返回的结果
  let result: any = injectValue

  // path
  let pathArray: string[] = []

  // 是否解析子级
  if (result && path) {
    // 如果 path为 a.b.c 解析子级
    if (path.includes(".")) {
      pathArray = path.split(".")

      pathArray.forEach((variable: string) => {
        result = result && result[variable]
      })
    } else {
      result = result[path]
      pathArray.push(path)
    }
  }

  // 如果结果是undefined 会返回defaultVal
  // 这个方法用来监听 父组件的值 来和 defaultVal 做关联
  if (isUndefined(result) && path) {
    let watchObj = null

    // 标识是否以path的第一级为监听对象
    let flag = true

    // 第一级路径
    const firstPath = pathArray[0]

    // 首先以path的第一级为监听对象
    if (
      injectValue[firstPath] &&
      (isReactive(injectValue[firstPath]) || isRef(injectValue[firstPath]))
    ) {
      // 赋值
      watchObj = injectValue[firstPath]
      flag = false
    } else if (isReactive(injectValue) || isRef(injectValue)) {
      // 以inject 的值为监听对象
      watchObj = injectValue
    } else {
      throw "inject value is can not reactive"
    }

    // 监听
    watch(
      watchObj,
      (value) => {
        value = ref(value)
        pathArray.forEach((item, index) => {
          if (flag) {
            value = value && value[item]
          } else {
            if (index > 0) {
              value = value && value[item]
            }
          }
        })
        defaultVal.value = value
      },
      { deep: true, }
    )
  }

  return result || defaultVal
}
