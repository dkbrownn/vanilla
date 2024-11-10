test('test common matcher', () => {
  expect(2+3).toBe(5)
  expect(2+2).not.toBe(5)
})
test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0 > 1).toBeFalsy()
})