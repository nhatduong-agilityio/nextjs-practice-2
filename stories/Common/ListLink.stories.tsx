import ListLink from '@components/Common/ListLink'
import { CommunityLinks } from '@mock/dataMock'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof ListLink> = {
  title: 'Components/ListLink',
  component: ListLink,
}

export default meta

export const Default = {
  render: () => <ListLink items={CommunityLinks} />,
}
