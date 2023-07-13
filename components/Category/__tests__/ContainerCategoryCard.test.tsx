// Utils
import { render } from '@utils/testUtils'

import { CategoriesMock } from '@mock/dataMock'

// Components
import ContainerCategoryCard from '../ContainerCategoryCard'

describe('ContainerCategoryCard render', () => {
  const propsMock = {
    srcImage: CategoriesMock.CHAIR.OFFICE.BG_IMAGE,
    imageAlt: CategoriesMock.CHAIR.OFFICE.IMAGE_ALT,
    name: CategoriesMock.CHAIR.OFFICE.NAME,
    pathLink: '/',
  }

  it('Should ContainerCategoryCard match Snapshot', () => {
    const { container } = render(
      <ContainerCategoryCard srcImage={propsMock.srcImage} imageAlt={propsMock.imageAlt} />,
    )

    expect(container).toMatchSnapshot()
  })
})
