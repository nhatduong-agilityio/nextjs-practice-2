// Libs
import { IconButton } from '@chakra-ui/react'
import React, { memo } from 'react'

// Components
import SearchIcon from '@components/Icons/SearchIcon'

interface IProps {
  onHandleToggleSearch: () => void
}

const SearchMenu = memo(({ onHandleToggleSearch }: IProps) => (
  <IconButton
    variant='ghost'
    aria-label='Open Search Form'
    size='sm'
    icon={<SearchIcon width='18px' height='18px' viewBox='0 0 18 18' fill='black' />}
    onClick={onHandleToggleSearch}
  />
))

SearchMenu.displayName = 'SearchMenu'

export default SearchMenu
