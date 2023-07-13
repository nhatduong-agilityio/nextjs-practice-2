'use client'

import type { ReactNode } from 'react'
import { Box, Center } from '@chakra-ui/react'
import MatchedProvider from '@components/Provider/MatchedProvider'

export interface IAuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <MatchedProvider>
          <Box
            position='absolute'
            zIndex='0'
            w='full'
            h='100vh'
            bgGradient='linear-gradient(
              to right,
              blue.50 0%,
              blue.50 50%,
              white 50%,
              white 100%
            )'
            display={['none', 'block']}
          />
          <Center
            as='main'
            h='100vh'
            alignItems='flex-start'
            position='relative'
            zIndex='1'
            px={['0', 'calc((100% - 90rem)/2)']}
            py={['0', 'calc((100vh - 59.0625rem)/2)']}
          >
            {children}
          </Center>
        </MatchedProvider>
      </body>
    </html>
  )
}
