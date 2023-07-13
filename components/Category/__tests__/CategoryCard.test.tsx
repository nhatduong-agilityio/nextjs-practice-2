// Utils
import { render } from '@utils/testUtils'

import { CategoriesMock } from '@mock/dataMock'

// Components
import CategoryCard from '../CategoryCard'

describe('CategoryCard render', () => {
  const propsMock = {
    srcImage: CategoriesMock.CHAIR.OFFICE.BG_IMAGE,
    imageAlt: CategoriesMock.CHAIR.OFFICE.IMAGE_ALT,
    name: CategoriesMock.CHAIR.OFFICE.NAME,
    pathLink: '/',
  }

  it('Should CategoryCard match Snapshot', () => {
    const { container } = render(<CategoryCard {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
