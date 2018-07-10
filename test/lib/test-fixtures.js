'use strict'

const Keyfob = require('keyfob')

const fixtures = module.exports = Keyfob.load({ path: 'test/fixtures' })
Object.keys(fixtures).forEach(name => {
  const content = fixtures[name]
  Object.defineProperty(fixtures, name, {
    get: () => JSON.parse(content)
  })
})
