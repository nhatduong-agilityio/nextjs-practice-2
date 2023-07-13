// Libs
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

// Components
import ButtonGroup from '@components/Common/ButtonGroup'
import CartItem from '@components/Cart/CartItem'
import TableCart from '@components/Cart/TableCart/TableCart'

const Cart = () => (
  <Flex w='full' flexDir='column'>
    <Box display={['none', 'contents']}>
      <TableCart />
    </Box>
    <Box display={['contents', 'none']}>
      <CartItem />
    </Box>
    <HStack w='full' justifyContent='flex-end' py='25px'>
      <Text w={['20%', '10%']} size={['20', '25']} variant='medium'>
        Total
      </Text>
      <Text w={['30%', '20%']} size={['20', '30']} variant='large'>
        Price
      </Text>
    </HStack>
    <Stack w='full' alignItems='flex-end' mt='25px'>
      <ButtonGroup firstName='Next to Shipping Data' lastName='Back to Homepage' lastPath='/' />
    </Stack>
  </Flex>
)

export default Cart
