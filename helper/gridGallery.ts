import type { GridItemProps } from '@chakra-ui/react'

export const switcherGridItemProps = (index: number): GridItemProps => {
  switch (index) {
    case 0:
      return { rowSpan: [1, 2, 2], colSpan: [4, 1, 1] }
    case 1:
      return { rowSpan: 1, colSpan: [2, 3, 3] }
    case 2:
      return { rowSpan: [1, 2, 2], colSpan: 2 }
    case 3:
      return { colSpan: [4, 1, 1] }
    case 4:
      return { rowSpan: 1, colSpan: [2, 1, 1] }
    case 5:
      return { rowSpan: [1, 2, 2], colSpan: [2, 1, 1] }
    case 6:
      return { rowSpan: [1, 2, 2], colSpan: [4, 2, 2] }
    case 7:
      return { colSpan: [0, 1, 1] }
    case 8:
      return { rowSpan: [0, 2, 2], colSpan: [0, 2, 2] }
    case 9:
      return { rowSpan: [0, 2, 2], colSpan: [0, 1, 1] }
    case 10:
      return { rowSpan: [0, 2, 2], colSpan: [0, 1, 1] }
    case 11:
      return { rowSpan: [0, 1, 1], colSpan: [0, 2, 2] }
    default:
      return {}
  }
}
