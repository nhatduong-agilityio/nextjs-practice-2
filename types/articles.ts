import type { StaticImageData } from 'next/legacy/image'

export type TArticle = {
  id: string
  title: string
  image: StaticImageData
  imageAlt: string
  description: string
}

export type TArticles = TArticle[]
