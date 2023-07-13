import { Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { memo } from 'react'

interface IProps {
  name: string
  type?: string
  label: string
  placeholder: string
}

const ShippingFormItem = memo(({ name, type = 'text', label, placeholder }: IProps) => (
  <VStack w='full' alignItems='flex-start' gap={['10px', '15px']} style={{ margin: 0 }} pt='15px'>
    <Text size={['16', '20']} variant='medium'>
      {label}
    </Text>
    {type !== 'textArea' ? (
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        variant='outline'
        size={['sm', '2md']}
        px='35px'
      />
    ) : (
      <Textarea
        placeholder={placeholder}
        style={{ margin: 0 }}
        background='#f9f9f9'
        fontSize={['16px', '20px']}
      />
    )}
  </VStack>
))

ShippingFormItem.displayName = 'ShippingFormItem'

export default ShippingFormItem
