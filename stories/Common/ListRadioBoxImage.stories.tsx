import { SimpleGrid, useRadioGroup } from '@chakra-ui/react'
import ListRadioBoxImage from '@components/Common/ListRadioBoxImage'
import { MiniMarketMock } from '@mock/dataMock'
import type { Meta } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof ListRadioBoxImage> = {
  title: 'Components/ListRadioBoxImage',
  component: ListRadioBoxImage,
}

export default meta

const ListRadioBoxImageDefault = () => {
  const [paymentOption, setPaymentOption] = useState('')

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: paymentOption,
    onChange: setPaymentOption,
  })

  return (
    <SimpleGrid style={{ margin: 0 }} columns={[1, 4]} w='full' {...getRootProps()}>
      <ListRadioBoxImage items={MiniMarketMock} getRadioProps={getRadioProps} />
    </SimpleGrid>
  )
}

export const Default = {
  render: () => <ListRadioBoxImageDefault />,
}
