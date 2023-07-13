import { SimpleGrid } from '@chakra-ui/react'
import React, { Fragment, memo } from 'react'

// Data
import ProductCard from '@components/Product/ProductCard'
import type { TProducts } from '@matched-types/product'

interface IProps {
  products: TProducts
}

const WishListProducts = memo(({ products }: IProps) => (
  <SimpleGrid columns={[2, 4, 4]} spacingY={['20px', '50px']} spacingX={['15px', '20px']}>
    {products.map((item) => (
      <Fragment key={item.id}>
        <ProductCard product={item} variant='medium' />
      </Fragment>
    ))}
  </SimpleGrid>
))

WishListProducts.displayName = 'WishListProducts'

export default WishListProducts
