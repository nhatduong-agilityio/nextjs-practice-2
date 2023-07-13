'use client'

// Libs
import { Flex, Heading, Stack } from '@chakra-ui/react'
import LoadingIndicator from '@components/Common/LoadingIndicator'
import dynamic from 'next/dynamic'
import React from 'react'

// Components
const Cart = dynamic(() => import('@components/Cart/Cart'), {
  loading: () => <LoadingIndicator size='lg' />,
})

const ShoppingCartPage = () => (
  <Flex w='full' flexDir='column' p={['30px 20px', '50px 100px']}>
    <Stack flexDir='row' justifyContent='flex-start' alignItems='center' pb={[0, '50px', '50px']}>
      <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='inherit'>
        Shopping Cart
      </Heading>
    </Stack>

    <Cart />
  </Flex>
)

export default ShoppingCartPage
