export interface ResponseResult {
  /**
   * 消息
   */
  message: string
  /**
   * 结果
   */
  result?: any
  /**
   * 状态码
   */
  code: number
}
const response = function (code: number, message: string, result: any) {
  const responseResult: ResponseResult = {
    message,
    code,
    result,
  }
  return responseResult
}

/**
 * 成功
 */
export function success(result: any) {
  return (): any => [200, response(200, "请求成功", result)]
}

/**
 * 失败
 */
export function fail(result: any) {
  return (): any => [500, response(200, "请求成功", result)]
}
