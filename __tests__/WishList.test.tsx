import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import WishList from '../app/(routing)/wishlist/page'

describe('WishList', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<WishList />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should WishList match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
