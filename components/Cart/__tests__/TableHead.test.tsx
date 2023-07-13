// Utils
import { render } from '@utils/testUtils'

// Components
import { Table } from '@chakra-ui/react'
import TableHead from '../TableCart/TableHead'

describe('TableHead render', () => {
  it('Should TableHead match Snapshot', () => {
    const { container } = render(
      <Table>
        <TableHead />
      </Table>,
    )

    expect(container).toMatchSnapshot()
  })
})
