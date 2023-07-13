// Utils
import { render } from '@utils/testUtils'

import { ProductsMock } from '@mock/dataMock'

// Components
import WishListProducts from '../WishListProducts/WishListProducts'

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}))

describe('WishListProducts render', () => {
  const propsMock = {
    products: ProductsMock.filter((product) => product.wish),
  }

  it('Should WishListProducts match Snapshot', () => {
    const { container } = render(<WishListProducts {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
