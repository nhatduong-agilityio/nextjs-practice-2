// Libs
import React, { memo } from 'react'
import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const TwitterOutlineIcon = memo((propsIcon: IconProps) => (
  <Icon {...propsIcon}>
    <path d='M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM15.7 7.3C15.6 11.9 12.7 15.1 8.3 15.3C6.5 15.4 5.2 14.8 4 14.1C5.3 14.3 7 13.8 7.9 13C6.6 12.9 5.8 12.2 5.4 11.1C5.8 11.2 6.2 11.1 6.5 11.1C5.3 10.7 4.5 10 4.4 8.4C4.7 8.6 5.1 8.7 5.5 8.7C4.6 8.2 4 6.3 4.7 5.1C6 6.5 7.6 7.7 10.2 7.9C9.5 5.1 13.3 3.6 14.8 5.5C15.5 5.4 16 5.1 16.5 4.9C16.3 5.6 15.9 6 15.4 6.4C15.9 6.3 16.4 6.2 16.8 6C16.7 6.5 16.2 6.9 15.7 7.3Z' />
  </Icon>
))

TwitterOutlineIcon.displayName = 'TwitterOutlineIcon'

export default TwitterOutlineIcon
