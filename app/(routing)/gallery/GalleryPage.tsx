'use client'

import { Flex, Grid, GridItem, Heading, Stack } from '@chakra-ui/react'
import React, { Fragment, memo } from 'react'
import NextLink from 'next/link'
import Image from '@components/Common/Image'
import { switcherGridItemProps } from '@helper/gridGallery'
import type { TArticles } from '@matched-types/articles'
import { PAGE_URL } from '@constants/routes'

interface IProps {
  articles: TArticles
}

const GalleryPage = memo(({ articles }: IProps) => (
  <Flex w='full' flexDir='column' p={['10px 20px', '50px 100px', '50px 100px']} pt='30px'>
    <Stack
      flexDir='row'
      justifyContent='flex-start'
      alignItems='center'
      pb={['25px', '50px', '50px']}
    >
      <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='inherit'>
        Interior Designer
      </Heading>
    </Stack>
    <Grid
      h='100vh'
      templateRows={['repeat(5, 1fr)', 'repeat(7, 1fr)']}
      templateColumns={['repeat(4, 1fr)']}
      gap={['10px', '50px', '50px']}
    >
      {articles.map((item, index) => (
        <Fragment key={item.id}>
          {/** function helper render gird item props by index of array */}
          <GridItem {...switcherGridItemProps(index)}>
            <NextLink href={`${PAGE_URL.GALLERY.URL}/${item.id}`} passHref>
              <Image alt={item.imageAlt} src={item.image} width='full' height='full' />
            </NextLink>
          </GridItem>
        </Fragment>
      ))}
    </Grid>
  </Flex>
))

GalleryPage.displayName = 'GalleryPage'

export default GalleryPage
