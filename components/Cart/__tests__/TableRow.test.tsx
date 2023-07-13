// Utils
import { render } from '@utils/testUtils'

// Components
import { Table, Tbody } from '@chakra-ui/react'
import TableRow from '../TableCart/TableRow'

describe('TableRow render', () => {
  it('Should TableRow match Snapshot', () => {
    const { container } = render(
      <Table>
        <Tbody>
          <TableRow />
        </Tbody>
      </Table>,
    )

    expect(container).toMatchSnapshot()
  })
})
