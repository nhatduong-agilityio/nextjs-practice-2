import { findExistedUser, signInUser } from '@services/auth'

const mockUser = {
  id: '123123123',
  username: 'kfcdcn',
  password: '123456789',
}

jest.mock('@utils/index')
jest.mock('@services/requests', () => ({
  fetcherInstanceAPI: jest.fn().mockReturnValue(mockUser),
  fetcherInstance: jest.fn().mockReturnValue(mockUser),
}))
jest.mock('@services/auth', () => ({
  findExistedUser: jest.fn().mockReturnValue({
    id: '123123123',
    username: 'kfcdcn',
    password: '123456789',
  }),
  signInUser: jest.fn().mockReturnValue({
    id: '123123123',
    username: 'kfcdcn',
    password: '123456789',
  }),
}))

describe('signInUser', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const mockCredentials = {
    username: 'kfcdcn',
    password: '123456789',
  }

  it('returns user data when sign-in is successful', async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockUser),
    }
    const mockFetch = jest.fn().mockResolvedValue(mockResponse)

    global.fetch = mockFetch

    const userData = await signInUser(mockCredentials)

    expect(userData).toEqual(mockUser)
  })
})

describe('findExistedUser', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('returns the matched user when found', async () => {
    expect(findExistedUser('username', mockUser.username)).toEqual(mockUser)
  })
})
