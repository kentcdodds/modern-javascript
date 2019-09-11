test(`should be easier to determine whether a string includes another`, () => {
  const sentence = 'It was the best of times. It was the worst of times'
  // 🐨 create a variable called `result` that is assigned to a call of sentence.includes
  expect(result).toBe(true)
})

test(`should be easier to repeat a string`, () => {
  const repeated = 'abc123'
  // 🐨 create a variable called `result` that is the result of
  // repeating the string 4 times
  expect(result).toBe('abc123abc123abc123abc123')
})

test('String.prototype.padStart saves us from left-pad-gate', () => {
  const originalString = 'Worlds Finest'
  // 🐨 call padStart on this string to make the test pass
  const result = originalString
  expect(result).toBe('    Worlds Finest')
})

test('String.prototype.padEnd (and padStart) can be given a string to pad with', () => {
  const originalString = 'Stronger Together'
  // 🐨 call padEnd on this string to make the test pass
  const result = originalString
  expect(result).toBe('Stronger Together-123-123-1')
})

test('array.includes can be used to determine whether an item exists in an array', () => {
  const bestFriend = {name: 'Sindre Sorhus'}
  const greatFriends = [
    bestFriend,
    {name: 'Dustan Kasten'},
    {name: 'Sam Saccone'},
    {name: 'Ingvar Stepanyan'},
  ]
  // 🐨 refactor this to use `includes` instead
  const result = greatFriends.indexOf(bestFriend) !== -1
  expect(result).toBe(true)
})

test(`should be able to take an array-like object and convert it into an array`, () => {
  const obj = {length: 3, 0: 'a', 1: 'b', 2: 'c'}
  // 🦉 this is even more handy with a NodeList like that returned from document.querySelector
  // 🐨 create a variable called `result` and assign it to a call to Array.from
  expect(result).toEqual(['a', 'b', 'c'])
})

test(`should be easier to fill an array with values`, () => {
  const originalArray = new Array(5)
  // 🐨 create a variable called `result` and assign it to
  // an array that's filled with 3s except for the first item.
  expect(result).toEqual([, 3, 3, 3, 3])
})

test(`should be easy to copy properties from one object to another`, () => {
  const source1 = {
    a: {
      b: 'c',
      m: [1, 2, 3],
    },
  }
  const source2 = {
    d: false,
    z: 34,
  }
  const source3 = {
    z: 42,
    p: ['a', 'b', 'c'],
  }

  const target = {
    a: {
      q: 'r',
      m: [4, 5, 6],
      s: {
        t: 3,
      },
    },
    d: true,
    p: ['x', 'y', 'z'],
  }
  // 🐨 create a variable called `result` and assign it to
  // a merge the sources into the target using Object.assign

  expect(result).toEqual({
    a: {
      b: 'c',
      m: [1, 2, 3],
    },
    d: false,
    z: 42,
    p: ['a', 'b', 'c'],
  })

  // this is only here to indicate that the assignment is not deep
  expect(result).not.toEqual({
    a: {
      b: 'c',
      m: [1, 2, 3],
      q: 'r',
      s: {
        t: 3,
      },
    },
    d: false,
    z: 42,
    p: ['a', 'b', 'c'],
  })
})

test('Object.values gets just the values of an object', () => {
  const show = {
    title: 'Supergirl',
    seasons: 1.2,
    characters: [
      'Supergirl',
      'Cat Grant',
      'Superman',
      'Jimmy Olsen',
      'Hank Henshaw',
      'Winn Schott',
      'Alex Danvers',
    ],
  }
  // 🐨 create a variable called `result` and assign it to
  // the values of the show object as an array
  expect(result).toEqual([
    'Supergirl',
    1.2,
    [
      'Supergirl',
      'Cat Grant',
      'Superman',
      'Jimmy Olsen',
      'Hank Henshaw',
      'Winn Schott',
      'Alex Danvers',
    ],
  ])
})

test('Object.entries gives an array of arrays as [key, value]', () => {
  const show = {
    title: 'The Flash',
    seasons: 2.2,
    characters: [
      'The Flash',
      'Iris West',
      'Caitlin Snow',
      'Eddie Thawne',
      'Cisco Ramon',
      'Harrison Wells',
      'Joe West',
    ],
  }
  // 🐨 create a variable called `result` and assign it to
  // the values of the show object as a [key, value] array
  expect(result).toEqual([
    ['title', 'The Flash'],
    ['seasons', 2.2],
    [
      'characters',
      [
        'The Flash',
        'Iris West',
        'Caitlin Snow',
        'Eddie Thawne',
        'Cisco Ramon',
        'Harrison Wells',
        'Joe West',
      ],
    ],
  ])
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
http://ws.kcd.im/?ws=Modern%20JavaScript&e=New+APIS&em=
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
