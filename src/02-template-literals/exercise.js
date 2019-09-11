test('should support string interpolation', () => {
  const person = {
    name: 'Kent C. Dodds',
    friends: [
      'Brooke Dodds',
      'Matt Zabriskie',
      'Aaron Frost',
      'Dave Geddes',
      'Joe Eames',
      'Ryan Florence',
    ],
  }
  // 🐨 construct a string using template literal string interpolation
  const personsFriends = ``
  expect(personsFriends).toBe(
    'Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence',
  )
})

test(`should support multi-line strings`, () => {
  // 🐨 construct a string with multiple lines without needing escaped newline characters
  const multiLine = ``
  expect(multiLine).toBe('\n    How cool\n    is this!?\n  ')
})

test(`should support string escaping`, () => {
  // 🐨 properly escape a string in a template literal for each of these
  expect(``).toBe('Hi\nthere!')
  expect(``).toBe('This is `escaped` backticks')
})

//////// 💯 EXTRA CREDIT ////////
describe.skip('💯 extra credit', () => {
  // you likely won't often make your own tagging function, but it can be handy!
  test(`should call the tagging function`, () => {
    const noun = 'World'
    const emotion = 'happy'
    const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`
    expect(result).toBe(
      'Hello super-cool World! Are you feeling really happy today?',
    )

    function tagIt(literalString, ...interpolatedParts) {
      // 🐨 implement this function to make the test pass
      return 'fixme'
    }
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
http://ws.kcd.im/?ws=Modern%20JavaScript&e=Template%20Literals&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
