import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import ComingSoon from '../app/(routing)/comingsoon/page'

describe('ComingSoon', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<ComingSoon />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should ComingSoon match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
