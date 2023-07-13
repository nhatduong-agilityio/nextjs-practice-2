// Utils
import { render, screen } from '@utils/testUtils'

// Components
import { Table, Thead, Tr } from '@chakra-ui/react'
import TableColumn from '../TableCart/TableColumn'

describe('TableColumn render', () => {
  const propsMock = {
    label: 'Price',
  }

  it('Should TableColumn match Snapshot', () => {
    const { container } = render(
      <Table>
        <Thead>
          <Tr>
            <TableColumn {...propsMock} />
          </Tr>
        </Thead>
      </Table>,
    )

    expect(container).toMatchSnapshot()
  })

  it('Should render column label match Snapshot', () => {
    render(
      <Table>
        <Thead>
          <Tr>
            <TableColumn {...propsMock} />
          </Tr>
        </Thead>
      </Table>,
    )

    const label = screen.getByTitle('columnLabel')

    expect(label).toBeInTheDocument()
  })
})
