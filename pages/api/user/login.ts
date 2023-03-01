import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from 'config/index';



export default withIronSessionApiRoute(login, ironOptions)


async function  login(req: NextApiRequest, res: NextApiResponse) {
  const {phone = '', verify = '' } = req.body;
  res?.status(200).json({
    code: 200,
    data: {
      phone,
      verify
    }
  })
}