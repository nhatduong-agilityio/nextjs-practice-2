// Utils
import { render } from '@utils/testUtils'

import ShippingFormItem from '../ShippingFormItem'

describe('ShippingFormItem render', () => {
  const propsMock = {
    name: 'location',
    label: 'Location',
    placeholder: 'VietNam',
  }

  it('Should ShippingFormItem match Snapshot', () => {
    const { container } = render(<ShippingFormItem {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
