// Libs
import type { SystemStyleObject } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import React, { memo } from 'react'
import Image from 'next/legacy/image'
import { imageDataUrl } from '@utils/convertToBase64'

interface IProps {
  sxContainer?: SystemStyleObject
  sxWrapperImage?: SystemStyleObject
  srcImage: string
  imageAlt: string
  sxWrapperChildren?: SystemStyleObject
  children?: ReactNode
}

const ContainerCardCategory = memo(
  ({ sxContainer, sxWrapperImage, srcImage, imageAlt, sxWrapperChildren, children }: IProps) => (
    <Box sx={sxContainer}>
      <Box position='relative' zIndex='1' w='full' sx={sxWrapperImage}>
        <Image
          src={srcImage}
          alt={imageAlt}
          sizes='(max-width: 1440px) 100vw, (max-width: 1536px) 50vw, 33vw'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={imageDataUrl(400, 500)}
          priority
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <Flex position='absolute' zIndex='2' w='full' height='100%' sx={sxWrapperChildren}>
          {children}
        </Flex>
      </Box>
    </Box>
  ),
)

ContainerCardCategory.displayName = 'ContainerCardCategory'

export default ContainerCardCategory
