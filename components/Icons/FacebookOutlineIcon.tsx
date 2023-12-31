// Libs
import React, { memo } from 'react'
import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const FacebookOutlineIcon = memo((propsIcon: IconProps) => (
  <Icon {...propsIcon}>
    <path d='M20 3.33356C20 1.582 18.4187 0 16.6667 0H3.33333C1.58133 0 0 1.582 0 3.33356V16.6664C0 18.418 1.58133 20 3.33356 20H10V12.4444H7.55556V9.11111H10V7.81244C10 5.57267 11.6818 3.55556 13.75 3.55556H16.4444V6.88889H13.75C13.4551 6.88889 13.1111 7.24689 13.1111 7.78311V9.11111H16.4444V12.4444H13.1111V20H16.6667C18.4187 20 20 18.418 20 16.6664V3.33356Z' />
  </Icon>
))

FacebookOutlineIcon.displayName = 'FacebookOutlineIcon'

export default FacebookOutlineIcon
