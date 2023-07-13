import { BASE_URL } from '@constants/endPoints'
import { PAGE_URL } from '@constants/routes'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const PaymentPage = dynamic(() => import('./PaymentPage'))

export const metadata: Metadata = {
  title: 'Shop Bag | Payment',
  description: 'You can pay with options you want in here',
  keywords: ['pay', 'shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${BASE_URL}${PAGE_URL.PAYMENT.URL}`,
    title: 'Shop Bag | Payment',
    description: 'You can pay with options you want in here',
    siteName: 'Payment',
  },
  twitter: {
    title: 'Shop Bag | Payment',
    description: 'You can pay with options you want in here',
    card: 'summary',
  },
}

const Payment = () => {
  return <PaymentPage />
}

export default Payment
