export type TSlide = {
  id: string
  image: string
  imageAlt: string
  content: {
    title: string
    description: string
  }
}

export type TSlides = TSlide[]
