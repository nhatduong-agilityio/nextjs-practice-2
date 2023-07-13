// Components
import Footer from '@components/Footer/Footer'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Footer> = {
  title: 'Footer/Footer',
  component: Footer,
}

export default meta

export const Default = {
  render: () => <Footer />,
}
