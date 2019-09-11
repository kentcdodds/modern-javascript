import log from '../pretty-log'

function shorthandPropertyNames() {
  // refactor with shortening the object literal
  // and removing reptition
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return {
    red: red,
    green: green,
    blue: blue,
  }
}
// log(shorthandPropertyNames())

function methodShorthand() {
  // refactor using method shorthand
  const greeter = {
    sayHi: function sayHi(name) {
      return `Hi ${name}`
    },
  }
  return greeter.sayHi('Nancy')
}
// log(methodShorthand())

function computedPropertyNames() {
  function getCar(make, model) {
    const car = {}
    car[make.toLowerCase()] = model
    return car
  }
  return getCar('Hyundai', 'Accent')
}
// log(computedPropertyNames())

/*













SOLUTIONS ARE BELOW


















 */

function shorthandPropertyNamesSOLUTION() {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return {red, green, blue}
}
// log(shorthandPropertyNamesSOLUTION())

function methodShorthandSOLUTION() {
  const greeter = {
    sayHi(name) {
      return `Hi ${name}`
    },
  }
  return greeter.sayHi('Nancy')
}
// log(methodShorthandSOLUTION())

function computedPropertyNamesSOLUTION() {
  function getCar(make, model) {
    return {
      [make.toLowerCase()]: model,
    }
  }
  return getCar('Hyundai', 'Accent')
}
// log(computedPropertyNamesSOLUTION())

/* eslint object-shorthand:0 */
