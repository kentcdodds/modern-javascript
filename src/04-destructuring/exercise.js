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
  // 🐨 Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
  // 💰 what you write will be the functional equivalent to this:
  // const address = getAddress()
  // const city = address.city
  // const state = address.state
  // const zip = address.zip
  expect(city).toBe('Salt Lake City')
  expect(state).toBe('UT')
  expect(zip).toBe(84115)
  expect(typeof address).toBe('undefined')
})

test('sets missing values to undefined', () => {
  // 🐨 Using destructuring, call `getAddress()` and
  // attempt to destructure a property called `street`
  expect(street).toBeUndefined()
})

test('can alias destructured variables', () => {
  // 🐨 Using destructuring, call `getAddress()` and pull out the
  // city, state and zip properties and alias them to c, s, z, respectively
  expect(c).toBe('Salt Lake City')
  expect(s).toBe('UT')
  expect(z).toBe(84115)
  expect(typeof city).toBe('undefined')
  expect(typeof state).toBe('undefined')
  expect(typeof zip).toBe('undefined')
})

test('can be used to create variables from array values', () => {
  // 🐨 Call getNumbers and destructure the first value as `one` and the second as `two`
  expect(one).toBe(1)
  expect(two).toBe(2)
})

test('can skip indexes in arrays', () => {
  // 🐨 Call getNumbers and destructure the first value out as `one` and the third as `three`
  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(typeof two).toBe('undefined')
})

//////// 💯 EXTRA CREDIT ////////
describe.skip('💯 extra credit', () => {
  test('can destructure nested variables', () => {
    // 🐨 Call `getAddress()` and destructure the `lat` and `long`
    // from coords using nested destructuring (without making a coords variable).
    expect(lat).toBe(40.776608)
    expect(long).toBe(-111.920485)
    expect(typeof coords).toBe('undefined')
  })

  test('can do nested destructuring with arrays', () => {
    // 🐨 Call getNestedNumbers and destructure the first value out as `one`, the 3 as `three` and 6 as `sixth`.
    // 💰 NOTE: this is getNestedNumbers, not getNumbers like the last test!
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
  no-undef: 0,
*/
