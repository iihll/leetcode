function sum() {
  var sum = 0,
    temp = 0.01

  for (let i = 0; i < 30; i++) {
    sum += temp
    temp *= 2
  }

  return sum
}
