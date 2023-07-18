// Libs
import React, { memo } from 'react'
import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const UserIcon = memo((propsIcon: IconProps) => (
  <Icon {...propsIcon}>
    <path
      d='M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z'
      fill='black'
    />
  </Icon>
))

UserIcon.displayName = 'UserIcon'

export default UserIcon
