// Libs
import React, { Fragment, memo, useMemo } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'

// Components
import ProductCard from '@components/Product/ProductCard'
import EmptyListProducts from '@components/Product/EmptyListProducts'

// Types
import type { TProducts } from '@matched-types/product'

type ListProductsProps = {
  products: TProducts
  productsNotFound?: boolean
}

const ListProducts = memo(({ products, productsNotFound }: ListProductsProps): JSX.Element => {
  const searchParams = useSearchParams()! || ''

  const search = useMemo(() => {
    const current = new URLSearchParams(searchParams.toString())

    return current.get('category')?.toString()
  }, [searchParams])

  return (
    <SimpleGrid columns={[2, 3, 3]} spacingY={['20px', '50px']} spacingX='20px'>
      {productsNotFound ? (
        <EmptyListProducts searchQuery={search} />
      ) : (
        products.map((product) => (
          <Fragment key={product.id}>
            <ProductCard product={product} variant='medium' sizeImage='small' />
          </Fragment>
        ))
      )}
    </SimpleGrid>
  )
})

ListProducts.displayName = 'ListProducts'

export default ListProducts
