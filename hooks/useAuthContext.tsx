import { useContext } from 'react'

// Contexts
import { AuthContext } from '@store/providers/AuthProvider'

export const useAuthContext = () => {
  return useContext(AuthContext)
}
