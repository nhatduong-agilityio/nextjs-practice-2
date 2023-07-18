import type { UseRadioProps } from '@chakra-ui/react'
import RadioBox from '@components/Common/RadioBox'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof RadioBox> = {
  title: 'Components/RadioBox',
  component: RadioBox,
}

export default meta

export const Default = {
  render: () => <RadioBox {...({} as UseRadioProps)} />,
}
