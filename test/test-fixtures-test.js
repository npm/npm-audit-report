'use strict'

const tap = require('tap')
const fixtures = require('./lib/test-fixtures')

tap.test('a test should be able to modify a fixture', function (t) {
  const fixture = fixtures['one-vuln']
  fixture.actions.splice(0, 1)
  delete fixture.muted
  fixture.metadata.vulnerabilities.high = 0
  t.equal(fixture.actions.length, 0)
  t.is('muted' in fixture, false)
  t.same(fixture.metadata.vulnerabilities, {
    info: 0,
    low: 0,
    moderate: 0,
    high: 0,
    critical: 0
  })
  t.end()
})

tap.test('a test should not be able to see how a previous test modified a fixture', function (t) {
  const fixture = fixtures['one-vuln']
  t.equal(fixture.actions.length, 1)
  t.is('muted' in fixture, true)
  t.same(fixture.metadata.vulnerabilities, {
    info: 0,
    low: 0,
    moderate: 0,
    high: 1,
    critical: 0
  })
  t.end()
})
