import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import { ArticlesMock } from '@mock/dataMock'
import type { TArticle } from '@matched-types/articles'
import ArticleDetailPage from '../app/(routing)/gallery/[id]/ArticleDetailPage'

describe('ArticleDetailPage', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  const props = { item: ArticlesMock[0] || ({} as TArticle) }

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<ArticleDetailPage {...props} />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should ArticleDetailPage match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
