interface ResponseResult {
  /**
   * 消息
   */
  message: String
  /**
   * 结果
   */
  result: Object
  /**
   * 状态码
   */
  code: Number
}

export const  result=function(){
  const result:ResponseResult={
    message:'',
    
  };
  return  result;
}
