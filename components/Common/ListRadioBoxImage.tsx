// Libs
import React, { memo } from 'react'
import type { UseRadioProps } from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react'
import type { StaticImageData } from 'next/legacy/image'
import Image from 'next/legacy/image'
import RadioBox from './RadioBox'

type TRadioBoxImageList = {
  id: string
  value: string
  image: StaticImageData
  altImage: string
}

interface IProps {
  items: TRadioBoxImageList[]
  getRadioProps: ({ value }: { value: string }) => UseRadioProps
}

const RadioBoxImageList = memo(({ items, getRadioProps }: IProps) => (
  <VStack style={{ margin: 0 }} w='full' alignItems='flex-start'>
    {items.map((item) => (
      <HStack key={item.id} gap='10px'>
        <RadioBox {...getRadioProps({ value: item.value })} />
        <Image
          src={item.image}
          alt={item.altImage}
          width='100'
          height='50'
          layout='fixed'
          objectFit='contain'
          priority
        />
      </HStack>
    ))}
  </VStack>
))

RadioBoxImageList.displayName = 'RadioBoxImageList'

export default RadioBoxImageList
