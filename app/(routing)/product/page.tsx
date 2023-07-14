import { PAGE_URL, PORT } from '@constants/routes'
import type { TProducts } from '@matched-types/product'
import { ProductsMock } from '@mock/dataMock'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '@components/Common/Loading'

const ProductPage = dynamic(() => import('./ProductPage'))

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Shop Bag | Products',
  description: 'You can find everything about furniture product here',
  keywords: ['product', 'shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${PORT}${PAGE_URL.PRODUCT.URL}`,
    title: 'Shop Bag | Products',
    description: 'You can find everything about furniture product here',
    siteName: 'Products',
  },
  twitter: {
    title: 'Shop Bag | Products',
    description: 'You can find everything about furniture product here',
    card: 'summary',
  },
}

function getProducts() {
  const products: TProducts = ProductsMock

  return {
    props: {
      products,
    },
  }
}

const Products = () => {
  const response = getProducts()

  const { products } = response.props

  if (!products || Object.keys(products).length === 0) {
    notFound()
  }

  return (
    <Suspense fallback={<Loading />}>
      <ProductPage products={products} />
    </Suspense>
  )
}

export default Products
