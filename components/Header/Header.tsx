'use client'

// Libs
import React, { useCallback, useState } from 'react'
import { Box, Container, Flex, HStack, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'

// Components
import type { SubmitHandler } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'
import { PAGE_URL } from '@constants/routes'
import Brand from './Brand'
import type { SearchValue } from './SearchForm'
import SearchForm from './SearchForm'
import SearchMenu from './SearchMenu'
import HamburgerMenu from './HamburgerMenu'
import Navigation from './Navigation'

const Header = () => {
  const router = useRouter()
  const searchParams = useSearchParams()!
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleSearchForm, setToggleSearch] = useState(false)

  // handle toggle menu in mobile screen
  const handleToggleMenu = useCallback(() => {
    setToggleMenu(!toggleMenu)
  }, [toggleMenu])

  // handle toggle search form in mobile screen
  const handleToggleSearch = useCallback(() => {
    setToggleSearch(!toggleSearchForm)
  }, [toggleSearchForm])

  // Function submit search form
  const handleSubmit: SubmitHandler<SearchValue> = useCallback(
    (data) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('category', data.search)

      router.push(`${PAGE_URL.PRODUCT.URL}?${params}`)

      setToggleMenu(false)
      setToggleSearch(false)
    },
    [router, searchParams],
  )

  return (
    <Container
      as='header'
      margin={0}
      position='sticky'
      top={0}
      left={0}
      right={0}
      zIndex={10}
      maxW='100%'
      height={[77, 120]}
      px={['0', 'calc((100% - 90rem)/2)']}
      backgroundColor='white'
    >
      <Flex
        width='full'
        height='full'
        p={['15px 20px', '30px 100px']}
        bgColor='white'
        justifyContent='space-between'
        alignItems='center'
        color='black'
        margin='auto'
      >
        <Stack
          style={{ margin: 0 }}
          display={[
            `${toggleSearchForm ? 'none' : 'flex'}`,
            `${toggleSearchForm ? 'none' : 'flex'}`,
            'flex',
            'flex',
          ]}
        >
          <NextLink href='/' passHref>
            <Brand />
          </NextLink>
        </Stack>

        {/** Search form of large screen */}
        <Box w='full' display={['none', 'flex']}>
          <SearchForm onSubmit={handleSubmit} />
        </Box>

        {/** Search form of small screen */}
        <Stack
          w='full'
          style={{ margin: 0 }}
          display={[`${toggleSearchForm ? 'flex' : 'none'}`, 'none']}
        >
          <SearchForm onSubmit={handleSubmit} />
        </Stack>

        {/** For mobile screen */}
        <HStack py='7px' style={{ marginTop: '0' }} display={toggleSearchForm ? 'none' : 'flex'}>
          <Box display={['flex', 'none']}>
            <SearchMenu onHandleToggleSearch={handleToggleSearch} />
            <HamburgerMenu toggleMenu={toggleMenu} onHandleToggleMenu={handleToggleMenu} />
          </Box>
        </HStack>

        {/* <Box display={['none', 'flex']}> */}
        <Navigation toggleMenu={toggleMenu} />
        {/* </Box> */}
      </Flex>
    </Container>
  )
}

export default Header
