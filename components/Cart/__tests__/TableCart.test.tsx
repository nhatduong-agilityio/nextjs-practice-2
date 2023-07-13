// Utils
import { render } from '@utils/testUtils'

// Components
import TableCart from '../TableCart/TableCart'

describe('TableCart render', () => {
  it('Should TableCart match Snapshot', () => {
    const { container } = render(<TableCart />)

    expect(container).toMatchSnapshot()
  })
})
