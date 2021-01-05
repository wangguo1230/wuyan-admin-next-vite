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
const result = function (code: Number,message: String, result: Object) {
  const responseResult: ResponseResult = {
    message: "",
    result: "",
  }
  return responseResult
}
export function success(){
  return result()
}