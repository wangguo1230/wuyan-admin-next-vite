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
const response = function (code: Number, message: String, result: Object) {
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
export function success(result: Object) {
  return function () {
    return [200, response(200, "请求成功", result)]
  }
}

/**
 * 失败
 */
export function fail() {
  return result(500, "请求失败")
}
