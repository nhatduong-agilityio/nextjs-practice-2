// Utils
import { render } from '@utils/testUtils'

import { ProductsMock } from '@mock/dataMock'

// Components
import ListProducts from '../ListProducts'

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}))

describe('ListProducts render', () => {
  const propsMock = {
    products: ProductsMock,
  }

  it('Should ListProducts match Snapshot', () => {
    const { container } = render(<ListProducts {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
