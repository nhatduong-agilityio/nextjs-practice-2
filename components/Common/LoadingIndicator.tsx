import React, { memo } from 'react'
import type { SpinnerProps } from '@chakra-ui/react'
import { Center, Spinner } from '@chakra-ui/react'

const LoadingIndicator = memo(({ ...props }: SpinnerProps) => {
  return (
    <Center
      backgroundColor='silverFoil'
      opacity={0.5}
      position='fixed'
      backdropFilter='blur(3px)'
      inset={0}
      zIndex={1500}
      pb='150px'
    >
      <Spinner {...props} />
    </Center>
  )
})

LoadingIndicator.displayName = 'LoadingIndicator'

export default memo(LoadingIndicator)
