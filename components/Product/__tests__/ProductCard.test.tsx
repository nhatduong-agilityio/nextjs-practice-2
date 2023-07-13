// Utils
import { render } from '@utils/testUtils'

import { ProductsMock } from '@mock/dataMock'

// Components
import type { TProduct } from '@matched-types/product'
import ProductCard from '../ProductCard'

describe('ProductCard render', () => {
  const propsMock = {
    product: ProductsMock[0] ? ProductsMock[0] : ({} as TProduct),
  }

  it('Should ProductCard match Snapshot', () => {
    const { container } = render(<ProductCard {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
