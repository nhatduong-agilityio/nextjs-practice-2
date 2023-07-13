import { BASE_URL, SIGNIN_ENDPOINT } from '@constants/endPoints'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const SignInPage = dynamic(() => import('./SignInPage'))

export const metadata: Metadata = {
  title: 'Sign In | Shop Bag',
  description: 'Sign In Furniture Marketplace Shop Bag',
  keywords: ['signin', 'shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${BASE_URL}${SIGNIN_ENDPOINT}`,
    title: 'Sign In | Shop Bag',
    description: 'Sign In Furniture Marketplace Shop Bag',
    siteName: 'Sign In',
  },
  twitter: {
    title: 'Sign In | Shop Bag',
    description: 'Sign In Furniture Marketplace Shop Bag',
    card: 'summary',
  },
}

const SignIn = () => {
  return <SignInPage />
}

export default SignIn
