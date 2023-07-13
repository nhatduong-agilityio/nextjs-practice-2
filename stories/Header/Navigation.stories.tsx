// Components
import Navigation from '@components/Header/Navigation'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Navigation> = {
  title: 'Header/Navigation',
  component: Navigation,
}

export default meta

export const Default = {
  render: () => <Navigation toggleMenu />,
}
