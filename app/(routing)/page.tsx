import dynamic from 'next/dynamic'

import type { Metadata } from 'next'
import { ARTICLES_ENDPOINT, PRODUCTS_ENDPOINT } from '@constants/endPoints'
import { PAGE_URL, PORT } from '@constants/routes'
import { fetcherInstance, fetcherInstanceAPI } from '@services/requests'
import type { TArticles } from '@matched-types/articles'
import { notFound } from 'next/navigation'
import type { TProducts } from '@matched-types/product'

const HomePage = dynamic(() => import('./HomePage'))

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Shop Bag',
  description: 'Furniture Marketplace Shop Bag',
  keywords: ['shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${PORT}${PAGE_URL.HOME.URL}`,
    title: 'Shop Bag',
    description: 'Furniture Marketplace Shop Bag',
    siteName: 'Shop Bag',
  },
  twitter: {
    title: 'Shop Bag',
    description: 'Furniture Marketplace Shop Bag',
    card: 'summary',
  },
}

async function getData() {
  const articles: TArticles = await fetcherInstanceAPI({
    endpoint: ARTICLES_ENDPOINT,
    fetchingMethod: 'SSR',
  })

  const products: TProducts = await fetcherInstance({
    endpoint: PRODUCTS_ENDPOINT,
  })

  return {
    props: {
      articles,
      products,
    },
  }
}

const Home = async () => {
  const response = await getData()

  const { articles, products } = response.props

  if (!articles || articles.length <= 0) {
    notFound()
  }

  return <HomePage articles={articles} products={products} />
}

export default Home
