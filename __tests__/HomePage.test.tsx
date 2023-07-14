import '@testing-library/jest-dom'

import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'

import Hero from '@components/Sections/Hero'
import BestSellerProducts from '@components/Sections/BestSellerProducts'
import Categories from '@components/Sections/Categories'
import CategoriesDetail from '@components/Sections/CategoriesDetail'
import Products from '@components/Sections/Products'
import Article from '@components/Sections/Article'
import ListArticles from '@components/Sections/ListArticles'
import { ArticlesMock, ProductsMock } from '@mock/dataMock'
import HomePage from '../app/(routing)/HomePage'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}))

describe('Home', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  const props = { articles: ArticlesMock, products: ProductsMock }

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<HomePage {...props} />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should Home match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })

  it('Should render section Hero', async () => {
    const { container } = render(<Hero />)

    expect(container).toMatchSnapshot()
  })

  it('Should render section Best Seller Products', async () => {
    const { container } = render(<BestSellerProducts products={ProductsMock} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render section Categories', async () => {
    const { container } = render(<Categories />)

    expect(container).toMatchSnapshot()
  })

  it('Should render section Products', async () => {
    const { container } = render(<Products products={ProductsMock} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render section Categories Detail', async () => {
    const { container } = render(<CategoriesDetail />)

    expect(container).toMatchSnapshot()
  })

  it('Should render section Article', async () => {
    const { container } = render(<Article />)

    expect(container).toMatchSnapshot()
  })

  it('Should render section List Article', async () => {
    const { container } = render(<ListArticles articles={ArticlesMock} />)

    expect(container).toMatchSnapshot()
  })
})
