import { Flex, FormControl, Stack } from '@chakra-ui/react'
import React from 'react'
import ButtonGroup from '../Common/ButtonGroup'
import FormItem from './ShippingFormItem'

const ShippingForm = () => (
  <Flex w='full' flexDir='column'>
    <Stack w='full' style={{ marginTop: 0 }}>
      <form>
        <FormControl>
          <Stack w='full' flexDir={['column', 'row']} gap={[0, '20px']} pb={[0, '35px']}>
            <FormItem label='Name' placeholder='Ex : Christian Tanaka' name='name' />
            <FormItem
              label='Phone Number'
              placeholder='Ex : 0548548539543'
              name='phoneNumber'
              type='number'
            />
          </Stack>
          <Stack w='full' flexDir={['column', 'row']} gap={[0, '20px']} pb={[0, '35px']}>
            <FormItem label='City' placeholder='Ex : Purwokerto' name='city' />
            <FormItem label='Districts' placeholder='Ex : Banyumas' name='district' />
          </Stack>

          <Stack w='full' flexDir={['column', 'row']} gap={[0, '20px']} pb={[0, '35px']}>
            <FormItem label='Province' placeholder='Ex : Cetral Java' name='province' />
            <FormItem label='Zip Code' placeholder='Ex : 67433' name='zipCode' type='number' />
          </Stack>
          <FormItem
            label='Address'
            placeholder='Ex : Pramuka street number 49, Singapore'
            name='address'
            type='textArea'
          />
        </FormControl>
      </form>
    </Stack>
    <Stack w='full' alignItems='flex-end' mt={['25px', '50px']}>
      <ButtonGroup firstName='Next to Payment' lastName='Back to Shopping Cart' lastPath='/' />
    </Stack>
  </Flex>
)

export default ShippingForm
