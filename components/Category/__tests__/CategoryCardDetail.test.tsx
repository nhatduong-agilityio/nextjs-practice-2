// Utils
import { render } from '@utils/testUtils'

import { CategoriesMock } from '@mock/dataMock'

// Components
import CategoryCardDetail from '../CategoryCardDetail'

describe('CategoryCardDetail render', () => {
  const propsMock = {
    srcImage: CategoriesMock.CHAIR.OFFICE.BG_IMAGE,
    imageAlt: CategoriesMock.CHAIR.OFFICE.IMAGE_ALT,
    name: CategoriesMock.CHAIR.OFFICE.NAME,
    pathLink: '/',
  }

  it('Should CategoryCardDetail match Snapshot', () => {
    const { container } = render(<CategoryCardDetail {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
