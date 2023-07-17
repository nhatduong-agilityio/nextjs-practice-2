import { Flex, Button, HStack } from '@chakra-ui/react'
import React, { memo } from 'react'
import NextLink from 'next/link'

// Components
import CartIcon from '@components/Icons/CartIcon'
import WishlistIcon from '@components/Icons/WishlistIcon'
import UserLinks from '@components/Header/UserLinks'

interface IProps {
  toggleMenu: boolean
}

const Navigation = memo(({ toggleMenu }: IProps) => (
  <>
    <HStack style={{ marginTop: '0' }} spacing='50px' display={['none', 'flex']}>
      <NextLink href='/' passHref aria-label='cart'>
        <CartIcon
          width='24px'
          height='24px'
          viewBox='0 0 24 24'
          fill='black'
          stroke='black'
          strokeWidth='0.25'
        />
      </NextLink>
      <NextLink href='/' passHref aria-label='wishlist'>
        <WishlistIcon width='24px' height='22px' viewBox='0 0 24 22' fill='black' stroke='black' />
      </NextLink>
      <HStack style={{ marginTop: '0' }} spacing='30px'>
        <NextLink
          href='/'
          passHref
          style={{
            width: '100%',
          }}
        >
          <Button
            width='full'
            variant='primary'
            height={['52px', '60px']}
            fontSize={['sm', 'md']}
            padding='0'
          >
            Sign Up
          </Button>
        </NextLink>
        <NextLink
          href='/'
          passHref
          style={{
            width: '100%',
          }}
        >
          <Button
            borderRadius='10px'
            width='full'
            minWidth='123px'
            variant='secondary'
            height={['52px', '60px']}
            fontSize={['sm', 'md']}
          >
            Login
          </Button>
        </NextLink>
      </HStack>
    </HStack>
    <Flex
      w='full'
      display={[
        `${!toggleMenu ? 'none' : 'flex'}`,
        `${!toggleMenu ? 'none' : 'flex'}`,
        'none',
        'none',
      ]}
      bgColor='white'
      h='100vh'
      pos='fixed'
      top='77px'
      left='0'
      overflowY='auto'
      flexDir='column'
      borderTop='1px solid black'
      p={5}
      zIndex='100'
    >
      <UserLinks />
    </Flex>
  </>
))

Navigation.displayName = 'Navigation'

export default Navigation
