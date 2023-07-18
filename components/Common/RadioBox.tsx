// Libs
import React, { memo } from 'react'
import type { UseRadioProps } from '@chakra-ui/react'
import { useRadio, chakra, Box, Flex } from '@chakra-ui/react'

const RadioBox = memo((props: UseRadioProps) => {
  const { ...radioProps } = props
  const { state, getInputProps, getCheckboxProps, htmlProps } = useRadio(radioProps)

  return (
    <chakra.label {...htmlProps} cursor='pointer'>
      <input {...getInputProps({})} hidden />
      <Flex
        alignItems='center'
        justifyContent='center'
        border='1px solid'
        borderColor='black'
        borderRadius='50px'
        w='15px'
        h='15px'
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w='9px' h='9px' bg='black' borderRadius='50px' />}
      </Flex>
    </chakra.label>
  )
})

RadioBox.displayName = 'RadioBox'

export default RadioBox
