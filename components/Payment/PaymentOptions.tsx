import { SimpleGrid, Stack, Text, useRadioGroup } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BankMock, DigitalWalletMock, MiniMarketMock, PaymentMock } from '@mock/dataMock'
import ListRadioBoxImage from '@components/Common/ListRadioBoxImage'

const PaymentOptions = () => {
  const [paymentOption, setPaymentOption] = useState('')

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: paymentOption,
    onChange: setPaymentOption,
  })

  return (
    <SimpleGrid style={{ margin: 0 }} columns={[1, 4]} w='full' {...getRootProps()}>
      <Stack w='full'>
        <Text size={['16', '18']} variant='large'>
          Minimarket
        </Text>
        <ListRadioBoxImage items={MiniMarketMock} getRadioProps={getRadioProps} />
      </Stack>
      <Stack w='full'>
        <Text size={['16', '18']} variant='large'>
          Digital Wallet
        </Text>
        <ListRadioBoxImage items={DigitalWalletMock} getRadioProps={getRadioProps} />
      </Stack>
      <Stack w='full'>
        <Text size={['16', '18']} variant='large'>
          Bank International Payment
        </Text>
        <ListRadioBoxImage items={BankMock} getRadioProps={getRadioProps} />
      </Stack>
      <Stack w='full'>
        <Text size={['16', '18']} variant='large'>
          International Payment
        </Text>
        <ListRadioBoxImage items={PaymentMock} getRadioProps={getRadioProps} />
      </Stack>
    </SimpleGrid>
  )
}

export default PaymentOptions
