import { Button, Heading, Stack } from '@chakra-ui/react'
import React, { memo } from 'react'

interface IProps {
  onHandleOpenFilter: () => void
}

const FilterControl = memo(({ onHandleOpenFilter }: IProps) => (
  <Stack flexDir='row' justifyContent='space-between' alignItems='center' mb={['20px', '50px']}>
    <Heading variant={['extraBoldMD', 'extraBoldXL']}>Product</Heading>
    <Button
      display={['flex', 'none']}
      color='black'
      variant='ghost'
      fontSize='14px'
      width='max-content'
      height='fit-content'
      style={{
        paddingInline: 0,
      }}
      onClick={onHandleOpenFilter}
      justifyContent='flex-end'
    >
      Filter
    </Button>
  </Stack>
))

FilterControl.displayName = 'FilterControl'

export default FilterControl
