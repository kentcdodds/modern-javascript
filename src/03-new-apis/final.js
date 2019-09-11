test(`should be easier to determine whether a string includes another`, () => {
  const sentence = 'It was the best of times. It was the worst of times'
  const result = sentence.includes('best of times')
  // create a variable called `result` that is assigned to a call of sentence.includes
  expect(result).toBe(true)
})

test(`should be easier to repeat a string`, () => {
  const repeated = 'abc123'
  const result = repeated.repeat(4)
  expect(result).toBe('abc123abc123abc123abc123')
})

test('String.prototype.padStart saves us from left-pad-gate', () => {
  const originalString = 'Worlds Finest'
  const result = originalString.padStart(17)
  expect(result).toBe('    Worlds Finest')
})

test('String.prototype.padEnd (and padStart) can be given a string to pad with', () => {
  const originalString = 'Stronger Together'
  const result = originalString.padEnd(27, '-123')
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
  const result = greatFriends.includes(bestFriend)
  expect(result).toBe(true)
})

test(`should be able to take an array-like object and convert it into an array`, () => {
  const obj = {length: 3, 0: 'a', 1: 'b', 2: 'c'}
  const result = Array.from(obj)
  expect(result).toEqual(['a', 'b', 'c'])
})

test(`should be easier to fill an array with values`, () => {
  const originalArray = new Array(5)
  const result = originalArray.fill(3, 1)
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
  const result = Object.assign(target, source1, source2, source3)

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
  const result = Object.values(show)
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
  const result = Object.entries(show)
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
describe('💯 extra credit', () => {
  // If you get this far, try adding a few more tests,
  // then file a pull request to add them to the extra credit!
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})

/*
eslint
  no-sparse-arrays: 0,
*/
