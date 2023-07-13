// Components
import { HStack } from '@chakra-ui/react'
import HamburgerMenu from '@components/Header/HamburgerMenu'
import type { Meta } from '@storybook/react'
import { useCallback, useState } from 'react'

const meta: Meta<typeof HamburgerMenu> = {
  title: 'Header/HamburgerMenu',
  component: HamburgerMenu,
}

export default meta

const HamburgerMenuDefault = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  // handle toggle menu in mobile screen
  const handleToggleMenu = useCallback(() => {
    setToggleMenu(!toggleMenu)
  }, [toggleMenu])

  return (
    <HStack w={100} h={100}>
      <HamburgerMenu toggleMenu={toggleMenu} onHandleToggleMenu={handleToggleMenu} />
    </HStack>
  )
}

export const Default = {
  render: () => <HamburgerMenuDefault />,
}
