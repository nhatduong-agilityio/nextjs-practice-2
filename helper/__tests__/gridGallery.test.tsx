import type { GridItemProps } from '@chakra-ui/react'
import { switcherGridItemProps } from '@helper/gridGallery'

describe('Grid gallery', () => {
  it('should returns a case number zero when the index value is zero', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(0)

    expect(gridGallery).toEqual({ rowSpan: [1, 2, 2], colSpan: [4, 1, 1] })
  })

  it('should returns a case number one when the index value is one', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(1)

    expect(gridGallery).toEqual({ rowSpan: 1, colSpan: [2, 3, 3] })
  })

  it('should returns a case number two when the index value is two', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(2)

    expect(gridGallery).toEqual({ rowSpan: [1, 2, 2], colSpan: 2 })
  })

  it('should returns a case number three when the index value is three', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(3)

    expect(gridGallery).toEqual({ colSpan: [4, 1, 1] })
  })

  it('should returns a case number four when the index value is four', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(4)

    expect(gridGallery).toEqual({ rowSpan: 1, colSpan: [2, 1, 1] })
  })

  it('should returns a case number five when the index value is five', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(5)

    expect(gridGallery).toEqual({ rowSpan: [1, 2, 2], colSpan: [2, 1, 1] })
  })

  it('should returns a case number six when the index value is six', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(6)

    expect(gridGallery).toEqual({ rowSpan: [1, 2, 2], colSpan: [4, 2, 2] })
  })

  it('should returns a case number seven when the index value is seven', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(7)

    expect(gridGallery).toEqual({ colSpan: [0, 1, 1] })
  })

  it('should returns a case number eight when the index value is eight', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(8)

    expect(gridGallery).toEqual({ rowSpan: [0, 2, 2], colSpan: [0, 2, 2] })
  })

  it('should returns a case number nine when the index value is nine', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(9)

    expect(gridGallery).toEqual({ rowSpan: [0, 2, 2], colSpan: [0, 1, 1] })
  })

  it('should returns a case number ten when the index value is ten', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(10)

    expect(gridGallery).toEqual({ rowSpan: [0, 2, 2], colSpan: [0, 1, 1] })
  })

  it('should returns a case number eleven when the index value is eleven', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(11)

    expect(gridGallery).toEqual({ rowSpan: [0, 1, 1], colSpan: [0, 2, 2] })
  })

  it('should returns a case number not matched when the index value is not matched', () => {
    const gridGallery: GridItemProps = switcherGridItemProps(111)

    expect(gridGallery).toEqual({})
  })
})
