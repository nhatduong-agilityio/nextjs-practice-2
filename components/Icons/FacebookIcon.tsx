// Libs
import React, { memo } from 'react'
import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const FacebookIcon = memo((propsIcon: IconProps) => (
  <Icon {...propsIcon}>
    <path
      d='M2.04221 16V8.49234H0V5.78922H2.04221V3.4804C2.04221 1.66611 3.24856 0 6.02823 0C7.15368 0 7.98589 0.10488 7.98589 0.10488L7.92032 2.62914C7.92032 2.62914 7.07159 2.6211 6.14543 2.6211C5.14303 2.6211 4.98244 3.07014 4.98244 3.81544V5.78922H8L7.8687 8.49234H4.98244V16H2.04221Z'
      fill='white'
    />
  </Icon>
))

FacebookIcon.displayName = 'FacebookIcon'

export default FacebookIcon
