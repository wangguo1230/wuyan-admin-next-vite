import { UseKey } from "@/enums"
import { get, isFunction, isObject, PropertyPath, set } from "lodash"
import { customRef, inject, InjectionKey, provide, readonly, Ref } from "vue"
import { updateEvent } from "./types"

/**
 * 注入数据
 * @param key 注入的key
 * @param value 注入的值
 * @param event 修改值的事件 默认支持 path 和全部注入 如果不传入的话 有默认的实现函数
 */
export const useProvide = <T extends object>(
  key: string,
  value: Ref<T>,
  event?: updateEvent<T>
): void => {
  
  // 注入
  provide(key, readonly(value.value))

  // 注册更新事件
  const updateEvent =
    event ||
    ((newVal: T, path: PropertyPath | undefined) => {
      if (path) {
        set(value.value, path, newVal)
      } else {
        value.value = isObject(newVal) ? Object.assign(value.value, newVal) : newVal
      }
    })

  // 注入更新事件
  provide(key + UseKey.Event, updateEvent)
}

/**
 * 自定义ref JSX或渲染函数需要.value才可以获取到 模板自动解构
 * @param key 注入的key值
 * @param defaultVal 默认值
 * @param path 路径
 */
export const useInject = <T>(key: string, defaultVal: Ref<T>, path?: PropertyPath): Ref<T> => {
  // 初始值
  const injectValue = inject(key) || {}
  // 使用事件对对象进行更改
  // 因为作用域原因 不能放到set中
  const event = inject(key + UseKey.Event)

  return customRef((track, trigger) => ({
    get() {
      track()
      console.log("get")
      if (!path) {
        return injectValue
      }
      return get(injectValue, path, defaultVal)
    },
    set(value) {
      trigger()

      defaultVal.value = value

      if (event && isFunction(event)) {
        event(value, path)
      }
    },
  }))
}
