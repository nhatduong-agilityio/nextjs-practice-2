// Libs
import React, { memo } from 'react'
import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const StarIcon = memo((propsIcon: IconProps) => (
  <Icon {...propsIcon}>
    <path d='M7.5 10.7938L11.3625 13.125L10.3375 8.73125L13.75 5.775L9.25625 5.39375L7.5 1.25L5.74375 5.39375L1.25 5.775L4.6625 8.73125L3.6375 13.125L7.5 10.7938Z' />
  </Icon>
))

StarIcon.displayName = 'StarIcon'

export default StarIcon
