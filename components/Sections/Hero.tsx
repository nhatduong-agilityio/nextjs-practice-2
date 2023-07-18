'use client'

// Libs
import React from 'react'
import { Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/legacy/image'
import NextLink from 'next/link'

// Components
import BubblesIcon from '@components/Icons/BubblesIcon'

// Images
import BG_HERO from '@public/images/bg-hero.png'
import { PAGE_URL } from '@constants/routes'

const Hero = () => (
  <Container as='section' maxW='full' p={0} h={['629px', '780px']}>
    <Flex w='full' h='full' position='relative' flexDir={['column', 'row']}>
      <Stack
        w='full'
        position='absolute'
        height={['250px', '650px']}
        width={['full', '50%']}
        zIndex='3'
        gap={0}
      >
        <Image
          alt='Pictures of furniture sofa with background'
          src={BG_HERO}
          sizes='(max-width: 1440px) 100vw, (max-width: 1536px) 50vw, 33vw'
          layout='fill'
          objectFit='cover'
          priority
          style={{
            width: '100%',
            height: 'auto',
          }}
          placeholder='blur'
        />
      </Stack>
      <Stack
        style={{
          margin: '0',
        }}
        display={['none', 'flex']}
        zIndex='2'
        width='full'
        height='full'
        justifyContent='end'
        alignItems='center'
        pr='16px'
        paddingBottom='12px'
        gap={0}
      >
        <BubblesIcon
          width='235px'
          height='235px'
          viewBox='0 0 235 235'
          fill='black'
          fillOpacity='0.2'
        />
      </Stack>
      <Stack
        w='full'
        position='absolute'
        height={['379px', '738px']}
        width={['full', '978px']}
        right={0}
        bottom={[0, 'unset']}
        flexDir='column'
        p='20px'
        pl={['20px', '352px']}
        pr={['20px', '100px']}
        pt={['20px', '130px']}
        bgColor='blue.50'
        gap={0}
      >
        <Heading
          as='h1'
          lineHeight={['30px', '68px']}
          w='full'
          variant='primary'
          width={['full', '526px']}
          noOfLines={[2, 3]}
          whiteSpace='pre-wrap'
        >
          Crafting Better Experience For Your Family
        </Heading>
        <Text
          size={['16', '20']}
          pt={['15px', '25px']}
          pb={['5px', '20px']}
          noOfLines={[4, 3]}
          whiteSpace='pre-wrap'
          lineHeight='32px'
        >
          We are the bed furniture platform. We are already working on thousands of future home
          projects. Trust us, you will surely be satisfied
        </Text>
        <Stack
          style={{
            margin: '0',
          }}
          w='full'
          flexDir={['column', 'row']}
          maxW={['full', '454px']}
          py='20px'
          gap={0}
          zIndex={9}
        >
          <NextLink
            href={PAGE_URL.PRODUCT.URL}
            passHref
            style={{
              width: '100%',
              margin: '0',
            }}
          >
            <Button
              color='white'
              maxW={['full', '193px']}
              bgColor='black'
              size={['sm', 'md']}
              mb='15px'
            >
              Go Shopping
            </Button>
          </NextLink>
          <NextLink
            href='/gallery'
            passHref
            style={{
              width: '100%',
              margin: '0',
            }}
          >
            <Button color='black' minW={['full', '241px']} variant='outline' size={['sm', 'md']}>
              Interior Designer
            </Button>
          </NextLink>
        </Stack>
      </Stack>
    </Flex>
  </Container>
)

export default Hero
