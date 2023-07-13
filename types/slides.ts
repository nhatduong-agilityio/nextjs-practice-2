import type { StaticImageData } from 'next/legacy/image'

export type TSlide = {
  id: string
  image: StaticImageData
  imageAlt: string
  content: {
    title: string
    description: string
  }
}

export type TSlides = TSlide[]
