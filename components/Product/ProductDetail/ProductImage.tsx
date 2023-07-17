import { Box, Flex, Stack } from '@chakra-ui/react'
import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from '@components/Common/Image'

interface IProps {
  image: string
  altImage: string
  listImage?: string[]
}

const ProductImage = memo(({ image, altImage, listImage }: IProps) => (
  <Flex w={['full', '50%', '50%']} flexDir={['column', 'row-reverse', 'row-reverse']}>
    <Stack w='full' style={{ margin: 0 }}>
      <Box w='full' borderRadius='5px' overflow={['unset', 'unset', 'hidden']}>
        <Image alt={altImage} src={image} height={['250', '503', '503']} width='full' />
      </Box>
    </Stack>
    <Stack
      style={{ margin: 0 }}
      flexDir={['row', 'column', 'column']}
      p={['20px', 0, 0]}
      pr={[0, '25px', '25px']}
      gap={['10px', '25px', '25px']}
    >
      {listImage?.map((item) => (
        <Box key={`${uuidv4()}`} w={['60px', '107px', '107px']} style={{ margin: 0 }}>
          <Image
            alt={altImage}
            src={item}
            height={['60px', '107px', '107px']}
            variant='primary'
            width='full'
          />
        </Box>
      ))}
    </Stack>
  </Flex>
))

ProductImage.displayName = 'ProductProductImage'

export default ProductImage
