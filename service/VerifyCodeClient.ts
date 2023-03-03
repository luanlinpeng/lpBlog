// This file is auto-generated, don't edit it
import Dysmsapi20170525, * as $Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';
import * as $tea from '@alicloud/tea-typescript';


export default class Client {
  /**
   * 使用AK&SK初始化账号Client
   * @param accessKeyId
   * @param accessKeySecret
   * @return Client
   * @throws Exception
   */
  static createClient(accessKeyId: string, accessKeySecret: string): Dysmsapi20170525 {
    let config = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
    });
    // 访问的域名
    config.endpoint = `dysmsapi.aliyuncs.com`;
    return new Dysmsapi20170525(config);
  }

  static async main(args: string[]): Promise<void> {
    let client = Client.createClient("LTAI5tNgr2kxkjbmdaaahZhk", "1pw6NfybJc3zcoosP5I0VrAz4k7NTP");
    let sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest({
      signName: "lpBlog",
      templateCode: "SMS_272030100",
      phoneNumbers: args[0],
      templateParam: "{\"code\":\"1234\"}",
    });
    let runtime = new $Util.RuntimeOptions({ });
    try {
      // 复制代码运行请自行打印 API 的返回值
      const code = await client.sendSmsWithOptions(sendSmsRequest, runtime);
      console.log('code>>', code);
    } catch (error) {
      // 如有需要，请打印 error
      Util.assertAsString(error.message);
    }    
  }

}

