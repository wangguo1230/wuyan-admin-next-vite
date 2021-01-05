interface ResponseResult {
  /**
   * 消息
   */
  message?: String
  /**
   * 结果
   */
  result: Object
  /**
   * 状态码
   */
  code?: Number
}
const result = function (message: String, result: Object, code: Number) {
  const responseResult: ResponseResult = {
    message: "",
    result: "",
  }
  return responseResult
}

const curry = function (func: Function, args: Array<Object>) {
  var length = func.length
  var args = args || []
  return function () {
    // 拼接参数
    args = args.concat(Array.prototype.slice.call(arguments))
    if (args.length >= length) {
      func.apply(null, args)
    } else {
      return curry.call(null, func, args)
    }
  }
}
