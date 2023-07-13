// Utils
import { render } from '@utils/testUtils'

import { ColorMock } from '@mock/dataMock'

// Components
import Dropdown from '../FilterProduct/Dropdown'

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn(),
  }),
}))

describe('Dropdown render', () => {
  const propsMock = {
    name: 'Color',
    items: ColorMock,
    type: 'checkBox' as 'checkBox' | 'button' | 'input',
    search: 'search',
    selectedCategory: ['Chair', 'Sofa'],
  }

  it('Should FilterProduct match Snapshot', () => {
    const { container } = render(<Dropdown {...propsMock} />)

    expect(container).toMatchSnapshot()
  })
})
