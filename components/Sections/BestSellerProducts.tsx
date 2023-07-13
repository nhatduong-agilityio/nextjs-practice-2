'use client'

// Libs
import React, { Fragment } from 'react'
import { Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { v4 as uuidv4 } from 'uuid'

// Types
import type { TProducts } from '@matched-types/product'

// Components
import ProductCard from '@components/Product/ProductCard'

// Images
import SOFA_GREY from '@public/images/bg-hero.png'
import SOFA_GREEN from '@public/images/sofa-green.jpg'
import CHAIR_YELLOW from '@public/images/chair-yellow.jpg'

const CARD: TProducts = [
  {
    id: uuidv4(),
    name: 'Green Slepper Sofa',
    category: 'Sofa',
    images: {
      image: SOFA_GREEN,
      listImage: [SOFA_GREEN, SOFA_GREEN, SOFA_GREEN, SOFA_GREEN],
    },
    imageAlt: 'Picture of Full set Grey Sofa With Pillows',
    description: 'Modern home in city center in the heart of historic Los Angele',
    details: [
      { id: uuidv4(), content: 'High Quality Leathers' },
      { id: uuidv4(), content: 'High Quality Paints' },
      { id: uuidv4(), content: 'High Quality Woods' },
      { id: uuidv4(), content: 'Cheaps Price' },
    ],
    color: 'green',
    price: 120,
    discount: 0,
    sellCount: 400,
    rating: 5,
  },
  {
    id: uuidv4(),
    name: 'Yellow Chair X Banana Kitty',
    category: 'Chair',
    images: {
      image: CHAIR_YELLOW,
      listImage: [CHAIR_YELLOW, CHAIR_YELLOW, CHAIR_YELLOW, CHAIR_YELLOW],
    },

    imageAlt: 'Picture of Full set Grey Sofa With Pillow',
    description: 'Modern home in city center in the heart of historic Los Angeles',
    details: [
      { id: uuidv4(), content: 'High Quality Leathers2' },
      { id: uuidv4(), content: 'High Quality Paints2' },
      { id: uuidv4(), content: 'High Quality Woods2' },
      { id: uuidv4(), content: 'Cheaps Price2' },
    ],
    color: 'yellow',
    price: 699,
    discount: 41,
    sellCount: 400,
    rating: 5,
  },
  {
    id: uuidv4(),
    name: 'Fullset Grey Sofa With Pillow',
    category: 'Sofa',
    images: {
      image: SOFA_GREY,
      listImage: [SOFA_GREY, SOFA_GREY, SOFA_GREY, SOFA_GREY],
    },
    imageAlt: 'Picture of Full set Grey Sofa With Pillow',
    description: 'Modern home in city center in the heart of historic Los Angeles',
    details: [
      { id: uuidv4(), content: 'High Quality Leathers2' },
      { id: uuidv4(), content: 'High Quality Paints2' },
      { id: uuidv4(), content: 'High Quality Woods2' },
      { id: uuidv4(), content: 'Cheaps Price2' },
    ],
    color: 'grey',
    price: 820,
    discount: 3,
    sellCount: 400,
    rating: 5,
  },
]

const BestSellerProducts = () => (
  <Container as='section' maxW='full' p={['25px 20px', '50px 100px']}>
    <Stack flexDir='row' justifyContent='space-between' alignItems='center' mb={['20px', '50px']}>
      <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='normal'>
        Best Seller
      </Heading>
      <NextLink href='/' passHref>
        <Text size={['14', '20']} fontWeight='SemiBold'>
          See All
        </Text>
      </NextLink>
    </Stack>
    <SimpleGrid columns={[1, 3, 3]} spacingY='20px' spacingX='20px'>
      {CARD.map((card) => (
        <Fragment key={card.id}>
          <ProductCard product={card} />
        </Fragment>
      ))}
    </SimpleGrid>
  </Container>
)

export default BestSellerProducts
