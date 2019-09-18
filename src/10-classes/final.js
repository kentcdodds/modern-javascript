import React from 'react'
import ReactDOM from 'react-dom'

test('has a constructor for initialization', () => {
  class Animal {
    constructor(name) {
      this.name = name
    }
  }

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBeUndefined()
  expect(dog.name).toBe('Dog')
})

test('constructor can have default param values', () => {
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
  }

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBe('Honey Badger')
  expect(dog.name).toBe('Dog')
})

test('can have instance methods', () => {
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }

    sayName() {
      return `My name is: ${this.name}`
    }
  }

  const animal = new Animal()

  expect(animal.sayName).toBeDefined()
  expect(Animal.sayName).toBeUndefined()
  expect(animal.sayName()).toBe('My name is: Honey Badger')
})

test('can have static methods', () => {
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }

    sayName() {
      return `My name is: ${this.name}`
    }

    static create(name) {
      return new Animal(name)
    }
  }

  const animal = new Animal()

  expect(animal.create).toBeUndefined()
  expect(Animal.create).toBeDefined()
})

test('can extend another class', () => {
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
  }

  class Dog extends Animal {
    sayName() {
      return `My name is: ${this.name}`
    }
  }

  const dog = new Dog('Fido')

  expect(dog instanceof Dog).toBe(true)
  expect(dog instanceof Animal).toBe(true)
  expect(Animal.prototype.sayName).toBeUndefined()
  expect(Dog.prototype.sayName).toBeDefined()
})

test('can use property setters and getters', () => {
  class Animal {
    set name(name) {
      this._name = name
    }
    get name() {
      return `${this._name} type of animal`
    }
  }

  const animal = new Animal()
  animal.name = 'Dog'
  expect(animal.name).toBe('Dog type of animal')
  animal.name = 'Cat'
  expect(animal.name).toBe('Cat type of animal')
})

//////// 💯 EXTRA CREDIT ////////
describe('💯 extra credit', () => {
  test(`can create React components with classes (though it's not recommended)`, () => {
    class Counter extends React.Component {
      state = {count: 0}
      increment = () => this.setState(({count}) => ({count: count + 1}))
      render() {
        return <button onClick={this.increment}>{this.state.count}</button>
      }
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

test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
