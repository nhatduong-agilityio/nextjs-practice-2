// Utils
import { render } from '@utils/testUtils'

import ShippingForm from '../ShippingForm'

describe('ShippingForm render', () => {
  it('Should ShippingForm match Snapshot', () => {
    const { container } = render(<ShippingForm />)

    expect(container).toMatchSnapshot()
  })
})
