import { Box, Select, Text, VStack } from '@chakra-ui/react'
import React, { Fragment, memo } from 'react'

type Options = {
  id: string
  value: string
  label: string
}[]

interface IProps {
  name: string
  placeholder?: string
  options: Options
  disableLabel?: boolean
}

const SelectOption = memo(({ name, placeholder, options, disableLabel = false }: IProps) => (
  <VStack w='full' alignItems='flex-start' style={{ margin: 0 }}>
    <Text
      display={`${disableLabel ? 'none' : 'flex'}`}
      size={['16', '25']}
      variant='small'
      pb={['10px', '15px']}
    >
      {name}
    </Text>
    <Box style={{ margin: 0 }} w='full'>
      <Select
        maxW={['145px', '197px', '197px']}
        height='52px'
        placeholder={placeholder}
        textTransform='capitalize'
        borderColor='black'
        _focusVisible={{ boxShadow: 'none', outline: 'none' }}
        fontSize={['16px', '25px', '25px']}
        fontWeight='regular'
      >
        {options.map((item) => (
          <Fragment key={item.id}>
            <option value={item.value}>{item.label}</option>
          </Fragment>
        ))}
      </Select>
    </Box>
  </VStack>
))

SelectOption.displayName = 'SelectOption'

export default SelectOption
