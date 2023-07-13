import { UserMock } from '@mock/dataMock'
import { basicFetch, fetcherInstance, fetcherInstanceAPI } from '@services/requests'

describe('Test basicFetch', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(UserMock),
    }),
  ) as jest.Mock

  it('Test function basicFetch use default method (SSG) success', async () => {
    const response = await basicFetch({
      endpoint: '/users',
    })
    const responseData = await response.json()

    expect(response).toBeTruthy()
    expect(responseData.length).toEqual(UserMock.length)
  })

  it('Test function basicFetch use ISR method success', async () => {
    const response = await basicFetch({
      endpoint: '/users',
      fetchingMethod: 'ISR',
    })
    const responseData = await response.json()

    expect(response).toBeTruthy()
    expect(responseData.length).toEqual(UserMock.length)
  })

  it('Test function basicFetch use SSR method success', async () => {
    const response = await basicFetch({
      endpoint: '/users',
      fetchingMethod: 'SSR',
    })
    const responseData = await response.json()

    expect(response).toBeTruthy()
    expect(responseData.length).toEqual(UserMock.length)
  })
})

describe('Test fetcherInstanceAPI', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(UserMock),
    }),
  ) as jest.Mock

  it('Test function fetcherInstanceAPI is success', async () => {
    const response = await fetcherInstanceAPI({
      endpoint: '/users',
      fetchingMethod: 'SSR',
    })
    const responseData = await response.json()

    expect(response).toBeTruthy()
    expect(responseData.length).toEqual(UserMock.length)
  })
})

describe('Test fetcherInstance', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(UserMock),
    }),
  ) as jest.Mock

  it('Test function fetcherInstance is success', async () => {
    const response = await fetcherInstance({
      endpoint: '/users',
      fetchingMethod: 'SSR',
    })
    const responseData = await response.json()

    expect(response).toBeTruthy()
    expect(responseData.length).toEqual(UserMock.length)
  })
})
