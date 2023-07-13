// Libs
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Td, Text, Tr } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'

// Components
import Image from '@components/Common/Image'

import SOFA_GREEN from '@public/images/sofa-green.jpg'
import Quantity from '@components/Common/Quantity'
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

const TableRow = () => {
  const [quantity, setQuantity] = useState(CART.quantity)

  const handleSumQuantity = useCallback(() => {
    setQuantity(quantity + 1)
  }, [quantity])

  const handleSubQuantity = useCallback(() => {
    if (quantity > 1) setQuantity(quantity - 1)
  }, [quantity])

  return (
    <Tr>
      <Td borderColor='#29293E' px={0} py='25px'>
        <HStack>
          <Box>
            <Image
              src={CART.images.image}
              alt={CART.imageAlt}
              width={['70px', '120px']}
              height={['70px', '120px']}
              variant='primary'
            />
          </Box>
          <Heading w='full' size={['xs', 'sm']} fontWeight={['Regular', 'Bold']}>
            {CART.name}
          </Heading>
        </HStack>
      </Td>

      <Td borderColor='#29293E' px={0} py='25px'>
        <Box>
          <Quantity
            quantity={quantity}
            onHandleSumQuantity={handleSumQuantity}
            onHandleSubQuantity={handleSubQuantity}
            disableLabel
          />
        </Box>
      </Td>
      <Td borderColor='#29293E' px={0} py='25px'>
        <Box>
          <SelectOption name='Color' placeholder={CART.color} options={ColorMock} disableLabel />
        </Box>
      </Td>
      <Td borderColor='#29293E' px={0} py='25px'>
        <Text size={['20', '30']} variant='large'>
          ${CART.price}
        </Text>
      </Td>
      <Td borderColor='#29293E' px={0} py='25px'>
        <Box display='flex' justifyContent='flex-end'>
          <IconButton
            variant='ghost'
            aria-label='Delete cart item'
            icon={<CloseIcon width='20px' height='20px' fill='red' color='red' />}
            minW='max-content'
            w='max-content'
          />
        </Box>
      </Td>
    </Tr>
  )
}

export default TableRow
