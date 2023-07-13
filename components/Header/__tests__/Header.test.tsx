import { render } from '@utils/testUtils'
import Header from '../Header'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}))

// jest.mock('next/navigation', () => ({
//   useSearchParams: jest.fn(),
// }))

describe('Header', () => {
  it('Should Header match Snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
