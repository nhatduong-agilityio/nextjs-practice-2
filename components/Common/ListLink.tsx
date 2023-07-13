// Libs
import React, { Fragment, memo } from 'react'
import { List as ChakraList, ListItem as ChakraListItem, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

type TListLink = {
  id: string
  name: string
}

interface IProps {
  items: TListLink[]
}

const ListLink = memo(({ items }: IProps) => (
  <ChakraList spacing={['10px', '15px']}>
    {items.map((list) => (
      <Fragment key={list.id}>
        <ChakraListItem>
          <NextLink href='/' passHref>
            <Text data-testid='link' size={['14', '16']}>
              {list.name}
            </Text>
          </NextLink>
        </ChakraListItem>
      </Fragment>
    ))}
  </ChakraList>
))

ListLink.displayName = 'ListLink'

export default ListLink
