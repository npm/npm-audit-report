'use strict'

const tap = require('tap')
const Report = require('../')
const Keyfob = require('keyfob')

const fixtures = Keyfob.load({ path: 'test/fixtures', fn: require })

tap.test('it generates a json report', function (t) {
  return Report(fixtures['no-vulns'], {reporter: 'json'}).then((report) => {
    t.match(report.exitCode, 0)
  })
})
