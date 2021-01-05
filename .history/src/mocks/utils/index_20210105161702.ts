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
const result = function (code: Number, message: String, result: Object) {
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
export function success(data) {
  return function (config) {
    return [200, result(200, "请求成功", data)]
  }
}

/**
 * 失败
 */
export function fail() {
  return result(500, "请求失败")
}
