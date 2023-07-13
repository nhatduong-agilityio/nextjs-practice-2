import SignInForm from '@components/SignIn/SignInForm'
import { INVALID_PASSWORD, USERNAME_NOT_EXIST } from '@constants/errorMessage'
import type { SignInAccount } from '@matched-types/auth'
import { UserMock } from '@mock/dataMock'
import type { Meta } from '@storybook/react'
import { findItemByValue } from '@utils/index'
import { signInValidate } from '@utils/signInValidate'
import { useCallback, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'

const meta: Meta<typeof SignInForm> = {
  title: 'SignIn/SignForm',
  component: SignInForm,
}

export default meta

const initErrorMsgs = {
  username: '',
  password: '',
}

const SignInFormStories = () => {
  const [errorMsgs, setErrorMsgs] = useState(initErrorMsgs)

  // Function submit signIn form
  const handleSubmit: SubmitHandler<SignInAccount> = useCallback(async (data) => {
    const formatValidation = signInValidate(data)

    if (!formatValidation.isValid && formatValidation.error) {
      setErrorMsgs(formatValidation.error)
    } else {
      const users = findItemByValue({
        data: UserMock,
        value: data.username,
        key: 'username',
      })

      if (!users) {
        setErrorMsgs((prev) => ({
          ...prev,
          username: USERNAME_NOT_EXIST,
        }))
      } else if (users && users.password !== data.password) {
        setErrorMsgs((prev) => ({
          ...prev,
          password: INVALID_PASSWORD,
        }))
      } else {
        // eslint-disable-next-line no-alert
        alert(`Login Successfully!`)

        setErrorMsgs(initErrorMsgs)
      }
    }
  }, [])

  return (
    <SignInForm
      usernameError={errorMsgs.username}
      passwordError={errorMsgs.password}
      onSubmit={handleSubmit}
    />
  )
}

export const Default = {
  render: () => <SignInFormStories />,
}
