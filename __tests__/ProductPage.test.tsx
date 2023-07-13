import '@testing-library/jest-dom'

import type { RenderResult } from '@utils/testUtils'
import { cleanup, render, waitFor } from '@utils/testUtils'

import { ProductsMock } from '@mock/dataMock'
import ProductPage from '../app/(routing)/product/ProductPage'

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}))

describe('ProductPage', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  const props = { products: ProductsMock }

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<ProductPage {...props} />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Should ProductPage match snapshot', async () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })
})
