import type { NextApiRequest, NextApiResponse } from 'next'
import { version } from '../../../package.json'
 
type ResponseData = {
  name: string,
  version: string,
  paths: string[],
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    name: 'FATUR',
    paths:[
      '/',
      '/about',
    ],
    version
  })
}