// Utils
import { render } from '@utils/testUtils'

import ProductControl from '../ProductDetail/ProductControl'

describe('ProductControl render', () => {
  it('Should ProductControl match Snapshot', () => {
    const { container } = render(<ProductControl />)

    expect(container).toMatchSnapshot()
  })
})
