import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import Payment from '../app/(routing)/payment/page'

describe('Payment', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<Payment />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should Payment match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
