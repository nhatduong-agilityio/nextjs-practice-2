// Utils
import { render } from '@utils/testUtils'

// Components
import { ProductsMock } from '@mock/dataMock'
import type { TProduct } from '@matched-types/product'
import ProductMainContent from '../ProductDetail/ProductMainContent'

describe('ProductMainContent render', () => {
  const productMock = ProductsMock[0] ? ProductsMock[0] : ({} as TProduct)

  it('Should ProductMainContent match Snapshot', () => {
    const { container } = render(
      <ProductMainContent
        rating={productMock.rating}
        price={productMock.price}
        discount={productMock.discount}
        sellCount={productMock.sellCount}
      />,
    )

    expect(container).toMatchSnapshot()
  })
})
