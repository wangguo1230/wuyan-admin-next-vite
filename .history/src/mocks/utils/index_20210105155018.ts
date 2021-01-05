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

const curry = function (func: Function) {
  var args = [].slice.call(func.arguments)
  var length = func.length
  return function () {
    args.concat([].slice.call(arguments))
    if (args.length >= length) {
      func.apply(args)
    }else{
      return function(){
        
      }
    }
  }
}
