'use client'

// Libs
import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { Fragment } from 'react'

// Data
import { CategoriesMock } from '@mock/dataMock'

// Components
import CategoryCardDetail from '@components/Category/CategoryCardDetail'

const CategoriesDetail = () => (
  <Container
    as='section'
    maxW='full'
    display='flex'
    flexDir='column'
    p={['25px 20px', '50px 100px']}
  >
    <Stack flexDir='row' justifyContent='flex-start' alignItems='center' mb={['20px', '50px']}>
      <Heading as='h3' variant={['extraBoldMD', 'extraBoldXL']} lineHeight='normal'>
        Category
      </Heading>
    </Stack>
    <SimpleGrid w='full' columns={[2, 3, 3]} spacingY={['20px', '50px']} spacingX='20px'>
      {Object.values(CategoriesMock).map((category) =>
        Object.values(category).map((item) => (
          <Fragment key={item.NAME}>
            <CategoryCardDetail
              srcImage={item.BG_IMAGE}
              imageAlt={item.IMAGE_ALT}
              name={item.NAME}
              pathLink='/'
            />
          </Fragment>
        )),
      )}
    </SimpleGrid>
  </Container>
)

export default CategoriesDetail
