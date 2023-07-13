import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import { ProductsMock } from '@mock/dataMock'
import WishListPage from '../app/(routing)/wishlist/WishListPage'

describe('WishListPage', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  const props = { products: ProductsMock }

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<WishListPage {...props} />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should WishListPage match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
