'use client'

import React, { Suspense } from 'react'
import MatchedProvider from '@components/Provider/MatchedProvider'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import { Container } from '@chakra-ui/react'
import Loading from '@components/Common/Loading'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <MatchedProvider>
          <Suspense fallback={<Loading />}>
            <Header />
          </Suspense>
          <Container as='main' minH='100vh' maxW='100%' px={['0', 'calc((100% - 90rem)/2)']}>
            {children}
          </Container>
          <Footer />
        </MatchedProvider>
      </body>
    </html>
  )
}

export default RootLayout
