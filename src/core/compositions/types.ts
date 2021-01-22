import { ResponseResult } from "@/mocks/utils"
import type { Ref, UnwrapRef } from "vue"

type CallBack<T> = (params: T) => void
export interface UseOption<T = any> extends Object {
  callback?: CallBack<T>
  /**
   * 手动执行 会返回一个run函数用于执行。
   */
  immediate: boolean
  /**
   * 防抖
   */
  debounce?: boolean
}

export type Service<T = any> = (params?: any) => Promise<T>

export interface UseRequestResult<T = any> {
  /**
   * loading的状态
   */
  loading: Ref<boolean>
  /**
   * 响应性的数据
   */
  data: Ref<UnwrapRef<T>>
  /**
   * run函数,用于手动执行
   */
  run: (args:any) => Promise<ResponseResult<T>>
}
export interface UseRequest {
  <T>(service: Service, initialState: T): UseRequestResult<T>
  <T>(service: Service, initialState: T, options: UseOption): UseRequestResult<T>
}