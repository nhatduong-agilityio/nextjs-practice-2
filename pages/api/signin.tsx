'use client'

import type { NextApiRequest, NextApiResponse } from 'next'

// Constants
import { INVALID_PASSWORD, USERNAME_NOT_EXIST } from '@constants/errorMessage'
import { CLIENT_ERROR_RESPONSE, SUCCESS_RESPONSE } from '@constants/responseStatus'

// Services
import { findExistedUser } from '@services/auth'

export default async function signInHandler(req: NextApiRequest, res: NextApiResponse) {
  const { password, username } = req.body

  const currentUser = await findExistedUser('username', username)

  // Username not match
  if (!currentUser) {
    return res
      .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
      .json({ error: { username: USERNAME_NOT_EXIST } })
  }

  // Username match, password not match
  if (currentUser && currentUser.password !== password) {
    return res
      .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
      .json({ error: { password: INVALID_PASSWORD } })
  }

  // Username and password match
  return res
    .status(SUCCESS_RESPONSE.OK)
    .json({ id: currentUser.id, username: currentUser.username })
}
