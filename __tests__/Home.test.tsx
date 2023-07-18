import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import Home from '../app/(routing)/page'

jest.mock('@services/requests', () => ({
  fetcherInstance: jest.fn(),
  fetcherInstanceAPI: jest.fn(),
}))

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

describe('Home', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const element = await Home()

    const view = render(element)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should Home match snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
