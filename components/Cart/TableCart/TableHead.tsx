// Libs
import { Thead, Tr } from '@chakra-ui/react'
import React from 'react'

// Components
import TableColumn from '@components/Cart/TableCart/TableColumn'

const TableHead = () => (
  <Thead>
    <Tr w='full'>
      <TableColumn width='40%' label='Product' />
      <TableColumn width='15%' label='Quantity' />
      <TableColumn width='25%' label='Color' />
      <TableColumn width='15%' label='Price' />
      <TableColumn width='5%' label='' />
    </Tr>
  </Thead>
)

export default TableHead
