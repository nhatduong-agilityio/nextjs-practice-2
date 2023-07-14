import { ARTICLES_ENDPOINT, BASE_URL } from '@constants/endPoints'
import { PAGE_URL } from '@constants/routes'
import type { TArticles } from '@matched-types/articles'
import { fetcherInstance } from '@services/requests'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

const ArticleDetailPage = dynamic(() => import('./ArticleDetailPage'))

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  const articles: TArticles = await fetcherInstance({
    endpoint: ARTICLES_ENDPOINT,
  })

  return articles.map((article) => ({
    id: article.id,
  }))
}

async function getArticle(params: { id: string }) {
  const articles: TArticles = await fetcherInstance({
    endpoint: ARTICLES_ENDPOINT,
  })

  const response = articles.find((article) => article.id === params.id)

  return response
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const articles: TArticles = await fetcherInstance({
    endpoint: ARTICLES_ENDPOINT,
  })

  const response = articles.find((article) => article.id === params.id)

  return {
    title: `Gallery Detail | ${response?.title}`,
    description: response?.title,
    keywords: ['gallery', 'shop bag', 'nextjs', 'furniture marketplace'],
    viewport: 'width=device-width, initial-scale=1',
    icons: { icon: '/favicon.ico' },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      url: `${BASE_URL}${PAGE_URL.GALLERY.URL}/${response?.id}`,
      title: `Gallery Detail | ${response?.title}`,
      description: response?.title,
      siteName: 'Gallery Detail',
    },
    twitter: {
      title: `Gallery Detail | ${response?.title}`,
      description: response?.title,
      card: 'summary',
    },
  }
}

const ArticleDetail = async ({ params }: Props) => {
  const article = await getArticle(params)

  if (!article || Object.keys(article).length === 0) {
    notFound()
  }

  return <ArticleDetailPage item={article} />
}

export default ArticleDetail
