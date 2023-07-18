import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import { ProductsMock } from '@mock/dataMock'
import type { TProduct } from '@matched-types/product'
import ProductImage from '@components/Product/ProductDetail/ProductImage'
import ProductDetailPage from '../app/(routing)/product/[id]/ProductDetailPage'

describe('ProductDetailPage', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  const props = { item: ProductsMock[0] || ({} as TProduct) }

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<ProductDetailPage {...props} />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should ProductDetailPage match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })

  it('Should ProductImage match snapshot', async () => {
    await render(<ProductDetailPage {...props} />)

    const mockProps = {
      altImage: props.item.imageAlt,
      image: props.item.images.image,
      listImage: props.item.images.listImage,
    }

    const { container } = render(<ProductImage {...mockProps} />)

    expect(container).toMatchSnapshot()
  })
})
