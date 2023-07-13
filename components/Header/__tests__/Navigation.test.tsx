// Utils
import { render, waitFor } from '@utils/testUtils'

// Components
import Navigation from '../Navigation'
import UserLinks from '../UserLinks'

describe('Navigation render', () => {
  const propsMock = {
    toggleMenu: true,
  }

  it('Should Navigation match Snapshot', () => {
    const { container } = render(<Navigation {...propsMock} />)

    expect(container).toMatchSnapshot()
  })

  it('Should user links show when opened', async () => {
    render(<Navigation {...propsMock} />)

    const { container } = render(<UserLinks />)

    let lazyContainer

    await waitFor(() => {
      lazyContainer = container
    })

    expect(lazyContainer).toMatchSnapshot()
  })
})
