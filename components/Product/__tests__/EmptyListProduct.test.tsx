// Utils
import { render } from '@utils/testUtils'

// Components
import EmptyListProducts from '../EmptyListProducts'

describe('EmptyListProducts render', () => {
  it('Should EmptyListProducts match Snapshot', () => {
    const { container } = render(<EmptyListProducts />)

    expect(container).toMatchSnapshot()
  })
})
