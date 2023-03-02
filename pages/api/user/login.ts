import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from 'config/index';

import { prepareConnection } from '@/db/index';
import { User, UserAuth } from '@/db/entity/index'

export default withIronSessionApiRoute(login, ironOptions)


async function  login(req: NextApiRequest, res: NextApiResponse) {
  const { phone = '', verify = '' } = req.body;

  const db = await prepareConnection();

  const userRepo =  db.getRepository(User)
  console.log('userRepo', userRepo.find())

  
  res?.status(200).json({
    code: 200,
    data: {
      phone,
      verify
    }
  })
}