// Utils
import { render } from '@utils/testUtils'

import { ProductsMock } from '@mock/dataMock'

// Components
import FilterProduct from '../FilterProduct/FilterProduct'

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}))

describe('FilterProduct render', () => {
  const propsMock = {
    products: ProductsMock,
  }

  it('Should FilterProduct match Snapshot', () => {
    const { container } = render(<FilterProduct {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
