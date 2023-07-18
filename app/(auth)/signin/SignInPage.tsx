'use client'

// Libs
import React, { useCallback, useState } from 'react'
import { Flex, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import type { SubmitHandler } from 'react-hook-form'

// Mocks
import { SlideMock } from '@mock/dataMock'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Stores
import type { IAuthContext } from '@store/providers/AuthProvider'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'
import { PAGE_URL } from '@constants/routes'

// Utils
import { signInValidate } from '@utils/signInValidate'

// Components
import LoadingIndicator from '@components/Common/LoadingIndicator'
import type { SignInAccount } from '@matched-types/auth'

const SignInForm = dynamic(() => import('@components/SignIn/SignInForm'))
const SignInSlider = dynamic(() => import('@components/SignIn/SignInSlider'))

type ErrorMessage = {
  username?: string
  password?: string
}

const SignInPage = () => {
  const router = useRouter()
  const toast = useToast({ isClosable: true, position: 'top-right' })
  const { signIn } = useAuthContext() as IAuthContext
  const { setLoading, loading } = useLoadingContext()
  const [errorMsgs, setErrorMsgs] = useState<ErrorMessage>()

  // Function submit signIn form
  const handleSubmit: SubmitHandler<SignInAccount> = useCallback(
    async (data) => {
      const formatValidation = signInValidate(data)

      if (!formatValidation.isValid && formatValidation.error) {
        setErrorMsgs(formatValidation.error)
      } else {
        try {
          setLoading(true)

          const response = await signIn(data)

          if (response.id) {
            router.push(PAGE_URL.COMINGSOON.URL)
          }

          const responseError = response as unknown as {
            error: ErrorMessage
          }

          setErrorMsgs((prev) => ({
            ...prev,
            ...responseError.error,
          }))
        } catch (error) {
          toast({
            title: 'Error',
            description: SERVER_ERROR,
            status: 'error',
          })
        } finally {
          setLoading(false)
        }
      }
    },
    [router, setLoading, signIn, toast],
  )

  return (
    <Flex flexDirection={['column', 'row']} w='full' h='full'>
      <SignInSlider sliders={SlideMock} />
      <SignInForm
        usernameError={errorMsgs?.username}
        passwordError={errorMsgs?.password}
        onSubmit={handleSubmit}
      />
      {loading && <LoadingIndicator size='lg' />}
    </Flex>
  )
}

export default SignInPage
