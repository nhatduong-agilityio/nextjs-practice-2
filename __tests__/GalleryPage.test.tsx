import '@testing-library/jest-dom'

import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'

import { ArticlesMock } from '@mock/dataMock'
import GalleryPage from '../app/(routing)/gallery/GalleryPage'

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}))

describe('GalleryPage', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  const props = { articles: ArticlesMock }

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<GalleryPage {...props} />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should GalleryPage match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
