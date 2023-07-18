import { COMING_SOON } from '@constants/endPoints'
import { PORT } from '@constants/routes'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ComingSoonPage = dynamic(() => import('./ComingSoonPage'))

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Coming Soon | Shop Bag',
  description: 'Coming Soon Furniture Marketplace Shop Bag',
  keywords: ['signin', 'shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${PORT}${COMING_SOON}`,
    title: 'Coming Soon | Shop Bag',
    description: 'Coming Soon Furniture Marketplace Shop Bag',
    siteName: 'Coming Soon',
  },
  twitter: {
    title: 'Coming Soon | Shop Bag',
    description: 'Coming Soon Furniture Marketplace Shop Bag',
    card: 'summary',
  },
}

const ComingSoon = () => {
  return <ComingSoonPage />
}

export default ComingSoon
