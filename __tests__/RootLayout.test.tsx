// Utils
import React from 'react'
import TestRenderer from 'react-test-renderer'

// App
import RootLayout from '../app/(routing)/layout'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  useServerInsertedHTML: jest.fn(),
}))

describe('Auth Layout render', () => {
  it('RootLayout should match snapshot', () => {
    const tree = TestRenderer.create(<RootLayout>Test Content</RootLayout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
