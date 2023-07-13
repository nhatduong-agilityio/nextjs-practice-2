// Components
import Brand from '@components/Header/Brand'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Brand> = {
  title: 'Header/Brand',
  component: Brand,
}

export default meta

export const Default = {
  render: () => <Brand />,
}
