// Libs
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'

// Components
import Image from '@components/Common/Image'
import Quantity from '@components/Common/Quantity'

import SelectOption from '@components/Common/SelectOption'
import { ColorMock, CartMock } from '@mock/dataMock'

const CartItem = () => {
  const [quantity, setQuantity] = useState(CartMock.quantity)

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
          src={CartMock.images.image}
          alt={CartMock.imageAlt}
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
          {CartMock.name}
        </Heading>
        <Stack w='full' style={{ margin: 0 }} gap='10px' flexDir='column'>
          <Text size={['20', '30']} variant='large'>
            ${CartMock.price}
          </Text>

          <Quantity
            quantity={quantity}
            onHandleSumQuantity={handleSumQuantity}
            onHandleSubQuantity={handleSubQuantity}
            disableLabel
          />
          <SelectOption
            name='Color'
            placeholder={CartMock.color}
            options={ColorMock}
            disableLabel
          />
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
