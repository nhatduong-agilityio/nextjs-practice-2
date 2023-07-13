'use client'

// Libs
import React, { Fragment, memo, useEffect, useState } from 'react'
import type { SystemStyleObject } from '@chakra-ui/react'
import { Box, Flex, HStack } from '@chakra-ui/react'
import type { StaticImageData } from 'next/image'
import dynamic from 'next/dynamic'

// Components

const ParagraphSlider = dynamic(() => import('@components/Slider/ParagraphSlider'))
const ImageSlider = dynamic(() => import('@components/Slider/ImageSlider'))

type TSlide = {
  id: string
  image: StaticImageData
  imageAlt: string
  content: {
    title: string
    description: string
  }
}

interface IProps {
  slides: TSlide[]
  timerChange: number
  heightSlider: string | string[]
  variant?: 'image' | 'paragraph'
  colorControl?: string
  sxWrapperControl?: SystemStyleObject
  sxControl?: SystemStyleObject
  sxContent?: SystemStyleObject
  pathLink?: string
  nameLink?: string
}

const Slider = memo(
  ({
    slides,
    timerChange,
    heightSlider,
    sxControl,
    sxWrapperControl,
    colorControl,
    variant,
    sxContent,
    pathLink,
    nameLink,
  }: IProps) => {
    const [currentSlide, setCurrentSlide] = useState(1)

    const setSlide = (slide: number) => {
      setCurrentSlide(slide)
    }

    useEffect(() => {
      const interval = setInterval(() => {
        let nextSlide = currentSlide + 1

        if (nextSlide === slides.length) {
          nextSlide = 0
        }

        setCurrentSlide(nextSlide)
      }, timerChange)
      return () => clearInterval(interval)
    }, [currentSlide, slides.length, timerChange])

    const sliderStyle = {
      transition: 'all .5s',
      ml: `-${currentSlide * 100}%`,
    }

    return (
      <Flex flexDirection='column' w='full' alignItems='center' style={{ marginTop: 0 }}>
        <Flex w='full' pos='relative' overflow='hidden' borderRadius='5'>
          <Flex w='full' {...sliderStyle}>
            {variant === 'image' &&
              slides.map((slide) => (
                <Fragment key={slide.id}>
                  <ImageSlider slide={slide} height={heightSlider} />
                </Fragment>
              ))}
            {variant === 'paragraph' &&
              slides.map((slide) => (
                <Fragment key={slide.id}>
                  <ParagraphSlider
                    slide={slide}
                    height={heightSlider}
                    pathLink={pathLink}
                    sxContent={sxContent}
                    nameLink={nameLink}
                  />
                </Fragment>
              ))}
            {!variant &&
              slides.map((slide) => (
                <Fragment key={slide.id}>
                  <ImageSlider slide={slide} height={heightSlider} />
                  <ParagraphSlider slide={slide} height={heightSlider} />
                </Fragment>
              ))}
          </Flex>
        </Flex>
        <HStack
          justifyContent={['center', 'space-evenly', 'space-evenly']}
          w={['full', '40%', '40%']}
          p={['5', '37px', '37px']}
          sx={sxWrapperControl}
        >
          {slides.map((slide, index) => (
            <Box
              key={slide.id}
              cursor='pointer'
              bg={currentSlide === index ? colorControl || 'black' : 'gray.400'}
              rounded='50%'
              display='inline-block'
              transition='background-color 0.6s ease'
              onClick={() => setSlide(index)}
              sx={sxControl}
            />
          ))}
        </HStack>
      </Flex>
    )
  },
)

Slider.displayName = 'Slider'

export default Slider
