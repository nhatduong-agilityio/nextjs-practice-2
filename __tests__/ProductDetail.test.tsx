import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import { ProductsMock } from '@mock/dataMock'
import type { TProduct } from '@matched-types/product'
import ProductDetail from '../app/(routing)/product/[id]/page'
import ProductDetailPage from '../app/(routing)/product/[id]/ProductDetailPage'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
  useSearchParams: jest.fn(),
}))

jest.doMock('../app/(routing)/product/[id]/ProductDetailPage.tsx', () => {
  const ProductDetailPageMock = () => (
    <ProductDetailPage item={ProductsMock[0] || ({} as TProduct)} />
  )
  return ProductDetailPageMock
})

describe('ProductDetail', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const props = {
      params: { id: '6509d2a1-2fdd-45f6-b285-d9a0449eaa43' },
    }

    const view = render(<ProductDetail {...props} />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should ProductDetail match snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
