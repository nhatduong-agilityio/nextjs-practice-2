import { useContext } from 'react'

// Contexts
import { LoadingContext } from '@store/providers/LoadingProvider'

export const useLoadingContext = () => {
  return useContext(LoadingContext)
}
