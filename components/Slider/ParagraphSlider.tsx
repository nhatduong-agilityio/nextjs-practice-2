'use client'

// Libs
import type { FunctionComponent } from 'react'
import React, { memo } from 'react'
import NextLink from 'next/link'
import type { SystemStyleObject } from '@chakra-ui/react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import ArrowForwardIcon from '../Icons/ArrowForwardIcon'

type TSlide = {
  id: string
  image: string
  imageAlt: string
  content: {
    title: string
    description: string
  }
}

interface IProps {
  slide: TSlide
  height: string | string[]
  sxContent?: SystemStyleObject
  pathLink?: string
  nameLink?: string
}

const ParagraphSlider: FunctionComponent<IProps> = memo(
  ({ slide, height = '150px', sxContent, pathLink, nameLink }: IProps) => (
    <Box boxSize='full' flex='none'>
      <Box w='full' position='relative' height={height} sx={sxContent}>
        <Heading variant={['extraBoldMD', 'extraBoldXL']} color='white' lineHeight='normal'>
          {slide.content.title}
        </Heading>
        <Text
          pt={['15px', '30px']}
          pb='25px'
          noOfLines={5}
          lineHeight={['25px', '32px']}
          size={['16', '20']}
        >
          {slide.content.description}
        </Text>
        {pathLink && (
          <NextLink href={pathLink} passHref>
            <Button
              rightIcon={
                <ArrowForwardIcon
                  width={['18px', '20px']}
                  height={['18px', '20px']}
                  viewBox='0 0 14 10'
                  fill='white'
                  ml='10px'
                />
              }
              variant='ghost'
              size={['sm', 'md']}
              fontWeight='SemiBold'
              justifyContent='start'
              height={['16px', '27px']}
              style={{
                paddingInline: 0,
              }}
              color='white'
            >
              {nameLink || 'Read More'}
            </Button>
          </NextLink>
        )}
      </Box>
    </Box>
  ),
)

ParagraphSlider.displayName = 'ParagraphSlider'

export default ParagraphSlider
