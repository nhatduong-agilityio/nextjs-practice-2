import ButtonLink from '@components/Common/ButtonLink'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/ButtonLink',
  component: ButtonLink,
}

export default meta

export const Default = {
  render: () => <ButtonLink name='Link' href={{}} active />,
}
