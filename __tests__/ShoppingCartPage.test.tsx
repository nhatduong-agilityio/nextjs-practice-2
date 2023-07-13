import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import ShoppingCartPage from '../app/(routing)/cart/ShoppingCartPage'

describe('WishListPage', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<ShoppingCartPage />)

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
