import { searchPartial } from '@helper/query'

describe('Grid gallery', () => {
  it('Should returns search words or partial words are present in the element', () => {
    const search = searchPartial('Yellow Chair X Banana Kitty', 'Yellow Chair X Banana Kitty')

    expect(search).toEqual(true)
  })
})
