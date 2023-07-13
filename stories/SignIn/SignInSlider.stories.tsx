import SignInSlider from '@components/SignIn/SignInSlider'
import { SlideMock } from '@mock/dataMock'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof SignInSlider> = {
  title: 'SignIn/SignInSlider',
  component: SignInSlider,
}

export default meta

const SignInSliderStories = () => {
  return <SignInSlider sliders={SlideMock} />
}

export const Default = {
  render: () => <SignInSliderStories />,
}
