// Libs
import { Button, ButtonGroup as ChakraButtonGroup } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

interface IProps {
  firstName: string
  firstPath?: string
  lastName: string
  lastPath?: string
}

const ButtonGroup = ({ firstName, lastName, firstPath, lastPath }: IProps) => (
  <ChakraButtonGroup
    width={['full', '50%']}
    flexDir={['column', 'row-reverse']}
    spacing={0}
    gap='15px'
  >
    <NextLink href={firstPath || ''} passHref>
      <Button variant='baseStyle' size={['sm', 'md']} px={['16px', '35px']}>
        {firstName}
      </Button>
    </NextLink>
    <NextLink href={lastPath || ''} passHref style={{ margin: 0 }}>
      <Button variant='outline' size={['sm', 'md']} px={['16px', '35px']}>
        {lastName}
      </Button>
    </NextLink>
  </ChakraButtonGroup>
)

export default ButtonGroup
