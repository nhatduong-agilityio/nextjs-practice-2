// Libs
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Td, Text, Tr } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'

// Components
import Image from '@components/Common/Image'
import Quantity from '@components/Common/Quantity'
import SelectOption from '@components/Common/SelectOption'
import { ColorMock, CartMock } from '@mock/dataMock'

const TableRow = () => {
  const [quantity, setQuantity] = useState(CartMock.quantity)

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
              src={CartMock.images.image}
              alt={CartMock.imageAlt}
              width={['70px', '120px']}
              height={['70px', '120px']}
              variant='primary'
            />
          </Box>
          <Heading w='full' size={['xs', 'sm']} fontWeight={['Regular', 'Bold']}>
            {CartMock.name}
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
          <SelectOption
            name='Color'
            placeholder={CartMock.color}
            options={ColorMock}
            disableLabel
          />
        </Box>
      </Td>
      <Td borderColor='#29293E' px={0} py='25px'>
        <Text size={['20', '30']} variant='large'>
          ${CartMock.price}
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
