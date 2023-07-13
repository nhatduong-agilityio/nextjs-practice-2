export const searchPartial = (searchString: string, element: string) => {
  const searchWords = searchString.toLowerCase().split(' ')

  // Convert the element to lowercase for case-insensitive search
  const elementText = element.toLowerCase()

  // Check if all search words or partial words are present in the element
  return searchWords.every((word) => elementText.includes(word))
}
