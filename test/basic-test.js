'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')

const fixtures = Keyfob.load({ path: 'test/fixtures', fn: require })

tap.test('it generates a report', function (t) {
  const result = Report(fixtures['update-review'])
  t.resolves(result)
  t.end()
})
