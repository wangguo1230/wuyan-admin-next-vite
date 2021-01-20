export interface ResponseResult<T> {
  /**
   * 消息
   */
  message: string
  /**
   * 结果
   */
  result: T
  /**
   * 状态码
   */
  code: number
}
const response = function <T>(code: number, message: string, result: T): ResponseResult<T> {
  const responseResult: ResponseResult<T> = {
    message,
    code,
    result,
  }
  return responseResult
}

/**
 * 成功
 */
export function success<T>(result: T) {
  return (): any => [200, response<T>(200, "请求成功", result)]
}

/**
 * 失败
 */
export function fail<T>(result: T) {
  return (): any => [500, response<T>(200, "请求成功", result)]
}
