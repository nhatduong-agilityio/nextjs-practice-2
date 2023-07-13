// Components
import type { SearchValue } from '@components/Header/SearchForm'
import SearchForm from '@components/Header/SearchForm'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof SearchForm> = {
  title: 'Header/SearchForm',
  component: SearchForm,
}

export default meta

export const Default = {
  render: () => (
    <SearchForm
      onSubmit={(data: SearchValue) => {
        // eslint-disable-next-line no-alert
        alert(data.search)
      }}
    />
  ),
}
