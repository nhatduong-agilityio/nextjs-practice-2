// Components
import SearchMenu from '@components/Header/SearchMenu'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof SearchMenu> = {
  title: 'Header/SearchMenu',
  component: SearchMenu,
}

export default meta

export const Default = {
  render: () => <SearchMenu onHandleToggleSearch={() => null} />,
}
