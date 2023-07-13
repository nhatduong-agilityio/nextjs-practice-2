// Utils
import { render } from '@utils/testUtils'

// Components
import CartItem from '../CartItem'

describe('CartItem render', () => {
  it('Should CartItem match Snapshot', () => {
    const { container } = render(<CartItem />)

    expect(container).toMatchSnapshot()
  })
})
