'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@store/providers/AuthProvider'
import { LoadingProvider } from '@store/providers/LoadingProvider'
import { customTheme } from '@themes/index'
import type { ReactNode } from 'react'
import React from 'react'

export interface IProviderProps {
  children: ReactNode
}

const MatchedProvider = ({ children }: IProviderProps) => (
  <CacheProvider>
    <ChakraProvider theme={customTheme}>
      <LoadingProvider>
        <AuthProvider>{children}</AuthProvider>
      </LoadingProvider>
    </ChakraProvider>
  </CacheProvider>
)

export default MatchedProvider
