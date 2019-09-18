test(`concatenate arrays via spread`, () => {
  const array1 = [1, 2, 3]
  const result = [...array1, 4, 5, 6]
  expect(result).toEqual([1, 2, 3, 4, 5, 6])
})

test('get the remaining elements of an array via rest', () => {
  const array1 = [1, 2, 3, 4, 5]
  const [, , ...result] = array1
  expect(result).toEqual([3, 4, 5])
})

test('merge properties from objects via object spread', () => {
  const obj1 = {
    foo: 'bar',
    baz: 'foobar',
  }
  const result = {
    ...obj1,
    eggs: 'spam',
  }
  expect(result).toEqual({
    foo: 'bar',
    baz: 'foobar',
    eggs: 'spam',
  })
})

test('plucking off properties from objects via object rest', () => {
  const obj1 = {className: 'box', id: 'container', isAwesome: true}
  const {isAwesome, ...result} = obj1
  expect(result).toEqual({
    className: 'box',
    id: 'container',
  })
})

//////// 💯 EXTRA CREDIT ////////
describe('💯 extra credit', () => {
  test('can spread a string', () => {
    const string = 'Hannah'
    const result = [...string].reverse().join('')
    expect(result).toEqual('hannaH')
  })

  test('can use rest syntax with a string', () => {
    const string = 'Cashews'
    const [, , , , ...result] = string
    expect(result).toEqual(['e', 'w', 's'])
  })
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
