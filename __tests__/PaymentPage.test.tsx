import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import PaymentPage from '../app/(routing)/payment/PaymentPage'

describe('PaymentPage', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<PaymentPage />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should PaymentPage match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
