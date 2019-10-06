import log from '../pretty-log'

function basicDefaultParam() {
  function randGen(n) {
    // refactor with default parameter to handle n = undefined
    n = n || 10

    return Math.floor(n * Math.random())
  }

  return [randGen(), randGen(4), randGen(0)]
}
// log(basicDefaultParam())

function defaultParamsAsExpressions() {
  function getCandy(kind, size, upperKind, callback) {
    requiredParam('kind', kind)
    requiredParam('size', size)
    upperKind = upperKind === undefined ? kind.toUpperCase() : upperKind
    callback = callback === undefined ? function noop() {} : callback

    const result = {kind, size, upperKind}
    callback(result)
    return result
  }

  function requiredParam(argName, arg) {
    if (arg === undefined) {
      throw new Error(`${argName} is required`)
    }
  }

  return getCandy('twix', 'king')
}
// log(defaultParamsAsExpressions())

function spreadFunctionCall() {
  // return the maximum value in an array of integers
  // use spread operator and Math.max() in refactoring
  const arr = [5, 6, 8, 4, 9]
  return Math.max.apply(null, arr)
}
// log(spreadFunctionCall())

function restParams() {
  function weatherOnDemand() {
    // Use default parameters, argument destructuring
    // and other Array methods, to refactor this
    const allArgs = Array.from(arguments)
    const weatherArray = allArgs[0]
    const cities = allArgs.slice(1)

    return weatherArray.filter(cityData => {
      return cities.indexOf(cityData.city) !== -1
    })
  }

  const availableCities = [
    {city: 'London', temp: 50.1},
    {city: 'Bali', temp: 62.3},
    {city: 'Buenos Aires', temp: 89.8},
    {city: 'San Diego', temp: 58.1},
  ]
  return weatherOnDemand(availableCities, 'Bali', 'London')
}
// log(restParams())

function destructureWithDefaultParams() {
  // Make sure the function takes an object as input
  // This object, would ideally contain radius (r)
  // the x-coordinate (x), and y-coordinate(y)
  // Not all of these fields would always be provided
  // When not provided, r defaults to 1, while x and y defaults to 0
  function computeCircleArea(obj) {
    /* Uncomment this to test what you are actually passing to the function*/
    // console.log(arguments)

    // Remove all references to obj,
    // using param destructuring
    obj = obj || {}
    const radius = obj.r || 1.0
    const xCoordinate = obj.x || 0.0
    const yCoordinate = obj.y || 0.0

    const area = Math.PI * radius * radius

    return `Circle at (${xCoordinate}, ${yCoordinate}), with radius ${radius}, has area = ${area.toFixed(
      2,
    )}`
  }

  return [
    computeCircleArea(),
    computeCircleArea({r: 2}),
    computeCircleArea({r: 3, x: 8, y: 6}),
  ]
}
// log(destructureWithDefaultParams())

/*















SOLUTIONS ARE BELOW














*/

function basicDefaultParamSOLUTION() {
  function randGen(n = 10) {
    return Math.floor(n * Math.random())
  }

  return [randGen(), randGen(4), randGen(0)]
}
// log(basicDefaultParamSOLUTION())

function defaultParamsAsExpressionsSOLUTION() {
  function getCandy(
    kind = requiredParam('kind'),
    size = requiredParam('size'),
    upperKind = kind.toUpperCase(),
    callback = function noop() {},
  ) {
    const result = {kind, size, upperKind}
    callback(result)
    return result
  }

  function requiredParam(argName) {
    throw new Error(`${argName} is required`)
  }

  return getCandy('twix', 'king')
}
// log(defaultParamsAsExpressionsSOLUTION())

function spreadFunctionCallSOLUTION() {
  const arr = [5, 6, 8, 4, 9]
  return Math.max(...arr)
}
// log(spreadFunctionCallSOLUTION())

function restParamsSOLUTION() {
  function weatherOnDemand(weatherArray, ...cities) {
    return weatherArray.filter(cityData => {
      return cities.indexOf(cityData.city) !== -1
    })
  }

  const availableCities = [
    {city: 'London', temp: 50.1},
    {city: 'Bali', temp: 62.3},
    {city: 'Buenos Aires', temp: 89.8},
    {city: 'San Diego', temp: 58.1},
  ]
  return weatherOnDemand(availableCities, 'Bali', 'London')
}
// log(restParamsSOLUTION())

function destructureWithDefaultParamsSOLUTION() {
  function computeCircleArea({r = 1.0, x = 0.0, y = 0.0} = {}) {
    const area = Math.PI * r * r
    return `Circle at (${x}, ${y}), with radius ${r}, has area = ${area.toFixed(
      2,
    )}`
  }

  return [
    computeCircleArea(),
    computeCircleArea({r: 2}),
    computeCircleArea({r: 3, x: 8, y: 6}),
  ]
}

// log(destructureWithDefaultParamsSOLUTION())

/* eslint prefer-rest-params:0 */
