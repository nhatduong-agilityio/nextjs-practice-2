// Libs
import React from 'react'
import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const ArrowBottom = (propsIcon: IconProps) => (
  <Icon {...propsIcon}>
    <path d='M12.1313 0.612558C12.204 0.68513 12.2617 0.771341 12.3011 0.866256C12.3405 0.96117 12.3608 1.06292 12.3608 1.16568C12.3608 1.26845 12.3405 1.3702 12.3011 1.46511C12.2617 1.56003 12.204 1.64624 12.1313 1.71881L6.93751 6.91256C6.87969 6.9705 6.81101 7.01647 6.7354 7.04783C6.65979 7.07919 6.57874 7.09534 6.49688 7.09534C6.41503 7.09534 6.33397 7.07919 6.25837 7.04783C6.18276 7.01647 6.11408 6.9705 6.05626 6.91256L0.862505 1.71881C0.556255 1.41256 0.556255 0.918808 0.862505 0.612558C1.16876 0.306308 1.66251 0.306308 1.96876 0.612558L6.50001 5.13756L11.0313 0.606309C11.3313 0.306309 11.8313 0.306308 12.1313 0.612558Z' />
  </Icon>
)

ArrowBottom.displayName = 'ArrowBottom'

export default ArrowBottom