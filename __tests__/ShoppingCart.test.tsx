import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import ShoppingCart from '../app/(routing)/cart/page'

describe('ShoppingCart', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<ShoppingCart />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should ShoppingCart match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
