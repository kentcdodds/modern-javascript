test(`concatenate arrays via spread`, () => {
  const array1 = [1, 2, 3]
  // 🐨 create a result array using spread syntax to pass the assertion
  expect(result).toEqual([1, 2, 3, 4, 5, 6])
})

test('get the remaining elements of an array via rest', () => {
  const array1 = [1, 2, 3, 4, 5]
  // 🐨 create a result array using rest syntax pass the assertion
  expect(result).toEqual([3, 4, 5])
})

test('merge properties from objects via object spread', () => {
  const obj1 = {
    foo: 'bar',
    baz: 'foobar',
  }
  // 🐨 create a result object using spread syntax to add `eggs: 'spam'` to what exists in obj1
  expect(result).toEqual({
    foo: 'bar',
    baz: 'foobar',
    eggs: 'spam',
  })
})

test('plucking off properties from objects via object rest', () => {
  const obj1 = {className: 'box', id: 'container', isAwesome: true}
  // 🐨 create a result object using rest syntax to make the assertion pass
  expect(result).toEqual({
    className: 'box',
    id: 'container',
  })
})

//////// 💯 EXTRA CREDIT ////////
describe.skip('💯 extra credit', () => {
  test('can spread a string', () => {
    const string = 'Hannah'
    // 🐨 refactor this to use spread instead of .split('')
    const result = string
      .split('')
      .reverse()
      .join('')
    expect(result).toEqual('hannaH')
  })

  test('can use rest syntax with a string', () => {
    const string = 'Cashews'
    // 🐨 refactor this to use rest instead of .slice(4)
    const result = string.slice(4)
    expect(result).toEqual(['e', 'w', 's'])
  })
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
http://ws.kcd.im/?ws=Modern%20JavaScript&e=rest%20and%20spread&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
