// Libs
import React, { memo } from 'react'
import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const SearchIcon = memo((propsIcon: IconProps) => (
  <Icon {...propsIcon}>
    <path d='M7.9103 13.8426C9.48365 13.8426 10.9926 13.2176 12.1051 12.1051C13.2176 10.9926 13.8426 9.48364 13.8426 7.91029C13.8426 6.33693 13.2176 4.82802 12.1051 3.71549C10.9926 2.60296 9.48365 1.97794 7.9103 1.97794C6.33694 1.97794 4.82802 2.60296 3.71549 3.71549C2.60296 4.82802 1.97795 6.33693 1.97795 7.91029C1.97795 9.48364 2.60296 10.9926 3.71549 12.1051C4.82802 13.2176 6.33694 13.8426 7.9103 13.8426ZM14.159 12.761L17.6987 16.3006C17.793 16.3919 17.8683 16.501 17.92 16.6217C17.9717 16.7424 17.9989 16.8721 18 17.0034C18.001 17.1347 17.9759 17.2648 17.9261 17.3863C17.8763 17.5078 17.8028 17.6181 17.7099 17.7109C17.617 17.8037 17.5066 17.877 17.385 17.9266C17.2635 17.9763 17.1333 18.0012 17.002 18C16.8707 17.9987 16.741 17.9714 16.6204 17.9195C16.4998 17.8676 16.3908 17.7922 16.2996 17.6977L12.76 14.158C11.1706 15.3918 9.17071 15.9735 7.16752 15.7847C5.16432 15.5959 3.30838 14.6507 1.9775 13.1417C0.646626 11.6326 -0.0591377 9.67313 0.00388472 7.66204C0.0669071 5.65096 0.893977 3.73948 2.31673 2.31673C3.73948 0.893977 5.65096 0.066907 7.66205 0.00388471C9.67314 -0.0591376 11.6327 0.646625 13.1417 1.9775C14.6507 3.30838 15.5959 5.16432 15.7847 7.16751C15.9735 9.1707 15.3918 11.1706 14.158 12.76L14.159 12.761Z' />
  </Icon>
))

SearchIcon.displayName = 'SearchIcon'

export default SearchIcon
