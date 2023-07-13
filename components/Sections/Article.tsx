'use client'

import React from 'react'
import { Box, Container, Flex, HStack, Stack } from '@chakra-ui/react'
import Slider from '@components/Slider/Slider'
import { SlideMock } from '@mock/dataMock'

const Article = () => (
  <Container as='section' maxW='full' px={0} py={['25px', '50px']}>
    <Flex
      w='full'
      flexDir={['column', 'row']}
      height={['560px', '615px']}
      p={['25px 20px', '50px 100px']}
      bgColor='black'
      position='relative'
    >
      <Stack w={['full', '50%']} height={['50%', '100%']} position='relative'>
        <Box w='full' height='100%' pr={['39px', '85px']} pb={['28px', '80px']} position='absolute'>
          <Box border='2px solid white' w='full' height='full' borderRadius='5px' />
        </Box>
        <Box
          w='full'
          height='100%'
          style={{ margin: 0 }}
          pt={['20px', '40px']}
          pl={['20px', '50px']}
        >
          <Slider
            slides={SlideMock}
            timerChange={3000}
            heightSlider={['230px', '440px']}
            sxWrapperControl={{
              w: 'full',
              justifyContent: 'flex-end',
              p: '0',
              pt: ['15px', '30px', '30px'],
            }}
            sxControl={{
              rounded: ['none', 'none'],
              width: ['40px', '80px'],
              height: ['3px', '5px'],
              borderRadius: '30px',
              style: {
                marginLeft: '10px',
              },
            }}
            variant='image'
            colorControl='white'
          />
        </Box>
      </Stack>
      <HStack w={['full', '50%']} height={['50%', '100%']} alignItems={['flex-end', 'center']}>
        <Slider
          slides={SlideMock}
          timerChange={3000}
          heightSlider={['230px', '440px']}
          sxWrapperControl={{
            justifyContent: 'flex-end',
            p: '0',
          }}
          sxControl={{
            display: 'none',
          }}
          sxContent={{
            color: 'white',
            width: 'full',
            pt: ['20px', 0],
            pl: [0, '80px'],
            display: 'flex',
            flexDir: 'column',
            justifyContent: 'center',
          }}
          variant='paragraph'
          pathLink='/'
        />
      </HStack>
    </Flex>
  </Container>
)

export default Article
