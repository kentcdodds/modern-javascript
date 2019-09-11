import * as math from './exercise-helpers/math'
import {sqrt as mySqrt, square as mySquare} from './exercise-helpers/math'
import * as utils from './exercise-helpers'

test('can import math', () => {
  expect(math.sqrt).toBeDefined()
  expect(math.square).toBeDefined()
  expect(math.diag).toBeDefined()
})

test('can specify what to import, to only retain pieces of the import', () => {
  expect(mySqrt).toBe(math.sqrt)
  expect(mySquare).toBe(math.square)
})

//////// 💯 EXTRA CREDIT ////////
describe.skip('💯 extra credit', () => {
  test('Index import', () => {
    expect(utils.variable2).toBe(/* your answer here */)
    expect(utils.variable3).toBe(/* your answer here */)
    expect(utils.variable4).toBe(/* your answer here */)
  })
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})

/*
eslint
  no-duplicate-imports: 0,
  import/no-duplicates: 0,
*/
