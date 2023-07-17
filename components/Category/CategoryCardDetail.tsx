// Libs
import React, { memo } from 'react'
import NextLink from 'next/link'
import { Button, Heading } from '@chakra-ui/react'

// Components
import ContainerCategoryCard from '@components/Category/ContainerCategoryCard'
import ArrowForwardIcon from '@components/Icons/ArrowForwardIcon'

interface IProps {
  srcImage: string
  imageAlt: string
  name: string
  pathLink: string
}

const CategoryCardDetail = memo(({ srcImage, imageAlt, name, pathLink }: IProps) => (
  <ContainerCategoryCard
    sxContainer={{
      w: 'full',
    }}
    sxWrapperImage={{
      w: 'full',
      height: ['200', '500'],
      overflow: 'hidden',
      borderRadius: '5px',
    }}
    srcImage={srcImage}
    imageAlt={imageAlt}
    sxWrapperChildren={{
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      color: 'white',
      p: ['20px 15px', '50px 40px'],
    }}
  >
    <NextLink href={pathLink} passHref>
      <Heading
        variant={['extraBoldSM', 'extraBoldXL']}
        color='white'
        pb={['10px', '30px']}
        lineHeight='normal'
      >
        {name}
      </Heading>
      <Button
        rightIcon={<ArrowForwardIcon width='14px' height='10px' viewBox='0 0 14 10' fill='white' />}
        variant='ghost'
        color='white'
        size={['xs', 'md']}
        justifyContent='start'
        height={['16px', '27px']}
        style={{
          paddingInline: 0,
        }}
      >
        Shop Now
      </Button>
    </NextLink>
  </ContainerCategoryCard>
))

CategoryCardDetail.displayName = 'CategoryCardDetail'

export default CategoryCardDetail
