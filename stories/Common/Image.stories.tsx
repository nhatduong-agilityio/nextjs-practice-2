import furniture1 from '@public/images/furniture-1.jpg'
import Image from '@components/Common/Image'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
}

export default meta

const image = {
  image: furniture1,
  imageAlt: 'Picture of furniture chair leather',
}

export const Default = {
  render: () => <Image alt={image.imageAlt} src={image.image} width='500px' height='500px' />,
}

export const Primary = {
  render: () => <Image alt={image.imageAlt} src={image.image} height='500px' variant='primary' />,
}

export const Secondary = {
  render: () => <Image alt={image.imageAlt} src={image.image} height='500px' variant='secondary' />,
}
