import Image from '@components/Common/Image'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
}

export default meta

const image = {
  image:
    'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Ffurniture-1.jpg?alt=media&token=80498422-2aa7-4cca-8888-ab8cd598aeb9',
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
