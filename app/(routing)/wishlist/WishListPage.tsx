'use client'

import { Flex, Heading, Stack } from '@chakra-ui/react'
import LoadingIndicator from '@components/Common/LoadingIndicator'
import type { TProducts } from '@matched-types/product'
import dynamic from 'next/dynamic'
import React, { memo } from 'react'

const WishListProducts = dynamic(
  () => import('@components/Product/WishListProducts/WishListProducts'),
  {
    loading: () => <LoadingIndicator size='lg' />,
  },
)

interface IProps {
  products: TProducts
}

const WishListPage = memo(({ products }: IProps) => (
  <Flex w='full' flexDir='column' p={['30px 20px', '50px 100px']}>
    <Stack flexDir='row' justifyContent='flex-start' alignItems='center' pb={['20px', '50px']}>
      <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='inherit'>
        Wishlist
      </Heading>
    </Stack>

    <WishListProducts products={products} />
  </Flex>
))

WishListPage.displayName = 'WishListPage'

export default WishListPage
