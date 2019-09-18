import log from '../pretty-log'

function concatArrays() {
  const a = [1, 2, 3]
  const b = [3, 4, 5]
  const c = [[5], [6], [7]]
  // refactor to array spread
  return a.concat(b).concat(c)
}
// log(concatArrays())

function concatArraysComplex() {
  // flatten nested arrays of arbitrary levels of nesting
  // arr can be typically like this: [8, 9, [6, [5, [7], [45, 34, [2]]]]]
  // output shold be [8, 9, 6, 5, 7, 45, 34, 2]
  // use spread operator in place of Array.prototype.concat()
  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  return flatter(arr)

  function flatter(arg) {
    return arg.reduce((acc, item) => {
      if (Array.isArray(item)) {
        return acc.concat(flatter(item))
      }
      return acc.concat([item])
    }, [])
  }
}
// log(concatArraysComplex())

function restArray() {
  // what does this return?
  const a = [1, 2, 3, 4, 5, 6]
  const [one, two, ...rest] = a
  return {one, two, rest}
}
// log(restArray())

function mergeObjects() {
  // refactor to object spread
  const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: 'c from obj1',
    d: {
      e: 'e from obj1',
      f: 'f from obj1',
    },
  }
  const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
      g: 'g from obj2',
      h: 'g from obj2',
    },
  }
  return Object.assign({}, obj1, obj2)
}
// log(mergeObjects())

function restObject() {
  // what does this return?
  const o = {
    username: 'fancy_goat',
    password: 'maaah',
    site: 'https://example.com/goat',
  }
  const {password, ...profile} = o
  return profile
}
// log(restObject())

function spreadString() {
  const string = 'KCD'
  // refactor to use spread rather than .split('')
  return string.split('').join('.')
}
// log(spreadString())

function restString() {
  const greeting = 'Hello world'
  // refactor to use rest rather than .slice(6)
  const splitGreeting = greeting.slice(6)
  return splitGreeting
}
// log(restString())

/*

















SOLUTIONS ARE GIVEN BELOW

















*/

function spreadFunctionCallSOLUTION() {
  const arr = [5, 6, 8, 4, 9]
  return Math.max(...arr)
}
// log(spreadFunctionCallSOLUTION())

function concatArraysSOLUTION() {
  const a = [1, 2, 3]
  const b = [3, 4, 5]
  const c = [[5], [6], [7]]
  // refactor to array spread
  return [...a, ...b, ...c]
}
// log(concatArraysSOLUTION())

function concatArraysComplexSOLUTION() {
  const arr = [8, 9, [6, [5, [7], [45, 34, [[[2]]], [[[[[[[[7]]]]], 90]]]]]]]
  return flatter(arr)

  function flatter(arg) {
    return arg.reduce((acc, item) => {
      return Array.isArray(item) ? [...acc, ...flatter(item)] : [...acc, item]
    }, [])
  }
}
// log(concatArraysComplexSOLUTION())

function mergeObjectsSOLUTION() {
  const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: 'c from obj1',
    d: {
      e: 'e from obj1',
      f: 'f from obj1',
    },
  }
  const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
      g: 'g from obj2',
      h: 'g from obj2',
    },
  }
  return {
    ...obj1,
    ...obj2,
  }
}
// log(mergeObjectsSOLUTION())

function spreadStringSOLUTION() {
  const string = 'KCD'
  return [...string].join('.')
}
// log(spreadStringSOLUTION())

function restStringSOLUTION() {
  const greeting = 'Hello world'
  const [h, e, l, l2, o, space, ...splitGreeting] = greeting
  return splitGreeting
}
// log(restStringSOLUTION())

/*
eslint
  prefer-object-spread: 0,
*/
