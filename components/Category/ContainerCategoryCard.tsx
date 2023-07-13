// Libs
import type { SystemStyleObject } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import React from 'react'
import type { StaticImageData } from 'next/legacy/image'
import Image from 'next/legacy/image'

interface IProps {
  sxContainer?: SystemStyleObject
  sxWrapperImage?: SystemStyleObject
  srcImage: StaticImageData
  imageAlt: string
  sxWrapperChildren?: SystemStyleObject
  children?: ReactNode
}

const ContainerCardCategory = ({
  sxContainer,
  sxWrapperImage,
  srcImage,
  imageAlt,
  sxWrapperChildren,
  children,
}: IProps) => (
  <Box sx={sxContainer}>
    <Box position='relative' zIndex='1' w='full' sx={sxWrapperImage}>
      <Image src={srcImage} alt={imageAlt} sizes='100vw' layout='fill' objectFit='cover' priority />
      <Flex position='absolute' zIndex='2' w='full' height='100%' sx={sxWrapperChildren}>
        {children}
      </Flex>
    </Box>
  </Box>
)

export default ContainerCardCategory
