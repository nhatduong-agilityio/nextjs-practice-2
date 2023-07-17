// Libs
import React from 'react'
import { Box, Container, Flex, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

// Components
import BagIcon from '@components/Icons/BagIcon'
import ListLink from '@components/Common/ListLink'
import BrandIcon from '@components/Icons/BrandIcon'
import FacebookOutlineIcon from '@components/Icons/FacebookOutlineIcon'
import TwitterOutlineIcon from '@components/Icons/TwitterOutlineIcon'
import LikedInOutlineIcon from '@components/Icons/LikedInOutlineIcon'

// Mocks
import { AboutUsLinks, CommunityLinks, ContactUsLinks, HelpAndSupportLinks } from '@mock/dataMock'

const Footer = () => (
  <Container
    as='footer'
    margin='auto'
    maxW='100%'
    px={['0', 'calc((100% - 90rem)/2)']}
    backgroundColor='#18181A'
  >
    <Flex
      flexDir={['column', 'row']}
      width='full'
      height='full'
      p={['30px 20px', '45px 100px']}
      color='white'
      flexWrap='wrap'
      fontWeight='light'
      margin='auto'
    >
      <Stack flexDir={['column', 'row']} width='full' justifyContent='space-between'>
        <Stack>
          <NextLink href='/' passHref aria-label='brand-store'>
            <HStack alignItems='end'>
              <BagIcon width={['25px', '33px']} height={['27px', '38px']} fill='white' />
              <BrandIcon
                width={['63px', '88px']}
                height={['15px', '20px']}
                viewBox='0 0 63 15'
                fill='white'
              />
            </HStack>
          </NextLink>
          <Text pt='25px' size={['14', '16']} maxWidth={['full', '313px']}>
            We are the bed furniture platform. We are already working on thousands of future home
            projects. Trust us, you will surely be satisfied
          </Text>
        </Stack>
        <SimpleGrid
          style={{ margin: 0 }}
          columns={[2, 4]}
          spacingX={['10px', 0]}
          spacingY='20px'
          pt={['15px', '5px']}
          w={['full', '68%']}
          justifyItems='end'
        >
          <Stack w='full' gap={0}>
            <Text pb={['15px', '30px']} size={['16', '18']} variant='large'>
              Community
            </Text>
            <ListLink items={CommunityLinks} />
          </Stack>
          <Stack w='full' gap={0}>
            <Text pb={['15px', '30px']} size={['16', '18']} variant='large'>
              About Us
            </Text>
            <ListLink items={AboutUsLinks} />
          </Stack>
          <Stack w='full' gap={0}>
            <Text pb={['15px', '30px']} size={['16', '18']} variant='large'>
              Help & Support
            </Text>
            <ListLink items={HelpAndSupportLinks} />
          </Stack>
          <Stack w='full' gap={0}>
            <Box pl={[0, '55px']}>
              <Text pb={['15px', '30px']} size={['16', '18']} variant='large'>
                Contact Us
              </Text>
              <ListLink items={ContactUsLinks} />
              <HStack style={{ margin: 0 }} pt='15px' spacing='15px'>
                <NextLink href='/' passHref aria-label='social-fb'>
                  <FacebookOutlineIcon
                    width='20px'
                    height='20px'
                    viewBox='0 0 20 20'
                    fill='white'
                  />
                </NextLink>
                <NextLink href='/' passHref aria-label='social-tw'>
                  <TwitterOutlineIcon width='20px' height='20px' viewBox='0 0 20 20' fill='white' />
                </NextLink>
                <NextLink href='/' passHref aria-label='social-li'>
                  <LikedInOutlineIcon width='20px' height='20px' viewBox='0 0 20 20' fill='white' />
                </NextLink>
              </HStack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Stack>
      <Stack
        w='full'
        style={{ margin: 0 }}
        pt={['30px', '60px']}
        flexDir={['column', 'row']}
        justifyContent='space-between'
        alignItems='flex-end'
      >
        <SimpleGrid
          width='full'
          display={['grid', 'none']}
          columns={[2, 4, 4]}
          spacingX='10px'
          spacingY='20px'
        >
          <NextLink href='/' passHref>
            <Text size={['14', '16']}>Term of Service</Text>
          </NextLink>
          <NextLink href='/' passHref>
            <Text size={['14', '16']}>Sitemap</Text>
          </NextLink>
          <NextLink href='/' passHref>
            <Text size={['14', '16']}>Privacy Policy</Text>
          </NextLink>
          <NextLink href='/' passHref>
            <Text size={['14', '16']}>Partners & Affiliates</Text>
          </NextLink>
        </SimpleGrid>
        <Text size={['14', '16']} pt={['30px', 0, 0]} w={['full', 'auto']}>
          2019 © Test - All right reserved
        </Text>
        <SimpleGrid display={['none', 'flex']} columns={[2, 4, 4]} spacingX='35px' spacingY='20px'>
          <NextLink href='/' passHref>
            <Text size={['14', '16']}>Term of Service</Text>
          </NextLink>
          <NextLink href='/' passHref>
            <Text size={['14', '16']}>Privacy Policy</Text>
          </NextLink>
          <NextLink href='/' passHref>
            <Text size={['14', '16']}>Partners & Affiliates</Text>
          </NextLink>
          <NextLink href='/' passHref>
            <Text size={['14', '16']}>Sitemap</Text>
          </NextLink>
        </SimpleGrid>
      </Stack>
    </Flex>
  </Container>
)

export default Footer
