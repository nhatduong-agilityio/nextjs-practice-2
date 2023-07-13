'use client'

import { Flex, Heading, Stack } from '@chakra-ui/react'
import LoadingIndicator from '@components/Common/LoadingIndicator'
import dynamic from 'next/dynamic'
import React from 'react'

const ShippingForm = dynamic(() => import('@components/Shipping/ShippingForm'), {
  loading: () => <LoadingIndicator size='lg' />,
})

const ShippingPage = () => (
  <Flex w='full' flexDir='column' p={['30px 20px', '50px 100px']}>
    <Stack flexDir='row' justifyContent='flex-start' alignItems='center' pb={['10px', '35px']}>
      <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='inherit'>
        Shipping Data
      </Heading>
    </Stack>

    <ShippingForm />
  </Flex>
)

export default ShippingPage
