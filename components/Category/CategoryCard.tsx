// Libs
import React, { memo } from 'react'
import type { StaticImageData } from 'next/legacy/image'
import NextLink from 'next/link'
import { Heading } from '@chakra-ui/react'

// Components
import CategoryCardContainer from '@components/Category/ContainerCategoryCard'

interface IProps {
  srcImage: StaticImageData
  imageAlt: string
  name: string
  pathLink: string
}

const CategoryCard = memo(({ srcImage, imageAlt, name, pathLink }: IProps) => (
  <CategoryCardContainer
    sxContainer={{ w: 'full' }}
    sxWrapperImage={{ w: 'full', height: ['200', '500'] }}
    srcImage={srcImage}
    imageAlt={imageAlt}
    sxWrapperChildren={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      color: 'white',
    }}
  >
    <NextLink href={pathLink} passHref>
      <Heading size={['sm', 'xl']} color='white' lineHeight='normal'>
        {name}
      </Heading>
    </NextLink>
  </CategoryCardContainer>
))

CategoryCard.displayName = 'CategoryCard'

export default CategoryCard
