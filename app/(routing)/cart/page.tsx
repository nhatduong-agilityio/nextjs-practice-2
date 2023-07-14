import { PAGE_URL, PORT } from '@constants/routes'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ShoppingCartPage = dynamic(() => import('./ShoppingCartPage'))

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Shop Bag | Cart',
  description: 'Your shopping cart here',
  keywords: ['cart', 'shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${PORT}${PAGE_URL.CART.URL}`,
    title: 'Shop Bag | Cart',
    description: 'Your shopping cart here',
    siteName: 'Cart',
  },
  twitter: {
    title: 'Shop Bag | Cart',
    description: 'Your shopping cart here',
    card: 'summary',
  },
}

const ShoppingCart = () => {
  return <ShoppingCartPage />
}

export default ShoppingCart
