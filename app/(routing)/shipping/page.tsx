import { BASE_URL } from '@constants/endPoints'
import { PAGE_URL } from '@constants/routes'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ShippingPage = dynamic(() => import('./ShippingPage'))

export const metadata: Metadata = {
  title: 'Shop Bag | Shipping',
  description: 'We need your information to ship',
  keywords: ['shipping', 'shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${BASE_URL}${PAGE_URL.SHIPPING.URL}`,
    title: 'Shop Bag | Shipping',
    description: 'We need your information to ship',
    siteName: 'Shipping',
  },
  twitter: {
    title: 'Shop Bag | Shipping',
    description: 'We need your information to ship',
    card: 'summary',
  },
}

const ShoppingCart = () => {
  return <ShippingPage />
}

export default ShoppingCart
