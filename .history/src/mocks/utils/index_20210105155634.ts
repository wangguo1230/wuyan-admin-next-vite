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

const curry = function (func: Function,args) {
  var length =func.length;
  var args=arguments
}
