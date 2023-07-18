import SelectOption from '@components/Common/SelectOption'
import { ColorMock } from '@mock/dataMock'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof SelectOption> = {
  title: 'Components/SelectOption',
  component: SelectOption,
}

export default meta

export const Default = {
  render: () => <SelectOption name='Color' placeholder='Color' options={ColorMock} />,
}
