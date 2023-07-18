// Libs
import { Text, Th } from '@chakra-ui/react'
import React, { memo } from 'react'

interface IProps {
  label: string
  width?: string
  height?: string
}

const TableColumn = memo(({ label, width = 'full', height = '40px' }: IProps) => (
  <Th
    height={height}
    p={0}
    w={width}
    border='unset'
    textTransform='capitalize'
    alignItems='center'
    lineHeight='normal'
  >
    <Text size='25' variant='medium' color='#29293E' title='columnLabel'>
      {label}
    </Text>
  </Th>
))

TableColumn.displayName = 'TableColumn'

export default TableColumn
