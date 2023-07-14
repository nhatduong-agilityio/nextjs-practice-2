import dynamic from 'next/dynamic'

import type { Metadata } from 'next'
import { ARTICLES_ENDPOINT, BASE_URL } from '@constants/endPoints'
import { PAGE_URL } from '@constants/routes'
import { fetcherInstanceAPI } from '@services/requests'
import type { TArticles } from '@matched-types/articles'
import { notFound } from 'next/navigation'

const HomePage = dynamic(() => import('./HomePage'))

export const metadata: Metadata = {
  title: 'Shop Bag',
  description: 'Furniture Marketplace Shop Bag',
  keywords: ['shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${BASE_URL}${PAGE_URL.HOME.URL}`,
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

  return {
    props: {
      articles,
    },
  }
}

const Home = async () => {
  const response = await getData()

  const { articles } = response.props

  if (!articles || articles.length <= 0) {
    notFound()
  }

  return <HomePage articles={articles} />
}

export default Home
