// Utils
import { render } from '@utils/testUtils'

// Components
import HamburgerMenu from '../HamburgerMenu'

describe('HamburgerMenu render', () => {
  const propsMock = {
    toggleMenu: true,
    onHandleToggleMenu: jest.fn(),
  }

  it('Should HamburgerMenu match Snapshot', () => {
    const { container } = render(<HamburgerMenu {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
