// Utils
import { render } from '@utils/testUtils'

// Components
import UserLinks from '../UserLinks'

describe('UserLinks', () => {
  it('Should UserLinks match Snapshot', () => {
    const { container } = render(<UserLinks />)

    expect(container).toMatchSnapshot()
  })
})
