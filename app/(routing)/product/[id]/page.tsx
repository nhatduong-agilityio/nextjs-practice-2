import Loading from '@components/Common/Loading'
import { PRODUCTS_ENDPOINT } from '@constants/endPoints'
import { PAGE_URL, PORT } from '@constants/routes'
import type { TProducts } from '@matched-types/product'
import { fetcherInstance } from '@services/requests'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

const ProductDetailPage = dynamic(() => import('./ProductDetailPage'))

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  const products: TProducts = await fetcherInstance({
    endpoint: PRODUCTS_ENDPOINT,
  })

  return products.map((product) => ({
    id: product.id,
  }))
}

async function getProduct(params: { id: string }) {
  const products: TProducts = await fetcherInstance({
    endpoint: PRODUCTS_ENDPOINT,
  })

  const matchedProduct = products.find((product) => product.id === params.id)

  return matchedProduct
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const products: TProducts = await fetcherInstance({
    endpoint: PRODUCTS_ENDPOINT,
  })

  const matchedProduct = products.find((product) => product.id === params.id)

  return {
    metadataBase: new URL(`${PORT}`),
    title: `Product Detail | ${matchedProduct?.name}`,
    description: matchedProduct?.name,
    keywords: ['product', 'shop bag', 'nextjs', 'furniture marketplace'],
    viewport: 'width=device-width, initial-scale=1',
    icons: { icon: '/favicon.ico' },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      url: `${PORT}${PAGE_URL.PRODUCT.URL}/${matchedProduct?.id}`,
      title: `Product Detail | ${matchedProduct?.name}`,
      description: matchedProduct?.name,
      siteName: 'Product Detail',
    },
    twitter: {
      title: `Product Detail | ${matchedProduct?.name}`,
      description: matchedProduct?.name,
      card: 'summary',
    },
  }
}

const ProductDetail = async ({ params }: Props) => {
  const product = await getProduct(params)

  if (!product || Object.keys(product).length === 0) {
    notFound()
  }

  return (
    <Suspense fallback={<Loading />}>
      <ProductDetailPage item={product} />
    </Suspense>
  )
}

export default ProductDetail
