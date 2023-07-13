'use client'

import { Box, Flex, Heading, Stack, VStack } from '@chakra-ui/react'
import React, { memo, useCallback, useState } from 'react'
import SelectOption from '@components/Common/SelectOption'
import ProductControl from '@components/Product/ProductDetail/ProductControl'
import ProductDescription from '@components/Product/ProductDetail/ProductDescription'
import ProductImage from '@components/Product/ProductDetail/ProductImage'
import ProductMainContent from '@components/Product/ProductDetail/ProductMainContent'
import Quantity from '@components/Common/Quantity'
import { ColorMock } from '@mock/dataMock'
import type { TProduct } from '@matched-types/product'

type Props = {
  item: TProduct
}

const ProductDetailPage = memo(({ item }: Props) => {
  const [quantity, setQuantity] = useState(1)

  const handleSumQuantity = useCallback(() => {
    setQuantity(quantity + 1)
  }, [quantity])

  const handleSubQuantity = useCallback(() => {
    if (quantity > 1) setQuantity(quantity - 1)
  }, [quantity])

  return (
    <Flex w='full' flexDir='column' p={[0, '50px 100px', '50px 100px']}>
      <Stack
        flexDir='row'
        justifyContent='flex-start'
        alignItems='center'
        pb={['30px', '50px', '50px']}
      >
        <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='inherit'>
          Product Detail
        </Heading>
      </Stack>
      <Flex w='full' flexDir={['column', 'row', 'row']}>
        <ProductImage
          altImage={item.imageAlt}
          image={item.images.image}
          listImage={item.images.listImage}
        />
        <VStack
          w={['full', '50%', '50%']}
          p={['10px 20px', '10px 50px', '10px 50px']}
          height='max-content'
          gap={0}
        >
          <Heading size={['sm', 'xl']} fontWeight='Bold' w='full'>
            {item.name}
          </Heading>

          <ProductMainContent
            price={item.price}
            discount={item.discount}
            sellCount={item.sellCount}
            rating={item.rating}
          />

          <Box style={{ margin: 0 }} w='full' pt='15px'>
            <SelectOption name='Color' placeholder={item.color} options={ColorMock} />
          </Box>

          <Box style={{ margin: 0 }} w='full' pt={['15px', '25px']}>
            <Quantity
              quantity={quantity}
              onHandleSubQuantity={handleSubQuantity}
              onHandleSumQuantity={handleSumQuantity}
            />
          </Box>
        </VStack>
      </Flex>
      <Flex
        w='full'
        flexDir={['column', 'column-reverse', 'column-reverse']}
        px={['20px', 0, 0]}
        pb={['30px', 0, 0]}
        alignItems='flex-end'
      >
        <ProductDescription description={item.description} listDetail={item.details} />

        <ProductControl />
      </Flex>
    </Flex>
  )
})

ProductDetailPage.displayName = 'ProductDetailPage'

export default ProductDetailPage
