// Components
import Header from '@components/Header/Header'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Header> = {
  title: 'Header/Header',
  component: Header,
}

export default meta

export const Default = {
  render: () => <Header />,
}
