// Components
import UserLinks from '@components/Header/UserLinks'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof UserLinks> = {
  title: 'Header/UserLinks',
  component: UserLinks,
}

export default meta

export const Default = {
  render: () => <UserLinks />,
}
