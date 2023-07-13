import { Box } from '@chakra-ui/react'
import Slider from '@components/Slider/Slider'
import { SlideMock } from '@mock/dataMock'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Slider> = {
  title: 'Slider/Slider',
  component: Slider,
}

export default meta

export const Default = {
  render: () => (
    <Box width={500}>
      <Slider
        slides={SlideMock}
        timerChange={3000}
        heightSlider={['200px', '547px']}
        sxControl={{ boxSize: ['8px', '15px'] }}
      />
    </Box>
  ),
}

export const Image = {
  render: () => (
    <Box width={500}>
      <Slider
        slides={SlideMock}
        timerChange={3000}
        heightSlider={['200px', '547px']}
        sxControl={{ boxSize: ['8px', '15px'] }}
        variant='image'
      />
    </Box>
  ),
}

export const Paragraph = {
  render: () => (
    <Box width={500}>
      <Slider
        slides={SlideMock}
        timerChange={3000}
        heightSlider={['200px', '547px']}
        sxControl={{ boxSize: ['8px', '15px'] }}
        variant='paragraph'
      />
    </Box>
  ),
}
