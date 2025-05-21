export const sum = (a, b) => {
  return a + b
}
export const sumplus = (...args) => {
  let sum = 0
  for (let i of [...args]) {
    sum += i
  }
  return sum
}