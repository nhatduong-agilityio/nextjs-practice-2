import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

const UserLinks = () => (
  <VStack w='full' gap='20px'>
    <NextLink href='/' passHref>
      Shopping Cart
    </NextLink>
    <NextLink href='/' passHref>
      Wishlist
    </NextLink>
    <NextLink href='/' passHref>
      Sign Up
    </NextLink>
    <NextLink href='/' passHref style={{ width: '100%' }}>
      <Button
        borderRadius='10px'
        width='full'
        variant='secondary'
        height={['52px', '66px']}
        fontSize={['sm', 'md']}
      >
        Login
      </Button>
    </NextLink>
  </VStack>
)

export default UserLinks
