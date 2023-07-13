'use client'

// Libs
import Link from 'next/link'
import React, { memo, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

// Components
import ClockIcon from '@components/Icons/ClockIcon'
import FacebookIcon from '@components/Icons/FacebookIcon'
import GoogleIcon from '@components/Icons/GoogleIcon'
import UserIcon from '@components/Icons/UserIcon'
import type { SignInAccount } from '@matched-types/auth'

interface SignInFormProps {
  usernameError?: string
  passwordError?: string
  onSubmit: SubmitHandler<SignInAccount>
}

const SignInForm = memo(({ usernameError, passwordError, onSubmit }: SignInFormProps) => {
  const { register, handleSubmit } = useForm<SignInAccount>()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Stack
      width={['full', '50%']}
      flexDir='column'
      gap={0}
      pt={['25px', '124px']}
      pl={['5', '90px']}
      pr={['5', '230px']}
      pb='40px'
    >
      <Heading variant={['extraBoldMD', 'extraBoldXL']} pb={['5', '50px']} lineHeight='normal'>
        Login to Shop Bag
      </Heading>
      <Stack style={{ marginTop: 0 }} height={['max-content', '545px']}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!(usernameError || passwordError)}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                height='100%'
                w='max-content'
                pl={['20px', '30px']}
              >
                <UserIcon width={['16px', '24px']} height={['16px', '24px']} viewBox='0 0 16 16' />
              </InputLeftElement>
              <Input
                {...register('username')}
                data-testid='username'
                id='username'
                type='text'
                placeholder='Username'
                variant='outline'
                size={['sm', 'lg']}
                pl={['56px !important', '70px !important']}
              />
            </InputGroup>
            {usernameError && (
              <FormErrorMessage fontSize={['sm', 'lg']}>{usernameError}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl py='15px' pb={['15px', '30px']}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                height='100%'
                w='max-content'
                pl={['20px', '30px']}
              >
                <ClockIcon width={['16px', '24px']} height={['16px', '24px']} viewBox='0 0 16 21' />
              </InputLeftElement>
              <Input
                {...register('password')}
                data-testid='password'
                id='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                variant='outline'
                size={['sm', 'lg']}
                pl={['56px !important', '70px !important']}
              />
              <InputRightElement height={['52px', '66px']} paddingRight={['20px', '25px']}>
                <IconButton
                  variant='ghost'
                  aria-label='Call Sage'
                  fontSize='24px'
                  justifyContent='flex-end'
                  onClick={() => setShowPassword(!showPassword)}
                  icon={
                    showPassword ? (
                      <ViewIcon width={['22px', '24px']} />
                    ) : (
                      <ViewOffIcon width={['22px', '24px']} />
                    )
                  }
                />
              </InputRightElement>
            </InputGroup>
            {passwordError && (
              <FormErrorMessage fontSize={{ base: 'xxs', '2xl': 'base' }}>
                {passwordError}
              </FormErrorMessage>
            )}
            <FormHelperText textAlign='right'>{/* <Link>forgot password?</Link> */}</FormHelperText>
            <Button type='submit' variant='baseStyle' size={['sm', 'lg']}>
              Login
            </Button>
          </FormControl>
        </form>
        <Stack width='full' flexDir='row' alignItems='center' pt='15px'>
          <Text fontWeight='light' variant='medium' color='gray.400'>
            Didn’t Have Account?
          </Text>
          <Link href='/auth/signin' style={{ marginTop: '0', paddingLeft: '4px' }} passHref>
            <Text fontWeight='regular' variant='medium'>
              Register
            </Text>
          </Link>
        </Stack>
        <Stack width='full' flexDir={['column', 'row']} pt={['25px', '45px']}>
          <ButtonGroup width='full' flexDir={['column', 'row']} spacing={0}>
            <Button
              leftIcon={
                <GoogleIcon
                  width={['16px', '24px']}
                  height={['16px', '24px']}
                  viewBox='0 0 16 16'
                  fill='none'
                />
              }
              bgColor='red.600'
              variant='baseStyle'
              mb={['15px', '0']}
              mr={['0', '16px']}
              size={['sm', 'lg']}
            >
              <Text pl={['2px', '15px']}>Google</Text>
            </Button>
            <Button
              leftIcon={
                <FacebookIcon
                  width={['8px', '13px']}
                  height={['16px', '25px']}
                  viewBox='0 0 8 16'
                  fill='none'
                />
              }
              colorScheme='facebook'
              variant='solid'
              size={['sm', 'lg']}
            >
              <Text pl={['2px', '15px']}>Facebook</Text>
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </Stack>
  )
})

SignInForm.displayName = 'SignInForm'

export default SignInForm
