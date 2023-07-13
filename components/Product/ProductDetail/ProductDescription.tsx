import { Flex, Heading, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react'
import React, { memo } from 'react'

type TDetail = {
  id: string
  content: string
}

interface IProps {
  description: string
  listDetail: TDetail[]
}

const ProductDescription = memo(({ description, listDetail }: IProps) => (
  <Flex w='full' flexDir={['column', 'row']} pt={[0, '30px']}>
    <VStack w={['full', '50%']} style={{ margin: 0 }}>
      <Heading
        w='full'
        variant='large'
        fontSize='30px'
        display={['none', 'flex']}
        pb='25px'
        lineHeight='inherit'
      >
        Item Detail
      </Heading>
      <Text w='full' size={['16', '20']} variant='grayScheme'>
        {description}
      </Text>
    </VStack>
    <Stack w={['full', '50%']} pl={[0, '50px']} pt={[0, '60px']}>
      <UnorderedList gap='10px' mt={['20px', 0]}>
        {listDetail.map((detail) => (
          <ListItem key={detail.id} pb={['15px', '25px']}>
            <Text size={['16', '20']} variant='grayScheme'>
              {detail.content}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  </Flex>
))

ProductDescription.displayName = 'ProductProductDescription'

export default ProductDescription
