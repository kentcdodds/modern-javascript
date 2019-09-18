test('can be used in place of `var`', () => {
  // 🐨 Declare bandName using 'let'
  // 🐨 Declare isBestBand using 'let'
  expect(bandName).toBe('Journey')
  expect(isBestBand).toBe(true)
})

test('can modify the value of a `let` variable even in the next block statement', () => {
  let releaseName = 'ES6'
  {
    releaseName = 'ES2015'
  }
  expect(releaseName).toBe(/* 🐨 enter answer here */)
})

test('cannot modify the value of a `const` variable', () => {
  function getReleaseName() {
    // 🐨 fix this syntax error. The returned value should be "ES2015"
    const releaseName = 'ES6'
    releaseName = 'ES2015'
    return releaseName
  }
  expect(getReleaseName).not.toThrow()
})

test('is trapped inside of an `if` statement', () => {
  if (true) {
    // 🐨 Change to `var` to `let`, so that b is scoped inside of the if-statement
    var b = 1
  }
  expect(() => b).toThrow('b is not defined')
})

test(`can't redeclare using the same name`, () => {
  function doLoop() {
    // 🐨 Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
    for (var i = 0; i < 10; i++) {
      // we're just going to leave this empty
    }
    return i
  }

  expect(doLoop).toThrow('i is not defined')
})

test('means that we can start using block statements', () => {
  {
    // 🐨 Change to `const` declaration
    var d = 2
  }

  expect(() => d).toThrow('d is not defined')
})

//////// 💯 EXTRA CREDIT ////////
describe.skip('💯 extra credit', () => {
  test('💯 means that we can declare constant with the same name in block statement', () => {
    // 🐨 Declare a 'd' using 'const', setting the value to 5
    {
      // 🐨 Declare a 'd' using 'const', setting the value to 10
      expect(d).toBe(10)
    }
    expect(d).toBe(5)
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
http://ws.kcd.im/?ws=Modern%20JavaScript&e=Block%20Scoping&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

/*
eslint
  no-constant-condition: 0,
  prefer-const: 0,
  no-var: 0,
  vars-on-top: 0,
  block-scoped-var: 0,
  no-lone-blocks: 0,
  no-const-assign: 0,
  no-shadow: 0,
  jest/no-if: 0,
*/
