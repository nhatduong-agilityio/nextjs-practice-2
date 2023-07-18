import ButtonGroup from '@components/Common/ButtonGroup'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
}

export default meta

export const Default = {
  render: () => (
    <ButtonGroup firstName='Pay Now' firstPath='/' lastName='Back to Shipping Data' lastPath='/' />
  ),
}
