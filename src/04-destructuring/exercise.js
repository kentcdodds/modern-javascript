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
  // 🐨 destructure `address` and create a 'city', 'state' and 'zip' variable.
  // 💰 what you write will be the functional equivalent to this:
  // const city = address.city
  // const state = address.state
  // const zip = address.zip
  expect(city).toBe('Salt Lake City')
  expect(state).toBe('UT')
  expect(zip).toBe(84115)
})

test('sets missing values to undefined', () => {
  // 🐨 attempt to destructure a property off `address` called `street`
  expect(street).toBeUndefined()
})

test('can provide a default value', () => {
  // 🐨 attempt to destructure a property off `address` called `street` and give
  // it a default value of 'unknown'
  expect(street).toBe('unknown')
})

test('can alias destructured variables', () => {
  // 🐨 destructure `address` and pull out the
  // city, state and zip properties and alias them to c, s, z, respectively
  expect(c).toBe('Salt Lake City')
  expect(s).toBe('UT')
  expect(z).toBe(84115)
  expect(typeof city).toBe('undefined')
  expect(typeof state).toBe('undefined')
  expect(typeof zip).toBe('undefined')
})

test('can alias and default destructured variables', () => {
  // 🐨 attempt to destructure a property off `address` called `street` and give
  // it a default value of 'unknown' and alias the variable that's created to `s`
  expect(s).toBe('unknown')
  expect(typeof street).toBe('undefined')
})

test('can be used to create variables from array values', () => {
  const numbers = [1, 2, 3, 4, 5, 6]
  // 🐨 destructure `numbers` and destructure the first value as `one` and the second as `two`
  expect(one).toBe(1)
  expect(two).toBe(2)
})

test('can skip indexes in arrays', () => {
  const numbers = [1, 2, 3, 4, 5, 6]
  // 🐨 destructure `numbers` and destructure the first value out as `one` and the third as `three`
  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(typeof two).toBe('undefined')
})

//////// 💯 EXTRA CREDIT ////////
describe.skip('💯 extra credit', () => {
  test('can destructure nested variables', () => {
    // 🐨 `address` and destructure the `lat` and `long` from coords using
    // nested destructuring, in the same statement, get the coords object as
    // well
    expect(lat).toBe(40.776608)
    expect(long).toBe(-111.920485)
    expect(coords).toEqual({lat, long})
  })

  test('can do nested destructuring with arrays', () => {
    const nestedNumbers = [1, 2, [3, 4, [5, 6]]]
    // 🐨 destructure nestedNumbers to get the first value out as `one`,
    // the 3 as `three` and 6 as `six`.
    expect(one).toBe(1)
    expect(three).toBe(3)
    expect(six).toBe(6)
  })

  // If you get this far, try adding a few more tests,
  // then file a pull request to add them to the extra credit!
  // MORE AT http://www.2ality.com/2015/01/es6-destructuring.html
})

//////// 🦉 Elaboration & Feedback /////////
// Before moving on to the next set of exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Modern%20JavaScript&e=Destructuring&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

/*
eslint
  no-sparse-arrays: 0,
*/
