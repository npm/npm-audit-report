'use strict'

const tap = require('tap')
const Report = require('../')
const fixtures = require('./lib/test-fixtures')

tap.test('it generates an quiet report with no vulns', function (t) {
  return Report(fixtures['no-vulns'], {reporter: 'quiet'}).then((report) => {
    t.match(report.report, '')
    t.match(report.exitCode, 0)
  })
})
tap.test('it generates an quiet report with one vuln', function (t) {
  return Report(fixtures['one-vuln'], {reporter: 'quiet'}).then((report) => {
    t.match(report.report, '')
    t.match(report.exitCode, 1)
  })
})
