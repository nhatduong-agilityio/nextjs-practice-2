import type { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      margin: '0 !important',
      fontWeight: 'Regular',
      width: 'full',
      color: '#78788C',
      borderColor: '#CACACA',
      _focusVisible: { boxShadow: 'none', outline: 'none !important' },
      ':focus': {
        borderColor: '#CACACA',
      },
    },
  },
  variants: {
    outline: {
      field: {
        color: 'black',
        // borderRadius: '10px',
        border: 'solid 1px #CACACA',
        ':focus': {
          border: 'solid 1px #CACACA',
        },
        bg: '#f9f9f9',
        _focusVisible: {
          boxShadow: 'none',
          outline: 'none !important',
        },
      },
    },
    outlineGhost: {
      field: {
        color: 'black',
        // borderRadius: '10px',
        border: 'solid 1px black',
        ':focus': {
          border: 'solid 1px black',
        },
        bg: 'white',
        _placeholder: {
          color: 'black',
        },
      },
    },
  },
  sizes: {
    xs: {
      field: {
        h: '46px',
        fontSize: '16px',
        borderRadius: 'md',
      },
    },
    sm: {
      field: {
        h: '52px',
        fontSize: '16px',
        borderRadius: 'md',
      },
    },
    md: {
      field: {
        h: '57px',
        fontSize: '20px',
        borderRadius: 'md',
      },
    },
    '2md': {
      field: {
        h: '60px',
        fontSize: '20px',
        borderRadius: 'md',
      },
    },
    lg: {
      field: {
        h: '66px',
        fontSize: '20px',
        borderRadius: 'md',
      },
    },
  },
  defaultProps: {
    size: 'sm',
  },
}
