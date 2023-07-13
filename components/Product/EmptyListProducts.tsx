import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { memo } from 'react'

type EmptyListProductsProps = {
  searchQuery?: string
}

const EmptyListProducts = memo(
  ({ searchQuery }: EmptyListProductsProps): JSX.Element => (
    <Flex width='full' flexDir='column' alignItems='flex-start' justifyContent='center'>
      <Heading>No products found with {searchQuery}</Heading>
      <Text>Please try a different search term or category.</Text>
    </Flex>
  ),
)

EmptyListProducts.displayName = 'EmptyListProducts'

export default EmptyListProducts
