'use client'

// Libs
import React, { Fragment, memo } from 'react'
import { Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

// Components
import ArticleCard from '@components/Article/ArticleCard'

// Types
import type { TArticles } from '@matched-types/articles'
import { PAGE_URL } from '@constants/routes'

interface IListArticlesProps {
  articles: TArticles
}

const ListArticles = memo(({ articles }: IListArticlesProps) => (
  <Container
    as='section'
    maxW='full'
    display='flex'
    flexDir='column'
    p={['50px 20px', '50px 100px']}
  >
    <Stack flexDir='row' justifyContent='space-between' alignItems='center' mb={['20px', '50px']}>
      <Heading variant={['extraBoldMD', 'extraBoldXL']}>Articles</Heading>
      <NextLink href={PAGE_URL.GALLERY.URL} passHref>
        <Text size={['14', '20']} fontWeight='SemiBold'>
          See All
        </Text>
      </NextLink>
    </Stack>
    <SimpleGrid columns={[1, 3, 3]} spacingY={['20px', '50px']} spacingX={['20px', '27px']}>
      {articles?.map((item) => (
        <Fragment key={item.id}>
          <ArticleCard item={item} pathLink={`${PAGE_URL.GALLERY.URL}/${item.id}`} />
        </Fragment>
      ))}
    </SimpleGrid>
  </Container>
))

ListArticles.displayName = 'ListArticles'

export default ListArticles
