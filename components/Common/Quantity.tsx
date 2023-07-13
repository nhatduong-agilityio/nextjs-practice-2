import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React, { memo } from 'react'

interface IProps {
  quantity: number
  onHandleSubQuantity: () => void
  onHandleSumQuantity: () => void
  disableLabel?: boolean
}

const Quantity = memo(
  ({ quantity, onHandleSubQuantity, onHandleSumQuantity, disableLabel = false }: IProps) => (
    <VStack w='full' alignItems='flex-start'>
      <Text
        display={`${disableLabel ? 'none' : 'flex'}`}
        size={['16', '25']}
        variant='small'
        pb={['10px', '25px']}
      >
        Quantity
      </Text>
      <HStack gap={['5px', 0]} height='36px'>
        <Button
          variant='ghost'
          minW='max-content'
          onClick={onHandleSubQuantity}
          fontSize={['20px', '25px']}
          color='red'
          height='inherit'
        >
          -
        </Button>
        <Box fontSize={['20px', '25px']}>{quantity}</Box>
        <Button
          variant='ghost'
          minW='max-content'
          onClick={onHandleSumQuantity}
          fontSize={['20px', '25px']}
          color='green'
          height='inherit'
        >
          +
        </Button>
      </HStack>
    </VStack>
  ),
)

Quantity.displayName = 'Quantity'

export default Quantity
