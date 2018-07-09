'use strict'

const tap = require('tap')
const Report = require('../')
const fixtures = require('./lib/test-fixtures')

tap.test('it generates a json report', function (t) {
  return Report(fixtures['no-vulns'], {reporter: 'json'}).then((report) => {
    t.match(report.exitCode, 0)
  })
})
