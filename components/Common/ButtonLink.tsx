import { Box, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import type { UrlObject } from 'url'

interface IButtonLinkProps {
  active?: boolean
  href: UrlObject
  name: string | number
}

const ButtonLink = ({ href, active, name }: IButtonLinkProps) => (
  <Box w='full' pt='15px' pl='30px'>
    <NextLink href={href} passHref>
      <Button
        w='full'
        maxHeight='30px'
        variant='ghost'
        fontWeight='Regular'
        justifyContent='start'
        height='fit-content'
        style={{
          paddingInline: 0,
        }}
        fontSize={['16px', '18px']}
        color={`${active && 'gray.500'}`}
      >
        {name}
      </Button>
    </NextLink>
  </Box>
)

export default ButtonLink
