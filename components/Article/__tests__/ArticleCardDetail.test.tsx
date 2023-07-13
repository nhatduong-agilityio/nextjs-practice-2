// Utils
import { render } from '@utils/testUtils'

import { ArticlesMock } from '@mock/dataMock'
import type { TArticle } from '@matched-types/articles'

// Components
import ArticleCardDetail from '../ArticleCardDetail'

describe('ArticleCardDetail render', () => {
  const propsMock = {
    item: ArticlesMock[0] as TArticle,
  }

  it('Should ArticleCardDetail match Snapshot', () => {
    const { container } = render(<ArticleCardDetail {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
