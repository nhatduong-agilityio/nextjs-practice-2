// Components
import LoadingIndicator from '@components/Common/LoadingIndicator'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof LoadingIndicator> = {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
}

export default meta

export const Default = {
  args: {
    size: 'xl',
  },
}
