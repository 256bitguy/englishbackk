import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongoose'

import { IAccessToken, IJwtUser } from '@/contracts/jwt'

export const jwtSign = (_id: ObjectId): IAccessToken => {
  const accessToken = jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION
  })

  return { accessToken }
}

export const jwtVerify = ({ accessToken }: { accessToken: string }) => {
  return jwt.verify(accessToken, process.env.JWT_SECRET) as IJwtUser
}
