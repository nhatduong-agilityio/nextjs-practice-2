import type { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: 'SemiBold', // Normally, it is "semibold"
    radii: 'base',
    width: 'full',
    bg: 'black',
    color: 'white',
    textTransform: 'capitalize',
    _hover: {
      opacity: 0.6,
    },
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    xs: {
      h: '52px',
      fontSize: '12px',
    },
    sm: {
      h: '52px',
      fontSize: '16px',
    },
    md: {
      h: '60px',
      fontSize: '20px',
    },
    lg: {
      h: '66px',
      fontSize: '20px',
    },
  },
  // 3. We can add a new visual variant
  variants: {
    // 5. We can add responsive variants
    outline: {
      border: 'solid 1px',
      borderColor: 'black',
      bg: 'white',
      color: 'black',
      _hover: {
        bgColor: 'transparent',
      },
    },
    ghost: {
      bgColor: 'transparent',
      _hover: {
        bgColor: 'transparent',
      },
      _focus: {
        bgColor: 'transparent',
      },
    },
    primary: {
      bg: 'white',
      color: 'black',
      _hover: {
        opacity: 0.6,
      },
    },
    secondary: {
      bg: '#E0EBED',
      color: 'black',
      _hover: {
        opacity: 0.6,
      },
    },
  },
  // 6. We can overwrite defaultProps
  defaultProps: {
    variant: 'unstyled', // default is solid
  },
}
