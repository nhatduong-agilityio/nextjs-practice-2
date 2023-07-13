'use client'

import { Flex, Heading, Stack } from '@chakra-ui/react'
import LoadingIndicator from '@components/Common/LoadingIndicator'
import type { TArticle } from '@matched-types/articles'
import dynamic from 'next/dynamic'
import React, { memo } from 'react'

const ArticleCardDetail = dynamic(() => import('@components/Article/ArticleCardDetail'), {
  loading: () => <LoadingIndicator size='lg' />,
})

type Props = {
  item: TArticle
}

const ArticleDetailPage = memo(({ item }: Props) => {
  return (
    <Flex w='full' flexDir='column' p={['30px 20px', '50px 100px']}>
      <Stack flexDir='row' justifyContent='flex-start' alignItems='center' pb={['30px', '50px']}>
        <Heading variant={['extraBoldMD', 'extraBoldXL']} lineHeight='inherit'>
          Article
        </Heading>
      </Stack>

      <ArticleCardDetail item={item} />
    </Flex>
  )
})

ArticleDetailPage.displayName = 'ArticleDetailPage'

export default ArticleDetailPage
