// Libs
import React, { Fragment, memo, useState } from 'react'
import {
  Box,
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'

// Components
import HeartIcon from '@components/Icons/HeartIcon'
import StarIcon from '@components/Icons/StarIcon'
import Image from '@components/Common/Image'

// Types
import type { TProduct } from '@matched-types/product'
import { PAGE_URL } from '@constants/routes'

interface IProps {
  product: TProduct
  variant?: 'small' | 'medium' | 'large'
  headingCard?: 'small' | 'medium' | 'large'
  sizeImage?: 'small' | 'medium'
}

const RATING = 5

const ProductCard = memo(
  ({ product, variant = 'large', headingCard = 'large', sizeImage = 'medium' }: IProps) => {
    const [wishList, setWishList] = useState(false)

    // valid sales percent
    const validDiscount = product.discount > 0 && product.discount <= 100

    // calculator price
    const salePrice = product.price - (product.price * product.discount) / 100

    const handleWishList = () => {
      setWishList(!wishList)
    }

    return (
      <ChakraCard boxShadow='none'>
        <CardHeader p={0} flexDir='row'>
          <Box
            position='absolute'
            zIndex='2'
            w='full'
            display='flex'
            justifyContent='end'
            p={['10px 15px', '15px 15px']}
          >
            <IconButton
              aria-label='wishlist-button'
              borderRadius='50px'
              minW='30px'
              width={['30px', '40px']}
              height={['30px', '40px']}
              onClick={handleWishList}
            >
              <HeartIcon
                width={['30px', '40px']}
                height={['30px', '40px']}
                viewBox='0 0 30 30'
                fill={wishList ? 'red' : '#C0C0CD'}
                stroke={wishList ? 'red' : '#C0C0CD'}
              />
            </IconButton>
          </Box>
          <NextLink href={`${PAGE_URL.PRODUCT.URL}/${product.id}`} passHref>
            <Image
              width='full'
              alt={product.imageAlt}
              src={product.images.image}
              height={['150', `${sizeImage === 'medium' ? '300' : '259'}`]}
              variant='primary'
            />
          </NextLink>
        </CardHeader>
        <CardBody p={['10px 0 5px 0', '15px 0 10px 0', '15px 0 10px 0']}>
          <Box>
            <NextLink href={`${PAGE_URL.PRODUCT.URL}/${product.id}`} passHref>
              <Heading variant={['small', `${headingCard}`]} lineHeight='normal'>
                {product.name}
              </Heading>
            </NextLink>
            <Box display='flex' pt={['5px', '10px', '10px']} alignItems='center'>
              {Array(RATING)
                .fill('')
                .map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={index}>
                    <StarIcon
                      width={['15px', '18px', '18px']}
                      height={['15px', '18px', '18px']}
                      viewBox='0 0 15 15'
                      fill={index < product.rating ? '#F9BB1D' : 'gray.300'}
                      style={{ marginRight: '1px' }}
                    />
                  </Fragment>
                ))}
              <Text ml='2' size={['14', `${variant === 'medium' ? 14 : 16}`]} variant='grayScheme'>
                ({product.sellCount} Sell)
              </Text>
            </Box>
            <Flex flexDir='row' alignItems='center' w='full' gap={['5px', '10px']}>
              <Text
                mr='10px'
                noOfLines={1}
                size={[`${variant === 'medium' ? 16 : 18}`, `${variant === 'medium' ? 22 : 25}`]}
                variant='large'
              >
                ${salePrice}
              </Text>
              {validDiscount && (
                <>
                  <Text
                    as='del'
                    mr='3px'
                    noOfLines={1}
                    size={[
                      `${variant === 'medium' ? 16 : 18}`,
                      `${variant === 'medium' ? 15 : 25}`,
                    ]}
                    variant='grayScheme'
                  >
                    ${product.price}
                  </Text>
                  <Text
                    variant='redScheme'
                    noOfLines={1}
                    size={[
                      `${variant === 'medium' ? 16 : 18}`,
                      `${variant === 'medium' ? 15 : 25}`,
                    ]}
                  >
                    -{product.discount}%
                  </Text>
                </>
              )}
            </Flex>
          </Box>
        </CardBody>
      </ChakraCard>
    )
  },
)

ProductCard.displayName = 'ProductCard'

export default ProductCard
