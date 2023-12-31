// Libs
import type { NextApiRequest, NextApiResponse } from 'next'

// Constants
import { CLIENT_ERROR_RESPONSE, SUCCESS_RESPONSE } from '@constants/responseStatus'

// Types
import type { IUser } from '@matched-types/auth'

// Mocks
import { fetcherInstanceAPI } from '@services/requests'
import { USERS_ENDPOINT } from '@constants/endPoints'
import { SERVER_ERROR } from '@constants/errorMessage'

export default async function usersHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data: IUser[] = await fetcherInstanceAPI({
        endpoint: `${USERS_ENDPOINT}`,
        fetchingMethod: 'SSR',
      })
      if (data) {
        return res.status(SUCCESS_RESPONSE.OK).json(data)
      }
      return res.status(SUCCESS_RESPONSE.OK).json([])
    } catch (error) {
      return res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).send(SERVER_ERROR)
    }
  } else {
    return res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).json({ message: SERVER_ERROR })
  }
}
