import { Box } from '@chakra-ui/react'
import React, { memo } from 'react'
import NextImage from 'next/legacy/image'
import { imageDataUrl } from '@utils/convertToBase64'

interface IProps {
  width?: string | string[]
  height?: string | string[]
  alt: string
  src: string
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
      sizes='(max-width: 1440px) 100vw, (max-width: 1536px) 50vw, 33vw'
      layout='fill'
      objectFit='cover'
      priority
      lazyBoundary='200px'
      placeholder='blur'
      blurDataURL={imageDataUrl(400, 300)}
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  </Box>
))

Image.displayName = 'Image'

export default Image
