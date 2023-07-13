import type { UserSession } from '@matched-types/auth'

export enum UserActions {
  SET_USER = 'SET_USER',
}

interface SetSessionAction {
  type: UserActions.SET_USER
  userSession: UserSession
}

const AuthReducer = (state: UserSession | null, action: SetSessionAction) => {
  switch (action.type) {
    case UserActions.SET_USER:
      return {
        ...state,
        ...action.userSession,
      }

    default:
      return state
  }
}

export default AuthReducer
