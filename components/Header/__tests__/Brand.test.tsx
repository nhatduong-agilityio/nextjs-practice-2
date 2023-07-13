// Utils
import { render } from '@utils/testUtils'

// Components
import Brand from '../Brand'

describe('Brand render', () => {
  it('Should Brand match Snapshot', () => {
    const { container } = render(<Brand />)

    expect(container).toMatchSnapshot()
  })
})
