export enum ResponseCode {
  /**
   * 成功
   */
  SUCCESS = 1,
  /**
   * 失败
   */
  FAIL = 0
}

export interface ResponseResult<T = any> {
  /**
   * 消息
   */
  message: string
  /**
   * 结果
   */
  result: T
  /**
   * 状态码
   */
  code: ResponseCode
}
