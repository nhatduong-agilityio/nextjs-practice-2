// Utils
import { render } from '@utils/testUtils'

// Components
import SearchMenu from '../SearchMenu'

describe('SearchMenu render', () => {
  const propsMock = {
    onHandleToggleSearch: jest.fn(),
  }

  it('Should SearchMenu match Snapshot', () => {
    const { container } = render(<SearchMenu {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
