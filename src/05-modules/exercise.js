// 💰 NOTICE: you'll make your changes up here because imports must appear
// at the root of the file and they're also hoisted to the top of the file,
// so it's best practice to put them at the top of the file.

test('can import math', () => {
  // There's a module at `./exercise-helpers/math`
  // import all of that module's exports in an object called `math`
  // this one's already done! You're welcome :)
  expect(math.sqrt).toBeDefined()
  expect(math.square).toBeDefined()
  expect(math.diag).toBeDefined()
})

test('can specify what to import, to only retain pieces of the import', () => {
  // 🐨 Import `exercise-helpers/math` again, but
  // pull out only the `sqrt` as mySqrt, and `square` as mySquare
  expect(mySqrt).toBe(math.sqrt)
  expect(mySquare).toBe(math.square)
})

//////// 💯 EXTRA CREDIT ////////
describe.skip('💯 extra credit', () => {
  test('Index import', () => {
    // creating an index.js in a directory is a common pattern thanks to
    // Node's module resolution semantics.
    // There's a module at `./exercise-helpers/index.js`. Import all of that
    // module's exports in an object called `utils`. Then enter your answer
    // to the assertiosn below
    expect(utils.variable1).toBe(/* your answer here */)
    expect(utils.variable2).toBe(/* your answer here */)
    expect(utils.variable3).toBe(/* your answer here */)
    expect(utils.variable4).toBe(/* your answer here */)
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
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Modules&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

/*
eslint
  no-undef: 0,
*/
