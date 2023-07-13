'use client'

// Libs
import React, { Fragment } from 'react'
import { Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

// Components
import ProductCard from '@components/Product/ProductCard'

// Data
import { ProductsMock } from '@mock/dataMock'

const Products = () => (
  <Container
    as='section'
    maxW='full'
    display='flex'
    flexDir='column'
    p={['25px 20px', '50px 100px']}
  >
    <Stack flexDir='row' justifyContent='space-between' alignItems='center' mb={['20px', '50px']}>
      <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='normal'>
        Product
      </Heading>
      <NextLink href='/' passHref>
        <Text size={['14', '20']} fontWeight='SemiBold'>
          See All
        </Text>
      </NextLink>
    </Stack>
    <SimpleGrid columns={[2, 4, 4]} spacingY={['20px', '50px']} spacingX='20px'>
      {ProductsMock.map((item) => (
        <Fragment key={item.id}>
          <ProductCard product={item} variant='medium' />
        </Fragment>
      ))}
    </SimpleGrid>
  </Container>
)

export default Products
