// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
type user = {
    name: string;
    role: string;
}
type loginRespont = {
    token?: string;
    user?: user;
    message: string;
}

export default function login(
    req: NextApiRequest,
    res: NextApiResponse<loginRespont>
) {
    if (_.isEmpty(req.body.email) || _.isEmpty(req.body.password)) {
        res.status(400).json({ message: 'Email and password can not be empty.' })
    } else {
        res.status(200).json({ token: 'token suscess', message: 'suscess' ,user: {
            name: 'Pro',
            role: 'admin',
        } })
    }
}
