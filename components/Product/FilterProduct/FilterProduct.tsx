import { v4 as uuidv4 } from 'uuid'

import { FormControl, FormLabel, Stack } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import React, { memo, useMemo } from 'react'
import { CategoriesMock, ColorMock } from '@mock/dataMock'
import type { TProducts } from '@matched-types/product'
import Dropdown from './Dropdown'

export const ratingOptions = [
  { id: uuidv4(), value: 1, label: '1 Star Up' },
  { id: uuidv4(), value: 2, label: '2 Star Up' },
  { id: uuidv4(), value: 3, label: '3 Star Up' },
  { id: uuidv4(), value: 4, label: '4 Star Up' },
  { id: uuidv4(), value: 5, label: '5 Star' },
]

type TOption = {
  id: string
  label: string
  value: string | number
}

const convertCategoryOption = (obj: Object): TOption[] =>
  Object.entries(obj).map(([item, itemValue]) => ({
    id: uuidv4(),
    label: item,
    value: itemValue.NAME,
  }))

const categoryOptions = Object.entries(CategoriesMock).map(([key]) => {
  const chairOption = convertCategoryOption(CategoriesMock.CHAIR)
  const destOption = convertCategoryOption(CategoriesMock.DESK)
  const bedOption = convertCategoryOption(CategoriesMock.Bed)
  const carpetOption = convertCategoryOption(CategoriesMock.CARPET)
  const sofaOption = convertCategoryOption(CategoriesMock.SOFA)
  const cupboardOption = convertCategoryOption(CategoriesMock.CUPBOARD)

  return {
    id: uuidv4(),
    label: key,
    value: [chairOption, destOption, bedOption, carpetOption, sofaOption, cupboardOption],
  }
})

export const priceOptions = [
  { id: uuidv4(), value: 1, label: 'Maximum Price' },
  { id: uuidv4(), value: 2, label: 'Minimum Price' },
]

interface IFilterProduct {
  products: TProducts
}

const FilterProduct = memo(({ products }: IFilterProduct): JSX.Element => {
  const searchParams = useSearchParams()!

  const search = useMemo(
    () => searchParams && searchParams.get('category')?.toString(),
    [searchParams],
  )

  const productCategories = useMemo(() => products?.map((product) => product.category), [products])

  return (
    <Stack style={{ margin: 0 }} w='full'>
      <FormControl w='full'>
        <FormLabel fontSize={['20px', '20px']} fontWeight='bold'>
          Filter
        </FormLabel>

        <Dropdown
          name='Color'
          items={ColorMock as TOption[]}
          type='checkBox'
          search={search}
          selectedCategory={productCategories}
        />
        <Dropdown
          name='Rating'
          items={ratingOptions}
          type='checkBox'
          search={search}
          selectedCategory={productCategories}
        />
        <Dropdown
          name='Price'
          items={priceOptions}
          type='input'
          search={search}
          selectedCategory={productCategories}
        />
        <Dropdown
          name='Category'
          nestedItems={categoryOptions}
          type='button'
          search={search}
          selectedCategory={productCategories}
        />
      </FormControl>
    </Stack>
  )
})

FilterProduct.displayName = 'FilterProduct'

export default FilterProduct
