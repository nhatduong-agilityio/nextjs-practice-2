import { extendTheme } from '@chakra-ui/react'
import { Heading } from '@themes/components/Heading'
import { Text } from '@themes/components/Text'
import { Button } from '@themes/components/Button'
import { Input } from '@themes/components/Input'
import { Open_Sans } from 'next/font/google'

export const openSansFont = Open_Sans({
  subsets: ['latin'],
  style: 'normal',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const openSans = openSansFont.style.fontFamily

export const customTheme = extendTheme({
  // add appropriate properties here
  radii: {
    none: '0',
    sm: '5px',
    md: '10px',
  },
  space: {
    2: '15px',
    3: '25px',
  },
  breakpoints: {
    sm: '1440px', // 480px
    md: '1440px', // 768px
    lg: '1440px', // 992px
    xl: '1440px', // 1280px
    '2xl': '1536px', // 1536px
  },
  fonts: {
    heading: `${openSans}, sans-serif`,
    body: `${openSans}, sans-serif`,
  },
  fontWeights: {
    Light: '300',
    Regular: '400',
    SemiBold: '600',
    Bold: '700',
    ExtraBold: '800',
  },
  textStyles: {
    small: {
      fontSize: '16px',
    },
    medium: {
      fontSize: '20px',
    },
  },
  components: {
    Heading,
    Text,
    Button,
    Input,
  },
})
