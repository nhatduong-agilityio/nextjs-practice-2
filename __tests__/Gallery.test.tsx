import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'
import { ArticlesMock } from '@mock/dataMock'
import Gallery from '../app/(routing)/gallery/page'
import GalleryPage from '../app/(routing)/gallery/GalleryPage'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
  useSearchParams: jest.fn(),
}))

jest.mock('@services/requests', () => ({
  fetcherInstance: jest.fn(),
}))

jest.doMock('../app/(routing)/gallery/GalleryPage.tsx', () => {
  const GalleryPageMock = () => <GalleryPage articles={ArticlesMock} />
  return GalleryPageMock
})

describe('Gallery', () => {
  let wrapper: RenderResult

  const setup = async () => {
    const element = await Gallery()

    const view = render(element)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should Gallery match snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
