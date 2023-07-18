import Quantity from '@components/Common/Quantity'
import type { Meta } from '@storybook/react'
import { useCallback, useState } from 'react'

const meta: Meta<typeof Quantity> = {
  title: 'Components/Quantity',
  component: Quantity,
}

export default meta

const QuantityDefault = () => {
  const [quantity, setQuantity] = useState(1)

  const handleSumQuantity = useCallback(() => {
    setQuantity(quantity + 1)
  }, [quantity])

  const handleSubQuantity = useCallback(() => {
    if (quantity > 1) setQuantity(quantity - 1)
  }, [quantity])

  return (
    <Quantity
      quantity={quantity}
      onHandleSubQuantity={handleSubQuantity}
      onHandleSumQuantity={handleSumQuantity}
    />
  )
}

export const Default = {
  render: () => <QuantityDefault />,
}
