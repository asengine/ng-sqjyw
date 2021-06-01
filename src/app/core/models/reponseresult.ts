

export class ResponseResult {
  code: number = 0; // 根据服务端协议返回状态码
  message: string = ''; // 消息
  success: boolean = false; // 是否成功
  url: string = ''; // 相关的链接帮助地址

  number: number = 0;
  mergeOk: boolean = false;

  constructor() { }
}
