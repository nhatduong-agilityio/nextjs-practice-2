// Utils
import { render } from '@utils/testUtils'

import { ArticlesMock } from '@mock/dataMock'
import type { TArticle } from '@matched-types/articles'

// Components
import ArticleCard from '../ArticleCard'

describe('ArticleCard render', () => {
  const propsMock = {
    item: ArticlesMock[0] ? ArticlesMock[0] : ({} as TArticle),
  }

  it('Should ArticleCard match Snapshot', () => {
    const { container } = render(<ArticleCard {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
