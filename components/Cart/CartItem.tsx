// Libs
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'

// Components
import Image from '@components/Common/Image'
import Quantity from '@components/Common/Quantity'

import SOFA_GREEN from '@public/images/sofa-green.jpg'
import SelectOption from '@components/Common/SelectOption'
import { ColorMock } from '@mock/dataMock'

const CART = {
  id: 1,
  name: 'Green Slepper Sofa',
  category: 'Sofa',
  images: {
    image: SOFA_GREEN,
  },
  imageAlt: 'Picture of Full set Grey Sofa With Pillows',
  description: 'Modern home in city center in the heart of historic Los Angele',
  details: [
    { id: 1, content: 'High Quality Leathers' },
    { id: 2, content: 'High Quality Paints' },
    { id: 3, content: 'High Quality Woods' },
    { id: 4, content: 'Cheaps Price' },
  ],
  color: 'green',
  price: 120,
  discount: 0,
  sellCount: 400,
  rating: 5,
  quantity: 1,
}

const CartItem = () => {
  const [quantity, setQuantity] = useState(CART.quantity)

  const handleSumQuantity = useCallback(() => {
    setQuantity(quantity + 1)
  }, [quantity])

  const handleSubQuantity = useCallback(() => {
    if (quantity > 1) setQuantity(quantity - 1)
  }, [quantity])

  return (
    <Flex
      w='full'
      display={['flex', 'none']}
      flexDir='row'
      height='max-content'
      py='25px'
      px={0}
      borderBottom='solid 0.5px #29293E'
    >
      <Box>
        <Image
          src={CART.images.image}
          alt={CART.imageAlt}
          width={['70px', '120px']}
          height={['70px', '120px']}
          variant='primary'
        />
      </Box>
      <Stack
        flexDir={['column', 'row']}
        w='full'
        pl='15px'
        gap='5px'
        alignItems={['flex-start', 'center']}
      >
        <Heading w='full' size={['xs', 'sm']} fontWeight={['Regular', 'Bold']}>
          {CART.name}
        </Heading>
        <Stack w='full' style={{ margin: 0 }} gap='10px' flexDir='column'>
          <Text size={['20', '30']} variant='large'>
            ${CART.price}
          </Text>

          <Quantity
            quantity={quantity}
            onHandleSumQuantity={handleSumQuantity}
            onHandleSubQuantity={handleSubQuantity}
            disableLabel
          />
          <SelectOption name='Color' placeholder={CART.color} options={ColorMock} disableLabel />
        </Stack>
      </Stack>
      <Box display='flex' justifyContent='flex-end'>
        <IconButton
          variant='ghost'
          aria-label='Delete cart item'
          icon={<CloseIcon width='16px' height='16px' fill='red' color='red' />}
          minW='max-content'
          w='max-content'
        />
      </Box>
    </Flex>
  )
}

export default CartItem
