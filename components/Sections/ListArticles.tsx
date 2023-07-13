'use client'

// Libs
import React, { Fragment, memo } from 'react'
import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'

// Components
import ArticleCard from '@components/Article/ArticleCard'

// Types
import type { TArticles } from '@matched-types/articles'
import { PAGE_URL } from '@constants/routes'

interface IListArticlesProps {
  articles: TArticles
}

const ListArticles = memo(({ articles }: IListArticlesProps) => (
  <Container maxW='full' display='flex' flexDir='column' p={['50px 20px', '50px 100px']}>
    <Stack flexDir='row' justifyContent='flex-start' alignItems='center' mb={['20px', '50px']}>
      <Heading variant={['extraBoldMD', 'extraBoldXL']}>Articles</Heading>
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
