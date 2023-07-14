// Libs
import type { NextApiRequest, NextApiResponse } from 'next'

// Constants
import { CLIENT_ERROR_RESPONSE, SUCCESS_RESPONSE } from '@constants/responseStatus'

// Types

// Mocks
import { SERVER_ERROR } from '@constants/errorMessage'
import { ProductsMock } from '@mock/dataMock'
import type { TProducts } from '@matched-types/product'

export default async function productsHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data: TProducts = await ProductsMock
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
