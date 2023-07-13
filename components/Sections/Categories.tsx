'use client'

// Libs
import React from 'react'
import { Container } from '@chakra-ui/react'

// Data
import { CategoriesMock } from '@mock/dataMock'

// Components
import CategoryCard from '@components/Category/CategoryCard'

const Categories = () => (
  <Container
    as='section'
    maxW='full'
    display='flex'
    flexDir={['column', 'row']}
    py={['25px', '50px']}
    px={0}
  >
    <CategoryCard
      srcImage={CategoriesMock.CHAIR.OFFICE.BG_IMAGE}
      imageAlt={CategoriesMock.CHAIR.OFFICE.IMAGE_ALT}
      name={CategoriesMock.CHAIR.OFFICE.NAME}
      pathLink='/'
    />
    <CategoryCard
      srcImage={CategoriesMock.DEST.OFFICE.BG_IMAGE}
      imageAlt={CategoriesMock.DEST.OFFICE.IMAGE_ALT}
      name={CategoriesMock.DEST.OFFICE.NAME}
      pathLink='/'
    />
  </Container>
)

export default Categories
