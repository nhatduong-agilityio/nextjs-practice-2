// Find item by absolute compare value
export const findItemByValue = <T, U extends keyof T>({
  data,
  value,
  key,
}: {
  data: T[]
  value: T[U]
  key: keyof T
}): T | undefined => data.find((item) => item[key] === value)
