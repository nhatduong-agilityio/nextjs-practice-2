// Utils
import { render } from '@utils/testUtils'

// Components
import Cart from '../Cart'

describe('Cart render', () => {
  it('Should Cart match Snapshot', () => {
    const { container } = render(<Cart />)

    expect(container).toMatchSnapshot()
  })
})
