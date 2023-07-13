import type { ComponentStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    color: 'black',
    fontWeight: 'ExtraBold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: 'inherit',
  },
  sizes: {
    xs: {
      fontSize: '16px',
    },
    sm: {
      fontSize: '20px',
    },
    md: {
      fontSize: '22px',
    },
    xl: {
      fontSize: '40px',
    },
    '2xl': {
      fontSize: '50px',
    },
  },
  variants: {
    small: {
      fontSize: '16px',
      fontBold: 'Bold',
    },
    medium: {
      fontSize: '20px',
      fontBold: 'Bold',
    },
    large: {
      fontSize: '23px',
      fontBold: 'Bold',
    },
    extraBoldSM: {
      fontSize: '18px',
    },
    extraBoldMD: {
      fontSize: '22px',
    },
    extraBoldXL: {
      fontSize: '40px',
    },
    extraBold2XL: {
      fontSize: '50px',
    },
    boldXS: {
      fontWeight: 'Bold',
      fontSize: '16px',
    },
    boldSM: {
      fontWeight: 'Bold',
      fontSize: '18px',
    },
    boldMD: {
      fontWeight: 'Bold',
      fontSize: '22px',
    },
    boldXL: {
      fontWeight: 'Bold',
      fontSize: '40px',
    },
    primary: {
      fontSize: { base: '22px', sm: '50px' },
    },
  },
  defaultProps: {
    size: 'sm',
  },
}
