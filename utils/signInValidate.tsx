import { INVALID_PASSWORD_FORMAT, INVALID_USERNAME_FORMAT, REQUIRED } from '@constants/errorMessage'
import { REGEX_PASSWORD, REGEX_USERNAME } from '@constants/regex'
import type { SignInAccount } from '@matched-types/auth'

type ErrorMsgs = { username: string; password: string }

export interface CheckValidateProps {
  value: string
  regex: RegExp
  errorMess: string
}

export interface ValidationResult {
  isValid: boolean
  error?: ErrorMsgs
}

// Check validate input value
export const checkValidate = (args: CheckValidateProps): string => {
  switch (true) {
    // case required
    case args.value === '':
      return REQUIRED
    // case error format with regex
    case !args.regex.test(args.value):
      return args.errorMess
    // case valid input successfully
    default:
      return ''
  }
}

export const signInValidate = (signInAccount: SignInAccount): ValidationResult => {
  const result: ValidationResult = { isValid: true }
  result.error = { username: '', password: '' }

  const validateUsername = checkValidate({
    value: signInAccount.username,
    regex: REGEX_USERNAME,
    errorMess: INVALID_USERNAME_FORMAT,
  })

  const validatePassword = checkValidate({
    value: signInAccount.password,
    regex: REGEX_PASSWORD,
    errorMess: INVALID_PASSWORD_FORMAT,
  })

  // Username
  if (validateUsername) {
    result.error.username = validateUsername
  }

  // Password
  if (validatePassword) {
    result.error.password = validatePassword
  }

  // Result
  if (result.error.username || result.error.password) {
    result.isValid = false
  }

  return result
}
