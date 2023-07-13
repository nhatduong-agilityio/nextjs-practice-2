// Libs
import { CloseIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React, { memo } from 'react'

// Components
import BurgerMenuIcon from '@components/Icons/BurgerMenuIcon'

interface IProps {
  toggleMenu: boolean
  onHandleToggleMenu: () => void
}

const HamburgerMenu = memo(({ toggleMenu, onHandleToggleMenu }: IProps) => (
  <IconButton
    data-testid='hamburgerMenu'
    style={{
      marginLeft: '18px',
    }}
    variant='ghost'
    aria-label='Open Menu'
    size='sm'
    icon={
      toggleMenu ? (
        <CloseIcon width='20px' height='20px' fill='black' />
      ) : (
        <BurgerMenuIcon width='25px' height='16px' viewBox='0 0 25 16' fill='black' />
      )
    }
    onClick={onHandleToggleMenu}
  />
))

HamburgerMenu.displayName = 'HamburgerMenu'

export default HamburgerMenu
