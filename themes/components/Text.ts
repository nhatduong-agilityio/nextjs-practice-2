import type { ComponentStyleConfig } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
  baseStyle: {
    margin: '0 !important',
    fontWeight: 'Regular',
    fontSize: '16px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: 'normal',
  },
  sizes: {
    12: {
      fontSize: '12px',
    },
    14: {
      fontSize: '14px',
    },
    15: {
      fontSize: '15px',
    },
    16: {
      fontSize: '16px',
    },
    18: {
      fontSize: '18px',
    },
    20: {
      fontSize: '20px',
    },
    22: {
      fontSize: '22px',
    },
    25: {
      fontSize: '25px',
    },
    30: {
      fontSize: '30px',
    },
    40: {
      fontSize: '40px',
    },
  },
  variants: {
    grayScheme: {
      color: '#78788C',
    },
    redScheme: {
      color: 'red',
    },
    greenScheme: {
      color: 'green',
    },
    light: {
      fontWeight: 'Light',
    },
    small: {
      fontWeight: 'SemiBold',
    },
    medium: {
      fontWeight: 'Bold',
    },
    large: {
      fontWeight: 'ExtraBold',
    },
  },
  defaultProps: {
    size: 15,
  },
}
