// Libs
import type { FunctionComponent } from 'react'
import React, { memo } from 'react'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// Components
import LoadingIndicator from '@components/Common/LoadingIndicator'

const Image = dynamic(() => import('@components/Common/Image'), {
  loading: () => <LoadingIndicator size='lg' />,
})

type TSlide = {
  id: string
  image: string
  imageAlt: string
  content: {
    title: string
    description: string
  }
}

interface IProps {
  slide: TSlide
  height: string | string[]
}

const ImageSlider: FunctionComponent<IProps> = memo(({ slide, height = '150px' }: IProps) => (
  <Box boxSize='full' flex='none'>
    <Image alt={slide.imageAlt} src={slide.image} width='full' height={height} variant='primary' />
  </Box>
))

ImageSlider.displayName = 'ImageSlider'

export default ImageSlider
