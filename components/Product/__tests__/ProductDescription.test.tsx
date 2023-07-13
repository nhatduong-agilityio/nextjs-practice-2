// Utils
import { render } from '@utils/testUtils'

// Components
import ProductDescription from '../ProductDetail/ProductDescription'

describe('ProductDescription render', () => {
  const propsMock = {
    description: 'Product description mock',
    listDetail: [
      { id: '1', content: 'High Quality Leathers4' },
      { id: '2', content: 'High Quality Paints4' },
    ],
  }

  it('Should ProductDescription match Snapshot', () => {
    const { container } = render(<ProductDescription {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
