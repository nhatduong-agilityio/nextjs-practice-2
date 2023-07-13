// Libs
import React from 'react'
import {
  Button,
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { StaticImageData } from 'next/legacy/image'
import NextLink from 'next/link'

// Components
import ArrowForwardIcon from '@components/Icons/ArrowForwardIcon'
import Image from '../Common/Image'

type TArticle = {
  id: string
  title: string
  image: StaticImageData
  imageAlt: string
  description: string
}

interface IProps {
  item: TArticle
  pathLink?: string
  nameLink?: string
}

const ArticleCard = ({ item, pathLink, nameLink }: IProps) => (
  <ChakraCard boxShadow='none'>
    <CardHeader p={0} flexDir='row'>
      <Image
        alt={item.imageAlt}
        src={item.image}
        variant='primary'
        width='full'
        height={['150px', '250px']}
      />
    </CardHeader>
    <CardBody p={0} pt='15px'>
      <VStack style={{ margin: 0 }} w='full' alignItems='flex-start' gap={0}>
        <Heading variant={['boldSM', 'boldMD']} lineHeight={0}>
          {item.title}
        </Heading>
        <Text size={['16', '18']} noOfLines={2} variant='grayScheme' pt={['10px', '15px']}>
          {item.description}
        </Text>
        {pathLink && (
          <NextLink href={pathLink} passHref>
            <Button
              rightIcon={
                <ArrowForwardIcon
                  width={['16px', '20px']}
                  height={['16px', '20px']}
                  viewBox='0 0 14 10'
                  fill='black'
                  ml='10px'
                />
              }
              variant='ghost'
              color='black'
              justifyContent='start'
              height='fit-content'
              style={{
                paddingInline: 0,
              }}
              pt='15px'
              fontSize={['16px', '18px']}
            >
              {nameLink || 'Read More'}
            </Button>
          </NextLink>
        )}
      </VStack>
    </CardBody>
  </ChakraCard>
)

export default ArticleCard
