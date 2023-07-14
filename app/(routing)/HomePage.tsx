'use client'

import type { TArticles } from '@matched-types/articles'
import type { TProducts } from '@matched-types/product'
import dynamic from 'next/dynamic'
import React, { memo, useMemo } from 'react'

// Components
const Hero = dynamic(() => import('@components/Sections/Hero'))
const BestSellerProducts = dynamic(() => import('@components/Sections/BestSellerProducts'))
const Categories = dynamic(() => import('@components/Sections/Categories'))
const Products = dynamic(() => import('@components/Sections/Products'))
const CategoriesDetail = dynamic(() => import('@components/Sections/CategoriesDetail'))
const Article = dynamic(() => import('@components/Sections/Article'))
const ListArticles = dynamic(() => import('@components/Sections/ListArticles'))

interface IHomeProps {
  articles: TArticles
  products: TProducts
}

const HomePage = memo(({ articles, products }: IHomeProps) => {
  const bestSellerProducts = useMemo(() => {
    return products.filter((product) => product.discount !== 0)
  }, [products])

  return (
    <>
      <Hero />
      <BestSellerProducts products={bestSellerProducts} />
      <Categories />
      <Products products={products} />
      <CategoriesDetail />
      <Article />
      <ListArticles articles={articles} />
    </>
  )
})

HomePage.displayName = 'HomePage'

export default HomePage
