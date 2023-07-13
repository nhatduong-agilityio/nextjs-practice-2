import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import Product from '../app/(routing)/product/page'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
  useSearchParams: jest.fn(),
}))

describe('Product', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<Product />)

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
