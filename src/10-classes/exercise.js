import React from 'react'
import ReactDOM from 'react-dom'

test('has a constructor for initialization', () => {
  // Create an Animal class
  // Add a constructor that takes one param, the name.
  // Set this.name to the name passed in

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBeUndefined()
  expect(dog.name).toBe('Dog')
})

test('constructor can have default param values', () => {
  // Create an Animal class with a constructor
  // Make your class default (using default params) the name to 'Honey Badger'

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBe('Honey Badger')
  expect(dog.name).toBe('Dog')
})

test('can have instance methods', () => {
  // Create an Animal class, pass in the name to the constructor, and add a sayName function to the class definition

  const animal = new Animal()

  expect(animal.sayName).toBeDefined()
  expect(Animal.sayName).toBeUndefined()
  expect(animal.sayName()).toBe('My name is: Honey Badger')
})

test('can have static methods', () => {
  // Create an Animal class, pass in the name to the constructor,
  // and add a create method that takes a name and returns an instance

  const animal = new Animal()

  expect(animal.create).toBeUndefined()
  expect(Animal.create).toBeDefined()
})

test('can extend another class', () => {
  // Create an Animal class
  // Create a Dog class that extends Animal
  // Add sayName to Dog

  const dog = new Dog('Fido')

  expect(dog instanceof Dog).toBe(true)
  expect(dog instanceof Animal).toBe(true)
  expect(Animal.prototype.sayName).toBeUndefined()
  expect(Dog.prototype.sayName).toBeDefined()
})

test('can use property setters and getters', () => {
  // Create an Animal class (don't pass name into constructor)
  // Add property setter for name
  // Add property getter for name

  const animal = new Animal()
  animal.name = 'Dog'
  expect(animal.name).toBe('Dog type of animal')
  animal.name = 'Cat'
  expect(animal.name).toBe('Cat type of animal')
})

//////// 💯 EXTRA CREDIT ////////
describe.skip('💯 extra credit', () => {
  test(`can create React components with classes (though it's not recommended)`, () => {
    // this technically works, but it's not at all how people write React class components
    // 🐨 refactor this to a class.
    function Counter(...args) {
      // 💰 basically calling super(...args)
      React.Component.call(this, ...args)

      // 💰 looks like two class properties to me...
      this.state = {count: 0}
      this.increment = () => this.setState(({count}) => ({count: count + 1}))
    }
    // 💰 this is effectively extending the React.Component class
    Counter.prototype = Object.create(React.Component.prototype)
    Counter.prototype.render = function() {
      return <button onClick={this.increment}>{this.state.count}</button>
    }

    // test that the component works
    // if you really want to write good tests for React components
    // the I suggest you use https://testing-library.com/react
    const container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Counter />, container)
    const button = container.firstChild
    expect(button.textContent).toBe('0')
    button.click()
    expect(button.textContent).toBe('1')
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
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
http://ws.kcd.im/?ws=Modern%20JavaScript&e=classes&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

/*
eslint
  no-new-wrappers: 0,
  react/no-this-in-sfc: 0,
  react/display-name: 0,
*/
