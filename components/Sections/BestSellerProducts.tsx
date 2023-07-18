'use client'

// Libs
import React, { Fragment, memo } from 'react'
import { Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

// Types
import type { TProducts } from '@matched-types/product'

// Components
import ProductCard from '@components/Product/ProductCard'
import { PAGE_URL } from '@constants/routes'

interface IBestSellerProductsProps {
  products: TProducts
}

const BestSellerProducts = memo(({ products }: IBestSellerProductsProps) => (
  <Container as='section' maxW='full' p={['25px 20px', '50px 100px']}>
    <Stack flexDir='row' justifyContent='space-between' alignItems='center' mb={['20px', '50px']}>
      <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='normal'>
        Best Seller
      </Heading>
      <NextLink href={PAGE_URL.PRODUCT.URL} passHref>
        <Text size={['14', '20']} fontWeight='SemiBold'>
          See All
        </Text>
      </NextLink>
    </Stack>
    <SimpleGrid columns={[1, 3, 3]} spacingY='20px' spacingX='20px'>
      {products?.map((product) => (
        <Fragment key={product.id}>
          <ProductCard product={product} />
        </Fragment>
      ))}
    </SimpleGrid>
  </Container>
))

BestSellerProducts.displayName = 'BestSellerProducts'

export default BestSellerProducts
