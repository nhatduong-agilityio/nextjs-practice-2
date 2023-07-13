// Libs
import React from 'react'
import { HStack } from '@chakra-ui/react'

// Components
import BagIcon from '@components/Icons/BagIcon'
import BrandIcon from '@components/Icons/BrandIcon'

const Brand = () => (
  <HStack alignItems='end' py='7px'>
    <BagIcon width={['25px', '33px']} height={['27px', '38px']} fill='black' />
    <BrandIcon
      width={['63px', '88px']}
      height={['14px', '20px']}
      viewBox='0 0 63 15'
      fill='black'
    />
  </HStack>
)

export default Brand
