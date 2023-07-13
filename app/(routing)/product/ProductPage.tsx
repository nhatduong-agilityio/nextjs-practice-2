'use client'

// Libs
import { Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { memo, useCallback, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'

// Components
import LoadingIndicator from '@components/Common/LoadingIndicator'
import FilterControl from '@components/Product/FilterProduct/FilterControl'

// Types
import type { TProducts } from '@matched-types/product'
import { useSearchParams } from 'next/navigation'
import { searchPartial } from '@helper/query'

const FilterProduct = dynamic(() => import('@components/Product/FilterProduct/FilterProduct'))

const ListProducts = dynamic(() => import('@components/Product/ListProducts'), {
  loading: () => <LoadingIndicator size='xl' />,
})

interface IProductPageProps {
  products: TProducts
}

const ProductPage = memo(({ products }: IProductPageProps): JSX.Element => {
  const searchParams = useSearchParams()! || ''

  const [openFilter, setOpenFilter] = useState(false)

  const handleOpenFilter = useCallback(() => {
    setOpenFilter(!openFilter)
  }, [openFilter])

  const search = useMemo(() => {
    const current = new URLSearchParams(searchParams.toString())

    return current.get('category')?.toString()
  }, [searchParams])

  const filteredProducts = useMemo(
    () =>
      search === ''
        ? products
        : products.filter((product) => {
            if (!search) {
              return product
            }

            return (
              product.name.toLowerCase().includes(search.toLowerCase()) ||
              searchPartial(search, product.name)
            )
          }),
    [products, search],
  )

  const productsNotFound = useMemo(() => filteredProducts.length === 0, [filteredProducts])

  return (
    <Flex
      w='full'
      flexDir='column'
      p={['30px 20px', '50px 100px']}
      position={['relative', 'unset']}
    >
      <FilterControl onHandleOpenFilter={handleOpenFilter} />
      <Grid
        h='100vh'
        templateRows={['1fr', '2fr']}
        templateColumns={['repeat(4, 1fr)']}
        gap={[0, '20px', '20px']}
        // position={['relative', 'unset']}
      >
        <GridItem
          display={[
            `${openFilter ? 'grid' : 'none'}`,
            `${openFilter ? 'grid' : 'none'}`,
            'grid',
            'grid',
          ]}
          bgColor='white'
          rowSpan={1}
          colSpan={[4, 1, 1]}
          pr={[0, '50px', '50px']}
          zIndex='3'
          position={['absolute', 'unset']}
          w='full'
          height='100vh'
        >
          <FilterProduct products={products} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={[4, 3, 3]}>
          <ListProducts products={products} productsNotFound={productsNotFound} />
        </GridItem>
      </Grid>
    </Flex>
  )
})

ProductPage.displayName = 'ProductPage'

export default ProductPage
