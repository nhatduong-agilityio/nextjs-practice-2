import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import Shipping from '../app/(routing)/shipping/page'

describe('Shipping', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<Shipping />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should Shipping match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
