import { PAGE_URL, PORT } from '@constants/routes'
import type { TProducts } from '@matched-types/product'
import { ProductsMock } from '@mock/dataMock'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

const WishListPage = dynamic(() => import('./WishListPage'))

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Shop Bag | Products Wishlist',
  description: 'You can see wishlist products here',
  keywords: ['wishlist', 'shop bag', 'nextjs', 'furniture marketplace'],
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: `${PORT}${PAGE_URL.WISHLIST.URL}`,
    title: 'Shop Bag | Products Wishlist',
    description: 'You can see wishlist products here',
    siteName: 'WishList',
  },
  twitter: {
    title: 'Shop Bag | Products Wishlist',
    description: 'You can see wishlist products here',
    card: 'summary',
  },
}

function getWishListProducts() {
  const products: TProducts = ProductsMock
  const wishListProducts = products.filter((product) => product.wish)

  return {
    props: {
      wishListProducts,
    },
  }
}

const WishList = () => {
  const response = getWishListProducts()

  const { wishListProducts } = response.props

  if (!wishListProducts || Object.keys(wishListProducts).length === 0) {
    notFound()
  }

  return <WishListPage products={wishListProducts} />
}

export default WishList
