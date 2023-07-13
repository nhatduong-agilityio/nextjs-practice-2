import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { Fragment, memo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import StarIcon from '@components/Icons/StarIcon'

interface IProps {
  rating: number
  price: number
  discount: number
  sellCount: number
}

const ProductMainContent = memo(({ rating, discount, price, sellCount }: IProps) => {
  // valid sales percent
  const validDiscount = discount > 0 && discount <= 100

  // calculator price
  const salePrice = price - (price * discount) / 100

  return (
    <Box w='full' style={{ margin: 0 }}>
      <Box display='flex' pt='15px' alignItems='center'>
        {Array(5)
          .fill('')
          .map((_, index) => (
            <Fragment key={uuidv4()}>
              <StarIcon
                width={['15px', '18px', '18px']}
                height={['15px', '18px', '18px']}
                viewBox='0 0 15 15'
                fill={index < rating ? '#F9BB1D' : 'gray.300'}
                style={{ marginRight: '1px' }}
              />
            </Fragment>
          ))}
        <Text ml='10px' size={['16', '18']} variant='grayScheme'>
          ({sellCount} Sell)
        </Text>
      </Box>
      <Flex flexDir='row' alignItems='center' w='full' pt='15px' gap={['5px', '10px']}>
        <Heading mr='10px' fontSize={['20px', '45px']}>
          ${salePrice}
        </Heading>
        {validDiscount && (
          <>
            <Text as='del' size={['18', '40']} mr='10px'>
              ${price}
            </Text>
            <Text size={['18', '40']} variant='redScheme'>
              -{discount}%
            </Text>
          </>
        )}
      </Flex>
    </Box>
  )
})

ProductMainContent.displayName = 'ProductProductMainContent'

export default ProductMainContent
