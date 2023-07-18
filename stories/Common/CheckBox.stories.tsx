import type { UseCheckboxProps } from '@chakra-ui/react'
import CheckBox from '@components/Common/CheckBox'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
}

export default meta

export const Default = {
  render: () => <CheckBox {...({} as UseCheckboxProps)} />,
}
