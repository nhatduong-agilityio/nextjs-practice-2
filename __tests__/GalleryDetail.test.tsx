import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import { ArticlesMock } from '@mock/dataMock'
import type { TArticle } from '@matched-types/articles'
import ArticleDetail from '../app/(routing)/gallery/[id]/page'
import ArticleDetailPage from '../app/(routing)/gallery/[id]/ArticleDetailPage'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
  useSearchParams: jest.fn(),
}))

jest.mock('@services/requests', () => ({
  fetcherInstance: jest.fn(),
  fetcherInstanceAPI: jest.fn(),
}))

jest.doMock('../app/(routing)/gallery/[id]/ArticleDetailPage.tsx', () => {
  const ArticleDetailPageMock = () => (
    <ArticleDetailPage item={ArticlesMock[0] || ({} as TArticle)} />
  )
  return ArticleDetailPageMock
})

describe('ArticleDetail', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const props = {
      params: { id: '7248d8e0-1487-4bdd-866c-2da07907ecd1' },
    }

    const element = await ArticleDetail(props)

    const view = render(element)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should ArticleDetail match snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
