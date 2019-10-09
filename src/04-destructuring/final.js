const address = {
  city: 'Salt Lake City',
  state: 'UT',
  zip: 84115,
  coords: {
    lat: 40.776608,
    long: -111.920485,
  },
}

test('can be used to create variables from object properties', () => {
  const {city, state, zip} = address
  expect(city).toBe('Salt Lake City')
  expect(state).toBe('UT')
  expect(zip).toBe(84115)
})

test('sets missing values to undefined', () => {
  const {street} = address
  expect(street).toBeUndefined()
})

test('can provide a default value', () => {
  const {street = 'unknown'} = address
  expect(street).toBe('unknown')
})

test('can alias destructured variables', () => {
  const {city: c, state: s, zip: z} = address
  expect(c).toBe('Salt Lake City')
  expect(s).toBe('UT')
  expect(z).toBe(84115)
  expect(typeof city).toBe('undefined')
  expect(typeof state).toBe('undefined')
  expect(typeof zip).toBe('undefined')
})

test('can alias and default destructured variables', () => {
  const {street: s = 'unknown'} = address
  expect(s).toBe('unknown')
  expect(typeof street).toBe('undefined')
})

test('can be used to create variables from array values', () => {
  const numbers = [1, 2, 3, 4, 5, 6]
  const [one, two] = numbers
  expect(one).toBe(1)
  expect(two).toBe(2)
})

test('can skip indexes in arrays', () => {
  const numbers = [1, 2, 3, 4, 5, 6]
  const [one, , three] = numbers
  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(typeof two).toBe('undefined')
})

//////// 💯 EXTRA CREDIT ////////
describe('💯 extra credit', () => {
  test('can destructure nested variables', () => {
    const {
      coords: {lat, long},
      coords,
    } = address
    expect(lat).toBe(40.776608)
    expect(long).toBe(-111.920485)
    expect(coords).toEqual({lat, long})
  })

  test('can do nested destructuring with arrays', () => {
    const nestedNumbers = [1, 2, [3, 4, [5, 6]]]
    const [one, , [three, , [, six]]] = nestedNumbers
    expect(one).toBe(1)
    expect(three).toBe(3)
    expect(six).toBe(6)
  })
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})

/*
eslint
  no-sparse-arrays: 0,
*/
