// Utils
import { render } from '@utils/testUtils'

// Components
import { ProductsMock } from '@mock/dataMock'
import type { TProduct } from '@matched-types/product'
import ProductImage from '../ProductDetail/ProductImage'

describe('ProductImage render', () => {
  const productMock = ProductsMock[0] ? ProductsMock[0] : ({} as TProduct)

  it('Should ProductImage match Snapshot', () => {
    const { container } = render(
      <ProductImage
        image={productMock.images.image}
        altImage={productMock.imageAlt}
        listImage={productMock.images.listImage}
      />,
    )

    expect(container).toMatchSnapshot()
  })
})
