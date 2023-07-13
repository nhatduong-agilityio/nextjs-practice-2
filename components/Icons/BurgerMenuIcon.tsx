// Libs
import React from 'react'
import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const BurgerMenuIcon = (propsIcon: IconProps) => (
  <Icon {...propsIcon}>
    <rect width='25' height='2' />
    <rect y='14' width='25' height='2' />
    <rect y='7' width='25' height='2' />
  </Icon>
)

BurgerMenuIcon.displayName = 'BurgerMenuIcon'

export default BurgerMenuIcon
