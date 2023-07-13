import type { TArticles } from '@matched-types/articles'
import dynamic from 'next/dynamic'
import React from 'react'

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
}

const HomePage = ({ articles }: IHomeProps) => {
  return (
    <>
      <Hero />
      <BestSellerProducts />
      <Categories />
      <Products />
      <CategoriesDetail />
      <Article />
      <ListArticles articles={articles} />
    </>
  )
}

export default HomePage
