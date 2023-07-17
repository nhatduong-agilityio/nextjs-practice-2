export type TProduct = {
  id: string
  name: string
  category: string
  images: {
    image: string
    listImage?: string[]
  }
  imageAlt: string
  description: string
  details: {
    id: string
    content: string
  }[]
  color: string
  price: number
  discount: number
  sellCount: number
  rating: number
  wish?: boolean
}

export type TProducts = TProduct[]
