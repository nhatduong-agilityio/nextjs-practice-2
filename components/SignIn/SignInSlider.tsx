'use client'

// Libs
import React, { memo } from 'react'
import { HStack, Heading, Stack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

// Components
import BagIcon from '@components/Icons/BagIcon'
import BrandIcon from '@components/Icons/BrandIcon'

const Slider = dynamic(() => import('@components/Slider/Slider'))

type TSlide = {
  id: string
  image: string
  imageAlt: string
  content: {
    title: string
    description: string
  }
}

interface SignInSliderProps {
  sliders: TSlide[]
}

const SignInSlider = memo(({ sliders }: SignInSliderProps) => {
  return (
    <Stack
      width={['full', '50%']}
      flexDir='column'
      gap={0}
      bgColor='blue.50'
      pt={['25px', '40px']}
      pl={['5', '100px']}
      pr={['5', '77px']}
    >
      <HStack alignItems='end'>
        <BagIcon width={['27px', '38px']} height={['27px', '38px']} fill='black' />
        <BrandIcon
          width={['63px', '88px']}
          height={['15px', '20px']}
          viewBox='0 0 63 15'
          fill='black'
        />
      </HStack>
      <Heading
        variant={['extraBoldMD', 'extraBoldXL']}
        pt={['5', '46px']}
        pb={['5', '50px']}
        lineHeight='normal'
      >
        Furniture Marketplace
      </Heading>
      <Slider
        slides={sliders}
        timerChange={3000}
        heightSlider={['200px', '547px']}
        sxControl={{ boxSize: ['8px', '15px'] }}
        variant='image'
      />
    </Stack>
  )
})

SignInSlider.displayName = 'SignInSlider'

export default SignInSlider
