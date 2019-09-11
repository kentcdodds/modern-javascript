test('can use shorthand for property names', () => {
  function createMonster(name, power) {
    // 🐨 Using NEW Object Literal Syntax, return a literal that will allow the tests to pass
    // 💰 here, I'll give you the object structure...
    // return {
    //   type: 'Monster',
    //   name: name,
    //   power: power,
    //   attack: function attack(target) {
    //     return `${this.name} attacked ${target.name}`;
    //   }
    // }
  }

  const godzilla = createMonster('Godzilla', 1000)
  const mechaGodzilla = createMonster('MechaGodzilla', 5000)
  expect(godzilla.name).toBe('Godzilla')
  expect(godzilla.power).toBe(1000)
  expect(godzilla.attack(mechaGodzilla)).toBe('Godzilla attacked MechaGodzilla')
})

test('can use expressions as property names', () => {
  function createCandy(type, description) {
    return {
      tasty: true,
      type,
      // 🐨 add a expression as property name where the property name is:
      // type.toUpperCase() + type.length
    }
  }

  const twixDescription =
    'Twix is a chocolate bar made by Mars, Inc., consisting of biscuit applied with other ' +
    'confectionery toppings and coatings. Twix bars are packaged in pairs, although smaller single bars are available.'
  const twixType = 'twix'
  const snickers = createCandy('twix', twixDescription)
  expect(snickers.tasty).toBe(true)
  expect(snickers.type).toBe(twixType)
  expect(snickers.TWIX4).toBe(twixDescription)
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
http://ws.kcd.im/?ws=Modern%20JavaScript&e=Object%20Literals&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
