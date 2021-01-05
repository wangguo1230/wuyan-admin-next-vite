interface ResponseResult {
  /**
   * 消息
   */
  message?: String
  /**
   * 结果
   */
  result?: Object
  /**
   * 状态码
   */
  code?: Number
}
const result = function (code: Number, message: String) {
  const responseResult: ResponseResult = {
    message,
    code,
  }
  return function (result: Object) {
    responseResult.result = result
    return responseResult
  }
}
export function success() {
  return result(200)
}
