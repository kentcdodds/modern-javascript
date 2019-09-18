test('can set default value for an argument', () => {
  // 🐨 add default parameters to the addStrings function so the tests pass
  function addStrings(a, b) {
    // 💰 note that the function is called "addStrings" and we're using parseInt
    // so the default values should be a string, not a number.
    return parseInt(a, 10) + parseInt(b, 10)
  }

  expect(addStrings('1', '2')).toBe(3)
  expect(addStrings('1')).toBe(1)
  expect(addStrings()).toBe(0)
  expect(addStrings(undefined)).toBe(0)
  expect(addStrings(undefined, undefined)).toBe(0)
  expect(addStrings(undefined, '2')).toBe(2)
  expect(addStrings(null, '3')).toBe(/* 🐨 enter your guess here */)
  expect(addStrings(false, '4')).toBe(/* 🐨 enter your guess here */)
})

test('default param is an expression', () => {
  let triggerCount = 0

  function getName(name /* 🐨 default this to getDefault() */) {
    return name
  }

  function getDefault() {
    triggerCount++
    return 'Marty'
  }

  expect(triggerCount).toBe(0)
  expect(getName('Kody')).toBe(/* 🐨 enter your guess here */)
  expect(getName()).toBe(/* 🐨 enter your guess here */)
  expect(getName(undefined)).toBe(/* 🐨 enter your guess here */)
  expect(triggerCount).toBe(/* 🐨 enter your guess here */)
})

test('can call a function with an array', () => {
  function multiply(a, b, c) {
    return a * b * c
  }

  const args = [2, 3, 4]
  expect(multiply(/* 🐨 spread args here */)).toEqual(24)
})

test('catch non-specified params', () => {
  function fn(first, second, ...others) {
    return others
  }

  expect(fn()).toHaveLength(/* 🐨 enter your guess here */)
  expect(fn(1)).toHaveLength(/* 🐨 enter your guess here */)
  expect(fn(1, 2)).toHaveLength(/* 🐨 enter your guess here */)
  expect(fn(1, 2, 3)).toHaveLength(/* 🐨 enter your guess here */)
  expect(
    fn(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10),
  ).toHaveLength(/* 🐨 enter your guess here */)
})

test('it can default all arguments, optionally', () => {
  // 🐨 Modify the method signature of `myFunction` to allow for
  // all args to be optional (you can determine what the defaults should be).

  function myFunction({name, age, favoriteBand}) {
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
describe.skip('💯 extra credit', () => {
  // If you get this far, try adding a few more tests,
  // then file a pull request to add them to the extra credit!
})

//////// 🦉 Elaboration & Feedback /////////
// Before moving on to the next set of exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Modern%20JavaScript&e=function%20params&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
