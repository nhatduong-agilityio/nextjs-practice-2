// Utils
import { render } from '@utils/testUtils'

// Components
import PaymentOptions from '../PaymentOptions'

describe('PaymentOptions render', () => {
  it('Should PaymentOptions match Snapshot', () => {
    const { container } = render(<PaymentOptions />)

    expect(container).toMatchSnapshot()
  })
})
