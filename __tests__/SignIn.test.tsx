import { render, waitFor } from '@utils/testUtils'
import SignIn from '../app/(auth)/signin/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('SignIn render', () => {
  it('Should SignIn match Snapshot', async () => {
    const { container } = render(<SignIn />)

    let lazyContainer

    await waitFor(() => {
      lazyContainer = container
    })

    expect(lazyContainer).toMatchSnapshot()
  })
})
