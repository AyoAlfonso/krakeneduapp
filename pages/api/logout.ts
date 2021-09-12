import { NextApiRequest, NextApiResponse} from 'next'
import {removeToken} from '../../src/token'
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  removeToken(res)
  res.end()
}
