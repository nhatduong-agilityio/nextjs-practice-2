import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import CartIcon from '@components/Icons/CartIcon'
import WishlistIcon from '@components/Icons/WishlistIcon'

const ProductControl = () => (
  <ButtonGroup width={['full', '50%']} flexDir={['column', 'row']} spacing={0} pl={[0, '50px']}>
    <Button
      leftIcon={
        <CartIcon
          width={['16px', '24px']}
          height={['16px', '24px']}
          viewBox='0 0 24 24'
          fill='white'
          stroke='white'
          strokeWidth='0.25'
        />
      }
      variant='baseStyle'
      size={['sm', 'md']}
      mb={['15px', '0']}
      mr={['0', '16px']}
      fontSize={['16', '20']}
    >
      Add to Cart
    </Button>
    <Button
      leftIcon={
        <WishlistIcon
          width={['16px', '24px']}
          height={['16px', '24px']}
          viewBox='0 0 24 22'
          fill='black'
          stroke='black'
        />
      }
      fontSize={['16', '20']}
      variant='outline'
      size={['sm', 'md']}
    >
      Add to Wishlist
    </Button>
  </ButtonGroup>
)

export default ProductControl
