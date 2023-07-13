'use client'

import { Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import ButtonGroup from '@components/Common/ButtonGroup'
import dynamic from 'next/dynamic'
import LoadingIndicator from '@components/Common/LoadingIndicator'

const PaymentOptions = dynamic(() => import('@components/Payment/PaymentOptions'), {
  loading: () => <LoadingIndicator size='lg' />,
})

const PaymentPage = () => (
  <Flex w='full' flexDir='column' p={['30px 20px', '50px 100px']}>
    <Stack flexDir='row' justifyContent='flex-start' alignItems='center' pb={['25px', '50px']}>
      <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='inherit'>
        Payment
      </Heading>
    </Stack>

    <PaymentOptions />
    <Stack w='full' alignItems='flex-end' mt={['25px', '50px']}>
      <ButtonGroup
        firstName='Pay Now'
        firstPath='/'
        lastName='Back to Shipping Data'
        lastPath='/'
      />
    </Stack>
  </Flex>
)

export default PaymentPage
