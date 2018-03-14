'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')

const fixtures = Keyfob.load({ path: 'test/fixtures', fn: require })
const results = Keyfob.load({ path: 'test/results' })

tap.test('it generates a json report', function (t) {
  const result = Report(fixtures['no-vulns'], {reporter: 'json'})
  t.resolveMatch(result, {
    report: results['no-vulns-json'],
    exitCode: 0
  })
  t.end()
})
