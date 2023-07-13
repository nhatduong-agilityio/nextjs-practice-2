import { INVALID_USERNAME_FORMAT, REQUIRED } from '@constants/errorMessage'
import { REGEX_USERNAME } from '@constants/regex'
import { checkValidate, signInValidate } from '@utils/signInValidate'

describe('checkValidate data', () => {
  it('should returns an error when the input value is empty', () => {
    const props = {
      value: '',
      regex: REGEX_USERNAME,
      errorMess: INVALID_USERNAME_FORMAT,
    }
    const errorMessage = checkValidate(props)

    expect(errorMessage).toEqual(REQUIRED)
  })

  it('should returns an error when the input value is in the wrong format', () => {
    const props = {
      value: 'kfc@123',
      regex: REGEX_USERNAME,
      errorMess: INVALID_USERNAME_FORMAT,
    }
    const errorMessage = checkValidate(props)

    expect(errorMessage).toEqual(INVALID_USERNAME_FORMAT)
  })

  it('should valid input success', () => {
    const props = {
      value: 'kfcdcn',
      regex: REGEX_USERNAME,
      errorMess: INVALID_USERNAME_FORMAT,
    }
    const errorMessage = checkValidate(props)

    expect(errorMessage).toEqual('')
  })
})

describe('signInValidate', () => {
  const accountMock = {
    username: 'kfcdcn',
    password: '123456789',
  }

  const accountMockError = {
    username: 'kfcdcn',
    password: '1234567',
  }

  it('should sign in invalid', () => {
    const response = signInValidate(accountMockError)

    expect(response.isValid).toEqual(false)
  })

  it('should sign in valid', () => {
    const response = signInValidate(accountMock)

    expect(response.isValid).toEqual(true)
  })

  it('should error when sign in in username and password is not valid', () => {
    const response = signInValidate(accountMockError)

    expect(response.isValid).toEqual(false)
    expect(response.error).toBeTruthy()
  })
})
