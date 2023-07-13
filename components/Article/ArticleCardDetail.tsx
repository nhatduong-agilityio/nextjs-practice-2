import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Image from '@components/Common/Image'
import type { TArticle } from '@matched-types/articles'

interface IProps {
  item: TArticle
}

const ArticleCardDetail = ({ item }: IProps) => (
  <Flex flexDir='column' w='full'>
    <Image
      alt={item.imageAlt}
      src={item.image}
      height={['150px', '400px']}
      width='full'
      variant='primary'
    />
    <Heading variant={['boldSM', 'boldXL']} py={['10px', '30px']} pt={['10px', '50px']}>
      {item.title}
    </Heading>
    <Text size={['16', '20']} variant='grayScheme' lineHeight={['25px', '32px']}>
      {item.description}
    </Text>
  </Flex>
)

export default ArticleCardDetail
