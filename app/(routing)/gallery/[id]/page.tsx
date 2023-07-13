import { ARTICLES_ENDPOINT, BASE_URL } from '@constants/endPoints'
import { PAGE_URL } from '@constants/routes'
import type { TArticle, TArticles } from '@matched-types/articles'
import { fetcherInstance, fetcherInstanceAPI } from '@services/requests'
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
  const response: TArticle = await fetcherInstanceAPI({
    endpoint: `${ARTICLES_ENDPOINT}/${params.id}`,
  })

  return response
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props
  const product: TArticle = await fetcherInstanceAPI({
    endpoint: `${ARTICLES_ENDPOINT}/${params.id}`,
  })

  return {
    title: `Gallery Detail | ${product.title}`,
    description: product.title,
    keywords: ['gallery', 'shop bag', 'nextjs', 'furniture marketplace'],
    viewport: 'width=device-width, initial-scale=1',
    icons: { icon: '/favicon.ico' },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      url: `${BASE_URL}${PAGE_URL.GALLERY.URL}/${product.id}`,
      title: `Gallery Detail | ${product.title}`,
      description: product.title,
      siteName: 'Gallery Detail',
    },
    twitter: {
      title: `Gallery Detail | ${product.title}`,
      description: product.title,
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