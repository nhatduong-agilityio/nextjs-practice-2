// Libs
import { Table, Tbody } from '@chakra-ui/react'
import React from 'react'

// Components
import TableHead from '@components/Cart/TableCart/TableHead'
import TableRow from '@components/Cart/TableCart/TableRow'

const TableCart = () => (
  <Table>
    <TableHead />
    <Tbody>
      <TableRow />
    </Tbody>
  </Table>
)

export default TableCart
