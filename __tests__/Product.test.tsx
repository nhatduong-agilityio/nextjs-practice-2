import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import type { TProducts } from '@matched-types/product'
import { ProductsMock } from '@mock/dataMock'
import ProductPage from '../app/(routing)/product/ProductPage'
import Product from '../app/(routing)/product/page'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
  useSearchParams: jest.fn(),
}))

jest.doMock('../app/(routing)/product/ProductPage.tsx', () => {
  const ProductPageMock = () => <ProductPage products={ProductsMock || ({} as TProducts)} />
  return ProductPageMock
})

describe('Product', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const element = await Product()

    const view = render(element)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should Product match snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
