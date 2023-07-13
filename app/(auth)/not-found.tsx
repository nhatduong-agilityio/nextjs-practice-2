'use client'

import Link from 'next/link'
import { Center, Text } from '@chakra-ui/react'

import { API_ERROR_NOT_FOUND } from '@constants/errorMessage'

const NotFoundPage = () => (
  <Center minH='90vh' flexDirection='column'>
    <Text paddingBottom='50px' variant='warning' size='extraLarge'>
      {API_ERROR_NOT_FOUND}
    </Text>
    <Link href='/'>
      <Text color='blue' size='common'>
        Back To Home
      </Text>
    </Link>
  </Center>
)

export default NotFoundPage
