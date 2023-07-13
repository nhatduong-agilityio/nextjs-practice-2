// Constants
import { BASE_URL, SIGNIN_ENDPOINT, USERS_ENDPOINT } from '@constants/endPoints'
import { SERVER_ERROR } from '@constants/errorMessage'

// Types
import type { IUser, SignInAccount } from '@matched-types/auth'

// Utils
import { findItemByValue } from '@utils/index'

// Services
import { fetcherInstanceAPI } from '@services/requests'

export const signInUser = async (credentials: SignInAccount): Promise<Omit<IUser, 'password'>> => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }

  try {
    const response = await fetch(`${BASE_URL}${SIGNIN_ENDPOINT}`, config)

    return await response.json()
  } catch (error) {
    throw new Error(SERVER_ERROR)
  }
}

/**
 * Find existed user
 */
export const findExistedUser = async (
  type: keyof IUser,
  value: string,
): Promise<IUser | undefined> => {
  const users: IUser[] = await fetcherInstanceAPI({ endpoint: USERS_ENDPOINT })

  return findItemByValue({ data: users, key: type, value })
}
