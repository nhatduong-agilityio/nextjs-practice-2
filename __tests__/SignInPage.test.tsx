import { UserMock } from '@mock/dataMock'
import type { RenderResult } from '@testing-library/react'
import { screen, fireEvent, cleanup, render, waitFor, renderHook } from '@utils/testUtils'
import React from 'react'
import { useAuthContext } from '@hooks/useAuthContext'
import { SERVER_ERROR } from '@constants/errorMessage'
import { useLoadingContext } from '@hooks/useLoadingContext'
import { useToast } from '@chakra-ui/react'
import SignInPage from '../app/(auth)/signin/SignInPage'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('@hooks/useAuthContext', () => {
  const signInMock = jest.fn().mockResolvedValue({
    username: 'kfcdcn',
    password: '123456789',
  })
  return { useAuthContext: jest.fn().mockReturnValue({ signIn: signInMock }) }
})

jest.mock('@hooks/useLoadingContext', () => {
  const setLoadingMock = jest.fn()
  const loadingMock = false

  return {
    useLoadingContext: jest
      .fn()
      .mockReturnValue({ setLoading: setLoadingMock, loading: loadingMock }),
  }
})

describe('Login Page', () => {
  const accountMock = {
    username: 'kfcdcn',
    password: '123456789',
  }

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(UserMock),
    }),
  ) as jest.Mock

  let wrapper: RenderResult

  const setup = async () => {
    const view = render(<SignInPage />)

    await waitFor(() => {
      wrapper = view
    })
  }

  beforeEach(() => {
    cleanup()

    setup()
  })

  it('Login Page matches snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })

  it('Should call onChange input username', () => {
    const username = screen.getByTestId('username')

    fireEvent.change(username, {
      target: { value: accountMock.username },
    })

    expect(username).toHaveValue(accountMock.username)
  })

  it('Should call onChange input password', () => {
    const password = screen.getByTestId('password')

    fireEvent.change(password, {
      target: { value: accountMock.password },
    })

    expect(password).toHaveValue(accountMock.password)
  })

  it('Should call submit form', async () => {
    const username = screen.getByTestId('username')
    const password = screen.getByTestId('password')

    fireEvent.change(username, {
      target: { value: accountMock.username },
    })

    fireEvent.change(password, {
      target: { value: accountMock.password },
    })

    const button = screen.getByRole('button', {
      name: /Login/i,
    })

    fireEvent.submit(button)

    await waitFor(() => expect(useLoadingContext().setLoading).toHaveBeenCalledWith(true))

    await waitFor(() => expect(useAuthContext()?.signIn).toHaveBeenCalledTimes(1))

    await waitFor(() => expect(useLoadingContext().setLoading).toHaveBeenCalledWith(false))
  })

  it('Should call submit form error', () => {
    const username = screen.getByTestId('username')
    const password = screen.getByTestId('password')

    fireEvent.change(username, {
      target: { value: 'kfckfc' },
    })

    fireEvent.change(password, {
      target: { value: accountMock.password },
    })

    const button = screen.getByRole('button', {
      name: /Login/i,
    })

    fireEvent.submit(button)

    expect(useAuthContext()?.signIn).not.toHaveBeenCalled()
  })

  it('Should call submit form with server error', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))

    const username = screen.getByTestId('username')
    fireEvent.change(username, {
      target: { value: accountMock.username },
    })

    const password = screen.getByTestId('password')
    fireEvent.change(password, {
      target: { value: accountMock.password },
    })

    const button = screen.getByRole('button', {
      name: /Login/i,
    })

    fireEvent.submit(button)

    await waitFor(() => expect(useAuthContext()?.signIn).toHaveBeenCalledTimes(1))

    const { result } = renderHook(() => useToast())

    // Spy on the toast function
    const toastSpy = jest.spyOn(result, 'current')

    // Call the toast function with desired options
    result.current({
      title: 'Error',
      description: SERVER_ERROR,
      status: 'error',
    })

    // Assert that the toast function was called
    expect(toastSpy).toHaveBeenCalledTimes(1)
    expect(toastSpy).toHaveBeenCalledWith({
      title: 'Error',
      description: SERVER_ERROR,
      status: 'error',
    })

    // Restore the spy
    toastSpy.mockRestore()
  })
})
