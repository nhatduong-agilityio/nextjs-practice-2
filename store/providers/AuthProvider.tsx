// Libs
import React, { createContext, useCallback, useMemo, useReducer } from 'react'

// Constants
import { LOCAL_STORAGE_KEY } from '@constants/variables'

// Types
import type { IUser, SignInAccount, UserSession } from '@matched-types/auth'

// Services
import { signInUser } from '@services/auth'

// Stores
import AuthReducer, { UserActions } from '@store/reducers/AuthReducer'

export type IAuthContext = {
  userSession: UserSession | null
  signIn: (account: SignInAccount) => Promise<Omit<IUser, 'password'>>
}

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSession, dispatch] = useReducer(AuthReducer, {}, () =>
    JSON.parse(
      typeof window !== 'undefined'
        ? localStorage.getItem(LOCAL_STORAGE_KEY.USER_SESSION) || 'null'
        : 'null',
    ),
  )

  const signIn = useCallback(
    async (account: SignInAccount) => {
      const response = await signInUser(account)

      if (response.id) {
        dispatch({
          type: UserActions.SET_USER,
          userSession: { userId: response.id },
        })

        localStorage.setItem(
          LOCAL_STORAGE_KEY.USER_SESSION,
          JSON.stringify({ userId: response.id }),
        )
      }

      return response
    },
    [dispatch],
  )

  const value = useMemo(() => ({ userSession, signIn }), [signIn, userSession])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
