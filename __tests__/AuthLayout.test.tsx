// Utils
import React from 'react'
import TestRenderer from 'react-test-renderer'

// App
import AuthLayout from '../app/(auth)/layout'

describe('Auth Layout render', () => {
  it('RootLayout should match snapshot', () => {
    const tree = TestRenderer.create(<AuthLayout>Test Content</AuthLayout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
