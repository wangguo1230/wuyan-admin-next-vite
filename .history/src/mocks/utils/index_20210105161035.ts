interface ResponseResult {
  /**
   * 消息
   */
  message: String
  /**
   * 结果
   */
  result?: Object
  /**
   * 状态码
   */
  code: Number
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

/**
 * 成功
 */
export function success() {
  return result(200, "请求成功")
}

/**
 * 失败
 */
export function fail() {
  return result(500, "请求失败")
}
