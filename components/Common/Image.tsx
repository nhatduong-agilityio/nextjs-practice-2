import { Box } from '@chakra-ui/react'
import React, { memo } from 'react'
import type { StaticImageData } from 'next/legacy/image'
import NextImage from 'next/legacy/image'

interface IProps {
  width?: string | string[]
  height?: string | string[]
  alt: string
  src: StaticImageData
  variant?: 'primary' | 'secondary'
}

const Image = memo(({ width = '500px', height = '500px', alt, src, variant }: IProps) => (
  <Box
    w={width}
    h={height}
    position='relative'
    overflow={variant === 'primary' ? 'hidden' : 'none'}
    borderRadius={variant === 'primary' ? '5px' : 'none'}
    border={variant === 'secondary' ? 'solid 1px black' : 'none'}
  >
    <NextImage
      alt={alt}
      src={src}
      sizes='100vw'
      layout='fill'
      objectFit='cover'
      priority
      lazyBoundary='200px'
    />
  </Box>
))

Image.displayName = 'Image'

export default Image
