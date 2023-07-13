import { PAGE_URL } from '@constants/routes'
import { findItemByValue } from '..'

describe('Find item by value', () => {
  it('should return correct item by value', () => {
    const item = findItemByValue({
      data: Object.values(PAGE_URL),
      key: 'URL',
      value: '/signin',
    })

    expect(item).toEqual({ TITLE: 'SignIn', URL: '/signin' })
  })
})
