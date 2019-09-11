function getAddress() {
  return {
    city: 'Salt Lake City',
    state: 'UT',
    zip: 84115,
    coords: {
      lat: 40.776608,
      long: -111.920485,
    },
  }
}

function getNumbers() {
  return [1, 2, 3, 4, 5, 6]
}

function getNestedNumbers() {
  return [1, 2, [3, 4, [5, 6]]]
}

test('can be used to create variables from object properties', () => {
  const {city, state, zip} = getAddress()
  expect(city).toBe('Salt Lake City')
  expect(state).toBe('UT')
  expect(zip).toBe(84115)
  expect(typeof address).toBe('undefined')
})

test('sets missing values to undefined', () => {
  const {street} = getAddress()
  expect(street).toBeUndefined()
})

test('can alias destructured variables', () => {
  const {city: c, state: s, zip: z} = getAddress()
  expect(c).toBe('Salt Lake City')
  expect(s).toBe('UT')
  expect(z).toBe(84115)
  expect(typeof city).toBe('undefined')
  expect(typeof state).toBe('undefined')
  expect(typeof zip).toBe('undefined')
})

test('can be used to create variables from array values', () => {
  const [one, two] = getNumbers()
  expect(one).toBe(1)
  expect(two).toBe(2)
})

test('can skip indexes in arrays', () => {
  const [one, , three] = getNumbers()
  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(typeof two).toBe('undefined')
})

//////// 💯 EXTRA CREDIT ////////
describe('💯 extra credit', () => {
  test('can destructure nested variables', () => {
    const {
      coords: {lat, long},
    } = getAddress()
    expect(lat).toBe(40.776608)
    expect(long).toBe(-111.920485)
    expect(typeof coords).toBe('undefined')
  })

  test('can do nested destructuring with arrays', () => {
    const [one, , [three, , [, six]]] = getNestedNumbers()
    expect(one).toBe(1)
    expect(three).toBe(3)
    expect(six).toBe(6)
  })
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
////////////////////////////////
