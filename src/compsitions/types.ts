import type { Ref, UnwrapRef } from "vue"
export interface UseOption extends Object {
  /**
   * 手动执行 会返回一个run函数用于执行。
   */
  manual?: boolean
  /**
   * 防抖
   */
  debounce?: boolean
}

export type Service<T = any> = (params?: any) => Promise<T>

export interface UseRequestResult<T> {
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
  run: (...args: any) => Promise<any>
}

export interface UseRequest<T = any> {
  (service: Service, initialState: T, options: UseOption): UseRequestResult<T>
}