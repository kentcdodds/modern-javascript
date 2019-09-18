test('can replace traditional functions', () => {
  // 🐨 refactor this to an arrow function
  function multiply(a, b) {
    return a * b
  }

  expect(multiply(5, 5)).toBe(25)
})

test('can replace traditional functions #2', () => {
  const nums = [2, 5, 10]
  // 🐨 Replace the 'function' in this 'map' call with an arrow function.
  // 💰 the function shouldn't have any braces, parentheses, or 'return' after you are done
  const squares = nums.map(function(num) {
    return num * num
  })

  expect(squares.shift()).toBe(4)
  expect(squares.shift()).toBe(25)
  expect(squares.shift()).toBe(100)
})

test('binds `this` to the eval scope, not the runtime scope', () => {
  // 🐨 Change the person object. One of the functions should become an arrow to
  // allow for 'this' to retain context correctly
  const person = {
    name: 'Olivia',
    greetFriends(friends) {
      return friends.map(function(friend) {
        return `${this.name} greets ${friend}`
      })
    },
  }

  const friendsArray = ['Naomi', 'Jojo', 'Ryan', 'Owen']
  expect(() => person.greetFriends(friendsArray)).not.toThrow()
})

test('can make array filter chains more managable', () => {
  const data = [
    {type: 'Widget', name: 'Sprocket', price: 10.0, qty: 3},
    {type: 'Widget', name: 'Bracket', price: 1.0, qty: 5},
    {type: 'Widget', name: 'Brace', price: 2.5, qty: 1},
    {type: 'Widget', name: 'Sprocket', price: 4.0, qty: 2},
    {type: 'Food', name: 'Gouda', price: 8.75, qty: 4},
    {type: 'Food', name: 'Bacon', price: 3.5, qty: 3},
    {type: 'CD', name: 'Queen Best Hits', price: 5.5, qty: 5},
    {type: 'CD', name: 'Brittney Best Hits', price: 6.25, qty: 3},
    {type: 'CD', name: 'JT Best Hits', price: 2.25, qty: 6},
  ]

  // 🐨 replace all regular functions with arrow functions
  const shoppingList = data
    .filter(function(d) {
      return d.type != 'Widget'
    }) // Remove Widgets
    .filter(function(d) {
      return d.price < 5
    }) // Find only remaining items with price < 5
    .sort(function(a, b) {
      return a.qty - b.qty
    }) // Sort by quantity, desc
    .map(function(d) {
      return d.name
    }) // Pull just the name from each item

  expect(shoppingList.shift()).toBe('Bacon')
  expect(shoppingList.shift()).toBe('JT Best Hits')
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
http://ws.kcd.im/?ws=Modern%20JavaScript&e=arrow%20functions&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
