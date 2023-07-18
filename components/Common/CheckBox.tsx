import type { UseCheckboxProps } from '@chakra-ui/react'
import { Box, chakra, Flex, Text, useCheckbox } from '@chakra-ui/react'
import React, { memo } from 'react'

const CheckBox = memo((props: UseCheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props)
  const { name } = props

  return (
    <chakra.label
      display='flex'
      flexDirection='row'
      alignItems='center'
      gridColumnGap={['13px', '15px', '15px']}
      w='full'
      bg='transparent'
      rounded='md'
      cursor='pointer'
      textStyle={['small', 'medium']}
      mt={['13px', '15px', '15px']}
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems='center'
        justifyContent='center'
        border='2px solid'
        borderColor='black'
        w='18px'
        h='18px'
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w='10px' h='10px' bg='black' />}
      </Flex>
      <Text size={['16', '20']} {...getLabelProps()}>
        {name}
      </Text>
    </chakra.label>
  )
})

CheckBox.displayName = 'CheckBox'

export default CheckBox
