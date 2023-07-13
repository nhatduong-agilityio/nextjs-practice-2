import type { RenderResult } from '@testing-library/react'
import { screen, fireEvent, cleanup, render, waitFor, renderHook } from '@utils/testUtils'
import React from 'react'
import { useForm } from 'react-hook-form'
import SearchForm from '../SearchForm'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Search Form', () => {
  const propsMock = {
    onSubmit: jest.fn(),
  }

  const searchMock = {
    search: 'somequery',
  }

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<SearchForm {...propsMock} />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Search Form matches snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })

  it('Should call onChange input search', () => {
    const search = screen.getByTestId('search')

    fireEvent.change(search, {
      target: { value: searchMock.search },
    })

    expect(search).toHaveValue(searchMock.search)
  })

  it('Should call submit search form', async () => {
    const search = screen.getByTestId('search')

    fireEvent.change(search, {
      target: { value: searchMock.search },
    })

    const button = screen.getByLabelText('Search')

    fireEvent.submit(button)

    const { result } = renderHook(() => useForm())

    result.current.setValue('search', searchMock.search)

    expect(result.current.getValues()).toEqual(searchMock)
  })
})
