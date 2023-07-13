// Utils
import { render } from '@utils/testUtils'

// Components
import FilterControl from '../FilterProduct/FilterControl'

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}))

describe('FilterControl render', () => {
  const propsMock = {
    onHandleOpenFilter: jest.fn(),
  }

  it('Should FilterControl match Snapshot', () => {
    const { container } = render(<FilterControl {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
