import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { format } from 'date-fns';
import md5 from 'md5';
import { encode } from 'js-base64';
import request from 'service/fetch';
import { ISession } from 'pages/api/index';
import { ironOptions } from 'config/index';
import  Client from 'service/VerifyCodeClient'



export default withIronSessionApiRoute(sendVerifyCode, ironOptions)


async function sendVerifyCode(req: NextApiRequest, res: NextApiResponse) {
  
  const session: ISession = req.session;
  const { to = '', templateId = '1' } = req.body;

  const response = await Client.main([to])
   console.log('response', response)
  res.status(200).json({
    code: 200
  })
  // if (statusCode === '000000') {
  //   // session.verifyCode = verifyCode;
  //   await session.save();
  //   res.status(200).json({
  //     code: 0,
  //     msg: statusMsg,
  //     data: {
  //       templateSMS
  //     }
  //   });
  // } else {
  //   res.status(200).json({
  //     code: statusCode,
  //     msg: statusMsg
  //   });
  // }
}