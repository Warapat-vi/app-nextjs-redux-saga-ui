// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type loginRespont = {
    token: string
}

export default function login(
    req: NextApiRequest,
    res: NextApiResponse<loginRespont>
) {
    
    res.status(200).json({ token: 'QpwL5tke4Pnpja7X4' })
}
