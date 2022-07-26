export function Accumulation(...value: any[]) {
  return value.reduce((t, v) => t + v, 0)
}

export function Multiplication(...value: any[]) {
  return value.reduce((t, v) => t * v, 1)
}
