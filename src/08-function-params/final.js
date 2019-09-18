test('can set default value for an argument', () => {
  function addStrings(a = '0', b = '0') {
    return parseInt(a, 10) + parseInt(b, 10)
  }

  expect(addStrings('1', '2')).toBe(3)
  expect(addStrings('1')).toBe(1)
  expect(addStrings()).toBe(0)
  expect(addStrings(undefined)).toBe(0)
  expect(addStrings(undefined, undefined)).toBe(0)
  expect(addStrings(undefined, '2')).toBe(2)
  expect(addStrings(null, '3')).toBe(NaN)
  expect(addStrings(false, '4')).toBe(NaN)
})

test('default param is an expression', () => {
  let triggerCount = 0

  function getName(name = getDefault()) {
    return name
  }

  function getDefault() {
    triggerCount++
    return 'Marty'
  }

  expect(triggerCount).toBe(0)
  expect(getName('Kody')).toBe('Kody')
  expect(getName()).toBe('Marty')
  expect(getName(undefined)).toBe('Marty')
  expect(triggerCount).toBe(2)
})

test('can call a function with an array', () => {
  function multiply(a, b, c) {
    return a * b * c
  }

  const args = [2, 3, 4]
  expect(multiply(...args)).toEqual(24)
})

test('catch non-specified params', () => {
  function fn(first, second, ...others) {
    return others
  }

  expect(fn()).toHaveLength(0)
  expect(fn(1)).toHaveLength(0)
  expect(fn(1, 2)).toHaveLength(0)
  expect(fn(1, 2, 3)).toHaveLength(1)
  expect(
    fn(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10),
  ).toHaveLength(8)
})

test('it can default all arguments, optionally', () => {
  function myFunction({
    name = 'Kent',
    age = 30,
    favoriteBand = 'Journey',
  } = {}) {
    expect(typeof name).toBe('string')
    expect(typeof age).toBe('number')
    expect(typeof favoriteBand).toBe('string')
  }

  myFunction({name: 'Alfred', age: 54, favoriteBand: `'N Sync`})
  myFunction({name: 'Alfred', age: 54})
  myFunction({name: 'Alfred'})
  myFunction({})
  myFunction()
})

//////// 💯 EXTRA CREDIT ////////
describe('💯 extra credit', () => {
  // If you get this far, try adding a few more tests,
  // then file a pull request to add them to the extra credit!
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
